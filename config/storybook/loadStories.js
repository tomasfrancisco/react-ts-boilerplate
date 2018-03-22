const req = require.context("@", true, /\.story.tsx?$/);

export function loadStories() {
  req.keys().forEach(filename => req(filename));
}
