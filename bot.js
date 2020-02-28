const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("message", (message) => {
if (message.author.bot) return;
  if (message.content.toLowerCase().includes("dobranoc")) {
	const user = message.author;  
  message.channel.send("Dobranoc " + "<@" + message.author.id + ">");
  };
  if (message.content.toLowerCase().includes("pyrsk")) {
	const user = message.author;  
  message.channel.send("Pyrsk " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("kto to przemek")) {
	const user = message.author;  
  message.channel.send("Ja Przemek. Powitać.");
  };
  if (message.content.toLowerCase().includes("witajcie")) {
	const user = message.author;  
  message.channel.send("Witajcie " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("mòjn")) {
	const user = message.author;  
  message.channel.send("Mòjn " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("do zaś")) {
	const user = message.author;  
  message.channel.send("Do zaś " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("do zas")) {
	const user = message.author;  
  message.channel.send("Do zaś " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("zitájta")) {
	const user = message.author;  
  message.channel.send("Zitájta " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("dobri dzéń")) {
	const user = message.author;  
  message.channel.send("Dobri dzéń " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("do ùzdrzeniô")) {
	const user = message.author;  
  message.channel.send("Do ùzdrzeniô " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("witajta")) {
	const user = message.author;  
  message.channel.send("Witajta " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("witam")) {
	const user = message.author;  
  message.channel.send("Witam " + "<@" + message.author.id + ">!");
  };
   if (message.content.toLowerCase().includes("żegnaj")) {
	const user = message.author;  
  message.channel.send("Żegnaj " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("zegnaj")) {
	const user = message.author;  
  message.channel.send("Żegnaj " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("zegnam")) {
	const user = message.author;  
  message.channel.send("Także żegnam " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("żegnam")) {
	const user = message.author;  
  message.channel.send("Także żegnam " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("do widzenia")) {
	const user = message.author;  
  message.channel.send("Do widzenia " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("do zobaczenia")) {
	const user = message.author;  
  message.channel.send("Do zobaczenia " + "<@" + message.author.id + ">!");
  };
  if (message.content.toLowerCase().includes("dobry wieczór")) {
	const user = message.author;  
  message.channel.send("Dobry wieczór " + "<@" + message.author.id + ">.");
  };
  if (message.content.toLowerCase().includes("dobry wieczor")) {
	const user = message.author;  
  message.channel.send("Dobry wieczór " + "<@" + message.author.id + ">.");
  };
});

client.login(config.token)