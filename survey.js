const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (name) => {
  console.log(`Hello, ${name}!`)
  
  rl.question("What do you like to do on your free time? ", (hobby) => {
    console.log(`You like to ${hobby}. That's awesome!`)
    
    rl.question("What music genre do you like? ", (music) => {
      console.log(`You like to listen to ${music}. That's cool!`)

      rl.question("What is your favourite food? ", (food) => {
        console.log(`You like to eat ${food}. Yum!`)
        
        console.log(`My name is ${name}. My hobby is ${hobby}. I like to listen to ${music}. I like to eat ${food}.`);

        rl.close();
      });
    });
  });
});
  
  
  