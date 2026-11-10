# Gemini 4 Carbon — findings by Crouton Alpha

- Source: Google/Gemini 4 Carbon
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's frontier Gemini 4 reasoning model for hardest long-context multimodal and agentic work; top use case is 1M-context enterprise reasoning.
- **Provider / access:** Google Gemini API `gemini-4-carbon` (BenchLM eval methodology), AA provider listing (1 provider); no Zen catalog route verified in fetched Zen table.
- **Release / knowledge:** 2026-10-28 (AA).
- **IDs:** `google/gemini-4-carbon` (BenchLM; no `opencode/gemini-4-carbon` found in Zen catalog).
- **Context window:** 1M tokens total (AA).
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $4.00 input / $20.00 output per 1M (AA Google API); $7.76 per Index task. Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.2%** (Google eval methodology)
- AutomationBench **53.9%** (Google); AA AutomationBench **77.8%** (Artificial Analysis)
- OSWorld 2.1 Offline **81.5%** (Google)
- GDPval-AA **1733** (Artificial Analysis leaderboard)
- CWE-bench **71.0%**, ExploitGym **53.5%** (Collinear; Google)

Reasoning / knowledge:

- Intelligence Index **60 (#1/69)** (AA); BenchLM **88.69/100 #1/1017**
- AA-LCR **79.3%** (Artificial Analysis)
- GraphWalks BFS 256K–1M **96.2%** (Google)
- AA-Omniscience Accuracy **58.3%**, Hallu 11.4% (AA)

Coding:

- FrontierSWE v2 **61.2%** (Proximal)
- FrontierCode 2.0 **40.0%** (Cognition)
- Intelligence Index #1 (index includes FrontierCode 2.0 + terminal coding suites) — no DeepSWE/SWE-Pro row published on BenchLM for this preview, so coding is provisional from Index rank.

Long context:

- GraphWalks 256K–1M **96.2%**, AA-LCR **79.3%** (Google; AA)

Multimodal:

- Chartography **72.5%**, Blueprint-Bench 2 **58.6%** (Google)
- AA: text/image/speech/video in (widest input set).

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 4.0 65.2%, AA AutomationBench 77.8%, OSWorld 81.5%, GDPval 1733 are frontier; capped by Google-harness AutomationBench 53.9%.
- **Reasoning: 96/100.** Intelligence 60 (#1/69, median 37) and GraphWalks 96.2% at 256K–1M are best-in-class; no GPQA/HLE row published to push to 100.
- **Context window: 98/100.** 1M with 96.2% retrieval across 256K–1M (highest seen in this batch) and LCR 79.3%.
- **Multimodal: 80/100.** Text/image/speech/video in, text out; Chartography 72.5% solid, widest input coverage keeps it above image-only models.
- **Coding: 90/100.** FrontierSWE 61.2% and FrontierCode 40% on hardest suites plus #1 Index imply frontier coding; capped below 95 for lack of SWE-Pro/DeepSWE published rows.
- **Cost efficiency: 55/100.** $4/$20 per 1M, $7.76/task (AA) — expensive anchor ~55.
- **Overall Score: 91/100.** Mean (93+96+98+80+90)/5 = 91.4 → 91; best-fit frontier long-context reasoning.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google eval methodology, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Carbon evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-carbon)
  - [Artificial Analysis — Gemini 4 Carbon (High)](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [BenchLM — Gemini 4 Carbon](https://benchlm.ai/models/gemini-4-carbon)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
