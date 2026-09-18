# Mohamed Laamri — Portfolio v4

A bilingual, dependency-free, recruiter-focused portfolio for **Industrial Automation, Industrial Computing, Embedded Systems, IoT and smart systems**. It is ready to publish at the GitHub Pages root URL:

> **https://xmlwastaken.github.io/**

## Publishing structure

Keep these files and folders together when publishing the modular version:

```text
xmlwastaken.github.io/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── assets/
    ├── automation-hero.png
    ├── mohamed-laamri.png
    └── Mohamed-Laamri-CV.pdf
```

`styles.css`, `app.js`, and every file in `assets/` are required. The site will not render or serve the CV correctly if any of them are omitted.

## Recruiter-ready additions

- Prominent **View CV** and **Download PDF** controls in the header, hero, dedicated CV section, contact panel and footer.
- A dedicated CV section with an embedded one-page PDF viewer and a browser fallback link.
- Professional portrait extracted from the supplied CV and used in the interface.
- Five animated certificate cards, each directly clickable to its verified Coursera credential.
- French / English switcher, responsive mobile navigation, project filters and project-detail modals.
- Animated signal display, HUD scan, live engineering-focus typewriter, technology ticker, network background, scroll reveal, magnetic controls and subtle 3D hover effects.
- Seven report-backed academic and industrial project case studies.

## Verified credential links used on the website

| Certificate | Issuer | Direct credential URL |
|---|---|---|
| Machine Learning in Production | DeepLearning.AI | https://www.coursera.org/account/accomplishments/verify/J97MO6AGTEPR |
| Electric Power Systems | University at Buffalo / SUNY | https://www.coursera.org/account/accomplishments/verify/4KL112SCU2KK |
| Introduction to the Internet of Things and Embedded Systems | University of California, Irvine | https://www.coursera.org/account/accomplishments/verify/6EUZQHKG3LEQ |
| Machine Learning Foundations: A Case Study Approach | University of Washington | https://www.coursera.org/account/accomplishments/verify/QGVYJWKJ1JF9 |
| Crash Course on Python | Google | https://www.coursera.org/account/accomplishments/verify/II4574HSUM0Z |

### Important credential-label note

The fifth hyperlink embedded in the supplied CV is visibly labelled **“Intelligent Machining”**, but that hyperlink resolves to the verified Google **“Crash Course on Python”** credential. To avoid a misleading public card, the website accurately displays **Crash Course on Python** for that verified URL. If an actual *Intelligent Machining* credential URL is available, replace the fifth certificate entry in `app.js` with that direct URL and title.

## Publish the modular version to GitHub Pages

1. Open your root site repository: https://github.com/xmlwastaken/xmlwastaken.github.io
2. Click **Add file** → **Upload files**.
3. Upload and replace all of the following from this folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - the complete `assets` folder
4. Commit the changes to the publishing branch/root configured in GitHub Pages.
5. Wait a few minutes, then hard-refresh https://xmlwastaken.github.io/:
   - Windows: `Ctrl + F5`
   - macOS: `Cmd + Shift + R`

## Use the single-file version instead

`portfolio-standalone.html` contains the styles, JavaScript, hero artwork, portrait **and CV PDF** as inline data. Rename it to `index.html` and upload only that file to the repository root. See `README-SIMPLE-PUBLISH.md` for the exact steps.

## Editing the portfolio

- Most bilingual text, projects, experience, skills, education and credentials are in the `content` object near the top of `app.js`.
- Site contact details and local asset paths are in the `profile` object at the top of `app.js`.
- Use direct, public credential URLs for certificate cards. Do not link cards to a generic course page when a personal credential link exists.
- To replace the CV, overwrite `assets/Mohamed-Laamri-CV.pdf` using the same filename, then rebuild the standalone file if you use it.

## Public-sharing checklist

- Confirm the email address and LinkedIn link in `app.js`.
- Replace the portrait only with an image you are comfortable sharing publicly.
- Do not upload confidential company documents, internal diagrams, source code, phone numbers or information subject to an NDA.
- Verify all descriptions and dates before publishing.

## GitHub project repositories

The portfolio now contains a visible **GitHub profile link** and a GitHub-ready status panel for the five public-safe academic projects:

- `agrinode-iot`
- `autonomous-solar-irrigation`
- `arduino-multifunctional-robot`
- `smart-irrigation-system`
- `concrete-batching-plant-automation`

The companion package `mohamed-laamri-academic-projects-github/` contains five repository starters, public-safe documentation, Mermaid architecture diagrams, source-ready folders, GitHub publishing instructions and the one-line portfolio activation step. The project cards deliberately show **repository ready** rather than a broken link until the corresponding GitHub repository exists.

After creating a public repository with one of the exact names above, add its slug to `publishedRepositories` near the top of `app.js`. The relevant project modal then automatically exposes its direct GitHub link.
