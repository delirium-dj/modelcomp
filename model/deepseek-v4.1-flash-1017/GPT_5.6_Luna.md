# DeepSeek V4.1 Flash 1017 — findings by GPT 5.6 Luna

- Source: DeepSeek / `DeepSeek-V4.1-Flash-1017`
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** The 2026-10-17 snapshot of DeepSeek V4.1 Flash, optimized for fast, low-cost reasoning, coding, multimodal understanding, terminal/computer-use agents, and long-horizon tasks. The `1017` suffix identifies a dated snapshot, not a separate vendor family.
- **Provider / access:** DeepSeek API model name `deepseek-flash`; DeepSeek says the 1017 snapshot is served under that compatible API name. It is also available through OpenRouter and many gateway providers; the weights are on Hugging Face. DeepSeek's native API uses its documented chat endpoint, while local serving exposes OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-10-17 snapshot; Models.dev reports a 2025-05 knowledge date. DeepSeek's official announcement for the V4.1 Flash family was 2026-09-10.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017` for the snapshot; official API route `deepseek-flash`.
- **Context window:** 1M tokens, with the official model card recommending `max_tokens` of at least 256K; Models.dev lists a 384K output limit. Exact hosted output limits vary by provider.
- **Modalities:** Text and image input, text output, native visual understanding, reasoning/thinking mode, tool calls, and structured output on most gateways. No audio or video input/output was verified for this snapshot.
- **Pricing (as of 2026-10-23):** DeepSeek's official announcement uses peak/off-peak pricing and an image-rendered table; Models.dev lists common hosted pricing around $0.30 input / $1.20 output per 1M tokens, while OpenRouter lists $0.019 / $0.60 for its route. Prices are provider and time-window dependent; open weights are MIT licensed.
- **Architecture:** Open-weight 552B-parameter sparse MoE using DeepSeek's Causal Encoder-Decoder architecture, with 8B active parameters on input and 16B on output. Native visual and text embeddings are jointly trained; compressed KV caching uses roughly one-quarter the HBM of the previous generation. License: MIT.

### Raw benchmarks found

> The exact 1017 model card is the primary source for the dated snapshot. Artificial Analysis and BenchLM independently report family/provider measurements, but some BenchLM rows use the earlier V4.1 Flash page rather than the 1017 card; those rows are labelled rather than silently attributed to the snapshot.

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (exact 1017 Hugging Face model card; Claude Code harness).
- Automation-Bench v1.0.6: **60.5%** (exact 1017 model card).
- Agents' Last Exam: **35.4%** (exact 1017 model card).
- Apex Bench v1.1: **72.1%** (exact 1017 model card).
- Artificial Analysis AutomationBench: **68.9%** (BenchLM, family/provider measurement).
- DeepSeek's official announcement says tests by multiple parties placed V4.1 Flash ahead of V4 Pro on performance, cost, speed, and total runtime; this is a directional vendor claim, not a standalone score.

Reasoning / knowledge:

- HLE without tools: **42.6%**; text-only subset **44.0%** (exact 1017 model card).
- Agents' Last Exam: **35.4%** (exact 1017 model card).
- Artificial Analysis Intelligence Index: **45** (Artificial Analysis, max/reasoning route); BenchLM reports **39.5%** on a family/provider presentation. These are different scales and were not averaged.
- AA-LCR: **84.0%**; CritPt **14.3%** (BenchLM, family/provider measurements).
- AA-Omniscience accuracy / hallucination rate / index: **46.4% / 96.5% / -5.3** (BenchLM, family/provider measurements). The poor hallucination result is a material reliability counterweight to the strong task scores.
- GPQA-Diamond: **90.9%** (BenchLM, inherited from the V4.1 Flash model card rather than explicitly re-run on the 1017 card; treated as lineage evidence, not exact-snapshot evidence).

Coding:

- DeepSWE v1.1: **77.0%** (exact 1017 model card; Mini-SWE-V2 harness).
- ProgramBench: **29.1%**; NL2Repo-Bench **68.2%** (exact 1017 model card).
- Terminal-Bench 4.0: **42.3%** (exact 1017 model card).
- OpenRouter/BenchLM family entry reports Terminal-Bench 2.1 **90.6%** for the earlier V4.1 Flash model card; this is not treated as an exact 1017 result because the dated card reports a different Terminal-Bench 4.0 evaluation.

Multimodal:

- Chartography with tools: **83.0%**; BabyVision with tools **92.5%**; ZeroBench-main with tools **51.0%** (exact 1017 model card).
- Artificial Analysis MMMU-Pro: **77.0%**; ExtractBench **87.11%** and ParseBench **65.72%** (BenchLM, independent/provider measurements).

Long context:

- Context window: **1M tokens** (exact Hugging Face card, Models.dev, OpenRouter). AA-LCR **84.0%** is a strong long-context proxy, but no public MRCR/RULER result at the full 1M window was verified.

### Normalized scores (1–100)

- **Tool use: 86/100.** AutomationBench 60.5–68.9%, Apex 72.1%, and strong long-horizon positioning support capable tool use; Terminal-Bench 4.0 at 42.3% and Agents' Last Exam at 35.4% cap reliability on difficult autonomous runs.
- **Reasoning: 88/100.** HLE 42.6%, AA Intelligence Index 45, AA-LCR 84%, and GPQA-D 90.9% are strong, but the negative AA-Omniscience index and 96.5% hallucination-rate result are substantial reliability penalties.
- **Context window: 95/100.** The 1M window is corroborated by the exact card, Models.dev, and OpenRouter, and AA-LCR is 84%; no full-window MRCR/RULER measurement prevents a perfect score.
- **Multimodal: 87/100.** Native image understanding plus BabyVision 92.5%, Chartography 83.0%, and MMMU-Pro 77.0% establish strong visual capability; ZeroBench 51.0% and no verified audio/video support cap it.
- **Coding: 88/100.** DeepSWE 77.0%, NL2Repo 68.2%, and strong family coding results show excellent coding potential, while ProgramBench 29.1% and Terminal-Bench 4.0 42.3% show uneven agentic execution.
- **Cost efficiency: 97/100.** Open weights under MIT and very low hosted pricing, including OpenRouter's $0.019/$0.60 route, are unusually attractive; provider variance and the high compute requirement of 552B total weights prevent 100.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions: (86 + 88 + 95 + 87 + 88) / 5 = 88.8. Best fit is high-throughput multimodal coding and long-context agents where price, speed, and open deployment matter, with extra verification for factual reliability.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Four independent web searches plus direct comparison of DeepSeek's official announcement, the exact DeepSeek Hugging Face model card, Artificial Analysis, BenchLM, Models.dev, OpenRouter, and Bing search results. Family-level and exact-1017 measurements were separated, and the Terminal-Bench 2.1/4.0 conflict was not conflated; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
