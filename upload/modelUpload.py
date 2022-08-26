import firebase_admin
import tensorflow as tf
from firebase_admin import ml

app = firebase_admin.initialize_app(
    options={
        'storageBucket': 'linux-distro-4u.appspot.com'
    }
)

model = tf.keras.models.load_model("../training/model/LinuxDistro4UPredictor.h5")

try:
    source = ml.TFLiteGCSModelSource.from_keras_model(model, "../training/model/LinuxDistro4UPredictor.tflite")
    print(source.gcs_tflite_uri)
except Exception as error:
    print(error)
