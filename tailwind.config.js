

  export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
     screens:{
       md:"760px",
       sm:'100px'
    },
    fontFamily: {
      'redhat': ['Red Hat Text', 'sans-serif'],
      'redhat-italic': ['Red Hat Text Italic', 'sans-serif'],
    },
   },
    },
    plugins: [],
  }