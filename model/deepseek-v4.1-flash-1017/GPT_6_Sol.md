# DeepSeek-V4.1-Flash-1017 — findings by GPT 6 Sol

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash-1017`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017
- **Short description:** October 17 update to DeepSeek V4.1 Flash, with distinct published weights and improved coding/agent performance ([release log](https://api-docs.deepseek.com/updates), [checkpoint card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)). This snapshot differs from September's V4.1 Flash; do not use the September checkpoint's scores as October measurements.
- **Provider / access:** First-party `deepseek-flash` currently serves the 1017 checkpoint on OpenAI-compatible **Chat Completions** and **Responses** endpoints at `https://api.deepseek.com` ([pricing/version table](https://api-docs.deepseek.com/quick_start/pricing)). The historical IDs `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` are compatibility aliases which **now** also route to 1017; they are not additional 1017 benchmarks. Open weights are at [DeepSeek's Hugging Face repository](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017).
- **Release / knowledge:** **2026-10-17** ([vendor change log](https://api-docs.deepseek.com/updates), [Vals evaluation](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017)); knowledge cutoff not published for 1017.
- **IDs:** `deepseek-flash` is the current official API route; `deepseek-ai/DeepSeek-V4.1-Flash-1017` pins weights. The *snapshot name* `DeepSeek-V4.1-Flash-1017` should not be assumed a stable first-party API ID just because third-party gateways use it. No verified Zen Free ID.
- **Context window:** **1M combined, up to 384K output** on the [official current API](https://api-docs.deepseek.com/quick_start/pricing). The [weights card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) recommends 1M context and `max_tokens ≥256K` for local inference. Neither figure proves near-limit retrieval success.
- **Modalities:** Text and image input, text output; reasoning/non-reasoning modes, tool calls, JSON, and Responses API ([DeepSeek specs](https://api-docs.deepseek.com/quick_start/pricing)). The [release](https://api-docs.deepseek.com/updates) tests visual agents with tools, not native audio/video output.
- **Pricing (as of 2026-10-31):** First-party per million tokens **off-peak $0.15 input-cache-miss / $0.003 cache-hit / $0.60 output**, versus **weekday peak $0.30 / $0.006 / $1.20**. Peak UTC slots: 01:00–04:00 and 06:00–10:00 on non-holiday weekdays ([official pricing](https://api-docs.deepseek.com/quick_start/pricing)). Open weights under **MIT** permit self-hosting, which has separate compute cost ([checkpoint license](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)).
- **Architecture:** Open-weight multimodal MoE with a sparse-expert config ([published config](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/resolve/main/config.json)). [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017) describes 552B total/16B active, whereas Hugging Face's downloadable-file metadata displays **763B params**; those counts use incompatible scope/metadata, so an exact all-in parameter count is not asserted here.

### Raw benchmarks found

Agent / tool use:

- [DeepSeek's October card and change log](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) report **Terminal-Bench 4.0 42.3%** (Claude Code), **Automation-Bench v1.0.6 60.5%**, **Agents' Last Exam 35.4%**, **Apex Bench v1.1 72.1%** and **Chartography with tools 83.0%**. The September V4.1 Flash baseline scored TB4.0 31.2%; that baseline is not the subject's own score.
- [Vals' independent 1017 evaluation](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017) measured **Terminal-Bench 4.0 31.82% ±2.62**, not the vendor's 42.3%. Harness and settings matter; the 10.48-point gap is kept visible instead of averaging percentages from different setups. Vals also reports **Finance Agent v2.1 62.93% ±2.03** and **Tax Agent Bench 44.35% ±3.57**. Its **Vals Index 61.26% ±1.05**, #10/32, covers the displayed task mix, not a universal solve rate.

Reasoning / knowledge:

- [DeepSeek's October release](https://api-docs.deepseek.com/updates) gives **HLE no-tools 42.6% overall**, and **44.0% on the text-only subset**. These are different populations, not independent replications. [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017) independently finds **Intelligence Index v5.0 32**, #1/22 in its open-weight comparison class; this is an index score, **not** a 32% accuracy. AA records **170M output tokens** for the index against class median 99M, so raw price per token understates task cost.
- [Vals](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017) independently reports **Legal Research 45.19% ±3.46** and **HLAB-Vals-1.1 14.17% ±2.79**. [BenchLM's index](https://benchlm.ai/models/deepseek-v4-1-flash-1017) mixes old September-specific GPQA 90.9 and other AA/September scores into its October page; those are **not** treated as exact-1017 results here.

Coding:

- [Vendor checkpoint card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017): **DeepSWE v1.1 77.0%** (Mini-SWE-V2 harness), **NL2Repo-Bench 68.2%**, **ProgramBench 29.1%**, and **Terminal-Bench 4.0 42.3%** (Claude Code). Compare like-for-like with September's 74.2/65.4/20.3/31.2, not with older TB2.1 90.6.
- [Vals](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017) independently reports **Vibe Code Bench v1.1 87.73% ±2.75** and **Code Migration v1.1 67.52% ±2.76**. These do not replicate DeepSWE, but corroborate substantial coding ability while Vals' TB4.0 is lower than DeepSeek's own run.

Long context / vision:

- [Vendor](https://api-docs.deepseek.com/updates) reports tool-assisted **BabyVision 92.5%** and **ZeroBench-main 51.0% pass@5**; neither is a tool-free vision pass@1 score. [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017) independently confirms image input and 1M combined context but does not publish a numeric exact-1017 near-limit retrieval score in its public profile. The 1017 [BenchLM index](https://benchlm.ai/models/deepseek-v4-1-flash-1017) attributes old **MMMU-Pro 77%** to the *unversioned* V4.1 Flash page; exclude it from this checkpoint's independent vision evidence.

### Normalized scores (1–100)

- **Tool use: 83/100.** Vendor automation/agent results and Vals finance tasks are strong; Vals TB4.0 31.82 versus vendor 42.3 caps confidence.
- **Reasoning: 84/100.** Exact-snapshot HLE 42.6 and independent AA v5 Index 32, with Vals' harder legal/HLAB scores as limits.
- **Context window: 93/100.** Official 1M tier and 384K output cap, discounted without verified near-limit retrieval.
- **Multimodal: 78/100.** Image/text input and strong tool-assisted vendor vision results; no independently measured exact-snapshot MMMU or audio/video I/O.
- **Coding: 86/100.** Vendor DeepSWE 77/NL2Repo 68.2 corroborated by independent Vals Vibe Code 87.73, tempered by ProgramBench 29.1 and lower Vals TB4.0.
- **Cost efficiency: 96/100.** MIT weights and low off-peak API price, although peak rates double and AA observed high token verbosity.
- **Overall Score: 85/100.** Half-up mean (83 + 84 + 93 + 78 + 86) / 5 = 84.8; attractive open-weight coding agent subject to harness and long-context verification.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Snapshot-specific comparison of first-party API/version/price records and published weights with independent Vals and Artificial Analysis measurements; rejected secondary benchmark rows whose cited pages refer to the older September checkpoint. Scores are normalized interpretations, not official benchmark values.
- Reference URLs:
  - [DeepSeek October release and benchmark harness notes](https://api-docs.deepseek.com/updates)
  - [DeepSeek first-party model/version/pricing table](https://api-docs.deepseek.com/quick_start/pricing)
  - [DeepSeek-V4.1-Flash-1017 exact-checkpoint weights and evaluation card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [Vals AI exact-snapshot independent results](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017)
  - [Artificial Analysis exact-snapshot independent profile](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
