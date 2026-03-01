// src/app/page.js (현황판 추가 최종 버전)

import Link from 'next/link';
// 데이터베이스 함수를 가져옵니다. 서버 컴포넌트에서는 바로 사용 가능합니다.
import { getConsumers, getBrands } from '../../lib/db';

// 실시간 현황판 컴포넌트
const Stats = ({ consumerCount, brandCount }) => (
  <div className="flex justify-center gap-8 my-12">
    <div className="text-center">
      <p className="text-4xl font-extrabold text-accent">{consumerCount}</p>
      <p className="text-md text-secondary font-semibold">등록된 선수/팀</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-extrabold text-blue-600">{brandCount}</p>
      <p className="text-md text-secondary font-semibold">참여중인 브랜드</p>
    </div>
  </div>
);

// 메인 페이지 컴포넌트를 async 함수로 변경하여 서버 데이터를 기다릴 수 있게 합니다.
export default async function Home() {
  // 페이지가 로드될 때마다 서버에서 최신 데이터를 직접 가져옵니다.
  const consumers = await getConsumers();
  const brands = await getBrands();
  
  return (
    <div className="text-center">
      {/* --- 상단 히어로 섹션 --- */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">
          우리 동네 스포츠 인재와<br />든든한 후원사를 연결해요
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10">
          SponsorLink는 재능있는 선수, 팀, 단체가 후원을 통해 더 높이 도약하고,
          브랜드는 새로운 스타와 함께 성장할 기회를 만드는 곳입니다.
        </p>

        {/* --- 실시간 현황판 --- */}
        <Stats consumerCount={consumers.length} brandCount={brands.length} />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/signup/consumer" className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-hover transition-colors shadow-lg">
            선수/팀/단체: 후원 받기
          </Link>
          <Link href="/signup/brand" className="w-full sm:w-auto bg-gray-700 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg">
            브랜드: 후원하기
          </Link>
        </div>
      </section>

      {/* --- 플랫폼 소개 섹션 (이전과 동일) --- */}
      <section className="py-20 bg-gray-50 -mx-6 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">SponsorLink는 믿을 수 있어요</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-xl shadow-daangn border border-border"><h3 className="text-xl font-bold mb-2 text-primary">관심사 기반 추천</h3><p className="text-secondary">내 종목에 관심있는 후원사, 우리 브랜드에 딱 맞는 선수를 추천받아요.</p></div>
          <div className="bg-white p-8 rounded-xl shadow-daangn border border-border"><h3 className="text-xl font-bold mb-2 text-primary">안전한 채팅 제안</h3><p className="text-secondary">플랫폼이 검토한 믿을 수 있는 제안만, 안심하고 채팅으로 대화해요.</p></div>
          <div className="bg-white p-8 rounded-xl shadow-daangn border border-border"><h3 className="text-xl font-bold mb-2 text-primary">투명한 계약 관리</h3><p className="text-secondary">복잡한 계약 과정은 플랫폼에서 도와드려요. 투명하게 진행하고 관리하세요.</p></div>
        </div>
      </section>
    </div>
  )
}

// Vercel 배포 시, 페이지를 항상 최신 데이터로 갱신하도록 설정
export const revalidate = 0;
