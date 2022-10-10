const sharp = require('sharp')
const glob = require('glob');
const path = require('path');
//const sharp = require('sharp');
const src = "public/assets/images/chapters/**/*.png"

const convertTograyscale = () => {
  //sharp('public/assets/images/chapters/1/arms.jpg')
  let files = glob.sync(src)
  //console.log(files)
  files.forEach((file) => {
    let filename = path.basename(file);
    const image = sharp(file);
    //console.log(path.dirname(file))
    // Convert to WebP via Sharp's inferencing automatically of extensions
    image
      .toFile(`${path.dirname(file)}/${filename.replace('png', 'jpg')}`)
      .catch((err) => {
        console.log(err);
      });
  });

  //.grayscale() // or .greyscale()
  //.toFile(__dirname + '/grayscale_robo.jpg')
}

convertTograyscale()