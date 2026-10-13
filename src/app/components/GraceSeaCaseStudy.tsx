import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronLeft, ChevronRight, Expand, LockKeyhole, Waves } from 'lucide-react';
import Lightbox from './Lightbox';
import './GraceSeaCaseStudy.css';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const ui = (path: string) => asset(`images/dev/gracesea/${path}`);
const flows = [
  { title: '오늘의 기록과 묵상', subtitle: '마음에 남은 말씀을, 오늘의 삶으로.', description: '기도·말씀·적용을 기록하고 휴대폰을 내려놓습니다. 묵상을 완료한 시간은 나의 바다에 작은 물결로 남습니다.', folder: '1_기록_묵상', video: 'guide-01.mp4', screens: [
    ['01-calendar-before.png', '나의 바다에서 오늘 시작하기'], ['02-scripture-search_1.png', '성경 책·장·절 선택'], ['02-scripture-search_2.png', '검색한 말씀 확인'], ['03-prayer-and-scripture.png', '기도와 말씀 기록'], ['04-practice-and-meditation.png', '삶에 적용할 내용 작성'], ['05-saved.png', '기록 저장'], ['06-calendar-recorded.png', '기록한 날 확인'], ['07-meditation-ready.png', '묵상 시작 준비'], ['08-meditation-running.png', '휴대폰을 내려놓고 묵상'], ['09-meditation-complete.png', '묵상 완료'], ['10-calendar-complete.png', '오늘의 바다 채움 확인'],
  ] },
  { title: '등대에서 함께 기도하기', subtitle: '서로의 기도가 되어주는 작은 공동체.', description: '등대에 모여 기도제목을 나누고 함께 중보기도합니다. 개인의 묵상 기록과 공동체에 공유하는 기도제목은 구분합니다.', folder: '2_등대_묵상', video: 'guide-02.mp4', screens: Array.from({ length: 8 }, (_, i) => [`${i + 1}.png`, `등대 사용 흐름 ${i + 1}`]) },
  { title: '커뮤니티 중보기도', subtitle: '작은 기도가, 더 넓은 바다로.', description: '공개할 기도제목을 직접 작성하고 익명 나눔도 선택할 수 있습니다. 다른 사람의 기도제목을 읽고 함께 마음을 모읍니다.', folder: '3_커뮤니티_묵상', video: 'guide-03.mp4', screens: Array.from({ length: 6 }, (_, i) => [`${i + 1}.png`, `커뮤니티 사용 흐름 ${i + 1}`]) },
];

function Screen({ src, label, onClick, eager = false }: { src: string; label: string; onClick?: () => void; eager?: boolean }) {
  return <button className="gs-screen" onClick={onClick} aria-label={`${label} 크게 보기`}><img src={src} alt={label} loading={eager ? 'eager' : 'lazy'} /><span className="gs-screen-expand"><Expand size={16} /> 크게 보기</span></button>;
}

