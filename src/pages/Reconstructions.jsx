import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompareSlider from "../components/CompareSlider.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import DataRow from "../components/DataRow.jsx";
import {
  NATIONAL_GALLERY_CREDIT,
  RECONS,
  SURVIVING,
} from "../data/recons.js";

export default function Reconstructions() {
  const { hash } = useLocation();

  /* arriving via a home-page teaser link (#recon-1 etc.) */
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      const t = setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        60
      );
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div className="wrap page">
      <Eyebrow>The reconstructions</Eyebrow>
      <h1 className="page-title">Drag the brass line to compare</h1>
      <p className="page-lede">
        Each image is compared against the surviving state of the canvas as it
        exists today. Left of the line: the painting now. Right: the
        reconstruction.
      </p>

      {RECONS.map((r) => (
        <section key={r.id} id={r.id} className="recon">
          <div className="recon-grid">
            <div className="recon-text">
              <div className="recon-head">
                <span className="numeral big">{r.numeral}</span>
                <h2>{r.title}</h2>
              </div>
              <p>{r.lede}</p>
              {r.prompts && (
                <ul className="recon-prompts">
                  {r.prompts.map((p) => (
                    <li key={p}>“{p}”</li>
                  ))}
                </ul>
              )}
              <div className="data-card">
                {r.data.map(([k, v]) => (
                  <DataRow key={k} k={k} v={v} />
                ))}
              </div>
            </div>
            <CompareSlider
              left={
                <img
                  src={SURVIVING}
                  className="fill-img"
                  alt="Surviving state of the painting"
                />
              }
              right={
                <img src={r.image} className="fill-img" alt={r.title} />
              }
              leftLabel="Surviving state"
              rightLabel={`Reconstruction ${r.numeral}`}
              initial={46}
            />
            <p className="recon-credit">
              ©{" "}
              <a
                href={NATIONAL_GALLERY_CREDIT.url}
                target="_blank"
                rel="noreferrer"
              >
                {NATIONAL_GALLERY_CREDIT.label}
              </a>{" "}
              Image used for academic research purposes. All rights reserved.
            </p>
          </div>
        </section>
      ))}

      <section className="recon-initial-prompt" aria-labelledby="initial-prompt">
        <p id="initial-prompt" className="recon-initial-prompt-label">
          Initial prompt used
        </p>
        <blockquote>
          Restore the damaged portrait conservatively in the style of late 19th-
          to early 20th-century Munich School academic realism. Preserve the
          original composition, sitter’s identity, facial structure, pose,
          brushwork, canvas texture, muted palette, and dark tonal atmosphere.
          Maintain natural oil-paint texture, soft chiaroscuro, subdued earth
          tones, and the serious psychological character typical of academic
          Realist portraiture. Repair cracks, scratches, and fading. Do not
          beautify, sharpen excessively, recolour aggressively, or invent new
          decorative details.
        </blockquote>
      </section>
    </div>
  );
}
