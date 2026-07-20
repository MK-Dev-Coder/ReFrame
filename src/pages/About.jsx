import Eyebrow from "../components/Eyebrow.jsx";
import DataRow from "../components/DataRow.jsx";

export default function About() {
  return (
    <div className="wrap page">
      <Eyebrow>About the project</Eyebrow>
      <h1 className="page-title">One painting, three answers</h1>

      <div className="about-grid">
        <aside className="label-card">
          <DataRow k="Artist" v="Spyros Vikatos (1878–1960)" />
          <DataRow k="Title" v="Portrait of a Woman" />
          <DataRow k="Date" v="c. 1900–1910" />
          <DataRow k="Medium" v="Oil on canvas" />
          <DataRow k="Provenance" v="Private collection" />
          <DataRow
            k="Condition"
            v="Darkened varnish overall; craquelure and surface wear"
          />
        </aside>

        <div className="prose">
          <p>
            <i>Advances in artificial intelligence have opened new possibilities
            for the preservation and study of cultural heritage. The emergence 
            of generative AI, which is capable of producing highly detailed visual 
            content and digitally reconstructing damaged or incomplete images, 
            has offered experts the ability to reimagine a damaged
            historical painting while respecting its original artistic
            character.</i>
          </p>
          <h3>Why this project?</h3>
          <p>
            The use of computational methods in cultural heritage is not new.
            Over the past decades, digital imaging, three-dimensional
            modelling, and computer-assisted analysis have become valuable
            tools for preserving and studying works of art.
            <br />
            <br />
            Despite its growing capabilities, the application of generative AI
            in art conservation continues to spark discussion among
            conservators, art historians, and heritage professionals. While AI
            can produce visually convincing reconstructions, important
            questions remain regarding their historical accuracy and artistic
            authenticity. This project was developed to contribute to these 
            discussions by examining the strengths and limitations of current 
            generative AI models within the context of digital artwork reconstruction.
          </p>
          <h3>Aim of the Project</h3>
          <p>
            The primary aim of this project is to investigate the potential of
            contemporary generative AI models as tools for the digital
            reconstruction of damaged paintings. To achieve this objective, 
            the project compares the performance of three different generative 
            AI models and evaluates the quality of their reconstructions 
            according to three key criteria:
          </p>
          <ul>
            <li>
              <b>Historical credibility</b>, referring to the extent to which
              the reconstruction remains faithful to the historical period,
              artistic style, and visual conventions of the original artwork.
            </li>
            <li>
              <b>Artistic credibility</b>, referring to the preservation of the
              painting's composition, technique, colour relationships, and
              overall artistic character.
            </li>
            <li>
              <b>Perceptual credibility</b>, referring to how visually
              coherent, convincing, and plausible the reconstructed image
              appears as a representation of the original work.
            </li>
          </ul>
          <h3>The painting</h3>
          <p>
            The case study selected for this project is a portrait by the
            Greek painter Spyros Vikatos (1878–1960), one of the leading
            representatives of the Munich School in Greek art. Trained at the
            Academy of Fine Arts in Munich, Vikatos became renowned for his
            highly accomplished portraiture, characterised by meticulous
            observation, technical precision, and a commitment to Academic
            Realism. The painting examined in this study, created in the early
            twentieth century (c. 1900–1910), exemplifies these artistic
            qualities through its naturalistic rendering, restrained colour
            palette, and careful treatment of light and form. Its stylistic
            characteristics make it a suitable case study for investigating
            whether contemporary generative AI models can produce historically
            and artistically credible digital reconstructions while remaining
            faithful to the original work.
          </p>
          <h3>Method</h3>
          <p>
            The study is based on the digital reconstruction of a selected
            historical painting that exhibits visible deterioration. Using the
            same source image and comparable reconstruction instructions,
            three leading generative AI models were employed to produce
            independent digital reconstructions of the damaged areas. This
            comparative approach makes it possible to examine how different AI
            systems interpret the same conservation challenge and to identify
            similarities and differences in their outputs.Because the models 
            differ in training data, architecture and disposition, their 
            answers differ too — and the differences are the point.
            <br />
            <br />
            The resulting reconstructions are evaluated through an anonymous
            questionnaire completed by professionals and researchers with
            expertise in art conservation and related disciplines. Their
            assessments are central to the project, as expert knowledge
            provides an informed basis for judging the historical, artistic,
            and perceptual credibility of each reconstruction. Rather than
            determining whether AI can replace traditional conservation
            practices, the project seeks to explore whether generative AI can
            serve as a valuable complementary tool for supporting the digital
            reconstruction and interpretation of cultural heritage.
          </p>
          <div className="colophon">
            The reconstruction images are AI-generated interpretations, not
            conservation work.
          </div>
        </div>
      </div>
    </div>
  );
}
