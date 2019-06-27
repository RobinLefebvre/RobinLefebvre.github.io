/** GENERAL DISCLAIMER - 
 * This file is not designed to be reproduced or distributed, nor is it useable in content of any kind.
 * It should be for the personal use of the owner, as it breaks any and all legislation regarding copyrighted code. 
 * - Credits : p5.js, Processing Foundation, @shiffman, @RobinLefebvre, @ */

class Dot 
{
    /** Constructor for Dot class.
     * @param {Vector2D} args.position : the Dot's position on the map
     * @param {Hex} args.circumferenceColor : the Dot's color on display */
    constructor(args)
    {
        if(!args){args = {};}
        /**@property position {Vector2D} : the current position of the Shape. */
        this.position = args.position || new Vector2D(0,0);
        /**@property pivot {Vector2D} : the pivot point of the Shape. */
        this.pivot = args.pivot || this.position.copy();
        /**@property rotation {Number} : the current rotation of the Shape in radians. */
        this.rotation = args.rotation || 0;
        /**@property circumferenceColor {Hex} : the RGBA color value used to display the shape - circumferenceColor */
        this.circumferenceColor = args.circumferenceColor || '#000000FF';
        /**@property areaColor {Hex} : the RGBA color value used to display the shape - area */
        this.areaColor = args.areaColor || '#00000000';
        /**@property radius {Number} : the current radius of the Shape. */
        this.radius = 1;
    }
    getArea()
    { 
        return this.radius; 
    }
    getCircumference()
    { 
        return this.radius; 
    }
    getCenter() 
    { 
        return this.position.copy(); 
    }
    getPoints()
    { 
        return this.position.copy(); 
    }
    /** Returns wether this shape contains the given Vector2D */
    contains(vector)
    { 
        return this.equals(vector); 
    }
    /** Returns wether this shape intersect with the given shape */
    intersects(shape)
    { 
        return shape.contains(this); 
    }
    /** Displays the shape to the given canvas, using the given camera's parameter. See p5Renderer and Camera.js */
    display(render, camera)
    {
        let pos = camera.mapToScreen(this.position);
        render._pInst.stroke(this.circumferenceColor);
        render._pInst.fill(this.areaColor);
        render._pInst.point(pos.x, pos.y);
    }
}

class Triangle extends Dot
{
    /** Rectangle is defined as centered around a position. Base and Height define it. */
    constructor(args)
    {
        super(args);
        this.base = args.base || 100;
        this.height = args.height || 100;
        delete this.radius;
    }
    getArea()
    {
        return this.base * this.height / 2;
    }
    getCircumference()
    { 
        let pts = this.getPoints();
        let s = pts[0].dist(pts[1]);
        s += pts[1].dist(pts[2]);
        s += pts[2].dist(pts[0]);
        return s;
    }
    getCenter()
    { 
        return this.position.copy(); 
    }
    /** Rotates the current Triangle by a given angle in radians */
    rotate(radiansAngle)
    {
        this.rotation += radiansAngle;
    }
    /** Returns an array with the position of the points of the current Rectangle */
    getPoints()
    {
        let h = this.height / 2;
        let b = this.base / 2;

        let center = Vector2D.rotateAround(this.position, this.pivot, this.rotation);
        let top = center.copy().add(0, h);
        let right = center.copy().add(b,-h);
        let left = center.copy().add(-b, -h);

        let ret = 
        [
            Vector2D.rotateAround(this.pivot, top, this.rotation).floor(),//Top
            Vector2D.rotateAround(this.pivot, right, this.rotation).floor(),//Left
            Vector2D.rotateAround(this.pivot, left, this.rotation).floor(),//Right
        ];
        return ret;
    }
    /** Returns an array of arrays with edge start and end */
    getEdges()
    {
        let pts = this.getPoints();
        let ret = 
        [
            [pts[0], pts[1]],
            [pts[1], pts[2]],
            [pts[2], pts[0]],
        ]
        return ret;
    }
    /** Returns wether this shape contains the given Vector2D. Inaccurate for Triangle. Resolves as Rectangle */
    contains(vector)
    {
        return (vector.x >= this.position.x - (this.base) &&
                vector.x <= this.position.x + (this.base)&&
                vector.y >= this.position.y - (this.height) &&
                vector.y <= this.position.y + (this.height));
    
    }
    /** Returns wether this shape intersect with the given range. Inacurrate for Triangle. Resolves as Rectangle */
    intersects(range)
    {
        return !(range.position.x - range.width > this.position.x + this.base ||
                range.position.x + range.width < this.position.x - this.base ||
                range.position.y - range.height > this.position.y + this.height ||
                range.position.y + range.height < this.position.y - this.height);
    }
    /** Displays the shape on the given canvas, using given camera */
    display(render, camera)
    {
        let cameraShape = camera.getShape();
        if(this.intersects(cameraShape))
        {
            // Setup render to use proper coloring
            render._pInst.strokeWeight(1);
            render._pInst.stroke(this.circumferenceColor);
            render._pInst.fill(this.areaColor);

            // Render a single pixel on the screen when need be.
            let dim = camera.mapDimensionsToScreen(this.base, this.height);
            if(dim.x < 1 && dim.y < 1)
            {
                let pos = camera.mapToScreen(this.position)
                render._pInst.point(pos.x, pos.y);
            }

            // Otherwise, render all the points.
            let pts = this.getPoints();
            render._pInst.beginShape();
            for(let i = 0; i < pts.length; i++)
            {
                let p = pts[i];
                let pPos = camera.mapToScreen(p.x, p.y);
                render._pInst.vertex(pPos.x, pPos.y);
            }
            render._pInst.endShape(CLOSE);
        }
    }
}

