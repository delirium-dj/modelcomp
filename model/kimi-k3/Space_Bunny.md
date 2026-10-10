# Kimi K3 — findings by Space Bunny

- Source: Moonshot AI / Kimi (`kimi-k3`; max effort)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (max)
- **Short description:** Moonshot AI's flagship open-weight, natively multimodal agentic model — the world's first open 3T-class release, built for long-horizon coding, knowledge work and 1M-token document analysis.
- **Provider / access:** Kimi Open Platform (`kimi-k3`, `https://api.moonshot.ai/v1`); OpenAI- and Anthropic-compatible formats; OpenRouter `moonshotai/kimi-k3`; Amazon Bedrock GA 2026-09-18. Artificial Analysis lists 21 API providers; self-hosting is available from the open weights.
- **Release / knowledge:** Released 2026-07-16; weights published on Hugging Face 2026-07-27 (`moonshotai/Kimi-K3`). Knowledge cutoff not published.
- **IDs:** `kimi-k3`; `k3d1-agent`-style identifiers belong to the unreleased K3.1 preview, not this model.
- **Context window:** 1,048,576 tokens (independently confirmed by Artificial Analysis and Vals AI). Max output listed as 131,072 in some records and 128,000 in others; Vals ran it with up to 262K output.
- **Modalities:** Text and image input natively (MoonViT-V2, 401M-parameter vision encoder); Kimi's platform documentation also lists video input; text output. Reasoning always on at `low` / `high` / `max` effort (**default `max`**), tool calls, web search, JSON mode.
- **Pricing (as of 2026-10-10):** **$3.00 uncached input / $0.30 cached input (90% discount) / $15.00 output per 1M**, **flat across the full 1M window with no long-context tier**; cache writes newly itemised at $3.00 (5-minute, default) / $6.00 (1-hour); $1 minimum top-up. Kimi consumer memberships run from free to $199/month. OpenRouter showed a 92.2% cache-hit rate on Moonshot's route (2026-10-05).
- **Architecture:** Open-weight MoE — **2.8T total / 104B active**, 93 layers (69 KDA + 24 Gated MLA), 896 experts with 16 selected plus 2 shared, 160K vocab, Stable LatentMoE with Attention Residuals, MXFP4 weights / MXFP8 activations via quantization-aware training. Licensed under the **Kimi K3 License** (some third-party catalogues incorrectly list Apache 2.0); a separate agreement is required in some commercial cases.
- **Successor signal:** a `kimi-k3-1` identifier surfaced in Moonshot's registry on 2026-09-28 with a preview page (codename "K311111"): 1M context, Low/High/Max effort, and possible native Agent and Swarm multi-agent modes. Unannounced, undated as of this report.

### Raw benchmarks found

*Moonshot's own table (Kimi Code harness, max effort, temperature 1.0):*

- GPQA Diamond **93.5**; CritPt **23.4**; AA-LCR **74.7**; HLE-Full **43.5 no tools / 56.0 with tools**
- DeepSWE **67.5** (Kimi Code) / **67.3** on the official board under mini-SWE-agent; ProgramBench **77.8**; Terminal-Bench 2.1 **88.3**; FrontierSWE **81.2**; SWE-Marathon **42.0**; PostTrainBench **36.6**; MLS-Bench-Lite **48.3**; SciCode **58.7**; Kimi Code Bench 2.0 **72.9**
- BrowseComp **91.2** with compaction triggered at 300K; **90.4** at the full 1M window with **no context management**
- Multimodal: MMVU **82.1**; BabyVision with Python **85.7**; MMMU-Pro **81.6 / 83.4**; MathVision **94.3 / 97.8**
- Toolathlon Verified **76.5**; WildClawBench Overall **54.5** (488 avg time, 40.08 avg cost per the model card)

*Independent evaluations:*

