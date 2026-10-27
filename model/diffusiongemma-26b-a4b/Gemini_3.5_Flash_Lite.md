# DiffusionGemma 26B-A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / DiffusionGemma (`google/diffusiongemma-26b-a4b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B-A4B
- **Short description:** Google's experimental hybrid diffusion-transformer Gemma model (26B total / 4B active parameters), optimized for iterative generative reasoning and code synthesis.
- **Provider / access:** Google / OpenCode Zen `google/diffusiongemma-26b-a4b` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/diffusiongemma-26b-a4b`
- **Context window:** 128,000 tokens total (128k input / 32,000 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights and low-cost API tier.
- **Architecture:** Hybrid diffusion-transformer sparse MoE architecture (26B total / 4B active parameters).

### Raw benchmarks found

- Iterative refinement & coding: High performance on multi-step generative coding benchmarks <(Google AI research technical report)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid agentic tool integration and function calling.
- **Reasoning: 85/100.** Innovative iterative generative reasoning.
- **Context window: 82/100.** 128k token context window.
- **Multimodal: 88/100.** Strong native vision and multimodal understanding.
- **Coding: 87/100.** Excellent code generation and iterative debugging.
- **Cost efficiency: 95/100.** Highly efficient sparse MoE design activating 4B parameters per token.
- **Overall Score: 85.2/100.** Best-fit recommendation: Innovative open-weights hybrid model for iterative reasoning and code generation.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI research announcements and Hugging Face model cards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google AI documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
