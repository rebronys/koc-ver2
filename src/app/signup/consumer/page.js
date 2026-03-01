// src/app/signup/consumer/page.js (경로 수정 최종 버전)

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// 경로 수정: '..'을 하나 더 추가하여 두 단계 위로 올라갑니다.
import { submitConsumer } from '../../actions';

// 데이터 정의 (이전과 동일)
const sportsData = {
  정회원: ["가라테","검도","게이트볼","골프","궁도","근대5종","농구","댄스스포츠","럭비","레슬링","롤러스포츠","루지","바이애슬론","바둑","배구","배드민턴","봅슬레이-스켈레톤","복싱","볼링","빙상","사격","산악","삼보","세팍타크로","소프트볼","수상스키-웨이크스포츠","수영","스키","스쿼시","승마","씨름","아이스하키","야구","양궁","역도","요트","우슈","유도","육상","정구","조정","족구","체조","축구","카누","컬링","탁구","태권도","테니스","트라이애슬론","펜싱","하키","핸드볼"],
  준회원: ["라크로스","소프트테니스","스키점프","에어로빅","주짓수","카이트보딩","파크골프","플로어볼"],
  인정단체: ["공수도","국무도","국학기공","무에타이","브리지","비치발리볼","스포츠줄다리기","이스포츠","줄넘기","체스","치어리딩","카바디","파워보트"]
};
const productCategories = ["스포츠용품","음료","건강기능식품","생활용품","자동차","가구","여행사","온라인 쇼핑몰","패션"];

// UI 컴포넌트들 (이전과 동일)
const FormSection = ({ title, description, children }) => (
    <div className="py-8 border-b border-border"><h2 className="text-xl font-bold text-primary">{title}</h2><p className="text-secondary mt-1 mb-6">{description}</p>{children}</div>
);
const CheckboxGrid = ({ items, onChange, selectedItems }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(item => (
            <label key={item} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-accent rounded-md border-gray-300 focus:ring-accent" onChange={() => onChange(item)} checked={selectedItems.includes(item)} />
                <span className="text-primary font-medium">{item}</span>
            </label>
        ))}
    </div>
);

// 메인 페이지 컴포넌트
export default function ConsumerSignUp() {
  const router = useRouter();
  const [type, setType] = useState('선수');
  const [sport, setSport] = useState('');
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (category) => {
    setCategories(prev => {
      if (prev.includes(category)) return prev.filter(item => item !== category);
      if (prev.length < 3) return [...prev, category];
      alert('희망 후원 카테고리는 최대 3개까지 선택할 수 있습니다.');
      return prev;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sport) return alert('종목을 선택해주세요.');
    if (categories.length === 0) return alert('희망 후원 카테고리를 하나 이상 선택해주세요.');

    setIsSubmitting(true);
    const result = await submitConsumer({ type, sport, categories });

    if (result.success) {
      alert('프로필이 성공적으로 등록되었습니다!');
      router.push('/admin');
    } else {
      alert('등록 중 오류가 발생했습니다: ' + result.error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-2">후원 프로필 등록하기</h1><p className="text-lg text-secondary">나를 알리고 필요한 후원을 제안 받아보세요.</p></div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <FormSection title="1. 가입 유형" description="해당하는 유형을 하나만 선택해주세요."><select onChange={(e) => setType(e.target.value)} value={type} className="w-full p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent"><option>선수</option><option>스포츠팀</option><option>종목 단체</option></select></FormSection>
            <FormSection title="2. 종목" description="활동 중인 종목을 하나만 선택해주세요."><select onChange={(e) => setSport(e.target.value)} value={sport} className="w-full p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent"><option value="">-- 종목 선택 --</option><optgroup label="정회원 종목">{sportsData.정회원.map(s => <option key={s}>{s}</option>)}</optgroup><optgroup label="준회원 종목">{sportsData.준회원.map(s => <option key={s}>{s}</option>)}</optgroup><optgroup label="인정 단체">{sportsData.인정단체.map(s => <option key={s}>{s}</option>)}</optgroup></select></FormSection>
            <FormSection title="3. 희망 후원 카테고리" description="어떤 분야의 후원을 받고 싶나요? (최대 3개)"><CheckboxGrid items={productCategories} onChange={handleCategoryChange} selectedItems={categories} /></FormSection>
            <div className="pt-10 text-center"><button type="submit" disabled={isSubmitting} className="w-full max-w-sm bg-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-accent-hover transition-colors shadow-lg disabled:bg-gray-400">{isSubmitting ? '등록 중...' : '내 프로필 등록하기'}</button></div>
        </form>
    </div>
  );
}
