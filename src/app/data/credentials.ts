const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const CREDENTIALS = [
  { title: "정보처리산업기사", issuer: "한국산업인력공단", image: asset("credentials/engineer.png") },
  { title: "네트워크 관리사", issuer: "한국정보통신자격협회", image: asset("credentials/network.png") },
  { title: "가상현실 플랫폼 제작", issuer: "MBC 미디어 캠퍼스", image: asset("credentials/vr_content_certificate.jpg") },
  { title: "사물인터넷 · 메타버스 연계 과정", issuer: "SeSAC 청년취업사관학교", image: asset("credentials/sessac.png") },
  { title: "AI Challenge for Biodiversity", issuer: "Microsoft", image: asset("credentials/MicrosoftAI.png") },
  { title: "메타 마케팅 교육", issuer: "Meta", image: asset("credentials/facebook_marketing.jpeg") },
  { title: "컴퓨터공학 학사", issuer: "대학교 졸업", image: asset("credentials/degree_certificate.png") },
];
