# GPT-5.1 Codex — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.1-Codex), `gpt-5.1-codex`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's November 2025 agentic coding variant of GPT-5.1 — the model Codex CLI and IDE defaulted to for repo-scale software engineering, with a mandatory reasoning budget and a Responses-only API. It has since been superseded by GPT-5.1-Codex-Max and then by the GPT-5.2/5.3/5.6 Codex line; OpenAI shut the id down in the API on **2026-07-23**.
- **Provider / access:** OpenAI **Responses API only** (`https://api.openai.com/v1/responses`, model `gpt-5.1-codex`); Codex CLI/IDE/cloud surfaces; OpenCode Zen `opencode/gpt-5.1-codex` (**$1.07/M in, $8.50/M out, $0.107/M cached** — Zen's own price, lower than OpenAI's native $1.25/$10.00) and `openai/gpt-5.1-codex` on OpenRouter at the native price.
- **Release / knowledge:** **2025-11-13** (Codex changelog: "Introducing GPT-5.1-Codex and GPT-5.1-Codex-Mini… along with the GPT-5.1 launch in the API"). Knowledge cutoff **2024-09-30** (models.dev).
- **IDs:** `gpt-5.1-codex` (OpenAI / Zen / OpenRouter); siblings `gpt-5.1-codex-mini` ($0.25/$2.00) and `gpt-5.1-codex-max` ($1.25/$10.00, launched 2025-11-19).
- **Context window:** **400,000** tokens total, **272,000** max input, **128,000** max output (models.dev, OpenRouter).
- **Modalities:** text and image input, text output; reasoning effort low/medium/high (xhigh added with Codex-Max); tools and structured outputs; no audio, video or PDF input listed for this id.
- **Pricing (as of 2026-10-20):** native **$1.25/M in, $10.00/M out, ~$0.13/M cached**; OpenCode Zen **$1.07/$8.50/$0.107**. All three `gpt-5.1-codex*` ids were scheduled for API shutdown on 2026-07-23 (deprecations page: Codex → `gpt-5.6-sol`, Codex Mini → `gpt-5.6-terra`).
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI published GPT-5.1-Codex numbers in the Codex-Max launch post (which quotes both variants); Artificial Analysis and Vals AI supply the rest.

Agent / tool use:

- Terminal-Bench 2.0: **52.8%** (OpenAI, GPT-5.1-Codex; Codex-Max 58.1%) · Terminal-Bench Hard: **34.8%** (AA)
- Tau2-bench: **83.04%** (AA) · Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found (AA field null) · AutomationBench / Toolathon / MCP-Atlas / OSWorld / Claw-Eval: no verified public score found
- IFBench: **70.0%** (AA) · Apex-Agents: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.96%** (AA) vs **86.0%** (BenchLM ledger) · HLE: **25.72%** (AA)
- AIME 2025: **95.67%** (AA) · MMMU-Pro: **72.49%** (AA) · AA-LCR: **69.33%** (AA) · CritPt: **5.7%** (AA)
- Artificial Analysis Intelligence Index: **24** (AA) / 23.7 (BenchLM) · output speed **124.8 tok/s** (AA)
- Omniscience Accuracy / Hallucination Rate: **39.9% / 77.2%** (AA)

Coding:

- SWE-bench Verified (n=500): **73.7%** at high effort (OpenAI, quoted in the Codex-Max launch post; Codex-Max 77.9%) — the commonly quoted "~61.0%" figure could not be verified in any source
- SWE-Lancer IC SWE: **66.3%** (OpenAI; Codex-Max 79.9%)
- LiveCodeBench: **84.87%** (AA) vs **85.6%** (Vals AI) — conflict flagged, both in the same range
- Vibe Code Bench v1.1: **13.12%** (Vals AI) · JobBench: **26.2%** (BenchLM) · Gert Labs Composite Game Benchmark: **49.68%** (BenchLM)
- SWE-bench Pro / DeepSWE / SciCode: no verified public score found for GPT-5.1-Codex

Long context:

- No MRCR / RULER retrieval measurement published; the family is built for long-horizon compaction rather than retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 52.8%, τ²-bench 83.0% and IFBench 70.0% are mid-band, but no GDPval, AutomationBench or MCP-Atlas figure exists and Terminal-Bench Hard is 34.8%, so the score cannot climb into the high band.
- **Reasoning: 74/100.** GPQA 86.0%, AIME 95.7%, MMMU-Pro 72.5% and AA-LCR 69.3% are strong, capped by HLE 25.7%, CritPt 5.7% and an AA Intelligence Index of 24.
- **Context window: 76/100.** 400,000 tokens (272K input / 128K output) maps to the 200K–500K tier; no long-context retrieval measurement is published, so the tier midpoint-plus is used.
- **Multimodal: 65/100.** Text and image input with text output (MMMU-Pro 72.5%) — the "+image in" band, no audio, video or PDF.
- **Coding: 74/100.** SWE-bench Verified 73.7%, SWE-Lancer 66.3% and LiveCodeBench 84.9–85.6% are solid mid-band coding results for a 2025 coding-specialist, but Vibe Code Bench 13.12% and the absence of DeepSWE/SWE-bench Pro data cap it.
- **Cost efficiency: 75/100.** Native $1.25/M in and $10.00/M out is expensive on output (Zen's $1.07/$8.50 is slightly better), landing in the ~$1/$8–10 band; the dedicated Codex variants remain cheaper for the same job.
- **Overall Score: 71/100.** Mean of the five quality dims = (65 + 74 + 76 + 65 + 74) / 5 = 70.8 → **71**. Best fit: repo-scale coding inside Codex — but the id is shut down (2026-07-23) and replaced by GPT-5.6 Sol/Terra Codex.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (OpenAI Codex changelog and launch posts, API deprecation docs, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex.md`, using the same headings.
