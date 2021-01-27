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
    }, 10000);

  });

const embed = new Discord.MessageEmbed()
	.setTitle('FreeLifeRP Bot ist nun Online')
	.setColor('#FF0000');

client.once('ready', async () => {
	const channel = client.channels.cache.get('802564495045951520');
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.first();

		await webhook.send('', {
			username: 'FreeLifeRP',
			avatarURL: 'https://cdn.discordapp.com/attachments/794916993542127616/802535595783749642/FLRP.png',
			embeds: [embed],
		});
	} catch (error) {
		console.error('Bot ist Abgestürzt: ', error);
	}
});
  
//--------------------------------------/\-Embed-/\-------------------------------------//

client.on("message", message => {
    if (message.content === "!Hallo") {
      message.channel.send(`Hallo ${message.author}.`);
    }
  });
  
  client.on("message", message => {
    if (message.content === "!ping") {
      message.channel.send(`Dein Ping ist __**${Math.round(client.ws.ping)}**__ms`);
    }
  });
  
  client.on("message", message => {
    if (message.content === "!Website") {
      message.channel.send("**Coming Soon: Nächste Wartung**");
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

client.login('ODAyNTM2NTMxNDUyNDkzODQ0.YAwqYw.BdmFpwmxvZ6WDjgyFPVPF2ORefQ');

