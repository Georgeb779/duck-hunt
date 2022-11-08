import { useState } from "react";
import "@/styles/index.global.scss";
import { Duck } from "@/components/index";

function App() {
  return (
    <div className='app_container'>
      <Duck />
      <Duck />
      <Duck />
    </div>
  );
}

export default App;
