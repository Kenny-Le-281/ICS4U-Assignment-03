/**
*
* This class creates a triangle
*
* By:      Kennt Le
* Version: 1.0
* Since:   2024-04-20
*/

export class Triangle {
    // Class variables
    private firstLength: number
    private secondLength: number
    private thirdLength: number

    /** Initializes the function */
    constructor(startOne: number, startTwo: number, startThree: number) {
        this.firstLength = startOne
        this.secondLength = startTwo
        this.thirdLength = startThree
    }

    /** Returns the first length of the triangle's side */
    public get firstLength(): number {
        return this.firstLength
    }

    /** Returns the second length of the triangle's side */
    public get secondLength(): number {
        return this.secondLength
    }

    /** Returns the third length of the triangle's side */
    public get thirdLength(): number {
        return this.thirdLength
    }

    /** Returns the perimeter of the triangle */
    private perimeter(): number {
        let perimeter: number = this.firstLength + this.secondLength + this.thirdLength

        return perimeter
    }

    /** Checks if the triangle is valid */
    public isValid(): boolean {
        const sumOfOneAndTwo: number = this.firstLength + this.secondLength
        const sumOfTwoAndThree: number = this.secondLength + this.thirdLength
        const sumOfOneAndThree: number = this.firstLength + this.thirdLength
        let isValid = true
        if (sumOfOneAndTwo < this.thirdLength
            || sumOfTwoAndThree < this.firstLength
            || sumOfOneAndThree < this.secondLength
        ) {
           isValid = false 
        }

        return isValid
    }

    /** Return the area of the triangle */
    public area(): number {
        let area: number = -1
        if (this.isValid()) {
            const semiPerimeter = this.semiPerimeter()
            area = Math.sqrt(
                semiPerimeter
                * (semiPerimeter - this.firstLength)
                * (semiPerimeter - this.secondLength)
                * (semiPerimeter - this.thirdLength)
            )
        }

        return area
    }

    /** Finds the type of the triangle */
    public getType(): any {
        let triangleType: any = -1
        if (this.isValid()) {
            if (this.firstLength == this.secondLength && this.firstLength == this.thirdLength) {
                triangleType = "Equilateral Triangle"
            } else if (
                this.firstLength == this.secondLength
                || this.secondLength == this.thirdLength
                || this.thirdLength == this.firstLength
            ) {
                triangleType = "Isosceles Triangle"
            } else if (this.firstLength**2 + this.secondLength**2 == this.thirdLength**2) {
                triangleType = "Right Angle Triangle"
            } else {
                triangleType = "Scalene Triangle"
            }
        }

        return triangleType
    }

    /** Finds the semiperimeter of the triangle */
    public semiPerimeter(): number {
        let semiPerimeter: number = -1
        if (this.isValid()) {
            semiPerimeter = this.perimeter() / 2
        }

        return semiPerimeter
    }

    /** Finds the angle of the triangle, in radians */
    public angle(angleNumber: number): number {
        let angle: number = -1
        if (this.isValid()) {
            switch (angleNumber) {
                case 1:
                    angle = Math.acos(
                        (this.secondLength**2 + this.thirdLength**2 - this.firstLength**2)
                        / (2 * this.secondLength * this.thirdLength)
                    )
                    break
                case 2:
                    angle = Math.acos(
                        (this.firstLength**2 + this.thirdLength**2 - this.secondLength**2)
                        / (2 * this.firstLength * this.thirdLength)
                    )
                    break
                case 3:
                    angle = Math.acos(
                        (this.firstLength**2 + this.secondLength**2 - this.thirdLength**2)
                        / (2 * this.firstLength * this.secondLength)
                    )
                    break
            }
        }

        return angle
    }

    /** Finds the height of the triangle */
    public height(sideNumber: number): number {
        let height: number = -1
        if (this.isValid()) {
            switch (sideNumber) {
                case 1:
                    height = (2 * this.area()) / this.firstLength
                    break
                case 2:
                    height = (2 * this.area()) / this.secondLength
                    break
                case 3:
                    height = (2 * this.area()) / this.thirdLength
                    break
            }
        }

        return height
    }

    /** Finds the inner circle radius of the triangle */
    public innerCircleRadius(): number {
        let innerCircleRadius = -1
        if (this.isValid()) {
            innerCircleRadius = this.area() / this.semiPerimeter()
        }
        
        return innerCircleRadius
    }

    /** Finds the circumsicle of the triangle */
    public circumsicleRadius(): number {
        let circumsicle = -1
        if (this.isValid()) {
            circumsicle = this.firstLength / (2 * Math.sin(this.angle(1)))
        }

        return circumsicle
    }
}
