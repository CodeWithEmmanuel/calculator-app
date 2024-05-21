import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    document.body.setAttribute("class", `theme-${theme}`);
  }, [theme]);

  function changeTheme() {
    setTheme(theme + 1);
    if (theme > 2) setTheme(1);
  }

  return (
    <div className="header-section">
      <h2 className="app-logo">calc</h2>
      <div className="app-theme">
        <h2>THEME</h2>
        <div className="theme-settings">
          <span className="theme-numbers">
            <p className="theme-1">1</p>
            <p className="theme-1">2</p>
            <p className="theme-1">3</p>
          </span>
          <span className="theme-control" onClick={changeTheme}>
            <span className="theme-control-knob"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
