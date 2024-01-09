    const car = {
      //properties
      merk : 'inova',
      color: 'black',
      maxSpeed: '150',

      //methods
      maju: () => {
        console.log('maju')
      },

      mundur: () => {
        console.log("mundur")
      },

      belok: () => {
      console.log("belok")
      },
    }

    console.log(car.merk);
    console.lo(car.color);
    console.log(`Max speed ${car.maxSpeed} km/jam`);
    car.maju();
    car.mundur();
    car.belok();