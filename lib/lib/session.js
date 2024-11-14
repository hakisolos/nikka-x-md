const { File } = require('megajs');
const fs = require('fs');

var prefix = "Nikka-X"; 
var output = "./session/";

async function saveCreds(id) {
  if (!id.startsWith(prefix)) {
    throw new Error(`Prefix doesn't match check if "${prefix}" is correct`);
  }

  var url = `https://mega.nz/file/${id.replace(prefix, "")}`;
  var file = File.fromURL(url);
  await file.loadAttributes();
  var pth = output + "creds.json";
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
  
  var data = await file.downloadBuffer();
  fs.writeFileSync(pth, data);
}
module.exports = saveCreds;