const Discord = require('Discord.js');

const client = new Discord.Client();

const prefix = '!' 

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comming/').filter(file => file.endsWith('.js'));
for( const file of commandFiles){
const command = require(`./comming/${file}`);

     client.commands.set(command.name, command);
}

client.on('message', message => {


  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'demnächst'){

      client.commands.get('demnächst').execute(message, args, Discord);
  }
});

client.login('ODAyNTM2NTMxNDUyNDkzODQ0.YAwqYw.BdmFpwmxvZ6WDjgyFPVPF2ORefQ');