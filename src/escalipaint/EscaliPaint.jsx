import React, { useEffect, useState } from "react";
import Excalidraw, {
  exportToCanvas,
  exportToSvg,
  exportToBlob,
  defaultLang,
  languages,
} from "@excalidraw/excalidraw";
import InitialData from "./initialData";

import initialData from "./initialData";

const EscaliPaint = () => {
  const excalidrawRef = React.useRef<any>(null);

  const [viewModeEnabled, setViewModeEnabled] = useState<boolean>(false);
  const [zenModeEnabled, setZenModeEnabled] = useState<boolean>(false);
  const [gridModeEnabled, setGridModeEnabled] = useState<boolean>(false);
  const [theme, setTheme] = useState("light");
  const [showViewMode, setShowViewMode] = useState(false);
  useEffect(() => {
    const onHashChange = () => {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const libraryUrl = hash.get("addLibrary");
      if (libraryUrl) {
        excalidrawRef.current?.importLibrary(libraryUrl, hash.get("token"));
      }
    };
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const updateScene = () => {
    const sceneData = {
      elements: [
        {
          type: "rectangle",
          version: 141,
          versionNonce: 361174001,
          isDeleted: false,
          id: "oDVXy8D6rom3H1-LLH2-f",
          fillStyle: "hachure",
          strokeWidth: 1,
          strokeStyle: "solid",
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: "#c92a2a",
          backgroundColor: "transparent",
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          groupIds: [],
        },
      ],
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    };
    excalidrawRef.current.updateScene(sceneData);
  };

  return (
    <div className="excalipaint">
      <div
        className="show-changue-views"
        onClick={() => setShowViewMode(!showViewMode)}
      >
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDQzYy00NC44MDU2NiwwIC03OS4yODEyNSwzOS40NzI2NiAtNzkuMjgxMjUsMzkuNDcyNjZsLTMuMTkxNDEsMy41MjczNGwzLjE5MTQxLDMuNTI3MzRjMCwwIDMxLjQzMTE1LDM1Ljg0MDMzIDczLjIzNDM4LDM5LjEzNjcyYzEuOTk0NjMsMC4yNTE5NSAzLjk4OTI2LDAuMzM1OTQgNi4wNDY4OCwwLjMzNTk0YzIuMDU3NjIsMCA0LjA1MjI0LC0wLjA4Mzk4IDYuMDQ2ODgsLTAuMzM1OTRjNDEuODAzMjIsLTMuMjk2MzkgNzMuMjM0MzgsLTM5LjEzNjcyIDczLjIzNDM4LC0zOS4xMzY3MmwzLjE5MTQxLC0zLjUyNzM0bC0zLjE5MTQxLC0zLjUyNzM0YzAsMCAtMzQuNDc1NTgsLTM5LjQ3MjY2IC03OS4yODEyNSwtMzkuNDcyNjZ6TTg2LDUzLjc1YzExLjg0MTgsMCAyMi43NTk3NywzLjIzMzQgMzIuMjUsNy41NTg1OWMzLjQyMjM2LDUuNjY4OTUgNS4zNzUsMTIuMTk4NzMgNS4zNzUsMTkuMzE2NDFjMCwxOS40MjEzOSAtMTQuNTcxMjksMzUuMzc4NDIgLTMzLjQyNTc4LDM3LjQ1NzAzYy0wLjEwNDk4LDAuMDIwOTkgLTAuMjMwOTYsLTAuMDIwOTkgLTAuMzM1OTQsMGMtMS4yODA3NiwwLjA2Mjk5IC0yLjU2MTUyLDAuMTY3OTcgLTMuODYzMjgsMC4xNjc5N2MtMS40Mjc3MywwIC0yLjgxMzQ3LC0wLjA4Mzk4IC00LjE5OTIyLC0wLjE2Nzk3Yy0xOC44NTQ0OSwtMi4wNzg2MSAtMzMuNDI1NzgsLTE4LjAzNTY1IC0zMy40MjU3OCwtMzcuNDU3MDNjMCwtNy4wMTI2OSAxLjg4OTY1LC0xMy41NDI0OCA1LjIwNzAzLC0xOS4xNDg0NGgtMC4xNjc5N2M5LjU3NDIyLC00LjQwOTE4IDIwLjYxODE3LC03LjcyNjU2IDMyLjU4NTk0LC03LjcyNjU2ek04Niw2NC41Yy04LjkwMjM0LDAgLTE2LjEyNSw3LjIyMjY2IC0xNi4xMjUsMTYuMTI1YzAsOC45MDIzNCA3LjIyMjY2LDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguOTAyMzQsMCAxNi4xMjUsLTcuMjIyNjYgMTYuMTI1LC0xNi4xMjVjMCwtOC45MDIzNCAtNy4yMjI2NiwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXpNMzguOTY4NzUsNjkuNTM5MDZjLTAuODM5ODQsMy42MTEzMyAtMS4zNDM3NSw3LjI0MzY1IC0xLjM0Mzc1LDExLjA4NTk0YzAsOS40MjcyNCAyLjY4NzUsMTguMjQ1NiA3LjM5MDYzLDI1LjY5OTIyYy0xMy41NDI0OCwtNy44MzE1NCAtMjIuOTQ4NzMsLTE3LjE3NDggLTI2LjAzNTE2LC0yMC4zMjQyMmMyLjU4MjUyLC0yLjY0NTUxIDkuNzg0MTgsLTkuNjU4MiAxOS45ODgyOCwtMTYuNDYwOTR6TTEzMy4wMzEyNSw2OS41MzkwNmMxMC4yMDQxLDYuODAyNzMgMTcuNDA1NzYsMTMuODE1NDMgMTkuOTg4MjgsMTYuNDYwOTRjLTMuMDg2NDMsMy4xNDk0MiAtMTIuNDkyNjgsMTIuNDkyNjggLTI2LjAzNTE2LDIwLjMyNDIyYzQuNzAzMTMsLTcuNDUzNjEgNy4zOTA2MywtMTYuMjcxOTcgNy4zOTA2MywtMjUuNjk5MjJjMCwtMy44NDIyOSAtMC41MDM5MSwtNy41MTY2IC0xLjM0Mzc1LC0xMS4wODU5NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
        />
      </div>
      {showViewMode && (
        <>
          <div
            className="overlayButtons"
            onClick={() => setShowViewMode(!showViewMode)}
          ></div>
          <div className="button-wrapper">
            <label>
              <input
                type="checkbox"
                checked={viewModeEnabled}
                onChange={() => setViewModeEnabled(!viewModeEnabled)}
              />
              Modo vista
            </label>
            <label>
              <input
                type="checkbox"
                checked={zenModeEnabled}
                onChange={() => setZenModeEnabled(!zenModeEnabled)}
              />
              Modo Zen
            </label>
            <label htmlFor="grilla">
              <input
                id="grilla"
                type="checkbox"
                checked={gridModeEnabled}
                onChange={() => setGridModeEnabled(!gridModeEnabled)}
              />
              <span>Modo grilla</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => {
                  let newTheme = "light";
                  if (theme === "light") {
                    newTheme = "dark";
                  }
                  setTheme(newTheme);
                }}
              />
              Modo oscuro
            </label>
          </div>
        </>
      )}

      <div className="excalidraw-wrapper">
        <Excalidraw
          ref={excalidrawRef}
          initialData={InitialData}
          onChange={(elements, state) =>
            console.log("Elements :", elements, "State : ", state)
          }
          onPointerUpdate={(payload) => console.log(payload)}
          //   onCollabButtonClick={() =>
          //     window.alert("You clicked on collab button")
          //   }
          viewModeEnabled={viewModeEnabled}
          zenModeEnabled={zenModeEnabled}
          gridModeEnabled={gridModeEnabled}
          langCode="es-ES"
          theme={theme}
          name="arcacanvas"
          UIOptions={{ canvasActions: { loadScene: false } }}
        />
      </div>
    </div>
  );
};

export default EscaliPaint;
