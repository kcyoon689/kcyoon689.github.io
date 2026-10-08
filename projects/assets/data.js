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
      "en": "Team of 5 (Upstage AI Ambassador)",
      "ko": "5인 팀 (Upstage AI Ambassador 1기)"
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
      "en": "ScholarLensAI is a web-based reading assistant for research papers, built by a five-person team in the first cohort of the Upstage AI Ambassador Program. Uploaded PDFs are parsed with Upstage Document Parse into layout-aware sections with element coordinates. Solar Pro2 then generates section-wise summaries, document-grounded Q&A, translation and three-level semantic highlights overlaid on the PDF.",
      "ko": "ScholarLensAI는 Upstage AI Ambassador 1기 5인 팀이 개발한 웹 기반 논문 리딩 어시스턴트입니다. 업로드한 PDF를 Upstage Document Parse로 파싱해 요소 좌표를 포함한 레이아웃 기반 섹션으로 구조화합니다. 이후 Solar Pro2로 섹션별 요약, 논문 기반 Q&A, 번역, PDF 위에 오버레이되는 3단계 시맨틱 하이라이트를 생성합니다."
    },
    "problem": {
      "en": "Researchers have more papers than they can read, and the hard part is deciding what in each one matters. Multi-column layouts, tables and equations break context when text is extracted. Reading, translation, summarization and search are also scattered across separate tools, which fragments focus and adds repetitive work.",
      "ko": "연구자가 읽어야 할 논문은 늘 읽을 수 있는 양보다 많으며, 정작 어려운 일은 각 논문에서 무엇이 중요한지 가려내는 것입니다. 다단 레이아웃·표·수식이 섞인 PDF는 텍스트를 추출하면 맥락이 끊깁니다. 또한 읽기·번역·요약·검색이 서로 다른 도구에 흩어져 있어 집중이 끊기고 반복 작업이 늘어납니다."
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
          "en": "PDFs up to 50MB are sent to Upstage Document Parse. Both the sync (up to 100 pages) and async (up to 1,000 pages) APIs are wrapped, and async is the default. OCR is forced only when a file looks scanned. Misclassified headings are corrected, sections are mapped to canonical names (Abstract → References), and two-column papers are supported.",
          "ko": "최대 50MB의 PDF를 Upstage Document Parse로 처리합니다. 동기(최대 100페이지)·비동기(최대 1,000페이지) API를 모두 래핑했으며, 기본으로 비동기 API를 사용합니다. 스캔본으로 보이는 파일에만 OCR을 강제 적용합니다. 잘못 분류된 섹션 제목을 보정하고, 섹션을 표준 이름(Abstract → References)으로 매핑하며, 2단 편집 논문도 지원합니다."
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
          "ko": "Next.js(App Router, TypeScript, Tailwind CSS, shadcn/ui, PDF.js) 프론트엔드와 FastAPI/Uvicorn 백엔드는 Swagger UI로 문서화한 REST API를 통해 통신합니다. 두 서비스는 모노레포의 Git 서브모듈로 관리되며 Docker Compose로 함께 실행됩니다. 백엔드 호출을 동기 방식에서 비동기 방식으로 전환해 응답 속도를 개선했습니다."
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
        "ko": "PDF 업로드부터 파싱, 요약·채팅·번역·하이라이트까지 전 과정이 동작하는 MVP를 완성하고 5분 데모 영상으로 시연했습니다(2025년 12월)."
      },
      {
        "en": "Open-sourced under the ScholarLensAI GitHub organization with a Docker Compose QUICKSTART guide.",
        "ko": "ScholarLensAI GitHub 조직에 Docker Compose 기반 QUICKSTART 가이드와 함께 공개했습니다."
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
        "ko": "백엔드 주 개발자로서 커밋 26개 중 22개를 작성하며 Upstage API 클라이언트 래퍼, 섹션 제목 검출·2단 논문 지원을 포함한 Document Parse 파이프라인, LLM 기반 자동 하이라이트, 채팅 프롬프트, 동기→비동기 전환을 구현했습니다."
      },
      {
        "en": "Frontend work (29 of 37 commits): PDF viewer and canvas fixes, upload flow, section summary/translation API integration, and highlight rendering.",
        "ko": "프론트엔드 커밋 37개 중 29개를 작성하며 PDF 뷰어·캔버스 오류 수정, 업로드 흐름, 섹션 요약·번역 API 연동, 하이라이트 렌더링을 담당했습니다."
      },
      {
        "en": "Infra/DevOps: Docker and Docker Compose setup, and monorepo submodule management.",
        "ko": "인프라/DevOps: Docker·Docker Compose 구성과 모노레포 서브모듈 관리를 맡았습니다."
      },
      {
        "en": "Owned the documentation and the HTML presentation site (all commits), and published the demo video.",
        "ko": "문서화와 HTML 발표 사이트(커밋 전체 작성)를 맡고 데모 영상을 공개했습니다."
      }
    ],
    "tech": [
      "Solar Pro2",
      "FastAPI",
      "Next.js 14",
      "Upstage Document Parse",
      "Python",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "PDF.js",
      "Docker",
      "Docker Compose",
      "Upstage Information Extract"
    ],
    "topics": [
      "LLM",
      "Document AI",
      "Document Parsing",
      "Summarization",
      "Q&A",
      "Machine Translation",
      "Semantic Highlighting",
      "Full-stack"
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
          "ko": "프론트엔드 저장소"
        },
        "url": "https://github.com/ScholarLensAI/scholarlensAI-FE"
      },
      {
        "type": "github",
        "label": {
          "en": "Backend repo",
          "ko": "백엔드 저장소"
        },
        "url": "https://github.com/ScholarLensAI/scholarlensAI-BE"
      }
    ],
    "youtube": [
      {
        "id": "DZ1qizLTM3o",
        "vertical": false,
        "caption": {
          "en": "Demo video (5 min, Dec 2025)",
          "ko": "데모 영상 (5분, 2025.12)"
        }
      }
    ],
    "cover": "img/scholarlensai/cover.jpg",
    "images": [
      {
        "src": "img/scholarlensai/01-viewer-highlight-translation.jpg",
        "caption": {
          "en": "Reader view: the Transformer paper with three-level semantic highlights (purple / green / blue) on the PDF and the Translation tab open.",
          "ko": "리더 화면: Transformer 논문 PDF 위의 3단계 시맨틱 하이라이트(보라 / 초록 / 파랑)와 열려 있는 번역 탭."
        },
        "thumb": "img/scholarlensai/thumbs/01-viewer-highlight-translation.jpg"
      },
      {
        "src": "img/scholarlensai/02-viewer-section-summary.jpg",
        "caption": {
          "en": "Section-wise summaries generated by Solar LLM, shown beside the parsed PDF with page references for each section.",
          "ko": "Solar LLM이 생성한 섹션별 요약을 페이지 정보와 함께 PDF 옆에 표시한 화면."
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
          "en": "Presentation slide: core features (layout analysis, semantic highlighting, Solar LLM Q&A) and the planned Upstage API pipeline (Document Parse, Information Extract, Solar LLM).",
          "ko": "발표 슬라이드: 핵심 기능(레이아웃 분석, 시맨틱 하이라이트, Solar LLM Q&A)과 설계 단계의 Upstage API 파이프라인(Document Parse, Information Extract, Solar LLM)."
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
    ],
    "cardTagline": {
      "en": "Paper-reading assistant on Upstage Document AI: summaries, translation, Q&A, on-PDF highlights.",
      "ko": "Upstage Document AI로 논문 요약·번역·Q&A·하이라이트를 제공하는 리딩 어시스턴트."
    }
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
      "en": "Sole developer",
      "ko": "단독 개발"
    },
    "tagline": {
      "en": "A ROS2 pipeline that fuses 2D LiDAR scans with YOLO person detections to locate moving people and estimate their velocity.",
      "ko": "2D LiDAR 스캔과 YOLO 사람 검출을 융합해 이동하는 사람의 위치와 속도를 추정하는 ROS2 파이프라인."
    },
    "summary": {
      "en": "A ROS2 sensor-fusion node that combines a 2D LiDAR with YOLO person tracking. LiDAR points are projected into the camera image and matched to each detected person, giving a per-person centroid and a smoothed velocity that are published as RViz Markers. It was tested on a mobile robot in an indoor office.",
      "ko": "2D LiDAR와 YOLO 사람 트래킹을 결합한 ROS2 센서 퓨전 노드입니다. LiDAR 포인트를 카메라 영상에 투영해 검출된 사람과 매칭하고, 사람별 중심점과 평활화한 속도를 RViz Marker로 퍼블리시합니다. 실내 사무 공간의 모바일 로봇에서 테스트했습니다."
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
          "ko": "외부 파라미터 행렬 T_cam_laser로 포인트를 카메라 좌표계로 변환하고 전방(z > 0) 포인트만 남깁니다. 이후 내부 파라미터 K와 왜곡 계수 D를 사용해 cv2.projectPoints로 이미지 평면에 투영합니다."
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
        "en": "Delivered an end-to-end ROS2 node that outputs per-person centroid and velocity Markers (/bbox_centroids) and a LiDAR-to-image reprojection stream (/reprojection).",
        "ko": "센서 입력부터 사람별 중심점·속도 Marker(/bbox_centroids)와 LiDAR→이미지 리프로젝션 영상(/reprojection) 출력까지 하나의 ROS2 노드로 구현했습니다."
      },
      {
        "en": "Published a 10-video demo playlist (Sep–Oct 2025) with dynamic-obstacle tests on the mobile robot and RViz2 runs of the lidar-camera-sensor-fusion demo.",
        "ko": "모바일 로봇의 동적 장애물 테스트와 lidar-camera-sensor-fusion 데모의 RViz2 실행 화면을 담은 데모 영상 10개를 재생목록으로 공개했습니다(2025년 9–10월)."
      },
      {
        "en": "Followed up in 2026 with a depth-camera person-tracking prototype that shows a depth colormap, a color–depth overlay and the center/mean distance of the tracked person.",
        "ko": "2026년 후속 작업으로 깊이 컬러맵, 컬러–깊이 오버레이, 추적 대상의 중심·평균 거리를 표시하는 깊이 카메라 기반 사람 추적 프로토타입을 구현했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Designed and implemented the full ROS2 fusion node, from sensor synchronization to velocity estimation.",
        "ko": "센서 동기화부터 속도 추정까지 ROS2 퓨전 노드 전체를 설계하고 구현했습니다."
      },
      {
        "en": "Used the camera–LiDAR calibration parameters to align 2D LiDAR points with the camera image.",
        "ko": "카메라–LiDAR 캘리브레이션 파라미터로 2D LiDAR 포인트를 카메라 영상에 정합했습니다."
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
      "Docker"
    ],
    "topics": [
      "Sensor Fusion",
      "Camera–LiDAR Calibration",
      "Object Detection",
      "Object Tracking",
      "Mobile Robot"
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
        "url": "https://chaeyoonkim.notion.site/2e785a417def8085af6ccfc15a8811ec",
        "ref": true
      }
    ],
    "youtube": [
      {
        "id": "4NHyqnMp92o",
        "vertical": false,
        "caption": {
          "en": "Dynamic-obstacle test (Oct 2025): RViz map beside the real scene",
          "ko": "동적 장애물 테스트(2025.10): RViz 맵과 실제 장면"
        }
      },
      {
        "id": "U8KemgeJpdg",
        "vertical": false,
        "caption": {
          "en": "Dynamic obstacle avoidance (DOA) recording in RViz (Sep 2025)",
          "ko": "RViz 동적 장애물 회피(DOA) 녹화(2025.09)"
        }
      },
      {
        "id": "tr5r2HTtcuI",
        "vertical": false,
        "caption": {
          "en": "Test run: a person walks past the robot",
          "ko": "테스트 장면: 로봇 옆을 지나가는 사람"
        }
      },
      {
        "id": "thpI4Oksd5I",
        "vertical": false,
        "caption": {
          "en": "RViz2 screen recording of the fusion demo (Oct 2025)",
          "ko": "퓨전 데모 RViz2 화면 녹화(2025.10)"
        }
      }
    ],
    "cover": "img/moving-object-detection/cover.jpg",
    "images": [
      {
        "src": "img/moving-object-detection/01-robot-person-walking.jpg",
        "caption": {
          "en": "Test run: a person walks past the mobile robot in an indoor office.",
          "ko": "테스트 장면: 실내 사무 공간에서 모바일 로봇 옆을 지나가는 사람."
        },
        "thumb": "img/moving-object-detection/thumbs/01-robot-person-walking.jpg"
      },
      {
        "src": "img/moving-object-detection/02-cover-dynamic-obstacle-demo.jpg",
        "caption": {
          "en": "Dynamic-obstacle test (Oct 2025): the robot on the RViz map (left) and the real scene of a person walking toward it (right).",
          "ko": "동적 장애물 테스트(2025.10): RViz 맵 위의 로봇(왼쪽)과 로봇 쪽으로 걸어오는 사람의 실제 장면(오른쪽)."
        },
        "thumb": "img/moving-object-detection/thumbs/02-cover-dynamic-obstacle-demo.jpg"
      },
      {
        "src": "img/moving-object-detection/03-rviz-lidar-centroids-reprojection.jpg",
        "caption": {
          "en": "RViz view: LaserScan points with yellow person-centroid Markers and velocity vectors, plus the camera image showing person boxes and reprojected LiDAR points.",
          "ko": "RViz 화면: LaserScan 포인트와 노란색 사람 중심점 Marker·속도 벡터, 사람 박스와 리프로젝션된 LiDAR 포인트가 표시된 카메라 영상."
        },
        "thumb": "img/moving-object-detection/thumbs/03-rviz-lidar-centroids-reprojection.jpg"
      },
      {
        "src": "img/moving-object-detection/04-rviz2-map-fusion-demo.jpg",
        "caption": {
          "en": "RViz2 running the lidar-camera-sensor-fusion demo config: occupancy map, LaserScan, TF, Markers/MarkerArrays and Paths, with the camera image and person box in the side panel.",
          "ko": "lidar-camera-sensor-fusion 데모 설정으로 실행한 RViz2: 점유 격자 지도, LaserScan, TF, Marker/MarkerArray, Path와 사이드 패널의 카메라 영상·사람 박스."
        },
        "thumb": "img/moving-object-detection/thumbs/04-rviz2-map-fusion-demo.jpg"
      },
      {
        "src": "img/moving-object-detection/05-rviz-doa-polygons.jpg",
        "caption": {
          "en": "Dynamic obstacle avoidance (DOA) recording: avoidance polygons drawn in RViz, and the camera view with tracked person boxes.",
          "ko": "동적 장애물 회피(DOA) 녹화: RViz에 표시된 회피 영역 폴리곤과 추적 중인 사람 박스가 표시된 카메라 영상."
        },
        "thumb": "img/moving-object-detection/thumbs/05-rviz-doa-polygons.jpg"
      },
      {
        "src": "img/moving-object-detection/06-depth-person-tracking-followup.jpg",
        "caption": {
          "en": "2026 follow-up: depth-camera prototype with a depth colormap, a color–depth overlay and a 'Person Tracking' view that shows center/mean distance.",
          "ko": "2026년 후속 작업: 깊이 컬러맵, 컬러–깊이 오버레이, 중심·평균 거리를 표시하는 'Person Tracking' 화면으로 구성된 깊이 카메라 프로토타입."
        },
        "thumb": "img/moving-object-detection/thumbs/06-depth-person-tracking-followup.jpg"
      }
    ],
    "cardTagline": {
      "en": "Fuses 2D LiDAR with YOLO person detections in ROS2 to estimate people's position and velocity.",
      "ko": "2D LiDAR와 YOLO 사람 검출을 융합해 이동하는 사람의 위치·속도를 추정하는 ROS2 노드."
    }
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
      "en": "Individual (XIILAB)",
      "ko": "개인 (씨이랩)"
    },
    "role": {
      "en": "AI Researcher, AI Model Research Team",
      "ko": "AI 모델 연구팀 연구원"
    },
    "tagline": {
      "en": "A PatchCore-based anomaly detection model for PCB defects, built with a backbone ensemble and mask prediction.",
      "ko": "PatchCore에 백본 앙상블과 마스크 예측을 더해 PCB 결함을 찾는 이상 탐지 모델."
    },
    "summary": {
      "en": "A solo industrial anomaly detection task on XIILAB's AI Model Research Team (2024). The model extends PatchCore with a backbone ensemble and mask prediction to find defects in PCB images, and was developed on Ubuntu with PyTorch, Git and Docker.",
      "ko": "2024년 씨이랩 AI 모델 연구팀에서 단독으로 수행한 산업용 이상 탐지 과제입니다. PatchCore에 백본 앙상블(backbone ensemble)과 마스크 예측(mask prediction)을 더해 PCB 이미지에서 결함을 찾는 모델을 만들었으며, Ubuntu 환경에서 PyTorch, Git, Docker로 개발했습니다."
    },
    "contributions": [
      {
        "en": "Sole developer: implemented the backbone ensemble and mask prediction on top of PatchCore.",
        "ko": "단독 개발: PatchCore 위에 백본 앙상블과 마스크 예측을 구현했습니다."
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
    "links": [],
    "monogram": "PCB",
    "cardTagline": {
      "en": "PatchCore-based PCB defect detection with a backbone ensemble and mask prediction.",
      "ko": "백본 앙상블과 마스크 예측을 더한 PatchCore 기반 PCB 결함 탐지 모델."
    }
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
      "en": "A trained model is not yet a service: runs need to be tracked, the chosen model has to be stored in a registry in a portable format, and predictions must come from the right version. The goal was a single API that trains, registers and serves an MNIST classifier, with MLflow handling tracking and the registry.",
      "ko": "학습만으로는 모델을 서비스할 수 없습니다. 실험을 추적하고, 선택한 모델을 이식 가능한 형식으로 레지스트리에 등록하고, 항상 올바른 버전으로 추론해야 합니다. 이 프로젝트는 MLflow로 실험 추적과 레지스트리를 관리하면서 MNIST 분류 모델의 학습·등록·서빙을 하나의 API로 제공하는 것을 목표로 했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "From CNN baseline to Lightning MLP",
          "ko": "CNN 베이스라인에서 Lightning MLP로"
        },
        "body": {
          "en": "Started from a reference PyTorch CNN for MNIST, credited in the README (Conv2d–BatchNorm–Dropout blocks with a 1×1 transition layer and max-pooling). Training was then refactored into a LightningModule and LightningDataModule with a 55,000 / 5,000 train/validation split and Adam with a OneCycleLR schedule. The Lightning model that /train trains and /predict serves is a 3-layer fully connected network (MLP).",
          "ko": "README에 출처를 밝힌 PyTorch 기반 MNIST CNN 레퍼런스(Conv2d–BatchNorm–Dropout 블록, 1×1 transition layer, max-pooling)로 시작했습니다. 이후 학습 코드를 LightningModule·LightningDataModule로 리팩터링했으며, 학습/검증 데이터는 55,000 / 5,000으로 분할하고 Adam과 OneCycleLR 스케줄을 사용했습니다. /train이 학습하고 /predict가 서빙하는 Lightning 모델은 3층 완전 연결 신경망(MLP)입니다."
        }
      },
      {
        "title": {
          "en": "Tracked training endpoint",
          "ko": "학습 API와 실험 추적"
        },
        "body": {
          "en": "/train accepts learning rate, epochs and batch size as JSON. It enables MLflow PyTorch autologging and system-metrics logging, then returns the MLflow run ID and artifact path. Guardrails reject more than 15 epochs and cap training at 10 minutes.",
          "ko": "/train은 학습률, epoch 수, 배치 크기를 JSON으로 받습니다. MLflow PyTorch autologging과 시스템 메트릭 로깅을 활성화하고, 학습 후 MLflow run ID와 artifact 경로를 반환합니다. 15 epoch 초과 요청은 거부하고 학습 시간은 최대 10분으로 제한했습니다."
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
          "ko": "/predict는 업로드 이미지를 정규화된 28×28 흑백 텐서로 변환하고, 최신 등록 버전을 조회해 MLflow pyfunc로 추론한 뒤 예측 라벨과 softmax 신뢰도를 반환합니다. PyTorch와 ONNX Runtime 출력이 일치하는지 검증하는 테스트 스크립트도 작성했습니다."
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
        "en": "All three endpoints (Train / Register / Predict) work end to end, as shown in the Insomnia screenshots. For example, /predict returns label \"0\" with 95.27% confidence for the sample img_7.jpg, a handwritten 0.",
        "ko": "Train / Register / Predict 세 엔드포인트가 학습부터 등록, 추론까지 이어서 정상 동작하며, Insomnia 스크린샷으로 확인할 수 있습니다. 예를 들어 손글씨 0인 샘플 img_7.jpg를 /predict에 보내면 label \"0\", 신뢰도 95.27%를 반환합니다."
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
      "MLflow",
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
        "src": "img/cnn-mlops/01-insomnia-train.jpg",
        "caption": {
          "en": "Insomnia: POST /train with JSON hyperparameters (learning_rate, max_epochs, batch_size) returns the MLflow run_id and artifact_path.",
          "ko": "Insomnia: JSON 하이퍼파라미터(learning_rate, max_epochs, batch_size)로 POST /train을 호출해 MLflow run_id와 artifact_path를 받은 화면."
        },
        "thumb": "img/cnn-mlops/thumbs/01-insomnia-train.jpg"
      },
      {
        "src": "img/cnn-mlops/02-insomnia-register.jpg",
        "caption": {
          "en": "Insomnia: POST /register with the training run_id registers the ONNX model as mnist_model and returns registered_run_id and registered_artifact_path.",
          "ko": "Insomnia: 학습 run_id로 POST /register를 호출해 ONNX 모델을 mnist_model로 등록하고 registered_run_id와 registered_artifact_path를 받은 화면."
        },
        "thumb": "img/cnn-mlops/thumbs/02-insomnia-register.jpg"
      },
      {
        "src": "img/cnn-mlops/03-insomnia-predict.jpg",
        "caption": {
          "en": "Insomnia: POST /predict with img_7.jpg (a handwritten 0) returns label \"0\" with 95.27% confidence.",
          "ko": "Insomnia: 손글씨 0인 img_7.jpg로 POST /predict를 호출해 label \"0\", 신뢰도 95.27%를 받은 화면."
        },
        "thumb": "img/cnn-mlops/thumbs/03-insomnia-predict.jpg"
      },
      {
        "src": "img/cnn-mlops/06-mnist-sample-input.jpg",
        "caption": {
          "en": "Normalized 28×28 MNIST sample (digit 2) from the repository's samples folder.",
          "ko": "저장소 samples 폴더의 정규화된 28×28 MNIST 샘플(숫자 2)."
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
    ],
    "cardTagline": {
      "en": "A FastAPI service that trains an MNIST model, registers it in MLflow as ONNX and serves it.",
      "ko": "MNIST 모델을 학습하고 ONNX로 MLflow에 등록해 서빙하는 FastAPI 서비스."
    }
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
      "en": "Team of 3 (A-EYE, ChaeJiJoo Studio)",
      "ko": "3인 팀 (A-EYE, ChaeJiJoo Studio)"
    },
    "role": {
      "en": "Team Lead",
      "ko": "팀장"
    },
    "tagline": {
      "en": "A YOLOv5-powered Android app and API that recognizes medicine packaging from a photo and returns its name, dosage and efficacy for blind and low-vision users.",
      "ko": "사진 한 장으로 의약품 패키지를 인식해 약품명·용법·효능을 알려주는, 시각 장애인과 저시력자를 위한 YOLOv5 기반 Android 앱 및 API."
    },
    "summary": {
      "en": "A-EYE (AI + Additional Eye) is a medicine-information service for people who cannot read the dosage and usage text printed on medicine packaging. A YOLOv5 detector trained on Roboflow-annotated package images identifies the product, and a Dockerized FastAPI server returns its name, usage/dosage, efficacy and bounding box as JSON to a mobile client. The model reached 0.985 mAP@0.5 across three product classes, and the app was released on Google Play alongside an API documented for developers.",
      "ko": "A-EYE(AI + Additional Eye)는 의약품 포장에 인쇄된 복용 방법·용량 정보를 읽기 어려운 사용자를 위한 의약품 정보 서비스입니다. Roboflow로 라벨링한 패키지 이미지로 학습한 YOLOv5 모델이 제품을 인식하고, Docker로 배포한 FastAPI 서버가 약품명·용법 및 용량·효능·bounding box를 JSON으로 모바일 앱에 반환합니다. 3개 제품 클래스 전체에서 mAP@0.5 0.985를 기록했고, 앱을 Google Play에 출시했으며 개발자용 API 문서도 함께 제공했습니다."
    },
    "problem": {
      "en": "Medicine packaging often carries no braille, and the team judged the rules on braille labeling of medicines insufficient. When people cannot read or recognize the dosage and usage printed on a medicine container, the risk of accidentally taking the wrong medicine rises sharply. This affects blind users as well as people with presbyopia or amblyopia.",
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
          "en": "Framed the problem with a why–how–what pitch and a business model canvas: target users (blind, presbyopic and low-vision people), key metrics (mAP, F1), an Android app-store channel and a learning loop driven by user feedback. Named the service A-EYE, short for AI + Additional Eye. Early plans considered OCR with TTS; the delivered pipeline centers on package detection.",
          "ko": "why–how–what 흐름의 피치와 비즈니스 모델 캔버스로 문제를 정의하고, 대상 사용자(시각 장애인, 노안·약시가 있는 사람), 핵심 지표(mAP, F1), Android 앱스토어 채널, 사용자 피드백 기반 학습 루프를 정리했습니다. 서비스 이름은 AI와 Additional Eye를 합쳐 A-EYE로 지었습니다. 초기에는 OCR과 TTS를 결합하는 방식도 검토했지만, 최종 파이프라인은 패키지 검출 중심으로 구성했습니다."
        }
      },
      {
        "title": {
          "en": "Data collection & annotation",
          "ko": "데이터 수집 및 라벨링"
        },
        "body": {
          "en": "Crawled medicine-package images and built bounding-box annotations in Roboflow (777 images in the project dataset), then split the data into train/validation/test at 8:1:1.",
          "ko": "의약품 패키지 이미지를 크롤링하고 Roboflow로 bounding box를 라벨링했습니다(프로젝트 데이터셋 777장). 데이터는 학습·검증·테스트용으로 8:1:1 비율로 분할했습니다."
        }
      },
      {
        "title": {
          "en": "YOLOv5 training & evaluation",
          "ko": "YOLOv5 학습 및 평가"
        },
        "body": {
          "en": "Trained a one-stage YOLOv5 detector for three products (Tylenol, Easyn6 and Hwalmyungsu) and evaluated it on the test split with mAP, precision/recall, F1-confidence curves and a confusion matrix.",
          "ko": "타이레놀, 이지엔6, 활명수 3개 제품을 검출하는 one-stage YOLOv5 모델을 학습하고, 테스트셋에서 mAP, precision/recall, F1-confidence 곡선, 혼동 행렬(confusion matrix)로 평가했습니다."
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
        "ko": "신뢰도 임계값(confidence threshold) 0.560에서 최고 F1 0.96을 기록했습니다."
      },
      {
        "en": "Normalized confusion-matrix scores of 0.93 (Tylenol), 0.94 (Easyn6) and 1.00 (Hwalmyungsu).",
        "ko": "정규화 혼동 행렬에서 타이레놀 0.93, 이지엔6 0.94, 활명수 1.00을 기록했습니다."
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
      {
        "id": "tUa_03D01fY",
        "vertical": true,
        "caption": {
          "en": "V2.0 – camera screen with retake prompt",
          "ko": "V2.0 – 재촬영 안내 카메라 화면"
        }
      },
      {
        "id": "O50GQRBaCB0",
        "vertical": true,
        "caption": {
          "en": "V1.0 – Hwalmyungsu",
          "ko": "V1.0 – 활명수"
        }
      },
      {
        "id": "r_Q5QkrsvRQ",
        "vertical": true,
        "caption": {
          "en": "V1.0 – Easyn6 and Tylenol",
          "ko": "V1.0 – 이지엔6·타이레놀"
        }
      }
    ],
    "cover": "img/medicine-guidance/cover.jpg",
    "images": [
      {
        "src": "img/medicine-guidance/01-yolov5-predictions.jpg",
        "caption": {
          "en": "Sample YOLOv5 detections: Tylenol, Easyn6 ('easyn') and Hwalmyungsu ('su') packages boxed with confidence scores.",
          "ko": "YOLOv5 검출 예시: 신뢰도와 함께 박스로 표시된 타이레놀, 이지엔6(easyn), 활명수(su) 패키지."
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
          "ko": "서비스 구조: 모바일 클라이언트와 로컬 서버의 Docker 기반 Back-End/AI 서버(Python, FastAPI, JSON, YOLOv5) 간 요청·응답 흐름."
        },
        "thumb": "img/medicine-guidance/thumbs/03-service-architecture.jpg"
      },
      {
        "src": "img/medicine-guidance/04-api-response.jpg",
        "caption": {
          "en": "Developer API: POST a JPG to /upload-image and receive JSON with category, product title, usage, efficacy and bounding box (x, y, w, h).",
          "ko": "개발자용 API 안내: /upload-image에 JPG를 POST하면 반환되는 JSON(category, 약품명, 용법, 효능, bounding box x·y·w·h)."
        },
        "thumb": "img/medicine-guidance/thumbs/04-api-response.jpg"
      },
      {
        "src": "img/medicine-guidance/05-pr-curve.jpg",
        "caption": {
          "en": "Precision–recall curve: 0.985 mAP@0.5 over all classes (Tylenol 0.972, Easyn6 0.988, Hwalmyungsu 0.995).",
          "ko": "Precision–recall 곡선: 전체 클래스 mAP@0.5 0.985 (타이레놀 0.972, 이지엔6 0.988, 활명수 0.995)."
        },
        "thumb": "img/medicine-guidance/thumbs/05-pr-curve.jpg"
      },
      {
        "src": "img/medicine-guidance/06-confusion-matrix.jpg",
        "caption": {
          "en": "Normalized confusion matrix for the three product classes and background (Tylenol 0.93, Easyn6 0.94, Hwalmyungsu 1.00).",
          "ko": "3개 제품 클래스와 배경(background)에 대한 정규화 혼동 행렬(타이레놀 0.93, 이지엔6 0.94, 활명수 1.00)."
        },
        "thumb": "img/medicine-guidance/thumbs/06-confusion-matrix.jpg"
      }
    ],
    "cardTagline": {
      "en": "A YOLOv5 app and API that recognizes medicine packages and returns name, dosage and efficacy.",
      "ko": "사진 한 장으로 의약품을 인식해 약품명·용법·효능을 알려주는 YOLOv5 기반 앱과 API."
    }
  },
  {
    "slug": "wsi-3d-registration",
    "year": "2023",
    "period": {
      "en": "2023 · M.S. research (follow-up manuscript in preparation)",
      "ko": "2023 · 석사 연구 (후속 논문 준비 중)"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Medical Imaging",
      "ko": "AI · 의료 영상"
    },
    "title": {
      "en": "3D WSI Registration via Feature Matching",
      "ko": "Feature Matching 기반 3D 병리 영상(WSI) 정합"
    },
    "team": {
      "en": "AIaaS Lab, Kwangwoon University",
      "ko": "광운대학교 AIaaS 연구실"
    },
    "role": {
      "en": "First author · pipeline design and implementation",
      "ko": "제1저자 · 파이프라인 설계 및 구현"
    },
    "tagline": {
      "en": "Aligns serial whole-slide images (WSIs) of prostate tissue with deep feature matching and a closed-form rigid transform, then stacks them into a 3D volume.",
      "ko": "전립선 조직의 연속 Whole Slide Image(WSI)를 딥러닝 feature matching과 closed-form rigid 변환으로 정렬하고, 이를 쌓아 3D로 재구성합니다."
    },
    "summary": {
      "en": "WSIs are 2D, so reading a lesion's 3D structure means mentally stacking consecutive slides. This project builds a registration pipeline that matches features between adjacent slides, estimates the rotation and translation in closed form, and stacks the aligned slides into a 3D volume. It compares classical keypoint methods (SIFT, ORB, BRIEF) with learned, attention-based matchers (LoFTR, LightGlue, GlueStick); a follow-up manuscript adds multi-scale (pyramid) matching to make the correspondences denser.",
      "ko": "WSI는 2D 영상이라 병변의 3D 구조를 파악하려면 연속 슬라이드를 머릿속으로 쌓아야 합니다. 이 프로젝트는 인접 슬라이드 사이의 특징점을 매칭하고, 회전·이동을 closed-form으로 추정한 뒤, 정렬된 슬라이드를 쌓아 3D 볼륨으로 만드는 정합 파이프라인을 구축했습니다. 고전적 keypoint 기법(SIFT, ORB, BRIEF)과 학습 기반 attention matcher(LoFTR, LightGlue, GlueStick)를 비교했으며, 후속 논문 원고에서는 multi-scale(pyramid) 매칭으로 대응점을 더 조밀하게 만들었습니다."
    },
    "problem": {
      "en": "Slicing tissue introduces missing parts, tears, deformation, rotation and translation between serial sections, and pathologists often align them by hand. Keypoint methods such as SIFT and ORB are unreliable on WSIs: high-frequency detail sits mostly on tissue boundaries and nuclei, and repetitive textures and staining differences produce unstable matches.",
      "ko": "조직을 절편하는 과정에서 연속 슬라이드 사이에 결손, 찢어짐, 변형, 회전, 이동이 생기며, 병리 전문의가 이를 수작업으로 정렬하는 경우가 많습니다. SIFT·ORB 같은 keypoint 기법은 WSI에서 불안정합니다. 고주파 정보가 주로 조직 경계와 핵 주변에 몰려 있고, 반복적인 텍스처와 염색 차이 때문에 매칭이 흔들리기 때문입니다."
    },
    "solution": {
      "en": "Each slide pair is matched with a learned matcher; in the follow-up work the pair is also resized to several scales (e.g. 1/3, 1/5, 1/7), matched at every scale, and the correspondences are rescaled to the original resolution and merged. A rigid transform (R, t) is then solved in closed form by SVD (orthogonal Procrustes), the image is rotated about its centre on a padded canvas so no tissue is clipped, and the aligned slides are stacked along z.",
      "ko": "각 슬라이드 쌍을 학습 기반 matcher로 매칭합니다. 후속 연구에서는 쌍을 여러 해상도(예: 1/3, 1/5, 1/7)로 줄여 해상도마다 매칭하고, 대응점을 원본 해상도로 리스케일링해 합쳤습니다. 이후 SVD(orthogonal Procrustes)로 rigid 변환(R, t)을 closed-form으로 구하고, 조직이 잘리지 않도록 padding한 canvas에서 이미지 중심 기준으로 회전시킨 뒤, 정렬된 슬라이드를 z축으로 쌓습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Frequency analysis",
          "ko": "주파수 분석"
        },
        "body": {
          "en": "Gaussian low-/high-pass filtering and FFT spectra over increasing kernel sizes showed that high-frequency detail is concentrated along tissue boundaries and nuclei; the manuscript argues this is why keypoint detectors become unstable on WSIs.",
          "ko": "Gaussian 커널 크기를 키워 가며 low/high-pass 필터링과 FFT 스펙트럼을 분석해, 고주파 정보가 조직 경계와 핵 주변에 집중되어 있음을 확인했습니다. 논문 원고는 이를 WSI에서 keypoint 검출이 불안정한 이유로 설명합니다."
        }
      },
      {
        "title": {
          "en": "Modular matching pipeline",
          "ko": "모듈형 매칭 파이프라인"
        },
        "body": {
          "en": "Built a pipeline with swappable extractors, descriptors, matchers and a transformation step: SIFT, ORB and BRIEF with brute-force/FLANN matching, and LoFTR (via Kornia), LightGlue and GlueStick as learned matchers.",
          "ko": "추출기·디스크립터·matcher·변환 단계를 교체할 수 있는 파이프라인을 만들었습니다. SIFT, ORB, BRIEF는 Brute-force/FLANN 매칭으로, LoFTR(Kornia), LightGlue, GlueStick은 학습 기반 matcher로 연결했습니다."
        }
      },
      {
        "title": {
          "en": "Multi-scale matching",
          "ko": "Multi-scale 매칭"
        },
        "body": {
          "en": "Matched each pair at several resolutions and merged the rescaled correspondences, so features missed at one scale are picked up at another (follow-up manuscript; the public repository runs a single scale).",
          "ko": "슬라이드 쌍을 여러 해상도에서 매칭하고 리스케일링한 대응점을 합쳐, 한 해상도에서 놓친 특징을 다른 해상도에서 보완했습니다(후속 논문 원고 기준이며, 공개 저장소는 단일 해상도로 동작합니다)."
        }
      },
      {
        "title": {
          "en": "Closed-form rigid alignment",
          "ko": "Closed-form rigid 정렬"
        },
        "body": {
          "en": "Solved R and t in closed form by SVD on the centred point sets, rotated about the image centre and padded the canvas before warping; the manuscript formalizes the reflection and rotation-centre corrections.",
          "ko": "중심화한 점 집합에 SVD를 적용해 R과 t를 closed-form으로 구하고, 이미지 중심 기준으로 회전하며 변환 전에 canvas를 padding했습니다. 논문 원고에서는 reflection 보정과 회전 중심 보정을 수식으로 정리했습니다."
        }
      },
      {
        "title": {
          "en": "Synthetic ground truth",
          "ko": "합성 Ground Truth"
        },
        "body": {
          "en": "Generated test pairs by rotating real slides by 30°, 45° and 60° and translating them, so the estimated R and t can be compared with the known transform.",
          "ko": "실제 슬라이드를 30°, 45°, 60° 회전하고 이동시켜 테스트 쌍을 만들어, 추정한 R·t를 알려진 변환과 비교할 수 있게 했습니다."
        }
      },
      {
        "title": {
          "en": "Evaluation & 3D stacking",
          "ko": "평가 및 3D 적층"
        },
        "body": {
          "en": "Scored alignment with SSIM, PSNR and rotation/translation error, and visualized the registered slides as a 3D stack.",
          "ko": "SSIM, PSNR, 회전·이동 오차로 정렬을 평가하고, 정합된 슬라이드를 3D로 쌓아 시각화했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Alignment raised SSIM and PSNR on all three adjacent WSI pairs tested, e.g. SSIM 0.572 → 0.611 and PSNR 31.60 → 32.35 dB.",
        "ko": "실험한 인접 WSI 3쌍 모두에서 정렬 후 SSIM과 PSNR이 올랐습니다(예: SSIM 0.572 → 0.611, PSNR 31.60 → 32.35 dB)."
      },
      {
        "en": "On SSIM, every learned matcher beat every keypoint method, and the keypoint methods all scored below the unaligned baseline. On PSNR only the pyramid variants beat that baseline. Pyramid LightGlue scored highest, narrowly ahead of pyramid LoFTR on SSIM (0.6705 vs 0.6700) and with the top PSNR (33.71 dB).",
        "ko": "SSIM에서는 모든 학습 기반 matcher가 모든 keypoint 기법보다 높았고, keypoint 기법은 모두 정렬하지 않은 baseline보다 낮았습니다. PSNR에서는 pyramid 변형만 baseline을 넘었습니다. pyramid LightGlue가 가장 높았으며, SSIM은 pyramid LoFTR와 근소한 차이(0.6705 vs 0.6700), PSNR은 33.71 dB로 최고였습니다."
      },
      {
        "en": "On synthetic 30° rotations, LightGlue and GlueStick kept the rotation error under 1°, while the keypoint methods recovered almost none of the rotation (about 30° error; ORB+FLANN missed by 172°). At 45° and 60°, GlueStick kept the lowest rotation error (about 3.7–3.8° and 6.2°) but its translation error grew large at 60°; LoFTR already drifted at 45° (27.5°) and LightGlue broke down at 60° (45.1°).",
        "ko": "합성 30° 회전에서 LightGlue와 GlueStick은 회전 오차를 1° 미만으로 유지했지만, keypoint 기법은 회전을 거의 복원하지 못했습니다(오차 약 30°, ORB+FLANN은 172°). 45°·60°에서는 GlueStick의 회전 오차가 가장 낮았지만(약 3.7–3.8°, 6.2°) 60°에서 이동 오차가 크게 늘었습니다. LoFTR는 45°에서 이미 크게 빗나갔고(27.5°), LightGlue는 60°에서 무너졌습니다(45.1°)."
      }
    ],
    "tables": [
      {
        "title": {
          "en": "Matcher comparison",
          "ko": "Matcher 비교"
        },
        "note": {
          "en": "SSIM / PSNR from Table 2 of the follow-up manuscript (in preparation), reported 'after data augmentation'. 'No feature matching' is the unaligned baseline; '(pyramid)' marks the manuscript's SPA variants.",
          "ko": "후속 논문 원고(준비 중) Table 2의 SSIM / PSNR('after data augmentation' 기준)입니다. 'Feature matching 없음'은 정렬하지 않은 baseline이며, '(pyramid)'는 원고의 SPA 변형입니다."
        },
        "columns": [
          {
            "en": "Method",
            "ko": "기법"
          },
          {
            "en": "SSIM",
            "ko": "SSIM"
          },
          {
            "en": "PSNR (dB)",
            "ko": "PSNR (dB)"
          }
        ],
        "best": {
          "1": 11,
          "2": 11
        },
        "rows": [
          {
            "cells": [
              {
                "en": "No feature matching",
                "ko": "Feature matching 없음"
              },
              "0.6370",
              "33.06"
            ]
          },
          {
            "cells": [
              "ORB + BFMatcher",
              "0.6037",
              "31.90"
            ]
          },
          {
            "cells": [
              "ORB + FLANN",
              "0.6162",
              "32.53"
            ]
          },
          {
            "cells": [
              "BRIEF + BFMatcher",
              "0.6297",
              "32.81"
            ]
          },
          {
            "cells": [
              "BRIEF + FLANN",
              "0.6297",
              "32.81"
            ]
          },
          {
            "cells": [
              "SIFT",
              "0.6242",
              "32.76"
            ]
          },
          {
            "cells": [
              "GlueStick",
              "0.6490",
              "32.71"
            ]
          },
          {
            "cells": [
              "GlueStick (pyramid)",
              "0.6496",
              "33.59"
            ],
            "highlight": true
          },
          {
            "cells": [
              "LoFTR",
              "0.6632",
              "32.89"
            ]
          },
          {
            "cells": [
              "LoFTR (pyramid)",
              "0.6700",
              "33.18"
            ],
            "highlight": true
          },
          {
            "cells": [
              "LightGlue",
              "0.6526",
              "32.98"
            ]
          },
          {
            "cells": [
              "LightGlue (pyramid)",
              "0.6705",
              "33.71"
            ],
            "highlight": true
          }
        ]
      }
    ],
    "publications": [
      {
        "en": "2D to 3D Pathological Image Registration Framework Using Deep Learning-based Feature Matching — KDMS Fall Conference, Nov 2023",
        "ko": "딥러닝에 기반 된 이미지 특징점 매칭 방법을 이용한 2D to 3D 병리 이미지 정합 프레임워크 — 한국데이터마이닝학회 추계학술대회, 2023.11"
      },
      {
        "en": "Detector-free Feature Matching-Based Robust 3D Reconstruction of Vertical and Horizontal Histopathology for Prostate Cancer Mapping — Korean Society of Pathology Fall Conference, Oct 2023",
        "ko": "Detector-free Feature Matching-Based Robust 3D Reconstruction of Vertical and Horizontal Histopathology for Prostate Cancer Mapping — 대한병리학회 추계학술대회, 2023.10"
      },
      {
        "en": "3D Whole Slide Image (WSI) Registration via Pairwise Feature Matching for Prostate Cancer Detection and Diagnosis — KDMS Summer Conference, Jun 2023",
        "ko": "3D Whole Slide Image (WSI) Registration via Pairwise Feature Matching for Prostate Cancer Detection and Diagnosis — 한국데이터마이닝학회 하계학술대회, 2023.06"
      },
      {
        "en": "Patent: 3D image registration apparatus and method for biological tissue slide images",
        "ko": "특허: 생체 조직 슬라이드 이미지의 3차원 영상 등록 장치 및 방법"
      },
      {
        "en": "M.S. thesis: Deep Learning-Based Digital Pathology: Feature Matching for WSI Registration Problem and Active Pseudo Label Learning for Small Data Problem (Feb 2024)",
        "ko": "석사 학위논문: Deep Learning-Based Digital Pathology: Feature Matching for WSI Registration Problem and Active Pseudo Label Learning for Small Data Problem (2024.02)"
      }
    ],
    "contributions": [
      {
        "en": "First author of the conference papers; designed the registration pipeline and its evaluation.",
        "ko": "학회 논문 제1저자로 정합 파이프라인과 평가 방법을 설계했습니다."
      },
      {
        "en": "Implemented the matching and transformation modules, synthetic ground-truth generation and SSIM/PSNR scoring in the public Feature-Matching-Pipeline repository.",
        "ko": "공개 저장소 Feature-Matching-Pipeline에 매칭·변환 모듈, 합성 Ground Truth 생성, SSIM/PSNR 평가 코드를 구현했습니다."
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "LoFTR (Kornia)",
      "LightGlue",
      "GlueStick",
      "OpenCV",
      "SIFT / ORB / BRIEF",
      "NumPy / SciPy (SVD)",
      "scikit-image (SSIM)",
      "Docker"
    ],
    "topics": [
      "Image Registration",
      "Feature Matching",
      "Digital Pathology",
      "3D Reconstruction",
      "Whole Slide Image"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/Feature-Matching-Pipeline"
      }
    ],
    "cover": "img/wsi-3d-registration/cover.jpg",
    "images": [
      {
        "src": "img/wsi-3d-registration/01-pipeline-overview.png",
        "thumb": "img/wsi-3d-registration/thumbs/01-pipeline-overview.jpg",
        "caption": {
          "en": "Overview of the 3D WSI registration pipeline: transformer-based feature matching on pyramid inputs, feature aggregation (resolution sync, coordinate normalization), a rigid transformation by SVD (R | t), and applying R | t to the target WSI to align the stack.",
          "ko": "3D WSI 정합 파이프라인 개요: pyramid 입력에 대한 Transformer 기반 feature matching, feature aggregation(해상도 동기화, 좌표 정규화), SVD로 구한 rigid 변환(R | t), 그리고 target WSI에 R | t를 적용해 스택을 정렬하는 과정입니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/02-hpf-analysis.png",
        "thumb": "img/wsi-3d-registration/thumbs/02-hpf-analysis.jpg",
        "caption": {
          "en": "High-pass filtering (HPF) with Gaussian kernels of increasing size, to check how well fine structural detail is preserved. The bottom two rows show the residual high-frequency (HF) components (original minus blurred) and their spatial heatmaps: HF signals are not uniform but concentrate along tissue boundaries and internal microstructures, which are prone to deformation and loss across slices.",
          "ko": "Gaussian 커널 크기를 바꿔 가며 high-pass filtering(HPF)을 적용해 미세 구조가 얼마나 보존되는지 확인했습니다. 아래 두 행은 원본에서 블러 영상을 뺀 잔차 고주파(HF) 성분과 그 공간 히트맵입니다. HF 신호는 고르게 분포하지 않고, 슬라이드 사이에서 변형·손실되기 쉬운 조직 경계와 내부 미세 구조에 집중되어 있습니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/03-fft-surface.png",
        "thumb": "img/wsi-3d-registration/thumbs/03-fft-surface.jpg",
        "caption": {
          "en": "3D FFT surface plots of pathology images blurred with Gaussian kernels of increasing size. As the kernel grows, the high-frequency peaks fade quickly, fine structural detail is lost, and low-frequency (LF) components dominate the spectrum.",
          "ko": "Gaussian 커널 크기를 키워 블러 처리한 병리 영상의 3D FFT surface plot입니다. 커널이 커질수록 고주파 피크가 빠르게 약해져 미세 구조 정보가 사라지고, 스펙트럼에서 저주파(LF) 성분이 지배적이 됩니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/04-multiscale-matching.png",
        "thumb": "img/wsi-3d-registration/thumbs/04-multiscale-matching.jpg",
        "caption": {
          "en": "Adaptive multi-scale feature matching: each pair of serial WSIs is matched at several pyramid levels (original, 1/n, 1/k), and the correspondences are rescaled to the original resolution and aggregated into one set.",
          "ko": "Adaptive multi-scale feature matching: 연속 WSI 쌍을 여러 pyramid 해상도(원본, 1/n, 1/k)에서 매칭하고, 대응점을 원본 해상도로 리스케일링해 하나의 집합으로 통합합니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/05-rigid-transform.png",
        "thumb": "img/wsi-3d-registration/thumbs/05-rigid-transform.jpg",
        "caption": {
          "en": "Rigid transformation module: starting from R = I, t = 0, the rotation and translation that minimize the alignment error are estimated in closed form and applied to realign adjacent slices.",
          "ko": "Rigid 변환 모듈: R = I, t = 0에서 시작해 정렬 오차를 최소화하는 회전과 이동을 closed-form으로 추정하고, 이를 적용해 인접 슬라이드를 다시 정렬합니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/06-matched-points-2d.png",
        "thumb": "img/wsi-3d-registration/thumbs/06-matched-points-2d.jpg",
        "caption": {
          "en": "Matched points between adjacent slides: target (red), source (black), and the target after the estimated rigid transform (blue).",
          "ko": "인접 슬라이드의 매칭점: target(빨강), source(검정), 추정한 rigid 변환을 적용한 target(파랑)."
        }
      },
      {
        "src": "img/wsi-3d-registration/07-rigid-steps.png",
        "thumb": "img/wsi-3d-registration/thumbs/07-rigid-steps.jpg",
        "caption": {
          "en": "The rigid transform step by step: centred source points (red), after rotation R (green), after R and t (blue), next to the target points (black).",
          "ko": "Rigid 변환 단계별 시각화: 중심화한 source 점(빨강), 회전 R 적용 후(초록), R과 t 적용 후(파랑), target 점(검정)."
        }
      },
      {
        "src": "img/wsi-3d-registration/08-aligned-points-3d.png",
        "thumb": "img/wsi-3d-registration/thumbs/08-aligned-points-3d.jpg",
        "caption": {
          "en": "Rigidly aligned feature points in 3D: green lines connect matched points on adjacent slides.",
          "ko": "Rigid 정렬된 특징점의 3D 시각화: 초록 선이 인접 슬라이드의 매칭점을 잇습니다."
        }
      },
      {
        "src": "img/wsi-3d-registration/09-loftr-result.jpg",
        "thumb": "img/wsi-3d-registration/thumbs/09-loftr-result.jpg",
        "caption": {
          "en": "LoFTR (learned, detector-free) on a serial pair: the moving slice (middle) is rotated and translated onto the fixed slice (left). Left to right: fixed · moving · moving after alignment.",
          "ko": "연속 슬라이드 쌍에 LoFTR(학습 기반, detector-free)를 적용한 결과: 움직이는 슬라이드(가운데)가 회전·이동되어 고정 슬라이드(왼쪽)에 정렬됩니다. 왼쪽부터 고정 · 이동 대상 · 정렬 결과."
        }
      },
      {
        "src": "img/wsi-3d-registration/10-orb-flann-result.jpg",
        "thumb": "img/wsi-3d-registration/thumbs/10-orb-flann-result.jpg",
        "caption": {
          "en": "ORB + FLANN on the same pair: the estimated transform turns the moving slice roughly 90° away from the fixed slice. Left to right: fixed · moving · moving after alignment.",
          "ko": "같은 쌍에 ORB + FLANN을 적용한 결과: 추정된 변환이 움직이는 슬라이드를 고정 슬라이드와 약 90° 어긋나게 돌려 놓습니다. 왼쪽부터 고정 · 이동 대상 · 정렬 결과."
        }
      }
    ],
    "cardTagline": {
      "en": "Aligns serial pathology slides with deep feature matching and stacks them into 3D.",
      "ko": "딥러닝 feature matching으로 연속 병리 슬라이드를 정렬해 3D로 쌓습니다."
    }
  },
  {
    "slug": "active-learning-pseudo-labeling",
    "year": "2023",
    "period": {
      "en": "Sep 2023 – Mar 2024 · M.S. research",
      "ko": "2023.09 – 2024.03 · 석사 연구"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Active Learning",
      "ko": "AI · 액티브 러닝"
    },
    "title": {
      "en": "Active Learning with Pseudo Labeling for Robust Object Detection",
      "ko": "강건한 객체탐지 구축을 위해 Pseudo Labeling을 활용한 Active Learning"
    },
    "team": {
      "en": "AIaaS Lab, Kwangwoon University",
      "ko": "광운대학교 AIaaS 연구실"
    },
    "role": {
      "en": "First author · method design and implementation",
      "ko": "제1저자 · 방법 설계 및 구현"
    },
    "tagline": {
      "en": "An active-learning strategy for object detection that combines pseudo-labeling, a flip-consistency score and a learned loss predictor to choose which images are worth a human label.",
      "ko": "Pseudo-labeling, 좌우 반전 일관성 점수, 학습된 손실 예측기를 결합해 사람이 라벨링할 가치가 있는 이미지를 고르는 객체 탐지용 액티브 러닝 전략."
    },
    "summary": {
      "en": "Labeling object-detection data is expensive, especially in fields such as medical imaging that need expert annotators. Active learning asks people to label only the images that help the model most. This work uses an SSD300 detector (VGG16 backbone) and combines semi-supervised pseudo-labeling and a consistency score, following AL-SSL (Elezi et al., CVPR 2022), with a loss prediction module (Yoo & Kweon, CVPR 2019) that estimates each image's training loss, so the selection also covers objects of low-confidence or poorly learned classes.",
      "ko": "객체 탐지 데이터 라벨링은 비용이 크며, 의료 영상처럼 전문가가 필요한 분야에서는 더욱 그렇습니다. 액티브 러닝은 모델에 가장 도움이 되는 이미지만 사람이 라벨링하도록 합니다. 이 연구는 SSD300 검출기(VGG16 backbone)를 기반으로, AL-SSL(Elezi et al., CVPR 2022)의 준지도학습 pseudo-labeling·일관성 점수와 각 이미지의 학습 손실을 예측하는 loss prediction module(Yoo & Kweon, CVPR 2019)을 결합해, 신뢰도가 낮거나 학습이 덜 된 클래스의 객체까지 선택에 반영합니다."
    },
    "problem": {
      "en": "Typical active learning scores every class with the same confidence. When the dataset is imbalanced or classes behave differently, some classes are under-sampled, which leads to low accuracy or a distribution shift for those classes. Pseudo-labeling reduces this class bias, but early in training the many uncertain images make labeling inefficient.",
      "ko": "일반적인 액티브 러닝은 모든 클래스를 같은 confidence로 평가합니다. 데이터셋이 클래스 간에 불균형하거나 클래스마다 양상이 다르면 일부 클래스가 덜 선택되어, 해당 클래스의 정확도가 낮아지거나 distribution shift가 생길 수 있습니다. Pseudo-labeling은 이런 클래스 편향을 줄이지만, 학습 초기에는 불확실한 데이터가 많아 라벨링 효율이 떨어질 수 있습니다."
    },
    "solution": {
      "en": "An unlabeled image and its horizontally flipped copy go through the same detector; disagreement between the two predictions (class distributions and boxes) gives a consistency score, and confident predictions become pseudo-labels. A loss prediction module attached to three SSD feature maps learns to predict each image's loss. Candidates chosen by entropy and inconsistency are re-ranked by predicted loss, and the top-K are sent for human annotation.",
      "ko": "라벨이 없는 이미지와 좌우 반전한 이미지를 같은 검출기에 넣어, 두 예측(클래스 분포와 박스)의 불일치로 일관성 점수를 구하고, 신뢰도가 높은 예측은 pseudo-label로 사용합니다. SSD의 세 feature map에 붙인 loss prediction module이 각 이미지의 손실을 예측하도록 학습합니다. Entropy와 불일치로 고른 후보를 예측 손실로 다시 정렬해, 상위 K개를 사람이 라벨링합니다."
    },
    "equations": [
      {
        "label": {
          "en": "Consistency loss between an image and its flipped copy",
          "ko": "원본과 반전 이미지 사이의 consistency loss"
        },
        "tex": "\\mathcal{L}_{con} = \\mathbb{E}\\big[\\mathcal{L}_{con_c}(c', \\hat{c})\\big] + \\mathbb{E}\\big[\\mathcal{L}_{con_L}(b', \\hat{b})\\big]"
      },
      {
        "label": {
          "en": "Class consistency: symmetric KL divergence",
          "ko": "클래스 일관성: 대칭 KL divergence"
        },
        "tex": "\\mathcal{L}_{con_c}(c'_i, \\hat{c}_i) = \\tfrac{1}{2}\\big[\\mathrm{KL}(c'_i \\,\\|\\, \\hat{c}_i) + \\mathrm{KL}(\\hat{c}_i \\,\\|\\, c'_i)\\big]"
      },
      {
        "label": {
          "en": "Localization consistency (x-centre negated for the flip)",
          "ko": "위치 일관성 (반전 이미지는 x 중심 좌표를 부호 반전)"
        },
        "tex": "\\mathcal{L}_{con_L}(b'_i, \\hat{b}_i) = \\tfrac{1}{4}\\big(\\lVert x'_{0,i} - (-\\hat{x}_{0,i})\\rVert^2 + \\lVert y'_{0,i} - \\hat{y}_{0,i}\\rVert^2 + \\lVert w'_i - \\hat{w}_i\\rVert^2 + \\lVert h'_i - \\hat{h}_i\\rVert^2\\big)"
      },
      {
        "label": {
          "en": "Total loss with the loss-prediction term",
          "ko": "손실 예측 항을 포함한 전체 손실"
        },
        "tex": "\\mathcal{L}_{total} = \\mathcal{L}_{con}(\\hat{y}, y) + \\lambda \\cdot \\mathcal{L}_{loss}(\\hat{l}, l)"
      }
    ],
    "approach": [
      {
        "title": {
          "en": "Code base",
          "ko": "코드 기반"
        },
        "body": {
          "en": "Started from the AL-SSL and Learning Loss for Active Learning code bases with an SSD300 detector on a VGG16 backbone, and logged every run to Weights & Biases.",
          "ko": "AL-SSL과 Learning Loss for Active Learning 코드를 기반으로 VGG16 backbone의 SSD300 검출기를 사용했고, 모든 실험을 Weights & Biases로 기록했습니다."
        }
      },
      {
        "title": {
          "en": "Flip consistency",
          "ko": "반전 일관성"
        },
        "body": {
          "en": "For each unlabeled image and its horizontal flip, matched detections are compared with a symmetric KL divergence for the class distributions and a squared difference of box centre and size, with the x-centre negated.",
          "ko": "라벨이 없는 이미지와 좌우 반전 이미지의 매칭된 검출 결과를, 클래스 분포는 대칭 KL divergence로, 박스는 x 중심을 부호 반전한 뒤 중심·크기의 제곱 차이로 비교합니다."
        }
      },
      {
        "title": {
          "en": "Pseudo-labels",
          "ko": "Pseudo-label"
        },
        "body": {
          "en": "Detections above a confidence threshold (0.75 for COCO) are used as pseudo-labels in training.",
          "ko": "신뢰도 임계값(COCO 기준 0.75)을 넘는 검출 결과는 학습에서 pseudo-label로 사용합니다."
        }
      },
      {
        "title": {
          "en": "Loss prediction module",
          "ko": "Loss prediction module"
        },
        "body": {
          "en": "Added a module that taps Conv4_3, FC7 and the last extra layer of SSD, reduces each with GAP → FC(128) → ReLU, concatenates them and predicts the image's loss. It is trained against the actual loss with a margin ranking loss (λ = 1).",
          "ko": "SSD의 Conv4_3, FC7, 마지막 extra layer에서 특징을 받아 각각 GAP → FC(128) → ReLU로 줄이고, 이를 이어 붙여 이미지의 손실을 예측하는 모듈을 추가했습니다. 실제 손실과의 margin ranking loss로 학습합니다(λ = 1)."
        }
      },
      {
        "title": {
          "en": "Two-stage acquisition",
          "ko": "2단계 샘플 선택"
        },
        "body": {
          "en": "Each cycle keeps the 3,000 most uncertain unlabeled images by entropy, takes the 2,000 most inconsistent among them, and lets the loss prediction module pick the 1,000 with the highest predicted loss for human annotation.",
          "ko": "각 cycle마다 entropy가 높은 3,000장을 남기고, 그중 불일치가 큰 2,000장을 후보로 고른 뒤, loss prediction module이 예측 손실이 가장 큰 1,000장을 골라 사람이 라벨링합니다."
        }
      },
      {
        "title": {
          "en": "Training setup",
          "ko": "학습 설정"
        },
        "body": {
          "en": "Configured for COCO: 82,081 training images, 5,000 labeled at the start and 1,000 added in each of 5 cycles.",
          "ko": "COCO 기준으로 설정했습니다. 학습 이미지 82,081장 중 5,000장을 초기 라벨로 두고, 5번의 cycle마다 1,000장씩 추가합니다."
        }
      }
    ],
    "results": [
      {
        "en": "The model's performance improved as the active-learning iterations progressed, as shown by the training curves in the KIPS 2023 paper.",
        "ko": "KIPS 2023 논문의 학습 곡선에서, 액티브 러닝 반복이 진행될수록 모델 성능이 향상되는 것을 확인했습니다."
      },
      {
        "en": "Whether the method actually reduces the number of labels and iterations still needs to be verified; the planned next step was to compare sampling a different K% of data at each iteration.",
        "ko": "이 방법이 실제로 라벨 수와 반복 횟수를 줄이는지는 추가 검증이 필요하며, 다음 단계로 iteration마다 K%의 데이터를 다르게 샘플링해 비교하는 실험을 계획했습니다."
      }
    ],
    "contributions": [
      {
        "en": "First author of the KIPS 2023 paper; designed the combination of pseudo-labeling, flip consistency and loss prediction.",
        "ko": "KIPS 2023 논문 제1저자로, pseudo-labeling·반전 일관성·손실 예측의 결합 방식을 설계했습니다."
      },
      {
        "en": "Integrated the loss prediction module and the two-stage acquisition into the AL-SSL training loop, and added W&B logging and COCO evaluation (Oct 2023 – Mar 2024).",
        "ko": "AL-SSL 학습 루프에 loss prediction module과 2단계 샘플 선택을 통합하고, W&B 로깅과 COCO 평가 코드를 추가했습니다(2023.10 – 2024.03)."
      }
    ],
    "publications": [
      {
        "en": "Active Learning with Pseudo Labeling for Robust Object Detection — KIPS Annual Conference, Nov 2023",
        "ko": "강건한 객체탐지 구축을 위해 Pseudo Labeling을 활용한 Active Learning — 한국정보처리학회 추계학술발표대회, 2023.11"
      }
    ],
    "tech": [
      "PyTorch",
      "Python",
      "SSD300 (VGG16)",
      "AL-SSL",
      "Learning Loss for Active Learning",
      "Weights & Biases",
      "COCO",
      "pycocotools"
    ],
    "topics": [
      "Active Learning",
      "Semi-supervised Learning",
      "Pseudo-labeling",
      "Object Detection",
      "Uncertainty Estimation"
    ],
    "links": [
      {
        "type": "paper",
        "label": {
          "en": "Reference: AL-SSL (CVPR 2022)",
          "ko": "참고 논문: AL-SSL (CVPR 2022)"
        },
        "url": "https://arxiv.org/abs/2106.11921",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: Learning Loss for Active Learning (CVPR 2019)",
          "ko": "참고 논문: Learning Loss for Active Learning (CVPR 2019)"
        },
        "url": "https://arxiv.org/abs/1905.03677",
        "ref": true
      }
    ],
    "images": [
      {
        "src": "img/active-learning-pseudo-labeling/01-method-overview.png",
        "thumb": "img/active-learning-pseudo-labeling/thumbs/01-method-overview.jpg",
        "caption": {
          "en": "Method overview: labeled and unlabeled images (with horizontal flips) train an SSD300 detector that carries a loss prediction module. Each cycle, the top-K images by predicted loss go to human annotators, confident detections become pseudo-labels, and the rest stay unlabeled.",
          "ko": "방법 개요: 라벨 데이터와 라벨 없는 데이터(좌우 반전 포함)로 loss prediction module을 단 SSD300 검출기를 학습합니다. 매 cycle마다 예측 손실 상위 K장은 사람이 라벨링하고, 신뢰도가 높은 검출은 pseudo-label이 되며, 나머지는 라벨 없이 남습니다."
        }
      },
      {
        "src": "img/active-learning-pseudo-labeling/02-consistency-loss.png",
        "thumb": "img/active-learning-pseudo-labeling/thumbs/02-consistency-loss.jpg",
        "caption": {
          "en": "Consistency loss: an image and its horizontal flip go through the same SSD300. Matched predictions are compared with a symmetric KL divergence for classes and a squared box difference (x-centre negated), then weighted by a ramp-up schedule.",
          "ko": "Consistency loss: 원본 이미지와 좌우 반전 이미지를 같은 SSD300에 넣고, 매칭된 예측을 클래스는 대칭 KL divergence로, 박스는 x 중심을 부호 반전한 제곱 차이로 비교한 뒤 ramp-up 가중치를 곱합니다."
        }
      },
      {
        "src": "img/active-learning-pseudo-labeling/03-loss-prediction-module.png",
        "thumb": "img/active-learning-pseudo-labeling/thumbs/03-loss-prediction-module.jpg",
        "caption": {
          "en": "Loss prediction module on SSD300: Conv4_3, FC7 and Conv9_2 features each pass through GAP → FC(128) → ReLU, are concatenated and mapped to a predicted loss l̂, trained against the true loss with a ranking loss.",
          "ko": "SSD300에 붙인 loss prediction module: Conv4_3, FC7, Conv9_2 특징을 각각 GAP → FC(128) → ReLU로 줄인 뒤 이어 붙여 예측 손실 l̂을 출력하며, 실제 손실과의 ranking loss로 학습합니다."
        }
      },
      {
        "src": "img/active-learning-pseudo-labeling/04-two-stage-selection.png",
        "thumb": "img/active-learning-pseudo-labeling/thumbs/04-two-stage-selection.jpg",
        "caption": {
          "en": "Two-stage sample selection per cycle: entropy keeps 3,000 images, flip inconsistency narrows them to 2,000 candidates, and the loss prediction module sends the 1,000 with the highest predicted loss to human annotators.",
          "ko": "cycle마다 2단계로 샘플을 고릅니다: entropy로 3,000장을 남기고, 반전 불일치로 후보 2,000장을 고른 뒤, loss prediction module이 예측 손실이 가장 큰 1,000장을 사람에게 보냅니다."
        }
      }
    ],
    "cardTagline": {
      "en": "Active learning for detection: pseudo-labels, flip consistency and a loss predictor.",
      "ko": "Pseudo-label·반전 일관성·손실 예측을 결합한 객체 탐지 액티브 러닝."
    },
    "cover": "img/active-learning-pseudo-labeling/cover.jpg"
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
      "en": "AI · Object Detection",
      "ko": "AI · 객체 탐지"
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
      "ko": "YOLOv5로 산호초 수중 영상 속 왕관가시불가사리(COTS)를 탐지한 4인 팀 Kaggle 프로젝트, 2,026팀 중 353위."
    },
    "summary": {
      "en": "TensorFlow – Help Protect the Great Barrier Reef was a Kaggle code competition to detect coral-eating crown-of-thorns starfish (COTS) in underwater video. It was scored by F2 averaged over IoU thresholds from 0.3 to 0.8. The 4-person team Under The Sea built a YOLOv5 pipeline with sequence-aware stratified group k-fold splits, background-image mixing and recall-oriented tuning.",
      "ko": "TensorFlow – Help Protect the Great Barrier Reef는 수중 영상에서 산호를 먹는 왕관가시불가사리(crown-of-thorns starfish, COTS)를 탐지하는 Kaggle 코드 대회입니다. 평가 지표는 IoU 임계값 0.3~0.8에 걸쳐 평균한 F2 score입니다. 4인 팀 Under The Sea는 시퀀스 단위 stratified group k-fold 분할, 배경 이미지 혼합, recall 중심 튜닝을 적용한 YOLOv5 파이프라인을 구축했습니다."
    },
    "problem": {
      "en": "The F2 metric weights recall over precision, so a missed starfish costs more than a false alarm. Images are frames from continuous video sequences, so a random train/validation split leaks highly correlated frames and makes validation scores look better than they are. Fewer than 5,000 images were labeled, and after holding out validation folds only about 3,000–4,000 remained for training. Some starfish visible in consecutive frames were left unlabeled, and local validation diverged from the leaderboard.",
      "ko": "F2 지표는 precision보다 recall에 더 큰 가중치를 두므로, 불가사리를 놓치는 비용이 오탐보다 큽니다. 이미지는 연속된 영상 시퀀스의 프레임이므로 train/validation을 무작위로 나누면 상관관계가 높은 프레임이 양쪽에 섞여 validation 점수가 실제보다 높게 나옵니다. 라벨이 있는 이미지는 5,000장이 채 되지 않았고, validation fold를 떼어 내면 학습에 쓸 수 있는 이미지는 3,000~4,000장 정도에 불과했습니다. 연속 프레임에 보이는 불가사리 일부에는 라벨이 빠져 있었고, 로컬 validation 점수와 리더보드 점수도 서로 어긋났습니다."
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
          "ko": "공개된 YOLOv5·YOLOX 학습 노트북에서 출발했습니다. 모듈은 로컬에서 구현한 뒤 Kaggle 노트북에서 합쳐 학습과 제출을 진행했습니다. yolov5m 베이스라인(20 epoch, random 5-fold)의 리더보드 점수는 0.389였습니다. 여러 GPU로 학습한 모델이 단일 GPU Kaggle 추론 노트북에서도 정상 동작하는 것을 확인했습니다."
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
          "ko": "라벨이 없는 배경 이미지를 학습 데이터에 섞었습니다. 배경 이미지 300장을 추가하고 confidence threshold를 0.15로 설정하자 리더보드 점수가 0.389에서 0.443으로 올랐습니다. F2에서는 false positive보다 false negative가 더 중요하므로 낮은 confidence threshold를 택했습니다."
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
          "ko": "Albumentations로 상하·좌우 반전, RandomBrightnessContrast, GaussNoise, 무작위 스케일링을 적용했습니다. 공개 test set에는 작은 불가사리가 많아, 추론 이미지 크기를 키우자 점수가 올랐습니다. Roboflow로 시퀀스를 확인하고 라벨을 정제했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Private leaderboard: rank 353 of 2,026, score 0.635 (public leaderboard 0.614).",
        "ko": "최종(private) 리더보드에서 2,026팀 중 353위(점수 0.635, public 리더보드 0.614)를 기록했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Took part in the team's experiments and discussions on data splitting, background-image mixing and hyperparameter tuning.",
        "ko": "데이터 분할, 배경 이미지 혼합, 하이퍼파라미터 튜닝에 관한 팀 실험과 논의에 참여했습니다."
      },
      {
        "en": "Took on the Roboflow analysis of one video sequence as part of the team's label review.",
        "ko": "팀의 라벨 검토 작업 중 영상 시퀀스 하나를 Roboflow로 분석하는 일을 맡았습니다."
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
        "src": "img/kaggle-great-barrier-reef/06-two-stage-pipeline.png",
        "thumb": "img/kaggle-great-barrier-reef/thumbs/06-two-stage-pipeline.jpg",
        "caption": {
          "en": "Two-stage detection idea: a single-frame detector (e.g. YOLOX) proposes starfish candidates in the current frame, then crops of the same spots from previous frames are upsampled and passed to a multi-frame classifier for the final prediction",
          "ko": "2단계 탐지 아이디어: 단일 프레임 검출기(예: YOLOX)로 현재 프레임의 불가사리 후보를 찾고, 이전 프레임들의 같은 위치를 잘라 확대해 multi-frame 분류기로 최종 예측하는 구조"
        }
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
          "en": "Test-set example: a frame used to compare how test images look against the training frames",
          "ko": "테스트 데이터 예시: 학습 프레임과의 시각적 차이를 비교하는 데 쓴 프레임"
        },
        "thumb": "img/kaggle-great-barrier-reef/thumbs/05-test-image-example.jpg"
      }
    ],
    "cardTagline": {
      "en": "4-person Kaggle entry detecting crown-of-thorns starfish with YOLOv5; 353rd of 2,026 teams.",
      "ko": "YOLOv5로 왕관가시불가사리를 탐지한 4인 팀 Kaggle 참가작, 2,026팀 중 353위."
    }
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
      "en": "Individual (KNU M.S. course project)",
      "ko": "개인 (경북대 석사과정 기말 프로젝트)"
    },
    "role": {
      "en": "Sole researcher",
      "ko": "단독 수행"
    },
    "tagline": {
      "en": "A term project that measures how much a YOLOv5 detector relies on image backgrounds, using ImageNet-9 variants with separated and swapped foregrounds and backgrounds.",
      "ko": "전경·배경을 분리하거나 교체한 ImageNet-9 변형 데이터셋으로 YOLOv5 탐지 모델이 배경 이미지에 얼마나 의존하는지 측정한 기말 프로젝트."
    },
    "summary": {
      "en": "Final term project for the Deep Learning Applications course at Kyungpook National University. It builds on the ICLR 2021 paper 'Noise or Signal: The Role of Image Backgrounds in Object Recognition'. YOLOv5 labels were built for the IN-9L dataset variants, YOLOv5s was trained on foreground-only, background-only and mixed-background data, and accuracy was compared across test sets. YOLOv5 showed measurable background dependence, though less than the paper reports for ResNet, and further training on mixed backgrounds narrowed the background gap.",
      "ko": "경북대학교 심화학습 응용 과목의 기말 프로젝트입니다. ICLR 2021 논문 'Noise or Signal: The Role of Image Backgrounds in Object Recognition'을 바탕으로 했습니다. IN-9L 변형 데이터셋에 맞는 YOLOv5 라벨을 구축하고, 전경만 있는 데이터·배경만 있는 데이터·배경을 섞은 데이터로 YOLOv5s를 학습해 test set별 정확도를 비교했습니다. YOLOv5에서도 측정 가능한 수준의 배경 의존도가 나타났지만 논문의 ResNet 결과보다는 낮았고, 배경을 섞은 데이터로 추가 학습하자 배경에 따른 정확도 차이가 줄었습니다."
    },
    "problem": {
      "en": "An earlier experiment exposed the issue. YOLOv5s was trained on about 3,000 images of roughly 300 3D-modeled chairs rendered on plain backgrounds. It then boxed the entire image instead of the object and recognized any object on a plain background as a chair. The question was how strongly a detector's predictions depend on the training images' backgrounds rather than on the object itself.",
      "ko": "이전 실험에서 문제가 드러났습니다. 단색 배경에 렌더링한 3D 의자 모델 약 300개, 이미지 약 3,000장으로 YOLOv5s를 학습하자 물체 대신 이미지 전체를 검출하고, 단색 배경 위의 어떤 물체든 의자로 인식했습니다. 이에 탐지 모델의 예측이 물체 자체보다 학습 이미지의 배경에 얼마나 의존하는지를 확인하고자 했습니다."
    },
    "solution": {
      "en": "The background-dependence analysis of Xiao et al. (ICLR 2021) was reproduced with an object detector. The IN-9L variants (Original, Only-FG, No-FG, Mixed-Same, Mixed-Rand, Mixed-Next) were converted to YOLOv5 format, and YOLOv5s models trained on different variants were tested across them. Dependence was measured with cross-dataset test accuracy and the BG-Gap, the accuracy difference between Mixed-Same and Mixed-Rand.",
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
          "en": "Models trained on No-FG and on Only-FG data were tested on Original images. The No-FG model scored about 8.5 percentage points higher, which shows the detector uses background features around the object.",
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
        "en": "The model trained on Original data reached 0.90 accuracy on Original test images but only 0.64 on Mixed-Rand and 0.61 on Mixed-Next (Original–Mixed-Rand accuracy gap: 0.26).",
        "ko": "Original로 학습한 모델은 Original test에서 정확도 0.90을 기록했지만 Mixed-Rand에서 0.64, Mixed-Next에서 0.61에 그쳤습니다(Original–Mixed-Rand 정확도 차이 0.26)."
      },
      {
        "en": "After further training on Mixed-Rand, accuracy rose to 0.86 on Mixed-Rand and 0.87 on Mixed-Next, and the Mixed-Rand vs Mixed-Same BG-Gap narrowed from 0.08 to 0.03; Original-test accuracy fell from 0.90 to 0.81.",
        "ko": "Mixed-Rand 추가 학습 후 Mixed-Rand 0.86, Mixed-Next 0.87로 올랐고, Mixed-Rand–Mixed-Same BG-Gap은 0.08에서 0.03으로 줄었습니다. 대신 Original test 정확도는 0.90에서 0.81로 낮아졌습니다."
      },
      {
        "en": "On Original test images, the No-FG-trained model scored about 8.5 percentage points higher than the Only-FG-trained model.",
        "ko": "Original test 이미지에서 No-FG로 학습한 모델이 Only-FG로 학습한 모델보다 약 8.5%p 높았습니다."
      },
      {
        "en": "YOLOv5 showed background dependence, but less than the ResNet results in the reference paper, and background noise rarely caused misclassification.",
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
        "type": "slides",
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
        "url": "https://arxiv.org/abs/2006.09994",
        "ref": true
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
          "ko": "분석에 사용한 IN-9L 변형 데이터셋: Original, Only-BG-B/T, No-FG, Only-FG, Mixed-Same/Rand/Next (Xiao et al., ICLR 2021 논문의 그림)"
        },
        "thumb": "img/background-dependency/thumbs/02-in9l-dataset-variants.jpg"
      },
      {
        "src": "img/background-dependency/03-chair-plain-background-failure.jpg",
        "caption": {
          "en": "Motivating case: trained on rendered chairs with plain backgrounds, YOLOv5s draws boxes around whole images and labels an umbrella as a chair (0.69)",
          "ko": "문제의 출발점: 단색 배경 의자 렌더링 이미지로 학습한 YOLOv5s가 이미지 전체에 박스를 치고 우산을 의자로 인식한 사례(신뢰도 0.69)"
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
          "en": "Original-test results of No-FG- vs Only-FG-trained models, plotted as a background-dependency ratio; No-FG is about 8.5 percentage points higher",
          "ko": "No-FG·Only-FG 학습 모델의 Original test 결과(배경 의존도 비율): No-FG 모델이 약 8.5%p 높음"
        },
        "thumb": "img/background-dependency/thumbs/05-nofg-vs-onlyfg.jpg"
      },
      {
        "src": "img/background-dependency/06-bg-gap-results-slide.jpg",
        "caption": {
          "en": "Background dependence after further training on Mixed-Same / Mixed-Rand: radar chart of test accuracy and BG-Gap table",
          "ko": "Mixed-Same / Mixed-Rand 추가 학습 후 배경 의존도: test 정확도 레이더 차트와 BG-Gap 표"
        },
        "thumb": "img/background-dependency/thumbs/06-bg-gap-results-slide.jpg"
      }
    ],
    "cardTagline": {
      "en": "Measures how much a YOLOv5 detector relies on image backgrounds, using ImageNet-9 variants.",
      "ko": "ImageNet-9 변형 데이터셋으로 YOLOv5 탐지 모델의 배경 의존도를 측정한 프로젝트."
    }
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
      "en": "Individual (KNU M.S. course project)",
      "ko": "개인 (경북대 석사과정 기말 프로젝트)"
    },
    "role": {
      "en": "Sole developer",
      "ko": "단독 개발"
    },
    "tagline": {
      "en": "Tracks a YOLOv5-detected ball in 3D world coordinates with a constant-velocity Kalman filter on ROS.",
      "ko": "YOLOv5로 검출한 공을 ROS 기반 등속 모델 칼만 필터로 3차원 월드 좌표계에서 추적."
    },
    "summary": {
      "en": "A ROS package, built for the Advanced Topics in Robot Sensors course at Kyungpook National University, that turns monocular camera detections into 3D position and velocity estimates. A custom-trained YOLOv5s detects a blue ball, and its distance is estimated from bounding-box size with a fitted curve. The pixel position is back-projected into 3D using calibrated intrinsics, and a constant-velocity Kalman filter estimates 3D position and velocity. The filter was built step by step (1D image, 2D image, 3D world), and results are visualized in RViz and as a velocity arrow drawn on the camera image.",
      "ko": "경북대학교 로봇센서특론 과목에서 개발한 ROS 패키지로, 단안 카메라의 검출 결과를 3차원 위치·속도 추정값으로 변환합니다. 직접 학습한 YOLOv5s로 파란 공을 검출하고, 커브 피팅한 함수로 바운딩 박스 크기에서 거리를 추정합니다. 캘리브레이션으로 구한 내부 파라미터로 픽셀 위치를 3D로 역투영하고, 등속 모델 칼만 필터로 3D 위치와 속도를 추정합니다. 필터는 1D 이미지 → 2D 이미지 → 3D 월드 순서로 단계적으로 구현했으며, 결과는 RViz와 카메라 영상 위의 속도 화살표로 시각화했습니다."
    },
    "problem": {
      "en": "Deep-learning detectors can miss an object (false negatives) or lose it behind obstacles (occlusion), which makes raw detections jittery and intermittent. A detection also gives only a pixel position, with no velocity and no metric 3D location.",
      "ko": "딥러닝 기반 검출기는 물체를 놓치거나(false negative) 장애물에 가려진 물체를 잃는(occlusion) 경우가 있어 검출 결과가 불안정하게 끊길 수 있습니다. 또한 검출 결과는 픽셀 위치만 제공하므로 속도와 실제 3차원 위치는 알 수 없습니다."
    },
    "solution": {
      "en": "Detection, calibrated geometry and filtering are chained in ROS. YOLOv5s gives the ball's pixel position, a bbox-size-to-distance curve gives depth, the camera intrinsics K lift the detection into 3D, and a constant-velocity Kalman filter smooths the measured position and estimates the velocity that a detection alone does not provide. The estimated velocity is projected back onto the image plane for display.",
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
          "en": "Checkerboard calibration in ROS gave the intrinsics for the 640×480 camera: fx ≈ 639.0, fy ≈ 643.0, principal point ≈ (337.5, 222.9), skew 0, plus distortion coefficients.",
          "ko": "ROS에서 체커보드로 캘리브레이션해 640×480 카메라의 내부 파라미터를 구했습니다. fx ≈ 639.0, fy ≈ 643.0, 주점 ≈ (337.5, 222.9), skew 0이며, 왜곡 계수도 함께 얻었습니다."
        }
      },
      {
        "title": {
          "en": "Depth from bounding-box size",
          "ko": "바운딩 박스 크기 기반 깊이 추정"
        },
        "body": {
          "en": "Bounding-box sizes were collected at known distances. The longer box side was used so that partial occlusion has less effect, and a 4-parameter logistic curve was fitted (R² = 0.9971). depth_estimator.py publishes the result on /kcy/depth.",
          "ko": "실제 거리별로 바운딩 박스 크기 데이터를 수집했습니다. 부분 가림(occlusion)의 영향을 줄이기 위해 가로·세로 중 긴 변을 사용하고, 4PL(4-parameter logistic) 커브로 피팅했습니다(R² = 0.9971). depth_estimator.py가 결과를 /kcy/depth로 퍼블리시합니다."
        }
      },
      {
        "title": {
          "en": "Image-to-world transform",
          "ko": "이미지 → 월드 좌표 변환"
        },
        "body": {
          "en": "The box center (u, v) and the depth are back-projected as X = depth · K⁻¹[u, v, 1]ᵀ, with R = I and t = 0 because the camera sits at the origin. The result is rotated into a forward-left-up frame and published as a PoseStamped on /kcy/pose.",
          "ko": "카메라가 원점에 있으므로 R = I, t = 0으로 두고, 박스 중심 (u, v)와 깊이(depth)를 X = depth · K⁻¹[u, v, 1]ᵀ로 역투영했습니다. 결과는 forward-left-up 좌표계로 회전해 /kcy/pose에 PoseStamped로 퍼블리시합니다."
        }
      },
      {
        "title": {
          "en": "Constant-velocity Kalman filter",
          "ko": "등속 모델 칼만 필터"
        },
        "body": {
          "en": "The 6-D state [x, ẋ, y, ẏ, z, ż] uses P₀ = 100I, Q = diag(0.1, 50, 0.1, 50, 0.1, 50) and R = I, and dt is updated from message timing. The filter was developed step by step: 1D image, 2D image, then 3D world.",
          "ko": "6차원 상태 [x, ẋ, y, ẏ, z, ż]에 P₀ = 100I, Q = diag(0.1, 50, 0.1, 50, 0.1, 50), R = I를 적용하고, dt는 메시지 수신 시간으로 갱신합니다. 필터는 1D 이미지 → 2D 이미지 → 3D 월드 순서로 단계적으로 구현했습니다."
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
        "en": "Bounding-box-to-distance model fitted with R² = 0.9971.",
        "ko": "바운딩 박스 크기–거리 모델을 R² = 0.9971로 피팅했습니다."
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
      {
        "id": "BfwLm4y_x1M",
        "vertical": false,
        "caption": {
          "en": "Tracking in 1D: horizontal image position",
          "ko": "1D 추적: 이미지 가로 위치"
        }
      },
      {
        "id": "Sn67RHamnDo",
        "vertical": false,
        "caption": {
          "en": "Tracking in the 2D image",
          "ko": "2D 이미지 추적"
        }
      },
      {
        "id": "vwdLDFC3c2s",
        "vertical": false,
        "caption": {
          "en": "Tracking in the 3D world",
          "ko": "3D 월드 추적"
        }
      }
    ],
    "cover": "img/kalman-3d-tracking/cover.jpg",
    "images": [
      {
        "src": "img/kalman-3d-tracking/01-cover-3d-world-tracking.jpg",
        "caption": {
          "en": "Tracking in the 3D world: the ball's Kalman-filtered 3D trajectory and pose in RViz, beside camera views with the YOLOv5 detection and the projected velocity arrow",
          "ko": "3D 월드 추적: 칼만 필터로 추정한 공의 3D 궤적·pose를 표시한 RViz 화면과, YOLOv5 검출 결과·투영한 속도 화살표가 그려진 카메라 영상"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/01-cover-3d-world-tracking.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/02-2d-image-tracking-rqtplot.jpg",
        "caption": {
          "en": "Tracking in the 2D image: Kalman filter outputs (/kcy/kf_output) plotted in rqt_plot, beside the detection view with the velocity arrow",
          "ko": "2D 이미지 추적: rqt_plot으로 그린 칼만 필터 출력(/kcy/kf_output)과 속도 화살표가 표시된 검출 화면"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/02-2d-image-tracking-rqtplot.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/03-yolov5-blueball-detection.jpg",
        "caption": {
          "en": "Object detection: YOLOv5 detection of the blue ball (confidence 0.88) on /yolov5/image_output, viewed in rqt_image_view",
          "ko": "객체 검출: rqt_image_view로 확인한 /yolov5/image_output의 파란 공 YOLOv5 검출 결과(신뢰도 0.88)"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/03-yolov5-blueball-detection.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/04-checkerboard-calibration.jpg",
        "caption": {
          "en": "Camera calibration: checkerboard calibration in ROS for the focal lengths, principal point and distortion coefficients",
          "ko": "카메라 캘리브레이션: 초점 거리, 주점, 왜곡 계수를 얻기 위한 ROS 체커보드 캘리브레이션"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/04-checkerboard-calibration.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/05-depth-curve-fit.jpg",
        "caption": {
          "en": "Depth estimation: distance vs. bounding-box size (longer side) fitted with a 4-parameter logistic curve in MyCurveFit (R² = 0.9971)",
          "ko": "깊이 추정: MyCurveFit으로 거리와 바운딩 박스 크기(긴 변)의 관계를 4PL 커브로 피팅한 결과(R² = 0.9971)"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/05-depth-curve-fit.jpg"
      },
      {
        "src": "img/kalman-3d-tracking/06-kf-state-matrices.jpg",
        "caption": {
          "en": "Constant-velocity Kalman filter model: 6-D state [x, ẋ, y, ẏ, z, ż], P₀ = 100I, transition matrix A and measurement matrix H",
          "ko": "등속 모델 칼만 필터: 6차원 상태 [x, ẋ, y, ẏ, z, ż], P₀ = 100I, 상태 전이 행렬 A와 측정 행렬 H"
        },
        "thumb": "img/kalman-3d-tracking/thumbs/06-kf-state-matrices.jpg"
      }
    ],
    "cardTagline": {
      "en": "Tracks a YOLOv5-detected ball in 3D world coordinates with a constant-velocity Kalman filter.",
      "ko": "YOLOv5로 검출한 공을 등속 모델 칼만 필터로 3차원 월드 좌표계에서 추적하는 ROS 패키지."
    }
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
      "en": "Rock–Paper–Scissors Game Using Machine Learning",
      "ko": "머신러닝을 이용한 가위바위보 게임"
    },
    "team": {
      "en": "Individual",
      "ko": "개인"
    },
    "role": {
      "en": "Dataset collection, CNN training, game integration on Raspberry Pi",
      "ko": "데이터셋 수집, CNN 학습, Raspberry Pi 게임 구현"
    },
    "tagline": {
      "en": "A camera-based rock–paper–scissors game on Raspberry Pi that recognizes the player's hand gesture with a CNN and plays against the computer.",
      "ko": "Raspberry Pi 카메라로 플레이어의 손 모양을 CNN으로 인식해 컴퓨터와 대결하는 가위바위보 게임."
    },
    "summary": {
      "en": "A Python rock–paper–scissors game that runs on a Raspberry Pi. A small Keras CNN is trained on a self-collected dataset of rock, paper and scissors hand photos and saved as a .pkl file. The game loop, adapted from the open-source rps-cv project, reads the camera, classifies the gesture with the trained CNN, draws a random computer move and keeps a running score. Code, dataset and a demo video are published on GitHub and YouTube.",
      "ko": "Raspberry Pi에서 동작하는 Python 가위바위보 게임입니다. 직접 수집한 가위·바위·보 손 사진 데이터셋으로 소형 Keras CNN을 학습해 .pkl 파일로 저장했습니다. 오픈소스 rps-cv 프로젝트를 바탕으로 한 게임 루프는 카메라 영상을 읽어 학습한 CNN으로 손 모양을 분류하고, 컴퓨터의 수를 무작위로 정한 뒤 점수를 기록합니다. 코드, 데이터셋, 시연 영상은 GitHub와 YouTube에 공개되어 있습니다."
    },
    "problem": {
      "en": "Build an interactive game in which a computer recognizes a player's rock, paper or scissors hand gesture from a live camera feed on low-cost hardware.",
      "ko": "저가형 하드웨어에서 컴퓨터가 실시간 카메라 영상으로 플레이어의 가위·바위·보 손 모양을 인식하는 인터랙티브 게임을 만드는 것이 목표였습니다."
    },
    "solution": {
      "en": "Two scripts split the work: train.py trains the CNN on the collected photos and produces a .pkl model file, and main.py, adapted from the rps-cv game script, loads that model and runs the camera game loop.",
      "ko": "train.py가 수집한 사진으로 CNN을 학습해 .pkl 모델 파일을 만들고, rps-cv 게임 스크립트를 바탕으로 한 main.py가 이 모델을 불러와 카메라 게임 루프를 실행하는 두 스크립트 구조입니다."
    },
    "approach": [
      {
        "title": {
          "en": "Dataset collection",
          "ko": "데이터셋 수집"
        },
        "body": {
          "en": "Photographed rock, paper and scissors hand gestures against varied backgrounds in June 2019 and organized them into R/P/S class folders: 199 training images (63 rock, 73 paper, 63 scissors) and 54 test images (18 per class), stored at 24×24 px in the repository.",
          "ko": "2019년 6월 다양한 배경에서 가위·바위·보 손 모양을 촬영해 R/P/S 클래스 폴더로 정리했습니다. 학습 199장(바위 63, 보 73, 가위 63), 테스트 54장(클래스당 18장)이며 저장소에는 24×24 px로 저장되어 있습니다."
        }
      },
      {
        "title": {
          "en": "CNN training with Keras",
          "ko": "Keras CNN 학습"
        },
        "body": {
          "en": "Adapted the CNN example from a Keras tutorial to this dataset: loaded the folders with ImageDataGenerator (rescale 1/255, 150×150, batch size 3), then trained Conv2D(32) → Conv2D(64) → MaxPooling → Dense(128) → Dense(3, softmax) for 50 epochs with Adam and categorical cross-entropy and evaluated it on the test images.",
          "ko": "Keras 튜토리얼의 CNN 예제를 이 데이터셋에 맞게 적용했습니다. ImageDataGenerator(픽셀값 1/255 정규화, 150×150, 배치 크기 3)로 폴더를 불러오고, Conv2D(32) → Conv2D(64) → MaxPooling → Dense(128) → Dense(3, softmax) 구조를 Adam 옵티마이저와 categorical cross-entropy 손실로 50 에폭 학습한 뒤 테스트 이미지로 평가했습니다."
        }
      },
      {
        "title": {
          "en": "Frame preprocessing & hand detection",
          "ko": "프레임 전처리 및 손 감지"
        },
        "body": {
          "en": "Using the rpscv helper module from rps-cv, each camera frame is cropped, converted to RGB and turned into a background-removed grayscale image (threshold 17). Classification runs only when that image has more than 9,000 non-zero pixels, which skips frames without a hand.",
          "ko": "rps-cv의 rpscv 헬퍼 모듈로 카메라 프레임을 잘라 RGB로 변환한 뒤, 임계값 17로 배경을 제거한 그레이스케일 이미지를 만듭니다. 이 이미지에서 0이 아닌 픽셀이 9,000개를 넘을 때만 분류해 손이 없는 프레임은 건너뜁니다."
        }
      },
      {
        "title": {
          "en": "Gesture debouncing & game logic",
          "ko": "제스처 안정화 및 게임 로직"
        },
        "body": {
          "en": "As in the rps-cv game loop, a move is confirmed only after three consecutive identical predictions. The computer then picks a random gesture, the winner is computed from the gesture difference, and the score is printed after each round.",
          "ko": "rps-cv 게임 루프와 마찬가지로 같은 예측이 3번 연속 나와야 플레이어의 수로 확정합니다. 이후 컴퓨터가 무작위로 손 모양을 고르고, 두 손 모양의 차이로 승패를 계산해 매 라운드 점수를 출력합니다."
        }
      },
      {
        "title": {
          "en": "Running on Raspberry Pi",
          "ko": "Raspberry Pi 구동"
        },
        "body": {
          "en": "The game opens an OpenCV camera window with a frame-rate overlay next to a terminal that logs each round; q or Esc quits.",
          "ko": "카메라 영상과 프레임 레이트를 보여 주는 OpenCV 창과 라운드 결과를 출력하는 터미널이 함께 실행되며, q 또는 Esc 키로 종료합니다."
        }
      }
    ],
    "results": [
      {
        "en": "A 41-second demo video shows the game running on a Raspberry Pi (camera view at 6–8 fps, terminal logging moves, winners and scores).",
        "ko": "41초 분량의 시연 영상에 Raspberry Pi에서 실제로 동작하는 게임을 담았습니다(카메라 화면 6–8 fps, 터미널에 수·승패·점수 기록)."
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
        "en": "Trained the Keras CNN classifier used in the game, adapted from a tutorial example, on the collected dataset.",
        "ko": "튜토리얼 예제를 바탕으로, 게임에서 사용하는 Keras CNN 분류 모델을 수집한 데이터셋으로 학습했습니다."
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
        "url": "https://github.com/DrGFreeman/rps-cv",
        "ref": true
      }
    ],
    "youtube": [
      "73ZbODJ07LI"
    ],
    "cover": "img/rock-paper-scissors/cover.jpg",
    "images": [
      {
        "src": "img/rock-paper-scissors/02-demo-frame.jpg",
        "caption": {
          "en": "Demo on Raspberry Pi: a paper gesture in the 6 fps camera window, with the terminal logging rounds such as 'Player: paper / Computer: rock / Player wins!'.",
          "ko": "Raspberry Pi 시연 화면: 6 fps 카메라 창에 잡힌 보 손 모양과 'Player: paper / Computer: rock / Player wins!' 같은 라운드 결과를 출력하는 터미널."
        },
        "thumb": "img/rock-paper-scissors/thumbs/02-demo-frame.jpg"
      },
      {
        "src": "img/rock-paper-scissors/03-dataset-samples.jpg",
        "caption": {
          "en": "Samples from the self-collected training set (rows: rock, paper, scissors), upscaled from the stored 24×24 px images; 199 training and 54 test images in total.",
          "ko": "직접 수집한 학습 데이터 예시(행: 바위·보·가위, 24×24 px로 저장된 이미지를 확대). 전체 규모는 학습 199장, 테스트 54장."
        },
        "thumb": "img/rock-paper-scissors/thumbs/03-dataset-samples.jpg"
      }
    ],
    "cardTagline": {
      "en": "Raspberry Pi rock–paper–scissors game that recognizes hand gestures with a CNN.",
      "ko": "CNN으로 손 모양을 인식하는 Raspberry Pi 가위바위보 게임."
    }
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
      "en": "Individual (capstone design)",
      "ko": "개인 (캡스톤디자인)"
    },
    "role": {
      "en": "Circuit design, 3D modeling, Arduino coding",
      "ko": "회로 설계, 3D 모델링, Arduino 코딩"
    },
    "tagline": {
      "en": "A 3D-printed master–slave robotic arm that mirrors an operator's motion and records and replays motion sequences on an ATmega328P controller.",
      "ko": "조작자가 움직이는 마스터 암을 그대로 따라 하고 동작 시퀀스를 녹화·재생하는 ATmega328P 기반 3D 프린팅 로봇 팔."
    },
    "summary": {
      "en": "Individual capstone design project at Baekseok University (2018): a remote-control system for a multi-joint robotic arm. A potentiometer-based master arm drives a 5-axis, 3D-printed slave arm, and a Record/Play mode stores and replays motion sequences.",
      "ko": "백석대학교 캡스톤디자인(2018) 개인 프로젝트로, 다관절 로봇 팔의 원격 제어 시스템을 설계했습니다. 포텐쇼미터 기반 마스터 암으로 3D 프린팅한 5축 슬레이브 암을 조작하며, 녹화/재생 모드로 동작 시퀀스를 저장하고 다시 실행합니다."
    },
    "problem": {
      "en": "The goal was an arm that does more than PID position control: one that can be teleoperated by a master arm and can record and replay motion sequences, running on a portable, battery-powered controller.",
      "ko": "PID로 위치만 제어하는 데 그치지 않고, 마스터 암으로 원격 조작하며 동작 시퀀스를 저장·재생할 수 있는 로봇 팔을 휴대 가능한 배터리 구동 제어기로 구현하는 것이 목표였습니다."
    },
    "solution": {
      "en": "A master–slave system built around an ATmega328P: five potentiometers on the master arm are sampled by the ADC and mapped to five servos (base, hip, shoulder, neck, gripper) on the slave arm; the capstone report models this loop with a PID controller. A toggle switch enables Record mode and a push button triggers Play mode, both wired with 10 kΩ pull-down resistors, and the controller runs from a Li-Po battery with a rocker power switch.",
      "ko": "ATmega328P를 중심으로 한 마스터–슬레이브 시스템입니다. 마스터 암의 포텐쇼미터 5개를 ADC로 읽어 슬레이브 암의 서보모터 5개(베이스, 힙, 숄더, 넥, 그리퍼)에 매핑합니다. 캡스톤 보고서에서는 이 제어 루프를 PID 제어기로 모델링했습니다. 토글 스위치로 녹화 모드를, 푸시 버튼으로 재생 모드를 실행하며, 두 입력 모두 10kΩ 풀다운 저항으로 구성했습니다. 제어기는 Li-Po 배터리로 구동되며 로커 전원 스위치를 갖췄습니다."
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
          "en": "Designed the full schematic around an ATmega328P-PU: five potentiometers, five servos, Record/Play switches with 10 kΩ pull-downs to prevent floating inputs, and a Li-Po supply with a rocker switch.",
          "ko": "ATmega328P-PU를 중심으로 포텐쇼미터 5개, 서보모터 5개, 입력 플로팅을 막는 10kΩ 풀다운 저항을 단 녹화/재생 스위치, 로커 스위치가 달린 Li-Po 전원부까지 전체 회로도를 설계했습니다."
        }
      },
      {
        "title": {
          "en": "3D modeling & printing",
          "ko": "3D 모델링 및 출력"
        },
        "body": {
          "en": "Modeled the potentiometer master arm in Tinkercad and adapted the 5-axis slave arm (about 15 parts) from an open-source 3D-printable design, about two weeks of design work in total; printing took two days for the master arm and four days for the slave arm.",
          "ko": "Tinkercad로 포텐쇼미터 마스터 암을 모델링하고, 오픈소스 3D 프린팅 설계를 바탕으로 약 15개 부품으로 된 5축 슬레이브 암을 수정했습니다(설계 약 2주). 출력에는 마스터 암 2일, 슬레이브 암 4일이 걸렸습니다."
        }
      },
      {
        "title": {
          "en": "Controller build & assembly",
          "ko": "제어기 제작 및 조립"
        },
        "body": {
          "en": "Built a two-tier controller board with the battery on the lower tier and Molex connectors for servos and potentiometers; anchored the slave arm, which leaned forward under its servos' weight, to a wooden base and replaced epoxy-glued potentiometer joints, which blocked conduction, with soldered connections.",
          "ko": "아래층에 배터리를 넣은 2층 구조의 제어 기판을 제작하고, 서보모터·포텐쇼미터는 몰렉스 커넥터로 연결했습니다. 서보모터 무게 때문에 앞으로 쏠리던 슬레이브 암은 나무 받침에 고정했고, 에폭시로 접착해 전기가 통하지 않던 포텐쇼미터 연결부는 납땜으로 다시 결선했습니다."
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
          "en": "As documented in the capstone report, compared servo PWM waveforms without and with PID control on an oscilloscope, and evaluated arm behavior on the 3.7 V Li-Po supply versus 5 V.",
          "ko": "캡스톤 보고서에 정리한 대로 오실로스코프로 PID 적용 전후의 서보 PWM 파형을 비교하고, 3.7V Li-Po 전원과 5V 전원에서 로봇 팔의 동작을 비교 평가했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Working master–slave arm demonstrated in Remote, Record and Play modes (three demo videos).",
        "ko": "원격·녹화·재생 모드로 동작하는 마스터–슬레이브 로봇 팔을 시연했습니다(데모 영상 3편)."
      },
      {
        "en": "In the report's oscilloscope comparison, the servo waveform driven by plain PWM was heavily noisy while the waveform with PID control was clean; visible overshoot and a fairly long settling time left room for tuning.",
        "ko": "보고서의 오실로스코프 비교에서 PWM만으로 구동한 서보 파형은 노이즈가 심했던 반면 PID 제어 파형은 깨끗했습니다. 다만 오버슈트가 보이고 정착 시간이 다소 길어 추가 튜닝의 여지가 있었습니다."
      },
      {
        "en": "Identified the 3.7 V Li-Po output as a torque bottleneck: at 3.7 V the arm leaned forward and was hard to control (per the report, PID control still restored a stable state), while at 5 V the servos had enough torque to hold it upright.",
        "ko": "3.7V Li-Po 출력이 토크 부족의 원인임을 확인했습니다. 3.7V에서는 무게 중심이 앞으로 쏠려 제어가 까다로웠지만 보고서에 따르면 PID 제어로 안정 상태를 회복했고, 5V를 인가하자 서보 토크가 충분해져 앞으로 쏠리지 않았습니다."
      }
    ],
    "contributions": [
      {
        "en": "Modeled the control system and designed the complete circuit, including pull-down mode switches and the Li-Po power stage.",
        "ko": "제어 시스템을 모델링하고, 풀다운 모드 스위치와 Li-Po 전원부를 포함한 전체 회로를 설계했습니다."
      },
      {
        "en": "3D-modeled the master arm in Tinkercad, adapted an open-source slave-arm design and 3D-printed all parts.",
        "ko": "Tinkercad로 마스터 암을 3D 모델링하고, 오픈소스 설계를 바탕으로 슬레이브 암을 수정했으며, 전 부품을 3D 프린팅했습니다."
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
      "Tinkercad",
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
          "en": "Ref: CircuitDigest tutorial",
          "ko": "참고: CircuitDigest 튜토리얼"
        },
        "url": "https://circuitdigest.com/microcontroller-projects/record-and-play-3d-printed-robotic-arm-using-arduino",
        "ref": true
      },
      {
        "type": "other",
        "label": {
          "en": "Ref: Ashing's Robotic Arm V2.0",
          "ko": "참고: Ashing의 Robotic Arm V2.0"
        },
        "url": "https://www.thingiverse.com/thing:1215831",
        "ref": true
      }
    ],
    "youtube": [
      {
        "id": "-W-gj6TkzW4",
        "vertical": true,
        "caption": {
          "en": "Remote mode",
          "ko": "원격 모드"
        }
      },
      {
        "id": "a9sSb8NWltA",
        "vertical": true,
        "caption": {
          "en": "Record/Play mode (1)",
          "ko": "녹화/재생 모드 (1)"
        }
      },
      {
        "id": "P6XdI0nHfFc",
        "vertical": true,
        "caption": {
          "en": "Record/Play mode (2)",
          "ko": "녹화/재생 모드 (2)"
        }
      }
    ],
    "cover": "img/robotic-arm-pid/cover.jpg",
    "images": [
      {
        "src": "img/robotic-arm-pid/01-remote-mode-demo.jpg",
        "caption": {
          "en": "Remote mode: the 3D-printed slave arm follows the hand-operated master arm, driven by the custom controller board.",
          "ko": "원격 모드: 손으로 조작하는 마스터 암을 따라 움직이는 3D 프린팅 슬레이브 암과 이를 구동하는 자체 제작 제어 기판."
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
          "en": "3D model of the potentiometer master arm (Tinkercad).",
          "ko": "포텐쇼미터 마스터 암 3D 모델 (Tinkercad)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/03-master-arm-3d-model.jpg"
      },
      {
        "src": "img/robotic-arm-pid/04-circuit-schematic.jpg",
        "caption": {
          "en": "Full schematic: ATmega328P-PU, five potentiometers, five servos, battery switch and Record/Play switches with 10 kΩ pull-downs.",
          "ko": "전체 회로도: ATmega328P-PU, 포텐쇼미터 5개, 서보모터 5개, 전원 스위치, 10kΩ 풀다운 저항을 단 녹화/재생 스위치."
        },
        "thumb": "img/robotic-arm-pid/thumbs/04-circuit-schematic.jpg"
      },
      {
        "src": "img/robotic-arm-pid/05-controller-pcb-annotated.jpg",
        "caption": {
          "en": "Two-tier controller board (callouts in Korean): ATmega328P, record/play switches, power switch, servo and potentiometer headers, with the Li-Po battery on the lower tier.",
          "ko": "2층 구조 제어 기판: ATmega328P, 녹화/재생 스위치, 전원 스위치, 서보·포텐쇼미터 커넥터와 아래층의 Li-Po 배터리."
        },
        "thumb": "img/robotic-arm-pid/thumbs/05-controller-pcb-annotated.jpg"
      },
      {
        "src": "img/robotic-arm-pid/06-pwm-without-vs-with-pid.jpg",
        "caption": {
          "en": "Oscilloscope captures from the capstone report: servo PWM without PID (left, Agilent scope, noisy) vs. with PID control (right, DSO138 handheld scope, clean pulse).",
          "ko": "캡스톤 보고서의 오실로스코프 측정: PID 미적용 서보 PWM(왼쪽, Agilent 오실로스코프, 노이즈 심함)과 PID 적용 파형(오른쪽, DSO138 휴대용 오실로스코프, 깨끗한 펄스)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/06-pwm-without-vs-with-pid.jpg"
      }
    ],
    "cardTagline": {
      "en": "3D-printed master–slave robotic arm that mirrors the operator and records and replays motions.",
      "ko": "마스터 암의 움직임을 따라 하고 동작을 녹화·재생하는 3D 프린팅 로봇 팔."
    }
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
      "ko": "지하수 수위 모니터링 장비"
    },
    "team": {
      "en": "Individual (UST internship)",
      "ko": "개인 (UST 인턴십)"
    },
    "role": {
      "en": "Circuit design, 3D modeling",
      "ko": "회로 설계, 3D 모델링"
    },
    "tagline": {
      "en": "A portable Arduino-based instrument that measures water level through 4–20 mA pressure sensors, showing readings on an OLED and logging them to an SD card.",
      "ko": "4–20mA 압력식 센서로 수위를 측정해 OLED에 표시하고 SD 카드에 기록하는 휴대용 Arduino 기반 계측 장비."
    },
    "summary": {
      "en": "Developed during a UST research internship at the Korea Institute of Geoscience and Mineral Resources (KIGAM) in 2018. The device converts water pressure into a 4–20 mA current-loop signal, digitizes it on an Arduino Uno, displays live readings on an OLED and logs them to a micro-SD card. A Pascal's-principle test rig was built to validate the relationship between measured voltage and water level.",
      "ko": "2018년 한국지질자원연구원(KIGAM)에서 진행한 UST 연구인턴십 과제입니다. 이 장비는 수압을 4–20mA 전류 루프 신호로 변환한 뒤 Arduino Uno에서 디지털화하고, 측정값을 OLED에 실시간으로 표시하며 micro-SD 카드에 기록합니다. 파스칼의 원리를 이용한 실험 장치를 제작해 측정 전압과 수위의 관계를 검증했습니다."
    },
    "problem": {
      "en": "Korea depends heavily on groundwater, and volcanic islands such as Jeju, which lack dams and other water-management facilities, depend on it even more. Groundwater levels, however, fluctuate with earthquakes, atmospheric pressure and tidal forces, which makes precise monitoring difficult. The aim was an easy-to-carry instrument for checking these levels.",
      "ko": "우리나라는 지하수 의존도가 높으며, 특히 댐 등 물 관리 시설이 부족한 제주도 같은 화산섬은 의존도가 더 높습니다. 그러나 지하수위는 지진, 대기압, 기조력에 따라 변동하므로 정밀하게 모니터링하기 어렵습니다. 이렇게 변동하는 지하수위를 손쉽게 확인할 수 있는 휴대용 측정 장비를 만드는 것이 목표였습니다."
    },
    "solution": {
      "en": "One Arduino Uno reads four 4–20 mA sensor loops on separate ADC inputs; the OLED, the micro-SD logger and the power switching are packed into a portable, 3D-modeled two-tier unit.",
      "ko": "Arduino Uno 한 대가 4–20mA 센서 루프 4개를 각각 별도의 ADC 입력으로 읽습니다. OLED, micro-SD 기록부, 전원 스위치는 3D 모델링한 휴대용 2층 구조 장비에 함께 담았습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Pressure-based level sensing",
          "ko": "압력 기반 수위 측정"
        },
        "body": {
          "en": "Measured water level indirectly from water pressure using Pascal's principle; the sensor's maximum range is 2 bar, equivalent to about 20 m of water.",
          "ko": "파스칼의 원리를 이용해 수압으로 수위를 간접 측정했습니다. 센서의 최대 측정 범위는 2bar로, 수심 약 20m의 압력에 해당합니다."
        }
      },
      {
        "title": {
          "en": "4–20 mA current loop",
          "ko": "4–20mA 전류 루프"
        },
        "body": {
          "en": "Chose a current-loop output over voltage because the signal is unaffected by voltage drop over long cables, is less sensitive to noise, and shows a broken wire as 0 mA instead of 4 mA; each loop uses a 12 V sensor supply and a 250 Ω sense resistor.",
          "ko": "전압 신호 대신 전류 루프 출력을 택했습니다. 긴 케이블의 전압 강하에 영향을 받지 않고 노이즈에 강하며, 단선되면 4mA가 아닌 0mA로 나타나기 때문입니다. 각 루프는 12V 센서 전원과 250Ω 감지 저항으로 구성했습니다."
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
          "en": "Modeled and built the instrument with the OLED at the upper left for readout without a computer, Molex connectors for the sensors, power/reset switches and a clip for the 12 V sensor supply.",
          "ko": "컴퓨터 없이도 측정값을 확인할 수 있도록 왼쪽 상단에 OLED를 배치하고, 센서용 몰렉스 커넥터, 전원·리셋 스위치, 12V 센서 전원 클립을 갖춘 장비를 모델링해 제작했습니다."
        }
      },
      {
        "title": {
          "en": "Firmware",
          "ko": "펌웨어"
        },
        "body": {
          "en": "The main loop reads each ADC channel, converts it to voltage, prints the four values to the OLED and appends them to a log file on the SD card.",
          "ko": "메인 루프에서 각 ADC 채널을 읽어 전압으로 변환하고, 4개 값을 OLED에 출력한 뒤 SD 카드의 로그 파일에 이어서 기록합니다."
        }
      },
      {
        "title": {
          "en": "Water-level experiment",
          "ko": "수위 측정 실험"
        },
        "body": {
          "en": "Built a hose-based test rig with the sensor at one end and moved the sensor to emulate water levels from 62 cm down to 5 cm, comparing measured voltage with the pressure–level relationship.",
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
        "en": "Over a 62 → 5 cm water-level sweep, the measured voltage varied in proportion to the pressure–water-level relationship.",
        "ko": "62cm → 5cm 수위 변화 구간에서 측정 전압이 압력–수위 관계에 비례해 변하는 것을 확인했습니다."
      },
      {
        "en": "The test hose held only about 62–67 cm of water, so the sensor output changed by just ~0.5 V. To make the trend visible, readings were rescaled to 8-bit (0–255) values, which cost precision; a higher-resolution ADC and an improved test setup were identified as next steps.",
        "ko": "실험용 호스에 채운 물의 높이가 약 62–67cm에 불과해 센서 출력 변화가 약 0.5V에 그쳤습니다. 변화 추이를 보기 위해 측정값을 8bit(0–255) 값으로 환산했지만 그만큼 정밀도가 떨어졌고, ADC 분해능 향상과 실험 환경 개선을 후속 과제로 정리했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Designed the control system and circuits: 4–20 mA sensor loops, OLED/SD interface and power stage.",
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
          "ko": "완성된 계측 장비: OLED에 실시간으로 표시되는 센서 4채널 전압 측정값."
        },
        "thumb": "img/groundwater-monitoring/thumbs/01-oled-live-readings.jpg"
      },
      {
        "src": "img/groundwater-monitoring/02-system-block-diagram.jpg",
        "caption": {
          "en": "Control system block diagram: water level → four sensor circuits → Arduino Uno → OLED display and SD card module.",
          "ko": "제어 시스템 블록도: 수위 → 센서 회로 4채널 → Arduino Uno → OLED 디스플레이 및 SD 카드 모듈."
        },
        "thumb": "img/groundwater-monitoring/thumbs/02-system-block-diagram.jpg"
      },
      {
        "src": "img/groundwater-monitoring/03-current-loop-sensor-circuit.jpg",
        "caption": {
          "en": "Sensor circuits: each 4–20 mA sensor runs on 12 V and is read across a 250 Ω resistor on A0–A3.",
          "ko": "센서 회로: 4–20mA 센서마다 12V 전원을 인가하고 250Ω 저항 양단 전압을 A0–A3로 읽는 구성."
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
          "ko": "파스칼의 원리를 이용한 수위 측정 실험 장치(물을 채운 호스 끝에 센서 연결)."
        },
        "thumb": "img/groundwater-monitoring/thumbs/05-pressure-test-rig.jpg"
      },
      {
        "src": "img/groundwater-monitoring/06-voltage-pressure-vs-level.jpg",
        "caption": {
          "en": "Measured voltage vs. water level (blue) compared with the pressure–water-level line (orange), 62 → 5 cm.",
          "ko": "수위별 측정 전압(파란색)과 압력–수위 관계(주황색) 비교, 62cm → 5cm."
        },
        "thumb": "img/groundwater-monitoring/thumbs/06-voltage-pressure-vs-level.jpg"
      }
    ],
    "cardTagline": {
      "en": "Portable Arduino device reading 4–20 mA level sensors, with OLED readout and SD-card logging.",
      "ko": "4–20mA 수위 센서 값을 OLED에 표시하고 SD 카드에 기록하는 휴대용 Arduino 장비."
    }
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
      "en": "Elevator System Using FPGA & ATmega328P",
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
      "ko": "PWM 제어와 MCU 설계를 직접 익히기 위해 2인 팀으로 진행한 디지털 시스템 설계 프로젝트(2018)입니다. ATmega328P가 스테핑 모터로 카를 3개 층 사이에서 이동시키고, Xilinx XC3S200 FPGA가 문을 여닫는 서보 모터를 구동합니다. 엘리베이터 본체는 3D 모델링 후 출력했고, ATmega328P 제어기는 Li-Po 전원을 갖춘 만능기판으로 제작했습니다. 결과는 짧은 논문으로 정리했습니다."
    },
    "problem": {
      "en": "The goal was to learn PWM control hands-on by driving a servo from an FPGA, and to deepen MCU understanding by designing a complete elevator rather than controlling a single motor in isolation.",
      "ko": "FPGA로 서보 모터를 구동하며 PWM 제어를 직접 익히고, 모터 하나만 따로 제어하는 데 그치지 않고 엘리베이터 전체를 설계하며 MCU에 대한 이해를 넓히는 것이 목표였습니다."
    },
    "solution": {
      "en": "Control is split across two devices. The ATmega328P handles car motion with a stepper motor through a ULN2003A driver and three pull-down floor buttons, tracking the current floor and rotating CW/CCW to the requested one. The FPGA generates a 20 ms-period PWM for the door servo (90° at rest, 180° to open). A cylindrical lock in front of the door removes the need for gears to turn the servo's rotation into linear motion.",
      "ko": "제어를 두 장치로 나눴습니다. ATmega328P는 ULN2003A 드라이버와 풀다운으로 구성한 1·2·3층 버튼으로 스테핑 모터를 제어하며, 현재 층을 추적해 CW/CCW 회전으로 요청된 층까지 카를 이동시킵니다. FPGA는 주기 20ms의 PWM을 생성해 도어 서보 모터를 구동합니다(평상시 90°, 열림 180°). 문 앞에 원기둥형 잠금장치를 두어 서보의 회전 운동을 직선 운동으로 바꾸는 기어가 필요 없도록 했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Hardware partitioning",
          "ko": "하드웨어 역할 분담"
        },
        "body": {
          "en": "Assigned a stepper motor to vertical car motion (ATmega328P) and a servo motor to the door (FPGA).",
          "ko": "카의 상하 운동은 스테핑 모터(ATmega328P)가, 문 개폐는 서보 모터(FPGA)가 담당하도록 나눴습니다."
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
          "en": "3D-modeled the shaft, car, front panel, door and a cylindrical servo lock for 3D printing, with revised versions of the car and door.",
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
          "en": "Connected the elevator to both controllers and verified operation; corrected the car's sideways and forward lean by adding weights to rebalance its center of gravity.",
          "ko": "엘리베이터에 두 제어기를 연결해 동작을 확인했습니다. 카가 옆과 앞으로 기우는 문제는 무게 추를 달아 무게 중심을 맞춰 바로잡았습니다."
        }
      }
    ],
    "results": [
      {
        "en": "The integrated elevator operated without errors.",
        "ko": "통합한 엘리베이터가 오류 없이 동작했습니다."
      },
      {
        "en": "The car's lean was caused by overlooking the center of gravity and pulley mechanics in the 3D design; a better-balanced pulley/car design was identified as the next improvement.",
        "ko": "카가 기운 원인은 3D 설계 단계에서 무게 중심과 도르래 원리를 고려하지 못한 데 있었습니다. 균형을 고려한 도르래·카 설계를 다음 개선 과제로 도출했습니다."
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
      "Arduino Stepper.h",
      "Xilinx Spartan-3 (XC3S200)",
      "Xilinx ISE",
      "VHDL",
      "ULN2003A",
      "Fritzing",
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
          "en": "Operation check (paper Fig. 7): door closed with the servo at rest (left), and the servo rotated to slide the door open (right).",
          "ko": "동작 확인 (논문 그림 7): 서보가 기본 위치일 때 문이 닫힌 상태(왼쪽)와 서보가 회전해 문이 열린 상태(오른쪽)."
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
          "ko": "FPGA 보드로 서보 모터를 PWM 구동하는 테스트 장면 (저장소 데모 영상 캡처)."
        },
        "thumb": "img/fpga-elevator/thumbs/06-fpga-servo-test.jpg"
      }
    ],
    "cardTagline": {
      "en": "3D-printed three-floor elevator: an ATmega328P moves the car and an FPGA drives the door servo.",
      "ko": "ATmega328P가 카를, FPGA가 서보 도어를 제어하는 3D 프린팅 3층 엘리베이터 모형."
    }
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
      "ko": "미세먼지 관측을 위한 캔위성 설계"
    },
    "team": {
      "en": "Team of 3 (UniSat) · Team Lead",
      "ko": "3인 팀 (UniSat) · 팀장"
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
      "en": "Led team UniSat (Baekseok Univ., SeoulTech, Sejong Univ.) at the 6th CanSat Competition (2017), hosted by the Ministry of Science and ICT and organized by the KAIST Satellite Technology Research Center. The CanSat is launched to 300–500 m, records attitude, 3-axis wind speed and dust density while descending by parachute, and sends the data to a ground station over XBee. Pasquill stability classes assigned to sections of the descent were compared with fine-dust concentration; the project won an Excellence Award (KAIST President's Award) and was presented at the KSAS 2017 Fall Conference.",
      "ko": "과학기술정보통신부가 주최하고 KAIST 인공위성연구소가 주관한 제6회 캔위성 경연대회(2017)에 UniSat(백석대·서울과기대·세종대) 팀장으로 참가한 프로젝트입니다. 캔위성은 300–500m 높이까지 발사된 뒤 낙하산으로 하강하면서 자세, 3축 풍속, 미세먼지 농도를 기록하고 XBee로 지상국에 전송합니다. 낙하 구간별로 구한 Pasquill 안정도를 미세먼지 농도와 비교했으며, 우수상(KAIST 총장상)을 수상하고 한국항공우주학회 2017 추계학술대회에서 발표했습니다."
    },
    "problem": {
      "en": "Fine-dust damage worsens every year and differs by region, and studies link those differences to atmospheric circulation, i.e. atmospheric stability. Stability is usually derived from an air parcel's adiabatic lapse rate, which is impractical within a CanSat's size limits, so the mission needed another way to estimate stability and relate it to dust concentration.",
      "ko": "미세먼지 피해는 해마다 심해지고 지역별로 차이가 나며, 여러 연구에서 그 차이의 원인으로 대기 순환, 즉 대기 안정도를 지목합니다. 대기 안정도는 보통 공기 덩이의 단열감률로 구하지만 캔위성의 크기 제약 안에서는 이를 측정하기 어렵습니다. 따라서 다른 방식으로 안정도를 추정하고 미세먼지 농도와 연관 짓는 것이 과제였습니다."
    },
    "solution": {
      "en": "The design uses the Pasquill stability class, which needs only wind speed and solar radiation. Three wind sensors aligned with the gyro's x/y/z axes measure wind during descent; the measured attitude is used to rotate readings into an absolute frame, and an approximation for absolute wind speed was fitted by least-squares linear regression. A dust sensor mounted at the bottom, an XBee Pro S2B link with micro-SD backup, a real-time ground-station GUI and a pyranometer at the ground station complete the system.",
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
          "en": "Aligned three wind sensors with the gyro axes, corrected for attitude with a rotation-matrix transform, and fitted the absolute wind-speed approximation by least-squares regression, then validated it in a wind tunnel.",
          "ko": "바람 센서 3개를 자이로 축에 맞춰 배치하고 회전 행렬로 자세를 보정했으며, 절대 풍속 근사식은 최소자승법 회귀로 구한 뒤 풍동 실험으로 검증했습니다."
        }
      },
      {
        "title": {
          "en": "Hardware & structure",
          "ko": "하드웨어 및 구조 설계"
        },
        "body": {
          "en": "Integrated an Arduino Mega, MPU-9250 gyro, three Wind Sensor Rev. C units, a GP2Y1014AU0F dust sensor (mounted at the bottom to account for the descent), a micro-SD reader and a Li-Po battery in a stacked frame.",
          "ko": "Arduino Mega, MPU-9250 자이로, Wind Sensor Rev. C 3개, 낙하 상태를 고려해 최하단에 배치한 GP2Y1014AU0F 먼지 센서, micro-SD 리더, Li-Po 배터리를 적층 구조에 통합했습니다."
        }
      },
      {
        "title": {
          "en": "Satellite–ground communication",
          "ko": "위성–지상국 통신"
        },
        "body": {
          "en": "Chose an XBee Pro S2B (about 1 km nominal) to meet the 600 m minimum link range; an XCTU range test reached only ~400 m, so data is also logged to micro-SD and transmitted once the CanSat comes within range. A ground-station GUI shows the incoming data in real time.",
          "ko": "최소 600m 통신 요구에 맞춰 이론상 약 1km까지 통신할 수 있는 XBee Pro S2B를 사용했습니다. XCTU 테스트에서는 약 400m까지만 통신이 확인되어, 데이터를 micro-SD에도 저장하고 통신 범위 안에 들어오면 송신하도록 했습니다. 수신 데이터는 지상국 GUI에서 실시간으로 확인할 수 있게 했습니다."
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
          "en": "Corrected the readings for attitude to compute absolute wind speed, plotted it against dust concentration, split the descent into sections and assigned a Pasquill stability class to each section using ground pyranometer data.",
          "ko": "자세를 보정해 절대 풍속을 산출하고 미세먼지 농도와 함께 그래프로 나타냈습니다. 낙하 구간을 나눈 뒤 지상 일사계 데이터를 이용해 구간별 Pasquill 안정도를 구했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "Excellence Award (Creative Division), KAIST President's Award, 2017 CanSat Competition (Sep 14, 2017).",
        "ko": "2017 캔위성 경연대회(2017.09.14)에서 우수상(창작부문, KAIST 총장상)을 받았습니다."
      },
      {
        "en": "Paper \"Design of CANSAT for a correlation analysis between atmospheric stability and the concentration of fine dust\" presented at the KSAS (Korean Society for Aeronautical and Space Sciences) 2017 Fall Conference, Nov 15–18, 2017.",
        "ko": "논문 「대기 안정도와 미세먼지 농도의 상관관계 분석을 위한 캔위성 설계」를 한국항공우주학회 2017 추계학술대회(2017.11.15–18)에서 발표했습니다."
      },
      {
        "en": "Wind-tunnel validation: under 5% error between measured and calculated wind speed at or below 9 m/s.",
        "ko": "풍동 실험으로 풍속 9m/s 이하에서 측정 풍속과 계산 풍속의 오차가 5% 미만임을 검증했습니다."
      },
      {
        "en": "The paper reports a relationship between stability class and fine-dust concentration across three sections (Fig. 11–12) while noting that three sections are too few to establish a correlation. The low drop altitude limited the data, and wind drift carried the CanSat off the landing zone, making recovery difficult.",
        "ko": "논문은 세 구간에서 안정도 등급과 미세먼지 농도 사이의 관계를 보고하면서도(그림 11–12), 세 구간만으로 상관관계를 확정하기에는 한계가 있다고 밝혔습니다. 낙하 고도가 낮아 데이터가 적었고, 캔위성이 바람에 밀려 착륙 지점을 벗어나 회수에도 어려움이 있었습니다."
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
      "MPU-9250 (SparkFun DMP)",
      "Wind Sensor Rev. C",
      "GP2Y1014AU0F",
      "XBee Pro S2B / XCTU",
      "micro-SD",
      "PLX-DAQ",
      "MATLAB",
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
          "en": "Award certificate (PDF, Korean)",
          "ko": "상장 (PDF)"
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
          "ko": "조립된 UniSat 캔위성: 제어기, 센서, 통신 모듈을 탑재한 적층형 아크릴 프레임."
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
          "en": "Ground-station GUI built in MATLAB: real-time x/y/z wind speed, attitude (Real-Time Motion), communication status and dust density.",
          "ko": "x/y/z축 풍속, 자세(Real-Time Motion), 통신 상태, 미세먼지 농도를 실시간으로 표시하는 MATLAB 지상국 GUI."
        },
        "thumb": "img/cansat/thumbs/04-ground-station-gui.jpg"
      },
      {
        "src": "img/cansat/05-wind-vs-dust-analysis.jpg",
        "caption": {
          "en": "Absolute wind speed vs. fine-dust concentration, divided into Pasquill stability sections A-B, B and B-C (paper Fig. 11). Legend: blue = absolute wind speed, orange = fine dust.",
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
    ],
    "cardTagline": {
      "en": "CanSat that measures wind and fine dust during descent to relate atmospheric stability to dust.",
      "ko": "낙하 중 3축 풍속·자세·미세먼지를 측정해 대기 안정도와 미세먼지의 상관관계를 분석하는 캔위성."
    }
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
