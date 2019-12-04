const calculate = (instructions) => {
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
}

const exec = input => {
  const original = input.split(',').map(Number);
  let instructions = [...original];
  for (let noun = 0; noun <= 99; noun++) {
    instructions[1] = noun;
    for (let verb = 0; verb <= 99; verb++) {
      instructions[2] = verb;
      const result = calculate(instructions);
      if (result === 19690720) {
        return 100 * instructions[1] + instructions[2];
      }
      instructions = [...original];
      instructions[1] = noun;
    }
  }
};

module.exports = exec;
