    //object
    function car(merk, color, maxSpeed) {
      this.merk = merk;
      this.color = color;
      this.maxSpeed = maxSpeed;
    }
    //method
    car.prototype.maju = function() {
      console.log(`${this.merk} ${this.color} maju`)
    }

    car.prototype.mundur = function() {
    console.log(`${this.merk} ${this.color} mundur`)
    }

    car.prototype.belok = function() {
    console.log(`${this.merk} ${this.color} belok`)
    }

    //constructor function
    const car1 = new car('toyota', 'black', 100);
    const car2 = new car('bmw', 'white', 150)

    console.log(car1);
    console.log(car2);
    
    car1.maju();
    car2.maju();