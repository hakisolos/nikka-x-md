const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "izumi xd repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\n𝗜𝗭𝗨𝗠𝗜 𝗫𝗗🧚‍♂️

*𝐒͓ɪ͛ᴍ͛ᴩ͛ʟ͛ᴇ᷍ 𝐖ʜ͛ᴀ͛ᴛ͛ꜱ͛ᴀ͛ᴩ͛ᴩ᷍ 𝚳͓ᴜ̟̽ʟ̟ᴛ̽ɪ͛ 𝐃̟͛ᴇ͛ᴠ͛ɪ͛ᴄ͛ᴇ͛ 𝚩͓ᴏ͛ᴛ͛ 𝚩̟ᴀ͛ꜱ͛ᴇ͛ᴅ͛ 𝚯̟ɴ̽ 𝚾̟ᴀ͛ꜱ̟͛ᴇ̟ɴ̟ᴀ͛*🖥️

*𝚪⃯ᴇ͛ᴩ͛ᴏ͛ 𝐔͍ʀ͛ʟ͛* : ````https://github.com/sataniceypz/Izumi-xd````

❒ *𝐅͍ᴏ͛ʀ͛ᴋ͛ 𝚫ɴ͛ᴅ͛ 𝐒͓̽ᴛ͛ᴀ̟ʀ̟*

*𝐅ᴜ͛ʟ͛ʟ ͛𝚯ᴩ͛͢ᴇɴ͛ 𝐒ᴏ͛ᴜ͛ʀ͍͛ᴄ͛ᴇ͛*

➫ *𝐒͢͢ᴇ͛ꜱ͛ꜱ͍͛ɪ͛ᴏ͛ɴ͛* : ````https://qr-izumi.onrender.com````

*𝚻⃯͓ʜ⃯͛ᴀ͛ɴ⃯͛ᴋ͛ꜱ͛*🦋

*➫ 𝐒͍ᴜ͛ᴩ͛ᴩ͛ᴏ͛ʀᴛ̟᷍ 𝐆ʀ͛͢ᴏ͛ᴜ͛ᴩ͍͛*

````https://chat.whatsapp.com/KHvcGD7aEUo8gPocJsYXZe````\n`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
