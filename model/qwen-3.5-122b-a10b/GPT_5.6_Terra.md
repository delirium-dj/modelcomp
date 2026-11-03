# Qwen3.5-122B-A10B — findings by GPT-5.6 Terra

- Source: Qwen / Qwen3.5-122B-A10B
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Qwen's open multimodal MoE for coding, reasoning, and tool-using agents.
- **Provider / access:** Downloadable weights and hosted partner endpoints.
- **Release / knowledge:** 2026-02 model release; cutoff not specified.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`.
- **Context window:** 262K tokens.
- **Modalities:** text, image, and video input; text output; tool calling and reasoning.
- **Pricing (as of 2026-11-03):** OpenRouter-reported $0.26 input / $2.08 output per 1M; self-hosting is possible.
- **Architecture:** 122B/125B MoE, about 10B active parameters; open weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench airline: **74.7%** (OpenRouter-published independent board snapshot).

Reasoning / knowledge:

- Scale Multi-Challenge: **61.5% pass@1** (leaderboard entry).
- Summary hallucination rate: **11.2%** (Vectara leaderboard snapshot).

Coding:

- no verified public exact-model coding score found.

Long context:

- 262K context; no public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench provides direct independent tool-use evidence.
- **Reasoning: 79/100.** Independent instruction-following and hallucination figures are solid but not frontier-leading.
- **Context window: 90/100.** 262K is large, below the 1M tier.
- **Multimodal: 86/100.** Text/image/video input is broad; output is text-only.
- **Coding: 75/100.** Agent-ready coding positioning is documented but exact public coding evidence is sparse.
- **Cost efficiency: 91/100.** Open weights and low hosted prices offer strong value.
- **Overall Score: 82/100.** Mean = 81.6; suitable for economical multimodal agents.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA model page](https://build.nvidia.com/qwen/qwen3.5-122b-a10b)
  - [NVIDIA API documentation](https://docs.api.nvidia.com/nim/re/reference/qwen-qwen3-5-122b-a10b)
  - [Independent scorecard](https://www.signalsentry.ai/models/qwen3-5-122b-a10b/)
