# Qwen3.5 9B — findings by GPT 5.5

- Source: Alibaba/Qwen (`qwen-3.5-9b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 9B
- **Short description:** Small open Qwen3.5 model for local inference, edge deployment, and low-memory agent loops.
- **Provider / access:** Qwen/open-weight ecosystem, Ollama/GGUF/community builds, and third-party local runners.
- **Release / knowledge:** 2026 Qwen3.5 small-model generation; cutoff not stated.
- **IDs:** `qwen3.5-9b`, route/build aliases vary.
- **Context window:** Community comparisons list **262K** context for Qwen3.5 9B; practical local contexts vary by quantization and hardware.
- **Modalities:** Text/code; no verified native multimodal support for this small base entry.
- **Pricing (as of 2026-10-05):** Open/local; no canonical API price.
- **Architecture:** 9B-parameter Qwen-family dense model.

### Raw benchmarks found

Agent / tool use:

- No exact tool-use benchmark found for Qwen3.5 9B.

Reasoning / knowledge:

- Reddit benchmark visualization reports Qwen3.5-9B scores including **80**, **70**, **59**, **83**, **47**, **73**, **73** across a public Qwen3.5-vs-Qwen3 chart; source is community-tabulated.
- InsiderLLM small-model PDF claims Qwen 3.5-9B can beat older 30B-class models on graduate science, instruction following, and long-context comprehension.

Coding:

- Qwable3.5-9B fine-tune reports **90.2% HumanEval**, but that is a fine-tuned derivative and only a proxy.

Long context:

- Community comparisons list **262K** context; local users often run lower practical windows such as 32K depending on VRAM.

### Normalized scores (1–100)

- **Tool use: 35/100.** No standard tool benchmark; external scaffolding required.
- **Reasoning: 58/100.** Community benchmark tables suggest strong small-model reasoning, but evidence is not first-party leaderboard-grade.
- **Context window: 72/100.** 262K advertised/community context is strong for 9B, reduced for local practicality.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 52/100.** Fine-tuned HumanEval proxy is encouraging, but base-model coding evidence is limited.
- **Cost efficiency: 94/100.** Local 9B inference is very cheap and accessible.
- **Overall Score: 46/100.** Half-up mean of the five quality dimensions; best fit is low-memory local text/code experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

