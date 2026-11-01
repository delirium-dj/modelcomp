# Qwen3.5 0.8B — findings by GPT-6 Luna

- Source: Qwen/Qwen3.5-0.8B (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B
- **Short description:** Alibaba/Qwen's dense 0.8B-parameter, small vision-language model for local, edge, and research use. It accepts text, images, and video and produces text. The exact 0.8B checkpoint is much smaller than other Qwen3.5 family members; their scores are not interchangeable.
- **Provider / access:** Official weights at Hugging Face `Qwen/Qwen3.5-0.8B` and ModelScope; self-host with current Transformers, vLLM, SGLang, or compatible runtimes. The official card documents local OpenAI-compatible Chat Completions serving and tool-call parsers. Artificial Analysis reports no publicly available API for this exact model. The local curated ID `opencode/qwen-3.5-0.8b` and a free hosted route were not confirmed in OpenCode's current public docs/catalog or OpenRouter's model search.
- **Release / knowledge:** Qwen's official model-family repository says Qwen3.5-0.8B became available March 2, 2026. The family’s first 397B release was February 16; that is not the 0.8B checkpoint's release date. No knowledge cutoff was disclosed.
- **IDs:** Official weights `Qwen/Qwen3.5-0.8B`; base checkpoint `Qwen/Qwen3.5-0.8B-Base` is a separate pre-trained variant. No verified hosted API ID for this exact checkpoint was found.
- **Context window:** 262,144 tokens natively, per the official model card and config. No official max-output limit was found. A long nominal window does not imply strong retrieval: the card reports AA-LCR **4.7** and LongBench v2 **26.1** in thinking mode, with no retrieval-window details.
- **Modalities:** Text, image, and video input; text output. No audio input or non-text output was verified. The official card documents image/video requests and uses a vision encoder.
- **Pricing (as of 2026-11-01):** The weights are downloadable under Apache-2.0 with no model-token fee; self-hosting hardware and operation are not free. No stable hosted price for the exact 0.8B checkpoint was verified. A free Qwen chat playground does not establish a free API route for this ID.
- **Architecture:** Dense causal language model with a vision encoder; 0.8B advertised language-model parameters, 24 layers, 1,024 hidden dimension, and a repeating 3:1 pattern of Gated DeltaNet linear-attention layers to full gated-attention layers. It is not an MoE checkpoint. Supports non-thinking (default) and thinking modes and multi-token-prediction training. Qwen warns that this small model is especially prone to thinking loops under recommended thinking-mode sampling settings, which can prevent generation from terminating.
- **License:** Apache-2.0; the official model card links the license bundled with the weights.

### Raw benchmarks found

The values below are from Qwen's official Qwen3.5-0.8B model card only. Thinking and non-thinking results are kept separate; no 2B, 4B, or other family-member scores are transferred. Most score columns are reported as percentages; benchmark-specific task definitions still apply.

Agent / tool use:

- BFCL-V4: **25.3**; TAU2-Bench: **11.6**. Both are shown under the model card's Thinking-mode General Agent section. The official serving recipes enable tool calls using the Qwen3 Coder parser; these results indicate limited performance on the reported agent tasks, not broad autonomous-agent competence.

Reasoning / knowledge and instruction following:

- MMLU-Pro: **29.7** non-thinking; **42.3** thinking. MMLU-Redux: **48.5** non-thinking; **59.5** thinking. C-Eval: **46.4** non-thinking; **50.5** thinking. SuperGPQA: **16.9** non-thinking; **21.3** thinking. GPQA: **11.9** thinking (no 0.8B non-thinking score shown).
- IFEval: **52.1** non-thinking; **44.0** thinking. IFBench: **21.0** thinking; MultiChallenge: **18.9** thinking. Scores are not uniformly better in thinking mode.
- Multilingual results include MMMLU **34.1** non-thinking / **44.3** thinking, MMLU-ProX **34.6** thinking, and WMT24++ **27.2** thinking (the model card says WMT24++ averages a rebalanced 55-language subset using XCOMET-XXL).

Multimodal:

- Vision: MMMU **49.0 / 47.4**, MMMU-Pro **31.2 / 31.4**, MathVista-mini **62.2 / 58.6**, RealWorldQA **63.4 / 61.6**, MMBench EN-DEV-v1.1 **69.9 / 68.0**, and HallusionBench **53.1 / 46.7** (Thinking / non-thinking).
- Video: VideoMME **63.8** with subtitles and **57.7** without subtitles; VideoMMMU **44.3**, MLVU **65.6**, MVBench **55.8**, and LVBench **45.1** (thinking-mode scores; non-thinking values are not shown).
- Vision results are mixed rather than frontier-level: for example, OCRBench is **74.5 / 79.1**, while SimpleVQA is **31.3 / 30.4** (Thinking / non-thinking).

Coding:

- No verified exact-checkpoint SWE-bench, LiveCodeBench, HumanEval, or code-repair score found in the official card. BFCL and general instruction scores are not substituted for coding benchmarks.
- ApX's result table lists MMLU-Pro **0.423** and GPQA **0.119**, matching the official thinking-mode scores. Its accompanying prose instead attributes MMLU-Pro **66.5%** and GPQA Diamond **51.6%** to the 0.8B model; those values match the official **Qwen3.5-2B** column and are excluded here as a sibling-model attribution error. ApX also displays Coding Index **0.01**, but Artificial Analysis currently reports no public API or Intelligence Index score for this checkpoint, so the index value is not treated as a verified coding result.

Long context:

- AA-LCR: **4.7**; LongBench v2: **26.1** (thinking mode; the official card does not state the evaluated context length for these rows). The advertised 262K limit should not be interpreted as reliable retrieval across 262K.

### Normalized scores (1–100)

- **Tool use: 40/100.** Qwen documents tool-call parser support, but its exact-model BFCL-V4 25.3 and TAU2-Bench 11.6 are low; no stronger exact-model agent result was verified. [Official model card](https://huggingface.co/Qwen/Qwen3.5-0.8B).
- **Reasoning: 45/100.** MMLU-Pro is 42.3 in thinking mode and 29.7 without thinking; GPQA is 11.9, with weaker scores on multi-step instruction benchmarks. This is evidence of useful small-model general knowledge, not strong frontier reasoning. [Official model card](https://huggingface.co/Qwen/Qwen3.5-0.8B).
- **Context window: 65/100.** The native 262K limit reaches the lower edge of the 200K–500K tier, but AA-LCR 4.7 and LongBench v2 26.1 substantially temper the nominal capacity. [Official config](https://huggingface.co/Qwen/Qwen3.5-0.8B/blob/main/config.json); [official model card](https://huggingface.co/Qwen/Qwen3.5-0.8B).
- **Multimodal: 75/100.** The model supports image and video input with text output, matching the lower end of the project's video-input tier; benchmark results show useful but clearly limited vision/video quality. [Official model card](https://huggingface.co/Qwen/Qwen3.5-0.8B); [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-0-8b).
- **Coding: 35/100.** No exact-model coding benchmark was found, and the 0.8B size plus the weak agent scores suggest only lightweight code assistance. The unsupported ApX Coding Index entry is not used. [Official model card](https://huggingface.co/Qwen/Qwen3.5-0.8B); [ApX benchmark page](https://apxml.com/models/qwen35-08b).
- **Cost efficiency: 100/100.** Apache-2.0 weights can be self-hosted without a per-token license fee. This does not make hardware or operation free; a free hosted API for this exact checkpoint was not verified. [Official model card and license](https://huggingface.co/Qwen/Qwen3.5-0.8B).
- **Overall Score: 52/100.** Half-up mean of the five quality dimensions: (40 + 45 + 65 + 75 + 35) / 5 = 52.0. Cost is excluded. An unusually compact local multimodal checkpoint for constrained deployment, but its low agent/reasoning scores, weak long-context retrieval, and thinking-loop risk call for tight output limits and task-specific validation.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches, followed by direct review of Qwen's official Hugging Face model card/config and official Qwen model-family release log; cross-checks with Artificial Analysis, ApX, LLM Stats, and the vLLM recipe. All reported benchmark values refer to the 0.8B checkpoint; thinking and non-thinking modes are distinguished. The ApX sibling-column prose and its unsupported Coding Index are explicitly excluded. No scores from Qwen3.5-2B or larger models were transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official Qwen3.5-0.8B model card and benchmarks](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - [Official model config](https://huggingface.co/Qwen/Qwen3.5-0.8B/blob/main/config.json)
  - [Official Qwen family release log](https://github.com/QwenLM/Qwen3.8#news)
  - [Artificial Analysis model page](https://artificialanalysis.ai/models/qwen3-5-0-8b)
  - [ApX specifications and benchmark table](https://apxml.com/models/qwen35-08b)
  - [LLM Stats model listing](https://llm-stats.com/models/qwen3.5-0.8b)
  - [vLLM serving recipe](https://recipes.vllm.ai/Qwen/Qwen3.5-0.8B)
  - [OpenCode Console catalog and pricing](https://opencode.ai/docs/zen)

---
