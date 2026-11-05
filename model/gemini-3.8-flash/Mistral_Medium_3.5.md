# Gemini 3.8 Flash — findings by Mistral Medium 3.5

- Source: Google/DeepMind/Gemini 3.8 Flash
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-class workhorse model for long-horizon software engineering, autonomous agents, and complex enterprise workflows. Released September 2, 2026 (GA) as successor to 3.7 Flash, delivering significant improvements across coding, agentic tasks, and specialized reasoning while often approaching higher-cost frontier model performance.
- **Provider / access:** `google/gemini-3.8-flash` via Google Cloud (Gemini Enterprise Agent Platform), Google AI Studio (Gemini API)
- **Release / knowledge:** September 2, 2026; knowledge cutoff not explicitly stated in sources
- **IDs:** `gemini-3.8-flash` (GA/Stable)
- **Context window:** 1,048,576 tokens (1M) input, 65,536 tokens (64K) output — verified from official Google Cloud docs and AI Studio
- **Modalities:** Text, image, audio, video input; text output; thinking levels (LOW/MEDIUM/HIGH, medium default); tool calls; structured output; grounding (Google Search, Google Maps, Parallel Web Search, Exa Web Search); code execution; computer use
- **Pricing (as of 2026-11-05):** Introductory $0.75 / $3.75 per 1M input/output tokens through Dec 31, 2026 (same as 3.7 Flash). Standard PayGo, Flex PayGo, Priority PayGo, Batch inference, Provisioned Throughput supported. Source: Google Cloud Agent Platform Pricing
- **Architecture:** Proprietary; parameter count not disclosed; based on Gemini 3.7 Flash with algorithmic improvements
- **Retirement:** September 2, 2027 or later (Gemini Enterprise Agent Platform support); models may remain accessible via Gemini API after this date
- **Note:** `thinking_level="MINIMAL"` not supported (returns API validation error); use LOW/MEDIUM/HIGH only

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google-reported; independent: 81.3% via Vals AI/BenchLM; source: Developer's guide, Kingy.ai, IntuitionLabs)
- SWE-Bench Pro: **61.6%** (vs 60.4% for 3.7 Flash; source: Developer's guide, Kingy.ai)
- SWE-Atlas: **51.9%** (vs 48.0% for 3.7 Flash; source: Developer's guide)
- τ³-bench Banking: **38.1%** (vs 30.9% for 3.7 Flash; source: Developer's guide)
- OSWorld 2.0: **+8.4 points over 3.7 Flash** (59.0% vs 50.6%; source: Emergent.sh)
- GDP.pdf: **35.0%** (vs 34.0% for 3.7 Flash; source: Developer's guide)
- Humanity's Last Exam (HLE): **45.4%** (slightly below 3.7 Flash's 45.7%; source: Developer's guide)
- BioMysteryBench (human-difficult): **+13 points over 3.7 Flash** (source: Kingy.ai)
- LABBench2: **moderate improvement over 3.7 Flash** (source: Kingy.ai)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- CharXiv (Multimodal): **86.2%** (vs 84.5% for 3.7 Flash; source: Developer's guide)
- Artificial Analysis Intelligence Index: **59** (high effort; source: IntuitionLabs, BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **73.7%** (public leaderboard, mini-swe-agent; +8.4pp over 3.7 Flash's 65.3%; source: Emergent.sh, DataCamp, Kingy.ai)
- FrontierCode v1.1 Main: **not explicitly reported in sources**
- CursorBench: **no verified public score found**

Long context:

- 1M token input context window verified
- Optimized for long-horizon tasks including 60+ minute video understanding

### Normalized scores (1–100)

- **Tool use: 96/100.** Exceptional agentic performance: 90.8% Terminal-Bench 2.1 (vendor), 81.3% (independent via Vals AI), 61.6% SWE-Bench Pro, 51.9% SWE-Atlas, +8.4pp on OSWorld 2.0, +13pp on BioMysteryBench. Substantial gains over 3.7 Flash across all agentic benchmarks. Capped only by frontier Pro-class models.
- **Reasoning: 88/100.** Strong reasoning: 59 on Artificial Analysis Intelligence Index (high effort), 86.2% CharXiv Multimodal, 45.4% HLE. Substantial improvements over 3.7 Flash. Capped by some specialized reasoning gaps vs. frontier models.
- **Context window: 100/100.** 1M token context window with support for long-horizon video understanding. Maximum tier.
- **Multimodal: 90/100.** Native multimodal support: text, image, audio, video input. Strong vision capabilities. Not full video generation. Capped by output being text-only.
- **Coding: 94/100.** Excellent coding: 73.7% DeepSWE v1.1 (+8.4pp over 3.7 Flash), 61.6% SWE-Bench Pro, 51.9% SWE-Atlas. Often approaches frontier model performance at Flash pricing. Capped by not leading all coding benchmarks vs. Pro-class models.
- **Cost efficiency: 88/100.** Introductory pricing at $0.75/$3.75 per 1M input/output through Dec 2026 (same as 3.7 Flash). Multiple consumption modes (Standard/Priority/Flex/Batch) and caching options. Slightly higher token consumption than 3.7 Flash at higher effort levels but with better accuracy.
- **Overall Score: 93.6/100.** Most intelligent Flash-class workhorse with broad capability across coding, agentic tasks, reasoning, and multimodal inputs. Often approaches frontier Pro performance at significantly lower cost.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.8 Flash | Google Cloud Documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash)
  - [Developer's guide to Gemini 3.8 Flash | Google Cloud](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash)
  - [Gemini 3.8 Flash - Gemini API | Google AI Studio](https://aistudio.google.com/docs/models/gemini-3.8-flash)
  - [Agent Platform Pricing | Google Cloud](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing)
  - [Gemini 3.8 Flash Review — Kingy.ai](https://kingy.ai/blog/gemini-3-8-flash-review-benchmarks-specs-pricing/)
  - [Gemini 3.8 Flash Benchmarks — Emergent.sh](https://emergent.sh/learn/gemini-3-8-flash-benchmarks)
  - [Gemini 3.8 Flash: Features, Benchmarks, and Pricing — DataCamp](https://www.datacamp.com/blog/gemini-3-8-flash-cyber)
  - [Gemini 3.8 Flash: Accuracy, Latency, and Cost for Research Tasks — IntuitionLabs](https://intuitionlabs.ai/articles/gemini-3-8-flash-research-tasks-review)
  - [Gemini 3.8 Flash Benchmarks, Pricing & Speed — BenchLM.ai](https://benchlm.ai/models/gemini-3-8-flash)
