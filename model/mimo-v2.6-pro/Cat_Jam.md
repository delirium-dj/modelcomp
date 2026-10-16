# MiMo-V2.6-Pro — findings by Cat Jam

- Source: Xiaomi / MiMo-V2.6-Pro (`opencode/mimo-v2-6-pro`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship native multimodal open-weights model (MoE) tuned via large-scale RL. Claims #1 open-source on Artificial Analysis at release; deep long-horizon coding + multimodal + computer use; very low official pricing.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-pro`), with UltraSpeed variant (`mimo-v2.6-pro-ultraspeed`). Open weights on Hugging Face. OpenAI-compatible API; reasoning configured via model variant.
- **Release / knowledge:** Released 2026-09-21/22 (open-sourced with tech report); knowledge cutoff not explicitly published (likely mid-2026).
- **IDs:** `mimo-v2.6-pro` (Xiaomi), `gpt...` no; OpenRouter `xiaomi/mimo-v2.6-pro` (not sampled); Bedrock not in sampled docs.
- **Context window:** 1,048,576 tokens (?; docs mention 1M training/context). Verified via MiMo blog/Xiaomi docs (Lounge reports 1M). Max output not stated in sampled pricing docs (not specified).
- **Modalities:** Native fully multimodal — text, image, audio, video in; text out (per Xiaomi blog). Tool calling, 3D spatial reasoning, CUA, structured outputs.
- **Pricing (as of 2026-10-16):** Overseas real-time $0.435 (cache hit $0.0036) / $0.87 per 1M input/output; batch $0.2175/$0.435. UltraSpeed $4.35/$8.70. Cache write free (limited-time). No hosted free tier; weights open (MIT? licence not strong; weights open).
- **Architecture:** MoE, open weights; heavy RL scaling (14+ pt DeepSWE gain). Active params not disclosed in sampled docs. Open-sourced weights under Xiaomi license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: vendor **89.9%** (Xiaomi report; Vals independent 67.8%)
- Terminal-Bench 4.0: **34.9%** (Xiaomi report) / AA 34.8%
- OSWorld-Verified: **82%** (Xiaomi)
- CyberGym: **94.0%** (Xiaomi)
- Toolathlon-Verified: **76.9%** (Xiaomi) / AA ~?
- JobBench: **62.0%**
- AutomationBench: **53.1%** (Xiaomi) / AA 58.6%
- Agents' Last Exam: **31.6%**
- GDPval-AA v2 Elo: **1673** (Xiaomi) / AA ratio 59.2%
- AA-Briefcase: **1516**
- ExploitGym: 17.8%
- MCP/Claw? DeepSearchQA est 87.7

Reasoning / knowledge:

- AA Intelligence Index: **46.3** (AA, top open-weight at release)
- HLE (no tools): **49.4%** (AA) — Vals/Timeline report 49.4; vendor not giving HLE? no tools 38.1 est
- GPQA Diamond: **93.1%** (AA est) / 91.9 (benchgap est) / Vals 92.9
- AA-LCR v1.1: **86.3%** (measured)
- CritPt: **26.6%** (AA)
- Omniscience Accuracy / Hallucination: **34.8% / 40.6%** (AA, weak non-hall)
- MMLU-Pro: independent pending (pending); MMLU 90.1? (benchgap est)
- HLE w/ tools: 60.6% (benchgap est)

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi report) (72.6 gain from 58.4)
- ProgramBench: **26.5%** (Xiaomi report)
- Terminal-Bench 2.1: 89.9% (vendor) / 67.8% (Vals independent; 22 pt gap)
- FrontierSWE v2: 25.9% (AA)
- SWE-bench Pro: 76.2% (benchgap est)
- SWE-bench Verified: 91.9% (benchgap est) / 93.4 Vals
- LiveCodeBench (Vals): 87.2%
- AA-SciCode: **60.9%**
- SWE-Marathon? vendor not listed in sampled; no number

Long context:

- "supports 1M" per Xiaomi/community; no published MRCR/LVBench score in sampled data except LVBench? no. Long-context index not found.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 82, CyberGym 94, JobBench 62, AutomationBench 53/59, GDPval 1673, Toolathlon 76.9. Strong agent/computer use at open-source price; TB2.1 independent 67.8 (vs vendor 89.9) and TB4 34.8 cap.
- **Reasoning: 84/100.** HLE 49.4 (AA), GPQA 93, AA Index 46.3, LCR 86.3, CritPt 26.6, Omniscience 34.8/40.6 caps.
- **Context window: 94/100.** Claimed 1M; no published retrieval score caps top-end.
- **Multimodal: 87/100.** Native multimodal input (text/image/audio/video) per Xiaomi; CUA/desktop design. No independent standardized multimodal benchmark in sampled data beyond AA-SciCode 60.9.
- **Coding: 86/100.** DeepSWE 71.9, AA-SciCode 60.9, SWE-Pro 76.2 (est), LiveCodeBench Vals 87.2; TB4 34.8 and independent TB2.1 67.8 cap.
- **Cost efficiency: 96/100.** $0.435/$0.87 per 1M (cache hit 90% off) — exceptionally cheap top-open-weight tier; batch halves; UltraSpeed 10× costs more.
- **Overall Score: 88/100.** Mean of (88 + 84 + 94 + 87 + 86) / 5 = 87.8. Best-value open-source frontier MoE for agents, trailing closed flagships on raw knowledge.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Xiaomi MiMo docs/blog/pricing, Artificial Analysis, benchgap, benchlm, Lounge.ai, ai-model-timeline, felloai, Toolathon, RidgeBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
