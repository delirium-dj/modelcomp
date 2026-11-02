# GPT-5 — findings by GPT 5.6 Luna

- Source: OpenAI / GPT-5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's 2025 reasoning-capable model family for coding, reasoning, and agentic tasks. The current API documentation marks the family identity deprecated; this report does not substitute GPT-5.4, GPT-5.5, GPT-5.6, or GPT-6.
- **Provider / access:** OpenAI API and ChatGPT; model ID `gpt-5`, with Chat Completions and Responses API support and built-in tools.
- **Release / knowledge:** Default snapshot `gpt-5-2025-08-07`; knowledge cutoff 2024-09-30. Current status is deprecated.
- **IDs:** `openai/gpt-5`; pinned snapshot `gpt-5-2025-08-07`. OpenAI's system card separately labels the system components `gpt-5-main` and `gpt-5-thinking`.
- **Context window:** 400,000 tokens; maximum input 272,000 and maximum output 128,000 (current OpenAI model documentation).
- **Modalities:** Text and image input, text output; reasoning effort, function calling, structured outputs, web/file search, code interpreter, image generation, and MCP through Responses.
- **Pricing (as of 2026-11-02):** $1.25 input / $0.125 cached input / $10 output per 1M tokens. The rate is retained as the documented GPT-5 price despite deprecation.
- **Architecture:** Proprietary.

### Raw benchmarks found

> OpenAI's system card evaluates a unified GPT-5 system whose fast and thinking components are distinct. External benchmark profiles likewise split GPT-5 medium and high effort, so no single number is presented as an unqualified alias result.

Agent / tool use:

- τ²-Bench: **84.8%** for the GPT-5 high profile and **86.5%** for the separate medium profile (Artificial Analysis/BenchLM; effort variants retained).
- GDPval-AA normalized **20.9%** / Elo **1015** and JobBench **8.5%** for the high profile (BenchLM).
- BenchLM's medium profile composite is **45.26/100**, rank **#121/1004**, with 12/724 benchmarks covered; its high profile is unranked with 22 source-displayable rows.

Reasoning / knowledge:

- High profile: AA-LCR **78.2%**, CritPt **5.7%**, GPQA Diamond **85.4%**, HLE **28.5%**, Intelligence Index **23.0%**, and MMLU-Pro **87.1%** (BenchLM/Artificial Analysis).
- The OpenAI system card documents broad reasoning, coding, instruction-following, hallucination, health, and safety evaluations, but its rows are component- and setting-specific rather than an unqualified `gpt-5` composite.

Coding:

- High profile: Vibe Code Bench v1.1 **20.09%**, AA Coding Index **37.8%**, and AA LiveCodeBench **84.6%** (BenchLM/Artificial Analysis/Vals).
- The spread is retained as evidence of effort/harness variance; it is not replaced with newer GPT-5.x or Codex measurements.

Multimodal:

- AA-MMMU-Pro: **74.2%**; Design Arena Website **1184** (BenchLM/Artificial Analysis/OpenRouter high-profile rows).
- OpenAI documents image input, but no audio or video input/output for this model was verified.

Long context:

- Official context window: **400K** with 272K maximum input; AA-LCR **78.2%** is a useful proxy, but no full-window MRCR/RULER result for the pinned snapshot was verified.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-Bench in the mid-80s, OpenAI's built-in tool suite, and system-card agent evaluations support strong tool use; GDPval and effort/profile differences cap it.
- **Reasoning: 86/100.** GPQA 85.4%, MMLU-Pro 87.1%, and the system-card reasoning results are strong, while HLE 28.5%, Intelligence Index 23.0%, and CritPt 5.7% show meaningful limits.
- **Context window: 88/100.** The 400K official window is substantial and LCR is 78.2%, but full-window retrieval evidence is missing and external profile context is 128K.
- **Multimodal: 80/100.** Image input and MMMU-Pro 74.2% establish useful vision capability; text-only output and no verified audio/video support cap it.
- **Coding: 83/100.** LiveCodeBench 84.6% and broad system-card coding evidence are strong, but Vibe Code Bench 20.09% and AA Coding Index 37.8% show agentic variance.
- **Cost efficiency: 65/100.** $1.25/$10 is expensive compared with current efficient reasoning models, and the documented alias is deprecated.
- **Overall Score: 84.2/100.** Mean of the five quality dimensions `(84 + 86 + 88 + 80 + 83) / 5 = 84.2`; best fit is compatibility with a legacy GPT-5 deployment whose pinned behavior matters more than access to newer model generations.

## Evidence notes

- GPT-5, `gpt-5-main`, `gpt-5-thinking`, GPT-5 medium, and GPT-5 high are related but not interchangeable evaluation identities. Newer GPT-5.x models are deliberately excluded.
- The BenchLM composite is partial and variant-specific; the normalized Overall above is a five-quality-dimension interpretation and excludes Cost efficiency.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI GPT-5 model documentation and system card, BenchLM's October 29 medium/high profiles, Artificial Analysis, Vals, JobBench, and OpenRouter. Deprecated aliases, effort variants, and benchmark versions were preserved; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5 model documentation](https://developers.openai.com/api/docs/models/gpt-5)
  - [OpenAI GPT-5 system card](https://openai.com/index/gpt-5-system-card)
  - [BenchLM GPT-5 high profile](https://benchlm.ai/models/gpt-5-high)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
