#!/bin/bash
# Downloads all images from Linda Shanson's Wix Media Manager
# Run this on your local machine, then upload the 'wix_images' folder to Google Drive

set -e
mkdir -p wix_images
cd wix_images

echo "Downloading 30 images from Wix..."

download() {
  local name="$1"
  local url="$2"
  if [ -f "$name" ]; then
    echo "  [skip] $name (already exists)"
  else
    echo "  -> $name"
    curl -fsSL "$url" -o "$name" || echo "  [FAILED] $name"
  fi
}

download "frankenstein-in-india_edited_edited.png"  "https://static.wixstatic.com/media/f66659_fb48149ae3964b43bd6693b76a26fc40~mv2.png"
download "a0625993309_10.jpg"                        "https://static.wixstatic.com/media/f66659_c72868d9de58457eb71a41386ef27651~mv2.jpg"
download "20240429164248_001_edited.png"             "https://static.wixstatic.com/media/f66659_90535a39196c4f8fa572d6fbe55ae801~mv2.png"
download "20240429164248_002_edited.jpg"             "https://static.wixstatic.com/media/f66659_3f9ed7aff51647e98374f8ab7db06740~mv2.jpg"
download "20240429164248_001.jpg"                    "https://static.wixstatic.com/media/f66659_a8bb008253fd4d1580dc2e45c90ef855~mv2.jpg"
download "Akram.jpeg"                               "https://static.wixstatic.com/media/f66659_bf6802afc20342019007019b0d2a500e~mv2.jpeg"
download "krishna_edited.jpg"                       "https://static.wixstatic.com/media/f66659_b953b0447b664669a728d2fb07ed3f37~mv2.jpg"
download "krishna.webp"                             "https://static.wixstatic.com/media/f66659_47df316c933f4d6e806bbb6924473025~mv2.webp"
download "hanuman.webp"                             "https://static.wixstatic.com/media/f66659_e9ce2846e65c47e786e924fd48e4339c~mv2.webp"
download "garuda.webp"                              "https://static.wixstatic.com/media/f66659_74873c8bfdd041a7bd81e77fd66c7d97~mv2.webp"
download "shiva-1.webp"                             "https://static.wixstatic.com/media/f66659_75bce1e119294809a68a97e334a389ff~mv2.webp"
download "ganesh.jpg"                               "https://static.wixstatic.com/media/f66659_70fe327d9da343baa6745b588de4eaf3~mv2.jpg"
download "Cover_edited.jpg"                         "https://static.wixstatic.com/media/f66659_48caf2a149c74046b2fe5fc9d2c3ab45~mv2.jpg"
download "Cover.jpg"                                "https://static.wixstatic.com/media/f66659_5a8c92103a0a45718723545366466a03~mv2.jpg"
download "frankenstein-in-india_edited.png"         "https://static.wixstatic.com/media/f66659_55b0976181554244b070b2686926ada7~mv2.png"
download "frankenstein-in-india.png"                "https://static.wixstatic.com/media/f66659_4ae64e7bacae4009a314b465608117d8~mv2.png"
download "IMG_6857_Large_edited.jpg"                "https://static.wixstatic.com/media/f66659_83492725ca484812a2dac97f04e319d7~mv2.jpg"
download "IMG_6857_Large.png"                       "https://static.wixstatic.com/media/f66659_f70a0e967c344d9aa3d258414cf2792a~mv2.png"
download "20240118164642_004_edited.jpg"            "https://static.wixstatic.com/media/f66659_d6f9640060f649e6b3aa61c2e146463c~mv2.jpg"
download "20240314154108_004.jpg"                   "https://static.wixstatic.com/media/f66659_43acf229a03e4fc69c9b134e6735ef94~mv2.jpg"
download "20240314154108_002.jpg"                   "https://static.wixstatic.com/media/f66659_163076e32262433f81835bf085bf99fa~mv2.jpg"
download "20240314154108_003.jpg"                   "https://static.wixstatic.com/media/f66659_5ce1c9a3fd834c3d9a12cc4b5be49451~mv2.jpg"
download "20240314154108_001.jpg"                   "https://static.wixstatic.com/media/f66659_f53984d97c2d4f178e279a02f58662c6~mv2.jpg"
download "20240118164642_003.jpg"                   "https://static.wixstatic.com/media/f66659_7d40d618f38045ababb25916725394d9~mv2.jpg"
download "20240118164642_004.jpg"                   "https://static.wixstatic.com/media/f66659_135d48ac928c45e9ab8e43491565efe3~mv2.jpg"
download "20240118164642_002.jpg"                   "https://static.wixstatic.com/media/f66659_7ec393747c354a7da999c54285d90d9e~mv2.jpg"
download "IMG_7577_edited.jpg"                      "https://static.wixstatic.com/media/f66659_6633e1a8b21b416dbaa73e2844b36bfc~mv2.jpg"
download "IMG_7577.jpg"                             "https://static.wixstatic.com/media/f66659_301fb6cdd8d74501a3fd59f0b8ed7d55~mv2.jpg"
download "Linda.jpg"                                "https://static.wixstatic.com/media/f66659_2d9da96a661248b1890d4a08fd610f70~mv2.jpg"
download "Baluji_and_Linda.jpg"                     "https://static.wixstatic.com/media/f66659_533e4f4fe6d246cabc9628b1922afa88~mv2.jpg"

echo ""
echo "Done! $(ls | wc -l) files in ./wix_images/"
echo "Now upload the 'wix_images' folder to Google Drive."
