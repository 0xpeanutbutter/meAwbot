require("dotenv").config("./.env");
const TOKEN = process.env.TOKEN;
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { get } = require("snekfetch");

const PREFIX = "+";

client.on("message", (message) => {
  if (message.content.startsWith(PREFIX + "cat")) {
    try {
      get("https://aws.random.cat/meow").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.file,
              name: `cat.${response.body.file.split(".")[4]}`,
            },
          ],
        });
        console.log("random cat picture");
      });
    } catch (e) {
      message.reply("something went wrong, your cat is deed");
    }
  } else if (message.content.startsWith(PREFIX + "dog")) {
    try {
      get("https://dog.ceo/api/breeds/image/random").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.message,
              name: `dog.jpg`,
            },
          ],
        });
        console.log("random dog picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  } else if (message.content.startsWith(PREFIX + "duck")) {
    try {
      get("https://random-d.uk/api/random").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.url,
              name: `duck.jpg`,
            },
          ],
        });
        console.log("random duck picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  }
});

client.login(TOKEN);
