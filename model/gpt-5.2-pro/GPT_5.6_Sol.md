# GPT-5.2 Pro — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-5.2 Pro
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's proprietary, deliberative GPT-5.2 variant for difficult professional, scientific, and abstract-reasoning work where quality matters more than latency or cost. It is a distinct high-compute model, not a pricing alias for GPT-5.2 Thinking.
- **Provider / access:** OpenAI Responses API as `gpt-5.2-pro`; OpenRouter also exposes `openai/gpt-5.2-pro` through a Chat Completions-compatible gateway. OpenAI does not support this model through its native Chat Completions endpoint.
- **Release / knowledge:** Released 2025-12-11; August 31, 2025 knowledge cutoff; default snapshot `gpt-5.2-pro-2025-12-11`.
- **IDs:** OpenAI `gpt-5.2-pro` and pinned `gpt-5.2-pro-2025-12-11`; OpenRouter `openai/gpt-5.2-pro`. No OpenCode Zen Free ID found.
- **Context window:** 400,000 input-context tokens and 128,000 maximum output tokens, confirmed by OpenAI and OpenRouter.
- **Modalities:** Text and image input; text output; mandatory reasoning with medium, high, and xhigh effort; function calling, file search, web search, MCP, image-generation tool use, streaming, and structured response formats. OpenRouter additionally labels file input, which may be provider-side document conversion rather than a native modality.
- **Pricing (as of 2026-10-23):** $21 input / $168 output per 1M tokens through OpenAI, with no cached-input rate listed. OpenRouter reports the same token rates and $0.01 per web-search call.
- **Architecture:** Proprietary; parameters and training architecture are undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.9%** (OpenAI exact-model result, maximum reasoning effort).
- GDPval: **74.1% wins or ties**, **60.0% clear wins**, and **67.6% wins with ties disallowed** (OpenAI exact-model results).
- Investment-banking spreadsheet tasks: **71.7%** (OpenAI internal evaluation).
- Terminal-Bench / Tau2-Bench / GDPval-AA: no verified public exact-model score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond, no tools: **93.2%** (OpenAI).
- Humanity's Last Exam: **36.6%** without tools and **50.0%** with search and Python (OpenAI).
- HMMT February 2025: **100.0%**; AIME 2025: **100.0%** (OpenAI, no tools).
- ARC-AGI-1 Verified: **90.5%**; ARC-AGI-2 Verified: **54.2%** at high reasoning effort (OpenAI).
- Artificial Analysis Intelligence Index / BenchLM overall: no independent exact-model score. BenchLM tracks the identity but reports **0 of 705 benchmarks covered** and leaves it unranked.
- Omniscience Accuracy / Hallucination Rate: no verified exact-model public score found.

Coding:

- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode: no verified public score found for GPT-5.2 Pro. OpenAI publishes GPT-5.2 Thinking results for these evaluations, but those are not transferred to this variant.
- OpenAI says early testing showed stronger complex programming performance, but provides no exact-model coding percentage; this remains qualitative evidence only.

Long context:

- Native context: **400,000 tokens**, with up to **128,000 output tokens** (OpenAI and OpenRouter).
- OpenAI MRCRv2 and GraphWalks scores in the launch report are explicitly for GPT-5.2 Thinking, not Pro; no exact-model retrieval percentage was found.

### Cross-source comparison

- The official [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.2-pro) establishes the exact ID, snapshot, context/output limits, knowledge cutoff, modalities, tool support, Responses-only access, reasoning-effort levels, and $21/$168 pricing.
- OpenAI's [GPT-5.2 launch report](https://openai.com/index/introducing-gpt-5-2/) supplies exact Pro results for GDPval, BrowseComp, GPQA, HLE, HMMT, AIME, and ARC-AGI. It also clearly separates Pro rows from the more extensive GPT-5.2 Thinking benchmark set.
- [OpenRouter](https://openrouter.ai/openai/gpt-5.2-pro) corroborates the 400K/128K limits, token pricing, image/file-to-text gateway support, structured outputs, tools, and reasoning controls. Its Chat Completions compatibility differs from OpenAI's native Responses-only endpoint and is therefore reported as gateway behavior.
- [BenchLM](https://benchlm.ai/models/gpt-5-2-pro) corroborates the proprietary reasoning-model identity and 400K window but currently has no benchmark records or computed score for it.
- Exact-name searches for Artificial Analysis, Vals, SWE-bench, Terminal-Bench, HLE, and independent model leaderboards found no independently reproduced exact-model benchmark suite. Scores therefore lean on vendor measurements and are capped where exact Pro evidence is absent; GPT-5.2 Thinking results are not used as substitutes.

### Normalized scores (1–100)

- **Tool use: 91/100.** BrowseComp 77.9% and strong GDPval results demonstrate high-quality tool-assisted professional work, while broad first-party tool support is explicit; absent independent Terminal-Bench, Tau, or GDPval-AA results prevent a higher score.
- **Reasoning: 97/100.** GPQA 93.2%, tool-assisted HLE 50.0%, ARC-AGI-1 90.5%, and ARC-AGI-2 54.2% exceed multiple frontier references; reliance on vendor-only measurements caps the score below the maximum.
- **Context window: 82/100.** The verified 400K window sits at the upper end of the methodology's 200K–500K tier, with a generous 128K output limit; no exact-Pro long-context retrieval result supports a bonus.
- **Multimodal: 70/100.** Native text and image input with text output reaches the top of the image-only band; there is no native audio/video input or non-text output.
- **Coding: 82/100.** OpenAI describes strong complex-programming performance and the model has robust reasoning and tool support, but no exact-Pro SWE-bench, Terminal-Bench, LiveCodeBench, or SciCode result was published, materially capping this dimension.
- **Cost efficiency: 10/100.** $21/$168 per 1M tokens is far beyond the rubric's $10/$50 low-efficiency reference and has no listed cache discount; use is justified only when the quality premium outweighs latency and cost.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions; best for exceptionally difficult reasoning and professional-agent tasks, not routine coding or price-sensitive workloads.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-23
- Method: independent public internet research with more than three exact-name searches; official exact-model measurements were cross-checked against OpenRouter and BenchLM, and GPT-5.2 Thinking scores were excluded wherever OpenAI did not publish a Pro result. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
