# Solar Pro 4 — findings by Qwen 3.8 27B

- Source: Upstage AI (upstageai/solar-pro-4)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's flagship proprietary agentic LLM for multi-step real work (document reasoning, terminal tasks, multi-turn tool use), trained via the OfficeVerse office-task pipeline; serves English, Korean, and Japanese.
- **Provider / access:** Upstage Console API (OpenAI-compatible, model name `solar-pro4`), OpenRouter (`upstage/solar-pro4`), Hermes Agent (Nous Research), Upstage Studio; not listed on OpenCode Zen as of 2026-09-29 (absent from the Zen docs table and the live `https://opencode.ai/zen/v1/models` list).
- **Release / knowledge:** released 2026-08-06 (models.dev `upstage/solar-pro4` toml, fetched this session); launch blog post dated 2026-08-11; knowledge cutoff 2026-02 (models.dev).
- **IDs:** `upstageai/solar-pro-4` (repo meta.json); native Upstage API ID `solar-pro4`; OpenRouter `upstage/solar-pro4`. No Zen Free ID (not on Zen at all).
- **Context window:** 524,288 total with up to 131,072 output (models.dev toml; Upstage blog states "512K context with up to 128K output").
- **Modalities:** text in / text out; reasoning by default with effort dial none–max, tool calls, and structured outputs; no image/attachment input (models.dev `attachment = false`).
- **Pricing (as of 2026-09-29):** $0.30 input / $1.20 output / $0.06 cached input per 1M (Upstage launch post + models.dev toml); 90%-off launch promo on Upstage Console and OpenRouter ran through 2026-09-10 23:59 UTC.
- **Architecture:** proprietary, closed weights; parameter count not disclosed; reasoning model with adjustable effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (BenchLM `solar-pro-4`; Upstage launch blog cites the same figure, attributed to Artificial Analysis)
- Tau3-Banking / Tau2-Bench: τ³-Banking **23.0%** (Upstage launch blog)
- GDPval-AA: **38.8%** (GDPval-AA v2, Upstage launch blog)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **61.4%** (BenchLM; vendor marks in-house); APEX-Agents **18.7%**; BrowseComp **49.2%** (BenchLM + vendor)

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (BenchLM; AA-GPQA 89.1%; vendor table 89.0)
- HLE: **29.2%** (AA-HLE, BenchLM)
- LCR / MLCR: AA-LCR **71.0%** (BenchLM + vendor; ~100k-token long-document reasoning)
- CritPt: **5.4%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **28.1** / no public overall (BenchLM unranked, 21 of 486 benchmarks covered)
- Omniscience Accuracy / Hallucination Rate: **18.9% / 24.4%** (AA via BenchLM); also MMLU-Pro **86.3%**, AIME26 **95.3%**, KMMLU-Pro **79.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.6%** (BenchLM; vendor: SWE-Bench Verified via OpenHands 70.6%); SWE-Pro: no verified public score found
- LiveCodeBench: **87.8%** (BenchLM + vendor, in-house)
- SciCode / AA-SciCode: **44.6%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Design Arena Website **1184** (BenchLM)

Long context:

- no MRCR/RULER retrieval benchmark found; AA-LCR **71.0%** (~100k long documents per vendor); 512K window per models.dev and Upstage

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 57.0% (mid band 45–60% → 50–70) with τ³-Banking 23.0% (mid band 10–25%) and MCP Atlas 61.4% put it solidly mid, and the absence of Claw-Eval/Toolathon rows caps it at 65.
- **Reasoning: 65/100.** GPQA 89.0% is near-frontier and AA-LCR 71.0% is good, but AA Index 28.1 sits in the mid 20–35 band and HLE 29.2% is under the 40% frontier line, capping it at the top of 55–65.
- **Context window: 85/100.** 512K lands in the 500K–1M tier (85–94) with no measured 512K+ retrieval score, so it scores at the band bottom.
- **Multimodal: 15/100.** Text in / text out only (no image or attachment input).
- **Coding: 78/100.** SWE-bench Verified 70.6% and LiveCodeBench 87.8% are strong, but AA-SciCode 44.6% is below the 55+ frontier anchor and no DeepSWE or Coding Index evidence exists, capping it under 80.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M ($0.06 cached) undercuts the ~$0.60/$2.20 ≈92 anchor; paid-only (not on Zen, no free tier found).
- **Overall Score: 61.6/100.** Mean of the five quality dims (65+65+85+15+78)/5 = 61.6 — a long-context agentic workhorse for document/terminal tasks at M2.7-class pricing.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (upstage.ai launch blog, models.dev upstage/solar-pro4 toml, benchlm.ai/models/solar-pro-4, opencode.ai/docs/zen + /zen/v1/models; artificialanalysis.ai/models/solar-pro-4 returned 404; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
