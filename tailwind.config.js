/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // 흰색 배경
        primary: '#212121',    // 기본 텍스트 (진한 회색)
        secondary: '#757575',  // 보조 텍스트 (회색)
        accent: '#FF6F0F',      // 당근 오렌지
        'accent-hover': '#E6600D', // 오렌지 호버
        border: '#E0E0E0',      // 연한 회색 테두리
      },
      fontFamily: {
        sans: ['"Pretendard"', 'sans-serif'], // Pretendard 폰트
      },
      boxShadow: {
        'daangn': '0px 2px 8px rgba(0, 0, 0, 0.1)', // 당근 스타일 그림자
      }
    },
  },
  plugins: [],
};
