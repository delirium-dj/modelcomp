# MiMo V2.6 Free — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiMo V2.6 Free
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (zero-cost OpenCode Zen tier of Xiaomi's MiMo-V2.6-Flash)
- **Short description:** Free hosted tier of Xiaomi's MiMo V2.6 Flash — a full-modality open-weights reasoning model (MIT license) in the MiMo V2.6 series (Pro / Flash / Distill-Qwen-9B); capabilities identical to MiMo V2.6 Flash.
- **Provider / access:** Xiaomi — OpenCode Zen free tier (`opencode/mimo-v2-6-free`); Xiaomi API (prepaid, balance-based, monthly/annual plans); open weights on Hugging Face (MIT). Rate limits on the free tier (Flash specs: RPM 100, TPM 10M).
- **Release / knowledge:** MiMo V2.6 series released September 2026 (RL training: 30 steps each for Flash and Pro, ~750K trajectories total, ~$850K Flash / $2.62M Pro compute). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/mimo-v2-6-free` (repo meta.json, stale stub: "128K total", "Text in/out" — actual: 1M, full-modality).
- **Context window:** 1M tokens; 128K max output (Flash specs).
- **Modalities:** Native fully multimodal — text, image, audio, video, PDF in; text out (per reseller catalog and "full-modality" series positioning).
- **Pricing (as of 2026-10):** Free on OpenCode Zen; Xiaomi API list $0.28/1M input for Flash (output price not captured in sources).
- **Architecture:** MiMo V2.6 Flash — open weights (MIT); **309B-parameter MoE, 15B active** (TPS report; Xiaomi's own materials carry conflicting parameter-count figures per HokAI/OrcaRouter; Pro is the flagship; Distill-Qwen-9B is the 9B sibling). Full FP8 weights ~1.29 TB across 65 shards (multi-node, SGLang TP8).

### Raw benchmarks found

Xiaomi's model card / OpenLM evaluation table (Flash column; vendor-reported):

Agent / tool use:

- Toolathlon-Verified: **73.6%**.
- AutomationBench v1.0.6: **52.3%**.
- Agents' Last Exam: **27.6%**.
- OSWorld-Verified: **80.8%**; JobBench: **61.2%**.
- Terminal-Bench 2.1: **87.6%** (see the Coding section — BenchmarkList: 93rd pct, rank 15 of 194, 3.8pp behind field leader Fable 5.1's 91.4%); Tau3-Banking / MCP-Atlas: no verified public score found for Flash.

Reasoning / knowledge:

- GPQA Diamond: **54.8%** (RankLLMs) vs **75.0%** (TPS report) — conflicting aggregator reads; Xiaomi's card publishes no GPQA (HokAI/kinonn confirm), so neither is adopted. HLE: not captured. AA Intelligence Index: no AA model page exists for Flash (OrcaRouter: "MiMo-V2.6-Flash has no Artificial Analysis model page. Its sibling does… the only independently measured figure anywhere in the MiMo-V2.6 series is the 46 next to Xiaomi MiMo-V2.6-Pro"). Pro scores 46 on AA Intelligence Index v4.3.2 — first among 115 open-weight models, level with Grok 4.7 xhigh — suggesting Flash sits at or below that tier.

Coding:

- DeepSWE v1.1: **67.9%** (release post says 65.7 — internal inconsistency in Xiaomi's materials).
- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.8%**.
- MiMo Code Bench: **61.2%**; ProgramBench: **26.0%**.
- LiveCodeBench: no verified public score found for Flash; SciCode: **51.3%** (BenchmarkList, 85th pct, rank 46 of 296 — under the 55% reference; field leader O-5.5 at 66.9%, −15.6pp).

Cybersecurity:

- CyberGym: **95.1%**; MiMo Cyber Bench: **77.2%**; ExploitGym: **6.0%**; ExploitBench: **25.3%**; SEC Bench Pro: **47.5%**.

Visual agent:

- MiMo VisualCoding: **71.5%**.

Long context: - Long context: no MRCR/RULER/GraphWalks score found; 1M window (expanded from 256K vs the prior MiMo-V2-Flash, per TPS).

### Normalized scores (1–100)

- **Tool use: 71/100.** Toolathlon-Verified 73.6% and OSWorld 80.8% are above the mid band, but AutomationBench 52.3% and Agents' Last Exam 27.6% lag; no τ³/MCP-Atlas evidence — and every Flash row is vendor-reported (Xiaomi harness, grader and offline run), with no independent or AA verification on file.
- **Reasoning: 65/100.** GPQA Diamond reads conflict across aggregators (54.8% per RankLLMs vs 75.0% per TPS; Xiaomi's card publishes none), HLE is uncaptured, and Flash has no AA Index page — Pro's AA Index 46 (top open-weight) suggests Flash at or below that tier, so 65 stands as the conservative midpoint of the conflicting evidence.
- **Context window: 95/100.** 1M tokens confirmed in Flash specs.
- **Multimodal: 88/100.** Native text/image/audio/video/PDF input (full-modality band); MiMo VisualCoding 71.5% is the only visual score captured.
- **Coding: 71/100.** Terminal-Bench 2.1 87.6% (rank 15 of 194, 3.8pp behind Fable 5.1) is strong and DeepSWE v1.1 67.9% (rank 18 of 52) is solid, but Terminal-Bench 4.0 28.8% (rank 17 of 29), SciCode 51.3% (under the 55% reference), ProgramBench 26.0% (rank 31 of 37, 59.4pp behind GPT-6 Astra's 85.4%) and the absence of LiveCodeBench cap it.
- **Cost efficiency: 98/100.** Free on OpenCode Zen; Xiaomi API list $0.28/1M input.
- **Overall Score: 78.0/100.** (71+65+95+88+71)/5 = 78.0 — the free tier of a strong full-modality open model — frontier-adjacent terminal coding and cybersecurity, weak on the newest hard benchmarks (TB 4.0, ALE, ProgramBench, SciCode) — with every Flash row vendor-reported and no AA page for Flash.

---

## Update 2026-10-11 (deep second pass, 1 independent search + source cross-checks)

**No score change: Tool use 71 / Reasoning 65 / Context 95 / Multimodal 88 / Coding 71 / Cost 98 / Overall 78.0** — the second pass fills SciCode (51.3%) and the architecture gap (309B/15B active), confirms there is no AA page for Flash, and surfaces a GPQA conflict (54.8% vs 75.0%) that leaves Reasoning at its conservative 65:

- **No AA model page exists for MiMo V2.6 Flash** (OrcaRouter, 2026-09-22: "MiMo-V2.6-Flash has no Artificial Analysis model page. Its sibling does. That asymmetry is the single most important thing on this page, because it means the only independently measured figure anywhere in the MiMo-V2.6 series is the 46 next to Xiaomi MiMo-V2.6-Pro. Every Flash number above — including the CyberGym row it wins — comes from a Xiaomi harness, a Xiaomi grader and a Xiaomi offline run."). HokAI independently confirms: "Xiaomi has not published any standard third-party benchmark for Flash: no MMLU, GPQA, ARC-AGI, HumanEval or SWE-bench Verified score appears on its model card."
- **GPQA Diamond conflict:** RankLLMs reads **54.8%**; TPS report reads **75.0%**. Xiaomi's card publishes no GPQA, so neither read has a primary source in captured materials — flagged, neither adopted. Reasoning stays at the conservative 65 (the midpoint of the conflict), with Pro's AA Index 46 (top open-weight, level with Grok 4.7 xhigh) as the series ceiling.
- **New rows:** SciCode **51.3%** (BenchmarkList, 85th pct, rank 46 of 296 — under the 55% reference; field leader O-5.5 at 66.9%, −15.6pp); architecture **309B MoE / 15B active** (TPS; conflicting parameter counts in Xiaomi's own materials per HokAI/OrcaRouter, plus a stated-5-layer vs configured-3-layer speculative-decoding mismatch); full FP8 weights ~1.29 TB across 65 shards (multi-node, SGLang TP8); serving 185 tok/s with sub-220ms TTFT (RankLLMs); 9,486 daily active developers on OpenCode (#4 adoption).
- **Pro vs Flash table (OrcaRouter/ComputingForGeeks):** DeepSWE v1.1 71.9/67.9, MiMo Code Bench 63.2/61.2, AutomationBench 53.1/52.3, Toolathlon-Verified 76.9/73.6, TB 2.1 89.9/87.6, OSWorld-Verified 82.0/80.8, JobBench 62.0/61.2, MiMo Visual Coding 72.3/71.5, CyberGym 94.0/95.1 (Flash wins this row), MiMo Cyber Bench 80.2/77.2, ExploitGym 17.8/6.0, ExploitBench 47.9/25.3, SEC Bench Pro 66.3/47.5, ALE 31.6/27.6, TB 4.0 34.9/28.8. Versus the closed frontier: Flash edges GPT-5.6 Sol on AutomationBench (52.3 vs 45.8) but trails it on TB 2.1 (87.6 vs 88.8), loses TB 4.0 to Opus 5 by 20 points (28.8 vs 49.0) and trails every closed model on ExploitBench by 22–31 points. Xiaomi's own appendix positions Flash below DeepSeek V4.1 Flash on DeepSWE (67.9 vs 74.2) and TB 2.1 (87.6 vs 90.6) but ahead on JobBench (61.2 vs 45.8) and MiMo Code Bench (61.2 vs 60.2).
- **Documentation inconsistencies (flagged):** the release post prints Flash DeepSWE at 65.7 vs the model card's 67.9 (and Pro's at 72.6 vs 71.9); RankLLMs reports "67.2% SWE-bench" for Flash but no SWE-bench Verified row exists on Xiaomi's card (HokAI/kinonn confirm "not published") — likely a DeepSWE mislabel, flagged and not adopted; Xiaomi API pricing reads $0.28/1M input in the file's sources vs $0.14 input / $0.28 output per TPS — the free OpenCode Zen tier makes the list price moot for this entry.
- **Still open:** τ³-Banking, MCP-Atlas, HLE, LiveCodeBench, MRCR/RULER/GraphWalks, and any independent rerun of a Flash row.
- Score impact: none — SciCode 51.3% confirms the Coding cap band; the GPQA conflict blocks a Reasoning revision in either direction; the all-vendor provenance is documented as the standing caveat. Overall stays 78.0.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (Xiaomi MiMo model card + OpenLM table, BenchmarkList, RankLLMs, TPS report, HokAI, OrcaRouter, ComputingForGeeks, kinonn research vault); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
