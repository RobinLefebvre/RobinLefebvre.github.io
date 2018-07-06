/** Camera class handles displaying of Entities and Tactical overlay on the p5.js global canvas */
class Camera
{
    /** Constructor for Camera
     * @param {*} anchor  : the entity to be anchored to*/
    constructor(anchor)
    {
        /** this.mapPosition
         *  this.screenCenterPoint
         *  this.screenSize;
         *  this.screenRatio;
         *  this.clicksPerPixel
         */
        // displayedMeters is the distance showed on the smallest screen dimension (default value : 1000 meters over screen height)
        this.displayedClicks = 100000;

        // camera is anchored to an entity with a position on the map (expressed in x - y click from 0 to mapSize)
        this.anchor = anchor;
        this.mapPosition = anchor.position;
        
        //this.screenCenterPoint
        this.setScreenCenterPoint();
        this.setScreenSize();
        this.setMapDimensions();
        this.setClicksPerPixel();
    }

    /** Sets this.mapPosition vector according to the current anchor. If we change anchor, then slide towards the new target.
     */
    setMapPosition()
    {
        let anch = this.anchor.position.copy();
        
        if(this.mapPosition !== anch)
        {
            let anchPos = this.mapPointToScreenPoint(anch.x,anch.y)
            let pos = this.mapPointToScreenPoint(this.mapPosition.x,this.mapPosition.y)
            let di = dist(pos.x, pos.y, anchPos.x, anchPos.y);
            if(di <= windowWidth / 5)
            {
                this.mapPosition = anch;
            }
            else 
            {
                this.mapPosition.x += floor((anch.x - this.mapPosition.x) / 5);
                this.mapPosition.y += floor((anch.y - this.mapPosition.y) / 5)
            }
        }
    }

    /** Set this.screenCenterPoint vector containing the center of the screen in Pixels */
    setScreenCenterPoint()
    {
        let w = floor(windowWidth / 2);
        let h = floor(windowHeight / 2);
        this.screenCenterPoint =  createVector(w, h);
    }

    /** Sets this.screenSize vector with the amount of pixel available on the shortest dimension of the screen (width or height) in Pixels
     *  Sets this.ratio with the ratio between the two dimensions */
    setScreenSize()
    {
        if(windowWidth > windowHeight)
        {
            this.screenSize = windowHeight ;
            this.screenRatio = windowWidth / windowHeight;
        }
        else
        {
            this.screenSize = windowWidth ;
            this.screenRatio = windowHeight / windowWidth;
        }
    }

    /** Sets this.mapDimensions vector with the amount of clicks visible on both dimensions */
    setMapDimensions()
    {
        let w; let h;
        if(windowWidth > windowHeight)
        {
            w = floor(this.displayedClicks * this.screenRatio);
            h = this.displayedClicks;
        }
        else
        {
            w = this.displayedClicks;
            h = floor(this.displayedClicks * this.screenRatio);
        }
        this.mapDimensions = createVector(w,h);
    }
    
    /** Sets this.clicksPerPixels with the amount of clicks there are per Pixel on current screen*/
    setClicksPerPixel()
    {
        this.clicksPerPixel = this.displayedClicks / this.screenSize;
    }
    
    /** Returns a Vector with the clicks position from a given Entity's position on the screen
     * @param {*} x : the x position in pixels
     * @param {*} y : the y position in pixels
     */
    screenPointToMapPoint(x,y)
    {
        let deltaX = x - this.screenCenterPosition.x;
        let deltaY = y - this.screenCenterPosition.y;
        
        let clickDeltaX = floor(deltaX * this.clicksPerPixel);
        let clickDeltaY = floor(deltaY * this.clicksPerPixel);

        let posX =  clickDeltaX + this.screenCenterPoint.x;
        let posY =  clickDeltaY + this.screenCenterPoint.y;
        return createVector(posX, posY);
    }
    
    /** Returns a Vector with the pixel position of a given Entity's position
     * @param {*} x : the x position in clicks
     * @param {*} y : the y position in clicks
     */
    mapPointToScreenPoint(x,y)
    {
        let deltaX = x - this.mapPosition.x;
        let deltaY = y - this.mapPosition.y;
        
        let pixelDeltaX = floor(deltaX / this.clicksPerPixel);
        let pixelDeltaY = floor(deltaY / this.clicksPerPixel);

        let posX =  pixelDeltaX + this.screenCenterPoint.x;
        let posY =  pixelDeltaY + this.screenCenterPoint.y;
        return createVector(posX, posY);
    }

