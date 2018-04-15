const Discord = require("discord.js");
const timeParser = require("./parseTime.js");
const { token, channel, prefix } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready to edit perms!");
  client.channels.get("channel");
});
//change the numbers with the
//channel you want by using \#channel-name in Discord
client.on('message', message => {
  let channel = message.channel;
  
  setTimeout(() => message.channel.send("@everyone /nThe poll is over!"), parsedTime);

   if (message.content === '${prefix}ping') {
        message.channel.send('Pong.');
    }
});

client.login(token);
