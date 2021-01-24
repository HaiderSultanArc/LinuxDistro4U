import React from "react";
import './App.css';
import Page from "./JS/Page";
import { QuestionsContentProvider } from "./JS/Questions/QuestionsContent";


function App() {
  return (
    <QuestionsContentProvider className="app">
      <Page />
    </QuestionsContentProvider>
  );
}

export default App;