class Rectangle extends Dot
{
    /** Rectangle is defined as centered around a position. Width and Height define it. */
    constructor(args)
    {
        super(args);
        this.width = args.width || 100;
        this.height = args.height || 100;
        delete this.radius;
    }
    getArea()
    { 
        return this.height * this.width 
    }
    getCircumference()
    { 
        return (2 * this.height) + (2 * this.width) 
    }
    getCenter()
    { 
        return this.position.copy(); 
    }
    /** Rotates the current Rectangle by a given angle in radians */
    rotate(radiansAngle)
    {
        this.rotation += radiansAngle;
    }
    /** Returns an array with the position of the points of the current Rectangle */
    getPoints()
    {
        let h = this.height / 2;
        let w = this.width / 2;

        let center = Vector2D.rotateAround(this.pivot, this.position, this.rotation);

        let tL = center.copy().add(-w, h);
        let tR = center.copy().add(w, h);
        let bR = center.copy().add(w, -h);
        let bL = center.copy().add(-w, -h);

        let ret = 
        [
            Vector2D.rotateAround(this.pivot, tL, this.rotation).floor(),//Top Left
            Vector2D.rotateAround(this.pivot, tR, this.rotation).floor(),//Top Right
            Vector2D.rotateAround(this.pivot, bR, this.rotation).floor(),//Bottom Right
            Vector2D.rotateAround(this.pivot, bL, this.rotation).floor(),//Bottom Left
        ];
        return ret;
    }
    /** Returns an array of arrays with edge start and end */
    getEdges()
    {
        let pts = this.getPoints();
        let ret = 
        [
            [pts[0], pts[1]],
            [pts[1], pts[2]],
            [pts[2], pts[3]],
            [pts[3], pts[0]],
        ]
        return ret;
    }
    /** Returns wether this shape contains the given Vector2D */
    contains(vector)
    {
        return (vector.x >= this.position.x - (this.width) &&
                vector.x <= this.position.x + (this.width)&&
                vector.y >= this.position.y - (this.height) &&
                vector.y <= this.position.y + (this.height));
    
    }
    /** Returns wether this shape intersect with the given shape */
    intersects(range)
    {
        return !(range.position.x - range.width > this.position.x + this.width ||
                range.position.x + range.width < this.position.x - this.width ||
                range.position.y - range.height > this.position.y + this.height ||
                range.position.y + range.height < this.position.y - this.height);
    }
    /** Displays the shape on the given canvas, using given camera */
    display(render, camera)
    {
        let cameraShape = camera.getShape();
        if(this.intersects(cameraShape))
        {
            // Setup render to use proper coloring
            render._pInst.strokeWeight(1);
            render._pInst.stroke(this.circumferenceColor);
            render._pInst.fill(this.areaColor);

            // Render a single pixel on the screen when need be.
            let dim = camera.mapDimensionsToScreen(this.width, this.height);
            if(dim.x < 1 && dim.y < 1)
            {
                let pos = camera.mapToScreen(this.position)
                render._pInst.point(pos.x, pos.y);
            }

            // Otherwise, render all the points.
            let pts = this.getPoints();
            render._pInst.beginShape();
            for(let i = 0; i < pts.length; i++)
            {
                let p = pts[i];
                let pPos = camera.mapToScreen(p.x, p.y);
                render._pInst.vertex(pPos.x, pPos.y);
            }
            render._pInst.endShape(CLOSE);
        }
    }
}
/** Circle is defined as centered around a position. Radius defines it. */
class Circle extends Dot
{

    constructor(args)
    {
        if(args === undefined){ args = {}}
        super(args);
        this.radius = args.radius || 100;
    }

    getArea()
    { 
        return (Math.PI * this.radius * this.radius);
    }

    getCircumference()
    { 
        return (2 * Math.PI * this.radius);
    }

    getCenter()
    { 
        return this.position.copy(); 
    }

    getPoints()
    {
        // I'm sorry, this is just for giggles. Gotta relax, sometimes. 
        console.warn('-Circle.getPoints \nWTF man, why U trying to compute an Infinite thing ?');
        return undefined;
    }

    contains(vector)
    {
        return (this.position.dist(vector) < this.radius)
    }

