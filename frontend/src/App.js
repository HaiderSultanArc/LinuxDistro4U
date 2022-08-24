import * as tflite from '@tensorflow/tfjs-tflite';
import React from "react";
import './App.css';
import {InputFeaturesIndexProvider, InputFeaturesProvider} from "./JS/InputFeaturesContext";
import Page from "./JS/Page";
import {QuestionsContextProvider} from "./JS/Questions/QuestionsContext";

tflite.setWasmPath(
	'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-tflite@0.0.1-alpha.8/dist/'
);

function App() {
	return (
		<QuestionsContextProvider className="app">
			<InputFeaturesProvider>
				<InputFeaturesIndexProvider>
					<Page />
				</InputFeaturesIndexProvider>
			</InputFeaturesProvider>
		</QuestionsContextProvider>
);
}

export default App;