/* Project data for /projects/ – generated from the research notes, then edited by hand.
   Order = display order. Text fields are { en, ko }. Image paths are relative to /projects/.
   hidden: true keeps an entry out of the archive (these two are also hidden in the CV). */
window.PROJECTS = [
  {
    "slug": "scholarlensai",
    "year": "2025",
    "period": {
      "en": "Oct 2025 – Dec 2025",
      "ko": "2025.10 – 2025.12"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · LLM / Document AI",
      "ko": "AI · LLM / 문서 AI"
    },
    "title": {
      "en": "ScholarLensAI – Paper Reading Assistant",
      "ko": "ScholarLensAI – 논문 리딩 어시스턴트"
    },
    "team": {
      "en": "Team of 5 · Upstage AI Ambassador 1st cohort, Team 2",
      "ko": "5인 팀 · Upstage AI Ambassador 1기 2팀"
    },
    "role": {
      "en": "Team Lead (PM) · Backend · Infra (Docker)",
      "ko": "팀장(PM) · 백엔드 · 인프라(Docker)"
    },
    "tagline": {
      "en": "A research-paper reading assistant that parses PDFs with Upstage Document AI, then summarizes, translates, answers questions and highlights key passages directly on the page.",
      "ko": "Upstage Document AI로 논문 PDF를 구조화하고, 섹션 요약·번역·Q&A·핵심 문장 하이라이트를 PDF 위에서 바로 제공하는 논문 리딩 어시스턴트."
    },
    "summary": {
      "en": "ScholarLensAI is a web-based reading assistant for research papers, built by a five-person team in the first cohort of the Upstage AI Ambassador Program. Uploaded PDFs are parsed with Upstage Document Parse into layout-aware sections with element coordinates. Solar Pro2 then generates section-wise summaries, document-grounded Q&A, translation and three-level semantic highlights overlaid on the PDF. The Next.js frontend and FastAPI backend are kept as separate submodules and run together with Docker Compose.",
      "ko": "ScholarLensAI는 Upstage AI Ambassador 1기 5인 팀이 개발한 웹 기반 논문 리딩 어시스턴트입니다. 업로드한 PDF는 Upstage Document Parse로 파싱해 요소 좌표를 포함한 레이아웃 기반 섹션으로 구조화합니다. 이후 Solar Pro2로 섹션별 요약, 논문 기반 Q&A, 번역, PDF 위에 오버레이되는 3단계 시맨틱 하이라이트를 생성합니다. Next.js 프론트엔드와 FastAPI 백엔드는 별도 submodule로 관리되며 Docker Compose로 함께 실행됩니다."
    },
    "problem": {
      "en": "Researchers face an overwhelming volume of papers, and the real bottleneck is not reading speed but judging which information matters. Multi-column layouts, tables and equations break context when text is extracted. Reading, translation, summarization and search are also scattered across separate tools, which fragments focus and adds repetitive work.",
      "ko": "연구자가 읽어야 할 논문은 감당하기 어려울 만큼 많고, 실제 병목은 읽는 속도가 아니라 어떤 정보가 중요한지 판단하는 데 있습니다. 다단 레이아웃·표·수식이 섞인 PDF는 텍스트를 추출하면 맥락이 끊깁니다. 또한 읽기·번역·요약·검색이 서로 다른 도구에 흩어져 있어 집중이 끊기고 반복 작업이 늘어납니다."
    },
    "solution": {
      "en": "A single reader keeps the PDF on the left and an AI panel (Summary · Chat · Translation) on the right. Document Parse restores reading order, section structure and element coordinates. The backend injects this structured context into Solar LLM prompts, and highlights are anchored to the original coordinates so each highlighted passage can be checked against the source text.",
      "ko": "하나의 리더 화면에서 왼쪽에는 PDF, 오른쪽에는 AI 패널(요약 · 채팅 · 번역)을 제공합니다. Document Parse로 읽기 순서, 섹션 구조, 요소 좌표를 복원합니다. 백엔드는 이 구조화된 정보를 Solar LLM 프롬프트에 컨텍스트로 주입하고, 하이라이트는 원본 좌표에 고정해 강조된 구간을 원문과 바로 대조할 수 있게 했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Planning & scope",
          "ko": "기획 및 범위 정의"
        },
        "body": {
          "en": "Chose research papers as the domain that best showcases Upstage's document QA and key-information extraction, referencing similar services (Moonlight, ChatPDF). Wrote a feature spec with endpoint-level inputs and outputs, and a four-phase schedule: foundation → core analysis → user interaction → test & deploy.",
          "ko": "Upstage의 문서 QA·핵심 정보 추출 기능을 가장 잘 보여 줄 수 있는 분야로 논문을 선정하고, 유사 서비스(Moonlight, ChatPDF)를 참고했습니다. 엔드포인트별 입출력을 정의한 기능 명세서를 작성하고, 4단계 일정(기반 구축 → 핵심 분석 → 사용자 인터랙션 → 테스트·배포)을 수립했습니다."
        }
      },
      {
        "title": {
          "en": "Layout-aware parsing",
          "ko": "레이아웃 기반 파싱"
        },
        "body": {
          "en": "PDFs up to 50MB are sent to Upstage Document Parse, with both the sync (up to 100 pages) and async (up to 1,000 pages) APIs wrapped and async used by default. OCR is forced only when a file looks scanned. Misclassified headings are corrected, sections are mapped to canonical names (Abstract → References), and two-column papers are supported.",
          "ko": "최대 50MB의 PDF를 Upstage Document Parse로 처리합니다. 동기(최대 100페이지)·비동기(최대 1,000페이지) API를 모두 래핑했으며, 기본으로 비동기 API를 사용합니다. 스캔본으로 보이는 파일에만 OCR을 강제 적용합니다. 잘못 분류된 heading을 보정하고, 섹션을 표준 이름(Abstract → References)으로 매핑하며, 2단 편집 논문도 지원합니다."
        }
      },
      {
        "title": {
          "en": "Summary, Q&A & translation with Solar Pro2",
          "ko": "Solar Pro2 기반 요약·Q&A·번역"
        },
        "body": {
          "en": "Parsed sections are injected as context into Solar Pro2 to generate section-wise summaries with page references and document-grounded chat answers. Translation auto-detects the source language, caches repeated requests, and prompts the model to keep an academic register.",
          "ko": "파싱된 섹션을 Solar Pro2에 컨텍스트로 주입해 페이지 정보가 포함된 섹션별 요약과 논문 기반 채팅 답변을 생성합니다. 번역은 원문 언어를 자동 감지하고 중복 요청을 캐싱하며, 학술적인 표현을 유지하도록 프롬프트를 구성했습니다."
        }
      },
      {
        "title": {
          "en": "LLM-based semantic highlighting",
          "ko": "LLM 기반 시맨틱 하이라이트"
        },
        "body": {
          "en": "Replaced a hard-coded highlight rule with Solar LLM scoring. Each paragraph is rated High / Medium / Low (purple / green / blue) with section-specific prompts, using up to 5 concurrent calls. The results are drawn as translucent overlays on the PDF using Document Parse coordinates.",
          "ko": "하드코딩된 하이라이트 규칙을 Solar LLM 기반 점수화로 교체했습니다. 섹션별 프롬프트로 문단마다 중요도를 High / Medium / Low(보라 / 초록 / 파랑)로 판정하고, 최대 5개 호출을 동시에 처리합니다. 결과는 Document Parse 좌표를 이용해 PDF 위에 반투명 오버레이로 표시합니다."
        }
      },
      {
        "title": {
          "en": "Full-stack integration & Docker",
          "ko": "풀스택 통합 및 Docker 구성"
        },
        "body": {
          "en": "A Next.js (App Router, TypeScript, Tailwind CSS, shadcn/ui, PDF.js) frontend talks to a FastAPI/Uvicorn backend over a REST API documented in Swagger UI. Both are kept as Git submodules in a monorepo and launched with Docker Compose. Backend calls were moved from sync to async to improve response speed.",
          "ko": "Next.js(App Router, TypeScript, Tailwind CSS, shadcn/ui, PDF.js) 프론트엔드와 FastAPI/Uvicorn 백엔드는 Swagger UI로 문서화한 REST API를 통해 통신합니다. 두 서비스는 monorepo의 Git submodule로 관리되며 Docker Compose로 함께 실행됩니다. 백엔드 호출을 sync에서 async로 전환해 응답 속도를 개선했습니다."
        }
      },
      {
        "title": {
          "en": "Documentation & presentation",
          "ko": "문서화 및 발표"
        },
        "body": {
          "en": "Wrote English README and QUICKSTART guides, built an HTML slide-deck presentation site (scholarlensai.github.io), and recorded a 5-minute demo video for the Ambassador program.",
          "ko": "영문 README·QUICKSTART 가이드를 작성하고, HTML 슬라이드 형식의 발표 사이트(scholarlensai.github.io)를 제작했으며, Ambassador 프로그램용 5분 데모 영상을 녹화했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Delivered a working end-to-end MVP (PDF upload → parsing → summary, chat, translation and highlights), shown in a 5-minute demo video (Dec 2025).",
        "ko": "PDF 업로드 → 파싱 → 요약·채팅·번역·하이라이트로 이어지는 end-to-end MVP를 완성하고 5분 데모 영상으로 시연했습니다(2025년 12월)."
      },
      {
        "en": "Open-sourced under the ScholarLensAI GitHub organization as a monorepo with Next.js / FastAPI submodules, a Docker Compose QuickStart and a Swagger-documented REST API.",
        "ko": "ScholarLensAI GitHub organization에 Next.js / FastAPI submodule, Docker Compose QuickStart, Swagger로 문서화된 REST API를 갖춘 monorepo로 공개했습니다."
      },
      {
        "en": "Completed as the Team 2 project of the Upstage AI Ambassador Program (1st cohort); recognized as an Outstanding Ambassador of the cohort.",
        "ko": "Upstage AI Ambassador 프로그램 1기 2팀 프로젝트로 수행했으며, 1기 우수 Ambassador로 선정되었습니다."
      }
    ],
    "contributions": [
      {
        "en": "Led the five-person team as PM: planning, role assignment (with backups), schedule and quality management, and team meetings documented in Notion.",
        "ko": "PM으로 5인 팀을 이끌며 기획, 역할 배정(백업 포함), 일정·품질 관리를 맡고 팀 회의를 Notion에 기록했습니다."
      },
      {
        "en": "Main backend author (22 of 26 commits): Upstage client wrapper, Document Parse pipeline with heading detection and two-column support, LLM-based auto highlighting, chat prompts, and the sync-to-async switch.",
        "ko": "백엔드 주 개발자로(커밋 26개 중 22개) Upstage client wrapper, heading 검출·2단 논문 지원을 포함한 Document Parse 파이프라인, LLM 기반 자동 하이라이트, 채팅 프롬프트, sync→async 전환을 구현했습니다."
      },
      {
        "en": "Frontend work (29 of 37 commits): PDF viewer and canvas fixes, upload flow, section summary/translation API integration, and highlight rendering.",
        "ko": "프론트엔드에서는(커밋 37개 중 29개) PDF 뷰어·canvas 오류 수정, 업로드 흐름, 섹션 요약·번역 API 연동, 하이라이트 렌더링을 담당했습니다."
      },
      {
        "en": "Infra/DevOps: Docker and Docker Compose setup, monorepo submodule management, and English README/QUICKSTART documentation.",
        "ko": "인프라/DevOps 분야에서는 Docker·Docker Compose 구성, monorepo submodule 관리, 영문 README·QUICKSTART 문서화를 맡았습니다."
      },
      {
        "en": "Built the HTML presentation site (all commits) and published the demo video.",
        "ko": "HTML 발표 사이트를 제작하고(커밋 전체 작성) 데모 영상을 공개했습니다."
      }
    ],
    "tech": [
      "Upstage Document Parse",
      "Upstage Information Extract",
      "Solar Pro2",
      "Python",
      "FastAPI",
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "PDF.js (pdfjs-dist)",
      "Docker",
      "Docker Compose"
    ],
    "topics": [
      "LLM",
      "Document AI",
      "Document Parsing",
      "Summarization",
      "Q&A",
      "Machine Translation",
      "Semantic Highlighting",
      "Full-stack",
      "Upstage"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/ScholarLensAI/ScholarLensAI"
      },
      {
        "type": "slides",
        "label": {
          "en": "Presentation",
          "ko": "발표 자료"
        },
        "url": "https://scholarlensai.github.io/"
      },
      {
        "type": "youtube",
        "label": {
          "en": "Demo video",
          "ko": "데모 영상"
        },
        "url": "https://www.youtube.com/watch?v=DZ1qizLTM3o"
      },
      {
        "type": "notion",
        "label": {
          "en": "Project docs",
          "ko": "프로젝트 문서"
        },
        "url": "https://chaeyoonkim.notion.site/27d85a417def80adb01ffd2754f248ad?v=27d85a417def810084dc000cf0d0db2e"
      },
      {
        "type": "github",
        "label": {
          "en": "Frontend repo",
          "ko": "프론트엔드 repo"
        },
        "url": "https://github.com/ScholarLensAI/scholarlensAI-FE"
      },
      {
        "type": "github",
        "label": {
          "en": "Backend repo",
          "ko": "백엔드 repo"
        },
        "url": "https://github.com/ScholarLensAI/scholarlensAI-BE"
      }
    ],
    "youtube": [
      "DZ1qizLTM3o"
    ],
    "cover": "img/scholarlensai/cover.jpg",
    "images": [
      {
        "src": "img/scholarlensai/01-viewer-highlight-translation.jpg",
        "caption": {
          "en": "Reader view: the Transformer paper with three-level semantic highlights (purple / blue / green) on the PDF and the Translation tab open (demo video frame).",
          "ko": "리더 화면: Transformer 논문 PDF 위의 3단계 시맨틱 하이라이트(보라 / 파랑 / 초록)와 번역 탭 (데모 영상 장면)."
        },
        "thumb": "img/scholarlensai/thumbs/01-viewer-highlight-translation.jpg"
      },
      {
        "src": "img/scholarlensai/02-viewer-section-summary.jpg",
        "caption": {
          "en": "Section-wise summaries generated by Solar LLM, shown beside the parsed PDF with page references for each section.",
          "ko": "Solar LLM이 생성한 섹션별 요약을 파싱된 PDF 옆에 섹션별 페이지 정보와 함께 표시한 화면."
        },
        "thumb": "img/scholarlensai/thumbs/02-viewer-section-summary.jpg"
      },
      {
        "src": "img/scholarlensai/03-system-architecture.jpg",
        "caption": {
          "en": "System architecture: PDF upload → Document Parse → structured data → context injection → Solar LLM → response, across Next.js, FastAPI and the Upstage APIs.",
          "ko": "시스템 아키텍처: Next.js·FastAPI·Upstage API에 걸친 PDF 업로드 → Document Parse → 구조화 데이터 → 컨텍스트 주입 → Solar LLM → 응답 생성 흐름."
        },
        "thumb": "img/scholarlensai/thumbs/03-system-architecture.jpg"
      },
      {
        "src": "img/scholarlensai/04-core-feature-logic.jpg",
        "caption": {
          "en": "Presentation slide: core features (layout analysis, semantic highlighting, Solar LLM Q&A) and the Upstage API pipeline as designed (Document Parse, Information Extract, Solar LLM).",
          "ko": "발표 슬라이드: 핵심 기능(레이아웃 분석, 시맨틱 하이라이트, Solar LLM Q&A)과 발표 자료 기준 Upstage API 파이프라인(Document Parse, Information Extract, Solar LLM)."
        },
        "thumb": "img/scholarlensai/thumbs/04-core-feature-logic.jpg"
      },
      {
        "src": "img/scholarlensai/05-landing-page.jpg",
        "caption": {
          "en": "Landing page of the ScholarLens web app.",
          "ko": "ScholarLens 웹 앱 메인 페이지."
        },
        "thumb": "img/scholarlensai/thumbs/05-landing-page.jpg"
      },
      {
        "src": "img/scholarlensai/06-upload-page.jpg",
        "caption": {
          "en": "Paper upload page with drag-and-drop (PDF only, up to 50MB).",
          "ko": "드래그 앤 드롭을 지원하는 논문 업로드 페이지 (PDF 전용, 최대 50MB)."
        },
        "thumb": "img/scholarlensai/thumbs/06-upload-page.jpg"
      }
    ]
  },
  {
    "slug": "moving-object-detection",
    "year": "2025",
    "category": "robotics",
    "categoryLabel": {
      "en": "Robotics · Sensor Fusion",
      "ko": "로보틱스 · 센서 퓨전"
    },
    "title": {
      "en": "Moving Object Detection",
      "ko": "Moving Object Detection (이동 객체 검출)"
    },
    "team": {
      "en": "Individual (ThorDrive R&D)",
      "ko": "개인 (토르드라이브 R&D)"
    },
    "role": {
      "en": "Sole developer: camera–LiDAR fusion, detection matching, centroid and velocity estimation, ROS2 integration",
      "ko": "단독 개발: 카메라–LiDAR 퓨전, 검출 결과 매칭, 중심점·속도 추정, ROS2 통합"
    },
    "tagline": {
      "en": "A ROS2 pipeline that fuses 2D LiDAR scans with YOLO person detections to locate moving people and estimate their velocity.",
      "ko": "2D LiDAR 스캔과 YOLO 사람 검출을 융합해 이동하는 사람의 위치와 속도를 추정하는 ROS2 파이프라인."
    },
    "summary": {
      "en": "A ROS2 sensor-fusion pipeline that reprojects 2D LiDAR points into the camera image and matches them with YOLO tracking results to estimate the centroid and velocity of each detected person. Scans are converted to PointCloud2, moved into the camera frame with the camera–LiDAR extrinsic T_cam_laser, and projected onto the image with the intrinsics K and distortion D via cv2.projectPoints. Each person's centroid and low-pass-filtered velocity vector are published as RViz Markers. The system was demonstrated on a mobile robot in an indoor office, including dynamic-obstacle test runs.",
      "ko": "2D LiDAR 포인트를 카메라 영상에 리프로젝션하고 YOLO 트래킹 결과와 매칭해, 검출된 사람마다 중심점과 속도를 추정하는 ROS2 센서 퓨전 파이프라인입니다. LiDAR 스캔을 PointCloud2로 변환하고 카메라–LiDAR extrinsic(T_cam_laser)을 이용해 카메라 좌표계로 옮긴 뒤, intrinsic K와 왜곡 계수 D를 사용해 cv2.projectPoints로 이미지 평면에 투영합니다. 사람별 중심점과 저역통과 필터(LPF)를 적용한 속도 벡터는 RViz Marker로 퍼블리시합니다. 실내 사무 공간의 모바일 로봇에서 동적 장애물 테스트를 포함해 시연했습니다."
    },
    "problem": {
      "en": "To handle dynamic obstacles, a mobile robot needs the position and motion of nearby people. Camera-based YOLO detections give class labels in pixel space but no metric position, and a 2D LiDAR scan gives range but no object identity.",
      "ko": "동적 장애물에 대응하려면 모바일 로봇이 주변 사람의 위치와 움직임을 알아야 합니다. 카메라 기반 YOLO 검출은 픽셀 공간의 클래스 정보만 제공할 뿐 실제(미터 단위) 위치는 알 수 없고, 2D LiDAR 스캔은 거리 정보는 있지만 어떤 객체인지 알 수 없습니다."
    },
    "solution": {
      "en": "Calibrated camera–LiDAR geometry (T_cam_laser, K, D) projects the LiDAR points in front of the camera onto the image. Points that fall inside YOLO 'person' boxes are grouped and filtered for outliers by distance, then reduced to a centroid. The centroid's frame-to-frame displacement gives a smoothed velocity, which is published over ROS2 together with a reprojection image for debugging.",
      "ko": "캘리브레이션된 카메라–LiDAR 기하 정보(T_cam_laser, K, D)로 카메라 전방(z > 0)의 LiDAR 포인트를 이미지에 투영합니다. YOLO 'person' 박스 안에 들어온 포인트를 묶고 거리 기준으로 아웃라이어를 제거한 뒤 중심점을 산출합니다. 프레임 간 중심점 이동량으로 속도를 계산해 평활화하고, 디버깅용 리프로젝션 이미지와 함께 ROS2로 퍼블리시합니다."
    },
    "approach": [
      {
        "title": {
          "en": "Sensor synchronization",
          "ko": "센서 동기화"
        },
        "body": {
          "en": "The node subscribes to /scan, /camera/camera/color/image_raw, /camera/camera/color/camera_info and /yolo/tracking. An ApproximateTimeSynchronizer aligns LiDAR and camera frames in time so that fusion uses data from the same moment.",
          "ko": "노드는 /scan, /camera/camera/color/image_raw, /camera/camera/color/camera_info, /yolo/tracking을 구독합니다. ApproximateTimeSynchronizer로 LiDAR와 카메라 프레임의 시간을 맞춰 같은 시점의 데이터로 융합합니다."
        }
      },
      {
        "title": {
          "en": "LiDAR to point cloud",
          "ko": "LiDAR → 포인트 클라우드"
        },
        "body": {
          "en": "projectLaser converts each 2D scan into a sensor_msgs/PointCloud2, and pc2.read_points() extracts it as an (N, 3) NumPy array.",
          "ko": "projectLaser로 각 2D 스캔을 sensor_msgs/PointCloud2로 변환하고, pc2.read_points()로 (N, 3) NumPy 배열을 추출합니다."
        }
      },
      {
        "title": {
          "en": "Camera–LiDAR reprojection",
          "ko": "카메라–LiDAR 리프로젝션"
        },
        "body": {
          "en": "The extrinsic T_cam_laser transforms the points into the camera frame, and only forward points (z > 0) are kept. cv2.projectPoints then projects them onto the image plane using the intrinsics K and distortion D.",
          "ko": "Extrinsic 행렬 T_cam_laser로 포인트를 카메라 좌표계로 변환하고 전방(z > 0) 포인트만 남깁니다. 이후 intrinsic K와 왜곡 계수 D를 사용해 cv2.projectPoints로 이미지 평면에 투영합니다."
        }
      },
      {
        "title": {
          "en": "Detection matching",
          "ko": "검출 결과 매칭"
        },
        "body": {
          "en": "Only 'person' detections (class_id 0) are kept from the latest /yolo/tracking result. The 3D points whose image projections fall inside each bounding box are collected for that person.",
          "ko": "최신 /yolo/tracking 결과에서 'person'(class_id 0) 검출만 남깁니다. 이미지에 투영된 위치가 각 바운딩 박스 안에 들어오는 3D 포인트를 해당 사람의 포인트로 모읍니다."
        }
      },
      {
        "title": {
          "en": "Centroid and velocity estimation",
          "ko": "중심점·속도 추정"
        },
        "body": {
          "en": "filter_points_by_distance() removes outliers inside each box. The centroid is taken from the mean position or the nearest points, and its displacement from the previous frame gives a velocity that is smoothed with a low-pass filter.",
          "ko": "filter_points_by_distance()로 박스 내부 아웃라이어를 제거합니다. 중심점(centroid)은 평균 위치 또는 가장 가까운 포인트를 기준으로 구하고, 이전 프레임 대비 이동량으로 계산한 속도에 저역통과 필터(LPF)를 적용해 평활화합니다."
        }
      },
      {
        "title": {
          "en": "Publishing and visualization",
          "ko": "퍼블리시 및 시각화"
        },
        "body": {
          "en": "Centroids and velocity vectors are published as Markers on /bbox_centroids, and the reprojection result on /reprojection. Intermediate detection, reprojection and matching images can be saved for debugging, and runs are reviewed in RViz2 on the robot's map.",
          "ko": "중심점과 속도 벡터는 /bbox_centroids에 Marker로, 리프로젝션 결과는 /reprojection에 퍼블리시합니다. 검출·리프로젝션·매칭 중간 결과는 디버깅용 이미지로 저장할 수 있으며, 실행 결과는 로봇 맵 위에서 RViz2로 확인합니다."
        }
      }
    ],
    "results": [
      {
        "en": "End-to-end ROS2 node that outputs per-person centroid and velocity Markers (/bbox_centroids) and a LiDAR-to-image reprojection stream (/reprojection).",
        "ko": "사람별 중심점·속도 Marker(/bbox_centroids)와 LiDAR→이미지 리프로젝션 영상(/reprojection)을 출력하는 end-to-end ROS2 노드를 구현했습니다."
      },
      {
        "en": "Demonstrated on a mobile robot in an indoor office; a 10-video playlist (Sep–Oct 2025 recordings) covers dynamic-obstacle tests and RViz2 runs of the lidar-camera-sensor-fusion demo.",
        "ko": "실내 사무 공간의 모바일 로봇에서 시연했습니다. 2025년 9–10월에 녹화한 영상 10개로 구성된 플레이리스트에 동적 장애물 테스트와 lidar-camera-sensor-fusion 데모의 RViz2 실행 화면이 담겨 있습니다."
      },
      {
        "en": "2026 follow-up: a depth-camera person-tracking prototype that shows a depth colormap, a color–depth overlay and center/mean distance of the tracked person.",
        "ko": "2026년 후속 작업으로 depth colormap, 컬러–depth 오버레이, 추적 대상의 중심·평균 거리를 표시하는 depth 카메라 기반 사람 추적 프로토타입을 구현했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Designed and implemented the full ROS2 fusion node: synchronization, LiDAR-to-point-cloud conversion, reprojection, detection matching, and centroid and velocity estimation.",
        "ko": "동기화, LiDAR→포인트 클라우드 변환, 리프로젝션, 검출 매칭, 중심점·속도 추정까지 ROS2 퓨전 노드 전체를 설계하고 구현했습니다."
      },
      {
        "en": "Used camera–LiDAR calibration parameters (T_cam_laser, K, D) to align 2D LiDAR points with the camera image.",
        "ko": "카메라–LiDAR 캘리브레이션 파라미터(T_cam_laser, K, D)로 2D LiDAR 포인트를 카메라 영상에 정합했습니다."
      },
      {
        "en": "Integrated YOLO-based person tracking (/yolo/tracking) with LiDAR geometry to recover a metric position and velocity for each person.",
        "ko": "YOLO 기반 사람 트래킹(/yolo/tracking)을 LiDAR 기하 정보와 결합해 사람별 실제 위치와 속도를 산출했습니다."
      },
      {
        "en": "Built the RViz2 visualization and debug outputs, and recorded demo runs on the mobile robot.",
        "ko": "RViz2 시각화와 디버깅 출력을 구성하고, 모바일 로봇에서 데모 영상을 녹화했습니다."
      }
    ],
    "tech": [
      "ROS2",
      "Python",
      "YOLO",
      "OpenCV",
      "NumPy",
      "RViz2",
      "PyTorch",
      "Docker",
      "Git",
      "Ubuntu"
    ],
    "topics": [
      "Sensor Fusion",
      "Camera–LiDAR Calibration",
      "Object Detection",
      "Object Tracking",
      "Mobile Robot",
      "ROS2"
    ],
    "links": [
      {
        "type": "notion",
        "label": {
          "en": "Notion write-up",
          "ko": "Notion 정리"
        },
        "url": "https://chaeyoonkim.notion.site/Moving-Object-Detection-22285a417def80939728e74620d88995"
      },
      {
        "type": "youtube",
        "label": {
          "en": "Demo playlist",
          "ko": "데모 재생목록"
        },
        "url": "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoREt2yLbYgzBMDMX7V8VYdh"
      },
      {
        "type": "notion",
        "label": {
          "en": "2026 follow-up",
          "ko": "2026 후속 작업"
        },
        "url": "https://chaeyoonkim.notion.site/2e785a417def8085af6ccfc15a8811ec"
      }
    ],
    "youtube": [
      "4NHyqnMp92o",
      "U8KemgeJpdg",
      "tr5r2HTtcuI",
      "thpI4Oksd5I"
    ],
    "cover": "img/moving-object-detection/cover.jpg",
    "images": [
      {
        "src": "img/moving-object-detection/01-robot-person-walking.jpg",
        "caption": {
          "en": "Test scene from the demo playlist: a person walks past the mobile robot in an indoor office.",
          "ko": "데모 플레이리스트의 테스트 장면: 실내 사무 공간에서 모바일 로봇 옆을 사람이 지나가는 모습."
        },
        "thumb": "img/moving-object-detection/thumbs/01-robot-person-walking.jpg"
      },
      {
        "src": "img/moving-object-detection/02-cover-dynamic-obstacle-demo.jpg",
        "caption": {
          "en": "'251015 Dynamic Obstacle' demo: the robot on the RViz map (left) shown alongside the real scene of a person walking toward the robot (right).",
          "ko": "'251015 Dynamic Obstacle' 데모: RViz 맵 위의 로봇(왼쪽)과 로봇 쪽으로 걸어오는 사람의 실제 장면(오른쪽)."
        },
        "thumb": "img/moving-object-detection/thumbs/02-cover-dynamic-obstacle-demo.jpg"
      },
      {
        "src": "img/moving-object-detection/03-rviz-lidar-centroids-reprojection.jpg",
        "caption": {
          "en": "RViz view from the Notion write-up: LaserScan points with yellow person-centroid Markers and velocity vectors, plus the camera image showing person boxes and reprojected LiDAR points.",
          "ko": "Notion 문서의 RViz 화면: LaserScan 포인트와 노란색 사람 중심점 Marker·속도 벡터, 사람 박스와 리프로젝션된 LiDAR 포인트가 표시된 카메라 영상."
        },
        "thumb": "img/moving-object-detection/thumbs/03-rviz-lidar-centroids-reprojection.jpg"
      },
      {
        "src": "img/moving-object-detection/04-rviz2-map-fusion-demo.jpg",
        "caption": {
          "en": "RViz2 running the lidar-camera-sensor-fusion demo config: occupancy map, LaserScan, TF, Markers/MarkerArrays and Paths, with the camera image and person box in the side panel.",
          "ko": "lidar-camera-sensor-fusion 데모 설정으로 실행한 RViz2: occupancy map, LaserScan, TF, Marker/MarkerArray, Path와 사이드 패널의 카메라 영상·사람 박스."
        },
        "thumb": "img/moving-object-detection/thumbs/04-rviz2-map-fusion-demo.jpg"
      },
      {
        "src": "img/moving-object-detection/05-rviz-doa-polygons.jpg",
        "caption": {
          "en": "Dynamic-obstacle-avoidance ('DOA') recording: polygon MarkerArrays from /thor/dynamic_obstacle_avoidance topics in RViz, and the camera view with tracked person boxes.",
          "ko": "동적 장애물 회피('DOA') 녹화: RViz의 /thor/dynamic_obstacle_avoidance 토픽 폴리곤 MarkerArray와 추적 중인 사람 박스가 표시된 카메라 영상."
        },
        "thumb": "img/moving-object-detection/thumbs/05-rviz-doa-polygons.jpg"
      },
      {
        "src": "img/moving-object-detection/06-depth-person-tracking-followup.jpg",
        "caption": {
          "en": "2026 follow-up (Notion): depth-camera prototype with a depth colormap, a color–depth overlay, and person tracking that shows center/mean distance.",
          "ko": "2026년 후속 작업(Notion): depth colormap, 컬러–depth 오버레이, 중심·평균 거리를 표시하는 사람 추적 화면으로 구성된 depth 카메라 프로토타입."
        },
        "thumb": "img/moving-object-detection/thumbs/06-depth-person-tracking-followup.jpg"
      }
    ]
  },
  {
    "slug": "pcb-defect-detection",
    "year": "2024",
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Anomaly Detection",
      "ko": "AI · 이상 탐지"
    },
    "title": {
      "en": "PCB Defect Detection",
      "ko": "PCB 결함 탐지"
    },
    "team": {
      "en": "Individual (industrial project at XIILAB)",
      "ko": "개인 (씨이랩 산업 과제)"
    },
    "role": {
      "en": "AI Researcher, AI Model Research Team",
      "ko": "AI 모델 연구팀 연구원"
    },
    "tagline": {
      "en": "A PatchCore-based anomaly detection model for PCB defects, built with a backbone ensemble and mask prediction.",
      "ko": "Backbone ensemble과 mask prediction을 적용한 PatchCore 기반 PCB 결함 탐지(anomaly detection) 모델."
    },
    "summary": {
      "en": "An industrial anomaly detection project at XIILAB's AI Model Research Team in 2024. The PCB defect detection model is based on PatchCore and adds a backbone ensemble and mask prediction. It was developed individually on Ubuntu with PyTorch, Git and Docker.",
      "ko": "2024년 씨이랩 AI 모델 연구팀에서 수행한 산업용 이상 탐지(anomaly detection) 과제입니다. PCB 결함 탐지 모델은 PatchCore를 기반으로 하며 backbone ensemble과 mask prediction을 더했습니다. Ubuntu 환경에서 PyTorch, Git, Docker를 사용해 단독으로 개발했습니다."
    },
    "solution": {
      "en": "A PatchCore anomaly detection model with a backbone ensemble and mask prediction.",
      "ko": "PatchCore 기반 이상 탐지 모델에 backbone ensemble과 mask prediction을 적용했습니다."
    },
    "contributions": [
      {
        "en": "Implemented the PatchCore backbone ensemble with mask prediction as an individual project.",
        "ko": "개인 프로젝트로 mask prediction을 포함한 PatchCore backbone ensemble을 구현했습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "PatchCore",
      "Ubuntu",
      "Git",
      "Docker"
    ],
    "topics": [
      "Anomaly Detection",
      "Industrial Inspection",
      "PatchCore",
      "PCB"
    ],
    "links": []
  },
  {
    "slug": "cnn-mlops",
    "year": "2024",
    "period": {
      "en": "Apr 2024 – May 2024",
      "ko": "2024.04 – 2024.05"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · MLOps",
      "ko": "AI · MLOps"
    },
    "title": {
      "en": "CNN-based MLOps (REST API Service)",
      "ko": "CNN 기반 MLOps (REST API 서비스)"
    },
    "team": {
      "en": "Individual",
      "ko": "개인"
    },
    "role": {
      "en": "Solo developer (model, API, MLOps, deployment)",
      "ko": "단독 개발 (모델·API·MLOps·배포)"
    },
    "tagline": {
      "en": "A FastAPI service that trains an MNIST classifier, exports it to ONNX and registers it in the MLflow Model Registry, and serves predictions from the latest registered model.",
      "ko": "MNIST 분류 모델을 학습하고 ONNX로 변환해 MLflow Model Registry에 등록한 뒤, 최신 등록 모델로 추론을 제공하는 FastAPI 서비스."
    },
    "summary": {
      "en": "An individual MLOps project that wraps the full model lifecycle of MNIST digit classification in a REST API. /train runs training with user-supplied hyperparameters and tracks it in MLflow. /register exports the trained model to ONNX and promotes it to the MLflow Model Registry, and /predict classifies an uploaded image with the latest registered model. The API server and MLflow UI run together with Docker Compose.",
      "ko": "MNIST 숫자 분류 모델의 전체 라이프사이클을 REST API로 구성한 개인 MLOps 프로젝트입니다. /train은 사용자가 입력한 하이퍼파라미터로 학습을 수행하고 MLflow로 추적합니다. /register는 학습된 모델을 ONNX로 변환해 MLflow Model Registry에 등록하고, /predict는 최신 등록 모델로 업로드된 이미지를 분류합니다. API 서버와 MLflow UI는 Docker Compose로 함께 실행됩니다."
    },
    "problem": {
      "en": "Training a model is only one step toward serving it. Experiments need tracking, trained models need a governed hand-off to a registry in a portable format, and inference has to use the right model version. The goal was one API service for training and serving an MNIST classifier, integrated with a model registry and experiment tracking.",
      "ko": "모델 학습은 서비스로 가는 과정의 한 단계일 뿐입니다. 실험을 추적해야 하고, 학습된 모델은 이식 가능한 형식으로 관리된 절차를 거쳐 레지스트리에 등록해야 하며, 추론에는 올바른 모델 버전을 사용해야 합니다. 이에 Model Registry·실험 추적과 통합된, MNIST 분류 모델 학습·서빙용 단일 API 서비스를 목표로 했습니다."
    },
    "solution": {
      "en": "FastAPI exposes /train, /register and /predict. Training runs a PyTorch Lightning module with MLflow autologging and returns the run ID. Registration loads that run's model, exports it to ONNX, validates it and logs it to the registry as mnist_model. Prediction preprocesses the uploaded image, loads the latest registered ONNX model through MLflow, and returns the digit with a confidence score.",
      "ko": "FastAPI로 /train, /register, /predict 엔드포인트를 제공합니다. 학습은 MLflow autologging이 적용된 PyTorch Lightning 모듈로 수행하고 run ID를 반환합니다. 등록은 해당 run의 모델을 불러와 ONNX로 변환·검증한 뒤 mnist_model로 레지스트리에 기록합니다. 추론은 업로드 이미지를 전처리하고 MLflow로 최신 등록 ONNX 모델을 불러와 예측 숫자와 confidence를 반환합니다."
    },
    "approach": [
      {
        "title": {
          "en": "CNN baseline & Lightning refactor",
          "ko": "CNN 베이스라인과 Lightning 리팩터링"
        },
        "body": {
          "en": "Started from a reference PyTorch CNN for MNIST, credited in the README (Conv2d–BatchNorm–Dropout blocks with a 1×1 transition layer and max-pooling). Training was then refactored into a LightningModule and LightningDataModule with a 55,000 / 5,000 train/validation split and Adam with a OneCycleLR schedule; the Lightning version uses a fully connected classifier.",
          "ko": "README에 출처를 밝힌 PyTorch 기반 MNIST CNN 레퍼런스(Conv2d–BatchNorm–Dropout 블록, 1×1 transition layer, max-pooling)로 시작했습니다. 이후 학습 코드를 LightningModule·LightningDataModule로 리팩터링했으며, 학습/검증 데이터는 55,000 / 5,000으로 분할하고 Adam과 OneCycleLR 스케줄을 사용했습니다. Lightning 버전에서는 fully connected 분류기를 사용합니다."
        }
      },
      {
        "title": {
          "en": "Tracked training endpoint",
          "ko": "학습 API와 실험 추적"
        },
        "body": {
          "en": "/train accepts learning rate, epochs and batch size as JSON. It enables MLflow PyTorch autologging and system-metrics logging, then returns the MLflow run ID and artifact path. Guardrails reject more than 15 epochs and cap training at 10 minutes.",
          "ko": "/train은 learning rate, epoch, batch size를 JSON으로 받습니다. MLflow PyTorch autologging과 시스템 메트릭 로깅을 활성화하고, 학습 후 MLflow run ID와 artifact 경로를 반환합니다. 15 epoch 초과 요청은 거부하고 학습 시간은 최대 10분으로 제한했습니다."
        }
      },
      {
        "title": {
          "en": "ONNX export & model registry",
          "ko": "ONNX 변환과 Model Registry 등록"
        },
        "body": {
          "en": "/register loads the model from the given MLflow run, exports it to ONNX with a 1×1×28×28 sample input, validates it with the ONNX checker, and logs it to the MLflow Model Registry under the name mnist_model.",
          "ko": "/register는 지정된 MLflow run에서 모델을 불러와 1×1×28×28 샘플 입력으로 ONNX 변환하고, ONNX checker로 검증한 뒤 mnist_model 이름으로 MLflow Model Registry에 등록합니다."
        }
      },
      {
        "title": {
          "en": "Serving the latest model",
          "ko": "최신 등록 모델 서빙"
        },
        "body": {
          "en": "/predict converts the uploaded image into a normalized 28×28 grayscale tensor, looks up the latest registered version, runs it through MLflow pyfunc and returns the label with a softmax confidence. A test script checks that PyTorch and ONNX Runtime outputs match.",
          "ko": "/predict는 업로드 이미지를 정규화된 28×28 grayscale 텐서로 변환하고, 최신 등록 버전을 조회해 MLflow pyfunc로 추론한 뒤 label과 softmax confidence를 반환합니다. PyTorch와 ONNX Runtime 출력이 일치하는지 검증하는 테스트 스크립트도 작성했습니다."
        }
      },
      {
        "title": {
          "en": "Containerized deployment",
          "ko": "컨테이너 기반 배포"
        },
        "body": {
          "en": "An Ubuntu 22.04 dev-container image and a Docker Compose setup run the FastAPI server and the MLflow UI side by side on the host network, with NVIDIA GPU reservation and restart-on-failure. Endpoints can be exercised through Swagger UI, curl or Insomnia.",
          "ko": "Ubuntu 22.04 dev container 이미지와 Docker Compose로 FastAPI 서버와 MLflow UI를 host 네트워크에서 함께 실행하며, NVIDIA GPU 할당과 실패 시 재시작 정책을 적용했습니다. 엔드포인트는 Swagger UI, curl, Insomnia로 테스트할 수 있습니다."
        }
      }
    ],
    "results": [
      {
        "en": "All three endpoints (Train / Register / Predict) work end to end, as shown in Swagger UI and Insomnia screenshots. For example, /predict returns {label: \"5\", confidence: 92.68} for an uploaded digit image.",
        "ko": "Train / Register / Predict 세 엔드포인트가 end-to-end로 동작하며, Swagger UI와 Insomnia 스크린샷으로 확인할 수 있습니다. 예를 들어 /predict는 업로드한 숫자 이미지에 대해 {label: \"5\", confidence: 92.68}를 반환합니다."
      },
      {
        "en": "Open-sourced with a README covering Docker Compose, curl, Swagger and Insomnia usage, plus sample digit images.",
        "ko": "Docker Compose·curl·Swagger·Insomnia 사용법을 담은 README와 샘플 숫자 이미지를 포함해 공개했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Designed the Train / Register / Predict API contract and implemented the FastAPI server.",
        "ko": "Train / Register / Predict API 구조를 설계하고 FastAPI 서버를 구현했습니다."
      },
      {
        "en": "Set up a CNN baseline adapted from a referenced notebook and the MNIST data pipeline, then rebuilt training as PyTorch Lightning modules.",
        "ko": "레퍼런스 노트북을 참고한 CNN 베이스라인과 MNIST 데이터 파이프라인을 구성한 뒤, 학습 코드를 PyTorch Lightning 모듈로 재구성했습니다."
      },
      {
        "en": "Integrated MLflow experiment tracking and an ONNX-based model registry flow, with a PyTorch-vs-ONNX Runtime output check.",
        "ko": "MLflow 실험 추적과 ONNX 기반 Model Registry 흐름을 통합하고, PyTorch–ONNX Runtime 출력 일치 검증을 추가했습니다."
      },
      {
        "en": "Containerized the API and MLflow server with Docker Compose and documented usage (sole author of all 61 commits).",
        "ko": "API와 MLflow 서버를 Docker Compose로 컨테이너화하고 사용법을 문서화했습니다(커밋 61개 모두 단독 작성)."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "PyTorch Lightning",
      "torchvision",
      "torchmetrics",
      "FastAPI",
      "Pydantic",
      "MLflow (Tracking & Model Registry)",
      "ONNX",
      "ONNX Runtime",
      "Docker",
      "Docker Compose",
      "Ubuntu 22.04",
      "Plotly"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/mnist_fastAPI"
      },
      {
        "type": "github",
        "label": {
          "en": "Earlier MLOps notebooks",
          "ko": "이전 MLOps 노트북"
        },
        "url": "https://github.com/kcyoon689/MNIST_MLOps"
      }
    ],
    "cover": "img/cnn-mlops/cover.jpg",
    "images": [
      {
        "src": "img/cnn-mlops/01-swagger-train-request.jpg",
        "caption": {
          "en": "Swagger UI: POST /train with JSON hyperparameters (learning_rate, max_epochs, batch_size).",
          "ko": "Swagger UI: JSON 하이퍼파라미터(learning_rate, max_epochs, batch_size)로 POST /train 요청."
        },
        "thumb": "img/cnn-mlops/thumbs/01-swagger-train-request.jpg"
      },
      {
        "src": "img/cnn-mlops/02-swagger-train-response.jpg",
        "caption": {
          "en": "/train response returning the MLflow run_id and artifact_path of the tracked experiment.",
          "ko": "추적된 실험의 MLflow run_id와 artifact_path를 반환하는 /train 응답."
        },
        "thumb": "img/cnn-mlops/thumbs/02-swagger-train-response.jpg"
      },
      {
        "src": "img/cnn-mlops/03-swagger-register-request.jpg",
        "caption": {
          "en": "POST /register: a run_id is promoted to the registry as mnist_model with an ONNX artifact path.",
          "ko": "POST /register: run_id를 ONNX artifact 경로와 함께 mnist_model로 레지스트리에 등록하는 요청."
        },
        "thumb": "img/cnn-mlops/thumbs/03-swagger-register-request.jpg"
      },
      {
        "src": "img/cnn-mlops/04-swagger-register-response.jpg",
        "caption": {
          "en": "/register response with the registered run ID and onnx_model artifact path.",
          "ko": "등록된 run ID와 onnx_model artifact 경로를 반환하는 /register 응답."
        },
        "thumb": "img/cnn-mlops/thumbs/04-swagger-register-response.jpg"
      },
      {
        "src": "img/cnn-mlops/05-swagger-predict-response.jpg",
        "caption": {
          "en": "/predict response: the latest registered model returns label \"5\" with 92.68% confidence.",
          "ko": "/predict 응답: 최신 등록 모델이 반환한 label \"5\", confidence 92.68%."
        },
        "thumb": "img/cnn-mlops/thumbs/05-swagger-predict-response.jpg"
      },
      {
        "src": "img/cnn-mlops/06-mnist-sample-input.jpg",
        "caption": {
          "en": "Normalized 28×28 MNIST sample (digit 2) from the repository's samples folder.",
          "ko": "저장소 samples 폴더의 정규화된 28×28 MNIST 샘플 (숫자 2)."
        },
        "thumb": "img/cnn-mlops/thumbs/06-mnist-sample-input.jpg"
      }
    ],
    "topics": [
      "MLOps",
      "Model Serving",
      "Experiment Tracking",
      "Model Registry",
      "REST API",
      "ONNX Export",
      "Image Classification"
    ]
  },
  {
    "slug": "medicine-guidance",
    "year": "2023",
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Computer Vision",
      "ko": "AI · 컴퓨터 비전"
    },
    "title": {
      "en": "A-EYE: Medicine Guidance for the Visually Impaired",
      "ko": "A-EYE: 시각 장애인을 위한 의약품 안내"
    },
    "team": {
      "en": "Team of 3 — A-EYE (ChaeJiJoo Studio)",
      "ko": "3인 팀 — A-EYE (ChaeJiJoo Studio)"
    },
    "role": {
      "en": "Team Lead — idea & system design, data labeling, YOLOv5 training, FastAPI backend, Docker deployment, Google Play release",
      "ko": "팀장 — 아이디어 및 시스템 설계, 데이터 라벨링, YOLOv5 학습, FastAPI 백엔드, Docker 배포, Google Play 출시"
    },
    "tagline": {
      "en": "A YOLOv5-powered Android app and API that recognizes medicine packaging from a photo and returns its name, dosage and efficacy for blind and low-vision users.",
      "ko": "사진 한 장으로 의약품 패키지를 인식해 약품명·용법·효능을 알려주는, 시각 장애인과 저시력자를 위한 YOLOv5 기반 Android 앱 및 API."
    },
    "summary": {
      "en": "A-EYE (A.I + Additional Eye) is a medicine-information service for people who cannot read the dosage and usage text printed on medicine packaging. A YOLOv5 detector trained on Roboflow-annotated package images identifies the product, and a Dockerized FastAPI server returns its name, usage/dosage, efficacy and bounding box as JSON to a mobile client. The model reached 0.985 mAP@0.5 across three product classes, and the app was released on Google Play alongside an API documented for developers.",
      "ko": "A-EYE(A.I + Additional Eye)는 의약품 포장에 인쇄된 복용 방법·용량 정보를 읽기 어려운 사용자를 위한 의약품 정보 서비스입니다. Roboflow로 라벨링한 패키지 이미지로 학습한 YOLOv5 모델이 제품을 인식하고, Docker로 배포한 FastAPI 서버가 약품명·용법 및 용량·효능·bounding box를 JSON으로 모바일 앱에 반환합니다. 3개 제품 클래스 전체에서 mAP@0.5 0.985를 기록했고, 앱은 Google Play에 출시했으며 개발자용 API 문서도 함께 제공했습니다."
    },
    "problem": {
      "en": "Medicine packaging often carries no braille, and regulation on braille labeling of medicines was judged insufficient. When people cannot read or recognize the dosage and usage printed on a medicine container, the risk of accidentally taking the wrong medicine rises sharply — a problem for blind users and for people with presbyopia or amblyopia.",
      "ko": "의약품 포장에는 점자 표기가 없는 경우가 많고, 의약품 점자 표기에 관한 규정도 미흡하다고 판단했습니다. 약병에 적힌 복용 방법과 용량을 읽거나 인식하기 어려우면 실수로 잘못된 약을 복용할 위험이 크게 높아지며, 이는 시각 장애인뿐 아니라 노안·약시가 있는 사람에게도 해당하는 문제입니다."
    },
    "solution": {
      "en": "The user photographs medicine with the app (several products in one photo are supported). The image goes to a Back-End/AI server where YOLOv5 detects the package, and the server returns the product name, usage/dosage and efficacy together with the bounding box as JSON. The same endpoint is documented as an API so developers can add medicine recognition to their own projects; voice (TTS) delivery was planned as a key feature and left as follow-up work.",
      "ko": "사용자가 앱으로 의약품을 촬영하면(한 장에 여러 약품 포함 가능) 이미지가 Back-End/AI 서버로 전송되고, YOLOv5가 패키지를 검출한 뒤 서버가 약품명·용법 및 용량·효능을 bounding box와 함께 JSON으로 반환합니다. 같은 엔드포인트를 API로 문서화해 개발자가 자신의 프로젝트에 의약품 인식 기능을 통합할 수 있도록 했습니다. 음성(TTS) 안내는 핵심 기능으로 기획했지만 후속 과제로 남겼습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Service concept & business model",
          "ko": "서비스 기획 및 비즈니스 모델"
        },
        "body": {
          "en": "Framed the problem with a why–how–what pitch and a business model canvas: target users (blind, presbyopic and low-vision people), key metrics (mAP, F1), an Android app-store channel and a learning loop driven by user feedback. Named the service A-EYE — A.I plus an Additional Eye. Early plans considered OCR with TTS; the delivered pipeline centers on package detection.",
          "ko": "why–how–what 흐름의 피치와 비즈니스 모델 캔버스로 문제를 정의하고, 대상 사용자(시각 장애인, 노안·약시가 있는 사람), 핵심 지표(mAP, F1), Android 앱스토어 채널, 사용자 피드백 기반 학습 루프를 정리했습니다. 서비스 이름은 A.I와 Additional Eye를 합쳐 A-EYE로 지었습니다. 초기에는 OCR과 TTS를 결합하는 방식도 검토했지만, 최종 파이프라인은 패키지 검출 중심으로 구성했습니다."
        }
      },
      {
        "title": {
          "en": "Data collection & annotation",
          "ko": "데이터 수집 및 라벨링"
        },
        "body": {
          "en": "Crawled medicine-package images and built bounding-box annotations in Roboflow (777 images in the project dataset), then split the data into train/validation/test at 8:1:1.",
          "ko": "의약품 패키지 이미지를 크롤링하고 Roboflow로 bounding box를 라벨링했습니다(프로젝트 데이터셋 777장). 데이터는 train/validation/test를 8:1:1 비율로 분할했습니다."
        }
      },
      {
        "title": {
          "en": "YOLOv5 training & evaluation",
          "ko": "YOLOv5 학습 및 평가"
        },
        "body": {
          "en": "Trained a one-stage YOLOv5 detector for three products — Tylenol, Easyn6 and Hwalmyungsu — and evaluated it on the test split with mAP, precision/recall, F1-confidence curves and a confusion matrix.",
          "ko": "타이레놀, 이지엔6, 활명수 3개 제품을 검출하는 one-stage YOLOv5 모델을 학습하고, test set에서 mAP, precision/recall, F1-confidence 곡선, confusion matrix로 평가했습니다."
        }
      },
      {
        "title": {
          "en": "FastAPI inference server",
          "ko": "FastAPI 추론 서버"
        },
        "body": {
          "en": "Built a Python FastAPI back end whose /upload-image endpoint accepts a JPG as form-data, runs YOLOv5 and returns JSON with the category, product title, usage/dosage, efficacy and bounding box (x, y, w, h). Documented the endpoint so developers can integrate it into their own projects.",
          "ko": "Python FastAPI로 백엔드를 구축했습니다. /upload-image 엔드포인트는 form-data로 받은 JPG에 YOLOv5를 실행하고 category, 약품명(title), 용법 및 용량(usage), 효능(efficacy), bounding box(x, y, w, h)를 JSON으로 반환합니다. 개발자가 자신의 프로젝트에 통합할 수 있도록 API 사용법도 정리했습니다."
        }
      },
      {
        "title": {
          "en": "Docker deployment",
          "ko": "Docker 배포"
        },
        "body": {
          "en": "Packaged the server into a Docker image built on the Ultralytics YOLOv5 environment (PyTorch 2.0.0, CUDA 11.7), published it on Docker Hub as yoon689/aeye-pjt and served it from a local server.",
          "ko": "서버를 Ultralytics YOLOv5 환경(PyTorch 2.0.0, CUDA 11.7) 기반 Docker 이미지로 패키징해 Docker Hub(yoon689/aeye-pjt)에 배포하고 로컬 서버에서 운영했습니다."
        }
      },
      {
        "title": {
          "en": "Mobile app & Google Play release",
          "ko": "모바일 앱 및 Google Play 출시"
        },
        "body": {
          "en": "The mobile client photographs medicine and shows its name, usage and efficacy. V1.0 exposed a server-address field and Get Image / Upload / Crop Image controls; V2.0 shows a camera screen that prompts a retake when no medicine is recognized. Released on Google Play (com.aistudio.a_eye) with a published privacy policy.",
          "ko": "모바일 클라이언트로 의약품을 촬영하면 약품명·용법·효능을 보여 줍니다. V1.0은 서버 주소 입력과 Get Image / Upload / Crop Image 버튼을 제공했고, V2.0은 카메라 화면에서 인식되는 의약품이 없으면 재촬영을 안내합니다. 개인정보 처리방침을 공개하고 Google Play(com.aistudio.a_eye)에 출시했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "0.985 mAP@0.5 across all classes on the precision–recall curve (Tylenol 0.972, Easyn6 0.988, Hwalmyungsu 0.995).",
        "ko": "Precision–recall 곡선 기준 전체 클래스 mAP@0.5 0.985를 기록했습니다(타이레놀 0.972, 이지엔6 0.988, 활명수 0.995)."
      },
      {
        "en": "Peak F1 of 0.96 at a confidence threshold of 0.560.",
        "ko": "confidence threshold 0.560에서 최고 F1 0.96을 기록했습니다."
      },
      {
        "en": "Normalized confusion-matrix scores of 0.93 (Tylenol), 0.94 (Easyn6) and 1.00 (Hwalmyungsu).",
        "ko": "정규화 confusion matrix에서 타이레놀 0.93, 이지엔6 0.94, 활명수 1.00을 기록했습니다."
      },
      {
        "en": "Android app released on Google Play; inference server published as a public Docker Hub image (June 2023).",
        "ko": "Android 앱을 Google Play에 출시하고, 추론 서버를 공개 Docker Hub 이미지로 배포했습니다(2023년 6월)."
      },
      {
        "en": "App V1.0 and V2.0 demo videos published on YouTube (June 2023).",
        "ko": "앱 V1.0 및 V2.0 시연 영상을 YouTube에 공개했습니다(2023년 6월)."
      }
    ],
    "contributions": [
      {
        "en": "Led the 3-person A-EYE team; proposed the idea and designed the overall system.",
        "ko": "3인 A-EYE 팀을 이끌며 아이디어를 제안하고 전체 시스템을 설계했습니다."
      },
      {
        "en": "Labeled and preprocessed the medicine-package dataset.",
        "ko": "의약품 패키지 데이터셋을 라벨링하고 전처리했습니다."
      },
      {
        "en": "Trained and optimized the YOLOv5 detection model.",
        "ko": "YOLOv5 검출 모델을 학습하고 최적화했습니다."
      },
      {
        "en": "Developed the FastAPI backend / inference server.",
        "ko": "FastAPI 백엔드(추론 서버)를 개발했습니다."
      },
      {
        "en": "Containerized and deployed the server with Docker.",
        "ko": "Docker로 서버를 컨테이너화하고 배포했습니다."
      },
      {
        "en": "Released the app on the Google Play Store.",
        "ko": "Google Play 스토어에 앱을 출시했습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "YOLOv5 (Ultralytics)",
      "Roboflow",
      "FastAPI",
      "Docker",
      "Docker Hub",
      "Ubuntu",
      "Git",
      "Android"
    ],
    "topics": [
      "Object Detection",
      "Accessibility",
      "MLOps",
      "Model Serving",
      "Mobile App"
    ],
    "links": [
      {
        "type": "youtube",
        "label": {
          "en": "Demo videos",
          "ko": "데모 영상"
        },
        "url": "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoShORjxkDKIqB69mUsdFg3J"
      },
      {
        "type": "drive",
        "label": {
          "en": "Presentation (PDF)",
          "ko": "발표 자료 (PDF)"
        },
        "url": "https://drive.google.com/file/d/17mEj8z9fBWcfSgA6HBxsElNTnUO-C00o/view"
      },
      {
        "type": "notion",
        "label": {
          "en": "Project notes",
          "ko": "프로젝트 노트"
        },
        "url": "https://chaeyoonkim.notion.site/CJJ-Studio-A-EYE-1fb85a417def816397b5f7a7f1ffbe76"
      },
      {
        "type": "docker",
        "label": {
          "en": "Docker Hub image",
          "ko": "Docker Hub 이미지"
        },
        "url": "https://hub.docker.com/r/yoon689/aeye-pjt"
      }
    ],
    "youtube": [
      "tUa_03D01fY",
      "O50GQRBaCB0",
      "r_Q5QkrsvRQ"
    ],
    "cover": "img/medicine-guidance/cover.jpg",
    "images": [
      {
        "src": "img/medicine-guidance/01-yolov5-predictions.jpg",
        "caption": {
          "en": "Sample YOLOv5 detections: Tylenol, Easyn6 ('easyn') and Hwalmyungsu ('su') packages boxed with confidence scores.",
          "ko": "YOLOv5 검출 예시: confidence와 함께 박스로 표시된 타이레놀, 이지엔6(easyn), 활명수(su) 패키지."
        },
        "thumb": "img/medicine-guidance/thumbs/01-yolov5-predictions.jpg"
      },
      {
        "src": "img/medicine-guidance/02-app-demo.jpg",
        "caption": {
          "en": "App demo frames: V2.0 camera screen prompting a retake when no medicine is recognized (left); V1.0 upload flow with server address and Get Image / Upload / Crop Image (center); V1.0 result for Tylenol with name, usage, efficacy and bbox (right).",
          "ko": "앱 시연 화면: 인식되는 의약품이 없을 때 재촬영을 안내하는 V2.0 카메라 화면(왼쪽), 서버 주소와 Get Image / Upload / Crop Image를 제공하는 V1.0 업로드 화면(가운데), 약품명·용법·효능·bbox를 보여주는 V1.0 타이레놀 인식 결과(오른쪽)."
        },
        "thumb": "img/medicine-guidance/thumbs/02-app-demo.jpg"
      },
      {
        "src": "img/medicine-guidance/03-service-architecture.jpg",
        "caption": {
          "en": "Service architecture: the mobile client exchanges requests with a Dockerized Back-End/AI server (Python, FastAPI, JSON, YOLOv5) on a local server.",
          "ko": "서비스 구조: 모바일 클라이언트가 로컬 서버의 Docker 기반 Back-End/AI 서버(Python, FastAPI, JSON, YOLOv5)와 요청·응답을 주고받습니다."
        },
        "thumb": "img/medicine-guidance/thumbs/03-service-architecture.jpg"
      },
      {
        "src": "img/medicine-guidance/04-api-response.jpg",
        "caption": {
          "en": "Developer API: POST a JPG to /upload-image and receive JSON with category, product title, usage, efficacy and bounding box (x, y, w, h).",
          "ko": "개발자용 API: /upload-image에 JPG를 POST하면 category, 약품명, 용법, 효능, bounding box(x, y, w, h)가 담긴 JSON을 반환합니다."
        },
        "thumb": "img/medicine-guidance/thumbs/04-api-response.jpg"
      },
      {
        "src": "img/medicine-guidance/05-pr-curve.jpg",
        "caption": {
          "en": "Precision–recall curve: 0.985 mAP@0.5 over all classes (Tylenol 0.972, easyn 0.988, su 0.995).",
          "ko": "Precision–recall 곡선: 전체 클래스 mAP@0.5 0.985 (Tylenol 0.972, easyn 0.988, su 0.995)."
        },
        "thumb": "img/medicine-guidance/thumbs/05-pr-curve.jpg"
      },
      {
        "src": "img/medicine-guidance/06-confusion-matrix.jpg",
        "caption": {
          "en": "Normalized confusion matrix for the three product classes and background (0.93 Tylenol, 0.94 easyn, 1.00 su).",
          "ko": "3개 제품 클래스와 background에 대한 정규화 confusion matrix (Tylenol 0.93, easyn 0.94, su 1.00)."
        },
        "thumb": "img/medicine-guidance/thumbs/06-confusion-matrix.jpg"
      }
    ]
  },
  {
    "slug": "kaggle-great-barrier-reef",
    "year": "2022",
    "period": {
      "en": "Nov 2021 – Feb 2022",
      "ko": "2021.11 – 2022.02"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Object Detection · Kaggle",
      "ko": "AI · 객체 탐지 · Kaggle"
    },
    "title": {
      "en": "[Kaggle] Help Protect the Great Barrier Reef",
      "ko": "[Kaggle] Help Protect the Great Barrier Reef — 불가사리 탐지"
    },
    "team": {
      "en": "Team of 4 (Under The Sea)",
      "ko": "4인 팀 (Under The Sea)"
    },
    "role": {
      "en": "Team member",
      "ko": "팀원"
    },
    "tagline": {
      "en": "A 4-person team Kaggle entry that detects crown-of-thorns starfish in underwater reef video with YOLOv5; the team finished 353rd of 2,026.",
      "ko": "YOLOv5로 산호초 수중 영상 속 왕관가시불가사리(crown-of-thorns starfish, COTS)를 탐지한 4인 팀 Kaggle 프로젝트, 2,026팀 중 353위."
    },
    "summary": {
      "en": "TensorFlow – Help Protect the Great Barrier Reef was a Kaggle code competition to detect coral-eating crown-of-thorns starfish (COTS) in underwater video. It was scored by F2 averaged over IoU thresholds from 0.3 to 0.8. As a member of the 4-person team Under The Sea, worked on a YOLOv5 pipeline with sequence-aware stratified group k-fold splits, background-image mixing and recall-oriented tuning. The team finished 353 / 2026 on the private leaderboard with a score of 0.635.",
      "ko": "TensorFlow – Help Protect the Great Barrier Reef는 수중 영상에서 산호를 먹는 왕관가시불가사리(crown-of-thorns starfish, COTS)를 탐지하는 Kaggle code competition입니다. 평가 지표는 IoU 임계값 0.3~0.8에 걸쳐 평균한 F2 score입니다. 4인 팀 Under The Sea의 일원으로 시퀀스 단위 stratified group k-fold 분할, 배경 이미지 혼합, recall 중심 튜닝을 적용한 YOLOv5 파이프라인 작업에 참여했습니다. 팀은 private leaderboard에서 0.635점으로 2,026팀 중 353위를 기록했습니다."
    },
    "problem": {
      "en": "The F2 metric weights recall over precision, so a missed starfish costs more than a false alarm. Images are frames from continuous video sequences, so a random train/validation split leaks highly correlated frames and makes validation scores look better than they are. Fewer than 5,000 labeled images were available, far below the 10,000+ recommended for YOLOv5. Some starfish visible in consecutive frames were left unlabeled, and local validation diverged from the leaderboard.",
      "ko": "F2 지표는 precision보다 recall에 더 큰 가중치를 두므로, 불가사리를 놓치는 비용이 오탐보다 큽니다. 이미지는 연속된 영상 시퀀스의 프레임이므로 train/validation을 무작위로 나누면 상관관계가 높은 프레임이 양쪽에 섞여 validation 점수가 실제보다 높게 나옵니다. 라벨이 있는 이미지는 5,000장이 채 되지 않아 YOLOv5 권장치(10,000장 이상)에 크게 못 미쳤습니다. 연속 프레임에 보이는 불가사리 일부에는 라벨이 빠져 있었고, 로컬 validation 점수와 leaderboard 점수도 서로 어긋났습니다."
    },
    "solution": {
      "en": "A YOLOv5 detector, starting from a yolov5m baseline, with a sequence-aware Stratified Group 5-fold split. Validation folds mimic the assumed test mix of about 80% background and 20% annotated images. Training adds a small share of background images to reduce false positives, plus Albumentations augmentation, a tuned learning-rate schedule and objectness-loss gain. A lowered confidence threshold favors recall.",
      "ko": "yolov5m 베이스라인에서 출발해 시퀀스 단위 Stratified Group 5-fold 분할을 적용한 YOLOv5 검출 모델입니다. Validation fold는 test set의 구성으로 가정한 배경 이미지 약 80%, 라벨 이미지 약 20% 비율을 따르도록 했습니다. 학습에는 오탐을 줄이기 위해 소량의 배경 이미지를 추가하고, Albumentations 데이터 증강과 조정한 learning-rate schedule, objectness loss gain을 적용했습니다. 또한 recall을 높이기 위해 confidence threshold를 낮췄습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Baseline pipeline",
          "ko": "베이스라인 파이프라인"
        },
        "body": {
          "en": "Started from public YOLOv5 and YOLOX training notebooks. Modules were implemented locally and merged in Kaggle notebooks for training and submission. The yolov5m baseline (20 epochs, random 5-fold) scored 0.389 on the leaderboard. A model trained on multiple GPUs was confirmed to run in the single-GPU Kaggle inference notebook.",
          "ko": "공개된 YOLOv5·YOLOX 학습 노트북에서 출발했습니다. 모듈은 로컬에서 구현한 뒤 Kaggle 노트북에서 합쳐 학습과 제출을 진행했습니다. yolov5m 베이스라인(20 epoch, random 5-fold)의 LB 점수는 0.389였습니다. 여러 GPU로 학습한 모델이 단일 GPU Kaggle 추론 노트북에서도 정상 동작하는 것을 확인했습니다."
        }
      },
      {
        "title": {
          "en": "Sequence-aware data split",
          "ko": "시퀀스 단위 데이터 분할"
        },
        "body": {
          "en": "Frames were grouped by video sequence (GroupKFold) so that no sequence appears in both train and validation. This became a Stratified Group 5-fold split: train folds hold about 95% annotated and 5% background images, and validation folds about 20% annotated and 80% background, to match the assumed test distribution.",
          "ko": "프레임을 영상 시퀀스 단위로 묶어(GroupKFold) 같은 시퀀스가 train과 validation에 동시에 들어가지 않도록 했습니다. 이를 Stratified Group 5-fold 분할로 발전시켜, 가정한 test 분포에 맞게 train fold는 라벨 이미지 약 95%·배경 이미지 약 5%, validation fold는 라벨 이미지 약 20%·배경 이미지 약 80%로 구성했습니다."
        }
      },
      {
        "title": {
          "en": "Background images & recall",
          "ko": "배경 이미지와 recall"
        },
        "body": {
          "en": "Unannotated background images were mixed into training. Adding 300 background images with a 0.15 confidence threshold raised the leaderboard score from 0.389 to 0.443. Under F2, false negatives matter more than false positives, so lower confidence thresholds were preferred.",
          "ko": "라벨이 없는 배경 이미지를 학습 데이터에 섞었습니다. 배경 이미지 300장을 추가하고 confidence threshold를 0.15로 설정하자 LB 점수가 0.389에서 0.443으로 올랐습니다. F2에서는 false positive보다 false negative가 더 중요하므로 낮은 confidence threshold를 택했습니다."
        }
      },
      {
        "title": {
          "en": "Training tuning",
          "ko": "학습 튜닝"
        },
        "body": {
          "en": "Overfitting appeared around epoch 10 of 20. Setting the final learning-rate ratio to 1.0 improved performance, with some added noise. Lowering the objectness loss gain from 1.0 to 0.7 removed objectness overfitting but shifted it toward the box loss, so the next step was to find a balance between 0.7 and 1.0.",
          "ko": "20 epoch 중 10 epoch 무렵부터 과적합이 나타났습니다. 최종 learning-rate 비율을 1.0으로 설정하자 노이즈는 다소 생겼지만 성능이 좋아졌습니다. Objectness loss gain을 1.0에서 0.7로 낮추자 objectness 과적합은 사라졌지만 과적합이 box loss 쪽으로 옮겨 가, 다음 단계로 0.7~1.0 사이에서 균형점을 찾기로 했습니다."
        }
      },
      {
        "title": {
          "en": "Augmentation, resolution & labels",
          "ko": "데이터 증강·해상도·라벨"
        },
        "body": {
          "en": "Albumentations augmentation used up/down and left/right flips, RandomBrightnessContrast, GaussNoise and random scaling. A larger inference image size improved the score because the public test set contained mostly small starfish. Roboflow was used to inspect sequences and clean labels.",
          "ko": "Albumentations로 상하·좌우 반전, RandomBrightnessContrast, GaussNoise, 무작위 스케일링을 적용했습니다. Public test set에는 작은 불가사리가 많아, 추론 이미지 크기를 키우자 점수가 올랐습니다. Roboflow로 시퀀스를 확인하고 라벨을 정제했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Private leaderboard: rank 353 / 2026, score 0.635 (public LB 0.614).",
        "ko": "Private leaderboard에서 2,026팀 중 353위(점수 0.635, public LB 0.614)를 기록했습니다."
      },
      {
        "en": "Experiment log: yolov5m baseline LB 0.389, raised to 0.443 with 300 background images and a 0.15 confidence threshold.",
        "ko": "실험 기록상 yolov5m 베이스라인의 LB 0.389를 배경 이미지 300장 추가와 confidence threshold 0.15 적용으로 0.443까지 끌어올렸습니다."
      }
    ],
    "contributions": [
      {
        "en": "Member of the 4-person team Under The Sea; took part in the team's experiments and discussions on data splitting, background-image mixing and hyperparameter tuning.",
        "ko": "4인 팀 Under The Sea의 팀원으로 데이터 분할, 배경 이미지 혼합, 하이퍼파라미터 튜닝에 관한 팀 실험과 논의에 참여했습니다."
      },
      {
        "en": "Assigned to upload a video sequence to Roboflow and analyze it for label review.",
        "ko": "영상 시퀀스 하나를 Roboflow에 업로드하고 라벨 검토를 위해 분석하는 작업을 맡았습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "YOLOv5",
      "Albumentations",
      "scikit-learn (GroupKFold)",
      "Roboflow",
      "Weights & Biases",
      "Ubuntu"
    ],
    "topics": [
      "Object Detection",
      "Kaggle",
      "Underwater Imagery",
      "Cross-validation",
      "Data Split"
    ],
    "links": [
      {
        "type": "notion",
        "label": {
          "en": "Solution write-up",
          "ko": "솔루션 정리"
        },
        "url": "https://chaeyoonkim.notion.site/1fb85a417def8168be3ac5a51b644327"
      },
      {
        "type": "kaggle",
        "label": {
          "en": "Competition",
          "ko": "대회 페이지"
        },
        "url": "https://www.kaggle.com/competitions/tensorflow-great-barrier-reef"
      },
      {
        "type": "notion",
        "label": {
          "en": "Team discussion notes",
          "ko": "팀 토의 자료"
        },
        "url": "https://chaeyoonkim.notion.site/RRR-1fb85a417def812f8d36dbdc77f1e2eb"
      },
      {
        "type": "notion",
        "label": {
          "en": "Experiment records",
          "ko": "실험 기록"
        },
        "url": "https://chaeyoonkim.notion.site/1fb85a417def8130a844e2e0bf054e11"
      }
    ],
    "cover": "img/kaggle-great-barrier-reef/cover.jpg",
    "images": [
      {
        "src": "img/kaggle-great-barrier-reef/01-train-image-annotated.jpg",
        "caption": {
          "en": "Training-set example: a reef frame with annotated crown-of-thorns starfish boxes",
          "ko": "학습 데이터 예시: 왕관가시불가사리 bounding box가 표시된 산호초 프레임"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/01-train-image-annotated.jpg"
      },
      {
        "src": "img/kaggle-great-barrier-reef/02-stratified-group-5fold.jpg",
        "caption": {
          "en": "Data split design: 5 folds, with train folds about 95% annotated / 5% background and validation folds about 20% annotated / 80% background to mirror the assumed test set",
          "ko": "데이터 분할 설계: 5-fold 구성에서 train fold는 라벨 이미지 약 95%·배경 이미지 약 5%, validation fold는 가정한 test set에 맞춰 라벨 이미지 약 20%·배경 이미지 약 80%"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/02-stratified-group-5fold.jpg"
      },
      {
        "src": "img/kaggle-great-barrier-reef/03-background-sampling-formula.jpg",
        "caption": {
          "en": "Stratified Group k-Fold: deriving how many background images to drop so each train fold keeps about 5% background",
          "ko": "Stratified Group k-Fold: 각 train fold의 배경 이미지 비율을 약 5%로 맞추기 위해 제거할 배경 이미지 수를 계산한 과정"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/03-background-sampling-formula.jpg"
      },
      {
        "src": "img/kaggle-great-barrier-reef/04-unannotated-starfish-frames.jpg",
        "caption": {
          "en": "Consecutive video frames: a starfish labeled in one frame is unlabeled in the neighboring frame, which motivated label cleaning and pseudo-labeling ideas",
          "ko": "연속된 영상 프레임: 한 프레임에서 라벨이 있는 불가사리가 인접 프레임에서는 라벨이 빠져 있어, 라벨 정제와 pseudo-labeling 아이디어의 계기가 된 사례"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/04-unannotated-starfish-frames.jpg"
      },
      {
        "src": "img/kaggle-great-barrier-reef/05-test-image-example.jpg",
        "caption": {
          "en": "Test-image example, used to compare visual differences between the training and test frames",
          "ko": "Test 이미지 예시: 학습 프레임과 test 프레임의 시각적 차이를 비교하는 데 사용한 이미지"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/05-test-image-example.jpg"
      }
    ]
  },
  {
    "slug": "background-dependency",
    "year": "2021",
    "period": {
      "en": "Fall 2021",
      "ko": "2021년 2학기"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Robustness Analysis",
      "ko": "AI · 강건성 분석"
    },
    "title": {
      "en": "Analysis of Background Image Dependency in ML Models",
      "ko": "머신러닝 학습 모델에서 배경 이미지 의존도 분석"
    },
    "team": {
      "en": "Individual",
      "ko": "개인"
    },
    "role": {
      "en": "Sole researcher (M.S. course term project, KNU)",
      "ko": "단독 수행 (경북대 석사과정 기말 프로젝트)"
    },
    "tagline": {
      "en": "A term project that measures how much a YOLOv5 detector relies on image backgrounds, using ImageNet-9 variants with separated and swapped foregrounds and backgrounds.",
      "ko": "전경·배경을 분리하거나 교체한 ImageNet-9 변형 데이터셋으로 YOLOv5 탐지 모델이 배경 이미지에 얼마나 의존하는지 측정한 기말 프로젝트."
    },
    "summary": {
      "en": "Final term project for the Deep Learning Applications course (심화학습 응용) at Kyungpook National University, 2021-2. It builds on the ICLR 2021 paper 'Noise or Signal: The Role of Image Backgrounds in Object Recognition'. YOLOv5 labels were built for the IN-9L dataset variants, YOLOv5s was trained on foreground-only, background-only and mixed-background data, and accuracy was compared across test sets. YOLOv5 showed measurable background dependence, though less than the paper reports for ResNet, and further training on mixed backgrounds narrowed the background gap.",
      "ko": "경북대학교 2021-2학기 심화학습 응용 과목의 기말 프로젝트입니다. ICLR 2021 논문 'Noise or Signal: The Role of Image Backgrounds in Object Recognition'을 바탕으로 했습니다. IN-9L 변형 데이터셋에 맞는 YOLOv5 라벨을 구축하고, 전경만 있는 데이터·배경만 있는 데이터·배경을 섞은 데이터로 YOLOv5s를 학습해 test set별 정확도를 비교했습니다. YOLOv5에서도 측정 가능한 수준의 배경 의존도가 나타났지만 논문의 ResNet 결과보다는 낮았고, 배경을 섞은 데이터로 추가 학습하자 배경에 따른 정확도 차이가 줄었습니다."
    },
    "problem": {
      "en": "An earlier experiment exposed the issue. YOLOv5s was trained on about 3,000 images of roughly 300 3D-modeled chairs rendered on plain backgrounds. It then boxed the entire image instead of the object and recognized any object on a plain background as a chair. The question was how strongly a detector's predictions depend on the training images' backgrounds rather than on the object itself.",
      "ko": "이전 실험에서 문제가 드러났습니다. 단색 배경에 렌더링한 3D 의자 모델 약 300개, 이미지 약 3,000장으로 YOLOv5s를 학습하자 물체 대신 이미지 전체를 검출하고, 단색 배경 위의 어떤 물체든 의자로 인식했습니다. 이에 탐지 모델의 예측이 물체 자체보다 학습 이미지의 배경에 얼마나 의존하는지를 확인하고자 했습니다."
    },
    "solution": {
      "en": "Reproduce the background-dependence analysis of Xiao et al. (ICLR 2021) with an object detector. The IN-9L variants (Original, Only-FG, No-FG, Mixed-Same, Mixed-Rand, Mixed-Next) were converted to YOLOv5 format, and YOLOv5s models trained on different variants were tested across them. Dependence was measured with cross-dataset test accuracy and the BG-Gap, the accuracy difference between Mixed-Same and Mixed-Rand.",
      "ko": "Xiao et al.(ICLR 2021)의 배경 의존도 분석을 객체 탐지 모델로 재현했습니다. IN-9L 변형(Original, Only-FG, No-FG, Mixed-Same, Mixed-Rand, Mixed-Next)을 YOLOv5 형식으로 변환하고 서로 다른 변형으로 학습한 YOLOv5s 모델을 여러 변형에서 교차 테스트했습니다. 의존도는 데이터셋 간 교차 test 정확도와 BG-Gap(Mixed-Same과 Mixed-Rand의 정확도 차이)으로 측정했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Dataset conversion",
          "ko": "데이터셋 변환"
        },
        "body": {
          "en": "A first attempt that treated the whole image as the bounding box performed poorly. IN-9L images were instead matched by filename to ImageNet bounding-box annotations and converted from Pascal VOC XML to YOLOv5 format with Roboflow. className.py extracted per-class annotations, and resetClass.py removed unannotated files and remapped ImageNet synset IDs to IN-9L class names. Five classes were used: dog, bird, reptile, insect and fish.",
          "ko": "이미지 전체를 bounding box로 본 첫 시도는 결과가 좋지 않았습니다. 대신 IN-9L 이미지를 파일명 기준으로 ImageNet bounding-box annotation과 매칭하고, Roboflow로 Pascal VOC XML을 YOLOv5 형식으로 변환했습니다. className.py로 클래스별 annotation을 추출했고, resetClass.py로는 annotation이 없는 파일을 제거하고 ImageNet synset ID를 IN-9L 클래스 이름으로 다시 매핑했습니다. 사용한 클래스는 dog, bird, reptile, insect, fish 5개입니다."
        }
      },
      {
        "title": {
          "en": "Learning without background",
          "ko": "배경 없이 학습"
        },
        "body": {
          "en": "YOLOv5s was trained on Only-FG data and tested on Only-FG and Original images. On Original images accuracy dropped sharply, and the model boxed the whole image instead of the object.",
          "ko": "Only-FG 데이터로 YOLOv5s를 학습한 뒤 Only-FG와 Original 이미지로 테스트했습니다. Original 이미지에서는 정확도가 크게 떨어졌고, 모델이 물체 대신 이미지 전체를 검출했습니다."
        }
      },
      {
        "title": {
          "en": "Foreground presence",
          "ko": "전경 유무 비교"
        },
        "body": {
          "en": "Models trained on No-FG and on Only-FG data were tested on Original images. The No-FG model scored about 8.5%p higher, which shows the detector uses background features around the object.",
          "ko": "No-FG와 Only-FG 데이터로 각각 학습한 모델을 Original 이미지로 테스트했습니다. No-FG 모델이 약 8.5%p 높았으며, 이를 통해 탐지 모델이 물체 주변의 배경 특징을 활용한다는 것을 확인했습니다."
        }
      },
      {
        "title": {
          "en": "Reducing dependence",
          "ko": "배경 의존도 낮추기"
        },
        "body": {
          "en": "A model trained on Original data was further trained on Mixed-Same and Mixed-Rand data. All three models were evaluated on the Next, Only-FG, Original, Same and Rand test sets, and BG-Gaps were computed.",
          "ko": "Original로 학습한 모델을 Mixed-Same과 Mixed-Rand 데이터로 추가 학습했습니다. 세 모델을 Next, Only-FG, Original, Same, Rand test set으로 평가하고 BG-Gap을 계산했습니다."
        }
      },
      {
        "title": {
          "en": "Comparison with the paper",
          "ko": "원 논문과 비교"
        },
        "body": {
          "en": "The results were compared with the ICLR 2021 findings. Whole-image classification reproduced the paper's results most closely, while detection showed weaker background dependence.",
          "ko": "결과를 ICLR 2021 논문과 비교했습니다. 이미지 전체를 대상으로 한 분류 설정이 논문 결과를 가장 가깝게 재현했고, 객체 탐지에서는 배경 의존도가 상대적으로 약했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "The model trained on Original data reached 0.90 accuracy on Original test images but only 0.64 on Mixed-Rand and 0.61 on Mixed-Next (Original vs Mixed-Rand BG-Gap: 0.26).",
        "ko": "Original로 학습한 모델은 Original test에서 정확도 0.90을 기록했지만 Mixed-Rand에서 0.64, Mixed-Next에서 0.61에 그쳤습니다(Original–Mixed-Rand BG-Gap 0.26)."
      },
      {
        "en": "After further training on Mixed-Rand, accuracy rose to 0.86 on Mixed-Rand and 0.87 on Mixed-Next, and the Mixed-Rand vs Mixed-Same BG-Gap narrowed from 0.08 to 0.03; Original-test accuracy fell from 0.90 to 0.81.",
        "ko": "Mixed-Rand 추가 학습 후 Mixed-Rand 0.86, Mixed-Next 0.87로 올랐고, Mixed-Rand–Mixed-Same BG-Gap은 0.08에서 0.03으로 줄었습니다. 대신 Original test 정확도는 0.90에서 0.81로 낮아졌습니다."
      },
      {
        "en": "On Original test images, the No-FG-trained model scored about 8.5%p higher than the Only-FG-trained model.",
        "ko": "Original test 이미지에서 No-FG로 학습한 모델이 Only-FG로 학습한 모델보다 약 8.5%p 높았습니다."
      },
      {
        "en": "YOLOv5 showed background dependence, but less than the ResNet results in the reference paper, and frequent misclassification from background noise was not observed.",
        "ko": "YOLOv5에도 배경 의존도가 있었지만 참고 논문의 ResNet 결과보다 낮았고, 배경 노이즈로 인한 오분류는 자주 나타나지 않았습니다."
      }
    ],
    "contributions": [
      {
        "en": "Carried out the whole study individually: experiment design, dataset conversion, YOLOv5s training, evaluation, report and final presentation.",
        "ko": "실험 설계, 데이터셋 변환, YOLOv5s 학습, 평가, 보고서와 최종 발표까지 전 과정을 혼자 수행했습니다."
      },
      {
        "en": "Wrote the preprocessing scripts (className.py, resetClass.py) that build YOLOv5 labels for IN-9L from ImageNet annotations.",
        "ko": "ImageNet annotation으로 IN-9L의 YOLOv5 라벨을 만드는 전처리 스크립트(className.py, resetClass.py)를 작성했습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "YOLOv5 (YOLOv5s)",
      "Roboflow",
      "ImageNet-9 (IN-9L)",
      "Ubuntu"
    ],
    "topics": [
      "Dataset Bias",
      "Robustness",
      "Object Detection",
      "Background Dependence"
    ],
    "links": [
      {
        "type": "notion",
        "label": {
          "en": "Notion write-up",
          "ko": "Notion 정리"
        },
        "url": "https://chaeyoonkim.notion.site/2021-term-project-20e85a417def8048820bcd5483ba0058"
      },
      {
        "type": "doc",
        "label": {
          "en": "Final report (PDF)",
          "ko": "최종 보고서 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4859eacc-cd9b-4782-921b-bc618b18cd0e%2F%EA%B9%80%EC%B1%84%EC%9C%A4_%EC%8B%AC%ED%99%94%ED%95%99%EC%8A%B5_%EC%9D%91%EC%9A%A9_%EA%B8%B0%EB%A7%90_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_Report.pdf?table=block&id=1fb85a41-7def-81c9-aad4-e85bd2e88d11&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      },
      {
        "type": "doc",
        "label": {
          "en": "Final presentation (PPTX)",
          "ko": "최종 발표 자료 (PPTX)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f9a28a4-36cc-41bb-92bc-e6b8459ae33e%2F%EC%8B%AC%ED%99%94%ED%95%99%EC%8A%B5_%EC%9D%91%EC%9A%A9_Final.pptx?table=block&id=20e85a41-7def-8152-9b6f-e381e66bd4ca&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: Noise or Signal (ICLR 2021)",
          "ko": "참고 논문: Noise or Signal (ICLR 2021)"
        },
        "url": "https://arxiv.org/abs/2006.09994"
      }
    ],
    "cover": "img/background-dependency/cover.jpg",
    "images": [
      {
        "src": "img/background-dependency/01-only-fg-train-set.jpg",
        "caption": {
          "en": "Only-FG training set: foreground objects on black backgrounds with YOLOv5 labels (dog, bird, reptile, insect, fish)",
          "ko": "Only-FG 학습 데이터: 검은 배경 위 전경 물체와 YOLOv5 라벨(dog, bird, reptile, insect, fish)"
        },
        "thumb": "img/background-dependency/thumbs/01-only-fg-train-set.jpg"
      },
      {
        "src": "img/background-dependency/02-in9l-dataset-variants.jpg",
        "caption": {
          "en": "IN-9L dataset variants used in the analysis: Original, Only-BG-B/T, No-FG, Only-FG, Mixed-Same/Rand/Next (figure from Xiao et al., ICLR 2021)",
          "ko": "분석에 사용한 IN-9L 변형 데이터셋: Original, Only-BG-B/T, No-FG, Only-FG, Mixed-Same/Rand/Next (Xiao et al., ICLR 2021 논문 figure)"
        },
        "thumb": "img/background-dependency/thumbs/02-in9l-dataset-variants.jpg"
      },
      {
        "src": "img/background-dependency/03-chair-plain-background-failure.jpg",
        "caption": {
          "en": "Motivating case: YOLOv5s trained on plain-background chair renders boxes whole images and labels an umbrella as a chair",
          "ko": "문제의 출발점: 단색 배경 의자 렌더링 이미지로 학습한 YOLOv5s가 이미지 전체에 박스를 치고 우산을 의자로 인식한 사례"
        },
        "thumb": "img/background-dependency/thumbs/03-chair-plain-background-failure.jpg"
      },
      {
        "src": "img/background-dependency/04-only-fg-model-on-original.jpg",
        "caption": {
          "en": "Only-FG-trained model tested on Original images: predicted boxes cover the whole image instead of the object",
          "ko": "Only-FG로 학습한 모델의 Original 이미지 테스트 결과: 물체가 아닌 이미지 전체를 덮는 예측 박스"
        },
        "thumb": "img/background-dependency/thumbs/04-only-fg-model-on-original.jpg"
      },
      {
        "src": "img/background-dependency/05-nofg-vs-onlyfg.jpg",
        "caption": {
          "en": "Original-test results of No-FG- vs Only-FG-trained models, plotted as a background-dependency ratio; No-FG is about 8.5%p higher",
          "ko": "No-FG와 Only-FG로 학습한 모델의 Original test 결과를 background dependency ratio로 나타낸 그래프로, No-FG 모델이 약 8.5%p 높습니다."
        },
        "thumb": "img/background-dependency/thumbs/05-nofg-vs-onlyfg.jpg"
      },
      {
        "src": "img/background-dependency/06-bg-gap-results-slide.jpg",
        "caption": {
          "en": "Background dependence after further training on Mixed-Same / Mixed-Rand: radar chart of test accuracy and BG-Gap table",
          "ko": "Mixed-Same / Mixed-Rand 추가 학습 후 배경 의존도: test 정확도 radar chart와 BG-Gap 표"
        },
        "thumb": "img/background-dependency/thumbs/06-bg-gap-results-slide.jpg"
      }
    ]
  },
  {
    "slug": "kalman-3d-tracking",
    "year": "2021",
    "period": {
      "en": "Fall 2021",
      "ko": "2021년 2학기"
    },
    "category": "robotics",
    "categoryLabel": {
      "en": "Robotics · Object Tracking",
      "ko": "로보틱스 · 객체 추적"
    },
    "title": {
      "en": "3D Object Tracking Using Kalman Filter",
      "ko": "칼만 필터를 이용한 3차원 객체 추적"
    },
    "team": {
      "en": "Individual (KNU 'Advanced Topics in Robot Sensors' term project)",
      "ko": "개인 (경북대 로봇센서특론 기말 프로젝트)"
    },
    "role": {
      "en": "Sole developer: detector training, camera calibration, depth estimation, image-to-world transform, Kalman filter, ROS integration",
      "ko": "단독 개발: 검출기 학습, 카메라 캘리브레이션, 깊이 추정, 이미지→월드 좌표 변환, 칼만 필터, ROS 통합"
    },
    "tagline": {
      "en": "Tracks a YOLOv5-detected ball in 3D world coordinates with a constant-velocity Kalman filter on ROS.",
      "ko": "YOLOv5로 검출한 공을 ROS 기반 등속 모델 칼만 필터로 3차원 월드 좌표계에서 추적."
    },
    "summary": {
      "en": "A ROS package that turns monocular camera detections into 3D position and velocity estimates. A custom-trained YOLOv5s detects a blue ball, and its distance is estimated from bounding-box size with a fitted curve. The pixel position is back-projected into 3D using calibrated intrinsics, and a constant-velocity Kalman filter estimates 3D position and velocity. The filter was built step by step (1D image, 2D image, 3D world), and results are visualized in RViz and as a velocity arrow drawn on the camera image.",
      "ko": "단안 카메라의 검출 결과를 3차원 위치·속도 추정값으로 변환하는 ROS 패키지입니다. 직접 학습한 YOLOv5s로 파란 공을 검출하고, 커브 피팅한 함수로 바운딩 박스 크기에서 거리를 추정합니다. 캘리브레이션으로 구한 내부 파라미터로 픽셀 위치를 3D로 역투영하고, 등속 모델 칼만 필터로 3D 위치와 속도를 추정합니다. 필터는 1D 이미지 → 2D 이미지 → 3D 월드 순서로 단계적으로 구현했으며, 결과는 RViz와 카메라 영상 위의 속도 화살표로 시각화했습니다."
    },
    "problem": {
      "en": "Deep-learning detectors can miss an object (false negatives) or lose it behind obstacles (occlusion), which interrupts tracking. A detection also gives only a pixel position, with no velocity and no metric 3D location.",
      "ko": "딥러닝 기반 검출기는 물체를 놓치거나(false negative) 장애물에 가려진 물체를 잃는(occlusion) 경우가 있어 추적이 끊길 수 있습니다. 또한 검출 결과는 픽셀 위치만 제공하므로 속도와 실제 3차원 위치는 알 수 없습니다."
    },
    "solution": {
      "en": "Detection, calibrated geometry and filtering are chained in ROS. YOLOv5s gives the ball's pixel position, a bbox-size-to-distance curve gives depth, the camera intrinsics K lift the detection into 3D, and a constant-velocity Kalman filter filters the measured position and estimates the velocity that a detection alone does not provide. The estimated velocity is projected back onto the image plane for display.",
      "ko": "ROS에서 검출, 캘리브레이션 기반 기하 변환, 필터링을 연결했습니다. YOLOv5s로 공의 픽셀 위치를, 바운딩 박스 크기–거리 커브로 깊이를 구하고, 카메라 내부 파라미터 K로 3D 위치를 계산합니다. 등속 모델 칼만 필터는 측정 위치를 필터링하고 검출만으로는 알 수 없는 속도까지 추정하며, 추정한 속도는 다시 이미지 평면에 투영해 표시합니다."
    },
    "approach": [
      {
        "title": {
          "en": "Object detection",
          "ko": "객체 검출"
        },
        "body": {
          "en": "A sphere was chosen as the target because its bounding box looks the same from any direction. A YOLOv5s model was trained on augmented blue-ball images (a training folder of 690 images) and run in ROS through yolov5_pytorch_ros (/yolov5/bounding_boxes).",
          "ko": "어느 방향에서 봐도 바운딩 박스가 같게 나오는 구를 대상으로 정했습니다. 데이터 증강을 적용한 파란 공 이미지(학습 폴더 690장)로 YOLOv5s를 학습하고, yolov5_pytorch_ros로 ROS에서 실행했습니다(/yolov5/bounding_boxes)."
        }
      },
      {
        "title": {
          "en": "Camera calibration",
          "ko": "카메라 캘리브레이션"
        },
        "body": {
          "en": "Checkerboard calibration in ROS gave the intrinsics for the 640×480 camera: fx ≈ 639.0, fy ≈ 643.0, principal point ≈ (337.5, 222.9), skew 0, plus distortion coefficients.",
          "ko": "ROS에서 체커보드로 캘리브레이션해 640×480 카메라의 내부 파라미터를 구했습니다. fx ≈ 639.0, fy ≈ 643.0, 주점 ≈ (337.5, 222.9), skew 0이며, 왜곡 계수도 함께 얻었습니다."
        }
      },
      {
        "title": {
          "en": "Depth from bounding-box size",
          "ko": "바운딩 박스 크기 기반 깊이 추정"
        },
        "body": {
          "en": "Bounding-box sizes were collected at known distances. The longer box side was used so that partial occlusion has less effect, and a 4-parameter logistic curve was fitted (R² = 0.9971). depth_estimator.py publishes the result on /kcy/depth.",
          "ko": "실제 거리별로 바운딩 박스 크기 데이터를 수집했습니다. 부분 가림(occlusion)의 영향을 줄이기 위해 가로·세로 중 긴 변을 사용하고, 4PL(4-parameter logistic) 커브로 피팅했습니다(R² = 0.9971). depth_estimator.py가 결과를 /kcy/depth로 퍼블리시합니다."
        }
      },
      {
        "title": {
          "en": "Image-to-world transform",
          "ko": "이미지 → 월드 좌표 변환"
        },
        "body": {
          "en": "The box center (u, v) and the depth are back-projected as X = depth · K⁻¹[u, v, 1]ᵀ, with R = I and t = 0 because the camera sits at the origin. The result is rotated into a forward-left-up frame and published as a PoseStamped on /kcy/pose.",
          "ko": "카메라가 원점에 있으므로 R = I, t = 0으로 두고, 박스 중심 (u, v)와 깊이(depth)를 X = depth · K⁻¹[u, v, 1]ᵀ로 역투영했습니다. 결과는 forward-left-up 좌표계로 회전해 /kcy/pose에 PoseStamped로 퍼블리시합니다."
        }
      },
      {
        "title": {
          "en": "Constant-velocity Kalman filter",
          "ko": "등속 모델 칼만 필터"
        },
        "body": {
          "en": "The 6-D state [x, ẋ, y, ẏ, z, ż] uses P₀ = 100I, Q = diag(0.1, 50, 0.1, 50, 0.1, 50) and R = I, and dt is updated from message timing. The filter was developed step by step: 1D image, 2D image, then 3D world.",
          "ko": "6차원 상태 [x, ẋ, y, ẏ, z, ż]에 P₀ = 100I, Q = diag(0.1, 50, 0.1, 50, 0.1, 50), R = I를 적용하고, dt는 메시지 수신 시간으로 갱신합니다. 필터는 1D 이미지 → 2D 이미지 → 3D 월드 순서로 단계적으로 구현했습니다."
        }
      },
      {
        "title": {
          "en": "Visualization",
          "ko": "시각화"
        },
        "body": {
          "en": "The filtered position, velocity and trajectory are published as Pose, Twist and Marker messages for RViz. The 3D velocity is projected back through K and drawn on the camera image as an OpenCV arrow.",
          "ko": "필터링한 위치·속도·궤적을 Pose, Twist, Marker 메시지로 퍼블리시해 RViz에 표시했습니다. 3D 속도는 K로 다시 투영해 카메라 영상 위에 OpenCV 화살표로 그렸습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Working ROS package (kcy_sensor_fusion) with depth-estimation, image-to-world and 1D/2D/3D Kalman filter nodes, launch files and an RViz config, published on GitHub.",
        "ko": "깊이 추정, 이미지→월드 변환, 1D/2D/3D 칼만 필터 노드와 launch 파일, RViz 설정을 포함해 실제로 동작하는 ROS 패키지(kcy_sensor_fusion)를 GitHub에 공개했습니다."
      },
      {
        "en": "Bounding-box-to-distance model fitted with R² = 0.9971.",
        "ko": "바운딩 박스 크기–거리 모델을 R² = 0.9971로 피팅했습니다."
      },
      {
        "en": "Demo videos of tracking in 1D, in the 2D image and in the 3D world.",
        "ko": "1D, 2D 이미지, 3D 월드에서의 추적 데모 영상을 공개했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Trained a YOLOv5s detector for the target ball using augmented training data.",
        "ko": "데이터 증강을 적용한 학습 데이터로 대상 공 검출용 YOLOv5s를 학습했습니다."
      },
      {
        "en": "Calibrated the camera and built a bounding-box-size-to-distance model by curve fitting.",
        "ko": "카메라를 캘리브레이션하고 커브 피팅으로 바운딩 박스 크기–거리 모델을 구축했습니다."
      },
      {
        "en": "Implemented ROS nodes for depth estimation, image-to-world transform, and 1D/2D/3D Kalman filtering.",
        "ko": "깊이 추정, 이미지→월드 좌표 변환, 1D/2D/3D 칼만 필터링 ROS 노드를 구현했습니다."
      },
      {
        "en": "Visualized trajectories and velocities in RViz and on the camera image, and wrote the proposal and the final report.",
        "ko": "RViz와 카메라 영상 위에 궤적과 속도를 시각화하고, 제안서와 최종 보고서를 작성했습니다."
      }
    ],
    "tech": [
      "ROS (catkin, rospy)",
      "Python",
      "YOLOv5s",
      "PyTorch",
      "OpenCV",
      "cv_bridge",
      "NumPy",
      "RViz",
      "rqt",
      "Ubuntu",
      "MyCurveFit"
    ],
    "topics": [
      "Kalman Filter",
      "Object Tracking",
      "Object Detection",
      "Camera Calibration",
      "Depth Estimation",
      "ROS"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/3D_Object_Tracking_Using_KalmanFilter"
      },
      {
        "type": "youtube",
        "label": {
          "en": "Demo playlist",
          "ko": "데모 재생목록"
        },
        "url": "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoQf_yBnhfe5wNI3USUr5hBU"
      },
      {
        "type": "notion",
        "label": {
          "en": "Notion write-up",
          "ko": "Notion 정리"
        },
        "url": "https://chaeyoonkim.notion.site/2021-term-project-20e85a417def803f994df2aaa4df4fa5"
      }
    ],
    "youtube": [
      "vwdLDFC3c2s",
      "Sn67RHamnDo",
      "BfwLm4y_x1M"
    ],
    "cover": "img/kalman-3d-tracking/cover.jpg",
    "images": [
      {
        "src": "img/kalman-3d-tracking/01-cover-3d-world-tracking.jpg",
        "caption": {
          "en": "Tracking in the 3D world: RViz shows the Kalman-filtered 3D trajectory and pose of the ball, next to camera views with the YOLOv5 detection and the projected velocity arrow.",
          "ko": "3D 월드 추적: RViz에 칼만 필터로 추정한 공의 3D 궤적과 pose가 표시되고, 옆에는 YOLOv5 검출 결과와 투영한 속도 화살표가 그려진 카메라 영상이 있습니다."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/01-cover-3d-world-tracking.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/02-2d-image-tracking-rqtplot.jpg",
        "caption": {
          "en": "Tracking in the 2D image: Kalman filter outputs (/kcy/kf_output) plotted in rqt_plot, beside the detection view with the velocity arrow.",
          "ko": "2D 이미지 추적: rqt_plot으로 그린 칼만 필터 출력(/kcy/kf_output)과 속도 화살표가 표시된 검출 화면."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/02-2d-image-tracking-rqtplot.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/03-yolov5-blueball-detection.jpg",
        "caption": {
          "en": "YOLOv5 detection of the target blue ball (confidence 0.88) on /yolov5/image_output, viewed in rqt_image_view.",
          "ko": "rqt_image_view로 확인한 /yolov5/image_output의 파란 공 YOLOv5 검출 결과(신뢰도 0.88)."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/03-yolov5-blueball-detection.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/04-checkerboard-calibration.jpg",
        "caption": {
          "en": "Checkerboard camera calibration in ROS, used to obtain the focal lengths, principal point and distortion coefficients.",
          "ko": "초점 거리, 주점, 왜곡 계수를 얻기 위한 ROS 체커보드 카메라 캘리브레이션."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/04-checkerboard-calibration.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/05-depth-curve-fit.jpg",
        "caption": {
          "en": "Depth estimation: distance vs. bounding-box size fitted with a 4-parameter logistic curve (R² = 0.9971).",
          "ko": "깊이 추정: 거리와 바운딩 박스 크기의 관계를 4PL 커브로 피팅한 결과(R² = 0.9971)."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/05-depth-curve-fit.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/06-kf-state-matrices.jpg",
        "caption": {
          "en": "Constant-velocity Kalman filter model: 6-D state [x, ẋ, y, ẏ, z, ż], P₀ = 100I, transition matrix A and measurement matrix H.",
          "ko": "등속 모델 칼만 필터: 6차원 상태 [x, ẋ, y, ẏ, z, ż], P₀ = 100I, 상태 전이 행렬 A와 측정 행렬 H."
        },
        "thumb": "img/kalman-3d-tracking/thumbs/06-kf-state-matrices.jpg"
      }
    ]
  },
  {
    "slug": "rock-paper-scissors",
    "year": "2019",
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Embedded ML",
      "ko": "AI · 임베디드 ML"
    },
    "title": {
      "en": "Rock–Paper–Scissors Game using Machine Learning",
      "ko": "머신러닝을 이용한 가위바위보 게임"
    },
    "team": {
      "en": "Individual",
      "ko": "개인"
    },
    "role": {
      "en": "Solo developer — dataset collection, CNN training and game integration on Raspberry Pi",
      "ko": "단독 개발 — 데이터셋 수집, CNN 학습, Raspberry Pi 게임 구성"
    },
    "tagline": {
      "en": "A camera-based rock–paper–scissors game on Raspberry Pi that recognizes the player's hand gesture with machine learning and plays against the computer.",
      "ko": "Raspberry Pi 카메라로 플레이어의 손 모양을 머신러닝으로 인식해 컴퓨터와 대결하는 가위바위보 게임."
    },
    "summary": {
      "en": "A Python rock–paper–scissors game that runs on a Raspberry Pi. A small Keras CNN is trained on a self-collected dataset of rock, paper and scissors hand photos. The game loop, adapted from the open-source rps-cv project, reads the camera, classifies the gesture with a pickled model, draws a random computer move and keeps a running score. Code, dataset and a demo video are published on GitHub and YouTube.",
      "ko": "Raspberry Pi에서 동작하는 Python 가위바위보 게임입니다. 직접 수집한 가위·바위·보 손 사진 데이터셋으로 소형 Keras CNN을 학습했습니다. 오픈소스 rps-cv 프로젝트를 바탕으로 한 게임 루프는 카메라 영상을 읽어 pickle로 저장된 모델로 손 모양을 분류하고, 컴퓨터의 수를 무작위로 정한 뒤 점수를 기록합니다. 코드, 데이터셋, 시연 영상은 GitHub와 YouTube에 공개되어 있습니다."
    },
    "problem": {
      "en": "Build an interactive game in which a computer recognizes a player's rock, paper or scissors hand gesture from a live camera feed on low-cost hardware.",
      "ko": "저가형 하드웨어에서 컴퓨터가 실시간 카메라 영상으로 플레이어의 가위·바위·보 손 모양을 인식하는 인터랙티브 게임을 만드는 것이 목표였습니다."
    },
    "solution": {
      "en": "train.py trains a CNN (two Conv2D layers with 32 and 64 filters, max pooling, a 128-unit dense layer and a 3-way softmax) on 150×150 inputs. main.py, adapted from the open-source rps-cv game script, loads a pickled model and crops and thresholds each camera frame. A frame counts as a hand when it has enough foreground pixels, and a gesture is accepted once the same prediction appears on three consecutive frames. The computer's move is random, the winner is decided from the gesture difference, and the first player to three wins ends the game.",
      "ko": "train.py는 150×150 입력에 대해 CNN(32·64 필터 Conv2D 2층, max pooling, 128-unit dense, 3-class softmax)을 학습합니다. 오픈소스 rps-cv 게임 스크립트를 바탕으로 한 main.py는 pickle로 저장된 모델을 불러와 카메라 프레임마다 crop과 threshold를 적용합니다. 전경 픽셀이 충분하면 손으로 판단하고, 같은 예측이 3프레임 연속 나오면 해당 손 모양을 확정합니다. 컴퓨터의 수는 무작위로 정하고 두 손 모양의 차이로 승패를 판정하며, 어느 한쪽이 먼저 3승하면 게임이 끝납니다."
    },
    "approach": [
      {
        "title": {
          "en": "Dataset collection",
          "ko": "데이터셋 수집"
        },
        "body": {
          "en": "Photographed rock, paper and scissors hand gestures against varied backgrounds in June 2019 and organized them into R/P/S class folders: 199 training images (63 rock, 73 paper, 63 scissors) and 54 test images (18 per class), stored at 24×24 px in the repository.",
          "ko": "2019년 6월 다양한 배경에서 가위·바위·보 손 모양을 촬영해 R/P/S 클래스 폴더로 정리했습니다. 학습 199장(바위 63, 보 73, 가위 63), 테스트 54장(클래스당 18장)이며 저장소에는 24×24 px로 저장되어 있습니다."
        }
      },
      {
        "title": {
          "en": "CNN training with Keras",
          "ko": "Keras CNN 학습"
        },
        "body": {
          "en": "Adapted the CNN example from a Keras tutorial to this dataset: loaded the folders with ImageDataGenerator (rescale 1/255, 150×150, batch size 3), then trained Conv2D(32) → Conv2D(64) → MaxPooling → Dense(128) → Dense(3, softmax) for 50 epochs with Adam and categorical cross-entropy, evaluating on the test generator.",
          "ko": "Keras 튜토리얼의 CNN 예제를 이 데이터셋에 맞게 적용했습니다. ImageDataGenerator(rescale 1/255, 150×150, batch size 3)로 폴더를 불러오고, Conv2D(32) → Conv2D(64) → MaxPooling → Dense(128) → Dense(3, softmax) 구조를 Adam과 categorical cross-entropy로 50 epoch 학습한 뒤 test generator로 평가했습니다."
        }
      },
      {
        "title": {
          "en": "Frame preprocessing & hand detection",
          "ko": "프레임 전처리 및 손 감지"
        },
        "body": {
          "en": "Using the rpscv helper module from rps-cv, each camera frame is cropped, converted to RGB and thresholded to a grayscale mask (threshold 17). Classification runs only when the mask has more than 9,000 non-zero pixels, which skips empty frames.",
          "ko": "rps-cv의 rpscv 헬퍼 모듈로 카메라 프레임을 crop하고 RGB로 변환한 뒤 grayscale mask(threshold 17)로 만듭니다. mask의 non-zero 픽셀이 9,000개를 넘을 때만 분류해 빈 화면을 건너뜁니다."
        }
      },
      {
        "title": {
          "en": "Gesture debouncing & game logic",
          "ko": "제스처 안정화 및 게임 로직"
        },
        "body": {
          "en": "As in the rps-cv game loop, a move is confirmed only after three consecutive identical predictions. The computer then picks a random gesture, the winner is computed from the gesture difference, and the score is printed each round until the player or the computer reaches three wins.",
          "ko": "rps-cv 게임 루프와 마찬가지로 같은 예측이 3번 연속 나와야 플레이어의 수로 확정합니다. 이후 컴퓨터가 무작위로 손 모양을 고르고, 두 손 모양의 차이로 승패를 계산해 매 라운드 점수를 출력합니다. 플레이어나 컴퓨터 중 한쪽이 3승하면 게임이 끝납니다."
        }
      },
      {
        "title": {
          "en": "Running on Raspberry Pi",
          "ko": "Raspberry Pi 구동"
        },
        "body": {
          "en": "Runs on a Raspberry Pi. The game shows an OpenCV window ('ChaeYoon.K_Python_Project') with a frame-rate overlay alongside a terminal round log, and q/Esc quits.",
          "ko": "Raspberry Pi에서 구동됩니다. 프레임 레이트가 표시되는 OpenCV 창('ChaeYoon.K_Python_Project')과 터미널 라운드 로그를 함께 보여주며, q/Esc로 종료합니다."
        }
      }
    ],
    "results": [
      {
        "en": "Working game demonstrated live on a Raspberry Pi in a 41-second demo video (camera view at 6–8 fps, terminal logging moves, winners and scores).",
        "ko": "41초 분량의 시연 영상에서 Raspberry Pi로 실제 동작하는 게임을 시연했습니다(카메라 화면 6–8 fps, 터미널에 수·승패·점수 기록)."
      },
      {
        "en": "Code, the 253-image dataset and demo media published on GitHub.",
        "ko": "코드, 253장 규모의 데이터셋, 시연 미디어를 GitHub에 공개했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Collected and labeled the rock/paper/scissors hand-gesture dataset.",
        "ko": "가위·바위·보 손 모양 데이터셋을 수집하고 라벨링했습니다."
      },
      {
        "en": "Trained a Keras CNN classifier, adapted from a tutorial example, on the collected dataset.",
        "ko": "튜토리얼 예제를 바탕으로 한 Keras CNN 분류 모델을 수집한 데이터셋으로 학습했습니다."
      },
      {
        "en": "Adapted the open-source rps-cv camera pipeline and game loop and ran the game on Raspberry Pi.",
        "ko": "오픈소스 rps-cv의 카메라 파이프라인과 게임 루프를 수정해 Raspberry Pi에서 게임을 구동했습니다."
      }
    ],
    "tech": [
      "Python",
      "Raspberry Pi",
      "TensorFlow / Keras",
      "OpenCV",
      "NumPy"
    ],
    "topics": [
      "Image Classification",
      "CNN",
      "Gesture Recognition",
      "Raspberry Pi",
      "Computer Vision"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/Rock-Paper-Scissors-with-Machine-Learning"
      },
      {
        "type": "youtube",
        "label": {
          "en": "Demo video",
          "ko": "데모 영상"
        },
        "url": "https://www.youtube.com/watch?v=73ZbODJ07LI"
      },
      {
        "type": "github",
        "label": {
          "en": "rps-cv (reference project)",
          "ko": "rps-cv (참고 오픈소스 프로젝트)"
        },
        "url": "https://github.com/DrGFreeman/rps-cv"
      }
    ],
    "youtube": [
      "73ZbODJ07LI"
    ],
    "cover": "img/rock-paper-scissors/cover.jpg",
    "images": [
      {
        "src": "img/rock-paper-scissors/01-yt-73zbodj07li-maxres.jpg",
        "caption": {
          "en": "Live demo on Raspberry Pi: the camera window shows a rock gesture while the terminal logs each round's moves, winner and running score.",
          "ko": "Raspberry Pi 실시간 시연: 카메라 창에 바위 손 모양이 보이고, 터미널에는 라운드별 수·승패·누적 점수가 기록됩니다."
        },
        "thumb": "img/rock-paper-scissors/thumbs/01-yt-73zbodj07li-maxres.jpg"
      },
      {
        "src": "img/rock-paper-scissors/02-demo-frame.jpg",
        "caption": {
          "en": "Paper gesture in the 6 fps camera window; the terminal shows rounds such as 'Player: paper / Computer: rock / Player wins!'.",
          "ko": "6 fps 카메라 창에 보 손 모양이 잡혀 있고, 터미널에는 'Player: paper / Computer: rock / Player wins!' 같은 라운드 결과가 표시됩니다."
        },
        "thumb": "img/rock-paper-scissors/thumbs/02-demo-frame.jpg"
      },
      {
        "src": "img/rock-paper-scissors/03-dataset-samples.jpg",
        "caption": {
          "en": "Samples from the self-collected training set (rows: rock, paper, scissors), upscaled from the stored 24×24 px images; 199 training and 54 test images in total.",
          "ko": "직접 수집한 학습 데이터 예시(행: 바위, 보, 가위). 24×24 px로 저장된 이미지를 확대한 것이며, 전체 학습 199장·테스트 54장입니다."
        },
        "thumb": "img/rock-paper-scissors/thumbs/03-dataset-samples.jpg"
      }
    ]
  },
  {
    "slug": "robotic-arm-pid",
    "year": "2018",
    "period": {
      "en": "Sep 2018 – Dec 2018",
      "ko": "2018.09 – 2018.12"
    },
    "category": "robotics",
    "categoryLabel": {
      "en": "Robotics · Control",
      "ko": "로보틱스 · 제어"
    },
    "title": {
      "en": "Robotic Arm Control via PID",
      "ko": "PID 제어기를 이용한 로봇 팔 원격 제어 시스템"
    },
    "team": {
      "en": "Individual (capstone design, Baekseok University)",
      "ko": "개인 프로젝트 (백석대학교 캡스톤디자인)"
    },
    "role": {
      "en": "Circuit design, 3D modeling, Arduino coding",
      "ko": "회로 설계, 3D 모델링, Arduino 코딩"
    },
    "tagline": {
      "en": "A 3D-printed master–slave robotic arm that mirrors an operator's motion and records and replays motion sequences on an ATmega328P controller.",
      "ko": "ATmega328P 제어기로 조작자의 동작을 따라 하고 동작 시퀀스를 녹화·재생하는 3D 프린팅 마스터–슬레이브 로봇 팔."
    },
    "summary": {
      "en": "Individual capstone design project at Baekseok University (2018): a remote-control system for a multi-joint robotic arm. A potentiometer-based master arm drives a 5-axis, 3D-printed slave arm, and a Record/Play mode stores and replays motion sequences. The work spans control-system modeling, circuit design, 3D modeling and printing, controller fabrication, Arduino firmware and oscilloscope verification.",
      "ko": "백석대학교 캡스톤디자인(2018) 개인 프로젝트로, 다관절 로봇 팔의 원격 제어 시스템을 설계했습니다. 포텐쇼미터 기반 마스터 암으로 3D 프린팅한 5축 슬레이브 암을 조작하며, 녹화/재생 모드로 동작 시퀀스를 저장하고 다시 실행합니다. 제어 시스템 모델링, 회로 설계, 3D 모델링·출력, 제어기 제작, Arduino 펌웨어, 오실로스코프 검증까지 전 과정을 수행했습니다."
    },
    "problem": {
      "en": "Robot arms combine dynamics, motor and sensor control, and electro-mechanical design. The goal was an arm that does more than PID position control: one that can be teleoperated by a master arm and can record and replay motion sequences, running on a portable, battery-powered controller.",
      "ko": "로봇 팔 개발에는 동역학, 모터·센서 제어, 전기전자·기계 설계가 복합적으로 요구됩니다. PID로 위치만 제어하는 데 그치지 않고, 마스터 암으로 원격 조작하며 동작 시퀀스를 저장·재생할 수 있는 로봇 팔을 휴대 가능한 배터리 구동 제어기로 구현하는 것이 목표였습니다."
    },
    "solution": {
      "en": "A master–slave system built around an ATmega328P: five potentiometers on the master arm are sampled by the ADC and mapped to five servos (base, hip, shoulder, neck, gripper) on the slave arm under PID-based control. A toggle switch enables Record mode and a push button triggers Play mode, both wired with 10 kΩ pull-down resistors, and the controller runs from a Li-Po battery with a rocker power switch.",
      "ko": "ATmega328P를 중심으로 한 마스터–슬레이브 시스템입니다. 마스터 암의 포텐쇼미터 5개를 ADC로 읽어 슬레이브 암의 서보모터 5개(Base, Hip, Shoulder, Neck, Gripper)에 매핑하고 PID 기반으로 제어합니다. 토글 스위치로 녹화 모드를, 푸시 버튼으로 재생 모드를 실행하며, 두 입력 모두 10kΩ 풀다운 저항으로 구성했습니다. 제어기는 Li-Po 배터리로 구동되며 로커 전원 스위치를 갖췄습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Control-system modeling",
          "ko": "제어 시스템 모델링"
        },
        "body": {
          "en": "Modeled a loop in which the MCU converts potentiometer inputs via ADC and sets servo angles through PID control, with separate inputs for Record and Play modes.",
          "ko": "MCU가 포텐쇼미터 입력을 ADC로 변환하고 PID 제어로 서보모터 각도를 설정하는 제어 루프를 모델링했으며, 녹화·재생 모드용 입력을 별도로 두었습니다."
        }
      },
      {
        "title": {
          "en": "Circuit design",
          "ko": "회로 설계"
        },
        "body": {
          "en": "Designed the full schematic around an ATmega328P-PU: five potentiometers, five servos, Record/Play switches with 10 kΩ pull-downs to prevent floating inputs, and a Li-Po supply with a rocker switch.",
          "ko": "ATmega328P-PU를 중심으로 포텐쇼미터 5개, 서보모터 5개, 입력 플로팅을 막는 10kΩ 풀다운 저항을 단 녹화/재생 스위치, 로커 스위치가 달린 Li-Po 전원부까지 전체 회로도를 설계했습니다."
        }
      },
      {
        "title": {
          "en": "3D modeling & printing",
          "ko": "3D 모델링 및 출력"
        },
        "body": {
          "en": "Modeled the potentiometer master arm and adapted the 5-axis slave arm (about 15 parts) from an open-source 3D-printable design in roughly two weeks; printing took two days for the master arm and four days for the slave arm.",
          "ko": "포텐쇼미터 마스터 암을 모델링하고, 오픈소스 3D 프린팅 설계를 바탕으로 약 15개 부품으로 된 5축 슬레이브 암을 수정하는 데 약 2주가 걸렸습니다. 출력에는 마스터 암 2일, 슬레이브 암 4일이 소요되었습니다."
        }
      },
      {
        "title": {
          "en": "Controller build & assembly",
          "ko": "제어기 제작 및 조립"
        },
        "body": {
          "en": "Built a two-tier controller board with the battery on the lower tier and Molex connectors for servos and potentiometers; fixed the arm's forward tipping with a wooden base and replaced epoxy-glued potentiometer joints, which blocked conduction, with soldered connections.",
          "ko": "아래층에 배터리를 넣은 2층 구조의 제어 기판을 제작하고, 서보모터·포텐쇼미터는 몰렉스 커넥터로 연결했습니다. 로봇 팔이 앞으로 쏠리는 문제는 나무 받침으로 고정해 해결했고, 에폭시로 접착해 전기가 통하지 않던 포텐쇼미터 연결부는 납땜으로 다시 결선했습니다."
        }
      },
      {
        "title": {
          "en": "Firmware",
          "ko": "펌웨어"
        },
        "body": {
          "en": "Adapted an open-source record-and-play Arduino sketch, replacing its serial commands with hardware Record/Play switches: Remote mode maps master potentiometer readings to slave servo angles, Record mode stores changed servo angles in a 700-entry array, and Play mode replays the stored sequence.",
          "ko": "오픈소스 녹화·재생 Arduino 예제 코드를 바탕으로, 시리얼 명령 대신 하드웨어 녹화/재생 스위치로 동작하도록 수정했습니다. 원격 모드는 마스터 포텐쇼미터 값을 슬레이브 서보 각도로 매핑하고, 녹화 모드는 바뀐 서보 각도를 크기 700의 배열에 저장하며, 재생 모드는 저장된 시퀀스를 순서대로 재생합니다."
        }
      },
      {
        "title": {
          "en": "Oscilloscope verification",
          "ko": "오실로스코프 검증"
        },
        "body": {
          "en": "Compared servo PWM waveforms with and without PID control on an oscilloscope, and evaluated arm behavior on the 3.7 V Li-Po supply versus 5 V.",
          "ko": "오실로스코프로 PID 적용 전후의 서보 PWM 파형을 비교하고, 3.7V Li-Po 전원과 5V 전원에서 로봇 팔의 동작을 비교 평가했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Working master–slave arm demonstrated in Remote, Record and Play modes (three demo videos).",
        "ko": "원격·녹화·재생 모드로 동작하는 마스터–슬레이브 로봇 팔을 시연했습니다(데모 영상 3편)."
      },
      {
        "en": "Oscilloscope check: the servo waveform driven by plain PWM was heavily noisy, while the PID-controlled waveform was clean; visible overshoot and a fairly long settling time showed room for further tuning.",
        "ko": "오실로스코프 검증 결과, PWM만으로 구동한 서보 파형은 노이즈가 심했던 반면 PID 제어 파형은 깨끗했습니다. 다만 오버슈트가 보이고 정착 시간이 다소 길어 추가 튜닝의 여지를 확인했습니다."
      },
      {
        "en": "Identified the 3.7 V Li-Po output as a torque bottleneck: at 5 V the arm no longer tipped forward, and under PID control it returned from unstable states to a stable one.",
        "ko": "3.7V Li-Po 출력이 토크 부족의 원인임을 확인했습니다. 5V를 인가하자 앞으로 쏠리는 현상이 사라졌고, PID 제어로 불안정한 상태에서도 안정 상태로 복귀했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Modeled the control system and designed the complete circuit, including pull-down mode switches and the Li-Po power stage.",
        "ko": "제어 시스템을 모델링하고, 풀다운 모드 스위치와 Li-Po 전원부를 포함한 전체 회로를 설계했습니다."
      },
      {
        "en": "3D-modeled the master arm, adapted an open-source slave-arm design and 3D-printed all parts.",
        "ko": "마스터 암을 3D 모델링하고, 오픈소스 설계를 바탕으로 슬레이브 암을 수정했으며, 전 부품을 3D 프린팅했습니다."
      },
      {
        "en": "Fabricated the controller board and assembled the arms, resolving tipping and connector issues.",
        "ko": "제어 기판을 제작하고 로봇 팔을 조립하면서 쏠림·결선 문제를 해결했습니다."
      },
      {
        "en": "Adapted the Arduino firmware for Remote, Record and Play modes with hardware mode switches.",
        "ko": "하드웨어 모드 스위치로 원격·녹화·재생 모드가 동작하도록 Arduino 펌웨어를 수정했습니다."
      },
      {
        "en": "Verified servo PWM with an oscilloscope and wrote the capstone final report.",
        "ko": "오실로스코프로 서보 PWM을 검증하고 캡스톤디자인 최종 보고서를 작성했습니다."
      }
    ],
    "tech": [
      "ATmega328P",
      "Arduino (C/C++)",
      "Arduino Servo library",
      "OrCAD",
      "Tinkercad (3D modeling)",
      "3D printing",
      "Servo motors",
      "Potentiometers",
      "Li-Po battery",
      "Oscilloscope"
    ],
    "topics": [
      "PID control",
      "Master–slave teleoperation",
      "Motion record & playback",
      "Servo PWM",
      "3D printing",
      "Embedded firmware"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/Robotic-Arm-Control-Project"
      },
      {
        "type": "youtube",
        "label": {
          "en": "Demo playlist",
          "ko": "데모 재생목록"
        },
        "url": "https://www.youtube.com/playlist?list=PLCDDCuZ1ldoTo5SUXW3ahmiZQ32I7p6Mp"
      },
      {
        "type": "doc",
        "label": {
          "en": "Capstone report (PDF, Korean)",
          "ko": "캡스톤 보고서 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd7746437-ff60-43b1-ae71-2cf413c32eab%2FPID_%EC%A0%9C%EC%96%B4%EA%B8%B0%EB%A5%BC_%EC%9D%B4%EC%9A%A9%ED%95%9C_%EB%A1%9C%EB%B4%87_%ED%8C%94_%EC%9B%90%EA%B2%A9_%EC%A0%9C%EC%96%B4_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%84%A4%EA%B3%84.pdf?table=block&id=1fb85a41-7def-814b-a863-dd84dd107f14&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: CircuitDigest record & play robotic arm tutorial",
          "ko": "참고: CircuitDigest 녹화·재생 로봇 팔 튜토리얼"
        },
        "url": "https://circuitdigest.com/microcontroller-projects/record-and-play-3d-printed-robotic-arm-using-arduino"
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: Robotic Arm V2.0 by Ashing (Thingiverse)",
          "ko": "참고: Robotic Arm V2.0 by Ashing (Thingiverse)"
        },
        "url": "https://www.thingiverse.com/thing:1215831"
      }
    ],
    "youtube": [
      "-W-gj6TkzW4",
      "a9sSb8NWltA",
      "P6XdI0nHfFc"
    ],
    "cover": "img/robotic-arm-pid/cover.jpg",
    "images": [
      {
        "src": "img/robotic-arm-pid/01-remote-mode-demo.jpg",
        "caption": {
          "en": "Remote mode: the 3D-printed slave arm follows the hand-operated master arm, driven by the custom controller board.",
          "ko": "원격 모드: 손으로 조작하는 마스터 암을 3D 프린팅 슬레이브 암이 따라 움직이며, 자체 제작한 제어 기판이 이를 구동합니다."
        },
        "thumb": "img/robotic-arm-pid/thumbs/01-remote-mode-demo.jpg"
      },
      {
        "src": "img/robotic-arm-pid/02-master-slave-arms.jpg",
        "caption": {
          "en": "The 5-axis slave arm with gripper (left) and the potentiometer-based master arm (right) on a wooden base.",
          "ko": "나무 받침 위의 그리퍼 달린 5축 슬레이브 암(왼쪽)과 포텐쇼미터 기반 마스터 암(오른쪽)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/02-master-slave-arms.jpg"
      },
      {
        "src": "img/robotic-arm-pid/03-master-arm-3d-model.jpg",
        "caption": {
          "en": "3D model of the master arm (Fig. 13 of the capstone report).",
          "ko": "마스터 암 3D 모델 (캡스톤 보고서 그림 13)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/03-master-arm-3d-model.jpg"
      },
      {
        "src": "img/robotic-arm-pid/04-circuit-schematic.jpg",
        "caption": {
          "en": "Full schematic: ATmega328P-PU, five potentiometers, five servos, battery switch and Record/Play switches with 10 kΩ pull-downs.",
          "ko": "전체 회로도: ATmega328P-PU, 포텐쇼미터 5개, 서보모터 5개, 전원 스위치, 10kΩ 풀다운 저항을 단 녹화/재생 스위치."
        },
        "thumb": "img/robotic-arm-pid/thumbs/04-circuit-schematic.jpg"
      },
      {
        "src": "img/robotic-arm-pid/05-controller-pcb-annotated.jpg",
        "caption": {
          "en": "Two-tier controller board: ATmega328P, record/play switches, power switch, servo and potentiometer headers, with the Li-Po battery on the lower tier.",
          "ko": "2층 구조 제어 기판: ATmega328P, 녹화/재생 스위치, 전원 스위치, 서보·포텐쇼미터 커넥터와 아래층의 Li-Po 배터리."
        },
        "thumb": "img/robotic-arm-pid/thumbs/05-controller-pcb-annotated.jpg"
      },
      {
        "src": "img/robotic-arm-pid/06-pwm-without-vs-with-pid.jpg",
        "caption": {
          "en": "Oscilloscope captures: servo PWM without PID (left, Agilent scope, noisy) vs. with PID control (right, DSO138 handheld scope, clean pulse).",
          "ko": "오실로스코프 측정: PID 미적용 서보 PWM(왼쪽, Agilent 오실로스코프, 노이즈 심함)과 PID 적용 파형(오른쪽, DSO138 휴대용 오실로스코프, 깨끗한 펄스)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/06-pwm-without-vs-with-pid.jpg"
      }
    ]
  },
  {
    "slug": "groundwater-monitoring",
    "year": "2018",
    "period": {
      "en": "Jun 2018 – Aug 2018",
      "ko": "2018.06 – 2018.08"
    },
    "category": "embedded",
    "categoryLabel": {
      "en": "Embedded · Instrumentation",
      "ko": "임베디드 · 계측"
    },
    "title": {
      "en": "Groundwater Level Monitoring Device",
      "ko": "지하수 수위 모니터링을 위한 계측 장비 개발"
    },
    "team": {
      "en": "Individual (UST research internship at KIGAM)",
      "ko": "개인 프로젝트 (UST 연구인턴십, 한국지질자원연구원)"
    },
    "role": {
      "en": "Circuit design, 3D modeling",
      "ko": "회로 설계, 3D 모델링"
    },
    "tagline": {
      "en": "A portable Arduino-based instrument that measures water level through 4–20 mA pressure sensors, showing readings on an OLED and logging them to an SD card.",
      "ko": "4–20mA 압력식 센서로 수위를 측정해 OLED에 표시하고 SD 카드에 기록하는 휴대용 Arduino 기반 계측 장비."
    },
    "summary": {
      "en": "Developed during a UST research internship at the Korea Institute of Geoscience and Mineral Resources (KIGAM) in 2018. The device converts water pressure into a 4–20 mA current-loop signal, digitizes it on an Arduino Uno, displays live readings on an OLED and logs them to a micro-SD card. A Pascal's-principle test rig was built to validate the relationship between measured voltage and water level.",
      "ko": "2018년 한국지질자원연구원(KIGAM)에서 진행한 UST 연구인턴십 과제입니다. 이 장비는 수압을 4–20mA 전류 루프 신호로 변환한 뒤 Arduino Uno에서 디지털화하고, 측정값을 OLED에 실시간으로 표시하며 micro-SD 카드에 기록합니다. 파스칼의 원리를 이용한 실험 장치를 제작해 측정 전압과 수위의 관계를 검증했습니다."
    },
    "problem": {
      "en": "Korea relies heavily on groundwater, especially volcanic islands such as Jeju that lack water-management facilities like dams, yet groundwater levels fluctuate with earthquakes, atmospheric pressure and tidal forces, which makes precise monitoring difficult. The aim was an easy-to-carry instrument for checking these fluctuating levels.",
      "ko": "우리나라는 지하수 의존도가 높으며, 특히 댐 등 물 관리 시설이 부족한 제주도 같은 화산섬은 의존도가 더 높습니다. 그러나 지하수위는 지진, 대기압, 기조력에 따라 변동하므로 정밀하게 모니터링하기 어렵습니다. 이렇게 변동하는 지하수위를 손쉽게 확인할 수 있는 휴대용 측정 장비를 만드는 것이 목표였습니다."
    },
    "solution": {
      "en": "Pressure-type level sensors (up to 2 bar, about 20 m of water) output a 4–20 mA current that is converted to voltage across a 250 Ω resistor and read on four Arduino Uno ADC channels. Readings appear on an SSD1306 OLED over I2C and are logged to a stacked micro-SD shield, in a 3D-modeled two-tier assembly with power/reset switches, Molex sensor connectors and a 12 V sensor-supply clip.",
      "ko": "최대 2bar(수심 약 20m)까지 측정할 수 있는 압력식 수위 센서의 4–20mA 전류 출력을 250Ω 저항을 거쳐 전압으로 변환하고, Arduino Uno의 ADC 4채널로 읽습니다. 측정값은 I2C로 연결한 SSD1306 OLED에 표시하고 적층한 micro-SD 쉴드에 기록합니다. 장비는 전원·리셋 스위치, 몰렉스 센서 커넥터, 12V 센서 전원용 클립을 갖춘 2층 구조로 3D 모델링해 제작했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Pressure-based level sensing",
          "ko": "압력 기반 수위 측정"
        },
        "body": {
          "en": "Measured water level indirectly from water pressure using Pascal's principle; the sensor's maximum range is 2 bar, equivalent to about 20 m of water.",
          "ko": "파스칼의 원리를 이용해 수압으로 수위를 간접 측정했습니다. 센서의 최대 측정 범위는 2bar로, 수심 약 20m의 압력에 해당합니다."
        }
      },
      {
        "title": {
          "en": "4–20 mA current loop",
          "ko": "4–20mA 전류 루프"
        },
        "body": {
          "en": "Chose a current-loop output over voltage because it avoids voltage drop over long cables, is less sensitive to noise, and shows a broken wire as 0 mA instead of 4 mA; each loop uses a 12 V sensor supply and a 250 Ω sense resistor.",
          "ko": "전압 신호 대신 전류 루프 출력을 택했습니다. 긴 케이블에서도 전압 강하가 생기지 않고 노이즈에 강하며, 단선되면 4mA가 아닌 0mA로 나타나기 때문입니다. 각 루프는 12V 센서 전원과 250Ω 감지 저항으로 구성했습니다."
        }
      },
      {
        "title": {
          "en": "System & circuit design",
          "ko": "시스템 및 회로 설계"
        },
        "body": {
          "en": "Designed an Arduino Uno system with four sensor channels on A0–A3, an OLED on the I2C pins (A4/A5), a stacked micro-SD shield and a switch-controlled power stage.",
          "ko": "Arduino Uno를 중심으로 센서 4채널(A0–A3), I2C 핀(A4/A5)에 연결한 OLED, 적층형 micro-SD 쉴드, 스위치로 제어하는 전원부를 갖춘 시스템을 설계했습니다."
        }
      },
      {
        "title": {
          "en": "3D modeling & build",
          "ko": "3D 모델링 및 제작"
        },
        "body": {
          "en": "Modeled and built the instrument with the OLED at the upper left for readout without a computer, Molex connectors for the sensors, power/reset switches and a clip for the 12 V sensor supply.",
          "ko": "컴퓨터 없이도 측정값을 확인할 수 있도록 왼쪽 상단에 OLED를 배치하고, 센서용 몰렉스 커넥터, 전원·리셋 스위치, 12V 센서 전원 클립을 갖춘 장비를 모델링해 제작했습니다."
        }
      },
      {
        "title": {
          "en": "Firmware",
          "ko": "펌웨어"
        },
        "body": {
          "en": "Main loop reads each ADC channel, converts it to voltage, prints the four values to the OLED and appends them to a log file on the SD card.",
          "ko": "메인 루프에서 각 ADC 채널을 읽어 전압으로 변환하고, 4개 값을 OLED에 출력한 뒤 SD 카드의 로그 파일에 이어서 기록합니다."
        }
      },
      {
        "title": {
          "en": "Water-level experiment",
          "ko": "수위 측정 실험"
        },
        "body": {
          "en": "Built a hose-based test rig with the sensor at one end and moved the sensor to emulate water levels from 62 cm down to 5 cm, comparing measured voltage with the pressure–level relationship.",
          "ko": "호스 한쪽 끝에 센서를 단 실험 장치를 제작하고, 센서 위치를 옮겨 가며 62cm에서 5cm까지의 수위를 모사해 측정 전압을 압력–수위 관계와 비교했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "OLED display and micro-SD data logging verified during the water-level experiment.",
        "ko": "수위 측정 실험에서 OLED 표시와 micro-SD 데이터 기록 동작을 확인했습니다."
      },
      {
        "en": "Over a 62 → 5 cm water-level sweep, the measured voltage varied in proportion to the pressure–water-level relationship.",
        "ko": "62cm → 5cm 수위 변화 구간에서 측정 전압이 압력–수위 관계에 비례해 변하는 것을 확인했습니다."
      },
      {
        "en": "With only a ~62–67 cm water column (about 0.5 V of change), readings were scaled at 8-bit resolution to amplify the change, which reduced accuracy; higher ADC resolution and an improved test setup were identified as next steps.",
        "ko": "수주가 약 62–67cm(전압 변화 약 0.5V)에 불과해 변화량을 키우려고 측정값을 8bit 분해능으로 환산했고, 그 결과 정확도가 떨어졌습니다. ADC 분해능 향상과 실험 환경 개선을 후속 과제로 도출했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Designed the control system and circuits: 4–20 mA sensor loops, OLED/SD interface and power stage.",
        "ko": "4–20mA 센서 루프, OLED/SD 인터페이스, 전원부를 포함한 제어 시스템과 회로를 설계했습니다."
      },
      {
        "en": "3D-modeled and built the measuring instrument.",
        "ko": "측정 장비를 3D 모델링하고 제작했습니다."
      },
      {
        "en": "Wrote the Arduino firmware for ADC sampling, OLED display and SD logging.",
        "ko": "ADC 샘플링, OLED 출력, SD 로깅을 위한 Arduino 펌웨어를 작성했습니다."
      },
      {
        "en": "Built the test rig, ran the water-level experiment and wrote the internship report.",
        "ko": "실험 장치를 제작해 수위 측정 실험을 수행하고 인턴십 보고서를 작성했습니다."
      }
    ],
    "tech": [
      "Arduino Uno",
      "C/C++ (Arduino)",
      "OrCAD",
      "4–20 mA current loop",
      "Pressure-type water-level sensor",
      "SSD1306 OLED (U8glib)",
      "micro-SD shield (SD library)",
      "I2C",
      "3D modeling"
    ],
    "topics": [
      "Groundwater monitoring",
      "Current-loop sensing",
      "ADC",
      "Data logging",
      "Instrumentation"
    ],
    "links": [
      {
        "type": "doc",
        "label": {
          "en": "Internship report (PDF, Korean)",
          "ko": "인턴십 보고서 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa85dfe81-d55f-4eba-96c3-07d40892c6f0%2F%EC%A7%80%ED%95%98%EC%88%98_%EC%88%98%EC%9C%84_%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81%EC%9D%84_%EC%9C%84%ED%95%9C_%EA%B3%84%EC%B8%A1%EC%9E%A5%EB%B9%84_%EA%B0%9C%EB%B0%9C.pdf?table=block&id=1fb85a41-7def-810c-bb0e-f2b30ba6398c&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      }
    ],
    "cover": "img/groundwater-monitoring/cover.jpg",
    "images": [
      {
        "src": "img/groundwater-monitoring/01-oled-live-readings.jpg",
        "caption": {
          "en": "Finished instrument: the OLED shows live voltage readings from four sensor channels.",
          "ko": "완성된 계측 장비: OLED에 센서 4채널의 전압 측정값이 실시간으로 표시됩니다."
        },
        "thumb": "img/groundwater-monitoring/thumbs/01-oled-live-readings.jpg"
      },
      {
        "src": "img/groundwater-monitoring/02-system-block-diagram.jpg",
        "caption": {
          "en": "Control system block diagram: water level → four sensor circuits → Arduino Uno → OLED LCD and SD card module.",
          "ko": "제어 시스템 블록도: 수위 → 센서 회로 4채널 → Arduino Uno → OLED LCD 및 SD 카드 모듈."
        },
        "thumb": "img/groundwater-monitoring/thumbs/02-system-block-diagram.jpg"
      },
      {
        "src": "img/groundwater-monitoring/03-current-loop-sensor-circuit.jpg",
        "caption": {
          "en": "Sensor circuits: each 4–20 mA sensor runs on 12 V and is read across a 250 Ω resistor on A0–A3.",
          "ko": "센서 회로: 4–20mA 센서마다 12V 전원을 인가하고 250Ω 저항 양단 전압을 A0–A3로 읽습니다."
        },
        "thumb": "img/groundwater-monitoring/thumbs/03-current-loop-sensor-circuit.jpg"
      },
      {
        "src": "img/groundwater-monitoring/04-enclosure-3d-model.jpg",
        "caption": {
          "en": "3D model of the instrument (left and right side views).",
          "ko": "계측 장비 3D 모델 (좌·우측면도)."
        },
        "thumb": "img/groundwater-monitoring/thumbs/04-enclosure-3d-model.jpg"
      },
      {
        "src": "img/groundwater-monitoring/05-pressure-test-rig.jpg",
        "caption": {
          "en": "Water-level test rig based on Pascal's principle, with the sensor at the end of a water-filled hose.",
          "ko": "파스칼의 원리를 이용한 수위 측정 실험 장치: 물을 채운 호스 끝에 센서를 연결했습니다."
        },
        "thumb": "img/groundwater-monitoring/thumbs/05-pressure-test-rig.jpg"
      },
      {
        "src": "img/groundwater-monitoring/06-voltage-pressure-vs-level.jpg",
        "caption": {
          "en": "Measured voltage vs. water level (blue) compared with the pressure–water-level line (orange), 62 → 5 cm.",
          "ko": "수위별 측정 전압(파란색)과 압력–수위 관계(주황색) 비교, 62cm → 5cm."
        },
        "thumb": "img/groundwater-monitoring/thumbs/06-voltage-pressure-vs-level.jpg"
      }
    ]
  },
  {
    "slug": "fpga-elevator",
    "year": "2018",
    "period": {
      "en": "Jun 2018",
      "ko": "2018.06"
    },
    "category": "embedded",
    "categoryLabel": {
      "en": "Embedded · FPGA",
      "ko": "임베디드 · FPGA"
    },
    "title": {
      "en": "Elevator System using FPGA & ATmega328P",
      "ko": "FPGA와 ATmega328P를 이용한 엘리베이터 설계 및 구현"
    },
    "team": {
      "en": "Team of 2 · Team Lead",
      "ko": "2인 팀 · 팀장"
    },
    "role": {
      "en": "Idea proposal, circuit & system design, ATmega328P coding",
      "ko": "아이디어 제안, 회로 및 시스템 설계, ATmega328P 코딩"
    },
    "tagline": {
      "en": "A 3D-printed three-floor elevator model in which an ATmega328P drives the stepper-motor car and a Xilinx Spartan-3 FPGA generates PWM for the servo door.",
      "ko": "ATmega328P가 스테핑 모터로 카를 움직이고 Xilinx Spartan-3 FPGA가 PWM으로 서보 도어를 제어하는 3D 프린팅 3층 엘리베이터 모형."
    },
    "summary": {
      "en": "Two-person digital system design project (2018) built to understand PWM control and MCU design hands-on. An ATmega328P moves the car between three floors with a stepper motor, while a Xilinx XC3S200 FPGA drives the servo that opens and closes the door. The elevator body was 3D-modeled and printed, the ATmega328P controller was built on perfboard with a Li-Po supply, and the work was written up as a short paper.",
      "ko": "PWM 제어와 MCU 설계를 직접 익히기 위해 2인 팀으로 진행한 디지털시스템설계 프로젝트(2018)입니다. ATmega328P가 스테핑 모터로 카를 3개 층 사이에서 이동시키고, Xilinx XC3S200 FPGA가 문을 여닫는 서보모터를 구동합니다. 엘리베이터 본체는 3D 모델링 후 출력했고, ATmega328P 제어기는 Li-Po 전원을 갖춘 만능기판으로 제작했습니다. 결과는 짧은 논문으로 정리했습니다."
    },
    "problem": {
      "en": "Learn PWM control hands-on by driving a servo from an FPGA, and deepen MCU understanding by designing a complete elevator rather than controlling a motor in isolation.",
      "ko": "FPGA로 서보모터를 구동하며 PWM 제어를 직접 익히고, 모터 하나만 따로 제어하는 데 그치지 않고 엘리베이터 전체를 설계하며 MCU에 대한 이해를 넓히는 것이 목표였습니다."
    },
    "solution": {
      "en": "Control is split across two devices. The ATmega328P handles car motion with a stepper motor through a ULN2003A driver and three pull-down floor buttons, tracking the current floor and rotating CW/CCW to the requested one. The FPGA generates a 20 ms-period PWM for the door servo (90° at rest, 180° to open). A cylindrical lock in front of the door removes the need for gears to turn the servo's rotation into linear motion.",
      "ko": "제어를 두 장치로 나눴습니다. ATmega328P는 ULN2003A 드라이버와 풀다운으로 구성한 1·2·3층 버튼으로 스테핑 모터를 제어하며, 현재 층을 추적해 CW/CCW 회전으로 요청된 층까지 카를 이동시킵니다. FPGA는 주기 20ms의 PWM을 생성해 도어 서보모터를 구동합니다(평상시 90°, 열림 180°). 문 앞에 원기둥형 잠금장치를 두어 서보의 회전 운동을 직선 운동으로 바꾸는 기어가 필요 없도록 했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Hardware partitioning",
          "ko": "하드웨어 역할 분담"
        },
        "body": {
          "en": "Assigned a stepper motor to vertical car motion (ATmega328P) and a servo motor to the door (FPGA).",
          "ko": "카의 상하 운동은 스테핑 모터(ATmega328P)가, 문 개폐는 서보모터(FPGA)가 담당하도록 나눴습니다."
        }
      },
      {
        "title": {
          "en": "Circuit design",
          "ko": "회로 설계"
        },
        "body": {
          "en": "Designed the ATmega328P stepper circuit with a ULN2003A driver and pull-down floor buttons, and the FPGA servo circuit with pull-down door switches; built the ATmega328P controller on perfboard with a toggle power switch and Li-Po battery.",
          "ko": "ULN2003A 드라이버와 풀다운 층 버튼을 갖춘 ATmega328P 스테핑 모터 회로와, 풀다운 도어 스위치를 갖춘 FPGA 서보 회로를 설계했습니다. ATmega328P 제어기는 토글 전원 스위치와 Li-Po 배터리를 연결해 만능기판으로 제작했습니다."
        }
      },
      {
        "title": {
          "en": "3D modeling & printing",
          "ko": "3D 모델링 및 출력"
        },
        "body": {
          "en": "3D-modeled the shaft, cart, front panel, door and a cylindrical servo lock for 3D printing, with revised versions of the cart and door.",
          "ko": "3D 프린팅을 위해 승강로, 카, 전면부, 도어, 원기둥형 서보 잠금장치를 모델링했으며, 카와 도어는 수정 버전도 만들었습니다."
        }
      },
      {
        "title": {
          "en": "ATmega328P firmware",
          "ko": "ATmega328P 펌웨어"
        },
        "body": {
          "en": "On a floor-button press, the firmware checks the current floor, steps the motor CW or CCW (2048 steps per floor) to the target, then stores the new floor.",
          "ko": "층 버튼이 눌리면 현재 층을 확인하고, 모터를 층당 2048 스텝씩 CW 또는 CCW로 회전시켜 목표 층으로 이동한 뒤 새 층 정보를 저장합니다."
        }
      },
      {
        "title": {
          "en": "FPGA PWM logic",
          "ko": "FPGA PWM 로직"
        },
        "body": {
          "en": "Implemented servo PWM on a Xilinx Spartan-3 XC3S200 in a Xilinx ISE project: 20 ms period, 90° initial position and a 90° swing to 180° when the open button is pressed.",
          "ko": "Xilinx ISE 프로젝트로 Spartan-3 XC3S200에 서보 PWM을 구현했습니다. 주기는 20ms, 초기 각도는 90°이며, 열림 버튼을 누르면 90°만큼 회전해 180°가 됩니다."
        }
      },
      {
        "title": {
          "en": "Integration & test",
          "ko": "통합 및 테스트"
        },
        "body": {
          "en": "Connected the elevator to both controllers and verified operation; corrected the cart's sideways and forward lean by adding weights to rebalance its center of gravity.",
          "ko": "엘리베이터에 두 제어기를 연결해 동작을 확인했습니다. 카가 옆과 앞으로 기우는 문제는 무게 추를 달아 무게 중심을 맞춰 바로잡았습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Verified that the integrated elevator operated without errors.",
        "ko": "통합한 엘리베이터가 오류 없이 동작함을 확인했습니다."
      },
      {
        "en": "The cart leaned sideways and forward because the center of gravity and pulley mechanics were overlooked in the 3D design; added weights rebalanced it, and a better-balanced pulley/cart design was identified as the next improvement.",
        "ko": "3D 설계 단계에서 무게 중심과 도르래 원리를 고려하지 못해 카가 옆과 앞으로 기울었으나, 무게 추를 달아 균형을 맞췄습니다. 균형을 고려한 도르래·카 설계를 다음 개선 과제로 도출했습니다."
      },
      {
        "en": "Documented as the paper \"Design and Implementation of Elevator Using FPGA and Atmega 328p\" (Kim C.Y., Hong S.B.).",
        "ko": "논문 「FPGA와 Atmega 328p를 이용한 엘리베이터 설계 및 구현」(김채윤, 홍서빈)으로 정리했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Proposed the idea and led the overall design as team lead.",
        "ko": "팀장으로서 아이디어를 제안하고 전체 설계를 주도했습니다."
      },
      {
        "en": "Designed the ATmega328P stepper and FPGA servo circuits.",
        "ko": "ATmega328P 스테핑 모터 회로와 FPGA 서보 회로를 설계했습니다."
      },
      {
        "en": "Wrote the ATmega328P firmware for floor tracking and stepper control.",
        "ko": "현재 층 추적과 스테핑 모터 제어를 위한 ATmega328P 펌웨어를 작성했습니다."
      },
      {
        "en": "First author of the project paper.",
        "ko": "프로젝트 논문의 제1저자로 참여했습니다."
      }
    ],
    "tech": [
      "ATmega328P",
      "Arduino (C/C++)",
      "Arduino Stepper library",
      "Xilinx Spartan-3 (XC3S200)",
      "Xilinx ISE",
      "VHDL",
      "ULN2003A",
      "Stepper motor",
      "Servo motor (PWM)",
      "3D printing",
      "Li-Po battery",
      "OrCAD"
    ],
    "topics": [
      "PWM control",
      "FPGA",
      "Stepper motor control",
      "Digital system design",
      "3D printing"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/Elevator-FPGA-and-Atmega-328p"
      },
      {
        "type": "doc",
        "label": {
          "en": "Paper (PDF, Korean)",
          "ko": "논문 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe85fe37d-9b31-4644-841e-a7bbc975a4e6%2FFPGA%EC%99%80_Atmega_328p%EB%A5%BC_%EC%9D%B4%EC%9A%A9%ED%95%9C_%EC%97%98%EB%A6%AC%EB%B2%A0%EC%9D%B4%ED%84%B0_%EC%84%A4%EA%B3%84_%EB%B0%8F_%EA%B5%AC%ED%98%84_.pdf?table=block&id=1fb85a41-7def-81c6-9dbd-d11cd29980b2&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      }
    ],
    "cover": "img/fpga-elevator/cover.jpg",
    "images": [
      {
        "src": "img/fpga-elevator/01-elevator-operation-check.jpg",
        "caption": {
          "en": "Operation check of the 3D-printed elevator: stepper-driven cart and servo-actuated door lock (paper Fig. 7).",
          "ko": "3D 프린팅 엘리베이터 동작 확인: 스테핑 모터로 움직이는 카와 서보로 작동하는 도어 잠금장치 (논문 그림 7)."
        },
        "thumb": "img/fpga-elevator/thumbs/01-elevator-operation-check.jpg"
      },
      {
        "src": "img/fpga-elevator/02-elevator-3d-model.jpg",
        "caption": {
          "en": "3D model of the elevator body prepared for 3D printing.",
          "ko": "3D 프린팅용 엘리베이터 본체 3D 모델."
        },
        "thumb": "img/fpga-elevator/thumbs/02-elevator-3d-model.jpg"
      },
      {
        "src": "img/fpga-elevator/03-atmega328p-stepper-circuit.jpg",
        "caption": {
          "en": "ATmega328P stepper-control schematic with a ULN2003A driver and pull-down floor buttons.",
          "ko": "ULN2003A 드라이버와 풀다운 층 버튼을 포함한 ATmega328P 스테핑 모터 제어 회로도."
        },
        "thumb": "img/fpga-elevator/thumbs/03-atmega328p-stepper-circuit.jpg"
      },
      {
        "src": "img/fpga-elevator/04-fpga-servo-circuit.jpg",
        "caption": {
          "en": "FPGA (Xilinx XC3S200) servo-control schematic with door open/close switches.",
          "ko": "문 열림/닫힘 스위치를 포함한 FPGA(Xilinx XC3S200) 서보 제어 회로도."
        },
        "thumb": "img/fpga-elevator/thumbs/04-fpga-servo-circuit.jpg"
      },
      {
        "src": "img/fpga-elevator/05-perfboard-pcb-lipo.jpg",
        "caption": {
          "en": "Perfboard controller with its Li-Po battery power supply.",
          "ko": "Li-Po 배터리 전원부를 갖춘 만능기판 제어기."
        },
        "thumb": "img/fpga-elevator/thumbs/05-perfboard-pcb-lipo.jpg"
      },
      {
        "src": "img/fpga-elevator/06-fpga-servo-test.jpg",
        "caption": {
          "en": "FPGA board driving a servo motor with PWM during testing (frame from the repo demo video).",
          "ko": "FPGA 보드로 서보모터를 PWM 구동하는 테스트 장면 (저장소 데모 영상 캡처)."
        },
        "thumb": "img/fpga-elevator/thumbs/06-fpga-servo-test.jpg"
      }
    ]
  },
  {
    "slug": "cansat",
    "year": "2017",
    "category": "embedded",
    "categoryLabel": {
      "en": "Embedded · CanSat",
      "ko": "임베디드 · 캔위성"
    },
    "title": {
      "en": "Can Satellite Design for Fine Dust Monitoring",
      "ko": "대기 안정도와 미세먼지 농도의 상관관계 분석을 위한 캔위성 설계"
    },
    "team": {
      "en": "Team of 3 (UniSat: Baekseok Univ., Seoul Tech, Sejong Univ.) · Team Lead",
      "ko": "3인 팀 (UniSat: 백석대·서울과기대·세종대) · 팀장"
    },
    "role": {
      "en": "Mission idea & design, sensor control, satellite–ground communication, embedded SW",
      "ko": "임무 아이디어 및 설계, 센서 제어, 위성–지상국 통신, 임베디드 SW"
    },
    "tagline": {
      "en": "A rocket-launched CanSat that measures 3-axis wind, attitude and fine-dust concentration during descent to relate atmospheric stability to fine-dust levels.",
      "ko": "로켓으로 발사되어 낙하하는 동안 3축 풍속, 자세, 미세먼지 농도를 측정해 대기 안정도와 미세먼지의 상관관계를 분석하는 캔위성."
    },
    "summary": {
      "en": "Team UniSat's entry to the 6th CanSat Competition (2017), hosted by the Ministry of Science and ICT and organized by the KAIST Satellite Technology Research Center, led as team lead. The CanSat is launched to 300–500 m, records attitude, 3-axis wind speed and dust density while descending by parachute, and sends the data to a ground station over XBee. Pasquill stability classes assigned to sections of the descent were compared with fine-dust concentration; the project won an Excellence Award (KAIST President's Award) and was presented at the KSAS 2017 Fall Conference.",
      "ko": "과학기술정보통신부가 주최하고 KAIST 인공위성연구소가 주관한 제6회 캔위성 경연대회(2017)에 UniSat 팀장으로 참가한 프로젝트입니다. 캔위성은 300–500m 높이까지 발사된 뒤 낙하산으로 하강하면서 자세, 3축 풍속, 미세먼지 농도를 기록하고 XBee로 지상국에 전송합니다. 낙하 구간별로 구한 Pasquill 안정도를 미세먼지 농도와 비교했으며, 우수상(KAIST 총장상)을 수상하고 한국항공우주학회 2017 추계학술대회에서 발표했습니다."
    },
    "problem": {
      "en": "Fine-dust damage worsens every year and differs by region, and studies link those differences to atmospheric circulation, i.e. atmospheric stability. Stability is usually derived from an air parcel's adiabatic lapse rate, which is impractical within a CanSat's size limits, so the mission needed another way to estimate stability and relate it to dust concentration.",
      "ko": "미세먼지 피해는 해마다 심해지고 지역별로 차이가 나며, 여러 연구에서 그 차이의 원인으로 대기 순환, 즉 대기 안정도를 지목합니다. 대기 안정도는 보통 공기 덩이의 단열감률로 구하지만 캔위성의 크기 제약 안에서는 이를 측정하기 어렵습니다. 따라서 다른 방식으로 안정도를 추정하고 미세먼지 농도와 연관 짓는 것이 과제였습니다."
    },
    "solution": {
      "en": "Use the Pasquill stability class, which needs only wind speed and solar radiation. Three wind sensors aligned with the gyro's x/y/z axes measure wind during descent; the measured attitude is used to rotate readings into an absolute frame, and an approximation for absolute wind speed was fitted by least-squares linear regression. A dust sensor mounted at the bottom, an XBee Pro S2B link with micro-SD backup, a real-time ground-station GUI and a pyranometer at the ground station complete the system.",
      "ko": "풍속과 일사량만으로 구할 수 있는 Pasquill 안정도를 사용했습니다. 자이로 센서의 x/y/z축에 맞춰 배치한 바람 센서 3개로 낙하 중 풍속을 측정하고, 측정한 자세를 이용해 값을 절대 좌표계로 회전 변환했으며, 절대 풍속 근사식은 최소자승법 기반 선형회귀로 구했습니다. 위성 최하단에 장착한 먼지 센서, micro-SD 백업을 갖춘 XBee Pro S2B 통신, 실시간 지상국 GUI, 지상국의 일사계로 시스템을 완성했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Mission & stability metric",
          "ko": "임무 및 안정도 지표 설계"
        },
        "body": {
          "en": "Defined the mission as correlating atmospheric stability with fine-dust concentration, using Pasquill classes (wind speed + solar radiation) because lapse-rate measurement does not fit a CanSat.",
          "ko": "대기 안정도와 미세먼지 농도의 상관관계 분석을 임무로 정했습니다. 단열감률 측정은 캔위성에 맞지 않아 풍속과 일사량으로 구하는 Pasquill 안정도를 채택했습니다."
        }
      },
      {
        "title": {
          "en": "Absolute wind-speed estimation",
          "ko": "절대 풍속 산출"
        },
        "body": {
          "en": "Aligned three wind sensors with the gyro axes, corrected for attitude with a rotation-matrix transform, and fitted the absolute wind-speed approximation by least-squares regression; a wind-tunnel test showed under 5% error at or below 9 m/s.",
          "ko": "바람 센서 3개를 자이로 축에 맞춰 배치하고 회전 행렬로 자세를 보정했으며, 절대 풍속 근사식은 최소자승법 회귀로 구했습니다. 풍동 실험에서 풍속 9m/s 이하일 때 오차가 5% 미만임을 확인했습니다."
        }
      },
      {
        "title": {
          "en": "Hardware & structure",
          "ko": "하드웨어 및 구조 설계"
        },
        "body": {
          "en": "Integrated an Arduino Mega, MPU-9250 gyro, three Wind Sensor Rev. C units, a GP2Y1014AU0F dust sensor (mounted lowest, considering the descent), a micro-SD reader and a Li-Po battery in a stacked frame.",
          "ko": "Arduino Mega, MPU-9250 자이로, Wind Sensor Rev. C 3개, 낙하 상태를 고려해 최하단에 배치한 GP2Y1014AU0F 먼지 센서, micro-SD 리더, Li-Po 배터리를 적층 구조에 통합했습니다."
        }
      },
      {
        "title": {
          "en": "Satellite–ground communication",
          "ko": "위성–지상국 통신"
        },
        "body": {
          "en": "Chose an XBee Pro S2B (about 1 km nominal) for the ~600 m link requirement; an XCTU range test reached only ~400 m, so data is also logged to micro-SD and sent when in range, with a real-time ground-station GUI.",
          "ko": "최소 600m 통신 요구에 맞춰 이론상 약 1km까지 통신할 수 있는 XBee Pro S2B를 사용했습니다. XCTU 테스트에서는 약 400m까지만 통신이 확인되어, 데이터를 micro-SD에도 저장하고 통신 범위 안에서 송신하도록 했으며 실시간 지상국 GUI를 구성했습니다."
        }
      },
      {
        "title": {
          "en": "Parachute design",
          "ko": "낙하산 설계"
        },
        "body": {
          "en": "A ~28 m drop test with a 70 cm vinyl canopy and a 400 g water bottle gave ~2.8 m/s; based on this, designed a cross-shaped parachute with a 60 cm center hole for a more stable descent attitude.",
          "ko": "약 28m 높이에서 지름 70cm 비닐 캐노피에 400g 물통을 매달아 낙하 실험을 한 결과, 낙하 속도는 약 2.8m/s였습니다. 이를 바탕으로 더 안정적인 하강 자세를 위해 중심에 지름 60cm 구멍을 낸 크로스형 낙하산을 설계했습니다."
        }
      },
      {
        "title": {
          "en": "Data analysis",
          "ko": "데이터 분석"
        },
        "body": {
          "en": "Corrected attitude to compute absolute wind speed, plotted it against dust concentration, split the descent into sections and assigned Pasquill stability per section using ground pyranometer data.",
          "ko": "자세를 보정해 절대 풍속을 산출하고 미세먼지 농도와 함께 그래프로 나타냈습니다. 낙하 구간을 나눈 뒤 지상 일사계 데이터를 이용해 구간별 Pasquill 안정도를 구했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Excellence Award (Creative Division), KAIST President's Award, 2017 CanSat Competition (Sep 14, 2017).",
        "ko": "2017 캔위성 경연대회에서 우수상(창작부문, KAIST 총장상)을 수상했습니다(2017.09.14)."
      },
      {
        "en": "Paper presented at the KSAS (Korean Society for Aeronautical and Space Sciences) 2017 Fall Conference, Nov 15–18, 2017.",
        "ko": "한국항공우주학회 2017 추계학술대회(2017.11.15–18)에서 논문을 발표했습니다."
      },
      {
        "en": "Wind-tunnel validation: under 5% error between measured and calculated wind speed at or below 9 m/s.",
        "ko": "풍동 실험으로 풍속 9m/s 이하에서 측정 풍속과 계산 풍속의 오차가 5% 미만임을 검증했습니다."
      },
      {
        "en": "The paper reports a relationship between stability class and fine-dust concentration, but the low drop altitude limited the analysis to three stability sections, and wind drift made recovery difficult.",
        "ko": "논문에서 안정도 등급과 미세먼지 농도 사이의 관계를 보고했으나, 낙하 고도가 낮아 안정도 구간을 세 개로만 나눌 수 있었고 바람에 밀려 착륙 지점이 벗어나 회수가 어려웠습니다."
      }
    ],
    "contributions": [
      {
        "en": "Proposed the mission idea and led the overall design as team lead.",
        "ko": "팀장으로서 임무 아이디어를 제안하고 전체 설계를 주도했습니다."
      },
      {
        "en": "Designed sensor control (wind, dust, IMU) and developed the embedded firmware.",
        "ko": "센서 제어(바람·먼지·IMU)를 설계하고 임베디드 펌웨어를 개발했습니다."
      },
      {
        "en": "Designed the satellite–ground station communication link.",
        "ko": "위성–지상국 통신 링크를 설계했습니다."
      },
      {
        "en": "First author of the KSAS 2017 Fall Conference paper.",
        "ko": "한국항공우주학회 2017 추계학술대회 논문에 제1저자로 참여했습니다."
      }
    ],
    "tech": [
      "Arduino Mega",
      "C/C++ (Arduino)",
      "Python (NumPy, Matplotlib)",
      "MPU-9250 IMU (SparkFun DMP library)",
      "Wind Sensor Rev. C",
      "GP2Y1014AU0F dust sensor",
      "XBee Pro S2B / XCTU",
      "micro-SD logging",
      "PLX-DAQ",
      "OrCAD"
    ],
    "topics": [
      "CanSat",
      "Atmospheric stability",
      "Fine dust",
      "Attitude correction",
      "Wireless telemetry",
      "Parachute design"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/2017-CANSAT-COMPETITION"
      },
      {
        "type": "doc",
        "label": {
          "en": "KSAS 2017 paper (PDF, Korean)",
          "ko": "KSAS 2017 논문 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4e0abe93-9b01-4550-949d-7dea2bef0b4f%2F%EB%8C%80%EA%B8%B0_%EC%95%88%EC%A0%95%EB%8F%84%EC%99%80_%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80_%EB%86%8D%EB%8F%84%EC%9D%98_%EC%83%81%EA%B4%80%EA%B4%80%EA%B3%84_%EB%B6%84%EC%84%9D%EC%9D%84_%EC%9C%84%ED%95%9C_%EC%BA%94%EC%9C%84%EC%84%B1_%EC%84%A4%EA%B3%84.pdf?table=block&id=1fb85a41-7def-81e9-9b54-ff0903e26792&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      },
      {
        "type": "doc",
        "label": {
          "en": "Award certificate (PDF)",
          "ko": "수상 상장 (PDF)"
        },
        "url": "https://chaeyoonkim.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04e0e5a5-2243-4aef-a76b-f6e70fa31aa8%2F2017_%EC%BA%94%EC%9C%84%EC%84%B1%EA%B2%BD%EC%97%B0%EB%8C%80%ED%9A%8C.pdf?table=block&id=20e85a41-7def-80ac-968d-c23dc61df12c&spaceId=3b7bc2fe-53ff-43ca-a1d7-3a75f677c2d7"
      }
    ],
    "cover": "img/cansat/cover.jpg",
    "images": [
      {
        "src": "img/cansat/01-unisat-cansat-assembled.jpg",
        "caption": {
          "en": "The assembled UniSat CanSat: a stacked acrylic frame holding the controller, sensors and communication module.",
          "ko": "조립된 UniSat 캔위성: 적층형 아크릴 프레임에 제어기, 센서, 통신 모듈을 탑재했습니다."
        },
        "thumb": "img/cansat/thumbs/01-unisat-cansat-assembled.jpg"
      },
      {
        "src": "img/cansat/02-cansat-3d-model-components.jpg",
        "caption": {
          "en": "3D model and components: Arduino MEGA, XBee Pro S2B and shield, gyro sensor, micro-SD reader, dust sensor, wind sensor and Li-Po battery (paper Fig. 4).",
          "ko": "3D 모델과 구성 부품: Arduino MEGA, XBee Pro S2B 및 쉴드, 자이로 센서, micro-SD 리더, 먼지 센서, 바람 센서, Li-Po 배터리 (논문 그림 4)."
        },
        "thumb": "img/cansat/thumbs/02-cansat-3d-model-components.jpg"
      },
      {
        "src": "img/cansat/03-wind-tunnel-test.jpg",
        "caption": {
          "en": "Wind-tunnel test of the CanSat's wind-speed measurement.",
          "ko": "캔위성 풍속 측정 풍동 실험."
        },
        "thumb": "img/cansat/thumbs/03-wind-tunnel-test.jpg"
      },
      {
        "src": "img/cansat/04-ground-station-gui.jpg",
        "caption": {
          "en": "Ground-station GUI: real-time x/y/z wind speed, attitude (Real-Time Motion), communication status and dust density.",
          "ko": "지상국 GUI: x/y/z축 풍속, 자세(Real-Time Motion), 통신 상태, 미세먼지 농도를 실시간으로 표시합니다."
        },
        "thumb": "img/cansat/thumbs/04-ground-station-gui.jpg"
      },
      {
        "src": "img/cansat/05-wind-vs-dust-analysis.jpg",
        "caption": {
          "en": "Absolute wind speed vs. fine-dust concentration, divided into Pasquill stability sections A-B, B and B-C (paper Fig. 11).",
          "ko": "Pasquill 안정도 구간(A-B, B, B-C)으로 나눈 절대 풍속과 미세먼지 농도 비교 (논문 그림 11)."
        },
        "thumb": "img/cansat/thumbs/05-wind-vs-dust-analysis.jpg"
      },
      {
        "src": "img/cansat/06-image.jpg",
        "caption": {
          "en": "Excellence Award (Creative Division) certificate, 2017 CanSat Competition, awarded by the KAIST President to team UniSat.",
          "ko": "KAIST 총장 명의로 UniSat 팀에 수여된 2017 캔위성 경연대회 우수상(창작부문) 상장."
        },
        "thumb": "img/cansat/thumbs/06-image.jpg"
      }
    ]
  },
  {
    "slug": "kaggle-image-matching",
    "hidden": true,
    "year": "2022",
    "period": {
      "en": "Apr 2022 – Jun 2022",
      "ko": "2022.04 – 2022.06"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Computer Vision · Kaggle",
      "ko": "AI · 컴퓨터 비전 · Kaggle"
    },
    "title": {
      "en": "[Kaggle] Image Matching Challenge 2022",
      "ko": "[Kaggle] Image Matching Challenge 2022"
    },
    "team": {
      "en": "Team of 2 (BeeingBeeing)",
      "ko": "2인 팀 (BeeingBeeing)"
    },
    "role": {
      "en": "Member",
      "ko": "팀원"
    },
    "tagline": {
      "en": "Registering two photos of the same scene from different viewpoints by estimating their fundamental matrix: 105th of 643 teams.",
      "ko": "서로 다른 시점에서 찍은 두 사진의 fundamental matrix를 추정해 정합하는 Kaggle 대회, 643팀 중 105위."
    },
    "summary": {
      "en": "Kaggle research code competition hosted by Google AI with the University of British Columbia and Czech Technical University, held as part of the CVPR 2022 Image Matching workshop. The goal is to register two photos of the same landmark taken from different viewpoints by predicting their fundamental matrix, scored by mean Average Accuracy (mAA). Competed as the two-person team BeeingBeeing and placed 105th of 643 teams on the private leaderboard (score 0.75574).",
      "ko": "Google AI가 University of British Columbia, Czech Technical University와 함께 주최하고 CVPR 2022 Image Matching 워크숍의 일환으로 열린 Kaggle research code competition입니다. 서로 다른 시점에서 촬영한 같은 랜드마크의 두 사진에 대해 fundamental matrix를 예측해 정합하는 과제이며, mAA(mean Average Accuracy)로 평가합니다. 2인 팀 BeeingBeeing으로 참가해 private leaderboard 643팀 중 105위(점수 0.75574)를 기록했습니다."
    },
    "problem": {
      "en": "Structure-from-Motion needs to know which pixels in two photos show the same 3D point. Internet photo collections vary widely in viewpoint, lighting, weather, occlusion and filters, and the test pairs were taken at least 24 hours (sometimes months or years) apart, which makes robust registration hard.",
      "ko": "Structure-from-Motion을 위해서는 두 사진에서 같은 3D 지점을 가리키는 픽셀을 찾아야 합니다. 인터넷 사진은 시점·조명·날씨·가림·필터가 제각각이고, 테스트 이미지 쌍은 최소 24시간에서 길게는 수개월·수년 간격으로 촬영되어 안정적인 정합이 어렵습니다."
    },
    "solution": {
      "en": "A Kaggle Notebook pipeline that matches each image pair and estimates its fundamental matrix, which encodes the relative camera pose the competition scores.",
      "ko": "각 이미지 쌍을 매칭하고, 대회 평가 대상인 상대 카메라 자세를 담은 fundamental matrix를 추정하는 Kaggle Notebook 파이프라인입니다."
    },
    "approach": [
      {
        "title": {
          "en": "Task & metric analysis",
          "ko": "과제·평가 지표 분석"
        },
        "body": {
          "en": "The task is relative pose estimation. Training scenes provide camera intrinsics K and extrinsics R, T, and the target is the fundamental matrix F. Scoring is mAA over ten rotation/translation threshold pairs (1°/20 cm to 10°/5 m), averaged per scene.",
          "ko": "과제는 상대 자세 추정(relative pose estimation) 문제입니다. 학습 데이터는 카메라 내부 파라미터 K와 외부 파라미터 R, T를 제공하며, 목표는 fundamental matrix F를 추정하는 것입니다. 평가는 회전/이동 오차 임계값 10쌍(1°/20 cm ~ 10°/5 m)에 대한 mAA를 scene별로 구해 평균합니다."
        }
      },
      {
        "title": {
          "en": "Correspondence matching",
          "ko": "대응점 매칭"
        },
        "body": {
          "en": "Established pixel correspondences between the two views of each pair. This image-registration step links the same physical points across photos.",
          "ko": "각 이미지 쌍의 두 시점 사이에서 픽셀 대응점을 찾았습니다. 이 image registration 단계에서 여러 사진에 걸쳐 동일한 물리적 지점을 연결합니다."
        }
      },
      {
        "title": {
          "en": "Fundamental-matrix estimation",
          "ko": "Fundamental matrix 추정"
        },
        "body": {
          "en": "Estimated F for roughly 10,000 hidden test pairs and wrote each one to submission.csv as a 3×3 matrix flattened in row-major order.",
          "ko": "비공개 test 이미지 쌍 약 10,000개에 대해 F를 추정하고, 각 3×3 행렬을 row-major 순서로 펼쳐 submission.csv에 기록했습니다."
        }
      },
      {
        "title": {
          "en": "Notebook submission & iteration",
          "ko": "노트북 제출 및 반복 개선"
        },
        "body": {
          "en": "Submitted through Kaggle Notebooks under code-competition limits (internet disabled, runtime of 9 h or less). The team made 8 submissions before the June 2, 2022 deadline.",
          "ko": "인터넷 차단, 실행 시간 9시간 이하라는 code competition 조건에 맞춰 Kaggle Notebook으로 제출했습니다. 2022년 6월 2일 마감까지 팀은 총 8회 제출했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Private leaderboard: rank 105 of 643 teams, score 0.75574 (mAA)",
        "ko": "Private leaderboard에서 643팀 중 105위(점수 0.75574, mAA)를 기록했습니다."
      },
      {
        "en": "Public leaderboard: rank 99, score 0.75335",
        "ko": "Public leaderboard에서는 99위(점수 0.75335)를 기록했습니다."
      },
      {
        "en": "8 submissions as a two-person team",
        "ko": "2인 팀으로 총 8회 제출했습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch"
    ],
    "topics": [
      "Image Matching",
      "Structure-from-Motion",
      "Epipolar Geometry",
      "Fundamental Matrix",
      "Relative Pose Estimation"
    ],
    "links": [
      {
        "type": "kaggle",
        "label": {
          "en": "Competition",
          "ko": "대회 페이지"
        },
        "url": "https://www.kaggle.com/competitions/image-matching-challenge-2022"
      }
    ],
    "cover": "img/kaggle-image-matching/cover.jpg",
    "images": [
      {
        "src": "img/kaggle-image-matching/01-leaderboard-rank105.jpg",
        "caption": {
          "en": "Final private leaderboard: team BeeingBeeing at rank 105 with a score of 0.75574 after 8 submissions.",
          "ko": "최종 private leaderboard: BeeingBeeing 팀 105위, 점수 0.75574 (제출 8회)."
        },
        "thumb": "img/kaggle-image-matching/thumbs/01-leaderboard-rank105.jpg"
      }
    ]
  },
  {
    "slug": "covid-eda",
    "hidden": true,
    "year": "2021",
    "category": "ai",
    "categoryLabel": {
      "en": "Data Analysis · EDA",
      "ko": "데이터 분석 · EDA"
    },
    "title": {
      "en": "Covid-19 Data Analysis (EDA)",
      "ko": "Covid-19 데이터 분석 (EDA)"
    },
    "team": {
      "en": "Team of 4",
      "ko": "4인 팀"
    },
    "role": {
      "en": "Team Lead",
      "ko": "팀장"
    },
    "tagline": {
      "en": "Hypothesis-driven EDA of South Korean COVID-19 data on how sex, region and age relate to infection, recovery and death.",
      "ko": "성별·지역·연령이 감염·회복·사망과 어떤 관계가 있는지 가설을 세워 검증한 국내 COVID-19 데이터 탐색적 분석(EDA)."
    },
    "summary": {
      "en": "Four-person team project (team lead) that set three hypotheses on sex, region and age and tested them through visual exploratory data analysis of ten South Korean COVID-19 data tables. The analysis was done in Python with Pandas, and the findings were presented in a 37-slide deck covering hypothesis design, visual verification and conclusions.",
      "ko": "4인 팀의 팀장으로 진행한 프로젝트로, 성별·지역·연령에 대한 세 가지 가설을 세우고 국내 COVID-19 데이터 테이블 10종을 시각화 기반 탐색적 분석(EDA)으로 검증했습니다. Python과 Pandas로 분석했으며, 가설 설정·시각화 검증·결론을 37장의 발표 자료로 정리했습니다."
    },
    "problem": {
      "en": "Early in the pandemic, scarce data fueled misinformation, such as claims that alcohol helps prevent COVID-19, that salt water can be used for disinfection, or that a hair dryer could kill the virus. Once enough data had accumulated, the team set out to test common questions against the data instead of rumors.",
      "ko": "코로나 발생 초기에는 데이터가 부족해 '알코올이 예방에 좋다', '소금물로 소독할 수 있다', '드라이기로 바이러스를 죽일 수 있다' 같은 잘못된 정보가 퍼졌습니다. 데이터가 충분히 쌓인 뒤, 팀은 흔히 궁금해하던 질문을 소문이 아닌 데이터로 검증하고자 했습니다."
    },
    "solution": {
      "en": "Three hypotheses, each verified with visualizations: (1) if COVID-19 were deadlier for one sex, that sex would show a higher fatality rate; (2) regional differences in medical infrastructure would change confirmation and recovery rates; (3) the high share of cases among people in their 20s is due to mobility.",
      "ko": "다음 세 가지 가설을 세우고 각각 시각화로 검증했습니다. (1) '특정 성별에 더 치명적이라면 그 성별의 치명률이 더 높을 것이다', (2) '지역별 의료 인프라 차이에 따라 확진률·완치율이 달라질 것이다', (3) '20대 확진 비율이 높은 것은 유동성 때문이다'."
    },
    "approach": [
      {
        "title": {
          "en": "Data understanding",
          "ko": "데이터 구성 파악"
        },
        "body": {
          "en": "Reviewed ten tables: Case, PatientInfo, PatientRoute, Time, TimeAge, TimeGender, TimeProvince, Region, Weather and SearchTrend. Together they cover infection routes, patients, time series by age/sex/province, regions, weather and search trends.",
          "ko": "Case, PatientInfo, PatientRoute, Time, TimeAge, TimeGender, TimeProvince, Region, Weather, SearchTrend의 10개 테이블을 검토했습니다. 이 테이블들은 감염 경로, 환자 정보와 이동 경로, 연령·성별·지역별 시계열, 지역 정보, 날씨, 검색 트렌드를 담고 있습니다."
        }
      },
      {
        "title": {
          "en": "Hypothesis design",
          "ko": "가설 수립"
        },
        "body": {
          "en": "Turned everyday questions into three testable hypotheses on sex, region and age.",
          "ko": "일상적인 궁금증을 성별·지역·연령에 대한 세 가지 검증 가능한 가설로 정리했습니다."
        }
      },
      {
        "title": {
          "en": "Sex analysis",
          "ko": "성별 분석"
        },
        "body": {
          "en": "Compared cumulative and daily confirmed/death ratios, recovery periods and average/cumulative contact counts by sex.",
          "ko": "성별에 따른 누적·일별 확진자 및 사망자 비율, 회복 기간, 평균·누적 접촉자 수를 비교했습니다."
        }
      },
      {
        "title": {
          "en": "Regional analysis",
          "ko": "지역 분석"
        },
        "body": {
          "en": "Mapped confirmed, released and deceased counts by district (June 2020) and plotted cumulative cases by province. Correlation heatmaps then related medical infrastructure and population density to testing/recovery speed and to infection routes.",
          "ko": "2020년 6월 기준 지역별 확진·완치·사망자 수를 지도로 나타내고, 지역별 누적 확진자 그래프를 그렸습니다. 이어 상관관계 히트맵으로 의료 인프라·인구 밀도와 검진·회복 속도, 감염 경로 사이의 관계를 분석했습니다."
        }
      },
      {
        "title": {
          "en": "Age analysis",
          "ko": "연령 분석"
        },
        "body": {
          "en": "Tracked age-group shares over time and broke down infection routes for people in their 20s, 50s and older, and 80s. Mobility by age was estimated from telecom data, then compared with contacts and the spreader-to-patient ratio.",
          "ko": "연령대별 확진자 비율 추이를 살피고, 20대·50대 이상·80대의 감염 경로를 분석했습니다. 통신 데이터로 연령별 유동성을 추정한 뒤 접촉자 수, 확진자 대비 전파자 비율과 비교했습니다."
        }
      },
      {
        "title": {
          "en": "Verdicts",
          "ko": "가설 검증 결론"
        },
        "body": {
          "en": "Summarized each hypothesis as supported (O) or rejected (X) based on the visual evidence.",
          "ko": "시각화 결과를 근거로 각 가설의 채택(O)·기각(X) 여부를 정리했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Sex: the hypothesis that COVID-19 is deadlier for one sex was rejected. Both sexes averaged about 2 deaths per day, and average recovery took 24.5 days (female) vs. 24.9 days (male).",
        "ko": "성별: 특정 성별에 더 치명적이라는 가설은 기각했습니다. 남녀 모두 하루 평균 사망자가 약 2명이었고, 평균 회복 기간은 여성 24.5일, 남성 24.9일이었습니다."
      },
      {
        "en": "Men averaged 22 contacts vs. 15 for women, pointing to more activity and greater exposure in spreading.",
        "ko": "평균 접촉자 수는 남성 22명, 여성 15명으로, 남성의 활동량이 많고 전파 과정에서 노출이 더 컸음을 시사합니다."
      },
      {
        "en": "Region: medical infrastructure and population density showed almost no correlation (|r| < 0.2) with testing and recovery speed. Density did correlate with specific infection routes: Guro call center 0.77, overseas 0.59, church 0.53.",
        "ko": "지역: 의료 인프라·인구 밀도와 검진·회복 속도 사이에는 상관관계가 거의 없었습니다(|r| < 0.2). 반면 인구 밀도는 특정 감염 경로와 상관관계를 보였습니다(구로 콜센터 0.77, 해외 유입 0.59, 교회 0.53)."
      },
      {
        "en": "Age: people in their 20s had the most cases, yet mobility was highest in the 50s and contacts highest among teens, so the mobility hypothesis was rejected. Cluster infections in dense, enclosed settings (nursing hospitals, silver towns, call centers) mattered more, and deaths were highest among people in their 80s.",
        "ko": "연령: 확진자는 20대가 가장 많았지만 유동성은 50대, 접촉자 수는 10대가 가장 높아 유동성 가설은 기각했습니다. 요양병원·실버타운·콜센터 같은 밀집·밀폐 공간의 집단 감염 영향이 더 컸으며, 사망자는 80대가 가장 많았습니다."
      }
    ],
    "contributions": [
      {
        "en": "Led the four-person team as team lead.",
        "ko": "4인 팀의 팀장으로 프로젝트를 이끌었습니다."
      }
    ],
    "tech": [
      "Python",
      "Pandas",
      "Google Colab"
    ],
    "topics": [
      "Exploratory Data Analysis",
      "Data Visualization",
      "Correlation Analysis",
      "Hypothesis Testing",
      "COVID-19"
    ],
    "links": [],
    "cover": "img/covid-eda/cover.jpg",
    "images": [
      {
        "src": "img/covid-eda/01-regional-maps.jpg",
        "caption": {
          "en": "Tile-grid maps of South Korea showing confirmed, released and deceased cases by district as of June 2020; Daegu and Gyeongbuk stand out.",
          "ko": "2020년 6월 기준 지역별 확진자·완치자·사망자 수를 표시한 국내 타일 그리드 지도로, 대구·경북이 두드러집니다."
        },
        "thumb": "img/covid-eda/thumbs/01-regional-maps.jpg"
      },
      {
        "src": "img/covid-eda/02-correlation-heatmap.jpg",
        "caption": {
          "en": "Correlation heatmap of infection routes, medical infrastructure and population density. Density correlates with the Guro call center (0.77), overseas (0.59) and church (0.53) routes.",
          "ko": "감염 경로·의료 인프라·인구 밀도의 상관관계 히트맵입니다. 인구 밀도는 구로 콜센터(0.77), 해외 유입(0.59), 교회(0.53) 경로와 상관관계를 보입니다."
        },
        "thumb": "img/covid-eda/thumbs/02-correlation-heatmap.jpg"
      },
      {
        "src": "img/covid-eda/03-age-share-over-time.jpg",
        "caption": {
          "en": "Cumulative confirmed cases stacked by age group (Mar–Apr 2020); people in their 20s make up the largest share.",
          "ko": "연령대별로 쌓아 올린 누적 확진자 추이(2020년 3–4월)로, 20대 비중이 가장 큽니다."
        },
        "thumb": "img/covid-eda/thumbs/03-age-share-over-time.jpg"
      },
      {
        "src": "img/covid-eda/04-spreaders-by-age.jpg",
        "caption": {
          "en": "Confirmed patients vs. spreaders per age group with their ratios; people in their 50s account for the largest share of all spreaders (red line).",
          "ko": "연령대별 확진자·전파자 수와 비율로, 전체 전파자 중 50대 비중이 가장 큽니다(빨간 선)."
        },
        "thumb": "img/covid-eda/thumbs/04-spreaders-by-age.jpg"
      },
      {
        "src": "img/covid-eda/05-cumulative-by-province.jpg",
        "caption": {
          "en": "Cumulative confirmed cases by province, Jan–Jun 2020: Daegu and Gyeongbuk (top) vs. Seoul, Gyeonggi and Incheon (bottom).",
          "ko": "2020년 1–6월 지역별 누적 확진자: 대구·경북(위)과 서울·경기·인천(아래)."
        },
        "thumb": "img/covid-eda/thumbs/05-cumulative-by-province.jpg"
      },
      {
        "src": "img/covid-eda/06-dataset-tables.jpg",
        "caption": {
          "en": "The ten COVID-19 data tables used in the analysis (Case, PatientInfo, PatientRoute, Time, TimeAge, TimeGender, TimeProvince, Region, Weather, SearchTrend).",
          "ko": "분석에 사용한 COVID-19 데이터 테이블 10종(Case, PatientInfo, PatientRoute, Time, TimeAge, TimeGender, TimeProvince, Region, Weather, SearchTrend)."
        },
        "thumb": "img/covid-eda/thumbs/06-dataset-tables.jpg"
      }
    ]
  }
];
