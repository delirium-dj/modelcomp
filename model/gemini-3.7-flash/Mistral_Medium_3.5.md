# Gemini 3.7 Flash — findings by Mistral Medium 3.5

- Source: Google/DeepMind/Gemini 3.7 Flash
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's most intelligent Flash-class model for coding, agents, multimodal reasoning, and reliable multi-step execution. Released August 13, 2026 as the primary agentic workhorse in the Gemini 3 family, bridging the gap between deep-reasoning Pro models and high-throughput Flash-Lite models.
- **Provider / access:** `google/gemini-3.7-flash` via Google Cloud (Gemini Enterprise Agent Platform), Google AI Studio (Gemini API)
- **Release / knowledge:** August 13, 2026; knowledge cutoff March 2026 (some domains limited to January 2025)
- **IDs:** `gemini-3.7-flash` (GA/Stable)
- **Context window:** 1,048,576 tokens (1M) input, 65,536 tokens (64K) output — verified from official Google Cloud docs and ModelFlare analysis
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking levels (LOW/MEDIUM/HIGH, medium default); tool calls; structured output; grounding (Google Search, Google Maps); code execution; computer use (preview)
- **Pricing (as of 2026-11-05):** Standard $0.75 / $3.75 per 1M input/output tokens (introductory through Dec 31, 2026; then $1.50 / $7.50); cached input $0.075/1M (then $0.15/1M); Batch/Flex at 50% discount; Priority at premium. Source: Google Cloud Agent Platform Pricing, AI Studio Developer Guide
- **Architecture:** Proprietary; parameter count not disclosed; based on Gemini 3.6 Flash with algorithmic improvements in reasoning foundation and feedback from production developers
- **Retirement:** January 28, 2027 (Gemini Enterprise Agent Platform support); models may remain accessible via Gemini API after this date

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (source: Google AI Studio Developer Guide, ModelFlare benchmark table)
- Terminal-Bench 3.0: **14.9%** (source: ModelFlare comparison)
- AutomationBench (private set): **30.4%** (source: ModelFlare comparison)
- GDPval-AA v2 Elo: **1525** (source: ModelFlare comparison)
- LMArena WebDev Arena: **1588 Elo** (vs 1538 for 3.6 Flash; source: AI Studio Developer Guide)
- Harvey LAB-AA: **90.7%** (source: ModelFlare comparison)
- LAB-Bench2: **82.1%** (source: ModelFlare comparison)
- HLE-Verified: **53.6%** (source: ModelFlare comparison)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- CharXiv Reasoning (no tools): **84.5%** (source: ModelFlare comparison)
- CharXiv Reasoning (with tools): **88.7%** (source: ModelFlare comparison)
- LVBench: **85.4%** (source: ModelFlare comparison)
- GDM-MRCR v2 (128K average): **97.0%** (long-context retrieval; source: ModelFlare comparison)
- OSWorld 2.0: **47.9%** (computer use; source: ModelFlare comparison)
- Artificial Analysis Intelligence Index: **56** (source: ModelFlare comparison, Google model card)
- BioMysteryBench (human-solvable): **87.1%** (source: ModelFlare comparison)
- BioMysteryBench (human-difficult): **43.5%** (source: ModelFlare comparison)

Coding:

- SWE-bench Verified: **no verified public score found**
- DeepSWE v1.1: **65.3%** (Kimi Code harness; source: AI Studio Developer Guide, ModelFlare)
- FrontierCode 1.1 Main: **43.6%** (vs 34.4% for 3.6 Flash; source: AI Studio Developer Guide, ModelFlare comparison)
- Code Arena WebDev Elo: **1588** (source: ModelFlare comparison)
- GDP.pdf: **34.0%** (document understanding; source: ModelFlare comparison)

Long context:

- GDM-MRCR v2: **97.0%** at 128K average context (verified from ModelFlare)
- Model supports 1M input token context window

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic capabilities: 85.8% Terminal-Bench 2.1, 30.4% AutomationBench, 1525 GDPval-AA Elo, 90.7% Harvey LAB-AA. LMArena WebDev Arena at 1588 Elo. Capped by Terminal-Bench 3.0 at 14.9% (lower than some competitors).
- **Reasoning: 90/100.** Solid reasoning across knowledge benchmarks: 84.5% CharXiv (no tools), 88.7% CharXiv (with tools), 85.4% LVBench, 97.0% GDM-MRCR, 53.6% HLE-Verified. Artificial Analysis Intelligence Index at 56. Capped by lack of GPQA Diamond and some specialized reasoning gaps.
- **Context window: 100/100.** 1M token input context window verified from official documentation. Maximum tier.
- **Multimodal: 90/100.** Native multimodal support: text, image, video, audio, PDF input. Strong vision capabilities for design adherence and document understanding. Not full video generation. Capped by output modality being text-only.
- **Coding: 93/100.** Excellent coding performance: 65.3% DeepSWE v1.1, 43.6% FrontierCode 1.1 Main, 1588 Code Arena Elo, 34.0% GDP.pdf. Capped by not leading all coding benchmarks vs. GPT-5.6 Terra (69.6% DeepSWE).
- **Cost efficiency: 88/100.** Introductory pricing at $0.75/$3.75 per 1M input/output through Dec 2026 (then $1.50/$7.50) offers strong value. Cached input and Batch/Flex options improve efficiency. Slightly higher than some competitors but justified by performance.
- **Overall Score: 93/100.** Primary agentic workhorse with broad capability across coding, agentic tasks, reasoning, and multimodal inputs. Slightly below Pro-class models but excellent value and breadth.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.7 Flash | Google Cloud Documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-7-flash)
  - [Gemini 3.7 Flash: Developer Guide — Google AI Studio](https://aistudio.google.com/learn/gemini-3-7-flash-developer-guide)
  - [Gemini 3.7 Flash: Specs, Benchmarks & Pricing — ModelFlare](https://modelflare.dev/articles/gemini-3-7-flash-review-pricing)
  - [Agent Platform Pricing | Google Cloud](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing)
  - [BenchmarkList — gemini-3.7-flash-high](https://benchmarklist.com/models/gemini-3-7-flash-high/)
  - [Gemini 3.7 Flash Benchmarks — BenchLM.ai](https://benchlm.ai/models/gemini-3-7-flash)
