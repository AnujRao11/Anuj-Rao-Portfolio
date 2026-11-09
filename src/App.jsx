import { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL;
const img = (path) => `${base}images/${path}`;

const navLinks = [
  ['Home', 'home'], ['About', 'about'], ['Education', 'education'], ['NCC journey', 'ncc'],
  ['Achievements', 'achievements'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Gallery', 'gallery'], ['Contact', 'contact'],
];

const gallery = [
  { src: 'ncc/raj-bhavan.jpg', alt: 'Anuj standing at Raj Bhavan in NCC uniform', caption: 'At Raj Bhavan', className: 'gallery-wide' },
  { src: 'ncc/cadet-of-honour.jpg', alt: 'Anuj standing in ceremonial NCC uniform among service flags', caption: 'A ceremonial moment at camp', className: '' },
  { src: 'ncc/rdc-cadet-group.jpg', alt: 'Uttar Pradesh cadets at Republic Day Camp 2024', caption: 'The Uttar Pradesh contingent · RDC 2024', className: 'gallery-wide' },
  { src: 'ncc/trophy-ceremony.jpg', alt: 'Cadets presenting a trophy at an NCC event', caption: 'Team achievement', className: '' },
  { src: 'ncc/republic-day-camp-uniform.jpg', alt: 'Anuj at Republic Day Camp in uniform', caption: 'Republic Day Camp · 2024', className: '' },
  { src: 'ncc/uttar-pradesh-contingent.jpg', alt: 'Cadets representing Uttar Pradesh', caption: 'With fellow cadets', className: '' },
  { src: 'ncc/cadet-team.jpg', alt: 'Anuj with fellow NCC cadets', caption: 'The friendships behind the uniform', className: '' },
  { src: 'ncc/india-gate-group.jpg', alt: 'Cadets together near India Gate', caption: 'A day in Delhi', className: 'gallery-wide' },
  { src: 'ncc/annual-camp-recognition.jpg', alt: 'Anuj receiving a presentation during an NCC camp', caption: 'A camp recognition', className: '' },
  { src: 'ncc/cadet-medal-display.jpg', alt: 'Anuj with fellow cadets at a medal display', caption: 'A moment with fellow cadets', className: '' },
  { src: 'achievements/rdc-selection-press.jpg', alt: 'Hindi newspaper coverage of Anuj’s Republic Day Camp selection', caption: 'The selection announcement · local press', className: 'gallery-wide' },
  { src: 'achievements/rdc-selection-press-detail.jpg', alt: 'Hindi newspaper coverage of Anuj’s RDC selection', caption: 'RDC selection in the local press', className: 'gallery-wide' },
  { src: 'achievements/cadet-welcome-press.jpg', alt: 'Hindi newspaper coverage of the cadets returning from the Republic Day Parade', caption: 'The homecoming · local press', className: 'gallery-wide' },
  { src: 'achievements/college-sports-press.jpg', alt: 'Hindi newspaper clipping about a college sports event', caption: 'Campus sport · local press', className: '' },
  { src: 'achievements/college-volleyball-press.jpg', alt: 'Hindi newspaper coverage of an inter-class volleyball competition', caption: 'College volleyball · local press', className: '' },
  { src: 'achievements/childrens-day-dialogue-press.jpg', alt: 'Hindi newspaper coverage of a student dialogue with the district magistrate', caption: 'A student dialogue · local press', className: 'gallery-wide' },
];

const recognitions = [
  { year: '2024', title: 'DG Medal', copy: 'A recognition from the Republic Day Camp journey, remembered as a milestone in service and discipline.', image: 'ncc/medal-ceremony.jpg', alt: 'Anuj receiving a medal at camp' },
  { year: '2024', title: 'ADG Commendation Card', copy: 'Commended by the Additional Director General, NCC Directorate Uttar Pradesh, for service to the organisation.', image: 'ncc/commendation-ceremony.jpg', alt: 'Anuj at an NCC commendation ceremony' },
  { year: '2019', title: 'INSPIRE Award', copy: 'Recognised through the Department of Science and Technology’s INSPIRE Awards programme for a science project.', image: 'achievements/science-exhibition-recognition.jpg', alt: 'Anuj at a science exhibition recognition ceremony' },
  { year: '2019', title: 'State Child Scientist', copy: 'Presented a scientific paper at the 27th State Level National Children’s Science Congress in Gorakhpur.', image: null, alt: '' },
  { year: '2023–24', title: 'Republic Day Camp', copy: 'Selected to represent the Uttar Pradesh Directorate at the Annual NCC Republic Day Camp in New Delhi.', image: 'ncc/rdc-portrait-new-delhi.jpg', alt: 'Anuj in his RDC uniform in New Delhi' },
];

const milestoneGroups = [
  {
    title: 'NCC & service',
    items: [
      ['2022', 'EBSB Camp-II, Chennai', 'Participated in the Ek Bharat Shreshtha Bharat camp at Jeppiaar Institute of Technology, Chennai.'],
    ],
  },
  {
    title: 'Science & innovation',
    items: [
      ['2017', 'Maharajganj Vigyan Mahotsav', 'Participated in the science fair at the district science festival.'],
      ['2018', 'Innovation workshop · first place', 'Placed first at a Council of Science & Technology, Uttar Pradesh workshop on innovation.'],
      ['2019', 'Jawaharlal Nehru science exhibition', 'Presented a sustainable farming model at the state-level science, mathematics and environment exhibition.'],
      ['2020', 'CSIR-CIMAP Gyan Vigyan Bal Mela', 'Participated in the science fair activities hosted by CSIR-CIMAP in Lucknow.'],
      ['2020', 'India International Science Festival', 'Participated in IISF 2020, organised with the Ministry of Science and Technology and partner institutions.'],
    ],
  },
  {
    title: 'Sports & campus',
    items: [
      ['2018', '200 m race · third place', 'Finished third at the Maharajganj District Schools’ Association Sports Meet.'],
      ['2019', 'International Yoga Day', 'Participated in a yoga skills demonstration for the fifth International Yoga Day.'],
      ['2024', 'College Foundation Day quiz · second place', 'Placed second in a quiz competition as a first-year B.Sc. student.'],
      ['2024', 'National Nutrition Month speech · third place', 'Placed third in a speech competition organised by the college Home Science Department.'],
      ['2025–26', 'Hammer throw · third place', 'Placed third at the college Annual Sports Meet.'],
      ['2025–26', 'Volleyball · third place', 'Earned third place in an inter-class college volleyball event.'],
      ['2025–26', 'Javelin throw · 32.10 m', 'Recorded a throw of 32.10 metres at the university Annual Athletic Meet.'],
    ],
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className={`section-heading ${light ? 'heading-light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const [supportReply, setSupportReply] = useState('');

  const supportTopics = [
    ['Education', 'Anuj is pursuing a B.Sc. at Mahatma Gandhi P.G. College, affiliated with D.D.U. Gorakhpur University.', '#education'],
    ['NCC & RDC', 'Anuj served in the NCC Army Wing and attended Republic Day Camp 2024 in New Delhi.', '#ncc'],
    ['Achievements', 'Explore Anuj’s NCC recognition, science activities, sports participation and media coverage.', '#achievements'],
  ];

  useEffect(() => {
    if (!activeImage) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setActiveImage(null); };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKey);
    return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', onKey); };
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Anuj Rao home">AR<span>.</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
        {navLinks.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </nav>
      <a className="header-contact" href="#contact">Let’s connect <Arrow diagonal /></a>
    </header>

    <main id="main">
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> Gorakhpur, India <span className="eyebrow-divider">/</span> Portfolio 2026</span>
          <h1>Discipline<br />in action.<br /><em>Curiosity</em><br />in motion.</h1>
          <p className="hero-intro">I’m Anuj Rao — a B.Sc. student, NCC cadet and lifelong learner, finding my way between leadership and technology.</p>
          <div className="hero-actions"><a className="button button-dark" href="#about">Explore my journey <Arrow /></a><a className="text-link" href="#achievements">View achievements <Arrow /></a></div>
          <div className="hero-caption"><span>01 / 08</span><span>Scroll to explore <span className="scroll-line" /></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src={img('profile/anuj-rao-portrait.jpg')} alt="Portrait of Anuj Rao" fetchPriority="high" /></div>
          <div className="hero-stamp"><span>ANUJ<br />RAO</span><span className="stamp-orbit">✳</span></div>
          <div className="hero-image-note"><span className="note-mark">✳</span><span>Curious by nature.<br />Grounded by discipline.</span></div>
          <div className="hero-vertical">STUDENT · NCC CADET · TECHNOLOGY ENTHUSIAST</div>
        </div>
        <div className="hero-bottom"><span>Scroll to know the story</span><a href="#about" aria-label="Scroll to about">↓</a><span>26°45′N 83°22′E</span></div>
      </section>

      <section className="intro-strip" id="about">
        <div className="intro-index">01 <span>—</span> ABOUT</div>
        <div className="intro-content"><p className="intro-statement">A steady journey, shaped by <em>purpose.</em></p><div className="intro-detail"><p>From the parade ground to a physics practical, I’m learning that good work starts with attention, grows through consistency, and gets better when it serves a team.</p><p>Based in Gorakhpur, I study Computer Applications alongside mathematics and physics. NCC has taken me from local training to the Republic Day Camp in New Delhi — an experience that still shapes how I approach every next step.</p><a className="text-link" href="#education">A little more about me <Arrow /></a></div></div>
      </section>

      <section className="education section-pad" id="education">
        <SectionHeading eyebrow="02 / Learning" title="A curious mind, and with room to grow." description="My education brings together computation, mathematical thinking and the physical world." />
        <div className="education-layout">
          <div className="education-feature"><div className="edu-number">01</div><div><span className="eyebrow">2024 — PRESENT</span><h3>Bachelor of Science</h3><p className="edu-school">Mahatma Gandhi P.G. College, Gorakhpur</p><p>Affiliated with Deen Dayal Upadhyaya Gorakhpur University. Coursework across Computer Applications, Mathematics and Physics.</p><div className="tag-row"><span>Computer Applications</span><span>Mathematics</span><span>Physics</span></div></div></div>
          <div className="education-side"><div className="edu-step"><span className="timeline-dot" /><div><span className="eyebrow">2023</span><h3>Senior Secondary</h3><p>Pt. Deen Dayal Inter College, Maharajganj</p><small>Science stream · Physics, Mathematics and Chemistry</small></div></div><div className="edu-step"><span className="timeline-dot" /><div><span className="eyebrow">2021</span><h3>Secondary</h3><p>Pt. Deen Dayal Inter College, Maharajganj</p></div></div><div className="edu-note"><span>↗</span><p>Learning is a practice. I’m building the fundamentals one semester at a time.</p></div></div>
        </div>
      </section>

      <section className="ncc-section" id="ncc">
        <div className="ncc-top section-pad"><div className="ncc-title"><span className="eyebrow">03 / Service & leadership</span><h2>A chapter in<br /><em>olive green.</em></h2><p>My NCC journey has been a lesson in preparation, humility and showing up for the people beside me.</p><a className="button button-light" href="#gallery">Step into the journey <Arrow /></a></div><figure className="ncc-feature-image"><img src={img('ncc/rdc-portrait-new-delhi.jpg')} alt="Anuj at Republic Day Camp 2024 in New Delhi" loading="lazy" /><figcaption><span>Republic Day Camp</span><span>New Delhi · 2024</span></figcaption></figure></div>
        <div className="ncc-facts"><div><strong>2024</strong><span>Republic Day Camp<br />New Delhi</span></div><div><strong>Army Wing</strong><span>NCC Cadet<br />102 UP Battalion</span></div><div><strong>DG Medal</strong><span>Recognition<br />at RDC</span></div><div><strong>ADG</strong><span>Commendation Card<br />Uttar Pradesh</span></div></div>
        <div className="ncc-timeline section-pad"><div className="timeline-label"><span className="eyebrow">THE JOURNEY</span><span className="timeline-rule" /></div><div className="timeline-list">
          <article className="timeline-entry"><span className="timeline-year">2022</span><div><h3>Training and leadership</h3><p>Completed an Advanced Leadership Camp in Agra — an early step in learning to lead with care and responsibility.</p></div><span className="timeline-kind">NCC · AGRA</span></article>
          <article className="timeline-entry"><span className="timeline-year">2023</span><div><h3>NCC ‘B’ Certificate</h3><p>Passed the NCC Certificate ‘B’ examination, building on regular unit training and service.</p></div><span className="timeline-kind">NCC · GORAKHPUR</span></article>
          <article className="timeline-entry"><span className="timeline-year">DEC 2023 — JAN 2024</span><div><h3>Republic Day Camp</h3><p>Represented the Uttar Pradesh Directorate at the Annual NCC Republic Day Camp in New Delhi.</p></div><span className="timeline-kind">NATIONAL CAMP · DELHI</span></article>
          <article className="timeline-entry"><span className="timeline-year">2024</span><div><h3>NCC ‘C’ Certificate</h3><p>Passed the NCC Certificate ‘C’ examination, completing a significant chapter of cadet training.</p></div><span className="timeline-kind">NCC · LUCKNOW</span></article>
        </div></div>
      </section>

      <section className="recognition section-pad" id="achievements">
        <SectionHeading eyebrow="04 / Recognition" title="Milestones, made\nmeaningful." description="A few moments of recognition along the way — each one a reminder of the people, preparation and persistence behind it." />
        <div className="recognition-grid">{recognitions.map((item, i) => <article className="recognition-card" key={item.title}>{item.image ? <button className="recognition-image image-button" onClick={() => setActiveImage({ src: item.image, alt: item.alt, caption: `${item.title} · ${item.year}` })} aria-label={`View ${item.title} photograph`}><img src={img(item.image)} alt={item.alt} loading="lazy" /><span className="image-open">↗</span></button> : <div className="recognition-image recognition-note" aria-label="State Child Scientist at the 27th State Level National Children’s Science Congress, 2019"><span>27<sup>th</sup></span><small>STATE LEVEL<br />NATIONAL CHILDREN’S<br />SCIENCE CONGRESS · 2019</small></div>}<div className="recognition-meta"><span>{item.year}</span><span>0{i + 1} / 05</span></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        <div className="milestone-groups"><div className="milestone-heading"><span className="eyebrow">MORE ALONG THE WAY</span><h3>Learning, service<br />and competition.</h3></div>{milestoneGroups.map((group) => <div className="milestone-group" key={group.title}><h4>{group.title}</h4>{group.items.map(([year, title, copy]) => <article className="milestone-item" key={title}><span>{year}</span><div><h5>{title}</h5><p>{copy}</p></div></article>)}</div>)}</div>
        <div className="press-row"><div><span className="eyebrow">IN THE LOCAL PRESS</span><p>Stories from Gorakhpur and Maharajganj have followed the RDC selection and return, as well as campus sports and community events.</p></div><button className="text-link" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>Browse press clippings <Arrow /></button></div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <SectionHeading eyebrow="05 / What I’m learning" title="Tools for the\nnext idea." description="Grounded in coursework, with plenty still to explore." />
        <div className="skills-grid"><div className="skill-column"><span className="skill-index">01</span><h3>Coursework</h3><p>Concepts I’m studying and applying through my degree.</p><div className="skill-pills"><span>C</span><span>C++</span><span>Object-Oriented Programming</span><span>SQL</span><span>DBMS</span><span>Mathematics</span><span>Physics</span></div></div><div className="skill-column"><span className="skill-index">02</span><h3>Building familiarity</h3><p>Tools and practices I’m beginning to use.</p><div className="skill-pills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Git & GitHub</span><span>Web development basics</span></div></div><div className="skill-column skill-column-last"><span className="skill-index">03</span><h3>Exploring</h3><p>Questions and fields I’m keen to learn more about.</p><div className="skill-pills"><span>Artificial intelligence</span><span>Emerging technology</span><span>Data & software</span></div></div></div>
      </section>

      <section className="projects-section section-pad" id="projects"><div className="projects-heading"><SectionHeading eyebrow="06 / Projects" title="The next thing\nis taking shape." description="The material shared for this portfolio did not include a technical project or repository to feature yet." /></div><div className="project-placeholder"><div className="project-orbit"><span>+</span><i /><i /><i /></div><div className="project-copy"><span className="eyebrow">WORK IN PROGRESS</span><h3>Room for the first build.</h3><p>As I develop a project, this space can tell its story — what it does, how it works and what I learned along the way.</p><span className="project-tags">PROJECT · TECHNOLOGY · LEARNING</span></div></div></section>

      <section className="gallery-section section-pad" id="gallery"><div className="gallery-heading"><SectionHeading eyebrow="07 / Moments" title="The story, in frames." description="A few moments from camps, recognition and time with fellow cadets." /><span className="gallery-count">{String(gallery.length).padStart(2, '0')} PHOTOGRAPHS<br />FROM THE ARCHIVE</span></div><div className="gallery-grid">{gallery.map((item) => <button key={item.src} className={`gallery-item image-button ${item.className}`} onClick={() => setActiveImage({ src: item.src, alt: item.alt, caption: item.caption })} aria-label={`Open photo: ${item.caption}`}><img src={img(item.src)} alt={item.alt} loading="lazy" /><span className="gallery-caption"><span>{item.caption}</span><span>↗</span></span></button>)}</div></section>

      <section className="interests-section"><div className="interests-inner section-pad"><div><span className="eyebrow">A LITTLE OFF THE PAGE</span><h2>Beyond the<br />classroom.</h2></div><div className="interest-list"><span>Cricket <i>01</i></span><span>Badminton <i>02</i></span><span>Defence & security <i>03</i></span><span>Science & technology <i>04</i></span><span>Leadership & teamwork <i>05</i></span></div></div></section>

      <section className="contact-section section-pad" id="contact"><span className="eyebrow">08 / Say hello</span><h2>Good things begin<br />with a <em>conversation.</em></h2><p>For opportunities, ideas or a thoughtful exchange, I’d be glad to hear from you.</p><div className="contact-links"><a href="mailto:raoa12044@gmail.com">raoa12044@gmail.com <Arrow diagonal /></a><a href="tel:+919580003422">+91 95800 03422 <Arrow diagonal /></a><a href="https://wa.me/919580003422" target="_blank" rel="noreferrer">Message on WhatsApp <Arrow diagonal /></a><a href="https://www.linkedin.com/in/anuj-rao-ba6080263" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/AnujRao11" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a></div><span className="contact-location">GORAKHPUR, UTTAR PRADESH · INDIA</span></section>
    </main>

    <footer className="site-footer"><a className="wordmark" href="#home">AR<span>.</span></a><p>Building with curiosity.<br />Leading with discipline.<br />Growing with purpose.</p><a className="back-top" href="#home">Back to top ↑</a><span className="copyright">© 2026 ANUJ RAO</span></footer>

    <div className="support-widget">
      {supportOpen && <aside className="support-panel" id="portfolio-support-panel" aria-label="Portfolio guide">
        <div className="support-panel-head"><span className="eyebrow">QUICK PORTFOLIO GUIDE</span><button type="button" onClick={() => setSupportOpen(false)} aria-label="Close portfolio guide">×</button></div>
        <p>{supportReply || 'Hi! Choose a topic and I’ll point you to the right part of Anuj’s portfolio.'}</p>
        <div className="support-options">{supportTopics.map(([label, reply, href]) => <button type="button" key={label} onClick={() => { setSupportReply(reply); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}>{label} <Arrow diagonal /></button>)}</div>
        <a className="support-whatsapp" href="https://wa.me/919580003422" target="_blank" rel="noreferrer">Chat with Anuj on WhatsApp <Arrow diagonal /></a>
        <small>Portfolio guide · quick links, with WhatsApp for direct contact</small>
      </aside>}
      <button className="support-toggle" type="button" aria-expanded={supportOpen} aria-controls="portfolio-support-panel" onClick={() => setSupportOpen(!supportOpen)}>{supportOpen ? 'Close guide ×' : 'Need a quick guide?'} <span aria-hidden="true">↗</span></button>
    </div>

    {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close photo">×</button><figure onClick={(event) => event.stopPropagation()}><img src={img(activeImage.src)} alt={activeImage.alt} /><figcaption>{activeImage.caption}</figcaption></figure></div>}
  </>;
}

export default App;
