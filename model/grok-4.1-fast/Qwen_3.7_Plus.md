# Grok 4.1 Fast — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4.1 Fast (`opencode/grok-4.1-fast`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's November 2025 speed tier — a non-reasoning route of the Grok 4.1 architecture designed for high-volume tool calling at ~1/10 of frontier pricing. Features a unified reasoning/non-reasoning architecture with 2M context window. AA Intelligence Index 11 (non-reasoning, above average for non-reasoning models at median 7). Grok 4.1 (reasoning variant) reported 65% fewer hallucinations than Grok 4 and 2M token context. Now deprecated in favor of Grok 4.3+.
- **Provider / access:** xAI (API). Proprietary.
- **Release / knowledge:** November 19, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/grok-4.1-fast`
- **Context window:** 2,000,000 tokens (2M); ~30,000 max output
- **Modalities:** Text and image in; text out; tool calling + structured output
- **Pricing:** $0.20 in / $0.50 out per 1M; $0.05 cached input

### Raw benchmarks found

Agent / tool use: Designed for high-volume tool calling and agentic search. No specific agentic benchmark scores (τ²-bench, Terminal-Bench) published for this variant.

Reasoning / knowledge: AA Intelligence Index 11 (non-reasoning, above average for non-reasoning models, median 7). Grok 4.1 (full reasoning variant) reported 65% fewer hallucinations than Grok 4. BenchLM scores: Grok 4.1 Fast (Reasoning) 45.73, Grok 4.1 Fast (Non-reasoning) 36.1.

Coding: No specific coding benchmarks published for this variant. Grok 4.1 (full) reported competitive coding performance.

Multimodal: Text and image input supported. No standard multimodal benchmarks reported.

Long context: 2M native context window.

### Normalized scores (1–100)

- **Tool use: 50/100.** Designed for high-volume tool calling and structured output. Native tool-use RL training inherited from Grok 4 family. No specific agentic benchmark scores published for this variant.
- **Reasoning: 35/100.** AA Intelligence Index 11 (non-reasoning) is above average for non-reasoning models (median 7) but very low in absolute terms. BenchLM non-reasoning score 36.1 is modest. The reasoning variant (BenchLM 45.73) is stronger but this model entry focuses on the non-reasoning speed tier.
- **Context window: 90/100.** 2M token context is best-in-class. Supports very long documents and extended conversations. ~30K output cap is a minor limitation.
- **Multimodal: 40/100.** Text and image input supported. No standard multimodal benchmarks reported. Basic multimodal support.
- **Coding: 40/100.** No specific coding benchmarks published for this variant. Grok 4.1 family has competitive coding but this speed tier lacks reported scores.
- **Cost efficiency: 90/100.** $0.20/$0.50 per 1M is extremely cheap — ~1/10 of frontier model cost. $0.05 cached input. Best for high-volume deployments where cost matters more than peak performance.
- **Overall Score: 51/100.** Mean of Tool (50) + Reasoning (35) + Context (90) + Multimodal (40) + Coding (40) = 255/5 = 51.0. The 2M context and exceptional cost efficiency are highlights, but very limited benchmark coverage, low AA Intelligence Index (11), and deprecated status significantly limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