- **AA-LCR v1.1: 88.67% — rank 1 of 42** on Artificial Analysis (the field's best measured long-context reasoning result)
- **SWE-bench Verified: 93.40%** (Vals AI, 2026-10-10); Vals' SWE-bench Verified index subset reads 95.10%. Moonshot publishes no SWE-bench figure of its own — third-party numbers quoted as "K3 SWE-bench" are frequently Kimi K2.5's 76.8%
- Terminal-Bench 2.1: **80.9%** (Vals AI, rank 9 of 76) vs Moonshot's 88.3% — a 7.4-point harness gap
- Terminal-Bench 4.0: **19.7%** (Vals AI, rank 19 of 42) / **12.63%** (Artificial Analysis, rank 31 of 40) — weak on the frontier suite
- **ProgramBench: 2.00%** on independent tracking vs Moonshot's 77.8% — the largest disagreement in this report
- GPQA Diamond **92.93%**; LiveCodeBench **87.19%**; MMLU-Pro **87.97%**; MMMU-Pro **88.15%**; Vibe Code Bench v1.1 **84.96%** (Vals index subset 91.27%)
- Vals Index composite: **57.81% ±1.06**, rank 8 of 43 (July reading); a later v2 reading gives 50.70% — version change, not a regression
- Harvey LAB-AA legal agent: **5.3%**, rank 6 of 25, with **2.09 material hallucinations per task** (16.7% before the hallucination gate); AA Cyber Index **41**; Arena Elo **1,506**
- Artificial Analysis Intelligence Index: **44** on v4.3.2 (43.6 on the 2026-10-10 snapshot), rank 16 of 42 and **#3 among open-weight models**; AA Coding percentile 92. At **low** effort the index drops to **30.1** and cost per task to $1.15 (from 44 and ~$2.00)
- DeepSWE leaderboard (2026-09-22): 69% at max effort, ~$4.65 per task, ~81,000 output tokens over 98 steps
- Vals cost per test: **$6.47** at **69 min 34 s** — the slowest model in that set

### Normalized scores (1–100)

- **Tool use: 92/100.** BrowseComp 91.2% (90.4% even with no context management at the full 1M), Terminal-Bench 2.1 at 88.3% vendor / 80.9% independent, Toolathlon Verified 76.5% and SWE-Marathon 42.0% (leading that board) make it a genuine agentic coding model. Held down by Terminal-Bench 4.0 at 12.6–19.7% and Harvey LAB-AA at 5.3% with 2.09 hallucinations per task.
- **Reasoning: 93/100.** GPQA Diamond 93.5% (vendor) / 92.93% (independent), CritPt 23.4%, HLE 43.5/56.0, SciCode 58.7% and AA-LCR 88.67% at rank 1 of 42. The weak spot is calibrated legal/professional reasoning, where the hallucination rate is the field's problem.
- **Context window: 96/100.** The strongest measured long-context reasoning result in the industry (**AA-LCR 88.67%, #1 of 42**) on a 1,048,576-token window priced flat with no long-context surcharge, plus BrowseComp holding 90.4% with the full window and no compaction. A dedicated needle-in-a-haystack / RULER / LongBench row still does not exist for K3, which is the one gap.
- **Multimodal: 93/100.** Native vision via a 401M MoonViT-V2 encoder with MathVision at 94.3/97.8, MMVU 82.1, BabyVision 85.7, MMMU-Pro 81.6/83.4 and an independent MMMU-Pro of 88.15%. Text out only; no audio or image generation.
- **Coding: 93/100.** An independent **SWE-bench Verified of 93.40%** is the strongest verified figure here, backed by LiveCodeBench 87.19%, Vibe Code Bench 84.96%, FrontierSWE 81.2%, DeepSWE 67.3–69% and Terminal-Bench 2.1 88.3%. Two hard caps: the ProgramBench disagreement (77.8% vendor vs 2.00% independent) and Terminal-Bench 4.0 under 20%.
- **Cost efficiency: 66/100.** Flat $3/$15 with a 90% cache-hit discount, automatic caching (92.2% hit rate on Moonshot's route), no top-up beyond $1, and open weights you can self-host. Against it: Artificial Analysis calls K3 "particularly expensive when comparing to other open weight models of similar size," the **default effort is `max`**, Vals charges $6.47 per test at 69 minutes of latency, and a DeepSWE run costs ~$4.65. Dropping to `low` effort cuts cost to ~$1.15 but the index to 30.
- **Overall Score: 93/100.** The best open-weight option today for long-context document work, agentic coding and vision-in-the-loop agents — and the AA-LCR leader is a genuine frontier number, not a vendor claim. Set effort explicitly rather than inheriting `max`, and validate ProgramBench yourself before relying on it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across MoonshotAI's Kimi-K3 GitHub README and full benchmark table, the Kimi Open Platform documentation and reasoning-effort guide, the NVIDIA NIM model reference, Vals AI's model page and Terminal-Bench 4.0 leaderboard, Artificial Analysis model and index pages (including the AA-LCR v1.1 ranking), AIEvals' independent-vs-publisher tables, BenchLeader and Ridge aggregator rows, Lindy's October 2026 pricing breakdown, and reporting on the unannounced Kimi K3.1 preview; conflicting vendor/independent pairs (Terminal-Bench 2.1, ProgramBench, Vals Index versions, max output token limit, licence) are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- MoonshotAI — Kimi-K3 GitHub (full benchmark table, architecture, harness notes): https://github.com/MoonshotAI/Kimi-K3
- NVIDIA NIM — moonshotai/kimi-k3 model reference (architecture and selected partner results): https://docs.api.nvidia.com/nim/reference/moonshotai-kimi-k3
- Vals AI — Kimi K3 model page (57.81%, Terminal-Bench 2.1 80.9%, $6.47/test, 69m latency): https://www.vals.ai/models/kimi_kimi-k3
- Vals AI — Terminal-Bench 4.0 leaderboard (K3 19.7%, rank 19): https://www.vals.ai/benchmarks/terminal-bench-4
- BenchLeader — Terminal-Bench 4.0 (Vals) leaderboard, 2026-10-10: https://www.benchleader.com/benchmarks/vals_terminal_bench_4
- AIEvals — Kimi K3 aggregated results incl. AA-LCR 88.67% rank 1 (read 2026-10-08): https://aievals.app/models/kimi-k3
- RidgeBench — Kimi K3 scorecard (AA index 44, SWE-bench Verified 93.4%, Arena Elo 1,506, Cyber Index 41): https://www.ridgebench.com/models/kimi-k3
- Lindy — Kimi K3 pricing breakdown incl. cache-write line items and effort-level economics (2026-10-05): https://www.lindy.ai/blog/kimi-k3-pricing
- IntuitionLabs — Kimi K3 long-context evidence review (gap: no NIAH/RULER/LongBench published): https://intuitionlabs.ai/pdfs/kimi-k3-long-context-evaluation.pdf
- AIReport — Kimi K3.1 preview surfaces in Moonshot's API registry (2026-09-29): https://www.aireport.net/Gn_2b11c9157268
- AICoder — Artificial Analysis Intelligence Index v4.3 methodology change (2026-09-07): https://aicoder.com/news/news-20260907-aa-intelligence-index-v43