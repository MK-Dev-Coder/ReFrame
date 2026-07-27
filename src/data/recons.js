/* All copy for the three reconstructions lives here.
   Each entry's `image` is the reconstruction; SURVIVING is the painting
   as it exists today (the left side of every comparison).
   The .jpg files imported here are web-optimized copies; the original
   full-size PNG uploads are kept in ../archive/source-images/. */

import surviving from "../assets/original.jpg";
import reconChatGPT from "../assets/recon-chatgpt.jpg";
import reconNano from "../assets/recon-nano.jpg";
import reconStableDiffusion from "../assets/recon-stablediffusion.jpg";

export const NATIONAL_GALLERY_CREDIT = {
  label: "National Gallery – Alexandros Soutsos Museum, Athens.",
  url: "https://www.nationalgallery.gr/artwork/prosopografia-gynaikas-18/",
};

export const SURVIVING = surviving;

export const RECONS = [
  {
    id: "recon-1",
    numeral: "I",
    image: reconChatGPT,
    title: "ChatGPT reconstruction",
    teaser: "GPT image generation · OpenAI",
    lede:
      "The photograph of the surviving canvas was given to ChatGPT's image model, which returned a restored version of the portrait. Two iterations were necessary for producing the final generation after the initial prompt:",
    prompts: [
      "Make the background more similar to the original, as there are paintbrushes of lighter colours. Also, her skin must be of exactly the same colour, so make it a bit more pale",
      "Keep everything as it is, but now, I would like you to make her skin a little bit more yellow but pale and light, exactly like in the original.",
    ],
    data: [
      ["Model", "ChatGPT (GPT image generation)"],
      ["Developer", "OpenAI"],
      ["Input", "Photograph of the surviving state"],
    ],
  },
  {
    id: "recon-2",
    numeral: "II",
    image: reconNano,
    title: "Nano Banana reconstruction",
    teaser: "Gemini image generation · Google",
    lede:
      "Google's Nano Banana image model produced the second reconstruction. It can apply texture, color, or style to a subject. It is also the only one that reads the portrait's dimensions accurately and reconstructs the painting maintaining the original proportions of the composition.",
    data: [
      ["Model", "Nano Banana (Gemini image)"],
      ["Developer", "Google"],
      ["Input", "Photograph of the surviving state"],
    ],
  },
  {
    id: "recon-3",
    numeral: "III",
    image: reconStableDiffusion,
    title: "Stable Diffusion reconstruction",
    teaser: "Stable Diffusion image model · Stability AI",
    lede:
      "The third reconstruction comes from Stable Diffusion, the open-source latent diffusion model. It can produce output using various descriptive text inputs like style, frame, or presets.",
    data: [
      ["Model", "Stable Diffusion"],
      ["Developer", "Stability AI (open-source)"],
      ["Input", "Photograph of the surviving state"],
    ],
  },
];
