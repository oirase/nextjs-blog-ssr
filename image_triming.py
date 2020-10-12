from PIL import Image
import glob

q = 60
w = 1200
h = 800
trim_h = 220
l = 0
t = h / 2 - trim_h / 2
r = w
b = t + trim_h
entry_dir = "./public/images/storage/layout/"
out_dir = "./public/images/layout/"
image_list = glob.glob(entry_dir + '*.jpg')

def img_resize (entry_file, out_file=None):
    #if out_file is None:
    #    out_file = entry_file
    img = Image.open(entry_file)
    #h = round(img.height * w / img.width)
    img_resize = img.resize((w, h))
    img_resize = img_resize.crop((l, t, r, b))
    img_resize.save(out_dir + out_file, quality=q)

for i, f in enumerate(image_list, 1):
    img_resize(f, 'image{0:02d}.jpg'.format(i))
