import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import "@fontsource/roboto-slab";

export const GlobalStyle = createGlobalStyle`
:root {
  --color-grey-000: #f5f5f5;
  --color-grey-020: #f0f0f0;
  --color-grey-030: #e0e0e0;
  --color-grey-050: #cccccc;
  --color-grey-100: #b8b8b8;
  --color-grey-200: #a3a3a3;
  --color-grey-300: #8f8f8f;
  --color-grey-400: #7a7a7a;
  --color-grey-500: #666666;
  --color-grey-600: #525252;
  --color-grey-700: #3d3d3d;
  --color-grey-800: #292929;
  --color-grey-900: #141414;

  --color-primary-000: #f8f8f8;
  --color-primary-050: #e3f9e5;
  --color-primary-100: #c1eac5;
  --color-primary-200: #a3d9a5;
  --color-primary-300: #7bc47f;
  --color-primary-400: #57ae5b;
  --color-primary-500: #3f9142;
  --color-primary-600: #2f8132;
  --color-primary-700: #207227;
  --color-primary-800: #0e5814;
  --color-primary-900: #05400a;

  --color-success-100: #a2f0bc;
  --color-success-500: #12bd4b;

  --color-error-100: #f1acc9;
  --color-error-500: #a10c4a;

  --transition: 0.2s ease;

  --size-1: 0.5rem;
  --size-2: 0.75rem;
  --size-3: 1rem;
  --size-4: 1.1rem;
  --size-5: 1.25rem;
  --size-6: 1.5rem;
  --size-8: 2rem;
  --size-16: 2.5rem;
  --size-20: 3rem;
  --size-40: 3.5rem;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd,
ul {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a {
  text-decoration: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


body {
  background-color: var(--color-grey-000);
  font-family: 'roboto slab', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: poppins, sans-serif;
}

.container {
  width: min(1280px, 100% - 2rem);
  margin-inline: auto;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
