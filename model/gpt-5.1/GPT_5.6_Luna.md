# GPT-5.1 — findings by GPT 5.6 Luna

- Source: OpenAI / GPT-5.1
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's GPT-5.1 model for coding and agentic tasks with configurable reasoning effort. The API page now marks this identity deprecated; it remains documented here as GPT-5.1 rather than being replaced by GPT-5.2, GPT-5.5, or GPT-6 variants.
- **Provider / access:** OpenAI API and ChatGPT family; Chat Completions and Responses API are supported. The current documentation lists the model as deprecated.
- **Release / knowledge:** Default snapshot `gpt-5.1-2025-11-13`; knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5.1`; pinned snapshot `gpt-5.1-2025-11-13`. Both are deprecated in the current OpenAI documentation.
- **Context window:** 400,000 tokens; maximum output 128,000. BenchLM's base profile reports a 200K context for its evaluated route, so those values are not silently conflated.
- **Modalities:** Text and image input, text output; reasoning tokens, configurable effort, function calling, structured outputs, and Responses tools including web/file search, code interpreter, and MCP.
- **Pricing (as of 2026-11-02):** $1.25 input / $0.125 cached input / $10 output per 1M tokens in the current documentation. The price is retained as the listed GPT-5.1 rate even though the identity is deprecated.
- **Architecture:** Proprietary.

### Raw benchmarks found

> The exact pinned snapshot is documented, but public benchmark sources use different effort settings and sometimes an unqualified base route. Those labels remain attached to each result.

Agent / tool use:

- τ²-Bench: **81.9%**; Gert Labs **41.24%**; GDPval-AA normalized **16.3%** / Elo **930**; terminalBenchHard **45.5%** (BenchLM/Artificial Analysis/provider rows).
- BenchLM composite: **56.8/100**, rank **#58/1004**, with 23/724 benchmarks covered; coverage is explicitly partial.

Reasoning / knowledge:

- AA-LCR **80.0%**; CritPt **4.9%**; ARC-AGI-1 **72.83%** (the ARC row is labelled GPT-5.1 Thinking, High).
- AA Intelligence Index **24.7%**, GPQA Diamond **87.3%**, HLE **28.5%**, and Omniscience accuracy / hallucination rate **37.7% / 51.9%** (Artificial Analysis).
- AIME 2025: **94.0%** and MMLU-Pro **87.0%** (Artificial Analysis/provider rows).

Coding:

- Vibe Code Bench v1.1: **24.61%**; AA Coding Index **49.4%**; AA LiveCodeBench **86.8%** (BenchLM/Artificial Analysis/ Vals rows).
- The high LiveCodeBench result and low Vibe Code result are retained as different tests, not averaged into an invented exact-tier composite.

Multimodal:

- AA-MMMU-Pro: **75.5%**; Design Arena Website **1185** (Artificial Analysis/OpenRouter provider rows).
- OpenAI documents image input but no audio or video input/output for this identity.

Long context:

- Official context limit: **400K**; BenchLM's evaluated base route: **200K**; AA-LCR **80.0%**. No full-window MRCR/RULER result for the pinned snapshot was verified.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 81.9% and OpenAI's function/tool support are solid, but terminalBenchHard 45.5%, GDPval 16.3%, and deprecation/route ambiguity cap confidence.
- **Reasoning: 84/100.** GPQA 87.3%, AIME 94%, ARC-AGI-1 72.83%, and LCR 80% are strong, while HLE 28.5% and the low Intelligence Index show uneven generalization.
- **Context window: 88/100.** The official 400K window is substantial, but the independent profile uses 200K and no full-window retrieval result was located.
- **Multimodal: 80/100.** Image input and MMMU-Pro 75.5% establish useful vision capability; no audio/video support was verified.
- **Coding: 80/100.** LiveCodeBench 86.8% is strong, but Vibe Code Bench 24.61% and AA Coding Index 49.4% show practical agent variance.
- **Cost efficiency: 65/100.** $1.25/$10 is expensive relative to current reasoning alternatives, and the endpoint is deprecated.
- **Overall Score: 82.8/100.** Mean of the five quality dimensions `(82 + 84 + 88 + 80 + 80) / 5 = 82.8`; best fit is legacy GPT-5.1 coding/tool workloads that require a pinned documented snapshot, not new deployments.

## Evidence notes

- GPT-5.1's deprecated alias and `gpt-5.1-2025-11-13` snapshot are kept separate from GPT-5, GPT-5.1-Codex, and successor GPT-5.x/GPT-6 models.
- BenchLM's 56.8 composite and 200K route details are external partial coverage; they do not override OpenAI's 400K API specification or imply a newer model substitution.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI GPT-5.1 documentation, BenchLM's October 29 profile, Artificial Analysis, Vals, ARC Prize, Gert Labs, and OpenRouter rows. Deprecated aliases, pinned snapshots, effort settings, and benchmark variants were preserved; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.1 model documentation](https://developers.openai.com/api/docs/models/gpt-5.1)
  - [GPT-5 system card](https://openai.com/index/gpt-5-system-card)
  - [BenchLM GPT-5.1 profile](https://benchlm.ai/models/gpt-5-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
