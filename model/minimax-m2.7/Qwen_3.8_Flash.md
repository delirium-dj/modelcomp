# MiniMax M2.7 — findings by Qwen 3.8 Flash

- Source: MiniMax (`MiniMax-M2.7`; `opencode/minimax-m2.7`; open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight agentic coding MoE (~229B/10B active) — **succeeded by M3** in this dataset. Strong **τ²-bench 84.8%** tool-use, solid SWE-V 75.4/LCB 79.9 coding panel, and measured AA-LCR 78.3% at 200K — but held back by **CritPt 0.6% near-zero**, HLE 29.6% below the frontier bar, AA Index 22.8, and **confirmed text-only modality**. A large vendor-vs-independent GDPval gap (1495 claimed / 1087 measured) signals marketing inflation.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`, Chat Completions v2.1); open weights; OpenRouter; Groq serving. No Zen Free ID.
- **Release / knowledge:** 2026 (exact date not independently verified); cutoff undisclosed.
- **IDs:** `opencode/minimax-m2.7` (curated); `MiniMax/MiniMax-M2.7` (HF).
- **Context window:** **~200K in (196K–205K across providers) / 131K out** (verified via Groq docs 196K + LLMRef 205K; curated `meta.json` agrees).
- **Modalities:** **Text in / text out** only (confirmed by curated meta, catalog, and Muse). Reasoning: per BenchLM classified as non-reasoning base; tool calls yes; multi-agent collaboration mode. Design Arena 1254 is text→code, not vision input.
- **Pricing (as of 2026-10-02):** **$0.30 / $1.20 per 1M** (LLMRef variant $0.279/$1.20); no free tier. Open weights → self-host alternative. Cost excluded from Overall.
- **Architecture:** proprietary/open-weights MoE, ~229B total / 10B active (Groq docs).

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM full panel, 2026-09-24) and `Muse_Spark_1.3.md` (MiniMax official page, Groq docs, 2026-09-18). **Lane gap:** MiniMax official page claims GDPval-AA **1495 Elo**; BenchLM independently measures **1087** — a 408-Elo vendor inflation. Scored at the independent BenchLM figure. Kimi K3's Multimodal 55 is a methodology error (crediting Design Arena as vision); curated meta and catalog confirm text-only.

Agent / tool use:

- τ²-bench (Tau2-Bench): **84.8%** (BenchLM) — among the strongest τ² scores in this entire queue
- Terminal-Bench 2.0: **57.0%**; TB 2.1 Vals: **48.7%** (BenchLM)
- GDPval-AA: **1087 Elo** / 24.9% normalized (BenchLM); vendor claims 1495 (not adopted)
- APEX-Agents-AA: **10.6%** (near-floor); AA Agentic Index: **16.8%** (low)
- Claw-Eval: **48.7%**; MM-ClawBench: **62.7%**; MLE-Bench Lite: **66.6%**; Toolathlon: **46.3%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GPQA-D) / **87.4%** (AA) / **86.6%** (Vals) — consistent across harnesses
- HLE (AA-HLE): **29.6%** — well below the 40% frontier bar
- **CritPt: 0.6%** — near-zero, the lowest creative-reasoning score seen in this queue batch
- AIME 2025 (Arcee): **80.0%**; MMLU-Pro: **80.4–80.8%**; AA-IFBench: **75.7%**
- AA Intelligence Index: **22.8**; BenchLM overall **48.08 / #83 of 507**
- AA-Omniscience: accuracy **26.8%** / hallucination **35.6%** — moderate fabrication
- AA-LCR: **78.3%** (strong within 200K)

Coding:

- SWE-bench Verified: **75.4%** (Arcee); SWE-V (Vals): **73.8%**
- SWE-bench Pro: **56.2%**; SWE-Rebench: **51.9%**; SWE Multilingual: **76.5%**; Multi-SWE: **52.7%**
- LiveCodeBench (Vals): **79.9%**; VIBE-Pro: **55.6%**; React Native Evals: **71.4%**
- NL2Repo: **39.8%**; Vibe Code Bench: **27.0%**; AA-SciCode: **50.1%**; AA Coding Index: **52.6**

Long context:

- AA-LCR **78.3%** within 200K (measured); no MRCR/RULER rows.

Multimodal:

- None — text-only confirmed by curated meta, catalog, and Muse. Design Arena 1254 is text→website code.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Key scoring decisions: (a) multimodal correctly floored at text-only per methodology (Kimi K3's 55 is the same Design Arena error flagged in solar-pro-4); (b) GDPval scored at independent 1087, not vendor 1495; (c) τ²-bench 84.8 gets strong credit but APEX 10.6 and Agentic 16.8 cap the dimension; (d) CritPt 0.6% is treated as a near-floor signal, not noise.

- **Tool use: 70/100.** τ²-bench 84.8% is elite across this entire queue — genuinely strong for structured tool-calling. But GDPval-AA 1087 is mid-range independently, APEX-Agents 10.6% and AA Agentic Index 16.8% show it collapses on open-ended generalist tasks. TB 57.0 is middling. Matches Kimi K3's read.
- **Reasoning: 68/100.** GPQA 87 consistent across three harnesses is dependable upper-mid. AIME 80.0 is solid. But HLE 29.6 misses the frontier bar by 10 points, **CritPt 0.6% is essentially zero** (no creative reasoning demonstrated), AA Index 22.8 is low-mid, and Omniscience 35.6% hallucination is moderate. Caps at 68.
- **Context window: 72/100.** 200K anchors at 70 per v4; AA-LCR 78.3% is measured and strong, pulling to the low-70s; 131K output is unusually generous at this tier. Kimi's 62 is harsh (underweights LCR evidence); cohort's 70.2 is close. Scored at 72.
- **Multimodal: 12/100.** **Text-only confirmed** across curated meta, catalog, and Muse = floor band 10–20. No vision/audio input. Design Arena 1254 is code generation quality, not multimodal input. Kimi K3's 55 is a methodology violation; cohort's 34.5 likewise. Muse's correct 15 and this read agree within the floor.
- **Coding: 76/100.** SWE-V 75.4, SWE-Multilingual 76.5, and LCB 79.9 form a strong broad coding panel for a 10B-active model. VIBE-Pro 55.6 and React Native 71.4 show practical delivery. But AA Coding Index 52.6, NL2Repo 39.8, and Vibe Code Bench 27.0 cap the upside. Kimi 70, Muse 82 — the truth is in between.
- **Cost efficiency: 86/100.** $0.30/$1.20 is competitive paid mid-range; open weights enable self-host. No free tier. Cost excluded from Overall.
- **Overall Score: 60/100.** Mean of Tool 70, Reasoning 68, Context 72, Multimodal 12, Coding 76 = 298/5 = 59.6 → **60**. Best fit: **budget agentic tool-calling and mid-difficulty coding at 200K context** — τ² 84.8 and SWE-V 75.4 are genuinely useful for structured coding agents; the CritPt 0.6% and text-only modality disqualify it from creative or multimodal workloads. The cohort's 65.9 is inflated by raters giving multimodal credit for Design Arena (which is not multimodal input). Succeeded by M3 — prefer M3 where available.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` full BenchLM panel (τ²/TB/GDPval/GPQA/HLE/CritPt/AIME/SWE-V/SWE-Pro/LCB/Multilingual/NL2Repo/SciCode/AA Index/Omniscience/IFBench) + `Muse_Spark_1.3.md` (MiniMax official page claims, Groq docs architecture, LLMRef pricing) + curated `meta.json` (honest: text-only, 200K class, $0.30/$1.20). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **GDPval vendor-vs-independent gap** (1495 claimed vs 1087 measured — 408 Elo inflation), (b) **CritPt 0.6% is effectively zero** — creative/physics reasoning is this model's weakest point across the entire queue, (c) Kimi K3's Multimodal 55 repeats the same Design Arena methodology error flagged in solar-pro-4.
- Revisit trigger: superseded by M3 (already scored separately in this dataset at a higher Overall); this file is a historical baseline for the M2.7→M3 progression.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
