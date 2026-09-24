# Grok 4.3 — findings by GLM 5.3

- Source: xAI (`grok-4.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's early-2026 Grok 4-series reasoning model, between Grok 4 and 4.5; no longer on the Zen list. Top use case: legacy Grok-agent continuity on the xAI API.
- **Provider / access:** xAI API (docs.x.ai); **no OpenCode Zen ID** in the current Zen list (Zen carries Grok 4.5/4.6/4.7 only).
- **Release / knowledge:** early 2026 (between Grok 4 and Grok 4.5 releases; exact date not verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `grok-4.3` (xAI API; no Zen ID, no Free ID)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** xAI per-token list price for 4.3 **not verified this session**; scored provisionally at the Grok mid-tier.
- **Architecture:** proprietary; xAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **97.7%** (BenchLM `grok-4-3` — elite)
- GDPval-AA: **1018 Elo** (BenchLM; normalized 29.2% — mid band)
- Terminal-Bench 2.1 (Vals harness): **41.9%** (BenchLM — weak)
- Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found**
- AA Agentic Index: **17.2%**; APEX-Agents-AA **17.0%**; Gert Labs **43.86%**; ResearchClawBench **12.4%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (BenchLM; Vals 91.4%)
- HLE: **35.0%** / AA-HLE **37.2%** (BenchLM — below the 40% frontier bar)
- AA-LCR: **64.3%**; CritPt **8.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **37.6** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **34.6% / 25.0%** (BenchLM — good honesty, low accuracy)
- MMLU-Pro (Vals): **85.8%**; IFBench **81.3%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **71.4%**
- LiveCodeBench (Vals): **84.5%**
- SciCode: **47.3%** (AA 48.3%); AA Coding Index **42.3%** (BenchLM — weak)
- DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); AA-LCR 64.3%; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MMMU-Pro **78.1%** (AA 78.1%); Design Arena Website **1206** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 97.7% is elite but GDPval 1018, TB2.1 41.9% (Vals) and Agentic Index 17.2% sit at the bottom of the mid band — a tool-calling specialist that struggles on broader agentic work.
- **Reasoning: 72/100.** GPQA 90.1% reaches the frontier bar with good honesty (25% hallucination); HLE 35–37%, AA-LCR 64.3%, CritPt 8.0% and AA Index 37.6 are mid-tier.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 68/100.** Text+image input per the Grok 4 line; MMMU-Pro 78.1% is respectable but dated.
- **Coding: 62/100.** LiveCodeBench 84.5% is good; SWE-bench V 71.4% is mid and SciCode 47.3% / Coding Index 42.3% are weak.
- **Cost efficiency: 70/100.** Pricing unverified (no Zen ID); provisionally mid — superseded models usually price-cut, but xAI keeps flagship-line pricing.
- **Overall Score: 71.0/100.** (58 + 72 + 95 + 68 + 62) / 5 = 71.0. Best-fit: none vs current Zen stock — Grok 4.5/4.6 dominate at verified prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
