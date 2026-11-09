# Anuj Rao Portfolio

A personal portfolio website showcasing Anuj Rao's academic journey, NCC achievements, Republic Day Camp 2024 experience, leadership, awards, technical skills, projects, and personal interests. Built with a modern, minimalist and responsive design, featuring real photographs and an interactive achievements gallery.

This responsive portfolio shares Anuj Rao’s education, NCC journey, recognition, interests and learning in technology. It is built with React and Vite and features original photographs supplied for the project.

## Local development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it using `npm run preview`.

## Content and privacy

The site uses selected event and portrait photographs from the supplied image folder. Identity cards, marksheets, grade sheets, income records, certificates containing cadet identifiers, and CV images containing private details are not included. Public facts are summarised as text. The email address is included at Anuj’s request; no phone number is published.

No resume download is offered because the supplied CV image contains personal contact and signature information. No technical project or project link was present in the source material, so the projects section is an honest update-ready placeholder.

See [CONTENT-INVENTORY.md](CONTENT-INVENTORY.md) for the source inventory and selection notes.

## GitHub Pages

The Vite base path is configured for `/Anuj-Rao-Portfolio/`. Push to `main` to trigger the workflow in `.github/workflows/deploy.yml`. In repository settings, set Pages’ build and deployment source to **GitHub Actions** if it is not selected already.

## Updating the portfolio

- Edit the verified copy and section data in `src/App.jsx`.
- Add public-ready photographs under `public/images/` and reference them using the `img()` helper in `src/App.jsx`.
- Keep private records, identity documents, grade sheets and unredacted certificates out of the repository.
- Commit and push updates to `main`; GitHub Actions will build and publish them.
