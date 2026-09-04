import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// ============================================================
// AUDIO FILES
// Put the files inside: public/audio/
// ============================================================

const dialogues = {
  x: {
    key: "X",
    name: "Aranenu Manasilayo",
    file: "/aranenu manasilayo-x.mpeg",
  },

  s: {
    key: "S",
    name: "Ayye Ayye",
    file: "/ayye ayye-s.mpeg",
  },

  d: {
    key: "D",
    name: "Bhayankaram",
    file: "/bhayankaram-d.mpeg",
  },

  y: {
    key: "Y",
    name: "But Why But Why",
    file: "/but why but why-y.mp3",
  },

  escape: {
    key: "ESC",
    name: "Bye The Bye",
    file: "/bye the bye-esc.mpeg",
  },

  i: {
    key: "I",
    name: "Dairyam Undel Irangi Vaada",
    file: "/dairyam undel irangi vaada-i.mpeg",
  },

  f: {
    key: "F",
    name: "Ivan Evide Onum Janikendavan",
    file: "/ivan evide onum janikendavan-f.mpeg",
  },

  o: {
    key: "O",
    name: "Ene Kolathirikan Patumo",
    file: "/ene kolathirikan patumo-o.mpeg",
  },

  space: {
    key: "SPACE",
    name: "Entho Engane",
    file: "/entho engane-space.mpeg",
  },

  backspace: {
    key: "BACKSPACE",
    name: "Enthu Pati Ramana",
    file: "/enthu pati ramana-backspace.mpeg",
  },

  h: {
    key: "H",
    name: "Hello Uncle",
    file: "/hello uncle-h.mpeg",
  },

  u: {
    key: "U",
    name: "I Am Fine Thanks",
    file: "/i am fine-thanks-u.mpeg",
  },

  t: {
    key: "T",
    name: "Ith Enthu Sanam",
    file: "/ith enthu sanam-t.mpeg",
  },

  v: {
    key: "V",
    name: "Ithreku Popular Aaya Ene Kanit Manasilayille",
    file: "/ithreku popular aaya ene kanit manasilayille-v.mpeg",
  },

  k: {
    key: "K",
    name: "Ithrem Veliya Gathi Kettavan",
    file: "/ithrem veliya gathi kettavan-k.mpeg",
  },

  tab: {
    key: "TAB",
    name: "Ivide Kedanu Show",
    file: "/ivide kedanu show-tab.mpeg",
  },

  q: {
    key: "Q",
    name: "Korenalayalo Kandit",
    file: "/korenalayalo kandit-q.mpeg",
  },

  m: {
    key: "M",
    name: "Mothalali Jaga Jaga Jaga",
    file: "/mothalali jaga jaga jaga-m.mpeg",
  },

  n: {
    key: "N",
    name: "Nahi",
    file: "/nahi-n.mpeg",
  },

  g: {
    key: "G",
    name: "Ivalude Asugam Enik Manasilayi",
    file: "/ivalude asugam enik manasilayi-g.mpeg",
  },

  a: {
    key: "A",
    name: "Nee Ponapan Alleda Thankapan",
    file: "/nee ponapan alleda thankapan-a.mpeg",
  },

  l: {
    key: "L",
    name: "Ravile Gulika Kazhicharno",
    file: "/ravile gulika kazhicharno-l.mpeg",
  },

  c: {
    key: "C",
    name: "Nink Ariyavuna Pani",
    file: "/nink ariyavuna pani-c.mpeg",
  },

  r: {
    key: "R",
    name: "Njangal Arum Arinjilla",
    file: "/njangal arum arinjilla-r.mpeg",
  },

  z: {
    key: "Z",
    name: "Oru Kai Abadham Nattikaruth",
    file: "/oru kai abadam.nattikaruth-z.mpeg",
  },

  capslock: {
    key: "CAPS",
    name: "Over Aakathe",
    file: "/over aakathe-caps.mpeg",
  },

  j: {
    key: "J",
    name: "Pani Varunund",
    file: "/pani varunund-j.mpeg",
  },

  e: {
    key: "E",
    name: "Thalli Vidu",
    file: "/thalli vidu-e.mpeg",
  },

  w: {
    key: "W",
    name: "Thana Arenu Thanik",
    file: "/thana aranenu thanik-w.mpeg",
  },

  enter: {
    key: "ENTER",
    name: "Theerumbo Pani",
    file: "/theerumbo pani-enter.mpeg",
  },

  p: {
    key: "P",
    name: "Yavan Puliyan Keto",
    file: "/yavan puliyan keto-p.mpeg",
  },

  b: {
    key: "B",
    name: "Njan Kazhicha Biriyani",
    file: "/njan kazhicha biriyani-b.mpeg",
  },
};

// ============================================================
// KEYBOARD LAYOUT
// Only keys that have audio are included.
// ============================================================

