// 1. Copy and paste your prototype in here and refactor into class syntax.

//class practice
// const CuboidMaker = function(prop) {
//     this.length = prop.length
//     this.width = prop.width
//     this.height = prop.height
//   }

class CuboidMaker {
	constructor(prop) {
		this.length = prop.length;
		this.width = prop.width;
		this.height = prop.height;
	}

	volume = () => this.length * this.width * this.height;
	surfaceArea = () => 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}

class CubeMaker extends CuboidMaker {
	constructor(props) {
		super(props);
	}
	cubeVolume = () => this.length * this.length * this.length;
	cubeSurfaceArea = () => 6 * (this.length * this.length);
}

/* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */

//   CuboidMaker.prototype.volume = () =>  this.length * this.width * this.height;

/* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

//   CuboidMaker.prototype.surfaceArea = () => 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))

/* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */

//   const cuboid  = new CuboidMaker({
//       length: 4,
//       width: 5,
//       height: 5,
//   });

const cuboid = new CuboidMaker({
	length: 4,
	width: 5,
	height: 5
});

const cube = new CubeMaker({
	length: 5,
	width: 8,
	height: 9
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
