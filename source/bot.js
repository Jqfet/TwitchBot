const tmi = require('tmi.js')

const options = {
  options: {
    debug: true,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    //Nombre de usuario del Bot
    username: 'NinjaBot',
    //OAUTH Token 
    password: '12345',
  },
  //Canal a moderar
  channels: ['Ninja'],
};

const client = new tmi.client(options);

client.connect();

//Se le indica que puede gestionar los mensajes del chat
client.on('chat', (target, ctx, message, self) => 
{
 //Checamos si el mensaje enviado en el chat es del mismo Bot
 if(self) return;

 //Se gestionan los comandos
 const chatMessage = message.trim();
 
 if (chatMessage === "Hola" || "hola") {
    client.say(target, `Hola ${ctx.username} :)`);
  } else if (chatMessage === "!suerte") {
    const num = rollDice();
    client.say(target, `${ctx.username}, tu número de suerte es: ${num}`)
  }
});

//Funcion para numero random
function rollDice () {
    const sides = 100;
    return Math.floor(Math.random() * sides) + 1;
  }
  