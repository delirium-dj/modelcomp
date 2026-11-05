# Inkling-Small — findings by GLM 5.3 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight companion to its flagship Inkling model — about a quarter of the size (276B total vs 975B) yet matching or beating Inkling on most published benchmarks. Top use cases: agentic coding, general reasoning, and self-hosting a near-flagship model on accessible hardware.
- **Provider / access:** OpenRouter (`inkling-small`, plus a free `inkling-small:free` variant); open weights (Apache 2.0) for self-hosting with MXFP8/NVFP4 quantization support. Chat Completions-style API via OpenRouter.
- **Release / knowledge:** Released 2026-07-30, two weeks after flagship Inkling (2026-07-15); knowledge cutoff not published.
- **IDs:** OpenRouter `inkling-small`; free tier exists as `inkling-small:free`
- **Context window:** Up to 1M tokens per OpenRouter and BenchLM listings (BenchLM concurs 1M, 2026-10-10); llm-stats lists 524K — sources conflict; no public retrieval benchmark confirms the full window.
- **Modalities:** multimodal reasoning model (hybrid reasoning type per BenchLM); image input with measured vision (MMMU-Pro 74.0, CharXiv 81.3); text output; tool calls supported.
- **Pricing (as of 2026-10-11):** $0.30 per 1M input / $0.06 cached / $1.20 per 1M output — roughly a third of flagship Inkling's $4.05/M output. Free variant available on OpenRouter (data-usage caveats typical of free tiers). Open weights = free self-hosting.
- **Architecture:** ~276B total parameters, ~12B active (sparse MoE); Apache 2.0 open weights; MXFP8 and NVFP4 checkpoint support.

### Raw benchmarks found (Vals suite added 2026-11-05)

> The Vals suite (16 rows, fetched 2026-11-05 — published since the prior pass) contradicts the near-flagship framing: Vals Index **27.59% ±1.13 — last of 33 models**, with floor rows on TB4.0/Vibe/ProofBench/IOI. The strong rows (SWE-V 82.2%, LCB 85.9%) and the older AA rows both stand; the split is documented, not averaged away.

Agent / tool use:

- **Vals Index: 27.59% ±1.13 — #33 of 33 (last)** (NEW); Vals Finance Index 36.27% (last of 36); Vals Legal Index 57.83%
- **Terminal-Bench 4.0 (Vals): 0.00% ±0.00 — #58 of 60** (NEW, floor); **HLAB-Vals-1.1: 2.92%** (NEW, floor)
- MCP Atlas: **79.6%** and BrowseComp: **77.4%** (older AA rows — stand)
- Vals professional rows (NEW): MedScribe **84.11%** (#38/109), TaxEval v2 **75.51%** (#18/145), LegalBench 82.99%, CyberBench 64.11%, Public Benefits 59.41%, MortgageTax 62.28%, Legal Research 25.48%, Finance Agent v2.1 44.78% (last/36), MedCode 37.89%, EMB 40.82% (last/38), Tax Agent 15.39%
- GDPval-AA: 1191 (31.2% normalized — older AA row, stands); AA Agentic Index 24.9%; Toolathlon 54.4%
- Claw-Eval: no verified public score found

> The Vals suite (16 rows, fetched 2026-11-05 — published since the prior pass) is the major addition, and it contradicts the near-flagship framing: Vals Index **27.59% ±1.13 — last of 33 models**, with floor rows on TB4.0/Vibe/ProofBench/IOI. The strong rows (SWE-V 82.2%, LCB 85.9%) and the older AA rows both stand; the split is documented, not averaged away.

Agent / tool use:

- MCP Atlas: **79.6%** (Thinking Machines launch post via benchlm.ai, updated 2026-10-10 — fills the gap)
- BrowseComp: **77.4%** (launch post — fills the gap; the prior "trails larger frontier models" framing is now quantified as solid)
- Terminal-Bench 2.1: **64.7%** (vendor; Vals independent: **55.1%**)
- Toolathlon-Verified: **54.4%** (launch post — quantifies the prior "outperforms Seed 2.1 Pro" claim as mid)
- GDPval-AA: **1191** (AA, independent; normalized **31.2%** — weak); AA Agentic Index: **24.9%** (AA)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor launch post; AA corroborates **89.5%**); Vals: **83.6%**
- HLE: **47.8%** with tools / **31.6%** without (launch post — the with-tools row fills the gap); AA-HLE: **33.3%**
- ARC-AGI-2: **40.1%** (launch post); ARC-AGI-1: **84.0%** (ARC Prize verified, Inkling Small XHigh)
- AIME26: **95.5%**; HMMT Feb 2026: **90.2%** (launch post — strong math)
- FrontierMath v2 (Epoch AI re-score): **46.3%** Tiers 1–3 / **17.1%** Tier 4 (epoch.ai, added 2026-10-16 — documented inline per repo convention, not averaged; no vendor FrontierMath row exists)
- SimpleQA Verified: **20.6%** (notably weak factual recall vs 43.9% for Inkling); AA-Omniscience: **33.2% accuracy / 63.0% non-hallucination row / −8.9 index** (AA — weak)
- Artificial Analysis Intelligence Index: **25.7** (AA current board) — **conflicts with the 2026-10-05 "within one point of Inkling (41)" framing**; the AA-direct board supersedes it
- AA-LCR v1.1: **75.7%** (AA — fills the long-context gap); CritPt: **8.3%** (weak)
- MMLU-Pro: **85.6%** (Vals); IFBench: **82.2%** (launch post)

