import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mmsm': '360px',
      'msm': '435px',
      'smm20': '620px',
      'sm': '640px',
      'sm10': '650px',
      'md': '768px',
      'mlg': '800px',
      '2lg': '980px',
      'lg': '1024px',
      'plg': '1135px',
      'mxl': '1335px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#132745',
      }
    },
  },
  plugins: [],
}
export default config
