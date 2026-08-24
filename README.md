# Isaac Olaniyi — Portfolio Website

A responsive, multi-page personal portfolio site for Isaac Olaniyi, Data Analyst & Web Developer.
Built from scratch with plain HTML, CSS, and vanilla JavaScript, no framework, no build step required.

Live site: https://isaacs-dev-01.github.io/Portfolio-website/

---

## What's inside

```
.
├── index.html                 Home page (hero, skills, project carousel, about, contact)
├── portfolio.html              Full project listing (Data Analytics + Web Development)
├── resume.html                 Resume page (matches the downloadable PDF)
├── project-ecommerce.html      Case study: Superstore Sales Performance
├── project-abtest.html         Case study: Marketing Campaign A/B Test
├── project-churn.html          Case study: Customer Churn Analysis
├── project-employee.html       Case study: Employee Retention Analysis
├── project-webportfolio.html   Case study: this website itself
├── css/style.css                One shared stylesheet (uses CSS custom properties)
├── js/main.js                   Nav toggle, bio expand, contact form, project carousel
├── images/                      Photos, dashboard screenshots, resume PDF
└── .github/workflows/deploy.yml GitHub Actions workflow that deploys to GitHub Pages
```

There is no build process. It's plain static files, so nothing needs to be compiled or installed.

---

## How to run it locally

You don't strictly need a server, double-clicking `index.html` works, but some browsers
restrict things like `fetch`/relative paths when opened as a raw `file://` URL. It's safer to
serve it locally:

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

or, if you have Node/npx installed:

```bash
npx serve .
```

---

## How to deploy it to GitHub Pages

There are two ways to publish this site. Pick **one**, don't mix both at the same time.

### Option A — Simple branch deploy (no Actions, easiest)

1. Push all these files to the root of your repo's `main` branch (`index.html` must sit directly
   at the repo root, not inside a subfolder).
2. On GitHub.com, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
5. Wait 1–3 minutes, then visit `https://<your-username>.github.io/<repo-name>/`.
6. If you delete the `.github/workflows/deploy.yml` file, GitHub will use this simple method
   automatically (no Action needed).

### Option B — GitHub Actions deploy (what `.github/workflows/deploy.yml` does)

This repo already includes a workflow file at `.github/workflows/deploy.yml` that deploys the
site automatically on every push to `main`, using GitHub's official Pages actions.

1. Push all these files (including the `.github` folder) to the `main` branch.
2. On GitHub.com, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions** (not "Deploy from a branch").
4. Go to the **Actions** tab, you should see a workflow run called **"Deploy static site to
   GitHub Pages"** start automatically. Wait for it to finish with a green checkmark.
5. Visit `https://<your-username>.github.io/<repo-name>/`.

If the site still doesn't show your latest changes after deploying:
- Hard-refresh the page (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open it in a private/incognito
  window, browsers cache old versions aggressively.
- Double check `index.html` is at the **root** of the repo, not nested inside another folder.
- Check the **Actions** tab for a failed run (red X) if you're using Option B.

---

## Updating content later

- **Resume**: replace `images/Isaac_Olaniyi_Resume.pdf` with a new file of the same name, or
  update the filename in `resume.html`'s download button.
- **Projects**: each case study is its own HTML file (`project-*.html`). Duplicate one as a
  starting point for a new project, then add a card for it in `portfolio.html`.
- **Colors/fonts**: everything is controlled from the `:root` CSS variables at the top of
  `css/style.css`.
