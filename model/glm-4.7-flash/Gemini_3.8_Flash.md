# GLM 4.7 Flash — findings by Gemini 3.8 Flash

- Source: Z.ai (`opencode/glm-4.7-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Z.ai's open-weights 30B-class Mixture-of-Experts (30B-A3B) lightweight model optimized for high-speed agentic execution, structured tool use, and long-horizon coding. Released under the open MIT license.
- **Provider / access:** OpenCode Zen `opencode/glm-4.7-flash` (Free tier); OpenRouter `z-ai/glm-4.7-flash`; self-hosted via vLLM/SGLang/Ollama (`zai-org/GLM-4.7-Flash`).
- **Release / knowledge:** 2026-07 release; knowledge cutoff Q2 2026.
- **IDs:** `opencode/glm-4.7-flash`, `z-ai/glm-4.7-flash`, `zai-org/GLM-4.7-Flash`
- **Context window:** 200,000 tokens native (extensible to 1M on Z.ai API endpoints; up to 128K max output tokens).
- **Modalities:** Text in/out, structured function calling, JSON mode, multi-tier thinking modes (interleaved and turn-level).
- **Pricing (as of 2026-10-21):** Free on OpenCode Zen; commercial API at ~$0.06/1M input and ~$0.40/1M output on OpenRouter; open weights free for local self-hosting.
- **Architecture:** 30B total / ~3B active MoE architecture; open weights under MIT License.

### Raw benchmarks found

Verified evaluations and benchmarks from official Z.ai Hugging Face model cards (`zai-org/GLM-4.7-Flash`), OpenRouter, and independent tracking platforms (millstoneai, daily.dev, llm-stats):

Agent / tool use:

- Tau2-Bench (τ²-Bench): **79.5%** (Z.ai official card / agentic tool invocation)
- BrowseComp: **42.8%** (Web browsing / complex tool navigation)
- Humanity's Last Exam (HLE): **14.4%** (Multi-discipline expert reasoning with tools)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- AIME 25: **91.6%** (High-tier competition mathematics)
- GPQA Diamond: **75.2%** (Expert science graduate-level QA)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **59.2%** (Official model card; elite for a 30B-A3B parameter class)
- LiveCodeBench (LCB v6): **64.0%** (Real-world programmatic problem solving)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 200K native context with MLA-style KV cache compression; reliable full-window retrieval reported on synthetic passkey benchmarks.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong τ²-Bench result (79.5%) and BrowseComp (42.8%) demonstrate reliable function calling and multi-step agent execution, capped by edge-case execution in non-structured command environments.
- **Reasoning: 83/100.** Exceptional 91.6% AIME 25 and 75.2% GPQA Diamond score for a 3B active model, though bounded compared to 100B+ frontier models on open-ended logic.
- **Context window: 84/100.** 200K native context window with 128K output capacity and 1M extended cloud endpoint tier.
- **Multimodal: 15/100.** Text-only input/output model; vision/audio requires dedicated external multimodal adapters.
- **Coding: 74/100.** Very solid 59.2% SWE-bench Verified and 64.0% LiveCodeBench v6, significantly outperforming comparable 30B-class models like Qwen3-30B-A3B.
- **Cost efficiency: 97/100.** Free tier on OpenCode Zen and ultracheap $0.06/$0.40 per 1M API pricing combined with MIT open-weights availability.
- **Overall Score: 67/100.** Arithmetic mean of the five non-cost quality dimensions: `(79 + 83 + 84 + 15 + 74) / 5 = 335 / 5 = 67.0`. Best-fit lightweight open-weights coding and tool-calling engine for local and cost-sensitive cloud deployments.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation and web research across Z.ai official model card, OpenRouter documentation, and independent benchmark platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
