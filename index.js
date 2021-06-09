let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Listening to Nobody"}}) //this is the bot status code..
})

client.on("guildMemberAdd", member => {
if (member.guild.id === "Your server id here") { //enable your developer mode in your discord settings and right click your server.. then you should see copy id option...
  
  
  client.channels.cache.get("your welcome channel id here").send(`Welcome ${member}!! Thanks for joining the server.. Hope you enjoy your stay here :D`)
}
})

client.login("your top secret token here..")

//Made by Mr. Darkᶠʷ#3683 DONOT share without credits!!
