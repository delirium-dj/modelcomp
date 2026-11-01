# GPT-5.2 Pro — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.2-pro`, snapshot `gpt-5.2-pro-2025-12-11`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** High-compute December 2025 GPT-5.2 variant for difficult professional and scientific reasoning. A separate model and tariff from `gpt-5.2` (Thinking), not a serving tier or synonym; now a previous-generation Pro ([OpenAI launch](https://openai.com/index/introducing-gpt-5-2/), [API reference](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).
- **Provider / access:** OpenAI Responses API **only**, ID `gpt-5.2-pro` and dated snapshot `gpt-5.2-pro-2025-12-11`; no Chat Completions or Batch. Supports `medium`, `high`, `xhigh` reasoning, optional background processing for multi-minute requests, function calling, web/file search and MCP ([OpenAI reference](https://developers.openai.com/api/docs/models/gpt-5.2-pro)). No verified free route.
- **Release / knowledge:** December 11, 2025; knowledge cutoff August 31, 2025 ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).
- **Context window:** **400,000 combined tokens / 128,000 maximum output** ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2-pro)). OpenAI's MRCRv2 128–256K results in the launch are for **Thinking**, not Pro; no independently verified full-400K Pro retrieval result in reviewed sources.
- **Modalities:** Text/image input, text output; supported tools may produce image artifacts, but no model-native audio/video ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).
- **Pricing (2026-10-31):** **$21 input / $168 output per million tokens**; the [official Pro price card](https://developers.openai.com/api/docs/models/gpt-5.2-pro) and [launch table](https://openai.com/index/introducing-gpt-5-2/) list **no cached-input rate** (`–`), unlike $0.175 on ordinary GPT-5.2. Do not transfer the standard model's 90% cache discount to Pro; tools may add charges.
- **Architecture:** Proprietary; weights and parameter count undisclosed ([OpenAI model reference](https://developers.openai.com/api/docs/models/gpt-5.2-pro)).

### Raw benchmarks found

- **Agent/tool use:** [OpenAI's Pro column](https://openai.com/index/introducing-gpt-5-2/) reports **BrowseComp 77.9%** with browsing. It does **not** provide Pro τ²-bench 98.7%, MCP-Atlas 60.6%, Toolathlon 46.3% or SWE-bench results: those are Thinking-column data. No independent Pro terminal/tool-calling result established from the evaluated primary leaderboards.
- **Reasoning:** [OpenAI](https://openai.com/index/introducing-gpt-5-2/) reports Pro **GPQA Diamond 93.2% without tools**, **HLE 36.6% without / 50.0% with search+Python**, **AIME 2025 100% without tools**, **ARC-AGI-1 Verified 90.5%** and **ARC-AGI-2 Verified 54.2% (high effort)**. Independently stewarded [ARC Prize results, transcribed with exact variants](https://superindex.app/models/openai/gpt-5.2-pro/) confirm **ARC-AGI-2 semi-private 54.2% at high effort versus 38.5% at medium**; its direct [evaluation data](https://arcprize.org/media/data/evaluations.json) separates settings. The 15.7-point effort gap matters; aggregators reporting 38.5 and 54.2 are not necessarily in conflict. Independent [Epoch FrontierMath v2 results](https://superindex.app/models/openai/gpt-5.2-pro/) show **74% Tiers 1–3 and 46% Tier 4 at xhigh**, on a corrected benchmark version; the launch's **40.3%** older FrontierMath result belongs to **Thinking**.
- **Coding:** OpenAI's [detailed appendix](https://openai.com/index/introducing-gpt-5-2/) leaves Pro **SWE-bench Verified and SWE-bench Pro blank**. The presence of 80% / 55.6% in the adjacent Thinking column is not evidence for this checkpoint. Early testers describe stronger complex programming but no verified exact-ID repo-repair rate was found; code confidence is therefore lower than its academic strength.
- **Long context and vision:** [Independent Fiction.LiveBench results collated by Benchmark Atlas](https://atlas.kevinhu.io/models/gpt-5-2-pro) list **75.0% at 120K and 78.1% at 192K** (different task mixes; do not interpret a higher 192K score as monotonic recall). OpenAI's launch **MMMU Pro 79.5% and CharXiv 88.7%** refer to **Thinking**, not Pro. The exact Pro model supports images, but no comparable independently verified Pro vision aggregate found in reviewed sources.

### Normalized scores (1–100)

- **Tool use: 77/100.** Pro BrowseComp 77.9 and Responses tools; no exact-ID terminal/τ² result to validate the broader claim.
- **Reasoning: 86/100.** GPQA 93.2, independently verified ARC-AGI-2 high 54.2 and Epoch FrontierMath v2 74/46, with substantial effort/cost sensitivity.
- **Context window: 81/100.** 400K capacity, some independent 120–192K task evidence but no near-cap controlled Pro retrieval.
- **Multimodal: 65/100.** Image/text input; no exact-ID MMMU/CharXiv verified and no native audio/video output.
- **Coding: 71/100.** Plausible professional coding strength, but published Pro SWE-bench column blank; do not inherit Thinking scores.
- **Cost efficiency: 33/100.** $21/$168 without published cache rate or Batch; high per-task reasoning costs and multi-minute latency.
- **Overall Score: 76/100.** Half-up mean (77 + 86 + 81 + 65 + 71) / 5 = 76. An expensive historical high-effort research option rather than a general coding default.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Multiple independent searches, official exact-ID docs and side-by-side launch table, ARC Prize steward results and Epoch evaluations via source-linked SuperIndex. Distinguished high/medium and Pro/Thinking configurations; scores are interpretive.
- Reference URLs:
  - [OpenAI GPT-5.2 Pro API reference](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [OpenAI launch and detailed per-variant benchmark table](https://openai.com/index/introducing-gpt-5-2/)
  - [ARC Prize independent evaluation export](https://arcprize.org/media/data/evaluations.json)
  - [SuperIndex source-linked ARC Prize and Epoch comparison](https://superindex.app/models/openai/gpt-5.2-pro/)
  - [Benchmark Atlas independent long-context results compilation](https://atlas.kevinhu.io/models/gpt-5-2-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