    intersects(range)
    {
        if(range instanceof Rectangle)
        {
            let xDist = Math.abs(range.position.x - this.position.x);
            let yDist = Math.abs(range.position.y - this.position.y);
            let r = this.radius;
            let w = range.width;
            let h = range.height;
            let edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);
            // No intersection
            if (xDist > (r + w) || yDist > (r + h))
                return false;
            // iIntersection within the circle
            if (xDist <= w || yDist <= h)
                return true;
            // Intersection on the edge of the circle
            return edges <= this.rSquared;
        }
        if(range instanceof Circle)
        {
            return this.position.dist(range.position) < this.radius + range.radius
        }
        
        if(range instanceof Dot )
        {
            return this.position.equals(range.position)
        }
    }

    display(render, camera)
    {
        let cameraShape = camera.getShape();
        if (this.intersects(cameraShape))
        {
            render._pInst.strokeWeight(1);
            render._pInst.stroke(this.circumferenceColor);
            render._pInst.fill(this.areaColor);

            let pos = camera.mapToScreen(this.position);
            let dim = camera.mapDimensionsToScreen(this.radius, this.radius);
            if(dim.x < 1 || dim.y < 1)
                render._pInst.point(pos.x, pos.y);
            else
                render._pInst.ellipse(pos.x, pos.y, dim.x, dim.y); 

        }
    }
}

class Line extends Dot
{
    constructor(...args)
    {
        this.startPosition = args[0] || new Vector2D(0,0);
        this.endPosition = args[1] || new Vector2D(100,100);
    }
}

class Polygon
{
    constructor(...args)
    {
        if(args[0] instanceof Array)
            this.points = args[0];
    }
    
    isClosed()
    {
        let a = this.points[0];
        let b = this.points[this.points.length-1]
        return (a.equals(b))
    }

    contains(vector)
    {
        let magicFunction = (P0, P1, P2) => { return ((P1[0] - P0[0]) * (P2[1] - P0[1]) - (P2[0] - P0[0]) * (P1[1] - P0[1])); }

        let arr = this.points;
        if(!this.isClosed)
            arr[arr.length] = arr[0];

        let wn = 0;
        for (let i = 0; i < arr.length - 1; i++) 
        {
            let vec1 = new Vector2D(arr[i].x, arr[i].y);
            let vec2 = new Vector2D(arr[i + 1].x, arr[i + 1].y);
            if (vec2.y <= vector.y) 
            {
                if (vec1.y > vector.y) 
                {
                    if (magicFunction([vec2.x, vec2.y], [vec1.x, vec1.y], [vector.x, vector.y]) > 0)
                    {
                        wn++;
                    }
                }
            }
            else 
            {
                if (vec1.y <= vector.y) 
                {
                    if (magicFunction([vec2.x, vec2.y], [vec1.x, vec1.y], [vector.x, vector.y]) < 0) 
                    {
                        wn--;
                    }
                }
            }
        }
        return wn != 0;
    }

    display(render, camera)
    {
        let flag = false;
        this.points.forEach(p=>{ if(camera.isOnScreen(p)) flag = true; })

        if(flag)
        {
            render._pInst.beginShape();
            this.points.forEach(p => { let sPoint = camera.mapToScreen(p); vertex(sPoint.x, sPoint.y) } );
            render._pInst.endShape(CLOSE);
        }
    }

    /** Centroid is taking in an set of points and returning the x-y coordinates of the centroid.*/
    centroid()
    {
        if(!this.centre)
        {
            let vertices = this.points
            let centroid = createVector(0, 0);
            let signedArea = 0.0;
            let x0 = 0.0; // Current vertex X
            let y0 = 0.0; // Current vertex Y
            let x1 = 0.0; // Next vertex X
            let y1 = 0.0; // Next vertex Y
            let a = 0.0;  // Partial signed area
    
            // For all vertices except last
            let i = 0
            for (i = 0; i < vertices.length-1; i++)
            {
                x0 = vertices[i].x;
                y0 = vertices[i].y;
                x1 = vertices[i+1].x;
                y1 = vertices[i+1].y;
                a = x0*y1 - x1*y0;
                signedArea += a;
                centroid.x += (x0 + x1)*a;
                centroid.y += (y0 + y1)*a;
            }
    
            // Do last vertex separately to avoid performing an expensive
            // modulus operation in each iteration.
            x0 = vertices[i].x;
            y0 = vertices[i].y;
            x1 = vertices[0].x;
            y1 = vertices[0].y;
            a = x0*y1 - x1*y0;
            signedArea += a;
            centroid.x += (x0 + x1)*a;
            centroid.y += (y0 + y1)*a;
    
            signedArea *= 0.5;
            centroid.x /= (6.0*signedArea);
            centroid.y /= (6.0*signedArea);
            
            this.centre = {x: round(centroid.x), y: round(centroid.y)}
        }
        return this.centre;
    } 

    static getRegular(points, radius, center)
    {
        let ret = [];
        if(!center)
        {
            center = new Vector2D(0,0)
        }
        for(let i =0; i < TWO_PI; i += TWO_PI / points)
        {
            let x = radius * cos(i) + center.x;
            let y = radius * sin(i) + center.y;
            ret.push(new Vector2D(x, y));
        }
        return new Polygon(ret);
    }
}