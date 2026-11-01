# Qwen3.5-9B — findings by GPT 6 Sol

- Source: Alibaba Qwen (`Qwen/Qwen3.5-9B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B.
- **Short description:** A dense, 9B-class open-weight vision-language model with optional thinking, aimed at inexpensive local reasoning, image/video understanding and function calls. This is the 9B post-trained checkpoint, **not** the 4B or MoE 35B-A3B member ([Qwen card](https://huggingface.co/Qwen/Qwen3.5-9B)).
- **Provider / access:** Apache-2.0 weights `Qwen/Qwen3.5-9B` for Transformers, vLLM and SGLang; hosted OpenRouter Chat Completions `qwen/qwen3.5-9b` at `https://openrouter.ai/api/v1/chat/completions` and independently priced DeepInfra route ([Qwen card](https://huggingface.co/Qwen/Qwen3.5-9B), [OpenRouter](https://openrouter.ai/qwen/qwen3.5-9b), [DeepInfra](https://deepinfra.com/Qwen/Qwen3.5-9B)). `enable_thinking` changes decoding, not the model identity.
- **Release / knowledge:** March 2026; [OpenRouter dates its route March 10](https://openrouter.ai/qwen/qwen3.5-9b), whereas [Artificial Analysis records March 2](https://artificialanalysis.ai/models/qwen3-5-9b) for its model release. No confirmed exact training knowledge cutoff on the card.
- **IDs:** `Qwen/Qwen3.5-9B` weights; `qwen/qwen3.5-9b` OpenRouter; base `Qwen/Qwen3.5-9B-Base` is a different **training stage**, not the post-trained model benchmarked here.
- **Context window:** **262,144 native tokens**; scaling via YaRN can extend toward 1,010,000 with configuration and memory cost, **not** a guaranteed native 1M window. The OpenRouter catalog reports 262,144 total context and a provider-specific max completion (verify on request) ([Qwen model card](https://huggingface.co/Qwen/Qwen3.5-9B), [catalog](https://openrouter.ai/api/v1/models)).
- **Modalities:** Text, image and video in; text out, with hybrid vision encoder and tool-calling support. No native audio input/output ([Qwen](https://huggingface.co/Qwen/Qwen3.5-9B), [OpenRouter](https://openrouter.ai/qwen/qwen3.5-9b)).
- **Pricing (as of 2026-11-01):** OpenRouter [live API catalog](https://openrouter.ai/api/v1/models) reports **$0.17 input/$0.25 output per million** for the aggregate `qwen/qwen3.5-9b` route; its public page also shows **cheaper individual providers** at $0.08/$0.13, so provider-pinned vs default routing must not be conflated. [DeepInfra](https://deepinfra.com/Qwen/Qwen3.5-9B) advertises $0.10/$0.15 standard and distinct flex/priority tiers. Local weights have no per-token API charge; hardware and power are separate.
- **Architecture:** Dense ~9B (HF files imply ~9.65B), 32-layer 3:1 Gated DeltaNet/full-attention decoder plus vision encoder; **not** a sparse MoE simply because the broader Qwen3.5 family also contains MoE members ([official architecture](https://huggingface.co/Qwen/Qwen3.5-9B)).

### Raw benchmarks found

- **Agent/tool use:** Qwen's [BFCL-V4 **66.1%**, τ²-Bench **79.1%** (airline fixes noted), DeepPlanning **18.0%**](https://huggingface.co/Qwen/Qwen3.5-9B). Independently [Artificial Analysis τ² Telecom **86.8%** in reasoning mode versus **85.1%** in non-reasoning, Terminal-Bench 2.1 **29.2% vs 21.3%**, hard variant **24.2% vs 18.2%**](https://openrouter.ai/qwen/qwen3.5-9b); τ² Telecom is **not** the same aggregate as the vendor τ² result. [Kamiwaza KAMI **88.1%**](https://docs.kamiwaza.ai/research/blogs/qwen35-9b-small-model-big-leagues) is a separate 19-template self-hosted enterprise suite, not a universal success percentage.
- **Reasoning:** Vendor [GPQA Diamond **81.7%**, MMLU-Pro **82.5%**, HMMT Feb 2025 **83.2%**](https://huggingface.co/Qwen/Qwen3.5-9B). Independently [Artificial Analysis GPQA **80.6% reasoning / 78.6% non-reasoning**, HLE **14.9% / 9.4%**](https://openrouter.ai/qwen/qwen3.5-9b), and [Epoch AI GPQA **79.0%**](https://verticaltabs.com/qwen/qwen3.5-9b/benchmarks). The three GPQA figures use differing settings but support the same broad performance range.
- **Coding:** Vendor [LiveCodeBench v6 **65.6%**, OJBench **29.2%**](https://huggingface.co/Qwen/Qwen3.5-9B); independent [AA Coding Index **28.7** (reasoning, an index not pass@1), SciCode **29.5%**, Terminal-Bench hard **24.2%**](https://openrouter.ai/qwen/qwen3.5-9b). No independently verified exact-checkpoint SWE-bench Verified pass rate found; do not treat code-contest pass rate as an agentic repository-repair rate.
- **Context:** Vendor [AA-LCR **63.0%**, LongBench v2 **55.2%**](https://huggingface.co/Qwen/Qwen3.5-9B); AA's independent [LCR **70.0% with thinking / 46.0% without**](https://openrouter.ai/qwen/qwen3.5-9b). These scores depend on mode and evaluation version, and do not validate the extrapolated 1M YaRN setting.
- **Vision/video:** Qwen card reports [MMMU-Pro **70.1%**, Video-MME with subtitles **84.5%**, OSWorld-Verified **41.8%**](https://huggingface.co/Qwen/Qwen3.5-9B) for the 9B column. Independently [AA MMMU-Pro **69.3%**](https://www.ai-atlas.co/models/qwen3.5-9b), close to the vendor vision result; native video output was not tested or offered.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong constrained τ² tasks, modest terminal-agent scores and low DeepPlanning result.
- **Reasoning: 75/100.** Independent GPQA around 79–81, but HLE 14.9 on harder tasks.
- **Context window: 74/100.** Native 262K plus promising mode-sensitive retrieval, with no verified extrapolated 1M fidelity.
- **Multimodal: 76/100.** Images/video and MMMU-Pro ~69–70; no native audio or image generation.
- **Coding: 64/100.** Vendor 65.6 LCB v6 but independently modest hard terminal and coding index.
- **Cost efficiency: 94/100.** Cheap hosted text routes and a dense Apache-2.0 local checkpoint, with vision hosting and long-context memory costs.
- **Overall Score: 71/100.** Half-up mean (68 + 75 + 74 + 76 + 64) / 5 = 71.4; unusually capable small multimodal model, not yet a proven repository-repair agent.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh exact-model, independent-evaluation and provider-price searches; 9B column, thinking mode and provider route checked separately. Scores are normalized judgments.
- Reference URLs:
  - [Qwen3.5-9B exact post-trained checkpoint card and benchmarks](https://huggingface.co/Qwen/Qwen3.5-9B)
  - [OpenRouter exact hosted route, AA-source benchmark settings and provider prices](https://openrouter.ai/qwen/qwen3.5-9b)
  - [OpenRouter live route catalog](https://openrouter.ai/api/v1/models)
  - [Artificial Analysis reasoning model profile](https://artificialanalysis.ai/models/qwen3-5-9b)
  - [Kamiwaza independent enterprise agent evaluation](https://docs.kamiwaza.ai/research/blogs/qwen35-9b-small-model-big-leagues)
  - [DeepInfra first-party hosting tariff](https://deepinfra.com/Qwen/Qwen3.5-9B)
- Future sources: add a new file next to this one using the same headings.
