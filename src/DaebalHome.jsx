import React from "react";

export default function DaebalHome() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">

      {/* 네비게이션 + 로고 */}
      <nav className="bg-white shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="대발이 로고" className="h-8 sm:h-10" />
          <h1 className="text-lg sm:text-xl font-bold text-blue-700">대리발송 대발이</h1>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600">소개</a></li>
          <li><a href="#services" className="hover:text-blue-600">서비스</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">요금</a></li>
          <li><a href="#automation" className="hover:text-blue-600">자동화</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        </ul>
      </nav>

      {/* Hero 영역 */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug mb-4">
          동대문부터 고객 문 앞까지,<br />대발이가 꼼꼼하게 대신 갑니다
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          사입 · 검수 · 포장 · 출고까지 — 쇼핑몰 사장님의 물류 파트너
        </p>
        <a href="#pricing" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">
          요금표 바로 보기
        </a>
      </header>

      {/* 회사 소개 */}
      <section id="about" className="max-w-5xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">회사 소개</h3>
        <p className="text-base text-gray-700">
          ‘대리발송 대발이’는 동대문 의류 전문 3PL 서비스입니다.
          도매 사입부터 검수, 포장, 택배 출고까지 전 과정을 책임지고 운영하여
          온라인 쇼핑몰 사장님들이 판매에 집중할 수 있도록 지원합니다.
        </p>
        <p className="text-sm text-gray-500 italic">
          사입삼촌보다 더 꼼꼼하고, 더 합리적인 가격.<br />
          검수부터 택배까지 — 대발이가 책임집니다.
        </p>
      </section>

      {/* 브랜드 강점 (시각 강조) */}
      <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            ["99.8%", "불량 필터링 정확도"],
            ["4.9점", "사장님 만족도"],
            ["7,000건+", "누적 출고 건수"]
          ].map(([stat, label], idx) => (
            <div key={idx} className="bg-white shadow rounded-xl py-6 px-4">
              <div className="text-3xl font-extrabold text-blue-700 mb-1">{stat}</div>
              <div className="text-sm text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </section>
      {/* 서비스 소개 카드형 */}
      <section id="services" className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-blue-700 mb-10">📦 제공 서비스</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "📥", title: "사입 대행", desc: "동대문 도매매장 사입" },
            { icon: "🔎", title: "검수 처리", desc: "불량/오염 전수검사" },
            { icon: "📦", title: "포장/합포장", desc: "개별 및 합포장 (추가 500원)" },
            { icon: "🚚", title: "택배 출고", desc: "한진택배 당일/익일 출고" },
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
              <div className="text-3xl mb-2">{icon}</div>
              <h4 className="font-bold text-blue-600 mb-1">{title}</h4>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 요금 안내 카드형 */}
      <section id="pricing" className="bg-gray-100 mt-20 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-10">💰 요금제 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { range: "~300건", price: "4,500원", highlight: false },
              { range: "501~700건", price: "3,800원", highlight: true },
              { range: "1001건 이상", price: "3,500원", highlight: false }
            ].map(({ range, price, highlight }, idx) => (
              <div key={idx} className={`rounded-xl p-6 shadow-md text-center ${highlight ? "bg-blue-600 text-white" : "bg-white"}`}>
                <h4 className="text-lg font-bold mb-2">{range}</h4>
                <div className="text-3xl font-extrabold mb-2">{price}</div>
                <p className="text-sm">{highlight ? "가장 인기있는 요금제" : "표준 요금제"}</p>
              </div>
            ))}
          </div>

          {/* 추가 요금 안내 */}
          <div className="mt-8 max-w-3xl mx-auto text-sm text-gray-700 space-y-2">
            <h4 className="font-semibold text-blue-700">📌 추가 요금 안내</h4>
            <ul className="list-disc pl-5">
              <li>합포장: 1개당 500원 추가</li>
              <li>택배 크기 초과: 80cm+500 / 100cm+1,000 / 120cm+1,700</li>
              <li>지역 추가: 제주 +3,000 / 도서산간 +6,000</li>
              <li>포장 후 취소 전환 시: 1,000원 추가</li>
            </ul>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-10">
            <a href="#contact" className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-800 transition">
              이용 신청하기
            </a>
          </div>
        </div>
      </section>
      {/* 반품 / 불량 / 교환 처리 */}
      <section id="returns" className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-xl shadow space-y-6">
        <h3 className="text-2xl font-bold text-blue-700 text-center">🔁 반품 / 교환 / 불량 처리</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>반품 택배비: 3,000원 / 교환 시: 1건 요금 + 반품비</li>
          <li>CCTV 검수 후 대발이 과실 → 반품 2,500 / 교환 5,000 지원</li>
          <li>접수 마감: 출고일 기준 7일 이내</li>
          <li className="text-gray-500">※ 핏, 안감, 착용 후 문제 등은 제외</li>
        </ul>
      </section>

      {/* 재고 보관 안내 */}
      <section className="bg-blue-50 mt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">📦 재고 보관 안내</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-800">
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-blue-700 mb-2">1칸 보관</h4>
              <p>크기: 65×45×37cm</p>
              <p>요금: 월 3,000원</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-blue-700 mb-2">1앵글 보관</h4>
              <p>크기: 122×46×195cm (6단)</p>
              <p>요금: 월 30,000원</p>
            </div>
          </div>
          <ul className="list-disc mt-6 pl-5 text-sm text-gray-700 space-y-1">
            <li>매월 1일 기준 요금 부과 / 월말 전량 출고 시 면제</li>
            <li>재고 수량은 고객이 직접 관리</li>
          </ul>
        </div>
      </section>

      {/* 샘플 / 사장님 수령건 */}
      <section className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">📦 샘플 / 사장님 수령건</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>거래처당 2,000원 + 택배비 3,000~6,000원</li>
          <li>받는 사람은 반드시 “상호명”으로 기재</li>
          <li>상호명 미기재 시 포장비 1,000원 추가</li>
          <li>비닐 그대로 발송 / 묶음 발송 불가</li>
        </ul>
      </section>

      {/* 클로디 사용법 */}
      <section className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">📱 클로디 사용법</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>픽업 주문서는 클로디 어플로 작성</li>
          <li>반납/교환 전달사항: [상품명, 색상, 사이즈 반품] 형식</li>
          <li>전달사항 누락 시 매장에서 접수되지 않을 수 있음</li>
        </ul>
      </section>

      {/* 퀵파인더 */}
      <section className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">🔎 퀵파인더 (검수 영상 확인)</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>사이트: https://quickfinder.co.kr</li>
          <li>ID: 전화번호 뒤 8자리 / PW: a12345678!</li>
          <li>영상은 송장번호 검색으로 확인 가능</li>
          <li className="text-gray-500">※ 13:00~01:00 입력 건만 기록됩니다</li>
        </ul>
      </section>

      {/* 이지어드민 안내 */}
      <section id="automation" className="bg-white mt-20 px-4 sm:px-6 lg:px-8 py-10 rounded-xl shadow max-w-5xl mx-auto space-y-4">
        <h3 className="text-2xl font-bold text-blue-800">⚙️ 출고 자동화 – 이지어드민</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>월 300건 이상 출고 쇼핑몰에 추천</li>
          <li>스마트스토어 등과 연동 → 배송지 자동 입력</li>
          <li>송장 자동 등록 / 인건비 절감</li>
          <li>출고 송장에 바코드 → 오배송률 0%에 가까움</li>
          <li>실시간 재고 현황 확인 가능</li>
          <li>월 사용료: 5만원</li>
          <li>사용 신청: 카카오톡으로 개별 문의</li>
        </ul>
      </section>
      {/* 배송지 입력 안내 */}
      <section className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">✍️ 배송지 입력 안내</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>배송지는 대발이 배송지 사이트에서 입력해주세요</li>
          <li>마우스를 올리면 각 항목에 도움말이 나타납니다</li>
          <li>정규 입력 마감: 13:00 ~ 익일 01:00</li>
          <li>추가건 입력 시간: 01:00 ~ 13:00 (출고 보장 불가)</li>
          <li>배송지는 매일 정확히 입력해주셔야 합니다</li>
          <li>재고 출고 시 “재고발송”이라고 꼭 기재해주세요</li>
        </ul>
      </section>

      {/* FAQ 전체 */}
      <section id="faq" className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl shadow space-y-6">
        <h3 className="text-2xl font-bold text-blue-700 text-center">❓ 자주 묻는 질문 (FAQ)</h3>
        {[
          ["사입비는 따로 있나요?", "모든 비용이 건당 요금에 포함됩니다."],
          ["운송장은 어떻게 확인하나요?", "익일 17시 전 배송지 사이트에 자동 배정됩니다 (한진택배)."],
          ["포장은 어떻게 되나요?", "기본 개별 포장 / 요청 시 합포장 가능 (500원 추가)"],
          ["검수 영상은 어떻게 확인하나요?", "퀵파인더 접속 후 송장번호로 검색 (13~01시 입력건만 기록됨)."],
          ["불량 처리는 어떻게 하나요?", "CCTV 확인 후 과실 시 반품 2,500 / 교환 5,000 지원 (7일 이내 접수 필수)"],
          ["어떤 불량은 지원되지 않나요?", "핏, 안감, 패턴 틀어짐, 착용 후 문제 등은 제외"],
          ["샘플건은 어떻게 처리되나요?", "거래처당 2,000원 + 택배비 / 상호명 미기재 시 포장비 1,000원 추가"],
          ["입금 시 주의사항은?", "반드시 상호명으로 입금해야 하며, 성함 입금 시 누락될 수 있음"],
          ["배송지 입력 마감은 언제인가요?", "정규: 13~01시 / 추가: 01~13시 (출고 보장 불가)"],
          ["도매 주문도 해주나요?", "아니요. 도매매장 주문은 고객님이 직접 넣어주셔야 합니다."]
        ].map(([q, a], idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow space-y-1">
            <strong className="block text-blue-700">Q. {q}</strong>
            <p className="text-sm text-gray-800">A. {a}</p>
          </div>
        ))}
      </section>
      {/* 결제 및 입금 안내 */}
      <section className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">💳 결제 및 입금 안내</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>무통장 입금만 가능</li>
          <li>입금 계좌: 신한은행 110-348-978893 (예금주: 최현준)</li>
          <li>입금 시 반드시 “쇼핑몰 상호명”으로 입금</li>
          <li>성함으로 입금 시 누락될 수 있습니다</li>
          <li>입금 마감: 매일 23:30까지</li>
          <li>세금계산서 발행 마감일: 매월 5일</li>
        </ul>
      </section>

      {/* 브랜드형 푸터 */}
      <footer id="contact" className="bg-blue-700 text-white text-center text-sm py-10 mt-20">
        <div className="space-y-1">
          <p>문의: 010-9751-8876</p>
          <p>카카오톡 ID: perpect9751</p>
          <p>입금계좌: 신한 110-348-978893 (최현준)</p>
        </div>
        <p className="text-xs text-blue-200 mt-4">
          © 2024 대리발송 대발이. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
