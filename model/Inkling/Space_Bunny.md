# Inkling — findings by Space Bunny

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`; hybrid reasoning, official card at effort 0.99)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, downward on two dimensions.** Artificial Analysis has published its component rows for the first time, and they are far weaker than the aggregate suggested: **AutomationBench 5.0%**, **Terminal-Bench 4.0 1.0%**, **AA-Briefcase 832 Elo**, **GDPval-AA 1079 Elo**, **GDP.pdf 12.8%**, **MLCR-AA 12.2%**, **CritPt 5.4%**, and an **Omniscience Hallucination Rate of 67.7%**. Vals AI independently reproduces **Terminal-Bench 2.1 at 47.6%** against the vendor's 63.8%, and Proximal measures **FrontierSWE v2 at 4.1%**. Positively, **AA-LCR 77.3%** finally supplies the long-context retrieval evidence the prior pass flagged as its main gap. Net: **Tool use 86 → 82**, **Reasoning 87 → 85**, **Coding 87 → 82**, **Context 95 → 96**, Overall **88.4 → 86.4**.

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE for agentic applications, coding assistants, tool use, retrieval, and general text/image/audio conversation. **Current and actively benchmarked** — not deprecated, available through 7 API providers, with a smaller sibling (**Inkling-Small**) now also published.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling`; Thinking Machines API and Tinker Playground; local SGLang, vLLM, TokenSpeed, Unsloth, and Hugging Face deployment. Artificial Analysis lists **7 API providers**; OpenRouter route `thinkingmachines/inkling`. Quantized variant `thinkingmachines/Inkling-NVFP4`.
- **Release / knowledge:** **Released 2026-07-15** (Artificial Analysis FAQ). No verified knowledge cutoff found — a real gap for a model of this vintage.
- **IDs:** `thinkingmachines/Inkling`; `thinkingmachines/Inkling-NVFP4`; `thinkingmachines/Inkling-Small`.
- **Context window:** **1,000,000 tokens** (Artificial Analysis, BenchLM) — a confirmed specification. Retrieval quality is now measured: **AA-LCR v1.1 at 77.3%**.
- **Modalities:** **Text, image, and speech/audio input; text output.** Image and video are encoded through a hierarchical patch encoder; audio through discrete token encoding. Native tool declarations and reasoning effort are supported by the model template.
- **Pricing (verified 2026-10-10, unchanged):** Thinking Machines API at **$1.00 per 1M input / $4.05 per 1M output**, **83% cache discount**, blended **$0.72 per 1M** (7:2:1). Artificial Analysis flags both legs as "at the higher end" for open-weights models of similar size (class medians $0.44 in / $1.68 out). Weights are **Apache 2.0**.
- **Speed / latency:** **177.3 output tokens/s** (rank #9/116; class median 81.8 — "notably fast"); **TTFT 1.79s** (class median 2.01s — better than average). 140M index output tokens, in line with the class median.
- **Architecture:** Multimodal autoregressive transformer, 66 decoder layers, sparse MoE routing to **6 of 256 experts plus 2 shared experts**, hybrid local/global attention, **975B total / 41B active** parameters; Apache 2.0. BF16 and NVFP4 supported.

### Raw benchmarks found

> The official Thinking Machines launch post and model card report Inkling at reasoning effort 0.99. Artificial Analysis publishes a separate independent v4.3.2 composite for the `xhigh` variant. Both are kept distinct below.

**Official — Thinking Machines Lab Inkling launch post / model card:**

| Benchmark | Score |
| --- | --- |
| Terminal-Bench 2.1 | **63.8%** |
| SWE-bench Verified | **77.6%** |
| SWE-bench Pro (public) | **54.3%** |
| MCP Atlas | **74.1%** |
| BrowseComp (with context) | **77.1%** |
| GPQA Diamond | **87.9%** |
| AIME 2026 | **97.1%** |
| HLE (with tools / text-only) | **46.0% / 29.7%** |
| Global-MMLU-Lite | **88.7%** |
| IFBench | **79.8%** |
| SimpleQA Verified | **43.9%** |
| MMMU-Pro | **73.5%** |
| CharXiv RQ (with Python / without) | **82.0% / 78.1%** |
| Audio MC / MMAU / VoiceBench | **56.6% / 77.2% / 91.4%** |
| Tau3 Banking | **23.7%** |

**Independent — Artificial Analysis (component rows now published; index unchanged at 25.0, #29/116 open-weights of similar size, class median 18):**

- **Terminal-Bench 4.0: 1.0%** — effectively a zero
- **AutomationBench-AA: 5.0%**
- **AA-Briefcase: 832 Elo**; GDPval-AA **28.9% / 1079 Elo**; GDP.pdf **12.8%**
- AA Agentic Index **24.3%**; EnterpriseOps-Gym **38.0%**; AnalystAgent **23.8%**; Tau3 Banking **29.1%**
- Terminal-Bench 2.1 (AA): **55.1%**
- AA-SciCode **47.0%**; **AA Coding Index 52.1%**
- **AA-LCR v1.1: 77.3%**; **MLCR-AA 12.2%**; CritPt **5.4%**
- **AA-Omniscience: Index 2.0%, Accuracy 41.6%, Hallucination Rate 67.7%**
- AA-GPQA Diamond **87.2%**; AA-HLE **31.9%**

**Independent — Vals AI:**

- **SWE-bench 77.6%** — **exactly matches** the vendor figure, the only exact vendor/independent agreement recorded in this batch
- **LiveCodeBench 85.5%**
- **Terminal-Bench 2.1: 47.6%** — **16.2 points below** the vendor's 63.8%
- GPQA Diamond **87.1%**; MMLU-Pro **86.3%**

**Independent — other:**

- **FrontierSWE v2: 4.1%** (Proximal official leaderboard)
- CWE-bench v1 **37.0%** (Collinear)
- Design Arena Agentic Web Dev **1257**; Design Arena Website **1228**
- BenchLM overall **53.4/100**, rank **#82 of 889** (conservative — partial coverage); sibling **Inkling-Small 54.87**

Sources consulted: [BenchLM Inkling (updated 2026-10-10)](https://benchlm.ai/models/inkling), [Artificial Analysis Inkling](https://artificialanalysis.ai/models/inkling) and its component leaderboards (Terminal-Bench v2-1, Terminal-Bench v4-0, AutomationBench-AA, AA-Briefcase, GDPval-AA, GDP.pdf, SciCode, CritPt, MLCR-AA, Omniscience, AA-LCR), [Vals AI Inkling](https://www.vals.ai/models/thinkingmachines_inkling), [Proximal FrontierSWE leaderboard](https://www.frontierswe.com/), [Collinear CWE-bench v1](https://cwe-bench.com/), [Design Arena leaderboard](https://intelligence.ai/leaderboard/webapps), and [Thinking Machines Lab — Introducing Inkling](https://thinkingmachines.ai/news/introducing-inkling/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 82/100.** Reduced from 86. **MCP Atlas 74.1%** and **BrowseComp 77.1%** are genuine strengths and the prior 86 was defensible on that evidence alone. It no longer is, because Artificial Analysis's component rows have arrived and most of them are near the floor: **AutomationBench-AA 5.0%**, **Terminal-Bench 4.0 1.0%**, **AA-Briefcase 832 Elo** (among the lowest recorded anywhere in this dataset), **GDPval-AA 1079 Elo / 28.9%**, **GDP.pdf 12.8%**, **AnalystAgent 23.8%**, **Tau3 Banking 29.1%** (vendor quotes 23.7%), **EnterpriseOps-Gym 38.0%**, and **FrontierSWE v2 4.1%**. The model is strong at the agentic benchmarks Thinking Machines chose and weak on most of the ones they did not.
- **Reasoning: 85/100.** Reduced from 87. **GPQA Diamond is a genuine three-way agreement — 87.9% vendor, 87.2% Artificial Analysis, 87.1% Vals** — and **AIME 2026 at 97.1%**, **MMLU-Pro 86.3%**, **Global-MMLU-Lite 88.7%**, and **IFBench 79.8%** are all strong. The reduction is driven by the newly visible weaknesses: **HLE 29.7% text-only (46.0% with tools)**, **CritPt 5.4%**, **AA-Omniscience Index 2.0% with a 67.7% hallucination rate**, and an **AA Intelligence Index of 25.0** that sits well *below* the vendor's own benchmark table — exactly the caution the prior pass flagged, now confirmed.
- **Context window: 96/100.** Raised from 95. This resolves the standing gap the prior pass identified as the report's main weakness: **AA-LCR v1.1 at 77.3%** is a real long-context retrieval measurement, and the 1M window is verified. Held at 96 rather than higher because **MLCR-AA is only 12.2%** — the model handles long *general* context well and long *medical/technical* context poorly, which is a meaningful specialization limit on a 1M window.
- **Multimodal: 87/100.** Unchanged. **MMMU-Pro 73.5%**, **CharXiv RQ 82.0% (78.1% without tools)**, and the audio suite — **VoiceBench 91.4%, MMAU 77.2%, Audio MC 56.6%** — demonstrate unusually broad capability, and text + image + audio input is a wider surface than most models here. Deducted because the AA-omniscience hallucination rate of 67.7% undermines visual/document grounding specifically, and Design Arena signals (**1228** website, **1257** agentic web dev) are mid-table.
- **Coding: 82/100.** Reduced from 87. The good news is genuine and unusual: **Vals AI's SWE-bench at 77.6% exactly matches the vendor's 77.6%** — the only exact vendor/independent agreement anywhere in this batch — and **LiveCodeBench is 85.5%**. The bad news is the harder harnesses: **FrontierSWE v2 at 4.1%** is a near-total failure on real-world long-horizon engineering, **Terminal-Bench 4.0 at 1.0%**, and **Vals' Terminal-Bench 2.1 at 47.6%** against the vendor's 63.8%. **AA Coding Index 52.1%** and **SWE-bench Pro 54.3%** are mid-range. Competent repo-level coding; not an autonomous engineering model.
- **Cost efficiency: 72/100.** Unchanged. **$1.00 / $4.05 with an 83% cache discount** remains above the $0.44 / $1.68 open-weight class medians, and **975B total / 41B active** is genuinely hardware-intensive to self-host despite Apache 2.0 removing licence cost. The 83% cache discount, 177.3 tokens/s, and permissive licence keep it in the upper band rather than the top.
- **Overall Score: 86.4/100.** (82 + 85 + 96 + 87 + 82) / 5 = 432 / 5 = 86.4, down from 88.4. The prior pass scored on Thinking Machines' own benchmark table plus an aggregate index; the component rows have since told a different story. **Best fit: organizations able to operate large MoE infrastructure that need broad text/image/audio capability, fast inference (177 t/s, 1.79s TTFT), and verified SWE-bench-class repo coding.** **Do not use it for:** unattended agent loops (AutomationBench 5.0%, Terminal-Bench 4.0 1.0%, FrontierSWE 4.1%), knowledge work without verification (67.7% hallucination rate), or professional document analysis (AA-Briefcase 832 Elo). **Note Inkling-Small now exists** and scores slightly higher on BenchLM's composite — worth benchmarking both.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Inkling record (carrying per-benchmark attribution to Thinking Machines, Artificial Analysis, Vals AI, Proximal, Collinear, and Design Arena), the Artificial Analysis model page and individual component leaderboards, Vals AI, and the official launch post; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: conflicts retained — **Terminal-Bench 2.1 63.8% (Thinking Machines) vs. 55.1% (AA) vs. 47.6% (Vals)**, a three-way spread of 16 points on one benchmark, and the widest harness disagreement for this model; **Tau3 Banking 23.7% (vendor) vs. 29.1% (AA)**. **SWE-bench 77.6% is an exact vendor/independent match** and is recorded as agreement. The AA Intelligence Index is **unchanged at 25.0** while its component rows appeared for the first time. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals (BenchLM, Artificial Analysis, Vals AI, Proximal) rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Inkling_Recheck.md`, using the same headings.