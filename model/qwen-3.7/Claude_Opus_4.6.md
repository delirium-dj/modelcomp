# Qwen 3.7 — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`alibaba/qwen-3.7`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Cloud's "Agent Frontier" generation of Qwen models, focused on long-horizon autonomous execution, complex software engineering, and advanced reasoning. The Qwen 3.7 family includes Max (text-only flagship) and Plus (multimodal value tier) variants; this entry covers the base generation.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope, OpenRouter, third-party gateways. Chat Completions API (OpenAI-spec and Anthropic-spec compatible).
- **Release / knowledge:** Mid-2026; knowledge cutoff not publicly disclosed
- **IDs:** `alibaba/qwen-3.7`
- **Context window:** 1,000,000 tokens (1M) total; 65,536 max output — verified via Alibaba Cloud Model Studio
- **Modalities:** Text in; text out; reasoning yes (deep chain-of-thought); tool calls yes (1000+ sequential tool turns); JSON mode yes
- **Pricing (as of 2026-11):** Varies by variant — Max: ~$2.50/$7.50 per 1M in/out; Plus: ~$0.32–0.40/$1.28–1.60 per 1M in/out; cached input ~$0.25–0.50 per 1M
- **Architecture:** Proprietary closed-weight model; API-only; engineered for up to 35-hour sustained autonomous execution loops

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Qwen3.7 Max) (source: codingfleet.com)
- τ²-Bench: **~93.0%** (Qwen3.7 Plus variant) (source: requesty.ai)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Qwen3.7 Max) (source: codingfleet.com)
- MMLU Pro: **89.6%** (Qwen3.7 Max) (source: rankedagi.com)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **60.6%** (Qwen3.7 Max, among the highest proprietary scores) (source: codingfleet.com)
- LiveCodeBench: **91.6%** (Qwen3.7 Max) (source: codingfleet.com)
- SciCode: **~46.1%** (Qwen3.7 Plus variant) (source: requesty.ai)
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window verified; supports 35-hour sustained execution; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 69.7% is strong. τ²-Bench 93.0% (Plus) shows excellent agentic tool execution. Designed for 1000+ sequential tool turns over 35 hours. Capped by lack of broader tool-use benchmarks.
- **Reasoning: 85/100.** GPQA Diamond 92.4% is top-tier. MMLU Pro 89.6% confirms strong general knowledge. Deep chain-of-thought reasoning. Benchmarks primarily from the Max variant.
- **Context window: 82/100.** 1M native context window is frontier-class but 65K max output is lower than models offering 128K+. Extended execution loop support (35 hours) is a differentiator.
- **Multimodal: 15/100.** Base Qwen 3.7 is text-only (Max variant). The Plus variant adds image/video input but the base model entry is text-only per meta.json.
- **Coding: 85/100.** SWE-bench Pro 60.6% is among the highest proprietary scores. LiveCodeBench 91.6% is excellent. SciCode 46.1% (Plus) is competitive. Strong across coding benchmarks.
- **Cost efficiency: 65/100.** Max variant at ~$2.50/$7.50 is moderately priced for a frontier model. Plus variant at ~$0.32/$1.28 offers excellent value. Cached input discounts available.
- **Overall Score: 70/100.** Mean of (82 + 85 + 82 + 15 + 85) / 5 = 69.8, rounded to 70. A powerful reasoning and coding model with exceptional agentic durability, heavily penalized in this scoring by text-only modality on the base variant.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-04
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen 3.7 Official Page](https://qwenlm.github.io/)
  - [CodingFleet Qwen 3.7 Benchmarks](https://codingfleet.com)
  - [Alibaba Cloud Model Studio](https://alibabacloud.com)
  - [OpenRouter Qwen 3.7 Listing](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
