const exec = input => {
  return input.split(/\r?\n/g).reduce((acc, curr) => acc + (Math.floor(Number(curr) / 3) - 2), 0);
};

module.exports = exec;
