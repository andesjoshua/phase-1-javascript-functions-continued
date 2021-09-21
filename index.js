// Your code here
const saturdayFun = (activity = 'roller-skate') => {
        return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (work = 'go to the office') => {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = (visualFlare = '*') => {
    return function(emphatic = 'a hard worker') {
        return `You are ${visualFlare}${emphatic}${visualFlare}!`
    };

}
// function demoChain(name) {
//     const part1 = "hi";
//     return function () {
//       const part2 = "there";
//       return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       };
//     };
//   }
  
//   demoChain("Dr. Stephen Strange")()();