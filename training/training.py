import pandas as pd
import tensorflow as tf

trainingData = pd.read_csv('data/LinuxDistro4U.csv')
testingData = pd.read_csv('data/LinuxDistro4UTestData.csv')
numberOfFeatures = 52

features = trainingData.iloc[:, :numberOfFeatures]
distros = trainingData.iloc[:, numberOfFeatures:]
distrosOneHot = pd.get_dummies(distros)
testFeatures = testingData.iloc[:, :numberOfFeatures]
testDistros = testingData.iloc[:, numberOfFeatures:]
testDistrosOneHot = pd.get_dummies(testDistros)


distroPredictor = tf.keras.models.Sequential()
distroPredictor.add(tf.keras.layers.Dense(2016, activation="relu", input_shape=(numberOfFeatures,)))
distroPredictor.add(tf.keras.layers.Dense(1008, activation="relu"))
distroPredictor.add(tf.keras.layers.Dense(504, activation="relu"))
distroPredictor.add(tf.keras.layers.Dense(252, activation="relu"))
distroPredictor.add(tf.keras.layers.Dense(126, activation="relu"))
distroPredictor.add(tf.keras.layers.Dense(44, activation="softmax"))


distroPredictor.compile(loss="categorical_crossentropy", optimizer="adam", metrics=["accuracy"])
distroPredictor.summary()


distrosPredictorHistory = distroPredictor.fit(features, distrosOneHot, batch_size=44, epochs=8)
distroPredictorEvaluation = distroPredictor.evaluate(testFeatures, testDistrosOneHot)
distroPredictor.save("model/LinuxDistro4UPredictor.h5")
