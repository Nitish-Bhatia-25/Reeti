# Reeti's birthday site — how to finish it

## 1. Add your photos
Unzip your 8 photos and put them in `assets/photos/`, named:
`photo1.jpg`, `photo2.jpg`, ... `photo8.jpg`
(If any are `.png`, just update that filename in `content.js` to match.)

## 2. Add your text
Open `content.js` — it's the only file you should need to touch.
Replace each placeholder `message` / `text` line with your real wording:
- the opening birthday message
- one line or two for each of the 8 photo pages
- the closing poem

## 3. Preview it
Open `index.html` in a browser (double-click it, or drag it into a browser tab).
Swipe right/left on mobile, or click-drag / use arrow keys on desktop.

## 4. Publish on GitHub Pages
1. Create a new GitHub repo and push all these files to it.
2. Go to the repo's Settings → Pages.
3. Under "Build and deployment", set Source to "Deploy from a branch",
   branch = `main`, folder = `/ (root)`. Save.
4. GitHub will give you a live link (usually `https://<username>.github.io/<repo-name>/`)
   within a minute or two.

That's it — no build step, no dependencies, just static files.
