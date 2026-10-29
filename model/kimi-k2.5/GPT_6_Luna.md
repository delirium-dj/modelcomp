# Kimi K2.5 — findings by GPT-6 Luna

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight, native multimodal agentic model, built for reasoning, coding with visual input, and multi-step tool use. Its Agent Swarm mode can orchestrate up to 100 subagents and 1,500 tool calls; those limits and the reported speedup are vendor claims, not an independent benchmark.
- **Provider / access:** Moonshot AI. The official API historically exposed the model as `kimi-k2.5` through OpenAI- and Anthropic-compatible interfaces. Moonshot's current model list says this API model was discontinued on **August 31, 2026** and is no longer supported. The weights remain available on Hugging Face and GitHub under a Modified MIT license.
- **Release / knowledge:** Introduced in **January 2026**; the official GitHub model card has a dated 2026-01-29 changelog entry. No training-data cutoff verified.
- **IDs:** API model ID `kimi-k2.5`; weights repository `moonshotai/Kimi-K2.5`.
- **Context window:** **256K tokens** (262,144); official API docs group K2-series models at 262,144. The model card reports tests at 256K. A maximum output-token limit was not verified in the reviewed primary documentation.
- **Modalities:** Text, image, and video input; text output. The official API model card includes image and video request examples. No audio input or non-text output verified. It supports thinking/instant modes and tool calling.
- **Pricing (as of 2026-10-29):** No exact historical first-party API rate could be verified. The current official model list marks `kimi-k2.5` discontinued, and the current pricing documentation no longer provides its row-level historical rates. Third-party price listings are not treated as official evidence.
- **Architecture:** Open-weight Mixture-of-Experts; **1T total / 32B activated parameters**, 61 layers, 384 experts with 8 selected per token, MLA attention, and a 400M-parameter MoonViT vision encoder. Continually pretrained from Kimi K2 Base on approximately 15T mixed visual/text tokens. License: Modified MIT.

### Raw benchmarks found

Three independent searches were followed by checks of Moonshot's [official Kimi K2.5 technical blog](https://www.kimi.com/blog/kimi-k2-5.html), the exact [official model card and full benchmark table](https://huggingface.co/moonshotai/Kimi-K2.5), and the [official API model list](https://platform.kimi.ai/docs/models.md), [pricing documentation](https://platform.kimi.ai/docs/pricing/chat.md), and [model-parameter documentation](https://platform.kimi.ai/docs/api/models-overview.md). The figures below are vendor-reported; they are not independent head-to-head evaluations. Unless noted, the model-card results use thinking mode, temperature 1.0, top-p 0.95, and a 256K context.

Agent / tool use:

- BrowseComp: **60.6%** baseline, **74.9%** with context management, and **78.4%** in Agent Swarm mode. These are distinct setups, not interchangeable scores. WideSearch item-F1: **72.7%** baseline / **79.0%** in Agent Swarm mode; DeepSearchQA: **77.1%**; Seal-0: **57.4%**.
- HLE Full with tools: **50.2%** (also reported below under reasoning). The model was provided search, code-interpreter, and web-browsing tools for tool-augmented and agentic-search tests.
- Terminal-Bench **2.0: 50.8%**, using Terminus-2 in **non-thinking** mode. This is not Terminal-Bench 2.1. No exact-model Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval result verified.
- Moonshot says Agent Swarm supports up to 100 subagents / 1,500 coordinated tool calls and reports up to 4.5× lower wall-clock time in its wide-search tests. Treat this as vendor-reported system behavior, not a general single-model speed benchmark.

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (avg@8); HLE Full: **30.1% without tools / 50.2% with tools**. HLE Full mixes text and image questions; Moonshot separately gives text-only **31.5% / 51.8%** and image-only **21.3% / 39.8%** without / with tools.
- AIME 2025: **96.1%** (avg@32); HMMT 2025 February: **95.4%** (avg@32); IMO-AnswerBench: **81.8%**.
- HLE was evaluated with a maximum completion budget of 96K tokens. HLE-with-tools uses context management that retains only the latest round of tool messages after a threshold; the tool-assisted number should not be read as a no-tools score.

Coding:

- SWE-bench Verified: **76.8%**; SWE-bench Pro: **50.7%**; SWE-bench Multilingual: **73.0%**. Moonshot used an internally developed minimal-tool evaluation framework; the highest scores were in non-thinking mode. Coding scores average five runs.
- Terminal-Bench 2.0: **50.8%** with Terminus-2, non-thinking; LiveCodeBench v6: **85.0%**; SciCode: **48.7%**; PaperBench: **63.5%**.
- The custom SWE evaluation and TB 2.0 harness/version limit direct comparison to results under other setups. No exact-model DeepSWE, SWE-Atlas, or Terminal-Bench 2.1 score verified.

Multimodal / vision and video:

- Image: MMMU-Pro **78.5%**; CharXiv (RQ) **77.5%**; MathVista (mini) **90.1%**; OmniDocBench 1.5 **88.8%**.
- Video: VideoMMMU **86.6%**; LongVideoBench **79.8%**; LVBench **75.9%**.
- Vision results use max 64K tokens and average three runs; video-capable model input is documented in the official API card. No audio benchmark or audio modality verified.

Long context:

- AA-LCR: **70.0%** (avg@3); LongBench v2: **61.0%**, with inputs standardized to approximately 128K tokens. These do not establish 512K+ retrieval performance; the model's stated context is 256K.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp (60.6% baseline / 78.4% swarm), DeepSearchQA (77.1%), and other agentic-search results are strong; TB 2.0 is 50.8% in a non-thinking Terminus-2 setup, and no rubric-aligned TB 2.1, Tau3, or GDPval-AA result was verified.
- **Reasoning: 89/100.** HLE Full reaches 50.2% with tools and GPQA Diamond is 87.6%, with high AIME/HMMT results; the HLE no-tool result is 30.1%, and GPQA remains below the rubric's 90% frontier reference.
- **Context window: 72/100.** The documented 256K falls in the 200K–500K tier (200K maps to 70); available long-context results include an approximately 128K LongBench v2 run, not 512K+ retrieval evidence.
- **Multimodal: 85/100.** Verified image and video input plus image/video benchmark results place it in the video-input band; no audio input or non-text output is documented.
- **Coding: 87/100.** SWE-bench Verified is 76.8% and LiveCodeBench v6 is 85.0%, while SciCode is 48.7%; the internal SWE framework and TB 2.0 version/harness are caveats, and no exact-model DeepSWE or TB 2.1 score was found.
- **Cost efficiency: 15/100.** Evidence-absence placeholder only: an exact first-party historical API price could not be verified after the model was discontinued, so this is **not** a claim that its actual price or value was poor. No third-party rate was substituted.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions (84, 89, 72, 85, 87 = 83.4), excluding cost; a strong multimodal coding/agent model, with the 256K context and non-comparable benchmark setups limiting its score.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public searches followed by the exact Moonshot model card, technical blog, and current API model/pricing documentation. Scores are normalized 1–100 interpretations, not official vendor scores; benchmark mode, harness, sample counts, pricing uncertainty, and modality boundaries are retained.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
