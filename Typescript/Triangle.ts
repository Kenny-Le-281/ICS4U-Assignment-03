/**
*
* This class creates a triangle
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-04-20
*/

export class Triangle {
	// Class variables
	private sideOne: number
	private sideTwo: number
	private sideThree: number

	// Initializes the function
	constructor(initialOne: number, initialTwo: number, initialThree: number) {
		this.sideOne = initialOne
		this.sideTwo = initialTwo
		this.sideThree = initialThree
	}

	// Returns the triangle's first length
	public get sideOne(): number {
		return this.sideOne
	}

	// Returns the triangle's second length
	public get sideTwo(): number {
		return this.sideTwo
	}

	// Returns the triangle's third length
	public get sideThree(): number {
		return this.sideThree
	}

	// Perimeter of the triangle
	private perimeter(): number {
		let perimeter: number = this.sideOne + this.sideTwo + this.sideThree

		return perimeter
	}

	// Checks if the triangle is valid
	public isValid(): boolean {
		const sumSideOneAndTwo: number = this.sideOne + this.sideTwo;
		const sumSideTwoAndThree: number = this.sideTwo + this.sideThree;
		const sumSideOneAndThree: number = this.sideOne + this.sideThree;
		let isValid: boolean = true;
		
		if (sumSideOneAndTwo < this.sideThree || sumSideTwoAndThree < this.sideOne
			|| sumSideOneAndThree < this.sideTwo) {
			isValid = false
		}

		return isValid
	}

	// Area of the Triangle
	public area(): number {
		if (!this.isValid()) {
			return -1
		}

		const semiPerimeter = (this.sideOne + this.sideTwo + this.sideThree) / 2
		const area = Math.sqrt(
			semiPerimeter * (semiPerimeter - this.sideOne)
			* (semiPerimeter - this.sideTwo) * (semiPerimeter - this.sideThree)
		)

		return area
	}

	// Type of triangle
	public getType(): string {
		if (!this.isValid()) {
			return "Invalid Triangle"
		}

		let triangleType: string;

		if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
			triangleType = "Equilateral Triangle"
		} else if (this.sideOne ** 2 + this.sideTwo ** 2 === this.sideThree ** 2) {
			triangleType = "Right Angle Triangle"
		} else if (
			this.sideOne === this.sideTwo ||
			this.sideTwo === this.sideThree ||
			this.sideThree === this.sideOne
		) {
			triangleType = "Isosceles Triangle"
		} else {
			triangleType = "Scalene Triangle"
		}

		return triangleType
	}

	// Smiperimeter of the triangle
	public semiPerimeter(): number {
		if (!this.isValid()) {
			return -1
		}

		const semiPerimeter = this.perimeter() / 2
		return semiPerimeter
	}

	// Finds the angle of the triangle, in radians 
	public angle(angleNumber: number): number {
		if (!this.isValid()) {
			return -1
		}

		let angle = 0 // Declaration of the angle variable
		let sideA: number;
		let sideB: number;
		let sideC: number;

		// Assign sides based on the angle number
		if (angleNumber === 1) {
			sideA = this.sideOne
			sideB = this.sideTwo
			sideC = this.sideThree
		} else if (angleNumber === 2) {
			sideA = this.sideTwo
			sideB = this.sideThree
			sideC = this.sideOne
		} else if (angleNumber === 3) {
			sideA = this.sideThree
			sideB = this.sideOne
			sideC = this.sideTwo
		} else {
			return -1 // Invalid angle number
		}

		// Calculate angle using law of cosines
		angle = Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC));

		// Ensure angle is within the range [0, π]
		if (isNaN(angle)) {
			return -1; // Invalid input, return -1
		}
		return angle;
	}

	/** Finds the height of the triangle */
	public height(sideNumber: number): number {
		if (!this.isValid()) {
			return -1
		}

	let height = 0

	switch (sideNumber) {
		case 1:
			height = (2 * this.area()) / this.sideOne
			break
		case 2:
			height = (2 * this.area()) / this.sideTwo
			break
		case 3:
			height = (2 * this.area()) / this.sideThree
			break
	}

		return height
	}

	// Inner circle radius of the triangle
	public innerCircleRadius(): number {
		if (!this.isValid()) {
			return -1
		}
			let innerCircleRadius = 0
			innerCircleRadius = this.area() / this.semiPerimeter()

		return innerCircleRadius
	}

	/** Finds the circumsicle of the triangle */
	public circumsicleRadius(): number {
		if (!this.isValid()) {
			return -1
		}

		let circumsicle = 0
		circumsicle = this.sideOne / (2 * Math.sin(this.angle(1)))

		return circumsicle
	}
}
