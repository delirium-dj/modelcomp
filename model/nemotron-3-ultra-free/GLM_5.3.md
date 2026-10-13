# Nemotron 3 Ultra Free — findings by GLM 5.3

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`, base `nvidia/nemotron-3-ultra-550b-a55b`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** The free OpenCode Zen tier of NVIDIA's Nemotron 3 Ultra (550B-A55B open-weights MoE) — unveiled at **Computex 2026-06-01**, shipped **2026-06-04** on HF/NIM; "the #1 US open-weights model" at launch with an **AA Intelligence Index of 48 that settled to 22.9** — this cycle's clearest launch-settling collapse alongside the τ³ problem (below). Architecture confirmed: **hybrid Mamba-Transformer with LatentMoE and MTP layers, pre-trained in NVFP4** (research.nvidia.com). The settled BenchLeader profile (**44.2 #525/760, lower half, never re-measured since release day**) contradicts the "frontier open-weights" launch framing: SciCode 40.3% #151, FrontierCode 13.6% #38, APEX 22.7% #49, **Agents & tools 22 (worst category)** — with MCP Atlas 63.1% #25 and GPQA 85.3% #84 the measured bright spots. Top use case: zero-cost long-context orchestration with open weights — on vendor claims until the harnesses re-measure it.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3-ultra-free` (free tier status unverifiable this pass — a targeted search returned no results; Zen's free models have been session-gated since 2026-09-16 per this cycle's earlier passes); open weights `nvidia/nemotron-3-ultra-550b-a55b` on HF/build.nvidia.com/NIM; hosted paid route **$0.50 in / $2.20 out per 1M ($0.10 cached)** (llm-stats).
- **Release / knowledge:** announced 2026-06-01 (Computex), shipped **2026-06-04** (confirmed); knowledge cutoff February 2026 (registry).
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen); `nvidia/nemotron-3-ultra-550b-a55b` (HF/NIM).
- **Context window:** **1M native** (NVIDIA/benchmarklist; llm-stats's 262K is the NIM serving default — conflict retained); free tier listed 1M/128K.
- **Modalities:** text in / text out (registry); reasoning (interleaved; no effort options on the free tier; thinking config carries the best agent row); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** Zen free tier $0/$0/$0 (last verified 2026-09-25; current status unverified — trial-terms logging caveat stands); paid route $0.50/$2.20; open weights for self-host; 300+ tok/s claimed at launch (5× throughput vs comparable open models, per the vendor blog).
- **Architecture:** open weights (AA Openness 83.3 — among the highest measured); 550B total / 55B active; hybrid Mamba-Attention MoE + LatentMoE + MTP; pre-trained in NVFP4.

### Raw benchmarks found

> Second pass adds the thin settled BenchLeader profile (best = not-stated **44.2 #525/760**, last measured **2026-06-04 — release day, never re-measured**; ±11.3, the widest error band in this batch). Categories: **Reasoning 62 (best)**, Maths 46, Coding 37, **Agents & tools 22 (worst)**. The first pass's strong agent rows (τ³ 70.9%, Harvey LAB 81.7%, PinchBench 90%) are **heavily flagged**: the τ³ 70.9% has no settled counterpart, sits ~20 points above the entire measured AA τ³ board's top, and follows the vendor-τ³-collapse pattern (MiMo 72.9%→9.9%, Qwen 70.7%→20.8%, GLM-5.2 26.8%→34.6%) — not credited as measured.

Agent / tool use:

- **MCP Atlas: 63.1% #25 (thinking — the one good measured agent row)**; APEX-Agents (Mercor): **22.7% #49** — weak; **Agents & tools 22 is the settled profile's worst category**
- First-pass rows retained with caveats: Terminal-Bench 2.1 56.4% (BenchLM) / 50.9% (Vals); TB Hard 36.4%; τ² 83.3%; GDPval-AA 1091/33.1% (mid-weak); **τ³ 70.9% — suspected mislabeled/vendor row, NOT credited** (the settled board's τ³ range makes this implausible); PinchBench 90% and Harvey LAB 81.7% (vendor-era rows, uncorroborated by any settled harness); BrowseComp 44.4%; AA Agentic Index 21.7%; EnterpriseOps-Gym 28.9%; Claw-Eval / Toolathlon: still unmeasured
- Vendor positioning rows ("leading accuracy on PinchBench, EnterpriseOps-Gym, Terminal-Bench 2.0, IFBench, GDPval-AA, ProfBench, Ruler" — developer.nvidia.com) retained as vendor narrative

Reasoning / knowledge:

- GPQA Diamond: Epoch **85.3% #84** (settled) — below the 90% bar (the first pass's 86-87% harness reads consistent); HLE 26.7-28.4% — below the 40% reference (the with-tools 37.4% row retained); **CritPt 3.1%** (very weak)
- **AA Intelligence Index CONFLICT: launch claim 48 (#1 US open-weights, every review repeats it) vs the settled 22.9** (BenchLM) — this cycle's largest launch-settling collapse; scored on 22.9
- Math: OTIS 86.7% #81; DTBench 90.1% #67; **ProofBench 2.0% #73** (dreadful); Chess 12% #123; Mystery Game 20% #57; LMCA 36.9% #101
- Omniscience −0.4, accuracy 21.6% (honest, knows little); MMLU-Pro 86.8%; MMLU-ProX 83%; **IFBench 81.7% / AA-IFBench 81.4%** (strong); ECI 146.2 #73

Coding:

- **SciCode: 40.3% #151** (settled, weak — confirms the first-pass read); **FrontierCode: 13.6% #38** (dreadful — gap filled); WeirdML 43.5% #91 (weak); **Coding 37 category**
- First-pass rows retained: SWE-bench Verified 71.9% / SWE-bench (Vals) 69.0%; LiveCodeBench 86-89%; SWE Multilingual 67.7%; AA Coding Index 49.3%; Design Arena 1149; Vibe / DeepSWE: still unmeasured

Long context:

- **1M native** (vendor; the Ruler "leading accuracy" claim is vendor positioning); **AA-LCR 67.0%** and LongBench v2 61.9% — mid-tier measured retrieval; no MRCR per-length table.

Multimodal:

- Text in/out only on the evaluated tier.

### Normalized scores (1–100)

- **Tool use: 54/100.** Lowered from 76: the one good settled row (MCP Atlas 63.1% #25) stands against APEX 22.7% #49 and Agents-22-as-worst-category; the first pass's 76 rested on rows now suspected vendor-sourced — **the τ³ 70.9% claim is not credited** (implausible vs the measured board; follows the MiMo/Qwen collapse pattern), and PinchBench 90% / Harvey LAB 81.7% remain uncorroborated.
- **Reasoning: 66/100.** Lowered from 72: GPQA 85.3% #84 below bar, HLE 26.7-28.4%, CritPt 3.1%, and **the AA II settling from 48 (launch, "#1 US open-weights") to 22.9** — offset by DTBench 90.1%, OTIS 86.7% #81, MMLU-Pro 86.8%, and strong IF (81.4-81.7%).
- **Context window: 92/100.** Lowered from 94: 1M native confirmed (with the 262K-serving-default conflict flagged), but measured retrieval is mid (AA-LCR 67.0%, LongBench v2 61.9%) and the vendor's Ruler claim is uncorroborated.
- **Multimodal: 15/100.** Held: text-only on the evaluated tier.
- **Coding: 60/100.** Lowered from 72: the settled weak rows (SciCode 40.3%, FrontierCode 13.6%, WeirdML 43.5%, Coding 37) weigh against the retained vendor-era strength (SWE-V 71.9%, LCB 86-89%) — a wide measured-vs-listed spread, scored in the middle.
- **Cost efficiency: 95/100.** Lowered from 100: the free tier was $0 at last verification (2026-09-25) but its current status is unverifiable (targeted search null) and Zen free models are session-gated; the paid route $0.50/$2.20 and the open-weights/NVFP4 self-host path (300+ tok/s claimed) carry the value case.
- **Overall Score: 57/100.** (54 + 66 + 92 + 15 + 60) / 5 = 57.4 → 57, down from 66. Best-fit: a free-tier long-context orchestration model with genuinely strong IF, decent math, and open NVFP4 weights — but the "#1 US open-weights at II 48" launch story settled to 22.9, the τ³ 70.9% claim is not credible against the measured board, and the release-day-only measurement record (±11.3, never re-run) means the profile is thin in both directions; treat it as a cheap orchestration tool, not a frontier agent, and re-verify the free tier before routing anything sensitive.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (the thin settled BenchLeader profile — 44.2 #525, last measured 2026-06-04, ±11.3 — aggregating Epoch AI Benchmarking Hub, Scale AI SEAL MCP Atlas, Mercor APEX, Vals AI, Cognition FrontierCode; research.nvidia.com's architecture card confirming the hybrid Mamba-Transformer LatentMoE/NVFP4 design; DDG-lite searches surfacing the Computex 2026-06-01 unveiling and 2026-06-04 ship date, the launch AA II 48 claim (buildfastwithai/aitoolsrecap/localaimaster — flagged against the settled 22.9), the developer.nvidia.com vendor positioning, and llm-stats' $0.50/$2.20 hosted pricing with the 262K-serving-default conflict; the free-tier status search returned no results — disclosed; the τ³ 70.9% row discredited by board-range comparison and this cycle's vendor-collapse pattern); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
