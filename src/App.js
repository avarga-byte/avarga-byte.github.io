import "./App.css";
import { useState } from "react";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";

const NavIcon = ({ children }) => children;

const navItems = [
  {
    id: "1",
    label: "コンセプト",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a7 7 0 0 1 5 11.93V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.07A7 7 0 0 1 12 2z" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: "2",
    label: "敷地",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    id: "3",
    label: "図面",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: "4",
    label: "パース",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.5" />
        <path d="m21 15-5-5L5 19" />
      </svg>
    ),
  },
  {
    id: "5",
    label: "探検",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

function App() {
  const [page, setPage] = useState("1");
  const handleChildClick = (p) => setPage(p);

  const renderPage = () => {
    switch (page) {
      case "1": default: return <Page1 onButtonClick={handleChildClick} />;
      case "2": return <Page2 onButtonClick={handleChildClick} />;
      case "3": return <Page3 onButtonClick={handleChildClick} />;
      case "4": return <Page4 onButtonClick={handleChildClick} />;
      case "5": return <Page5 onButtonClick={handleChildClick} />;
    }
  };

  return (
    <div className="w-svw bg-gray-100 h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Page content — leave room for 72px navbar */}
      <div className="flex-1 w-full overflow-hidden pb-[72px]" style={{ height: "calc(100vh - 72px)" }}>
        <div className="w-full h-full p-2">
          {renderPage()}
        </div>
      </div>

      {/* Bottom navbar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          height: "72px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex justify-around items-center h-full max-w-lg mx-auto px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleChildClick(item.id)}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-all duration-200 outline-none border-none bg-transparent cursor-pointer"
              style={{
                color: page === item.id ? "#1a1a1a" : "#999",
                transform: page === item.id ? "scale(1.08)" : "scale(1)",
              }}
            >
              <div
                style={{
                  background: page === item.id ? "rgba(0,0,0,0.06)" : "transparent",
                  borderRadius: "12px",
                  padding: "6px 12px",
                  transition: "all 0.2s",
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: page === item.id ? "700" : "400",
                  letterSpacing: "0.02em",
                  transition: "all 0.2s",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
