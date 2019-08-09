class QuadTreeNode
{
    constructor(position, data)
    {
        this.position = position;
        this.data = data; 
    }
}

class QuadTree
{

    constructor(boundary, n) 
    {
        this.boundary = boundary;
        this.capacity = n;
        this.points = [];
        this.divided = false;
    }
    
    subdivide() 
    {
        let x = this.boundary.position.x;
        let y = this.boundary.position.y;
        let w = Math.floor(this.boundary.width / 2) + 1;
        let h = Math.floor(this.boundary.height / 2) + 1;


        let nePos = new Vector2D(x + w , y - h);
        let ne = new Rectangle({position : nePos, width : w, height : h});
        this.northeast = new QuadTree(ne, this.capacity);

        let nwPos = new Vector2D(x - w, y - h);
        let nw = new Rectangle({position : nwPos, width : w, height : h});
        this.northwest = new QuadTree(nw, this.capacity);

        let sePos = new Vector2D(x + w , y + h);
        let se = new Rectangle({position : sePos, width : w, height : h});
        this.southeast = new QuadTree(se, this.capacity);
        
        let swPos = new Vector2D(x - w, y + h);
        let sw = new Rectangle({position : swPos, width : w, height : h});
        this.southwest = new QuadTree(sw, this.capacity);

        this.divided = true;
    }
    
    insert(point)
    {
        if (!this.boundary.contains(point.position))
            return false;
        if(this.points.length < this.capacity) 
        {
            this.points.push(point);
            return true;
        } 
        else 
        {
            if (!this.divided) 
                this.subdivide();
                
            if(this.northeast.insert(point)) 
                return true;
            else if(this.northwest.insert(point)) 
                return true;
            else if(this.southeast.insert(point))
                return true;
            else if(this.southwest.insert(point)) 
                return true;
        }
    }
    
    query(range, found) 
    {
        if (!found) 
            found = [];
        if (!this.boundary.intersects(range)) 
            return;
        else 
        {
            for (let p of this.points) 
            {
                if (range.contains(p.position)) 
                    found.push(p.data);
            }
            if(this.divided) 
            {
                this.northwest.query(range, found);
                this.northeast.query(range, found);
                this.southwest.query(range, found);
                this.southeast.query(range, found);
            } 
        }
        return found;
    }
     
    display(render, camera, options) 
    {
        if(options === undefined){options = {};}
            
        if(options.displayBoundary)
            this.boundary.display(render, camera);

        if(!options.avoidPoints)
        {
            let pts = this.query(camera.getShape()) || [];
            for(let p of pts) 
            {
                if(typeof p.data.display === "function")
                {
                    p.data.display(render, camera);
                }
                else if(camera.getShape().contains(p.position))
                {
                    let sPos = camera.mapToScreen(p.position);
                    render._pInst.point(sPos.x, sPos.y);
                }
            }
        }
        if (this.divided) 
        {
            this.northeast.display(render, camera, options);
            this.northwest.display(render, camera, options);
            this.southeast.display(render, camera, options);
            this.southwest.display(render, camera, options);
        }
    }
    get length() 
    {
        let count = this.points.length;
        if (this.divided) 
        {
          count += this.northwest.length;
          count += this.northeast.length;
          count += this.southwest.length;
          count += this.southeast.length;
        }
        return count;
    }
}