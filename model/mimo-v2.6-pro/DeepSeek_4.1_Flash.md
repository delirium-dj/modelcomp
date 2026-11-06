# MiMo V2.6 Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`mimo-v2-6-pro`, **37 rows**, **57.27/100, #58 of 1015** — was 33 rows, 73.47, #12 of 992; the rank shift reflects BenchLM coverage changes, not a model change), Xiaomi technical report, Artificial Analysis, Vals AI.
> **Corrected values:** AA-Omniscience **index −4.5% / accuracy 34.8% / hallucination 60.2%** (was 8.4 / 34.8 / 40.6 — index and hallucination are worse than previously recorded); **MLCR-AA 12.8%** (was 18.3%); AA-Briefcase 1512 (was 1515).
> **Newly captured rows:** **CyberGym-E2E-AA 78.6%**, AA Cyber Index **56.1%**, CWE-Bench-AA 63.3%, DeepsecBench-AA 26.2%.
> **Re-verified unchanged:** TB2.1 89.9% (self) / 67.79% (Vals); TB4.0 34.8–34.9%; OSWorld-Verified 82%; CyberGym 94.0%; Toolathlon 76.9%; JobBench 62.0%; GDPval-AA 1673 Elo / 59.2%; AA Index 46.3 (#1/117 open-weight); AA-HLE 49.4; AA-LCR 86.3; AA-SciCode 60.9; DeepSWE 71.9%; ProgramBench 26.5%; STEMBench 2.17; Design Arena 1307.
> **No score change:** the strongest-open-omnimodal-agentic profile stands, now with an explicit knowledge-fragility flag (negative Omniscience index); scores held at 90.
> Sources this pass: https://benchlm.ai/models/mimo-v2-6-pro · https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL · https://artificialanalysis.ai/models/mimo-v2-6-pro · https://www.vals.ai/models/xiaomi_mimo-v2.6-pro

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`mimo-v2-6-pro`) re-read on 2026-10-23 carried **33 rows** (was 16) and computed **73.47/100, #12 of 992**. Newly captured then: GDPval-AA 1673 Elo / 59.2%, AA-Briefcase 1515, AA AutomationBench 58.6%, AA TB4.0 34.8%, AA-AnalystAgent 37.5%, GDP.pdf 19.2%, ExploitGym 17.8%, STEMBench 2.17, AA-LCR 86.3%, CritPt 26.6%, MLCR-AA 18.3, AA-HLE 49.4, AA-Omniscience 8.4/34.8/40.6, AA-SciCode 60.9%, Bug Hunt 22.7 fixes, Design Arena 1307.

