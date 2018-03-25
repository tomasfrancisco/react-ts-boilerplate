## Table of Contents

* [Project Structure](#project-structure)

## Project Structure

```
src/
  components/
    button/
      __stories__
        button.story.tsx
      __tests__/
        button.test.tsx
      button.component.tsx
      index.ts
  modules/
    app/
      app.actions.ts
      app.controller.tsx
      app.reducer.ts
      app.store.ts
      index.ts
  pages/
```

## Filename Conventions

All the filenames should be lowercase and [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)

### When to name component

When the file is being used to describe a totally and independently reusable piece of code - meaning, the code doesn't need context to work by itself.

Questions that help getting the answer for component naming:

* Is the code only concerning layout and self contained behavior?
* Is the code suitable to showcase in Storybook?

### When to name module

When the file is being used to control business logic, multiple components, or just data handling.
This type of code is usual coupled to the application, what makes hard to reuse outside of context.
