module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          101: "#69878e",
          201: "#50737b",
          301: "#375f68",
          401: "#1e4b55",
          501: "#053742",
          601: "#05323b",
          701: "#042c35",
          801: "#04272e",
          901: "#032128",
        },
        light: {
          101: "#e9f3f0",
          201: "#e5f1ee",
          301: "#e2f0ec",
          401: "#dfeeea",
          501: "#c9d6d3",
          601: "#b2bebb",
          701: "#9ca7a4",
          801: "#868f8c",
          901: "#707775",
        },
        medium: {
          101: "#9eb9b2",
          201: "#8eaea5",
          301: "#7ea298",
          401: "#6e978b",
          501: "#5e8b7e",
          601: "#557d71",
          701: "#4b6f65",
          801: "#426158",
          901: "#38534c",
        },
      },
      fontSize: {
        'xsm': '10px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// fontSize: {
//   'xs': '.75rem',
//   'sm': '.875rem',
//   'tiny': '.875rem',
//    'base': '1rem',
//    'lg': '1.125rem',
//    'xl': '1.25rem',
//    '2xl': '1.5rem',
//   '3xl': '1.875rem',
//   '4xl': '2.25rem',
//    '5xl': '3rem',
//    '6xl': '4rem',
//   '7xl': '5rem',
//  }