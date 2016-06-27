var Garage = {
  cars: [
    {
      make: 'Porsche',
      model: '918 Spyder',
      color: 'gray'
  },
    {
      make: 'Ferrari',
      model: '458',
      color: 'red'
  },
    {
      make: 'Maserati',
      model: 'Gran Turismo',
      color: 'gray'
    },
    {
      make: 'Audi',
      model: 'R8',
      color: 'Purple'
    },
    {
      make: 'Mclarren',
      model: 'F1',
      color: 'Orange'
    }
  ],
      //Third Car Model function
      getThirdCarModel: function() {
        console.log(this.cars[2].model);
      },

      //Fifth Car Object Object Character model length function
      getFifthCarObjectChar: function() {
        return this.cars[4].model.length;
      },

      //add an Object to Cars array
      addCarsObject: function() {
        var carMake = prompt("What is the car make?");
        var carModel = prompt("What is the car model?");
        var carColor = prompt("What is the car color?");
        garage.cars.push({make: carMake, model: carModel, color: carColor});
      },

      //search Model of a Car in Car Array
    searchCarModel: function() {
        var searchModel = prompt("input a car model")

        for (var i = 0; i < this.cars.length; i++) {
          if (this.cars[i].model.toLowerCase() == searchModel.toLowerCase()) {
            return this.cars[i];
          }
        }
      console.log("Did not find car model");
    }
}

//prototypes

var Garage = function(cars) {
  this.cars = [];
};
Garage.prototype.getCars = function() {
  return this.cars;
}

var Car = function(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

Car.prototype.getMake = function() {
  return this.make;
};

Car.prototype.getModel = function() {
  return this.model;
};

Car.prototype.getColor = function() {
  return this.color;
};
var myGarage = new Garage();
