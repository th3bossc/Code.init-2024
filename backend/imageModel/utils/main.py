import numpy as np
import cv2
import os

DIR = r"C:/Users/dilji/OneDrive/Documents/CodingFiles/codeInit/backend/imageModel/utils"
PROTOTEXT = os.path.join(DIR, r"models/colorization_deploy_v2.prototxt")
MODEL = os.path.join(DIR, r"models/colorization_release_v2.caffemodel")
POINTS = os.path.join(DIR, r"models/pts_in_hull.npy")

def colorize(image_path):
    image_path = os.path.join(DIR, image_path)
    print("[INFO] Loading model...")
    net = cv2.dnn.readNetFromCaffe(prototxt=PROTOTEXT, caffeModel=MODEL)
    pts = np.load(POINTS)
    
    class8 = net.getLayerId("class8_ab")
    conv8 = net.getLayerId("conv8_313_rh")
    pts = pts.transpose().reshape(2, 313, 1, 1)
    net.getLayer(class8).blobs = [pts.astype("float32")]
    net.getLayer(conv8).blobs = [np.full([1, 313], 2.606, dtype="float32")]
    
    print("[INFO] Loading image...")
    image = cv2.imread(image_path)
    scaled = image.astype("float32") / 255.0
    lab = cv2.cvtColor(scaled, cv2.COLOR_BGR2LAB)
    
    resized = cv2.resize(lab, (224, 224))
    L = cv2.split(resized)[0]
    L -= 50
    
    print("[INFO] Colorizing image...")
    net.setInput(cv2.dnn.blobFromImage(L))
    ab = net.forward()[0, :, :, :].transpose((1, 2, 0))
    ab = cv2.resize(ab, (image.shape[1], image.shape[0]))
    L = cv2.split(lab)[0]
    colorized = np.concatenate((L[:, :, np.newaxis], ab), axis=2)
    colorized = cv2.cvtColor(colorized, cv2.COLOR_LAB2BGR)
    colorized = np.clip(colorized, 0, 1)
    
    colorized = (255*colorized)
    colorized = colorized.astype(np.uint8)
    
    # cv2.imshow("Original", image)
    # cv2.imshow("Colorized", colorized)
    
    # cv2.waitKey(0)
    
    cv2.imwrite(os.path.join(DIR, "colorized.jpg"), colorized)
    return os.path.join(DIR, "colorized.jpg")


def save_image(image_data, path):
    with open(os.path.join(DIR,path), "wb") as f:
        for chunk in image_data.chunks():
            f.write(chunk)
        f.close()
    return path

def delete_image(path):
    os.remove(os.path.join(DIR, path))