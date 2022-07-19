// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    var distance = (someValue-42);
    return Math.abs(distance);
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  var distance= distanceFromHqInBlocks(someValue)*264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distance;
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    var distance = Math.abs(start-destination)*264;
    return distance;
     }

     function calculatesFarePrice(start, destination) {
        //returns the fare for the customer
        var distance=distanceTravelledInFeet(start, destination);
        if (distance<=400)  return 0;

        if ((distance >400)&&(distance<2000)) return (distance-400) *.02;

        if ((distance >2000)&&(distance<2500)) return 25;

        if (distance>2500) return 'cannot travel that far';

 

      }

