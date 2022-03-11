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
      message.reply("something went wrong, your cat is ded");
    }
  }
});

client.login(TOKEN);
