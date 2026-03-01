import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SponsorLink: 우리 동네 스포츠 파트너 찾기',
  description: '열정있는 선수와 팀, 그리고 브랜드를 연결합니다.',
}

const Header = () => (
  <header className="bg-white sticky top-0 z-50 border-b border-border shadow-daangn">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-accent">
        SponsorLink
      </Link>
      <div className="space-x-6 flex items-center">
        <Link href="/admin" className="text-secondary font-semibold hover:text-primary transition-colors">
          매칭 현황
        </Link>
        <Link href="/signup/consumer" className="bg-accent text-white px-5 py-2.5 rounded-lg text-md font-bold hover:bg-accent-hover transition-colors shadow-sm">
          후원받기
        </Link>
      </div>
    </nav>
  </header>
);

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <Header />
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  )
}
