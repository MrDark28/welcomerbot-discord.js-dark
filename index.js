@@ -2,14 +2,14 @@ let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Listening to nobody"}}) //this is the bot status code..
  client.user.setPresence({ activity: { name: "Listening to Discord Tricks"}}) //this is the bot status code..
})

client.on("guildMemberAdd", member => {
if (member.guild.id === "Your server id here") { //enable your developer mode in your discord settings and right click your server.. then you should see copy id option...


  client.channels.cache.get("your welcome channel id here").send(`Welcome ${member}!! Thanks for joining the server :D`)
  client.channels.cache.get("your welcome channel id here").send(`Welcome ${member}!! Thanks for joining the server.. Hope you enjoy your stay here :D`)
}
})
