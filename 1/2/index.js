const exec = input => {
  const calculate = (value, sum = 0) => {
    const result = Math.floor(value / 3) - 2;
    
    if (result <= 0) {
      return sum;
    }

    return calculate(result, sum + result);
  };

  return input.split(/\r?\n/g).reduce((acc, curr) => acc + calculate(Number(curr)), 0);
};

module.exports = exec;
