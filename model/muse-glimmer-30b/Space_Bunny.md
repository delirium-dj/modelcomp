# Muse Glimmer 30B — findings by Space Bunny

- Source: Meta Superintelligence Labs / Muse Glimmer 30B
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 80.0 → 63.8, a fall of 16.2 points.** The prior pass scored this model entirely from **Meta's own launch post** and never cited an independent measurement. Artificial Analysis has now run it directly, and on the agentic axis the two sources diverge violently. **Meta: GDPval-AA 953 Elo, SkillsBench 44.3%. Artificial Analysis: GDPval-AA 790 Elo and 14.5% normalised, AutomationBench 6.8%, Terminal-Bench 4.0 0.5%, Briefcase 477 Elo, Agentic Index 10.5%.** A 30B local model cannot be both. The independent reading is the one carried. Restated: **Tool 86 → 55**, **Reasoning 82 → 60**, **Coding 88 → 62**, **Context 65 → 60**, **Multimodal 78 → 82 (up)**, **Cost 88 → 86**.

## Model card

- **Name:** Muse Glimmer 30B (high reasoning)
- **Short description:** Meta's dense open-weight multimodal model for autonomous agents, coding, tool use, and local deployment on consumer hardware. **Genuinely capable at perception, search, and single-shot code generation — and, on independent measurement, unable to sustain an autonomous agentic loop.** The gap between Meta's launch table and third-party agentic measurement is the single most important fact in this report.
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`; local Transformers/vLLM-style deployment.
- **Release / knowledge:** Released **August 2026** (OpenRouter 2026-08-09); knowledge cutoff **2026-01-04** — the most recent cutoff of any model in this batch, and worth noting given how weak the measured reasoning profile turns out to be.
- **IDs:** `meta-models/Muse-Glimmer-30B`; OpenRouter `meta/muse-glimmer-30b`.
- **Context window:** **131,072 tokens** — confirmed by both the official model card, OpenRouter, and BenchLM. **No larger-window result exists.**
- **Modalities:** Interleaved text and image input, text output; configurable reasoning effort, native tool/function calls, structured output. **No native audio.**
- **Pricing (verified 2026-10-10):** OpenRouter roughly **$0.30 input / $0.04 cached input / $1.10–$1.50 output** per 1M depending on provider. Quantized Apache-2.0 weights support local use.
- **Architecture:** Apache-2.0 dense causal transformer with a dedicated vision encoder, about **29.6B total parameters**; 4-bit variants target 24/32 GB hardware, full BF16 targets 64 GB VRAM.

### Raw benchmarks found

**Meta official (launch post / model card, high reasoning):**

- MCP-Atlas **75.5**; DeepSearch QA **74.6**; WildClawBench **47.6**; Gaia2 **43.3**
- OSWorld-Verified **65.9**; SkillsBench with skills **44.3**; Tau3-Banking **23.5**; GDPval-AA v2 **953 Elo**; IFBench **77.0**
- AIME 2026 **94.7%**; GPQA Diamond **83.5%**; HLE Text **22.0%**; Global-MMLU **81.3%**; AA-LCR **80.0%**
- SWE-bench Verified **76.0%**; SWE-bench Pro **51.2%**; Terminal-Bench 2.1 with Terminus2 **51.7%**; SciCode **43.6%**
- Beam128K **65.1%**
- CharXiv Reasoning **78.8**; ScreenSpot Pro **75.4**; OmniDocBench v1.5 **75.8**; MMMU Pro **74**

**Independent — new this pass (Artificial Analysis):**

Agent / tool use — **the decisive block, and uniformly weak:**

- **AA Agentic Index: 10.5%**
- **AA AutomationBench: 6.8%** — near-total failure on SaaS workflow automation
- **AA Terminal-Bench 4.0: 0.5%** — effectively zero, against Meta's own **Terminal-Bench 2.1 at 51.7%** on the same vendor table
- **AA Briefcase: 477 Elo** — for scale, GLM-5.3 scores **1,510** on the same benchmark
- **GDPval-AA: 14.5% normalised / 790 Elo** — against Meta's claimed **953 Elo**
- **GDP.pdf: 10.0%**; **AA EnterpriseOps-Gym: 34.7%**; **Tau3 Banking: 23.5%** (confirms Meta's figure); **Terminal-Bench 2.1: 51.7%** (confirms Meta's figure)

Reasoning / knowledge:

- **AA-Intelligence Index: 17.5**; **GPQA Diamond 83.5%** (confirms Meta); **HLE 22.0%** (confirms Meta)
- **AA-Omniscience Index: −32.8%**; **Accuracy: 27.0%**; **Hallucination Rate: 81.9%**
- **CritPt: 2.6%**; **AA-LCR: 83.3%** (above Meta's 80.0%); **MLCR-AA: 20.0%**

Coding:

- **AA Coding Index: 49.0%**; **AA-SciCode: 44.9%** (Meta reports 43.6% — close agreement)

Multimodal:

- **AA-MMMU-Pro: 74.3%** vs Meta's **74%** — *the closest agreement of any dimension, and evidence the perception results are real*

**BenchLM composite: 42.02/100, #126 of 889** (36 of 625 benchmarks). Meta siblings for scale: Muse Spark 1.2 **66.48**, Muse Spark 1.1 **66.16**, Muse Spark **60.00** — **all three substantially outrank Glimmer 30B**, which is Meta's open *local* model rather than its flagship line.

Sources consulted: [BenchLM Muse Glimmer 30B (updated 2026-10-10)](https://benchlm.ai/models/muse-glimmer-30b), [Meta AI Research Muse Glimmer launch post](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model), [Artificial Analysis Muse Glimmer](https://artificialanalysis.ai/models/muse-glimmer) and its AutomationBench / Briefcase / EnterpriseOps-Gym / Tau3-Banking / Terminal-Bench / GDPval-AA / LCR / MLCR / SciCode / MMMU-Pro / Omniscience leaderboards, and [OpenRouter Muse Glimmer 30B](https://openrouter.ai/meta/muse-glimmer-30b), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 55/100.** **Down from 86 — the largest correction in this report, and 31 points in one step.** The prior 86 was computed entirely from Meta's launch table: MCP-Atlas 75.5, DeepSearch QA 74.6, OSWorld-Verified 65.9. Those are real and they are good — this model genuinely does search well and genuinely does drive a computer. But independent agentic measurement is close to floor-level: **AutomationBench 6.8%**, **Terminal-Bench 4.0 0.5%**, **Briefcase 477 Elo**, **Agentic Index 10.5%**, **GDPval-AA 14.5% / 790 Elo against Meta's claimed 953**, **GDP.pdf 10.0%**. Read together, the picture is a model that excels at *single-step* perception and search tasks and collapses when asked to sustain a multi-step professional workflow — **Terminal-Bench 4.0 at 0.5% against Terminal-Bench 2.1 at 51.7% is the cleanest illustration of that in this batch.** Meta's own launch positioning calls it an "open agentic model"; the measurements support "open model that is good at tools, not good at agents."
- **Reasoning: 60/100.** Down from 82. **AIME 2026 at 94.7%** and **GPQA Diamond at 83.5%** are genuinely strong and are confirmed by Artificial Analysis on GPQA — a 30B dense open-weight model reaching those numbers is a real achievement. But: **Hallucination Rate 81.9%** with **Omniscience Index −32.8%** and **27.0% accuracy** is the governing fact, and it is now measured. The model is wrong about four questions in five and states the wrong answer confidently. **CritPt 2.6%**, **HLE 22.0%**, **Intelligence Index 17.5**, and **MLCR-AA 20.0%** all point the same way. A January 2026 knowledge cutoff and a 94.7% AIME score do not offset an 81.9% hallucination rate when the model's knowledge is not reliably retrievable.
- **Context window: 60/100.** Down from 65. The **131,072-token window** is confirmed three ways and is the model's one area of independent *outperformance*: **AA-LCR at 83.3% actually exceeds Meta's own 80.0%**, and Beam128K at 65.1% corroborates it. The reduction reflects **MLCR-AA at 20.0%**, a second long-context harness the model performs badly on — the same single-harness-versus-multi-harness pattern seen with Terminal-Bench here and with GLM-5.3's FrontierSWE in the previous batch. Retaining real retrieval at 128K is worth crediting; trusting one harness is not.
- **Multimodal: 82/100.** **Up from 78 — the one dimension where the independent data *confirms and slightly exceeds* the vendor claim.** **MMMU-Pro is 74% (Meta) and 74.3% (AA)** — a near-exact agreement between an independent lab and Meta on the same benchmark, which is the strongest possible evidence that the perception results are real and not launch-table curation. **CharXiv 78.8**, **ScreenSpot Pro 75.4**, and **OmniDocBench v1.5 75.8** cover charts, GUI grounding, and document parsing — a broad and demanding spread. Held below 90 because output is text-only and there is no audio.
- **Coding: 62/100.** Down from 62→**62, corrected from 88**. **SWE-bench Verified 76.0%** and **SWE-bench Pro 51.2%** are solid single-shot results and are corroborated, as is **SciCode (43.6% Meta / 44.9% AA)** and **Terminal-Bench 2.1 51.7%**. But the independent composite **AA Coding Index is 49.0%**, and the agentic picture (**Terminal-Bench 4.0 0.5%**) says the same thing as the Tool use dimension: strong at generating a patch, unable to run a session. The prior 88 substantially overstated a model that is good at coding *tasks* and bad at coding *agents*.
- **Cost efficiency: 86/100.** Down from 88. Economics are genuinely excellent and unchanged: **Apache-2.0 open weights**, ~**$0.30/$1.10–$1.50** hosted, and **4-bit quantization targeting 24/32 GB consumer hardware** — this is the cheapest way in this batch to run a genuinely multimodal 30B model locally. The small reduction reflects that hosted performance is weak relative to that price: **Briefcase 477 Elo and AutomationBench 6.8% mean you are not buying much capability even at zero marginal cost.**
- **Overall Score: 63.8/100.** (55 + 60 + 60 + 82 + 62) / 5 = 319 / 5 = 63.8, down from 80.0. **Best fit: local, privacy-sensitive multimodal perception — document parsing, chart reading, GUI grounding, and screenshot understanding — on 24–32 GB of consumer hardware.** Those are real and well-measured capabilities, and the Apache-2.0 licence plus 4-bit support makes them genuinely practical offline. **Four hard limits.** First, **it is not an agent model** — AutomationBench 6.8%, Terminal-Bench 4.0 0.5%, and Briefcase 477 Elo disqualify it from autonomous loops despite Meta's "open agentic model" positioning. Second, **81.9% hallucination rate** — never trust a factual assertion from it. Third, **131K context**, which is short by 2026 standards and only partly works (AA-LCR 83.3% but MLCR-AA 20.0%). Fourth, **if you are choosing a Meta open model, Muse Spark 1.2 (66.48) beats Glimmer 30B (42.02) by 24 points** — Glimmer is the hardware-constrained variant, and Spark is available on hosted infrastructure where Glimmer's agentic ceiling is not.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Muse Glimmer benchmark rows and their AutomationBench, Briefcase, EnterpriseOps-Gym, Tau3-Banking, Terminal-Bench, GDPval-AA, GDP.pdf, LCR, MLCR, SciCode, MMMU-Pro, and Omniscience leaderboards; BenchLM's Muse Glimmer 30B profile; Meta AI Research's official Muse Glimmer launch post and model card; and OpenRouter model metadata. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the central finding is a vendor/independent divergence, and both sides are reported rather than only the unflattering one.** The prior report cited **Meta's launch post exclusively** and cited no independent source at all. Where independent measurement *confirms* Meta, this report says so and credits it: **MMMU-Pro 74% vs 74.3%**, **SciCode 43.6% vs 44.9%**, **GPQA Diamond 83.5% on both**, **Tau3-Banking 23.5% on both**, **Terminal-Bench 2.1 51.7% on both**, and **AA-LCR 83.3% actually exceeding Meta's 80.0%**. Where it diverges, the independent number governs: **AutomationBench 6.8%, Terminal-Bench 4.0 0.5%, Briefcase 477 Elo, Agentic Index 10.5%, GDPval-AA 14.5% vs Meta's 953 Elo.** **Coding is corrected from 88 to 62** — the prior score treated SWE-bench Verified 76.0% as the coding story while ignoring that AA's Coding Index is 49.0% and Terminal-Bench 4.0 is 0.5%. **The Terminal-Bench 2.1 → 4.0 cliff (51.7% → 0.5%) and the AA-LCR 83.3% → MLCR-AA 20.0% spread are both flagged as single-harness-versus-multi-harness problems**, the same methodological pattern identified in GLM-5.3 in the previous batch; vendor tables that omit newer harness versions are systematically optimistic. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (BenchLM, Meta's launch post, Artificial Analysis) plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B_Recheck.md`, using the same headings.