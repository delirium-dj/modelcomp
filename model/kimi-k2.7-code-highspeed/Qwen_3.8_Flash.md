# Kimi K2.7 Code HighSpeed — findings by Qwen 3.8 Flash

- Source: Moonshot AI / Kimi K2.7 Code HighSpeed (`kimi-k2.7-code-highspeed`; Kimi Code `kimi-for-coding-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot's high-speed **serving tier** of Kimi K2.7 Code — the identical 1T-total / 32B-active open-weights MoE coding model, served ~5–6× faster (≈180–260 tok/s) for a higher rate. It is NOT a separate training run: capability is byte-for-byte the K2.7 Code base (see the sibling `../kimi-k2.7-code/Qwen_3.8_Flash.md`), only the serving speed, quota multiplier and price differ.
- **Provider / access:** Moonshot Kimi API (`kimi-k2.7-code-highspeed`, OpenAI-/Anthropic-compatible) + Kimi Code CLI/Desktop/VS Code (`kimi-for-coding-highspeed`, Pro plan and above); Vercel AI Gateway `moonshotai/kimi-k2.7-code-highspeed`; HF `moonshotai/Kimi-K2.7-Code` (self-hostable, Modified MIT). No $0 Zen ID.
- **Release / knowledge:** K2.7 Code base 2026-06-12; HighSpeed tier live ~2026-06-15 (GA in Kimi Code "What's New" 2026-07-09); knowledge cutoff not published. (Note: the standard `kimi-for-coding` tier has since been upgraded in place to K2.8 Preview — the numbers below are the K2.7 Code weights measured at its June-2026 launch.)
- **IDs:** `kimi-k2.7-code-highspeed`, `moonshotai/kimi-k2.7-code-highspeed`, `kimi-for-coding-highspeed`.
- **Context window:** **262,144 total (256K), 32,768 max output** (Vercel Gateway / benchr) — the curated `meta.json` "128K / Text in/out" is a placeholder contradicted by verified data; scored on the real 256K text+vision+video model.
- **Modalities:** text + image + video in (official Kimi Code model table); text out; thinking always-on (no effort levels); native tool calls. Vision/video documented but not independently benchmarked for this ID.
- **Pricing (as of 2026-10-02):** **$1.90 in / $8.00 out per 1M** (cache $0.38) = exactly 2× the base $0.95/$4.00 tier; inside Kimi Code subscriptions the HighSpeed lane consumes quota at ~3× the standard rate. Cost excluded from Overall.
- **Architecture:** 1T-total / 32B-active sparse MoE (384 experts, 8+1 shared active, MLA, MoonViT ~400M), ~30% fewer thinking tokens than K2.6; same weights as standard K2.7 Code — only serving speed differs.

### Raw benchmarks found

> Capability rows are the **base K2.7 Code weights** (HighSpeed runs identical weights per official docs). Independent: Vals AI (SWE-V/LCB/TB/Vibe, 2026-06-13) and Artificial Analysis (GPQA/HLE/Omniscience/GDPval). Vendor/in-house: Moonshot SOTA-with-tools table (MCP suites, Kimi Code Bench, Program Bench, Claw). No variant-specific re-measurement exists for the HighSpeed lane; cross-checked against the sibling `../kimi-k2.7-code/Qwen_3.8_Flash.md` and the qualifying `Kimi_K3.md` / `Muse_Spark_1.3.md` reports.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **67.04%** (#1 open-weight at launch, rank 37/75); SkillsBench (Vals) **50.04%**
- MCP Mark Verified **81.1** / MCP Atlas **76.0** / Kimi Claw 24/7 **46.9** (vendor tables)
- GDPval-AA (AA): **1,114 Elo (26.3% normalized)**; AA Agentic Index **22.5%** → open-ended economic agent work is the weak spot

Reasoning / knowledge:

- GPQA Diamond (AA): **89.6%**; HLE (AA): **35.0%** (under the 40% bar); AA-LCR **79.3%**; IFBench 63.1%; CritPt 10.0%
- AA-Omniscience Index **−10.2%** (Accuracy 39.6% / Hallucination **82.4%**) — severe unaided-factuality failure carried over from the base weights

Coding:

- SWE-bench Verified (Vals): **78.20%**; LiveCodeBench (Vals): **82.05%**; Vibe Code Bench v1.1 (Vals) **47.21%**; Code Migration **25.39%** (Vals); AA Coding Index **60.8**; AA-SciCode **47.8%**
- In-house: Kimi Code Bench v2 **62.0**, ProgramBench **53.6**, MLS-Bench Lite **35.1** (a Vals ProgramBench 0.00% run is flagged anomalous harness noise, not capability)

Long context / multimodal:

- 256K window; long-horizon trajectory support (4,000+ tool calls / 12h+ runs, vendor) but no MRCR/RULER ≥98%-at-length retrieval row; image+video input documented, no measured visual benchmark for this ID.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Same weights as the base K2.7 Code (which this rater scored 73 in `../kimi-k2.7-code/`); the deltas here are the higher multimodal credit (video-in documented on the Kimi Code table) offset by the 2×/3× price lane affecting only Cost, which does not enter Overall.

- **Tool use: 74/100.** TB 2.1 67.04% (#1 open-weight), MCP Mark 81.1 / Atlas 76.0 and SkillsBench 50.04 are a strong structured-tool cluster, but GDPval-AA 26.3% and AA Agentic 22.5% show it collapses on open-ended long-horizon work — solid mid-upper, not frontier agentic.
- **Reasoning: 72/100.** GPQA Diamond 89.6% and AA-LCR 79.3% are near-frontier, but HLE 35.0% misses the bar and a −10.2 Omniscience / 82.4% hallucination profile is a heavy unaided-factuality penalty; the coding post-train clearly traded off general reasoning.
- **Context window: 76/100.** 256K sits in the 200K–500K tier (65–84); long-horizon trajectory evidence (4,000+ calls / 12h+) is supportive but there is no ≥98%-at-length retrieval measurement → mid, not near ceiling.
- **Multimodal: 70/100.** text + image + **video** in / text out lands the video-input band's lower edge per the Kimi Code model table; capped because no visual/video benchmark row has been measured for this ID and output is text-only.
- **Coding: 80/100.** Vals SWE-bench Verified 78.2% and LiveCodeBench 82.05% are genuinely strong real-harness results, AA Coding Index 60.8 mid; Vibe 47.21 / Code Migration 25.39 / in-house Kimi-Code 62 keep it from the 90 frontier band but justify the coding-first positioning.
- **Cost efficiency: 72/100.** $1.90/$8.00 is 2× the already-cheap base tier (and 3× quota in-subscription), interpolating toward the $3/$15 ≈60 anchor — you pay specifically for latency, not capability. Cheaper to run the standard tier or self-host unless interactive speed shapes the UX. Cost excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 74, Reasoning 72, Context 76, Multimodal 70, Coding 80 = 372/5 = 74.4 → 74. Best fit: **interactive** open-weights coding agents where wall-clock latency matters — same #1-open-weight SWE/LiveCode quality as K2.7 Code at 5–6× speed. For batch / overnight / cost-sensitive runs use the standard tier (half the price) or self-host the Modified-MIT weights. Its −10.2 Omniscience / 82.4% hallucination still makes it unsafe for unaided factual recall, and its GDPval/AA-Agentic weakness says keep it on well-scoped repo tasks, not open-ended economic agent loops.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Vals AI `kimi_k2_7_code` SWE-V/LCB/TB/Vibe rows 2026-06-13; Artificial Analysis GPQA/HLE/Omniscience/GDPval; Moonshot forum launch SOTA-with-tools table + Kimi Code models page/What's New changelog for the HighSpeed tier, video-in modality and $1.90/$8.00 (2× base) pricing; Vercel AI Gateway + benchr platform reads; cross-checked against the sibling `../kimi-k2.7-code/Qwen_3.8_Flash.md` and the qualifying `Kimi_K3.md` / `Muse_Spark_1.3.md`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that HighSpeed is the same weights as the base (not a distinct model — the base already has its own signed report), that GPQA/HLE/LCR/Omniscience/GDPval are AA-independent while SWE/LCB are Vals-harness and MCP/Claw/Code-Bench are in-house, and that the curated `meta.json` (128K/text-only) understates the verified 256K text+vision+video model.
- Revisit trigger: if an independent harness (AA/BenchLM/Vals) publishes a HighSpeed-lane-specific row, or the base weights are superseded by K2.8 Preview across the board, research deeper and write a fresh report; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
