require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

const users = {
  'user-discord-id': {
    name: 'Júlio César',
    email: 'julio.souzam@gmail.com',
  },
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.channel.name !== 'general') {
    return;
  }

  // console.log(msg.content.startsWith('!start'));
  // console.log(msg.content.startsWith('!stop'));

  // console.log(msg.channel.name === 'general', msg.channel.name);
  // console.log(msg.createdAt, msg.createdTimestamp);

  if (msg.content === 'ping') {
    // msg.author.
    const user = users[msg.author.id];
    if (!user) {
      return;
    }

    console.log(user);
    msg.reply('pong');
  }
});

client.login(process.env.BOT_TOKEN);