> **Re-verified 2026-10-18.** BenchLM (`mimo-v2-6-pro`, 16 rows) computed an overall **73.54/100 (#12 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: AA Index 46/46.32 (v4.3.2) — #1/117 open-weight (median 18), $0.1332/task, 43.7–44 t/s, TTFT 4.06s, AA-HLE 49.4, AA-LCR 86.3, AA-SciCode 60.9. Vals: Vals Index 55.20% (#12/45), Vibe Code Bench 85.22% (#9–13/110), CyberBench 72.86% (#3), MedScribe 88.31%, Finance Agent v2 57.34%, Public Benefits 68.94%, Legal Research 47.12%, TB2.1 67.79%, TB4.0 31.31%, ProgramBench 0.50%, IOI 39.33%, TB-Science 2.86%, Code Migration 43.01%, $0.410/test. BenchLM: public 73.53, TB2.1 89.9%, TB4.0 34.90%, Toolathlon 76.9%, OSWorld 82.0%, JobBench 62.0%, CyberGym 94.0%, DeepSWE 71.9%, ProgramBench 26.0–26.5%. Conflicts surfaced: modality mismatch (Vals vs official); TB2.1/TB4.0 harness gaps; ProgramBench spread; speed (44 t/s vs 125 bar chart); Vals Index drift.

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal sparse MoE (2026-09-21/22), aimed at long-horizon agentic and professional knowledge work; #1 open-weight on AA's Intelligence Index but slow, somewhat verbose, with fragile factual recall.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-pro`), OpenRouter (`xiaomi/mimo-v2.6-pro`), Novita, 9+ providers; weights at `XiaomiMiMo/MiMo-V2.6-Pro-RL`. No Zen Free ID.
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`; `mimo-v2.6-pro-ultraspeed` (up to 20× speed, $4.35/$8.70).
- **Context window:** 1,048,576 (1M) tokens; 131,072 max output.
- **Modalities:** text, image, video, audio input; text out; reasoning, function calling, structured outputs.
- **Pricing (as of 2026-11-06):** **$0.435 in / $0.87 out per 1M**, $0.0036 cached (99% off); $0.1332/AA Index task; MIT open weights; batch −50%.
- **Architecture:** sparse MoE, **1.02T total / 42B active** (384 routed / 8 active experts), FP8, MIT; hybrid attention (60/70 layers sliding-window 128; 10 global; MiMo ViT + audio encoders; 5-layer MTP speculative decoder).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index **46.3 — #1/117 open-weight** (median 18); AA AutomationBench **58.6%**; AA-Briefcase 1512
- Terminal-Bench 2.1: **89.9%** (self/HF/BenchLM) vs 67.79% (Vals); Terminal-Bench 4.0 34.8–34.90%
- BenchLM: Toolathlon-Verified 76.9%, OSWorld-Verified 82.0%, JobBench 62.0%, CyberGym **94.0%**, Agents' Last Exam 31.6%
- Cyber: **CyberGym-E2E-AA 78.6%**, AA Cyber Index **56.1%**, CWE-Bench-AA 63.3%, DeepsecBench-AA 26.2%, ExploitGym 17.8%
- Vals: CyberBench 72.86% (#3), Public Benefits 68.94% (#5–6), Finance Agent v2 57.34%, Legal Research 47.12%, Harvey Legal 10.83%, SRE Bench 3.05%

Reasoning / knowledge:

- AA-HLE **49.4%**; AA-LCR **86.3%**; CritPt 26.6%; MLCR-AA **12.8%** (corrected)
- AA-SciCode 60.9%; AA-Omniscience **index −4.5 / accuracy 34.8% / hallucination 60.2%** (corrected — explicit knowledge-fragility flag)
- Vals MMLU-Pro 84.59% (V2.5 row); no standalone GPQA for V2.6 Pro published

Coding:

- Vibe Code Bench v1.1 **85.22% (#9–13/110)** (Vals); DeepSWE **71.9%**
- Vals ProgramBench **0.50%** (1 of 200) vs BenchLM 26.0–26.5%; Terminal-Bench-Science 2.86%; IOI 39.33%; Code Migration 43.01%
- BenchLM Coding lane 63.3 (#13/149); Bug Hunt 22.7 fixes; STEMBench 2.17

Long context / multimodal:

- 1M window; AA-LCR 86.3%; no MRCR/RULER/GraphWalks; ≈$0.410/test on Vals Index (cheapest of the leading group); Design Arena 1307.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA Index #1-of-117 open-weight, CyberBench #3, CyberGym 94.0% / CyberGym-E2E 78.6% and TB2.1 89.9% (self) / 67.8% (Vals); capped by slow serving and the TB2.1 harness gap.
- **Reasoning: 85/100.** AA-HLE 49.4%, AA-LCR 86.3% and AA Index 46.3 lead open weights; the corrected Omniscience index (−4.5) and 60.2% hallucination rate flag fragile factual recall, and no standalone GPQA is published.
- **Context window: 96/100.** 1,048,576 tokens (≥1M band) with AA-LCR 86.3%; no ≥98%-at-512K retrieval.
- **Multimodal: 93/100.** Text + image + video + **audio** input (audio band) with text out; the Vals "no video/file" conflict stands but the official card/AA/Novita support audio/video.
- **Coding: 86/100.** Vibe Code 85.22% and DeepSWE 71.9% are strong; ProgramBench 0.50% and TB-Science 2.86% cap it.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M with a 99% cache discount ($0.1332/AA task) and MIT open weights; no $0 route.
- **Overall Score: 90/100.** (88 + 85 + 96 + 93 + 86) / 5 = 89.6 → 90. Best fit: the strongest open-weights omnimodal agentic pick, accepting slow serving, high verbosity and weak factual recall without retrieval.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Xiaomi technical report, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI). Corrected the Omniscience/MLCR readings, captured the cyber-suite rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Pro-RL model card & technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [BenchLM — MiMo-V2.6-Pro benchmark scores](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo V2.6 Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Vals AI — MiMo V2.6 Pro](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