    /** Returns a Vector with the pixel dimension of a given Entity's dimension
     * @param {*} x : the x dimension in clicks
     * @param {*} y : the y dimension in clicks
     */
    mapDimensionsToScreen(x,y)
    {
        let xx = floor(x / this.clicksPerPixel)
        let yy = floor(y / this.clicksPerPixel)

        return createVector(xx,yy);
    }

    /** Displays an entity on top of the canvas
     * @param {*} entity : the entity to be displayed*/
    displayEntity(entity)
    {
        if(this.isOnScreen(entity))
        {
            let pos = this.mapPointToScreenPoint(entity.position.x, entity.position.y);
            let dim;

            if(entity.velocity !== undefined)
            {
                this.displayVelocity(entity);
            }

            if(entity.dimension !== undefined)
            {
                dim = this.mapDimensionsToScreen(entity.dimension.x, entity.dimension.y);
            }
            else
            {
                dim = createVector(2,2);
            }
            if(dim.x < 2)
            {
                dim = createVector(2,2);
            }
            if(entity.coloration !== undefined)
            {
                fill(entity.coloration);
            }
            else 
            {
                fill(0,0,0,25)
            }
            ellipse(pos.x, pos.y, dim.x, dim.y);
        }
    }

    displayVelocity(entity)
    {
        stroke(50,30,255,150);
        strokeWeight(2);
        let futurePos = {   x : entity.position.x + entity.velocity.x, 
                            y : entity.position.y + entity.velocity.y };
        futurePos = this.mapPointToScreenPoint(futurePos.x, futurePos.y);
        let pos = this.mapPointToScreenPoint(entity.position.x, entity.position.y);
        line(pos.x, pos.y,  futurePos.x, futurePos.y);
        stroke(0,0,0);
        strokeWeight(1);

    }

    

    isOnScreen(entity)
    {
        if(entity.dimension === undefined)
        {
            let screenRight = this.mapPosition.x + floor(this.mapDimensions.x / 2);
            let screenLeft  = this.mapPosition.x - floor(this.mapDimensions.x / 2);
            let screenTop    = this.mapPosition.y - floor(this.mapDimensions.y / 2);
            let screenBottom = this.mapPosition.y + floor(this.mapDimensions.y / 2);
            if(entity.position.x < screenRight && entity.position.x > screenLeft)
            {
                if(entity.position.y < screenBottom && entity.position.y > screenTop)
                {
                    return true;
                }
            }
        }
        else 
        {
            let entityRight = entity.position.x + entity.dimension.x;
            let entityLeft  = entity.position.x - entity.dimension.x;
            let screenRight = this.mapPosition.x + floor(this.mapDimensions.x / 2);
            let screenLeft  = this.mapPosition.x - floor(this.mapDimensions.x / 2);
    
            if(entityLeft < screenRight && entityRight > screenLeft)
            {
                let entityTop    = entity.position.y - entity.dimension.y;
                let entityBottom = entity.position.y + entity.dimension.y;
                let screenTop    = this.mapPosition.y - floor(this.mapDimensions.y / 2);
                let screenBottom = this.mapPosition.y + floor(this.mapDimensions.y / 2);
    
                if(entityTop < screenBottom && entityBottom > screenTop)
                {
                    return true;
                }
            }
        }
        return false;
    }

    /** update function is called in draw loop. Should handle camera movement, displaying visible entities, displaying tactical overlay */
    update()
    {
        this.setMapPosition();
        this.displayTacticalOverlay();
        this.displayRegion();
    }

    displayRegion()
    {
        region.entities.forEach(e =>
        {
            camera.displayEntity(e);
        })
    }

    displayTacticalOverlay()
    {
        let pos = createVector(this.mapPosition.x, this.mapPosition.y);
        let dim = createVector(50,50);
        noFill();
        strokeWeight(1);

        for(var i = 0; i <= 4; i++)
        {
            let exp = Math.pow(10,i);
            let max = this.mapDimensionsToScreen((9 * exp * 100) + dim.x, (9 * exp * 100)+ dim.y) ;
            let mapMax = floor(map(max.y, 0, windowHeight * 5, 10, 25));
            stroke(0,0,0,mapMax * 10);
            for(var a = 1; a <= 9; a++)
            {
                let da = this.mapDimensionsToScreen((a * exp * 100) + dim.x, (a * exp * 100)+ dim.y) ;
                let pp = this.mapPointToScreenPoint(pos.x, pos.y)
                if(max.y > 100)
                {
                    ellipse(pp.x, pp.y, da.x, da.y);
                    text("" + a * exp, pp.x - (2 + (i * 4)), pp.y - (da.x) )
                }
            }
        }

    }
}
