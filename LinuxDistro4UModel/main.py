#------------------------------ IMPORTS ------------------------------#
import numpy as np
import pandas as pd
import tensorflow as tf
import tensorflowjs as tfjs
from sklearn.preprocessing import LabelBinarizer

#------------------------------ DATA ------------------------------#
trainingData = pd.read_csv('C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U/LinuxDistro4U.csv')
testingData = pd.read_csv('C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U/LinuxDistro4UTestData.csv')
numberOfFeatures = 52

features = trainingData.iloc[:, :numberOfFeatures]
distros = trainingData.iloc[:, numberOfFeatures:]
distrosOneHot = pd.get_dummies(distros)
testFeatures = testingData.iloc[:, :numberOfFeatures]
testDistros = testingData.iloc[:, numberOfFeatures:]
testDistrosOneHot = pd.get_dummies(testDistros)

# for i in range(10):
#     print(f"\n\n{testDistrosOneHot.iloc[i]}")


#------------------------------ MODEL ------------------------------#
distroPredictor = tf.keras.models.Sequential(
    [
        tf.keras.layers.Dense(2016, activation="relu", input_shape=(numberOfFeatures,)),
        tf.keras.layers.Dense(1008, activation="relu"),
        tf.keras.layers.Dense(504, activation="relu"),
        tf.keras.layers.Dense(252, activation="relu"),
        tf.keras.layers.Dense(126, activation="relu"),
        tf.keras.layers.Dense(44, activation="softmax")
    ]
)

distroPredictor.compile(loss="categorical_crossentropy", optimizer="adam", metrics=["accuracy"])
distroPredictor.summary()


#------------------------------ TRAINING ------------------------------#
distrosPredictorHistory = distroPredictor.fit(features, distrosOneHot, batch_size=44, epochs=8)
tfjs.converters.save_keras_model(distroPredictor, 'C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U/LinuxDistro4UPredictor')

#------------------------------ PREDICTION ------------------------------#
if __name__ == '__main__':
    testDistros = testDistros.to_numpy()
    testDistrosOneHot = testDistrosOneHot.to_numpy()

    prediction = distroPredictor.predict(testFeatures)

    for i in range(0, 44):
        p = np.where(prediction[i] == prediction[i].max())[0][0]

        print(f"Actual Distro Number: {i}")
        print(f"Predicted Distro Number: {p}")
        print(f"Predicted Distro Features: {testFeatures.iloc[p].to_numpy().reshape((1, 52))}")
        print(f"Actual Distro Features: {testFeatures.iloc[i].to_numpy().reshape((1, 52))}")
        print(f"Predicted Distro: {testDistros[p]}")
        print(f"Actual Distro: {testDistros[i]}")
        print("Predictions Weightage: ", prediction[p])
        print("Actual Weightage: ", testDistrosOneHot[i])
        print("\n\n\n")

    distroPredictorEvaluation = distroPredictor.evaluate(testFeatures, testDistrosOneHot, batch_size=1)
    distroPredictor.save("C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U")