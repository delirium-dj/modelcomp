# Gemini 3.7 Flash — findings by Iceman

- Source: Google/DeepMind Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google’s Gemini 3.7 Flash is a previous-generation Flash-series multimodal reasoning model positioned for coding, agents, and knowledge-work workflows. It was succeeded/deprecated in favor of Gemini 3.8 Flash, with API requests to `gemini-3.7-flash` routed to `gemini-3.8-flash` per Google AI docs.
- **Provider / access:** Google AI Studio / Gemini API and Gemini app surfaces (Google AI docs/blog). Local metadata lists `google/gemini-3.7-flash` and notes free-tier availability on Google AI Studio with standard rate limits.
- **Release / knowledge:** Announced/released August 13, 2026 (Google blog / LLM Stats). Knowledge cutoff March 2026 (LLM Stats FAQ). Google AI docs list latest update as August 2026.
- **IDs:** `gemini-3.7-flash`.
- **Context window:** 1,048,576 input tokens and 65,536 output tokens (Google AI developer docs).
- **Modalities:** Text, image, video, audio, and PDF input; text output (Google AI developer docs). Supports code execution, computer use, context caching, file search, function calling, Google Maps/Search grounding, structured outputs, thinking (low/medium/high), and URL context; no audio/image generation or Live API per docs.
- **Pricing (as of 2026-11-13):** Introductory pricing $0.75 / 1M input tokens and $3.75 / 1M output tokens through December 31, 2026; standard pricing $1.50 / $7.50 from January 1, 2027 (Google blog). LLM Stats also reports tracked provider pricing starting at $0.75/$3.75.
- **Architecture:** Proprietary Google/DeepMind model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Benchmarks below come from Google’s announcement blog and LLM Stats benchmark rankings for this exact model.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (LLM Stats benchmark ranking, `gemini-3.7-flash`: score 0.858, rank 15)
- AutomationBench: **30.4%** (Google blog, vs 17.0% for Gemini 3.6 Flash)
- GDP.pdf (expert PDF/document comprehension/professional work): **34.0%** (Google blog, vs 22.0% for Gemini 3.6 Flash)
- WebDev Arena (Arena.ai): **1588 Elo** (Google blog, vs 1538 for Gemini 3.6 Flash)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- FrontierCode 1.1 Main (production code quality): **43.6%** (Google blog, vs 34.4% for Gemini 3.6 Flash)
- DeepSWE v1.1 (long-horizon software engineering): **65.3%** (Google blog, vs 49.0% for Gemini 3.6 Flash)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1,048,576-token input context window documented (Google AI docs); no standalone long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found.

### Normalized scores (1–100)

> Derived from available public evidence (Google announcement/blog and LLM Stats ranking). Some standard benchmark families are not publicly reported for this exact model, which caps confidence.

- **Tool use: 82/100.** Strong terminal/agentic and workflow signals: Terminal-Bench 2.1 85.8%, AutomationBench 30.4%, and built-in platform capabilities (function calling, computer use, grounding, file search, URL context, structured outputs). Capped by limited coverage on other agent benchmarks (Tau/GDPval-AA/Toolathon/MCP suites).
- **Reasoning: 76/100.** Improved reasoning/accuracy claims in knowledge-dense domains and solid GDP.pdf 34.0% performance, but no verified GPQA Diamond/HLE/LCR/CritPt or intelligence-index scores were found for precise calibration.
- **Context window: 95/100.** 1,048,576-token input context (with 65,536 output) is a top-tier window per Google AI docs; capped slightly without public long-context retrieval benchmark results.
- **Multimodal: 86/100.** Broad multimodal inputs (text, image, video, audio, PDF) with text output and multimodal product positioning; strong practical coverage, though no dedicated public multimodal benchmark scores were extracted for this exact model.
- **Coding: 83/100.** Good coding evidence: FrontierCode 1.1 Main 43.6%, DeepSWE v1.1 65.3%, and high Terminal-Bench 2.1 85.8%. Capped by absence of verified SWE-bench Verified/Pro and LiveCodeBench numbers in reviewed sources.
- **Cost efficiency: 90/100.** Flash-tier introductory pricing ($0.75/$3.75 per 1M tokens, with later standard $1.50/$7.50) offers strong value for capability; not free, but competitive for a multimodal reasoning model.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions: (82 + 76 + 95 + 86 + 83) / 5 = 84.4 → 84. Best fit for cost-efficient multimodal coding/agent workflows needing large context and tool integration, noting deprecation/routing to Gemini 3.8 Flash.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `webfetch` and `curl` (Google AI developer docs, Google blog announcement, and LLM Stats model/ranking page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 3.7 Flash (Google blog)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
  - [Gemini 3.7 Flash (Google AI developer docs)](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
  - [Gemini 3.7 Flash on LLM Stats](https://llm-stats.com/models/gemini-3.7-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
