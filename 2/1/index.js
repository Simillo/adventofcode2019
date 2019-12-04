const exec = input => {
  const instructions = input.split(',').map(Number);
  instructions[1] = 12;
  instructions[2] = 2;

  for (let index = 0; index < instructions.length; index += 4) {
    const instruction = instructions[index];
    let res;
    switch (instruction) {
      case 1:
        res = instructions[instructions[index + 1]] + instructions[instructions[index + 2]];
        break;
      case 2:
        res = instructions[instructions[index + 1]] * instructions[instructions[index + 2]];
        break;
      case 99:
        return instructions[0];
      default:
        break;
    }
    instructions[instructions[index + 3]] = res;
  }
};

module.exports = exec;
