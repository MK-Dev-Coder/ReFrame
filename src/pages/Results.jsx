import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow.jsx";
import DataRow from "../components/DataRow.jsx";
import resultsCredibilityChart from "../assets/results-credibility-chart.png";

export default function Results() {
  return (
    <div className="wrap page">
      <Eyebrow>Research findings</Eyebrow>
      <h1 className="page-title">Results</h1>

      <div className="about-grid">
        <aside className="label-card">
          <DataRow k="Study focus" v="Digital reconstruction of a damaged painting" />
          <DataRow k="Reconstructions" v="Three generative AI models" />
          <DataRow
            k="Assessment"
            v="Anonymous expert questionnaire"
          />
          <DataRow
            k="Criteria"
            v="Historical, artistic, and perceptual credibility"
          />
          <Link className="btn results-action" to="/reconstructions">
            Compare the reconstructions
          </Link>
        </aside>

        <div className="prose results-prose">
          <p>
            The results have shown that Google’s Nano Banana had the highest
            overall performance in reconstructing Vikatos’ painting in its
            original form with an average rating of 5.25 out of 10. Based on the
            experts’ feedback, this model was particularly competent in
            producing a perceptionally identical portrait, as 75% of the
            participants “Somewhat Agreed” or “Extremely Agreed” that it
            maintained the visual balance and proportions of the original and
            appeared visually coherent.
          </p>
          <p>
            In addition, it was able to generate a
            historically credible restoration, with 75% of the participants
            “Somewhat Agreeing” that the model avoided introducing elements that
            appear historically inaccurate and preserved historically appropriate
            elements of the original work. When experts assessed the model based
            on the criterium of artistic credibility, the model gathered an
            equally divided response with 50% of participants either “Extremely
            Disagreeing” or “Somewhat Agreeing” with the statement that the
            reconstruction is consistent with the artist's painting style and
            technique. However, responses were more diverse in relation to its
            success in reproducing the original artwork’s use of colour, light,
            and tonal relationships, or in preserving the atmosphere and visual
            character of the original.
          </p>
          <p>
            According to the experts’ responses, a significantly lower overall
            performance was demonstrated by the models ChatGPT and Stable
            Diffusion, which was rated at 3 and 3.5 out of 10 respectively. In
            relation to the criterium of historical credibility, ChatGPT received
            a unanimous disagreement rate regarding the retention of stylistic
            and chromatic conventions of Academic Realism, although a more
            diverse set of answers was noted in relation to the model’s ability
            to avoid introducing elements that appear historically inaccurate
            and preserve historically appropriate elements of the original work.
          </p>
          <p>
            Similarly, Stable Diffusion received equally diverse responses in all
            three statements in relation to historical credibility. A similar
            picture is presented by the bar graph for ChatGPT and Stable
            Diffusion when experts assessed the artistic credibility of the
            reconstructions. Across both models, the survey data reveals a
            complete consensus of rejection regarding artistic credibility, as
            0% of surveyed experts agreed with any of the three statements for
            either ChatGPT or Stable Diffusion. In fact, ChatGPT triggered
            intense, polarised rejection with 75% of experts “Extremely
            Disagreeing” that it matched Vikatos’s painting style and technique
            and 50% “Extremely Disagreeing” regarding color, light, and tonal
            relationships.
          </p>
          <p>
            When inquired about which model is considered to be the most useful
            in conservation procedures, 75% of participants selected Nano
            Banana, yet expressed doubt when asked about the usefulness of such
            models in conservation research. Their qualitative feedback shows
            that experts in the field of art history and conservation remain
            critical on the potential of generative AI in restoring damaged
            artwork and, perhaps, demand more advanced models with increased
            algorithmic autonomy. Rather than functioning merely as retouching
            tools that smooth over lacunae, these models are envisioned to be
            able to provide viable options for reconstruction based on true
            understanding of paint layers and art history.
          </p>
          <div className="colophon">
            These results compare experimental digital reconstructions; they
            are not a substitute for conservation treatment.
          </div>
        </div>
      </div>

      <figure className="results-chart">
        <img
          src={resultsCredibilityChart}
          alt="Survey charts comparing the historical, artistic, and perceptual credibility of the ChatGPT, Nano Banana 2, and Stable Diffusion reconstructions"
        />
        <figcaption>
          Expert survey responses across historical, artistic, and perceptual
          credibility criteria.
        </figcaption>
      </figure>
    </div>
  );
}
