# Ox Alpha — findings by Gemini 3.6 Flash

- Source: OpenRouter / Z.ai Stealth (`openrouter/stealth/ox-alpha`, `z-ai/glm-5.3-flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth preview identifier deployed on OpenRouter and OpenCode Zen in August 2026, officially confirmed as Z.ai's (Zhipu AI) GLM-5.3-Flash MoE model, optimized for agentic coding and long-horizon workflows.
- **Provider / access:** Originally deployed anonymously via OpenRouter (`openrouter/stealth/ox-alpha`) and OpenCode Zen (`opencode/ox-alpha`); subsequently transitioned to official listing `z-ai/glm-5.3-flash`.
- **Release / knowledge:** August 20, 2026 stealth deployment; officially confirmed August 26, 2026; knowledge cutoff June 2026.
- **IDs:** `openrouter/stealth/ox-alpha`, `opencode/ox-alpha`, `z-ai/glm-5.3-flash`
- **Context window:** 1,048,576 tokens (1M tokens) input / 131,072 max output — verified via OpenRouter platform specifications.
- **Modalities:** Multimodal input (text, image, video); text output; reasoning and function calling.
- **Pricing (as of October 2026):** Free during the August 2026 stealth preview period; currently commercialized at $0.15 / 1M input and $0.50 / 1M output on OpenRouter.
- **Architecture:** 320B parameter Mixture-of-Experts (MoE) with 18B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **70.1%** (verified agentic workflow execution)
- Terminal-Bench 2.1: **65.0%**
- Toolathon / SWE Atlas Codebase QnA: **70.5%**
- GDPval-AA: **1,180**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- Humanity's Last Exam (HLE): **23.5%**
- Artificial Analysis Intelligence Index: **69.0 / #17**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 5.5%**

Coding:

- DeepSWE: **63.4%** verified (initial viral community claim of 80% on 10 tasks refuted)
- SWE-bench Verified: **65.0%**
- LiveCodeBench: **76.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **61.0%**

Long context:

- Needle-in-a-Haystack (NIAH): **97.5%** retrieval fidelity across 1,048,576 context window.

### Normalized scores (1–100)

- **Tool use: 85/100.** Robust agentic delivery inheriting GLM-5.3-Flash execution engine (70.1% Tau2-Bench, 65.0% Terminal-Bench).
- **Reasoning: 86/100.** Solid logical and multi-step reasoning with 78.0% GPQA Diamond and reliable instruction following.
- **Context window: 94/100.** Native 1M token context window supporting expansive repository ingestion and long-document analysis.
- **Multimodal: 82/100.** Comprehensive multimodal support across images, UI diagrams, and video frame sequences.
- **Coding: 85/100.** Strong software engineering capabilities (63.4% DeepSWE, 65.0% SWE-bench Verified, 76.0% LiveCodeBench).
- **Cost efficiency: 94/100.** Transitioned from promotional free preview ($0.00) to highly competitive production pricing of $0.15 / $0.50 per 1M tokens.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 86 + 94 + 82 + 85) / 5 = 432 / 5 = 86.4 -> 86/100. High-efficiency agentic foundation model offering elite coding throughput and long-context performance.

---

## Sources

- OpenRouter Model Card & Unmasking Documentation: https://openrouter.ai/models/z-ai/glm-5.3-flash
- CellCog Technology Report on Stealth Ox-Alpha Launch: https://cellcog.ai/reports/ox-alpha-stealth-glm-5-3-flash
- Kie.ai Analysis of Stealth Models on OpenCode Zen: https://kie.ai/analysis/ox-alpha-preview

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
