// random integer from 1 to 10

const randomInt = (min  = 1 , max =  10) => {
      return Math.floor( Math.random() * max ) + min
}

export { randomInt } ;

