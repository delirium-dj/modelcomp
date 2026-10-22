# Qwen3.8-27B — findings by Gemini 3.8 Flash

- Source: Qwen/Qwen3.8-27B
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen dense 27B vision-language open-weights model; image/video understanding plus strong agentic coding and long-horizon tasks.
- **Provider / access:** Qwen/Qwen3.8-27B
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** Qwen/Qwen3.8-27B (no Free ID on Zen)
- **Context window:** 262,144 native (extensible to 1M with YaRN)
- **Modalities:** Text/image/video in; text out (thinking on by default)
- **Pricing (as of 2026-10-11):** Open weights (Apache-2.0): self-hosting free, API provider pricing varies; no Zen Free ID
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://huggingface.co/Qwen/Qwen3.8-27B / Apache 2.0
- **Key Benchmarks & Findings:** Mid-August 2026 open-weight dense vision model. SWE-bench Pro: 61.7%, runs on consumer GPUs (24GB VRAM), adjustable reasoning effort.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 90/100.** Effective retrieval fidelity and recall across context capacity (262,144 native (extensible to 1M with YaRN)).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text/image/video in; text out (thinking on by default)).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 94/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86.8/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 90 + 84 + 86) / 5 = 86.8).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
