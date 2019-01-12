class Camera
{
    constructor(anchor)
    {
        ellipseMode(RADIUS);

        // Boundaries in zoom  (clicksPerScreen) and position (clicksPerMap)
        this.zoomBoundaries = {min : 100, max : 8000}
        this.mapBoundaries = {min : 0, max : 4000}

        // Gives the amount of clicks (cm.) to be displayed at startup.
        this.displayedClicks = floor(this.zoomBoundaries.max / 2.5);


        // camera is anchored to an entity with a position on the map (expressed in x - y click from 0 to mapSize)
        this.anchor = anchor || {position : {x: round(this.mapBoundaries.max / 2), y:round(this.mapBoundaries.max / 2)}};
        this.mapPosition = this.anchor.position;

        // Compute other attributes 
        this.setScreenCenterPoint();
        this.setScreenSize();
        this.setMapDimensions();
        this.setClicksPerPixel();
    }

    /** Set this.anchor
     * @param {*} args : Troop or Screen Point -
     * Passing a Troop takes the dimension into account for Tactical Overlay and centers the Camera onto Troop's position. 
     * Passing a Screen Point checks if there is a Troop. */
    setAnchor(args)
    {
        if(args.position && args.dimension)
        {
            this.anchor = args;
            return true;
        }
        else if(args.screenPos && args.troops)
        {
            let p = this.screenPointToMapPoint(args.screenPos.x, args.screenPos.y);
            p = createVector(p.x, p.y);
            args.troops.forEach(t => 
            {
                if( p.copy().dist(createVector(t.position.x, t.position.y)) < t.dimension.x )
                {
                    return this.setAnchor(t);
                }
            })
        }
        return false;
        
    }
    /** Sets this.mapBoundaries and this.zoomBoundaries according to the size arguments.
     * @param {*} size : The clicks size of the map to display. */
    setMap(size)
    {
        this.anchor = undefined;
        this.mapBoundaries.max = size; 
        this.zoomBoundaries.max = floor(size * 2);
        this.centerMapPosition();
    }

    /** Sets this.mapPosition vector according to the center of the mapBoundaries*/
    centerMapPosition()
    {
        this.mapPosition = createVector(round(this.mapBoundaries.max / 2), round(this.mapBoundaries.max / 2));
        this.anchor = {position : {x: round(this.mapBoundaries.max / 2), y:round(this.mapBoundaries.max / 2)}};
    }
    /** Sets this.mapPosition vector according to the current anchor. 
     * If we change anchor, then slide towards the new target. */
    setMapPosition()
    {
        let anch;
        if(this.anchor && this.anchor.position)
        {
            anch = createVector(this.anchor.position.x, this.anchor.position.y);
        }
        else
        {
            anch = this.mapPosition;
        }

        if(this.mapPosition !== anch)
        {
            let d = dist(this.mapPosition.x, this.mapPosition.y, anch.x, anch.y)
            if(d <= 50)
            {
                this.mapPosition = anch;
                if(!this.anchor.dimension) { this.anchor = undefined; }
            }
            else 
            {
                this.mapPosition.x += floor((anch.x - this.mapPosition.x) / 20);
                this.mapPosition.y += floor((anch.y - this.mapPosition.y) / 20)
            }
        }
    }

    /** Set this.screenCenterPoint vector containing the center of the screen in Pixels */
    setScreenCenterPoint()
    {
        let w = round(windowWidth / 2);
        let h = round(windowHeight / 2);
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

    /** Returns a Vector with the map position in clicks from the pixel position on screen
     * @param {*} x : the x position in pixels
     * @param {*} y : the y position in pixels
     */
    screenPointToMapPoint(x,y)
    {
        let deltaX = x - this.screenCenterPoint.x;
        let deltaY = y - this.screenCenterPoint.y;

        let pixelDeltaX = round(deltaX * this.clicksPerPixel );
        let pixelDeltaY = round(deltaY * this.clicksPerPixel );

        let posX =  pixelDeltaX + this.mapPosition.x;
        let posY =  pixelDeltaY + this.mapPosition.y;
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

    getShape(x, y, radius, pointsAmount, randomize )
    {
        let shape = [];
        for(var i = -(PI/pointsAmount); i < TWO_PI - 2 * (PI/pointsAmount); i += TWO_PI / pointsAmount)
        {
            let n = noise(frameCount / 50, i);
            let r = map(n, 0, 1, -radius*randomize, radius * randomize);
            //let r = random(-radius * randomize, radius * randomize);
            
            let v = 
            {
                x :  Math.floor( x + (radius + r) * sin(i) ),
                y:   Math.floor( y + (radius + r) * cos(i) )
            }
            shape.push(v)
        }
        return shape;
    }
    
    /** Determines if an entity is on screen currently (entity can be a point or ellipse) */
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

    /** Displays an Ellipse on top of the canvas
     * @param {*} entity : the entity to be displayed {position} | {position, dimension, coloration, stk, name}
     * @returns Array with position X and Y of the entity on the screen || false
    */
    displayEntity(entity)
    {
        if(this.isOnScreen(entity))
        {
            let pos = this.mapPointToScreenPoint(entity.position.x, entity.position.y);
            let dim;
            if(entity.dimension)
            {
                dim = this.mapDimensionsToScreen(entity.dimension.x, entity.dimension.y);
            }
            if(dim == undefined || dim.x < 2)
            {
                dim = createVector(2,2);
            }

            let str = entity.stk || color(250, 250, 250, 150);
            strokeWeight(2);
            stroke(str);

            let c = entity.coloration || color(0, 0, 0, 150);
            fill(c);

            ellipse(pos.x, pos.y, dim.x, dim.y);
            noStroke();
            
            if(entity.name)
            { 
                textSize(dim.x * 0.8);
                textAlign(CENTER);

                fill(255, 255, 255, 200);
                stroke(0,0,0,175);
                strokeWeight(3);

                text(`${entity.name}`, pos.x, pos.y + dim.x / 8);
                textSize(12);
                textAlign(LEFT);
            }
            return [pos.x, pos.y];
        }
        return false;
    }

    /** Displays a closed polygon on the screen.
     * @param {*} area : Polygon to be displayed {position}
     * @returns Array with position X and Y of the area on the screen || false
    */
    displayArea(area)
    {
        noStroke();
        let ct = color(area.coloration.levels[0], area.coloration.levels[1], area.coloration.levels[2], area.coloration.levels[3])
        let c = ct || color(0,0,0,150);

        fill(c);

        if(area.shape)
        {
            // Compute centroid
            let shapeCentroid = centroid(area);
            shapeCentroid = this.mapPointToScreenPoint(shapeCentroid.x, shapeCentroid.y);
            shapeCentroid = createVector(shapeCentroid.x, shapeCentroid.y);

            // Display and compute average distance between centeroid and points (in pixels)
            let size = 0;
            beginShape();
            area.shape.forEach(point =>
            {
                let p = this.mapPointToScreenPoint(point.x,point.y);
                let d = shapeCentroid.copy().dist( createVector(p.x, p.y) );
                size += d;
                vertex(p.x, p.y);
            })
            endShape();
            size = floor(size / area.shape.length );

            // If the name exists and the shape size is between boundaries, display the name
            if(area.name && size > 20)
            {
                if(size <= 60)
                {
                    this.displayText(shapeCentroid, size / 4, area.name)
                }
                else if(size > 50)
                {
                    this.displayText(shapeCentroid, 15, area.name)
                }
            }
            // Return the pixel position of the shape's centroid, because why not.
            return [shapeCentroid.x, shapeCentroid.y];
        }
        return false;
    }

    /** Displays a focus area around an entity
     * @param {*} entity : possibly a Troop
    */
    displayFocus(entity)
    {
        let pos = this.mapPointToScreenPoint(entity.position.x, entity.position.y);
        let dim = this.mapDimensionsToScreen(entity.dimension.x + 10, entity.dimension.y + 10);
        noFill();

        stroke(0,0,0,255);
        ellipse(pos.x, pos.y, dim.x, dim.y );
        
        stroke(255,255,255,255);
        ellipse(pos.x, pos.y, dim.x - 2, dim.y - 2 );
    }
    displayText(screenPos, fontSize, message)
    {
        fill(255,255,255,175);
        textAlign(CENTER);
        stroke(0,0,0,175);
        strokeWeight(3);
        textSize(fontSize);
        text(`${message}`, screenPos.x, screenPos.y);
        textAlign(LEFT);
    }
    displayMeasure(start)
    {
        let mousePos = this.screenPointToMapPoint(mouseX, mouseY);
        mousePos = createVector(mousePos.x, mousePos.y);

        let d = mousePos.copy().dist(createVector(start.x, start.y));

        let screenStart = this.mapPointToScreenPoint(start.x, start.y);

        fill(255, 255, 255, 200);
        stroke(0,0,0,175);
        strokeWeight(2);

        line(screenStart.x, screenStart.y, mouseX, mouseY);
       
        textSize(12);
        text(`${floor(d/100)} m.`, mouseX + 5, mouseY + 5);
    }

    /** Displays the area around a troop which is equal to its movement */
    displayMovement(troop, otherTroops)
    {
        if(troop.movement > 0)
        {
            let pos = this.mapPointToScreenPoint(troop.position.x, troop.position.y);
            let dim = this.mapDimensionsToScreen(troop.movement, troop.movement);
            let col = color(troop.stk.levels[0],troop.stk.levels[1],troop.stk.levels[2], 50);
            fill(col);
            ellipse(pos.x, pos.y, dim.x, dim.y);
    
            let mouseMapPos = this.screenPointToMapPoint(mouseX, mouseY);
            mouseMapPos = createVector(mouseMapPos.x, mouseMapPos.y);
    
            if(mouseMapPos.copy().dist(createVector(troop.position.x, troop.position.y)) < troop.movement)
            {
                let flag = true;
                otherTroops.forEach(oT =>
                {
                    if(mouseMapPos.copy().dist(createVector(oT.position.x, oT.position.y)) < oT.dimension.x + troop.dimension.x)
                    {
                        flag = false;
                    }
                })
                if(flag)
                    fill(0,250,0,100);
                else
                    fill(250,0,0,100);

                let tDim = this.mapDimensionsToScreen(troop.dimension.x, troop.dimension.y)
                ellipse(mouseX, mouseY, tDim.x, tDim.y);
                stroke(col);
                line(mouseX, mouseY, pos.x, pos.y);
            }
        }
    }

    /** Displays the reach of an action */
    displayAction(troop, action, otherTroops)
    {
        let pos = this.mapPointToScreenPoint(troop.position.x, troop.position.y);
        let dim = this.mapDimensionsToScreen(troop.dimension.x + action.reach, troop.dimension.y +  action.reach) ;
        let col = color(troop.stk.levels[0],troop.stk.levels[1],troop.stk.levels[2],70);

        let aoe = this.mapDimensionsToScreen(action.areaEffect, action.areaEffect);

        let troops =  getAffectedTroops(troop, action, otherTroops)
        troops.forEach(t => 
        {
            let screenTroop = this.mapPointToScreenPoint(t.position.x, t.position.y);
            let dTroop = this.mapDimensionsToScreen(t.dimension.x, t.dimension.y);
            ellipse(screenTroop.x, screenTroop.y, dTroop.x - 2, dTroop.y- 2);
        })
        
        noFill();
        ellipse(mouseX, mouseY, aoe.x, aoe.y);

        stroke(col);
        fill(255,255,255,20);
        ellipse(pos.x, pos.y, dim.x, dim.y);
    }

    /** Displays the whole content of a game */
    displayGame(game)
    {
        if(game.areas)
        {
            for(let i = 0; i < game.areas.length; i++)
            {
                let area = game.areas[i];
                if(area.animated)
                {
                    area.shape = this.getShape(area.position.x, area.position.y, area.radius, area.pointsAmount, area.randomize);
                }
                this.displayArea(area);
            }
        }
        if(game.initiativeOrder)
        {
            for(let i = 0; i < game.initiativeOrder.length; i++)
            {
                let troop = game.initiativeOrder[i];
                this.displayEntity(troop);
            }
        }
        this.setMapPosition();
    }

    /** Displays a set of circles showing distances from the center of the screen */
    displayTacticalOverlay()
    {
        let pos = createVector(this.mapPosition.x, this.mapPosition.y);
        let dim;
        if(this.anchor && this.anchor.dimension)
            dim = this.anchor.dimension.copy();
        else 
            dim = createVector(0,0);

        for(var i = 10; i >=  1; i--) 
        {
            let exp = Math.pow(10, i);// 10 to the power of I, so from 1 to 100000 clicks (times one thousand)
            let max = this.mapDimensionsToScreen(exp + dim.x, exp + dim.y); // Get the pixel values for each of the powers of 10

            let e2 = Math.pow(10, i+1)
            let max2 = this.mapDimensionsToScreen(e2 + dim.x, e2 + dim.y); // Get the pixel values for each of the powers of 10

            let strokeValue = floor(map(max.y, 0, windowHeight, 5, 25)); // Map the pixel value to an alpha value
            stroke(0,0,0,strokeValue * 20);

            let screenCenter = this.screenCenterPoint;
            // For the inner values between each power of 10 (so 2-3-4-5-6-7-8-9)
            for(var a = 10; a >= 0; a--)
            {
                let da = this.mapDimensionsToScreen((a * exp) + dim.x, (a * exp) + dim.y); // Get the pixel dimension
                let dc = this.mapDimensionsToScreen((a * exp), (a * exp)); // Get the pixel dimension
                if(a * Math.pow(10,i) < this.displayedClicks)
                {
                    // If the pixel value of 
                    if(max2.y > height * 0.3)
                    {
                        strokeWeight(1);
                        fill(0,0,0,3);
                        stroke(200,200,200,50);
                        ellipse(screenCenter.x, screenCenter.y, da.x, da.y);
                        line(screenCenter.x , screenCenter.y - da.y, screenCenter.x, screenCenter.y + da.y)
                        line(screenCenter.x - da.x , screenCenter.y, screenCenter.x + da.x, screenCenter.y)

                        if(i > 1)
                        {
                            line(screenCenter.x - dc.x, screenCenter.y - dc.y, screenCenter.x + dc.x, screenCenter.y  - dc.y);
                            line(screenCenter.x - dc.x, screenCenter.y  + dc.y, screenCenter.x + dc.x, screenCenter.y  + dc.y);

                            line(screenCenter.x - dc.x, screenCenter.y  - dc.y, screenCenter.x  - dc.x, screenCenter.y  + dc.y);
                            line(screenCenter.x  + dc.x, screenCenter.y  - dc.y, screenCenter.x  + dc.x, screenCenter.y  + dc.y);
                        }

                        if(a !== 10 && a !== 0)
                        {
                            textSize(12);
                            fill(250,250,250,250);
                            text("" + (a * exp) / 100 + " m", screenCenter.x + 5, screenCenter.y + (da.y) +2)
                            text("" + (a * exp) / 100 + " m", screenCenter.x + 5, screenCenter.y - (da.y) +2)
                            
                        }
                    }
                }
            }
            textSize(13);
            fill(250,250,250,250);
            text(`( ${floor(pos.x)}, ${floor(pos.y)} )`, screenCenter.x + 5, screenCenter.y - 5);
        }

        this.displayMapBorders();
    }

    /** Displays the border of the map according to  this.mapBoundaries */
    displayMapBorders()
    {
        let s = round(this.mapBoundaries.max / 2);
        let dim = this.mapDimensionsToScreen(s, s);
        let pos = this.mapPointToScreenPoint(s, s);
        noFill();
        strokeWeight(8);
        stroke(255,0,0,50);
        rectMode(RADIUS);
        rect(pos.x, pos.y, dim.x, dim.y);
    }

    /** Moves the camera around using arrow keys */
    move()
    {
        let speed = round(this.clicksPerPixel * 2.5);
        if(this.clicksPerPixel < 10000)
        {
            speed = round(speed * 1.5) + 1;
        }
        if(this.clicksPerPixel < 7)
        {
            speed = round(speed  * 1.5) + 1;
        }

        if(keyIsDown(UP_ARROW) && this.mapPosition.y > this.mapBoundaries.min)
        {
            this.mapPosition.y -= speed;
            this.anchor = undefined;
        }

        if(keyIsDown(DOWN_ARROW) && this.mapPosition.y < this.mapBoundaries.max)
        {
            this.mapPosition.y += speed;
            this.anchor = undefined;
        }

        if(keyIsDown(LEFT_ARROW) && this.mapPosition.x > this.mapBoundaries.min)
        {
            this.mapPosition.x -= speed;
            this.anchor = undefined;
        }
        if(keyIsDown(RIGHT_ARROW) && this.mapPosition.x < this.mapBoundaries.max)
        {
            this.mapPosition.x += speed;
            this.anchor = undefined;

        }
    }

    /** Zooms the camera back and forth using mouseWheel */
    zoom(mouseWheelEvent)
    {
        let zoomChange = floor(sqrt(this.displayedClicks) * 10)
        if(this.displayedClicks > 25000)
        {
            zoomChange = floor(zoomChange * (zoomChange * 0.001))
        }
        if(mouseWheelEvent.delta > 0)
        {
            if(this.displayedClicks < this.zoomBoundaries.max)
            {
                this.displayedClicks += zoomChange;
            }
        }
        else 
        {
            if(this.displayedClicks > this.zoomBoundaries.min)
            {
                this.displayedClicks -= zoomChange;
            }
        }

        this.setMapDimensions();
        this.setClicksPerPixel();
        return false;
    }
}