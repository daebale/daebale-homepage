// 1/5 — 네비게이션 + 슬로건 + 회사소개 + 검수포인트 + 서비스요약

import React from "react";

export default function DaebalHome() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* 네비게이션 바 */}
      <nav className="bg-white shadow sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">대리발송 대발이</h1>
        <ul className="flex gap-4 text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600">소개</a></li>
          <li><a href="#services" className="hover:text-blue-600">서비스</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">요금</a></li>
          <li><a href="#returns" className="hover:text-blue-600">반품</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#contact" className="hover:text-blue-600">문의</a></li>
        </ul>
      </nav>

      {/* 메인 슬로건 */}
      <header className="bg-white py-12 px-4 text-center shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-relaxed">
          동대문부터 고객 문 앞까지, <br />대발이가 꼼꼼하게 대신 갑니다!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          사입, 검수, 포장, 출고까지 — 쇼핑몰 사장님의 물류 파트너
        </p>
      </header>

      {/* 회사 소개 */}
      <section id="about" className="max-w-4xl mx-auto bg-white mt-12 p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700">회사 소개</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          ‘대리발송 대발이’는 동대문 의류 전문 3PL 서비스입니다.
          동대문 시장을 중심으로 한 도매 상품 사입, 검수, 포장, 택배 출고까지 전 과정을 대신 처리하여,
          쇼핑몰 운영자분들이 판매에만 집중할 수 있도록 돕습니다.
        </p>
        <p className="text-sm text-gray-600 italic">
          일반 사입삼촌보다 더 꼼꼼하고, 더 저렴하게. <br />
          검수부터 택배까지 — 대발이가 책임집니다.
        </p>
      </section>

      {/* 검수 포인트 강조 */}
      <section className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">🔍 검수 포인트</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>실밥, 오염, 단추, 지퍼, 뜯어짐 — 전수검사 수준의 검수</li>
          <li>사장님보다 꼼꼼하게 검수합니다</li>
          <li>불량 필터링 → 고객 CS 줄이고, 후기 평점 지킵니다</li>
        </ul>
      </section>

      {/* 서비스 요약 */}
      <section id="services" className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {[
          { title: "사입 대행", desc: "동대문 도매매장 사입 처리" },
          { title: "검수 처리", desc: "불량, 오염, 실밥 등 전수검사" },
          { title: "포장/합포장", desc: "개별 포장 및 합포장 (추가 500원)" },
          { title: "택배 출고", desc: "한진택배 연동, 당일/익일 출고" },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 text-center">
            <h4 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h4>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>
      {/* 요금 안내 */}
      <section id="pricing" className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">💰 요금 안내</h3>
        
        <table className="w-full text-sm border text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border-b">월 출고건수</th>
              <th className="p-2 border-b">1건당 요금</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border-b">~300건</td><td className="p-2 border-b">4,500원</td></tr>
            <tr><td className="p-2 border-b">301~500건</td><td className="p-2 border-b">4,000원</td></tr>
            <tr><td className="p-2 border-b">501~600건</td><td className="p-2 border-b">3,900원</td></tr>
            <tr><td className="p-2 border-b">601~700건</td><td className="p-2 border-b">3,800원</td></tr>
            <tr><td className="p-2 border-b">701~800건</td><td className="p-2 border-b">3,700원</td></tr>
            <tr><td className="p-2 border-b">801~1000건</td><td className="p-2 border-b">3,600원</td></tr>
            <tr><td className="p-2 border-b">1001건 이상</td><td className="p-2 border-b">3,500원</td></tr>
          </tbody>
        </table>

        <div className="text-sm text-gray-800 space-y-1">
          <p className="font-semibold mt-4 text-blue-600">추가 요금 안내:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>합포장: 1개당 500원 추가</li>
            <li>택배 크기 초과: 80cm+500원 / 100cm+1,000원 / 120cm+1,700원</li>
            <li>지역 추가 요금: 제주 +3,000원 / 도서산간 +6,000원</li>
            <li>포장 후 수령/반품 전환 시: 건당 1,000원 부과</li>
            <li>실제 사장님 부담은 건당 약 1,500원~500원 수준</li>
          </ul>
        </div>
      </section>
      {/* 반품 / 교환 / 불량 처리 */}
      <section id="returns" className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">🔁 반품 / 교환 / 불량 처리</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>반품 도착 후: 거래처 반품 또는 재고 보관 가능</li>
          <li>반품 택배비: 3,000원</li>
          <li>교환: 1건 요금 + 반품 택배비</li>
          <li>불량 건은 CCTV 확인 후 과실 시 지원</li>
          <li>지원 내용: 반품 2,500원 / 교환 5,000원</li>
          <li>접수 마감: 출고일 기준 7일 이내</li>
          <li className="text-gray-500">※ 안감, 주머니, 핏, 패턴 틀어짐 등은 제외</li>
        </ul>
      </section>

      {/* 재고보관 안내 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">📦 재고 보관 안내</h3>
        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800">
          <li>1칸 보관: 65×45×37cm → 월 3,000원</li>
          <li>1앵글 보관: 122×46×195cm (6단) → 월 30,000원</li>
          <li>매월 1일 기준으로 요금 부과</li>
          <li>월말 출고 시 요금 없음</li>
          <li>재고 수량은 직접 관리 / 필요 시 보관 유무만 확인 가능</li>
        </ul>
      </section>

      {/* 샘플 / 사장님 수령건 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">📦 샘플 / 사장님 수령건 안내</h3>
        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800">
          <li>샘플/지인배송 건은 거래처당 2,000원 + 택배비 3,000~6,000원 부과</li>
          <li>받는 사람 이름은 반드시 상호명으로 입력</li>
          <li>상호명 누락 시 상품당 포장비 1,000원 추가</li>
          <li>비닐 그대로 배송 / 묶음 발송 불가 / 매번 배송지 정확히 입력</li>
        </ul>
      </section>

      {/* 클로디 사용법 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">📱 클로디 사용법</h3>
        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800">
          <li>픽업 주문서는 클로디 어플에서 작성</li>
          <li>샘플 반납/불량 교환 시: [상품명, 색상, 사이즈 반품] 형식으로 입력</li>
          <li>전달사항 누락 시 매장에서 접수되지 않을 수 있음</li>
        </ul>
      </section>

      {/* 퀵파인더 안내 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">🔎 퀵파인더 (검수 영상 확인)</h3>
        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800">
          <li>사이트: https://quickfinder.co.kr</li>
          <li>ID: 전화번호 뒤 8자리 / PW: a+8자리+! (예: a12345678!)</li>
          <li>송장번호 검색 시 검수 영상 확인 가능</li>
          <li>※ 영상 기록은 13:00~01:00 사이 입력된 배송지 건만 남습니다</li>
        </ul>
      </section>
      {/* 결제 및 입금 안내 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">💳 결제 및 입금 안내</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>결제는 무통장입금으로만 가능</li>
          <li>입금계좌: 신한은행 110-348-978893 (최현준)</li>
          <li>입금 시 반드시 “쇼핑몰 상호명”으로 입금</li>
          <li>성함으로 입금 시 누락될 수 있음</li>
          <li>입금 마감 시간: 매일 23:30까지</li>
          <li>세금계산서는 매달 5일 마감</li>
        </ul>
      </section>

      {/* 필수 주의사항 */}
      <section className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">⚠️ 필수 주의사항</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>도매매장(거래처) 주문은 사장님이 직접 넣으셔야 합니다</li>
          <li>대발이는 주문 대행을 하지 않습니다</li>
          <li>입금 시 상호명으로 정확히 입금하지 않으면 누락될 수 있습니다</li>
          <li>배송지 입력 시간 준수: 13시~01시 (정규), 01시~13시(추가건)</li>
          <li>재고 출고 시 주문서에 반드시 “재고발송”이라고 기재해야 처리됩니다</li>
        </ul>
      </section>

      {/* FAQ 섹션 */}
      <section id="faq" className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-2">❓ 자주 묻는 질문 (FAQ)</h3>
        {[
          ["사입비는 따로 있나요?", "모든 비용이 건당 요금에 포함되어 있습니다."],
          ["운송장은 어떻게 확인하나요?", "익일 17시 전 배송지 사이트에 자동 배정됩니다 (한진택배)."],
          ["포장은 어떻게 하나요?", "기본 개별 포장 / 요청 시 합포장 가능 (1개당 500원 추가)"],
          ["검수 영상은 어디서 보나요?", "퀵파인더 사이트에서 송장번호로 확인 (13~01시 입력건만 영상 기록)"],
          ["반품 / 교환 기준은?", "CCTV 확인 후 과실 시 지원 (반품 2,500원 / 교환 5,000원), 7일 이내 접수 필수"],
          ["불량 예외 항목은?", "핏 문제, 안감, 주머니, 패턴 틀어짐 등은 지원 제외"],
          ["샘플 / 사장님 수령건은 어떻게 처리되나요?", "거래처당 2,000원 + 택배비 / 상호명 미기재 시 포장비 1,000원 추가"],
          ["주문서 마감 시간은?", "23시 30분까지 주문서 작성 + 입금 완료 시 당일 출고"],
          ["재고는 누가 관리하나요?", "수량은 사장님이 직접 관리 / 대발이는 보관 유무만 확인 가능"],
          ["도매매장 주문도 대발이가 넣어주나요?", "아니요, 반드시 고객님이 직접 넣으셔야 합니다."],
        ].map(([q, a], index) => (
          <div key={index} className="bg-gray-100 rounded p-4">
            <strong className="block mb-1 text-blue-800">Q. {q}</strong>
            <p className="text-sm text-gray-800">A. {a}</p>
          </div>
        ))}
      </section>
      {/* 푸터 */}
      <footer id="contact" className="bg-white text-center text-sm text-gray-500 py-6 border-t mt-12">
        <p>문의: 010-9751-8876</p>
        <p>카카오톡 ID: perpect9751</p>
        <p>입금계좌: 신한 110-348-978893 (최현준)</p>
        <p className="text-xs text-gray-400 mt-2">© 2024 대리발송 대발이. All rights reserved.</p>
      </footer>
    </div>
  );
}
