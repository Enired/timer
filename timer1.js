const input = process.argv.slice(2);

const convertSecToMilliSec = function(input) {
  const convertedTime = input.map((time) => time * 1000);
  return convertedTime;
};

const convertMilliSecToSec = (time) => {
  return time / 1000;
};

const timer = function(input) {
  input = convertSecToMilliSec(input);
  if (input.length !== 0) {
    for (const time of input) {
      if (time > 0) {
        setTimeout(() => {
          return process.stdout.write(`${convertMilliSecToSec(time)}s timer done \x07 \n`);
        }, time);
      }
    }
  }
};


timer(input);