const keyboardRows = [
  [
    { id: "escape", label: "ESC" },
    { id: "x", label: "X" },
    { id: "y", label: "Y" },
    { id: "u", label: "U" },
    { id: "i", label: "I" },
    { id: "o", label: "O" },
    { id: "p", label: "P" },
  ],

  [
    { id: "q", label: "Q" },
    { id: "w", label: "W" },
    { id: "e", label: "E" },
    { id: "r", label: "R" },
    { id: "t", label: "T" },
    { id: "a", label: "A" },
    { id: "s", label: "S" },
    { id: "d", label: "D" },
  ],

  [
    { id: "f", label: "F" },
    { id: "g", label: "G" },
    { id: "h", label: "H" },
    { id: "j", label: "J" },
    { id: "k", label: "K" },
    { id: "l", label: "L" },
    { id: "c", label: "C" },
  ],

  [
    { id: "z", label: "Z" },
    { id: "v", label: "V" },
    { id: "b", label: "B" },
    { id: "n", label: "N" },
    { id: "m", label: "M" },
  ],

  [
    { id: "tab", label: "TAB" },
    { id: "capslock", label: "CAPS" },
    { id: "backspace", label: "BACKSPACE" },
    { id: "enter", label: "ENTER" },
    { id: "space", label: "SPACE" },
  ],
];


function App() {
  const [currentDialogue, setCurrentDialogue] = useState(null);
  const [volume, setVolume] = useState(0.8);
  const [activeKey, setActiveKey] = useState(null);

  const audioRef = useRef(null);

  // ==========================================================
  // PLAY AUDIO
  // ==========================================================

  const playDialogue = (id) => {
    const dialogue = dialogues[id];

    if (!dialogue) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const fileName = dialogue.file.replace(/^\/+/, "");

    const audio = new Audio(
      `/audio/${encodeURIComponent(fileName)}`
    );

    audio.volume = volume;

    audioRef.current = audio;

    setCurrentDialogue(dialogue);
    setActiveKey(id);

    audio.play().catch((error) => {
      console.error("Could not play audio:", error);
    });

    audio.onended = () => {
      setActiveKey(null);
    };
  };


  // ==========================================================
  // KEYBOARD INPUT
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      let key = event.key.toLowerCase();

      // Special keys
      if (event.key === " ") {
        key = "space";
      }

      if (event.key === "Escape") {
        key = "escape";
      }

      if (event.key === "Backspace") {
        key = "backspace";
      }

      if (event.key === "Enter") {
        key = "enter";
      }

      if (event.key === "Tab") {
        key = "tab";
      }

      if (event.key === "CapsLock") {
        key = "capslock";
      }

      if (dialogues[key]) {
        event.preventDefault();
        playDialogue(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume]);


  // ==========================================================
  // STOP
  // ==========================================================

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setActiveKey(null);
    setCurrentDialogue(null);
  };


  // ==========================================================
  // VOLUME
  // ==========================================================

  const changeVolume = (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };


  return (
    <div className="app">

      {/* =====================================================
          TOP LOGO AREA
      ====================================================== */}

      <header className="header">

        <div className="logo-container">
          <img
            src="/logo.png"
            alt="Junga Jaga Jaga"
            className="logo-image"
          />
        </div>

        <div className="instruction">
          Press a key. Say something dramatic.
        </div>

      </header>


      {/* =====================================================
          NOW PLAYING
      ====================================================== */}

      <section className="now-playing-section">

        <div className="now-playing-label">
          NOW PLAYING
        </div>

        <div className="now-playing">

          <div className="current-key">
            {currentDialogue ? currentDialogue.key : "?"}
          </div>

          <div className="dialogue-info">

            <h1>
              {currentDialogue
                ? currentDialogue.name
                : "Press a key..."}
            </h1>

            <p>
              🎙️{" "}
              {currentDialogue
                ? "Dialogue playing..."
                : "Waiting for your dramatic entrance..."}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEYBOARD
      ====================================================== */}

      <main className="keyboard-container">

        <div className="keyboard">

          {keyboardRows.map((row, rowIndex) => (

            <div
              className={`keyboard-row row-${rowIndex}`}
              key={rowIndex}
            >

              {row.map((keyItem) => {

                const isActive = activeKey === keyItem.id;

                return (
                  <button
                    key={keyItem.id}
                    className={`key ${
                      isActive ? "active" : ""
                    } ${
                      keyItem.id === "space"
                        ? "space-key"
                        : ""
                    } ${
                      keyItem.id === "backspace"
                        ? "backspace-key"
                        : ""
                    } ${
                      keyItem.id === "enter"
                        ? "enter-key"
                        : ""
                    }`}
                    onClick={() => playDialogue(keyItem.id)}
                  >
                    {keyItem.label}

                    <span className="key-dot"></span>
                  </button>
                );

              })}

            </div>

          ))}

        </div>

      </main>


      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <footer className="controls">

        <div className="volume-control">

          <span className="volume-icon">
            🔊
          </span>

          <span className="volume-text">
            Volume
          </span>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
          />

        </div>


        <button
          className="stop-button"
          onClick={stopAudio}
        >
          ■ STOP
        </button>

      </footer>

    </div>
  );
}

export default App;