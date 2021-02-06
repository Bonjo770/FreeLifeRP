const Discord = require('Discord.js');

const config = require('./team.js');

const client = new Discord.Client();

const prefix = '_' 

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for( const file of commandFiles){
const command = require(`./commands/${file}`);

     client.commands.set(command.name, command);
}
console.clear();
console.log("Bot Startet Gerade");
var currentdate = new Date(); 
var datetime = "Date Time: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
console.log(datetime)
client.on('message', message => {


  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'help'){

      client.commands.get('help').execute(message, args, Discord);
  }
});

client.on("ready", () => {
  console.log("Bot ist nun Online");
  
  const channel = client.channels.cache.get('802564495045951520');
  channel.send("Template by Bonjo")
  const activities_list = [
    "Bot Startet",
    "_help",
    "FiveM Roleplay Server",
    "FreeLifeRP",
    "FiveM IP: 88.214.58.122:30724",
    "TS³ IP: 185.223.28.61:9206"
  ];

    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]);
      console.log("changed")
    }, 10000);
    setInterval(() => {
      console.clear();
      console.log(`Bot ist Gerade Online`)
      console.log("LEO STINKT")
      console.log(`Dein Ping Ist ${Math.round(client.ws.ping)}ms`)
      var currentdate = new Date(); 
var datetime = "Date Time: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
console.log(datetime)
    }, 1000);

  });
  
//--------------------------------------/\-Embed-/\-------------------------------------//

client.on("message", message => {
    if (message.content === "!Hallo") {
      message.channel.send(`Hallo ${message.author}.`);
    }
  });
  client.on("message", message => {
    if (message.content === "!Datum") {
      var currentdate = new Date(); 
      var datetime = "Das Datum beträgt: " + currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/" 
          + currentdate.getFullYear() + " @ "  
          + currentdate.getHours() + ":"  
          + currentdate.getMinutes() + ":" 
          + currentdate.getSeconds();
      message.channel.send(datetime);
    }
  });
  client.on("message", message => {
    if (message.content === "!BotPing") {
      message.channel.send(`Dein Ping ist __**${Math.round(client.ws.ping)}**__ms`);
    }
  });
  client.on("message", message => {
    if (message.content === "!ping ") {
    
      // It sends the user "Pinging"
            message.channel.send("Pinging...").then(m =>{
              // The math thingy to calculate the user's ping
                var ping = m.createdTimestamp - message.createdTimestamp;
    
              // Basic embed
                var embed = new Discord.MessageEmbed()
                .setAuthor(`Your ping is ${ping}`)
                .setColor("Your Color")
    
                // Then It Edits the message with the ping variable embed that you created
                m.edit(embed)
            });
        }
      });
  client.on("message", message => {
    if (message.content === "!Website") {
      message.channel.send("**Schau bei: ``!ip`` nach**");
    }
  });
  
  client.on("message", message => {
    if (message.content === "!Prefix") {
      message.channel.send("**Your Prefix: ``!``**");
    }
  });
  
  client.on('message', message => {
    if (message.content === 'moin') {
    message.channel.send(`Moin, Mal Unter Uns habe gehöhrt das FreeLifeRP Geil ist.`);
    }
    });
  
  client.on('message', message => {
    if (message.content === '!avatar') {
      message.reply(message.author.displayAvatarURL());
    }
  });

  client.on('message', message => {
    if (message.content === 'Schmutz') {
    message.channel.send('ha, Wer es Sagt ist es Selber');
    }
    });

client.login('ODAyNTM2NTMxNDUyNDkzODQ0.YAwqYw.MZzQBCR8A-7tFYGujKPh4cQxiKI');

setInterval(() => {
  const channel = client.channels.cache.get('795032185693929563')
  // Turn bot off (destroy), then turn it back on
function resetBot(channel) {
  // send channel a message that you're resetting bot [optional]
  channel.send('Retsart...')
  .then(msg => client.destroy())
  .then(() => client.login('ODAyNTM2NTMxNDUyNDkzODQ0.YAwqYw.MZzQBCR8A-7tFYGujKPh4cQxiKIe'))};
}, 8640000);