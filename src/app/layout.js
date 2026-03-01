import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SponsorLink: 스포츠와 비즈니스를 잇다',
  description: '선수, 팀, 단체와 후원사를 연결하는 No.1 스포츠 후원 매칭 플랫폼',
}

const Header = () => (
  <header className="bg-background sticky top-0 z-50 border-b border-border">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-accent">
        SponsorLink
      </Link>
      <div className="space-x-2 flex items-center">
        <Link href="/dashboard" className="text-primary hover:text-accent font-semibold px-3 py-2 rounded-md transition-colors">
          매칭 현황
        </Link>
        <Link href="/signup/consumer" className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition-colors">
          후원받기
        </Link>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="mt-16 py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center text-secondary">
      <p>&copy; {new Date().getFullYear()} SponsorLink by Sports Corporation Lab. All rights reserved.</p>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <Header />
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
