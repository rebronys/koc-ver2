// 데이터 정의
const sportsData = {
  정회원: ["가라테","검도","게이트볼","골프","궁도","근대5종","농구","댄스스포츠","럭비","레슬링","롤러스포츠","루지","바이애슬론","바둑","배구","배드민턴","봅슬레이-스켈레톤","복싱","볼링","빙상","사격","산악","삼보","세팍타크로","소프트볼","수상스키-웨이크스포츠","수영","스키","스쿼시","승마","씨름","아이스하키","야구","양궁","역도","요트","우슈","유도","육상","정구","조정","족구","체조","축구","카누","컬링","탁구","태권도","테니스","트라이애슬론","펜싱","하키","핸드볼"],
  준회원: ["라크로스","소프트테니스","스키점프","에어로빅","주짓수","카이트보딩","파크골프","플로어볼"],
  인정단체: ["공수도","국무도","국학기공","무에타이","브리지","비치발리볼","스포츠줄다리기","이스포츠","줄넘기","체스","치어리딩","카바디","파워보트"],
};
const productCategories = ["스포츠용품","음료","건강기능식품","생활용품","자동차","가구","여행사","온라인 쇼핑몰","패션"];

// 컴포넌트 정의
const FormSection = ({ title, description, children }) => (
  <div className="py-8 border-b border-border">
    <h2 className="text-xl font-bold text-primary">{title}</h2>
    <p className="text-secondary mt-1 mb-6">{description}</p>
    {children}
  </div>
);
const CheckboxGrid = ({ items }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {items.map((item) => (
      <label key={item} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
        <input type="checkbox" className="w-5 h-5 text-accent rounded-md border-gray-300 focus:ring-accent" />
        <span className="text-primary font-medium">{item}</span>
      </label>
    ))}
  </div>
);

export default function BrandSignUp() {
  const InputField = ({ label, type, placeholder }) => (
    <div>
      <label className="block mb-2 text-md font-bold text-primary">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent" />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">후원 파트너 제안하기</h1>
        <p className="text-lg text-secondary">우리 브랜드를 알리고 멋진 파트너와 함께 성장하세요.</p>
      </div>

      <form className="space-y-4">
        <FormSection title="1. 기본 정보" description="후원을 제안할 브랜드와 제품 정보를 알려주세요.">
          <div className="space-y-6">
            <InputField label="브랜드명 / 제품명" type="text" placeholder="예: 스폰서링크 에너지 드링크" />
            <div>
              <label className="block mb-2 text-md font-bold text-primary">제품 카테고리</label>
              <select className="w-full max-w-xs p-3 bg-white border border-border rounded-lg focus:ring-accent focus:border-accent font-semibold">
                {productCategories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
        </FormSection>

        <FormSection title="2. 선호 후원 대상" description="어떤 파트너를 찾고 계신가요? (중복 선택 가능)">
           <div className="flex flex-wrap gap-4">
            {["개인 선수", "스포츠팀", "종목 단체"].map(type => (
              <label key={type} className="flex items-center space-x-3 p-3 px-4 border border-border rounded-lg hover:border-accent cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-accent rounded-md border-gray-300 focus:ring-accent" />
                <span className="font-bold text-primary">{type}</span>
              </label>
            ))}
          </div>
        </FormSection>

        <FormSection title="3. 선호 후원 종목" description="특별히 관심있는 종목이 있다면 모두 선택해주세요.">
          <div className="space-y-6">
              <h3 className="font-bold text-md text-primary mb-3">정회원 종목</h3>
              <CheckboxGrid items={sportsData.정회원} />
          </div>
        </FormSection>
        
        <FormSection title="4. 후원 가능 규모" description="제공 가능한 후원 규모를 알려주세요. (하나 이상 입력)">
            <div className="space-y-6">
                <InputField label="현금 후원" type="text" placeholder="예: 월 100만원" />
                <InputField label="현물 후원" type="text" placeholder="예: 의류 100벌, 음료 50박스" />
            </div>
        </FormSection>

        <div className="pt-10 text-center">
          <button type="submit" className="w-full max-w-sm bg-accent text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-accent-hover transition-colors shadow-lg">
            후원 제안 등록하기
          </button>
        </div>
      </form>
    </div>
  )
}
