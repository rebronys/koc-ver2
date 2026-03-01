/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',    // 당근의 기본 흰색 배경
        primary: '#212121',       // 기본 텍스트 (완전한 검정보다 부드러운 색)
        secondary: '#757575',     // 보조 텍스트 (날짜, 설명 등)
        accent: '#FF6F0F',        // 당근의 상징, 주황색
        'accent-hover': '#E6600D', // 주황색 버튼 위에 마우스를 올렸을 때 색
        border: '#E0E0E0',        // 연한 회색 테두리
      },
      fontFamily: {
        sans: ['"Pretendard"', 'sans-serif'],
      },
      boxShadow: {
        'daangn': '0 2px 4px rgba(0, 0, 0, 0.1)', // 당근 스타일의 부드러운 그림자
      }
    },
  },
  plugins: [],
}
