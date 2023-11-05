const TelegramBot = require('node-telegram-bot-api');

const token = '6294915141:AAFmbmw2KulPy-qd3MOjTLtYu4u8fK8k9OM';
const webAppUrlOne = 'https://luminous-quokka-ea18d1.netlify.app/';
const webAppUrlTwo = 'https://chimerical-stroopwafel-0fd3e2.netlify.app/';
const webAppUrlThree = 'https://tiny-cactus-69a5da.netlify.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text == '/start') {
    await bot.sendMessage(chatId, '💱 Добро пожаловать в виртуальный обменник! 💵  Настоящая версия: MVP v.0.5 (beta 0.1). Доступен архив:', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'prototype 💸', web_app: {url: webAppUrlOne}}, {text: 'alpha v.0.1 💰', web_app: {url: webAppUrlTwo}}],
          [{text: 'IONIX UX+UI 📱', web_app: {url: webAppUrlThree}}]
        ]
      }
    });
  }
  
});