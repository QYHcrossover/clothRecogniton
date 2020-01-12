from flask import Flask,render_template
from flask import request
import base64
import json
from PIL import Image
from yolo import YOLO, detect_video
from io import BytesIO
import tensorflow as tf
from database import *
from againstspider import *

yolo = YOLO(image=True)
graph = tf.get_default_graph()

def base64_to_bytes(input_):
	base = input_.split(",")[-1].encode("utf-8")
	return base64.b64decode(base)

def detect_img(yolo,image):
    r_image,result = yolo.detect_image(image)
    return result

app = Flask(__name__)

@app.route("/recognize",methods=["POST","GET"])
def roc():
	global graph
	with graph.as_default():
		if request.method == "POST":
			name = request.form["name"]
			if not eval(request.form["secretsign"]):
				return json.dumps({"status":"failure"},ensure_ascii=False)
			img_bytes = base64_to_bytes(request.form["base64"])
			image = Image.open(BytesIO(img_bytes))
			_,result = yolo.detect_image(image)
			insert_db(result)
			to_return = {"name":name,
			          	 "result":{"kind":"CPD",
			          		       "flaw":result}}
			return json.dumps(to_return,ensure_ascii=False)
		return json.dumps('',ensure_ascii=False)

@app.route("/index.html")
def main():
	return render_template('index.html')

@app.route("/standard.html")
def standard():
	return render_template("standard.html")

@app.route("/statistics.html")
def statistics():
	return render_template("statistics.html")

@app.route("/datas.html")
def datas():
	return render_template("datas.html")

if __name__ == "__main__":
	yolo = YOLO(image=True)
	app.run(port=5001)