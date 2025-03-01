# Frontend Assignment


## Assignment

You are required to fetch the details of the highly-rated kickstarter projects by implementing an AJAX call to their APIs.

Use the web API (link : https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json) ) to fetch the details of specific projects.

## Minimum Requirements

1. Create a table and list the following three attributes for all the projects:
    * S.No.
    * Percentage funded
    * Amount pledged

1. Ensure that the UI is aesthetically pleasing to gain extra points.
1. Implement pagination with maximum 5 records per page.
1. UX should remain like you would see on an ecommerce website (Amazon, Flipkart, etc.) and edge cases should not break.
1. Take care of last page.

### Expected Output format

| **S.No.** | **Percentage funded** | **Amount pledged** |
|-----------|-----------------------|--------------------|
| 0         | 186                   | 15283              |


## Good to have

1. Unit tests.
1. Accessibility.


## Steps for submission

1. Fork this repo.
1. Do changes to the above assignment.
1. Email the assignment back to us with:
    1. Link of the open source repo.
    1. Link of the assignment hosted online. (You can use any free tools to host this assignment, eg. vercel, netlify or heroku). It should be accessible online for atleast 7 days.


## Frameworks Allowed
1. React/Vanilla JS for JavaScript
1. No framework for CSS. Only Raw CSS is allowed.

## Note

1. Result on platforms like codesandbox, replit are not accepted. 
1. Private unaccessible links will lead to rejection.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
