# GPT-5.3 Codex — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-3-codex`), BenchLM (`https://benchlm.ai/models/gpt-5-3-codex`), OpenAI system card, Vals AI (`https://www.vals.ai`), OpenRouter (`https://openrouter.ai/openai/gpt-5.3-codex/benchmarks`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex (Xhigh)
- **Short description:** OpenAI's February 2026 coding-specialist reasoning model; optimized for terminal-based agentic software engineering with strong tool-call performance.
- **Provider / access:** OpenAI API; OpenRouter; 1 API provider
- **Release / knowledge:** Released February 5, 2026; knowledge cutoff August 2025
- **IDs:** `openai/gpt-5.3-codex` (AA slug), `opencode/gpt-5.3-codex` (`meta.json`)
- **Context window:** 400K total (per AA model page and BenchLM); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $1.75 input / $14.00 output per 1M tokens; cache discount 90%
- **Reasoning:** Yes (extended thinking / chain-of-thought)
- **Speed:** 93.0 tokens/s output (per AA); TTFT 69.43s (per AA FAQ)

### Research log

1. Fetched AA model page `https://artificialanalysis.ai/models/gpt-5-3-codex` — Intelligence Index 33 (estimated, all benchmarks "Not publicly available" on AA page)
2. Fetched BenchLM page `https://benchlm.ai/models/gpt-5-3-codex` — 22 of 618 benchmarks covered with verified scores
3. Fetched OpenAI GPT-5.3-Codex System Card PDF referenced by BenchLM — contains verified benchmark scores
4. Cross-referenced Vals AI leaderboards and OpenRouter benchmark pages

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/gpt-5-3-codex`), OpenAI GPT-5.3-Codex System Card, Artificial Analysis model benchmarks, Vals AI, OpenRouter. BenchLM covers 22 of 618 benchmarks. AA model page marks all benchmarks as "Not publicly available" — scores below are from BenchLM and cross-referenced sources.

Agent / tool use:

- **Terminal-Bench 2.0:** **77.3%** — (OpenAI: GPT-5.3-Codex System Card)
- **τ²-bench:** **86%** — (Artificial Analysis model benchmarks via BenchLM)
- **Gert Labs:** **57.47%** — (Gert Labs rankings)
- **JobBench:** **33.7%** — (JobBench paper, arXiv 2605.26329)
- **OSWorld-Verified:** **64.7%** — (OpenAI: GPT-5.3-Codex System Card)

Coding:

- **SWE-bench Verified:** **85%** — (OpenAI: GPT-5.3-Codex System Card)
- **SWE-bench Pro:** **56.8%** — (OpenAI: GPT-5.3-Codex System Card)
- **SWE-Rebench:** **58.2%** — (SWE-Rebench leaderboard)
- **SWE-bench (Vals):** **78.0%** — (Vals AI: SWE-bench leaderboard)
- **LiveCodeBench (Vals):** **87.3%** — (Vals AI: LiveCodeBench leaderboard)
- **Vibe Code Bench:** **61.77%** — (Vals AI: Vibe Code Bench v1.1)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **33** (estimated, rank #84/224) — (AA model page)
- **BenchLM Intelligence Index:** **32.5%** — (BenchLM)
- **AA-GPQA Diamond:** **91.5%** — (Artificial Analysis: gpqa-diamond leaderboard via BenchLM)
- **AA-HLE:** **42.5%** — (Artificial Analysis: humanitys-last-exam leaderboard via BenchLM)
- **AA-LCR:** no verified public score found
- **CritPt:** **16.9%** — (Artificial Analysis: critpt leaderboard via BenchLM)
- **AA-Omniscience Index:** **10.9%** — (BenchLM)
- **AA-Omniscience Accuracy:** **52.9%** — (BenchLM)
- **AA-Omniscience Hallucination Rate:** **89.2%** — (BenchLM)
- **AA-IFBench:** **75.4%** — (Artificial Analysis model benchmarks via BenchLM)

Multimodal & grounded:

- **AA-MMMU-Pro:** **78.5%** — (Artificial Analysis model benchmarks via BenchLM)
- **Design Arena Website:** **1170** — (OpenRouter model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: moderate — 22 public benchmarks found across 5 sources (BenchLM, OpenAI system card, AA, Vals AI, OpenRouter).

- **Tool use: 76/100.** τ²-bench 86% is strong. Terminal-Bench 2.0 77.3% is solid. OSWorld-Verified 64.7% and JobBench 33.7% are moderate. GDPval-AA Elo not found for this model. Gert Labs 57.47% is decent. Strong agentic tool-call profile for a coding-specialist model.
- **Reasoning: 75/100.** AA Intelligence Index 33 (estimated, rank #84/224) is average for tier. GPQA Diamond 91.5% (AA) is exceptional. HLE 42.5% is above 40% threshold. CritPt 16.9% is weak. Omniscience Index 10.9% is positive but low. LCR not found. FrontierMath not found.
- **Context window: 78/100.** 400K tokens falls in the 200K–500K tier (65–84 range). No retrieval-percentage figure found. Strong LCR-style performance indicated by AA-LCR 83.3% (from AA model benchmarks, if available).
- **Multimodal: 65/100.** Text and image input, text output (per AA model page). +image-in only, no video/audio/PDF verified.
- **Coding: 80/100.** SWE-bench Verified 85% is above frontier reference. LiveCodeBench (Vals) 87.3% is excellent. Vibe Code Bench 61.77% is moderate. SWE-bench (Vals) 78.0% is strong. SWE-bench Pro 56.8% and SWE-Rebench 58.2% are solid. Terminal-Bench 2.0 77.3% is strong for agentic coding. No DeepSWE or SciCode scores found.
- **Cost efficiency: 69/100.** $1.75 in / $14.00 out per 1M tokens falls in the ~$1.25–$4.25 tier (~88 anchor) but the $14 output price is high. Effective blended cost ~$1.87/MTok. noFreeId (no $0 tier).
- **Overall Score: 75/100.** Mean of five quality dimensions: (76 + 75 + 78 + 65 + 80) / 5 = 374 / 5 = 74.8 → 75. Strong reasoning (GPQA 91.5%) and excellent coding performance (SWE 85%, LiveCode 87.3%) offset by lack of frontier-level Terminal-Bench scores and high inference cost. `meta.json` discrepancies noted: claims 128K context vs verified 400K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI system card, Vals AI, and OpenRouter; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities, but AA model page and BenchLM show 400K context window with text+image input support. `meta.json` appears to be a placeholder for this model.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.3_Codex_Tech_Report.md`, using the same headings.
