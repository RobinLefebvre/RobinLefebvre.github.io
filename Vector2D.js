/** GENERAL DISCLAIMER - 
 * This file is not designed to be reproduced or distributed, nor is it useable in content of any kind.
 * It should be for the personal use of the owner, as it breaks any and all legislation regarding copyrighted code. 
 * - Credits : p5.js, Processing Foundation, @shiffman, @RobinLefebvre, @ */


class Vector2D
{
    /** Class representing 2D Vectors on a euclidian plane. Currently relies on typeof === "number" inputs.
    * @param  {...any} args : values for the x and y components
    * @todo : constrain to integer values 
    * @todo : create static functionality on Vector2D arrays. 
    * centroid(array) : returns the Vector2D at the center of all the Vectors in the array
    * isWithin(array, vector) : returns a boolean telling whether or not the vector is within the space covered by the array of vectors
    * isClosedShape(array) : returns a boolean telling whether or not the first and last elements on the array are equal
    */
    constructor(...args)
    {
        let x, y;
        if(args[0] instanceof Vector2D)
        {
            x = args[0].x || 0;
            y = args[0].y || 0;
        }
        else if(args[0] instanceof Array)
        {
            x = args[0][0] || 0;
            y = args[0][1] || 0;
        }
        else
        {
            x = args[0] || 0;
            y = args[1] || 0;
        }

        /**@property x {Number} : The x component of the vector  */
        this.x = x || 0;
        /**@property y {Number} : The y component of the vector */
        this.y = y || 0;
    }
    /** Returns a clone of current vector */
    copy()
    {
        return new Vector2D(this.x, this.y);
    }
    /** Equality operation, can take in a Vector2D, an Array, or simply x and y values. */
    equals(...args) 
    {
        let a, b;
        if (args[0] instanceof Vector2D) 
        {
            a = args[0].x || 0;
            b = args[0].y || 0;
        } 
        else if (args[0] instanceof Array) 
        {
            a = args[0][0] || 0;
            b = args[0][1] || 0;
        } 
        else 
        {
            a = args[0] || 0;
            b = args[1] || 0;
        }
        return this.x === a && this.y === b;
    }
    /** Returns the string of the object formatted for console logs. */
    toString()
    {
        return `Vector2D Object : [${this.x}, ${this.y}]`
    }
    /** Returns the Vector's data in an Array format. */
    toArray()
    {
        return [this.x, this.y];
    }
    /** Returns the Vector's data in a JSON format, pass in a boolean to add linebreaks and indentation. */
    toJSON(opts)
    {
        if(!opts){opts = {};}
        let ret;
        let obj = {x : this.x, y:this.y}
        if(opts.simplest === true)
            obj = this.toArray();

        if(opts.beautify === true)
            ret = JSON.stringify(obj, null, 4);
        
        ret = JSON.stringify(obj)
        return ret;
    }
    /** Sets the values of current Vector. Can take in a Vector2D, an Array, or x and y values. */
    set(...args)
    {
        if(args[0] instanceof Vector2D)
        {
            this.x = args[0].x || 0 ;
            this.y = args[0].y || 0 ;
            return this;
        }
        if(args[0] instanceof Array)
        {
            this.x = args[0][0] || 0 ;
            this.y = args[0][1] || 0 ;
            return this;
        }

        this.x = args[0] || 0 ;
        this.y = args[1] || 0 ;
        return this;
    }
    /** Operation of mathematical addition on the current vector. Can take in a Vector2D, an Array, or x and y values. */
    add(...args)
    {
        if(args[0] instanceof Vector2D)
        {
            this.x += args[0].x || 0;
            this.y += args[0].y || 0 ;
            return this;
        }
        if(args[0] instanceof Array)
        {
            this.x += args[0][0] || 0 ;
            this.y += args[0][1] || 0 ;
            return this;
        }
        this.x += args[0] || 0 ;
        this.y += args[1] || 0 ;
        return this; 
    }
    /** Operation of mathematical substraction on the current vector. Can take in a Vector2D, an Array, or x and y values. */
    sub(...args)
    {
        if(args[0] instanceof Vector2D)
        {
            this.x -= args[0].x || 0;
            this.y -= args[0].y || 0;
            return this;
        }
        if(args[0] instanceof Array)
        {
            this.x -= args[0][0] || 0 ;
            this.y -= args[0][1] || 0 ;
            return this;
        }
        this.x -= args[0] || 0;
        this.y -= args[1] || 0;
        return this; 
    }
    /** Operation of mathematical multiplication on the current vector, by a given scalar. */
    mult(value)
    {
        if(!isFinite(value) || typeof value !== 'number') 
        {
            console.warn(` - Vector2D.mult() : \n
            Attempting to multiply ${this.toString()} with non-number or non-finite value.`);
            return this;
        }
        
        this.x *= value;
        this.y *= value;
        return this; 
    }
    /** Operation of mathematical division on the current vector, by a given scalar. */
    div(value)
    {
        if(!isFinite(value) || typeof value !== 'number') 
        {
            console.warn(` - Vector2D.div() : \n
            Attempting to divide ${this.toString()} with non-number or non-finite value.`);
            return this;
        }

        this.x = this.x / value;
        this.y = this.y / value;
        return this;
    }
    /** Returns the magnitude (or length) of the current vector.*/
    mag()
    {
        return Math.sqrt(this.magSq());
    }
    /** Returns the magnitude (or length) of the current vector squared.*/
    magSq()
    {
        let x = this.x;
        let y = this.y;
        return x * x + y * y;
    }
    /** Returns the dot product on the current vector. Can take in a Vector2D, an Array, or x and y values. */
    dot(...args)
    {
        if(args[0] instanceof Vector2D)
            return this.dot(args[0].x, args[0].y);
        if(args[0] instanceof Array)
            return this.dot(args[0][0], args[0][1]);
        // (x || 0) implies that an undefined value for x will default to 0.
        return this.x * (args[0] || 0) + this.y * (args[1] || 0);
    }
    /** Returns the distance between the current vector and the passed Vector2D. */
    dist(vector) 
    {
        if(vector instanceof Vector2D)
            return vector.copy().sub(this.copy()).mag();
        
        console.warn(`- Vector2D.dist : ${this.toString()} tried to get distance to ${vector.toString()}.\n
        Operation Failed, you need to provide a Vector2D as argument.`);
        return false;
    }
    /** Sets the current vector to have a magnitude (or length) of 1.*/
    normalize()
    {
        var len = this.mag();
        if (len !== 0) 
            this.mult(1 / len);

        return this;
    }
    /** Apply Math.floor() on both dimensions of current vector*/
    floor()
    {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    /** Sets the current vector to have a magnitude (or length) bound by the argument.*/
    limit(value)
    {
        let mSq = this.magSq();
        if (mSq > (value * value) ) 
        {
            this.div( Math.sqrt(mSq) )
                .mult( value );
        }
        return this;
    }
    /** Sets the current vector to have values that range from min to max, or from 0 to max.*/
    constrain(...args)
    {
        // We received min & max values
        if(typeof args[1] === 'number')
        {
            if(this.x < args[0])
                this.x = args[0];
            if(this.x > args[1])
                this.x = args[1];
            if(this.y < args[0])
                this.y = args[0];
            if(this.y > args[1])
                this.y = args[1];
            return this;
        }
        // We only received max value
        if(typeof args[0] === 'number')
        {
            if(this.x < 0)
                this.x = 0;
            if(this.x > args[0])
                this.x = args[0];
            if(this.y < 0)
                this.y = 0;
            if(this.y > args[0])
                this.y = args[0];
            return this;
        }
        console.warn(`- Vector2D.constrain \n Operation failed. Check how you used this function.`)
        return false;
    }
    /** Sets the current vector to have a magnitude (or length) equal to the argument.*/
    setMag(value)
    {
        return this.normalize().mult( value );
    }
    /** Returns the angle towards which the vector points. Returns a degree value if we have access to the NobsLibrary tool for angle conversion
     * @todo : insert the radiansToDegrees function as an attribute of Vector2D or something. */
    heading() 
    {
        let angle = Math.atan2(this.y, this.x);
        if (N.functions.radiansToDegrees !== undefined) 
            return N.functions.radiansToDegrees(angle);
        return angle;
    }
    /** Returns the angle between the current vector and the passed Vector2D. */
    angleBetween(vector) 
    {
        var dotmagmag = this.dot(vector) / (this.mag() * vector.mag()); // Dot Product divided by magnitude multiplication
        var angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag))); // Snap values between -1 and 1

        if (N.functions.degreesToRadians !== undefined)
            return N.functions.degreesToRadians(angle);
        return angle;
    }
    /** Sets the values of the current vector as if it had been linearly interpolated according to the arguments. 
     * @param {Vector2D || x, y} args[0...1]: The vector or parameters to lerp towards
     * @param {number} args[2] : The amount of interpolation (constrained between [0-1]) */
    lerp(...args) 
    {
        if (args[0] instanceof Vector2D) 
        {
          return this.lerp(args[0].x, args[0].y, args[1]);
        }

        this.x += (args[0] - this.x) * args[2] || 0;
        this.y += (args[1] - this.y) * args[2] || 0;
        return this;
    }
    /** Sets the values of the current vector as if it had been linearly interpolated according to the arguments. 
     * @param {Vector2D} pivot: The Vector to rotate about
     * @param {Vector2D} point: The Vector to rotate
     * @param {number} args[2] : The amount of interpolation (constrained between [0-1]) */
    static rotateAround(pivot, point, angle)
    {
        let p = point.copy();
        let s = Math.sin(angle);
        let c = Math.cos(angle);

        // Translate to pivot as new "origin"
        p.sub(pivot);

        // Rotation at "origin"
        let x = p.x * c - p.y * s;
        let y = p.x * s + p.y * c;
        let rotated = new Vector2D(x, y);
        // Translate back
        rotated.add(pivot);
        return rotated;
    }
    /** Returns a random unit vector */
    static getRandomUnit()
    {
        let angle = Math.random() * 6.28;
        let length = 1;
        return new Vector2D(length * Math.cos(angle), length * Math.sin(angle));
    }
    /** Returns a random Vector2D */
    static getRandom(min, max)
    {
        let rX = Math.floor(Math.random() * (+max - +min) + +min) + 1
        let rY = Math.floor(Math.random() * (+max - +min) + +min) + 1

        return new Vector2D(rX, rY);
    }
    /** Returns the addition of v1 and v2. Target is the object receiving the values (v1 by default)
     * @todo : make target return a new Vector by default */
    static add(v1, v2, target) 
    {
        if (!target)
          target = v1.copy();
        else 
          target.set(v1);

        target.add(v2);
        return target;
    }
    /** Returns the subtraction of v1 and v2. Target is the object receiving the values (v1 by default)
     * @todo : make target return a new Vector by default */
    static sub(v1, v2, target) 
    {
        if (!target)
          target = v1.copy();
        else 
          target.set(v1);
        
        target.sub(v2);
        
        return target;
    }
    /** Returns the multiplication of v1 and v2. Target is the object receiving the values (v1 by default)
     * @todo : make target return a new Vector by default */
    static mult(v1, v2, target)
    {
        if (!target)
          target = v1.copy();
        else 
          target.set(v1);
        
        target.mult(v2);
        
        return target;
    }
    /** Returns the division of v1 and v2. Target is the object receiving the values (v1 by default)
     * @todo : make target return a new Vector by default */
    static div(v1, v2, target)
    {
        if (!target)
          target = v1.copy();
        else 
          target.set(v1);
        
        target.div(v2);
        
        return target;
    }
    /** Returns the dot product of v1 and v2. */
    static dot(v1, v2) 
    {
        return v1.dot(v2);
    }
    /** Returns the distance between v1 and v2. */
    static dist(v1, v2)
    {
        return v1.dist(v2)
    }
    /** Returns the linear interpolation between v1 and v2. Target is the object receiving the values (v1 by default)
     * @todo : make target return a new Vector by default */
    static lerp(v1, v2, amt, target) 
    {
        if (!target) 
          target = v1.copy();
        else 
          target.set(v1);
    
        target.lerp(v2, amt);
        
        return target;
    }
    /** Returns the magnitude of the passed Vector2D */
    static mag(vector) 
    {
        let x = vector.x;
        let y = vector.y;

        let magSq = x * x + y * y + z * z;
        return Math.sqrt(magSq);
    }
}