import os
import glob
from PIL import Image

q = 75
w = 270
h = 202

entry_dir = "./public/images/article/"
out_dir = "./public/images/resize/"
files = glob.glob(entry_dir + '/*.jpg')

for i, f in enumerate(files, 1):
  img = Image.open(entry_dir + 'image{0:02d}.jpg'.format(i))
  img_resize = img.resize((w, h), Image.BICUBIC)
  img_resize.save(out_dir + 'image{0:02d}.jpg'.format(i), quality=q)

