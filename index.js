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
              name: `cat.jpg`,
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
  } else if (message.content.startsWith(PREFIX + "waifu")) {
    try {
      get("https://api.waifu.pics/sfw/waifu").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.url,
              name: `waifu.jpg`,
            },
          ],
        });
        console.log("random waifu picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  } else if (message.content.startsWith(PREFIX + "fox")) {
    try {
      get("https://randomfox.ca/floof").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.image,
              name: `fox.jpg`,
            },
          ],
        });
        console.log("random fox picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  } else if (message.content.startsWith(PREFIX + "food")) {
    try {
      get("https://foodish-api.herokuapp.com/api").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.image,
              name: `food.jpg`,
            },
          ],
        });
        console.log("random food picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  } else if (message.content.startsWith(PREFIX + "meme")) {
    try {
      get("https://meme-api.herokuapp.com/gimme").then((response) => {
        message.channel.send({
          files: [
            {
              attachment: response.body.url,
              name: `meme.jpg`,
            },
          ],
        });
        console.log("random meme picture");
      });
    } catch (e) {
      message.reply("something went wrong");
    }
  }
  if (message.content.startsWith(PREFIX + "help")) {
    try {
      message.reply(
        "Prefix : + \n" +
          "cat for cat pictures \ndog for dog \nfox for fox \nmeme for reddit memes \nfood for fooods \nwaifu for anime waifus \nduck for duck pics "
      );
    } catch (e) {
      message.reply("something went wrong, your cat is deed");
    }
  }
});

client.login(TOKEN);
