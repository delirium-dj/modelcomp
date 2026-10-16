# MiMo V2.6 Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: Artificial Analysis Intelligence Index **46 / 46.32 (v4.3.2) — #1/117 open-weight** (median 18), cost $0.1332/task, **43.7–44 t/s**, TTFT 4.06s, AA-HLE 49.4, AA-LCR 86.3, AA-SciCode 60.9, AA-Omniscience Index 8.4. Vals AI: Vals Index **55.20% (#12/45)**, Vibe Code Bench v1.1 **85.22% (#9–13/110)**, CyberBench **72.86% (#3)**, MedScribe 88.31% (#12/108), Finance Agent v2 57.34%, Public Benefits 68.94% (#5–6), Legal Research 47.12%, Harvey Legal 10.83%, Terminal-Bench 2.1 **67.79%**, Terminal-Bench 4.0 **31.31%**, ProgramBench **0.50%**, IOI 39.33%, Terminal-Bench-Science 2.86%, Code Migration 43.01%, cost/test **$0.410**, latency 67m19s. BenchAlign/BenchLM: public 73.53 (#12), Coding 63.3 (#13/149), Terminal-Bench 2.1 89.9%, TB4.0 34.90%, Toolathlon-Verified 76.9%, OSWorld-Verified 82.0%, JobBench 62.0%, CyberGym 94.0%, DeepSWE 71.9%, ProgramBench 26.0–26.5%. Novita/OpenRouter confirm 1,048,576 ctx / 131,072 max-out and text+image+video+audio in.
> **Conflicts surfaced:** (1) **Modalities** — official card, AA, Novita and LLMReference say text+image+**video+audio** input; Vals says video/file **not supported** (only text+image). (2) **TB2.1 harness gap** — 89.9% (self/HF/BenchLM) vs 67.79% (Vals); Vals notes Pro's failed TB attempts are long reasoning turns that exhaust the task clock. (3) **TB4.0** — 34.90% (BenchLM/self) vs 31.31% (Vals page) vs 24.75% (#10/34, Vals launch blog). (4) **ProgramBench** — Vals 0.50% (1/200 fully resolved) vs BenchLM 26.0–26.5%. (5) **Serving speed** — 44 t/s (AA) vs a 125 t/s bar-chart reading and up-to-20× UltraSpeed; standard Pro is notably slow/verbose. (6) Vals Index 55.20% (page) vs 59.47% (Sep-22 blog history).
> Sources: https://artificialanalysis.ai/models/mimo-v2-6-pro · https://www.vals.ai/models/xiaomi_mimo-v2.6-pro · https://benchlm.ai/compare/mimo-v2-6-flash-vs-mimo-v2-6-pro · https://mimo.mi.com/docs/news/latest/v2-6 · https://codersera.com/blog/xiaomi-mimo-v2-6-pro-guide-2026/ · https://blogs.novita.ai/mimo-v2-6-pro-on-novita-ai/ · https://www.heise.de/en/news/MiMo-V2-6-Pro-New-model-leads-open-weight-ranking-11462279.html

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal sparse MoE (2026-09-21/22), aimed at long-horizon agentic and professional knowledge work; #1 open-weight on AA's Intelligence Index but slow and somewhat verbose.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-pro`; OpenAI/Anthropic/Responses-compatible), OpenRouter (`xiaomi/mimo-v2.6-pro`), Novita (`xiaomimimo/mimo-v2.6-pro`), 9+ providers; weights at `XiaomiMiMo/MiMo-V2.6-Pro-RL`. No Zen Free ID.
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`; `mimo-v2.6-pro-ultraspeed` (up to 20× speed, $4.35/$8.70).
- **Context window:** 1,048,576 (1M) tokens; 131,072 max output.
- **Modalities:** text, image, video, audio input; text out; reasoning, function calling, structured outputs.
- **Pricing (as of 2026-10-16):** **$0.435 in / $0.87 out per 1M**, $0.0036 cached (99% off); $0.1332/AA Index task; MIT open weights; batch −50%.
- **Architecture:** sparse MoE, **1.02T total / 42B active** (384 routed / 8 active experts), FP8, MIT; hybrid attention (60 of 70 layers use a 128-token sliding window, 10 global; MiMo ViT + audio encoders; 5-layer MTP speculative decoder).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index **46.32 (v4.3.2) — #1/117 open-weight** (median 18); AA AutomationBench 53.1–58.6; AA-Briefcase 1516
- Terminal-Bench 2.1: **89.9%** (self/HF/BenchLM) vs 67.79% (Vals); Terminal-Bench 4.0 34.90% (BenchLM) / 31.31% (Vals) / 24.75% (Vals blog)
- BenchLM: Toolathlon-Verified 76.9%, OSWorld-Verified 82.0%, JobBench 62.0%, CyberGym **94.0%**, Agents' Last Exam 31.6%
- Vals: CyberBench 72.86% (#3), Public Benefits 68.94% (#5–6), Finance Agent v2 57.34%, Legal Research 47.12%, Harvey Legal 10.83%, SRE Bench 3.05%

Reasoning / knowledge:

- AA-HLE **49.4**; AA-LCR **86.3**; CritPt 26.6; MLCR-AA 18.3
- AA-SciCode 60.9; AA-Omniscience Index 8.4 / Accuracy 34.8 / Hallucination 40.6
- Vals MMLU-Pro 84.59% (V2.5 row) / no standalone GPQA for V2.6 Pro published

Coding:

- Vibe Code Bench v1.1 **85.22% (#9–13/110)** (Vals); BenchLM DeepSWE 71.9%
- Vals ProgramBench **0.50%** (1 of 200 fully resolved) vs BenchLM 26.0–26.5%; Terminal-Bench-Science 2.86%; IOI 39.33%; Code Migration 43.01%
- BenchLM Coding lane 63.3 (#13/149)

Multimodal / long context:

- 1M window; AA-LCR 86.3; no MRCR/RULER/GraphWalks; ≈$0.410/test on Vals Index (cheapest of the leading group)

### Normalized scores (1–100)

- **Tool use: 88/100.** AA Intelligence Index #1-of-117 open-weight (whose composite embeds the agentic evals), CyberBench #3, CyberGym 94.0% and TB2.1 89.9% (self) / 67.8% (Vals); capped by slow serving and the TB2.1 harness gap.
- **Reasoning: 85/100.** AA-HLE 49.4%, AA-LCR 86.3% and AA Index 46 lead open weights (median 18) but sit under the 60+ frontier reference; no standalone GPQA published.
- **Context window: 96/100.** 1,048,576 tokens (≥1M band) with AA-LCR 86.3%; no ≥98%-at-512K retrieval.
- **Multimodal: 93/100.** Text + image + video + **audio** input (audio band 90–100) with text out; Vals' "no video/file" is a documented conflict but the official card, AA and Novita support audio/video.
- **Coding: 86/100.** Vibe Code 85.22% and DeepSWE 71.9 are strong; ProgramBench 0.50% and TB-Science 2.86% cap it.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M with a 99% cache discount ($0.1332/AA task) and MIT open weights; no $0 route.
- **Overall Score: 90/100.** (88 + 85 + 96 + 93 + 86) / 5 = 89.6 → 90. Best fit: the strongest open-weights omnimodal agentic pick, accepting slow serving and high verbosity.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: rewrite-pass public internet research (Xiaomi MiMo news/blog, Artificial Analysis model page, Vals AI model page, BenchLM/BenchAlign comparisons, Novita and Codersera guides, heise news, OpenRouter/LLMReference). The modality, TB2.1/TB4.0 harness, ProgramBench and speed conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
