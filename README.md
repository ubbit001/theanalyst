# Prince Ubong Ebong: Business Analyst Portfolio

A static portfolio website built with plain HTML, CSS and JavaScript. No Next.js, React, npm, Node.js or build step. Design inspired by minimal-next-portfolio, with original code.

## Open it locally
Double-click `index.html`. Everything works offline except Google Fonts (a fallback font is used) and the contact form, which needs internet.

## Upload to GitHub
1. Create a new repository on github.com.
2. Click **Add file → Upload files** and drag in everything inside this folder (keep the folder structure).
3. Make sure `index.html` is in the repository root, not inside another folder.
4. Click **Commit changes**.

## Turn on GitHub Pages
Settings → Pages → Deploy from a branch → **main** → **/ (root)** → Save. After a minute your site appears at `https://YOUR-USERNAME.github.io/REPO-NAME/`. GitHub Pages uses `index.html` as the entry page.

## Where to change things
Almost everything is in `assets/js/data.js`:
| What | Where in data.js |
|---|---|
| Name, title, location, tagline, bio | `name`, `title`, `location`, `tagline`, `shortBio`, `about` |
| Email, phone | `email`, `phone` (empty email shows `[ADD PROFESSIONAL EMAIL]`) |
| Social links | `linkedin`, `github` |
| Resume | `resume`, `resumeText` |
| Formspree | `formspreeEndpoint` |
| Skills | `skills` |
| Experience | `experience` |
| Projects and case studies | `projects` |

Page titles, SEO and social tags are at the top of `index.html`.

## Images
Put images in `assets/images/`. Replace `profile.jpg` and `project-01.jpg` to `project-06.jpg` (keep the names, or change the paths in data.js). Current project images are grey placeholders. Keep images under about 300 KB.

## Resume
Put your CV in `assets/documents/` named `Prince-Ubong-Ebong-CV.pdf`. Until you do, the Download CV button will show a "not found" page.

## Add a project
Copy one project block in `projects` inside `data.js`, give it a new unique `id`, and edit the text. The card and case-study page (`projects/case-study.html?id=YOUR-ID`) appear automatically.

## Colours and fonts
Open `assets/css/style.css`. Colours are CSS variables at the top (`--accent`, `--bg`, and so on) with a separate set for dark mode. The font is `--font`; to change it, also change the Google Fonts link in `index.html` and `projects/case-study.html`.

## Favicon
`assets/images/favicon.svg` is a simple "UE" icon. Replace it with your own file and update the `<link rel="icon">` line if you use `.ico`.

## Contact form
Uses Formspree (`https://formspree.io/f/xnpjjnyg`). Confirm your email address in your Formspree account so messages reach you.
