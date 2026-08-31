/*
  CONTENT FILE — this is the only file you should need to touch.

  1. Drop your 8 photos into assets/photos/ named exactly:
     photo1.jpg, photo2.jpg, ... photo8.jpg
     (jpg or png both fine — just update the filename below to match)

  2. Replace the placeholder "text" and "heading" strings below with
     your real lines. Keep each page's text short — 2-3 lines reads best.

  3. Replace bgAlt with a short description of the background photo
     (used for accessibility, not shown visually).
*/

const PAGES = [
  {
    type: "landing",
    heading: "Happy Birthday, Reeti",
    message: "Replace this with your birthday message for her — a line or two to open the card."
  },

  { type: "photo", photo: "assets/photos/photo1.jpg", text: "Replace with your line(s) for photo 1." },
  { type: "photo", photo: "assets/photos/photo2.jpg", text: "Replace with your line(s) for photo 2." },
  { type: "photo", photo: "assets/photos/photo3.jpg", text: "Replace with your line(s) for photo 3." },
  { type: "photo", photo: "assets/photos/photo4.jpg", text: "Replace with your line(s) for photo 4." },
  { type: "photo", photo: "assets/photos/photo5.jpg", text: "Replace with your line(s) for photo 5." },
  { type: "photo", photo: "assets/photos/photo6.jpg", text: "Replace with your line(s) for photo 6." },
  { type: "photo", photo: "assets/photos/photo7.jpg", text: "Replace with your line(s) for photo 7." },
  { type: "photo", photo: "assets/photos/photo8.jpg", text: "Replace with your line(s) for photo 8." },

  {
    type: "closing",
    heading: "And so, the story goes on",
    message: "Replace this with your poem — it'll sit here as the last page of the card."
  }
];
