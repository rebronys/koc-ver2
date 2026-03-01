// src/app/admin/page.js (경로 최종 수정 버전)

// 경로 수정: '..'을 하나 더 추가하여 세 단계 위인 프로젝트 최상위로 올라갑니다.
import { getConsumers, getBrands, findMatches } from '../../../lib/db';

// 데이터 섹션 컴포넌트
const DataSection = ({ title, data, renderItem }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold border-b-2 border-accent pb-2 mb-6">{title}</h2>
    {data && data.length > 0 ? (
      <div className="space-y-4">{data.map(renderItem)}</div>
    ) : (
      <p className="text-secondary">아직 등록된 데이터가 없습니다.</p>
    )}
  </section>
);

export default async function AdminPage() {
  // 페이지가 로드될 때마다 서버에서 최신 데이터를 직접 가져옵니다.
  const consumers = await getConsumers();
  const brands = await getBrands();
  const matches = await findMatches();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-12">관리자 대시보드</h1>
      
      {/* 자동 매칭 결과 */}
      <DataSection
        title="🔥 자동 매칭 결과!"
        data={matches}
        renderItem={(match) => (
          <div key={match.matchId} className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg flex items-center justify-between shadow-sm">
            <div>
              <span className="font-bold text-lg text-accent">[{match.consumer.sport}] {match.consumer.type}</span>
              <span className="text-primary mx-2">↔️</span>
              <span className="font-bold text-lg text-blue-600">[{match.brand.category}] {match.brand.name}</span>
            </div>
            <span className="text-sm text-green-600 font-bold">MATCH!</span>
          </div>
        )}
      />

      {/* 선수/팀 등록 목록 */}
      <DataSection
        title="🙋‍♂️ 선수/팀 등록 목록"
        data={consumers}
        renderItem={(c) => (
          <div key={c.id} className="p-4 bg-white border border-border rounded-lg shadow-sm">
            <span className="font-bold">[{c.type}]</span> <span className="text-primary font-semibold">{c.sport}</span>
            <span className="text-secondary mx-2">희망:</span>
            <span className="text-accent">{c.categories.join(', ')}</span>
          </div>
        )}
      />

      {/* 브랜드 등록 목록 */}
      <DataSection
        title="🏢 브랜드 등록 목록"
        data={brands}
        renderItem={(b) => (
          <div key={b.id} className="p-4 bg-white border border-border rounded-lg shadow-sm">
            <span className="font-bold">[{b.name}]</span> <span className="text-primary font-semibold">{b.category}</span>
            <span className="text-secondary mx-2">선호:</span>
            <span className="text-blue-600">{b.sports.join(', ')}</span>
          </div>
        )}
      />
    </div>
  );
}

// Vercel 배포 시, 페이지를 항상 최신 데이터로 갱신하도록 설정
export const revalidate = 0;
