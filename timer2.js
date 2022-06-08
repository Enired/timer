const { stdin, stdout } = require('process');
const readline  = require('readline');
const { REPL_MODE_STRICT } = require('repl');
const rli = readline.createInterface({input : stdin, output :stdout});

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => {
  rli.setPrompt("How many seconds would you like to set the timer for? ")
  rli.prompt();
  rli.on('line', (seconds) => {
  
    if(Number(seconds) > 0 && Number(seconds) <= 9){
      console.log(`Setting timer for ${seconds} seconds`)
      setTimeout(() => {
        stdout.write(`\n`)
        stdout.write(`Timer for ${seconds} seconds complete \x07 \n`)
        rli.prompt();
      }, seconds*1000)
    }  
    else if(!Number.isNaN(seconds)){
      console.log('Please only enter numbers between 1-9')
    }
    else{
      console.log('Error, you did not input a number.')
    }
    rli.prompt();
  })

  stdin.on('data', (key)=> {
    if(key === 'b'){
      stdout.write(`\x07`)
    }
  })

  rli.on('SIGINT', () => {
    stdout.write('\n\n-----Thank you for using this timer. Goodbye.-----\n \n');
    process.exit()
  })
  
}

const something = () => {
  stdin.on('data', (key)=>{
    stdout.write(key);

  })
}

timer()
// something();
