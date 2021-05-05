const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Hello, ${answer}!`)
  
  rl.question("What do you like to do on your free time? ", (answer) => {
    console.log(`You like to ${answer}. That's awesome!`)
    
    rl.question("What music genre do you like? ", (answer) => {
      console.log(`You like to listen to ${answer}. That's cool!`)

      rl.question("What is your favourite food? ", (answer) => {
        console.log(`You like to eat ${answer}. Yum!`)
        
        rl.close();
        
      });
    });
  });
});
  
  
  