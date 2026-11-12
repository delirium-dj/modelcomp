# GLM-5.3-FlashX-Legal — findings by MiniMax M3.1 Flash

- Source: Z.ai / Zhipu AI (`glm-5.3-flashx-legal`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (vendor alias "GLM-Legal"; catalogued in this repository as "Glm 5.3 Flashx Legal")
- **Short description:** The legal-domain variant of GLM-5.3-FlashX, Z.ai's fast serving tier of the native-multimodal GLM-5.3-Flash family. It adds legal-domain mid-training and reinforcement-learning post-training across tens of thousands of task environments modelled on real legal workflows, and targets document understanding, legal reasoning and multi-step execution — legal research, contract review, cross-document consistency checks and drafting or revising legal documents. It keeps the base model's 1M-token context, mandatory thinking mode, function calling, structured output and streaming, and is designed to run inside agent setups wired to legal data and document-editing MCP services. It is a domain variant of `glm-5.3-flashx`, not a separate base model.
- **Provider / access:** Z.ai API — model code `glm-5.3-flashx-legal`, Chat Completions with `thinking` blocks (the Anthropic-compatible surface is also documented), base URL `https://api.z.ai/api/paas/v4`; OpenRouter `z-ai/glm-5.3-flashx-legal` (canonical slug `z-ai/glm-5.3-flashx-legal-20261102`), a single provider (Z.ai); Z.AI's **GLM Coding Plan** covers GLM-5.3-Flash but not the FlashX tier, so the Legal SKU is paid-only; the **AutoClaw Legal Assistant** workspace (https://autoclaw.z.ai/) ships the model with Word/WPS plugins; legal MCP service catalogue at https://docs.z.ai/guides/legal-mcp. OpenCode Zen does not list this model — its GLM entries stop at `glm-5.3-flash`, `glm-5.3`, `glm-5.2`, `glm-5.1` and `glm-5`.
- **Release / knowledge:** date conflict — OpenRouter's canonical slug and the provider record date it **2026-11-02**, while LLM Stats and LLMBoard record **2026-10-12** for the same model; the Z.AI developer documentation places the Legal variant in the GLM-5.3-Flash/FlashX documentation line. Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx-legal` (Z.ai API model code), `z-ai/glm-5.3-flashx-legal` (OpenRouter), `z-ai/glm-5.3-flashx-legal-20261102` (OpenRouter canonical slug).
- **Context window:** **1,048,576 tokens** (1M), with up to **131,072 output tokens** — identical to the base FlashX model. Recommended sampling for the Legal route: `temperature` 1, `top_p` 0.95, `reasoning_effort` max, `thinking.clear_thinking` false, `stream` plus `tool_stream` enabled.
- **Modalities:** **video, image, text and file in; text out** — it inherits the native-multimodal input surface of GLM-5.3-Flash. Thinking is **mandatory and cannot be disabled** (`thinking.type` only supports `enabled`). Function calling, structured output (JSON schema), streaming, context caching and the built-in web-search tool are supported; the legal workflow depends on external MCP services for statutes, case data, company records and Word/WPS document editing.
- **Pricing (as of 2026-11-12):** **$0.37 in / $1.25 out per 1M tokens**, cached input **$0.075** — the same rate Z.ai posts for GLM-5.3-FlashX, and the lowest price among the three tracked providers (Z.ai, OpenRouter, NanoGPT and the Vercel AI Gateway all list the same rate). No free tier. Because thinking is always on, every request also pays for the reasoning tokens.
- **Architecture:** proprietary, closed weights. The base GLM-5.3-Flash is a hybrid sparse-and-linear attention MoE with **320B total parameters and 18B active**, cutting attention computation **3.01×** and KV cache **4.44×** versus GLM-5.3; GLM-5.3-FlashX is the same weights served at up to **200 tokens/s**. The Legal SKU adds legal-domain mid-training plus RL post-training on top of that base.

### Raw benchmarks found

> Only one hard, model-specific benchmark exists for this SKU (Harvey LAB, a legal-agent benchmark); the rest are third-party composite suites. That sparsity is the main cap on the scores below.

Agent / tool use:

- Harvey LAB (legal agent benchmark, all-criteria pass rate): **19.2%** (vendor, Z.AI developer documentation) — reported as an improvement of **12.5 percentage points** over the base model and state-of-the-art among open-source models in that evaluation. Independently confirmed as **19.20%, rank 01 of 16 participants, 100th percentile** (LLMBoard, evaluated 2026-11-11, evidence grade C)
- Terminal-Bench 2.1 / 4.0, Tau3-Banking, GDPval-AA, OSWorld, AutomationBench: **no verified public score found** for this SKU
- Tool calling, `tool_choice`, structured output, streaming and an MCP tool layer are all documented and supported, and Z.AI's own legal-MCP catalogue positions the model as the reasoning/planning layer in front of external legal-data and document-editing tools

Reasoning / knowledge:

- Complex multi-step reasoning: **96.0%** (Benchable third-party evaluation, 75th percentile among its catalogue)
- Mathematics: **94.0%** (Benchable third-party evaluation)
- Instruction following: **76.0%** (Benchable third-party evaluation, 72nd percentile — Benchable calls this the model's notable weakness)
- GPQA Diamond, HLE, CritPt, AA-LCR / MRCR, Artificial Analysis Intelligence Index: **no verified public score found** for this SKU (Artificial Analysis has no model page for it)

Coding:

- Coding accuracy: **95.0%** (Benchable third-party evaluation, 85th percentile among its catalogue)
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, DeepSWE, Terminal-Bench: **no verified public score found** for this SKU
- LLM Market Cap coding composite: **70/100, rank #121 of 443** tracked coding models (secondary composite, not a benchmark score)
- Reliability across Benchable's evaluated benchmarks: **100% success rate, zero technical failures**

Long context:

- 1,048,576-token window, inherited from GLM-5.3-FlashX; the hybrid attention stack is what makes a 1M window affordable at 18B active parameters
- No MRCR, RULER or AA-LCR retrieval measurement is published for the Legal SKU

Multimodal:

- Input video, image, text and file; output text. No MMMU-Pro, Video-MME or audio-benchmark figure is published for this SKU.
- Throughput and latency on OpenRouter (Z.ai): **89 tok/s** output, **1.68 s** P50 latency, 100% uptime over three days, 99.48% availability over the last three days

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 58/100.** The one model-specific agentic result is **Harvey LAB 19.2%** — a legal-agent benchmark that requires multi-step planning, tool calls and document handling, where this model is ranked first of sixteen participants and +12.5 points over its own base model. That is a real agentic-tool-use result inside a narrow domain, and the documented MCP/function-calling/structured-output stack is production-grade. It is capped at 58 because the absolute pass rate is under one in five, because **no general agentic-tool benchmark is published for this SKU** (no Terminal-Bench, no Tau3, no GDPval, no AutomationBench, and no Artificial Analysis record at all), and because the rubric's missing-Claw-Eval rule applies with the penalty falling on a model whose only agentic evidence is domain-specific.
- **Reasoning: 66/100.** The third-party Benchable suite reports **96.0%** on complex multi-step reasoning (75th percentile) and **94.0%** on mathematics for this exact SKU, and the Harvey LAB pass rate is itself a multi-step legal-reasoning task. Capped at 66 because the rubric's frontier anchors — GPQA Diamond at 90%+, HLE at 40%+, MRCR/LCR at 95%+ and an Intelligence Index at 60+ — are **all unmeasured for this model**, because Benchable's composites are a third-party synthetic suite rather than the standard leaderboards, and because **instruction following is only 76.0%** (72nd percentile), which is the drag on a legal-document workload where clause-level fidelity matters.
- **Context window: 95/100.** The window is **1,048,576 tokens** with 131,072 maximum output, inherited unchanged from GLM-5.3-FlashX — the rubric's top tier (1M or more = 95–100). It is not scored 100 because the rubric reserves 100 for a measured retrieval rate of 98% or better at 512K and beyond, and **no MRCR, RULER or AA-LCR retrieval result is published for this SKU**.
- **Multimodal: 80/100.** Text, image, video **and file** input with text output — the rubric's "+video/PDF in = 75–90" band, at the upper end because file/PDF ingestion is explicitly part of the legal workflow (contracts, registration records, litigation materials, Word working papers). Held to 80 because no MMMU-Pro, Video-MME or document-understanding score is published for this SKU, and because output remains text-only.
- **Coding: 70/100.** Benchable's third-party suite scores **95.0%** coding accuracy at the **85th percentile** of its catalogue, the underlying weights are the coding-oriented GLM-5.3-FlashX tier served at up to 200 tok/s, and the model runs 89 tok/s with a 100% technical-success rate in Benchable's runs. Capped at 70 because **no standard coding benchmark is published for this SKU** — no SWE-bench Verified, no SWE-bench Pro, no LiveCodeBench, no SciCode, no DeepSWE and no Terminal-Bench — so the score rests on one third-party composite plus the base model's coding positioning, and because the 76.0% instruction-following figure is a drag on agentic code generation.
- **Cost efficiency: 94/100.** The evaluated route is billed at **$0.37 in / $1.25 out per 1M** with cached input at $0.075 — cheaper than the rubric's ~$0.60/$2.20 ≈ 92 anchor and far below the ~$1.25/$4.25 ≈ 88 band, which prices out in the mid-90s. It is held at 94 because **thinking cannot be disabled**, so every request bills reasoning tokens on top of the headline rate, and because the measured serving profile (89 tok/s, 1.68 s P50 latency) is below the 200 tok/s the base FlashX tier advertises.
- **Overall Score: 73.8/100.** (58 + 66 + 95 + 80 + 70) / 5 = 73.8 — best-fit: a cheap, fast, 1M-context multimodal legal-workstation model that is genuinely good inside its domain (first of sixteen on the Harvey LAB legal-agent benchmark, +12.5 points over its own base) and weak as a general-purpose model, because nothing standard has been published for it; use it for document review, contract analysis and legal drafting wired to legal MCP services, and not as a general chat or coding replacement.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date: 2026-11-02 (OpenRouter canonical slug and provider record) versus 2026-10-12 (LLM Stats and LLMBoard).** Both are listed; the newer canonical slug date is taken as the release date and the month-earlier date is recorded as an unresolved metadata conflict.
2. **Harvey LAB 19.2% — vendor-reported versus independently tracked.** Z.AI publishes the figure in its developer documentation; LLMBoard tracks the same benchmark at 19.20% and adds a rank (first of sixteen participants) and an evidence grade (C). The two agree exactly, so the number is used with the low evidence grade noted rather than discounted.
3. **Benchable's composite accuracies (95.0% coding, 96.0% multi-step reasoning, 94.0% mathematics) versus LLM Market Cap's 70/100 coding composite.** These are two different composites from two different catalogues, not two measurements of the same benchmark; they are reported side by side and neither is treated as a leaderboard score.
4. **Served throughput 89 tok/s (OpenRouter, Z.ai) versus "up to 200 tokens/s" (vendor, for the base FlashX tier).** The 200 tok/s figure belongs to GLM-5.3-FlashX without the Legal suffix; the measured 89 tok/s is used for the cost and performance caveats.
5. **No Artificial Analysis record.** Unlike most entries in this dataset, this model has no AA model page, no Intelligence Index, no terminal-bench and no price-per-task record — so every dimension is scored from one vendor benchmark plus third-party composites, and the report says so rather than filling the gap with the base model's numbers.

### Notes on identity

- `glm-5.3-flashx-legal` is a **domain variant** of `glm-5.3-flashx`, which is itself the fast serving tier of `glm-5.3-flash`. Same architecture, same 320B/18B MoE, same 1M context; different mid- and post-training, and a different price tier.
- It is not a tier or a subscription plan — the weights differ from the base model because of legal-domain mid-training and RL post-training — and it is not a legal-only deployment mode.
- Legal workflows depend on external MCP services for statutes, case data, company records and document editing; the model supplies document understanding, legal reasoning and task planning, not the legal data itself.
- There is no free route and no OpenCode Zen route for this model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — the official Z.AI developer documentation for GLM-5.3-Flash/FlashX (architecture, API parameters, thinking-mode rules, MCP catalogue and the Harvey LAB legal-benchmark result), the OpenRouter model page for `z-ai/glm-5.3-flashx-legal` (price, context, throughput, latency, availability), LLMBoard's legal-agent leaderboard record, Benchable's third-party evaluation profile, LLM Stats and LLM Market Cap model records, and the OpenCode Zen catalogue for route availability. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5.3-Flash/FlashX — Overview (Z.AI Developer Documentation, including the GLM-5.3-FlashX-Legal section and the Harvey LAB result)](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Z.ai: GLM 5.3 FlashX Legal — API Pricing & Providers (OpenRouter)](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [GLM 5.3 FlashX Legal — Benchmarks, Pricing and Specs (LLMBoard, incl. the Legal Agent Benchmark record)](https://www.llmboard.ai/models/glm-5-3-flashx-legal)
  - [Z.ai: GLM 5.3 FlashX Legal — AI Model Details & Benchmarks (Benchable)](https://benchable.ai/models/z-ai/glm-5.3-flashx-legal-20261102)
  - [GLM-5.3-FlashX-Legal — Benchmarks, Pricing & Context Window (LLM Stats)](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [Zhipu AI GLM 5.3 FlashX Legal — Pricing & Benchmarks (LLM Market Cap)](https://lmmarketcap.com/model/z-ai-glm-5-3-flashx-legal)
  - [Legal MCP service catalogue (Z.AI Developer Documentation)](https://docs.z.ai/guides/legal-mcp)
  - [OpenCode Zen — model list and per-1M pricing](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GLM_5.3_FlashX_Legal.md`, using the same headings.
