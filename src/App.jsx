import React, { useState } from "react";
import Overlay from "./components/Overlay.jsx";
import Content from "./components/Content.jsx";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const onOverlayFinish = () => setShowContent(true);

  return (
    <>{showContent ? <Content /> : <Overlay onFinish={onOverlayFinish} />}</>
  );
};
export default App;
