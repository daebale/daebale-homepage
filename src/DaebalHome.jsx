import React from "react";

export default function DaebalHome() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      
      {/* 네비게이션 바 */}
      <nav className="bg-white shadow sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="대발이 로고" className="h-8 sm:h-10" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700">대리발송 대발이</h1>
        </div>
        <ul className="flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium">
          <li><a href="#about" className="hover:text-blue-600">소개</a></li>
          <li><a href="#services" className="hover:text-blue-600">서비스</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">요금</a></li>
          <li><a href="#returns" className="hover:text-blue-600">반품</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#contact" className="hover:text-blue-600">문의</a></li>
        </ul>
      </nav>

      {/* 메인 슬로건 */}
      <header className="bg-white text-center py-10 sm:py-14 px-4 shadow">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 leading-relaxed">
          동대문부터 고객 문 앞까지,<br />대발이가 꼼꼼하게 대신 갑니다!
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          사입, 검수, 포장, 출고까지 — 쇼핑몰 사장님의 물류 파트너
        </p>
      </header>

      {/* 회사 소개 */}
      <section id="about" className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">회사 소개</h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          ‘대리발송 대발이’는 동대문 의류 전문 3PL 서비스입니다.  
          동대문 도매 상품 사입, 검수, 포장, 택배 출고까지 전 과정을 대신 처리하여  
          쇼핑몰 운영자들이 판매에 집중할 수 있도록 돕습니다.
        </p>
        <p className="text-sm text-gray-600 italic">
          일반 사입삼촌보다 더 꼼꼼하고, 더 저렴하게.<br />
          검수부터 택배까지 — 대발이가 책임집니다.
        </p>
      </section>

      {/* 검수 포인트 */}
      <section className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-xl shadow">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">🔍 검수 포인트</h3>
        <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
          <li>실밥, 오염, 단추, 지퍼, 뜯어짐 — 전수검사 수준의 검수</li>
          <li>사장님보다 꼼꼼하게 검수합니다</li>
          <li>불량 필터링 → 고객 CS 줄이고, 후기 평점 지킵니다</li>
        </ul>
      </section>
      {/* 서비스 요약 */}
      <section id="services" className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 text-center">📦 주요 서비스</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "사입 대행", desc: "동대문 도매매장 사입 처리" },
            { title: "검수 처리", desc: "불량, 오염, 실밥 등 전수검사" },
            { title: "포장/합포장", desc: "개별 포장 및 합포장 (추가 500원)" },
            { title: "택배 출고", desc: "한진택배 연동, 당일/익일 출고" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 text-center">
              <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 요금 안내 */}
      <section id="pricing" className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">💰 요금 안내</h3>
        <p className="text-sm sm:text-base text-gray-700">
          사입 + 검수 + 포장 + 택배까지 포함된 통합 단가입니다.
        </p>

        <table className="w-full text-sm border text-left rounded-lg overflow-hidden">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="p-3 border">월 출고건수</th>
              <th className="p-3 border">1건당 요금</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["~300건", "4,500원"],
              ["301~500건", "4,000원"],
              ["501~600건", "3,900원"],
              ["601~700건", "3,800원"],
              ["701~800건", "3,700원"],
              ["801~1000건", "3,600원"],
              ["1001건 이상", "3,500원"],
            ].map(([range, price], idx) => (
              <tr key={idx}>
                <td className="p-3 border">{range}</td>
                <td className="p-3 border">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-sm sm:text-base text-gray-800">
          <h4 className="font-semibold text-blue-700 mb-2">📌 추가 요금 안내</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>합포장: 1개당 500원 추가</li>
            <li>택배 크기 초과: 80cm+500 / 100cm+1,000 / 120cm+1,700</li>
            <li>지역 추가: 제주 +3,000 / 도서산간 +6,000</li>
            <li>포장 후 취소 / 사장님 수령 전환 시: 건당 1,000원</li>
            <li>실제 사장님 부담: 건당 약 1,500~500원 수준</li>
          </ul>
        </div>
      </section>
      {/* 반품 / 교환 / 불량 처리 */}
      <section id="returns" className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">🔁 반품 / 교환 / 불량 처리</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>반품 상품은 도착 후: 거래처 반품 또는 재고 보관 선택</li>
          <li>반품 택배비: 3,000원</li>
          <li>교환 시: 1건 요금 + 반품비</li>
          <li>불량 건은 CCTV 검수 → 대발이 과실 시 지원</li>
          <li>지원 금액: 반품 2,500원 / 교환 5,000원</li>
          <li>접수 마감: 출고일 기준 7일 이내</li>
          <li className="text-gray-500">※ 안감, 주머니, 패턴, 핏 문제 등은 제외</li>
        </ul>
      </section>

      {/* 재고 보관 안내 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">📦 재고 보관 안내</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>1칸: 65×45×37cm → 월 3,000원</li>
          <li>1앵글(6단): 122×46×195cm → 월 30,000원</li>
          <li>매월 1일 기준 요금 부과 / 월말 출고 시 면제</li>
          <li>재고 수량은 고객이 직접 관리 (유무는 요청 시 확인 가능)</li>
        </ul>
      </section>

      {/* 샘플 / 사장님 수령건 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">📦 샘플 / 사장님 수령건</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>거래처당 2,000원 + 택배비 3,000~6,000원</li>
          <li>받는 사람 이름은 반드시 상호명으로 입력</li>
          <li>상호명 미기재 시 포장비 1,000원 추가</li>
          <li>비닐 그대로 발송 / 묶음 발송 불가 / 배송지 정확히 입력</li>
        </ul>
      </section>

      {/* 클로디 사용법 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">📱 클로디 사용법</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>픽업 주문서는 클로디 어플에서 작성</li>
          <li>샘플 반납/불량 교환 시: [상품명, 색상, 사이즈 반품] 형식으로 전달사항 작성</li>
          <li>전달사항 누락 시 매장에서 접수 안될 수 있음</li>
        </ul>
      </section>

      {/* 퀵파인더 사용법 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">🔎 퀵파인더 (검수 영상 확인)</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>사이트: https://quickfinder.co.kr</li>
          <li>로그인 ID: 전화번호 뒤 8자리</li>
          <li>비밀번호: a+전화번호 8자리+! (예: a12345678!)</li>
          <li>검수 영상은 송장번호 검색으로 확인 가능</li>
          <li className="text-gray-500">※ 13:00~01:00 사이 입력된 배송지 건만 기록됨</li>
        </ul>
      </section>

      {/* 이지어드민 안내 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">⚙️ 출고 자동화 - 이지어드민</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>월 300건 이상 출고 사장님에게 추천</li>
          <li>스마트스토어 등과 연동 → 배송지 자동 입력</li>
          <li>송장번호도 자동 등록</li>
          <li>출고 송장마다 바코드 작업 → 오배송률 0%에 가까움</li>
          <li>재고 현황 실시간 확인 가능</li>
          <li>월 사용료: 5만원</li>
          <li>신청 방법: 카카오톡으로 개별 문의</li>
        </ul>
      </section>
      {/* 배송지 입력 안내 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">✍️ 배송지 입력 안내</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>배송지 입력은 대발이 배송지 사이트에서 작성</li>
          <li>마우스를 올리면 각 항목에 도움말이 나타납니다</li>
          <li>배송지 입력 마감 시간: 13:00 ~ 익일 01:00</li>
          <li>추가건 입력 시간: 01:00 ~ 13:00 (출고 보장 불가)</li>
          <li>배송지는 매일 새로 정확히 입력해주셔야 합니다</li>
          <li>재고 출고 시 반드시 “재고발송”이라고 기재해주세요</li>
        </ul>
      </section>

      {/* 결제 및 입금 안내 */}
      <section id="payment" className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">💳 결제 및 입금 안내</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>결제 방식: 무통장 입금</li>
          <li>입금 계좌: 신한은행 110-348-978893 (최현준)</li>
          <li>입금 시 반드시 “쇼핑몰 상호명”으로 입금</li>
          <li>성함으로 입금 시 누락될 수 있습니다</li>
          <li>입금 마감 시간: 매일 23:30까지</li>
          <li>세금계산서 마감일: 매월 5일</li>
        </ul>
      </section>

      {/* 필수 주의사항 */}
      <section className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">⚠️ 필수 주의사항</h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-1">
          <li>도매매장 주문은 고객님이 직접 진행하셔야 합니다</li>
          <li>입금은 반드시 상호명으로 정확히 해주세요</li>
          <li>재고 출고 시 “재고발송” 기재 필수</li>
        </ul>
      </section>

      {/* FAQ 10문항 */}
      <section id="faq" className="max-w-5xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-700">❓ 자주 묻는 질문 (FAQ)</h3>
        {[
          ["사입비는 따로 있나요?", "아니요. 모든 비용은 건당 요금에 포함됩니다."],
          ["운송장은 어떻게 확인하나요?", "익일 17시 이전에 배송지 사이트에 자동 배정됩니다 (한진택배)."],
          ["포장은 어떻게 하나요?", "기본 개별 포장 / 요청 시 합포장 가능 (500원 추가)"],
          ["검수 영상은 어떻게 보나요?", "퀵파인더에서 송장번호 입력 시 확인 가능합니다 (13시~01시 입력건만 기록)."],
          ["불량 처리는 어떻게 하나요?", "CCTV 확인 후 과실일 경우 택배비 지원 / 7일 이내 접수 필수"],
          ["지원 제외 항목은?", "핏 문제, 안감, 패턴 틀어짐, 주머니 등"],
          ["샘플건은 어떻게 처리되나요?", "거래처당 2,000원 + 택배비 / 상호명 미기재 시 포장비 1,000원 추가"],
          ["배송지 마감 시간은?", "23:30까지 주문서 작성 및 입금 완료 시 당일 출고"],
          ["재고 수량은 누가 관리하나요?", "사장님이 직접 관리 / 대발이는 재고 유무 확인만 지원"],
          ["도매매장 주문도 대발이가 해주나요?", "아니요. 반드시 사장님이 직접 주문 넣어주셔야 합니다."]
        ].map(([q, a], idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded space-y-1">
            <strong className="block text-blue-700">Q. {q}</strong>
            <p className="text-sm text-gray-800">A. {a}</p>
          </div>
        ))}
      </section>
      {/* 푸터 */}
      <footer id="contact" className="bg-white text-center text-sm text-gray-500 py-8 border-t mt-16">
        <p className="mb-1">문의: 010-9751-8876</p>
        <p className="mb-1">카카오톡 ID: perpect9751</p>
        <p className="mb-1">입금계좌: 신한 110-348-978893 (최현준)</p>
        <p className="text-xs text-gray-400 mt-2">© 2024 대리발송 대발이. All rights reserved.</p>
      </footer>
    </div>
  );
}
