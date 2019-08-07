/** GENERAL DISCLAIMER - 
 * This file is not designed to be reproduced or distributed, nor is it useable in content of any kind.
 * It should be for the personal use of the owner, as it breaks any and all legislation regarding copyrighted code. 
 * - Credits : p5.js, Processing Foundation, @shiffman, @RobinLefebvre, @ */

class Camera
{
    /**Constructs a Camera. Can use new Camera(), new Camera(cameraCopy), new Camera(positionVector, zoomValue) */
    constructor(...args)
    {
        this.setScreen();
        if(args[0] instanceof Camera)
        {
            this.setMap(args[0].mapPosition, args[0].zoom);
        }
        else
        {
            let position = args[0] || new Vector2D(0,0);
            let dimension = args[1] || 10000000;
            this.setMap(position, dimension);
        }
    }
    /**Returns a copy of the Camera */
    copy()
    {
        return new Camera(this.mapPosition, this.zoom);
    }
    /**Sets all the needed values in Camera with regards to the current browser page. */
    setScreen()
    {
        let screenX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let halfX = Math.round(screenX / 2);
        let screenY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let halfY = Math.round(screenY / 2);

        this.screenDimensions = new Vector2D(screenX, screenY),
        this.screenCenter = new Vector2D(halfX, halfY)

        let ratioX,ratioY;
        if(screenX > screenY)
        {
            this.screenSize = screenY;
            ratioX = screenX / screenY;
            ratioY = 1;
        }
        else
        {
            this.screenSize = screenX;
            ratioX = 1;
            ratioY = screenY / screenX;
        }
        this.screenRatio = new Vector2D(ratioX,ratioY);
    }
    /**Sets all the needed values in Camera according to a position Vector2D and a zoom value (amount of distance viewed by Camera) */
    setMap(position, zoom)
    {
        this.mapPosition = new Vector2D(position.x,position.y);
        this.zoom = zoom;

        let x = Math.floor(this.zoom * this.screenRatio.x);
        let y = Math.floor(this.zoom * this.screenRatio.y);
        this.mapDimensions = new Vector2D(x, y);

        this.clicksPerPixel = this.zoom / this.screenSize;
    }
    /**Returns the Rectangle shape of the Camera's visible Map. See Shapes.js for Rectangle class. */
    getShape()
    {
        return new Rectangle({position : this.mapPosition, width : this.mapDimensions.x, height : this.mapDimensions.y});
    }
    /**Returns an object with all the Vector2D that compose the boundaries of the Camera's visible Map. */
    getBoundaries()
    {
        let mapTop = this.mapPosition.y - floor(this.mapDimensions.y / 2);
        let mapBottom = this.mapPosition.y + floor(this.mapDimensions.y / 2);
        let mapLeft = this.mapPosition.x - floor(this.mapDimensions.x / 2);
        let mapRight = this.mapPosition.x + floor(this.mapDimensions.x / 2);

        return {
            top : mapTop,
            bottom : mapBottom,
            left : mapLeft,
            right : mapRight,
            topLeft : new Vector2D(mapLeft, mapTop),
            topRight : new Vector2D(mapRight, mapTop),
            bottomLeft : new Vector2D(mapLeft, mapBottom),
            bottomRight : new Vector2D(mapRight, mapBottom),
        }
    }
    /**Takes in a Vector2D, or the x and y values of a Map point. Returns a Vector2D with the translated Screen position. */
    mapToScreen(...args)
    {
        let x, y;
        if(args[0] instanceof Vector2D){ x = args[0].x; y = args[0].y; }
        else { x = args[0]; y = args[1]; }

        let deltaX = x - this.mapPosition.x;
        let deltaY = y - this.mapPosition.y;
        let pixelDeltaX = Math.floor(deltaX / this.clicksPerPixel);
        let pixelDeltaY = Math.floor(deltaY / this.clicksPerPixel);

        let posX = pixelDeltaX + this.screenCenter.x;
        let posY = pixelDeltaY + this.screenCenter.y;
        return new Vector2D(posX, posY);
    }
    /**Takes in a Vector2D, or the x and y values of a Screen point. Returns a Vector2D with the translated Map position. */
    screenToMap(...args)
    {
        let x, y;
        if(args[0] instanceof Vector2D){ x = args[0].x; y = args[0].y; }
        else { x = args[0]; y = args[1]; }

        let deltaX = x - this.screenCenter.x;
        let deltaY = y - this.screenCenter.y;
        let pixelDeltaX = Math.round(deltaX * this.clicksPerPixel);
        let pixelDeltaY = Math.round(deltaY * this.clicksPerPixel);

        let posX = pixelDeltaX + this.mapPosition.x;
        let posY = pixelDeltaY + this.mapPosition.y;
        return new Vector2D(posX, posY);
    }
    /**Takes in a Vector2D, or the x and y values of a Map dimension. Returns a Vector2D with screen pixels. */
    mapDimensionsToScreen(...args)
    {
        let x, y;
        if(args[0] instanceof Vector2D){ x = args[0].x; y = args[0].y; }
        else { x = args[0] || 0; y = args[1] || 0; }


        let xx = Math.floor(x / this.clicksPerPixel) + 1
        let yy = Math.floor(y / this.clicksPerPixel) + 1
        return new Vector2D(xx,yy);
    }
    /**Allows the Camera to follow an anchor's position */
    update()
    {
        if(this.anchor !== undefined && this.anchor.position instanceof Vector2D)
        {
            if(!this.anchor.position.equals(this.mapPosition))
            {
                if(this.anchor.position.dist(this.mapPosition) > this.zoom / 250)
                    this.mapPosition.lerp(this.anchor.position, 0.2);
                else
                {
                    this.mapPosition = this.anchor.position.copy();
                    this.anchor = undefined;
                }
            }
            else
            {
                this.anchor = undefined;
            }
        }
    }
    /**Tells whether a vector is on screen */
    isOnScreen(v)
    {
        let b = this.getBoundaries();
        if(v.x > b.left && v.x < b.right
            && v.y > b.top && v.y < b.bottom)
        {
            return true;
        }
        return false;
    }
    /**Zooms the camera back and forth. Takes in the event from mouseWheel */
    mousewheelZoom(mouseWheelEvent)
    {
        let mouseDelta = mouseWheelEvent.delta
        if(!(mouseDelta < 1) && !(mouseDelta > -1))
            mouseDelta /= 100
        
        let zoomChange = floor(Math.pow(this.zoom, 1/2) * Math.pow(this.zoom, 1/3) ) * mouseDelta;
        this.zoom += zoomChange;
        if(isNaN(this.zoom))
            this.zoom = 10;
        
        this.setMap(this.mapPosition, this.zoom);
        return false;
    }
    /**Drags the Camera around. Takes in the event from mouseDragged */
    mousewheelMove(mouseDraggedEvent)
    {
        // We click the mouseWheel button. event.buttons == 2 is right-click.
        if(mouseDraggedEvent.buttons == 4)
        {
            let speed = Math.ceil(this.clicksPerPixel * 0.5);
            this.mapPosition.x -= mouseDraggedEvent.movementX * speed;
            this.mapPosition.y -= mouseDraggedEvent.movementY * speed;
            this.anchor = undefined;
            return false;
        }
    }
    /**Sets the current Camera's position to the passed arguments. Takes in a Vector2D or x and y values */
    moveTo(...args)
    {
        if(args[0] instanceof Vector2D)
        {
            this.mapPosition = args[0].copy();
        }
        if(args[1] !== undefined && typeof args[0]  === 'number' && typeof args[1] === 'number')
        {
            this.mapPosition = new Vector2D(args[0], args[1]);
        }
    }
}