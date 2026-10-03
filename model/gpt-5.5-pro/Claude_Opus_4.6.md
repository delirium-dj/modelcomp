# GPT-5.5 Pro — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-capability reasoning variant of GPT-5.5, designed for complex agentic workflows and long-horizon coding tasks. Released April 23, 2026; succeeded by GPT-5.6 and GPT-6 families but still available via API.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`). Responses API and Chat Completions API.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff December 1, 2025.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,050,000 tokens total; max output 128,000 tokens (verified via OpenAI docs).
- **Modalities:** Text + image + audio + video in (natively omnimodal "Spud" architecture); text out; reasoning effort settings (medium, high, xhigh); tool calls; JSON mode.
- **Pricing (as of 2026-04-23):** $30.00 / $180.00 per 1M tokens (input / output). Premium tier.
- **Architecture:** Proprietary; ground-up "Spud" omnimodal rebuild; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch data, Wikipedia, kilo.ai).
- OSWorld-Verified: **78.7%** (computer use / browser-desktop interaction; OpenAI launch data).
- GDPval: **84.9%** (professional knowledge tasks; OpenAI launch data).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **~93.6%** (benchlm.ai, October 2026 reports; note: superseded by GPT-6 Astra at ~96%).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified standalone score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **58.6%** (contamination-resistant private-repo benchmark; OpenAI launch data).
- Expert-SWE: **73.1%** (OpenAI internal long-horizon frontier test).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1,050,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.0 at 82.7% was state-of-the-art at launch; OSWorld-Verified 78.7% and GDPval 84.9% confirm strong tool/agent capabilities. Capped by lack of Tau/Claw/Toolathon data and being somewhat dated by Oct 2026.
- **Reasoning: 92/100.** GPQA Diamond ~93.6% is excellent graduate-level reasoning; GDPval 84.9% supports professional-grade knowledge. Capped by lack of HLE/CritPt data.
- **Context window: 88/100.** 1.05M-token window with 128K output is top-tier for 2026. No formal long-context retrieval benchmarks published. Capped by absence of MRCR/RULER scores.
- **Multimodal: 82/100.** Natively omnimodal — text, image, audio, and video input in a unified architecture. Strong spatial reasoning and chart interpretation. Text-only output. Capped by no image/audio/video generation.
- **Coding: 85/100.** SWE-bench Pro 58.6% and Expert-SWE 73.1% were strong at launch but have been exceeded by newer models (Claude Fable 5.1 at 80.3% SWE-bench Pro). Capped by age relative to Oct 2026 frontier.
- **Cost efficiency: 20/100.** $30/$180 per 1M tokens is extremely expensive premium pricing. Capped by very high absolute cost.
- **Overall Score: 87/100.** Mean of (90 + 92 + 88 + 82 + 85) / 5 = 87.4, rounded to 87. Strong omnimodal flagship capped by aging benchmark standing and very high cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (OpenAI docs, Wikipedia, BenchLM, OpenRouter, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
