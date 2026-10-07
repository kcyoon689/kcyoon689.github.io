/* Project data for /projects/. Order = display order (newest first).
   Text fields are { en, ko }. Image paths are relative to /projects/ (or absolute URLs).
   Set hidden: true to keep an entry out of the archive. */
window.PROJECTS = [
  {
    slug: "scholarlensai",
    year: "2025",
    category: "ai",
    title: { en: "ScholarLensAI – Paper Reading Assistant", ko: "ScholarLensAI – 논문 읽기 어시스턴트" },
    team: { en: "Team of 5", ko: "5인 팀" },
    role: { en: "Team Lead", ko: "팀장" },
    tagline: {
      en: "An intelligent academic PDF analysis platform for an interactive research reading workflow.",
      ko: "인터랙티브한 논문 읽기 흐름을 위한 학술 PDF 분석 플랫폼."
    },
    summary: {
      en: "Built an intelligent academic PDF analysis platform combining layout parsing, structured information extraction, automated summarization, and highlight-based visual exploration. Integrated FE/BE pipelines with Next.js and FastAPI for an interactive research reading workflow.",
      ko: "레이아웃 파싱, 구조화된 정보 추출, 자동 요약, 하이라이트 기반 시각적 탐색을 결합한 학술 PDF 분석 플랫폼을 만들었습니다. Next.js와 FastAPI로 FE/BE 파이프라인을 통합해 인터랙티브한 논문 읽기 흐름을 구현했습니다."
    },
    tech: ["Document Parse", "Universal IE", "Solar LLM", "Next.js", "FastAPI", "Docker", "Python"],
    links: [
      { type: "github", url: "https://github.com/ScholarLensAI/ScholarLensAI" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=DZ1qizLTM3o" },
      { type: "notion", url: "https://chaeyoonkim.notion.site/27d85a417def80adb01ffd2754f248ad?v=27d85a417def810084dc000cf0d0db2e&pvs=74" }
    ],
    youtube: ["DZ1qizLTM3o"],
    images: []
  },
  {
    slug: "moving-object-detection",
    year: "2025",
    category: "robotics",
    title: { en: "Moving Object Detection", ko: "이동 객체 검출" },
    team: { en: "Individual", ko: "개인" },
    tagline: {
      en: "Camera–LiDAR calibration, object detection and tracking with YOLO and ROS2.",
      ko: "YOLO와 ROS2를 이용한 카메라–LiDAR 캘리브레이션, 객체 검출 및 추적."
    },
    tech: ["Ubuntu", "ROS2", "Git", "Docker", "PyTorch", "Python"],
    links: [
      { type: "notion", url: "https://chaeyoonkim.notion.site/Moving-Object-Detection-22285a417def80939728e74620d88995" },
      { type: "youtube", url: "https://www.youtube.com/watch?v=4NHyqnMp92o&list=PLCDDCuZ1ldoREt2yLbYgzBMDMX7V8VYdh" }
    ],
    youtube: ["4NHyqnMp92o"],
    images: []
  },
  {
    slug: "pcb-defect-detection",
    year: "2024",
    category: "ai",
    title: { en: "PCB Defect Detection", ko: "PCB 결함 탐지" },
    team: { en: "Individual", ko: "개인" },
    tagline: {
      en: "PatchCore backbone ensemble implementation with mask prediction.",
      ko: "마스크 예측을 포함한 PatchCore 백본 앙상블 구현."
    },
    tech: ["Ubuntu", "Git", "Docker", "PyTorch", "Python"],
    links: [],
    images: []
  },
  {
    slug: "cnn-mlops",
    year: "2024",
    category: "ai",
    title: { en: "CNN-based MLOps (REST API Service)", ko: "CNN 기반 MLOps (REST API 서비스)" },
    team: { en: "Individual", ko: "개인" },
    tagline: {
      en: "CNN model design, MLOps deployment, a FastAPI-based backend server and ONNX export.",
      ko: "CNN 모델 설계, MLOps 배포, FastAPI 기반 백엔드 서버, ONNX 변환."
    },
    tech: ["Ubuntu", "Git", "Docker", "Docker Compose", "PyTorch", "Python", "Lightning", "FastAPI"],
    links: [{ type: "github", url: "https://github.com/kcyoon689/mnist_fastAPI" }],
    images: []
  },
  {
    slug: "medicine-guidance",
    year: "2023",
    category: "ai",
    title: { en: "Medicine Guidance for the Visually Impaired", ko: "시각장애인을 위한 의약품 안내" },
    team: { en: "Team of 3 (A-EYE)", ko: "3인 팀 (A-EYE)" },
    role: { en: "Team Lead", ko: "팀장" },
    tagline: {
      en: "From idea and system design to a YOLOv5 model, a FastAPI backend and an app released on Google Play.",
      ko: "아이디어와 시스템 설계부터 YOLOv5 모델, FastAPI 백엔드, Google Play 앱 출시까지."
    },
    contributions: [
      { en: "Idea proposal & system design", ko: "아이디어 제안 및 시스템 설계" },
      { en: "Data labeling / preprocessing", ko: "데이터 라벨링 및 전처리" },
      { en: "Backend (FastAPI)", ko: "백엔드 (FastAPI)" },
      { en: "YOLOv5 training", ko: "YOLOv5 학습" },
      { en: "Docker deployment", ko: "Docker 배포" },
      { en: "App release (Google Play)", ko: "앱 출시 (Google Play)" }
    ],
    tech: ["Ubuntu", "Git", "Docker", "PyTorch", "Python", "FastAPI", "YOLOv5"],
    links: [
      { type: "youtube", url: "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoShORjxkDKIqB69mUsdFg3J" },
      { type: "drive", url: "https://drive.google.com/file/d/17mEj8z9fBWcfSgA6HBxsElNTnUO-C00o/view" }
    ],
    images: []
  },
  {
    slug: "kaggle-great-barrier-reef",
    year: "2022",
    category: "ai",
    title: { en: "[Kaggle] Help Protect the Great Barrier Reef", ko: "[Kaggle] Help Protect the Great Barrier Reef" },
    team: { en: "Team of 4 (Under The Sea)", ko: "4인 팀 (Under The Sea)" },
    role: { en: "Member", ko: "팀원" },
    tagline: { en: "Kaggle competition – rank 353 / 2026.", ko: "Kaggle 대회 – 2026팀 중 353위." },
    results: [{ en: "Rank 353 / 2026", ko: "2026팀 중 353위" }],
    tech: ["Ubuntu", "PyTorch", "Python"],
    links: [{ type: "notion", url: "https://chaeyoonkim.notion.site/RRR-1fb85a417def812f8d36dbdc77f1e2eb?pvs=74" }],
    images: []
  },
  {
    slug: "background-dependency",
    year: "2021",
    category: "ai",
    title: { en: "Analysis of Background Image Dependency in ML Models", ko: "ML 모델의 배경 이미지 의존성 분석" },
    team: { en: "Individual", ko: "개인" },
    tech: ["Ubuntu", "PyTorch", "Python"],
    links: [{ type: "notion", url: "https://chaeyoonkim.notion.site/2021-term-project-20e85a417def8048820bcd5483ba0058" }],
    images: []
  },
  {
    slug: "kalman-3d-tracking",
    year: "2021",
    category: "robotics",
    title: { en: "3D Object Tracking Using Kalman Filter", ko: "칼만 필터를 이용한 3D 객체 추적" },
    team: { en: "Individual", ko: "개인" },
    tech: ["Ubuntu", "ROS", "PyTorch", "Python"],
    links: [{ type: "youtube", url: "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoQf_yBnhfe5wNI3USUr5hBU" }],
    youtube: ["vwdLDFC3c2s"],
    images: []
  },
  {
    slug: "rock-paper-scissors",
    year: "2019",
    category: "embedded",
    title: { en: "Rock–Paper–Scissors Game using ML", ko: "머신러닝 가위바위보 게임" },
    team: { en: "Individual", ko: "개인" },
    tech: ["Raspberry Pi", "TensorFlow", "Python"],
    links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=73ZbODJ07LI" }],
    youtube: ["73ZbODJ07LI"],
    images: []
  },
  {
    slug: "robotic-arm-pid",
    year: "2018",
    category: "embedded",
    title: { en: "Robotic Arm Control via PID", ko: "PID 제어 로봇 팔" },
    team: { en: "Individual", ko: "개인" },
    tagline: { en: "Circuit design, 3D modeling and Arduino coding.", ko: "회로 설계, 3D 모델링, Arduino 코딩." },
    tech: ["Arduino", "C/C++", "Python", "OrCAD"],
    links: [{ type: "youtube", url: "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoTo5SUXW3ahmiZQ32I7p6Mp" }],
    images: []
  },
  {
    slug: "groundwater-monitoring",
    year: "2018",
    category: "embedded",
    title: { en: "Groundwater Level Monitoring Device", ko: "지하수 수위 계측 장치" },
    team: { en: "Individual", ko: "개인" },
    tagline: { en: "Circuit design and 3D modeling.", ko: "회로 설계 및 3D 모델링." },
    tech: ["Arduino", "C/C++", "OrCAD"],
    links: [],
    images: []
  },
  {
    slug: "fpga-elevator",
    year: "2018",
    category: "embedded",
    title: { en: "Elevator System using FPGA & Atmega328p", ko: "FPGA와 Atmega328p를 이용한 엘리베이터 시스템" },
    team: { en: "Team of 2", ko: "2인 팀" },
    role: { en: "Team Lead", ko: "팀장" },
    tagline: {
      en: "Idea proposal, circuit & system design and Atmega328p coding.",
      ko: "아이디어 제안, 회로 및 시스템 설계, Atmega328p 코딩."
    },
    tech: ["C/C++", "FPGA", "OrCAD"],
    links: [],
    images: []
  },
  {
    slug: "cansat",
    year: "2017",
    category: "embedded",
    title: { en: "Can Satellite Design for Fine Dust Monitoring", ko: "미세먼지 측정을 위한 캔위성 설계" },
    team: { en: "Team of 3 (UniSat)", ko: "3인 팀 (UniSat)" },
    role: { en: "Team Lead", ko: "팀장" },
    tagline: {
      en: "Sensor control, satellite–ground communication and embedded software development.",
      ko: "센서 제어, 위성–지상 통신, 임베디드 소프트웨어 개발."
    },
    results: [
      { en: "CanSat Competition – Excellence Award (KAIST President's Award)", ko: "캔위성 경연대회 우수상 (KAIST 총장상)" },
      { en: "Paper at the 2017 KSAS Fall Annual Conference", ko: "2017 한국항공우주학회 추계학술대회 논문 발표" }
    ],
    tech: ["Arduino", "C/C++", "OrCAD"],
    links: [],
    images: []
  }
];