export default function GraceSeaCaseStudy() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [gallery, setGallery] = useState<{ images: string[]; index: number } | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const flow = flows[active];
  const screenPaths = flow.screens.map(([filename]) => ui(`${flow.folder}/${filename}`));
  useEffect(() => {
    const previous = document.title;
    document.title = '은혜의 바다 — 프로젝트 소개 | 연수';
    return () => { document.title = previous; };
  }, []);
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  const chooseFlow = (index: number) => { video.current?.pause(); setActive(index); setStep(0); };
  const heroScreens = [ui('1_기록_묵상/10-calendar-complete.png'), ui('1_기록_묵상/08-meditation-running.png'), ui('2_등대_묵상/2.png')];
  return <main className="gs-page">
    <nav className="gs-nav" aria-label="프로젝트 메뉴"><Link to="/main?category=Solo" className="gs-back"><ArrowLeft size={16} /> PORTFOLIO</Link><a className="gs-brand" href="#/gracesea" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={ui('icon_blue.png')} alt="" />은혜의 바다</a><button onClick={() => goTo('gs-experience')}>앱 살펴보기 <ArrowUpRight size={17} /></button></nav>
    <div className="gs-project-meta"><span>PERSONAL PROJECT / APP DESIGN & DEVELOPMENT</span><span>GRACE SEA — CASE STUDY</span></div>
    <section className="gs-hero" aria-labelledby="gs-title"><div className="gs-hero-top"><span className="gs-pill"><Waves size={14} /> A drop of grace, every day.</span><span>기록 · 묵상 · 공동체</span></div><h1 id="gs-title">은혜의 바다<span>GRACE SEA</span></h1><div className="gs-hero-story"><h2>한 방울씩 모여<br />바다가 된다.</h2><p>매일의 기도와 말씀, 짧은 묵상이<br />나만의 바다를 채웁니다.</p><button className="gs-dark-button" onClick={() => goTo('gs-overview')}>이야기 살펴보기 <ArrowDown size={17} /></button></div><div className="gs-hero-phones">{heroScreens.map((src, i) => <div className={`gs-hero-phone gs-hero-phone-${i}`} key={src}><Screen src={src} label={['나의 바다', '묵상 타이머', '등대'][i]} eager onClick={() => setGallery({ images: heroScreens, index: i })} /></div>)}</div><div className="gs-hero-wave" aria-hidden="true" /><div className="gs-hero-bottom"><span>DESIGNED TO HELP YOU PAUSE.</span><span>01 — 06</span></div></section>
    <div className="gs-facts"><div><span>PROJECT</span><p>묵상 기록 · 공동 기도 앱</p></div><div><span>ROLE</span><p>개인 개발 프로젝트</p></div><div><span>BUILT WITH</span><p>React Native · Expo · Supabase</p></div><div><span>FOCUS</span><p>기록에서 실제 묵상으로</p></div></div>
    <section id="gs-overview" className="gs-overview"><div className="gs-section-tag">01 / OVERVIEW</div><div><h2>적는 데서 멈추지 않고,<br /><em>잠시 머무를 수 있도록.</em></h2><p>기도와 말씀을 기록해도, 다음 화면으로 넘어가는 순간 묵상은 쉽게 뒤로 밀립니다. 은혜의 바다는 기록한 내용을 천천히 돌아보고 삶에 적용할 시간을 만드는 데서 출발했습니다.</p><p>혼자 쌓아가는 시간은 ‘나의 바다’로, 함께 기도하는 공동체는 ‘등대’로 표현했습니다.</p></div><Waves className="gs-overview-waves" strokeWidth={1} aria-hidden="true" /></section>
    <figure className="gs-artwork"><img src={ui('gracesea_1.png')} alt="말씀을 기록하고 묵상하는 캐릭터와 파도로 표현한 은혜의 바다" loading="lazy" /><figcaption>매일의 작은 기록과 묵상을 하나의 바다로 연결하는 시각적 이야기.</figcaption></figure>
    <section className="gs-problem"><div className="gs-section-heading"><span className="gs-section-tag">02 / PROBLEM & APPROACH</span><h2>작은 습관을 위한<br />세 가지 연결.</h2></div><div className="gs-problem-grid">{[
      ['01', '기록에서 묵상으로', '기도와 말씀을 적어도, 실제 묵상할 시간은 놓치기 쉽습니다.', '기록 저장 다음에 묵상 타이머를 연결해 휴대폰을 내려놓도록 구성했습니다.'],
      ['02', '하루에서 꾸준함으로', '날짜별 메모만으로는 신앙생활의 흐름을 돌아보기 어렵습니다.', '기록한 날과 묵상한 날을 구분하고, 완료한 시간을 달력과 물결에 반영했습니다.'],
      ['03', '개인에서 공동체로', '함께 기도하고 싶지만, 깊은 개인 기록까지 공개하고 싶지는 않습니다.', '개인 묵상은 비공개로 두고, 나눌 기도제목만 직접 작성하도록 했습니다.'],
    ].map(([number, title, problem, solution]) => <article key={number}><span className="gs-card-number">{number}</span><h3>{title}</h3><p>{problem}</p><div className="gs-solution"><ArrowDown size={18} /><p>{solution}</p></div></article>)}</div></section>
    <section className="gs-journey"><div className="gs-section-tag">03 / CORE EXPERIENCE</div><h2>화면을 내려놓으면,<br /><em>나의 바다가 차오릅니다.</em></h2><p>기록은 시작이고, 묵상은 그 기록에 머무르는 시간입니다.</p><div className="gs-journey-steps">{['기도·말씀·적용 기록', '휴대폰을 뒤집어 내려놓기', '묵상에 집중하기', '나의 바다 돌아보기'].map((label, i) => <div key={label}><span>0{i + 1}</span><h3>{label}</h3>{i < 3 && <ArrowRight size={20} aria-hidden="true" />}</div>)}</div><div className="gs-journey-note"><Waves size={19} /><p>휴대폰을 내려놓으면 시간이 쌓이고, 들면 잠시 멈춥니다. 묵상을 완료하면 작성한 항목마다 1/3칸씩, 하루 최대 한 칸이 채워집니다.</p></div></section>
    <section id="gs-experience" className="gs-experience"><div className="gs-section-heading"><span className="gs-section-tag">04 / APP WALKTHROUGH</span><h2>작은 물결이 이어지는<br />앱 속의 순간들.</h2><p>실제 앱 화면과 영상으로 사용 흐름을 살펴보세요.</p></div><div className="gs-tabs" role="tablist" aria-label="앱 사용 흐름">{flows.map((item, i) => <button key={item.title} role="tab" id={`gs-tab-${i}`} aria-selected={active === i} aria-controls="gs-flow-panel" tabIndex={active === i ? 0 : -1} onClick={() => chooseFlow(i)} onKeyDown={event => { if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (active + (event.key === 'ArrowRight' ? 1 : 2)) % 3; chooseFlow(next); document.getElementById(`gs-tab-${next}`)?.focus(); } }}><span>0{i + 1}</span>{item.title}</button>)}</div><div className="gs-flow-panel" id="gs-flow-panel" role="tabpanel" aria-labelledby={`gs-tab-${active}`}><div className="gs-flow-intro"><h3>{flow.subtitle}</h3><p>{flow.description}</p></div><div className="gs-screen-row">{Array.from({ length: Math.min(3, flow.screens.length - step) }, (_, offset) => { const index = step + offset; return <figure key={`${active}-${index}`}><Screen src={screenPaths[index]} label={flow.screens[index][1]} onClick={() => setGallery({ images: screenPaths, index })} /><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{flow.screens[index][1]}</figcaption></figure>; })}</div><div className="gs-screen-controls"><p aria-live="polite">{step + 1}–{Math.min(step + 3, flow.screens.length)} <span>/ {flow.screens.length} SCREENS</span></p><div><button aria-label="이전 앱 화면" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 3))}><ChevronLeft size={20} /></button><button aria-label="다음 앱 화면" disabled={step + 3 >= flow.screens.length} onClick={() => setStep(step + 3)}><ChevronRight size={20} /></button></div></div><div className="gs-video-block"><div><span className="gs-section-tag">WATCH THE FLOW</span><h3>{flow.title}</h3><p>기록부터 완료까지, 실제 사용 영상.</p></div><video key={flow.video} ref={video} controls playsInline preload="metadata" aria-label={`${flow.title} 사용 영상`}><source src={asset(`videos/gracesea/${flow.video}`)} type="video/mp4" /><a href={asset(`videos/gracesea/${flow.video}`)}>영상 파일 열기</a></video></div></div></section>
    <section className="gs-design"><div className="gs-section-heading"><span className="gs-section-tag">05 / VISUAL IDENTITY</span><h2>편안하게 머무는<br />바다의 색과 표정.</h2><p>앱의 크림색 배경, 맑은 파란색, 손그림 캐릭터를 소개 페이지까지 이어갑니다.</p></div><div className="gs-design-grid"><div className="gs-colors">{[['#F7F4EC', '따뜻한 여백'], ['#D9EFFD', '잔잔한 물결'], ['#58A9E0', '오늘의 은혜'], ['#163D56', '깊은 바다']].map(([color, label]) => <div key={color}><span style={{ background: color }} /><b>{label}</b><small>{color}</small></div>)}</div><div className="gs-icons">{['icon_blue.png', 'icon_white.png'].map((name, i) => <img src={ui(name)} alt={`은혜의 바다 ${i === 0 ? '파란색' : '흰색'} 앱 아이콘`} loading="lazy" key={name} />)}<p>A QUIET PLACE FOR YOUR DAILY GRACE.</p></div></div></section>
    <section className="gs-build"><div className="gs-section-tag">06 / DEVELOPMENT</div><h2>마음을 담는 기록이기에,<br /><em>보호하는 방식도 함께.</em></h2><div className="gs-build-grid"><article><LockKeyhole size={25} /><h3>개인 기록 보호</h3><p>이메일 인증과 서버 접근 권한 확인, 개인 묵상 본문 암호화를 적용했습니다.</p></article><article><BookOpen size={25} /><h3>공유 범위 구분</h3><p>개인 묵상은 자동으로 공유하지 않습니다. 등대와 커뮤니티에 나눌 기도제목은 따로 작성합니다.</p></article><article><Check size={25} /><h3>사용자의 관리 권한</h3><p>계정 삭제와 신고·차단 기능을 마련하고 암호화와 공유 범위를 안내했습니다.</p></article></div><div className="gs-stack"><span>React Native</span><span>Expo</span><span>Supabase</span><p>기록 → 묵상 → 돌아보기 → 함께 기도하기를 하나의 앱으로 구현했습니다.</p></div></section>
    <section className="gs-ending"><Waves size={36} strokeWidth={1} /><span>EVERY DROP BECOMES A SEA.</span><h2>오늘의 작은 은혜가,<br />내일의 바다가 되도록.</h2><Link className="gs-dark-button" to="/main?category=Solo">다른 프로젝트 보기 <ArrowUpRight size={17} /></Link></section>
    <footer className="gs-footer"><span>은혜의 바다 / GRACE SEA</span><span>DESIGN & DEVELOPMENT BY 연수</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button></footer>
    {gallery && <Lightbox images={gallery.images} index={gallery.index} onChange={index => setGallery({ ...gallery, index })} onClose={() => setGallery(null)} />}
  </main>;
}
