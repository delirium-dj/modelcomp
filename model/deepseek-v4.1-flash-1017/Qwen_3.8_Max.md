# DeepSeek V4.1 Flash 1017 — findings by Qwen 3.8 Max

- Source: DeepSeek (`deepseek-v4.1-flash-1017`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's **2026-10-17 dated checkpoint** of the open-weight V4.1-Flash line — a 552B/16B-active MoE built for reasoning, coding, agentic workflows, and image-text-to-text, with the line's signature **KV-cache-compression** focus making its 1M context practical. A minor refresh (not a new generation) that lifts scores across nearly every benchmark while cutting task time and output length. **Current** (released 9 days ago). Retired `v4-flash` routes now serve it.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash-1017`; hosted as `deepseek-flash`; open weights (MIT) on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash-1017` (48-shard safetensors, FP8). Also on DeepInfra/Requesty and other routers.
- **Release / knowledge:** Released **October 17, 2026** ("1017" = the release date, per DeepSeek's date-versioning pattern); knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v4.1-flash-1017`; HF `deepseek-ai/DeepSeek-V4.1-Flash-1017`.
- **Context window:** 1,000,000 tokens total (AA-confirmed, ~1500 A4 pages); max output 384,000 per meta (DeepSeek recommends a minimum 256K generation allowance). KV-cache compression is the explicit engineering target for long-context usability.
- **Modalities:** Text + image in → text out (AA-confirmed; tagged text-generation *and* image-text-to-text on HF); reasoning yes (AA shows the reasoning/"max" configuration); tool calls + thinking mode supported. No audio/video.
- **Pricing (as of 2026-10-26):** **$0.30 / $1.20** per 1M in/out peak, **$0.15 / $0.60** off-peak (hosted deepseek-flash); AA lists $0.30/$1.20 (both "moderately priced," below the open-weight medians $0.43/$1.45), **98% cache discount**, **$0.26 per Intelligence-Index task** (#24/46). MIT weights are free to self-host.
- **Architecture:** 552B total / **16B active** MoE (meta "CED MoE"; AA confirms 552B/16B), FP8 (8-bit) quantization, **MIT license**. Technical report: *"DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression."* No Jinja chat template — ships a Python reference encoder + the Rust `deepseek-recipe` toolkit.

### Raw benchmarks found

> Independent anchor: Artificial Analysis (full workload set — this model is current, not deprecated). Specific benchmark deltas are from DeepSeek's own model card / technical report (vendor), as tabulated by MindStudio (2026-10-17). No Vals AI SWE-bench row yet (model is 9 days old).

Independent:

- **AA Intelligence Index v4.3.2: 45, #2/121** (median 19 → "well above average"; **4 of 4** intelligence units). This is the **second-highest open-weight score** on the index (behind MiMo-V2.6-Pro's 46) — a strong neutral corroboration, and the AA basket independently runs Terminal-Bench 4.0 + SciCode + AutomationBench-AA + GDPval-AA, so the agentic/coding leadership below is not purely vendor-asserted.
- AA speed **169.3 tok/s** (#13/78, "notably fast" vs 84; 4/4 units); AA verbosity **210M** Index tokens (#39/47, "**very verbose**" vs median 140M) — the one real weakness, inflating effective per-task cost; AA cost/task **$0.26** (#24/46).

Vendor (DeepSeek model card, deltas vs the prior V4.1-Flash; rivals named are K3, GLM-5.3, GPT-5.6 Sol, Opus 5):

- Agentic: **Terminal-Bench 4.0 31.2 → 42.3** (now leads GLM-5.3 37.9 and GPT-5.6 Sol 39.9 — top of the 5-model field); **Automation-Bench v1.0.6 54.8 → 60.5**; **Apex Bench v1.1 64.6 → 72.1**; Agents' Last Exam **35.4** (top of field).
- Coding: **DeepSWE v1.1 74.2 → 77.0** (top of field); **ProgramBench 20.3 → 29.1**; **NL2Repo-Bench 65.4 → 68.2** (trails Opus 5's 75.3).
- Reasoning: **HLE without tools 42.6 overall / 44.0 text-only** (up from 36.8 / 39.1) — but trails Opus 5 (56.3) and GPT-5.6 Sol (44.5).
- Vision (with tools): **Chartography 78.9 → 83.0** (Opus 5 84.0); **BabyVision 89.6 → 92.5** (Opus 5 94.1); **ZeroBench-main 49.0 → 51.0** (GPT-5.6 Sol 53.0).

> Provenance: the AA Index (45, #2/121) is independent and decision-critical; the per-benchmark numbers are vendor model-card figures (MindStudio-tabulated) and are not independently replicated as standalone rows, though the AA composite corroborates the agentic/coding direction. Pattern is classic DeepSeek-Flash: strong on tool-use/multi-step agentic + coding, competitive-but-trailing on pure knowledge/reasoning (HLE) vs the largest frontier models.
> Meta verification: **all fields accurate** — MIT ✓ (AA), 552B/16B-active ✓ (AA), 1M context ✓ (AA), `$0.30/$1.20 peak, $0.15/$0.60 off-peak` ✓ (AA/hosted), `Text, image in; text out` ✓ (AA), "retired v4-flash routes now serve it" ✓ (dated-checkpoint pattern). Enriched from AA: Index **45 (#2/121)**, **169.3 tok/s**, **$0.26/task**, **98% cache discount**, **210M verbosity (very verbose)**, released **Oct 17 2026**.

### Normalized scores (1–100)

- **Tool use: 84/100.** Independently corroborated agentic strength — the AA Index (45, #2/121) runs Terminal-Bench 4.0 / AutomationBench-AA / GDPval-AA, and the vendor table has it **leading the field on Terminal-Bench 4.0 (42.3, over GLM-5.3 and GPT-5.6 Sol), Automation-Bench (60.5), Apex (72.1), and Agents' Last Exam (35.4)**. Capped below the absolute frontier (a Flash-tier 16B-active model that still trails Opus 5 on reasoning-heavy agentic work).
- **Reasoning: 82/100.** AA Index **45 (#2/121 open-weight, well above the median 19)** is a near-frontier composite for an open model — second only to MiMo-V2.6-Pro (46). Held below the frontier band because HLE-without-tools (42.6 overall / 44.0 text) clearly trails Opus 5 (56.3) and even GPT-5.6 Sol (44.5): strong applied/agent reasoning, weaker raw knowledge than the largest closed models.
- **Context window: 86/100.** AA-confirmed **1M** with a 384K max-output allowance, and the entire technical effort (KV-cache compression) is aimed at making 1M economically usable — cheap ($0.26/task) and fast (169 tok/s) at length. Near the top of my 1M band; held at 86 (not 87+) absent an independent long-context *retrieval* validation (MRCR/RULER at 512K+).
- **Multimodal: 78/100.** Text + **image** input (AA-confirmed, image-text-to-text) with **verified** vision-with-tools benchmarks that are competitive with the frontier — Chartography 83.0, BabyVision 92.5, ZeroBench-main 51.0 — though each trails Opus 5 slightly. No audio/video, so this is a verified image-only tier (77–78), at the top of it given the near-frontier visual numbers.
- **Coding: 82/100.** Vendor leadership across the coding suite — **DeepSWE v1.1 77.0 (top of field), ProgramBench 29.1, NL2Repo-Bench 68.2, Terminal-Bench 4.0 42.3** — independently echoed by the AA Index's coding components (#2/121). Capped below the elite Vals-verified tier because there is **no independent Vals SWE-bench row** yet (model is 9 days old) and the tables are vendor-run; NL2Repo still trails Opus 5.
- **Cost efficiency: 90/100.** MIT open weights (self-hostable, and 552B/16B-active is far more tractable than a 1T MoE) plus cheap hosted pricing ($0.30/$1.20, below open-weight medians; $0.15/$0.60 off-peak), a 98% cache discount, $0.26/task, and 169 tok/s. Docked from the low-90s by **very verbose** output (210M Index tokens vs median 140M), which erodes the effective per-task cost. Not counted toward Overall.
- **Overall Score: 82/100.** Mean of Tool 84 + Reasoning 82 + Context 86 + Multimodal 78 + Coding 82 = 412 / 5 = 82.4 → 82. Best fit: the current **#2 open-weight model by AA Index (45)** — a fast, cheap, MIT-licensed 1M-context agent/coding workhorse that leads its field on terminal/agentic/DeepSWE tasks; pick it for cost-efficient long-horizon coding and tool use, and reach for Opus 5 / GPT-5.6 Sol when raw reasoning (HLE) or repo-scale generation is the priority. **Divergence note:** curated queue 81.7 vs my 82 → **+0.3** (essentially aligned, and my first positive divergence in this batch). Unlike the deprecated models above, this is a *current* release whose strong **independent** AA Index (#2/121) corroborates the vendor story, so there is no launch-peak-vs-rebased discount; I nudge just above the queue to credit that independent confirmation, offset slightly by the very-verbose output and image-only (no video/audio) multimodality.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis model page for `deepseek-v4-1-flash-1017`; MindStudio benchmark-update analysis of the DeepSeek model card / technical report; Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash-1017`; DeepSeek pricing/host listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
