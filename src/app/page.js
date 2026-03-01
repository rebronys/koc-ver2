import Link from 'next/link';

// 아이콘 컴포넌트 (아이콘 크기를 w-8 h-8로 수정)
const FeatureIcon = ({ path }) => (
  <svg className="w-8 h-8 text-accent mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
  </svg>
);

export default function Home() {
  return (
    <div>
      <section className="py-16 md:py-20 text-center">
        {/* 1. 최상단 텍스트 수정 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          스포츠 브랜드 커넥트 플랫폼 SponsorLink
        </h1>
        <p className="text-lg text-secondary mb-16 max-w-3xl mx-auto">
          대한민국 스포츠 강국을 위한 스폰서십 매칭 플랫폼<br/>
          SponsorLink는 재능있는 선수와 따뜻한 후원사를 연결하여 대한민국 스포츠의 미래를 함께 만들어갑니다.
        </p>

        {/* 3. 선택 입장방법 변경 */}
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-daangn border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">SponsorLink 입장하기</h2>
            <div className="space-y-4">
                <Link href="/signup/consumer" className="block w-full bg-primary text-white text-lg font-bold p-5 rounded-lg text-center hover:bg-gray-800 transition-colors">
                 [선수/팀/단체 - 후원 받기]
                </Link>
                <Link href="/signup/brand" className="block w-full bg-primary text-white text-lg font-bold p-5 rounded-lg text-center hover:bg-gray-800 transition-colors">
                 [브랜드 - 후원하기]
                </Link>
            </div>
        </div>
      </section>

      <section id="features" className="py-16 text-left">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">SponsorLink 핵심 기능</h2>
        <div className="grid md:grid-cols-3 gap-8">
           {/* 2. 이미지 이모티콘 크기 수정 적용 */}
          <div className="bg-white p-8 rounded-lg shadow-daangn text-center">
            <FeatureIcon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            <h3 className="text-xl font-bold mb-2 text-primary">관심 기반 매칭</h3>
            <p className="text-secondary">원하는 종목, 필요한 후원에 맞춰 최적의 파트너를 찾고 제안을 보낼 수 있습니다.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-daangn text-center">
            <FeatureIcon path="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            <h3 className="text-xl font-bold mb-2 text-primary">안전한 채팅 '파트너십 제안'</h3>
            <p className="text-secondary">플랫폼이 중개하는 안전한 대화 채널을 통해 구체적인 후원 조건을 조율할 수 있습니다.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-daangn text-center">
            <FeatureIcon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            <h3 className="text-xl font-bold mb-2 text-primary">투명한 계약 시스템</h3>
            <p className="text-secondary">상호 합의된 내용은 플랫폼을 통해 투명하게 기록되고 안전하게 계약을 진행할 수 있습니다.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
