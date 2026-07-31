import os
import requests

from flask import Flask

app = Flask(__name__)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=4148, debug=True)