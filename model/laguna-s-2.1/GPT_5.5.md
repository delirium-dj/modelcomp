# Laguna S 2.1 — findings by GPT 5.5

- Source: Poolside / Red Hat AI (`laguna-s-2.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside’s open-weight sparse MoE coding model, positioned as a highly efficient Western open-weight model for agentic software engineering.
- **Provider / access:** Poolside API/OpenRouter-style endpoint; open weights via RedHatAI/Poolside model distribution.
- **Release / knowledge:** Released 2026-07-21 per public model trackers; cutoff not stated.
- **IDs:** `poolside/laguna-s-2.1`, `RedHatAI/Laguna-S-2.1`.
- **Context window:** **1M tokens** in BenchLM/llmboard/Poolside pricing references.
- **Modalities:** Text/code; native interleaved reasoning; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Public route prices around **$0.09-$0.10/M input**, **$0.009-$0.01/M cache read**, and **$0.18-$0.20/M output**.
- **Architecture:** Sparse MoE, **118B total / about 8B active**, 256 routed experts top-10 plus shared expert, 48 layers, mixed global/sliding-window attention, GQA.

### Raw benchmarks found

Agent / tool use:

- Hugging Face card notes benchmark rows from Terminal-Bench 2.1, DeepSWE via Artificial Analysis, SWE Atlas via Scale AI, and Toolathlon Verified via the official leaderboard.
- Community local agent eval reports strong tool calling but some hallucination/fabrication under pressure.

Reasoning / knowledge:

- ModelCap Index: **63.6**, position **#42 of 189** ranked language models as of 2026-09-13.

Coding:

- Model is explicitly built for agentic software engineering; official card lists coding/tooling benchmark families including DeepSWE and SWE Atlas.
- Exact SWE/DeepSWE values were not visible in snippets.

Long context:

- Public trackers and pricing pages report **1,048,576** context.
- Local boot-log report says 262K fits on RTX Pro 6000 with fp8 KV and estimates 582K token KV capacity under that setup.

### Normalized scores (1–100)

- **Tool use: 66/100.** Official benchmark families include Toolathlon/Terminal-Bench/SWE Atlas, while community reports caution hallucinations.
- **Reasoning: 66/100.** ModelCap 63.6 and rank #42 support strong open-model reasoning.
- **Context window: 96/100.** 1M context earns near-top context credit.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 78/100.** Coding-specialized architecture and benchmark families support a high coding score, capped by missing exact values.
- **Cost efficiency: 98/100.** $0.09/$0.18 with 1M context is outstanding.
- **Overall Score: 64/100.** Half-up mean of the five quality dimensions; best fit is low-cost open-weight coding agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

