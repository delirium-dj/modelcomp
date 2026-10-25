# MiniMax M2.7 — findings by Muse Glimmer 30B

- Source: MiniMax / minimax-m2.7
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiniMax M2.7
- **Short description:** Open-weight 229B-parameter large language model from MiniMax, released March 2026. First model in the M2 series to participate in its own evolution, focused on complex agent harnesses, autonomous productivity tasks, software engineering and office-work automation.
- **Provider / access:** MiniMax API `MiniMax-M2.7` / `MiniMax-M2.7-highspeed`; OpenRouter `minimax/minimax-m2.7`; Hugging Face `MiniMaxAI/MiniMax-M2.7`. Chat Completions API.
- **Release / knowledge:** 2026-03-18; knowledge cutoff not publicly disclosed.
- **IDs:** `MiniMaxAI/MiniMax-M2.7`; `minimax/minimax-m2.7`; `MiniMax-M2.7`
- **Context window:** 200K–205K tokens total. Official blog / Hugging Face card states 200K; LLM Stats reports 205K input / 197K output; Groq docs list 196.6K. Verified as ~200K class.
- **Modalities:** Input text; Output text. Tool calls yes, JSON mode supported. No image/audio/video input in official card; text-only.
- **Pricing (as of 2026-10-25):** $0.300 / 1M input, $1.20 / 1M output via MiniMax / Fireworks / Novita. Novita cached input $0.06 / 1M. No Free tier on OpenCode Zen.
- **Architecture:** 229B parameters reported on Hugging Face, 230B reported by NVIDIA NIM. Open weights, MIT license. Dense text-to-text model; MoE architecture not confirmed.

### Raw benchmarks found

> Sources: MiniMax official model page `models/text/m27` and news post `minimax-m27-en` 2026-03-18; Hugging Face model card `MiniMaxAI/MiniMax-M2.7`; LLM Stats model page; BenchLM model page 2026-10-25.

Agent / tool use:

- Terminal-Bench 2.0: **57.0%** (MiniMax blog)
- Terminal-Bench 2.1: **48.7%** (Vals AI leaderboard) — conflict with TB2.0 claim
- Toolathon: **46.3%** (MiniMax blog, global top tier)
- τ³-bench: **67.6%** (BenchLM, sourced from GLM-5.1 comparison table — provisional / conflicting attribution)
- GDPval-AA: **ELO 1495** (MiniMax blog, highest among open-source) vs **1087** (Artificial Analysis model benchmarks) — conflicting
- Claw-Eval: **48.7%** (Claw-Eval leaderboard)
- MM ClawBench: **62.7%** (MiniMax blog)
- MLE-Bench Lite medal rate: **66.6%** (MiniMax blog)

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (BenchLM, sourced from GLM-5.1 model card comparison table — provisional) / **86.6%** Vals AI
- HLE: **28%** (BenchLM, GLM-5.1 table) / **29.6%** AA
- AA-LCR: **78.3%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **22.8%** (Artificial Analysis)
- GDPval-AA normalized: **25.5%** (Artificial Analysis)

Coding:

- SWE-bench Pro: **56.22%** (MiniMax blog, near Opus level)
- VIBE-Pro: **55.6%** (MiniMax blog)
- SWE Multilingual: **76.5%** (MiniMax blog)
- Multi SWE Bench: **52.7%** (MiniMax blog)
- NL2Repo: **39.8%** (MiniMax blog)
- AA-SciCode: **50.1%** (Artificial Analysis)
- LiveCodeBench Vals: **79.9%** (Vals AI)
- SWE-bench Verified: **75.4%** (BenchLM, sourced from Arcee comparison table — provisional)

Long context:

- No dedicated long-context retrieval score published. Context window ~200K claimed; AA-LCR 78.3% reported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2 57%, Toolathon 46.3%, MM Claw 62.7% and GDPval ELO 1495 indicate strong agent/tool scaffolding. Capped by lack of verified Tau3 and conflicting GDPval numbers.
- **Reasoning: 75/100.** Provisional GPQA ~86-87% and AA-LCR 78.3% suggest solid knowledge reasoning; HLE ~28-30% and low Intelligence Index/CritPt limit the score.
- **Context window: 70/100.** 200K–205K token window per official docs and LLM Stats. 200K tier maps to 70 per methodology; no RULER/GraphWalks public score.
- **Multimodal: 15/100.** Text in/out only, no verified image/video/audio input/output.
- **Coding: 82/100.** SWE-Pro 56.22%, VIBE-Pro 55.6%, SWE Multilingual 76.5% and Terminal-Bench 2 57% show strong real-world engineering capability. No public DeepSWE/SciCode leadership caps score.
- **Cost efficiency: 90/100.** $0.30 / 1M input / $1.20 / 1M output is highly competitive for a 229B open-weight model.
- **Overall Score: 64/100.** Mean of five quality dims (78+75+70+15+82)/5 = 64.0. Best-fit: capable open-weight agent/coding model with large context and low cost, limited by text-only modality and mixed reasoning benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
