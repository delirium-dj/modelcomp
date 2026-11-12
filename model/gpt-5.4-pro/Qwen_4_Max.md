# GPT-5.4 Pro — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.4-pro
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's March 2026 parallel-test-time-compute variant of GPT-5.4 — "uses more compute to think harder", Responses-API-only, requests can take several minutes. Launch-era frontier reasoning (HLE 58.7 w-tools, ARC-AGI-2 83.3, FrontierMath v2 T1-3 82.5) at an extreme $30/$180 price with no cache discount. Now **deprecated**: Artificial Analysis flags it superseded by GPT-5.5 Pro and benchmarks it less often (18h vs 6h cadence); its current Intelligence Index value is N/A.
- **Provider / access:** OpenAI API only (1 provider per AA), model ID `gpt-5.4-pro`, default snapshot `gpt-5.4-pro-2026-03-05`. **Responses API only** — Chat Completions, Batch, Realtime, fine-tuning all unsupported (unlike GPT-5.5 Pro, which does support Batch). ChatGPT Plus/Pro/Enterprise had GPT-5.4 family access at launch. OpenRouter lists it at $30/$180, 1.1M context.
- **Release / knowledge:** Released 2026-03-05 (AA + OpenRouter + snapshot ID agree). Knowledge cutoff **Aug 31, 2025** (official docs + AA). Reasoning effort: medium (default), high, xhigh — no low/none on Pro.
- **IDs:** `gpt-5.4-pro` / `gpt-5.4-pro-2026-03-05`; siblings `gpt-5.4` ($2.50/$0.25/$15), `gpt-5.4-mini`, `gpt-5.4-nano`; successor `gpt-5.5-pro`.
- **Context window:** **1,050,000 tokens** (official; AA rounds to 1M, OpenRouter says 1.1M — labelled), **128K max output**. Prompts >272K input tokens cost **2x input / 1.5x output for the full session**; long-context rate limits drop sharply (Build tier 50 RPM vs 500). No published MRCR/LCR retrieval scores for Pro.
- **Modalities:** Text + image in, text out (official + AA agree). No audio/video. Supported tools include **computer_use and apply_patch** (which GPT-5.5 Pro later dropped), plus web_search, file_search, tool_search, image_generation, MCP.
- **Pricing (as of 2026-11-12):** **$30 in / $180 out per 1M, no cached-input discount** (official quick-comparison table shows "-" for cache). Regional data-residency endpoints +10%. AA blended (7:2:1) $45/M. No Batch/Flex discount available on this model at all.
- **Architecture:** Proprietary; parameter count undisclosed. Pro = more inference compute per request (parallel test-time compute family pattern, per OpenAI's Pro positioning), not a separately disclosed architecture.

### Raw benchmarks found

Vendor-reported (OpenAI "Introducing GPT-5.4" launch post, via BenchLM's sourced profile — openai.com itself 403s):

- BrowseComp **89.3%**; HLE **58.7%** with tools / **42.7%** without; ARC-AGI-2 **83.3%**; FrontierScience **36.7%**; FrontierMath (legacy) **50%**

Independent runs:

- ARC Prize verified: ARC-AGI-1 **94.5%** (XHigh)
- Epoch AI: FrontierMath v2 Tiers 1-3 **82.456%**, Tier 4 **58.537%**
- Artificial Analysis: CritPt **30.0%**; Intelligence Index **N/A** (deprecated, not re-run on v5.0.1)
- Meta comparison chart (Muse Spark launch): IPhO 2025 Theory **93.5%**, FrontierScience Research 36.7% (Meta-run attribution)
- Appwrite GPT-5.5 launch analysis (family sweep): GeneBench **25.6** (vs GPT-5.5 Pro 33.2, GPT-5.5 base 25.0)
- SEAL leaderboard context: base GPT-5.4 xHigh SWE 59.1 (base-model figure, Pro-specific SWE not published)
- BenchLM aggregate: **67.89/100, #22 of 1026** (13/815 coverage — conservative, partial)

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 89.3% and native computer_use + apply_patch tooling (a capability its successor dropped) are strong; capped by no published GDPval/Briefcase/OSWorld-Pro rows, minutes-long request latency, and Responses-only integration surface.
- **Reasoning: 88/100.** HLE 58.7 w-tools, ARC-AGI-2 83.3, ARC-AGI-1 94.5 (ARC Prize verified), FrontierMath v2 T1-3 82.5 (Epoch), IPhO 93.5 — genuine launch-era frontier math/science; capped by HLE 42.7 no-tools, FrontierMath v2 T4 58.5 (vs GPT-5.5 Pro's 78.0), CritPt 30.0, and the stale Aug 2025 knowledge cutoff.
- **Context window: 90/100.** 1.05M tokens with a full 128K output ceiling; deducted for the >272K 2x/1.5x full-session surcharge, sharply reduced long-context rate limits, and zero published long-context retrieval benchmarks.
- **Multimodal: 72/100.** Text + image input with image_generation tool support; no published MMMU/CharXiv/vision scores for Pro and no audio/video — image-in only, under-verified.
- **Coding: 82/100.** apply_patch support and frontier reasoning transfer, GeneBench 25.6; capped by the absence of any Pro-specific SWE-bench/DeepSWE/Terminal-Bench publication (base GPT-5.4's ~80% SWE-V claims are secondary-source and its SEAL xHigh 59.1 is the only independent coding anchor) — coding is this variant's least-documented dimension.
- **Cost efficiency: 20/100.** $30/$180 with **no cache discount and no Batch support** (both worse than GPT-5.5 Pro's terms), Responses-only, minutes per request at xhigh, +10% regional uplift, and deprecated status — the most expensive per-token frontier endpoint measured in this sweep with the fewest cost mitigations.
- **Overall Score: 83.6/100.** Mean of the five quality dims (86+88+90+72+82)/5 = 83.6. Best-fit: a legacy deep-reasoning specialist for one-off hard math/science/analysis problems where minutes of latency and $180/M output are acceptable; for everything else the successor GPT-5.5 Pro (better FrontierMath v2, Batch support) or far cheaper frontier models dominate — its deprecated status and price make it a niche choice in Nov 2026.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI's official developer model page fetched live, Artificial Analysis' independent model page fetched live, BenchLM's sourced benchmark profile, OpenRouter's listing via search snippet, plus the Appwrite GPT-5.5 family analysis for GeneBench context); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: context 1,050,000 (official) vs 1M (AA) vs 1.1M (OpenRouter); the NxCode March recap was fetched but its numbers ($10/$30 base pricing, 272K context, Chat Completions support, GPQA 74.8) contradict official docs and were discarded as secondary-source drift — only its OSWorld-75%/SWE-V-~80% base-model claims are noted as unverified base-family context, never scored as Pro. openai.com's launch post 403s; its vendor numbers were captured via BenchLM's source-attributed rows. AA Intelligence Index is N/A (deprecated model, not re-run on v5.0.1) — no cross-version index comparison made. Identity: GPT-5.4 Pro ≠ GPT-5.4 ≠ GPT-5.5 Pro; FrontierMath legacy and v2 are different benchmark versions; ARC-AGI-1/2/3 are different versions.
- Reference URLs:
  - [GPT-5.4 Pro — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [GPT-5.4 Pro (Xhigh) Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro)
  - [GPT-5.4 Pro benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-4-pro)
  - [Introducing GPT-5.4 — OpenAI (vendor source cited via BenchLM; direct fetch 403)](https://openai.com/index/introducing-gpt-5-4/)
  - [GPT-5.4 Pro — OpenRouter](https://openrouter.ai/openai/gpt-5.4-pro)
  - [ARC Prize leaderboard (ARC-AGI-1 verified)](https://arcprize.org/leaderboard)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Introducing Muse Spark — Meta AI (comparison chart)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.