Coding:

- SWE-bench Verified: **80.2%** (vendor; beats flagship Inkling's 77.6%)
- SWE-bench Pro: **55.9%** (launch post — fills the gap); SWE-bench (Vals): **82.2%** (Vals, independent)
- LiveCodeBench (Vals): **85.9%** (Vals — fills the gap)
- SciCode: **48.7%** (launch post); AA-SciCode: **49.7%** (AA); AA Coding Index: **53.0%** (AA)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1: **75.7%** (AA — first measured long-context number, mid)
- MRCR/RULER/GraphWalks: no verified public score; window sources conflict (1M vs 524K)

Multimodal:

- MMMU-Pro: **74.0%** (launch post) / **74.0%** (AA — corroborated); CharXiv: **81.3%** with tools / **77.4%** without — first measured vision evidence

### Normalized scores (1–100)

- **Tool use: 68/100.** CHANGED from 80 — the full Vals sweep (new since the prior pass) collapses the agentic story: Vals Index **27.59% — last of 33 models**, TB4.0 **0.00%** (#58/60), HLAB 2.92%, Finance Index last-of-36; the older AA rows (MCP Atlas 79.6%, BrowseComp 77.4%) and Vals SWE-V 82.2% keep it above the floor.
- **Reasoning: 72/100.** CHANGED from 82 — GPQA re-measures at 83.59% (Vals, down from the 89.5% prior readings), and new floor rows land: ProofBench 6.00% (#49/52), IOI 9.33% (#45/46); AIME26 95.5% and HLE-with-tools 47.8% (older AA) remain the counter-evidence.
- **Context window: 76/100.** CHANGED from 84 — a third conflicting listing lands: Vals serves it at **262K** (vs the prior 1M vendor claim and 524K conflict), demoting the window to the 200K–500K tier pending resolution.
- **Multimodal: 68/100.** Unchanged — MMMU-Pro 74.0% (AA-corroborated) and CharXiv 81.3% stand; no video/audio.
- **Coding: 78/100.** CHANGED from 85 — SWE-V 82.20% and LiveCodeBench 85.93% (Vals) hold, but the new Vibe 19.05% (#95/124), TB4.0 0.00%, ProgramBench 0.50% and Code Migration 10.43% rows are floor-class on the same harness that ranked peers 60–80%.
- **Cost efficiency: 92/100.** Unchanged — $0.30/$1.20 with Apache 2.0 self-hosting and a free OpenRouter variant.
- **Overall Score: 72/100.** CHANGED from 79.8 — (68 + 72 + 76 + 68 + 78) / 5 = 362/5 = 72.4 → 72. The largest correction of this enrichment cycle: the full Vals suite (published since the prior pass) places it last-of-33 on the Vals Index with floor rows on TB4.0/Vibe/ProofBench/IOI, contradicting the near-flagship framing the earlier scores leaned on; SWE-V/LCB and cheap Apache-2.0 self-hosting remain its genuine strengths.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): Vals AI Inkling Small page fetched 2026-11-05 — the full 16-benchmark Vals suite published since the prior pass is the major addition, placing it last-of-33 on the Vals Index with floor rows on TB4.0/Vibe/ProofBench/IOI; the conflict with the older near-flagship AA/vendor rows is documented rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
