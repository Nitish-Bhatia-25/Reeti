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
    heading: "Happy Birthday, Madam Ji",
    message: "A small present for you — swipe right to unveil it."
  },

  { type: "photo", photo: "assets/photos/photo1.jpg", text: `You walk in like a princess, with a crown no one can see,
There's something in the way you carry yourself so naturally.
Your curls fall in little ringlets, wild and free,
And somehow, being a queen just comes so easily.` },

  { type: "photo", photo: "assets/photos/photo2.jpg", text: `Your eyes look brown to everyone, but there's something more,
A little warmth, a little depth, and dreams worth fighting for.
They hold so many things you want to do and see,
And I hope you never stop believing in what you can be.` },

  { type: "photo", photo: "assets/photos/photo3.jpg", text: `Your smile is easily one of the best things about you,
The kind that makes even an ordinary moment feel better.
And even when you have a lot going on inside,
You still manage to smile and keep moving forward.` },

  { type: "photo", photo: "assets/photos/photo4.jpg", text: `There's an innocence in you that I hope never changes,
A soft and genuine side that makes you who you are.
The world may get difficult sometimes,
But I hope it never takes that part of you away.` },

  { type: "photo", photo: "assets/photos/photo5.jpg", text: `Then there's the cute side — the pouts, the laughs,
The random little things you do without even trying.
You don't have to do anything to be adorable,
You just are — effortlessly, without even knowing.` },

  { type: "photo", photo: "assets/photos/photo6.jpg", text: `And of course, there's the cool baddie side of you,
The confident, stubborn, never-give-up side.
Things might not be perfect right now,
But you have everything it takes to get through them.` },

  { type: "photo", photo: "assets/photos/photo7.jpg", text: `So today, forget about everything else for a while,
Forget the worries, the plans, and everything still left to do.
Today is simply about celebrating you,
And the beautiful person you continue to become.` },

  { type: "photo", photo: "assets/photos/photo8.jpg", text: `Happy birthday, Reeti. ❤️
May this year be kinder, brighter, and full of new beginnings.
May your dreams find their way to you, one by one,
And may you always have a reason to smile.` },

  {
    type: "closing",
    message: `May you always remain as beautiful as your heart,
as bright as your dreams, and as happy as you deserve to be. ❤️

Happy birthday, Madam ji. ❤️
I hope I get to wish you a happy birthday every single year,
and make every birthday a little more special than the one before.
Here's to many more birthdays, many more dreams,
and many more beautiful moments to celebrate together.`
  }
];

