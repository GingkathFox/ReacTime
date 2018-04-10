const Discord = require("discord.js");
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
  let roles = message.guild.roles;
  //if (remainTime == 0) {
    // overwrites 'ADD_REACTIONS' role, only on this specific channel
    channel.overwritePermissions(
        testRole,
        { 'ADD_REACTIONS': false },
        // optional 'reason' for permission overwrite
        'Timer over!'
    )
    // handle responses / errors
    .then(console.log)
    .catch(console.log);
       }  //function closing
    }  //if closing

   if (message.content === '${prefix}ping') {
        message.channel.send('Pong.');
    }
});

client.login(token);
