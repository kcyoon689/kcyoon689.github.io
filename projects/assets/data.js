/* Project data for /projects/ – generated from the research notes, then edited by hand.
   Order = display order. Text fields are { en, ko }. Image paths are relative to /projects/.
   hidden: true keeps an entry out of the archive (these two are also hidden in the CV).
   research: true also lists an entry on /research/; path: "research" puts its page at /research/<slug>/ instead of /projects/<slug>/. */
window.PROJECTS = [
  {
    "slug": "edge-npu-lab",
    "year": "2026",
    "period": {
      "en": "2026",
      "ko": "2026"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI Systems · Edge NPU / Accelerator Architecture",
      "ko": "AI 시스템 · 엣지 NPU / 가속기 구조"
    },
    "title": {
      "en": "Edge NPU Lab – Raspberry Pi 5 + Hailo-10H",
      "ko": "Edge NPU Lab – Raspberry Pi 5 + Hailo-10H 실험"
    },
    "team": {
      "en": "Individual",
      "ko": "개인"
    },
    "role": {
      "en": "Sole researcher (experiment design, measurement, simulation, RTL)",
      "ko": "단독 수행 (실험 설계 · 측정 · 시뮬레이션 · RTL)"
    },
    "tagline": {
      "en": "An edge-NPU study on a Raspberry Pi 5 with a Hailo-10H (AI HAT+ 2) that follows one question through on-device measurement, systolic-array simulation and a Verilog GEMM engine: why did operation count not predict NPU latency?",
      "ko": "Raspberry Pi 5 + Hailo-10H(AI HAT+ 2)에서 '연산량은 왜 NPU 지연을 예측하지 못했는가'라는 질문을 실측, systolic array 시뮬레이션, Verilog GEMM 엔진의 세 단계로 추적한 엣지 NPU 실험."
    },
    "cardTagline": {
      "en": "Measures CNNs on a Hailo-10H NPU, forms a hypothesis for the gaps with systolic-array simulation, and checks the simulator's cycle model with a Verilog GEMM engine.",
      "ko": "Hailo-10H NPU에서 CNN을 실측하고, systolic array 시뮬레이션으로 그 차이에 대한 가설을 세운 뒤 Verilog GEMM 엔진으로 시뮬레이터의 cycle 모델을 검증한 실험."
    },
    "summary": {
      "en": "Edge NPU Lab measures how a model's performance changes with the runtime, the numerical precision and the host–device link on a Raspberry Pi 5 with an AI HAT+ 2 (Hailo-10H NPU, HailoRT 5.1.1, PCIe Gen3 ×1), and uses simulation to study how it depends on the hardware structure. Three Model Zoo networks (MobileNetV2, MobileNetV3 EdgeTPU, ResNet18) and 60 CNNs of my own design were measured on the device. A systolic-array cycle model matched to SCALE-Sim's stall-free results (with depthwise layers assumed to map as per-channel GEMMs) then gave a hypothesis for one observed effect, ResNet18's shorter NPU hardware latency than MobileNetV2 despite more operations: depthwise layers use a 2D array poorly. An output-stationary GEMM engine written in Verilog checked the cycle model behind it; this is not evidence about Hailo's internal design.",
      "ko": "Raspberry Pi 5에 AI HAT+ 2(Hailo-10H NPU, HailoRT 5.1.1, PCIe Gen3 ×1)를 연결해, 같은 모델이라도 실행 방식·정밀도·호스트–장치 전송에 따라 성능이 어떻게 달라지는지 측정하고, 하드웨어 구조에 따른 차이는 시뮬레이션으로 살펴본 실험입니다. Model Zoo의 MobileNetV2, MobileNetV3 EdgeTPU, ResNet18과 직접 설계한 CNN 60개를 실제 장치에서 측정했습니다. 이후 SCALE-Sim의 stall 없는 결과와 일치하는 systolic array cycle 모델(depthwise는 채널별 GEMM으로 근사)로, 연산량이 더 많은 ResNet18의 NPU 하드웨어 지연이 MobileNetV2보다 짧았던 현상에 대해 'depthwise layer가 2D array를 잘 활용하지 못한다'는 가설을 세웠습니다. 직접 작성한 Verilog output-stationary GEMM 엔진으로는 그 가설이 기대는 cycle 모델을 검증했습니다. 이는 Hailo 내부 구조에 대한 증거는 아닙니다."
    },
    "problem": {
      "en": "The assumption that a model with fewer operations runs faster on an NPU broke on the device. ResNet18 has 5.87× the official operation count of MobileNetV2 (3.64 vs 0.62 G ops), yet its hardware latency on the Hailo-10H was shorter (1.24 vs 1.44 ms). End-to-end latency on an edge device is also set by host preprocessing, the runtime and the PCIe transfer, not by NPU compute alone. The bottleneck differed between models (host-bound for MobileNetV2 and ResNet18, NPU-bound for MobileNetV3), so the same optimization had a different effect on each; without locating the bottleneck, the effect of an optimization cannot be predicted.",
      "ko": "연산량이 적은 모델이 NPU에서 더 빠를 것이라는 가정은 실측에서 깨졌습니다. ResNet18은 공식 연산량이 MobileNetV2의 5.87배(3.64 vs 0.62 G ops)인데도 Hailo-10H의 하드웨어 지연은 더 짧았습니다(1.24 vs 1.44 ms). 또 엣지 장치의 전체 지연은 NPU 연산만이 아니라 호스트 전처리, 런타임, PCIe 전송이 함께 결정합니다. 병목 위치가 모델에 따라 달랐기 때문에(MobileNetV2·ResNet18은 호스트, MobileNetV3는 NPU) 같은 최적화도 모델마다 다른 효과를 냈으며, 병목을 찾지 않으면 최적화의 효과를 예측할 수 없습니다."
    },
    "solution": {
      "en": "The cause was narrowed down in three steps. (1) On the device, runtime settings were compared in a full factorial grid and the PCIe link speed was switched on its own (Gen3 → Gen2 → Gen3) to locate the bottleneck; float32 originals and INT8 HEFs were compared image by image to measure the accuracy cost of the whole INT8 HEF path (quantization, compiler mapping and 8-bit output, not separated). (2) In SCALE-Sim, array shape, dataflow and SRAM split were compared on six dense GEMM/conv workloads under a fixed 1,024-PE, 24 KiB budget. The Conv, depthwise and FC layers of the three networks were then mapped onto the array with a closed-form cycle model that exactly matches all 216 stall-free SCALE-Sim rows (depthwise mapped as per-channel GEMMs, an unverified assumption). (3) An output-stationary systolic GEMM engine was written in Verilog to check the cycle model the simulator assumes. Finally, 60 custom CNNs were compiled with the Hailo DFC 5.1.0 on an x86 host and measured on the device. For the comparisons that needed a verdict (PCIe A–B–A, float32 vs INT8, the custom-CNN analysis and the training budget), the decision rule was fixed before the data were collected.",
      "ko": "세 단계로 원인을 좁혔습니다. (1) 실제 장치에서 런타임 설정은 전체 조합(factorial)으로 비교하고 PCIe 링크 속도만 따로 바꿔(Gen3 → Gen2 → Gen3) 병목 위치를 판정했습니다. 정밀도는 같은 이미지에서 float32 원본과 INT8 HEF 예측을 짝지어 비교해, INT8 HEF 경로 전체(양자화·컴파일러 매핑·8-bit 출력, 서로 분리하지 않음)의 정확도 비용을 측정했습니다. (2) SCALE-Sim으로 1,024 PE · 24 KiB SRAM 예산에서 6개 dense GEMM/conv workload의 array 형태, dataflow, SRAM 분할을 비교했습니다. 이어서 SCALE-Sim의 stall 없는 결과 216행과 정확히 일치하는 닫힌식 cycle 모델로 세 네트워크의 Conv·depthwise·FC layer를 systolic array에 매핑했습니다. depthwise는 채널별 GEMM으로 근사했으며, 이는 검증되지 않은 가정임. (3) output-stationary systolic GEMM 엔진을 Verilog로 직접 구현해 시뮬레이터가 가정하는 cycle 모델을 검증했습니다. 마지막으로 직접 설계한 CNN 60개를 x86 호스트에서 Hailo DFC 5.1.0으로 컴파일해 장치에서 측정했습니다. 판정이 필요한 비교(PCIe A–B–A, float32 vs INT8, 직접 설계한 CNN 분석, 학습 budget)는 데이터를 모으기 전에 판정 규칙을 고정했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Measurement toolkit",
          "ko": "측정 도구 구축"
        },
        "body": {
          "en": "Built the npu_lab CLI (doctor, bench, sweep, profile, inspect-hef, train, compile, evaluate). It runs sequential, bounded-async, double-buffered and fixed-arrival-rate (30 FPS, drop when full) pipelines and records per-frame arrival, preprocessing, submit and completion times, p50/p95/p99, CPU time and RSS. HEFs are pinned to Model Zoo v5.1.0 and checked by SHA-256.",
          "ko": "npu_lab CLI(doctor, bench, sweep, profile, inspect-hef, train, compile, evaluate)를 구현했습니다. 순차, bounded async, double buffering, 고정 입력률(30 FPS, 가득 차면 drop) 실행 방식을 지원하고, frame별 도착·전처리·submit·completion 시각과 p50/p95/p99, CPU 시간, RSS를 기록합니다. HEF는 Model Zoo v5.1.0으로 고정하고 SHA-256을 검사합니다."
        }
      },
      {
        "title": {
          "en": "Real-image runtime study",
          "ko": "실제 이미지 런타임 실험"
        },
        "body": {
          "en": "Evaluated the three pretrained HEFs on all 3,925 Imagenette v2 validation images, then ran 500 real images through 10 runtime variants per model (sequential, or in-flight 2/4 × worker 1/2, each with buffer reuse on/off), plus decode, deadline and arrival-rate studies and an output check: 249 runs, each in its own process, with run order shuffled within each timed study (the 9 output-check runs used a fixed order); 4.23 M frames, all in one session rather than on separate days.",
          "ko": "사전학습 HEF 3종을 Imagenette v2 검증 이미지 3,925장 전체로 평가했습니다. 이후 실제 이미지 500장으로 모델별 10개 런타임 조합(순차, 또는 동시 처리 2·4 × worker 1·2, 각각 버퍼 재사용 on/off)과 decode·deadline·입력률 실험, 출력 일치 검사를 진행했습니다. run마다 별도 프로세스로 실행했고 시간을 측정하는 실험 단계마다 순서를 무작위로 섞었습니다(출력 일치 검사 9 run은 고정 순서). 총 249 run, 423만 frame이며, 날짜를 바꾼 반복이 아니라 한 세션 안의 반복입니다."
        }
      },
      {
        "title": {
          "en": "Link and precision",
          "ko": "전송과 정밀도"
        },
        "body": {
          "en": "Ran a PCIe Gen3 → Gen2 → Gen3 (A–B–A) experiment with the same HEF, inputs and code, each block right after a reboot and the link state read from sysfs. Compared the float32 originals (CPU) with the Hailo INT8 HEFs that share their weights, image by image on the same 3,925 images (McNemar exact).",
          "ko": "같은 HEF·입력·코드로 PCIe Gen3 → Gen2 → Gen3(A–B–A)를 각각 재부팅 직후 측정하고, 링크 상태는 측정 직전 sysfs로 확인했습니다. HEF와 같은 가중치의 float32 원본(CPU)과 Hailo INT8 HEF를 같은 3,925장에서 이미지 쌍으로 비교했습니다(McNemar exact)."
        }
      },
      {
        "title": {
          "en": "Systolic-array simulation",
          "ko": "Systolic array 시뮬레이션"
        },
        "body": {
          "en": "Ran SCALE-Sim v2.0.2 at a pinned commit on six synthetic dense GEMM/Conv shapes (no depthwise) across 144 configurations of a 1,024-PE, 24 KiB-SRAM budget: 16×64 / 32×32 / 64×16 arrays, OS / WS / IS dataflows, four SRAM splits, and three per-port bandwidths plus a stall-free mode (864 layer runs in total). Separately, the Conv, depthwise and FC layers of the three networks were converted to GEMM shapes and mapped onto the same 1,024 PEs with a closed-form cycle model that matches all 216 stall-free SCALE-Sim rows. SCALE-Sim does not support depthwise, so those layers were mapped as one GEMM per channel, an unverified assumption.",
          "ko": "고정 commit의 SCALE-Sim v2.0.2로 합성 dense GEMM/Conv shape 6개(depthwise 제외)를 1,024 PE · SRAM 24 KiB 예산의 144개 설정에서 시뮬레이션했습니다. 16×64 / 32×32 / 64×16 array, OS / WS / IS dataflow, SRAM 분할 4종, 포트별 대역폭 3수준과 stall 없는 계산 모드를 조합했습니다(총 864개 layer 실행). 이와 별도로 세 네트워크의 Conv·depthwise·FC layer를 GEMM shape로 변환해 같은 1,024 PE에 매핑했고, cycle은 SCALE-Sim의 stall 없는 결과 216행과 모두 일치하는 닫힌식 모델로 계산했습니다. SCALE-Sim이 지원하지 않는 depthwise는 채널별 독립 GEMM으로 근사했으며, 이는 검증되지 않은 가정입니다."
        }
      },
      {
        "title": {
          "en": "RTL implementation",
          "ko": "RTL 구현"
        },
        "body": {
          "en": "Wrote an R×C output-stationary GEMM engine in Verilog (INT8 × INT8 → INT32 PEs, input skew lines, fold controller) and verified it in Icarus Verilog. Output double buffering (OVERLAP = 1 / 0) was compared as a design choice.",
          "ko": "INT8 × INT8 → INT32 PE, 입력 skew 지연선, fold controller로 구성된 R×C output-stationary GEMM 엔진을 Verilog로 작성하고 Icarus Verilog로 검증했습니다. 출력 double buffering 유무(OVERLAP = 1 / 0)를 설계 선택으로 비교했습니다."
        }
      },
      {
        "title": {
          "en": "Custom models on the NPU",
          "ko": "직접 설계한 모델의 NPU 실측"
        },
        "body": {
          "en": "Generated 48 controlled ONNX graphs with random weights (Conv / DW+PW / residual × width × depth × downsampling position) and trained 12 models on Imagenette (2 architectures × 3 seeds × 5/30 epochs). All 60 were compiled with DFC 5.1.0 on an x86 Ubuntu 24.04 host and measured on the Pi for latency; INT8 accuracy was measured for the 12 trained models.",
          "ko": "Conv / DW+PW / residual × width × depth × downsampling 위치를 조합한 무작위 가중치의 통제 ONNX 48개를 생성하고, Imagenette로 모델 12개(구조 2종 × seed 3개 × 5/30 epoch)를 학습했습니다. 60개 모두 x86 Ubuntu 24.04 호스트의 DFC 5.1.0으로 컴파일해 Pi에서 지연을 측정했고, INT8 정확도는 학습한 모델 12개에서 측정했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "On predecoded input, raised Python-pipeline throughput to 2.78–3.60× of sequential execution without buffer reuse, while keeping the mean run p95 at or below 9.4 ms (MobileNetV2: 178.6 → 643.7 FPS).",
        "ko": "미리 decode한 입력에서 Python 파이프라인 처리량을 버퍼 재사용 없는 순차 실행 대비 2.78–3.60배로 높이면서 run별 p95 평균을 9.4 ms 이하로 유지했습니다(MobileNetV2: 178.6 → 643.7 FPS)."
      },
      {
        "en": "The bottleneck differed by model: at batch 1, the best Python FPS reached 100% of the vendor C++ FPS for MobileNetV3 (NPU-bound) but 37% for MobileNetV2 and 33% for ResNet18 (host-bound). With four requests in flight, a second worker therefore gave +0.5%, +18% and +34% respectively; with two in flight it did not help. With JPEG decode included, all three converged to 340–366 FPS.",
        "ko": "병목 위치가 모델마다 달랐습니다. batch 1 기준으로 Python 최고 FPS가 vendor C++ FPS의 MobileNetV3 100%(NPU 병목), MobileNetV2 37%, ResNet18 33%(호스트 병목)였습니다. 그래서 4개 동시 처리에서 worker 1→2의 효과도 +0.5% / +18% / +34%로 달랐고, 2개 동시 처리에서는 효과가 없었습니다. JPEG decode를 포함하면 세 모델이 340–366 FPS로 수렴했습니다."
      },
      {
        "en": "On PCIe Gen2 the vendor C++ path for MobileNetV2 and ResNet18 dropped to 0.75–0.80× of Gen3, so at that throughput the link becomes the limit; the Python pipeline slowed by 2–4%. For the NPU-bound MobileNetV3, the vendor path at batch 1–8 changed by at most 0.5%, and the async Python pipeline showed no detected change.",
        "ko": "PCIe Gen2에서 MobileNetV2·ResNet18의 vendor C++ 처리량은 Gen3의 0.75–0.80배로 떨어져, 이 처리량에서는 링크가 한계가 됩니다. Python 파이프라인은 2–4% 느려졌습니다. NPU가 병목인 MobileNetV3는 vendor 경로(batch 1–8)에서 변화가 0.5% 이하였고, async Python 파이프라인에서는 변화가 검출되지 않았습니다."
      },
      {
        "en": "INT8 HEFs lost 0.38 / 0.76 / 0.64 pp of Top-1 against float32 (MobileNetV2 / MobileNetV3 / ResNet18). Only the MobileNetV3 and ResNet18 losses were significant (McNemar p = 0.0026 / 0.036); for MobileNetV2 no difference was detected. Disagreements concentrated on images where the float top-1 and top-2 probabilities were close.",
        "ko": "INT8 HEF의 Top-1은 float32 대비 −0.38 / −0.76 / −0.64pp(MobileNetV2 / MobileNetV3 / ResNet18)였습니다. MobileNetV3와 ResNet18의 손실만 유의했고(McNemar p = 0.0026 / 0.036), MobileNetV2에서는 차이가 검출되지 않았습니다. 예측 불일치는 float의 top-1과 top-2 확률 차가 작은 이미지에 몰렸습니다."
      },
      {
        "en": "In the systolic-array cycle model (depthwise mapped as per-channel GEMMs, an unverified assumption), MobileNetV2's depthwise layers take 7% of the MACs but 89% of the cycles (32×32 OS). This agrees in direction with ResNet18's shorter NPU hardware latency than MobileNetV2 (1.24 vs 1.44 ms), but it is a hypothesis, not evidence about Hailo's internal design.",
        "ko": "Systolic array cycle 모델(depthwise를 채널별 GEMM으로 매핑한 검증되지 않은 가정)에서 MobileNetV2의 depthwise layer는 MAC의 7%로 cycle의 89%를 차지했습니다(32×32 OS). 실측에서 ResNet18의 NPU 하드웨어 지연이 MobileNetV2보다 짧았던 방향(1.24 vs 1.44 ms)과 일치하지만, Hailo 내부 구조에 대한 증거가 아니라 가설입니다."
      },
      {
        "en": "The RTL matched numpy on 22 random INT8 GEMMs (1,882 outputs, 0 mismatches) and SCALE-Sim's compute-cycle count (MAC window) in 18 of 18 cases; without output double buffering it needed up to 53% more cycles.",
        "ko": "RTL은 무작위 INT8 GEMM 22건(출력 1,882개)에서 numpy와 불일치 0개였고, MAC window cycle이 SCALE-Sim과 18/18건 일치했습니다. 출력 double buffering이 없으면 cycle이 최대 53% 늘었습니다."
      },
      {
        "en": "All 60 custom models compiled and ran. On the Hailo-10H the slope of latency against MACs for the depthwise-separable family was 2.3× that of conv (0.00144 vs 0.00062 ms per million MACs). In the trained Conv vs DW+PW pairs whose MACs differ by 2.78%, DW+PW's hardware latency was 9–20% higher in all six pairs (3 seeds × 5/30 epochs), although in two 5-epoch pairs the gap stayed within the repeat range.",
        "ko": "직접 설계한 60개 모델이 모두 컴파일·실행되었습니다. Hailo-10H에서 depthwise-separable 가족의 MAC 대비 지연 기울기는 conv의 2.3배였습니다(0.00144 vs 0.00062 ms/백만 MAC). MAC 차이 2.78%인 학습 모델 Conv vs DW+PW 쌍에서는 6개 쌍(seed 3개 × 5/30 epoch) 모두 DW+PW의 하드웨어 지연이 9–20% 길었습니다. 다만 5 epoch의 두 쌍은 차이가 반복 측정 범위 안이었습니다."
      }
    ],
    "contributions": [
      {
        "en": "Defined the research questions and, for the main device experiments (precision, PCIe A–B–A, custom models, long training), fixed the decision rules before measurement.",
        "ko": "연구 질문을 정하고, 주요 장치 실험(정밀도, PCIe A–B–A, 직접 설계 모델, 장기 학습)의 판정 규칙을 측정 전에 고정했습니다."
      },
      {
        "en": "Implemented the npu_lab toolkit, the experiment and report scripts, and the automated tests.",
        "ko": "npu_lab 측정 도구, 실험·보고서 스크립트, 자동 테스트를 구현했습니다."
      },
      {
        "en": "Wrote the Verilog systolic GEMM engine and testbench, and set up the x86 DFC host that compiled the 60 custom models.",
        "ko": "Verilog systolic GEMM 엔진과 testbench를 작성하고, 직접 설계한 모델 60개를 컴파일한 x86 DFC 환경을 구축했습니다."
      }
    ],
    "tables": [
      {
        "title": {
          "en": "Same weights, different targets",
          "ko": "같은 가중치, 다른 실행 환경"
        },
        "note": {
          "en": "Throughput in FPS. The CPU and Hailo columns use the same 500 Imagenette images, pre-decoded (JPEG decode not timed): CPU = float32 on the Pi 5; Hailo = INT8 HEF through the Python pipeline (sequential with buffer reuse, and the fastest of the 10 tested settings). Vendor = hailortcli run2 alone at batch 1 on internally generated input (no Python, no preprocessing).",
          "ko": "처리량(FPS)입니다. CPU와 Hailo 열은 같은 Imagenette 이미지 500장을 미리 디코딩해 사용했습니다(JPEG 디코딩은 측정 구간 밖). CPU는 Pi 5의 float32, Hailo는 Python 파이프라인으로 실행한 INT8 HEF(버퍼 재사용 순차 실행, 그리고 시험한 10개 설정 중 가장 빠른 설정)입니다. vendor는 hailortcli run2 단독 실행(batch 1, 내부 생성 입력, Python·전처리 없음)입니다."
        },
        "columns": [
          {
            "en": "Model",
            "ko": "모델"
          },
          {
            "en": "CPU 1 / 4 threads",
            "ko": "CPU 1 / 4 스레드"
          },
          {
            "en": "Hailo sequential",
            "ko": "Hailo 순차"
          },
          {
            "en": "Hailo best of 10 tested",
            "ko": "Hailo 시험 설정 중 최고"
          },
          {
            "en": "Vendor C++",
            "ko": "Vendor C++"
          }
        ],
        "rows": [
          {
            "cells": [
              "MobileNetV2",
              "36.8 / 62.2",
              "182",
              "644",
              "1,749"
            ]
          },
          {
            "cells": [
              "MobileNetV3 EdgeTPU",
              "15.5 / 44.5",
              "164",
              "451",
              "452"
            ]
          },
          {
            "cells": [
              "ResNet18",
              "7.1 / 17.1",
              "181",
              "577",
              "1,725"
            ]
          }
        ]
      },
      {
        "title": {
          "en": "PCIe Gen2 vs Gen3 (A–B–A)",
          "ko": "PCIe Gen2 vs Gen3 (A–B–A)"
        },
        "note": {
          "en": "Gen2 throughput divided by the mean of the two Gen3 blocks; the drift column is the Gen3 before → after difference.",
          "ko": "Gen2 처리량을 두 Gen3 블록 평균으로 나눈 값이며, 재현 오차는 Gen3 전 → 후 차이입니다."
        },
        "columns": [
          {
            "en": "Path",
            "ko": "경로"
          },
          {
            "en": "Gen2 / Gen3",
            "ko": "Gen2 / Gen3"
          },
          {
            "en": "Gen3 drift",
            "ko": "Gen3 재현 오차"
          },
          {
            "en": "Reading",
            "ko": "해석"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "en": "Vendor C++, MobileNetV2 · ResNet18",
                "ko": "Vendor C++, MobileNetV2 · ResNet18"
              },
              "0.75–0.80",
              "±4%",
              {
                "en": "Link-limited at Gen2",
                "ko": "Gen2에서 링크가 한계"
              }
            ],
            "highlight": true
          },
          {
            "cells": [
              {
                "en": "Vendor C++, MobileNetV3 (batch 1–8)",
                "ko": "Vendor C++, MobileNetV3 (batch 1–8)"
              },
              "0.99–1.00",
              "±0.2%",
              {
                "en": "NPU-bound, negligible (≤0.5%)",
                "ko": "NPU 병목, 영향 미미(0.5% 이하)"
              }
            ]
          },
          {
            "cells": [
              {
                "en": "Python pipeline: sequential (all three models), async MobileNetV2 · ResNet18",
                "ko": "Python 파이프라인: 순차(세 모델 모두), async MobileNetV2 · ResNet18"
              },
              "0.96–0.98",
              "±0.7%",
              {
                "en": "Small but detected",
                "ko": "작지만 검출됨"
              }
            ]
          },
          {
            "cells": [
              {
                "en": "Python pipeline, MobileNetV3 async",
                "ko": "Python 파이프라인, MobileNetV3 async"
              },
              "1.000",
              "0.0%",
              {
                "en": "No detectable effect",
                "ko": "검출된 영향 없음"
              }
            ]
          }
        ]
      }
    ],
    "tech": [
      "Python",
      "HailoRT",
      "Hailo DFC",
      "PyTorch",
      "ONNX",
      "ONNX Runtime",
      "SCALE-Sim",
      "Verilog",
      "Icarus Verilog",
      "Raspberry Pi 5"
    ],
    "topics": [
      "Edge AI",
      "NPU",
      "Systolic Array",
      "Quantization",
      "Performance Analysis",
      "RTL Design"
    ],
    "links": [
      {
        "type": "other",
        "label": {
          "en": "Reference: SCALE-Sim v2.0.2 (systolic-array simulator)",
          "ko": "참고 자료: SCALE-Sim v2.0.2 (systolic array 시뮬레이터)"
        },
        "url": "https://github.com/scalesim-project/SCALE-Sim/tree/v2.0.2",
        "ref": true
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: Hailo Model Zoo v5.1.0",
          "ko": "참고 자료: Hailo Model Zoo v5.1.0"
        },
        "url": "https://github.com/hailo-ai/hailo_model_zoo/tree/v5.1.0",
        "ref": true
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: Imagenette dataset (fastai)",
          "ko": "참고 자료: Imagenette 데이터셋 (fastai)"
        },
        "url": "https://github.com/fastai/imagenette",
        "ref": true
      }
    ],
    "cover": "img/edge-npu-lab/cover.jpg",
    "images": [
      {
        "src": "img/edge-npu-lab/01-overview.png",
        "caption": {
          "en": "Overview: on-device measurement, systolic-array simulation and RTL around one question, and the custom-model measurements on the Hailo-10H that follow up the depthwise hypothesis.",
          "ko": "개요: 하나의 질문을 둘러싼 세 활동(실측 · systolic array 시뮬레이션 · RTL)과, 이어서 depthwise 가설을 Hailo-10H에서 검토한 직접 설계 모델 실측."
        },
        "thumb": "img/edge-npu-lab/thumbs/01-overview.jpg"
      },
      {
        "src": "img/edge-npu-lab/02-latency-breakdown.png",
        "caption": {
          "en": "Sequential host pipeline by stage (left) and vendor hardware latency against official operation count (right): ResNet18 has the most operations but the shortest hardware latency.",
          "ko": "순차 호스트 파이프라인의 단계별 지연(왼쪽)과 공식 연산량 대비 vendor 하드웨어 지연(오른쪽). 연산량이 가장 많은 ResNet18의 하드웨어 지연이 가장 짧습니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/02-latency-breakdown.jpg"
      },
      {
        "src": "img/edge-npu-lab/03-decode-breakdown.png",
        "caption": {
          "en": "With JPEG decode and file I/O in the timed pipeline, the three models converge to 340–366 FPS: the host CPU becomes the common bottleneck.",
          "ko": "JPEG decode와 파일 I/O를 측정 범위에 넣으면 세 모델이 340–366 FPS로 수렴합니다. 호스트 CPU가 공통 병목이 됩니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/03-decode-breakdown.jpg"
      },
      {
        "src": "img/edge-npu-lab/04-pcie-ab.png",
        "caption": {
          "en": "PCIe Gen2 vs Gen3 (A–B–A): on MobileNetV2 and ResNet18 the vendor C++ runtime loses 20–25% and the Python pipeline 2–4%. The NPU-bound MobileNetV3 shows no detected change in the async pipeline and changes by at most 0.5% at vendor batch 1–8.",
          "ko": "PCIe Gen2 vs Gen3(A–B–A): MobileNetV2·ResNet18에서 vendor C++ 런타임은 20–25%, Python 파이프라인은 2–4% 느려집니다. NPU 병목인 MobileNetV3는 async 파이프라인에서 변화가 검출되지 않았고, vendor batch 1–8에서는 차이가 0.5% 이내입니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/04-pcie-ab.jpg"
      },
      {
        "src": "img/edge-npu-lab/05-vendor-runtime.png",
        "caption": {
          "en": "Vendor C++ runtime: only the 3-context MobileNetV3 HEF scales with batch size (3.08× at batch 16); the single-context models stay near 1,720 FPS.",
          "ko": "Vendor C++ 런타임: 3-context로 컴파일된 MobileNetV3 HEF만 batch 크기에 따라 처리량이 늘고(batch 16에서 3.08배), single-context 모델은 약 1,720 FPS에 머뭅니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/05-vendor-runtime.jpg"
      },
      {
        "src": "img/edge-npu-lab/06-target-runtime.png",
        "caption": {
          "en": "Same weights and preprocessing, CPU float32 (1 / 4 threads) vs Hailo-10H INT8: sequential Hailo execution is 2.9–10.6× faster than four CPU threads. Precision also differs, so the gap is not due to hardware alone.",
          "ko": "같은 가중치·전처리로 CPU float32(1 / 4 스레드)와 Hailo-10H INT8을 비교했습니다. Hailo 순차 실행이 CPU 4스레드보다 2.9–10.6배 빠르며, 정밀도도 다르므로 하드웨어만의 차이로 볼 수는 없습니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/06-target-runtime.jpg"
      },
      {
        "src": "img/edge-npu-lab/07-precision.png",
        "caption": {
          "en": "Float32 vs INT8: disagreements concentrate where the float top-1/top-2 margin is small (left). ONNX Runtime post-training INT8 on the CPU changes the custom models' mean test accuracy by at most ±0.25 pp (right; this is not the Hailo quantizer).",
          "ko": "Float32 vs INT8: 예측 불일치는 float top-1/top-2 확률 차가 작은 이미지에 몰리고(왼쪽), 직접 학습한 모델에 ONNX Runtime(CPU) INT8 PTQ를 적용하면 평균 test 정확도 변화가 ±0.25pp 이내입니다(오른쪽, Hailo 양자화기 결과가 아닙니다)."
        },
        "thumb": "img/edge-npu-lab/thumbs/07-precision.jpg"
      },
      {
        "src": "img/edge-npu-lab/08-cycles-heatmap.png",
        "caption": {
          "en": "SCALE-Sim: total cycles over six workloads for each array shape and dataflow at three per-operand port bandwidths (1,024 PEs, 24 KiB SRAM; best of four SRAM splits per cell; negative-stall configurations excluded).",
          "ko": "SCALE-Sim: operand별 포트 대역폭 세 가지에서 array 형태·dataflow별 6개 workload의 cycle 합계(1,024 PE, 24 KiB SRAM, 칸마다 SRAM 분할 4종 중 최솟값, 음수 stall 설정은 제외)."
        },
        "thumb": "img/edge-npu-lab/thumbs/08-cycles-heatmap.jpg"
      },
      {
        "src": "img/edge-npu-lab/09-workload-mapping.png",
        "caption": {
          "en": "Real layers mapped onto a 32×32 output-stationary array in an analytic cycle model: with depthwise layers assumed to run as one GEMM per channel, they are a small share of MACs but most of the modeled cycles in MobileNetV2 and V3.",
          "ko": "실제 layer를 32×32 output-stationary array의 해석적 cycle 모델에 매핑한 결과: depthwise layer를 채널별 GEMM으로 가정하면 MobileNetV2·V3에서 MAC 비중은 작지만 모델 cycle의 대부분을 차지합니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/09-workload-mapping.jpg"
      },
      {
        "src": "img/edge-npu-lab/10-rtl-overlap.png",
        "caption": {
          "en": "RTL: extra cycles without output double buffering, up to 53% for workloads with many folds and a short reduction dimension.",
          "ko": "RTL: 출력 double buffering이 없을 때 늘어나는 cycle. fold 수가 많고 K가 작은 workload일수록 커져 최대 53%입니다."
        },
        "thumb": "img/edge-npu-lab/thumbs/10-rtl-overlap.jpg"
      },
      {
        "src": "img/edge-npu-lab/11-custom-hef.png",
        "caption": {
          "en": "Custom models on the Hailo-10H: latency against MACs for the 48 controlled graphs (left), and INT8 accuracy against latency for the trained models (right).",
          "ko": "직접 설계한 모델의 Hailo-10H 실측: 통제 그래프 48개의 MAC 대비 지연(왼쪽)과 학습 모델의 지연 대비 INT8 정확도(오른쪽)."
        },
        "thumb": "img/edge-npu-lab/thumbs/11-custom-hef.jpg"
      },
      {
        "src": "img/edge-npu-lab/12-compiler-profile.png",
        "caption": {
          "en": "Hailo compiler profile: the summed per-layer latency estimate is rank-correlated with measured latency (Spearman ρ = 0.74, 48 micro-models), and depthwise layers report lower MAC utilization than conv (median 0.42 vs 0.57).",
          "ko": "Hailo 컴파일러 profile: layer 지연 추정치의 합이 실측 지연과 순위 상관을 보이고(Spearman ρ = 0.74, micro-model 48개), depthwise layer의 MAC 이용률이 conv보다 낮게 보고됩니다(중앙값 0.42 vs 0.57)."
        },
        "thumb": "img/edge-npu-lab/thumbs/12-compiler-profile.jpg"
      }
    ]
  },
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
        "en": "Built a depth-camera person-tracking prototype that shows a depth colormap, a color–depth overlay and the center/mean distance of the tracked person.",
        "ko": "깊이 컬러맵, 컬러–깊이 오버레이, 추적 대상의 중심·평균 거리를 표시하는 깊이 카메라 기반 사람 추적 프로토타입을 구현했습니다."
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
          "en": "Depth-camera prototype",
          "ko": "깊이 카메라 프로토타입"
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
          "en": "Depth-camera prototype with a depth colormap, a color–depth overlay and a 'Person Tracking' view that shows center/mean distance.",
          "ko": "깊이 컬러맵, 컬러–깊이 오버레이, 중심·평균 거리를 표시하는 'Person Tracking' 화면으로 구성된 깊이 카메라 프로토타입."
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
    "slug": "domain-adaptation-research",
    "year": "2024",
    "research": true,
    "path": "research",
    "period": {
      "en": "2024",
      "ko": "2024"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Domain Adaptation",
      "ko": "AI · 도메인 적응"
    },
    "title": {
      "en": "Domain Adaptation & Generalization Research",
      "ko": "Domain Adaptation · Generalization 연구"
    },
    "team": {
      "en": "XIILAB · AI Model Research Team",
      "ko": "씨이랩 · AI 모델 연구팀"
    },
    "role": {
      "en": "AI Researcher",
      "ko": "연구원"
    },
    "tagline": {
      "en": "Three domain adaptation studies on a PyTorch testbed for DANN, MCD and CDAN: reading the DANN domain classifier, the adversarial robustness of DA and DG models, and efficient DA with curriculum-style pseudo labels.",
      "ko": "DANN·MCD·CDAN PyTorch 실험 환경에서 진행한 세 가지 Domain Adaptation 연구: DANN domain classifier 해석, DA·DG 모델의 적대적 공격 강건성, Curriculum 방식 pseudo label을 활용한 효율적 DA."
    },
    "cardTagline": {
      "en": "Three domain adaptation studies on a PyTorch testbed for DANN, MCD and CDAN.",
      "ko": "DANN·MCD·CDAN 실험 환경에서 진행한 세 가지 Domain Adaptation 연구."
    },
    "summary": {
      "en": "Domain adaptation (DA) research in XIILAB's AI Model Research Team (2024), made up of three studies. The first reads a DANN domain classifier's accuracy as a measure of how well source and target features are aligned. The second tests whether DA and domain generalization (DG) models hold up under adversarial attacks. The third makes DA more efficient by training on easy target samples first with pseudo labels, using active learning and curriculum-based sampling. For these studies the hypotheses and experiment designs were written, and a PyTorch testbed, domain-adaptation-torch, was built. It trains source-only, DANN, MCD and CDAN models with CNN, VGG, ResNet or ViT backbones and evaluates them on source and target test data; a PGD attack evaluation was also added for DANN.",
      "ko": "씨이랩 AI 모델 연구팀에서 진행한 Domain Adaptation(DA) 연구로(2024), 세 가지 연구로 구성됩니다. 첫째, DANN domain classifier의 정확도로 source와 target feature가 얼마나 정렬되었는지 해석합니다. 둘째, DA·Domain Generalization(DG) 모델이 적대적 공격에 얼마나 강건한지 검증합니다. 셋째, Active Learning과 Curriculum 기반 샘플링으로 쉬운 target 데이터부터 pseudo label을 붙여 학습해 DA를 더 효율적으로 만듭니다. 각 연구의 가설과 실험 설계를 정리하고, 이를 위한 PyTorch 실험 환경(domain-adaptation-torch)을 구축했습니다. 이 실험 환경은 CNN·VGG·ResNet·ViT backbone으로 source-only, DANN, MCD, CDAN 모델을 학습해 source·target 테스트 데이터에서 평가하며, DANN에 대한 PGD 공격 평가도 추가했습니다."
    },
    "problem": {
      "en": "A model trained on one domain (source) often loses accuracy on another (target): digits from MNIST versus SVHN, or Amazon product photos versus DSLR photos in Office-31. Adversarial DA methods such as DANN train the feature extractor to fool a domain classifier, so that source and target features line up. This research set out to answer three questions: how to read the domain classifier's accuracy as a measure of that alignment, whether alignment makes a model easier to attack, and whether training on easy target samples first, with pseudo labels, makes adaptation more efficient.",
      "ko": "한 도메인(source)에서 학습한 모델은 다른 도메인(target)에서 정확도가 떨어지는 경우가 많습니다. MNIST와 SVHN의 숫자 이미지, Office-31의 Amazon 상품 사진과 DSLR 사진이 그 예입니다. DANN 같은 적대적 DA 기법은 feature extractor가 domain classifier를 속이도록 학습해 source와 target의 feature를 맞춥니다. 이 연구에서는 세 가지 질문에 답하고자 했습니다. domain classifier의 정확도를 정렬 정도의 지표로 어떻게 해석할지, 정렬이 모델을 적대적 공격에 더 취약하게 만드는지, 쉬운 target 데이터부터 pseudo label을 붙여 학습하면 적응이 더 효율적인지입니다."
    },
    "solution": {
      "en": "DANN is the baseline for all three studies. Study 1a relates the domain classifier's accuracy (0%, 50%, 100%) to task performance. Study 1b attacks DA and DG models with adversarial examples and compares how much accuracy each loses. Study 2 ranks target samples by CORAL loss and prediction uncertainty, trains on the easy ones with pseudo labels as extra source data, and repeats this as a curriculum. All three run on one shared testbed, so the method, backbone and datasets can be swapped in one place.",
      "ko": "세 연구 모두 DANN을 baseline으로 삼습니다. 연구 1a에서는 domain classifier의 정확도(0%, 50%, 100%)와 분류 성능의 관계를 살핍니다. 연구 1b에서는 DA·DG 모델에 적대적 공격을 적용해 모델별로 정확도가 얼마나 떨어지는지 비교합니다. 연구 2에서는 target 데이터를 CORAL loss와 예측 불확실성 기준으로 순위를 매기고, 쉬운 데이터에 pseudo label을 붙여 source 데이터처럼 학습하는 과정을 Curriculum 방식으로 반복합니다. 세 연구는 하나의 공용 실험 환경에서 진행해, 기법·backbone·데이터셋을 한 곳에서 바꿔 실험할 수 있습니다."
    },
    "tracks": [
      {
        "id": "1a",
        "group": {
          "en": "Foundations of DA / DG",
          "ko": "DA·DG 기초 연구"
        },
        "title": {
          "en": "Standard measurements for the DANN domain classifier",
          "ko": "DANN domain classifier에 대한 standard measurement 제안"
        },
        "hypothesis": [
          {
            "en": "Performance differs depending on whether the domain classifier's accuracy is 0%, 50% or 100%.",
            "ko": "domain classifier의 정확도가 0%, 50%, 100%일 때 성능에 차이가 있을 것입니다."
          },
          {
            "en": "100%: source and target differ widely, which means the feature extractor is not capturing features shared by both domains.",
            "ko": "100%: source와 target의 차이가 크고, feature extractor가 두 도메인의 공통된 특징을 잘 추출하지 못하고 있다는 뜻입니다."
          },
          {
            "en": "50%: the classifier cannot tell source from target and guesses at random, so the feature extractor ignores the domain gap and extracts shared features.",
            "ko": "50%: domain classifier가 source와 target을 구분하지 못하고 무작위로 추측하는 상태로, feature extractor가 도메인 차이를 무시하고 공통된 특징을 추출하고 있다는 뜻입니다."
          },
          {
            "en": "0%: the classifier predicts the domains the other way round.",
            "ko": "0%: domain classifier가 도메인을 반대로 예측하고 있다는 뜻입니다."
          }
        ],
        "design": [
          {
            "en": "Implement DANN (Unsupervised Domain Adaptation by Backpropagation) and design the experiments on it.",
            "ko": "DANN(Unsupervised Domain Adaptation by Backpropagation)을 구현하고, 이를 기준으로 실험을 설계합니다."
          },
          {
            "en": "Compare the settings with t-SNE and accuracy, then analyze the results and look for improvements.",
            "ko": "t-SNE 시각화와 성능 평가로 비교한 뒤, 결과를 분석하고 개선 방안을 찾습니다."
          }
        ],
        "figure": {
          "src": "img/domain-adaptation-research/03-domain-classifier-accuracy.png"
        }
      },
      {
        "id": "1b",
        "group": {
          "en": "Foundations of DA / DG",
          "ko": "DA·DG 기초 연구"
        },
        "title": {
          "en": "Adversarial vulnerability and robustness of DA / DG",
          "ko": "DA·DG에 대한 공격 취약성·강건성 연구"
        },
        "hypothesis": [
          {
            "en": "Applying DA lowers the model's robustness.",
            "ko": "DA를 적용하면 모델의 강건성이 떨어질 것입니다."
          }
        ],
        "design": [
          {
            "en": "Apply adversarial attacks after DA, to a model trained on source only and to one trained on source and target.",
            "ko": "DA를 적용한 모델에 적대적 공격 실험을 진행합니다. source만 학습한 경우와 source·target을 함께 학습한 경우를 비교합니다."
          },
          {
            "en": "Apply the same attacks after DG, to a model trained on source only.",
            "ko": "DG를 적용한 모델에도 같은 공격 실험을 진행합니다(source만 학습)."
          },
          {
            "en": "Run experiments on the domain distribution gap and compare the results with t-SNE and accuracy.",
            "ko": "domain distribution gap 실험을 진행하고, t-SNE 시각화와 성능 평가로 결과를 비교합니다."
          }
        ],
        "figure": {
          "src": "img/domain-adaptation-research/04-robustness-design.png"
        }
      },
      {
        "id": "2",
        "group": {
          "en": "Domain adaptation",
          "ko": "Domain Adaptation 연구"
        },
        "title": {
          "en": "Efficient DA through active learning and curriculum-based data sampling",
          "ko": "Active Learning과 Curriculum 기반 데이터 샘플링을 통한 효율적 DA"
        },
        "hypothesis": [
          {
            "en": "DA requires extracting similar features across domains.",
            "ko": "DA를 적용하려면 두 도메인에서 비슷한 feature를 뽑아야 합니다."
          },
          {
            "en": "Samples with similar features are easy problems for the model.",
            "ko": "비슷한 feature를 가진 데이터는 모델 입장에서 쉬운 문제입니다."
          },
          {
            "en": "Using the easy samples as pseudo labels should also raise accuracy on hard data points.",
            "ko": "쉬운 데이터를 pseudo label로 사용하면 어려운 데이터에 대한 예측 성능도 올라갈 것입니다."
          }
        ],
        "design": [
          {
            "en": "Rank target data by a CORAL (covariance) loss.",
            "ko": "CORAL(공분산) loss를 기준으로 target 데이터의 순위를 매깁니다."
          },
          {
            "en": "Rank data by the robustness (uncertainty) of the predictions.",
            "ko": "예측의 강건성(불확실성)을 기준으로 데이터의 순위를 매깁니다."
          },
          {
            "en": "Train on the samples filtered by CORAL loss + uncertainty loss as source data, and iterate.",
            "ko": "CORAL loss + uncertainty loss로 걸러낸 데이터를 source 데이터로 학습하고, 이를 반복합니다."
          }
        ],
        "figure": {
          "src": "img/domain-adaptation-research/05-efficient-da-loop.png"
        }
      }
    ],
    "approach": [
      {
        "title": {
          "en": "Data",
          "ko": "데이터"
        },
        "body": {
          "en": "datasetload() builds loaders for MNIST, MNIST-M, SVHN, Office-31 and Office-Home. Every image is resized to 224×224 and normalized with mean and std 0.5; MNIST's grayscale images are copied to three channels. Source and target each have a train and a test split (MNIST → SVHN by default).",
          "ko": "datasetload()가 MNIST, MNIST-M, SVHN, Office-31, Office-Home 로더를 만듭니다. 모든 이미지는 224×224로 resize하고 평균·표준편차 0.5로 정규화하며, MNIST의 흑백 이미지는 3채널로 복제합니다. source와 target은 각각 train·test split을 가지며, 기본 설정은 MNIST → SVHN입니다."
        }
      },
      {
        "title": {
          "en": "Backbones",
          "ko": "Backbone"
        },
        "body": {
          "en": "The feature extractor is a small three-block CNN, or an ImageNet-pretrained ResNet-18/34/50/101/152, VGG-11/13/16/19 or ViT-B/16. The classification head is removed so it returns a feature vector: 512-d for ResNet-18/34 and VGG (after global average pooling), 2,048-d for the deeper ResNets and 768-d for ViT.",
          "ko": "Feature extractor로 3단 CNN, 또는 ImageNet 사전학습 가중치를 쓰는 ResNet-18/34/50/101/152, VGG-11/13/16/19, ViT-B/16 중 하나를 고릅니다. 분류 head를 떼어 feature vector를 출력하며, 차원은 ResNet-18/34와 VGG(global average pooling 후)가 512, 더 깊은 ResNet이 2,048, ViT가 768입니다."
        }
      },
      {
        "title": {
          "en": "Source-only baseline",
          "ko": "Source-only baseline"
        },
        "body": {
          "en": "With the method set to None, a full classifier is trained on source data only (cross-entropy, Adam, lr 0.001), keeping the epoch with the best training accuracy. It is then tested on the source and target test sets, with a t-SNE plot for each.",
          "ko": "기법을 None으로 두면 source 데이터만으로 분류기 전체를 학습합니다(cross-entropy, Adam, lr 0.001). 학습 정확도가 가장 높은 epoch의 가중치를 저장한 뒤 source·target 테스트셋에서 평가하고 각각의 t-SNE를 그립니다."
        }
      },
      {
        "title": {
          "en": "DANN training",
          "ko": "DANN 학습"
        },
        "body": {
          "en": "Each step passes a source batch and a target batch through the feature extractor. A discriminator (MLP 256–128–1) learns to tell source (1) from target (0) on detached features with BCE; then the feature extractor and label classifier are updated on L_cls − λ·L_d, where λ = 0.1 · (2 / (1 + e^(−10p)) − 1) and p = current epoch / total epochs, so λ grows each epoch. Every 500 steps both test sets are evaluated, and the model with the best source accuracy is saved.",
          "ko": "매 step마다 source batch와 target batch를 feature extractor에 함께 넣습니다. Discriminator(MLP 256–128–1)는 detach한 feature로 source(1)와 target(0)을 구분하도록 BCE로 학습하고, 이어서 feature extractor와 label classifier를 L_cls − λ·L_d로 갱신합니다. λ = 0.1 · (2 / (1 + e^(−10p)) − 1)이고 p = 현재 epoch / 전체 epoch이므로, λ는 epoch마다 커집니다. 500 step마다 두 테스트셋을 평가하고, source 정확도가 가장 높은 모델을 저장합니다."
        }
      },
      {
        "title": {
          "en": "MCD and CDAN",
          "ko": "MCD와 CDAN"
        },
        "body": {
          "en": "MCD puts two linear classifiers on one feature extractor: both learn the source labels, and the L1 discrepancy between their predictions on target images is the adaptation loss. CDAN conditions the domain discriminator (MLP 1024–1024–1) on the outer product of the features and the class predictions, and adds its loss to the classification loss.",
          "ko": "MCD는 하나의 feature extractor 위에 linear classifier 두 개를 둡니다. 두 classifier는 source 레이블로 학습하고, target 이미지에 대한 두 예측의 L1 차이(discrepancy)를 적응용 loss로 씁니다. CDAN은 feature와 class 예측의 outer product를 domain discriminator(MLP 1024–1024–1)의 입력으로 써서 판별을 class에 조건화하고, 그 loss를 분류 loss에 더해 학습합니다."
        }
      },
      {
        "title": {
          "en": "Adversarial evaluation",
          "ko": "적대적 공격 평가"
        },
        "body": {
          "en": "With --test_adv, the DANN feature extractor and classifier are wrapped as one model and attacked with PGD from the Adversarial Robustness Toolbox (ε = 0.04, step 2/255, 40 iterations). Accuracy and t-SNE are computed on the attacked source and target test images.",
          "ko": "--test_adv 옵션을 주면 DANN의 feature extractor와 classifier를 하나의 모델로 묶고, Adversarial Robustness Toolbox의 PGD(ε = 0.04, step 2/255, 40 iteration)로 공격합니다. 공격한 source·target 테스트 이미지에서 정확도와 t-SNE를 계산합니다."
        }
      },
      {
        "title": {
          "en": "Runner and logging",
          "ko": "실행 및 로깅"
        },
        "body": {
          "en": "main.py holds the method (None, DANN, MCD or CDAN), the backbone and its depth, and the source and target datasets with their splits as argument defaults, plus --train and --test_adv flags (defaults: 3 epochs, batch size 64, 10 classes, seed 42). Loss, accuracy and t-SNE images are logged to Weights & Biases.",
          "ko": "main.py의 인자 기본값으로 기법(None, DANN, MCD, CDAN), backbone과 깊이, source·target 데이터셋과 split을 지정하고, --train·--test_adv 옵션을 둡니다(기본값: 3 epoch, batch size 64, 10 class, seed 42). Loss, 정확도, t-SNE 이미지는 Weights & Biases에 기록합니다."
        }
      }
    ],
    "results": [
      {
        "en": "Built domain-adaptation-torch, one PyTorch codebase in which the DA method (source-only, DANN, MCD, CDAN), the backbone (CNN, VGG, ResNet, ViT) and the source/target datasets are set in one place, the argument defaults in main.py.",
        "ko": "DA 기법(source-only, DANN, MCD, CDAN), backbone(CNN, VGG, ResNet, ViT), source·target 데이터셋을 main.py의 인자 기본값 한 곳에서 바꿔 실험하는 PyTorch 실험 환경(domain-adaptation-torch)을 구축했습니다."
      },
      {
        "en": "Wrote the evaluation path for study 1b, which attacks a DANN model's source and target test images with PGD (ε = 0.04, 40 iterations) before measuring accuracy.",
        "ko": "연구 1b를 위해 DANN 모델의 source·target 테스트 이미지에 PGD 공격(ε = 0.04, 40 iteration)을 적용한 뒤 정확도를 측정하는 평가 코드를 작성했습니다."
      },
      {
        "en": "Wrote data loaders for MNIST, MNIST-M, SVHN, Office-31 and Office-Home; the README also lists DomainNet-126, USPS and VisDA-2017 as further datasets.",
        "ko": "MNIST, MNIST-M, SVHN, Office-31, Office-Home 데이터 로더를 구현했고, README에는 DomainNet-126, USPS, VisDA-2017도 추가 데이터셋으로 정리했습니다."
      }
    ],
    "contributions": [
      {
        "en": "Wrote the hypotheses and experiment designs for the three studies (1a, 1b and 2).",
        "ko": "세 연구(1a, 1b, 2)의 가설과 실험 설계를 작성했습니다."
      },
      {
        "en": "Implemented domain-adaptation-torch (2024): data loaders, backbones, source-only/DANN/MCD/CDAN training, PGD evaluation, t-SNE and W&B logging.",
        "ko": "domain-adaptation-torch를 구현했습니다(2024). 데이터 로더, backbone, source-only·DANN·MCD·CDAN 학습, PGD 평가, t-SNE와 W&B 로깅을 포함합니다."
      }
    ],
    "tech": [
      "PyTorch",
      "Python",
      "torchvision",
      "DANN",
      "MCD",
      "CDAN",
      "ResNet",
      "VGG",
      "ViT-B/16",
      "Hugging Face Transformers",
      "Adversarial Robustness Toolbox",
      "scikit-learn (t-SNE)",
      "Weights & Biases"
    ],
    "topics": [
      "Domain Adaptation",
      "Domain Generalization",
      "Adversarial Robustness",
      "Active Learning",
      "Curriculum Learning",
      "Representation Learning"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "GitHub",
          "ko": "GitHub"
        },
        "url": "https://github.com/kcyoon689/domain-adaptation-torch"
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: DANN — Unsupervised Domain Adaptation by Backpropagation (ICML 2015)",
          "ko": "참고 논문: DANN — Unsupervised Domain Adaptation by Backpropagation (ICML 2015)"
        },
        "url": "https://arxiv.org/abs/1409.7495",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: MCD — Maximum Classifier Discrepancy (CVPR 2018)",
          "ko": "참고 논문: MCD — Maximum Classifier Discrepancy (CVPR 2018)"
        },
        "url": "https://arxiv.org/abs/1712.02560",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: CDAN — Conditional Adversarial Domain Adaptation (NeurIPS 2018)",
          "ko": "참고 논문: CDAN — Conditional Adversarial Domain Adaptation (NeurIPS 2018)"
        },
        "url": "https://arxiv.org/abs/1705.10667",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: Deep CORAL (ECCV 2016 Workshops)",
          "ko": "참고 논문: Deep CORAL (ECCV 2016 Workshops)"
        },
        "url": "https://arxiv.org/abs/1607.01719",
        "ref": true
      }
    ],
    "cover": "img/domain-adaptation-research/cover.jpg",
    "images": [
      {
        "src": "img/domain-adaptation-research/01-domain-shift.png",
        "thumb": "img/domain-adaptation-research/thumbs/01-domain-shift.jpg",
        "caption": {
          "en": "Domain shift and feature alignment (concept): before adaptation, the unlabeled target features (hollow) sit apart from the labeled source features (filled), so the decision boundary fitted on source cuts through target class A. DANN, MCD and CDAN, the adversarial methods in the testbed, aim to align the two feature distributions; the resulting domain-invariant features let the same boundary separate class A from class B in both domains.",
          "ko": "Domain shift와 feature 정렬 개념도: 적응 전에는 레이블 없는 target feature(빈 마커)가 레이블 있는 source feature(채운 마커)에서 벗어나 있어, source로 학습한 결정 경계가 target 클래스 A를 가로지릅니다. 실험 환경에 구현한 적대적 DA 기법(DANN, MCD, CDAN)은 두 feature 분포를 정렬하는 것을 목표로 하며, 정렬되어 domain invariant해진 feature에서는 같은 경계가 두 도메인 모두에서 클래스 A와 B를 나눕니다."
        }
      },
      {
        "src": "img/domain-adaptation-research/02-dann-architecture.png",
        "thumb": "img/domain-adaptation-research/thumbs/02-dann-architecture.jpg",
        "caption": {
          "en": "DANN as implemented in the repo's DANN_train(): one batch of labeled source and unlabeled target images goes through the feature extractor; the label predictor (FC 256 → 10) sees only the source half, and the domain classifier (FC 256 → 128 → 1) is trained on detached features to output 1 for source and 0 for target. The extractor and label predictor then minimize L_y − λ·L_d with λ = 0.1·(2/(1+exp(−10p)) − 1), p = epoch / max_epoch; the code has no separate gradient reversal layer (GRL), but this minus sign has the same effect on the extractor.",
          "ko": "저장소의 DANN_train()에 구현된 DANN 구조: 레이블이 있는 source와 레이블이 없는 target을 한 batch로 feature extractor에 넣고, label predictor(FC 256 → 10)는 source 절반만 받으며, domain classifier(FC 256 → 128 → 1)는 detach된 feature로 source는 1, target은 0으로 구분하도록 학습합니다. 이어서 feature extractor와 label predictor는 L_y − λ·L_d(λ = 0.1·(2/(1+exp(−10p)) − 1), p = epoch / max_epoch)를 최소화합니다. 코드에는 별도의 gradient reversal layer(GRL)가 없지만, 이 마이너스 부호가 feature extractor에 같은 효과를 냅니다."
        }
      },
      {
        "src": "img/domain-adaptation-research/03-domain-classifier-accuracy.png",
        "thumb": "img/domain-adaptation-research/thumbs/03-domain-classifier-accuracy.jpg",
        "caption": {
          "en": "Schematic of the Study 1a hypothesis: what the domain classifier's accuracy says about the features. From left: at 0% it predicts the domains the wrong way round, yet the two domains are still separable (flipping every prediction would give 100%); at 50% it guesses at chance level, so the features are shared by both domains (the goal); at 100% the domains are easy to tell apart and the features are domain-specific.",
          "ko": "연구 1a 가설의 모식도: domain classifier 정확도가 feature에 대해 말해 주는 것. 왼쪽부터 0%는 도메인을 정반대로 예측하는 상태로, 예측만 뒤집혔을 뿐 두 도메인은 여전히 구분됩니다. 50%는 무작위 추측 수준으로, 두 도메인이 공유하는 feature를 추출하고 있다는 뜻이며 이것이 목표 상태입니다. 100%는 두 도메인이 쉽게 구분되어 feature가 도메인마다 다르다는 뜻입니다."
        }
      },
      {
        "src": "img/domain-adaptation-research/04-robustness-design.png",
        "thumb": "img/domain-adaptation-research/thumbs/04-robustness-design.jpg",
        "caption": {
          "en": "Experiment design for the robustness study: two DA models (trained on source only, and on source + target) and a DG model trained on source only are each tested on the source and target test sets, with clean images and with images perturbed by a white-box PGD attack from the Adversarial Robustness Toolbox (eps = 0.04, step 2/255, 40 iterations). Comparing how much accuracy each model loses under attack tests the hypothesis that applying DA lowers robustness.",
          "ko": "강건성 연구의 실험 설계: Source만 학습한 DA 모델, Source·Target을 함께 학습한 DA 모델, Source만 학습한 DG 모델을 Source·Target 테스트셋에서 각각 평가하며, 원본(clean) 이미지와 Adversarial Robustness Toolbox의 white-box PGD 공격(eps = 0.04, step 2/255, 40회 반복)으로 만든 적대적 이미지에서 정확도를 측정합니다. 공격 후 정확도가 모델별로 얼마나 떨어지는지 비교해 ‘DA를 적용하면 강건성이 떨어진다’는 가설을 검증합니다."
        }
      },
      {
        "src": "img/domain-adaptation-research/05-efficient-da-loop.png",
        "thumb": "img/domain-adaptation-research/thumbs/05-efficient-da-loop.jpg",
        "caption": {
          "en": "Study 2 loop: the DA model, a shared feature extractor plus a classifier trained with L_class + λ·L_CORAL, scores each target sample by its CORAL loss (source vs target covariance) plus an uncertainty loss on its prediction, then sorts the samples from easy to hard. Low-scoring, easy samples get pseudo labels and join the source set, while hard ones stay in the target set for the next round of retraining. Circles 1–3 mark where each hypothesis applies.",
          "ko": "연구 2의 반복 학습 구조: 두 도메인이 함께 쓰는 feature extractor에 classifier를 더한 DA 모델을 L_class + λ·L_CORAL로 학습한 뒤, 각 target 데이터를 CORAL loss(source와 target의 공분산 차이)와 예측의 uncertainty loss를 더한 점수로 평가해 쉬운 데이터부터 어려운 데이터 순으로 정렬합니다. 점수가 낮은 쉬운 데이터는 pseudo label을 붙여 source 데이터에 추가하고, 어려운 데이터는 target에 남겨 둔 채 모델을 다시 학습하는 과정을 반복합니다. 원 안의 숫자 1–3은 각 가설이 적용되는 위치를 나타냅니다."
        }
      },
      {
        "src": "img/domain-adaptation-research/06-tsne-results.jpg",
        "thumb": "img/domain-adaptation-research/thumbs/06-tsne-results.jpg",
        "caption": {
          "en": "t-SNE plot kept in the repo's results/ folder (committed in 2024): features of 10 classes, labeled 0–9, form ten separate clusters, with a few points of other classes at the cluster edges. The plot does not state which domain, backbone or method produced it.",
          "ko": "저장소 results/ 폴더에 있는 t-SNE 결과(2024년 커밋): 0–9로 표시된 10개 클래스의 feature가 10개의 분리된 군집을 이루며, 군집 경계에 다른 클래스의 점이 일부 섞여 있습니다. 그림에는 어떤 도메인, backbone, 기법의 결과인지 표시되어 있지 않습니다."
        }
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
    "links": [
      {
        "type": "paper",
        "label": {
          "en": "Reference: PatchCore — Towards Total Recall in Industrial Anomaly Detection (CVPR 2022)",
          "ko": "참고 논문: PatchCore — Towards Total Recall in Industrial Anomaly Detection (CVPR 2022)"
        },
        "url": "https://arxiv.org/abs/2106.08265",
        "ref": true
      },
      {
        "type": "github",
        "label": {
          "en": "Reference: PatchCore official code (amazon-science)",
          "ko": "참고 자료: PatchCore 공식 코드 (amazon-science)"
        },
        "url": "https://github.com/amazon-science/patchcore-inspection",
        "ref": true
      }
    ],
    "cardTagline": {
      "en": "PatchCore-based PCB defect detection with a backbone ensemble and mask prediction.",
      "ko": "백본 앙상블과 마스크 예측을 더한 PatchCore 기반 PCB 결함 탐지 모델."
    },
    "cover": "img/pcb-defect-detection/cover.jpg",
    "images": [
      {
        "src": "img/pcb-defect-detection/01-patchcore-architecture.png",
        "thumb": "img/pcb-defect-detection/thumbs/01-patchcore-architecture.jpg",
        "caption": {
          "en": "PatchCore architecture redrawn from Roth et al. (CVPR 2022): during training, a frozen ImageNet-pretrained backbone extracts patch features from defect-free images; these are stored in a memory bank and reduced to a coreset. At test time, each test patch is scored by its distance to the nearest neighbour in the coreset, which gives an anomaly map and an image-level anomaly score; this project builds on it with a backbone ensemble and mask prediction.",
          "ko": "Roth et al.(CVPR 2022)의 PatchCore 구조를 다시 그린 그림입니다. 학습 단계에서는 결함 없는 이미지를 ImageNet으로 사전학습한 고정 백본에 넣어 patch feature를 뽑고 memory bank에 모은 뒤 coreset으로 줄입니다. 테스트 단계에서는 각 patch를 coreset 안의 최근접 이웃과의 거리로 점수화해 anomaly map과 이미지 단위 anomaly score를 만들며, 이 프로젝트는 여기에 백본 앙상블과 마스크 예측을 더했습니다."
        }
      }
    ]
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
          "ko": "/predict는 업로드 이미지를 정규화된 28×28 흑백 텐서로 변환하고, 최신 등록 버전을 조회해 MLflow pyfunc로 추론한 뒤 예측 레이블과 softmax 신뢰도를 반환합니다. PyTorch와 ONNX Runtime 출력이 일치하는지 검증하는 테스트 스크립트도 작성했습니다."
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
      "ko": "A-EYE(AI + Additional Eye)는 의약품 포장에 인쇄된 복용 방법·용량 정보를 읽기 어려운 사용자를 위한 의약품 정보 서비스입니다. Roboflow로 레이블링한 패키지 이미지로 학습한 YOLOv5 모델이 제품을 인식하고, Docker로 배포한 FastAPI 서버가 약품명·용법 및 용량·효능·bounding box를 JSON으로 모바일 앱에 반환합니다. 3개 제품 클래스 전체에서 mAP@0.5 0.985를 기록했고, 앱을 Google Play에 출시했으며 개발자용 API 문서도 함께 제공했습니다."
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
          "ko": "데이터 수집 및 레이블링"
        },
        "body": {
          "en": "Crawled medicine-package images and built bounding-box annotations in Roboflow (777 images in the project dataset), then split the data into train/validation/test at 8:1:1.",
          "ko": "의약품 패키지 이미지를 크롤링하고 Roboflow로 bounding box를 레이블링했습니다(프로젝트 데이터셋 777장). 데이터는 학습·검증·테스트용으로 8:1:1 비율로 분할했습니다."
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
        "ko": "의약품 패키지 데이터셋을 레이블링하고 전처리했습니다."
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
    "research": true,
    "path": "research",
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
          "en": "Redrawn overview of the 3D WSI registration pipeline. Adjacent slides of an unaligned stack are matched by a transformer-based matcher on pyramid inputs, the correspondences from each scale are rescaled to the original resolution and merged, and a rigid transform R | t solved by SVD is applied to the target slide to align the stack in 3D. The slide thumbnails are taken from the LoFTR result, and the match lines and points are illustrative.",
          "ko": "3D WSI 정합 파이프라인 개요를 다시 그린 그림입니다. 정렬되지 않은 스택의 인접 슬라이드를 pyramid 입력에서 Transformer 기반 matcher로 매칭하고, 해상도별 대응점을 원본 해상도로 리스케일링해 합친 뒤, SVD로 구한 rigid 변환 R | t를 target 슬라이드에 적용해 스택을 3D로 정렬합니다. 슬라이드 썸네일은 LoFTR 결과 이미지에서 가져왔으며, 매칭선과 점은 이해를 돕기 위한 개념도입니다."
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
    "research": true,
    "path": "research",
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
      "ko": "Pseudo-labeling, 좌우 반전 일관성 점수, 학습된 손실 예측기를 결합해 사람이 레이블링할 가치가 있는 이미지를 고르는 객체 탐지용 액티브 러닝 전략."
    },
    "summary": {
      "en": "Labeling object-detection data is expensive, especially in fields such as medical imaging that need expert annotators. Active learning asks people to label only the images that help the model most. This work uses an SSD300 detector (VGG16 backbone) and combines semi-supervised pseudo-labeling and a consistency score, following AL-SSL (Elezi et al., CVPR 2022), with a loss prediction module (Yoo & Kweon, CVPR 2019) that estimates each image's training loss, so the selection also covers objects of low-confidence or poorly learned classes.",
      "ko": "객체 탐지 데이터 레이블링은 비용이 크며, 의료 영상처럼 전문가가 필요한 분야에서는 더욱 그렇습니다. 액티브 러닝은 모델에 가장 도움이 되는 이미지만 사람이 레이블링하도록 합니다. 이 연구는 SSD300 검출기(VGG16 backbone)를 기반으로, AL-SSL(Elezi et al., CVPR 2022)의 준지도학습 pseudo-labeling·일관성 점수와 각 이미지의 학습 손실을 예측하는 loss prediction module(Yoo & Kweon, CVPR 2019)을 결합해, 신뢰도가 낮거나 학습이 덜 된 클래스의 객체까지 선택에 반영합니다."
    },
    "problem": {
      "en": "Typical active learning scores every class with the same confidence. When the dataset is imbalanced or classes behave differently, some classes are under-sampled, which leads to low accuracy or a distribution shift for those classes. Pseudo-labeling reduces this class bias, but early in training the many uncertain images make labeling inefficient.",
      "ko": "일반적인 액티브 러닝은 모든 클래스를 같은 confidence로 평가합니다. 데이터셋이 클래스 간에 불균형하거나 클래스마다 양상이 다르면 일부 클래스가 덜 선택되어, 해당 클래스의 정확도가 낮아지거나 distribution shift가 생길 수 있습니다. Pseudo-labeling은 이런 클래스 편향을 줄이지만, 학습 초기에는 불확실한 데이터가 많아 레이블링 효율이 떨어질 수 있습니다."
    },
    "solution": {
      "en": "An unlabeled image and its horizontally flipped copy go through the same detector; disagreement between the two predictions (class distributions and boxes) gives a consistency score, and confident predictions become pseudo-labels. A loss prediction module attached to three SSD feature maps learns to predict each image's loss. Candidates chosen by entropy and inconsistency are re-ranked by predicted loss, and the top-K are sent for human annotation.",
      "ko": "레이블이 없는 이미지와 좌우 반전한 이미지를 같은 검출기에 넣어, 두 예측(클래스 분포와 박스)의 불일치로 일관성 점수를 구하고, 신뢰도가 높은 예측은 pseudo-label로 사용합니다. SSD의 세 feature map에 붙인 loss prediction module이 각 이미지의 손실을 예측하도록 학습합니다. Entropy와 불일치로 고른 후보를 예측 손실로 다시 정렬해, 상위 K개를 사람이 레이블링합니다."
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
          "ko": "레이블이 없는 이미지와 좌우 반전 이미지의 매칭된 검출 결과를, 클래스 분포는 대칭 KL divergence로, 박스는 x 중심을 부호 반전한 뒤 중심·크기의 제곱 차이로 비교합니다."
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
          "ko": "각 cycle마다 entropy가 높은 3,000장을 남기고, 그중 불일치가 큰 2,000장을 후보로 고른 뒤, loss prediction module이 예측 손실이 가장 큰 1,000장을 골라 사람이 레이블링합니다."
        }
      },
      {
        "title": {
          "en": "Training setup",
          "ko": "학습 설정"
        },
        "body": {
          "en": "Configured for COCO: 82,081 training images, 5,000 labeled at the start and 1,000 added in each of 5 cycles.",
          "ko": "COCO 기준으로 설정했습니다. 학습 이미지 82,081장 중 5,000장을 초기 레이블로 두고, 5번의 cycle마다 1,000장씩 추가합니다."
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
        "ko": "이 방법이 실제로 레이블 수와 반복 횟수를 줄이는지는 추가 검증이 필요하며, 다음 단계로 iteration마다 K%의 데이터를 다르게 샘플링해 비교하는 실험을 계획했습니다."
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
          "ko": "방법 개요: 레이블 데이터와 레이블 없는 데이터(좌우 반전 포함)로 loss prediction module을 단 SSD300 검출기를 학습합니다. 매 cycle마다 예측 손실 상위 K장은 사람이 레이블링하고, 신뢰도가 높은 검출은 pseudo-label이 되며, 나머지는 레이블 없이 남습니다."
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
    "slug": "cad-synthetic-data",
    "year": "2022",
    "research": true,
    "path": "research",
    "period": {
      "en": "2022 · M.S. research (KNU)",
      "ko": "2022 · 석사 연구 (경북대)"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI · Synthetic Data",
      "ko": "AI · 합성 데이터"
    },
    "title": {
      "en": "Automated CAD-Based Dataset Generation for 3D Object Recognition",
      "ko": "3D 객체 인식을 위한 CAD 기반 딥러닝 학습 데이터 자동 생성"
    },
    "team": {
      "en": "Computer & Robot Vision Lab (CRVL), Kyungpook National University",
      "ko": "경북대학교 컴퓨터 로봇 비전 연구실 (CRVL)"
    },
    "role": {
      "en": "First author · pipeline design and implementation · co-author of the pose-estimation follow-up",
      "ko": "제1저자 · 파이프라인 설계 및 구현 · 자세 추정 후속 연구 공저자"
    },
    "tagline": {
      "en": "A pipeline that turns ShapeNet CAD models into a COCO-format detection and segmentation dataset without manual labeling: multi-view captures, threshold-based masks and boxes, and random real backgrounds.",
      "ko": "ShapeNet CAD 모델을 여러 시점에서 캡처하고, threshold로 mask와 bounding box를 얻고, 실제 배경 사진을 합성해 수작업 레이블링 없이 COCO 형식의 탐지·분할 데이터셋을 만드는 파이프라인."
    },
    "cardTagline": {
      "en": "Captures ShapeNet CAD models and auto-labels them into a COCO dataset for detection and segmentation.",
      "ko": "ShapeNet CAD 모델로 COCO 형식 탐지·분할 데이터셋을 자동 생성."
    },
    "summary": {
      "en": "Building a detection or segmentation dataset by hand takes a great deal of time; the paper points to ImageNet, where people labeled more than 14 million images over about ten years. This M.S. project at Kyungpook National University built a pipeline that turns 3D object files into a labeled training set without manual annotation. ShapeNet models are captured from many viewpoints on a white background, each capture is thresholded into a binary mask that gives the segmentation polygon and bounding box, the object is composited onto random background photos, and the result is exported in COCO format. A detection and segmentation network trained on this data was tested on real photos, and the results looked accurate in qualitative checks (KRoC 2022, first author). A co-authored follow-up (IEIE 2022) used synthetic renders to estimate the pose of objects in single real photos.",
      "ko": "탐지·분할용 데이터셋을 사람이 직접 만들려면 많은 시간이 듭니다. 논문에서 예로 든 ImageNet은 약 10년에 걸쳐 1,400만 장이 넘는 이미지를 사람이 직접 레이블링했습니다. 경북대학교 석사과정에서 진행한 이 연구에서는 3D 물체 파일로 수작업 없이 레이블이 달린 학습 데이터를 만드는 파이프라인을 개발했습니다. ShapeNet 모델을 흰 배경에서 여러 시점으로 캡처하고, 각 이미지를 threshold로 이진화해 segmentation polygon과 bounding box를 얻은 뒤, 물체를 무작위 배경 사진에 합성해 COCO 형식으로 저장합니다. 이 데이터로 학습한 탐지·분할 네트워크를 실제 사진으로 테스트한 결과, 정성적으로 보아 탐지와 분할이 정확하게 이루어졌습니다(KRoC 2022, 제1저자). 공저자로 참여한 후속 연구(IEIE 2022)에서는 합성 렌더링 이미지를 이용해 실제 단일 사진 속 물체의 자세를 추정했습니다."
    },
    "problem": {
      "en": "Detection and segmentation networks need many labeled images, and how noisy the training data are and how consistently the labels are structured have a large effect on training. Labeling thousands of images by hand costs a lot of time and effort, and cost, time and quality all vary with how the labeling is done. Captures of 3D models can be labeled automatically, but training on images that showed only the object on a white background did not work properly. This matches the ICLR 2021 finding that image backgrounds strongly affect object recognition; a similar failure with plain-background chair renders is described in the Background Image Dependency project.",
      "ko": "탐지·분할 네트워크는 레이블이 달린 이미지가 많이 필요하고, 학습 데이터에 노이즈가 얼마나 적은지, 레이블링이 얼마나 정형화되어 있는지가 학습 결과에 큰 영향을 줍니다. 수천 장을 손으로 레이블링하려면 시간과 노력이 많이 들고, 레이블링 방식에 따라 비용·시간·품질도 달라집니다. 3D 모델을 캡처한 이미지는 자동으로 레이블링할 수 있지만, 흰 배경에 물체만 있는 이미지로 학습하자 학습이 제대로 되지 않았습니다. 이는 이미지 배경이 물체 인식에 큰 영향을 준다는 ICLR 2021 논문의 결과와도 일치하며, 단색 배경의 의자 렌더링으로 학습했을 때 생긴 비슷한 실패 사례는 '배경 이미지 의존도 분석' 프로젝트에 정리되어 있습니다."
    },
    "solution": {
      "en": "The pipeline's inputs are 3D object files and a pool of background photos. Each ShapeNet model is captured from a fixed set of viewpoints on a white background. Because the background is uniform, a grayscale threshold separates the object: the binary image becomes the segmentation mask, and the object region gives the bounding box and contour polygon, which are written into a COCO annotation JSON. The same mask cuts the object out and places it on a random background photo, so the training images have real backgrounds instead of plain white.",
      "ko": "파이프라인의 입력은 3D 물체 파일과 배경 사진 묶음입니다. ShapeNet 모델을 흰 배경에서 정해진 시점들로 캡처합니다. 배경이 균일하므로 grayscale threshold만으로 물체를 분리할 수 있으며, 이진 이미지는 segmentation mask가 되고, 물체 영역에서 bounding box와 외곽선 polygon을 얻어 COCO annotation JSON에 기록합니다. 같은 mask로 물체를 잘라 무작위 배경 사진 위에 합성해, 학습 이미지가 흰 단색 배경이 아닌 실제 배경을 갖도록 했습니다."
    },
    "approach": [
      {
        "title": {
          "en": "Multi-view capture",
          "ko": "다시점 캡처"
        },
        "body": {
          "en": "ShapeNet models are loaded into a Unity-based viewer and captured at five elevations (0°, 20°, 30°, 45°, 60°) and every 5° of azimuth, 360 images per model. An earlier Python/OpenGL viewer that loads .obj files and saves frames in a turntable auto-capture mode is also public.",
          "ko": "Unity 기반 뷰어에 ShapeNet 모델을 불러와 고각 5단계(0°, 20°, 30°, 45°, 60°)와 방위각 5° 간격으로 모델당 360장을 캡처합니다. .obj 파일을 불러와 턴테이블 자동 캡처 모드로 프레임을 저장하는, 이전에 만든 Python/OpenGL 뷰어도 공개되어 있습니다."
        }
      },
      {
        "title": {
          "en": "Threshold masks",
          "ko": "Threshold 기반 mask"
        },
        "body": {
          "en": "Each capture is converted to grayscale and thresholded into a binary image in which the object is 1 and the background 0. The paper sets the threshold per model to suit its captures; the public script uses 254 for every class and saves masks with the class ID on object pixels and 255 (ignore) elsewhere.",
          "ko": "캡처 이미지를 grayscale로 바꾼 뒤 threshold를 적용해 물체는 1, 배경은 0인 이진 이미지를 만듭니다. 논문에서는 모델별 캡처 특성에 맞춰 threshold를 정했고, 공개 스크립트는 모든 클래스에 254를 쓰며 물체 픽셀에는 클래스 ID, 나머지에는 255(ignore)를 기록한 mask를 저장합니다."
        }
      },
      {
        "title": {
          "en": "Background compositing",
          "ko": "배경 합성"
        },
        "body": {
          "en": "About 200 background photos are randomly cropped to 1920×1280, and the 2880×1920 captures are randomly cropped to the same size, which also shifts where the object sits in the frame. A threshold of 254 marks the white background, which is replaced with a background crop while the object pixels are kept.",
          "ko": "배경 사진 약 200장을 1920×1280 크기로 무작위 crop하고, 2880×1920 캡처 이미지도 같은 크기로 무작위 crop해 프레임 안에서 물체의 위치가 달라지게 합니다. 이후 threshold 254로 흰 배경 영역을 찾아 배경 crop으로 바꾸고, 물체 픽셀은 그대로 둡니다."
        }
      },
      {
        "title": {
          "en": "Labels and COCO export",
          "ko": "레이블 생성과 COCO 변환"
        },
        "body": {
          "en": "scikit-image traces the mask's contours, and the script keeps the first one and simplifies it into a polygon with Shapely; the polygon's bounds and area give the bounding box and area. split-folders divides the data 70/20/10 into train, validation and test sets (seed 689), and each split is written as a COCO JSON with images, annotations and categories, alongside the mask images.",
          "ko": "scikit-image로 mask의 외곽선을 추적한 뒤 첫 번째 외곽선만 Shapely로 단순화해 polygon을 만들며, polygon의 범위와 넓이로 bounding box와 area를 구합니다. split-folders로 데이터를 train·validation·test에 70/20/10 비율로 나누고(seed 689), 각 split을 images·annotations·categories가 담긴 COCO JSON과 mask 이미지로 저장합니다."
        }
      },
      {
        "title": {
          "en": "Follow-up (co-author): view retrieval",
          "ko": "후속 연구(공저): 유사 시점 검색"
        },
        "body": {
          "en": "The IEIE 2022 study segments real photos crawled from Google with a DetectoRS instance-segmentation model trained on synthetic images. 3D models are rendered every 3° of azimuth and 10° of elevation, and HOG descriptors (128×128 window, 2×2 block, 8×8 cell; similarity = dot product of the normalized descriptors) rank the renders against the segmented object. The top 9 are kept.",
          "ko": "IEIE 2022 연구에서는 구글에서 크롤링한 실제 사진을, 합성 이미지로 학습한 DetectoRS instance segmentation 모델로 분할합니다. 3D 모델은 방위각 3°, 고각 10° 간격으로 렌더링하고, HOG 디스크립터(윈도 128×128, 블록 2×2, 셀 8×8, 정규화한 디스크립터의 내적으로 유사도 측정)로 분할된 물체와 비교해 상위 9장을 고릅니다."
        }
      },
      {
        "title": {
          "en": "Follow-up (co-author): pose check by projection",
          "ko": "후속 연구(공저): 투영으로 자세 확인"
        },
        "body": {
          "en": "Among the 9 candidates, KAZE matching against the real image picks the render with the most matched feature points as the closest pose. That render is lifted to 3D with its depth, PnP gives the rotation and translation to the real image, and the 3D points are projected onto the photo to check the pose. The camera intrinsics were set to arbitrary values.",
          "ko": "후보 9장 중 실제 이미지와 KAZE 매칭을 해 특징점이 가장 많은 렌더링을 가장 비슷한 자세로 봅니다. 이 렌더링을 깊이 정보와 결합해 3차원 점으로 복원하고, PnP로 실제 이미지와의 회전·평행이동 관계를 구한 뒤 실제 사진에 투영해 자세를 확인합니다. 이때 카메라 내부 파라미터는 임의의 값으로 설정했습니다."
        }
      }
    ],
    "results": [
      {
        "en": "After training on the generated dataset, the network was tested on real photos. In these qualitative tests it detected and segmented objects such as a lamp, beer bottles, a bowl and a football helmet; the paper describes detection and segmentation accuracy as quite high but reports no quantitative metrics.",
        "ko": "생성한 데이터셋으로 학습한 네트워크를 실제 사진으로 테스트했습니다. 정성적 테스트에서 램프, 맥주병, 그릇, 미식축구 헬멧 같은 물체를 탐지하고 분할했으며, 논문은 탐지·분할 정확도가 꽤 높다고 서술하지만 정량 지표는 제시하지 않았습니다."
      },
      {
        "en": "Because the labels are generated in a fixed format, the paper concludes that any object with a 3D file can be turned into training data of consistent quality, without converting thousands of images by hand.",
        "ko": "논문은 레이블이 정해진 형식으로 생성되므로, 3D 물체 파일만 있으면 수천 장을 손으로 변환하지 않고도 일정한 품질의 학습 데이터를 얻을 수 있다고 결론지었습니다."
      },
      {
        "en": "Each generated image contains a single object, which can make it harder to learn how classes relate to each other; the paper suggests combining images with mosaic augmentation to address this.",
        "ko": "생성된 이미지에는 물체가 하나씩만 있어 클래스 간 관계(correlation)를 학습하기 어려울 수 있으며, 논문은 mosaic 기법으로 여러 이미지를 합쳐 이 한계를 보완하는 방법을 제안했습니다."
      },
      {
        "en": "In the co-authored pose study, the car and piano examples suggest that renders with poses similar to the real objects were found. The authors name two limitations for future work: the fundamental domain gap between real and synthetic images, and that distance was not considered in the azimuth-based search.",
        "ko": "공저로 참여한 자세 추정 연구에서는 자동차와 피아노 예시를 통해 실제 물체와 비슷한 자세의 합성 이미지를 찾은 것으로 보였습니다. 다만 실제·합성 이미지 사이의 근본적인 도메인 차이와, 방위각 기반 탐색에서 거리를 고려하지 않은 점을 향후 개선할 한계로 꼽았습니다."
      }
    ],
    "contributions": [
      {
        "en": "First author of the KRoC 2022 paper; designed the pipeline from multi-view capture through background compositing to COCO export.",
        "ko": "KRoC 2022 논문 제1저자로, 다시점 캡처부터 배경 합성, COCO 변환까지 이어지는 파이프라인을 설계했습니다."
      },
      {
        "en": "Wrote the public auto-annotation scripts (threshold masks, dataset split, and a COCO JSON export adapted from the Immersive Limit COCO tutorial) and the background crop-and-merge scripts.",
        "ko": "공개 저장소의 자동 레이블링 스크립트(threshold mask 생성, 데이터 분할, Immersive Limit COCO 튜토리얼을 바탕으로 한 COCO JSON 변환)와 배경 crop·합성 스크립트를 작성했습니다."
      },
      {
        "en": "Third author of the IEIE 2022 pose-estimation paper.",
        "ko": "IEIE 2022 자세 추정 논문의 제3저자로 참여했습니다."
      }
    ],
    "publications": [
      {
        "en": "Development of an Automated Deep Learning Dataset Generation Pipeline Using CAD for 3D Object Recognition — 17th Korea Robotics Society Annual Conference (KRoC), May 2022",
        "ko": "3D 개체 인식을 위한 CAD 기반의 딥러닝 학습 데이터 자동 생성 파이프라인 개발 — 제17회 한국로봇종합학술대회(KRoC), 2022.05"
      },
      {
        "en": "Real Mono-frame object pose estimation from synthetic images — IEIE Summer Conference, Jun 2022 (3rd author)",
        "ko": "가상 합성 영상으로부터 실제 단일 영상에서의 객체 자세 추정 — 대한전자공학회 하계종합학술대회, 2022.06 (제3저자)"
      }
    ],
    "tech": [
      "Python",
      "OpenCV",
      "scikit-image",
      "Shapely",
      "split-folders",
      "Unity",
      "PyOpenGL / GLFW",
      "ShapeNet",
      "COCO format",
      "DetectoRS",
      "HOG / KAZE / PnP"
    ],
    "topics": [
      "Synthetic Data",
      "Auto Annotation",
      "Object Detection",
      "Instance Segmentation",
      "Pose Estimation"
    ],
    "links": [
      {
        "type": "github",
        "label": {
          "en": "Auto annotation",
          "ko": "자동 레이블링"
        },
        "url": "https://github.com/kcyoon689/Auto_Annotation_For_detectoRS"
      },
      {
        "type": "github",
        "label": {
          "en": "Background merge",
          "ko": "배경 합성"
        },
        "url": "https://github.com/kcyoon689/crop_img_for_coco"
      },
      {
        "type": "github",
        "label": {
          "en": "OpenGL viewer",
          "ko": "OpenGL 뷰어"
        },
        "url": "https://github.com/kcyoon689/Obj_AutoCapture_And_Viewer"
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: ShapeNet",
          "ko": "참고: ShapeNet"
        },
        "url": "https://shapenet.org",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: Noise or Signal (ICLR 2021)",
          "ko": "참고 논문: Noise or Signal (ICLR 2021)"
        },
        "url": "https://arxiv.org/abs/2006.09994",
        "ref": true
      },
      {
        "type": "other",
        "label": {
          "en": "Reference: COCO annotation tutorial (Immersive Limit)",
          "ko": "참고: COCO annotation 튜토리얼 (Immersive Limit)"
        },
        "url": "https://www.immersivelimit.com/tutorials/create-coco-annotations-from-scratch",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: DetectoRS (CVPR 2021)",
          "ko": "참고 논문: DetectoRS (CVPR 2021)"
        },
        "url": "https://arxiv.org/abs/2006.02334",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: HOG (Dalal & Triggs, CVPR 2005)",
          "ko": "참고 논문: HOG (Dalal & Triggs, CVPR 2005)"
        },
        "url": "https://doi.org/10.1109/CVPR.2005.177",
        "ref": true
      },
      {
        "type": "paper",
        "label": {
          "en": "Reference: KAZE Features (ECCV 2012)",
          "ko": "참고 논문: KAZE Features (ECCV 2012)"
        },
        "url": "https://doi.org/10.1007/978-3-642-33783-3_16",
        "ref": true
      }
    ],
    "cover": "img/cad-synthetic-data/cover.jpg",
    "images": [
      {
        "src": "img/cad-synthetic-data/01-pipeline-overview.png",
        "thumb": "img/cad-synthetic-data/thumbs/01-pipeline-overview.jpg",
        "caption": {
          "en": "Pipeline overview, redrawn from Fig. 1 of the KRoC 2022 paper with details from the public code. Each ShapeNet render from the Unity viewer (360 per model) is thresholded into a binary image, which gives the segmentation mask, bounding box and polygon. The same binary mask is used to merge the object onto a random crop of one of about 200 background photos, and the results are saved as a COCO dataset split 70/20/10 into train, val and test.",
          "ko": "KRoC 2022 논문 Fig. 1을 공개 코드의 세부 내용을 반영해 다시 그린 파이프라인 개요입니다. Unity 뷰어로 모델당 360장씩 캡처한 ShapeNet 렌더링 이미지를 threshold로 이진화해 segmentation mask, bounding box, polygon을 얻습니다. 같은 이진 mask로 약 200장의 배경 사진 중 하나에서 무작위로 잘라낸 영역에 물체를 합성하고, 결과를 70/20/10 비율의 train·val·test로 나눈 COCO 데이터셋으로 저장합니다."
        }
      },
      {
        "src": "img/cad-synthetic-data/02-viewpoint-sampling.png",
        "thumb": "img/cad-synthetic-data/thumbs/02-viewpoint-sampling.jpg",
        "caption": {
          "en": "Viewpoint sampling per ShapeNet model: five elevations (0°, 20°, 30°, 45°, 60°; left) times 72 azimuths at 5° steps (right) gives 5 × 72 = 360 rendered images per model.",
          "ko": "ShapeNet 모델별 시점 샘플링: 위도 5단계(0°, 20°, 30°, 45°, 60°; 왼쪽 측면도)와 경도 5° 간격(오른쪽 평면도)으로 물체를 촬영해 모델당 5 × 72 = 360장의 이미지를 얻습니다."
        }
      },
      {
        "src": "img/cad-synthetic-data/03-auto-labeling-example.png",
        "thumb": "img/cad-synthetic-data/thumbs/03-auto-labeling-example.jpg",
        "caption": {
          "en": "The auto-labeling steps re-run on the sofa render from Fig. 2 of the KRoC 2022 paper: the white-background render is thresholded (gray ≤ 245 on this downscaled copy; the original code used 254 on full-resolution renders) into a binary mask, whose extent and outline give the bounding box and segmentation for the COCO JSON. The last panel is the paper's own composite of the same render on a background photo.",
          "ko": "KRoC 2022 논문 Fig. 2의 소파 렌더링에 자동 레이블링 과정을 다시 적용한 예시입니다. 흰 배경 렌더링에 threshold(이 축소본에서는 245, 원래 코드는 원본 해상도에서 254)를 적용해 이진 mask를 만들고, mask의 범위에서 bounding box를, 외곽선에서 segmentation을 얻어 COCO JSON에 기록합니다. 마지막 패널은 논문에 실린 배경 합성 결과입니다."
        }
      },
      {
        "src": "img/cad-synthetic-data/04-real-image-results.png",
        "thumb": "img/cad-synthetic-data/thumbs/04-real-image-results.jpg",
        "caption": {
          "en": "Fig. 3 of the KRoC 2022 paper: results on real photos from the network trained on the generated data. Each detection shows a box, class label, confidence score and instance mask: a desk lamp (lamp), two beer bottles (beer, 1.00 each), a bowl (bowl, 1.00) and a football helmet (football_helmet, 1.00). A small object at the lower-left edge of the bowl photo is also labeled bowl (0.79).",
          "ko": "KRoC 2022 논문 Fig. 3: 생성한 데이터로 학습한 네트워크의 실제 사진 테스트 결과입니다. 각 검출에는 box, 클래스 이름, 신뢰도, instance mask가 표시되어 있습니다. 탁상 램프(lamp), 맥주병 두 개(beer, 각 1.00), 그릇(bowl, 1.00), 미식축구 헬멧(football_helmet, 1.00)이 검출되었고, 그릇 사진 왼쪽 아래 가장자리의 작은 물체도 bowl(0.79)로 검출되었습니다."
        }
      },
      {
        "src": "img/cad-synthetic-data/05-pose-pipeline.png",
        "thumb": "img/cad-synthetic-data/thumbs/05-pose-pipeline.jpg",
        "caption": {
          "en": "Pose-estimation steps of the co-authored IEIE 2022 study: a real image crawled from Google is segmented with DetectoRS, CAD renders taken every 3° of azimuth and 10° of elevation are ranked by HOG similarity, and of the top 9 the view with the most KAZE matches is taken as the estimated pose. The selected view and its depth give 3D points, PnP gives R and t, and projecting the points onto the real image shows how well they line up with the object.",
          "ko": "공저로 참여한 IEIE 2022 연구의 자세 추정 과정: 구글에서 크롤링한 실제 이미지를 DetectoRS로 분할하고, 방위각 3°·고각 10° 간격으로 렌더링한 CAD 이미지 중 HOG 유사도 순으로 상위 9장을 고른 뒤, KAZE 매칭점이 가장 많은 뷰를 추정 자세로 선택합니다. 선택한 뷰와 깊이로 3D 점군을 만들고 PnP로 R, t를 구한 뒤, 실제 이미지에 투영해 물체와 잘 겹치는지 확인합니다."
        }
      },
      {
        "src": "img/cad-synthetic-data/06-pose-hog-candidates.png",
        "thumb": "img/cad-synthetic-data/thumbs/06-pose-hog-candidates.jpg",
        "caption": {
          "en": "Fig. 1 of the IEIE 2022 paper. Left: real photos of a car and an upright piano, each above its instance-segmentation result with the background removed. Right: for each object, the nine synthetic renders whose HOG descriptors are most similar to the segmented photo.",
          "ko": "IEIE 2022 논문 그림 1. 왼쪽: 자동차와 업라이트 피아노의 실제 사진과, 그 아래 배경을 제거한 instance segmentation 결과. 오른쪽: 물체마다 분할된 사진과 HOG 디스크립터가 가장 비슷한 합성 렌더링 9장."
        }
      },
      {
        "src": "img/cad-synthetic-data/07-pose-kaze-projection.png",
        "thumb": "img/cad-synthetic-data/thumbs/07-pose-kaze-projection.jpg",
        "caption": {
          "en": "Fig. 2 of the IEIE 2022 paper. Left: KAZE feature matches between the selected synthetic view and the segmented real object. Right: 3D points built from the selected render and its depth, projected onto the real image (red) with the pose estimated by PnP, to check how well the poses agree.",
          "ko": "IEIE 2022 논문 그림 2. 왼쪽: 선택된 합성 이미지와 분할된 실제 물체 사이의 KAZE 특징점 매칭. 오른쪽: 선택된 렌더링과 깊이 정보로 만든 3차원 점을 PnP로 추정한 자세로 실제 이미지에 투영한 결과(빨간 점)로, 두 자세가 얼마나 일치하는지 확인하는 용도입니다."
        }
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
      "ko": "F2 지표는 precision보다 recall에 더 큰 가중치를 두므로, 불가사리를 놓치는 비용이 오탐보다 큽니다. 이미지는 연속된 영상 시퀀스의 프레임이므로 train/validation을 무작위로 나누면 상관관계가 높은 프레임이 양쪽에 섞여 validation 점수가 실제보다 높게 나옵니다. 레이블이 있는 이미지는 5,000장이 채 되지 않았고, validation fold를 떼어 내면 학습에 쓸 수 있는 이미지는 3,000~4,000장 정도에 불과했습니다. 연속 프레임에 보이는 불가사리 일부에는 레이블이 빠져 있었고, 로컬 validation 점수와 리더보드 점수도 서로 어긋났습니다."
    },
    "solution": {
      "en": "A YOLOv5 detector, starting from a yolov5m baseline, with a sequence-aware Stratified Group 5-fold split. Validation folds mimic the assumed test mix of about 80% background and 20% annotated images. Training adds a small share of background images to reduce false positives, plus Albumentations augmentation, a tuned learning-rate schedule and objectness-loss gain. A lowered confidence threshold favors recall.",
      "ko": "yolov5m 베이스라인에서 출발해 시퀀스 단위 Stratified Group 5-fold 분할을 적용한 YOLOv5 검출 모델입니다. Validation fold는 test set의 구성으로 가정한 배경 이미지 약 80%, 레이블 이미지 약 20% 비율을 따르도록 했습니다. 학습에는 오탐을 줄이기 위해 소량의 배경 이미지를 추가하고, Albumentations 데이터 증강과 조정한 learning-rate schedule, objectness loss gain을 적용했습니다. 또한 recall을 높이기 위해 confidence threshold를 낮췄습니다."
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
          "ko": "프레임을 영상 시퀀스 단위로 묶어(GroupKFold) 같은 시퀀스가 train과 validation에 동시에 들어가지 않도록 했습니다. 이를 Stratified Group 5-fold 분할로 발전시켜, 가정한 test 분포에 맞게 train fold는 레이블 이미지 약 95%·배경 이미지 약 5%, validation fold는 레이블 이미지 약 20%·배경 이미지 약 80%로 구성했습니다."
        }
      },
      {
        "title": {
          "en": "Background images & recall",
          "ko": "배경 이미지와 recall"
        },
        "body": {
          "en": "Unannotated background images were mixed into training. Adding 300 background images with a 0.15 confidence threshold raised the leaderboard score from 0.389 to 0.443. Under F2, false negatives matter more than false positives, so lower confidence thresholds were preferred.",
          "ko": "레이블이 없는 배경 이미지를 학습 데이터에 섞었습니다. 배경 이미지 300장을 추가하고 confidence threshold를 0.15로 설정하자 리더보드 점수가 0.389에서 0.443으로 올랐습니다. F2에서는 false positive보다 false negative가 더 중요하므로 낮은 confidence threshold를 택했습니다."
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
          "ko": "데이터 증강·해상도·레이블"
        },
        "body": {
          "en": "Albumentations augmentation used up/down and left/right flips, RandomBrightnessContrast, GaussNoise and random scaling. A larger inference image size improved the score because the public test set contained mostly small starfish. Roboflow was used to inspect sequences and clean labels.",
          "ko": "Albumentations로 상하·좌우 반전, RandomBrightnessContrast, GaussNoise, 무작위 스케일링을 적용했습니다. 공개 test set에는 작은 불가사리가 많아, 추론 이미지 크기를 키우자 점수가 올랐습니다. Roboflow로 시퀀스를 확인하고 레이블을 정제했습니다."
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
        "ko": "팀의 레이블 검토 작업 중 영상 시퀀스 하나를 Roboflow로 분석하는 일을 맡았습니다."
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
          "ko": "데이터 분할 설계: 5-fold 구성에서 train fold는 레이블 이미지 약 95%·배경 이미지 약 5%, validation fold는 가정한 test set에 맞춰 레이블 이미지 약 20%·배경 이미지 약 80%"
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
          "ko": "연속된 영상 프레임: 한 프레임에서 레이블이 있는 불가사리가 인접 프레임에서는 레이블이 빠져 있어, 레이블 정제와 pseudo-labeling 아이디어의 계기가 된 사례"
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
    "research": true,
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
      "ko": "경북대학교 심화학습 응용 과목의 기말 프로젝트입니다. ICLR 2021 논문 'Noise or Signal: The Role of Image Backgrounds in Object Recognition'을 바탕으로 했습니다. IN-9L 변형 데이터셋에 맞는 YOLOv5 레이블을 구축하고, 전경만 있는 데이터·배경만 있는 데이터·배경을 섞은 데이터로 YOLOv5s를 학습해 test set별 정확도를 비교했습니다. YOLOv5에서도 측정 가능한 수준의 배경 의존도가 나타났지만 논문의 ResNet 결과보다는 낮았고, 배경을 섞은 데이터로 추가 학습하자 배경에 따른 정확도 차이가 줄었습니다."
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
        "ko": "ImageNet annotation으로 IN-9L의 YOLOv5 레이블을 만드는 전처리 스크립트(className.py, resetClass.py)를 작성했습니다."
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
          "ko": "Only-FG 학습 데이터: 검은 배경 위 전경 물체와 YOLOv5 레이블(dog, bird, reptile, insect, fish)"
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
        "ko": "가위·바위·보 손 모양 데이터셋을 수집하고 레이블링했습니다."
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
        "src": "img/robotic-arm-pid/03-firmware-flowchart.png",
        "caption": {
          "en": "Firmware flowchart: after setup(), loop() reads the potentiometers (ADC), applies P control and drives the servos. When the Record button (Butt_R) is HIGH, Record() applies D control and stores the angles in an array; when the Play button (Butt_P) is HIGH, play() steps each servo toward the recorded angle until it matches.",
          "ko": "펌웨어 순서도: setup() 이후 loop()에서 포텐쇼미터 값을 ADC로 읽고 P 제어를 거쳐 서보모터를 구동합니다. 녹화 버튼(Butt_R)이 HIGH이면 Record()가 D 제어를 거쳐 각도를 배열에 저장하고, 재생 버튼(Butt_P)이 HIGH이면 play()가 각 서보를 저장된 각도에 도달할 때까지 한 단계씩 움직입니다."
        },
        "thumb": "img/robotic-arm-pid/thumbs/03-firmware-flowchart.jpg"
      },
      {
        "src": "img/robotic-arm-pid/04-circuit-schematic.jpg",
        "caption": {
          "en": "Circuit schematic (final revision, Nov 2018): an ATmega328P-PU with a crystal oscillator reads the five master-arm potentiometers on ADC0–ADC4 and drives the five servos (MG1–MG5) from pins 15, 16, 12, 11 and 5. The Record/Play switches (SW2, SW3) on pins 13 and 14 have 10 kΩ pull-downs, and SW1 switches the battery supply.",
          "ko": "회로도(최종본, 2018.11): 크리스털 발진기를 단 ATmega328P-PU가 ADC0–ADC4로 마스터 암의 포텐쇼미터 5개를 읽고, 15·16·12·11·5번 핀으로 서보모터 5개(MG1–MG5)를 구동합니다. 13·14번 핀의 녹화/재생 스위치(SW2, SW3)에는 10kΩ 풀다운 저항을 달았고, SW1로 배터리 전원을 켜고 끕니다."
        },
        "thumb": "img/robotic-arm-pid/thumbs/04-circuit-schematic.jpg"
      },
      {
        "src": "img/robotic-arm-pid/05-master-arm-3d-model.jpg",
        "caption": {
          "en": "3D model of the potentiometer master arm (Tinkercad).",
          "ko": "포텐쇼미터 마스터 암 3D 모델 (Tinkercad)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/05-master-arm-3d-model.jpg"
      },
      {
        "src": "img/robotic-arm-pid/06-controller-pcb-annotated.jpg",
        "caption": {
          "en": "Two-tier controller board (callouts in Korean): ATmega328P, record/play switches, power switch, servo and potentiometer headers, with the Li-Po battery on the lower tier.",
          "ko": "2층 구조 제어 기판: ATmega328P, 녹화/재생 스위치, 전원 스위치, 서보·포텐쇼미터 커넥터와 아래층의 Li-Po 배터리."
        },
        "thumb": "img/robotic-arm-pid/thumbs/06-controller-pcb-annotated.jpg"
      },
      {
        "src": "img/robotic-arm-pid/07-pwm-without-vs-with-pid.jpg",
        "caption": {
          "en": "Oscilloscope captures from the capstone report: servo PWM without PID (left, Agilent scope, noisy) vs. with PID control (right, DSO138 handheld scope, clean pulse).",
          "ko": "캡스톤 보고서의 오실로스코프 측정: PID 미적용 서보 PWM(왼쪽, Agilent 오실로스코프, 노이즈 심함)과 PID 적용 파형(오른쪽, DSO138 휴대용 오실로스코프, 깨끗한 펄스)."
        },
        "thumb": "img/robotic-arm-pid/thumbs/07-pwm-without-vs-with-pid.jpg"
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
        "src": "img/groundwater-monitoring/02-system-block-diagram.png",
        "caption": {
          "en": "Control system block diagram (redrawn): four 4–20 mA sensor loops (12 V supply, 250 Ω sense resistor) measure water pressure. The Arduino Uno reads them on A0–A3, converts each reading to voltage, shows the values on the OLED and logs them to a micro-SD card.",
          "ko": "제어 시스템 블록도를 다시 그린 그림입니다. 4–20mA 센서 루프 4개(12V 전원, 250Ω 감지 저항)가 수압을 측정하고, Arduino Uno가 이를 A0–A3로 읽어 전압으로 변환한 뒤 OLED에 표시하고 micro-SD 카드에 기록합니다."
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
        "src": "img/fpga-elevator/03-atmega328p-stepper-circuit.png",
        "caption": {
          "en": "The ATmega328P stepper controller for the elevator, redrawn as an OrCAD Capture-style schematic. Three floor buttons (S1–S3, each with a 10k pull-down) go to D5–D7. D8–D11 drive a ULN2003A, which switches the two coils of a unipolar stepper whose centre taps connect to V+.",
          "ko": "엘리베이터 ATmega328P 스테퍼 제어 회로를 OrCAD Capture 스타일로 다시 그린 회로도입니다. 층 버튼 3개(S1–S3, 각각 10k 풀다운)는 D5–D7에 연결되고, D8–D11은 ULN2003A를 거쳐 유니폴라 스테퍼 모터의 두 코일을 구동하며, 코일의 센터탭은 V+에 연결됩니다."
        },
        "thumb": "img/fpga-elevator/thumbs/03-atmega328p-stepper-circuit.jpg"
      },
      {
        "src": "img/fpga-elevator/04-fpga-servo-circuit.png",
        "caption": {
          "en": "Redrawn OrCAD-style schematic of the FPGA door-servo controller: a Xilinx XC3S200 (Spartan-3) reads switches S1 and S2 (with pull-downs R2 and R1) and drives servo J1's pulse pin with a PWM signal, all powered from a single battery.",
          "ko": "FPGA 도어 서보 제어 회로를 OrCAD 스타일로 다시 그린 회로도입니다. Xilinx XC3S200(Spartan-3)이 풀다운 저항 R2, R1이 달린 스위치 S1, S2의 입력을 받아 서보 J1의 pulse 핀으로 PWM 신호를 출력하며, 전원은 배터리 하나로 공급됩니다."
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
