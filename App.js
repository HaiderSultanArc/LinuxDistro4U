import React from "react";
import './App.css';
import { InputFeaturesIndexProvider, InputFeaturesProvider } from "./JS/InputFeaturesContext";
import Page from "./JS/Page";
import { QuestionsContextProvider } from "./JS/Questions/QuestionsContext";

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