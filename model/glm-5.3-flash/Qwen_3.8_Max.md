# GLM-5.3 Flash — findings by Qwen 3.8 Max

- Source: Z.ai / Zhipu AI (`glm-5.3-flash`; AA/BenchLM id `glm-5-3-flash`)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the April draft was vendor-anchored (Z.ai's launch chart) with only a stale **v4.3.2 AA Index 41.81**; this pass lays the current independent layer on top and corrects two over-claims. **(1) Modality:** AA's authoritative spec lists **text and image only** — the "video/file input, first natively multimodal GLM-5" framing is vendor-only and unsupported, so the draft's "wider than GPT-5.6 Sol" multimodal premium is retired (**Multimodal 85 → 84**). What *does* close is vision *quality*: for the first time there are independent document scores — **LlamaIndex ExtractBench 80.75 / ParseBench 70.75** — and **Vals MMLU-Pro 86.1**, so the "no vision benchmark published" caveat is lifted even as the modality breadth shrinks. **(2) Hard reasoning, previously unmeasured, now is:** **Vals GPQA-Diamond 86.4**, **MMLU-Pro 86.1** and **Epoch FrontierMath v2 (Tiers 1-3 55.8 / Tier 4 17.1)** place it solidly mid-tier (**Reasoning 80 → 81**). **(3) Agentic over-claim corrected:** Z.ai's "beats Opus 4.8" headline rests on a **Terminal-Bench 2.1 of 84.3** that Vals re-reads at **62.9** (~21-pt gap), with **Nous Hermes Index 35.0** and **MazeBench 0%** mid-to-bottom — **Tool 88 → 85**. AA's current **v5.0 Intelligence Index is 28 (#7 of 22 in its open-weight size class, median 23)** — above its class median, a clear tier below the frontier (the v4.3.2 41.81 is not convertible) — and **cost-per-Index-task is now $0.58 (#9/22)**, not the drafted $0.25. Coding holds (**87**): **Vals SWE-bench 92.0 / LiveCodeBench 80.5** corroborate the vendor strength. **Overall 86 → 85** — mostly the agentic over-claim correction, partly offset by the reasoning/vision gaps closing.

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.ai's (Zhipu's) open-weight budget model in the GLM-5 line and the **first natively multimodal** GLM-5 release (vendor claims text/image/video/file input; **AA's authoritative spec lists text + image only — corrected 2026-11-02**). A newly-trained 320B-total / 18B-active MoE with a hybrid linear+sparse attention design built for cheap 1M-token serving; Z.ai claims it approaches Claude Opus 4.8 on coding/agentic tasks at ~1/10 the price of GLM-5.3. It ran anonymously on public leaderboards under the codename **"Ox Alpha"** (becoming the most-used model on OpenRouter and OpenCode) before Z.ai revealed its identity.
- **Provider / access:** Z.ai / BigModel API (`glm-5.3-flash`), GLM Coding Plan (3x the usable quota of GLM-5.3); open weights on Hugging Face under **MIT** with day-one SGLang / vLLM / Transformers / KTransformers / TokenSpeed / Unsloth support.
- **Release / knowledge:** Released ~2026-08-26/27; knowledge cutoff not published.
- **IDs:** `zai/glm-5.3-flash` (a.k.a. the former anonymous "Ox Alpha" — tracked separately in this dataset as `ox_alpha`; treated here as its own entry).
- **Context window:** 1,000,000 tokens input; 128,000 tokens max output.
- **Modalities:** **text + image in → text out (AA spec, 2026-11-02 — the vendor's "video + file" input claim is not carried in AA's authoritative modality table)**; reasoning yes (thinking **always enabled** — disabled is unsupported; `reasoning_effort` low/high/max, default max); tool calls yes (function calling, streamed tool calls, structured output, context caching).
- **Pricing (as of 2026-10-21):** Budget Flash-tier — Z.ai positions it at ~1/10 the price of GLM-5.3, ~$0.58 per AA Intelligence-Index task (AA v5.0, #9 of 22 in class; the drafted $0.25 was a v4.3.2-era figure, cheapest in its cluster at launch); off-peak/weekend calls consume 50% of plan points. Exact per-token API rates not captured in accessible sources (recheck Z.ai/BigModel). MIT weights = free self-hosting.
- **Architecture:** MoE, 320B total / 18B active (down from GLM-4.5's 32B active, 92→45 layers); hybrid linear + sparse attention with IndexPool (compressed indexer cache) and Manifold-Constrained Hyper-Connections (mHC). Z.ai reports attention compute 3.01x lower and KV-cache 4.44x lower than GLM-5.3. Trained on a 30-trillion-token multimodal corpus.

### Raw benchmarks found

Agent / tool use (Z.ai-reported, `max` reasoning unless noted; vs GLM-5.2 / Claude Opus 4.8):

- Toolathlon Verified: **78.4** (GLM-5.2 59.9; **beats Opus 4.8's 76.2**)
- AutomationBench v1.0.6: **48.8** (GLM-5.2 26.2; **beats Opus 4.8's 41.0**, and above Claude Sonnet 5.5's 44.7)
- Agents' Last Exam: **26.3** (GLM-5.2 20.4; near Opus 4.8's 27.0)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (rebased v4.3.2, Oct 2026): **41.81** at $0.25/task — mid-tier (below MiMo-V2.6-Pro 46.32, GPT-6.1 Sol 51.83, Claude Opus 5 50.78)
- Z.ai Code Bench v1.0 (internal): **29.0** at max effort (vs Z.ai's reported 29.5 for Opus 4.8)
- No GPQA Diamond / HLE / MMLU figures published in accessible sources (hard-reasoning ceiling not independently benchmarked)

Coding:

- Terminal-Bench 2.1: **84.3** (GLM-5.2 81.0; a hair below Opus 4.8's 85.0)
- DeepSWE v1.1: **63.4** (GLM-5.2 46.2; **beats Opus 4.8's 58.0**) — a +17.2 jump over its predecessor
- Visual-coding loop (native): understand screenshots/recordings → build frontend → run → inspect rendering → revise (frontend, games, 3D/Blender, computer use, document automation)

Multimodal:

- First natively multimodal GLM-5 (text/image/video/file); reads PDFs, slides, documents, spreadsheets and visually inspects generated deliverables; 30T-token multimodal training corpus
- No MMMU-Pro / OmniDocBench / CharXiv score published; a documented weakness on multilingual handwriting OCR (missed Urdu in a mixed-script note)

Long context:

- 1M-token window with 128K output, served cheaply via hybrid linear+sparse attention (KV-cache 4.44x lower than GLM-5.3); no MRCR / needle-in-a-haystack retrieval score published.

> Provenance: benchmark figures are **Z.ai vendor-reported** (official model documentation / technical blog / Hugging Face card, compiled by CodePick and MindStudio, verified 2026-08-27); the AA Intelligence Index (41.81) and $0.25/task are Artificial Analysis v4.3.2 (Oct 2026) via CodexSera. Z.ai's own methodology concedes harnesses differ and its internal Code Bench cannot be independently reproduced — treat vendor scores as an upper bound (the same over-claim pattern seen with Meta's Muse Spark). "Ox Alpha" identity confirmed by MindStudio/CodePick.

Independent (**added 2026-11-02 — Artificial Analysis `glm-5-3-flash` (LIVE, open weights); BenchLM `glm-5-3-flash`, Overall 58.26, #56/1004, 37 of 724; Vals AI / Epoch / LlamaIndex / Nous harnesses**):

- **AA Intelligence Index (v5.0): 28 (#7 of 22 in its open-weight size class; class median 23)** — supersedes the draft's v4.3.2 41.81 (baskets not convertible); above class median, a clear tier below the frontier. **Speed 75.2 tok/s (#41/78)**; **cost per Index task $0.58 (#9/22)**; **Verbosity 120M (#15/22)**; pricing **$0.15/$0.50, 80% cache**; **MIT, 320B total / 18B active**, 1M context.
- **AA spec: input = text and image → text** (the vendor "video/file" claim is not carried in AA's modality table).
- Reasoning/knowledge, independent (**closes the draft's "no GPQA/HLE/MMLU" gap**): **Vals GPQA-Diamond 86.4**, **Vals MMLU-Pro 86.1**, **Epoch FrontierMath v2 Tiers 1-3 55.8 / Tier 4 17.1**; HLE w/tools 55.3 (vendor).
- Coding, independent: **SWE-bench (Vals) 92.0**, **LiveCodeBench (Vals) 80.5**, **AA Terminal-Bench 2.1 84.3**, **OpenHarmony 57.3**; but **Terminal-Bench 2.1 (Vals) 62.9** undercuts Z.ai's charted 84.3, and **FrontierSWE v2 18.1** is weak.
- Agentic, independent: **AA ITBench 51.2**, **AA Tau3-Banking 47.2**, **AA Cyber Index 49.9**, **CWE-Bench-AA 55.8**, **CyberGym-E2E-AA 74.0**, **DeepsecBench-AA 19.9**, **Nous Hermes Index 35.0 / Hermes Bench 68.9**, **MazeBench 0%**.
- Multimodal, independent (**first discrete vision scores**): **ExtractBench (LlamaIndex) 80.75**, **ParseBench 70.75**, **Design Arena (OpenRouter) Elo 1270**; vendor CharXiv 89.4, MMVU 80.5, BabyVision 53.4 (weak), OfficeQA Pro 62.4.

### Normalized scores (1–100)

- **Tool use: 85/100.** *(88 → 85 — the vendor "beats Opus 4.8" framing is corrected by neutral instruments.)* Vendor Toolathlon 78.4 / AutomationBench 48.8 lead Opus 4.8 on Z.ai's own harness, and independent **AA ITBench 51.2**, **AA Tau3-Banking 47.2** and the cyber suite (**AA Cyber 49.9, CWE-Bench-AA 55.8, CyberGym-E2E 74.0**) are respectable; but **Terminal-Bench 2.1 (Vals) 62.9** undercuts the charted 84.3 (~21 pts), **Nous Hermes Index 35.0** and **MazeBench 0%** are mid-to-bottom, and the **v5.0 Index 28** places it below the frontier agentic tier — so the mid-tier composite tempers the vendor leads.
- **Reasoning: 81/100.** *(80 → 81 — provenance lift: the hard-reasoning ceiling is now independently measured.)* The draft had no GPQA/HLE/MMLU; **Vals GPQA-Diamond 86.4**, **Vals MMLU-Pro 86.1** and **Epoch FrontierMath v2 (Tiers 1-3 55.8 / Tier 4 17.1)** place it solidly mid-tier, with HLE 55.3 w/tools (vendor) near Opus territory and "thinking always enabled." Still capped by the current **AA v5.0 Index 28** (#7/22 open-weight class, median 23) — above its class but a clear step below the frontier — and the superseded v4.3.2 41.81 is not convertible.
- **Context window: 90/100.** *(held.)* A genuine 1M-token window with 128K output on an architecture purpose-built for cheap long-context (hybrid linear+sparse attention, 4.44x lower KV-cache), and AA confirms the 1M window; discounted only by the continued absence of an independent retrieval (MRCR/needle) benchmark.
- **Multimodal: 84/100.** *(85 → 84 — modality trimmed, but vision quality is now measured.)* **AA's authoritative spec lists text + image input only** — the vendor's "video/file, first natively multimodal GLM-5" breadth is not supported, so the draft's "wider than GPT-5.6 Sol" premium is retired; offsetting it, **independent document scores now exist for the first time (LlamaIndex ExtractBench 80.75 / ParseBench 70.75**, plus vendor CharXiv 89.4), with the practical screenshot→render→revise loop intact and handwriting OCR still a weak spot.
- **Coding: 87/100.** *(held — now partly independently verified.)* Strong independent corroboration: **SWE-bench (Vals) 92.0**, **LiveCodeBench (Vals) 80.5**, **AA Terminal-Bench 2.1 84.3** support the vendor DeepSWE 63.4 / TB 84.3; capped because **Terminal-Bench 2.1 (Vals) reads 62.9** (a ~21-pt vendor over-claim) and **FrontierSWE v2 18.1** is weak, so the "beats Opus 4.8" margin holds only on some harnesses.
- **Cost efficiency: 93/100.** *(held.)* Exceptional — MIT open weights (free self-hosting), ~1/10 of GLM-5.3's price, and AA's current **$0.58 per Index task (#9/22 in class)** at a $0.15/$0.50 rate card (the drafted $0.25 was a v4.3.2-era figure); still near the Pareto frontier for its capability band, with only a few open-weight peers clearly cheaper.
- **Overall Score: 85/100.** *(86 → 85 — mostly the agentic over-claim correction, partly offset by the reasoning/vision gaps closing.)* Mean of Tool 85 + Reasoning 81 + Context 90 + Multimodal 84 + Coding 87 = 427/5 = 85.4 → 85. Best fit: cost-sensitive, self-hostable (MIT), long-context coding/agentic work — screenshot-driven frontend, document automation (now independently measured at ExtractBench 80.75) and high-volume agents where near-Opus capability at budget price wins; the hardest verified agentic engineering and pure reasoning still favor the frontier, and Z.ai's launch margins should be re-tested on your own harness (independent Vals Terminal-Bench reads ~21 points under the charted 84.3).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Z.ai's vendor-reported benchmark table via CodePick and MindStudio guides; architecture/HF card; Artificial Analysis Intelligence Index v4.3.2 and cost-per-task via CodexSera; "Ox Alpha" codename identity confirmed across sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Re-research (2026-11-02): refreshed from Artificial Analysis (`glm-5-3-flash`, live open-weights, v5.0 Index 28 / $0.58-task / text+image) and BenchLM (`glm-5-3-flash`, 58.26 #56/1004) plus independent harnesses (Vals AI, Epoch FrontierMath v2, LlamaIndex ExtractBench/ParseBench, Nous Hermes). Conflict handling: independent instruments govern Z.ai's vendor chart — **Vals Terminal-Bench 2.1 62.9** over the charted 84.3; AA's spec is authoritative for modality (**text+image**; the vendor "video/file" claim is not carried and is retired). Guards: the v4.3.2 Index 41.81 is superseded by v5.0 28 and read against its open-weight **class median 23** (not the ~37 full-market median), so no frontier-parity overclaim; the "Ox Alpha" sibling record is not used for scoring.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
