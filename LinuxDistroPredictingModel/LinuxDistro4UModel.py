#------------------------------ IMPORTS ------------------------------#
import numpy as np
import pandas as pd
import seaborn as sns
import tensorflow as tf
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.utils import to_categorical

#------------------------------ DATA ------------------------------#
trainingData = pd.read_csv('C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U/LinuxDistro4U.csv')
testingData = pd.read_csv('C:/Users/Maham/Documents/HS/Artificial Intelligence/LinuxDistro4U/LinuxDistro4UTestData.csv')

features = trainingData.iloc[:, :52]
distros = trainingData.iloc[:, 52:]

sns.pairplot(trainingData, hue="distro")

distrosOneHot = pd.get_dummies(distros)

testFeatures = testingData.iloc[:, :52]
testDistros = testingData.iloc[:, 52:]
testDistrosOneHot = pd.get_dummies(testDistros)


#------------------------------ MODEL ------------------------------#
distroPredictor = tf.keras.models.Sequential(
    [
        tf.keras.layers.Dense(2016, activation="relu", input_shape=(52,)),
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
distrosPredictorHistory = distroPredictor.fit(features, distrosOneHot, batch_size=36, epochs=12)

#------------------------------ PREDICTION ------------------------------#
if __name__ == '__main__':
    testDistros = testDistros.to_numpy()
    testDistrosOneHot = testDistrosOneHot.to_numpy()

    print("\n\n\n")
    prediction = distroPredictor.predict(testFeatures)

    for distro in range(44):
        testDistroNumber = distro

        # print("Distro Number: ", testDistroNumber)
        # print("Predictions Weightage: ", prediction[testDistroNumber])
        # print("Actual Weightage: ", testDistrosOneHot[testDistroNumber])
        print("Predicted Distro: ", testDistros[np.where(prediction[testDistroNumber] == prediction[testDistroNumber].max())[0][0]])
        print("Actual Distro: ", testDistros[np.where(testDistrosOneHot[testDistroNumber] == testDistrosOneHot[testDistroNumber].max())[0]])

        print("\n\n\n")

    distroPredictorEvaluation = distroPredictor.evaluate(testFeatures, testDistrosOneHot, batch_size=1)
