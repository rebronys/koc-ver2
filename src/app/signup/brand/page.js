// src/app/signup/brand/page.js (기능 추가 최종 버전)

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitBrand } from '../../actions'; // 우리가 만든 서버 전용 액션 함수를 임포트

// 데이터 정의
const sportsData = {
  정회원: ["가라테","검도","게이트볼","골프","궁도","근대5종","농구","댄스스포츠","럭비","레슬링","롤러스포츠","루지","바이애슬론","바둑","배구","배드민턴","봅슬레이-스켈레톤","복싱","볼링","빙상","사격","산악","삼보","세팍타크로","소프트볼","수상스키-웨이크스포츠","수영","스키","스쿼시","승마","씨름","아이스하키","야구","양궁","역도","요트","우슈","유도","육상","정구","조정","족구","체조","축구","카누","컬링","탁구","태권도","테니스","트라이애슬론","펜싱","하키","핸드볼"],
  준회원: ["라크로스","소프트테니스","스키점프","에어로빅","주짓수","카이트보딩","파크골프","플로어볼"],
  인정단체: ["공수도","국무도","국학기공","무에타이","브리지","비치발리볼","스포츠줄다리기","이스포츠","줄넘기","체스","치어리딩","카바디","파워보트"]
};
const productCategories = ["스포츠용품","음료","건강기능식품","생활용품","자동차","가구","여행사","온라인 쇼핑몰","패션"];

// UI 컴포넌트들
const FormSection = ({ title, description, children }) => (<div className="py-8 border-b border-border"><h2 className="text-xl font-bold text-primary">{title}</h2><p className="text-secondary mt-1 mb-6">{description}</p>{children}</div>);
const InputField = ({ label, value, onChange, placeholder }) => (<div><label className="block mb-2 text-md font-bold text-primary">{label}</label><input value={value} onChange={onChange} placeholder={placeholder} className="w-full p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent" /></div>);
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

// 메인 컴포넌트
export default function BrandSignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(productCategories[0]);
  const [sports, setSports] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 선호 종목 선택 처리
  const handleSportChange = (sport) => {
    setSports(prev => prev.includes(sport) ? prev.filter(s => s !== sport) : [...prev, sport]);
  };
  
  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert('브랜드명 / 제품명을 입력해주세요.');
    if (sports.length === 0) return alert('선호 후원 종목을 하나 이상 선택해주세요.');

    setIsSubmitting(true);
    const result = await submitBrand({ name, category, sports });

    if (result.success) {
      alert('후원 제안이 성공적으로 등록되었습니다!');
      router.push('/admin'); // 등록 후 관리자 페이지로 이동
    } else {
      alert('등록 중 오류가 발생했습니다: ' + result.error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12"><h1 className="text-4xl font-bold mb-2">후원 파트너 제안하기</h1><p className="text-lg text-secondary">우리 브랜드를 알리고 멋진 파트너와 함께 성장하세요.</p></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormSection title="1. 기본 정보" description="후원을 제안할 브랜드와 제품 정보를 알려주세요.">
          <div className="space-y-6">
            <InputField label="브랜드명 / 제품명" value={name} onChange={(e) => setName(e.target.value)} placeholder="예: SponsorLink 여행사" />
            <div>
              <label className="block mb-2 text-md font-bold text-primary">제품 카테고리</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent">
                {productCategories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
        </FormSection>
        <FormSection title="2. 선호 후원 종목" description="특별히 관심있는 종목이 있다면 모두 선택해주세요.">
          <div className="space-y-6">
            <h3 className="font-bold text-md text-primary mb-3">정회원 종목</h3><CheckboxGrid items={sportsData.정회원} onChange={handleSportChange} selectedItems={sports} />
            <h3 className="font-bold text-md text-primary mt-6 mb-3">준회원 종목</h3><CheckboxGrid items={sportsData.준회원} onChange={handleSportChange} selectedItems={sports} />
            <h3 className="font-bold text-md text-primary mt-6 mb-3">인정 단체</h3><CheckboxGrid items={sportsData.인정단체} onChange={handleSportChange} selectedItems={sports} />
          </div>
        </FormSection>
        <div className="pt-10 text-center">
          <button type="submit" disabled={isSubmitting} className="w-full max-w-sm bg-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-accent-hover transition-colors shadow-lg disabled:bg-gray-400">{isSubmitting ? '등록 중...' : '후원 제안 등록하기'}</button>
        </div>
      </form>
    </div>
  );
}

