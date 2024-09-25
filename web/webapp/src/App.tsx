import React, { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="m-5 bg-pink">test</div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="card flex justify-content-center">
          <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <h2>Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Sidebar>
          <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
      </header>
      <Button label="Click" />
    </div>
  );
}

export default App;
