# GPT-OSS 120B — findings by GPT-6 Luna

- Source: OpenAI/gpt-oss-120b
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's Apache-2.0 open-weight reasoning model for text, coding, and agentic use. The 120B designation is rounded: it has 117B total parameters and 5.1B active per token; it is distinct from gpt-oss-20b.
- **Provider / access:** Weights at Hugging Face `openai/gpt-oss-120b`; self-host through Transformers, vLLM, Ollama, and other compatible runtimes. OpenAI API docs list `gpt-oss-120b` on the Responses API (Chat Completions is marked unsupported); OpenRouter currently lists `openai/gpt-oss-120b`. The model expects OpenAI's Harmony format.
- **Release / knowledge:** Released August 5, 2025. OpenAI API documentation lists a June 1, 2024 knowledge cutoff.
- **IDs:** `openai/gpt-oss-120b` (weights and OpenAI model ID); `openai/gpt-oss-120b` (OpenRouter route).
- **Context window:** 131,072 tokens; OpenAI API docs also list 131,072 max output tokens. The model card describes context extension to this length using YaRN.
- **Modalities:** Text in and text out only. Supports configurable low/medium/high reasoning effort, function calls, web browsing, Python execution, and structured outputs. No image/audio/video input or non-text output.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights allow self-hosting, with hardware cost. OpenRouter's live registry lists approximately $0.018/M input, $0.067/M output, and $0.016/M cached input; route prices can change. OpenAI's API model page documents endpoint support but does not establish a rate in the cited model-specific page.
- **Architecture:** 117B total / 5.1B active MoE; 36 layers, 128 experts with 4 active per token; MXFP4 quantization of MoE weights. Apache-2.0 license.

### Raw benchmarks found

OpenAI reports evaluations by reasoning effort (low/medium/high) and distinguishes tool-assisted from no-tool results. The figures below are the official high-effort results unless otherwise noted; they are not interchangeable with low-effort or differently harnessed evaluations.

Agent / tool use:

- Tau-Bench Retail: **67.8%** at high effort; Tau-Bench Airline: **49.2%** at high effort (OpenAI model card). These are function-calling evaluations, not a general long-horizon agent score.
- Native function calling, web browsing, and Python execution are documented capabilities; no exact-model Terminal-Bench 2.1 or Claw-Eval result was found in the cited official evaluation.

Reasoning / knowledge:

- AIME 2025: **92.5% without tools / 97.9% with tools**, high effort.
- GPQA Diamond: **80.1% without tools / 80.9% with tools**, high effort.
- Humanity's Last Exam: **14.9% without tools / 19.0% with tools**, high effort.
- MMLU: **90.0%**, high effort.

Coding:

- SWE-bench Verified: **62.4%**, high effort (OpenAI model card; the card reports this as its basic pass@1 result).
- Aider Polyglot: **44.4%**, high effort.
- No official Terminal-Bench 2.1 result verified. Do not substitute results from other GPT-OSS sizes or later unrelated benchmarks.

Long context:

- Maximum context: **131,072 tokens**. No exact-model MRCR/RULER or other long-context retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau-Bench Retail 67.8% and Airline 49.2% support useful schema-based function calling, but the evidence lacks a modern terminal-agent benchmark and broader reliability measures. [OpenAI model card](https://openai.com/index/gpt-oss-model-card/).
- **Reasoning: 78/100.** High-effort AIME 2025 at 92.5% and GPQA Diamond at 80.1% are strong; HLE at 14.9% caps the score below frontier performance. Tool-assisted scores are reported separately. [OpenAI model card](https://openai.com/index/gpt-oss-model-card/).
- **Context window: 58/100.** 131K falls in the methodology's 100K–200K tier, and no retrieval test verifies quality near the advertised limit. [OpenAI model card](https://openai.com/index/gpt-oss-model-card/); [API model documentation](https://developers.openai.com/api/docs/models/gpt-oss-120b.md).
- **Multimodal: 15/100.** OpenAI specifies text-only inputs and outputs. [API model documentation](https://developers.openai.com/api/docs/models/gpt-oss-120b.md).
- **Coding: 68/100.** SWE-bench Verified at 62.4% and Aider Polyglot at 44.4% demonstrate competent code generation and repair; no Terminal-Bench 2.1 result establishes interactive terminal-agent strength. [OpenAI model card](https://openai.com/index/gpt-oss-model-card/).
- **Cost efficiency: 94/100.** Apache-2.0 self-hosting plus low current OpenRouter rates make it inexpensive to use, though the 120B-class checkpoint still requires substantial hardware. [Hugging Face model card](https://huggingface.co/openai/gpt-oss-120b); [OpenRouter model registry](https://openrouter.ai/api/v1/models).
- **Overall Score: 58/100.** Half-up mean of the five quality dimensions: (70 + 78 + 58 + 15 + 68) / 5 = 57.8 → 58. Cost is excluded. Best suited to affordable text-only reasoning and function-calling deployments that can support the model's hardware and Harmony-format requirements; it is not a multimodal model or a proven terminal-agent specialist.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches, then cross-checks against OpenAI's model card and API documentation, the official Hugging Face card, and the live OpenRouter registry. Benchmark effort levels and tool/no-tool conditions are kept distinct. No results from gpt-oss-20b or unrelated later evaluations are transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [OpenAI gpt-oss-120b and 20b model card](https://openai.com/index/gpt-oss-model-card/)
  - [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-oss-120b.md)
  - [Official Hugging Face checkpoint](https://huggingface.co/openai/gpt-oss-120b)
  - [OpenAI gpt-oss launch announcement](https://openai.com/index/introducing-gpt-oss/)
  - [OpenAI gpt-oss model card paper](https://arxiv.org/html/2508.10925)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)

---

---

## Archived research pass — `GPT_6_Luna.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GPT_6_Luna.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GPT-OSS 120B — findings by GPT-6 Luna

- Source: OpenAI/GPT-OSS-120B
- Archived date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** GPT-OSS 120B
- **Short description:** Open-weight OpenAI GPT-OSS model identified by the 120B subject slug. Three searches in this pass did not retrieve exact-model benchmark results or revalidate detailed specifications.
- **Provider / access:** OpenAI; open-weight distribution exists in principle, but exact weights URL/API route not verified in this pass.
- **Release / knowledge:** no exact-model release date or cutoff verified.
- **IDs:** tracked label `GPT-OSS 120B`; canonical upstream identifier not independently confirmed here.
- **Context window:** no exact-model context specification verified.
- **Modalities:** no exact-model modality evidence verified.
- **Pricing (as of 2026-10-28):** self-hosting costs depend on infrastructure; no verified hosted price found.
- **Architecture:** 120B parameter designation in subject label; architecture/license details not revalidated in this pass.

## Raw benchmarks found

No traceable exact-model benchmark results were found in three independent public searches.

Agent / tool use:

- no verified public score found

Reasoning / knowledge:

- no verified public score found

Coding:

- no verified public score found

Long context:

- no verified exact-model long-context result found

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
