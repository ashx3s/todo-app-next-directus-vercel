# README TODO APP

## WIP Documentation

### Rendering Code Plan

- SSR static route from CMS
  - home page
- SSR dynamic route from CMS
  - about page
- SSR API feeds SWR CSR Component
  - todos
- CSR Component fetch with useState and useEffect (don't use)
  - would also be for the todos

### Next Steps

- Finish component setup
- Create Post, Edit, and Delete req for TODOS
- Merge component code with cms integration code

### Questions

- What is `[slug]`?
- [slug] page getPage params.slug error?

---

**App Description**
This is a simple todo list app where users can sign up/in and log out, they can create todo items that they can view and check off

## Instructions

- `npm run dev` run development server
- `npm run build` build app
- `npm run start` run the latest built app

### Dependencies

- Server Deployment: [Render](https://render.com/deploy-docker/directus)
- Client Deployment: [Vercel](https://vercel.com/docs/frameworks/nextjs)
- Data Management: [Directus SQL](https://directus.io/docs/configuration/database)
- Authentication: [Directus Auth](https://docs.directus.io/reference/authentication.html)
- Styling: [Tailwind](https://tailwindcss.com/)

### Optimization Tasks

- [ ] Pick a long term strategy for organizing route, component, and lib directories -- see the docs linked below on project structure
- [ ] Break code up into components

## User Stories MVP

- I can create new TODO items that have a title and description
- I can delete or update my TODOS
- I need to log into the website to see my todo stuff
- I can view my account information
- I can check off my todo items
- I can see the things that I've checked off

## Constraints

- Data is stored in a Headless CMS that is deployed and has persistent storage
- Frontend is deployed to Vercel
- Make use of SDK for authentication
- Finished MVP code demonstrates clear and consistent component architecture and code patterns

## Next Features

- authentication validation (client and server side)
- styling and responsive formatting
- password recovery

---

## Notes

Links to sources I found useful and things that I researched for more information

- [Next Dynamic component imports](https://nextjs.org/learn/seo/dynamic-import-components): review for **AVATAR** for dynamic importing
- [Error Page](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)
- [Project Structure Docs](https://nextjs.org/docs/app/getting-started/project-structure)
- [Environment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
- [Directus Docs Nextjs](https://docs.directus.io/guides/headless-cms/build-static-website/next.html)
- [JSX Registration Form Geeks for Geeks](https://www.geeksforgeeks.org/react-hook-form-create-basic-reactjs-registration-and-login-form/)
