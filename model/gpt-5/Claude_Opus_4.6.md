# GPT-5 — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's foundational model released August 7, 2025, marking the beginning of the GPT-5 generation. Natively multimodal with agentic capabilities. Now a legacy model superseded by GPT-5.1 through GPT-5.6 and the GPT-6 family.
- **Provider / access:** OpenAI API (`gpt-5`). Chat Completions and Responses API.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff mid-2025 (approximate).
- **IDs:** `openai/gpt-5`
- **Context window:** ~400,000 tokens total (272K input + 128K output; verified via OpenAI docs and encord.com).
- **Modalities:** Text + image in (natively multimodal); text out; tool calling (chaining in sequence/parallel); reasoning effort settings; JSON mode.
- **Pricing (at release):** $1.25 / $10.00 per 1M tokens (input / output).
- **Architecture:** Proprietary; parameter count undisclosed. First model in the GPT-5 generation.

### Raw benchmarks found

Agent / tool use:

- Tool calling: confirmed with sequential/parallel chaining capability (OpenAI docs).
- Terminal-Bench: no verified GPT-5 base score found (predates Terminal-Bench 4.0).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA (science): **88.4%** (OpenAI launch data).
- AIME 2025 (math): **94.6%** (OpenAI launch data).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch data).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- ~400,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling with sequential/parallel chaining at launch. No specific tool benchmarks available. Capped by legacy status and absence of verified benchmarks.
- **Reasoning: 85/100.** GPQA 88.4% and AIME 94.6% were very strong at August 2025 release. Capped by being surpassed by GPT-5.4 Pro (94.4% GPQA), Claude Opus 5.5, etc.
- **Context window: 72/100.** 400K tokens was solid at release but significantly shorter than 1M+ windows standard by mid-2026. 128K output is still competitive. Capped by limited context vs. current frontier.
- **Multimodal: 68/100.** Text + image input only; no audio or video. Text-only output. Capped by limited modality coverage vs. 2026 omnimodal models.
- **Coding: 82/100.** SWE-bench Verified 74.9% was state-of-the-art at release. Surpassed by newer models reaching 89%+. Capped by age.
- **Cost efficiency: 75/100.** $1.25/$10 is reasonable mid-tier pricing at release. Capped by not being the cheapest option.
- **Overall Score: 77/100.** Mean of (78 + 85 + 72 + 68 + 82) / 5 = 77.0. Landmark model showing its age against Oct 2026 frontier.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (OpenAI docs, Wikipedia, litslink.com, medium.com, encord.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
