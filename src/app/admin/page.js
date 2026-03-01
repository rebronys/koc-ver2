// src/app/admin/page.js (프로필 강화 버전)

import { getConsumers, getBrands, findMatches } from '../../../lib/db';

// 데이터 섹션 UI (변경 없음)
const DataSection = ({ title, data, renderItem }) => (<section className="mb-12"><h2 className="text-2xl font-bold border-b-2 border-accent pb-2 mb-6">{title}</h2>{data && data.length > 0 ? <div className="space-y-4">{data.map(renderItem)}</div> : <p className="text-secondary">아직 등록된 데이터가 없습니다.</p>}</section>);

export default async function AdminPage() {
  const consumers = await getConsumers();
  const brands = await getBrands();
  const matches = await findMatches();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-12">관리자 대시보드</h1>
      
      {/* 자동 매칭 결과: UI 변경 없음 */}
      <DataSection
        title="🔥 자동 매칭 결과!"
        data={matches}
        renderItem={(match) => (
          <div key={match.matchId} className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg flex items-center justify-between shadow-sm"><div><span className="font-bold text-lg text-accent">[{match.consumer.sport}] {match.consumer.name || match.consumer.type}</span><span className="text-primary mx-2">↔️</span><span className="font-bold text-lg text-blue-600">[{match.brand.category}] {match.brand.name}</span></div><span className="text-sm text-green-600 font-bold">MATCH!</span></div>
        )}
      />

      {/* 선수/팀 등록 목록: 상세 정보 추가 */}
      <DataSection
        title="🙋‍♂️ 선수/팀 등록 목록"
        data={consumers}
        renderItem={(c) => (
          <div key={c.id} className="p-4 bg-white border border-border rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-lg text-primary">{c.name}</span>
                <span className="text-secondary text-sm ml-2">({c.type} / {c.sport})</span>
                <p className="text-sm text-gray-600 mt-1">{c.contact} / {c.email}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-accent">{c.categories.join(', ')}</p>
                <p className="text-xs text-secondary">희망 카테고리</p>
              </div>
            </div>
            {c.intro && <p className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-800 bg-gray-50 p-2 rounded">“ {c.intro} ”</p>}
          </div>
        )}
      />

      {/* 브랜드 등록 목록: 상세 정보 추가 */}
      <DataSection
        title="🏢 브랜드 등록 목록"
        data={brands}
        renderItem={(b) => (
          <div key={b.id} className="p-4 bg-white border border-border rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-lg text-primary">{b.name}</span>
                <span className="text-secondary text-sm ml-2">({b.category})</span>
                <p className="text-sm text-gray-600 mt-1">{b.contactName}: {b.contact} / {b.email}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-600">{b.sports.join(', ')}</p>
                <p className="text-xs text-secondary">선호 종목</p>
              </div>
            </div>
            {b.brandIntro && <p className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-800 bg-gray-50 p-2 rounded">“ {b.brandIntro} ”</p>}
          </div>
        )}
      />
    </div>
  );
}

export const revalidate = 0;
