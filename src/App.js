import React, { Suspense, useEffect, useMemo, useState } from "react";
import "./App.css";
import V2Portfolio from "./Components/V2Portfolio/V2Portfolio";

const V1Portfolio = React.lazy(() =>
  import("./Components/V1Portfolio/V1Portfolio")
);

const normalizeVersion = (value) => (value === "v1" ? "v1" : "v2");
const normalizeTheme = (value) => (value === "day" ? "day" : "night");
const normalizeMode = (value) => (value === "resume" ? "resume" : "portfolio");

const polarToCartesian = (radius, angle) => {
  const radians = (angle * Math.PI) / 180;
  return {
    x: 60 + radius * Math.cos(radians),
    y: 60 + radius * Math.sin(radians),
  };
};

const annularSlicePath = (startAngle, endAngle) => {
  const outerRadius = 54;
  const innerRadius = 24;
  const outerStart = polarToCartesian(outerRadius, startAngle);
  const outerEnd = polarToCartesian(outerRadius, endAngle);
  const innerEnd = polarToCartesian(innerRadius, endAngle);
  const innerStart = polarToCartesian(innerRadius, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
};

const labelPoint = (angle) => polarToCartesian(40, angle);

function DialSegment({
  className,
  label,
  actionLabel,
  onActivate,
  start,
  end,
  labelAngle,
}) {
  const point = labelPoint(labelAngle);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <g
      className={`dial-segment ${className}`}
      role="button"
      tabIndex="0"
      aria-label={actionLabel}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
    >
      <path className="dial-wedge" d={annularSlicePath(start, end)} />
      <text className="dial-text" x={point.x} y={point.y}>
        {label}
      </text>
    </g>
  );
}

function DisplayControls({
  showV1,
  theme,
  mode,
  onVersionToggle,
  onThemeToggle,
  onModeToggle,
}) {
  const effectiveMode = showV1 ? "portfolio" : mode;
  const versionAction = showV1 ? "Open V2" : "Open V1";
  const themeAction = theme === "day" ? "Switch to night" : "Switch to day";
  const modeAction =
    effectiveMode === "portfolio" ? "Open resume mode" : "Open portfolio mode";

  return (
    <aside className="mode-dial" aria-label="Portfolio display controls">
      <svg
        className="dial-svg"
        viewBox="0 0 120 120"
        aria-hidden="false"
        focusable="false"
      >
        <DialSegment
          className="dial-segment-version"
          label={showV1 ? "V1" : "V2"}
          actionLabel={versionAction}
          onActivate={onVersionToggle}
          start={-150}
          end={-30}
          labelAngle={-90}
        />
        <DialSegment
          className={`dial-segment-theme dial-segment-theme-${theme}`}
          label={theme === "day" ? "Day" : "Night"}
          actionLabel={themeAction}
          onActivate={onThemeToggle}
          start={90}
          end={210}
          labelAngle={150}
        />
        <DialSegment
          className={`dial-segment-mode dial-segment-mode-${effectiveMode}`}
          label={effectiveMode === "portfolio" ? "Site" : "PDF"}
          actionLabel={modeAction}
          onActivate={onModeToggle}
          start={-30}
          end={90}
          labelAngle={30}
        />
        <circle className="dial-core" cx="60" cy="60" r="23" />
      </svg>
    </aside>
  );
}

function readInitialState() {
  const params = new URLSearchParams(window.location.search);

  return {
    version: normalizeVersion(params.get("version")),
    theme: normalizeTheme(params.get("theme")),
    mode: normalizeMode(params.get("mode")),
  };
}

function App() {
  const initialState = useMemo(readInitialState, []);
  const [version, setVersion] = useState(initialState.version);
  const [theme, setTheme] = useState(initialState.theme);
  const [mode, setMode] = useState(initialState.mode);

  useEffect(() => {
    document.body.classList.toggle("v1-body", version === "v1");
    document.body.classList.toggle("v2-body", version === "v2");
    document.body.classList.toggle("v2-night-body", version === "v2" && theme === "night");
    document.body.classList.toggle("v2-day-body", version === "v2" && theme === "day");
  }, [version, theme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("version", version);
    params.set("theme", theme);

    if (version === "v2" && mode === "resume") {
      params.set("mode", "resume");
    } else {
      params.delete("mode");
    }

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${
      window.location.hash
    }`;
    window.history.replaceState(null, "", nextUrl);
  }, [version, theme, mode]);

  useEffect(() => {
    if (version !== "v2" || mode !== "portfolio" || !window.location.hash) {
      return undefined;
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const timeoutId = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView();
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [version, mode]);

  const showV1 = version === "v1";

  const handleVersionToggle = () => {
    setVersion((currentVersion) => (currentVersion === "v1" ? "v2" : "v1"));
    setMode("portfolio");
  };

  const handleModeToggle = () => {
    setVersion("v2");
    setMode((currentMode) =>
      currentMode === "portfolio" ? "resume" : "portfolio"
    );
  };

  return (
    <>
      {showV1 ? (
        <Suspense
          fallback={
            <main className="app-loading" aria-live="polite">
              Loading V1...
            </main>
          }
        >
          <V1Portfolio />
        </Suspense>
      ) : (
        <V2Portfolio theme={theme} mode={mode} setMode={setMode} />
      )}

      <DisplayControls
        showV1={showV1}
        theme={theme}
        mode={mode}
        onVersionToggle={handleVersionToggle}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === "day" ? "night" : "day"))
        }
        onModeToggle={handleModeToggle}
      />
    </>
  );
}

export default App;
