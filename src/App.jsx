import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overlay from "./components/Overlay.jsx";
import Content from "./components/Content.jsx";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  const onOverlayFinish = () => setShowContent(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showContent ? (
                <Content />
              ) : (
                <Overlay onFinish={onOverlayFinish} />
              )}
            </>
          }
        />

        <Route path="/organisers" element={<h1>yo</h1>} />
        <Route path="/criterias" element={<h1>Coming Soon...</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
