import firebase_admin
from firebase_admin import ml

app = firebase_admin.initialize_app(
    options={
        'storageBucket': 'gs://linux-distro-4u.appspot.com'
    }
)

