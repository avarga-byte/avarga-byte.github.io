import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";

function App() {
  const [page, setPage] = useState("1");
  const handleChildClick = (page) => {
    setPage(page);
  };
  const renderPage = () => {
    switch (page) {
      case "1":
        return <Page1 onButtonClick={handleChildClick} />;
      case "2":
        return <Page2 onButtonClick={handleChildClick} />;
      case "3":
        return <Page3 onButtonClick={handleChildClick} />;
      case "4":
        return <Page4 onButtonClick={handleChildClick} />;
      default:
        return <Page1 onButtonClick={handleChildClick} />;
    }
  };

  return (
    <div className="w-svw bg-gray-300 h-screen flex flex-col items-center justify-center p-2 pb-4">
      {renderPage()}
    </div>
  );
}

export default App;
