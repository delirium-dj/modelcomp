# MiMo V2.6 Pro — findings by Ling 3.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship trillion-parameter omnimodal MoE (September 2026) — MIT open weights, #1 open-weights model on the AA Intelligence Index (46.3), built for complex projects, long-horizon tasks, cybersecurity, and research; sibling of MiMo V2.6 Flash.
- **Provider / access:** Xiaomi MiMo API (`mimo-v2.6-pro`), OpenRouter (Xiaomi and DeepInfra endpoints); Token Plan subscription available; prepaid pay-as-you-go. Pro UltraSpeed variant: same weights, up to 20x faster at 10x price.
- **Release / knowledge:** September 2026; knowledge cutoff not stated in the materials reviewed.
- **IDs:** `xiaomi/mimo-v2.6-pro`. No Free ID on OpenCode Zen (`noFreeId`) — scored on Xiaomi's paid API.
- **Context window:** 1M tokens total; 128,000 max output (RPM 100, TPM 10M).
- **Modalities:** text, image, video, audio in (omnimodal); text out; tool calls.
- **Pricing (as of 2026-10-02):** $0.435/$0.87 per 1M input/output (Xiaomi API; ¥0.025/¥3 CNY tiers); cache-hit input $0.0036/M (99% cache discount); AA blended $0.18/M at 7:2:1; UltraSpeed $4.35/$8.70.
- **Architecture:** 1.02T-parameter omnimodal MoE, 42B active (per site meta.json); MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report; vs Claude Opus 5 89.1%, GPT-5.6 Sol 88.8%, Fable 5 84.3%) — top of its comparison set
- Terminal-Bench 4.0: **34.9%** (vendor; AA reads 34.8%) — 14 pts behind Claude Opus 5's 49.0%, behind GPT-5.6 Sol 39.9% and Fable 5 42.4%
- AutomationBench v1.0.6: **53.1%** (vendor; AA's own AutomationBench-AA reads 58.6%) — ahead of Opus 5 50.3%, Sol 45.8%, Fable 5 46.2%
- OSWorld-Verified: **82.0%** (vendor; vs Opus 5 83.4%, Sol 83.0%, Fable 5 86.0%)
- Toolathlon-Verified: **76.9%** (vendor; vs Opus 5 80.6%, Sol 74.9%, Fable 5 77.9%)
- GDPval-AA 2.1: **1673** (vendor; vs Opus 5 1708, Sol 1588, Fable 5 1595); AA-Briefcase: **1520** (AA)
- Agents' Last Exam: **31.6%** (vendor; ties Opus 5 31.6%, ahead of Sol 30.8%, Fable 5 25.7%)
- JobBench: **62.0%** (vendor; vs Opus 5 65.7%, Sol 45.4%, Fable 5 57.4%)
- ProgramBench: **26.5%** (vendor; vs Opus 5 37.0%, Sol 25.0%, Fable 5 33.0%)
- MiMo Code Bench: **63.2%**; MiMo VisualCoding: **72.3%** (vendor's own suites)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **46.3** — #1 among 115 open-weight models, level with Grok 4.7 (xhigh); below GPT-6 Sol (max) 48, GPT-6 Astra / Fable 5.1 53, Opus 5.5 58
- Humanity's Last Exam (AA): **49.4%**
- AA-Omniscience: Accuracy **34.8%**, Hallucination Rate **40.6%**, Index **8.4** — the model's weakest area
- GDP.pdf (AA): **19.2%**
- GPQA Diamond / CritPt / ARC-AGI-2: no verified public score found

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi model card table; the release post's RL figure reads 72.6% — an internal inconsistency worth noting; vs Opus 5 74.0%, Sol 73.0%, Fable 5 70.0%)
- AA-SciCode: **60.9%** (AA)
- LiveCodeBench / SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks retrieval score published

Cybersecurity:

- CyberGym: **94.0%**; MiMo Cyber Bench: **80.2%**; SEC Bench Pro: **66.3%** (vs GPT-5.6 Sol 79.1%)
- ExploitBench: **47.9%** (vs Opus 5 70.0%, Sol 78.5%, Fable 5 78.0% — trails by 22–31 pts); ExploitGym: **17.8%**

### Normalized scores (1–100)

- **Tool use: 82/100.** The independent vals.ai Terminal-Bench 2.1 run reads 67.79% — 22.1 pts under the vendor's 89.9% and well outside the ±10.6-point noise band, so the vendor figure no longer anchors the score; OSWorld-Verified 82.0%, Toolathlon-Verified 76.9%, AutomationBench-AA 59%, JobBench 62.0%, AA-Briefcase 1516 and GDPval-AA 1685 carry it; Terminal-Bench 4.0 34.9%, ProgramBench 26.5%, Agents' Last Exam 31.6% and Goldie Bench (#24 of 26 frontier models) cap it.
- **Reasoning: 81/100.** HLE 49.4% (AA) clears the 40%+ frontier reference and the AA Intelligence Index of 46.3 is #1 among open weights, but it sits well under the 60+ frontier bar, and the AA-Omniscience results (34.8% accuracy, 40.6% hallucination) are a real weakness; no GPQA/MRCR/CritPt published.
- **Context window: 95/100.** 1M tokens / 128K out; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 92/100.** omnimodal input (text/image/video/audio) with text out — the +audio-in band (90–100).
- **Coding: 84/100.** AA-SciCode 60.9% clears the 55% reference and DeepSWE 71.9% sits just under the 74% bar (with a 71.9 vs 72.6 internal inconsistency in Xiaomi's own materials), with CyberGym 94.0% and SEC Bench Pro 66.3% supporting; the independent TB 2.1 read of 67.79% is under the 85% bar and ProgramBench 26.5% is weak.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M with near-free cache hits ($0.0036/M, 99% discount) — AA measured $0.13 per Intelligence Index task vs $1.06 for GPT-6 Sol and $5.98 for Opus 5.5; the only drag is 42 tok/s output speed (under half of GPT-6 Sol's 98).
- **Overall Score: 87/100.** (82+81+95+92+84)/5 = 86.8 → 87 — the open-weights value flagship: #1 open-model Intelligence Index at ~1/20th of Opus 5.5's per-task cost, with the independent Terminal-Bench 2.1 read (67.79% vs the vendor's 89.9%), weaker Terminal-Bench 4.0 and high hallucination as the trade-offs.

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Tool use 89→82, Coding 88→84, Overall 89→87** — driven by a new independent Terminal-Bench 2.1 run that contradicts the vendor's headline figure. Reasoning 81 / Context 95 / Multimodal 92 / Cost 94 unchanged:

- **Terminal-Bench 2.1: 67.79% (vals.ai independent, Terminus 2 harness)** — 22.1 pts under the vendor technical-report figure of 89.9% that anchored Tool use 89, and well outside the ±10.6-point noise band. On vals.ai's independent runs the sibling order reverses (Flash 76.40 vs Pro 67.79 — Flash above Pro, though that 8.6-point gap sits inside the noise band). This file's MiMo V2.6 Flash treatment already tracks the independent vals.ai run over the vendor card; the same rule applies here.
- BenchmarkList confirms the vendor table with ranks: TB 2.1 89.9% (rank 5 of 194, launch post), SciCode 60.9% (rank 6 of 296, 98th pct), DeepSWE 71.9% (rank 10 of 52), TB 4.0 34.9% (rank 13 of 29), ProgramBench 26.5% (rank 30 of 37), HLE 49.4% (rank 15 of 478, 97th pct), Intelligence Index 46.3 (rank 28 of 427, 94th pct), AIIQ Composite IQ 125 (rank 29 of 147).
- AA v4.3.2 component reads (Max effort, vs GPT-6 Sol Max): AA-Briefcase 1516 (Pro wins, Sol 1479), GDPval-AA v2.1 1685 (Pro wins, Sol 1510), AutomationBench-AA 59% (Sol 62%), TB 4.0 35% (Sol 44%), SciCode 61% (Sol 58%), HLE 49% (Sol 48%), GDP.pdf 19% (Sol 25%), CritPt 27% (Sol 31%), AA-Omniscience 8 (Sol 27 — Pro's weakest row), AA-LCR 86% (Sol 84%). AA-LCR 86% also fills the "no retrieval score" gap (good, not ≥98%).
- **Goldie Bench: 6.35/10 across 50 scored one-shot build tasks, #24 of 26 frontier models** (5 golds, 8 silvers, 4 bronzes) — a weak real-world build signal that corroborates the downward revision.
- Tool use re-anchors on OSWorld 82.0%, Toolathlon 76.9%, AutomationBench-AA 59%, JobBench 62.0%, AA-Briefcase 1516 and GDPval-AA 1685 — solidly mid-80s, capped by TB 4.0 35%, ProgramBench 26.5%, Agents' Last Exam 31.6% and Goldie #24/26. Coding re-anchors on AA-SciCode 60.9% (over the 55% ref), DeepSWE 71.9% (just under the 74% bar), CyberGym 94.0% and SEC Bench Pro 66.3%, with the independent TB 2.1 at 67.8% (under the 85% bar) and ProgramBench 26.5% capping.
- Cost efficiency 94 stands: AA measured $0.13 per Intelligence Index task vs GPT-6 Sol's $1.06 and Opus 5.5's $5.98; the 42 tok/s output speed (under half of GPT-6 Sol's 98) remains the only drag.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Xiaomi MiMo model card and technical report, Artificial Analysis, BenchLM, OpenLM, ComputingForGeeks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
