const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "haki",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐄𝐘𝐏𝐙\nORG:Eypz\nTEL;type=CELL;type=VOICE;waid=917994489493:917994489493\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝚗𝚒𝚔𝚔𝚊 𝚖𝚍",
      'body': "𝚑𝚊𝚔𝚒",
      'thumbnailUrl': "https://files.catbox.moe/t46ul1.png",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/2349112171078",
      'sourceUrl': "http://wa.me/2349112171078",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
