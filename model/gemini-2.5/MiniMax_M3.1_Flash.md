# Gemini 2.5 — findings by Space Bunny

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro`; Google Gemini API / Vertex AI). Not an alias of `gemini-2.5-pro-preview-*` in name — the folder tracks the GA `gemini-2.5-pro` model ID, the same endpoint family.
- **Short description:** Google's flagship "thinking" model of the Gemini 2.X generation — natively multimodal, 1M-token context, agentic coding and tool use. Now legacy/access-limited: Google restricts it to users who have already used it, pointing new projects at Gemini 3.5 Flash-Lite / 3.8 Flash.
- **Provider / access:** Google AI Studio and Vertex AI, model ID `gemini-2.5-pro` (Chat Completions-compatible GenerateContent / Batch API); also surfaced as `google/gemini-2.5-pro` on OpenRouter.
- **Release / knowledge:** GA 2025-06 (preview line from 2025-03-25 `gemini-2.5-pro-exp`); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-pro` (Google). No Free ID exists on OpenCode Zen for this model (paid Google pricing).
- **Context window:** 1,048,576 tokens total (1M), max output 65,536 — verified in Google Cloud / Vertex model documentation (Gemini Enterprise Agent Platform model card).
- **Modalities:** text, image, audio, video (and PDF via text) in; text out; thinking model (reasoning always on for 2.5 Pro); native function/tool calling, structured output (JSON mode), context caching, URL context, supervised fine-tuning.
- **Pricing (as of 2026-10-10):** $1.25 in / $10.00 out per 1M tokens on Google AI Studio and Vertex; blended (7:2:1 cache-hit/input/output) ≈ $1.34 per 1M — paid, no free tier; cache-read discount applies.
- **Architecture:** proprietary (closed weights), unspecified parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (single attempt, own agent harness): **59.6%** (Gemini 2.5 Pro model card, June 2025); **67.2%** with multiple attempts — best-in-class for its generation
- Aider Polyglot (code editing): **82.2%** (diff-fenced, 3-trial average)
- LiveCodeBench (UI 10/1/2024–2/1/2025): **75.6%** single attempt, **79.4%** multiple attempts; final-report window (1/1/2025–5/1/2025) **69.0%**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Function calling / JSON mode / structured output: documented as supported (Vertex model card)

Reasoning / knowledge:

- GPQA Diamond (single attempt): **86.4%** (Google model card)
- AIME 2025 (single attempt): **88.0%**
- Humanity's Last Exam (no tools): **21.6%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **16** (Gemini 2.5 Pro, AI Studio / Vertex; marked deprecated, current benchmarking limited to the default 10k-token workload)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- SimpleQA: **54.0%**; FACTS Grounding: **87.8%** (Google model card)

Coding:

- SWE-bench Verified: **59.6%** single / **67.2%** multiple attempts
- LiveCodeBench: **74.2%** (final technical report, Table 3)
- Aider Polyglot: **82.2%**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench / DeepSWE / other: no verified public score found

Long context:

- LOFT (hard, ≤128K): **87.0%**; LOFT at 1M: **69.8%** (Gemini 2.5 technical report) — state of the art at 128K among compared models
- MRCR-v2 8-needle: reported by Google at 128K cumulative and 1M pointwise; only model in its comparison set supporting 1M+ context
- Documented window: 1,048,576 tokens in, 65,536 max output (Vertex AI documentation)

### Normalized scores (1–100)

- **Tool use: 87/100.** Native tool use, function calling, structured output and context caching all documented; agentic SWE-bench Verified 59.6% single-attempt shows real multi-step repo work. Capped by the absence of any dedicated tool-use/agentic-tooling eval (Terminal-Bench, Tau3, MCP-Atlas) reported for this ID.
- **Reasoning: 91/100.** GPQA Diamond 86.4% and AIME 2025 88.0% were SOTA at release, and HLE (no tools) 21.6% is a strong frontier-knowledge result; SimpleQA 54.0% keeps it below the very top because of verifiable factuality gaps.
- **Context window: 95/100.** 1,048,576 tokens documented with 65,536 max output, plus published LOFT 87.0% at 128K and 69.8% at 1M — the largest real window of its cohort, still 1M rather than the 2M once advertised.
- **Multimodal: 94/100.** Native text/image/audio/video/PDF input with text output, up to 3-hour video understanding, and video-to-app coding; capped only because image generation is a separate Nano Banana endpoint.
- **Coding: 88/100.** Aider Polyglot 82.2% and LiveCodeBench 74.2% were SOTA at release, SWE-bench Verified 67.2% with multiple attempts; single-attempt SWE-bench (59.6%) still trails the best contemporary agents, which caps the score.
- **Cost efficiency: 55/100.** $1.25 in / $10.00 out per 1M is a premium price point — the $10 output rate is expensive against cheaper reasoning peers, while the blended $1.34 keeps it from the bottom band.
- **Overall Score: 91/100.** Best fit as a long-context multimodal reasoning and agentic-coding model for teams already on Google Cloud; a legacy access-limited ID today, so new builds should test Gemini 3.x Flash/Pro first.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: public internet research (Google DeepMind Gemini 2.5 technical report, Gemini 2.5 Pro model card, Vertex AI model documentation, Artificial Analysis provider tables, Google AI Studio model list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Gemini 2.5 technical report (arXiv 2507.06261 / DeepMind PDF): https://arxiv.org/html/2507.06261v2
- Gemini 2.5 Pro model card: https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf
- Vertex AI Gemini 2.5 Pro documentation (context/output limits, capabilities): https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/2-5-pro
- Gemini API model list (access limitation): https://ai.google.dev/gemini-api/docs/models
- Artificial Analysis — Gemini 2.5 Pro providers (index 16, pricing, speed): https://artificialanalysis.ai/models/gemini-2-5-pro/providers
- Launch blog (2025-03-25): https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/