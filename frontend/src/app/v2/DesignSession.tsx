import { useState } from "react";

type Layout = "split" | "centered";
type Palette = "clay" | "ink" | "moss";
type Copy = "short" | "full";
type Seam = "line" | "wave" | "none";

const seams: Record<Exclude<Seam, "none">, string> = {
  line: '<svg viewBox="0 0 400 16" preserveAspectRatio="none"><rect x="0" y="7" width="400" height="2" fill="currentColor"/></svg>',
  wave: '<svg viewBox="0 0 400 16" preserveAspectRatio="none"><path d="M0 8 Q 12.5 0 25 8 T 50 8 T 75 8 T 100 8 T 125 8 T 150 8 T 175 8 T 200 8 T 225 8 T 250 8 T 275 8 T 300 8 T 325 8 T 350 8 T 375 8 T 400 8" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>',
};

function Segment<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  const id = `ctl-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="ctl">
      <span className="ctl-label" id={id}>
        {label}
      </span>
      <div className="seg" role="group" aria-labelledby={id}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const publicUrl = process.env.PUBLIC_URL ?? "";

const pieces = [
  { src: `${publicUrl}/pottery-bowls.jpg`, label: "Small bowls" },
  { src: `${publicUrl}/pottery-serving.jpg`, label: "Serving bowl" },
  { src: `${publicUrl}/pottery-dish.jpg`, label: "Little dish" },
];

export function DesignSession() {
  const [layout, setLayout] = useState<Layout>("split");
  const [palette, setPalette] = useState<Palette>("clay");
  const [copy, setCopy] = useState<Copy>("short");
  const [seam, setSeam] = useState<Seam>("line");

  return (
    <section id="session" className="band">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Step 02, up close</p>
          <h2>Try a design session.</h2>
          <p className="lede">
            This is how the draft of your site works. Each control is a decision we’d make
            together, and you see it on the page instantly. This is a sample site for a
            ceramics studio.
          </p>
        </div>
        <div className="session">
          <div className="controls">
            <Segment
              label="Layout"
              value={layout}
              onChange={setLayout}
              options={[
                { value: "split", label: "Split" },
                { value: "centered", label: "Centered" },
              ]}
            />
            <Segment
              label="Palette"
              value={palette}
              onChange={setPalette}
              options={[
                { value: "clay", label: "Clay" },
                { value: "ink", label: "Ink" },
                { value: "moss", label: "Moss" },
              ]}
            />
            <Segment
              label="Intro text"
              value={copy}
              onChange={setCopy}
              options={[
                { value: "short", label: "Concise" },
                { value: "full", label: "Full" },
              ]}
            />
            <Segment
              label="Section border"
              value={seam}
              onChange={setSeam}
              options={[
                { value: "line", label: "Line" },
                { value: "wave", label: "Wave" },
                { value: "none", label: "None" },
              ]}
            />
            <p className="note">
              When you’ve decided, the controls are removed and your choices become the final
              site.
            </p>
          </div>

          <div className="browser">
            <div className="browser-bar">
              <div className="dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="url">draft.usefulpots.com</div>
            </div>
            <div className="mock" data-layout={layout} data-palette={palette} data-copy={copy}>
              <div className="m-nav">
                <strong>Useful Pots</strong>
                <nav>
                  <span>Work</span>
                  <span>Classes</span>
                  <span>About</span>
                  <span>Visit</span>
                </nav>
              </div>
              <div className="m-hero">
                <div>
                  <h4>Wheel-thrown porcelain from a small studio in Minnesota.</h4>
                  <p>
                    Bowls, plates, and vases fired in small batches.
                    <span className="m-full">
                      {" "}
                      Every piece is glazed by hand, so no two are quite alike. Weekend wheel
                      classes run year-round for beginners and returning potters.
                    </span>
                  </p>
                  <span className="m-cta">See the collection</span>
                </div>
                <div className="m-img">
                  <img src={`${publicUrl}/pottery-plate.jpg`} alt="A painted plate with slices of fruit on the grass" />
                </div>
              </div>
              {seam !== "none" && (
                <div className="m-seam" aria-hidden="true" dangerouslySetInnerHTML={{ __html: seams[seam] }} />
              )}
              <div className="m-work">
                {pieces.map((piece) => (
                  <div key={piece.label} style={{ backgroundImage: `url(${piece.src})` }}>
                    <span>{piece.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
