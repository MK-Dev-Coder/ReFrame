import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow.jsx";
import { RECONS, SURVIVING } from "../data/recons.js";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-art">
          <img
            src={SURVIVING}
            className="fill-img"
            alt="The surviving state of the painting: a portrait of a woman, oil on canvas"
          />
        </div>
        <div className="hero-scrim" />
        <div className="wrap hero-text">
          <Eyebrow>A digital reconstruction project</Eyebrow>
          <h1 className="hero-title">
            <em>Portrait of a Woman</em>
          </h1>
          <p className="hero-meta">
            Oil on canvas · Spyros Vikatos · National Gallery of Greece
          </p>
          <p className="hero-lede">
            Age, darkened varnish and surface wear obscure the painting as it
            left the easel. This project presents three independent digital
            reconstructions — each produced by a different generative AI image model,
            each making different assumptions about what has been lost.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/reconstructions">
              View the three reconstructions
            </Link>
            <Link className="btn btn-ghost" to="/about">
              About the project
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap teasers">
        <h2 className="section-title">The three reconstructions</h2>
        <div className="teaser-grid">
          {RECONS.map((r) => (
            <Link key={r.id} className="teaser" to={`/reconstructions#${r.id}`}>
              <div className="teaser-art">
                <img src={r.image} className="fill-img" alt={r.title} />
              </div>
              <div className="teaser-cap">
                <span className="numeral">{r.numeral}</span>
                <span>
                  <span className="teaser-title">{r.title}</span>
                  <span className="teaser-method">{r.teaser}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
