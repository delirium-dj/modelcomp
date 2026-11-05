# MiMo-V2.6-Flash — findings by Step 5 Preview

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Flash-RL`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash. The Flash sibling of MiMo-V2.6-Pro, and **the best-ranked open-weight Flash-tier model in this research series** (BenchLM 54.78, #76 of 1009 — above MiMo-V2-Flash's 39.3 and MiMo-V2.5's not-computed, though below its own Pro's 56.44).
- **Short description:** A narrow specialist with two standout results — **CyberGym 95.1% (the highest figure measured anywhere in this research series, above MiMo-V2.6-Pro's 94.0%)** and **Terminal-Bench 2.1 87.6%** — set against the series' **worst knowledge-reliability profile (AA-Omniscience index −10.8, accuracy 27.2%)**. A cheap, open-weight defensive-security and terminal-coding tool that must never be used as a factual assistant.
- **Provider / access:** Weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), Xiaomi's own API, OpenRouter, and OpenCode Zen (`xiaomi/mimo-v2.6-flash`) at **$0.14/$0.28 per 1M** — **the cheapest rate card in this entire research series**. Self-hosting available.
- **Release / knowledge:** release date not restated on the model card; the V2.6 generation is Xiaomi's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `xiaomi/mimo-v2.6-flash` (Zen); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (Hugging Face); `xiaomi/mimo-v2.6-flash` (Openrouter).
- **Context window:** **1M tokens** (BenchLM). Max output not published.
- **Modalities:** the model card does not state a modality set, and only **one** benchmark (AA-MMMU-Pro 73.1%) touches vision. **Recorded as inferred-in-place rather than vendor-verified.**
- **Pricing (as of 2026-11-05):** **$0.14 input / $0.28 output per 1M** on Zen (per the LLMLearner editorial, which cites Xiaomi's reported MiMo V2.6 Flash rate). **Open weights** allow self-hosting. Methodology anchors put $0.14/$0.28 between ~$0.10/$0.20 (≈97–99) and ~$0.60/$2.20 (≈92).
- **Architecture:** **open-weight** MoE; parameter count undisclosed in the sources checked.

### Raw benchmarks found

Xiaomi's MiMo-V2.6 technical report is the primary source (so those rows are **vendor-run**), with Artificial Analysis supplying the independent rows. **Only 24 benchmarks exist** — the second-thinnest evidence base in this batch after Muse Spark 1.1's 40.

Agent / tool use — **a genuinely strong dimension**:

- **CyberGym: 95.1%** (vendor) — **the highest CyberGym figure measured anywhere in this research series**, above MiMo-V2.6-Pro's 94.0% and DeepSeek V4.1 Flash's 88.1%
- **Terminal-Bench 2.1: 87.6%** (vendor) — 0.4 points short of the 88%+ frontier reference, and the second-highest TB2.1 in this batch after GPT-5.6 Terra's 88.0%
- **OSWorld-Verified: 80.8%** (vendor) — identical to Muse Spark 1.1's figure, though on a different model
- Toolathlon-Verified: **73.6%**; JobBench: 61.2%
- **AutomationBench: 52.3%** (vendor); Agents' Last Exam: 27.6%
- **Terminal-Bench 4.0: 28.8%** — a 58.8-point drop from its own TB2.1 result on the newer harness
- **ExploitGym: 6.0%**; **GDPval-AA: 55.4% normalized** (AA; no Elo figure published) — under the 1,750+ reference
- **τ³-Banking, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, MazeBench: no verified public score found** — so two of three frontier references are unmeasured

Reasoning / knowledge — **the worst reliability in this research series**:

- **AA Intelligence Index: 26.7%**; **AA-HLE: 35.1%** — well under the 40%+ frontier reference
- **AA-Omniscience: index −10.8, accuracy 27.2%, hallucination rate 52.2%** — **a negative index of −10.8 is the worst measured anywhere in this research series**, meaning substantially more incorrect than correct answers
- AA-LCR: **74.3%**; **CritPt: 12.0%**
- **GPQA Diamond, HLE (vendor), FrontierMath, ARC-AGI, MRCR: no verified public score found** — so the primary reasoning reference and every maths/physics reference are absent

Coding — strong at terminal work, weak elsewhere:

- **Terminal-Bench 2.1: 87.6%** — clears the 85% reference
- DeepSWE: **67.9%** — 6.1 points under the 74% reference
- **AA-SciCode: 51.3%** — 3.7 points under the 55% reference
- ProgramBench: 26.0%; Terminal-Bench 4.0: 28.8%
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro: no verified public score found** — so the 70%-index and SWE-bench references cannot be checked

Multimodal:

- **AA-MMMU-Pro: 73.1%** — the only measured visual result
- **CharXiv, ExtractBench, ZeroBench, BabyVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 74/100.** A strong, narrow agentic profile. **CyberGym 95.1% is the highest figure measured anywhere in this research series**, Terminal-Bench 2.1 87.6% is just under the 88% reference, and OSWorld-Verified 80.8%, Toolathlon-Verified 73.6% and JobBench 61.2% corroborate. Capped because GDPval-AA has only a normalized figure (55.4%, no Elo) against the 1,750 reference, **τ³-Banking, BrowseComp, MCP-Atlas and Claw-Eval are entirely absent**, and Agents' Last Exam 27.6%, Terminal-Bench 4.0 28.8% and ExploitGym 6.0% show the newer agentic harnesses fail badly.
- **Reasoning: 45/100.** Well below the methodology's mid band, and the worst reasoning score in this batch. **AA-HLE 35.1% fails the 40%+ reference**, and the **AA-Omniscience index is −10.8 with 27.2% accuracy** — substantially more incorrect than correct answers, the worst figure measured in this research series. AA Intelligence Index 26.7%, CritPt 12.0%, and **GPQA Diamond, FrontierMath, ARC-AGI and MRCR are all unpublished**. A model that executes tasks reliably and cannot be trusted to report facts.
- **Context window: 95/100.** 1M-token tier at the tier floor: the only long-context evidence is AA-LCR 74.3% — the weakest in this batch — with no MRCR, GraphWalks or published max-output limit. The window's size is asserted by BenchLM; its usable depth is essentially unmeasured.
- **Multimodal: 68/100.** Scored at the top of the methodology's "+image in" 60–70 band on the basis of a single AA-MMMU-Pro figure of 73.1%, and **explicitly an inference rather than a vendor claim**: the model card states no modality set, and no other visual benchmark exists. If Xiaomi confirms video or audio input this would jump to the 75–90 tier; if it confirms text-only, it collapses to the 10–20 band.
- **Coding: 70/100.** Mid-band. Terminal-Bench 2.1 87.6% clears the 85% reference and CyberGym 95.1% shows real security-adjacent engineering strength. Capped by DeepSWE 67.9% (under the 74% reference), AA-SciCode 51.3% (under the 55% reference), ProgramBench 26.0%, Terminal-Bench 4.0 28.8%, and no SWE-bench Verified, AA Coding Index or LiveCodeBench figure.
- **Cost efficiency: 97/100.** **$0.14/$0.28 per 1M is the cheapest rate card in this entire research series** — half MiniMax M3.1 Flash's $0.15/$0.60 and an eighth of GPT-5.5 Pro's $30/$180 — sitting at the top of the methodology's ~$0.10/$0.20 (≈97–99) anchor with open weights beside it. Held just under 99 because it is not a $0 route and no published cost-per-task measurement exists.
- **Overall Score: 70.4/100.** (74 + 45 + 95 + 68 + 70) / 5 = 70.4 → **70**. Recommendation: an outstanding **cheap defensive-security and terminal-coding specialist** — the highest CyberGym in this series, Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8% and open weights at $0.14/$0.28, the cheapest card measured. Two hard cautions: **its AA-Omniscience index is −10.8**, the worst knowledge-reliability figure anywhere in this research, so it must be firewalled from any factual or retrieval-facing workload; and its multimodal, coding-index and reasoning coverage is so thin (24 benchmarks, mostly vendor-run) that the 70 is a floor on evidence, not a ceiling on ability.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Xiaomi's MiMo-V2.6 technical report as the primary source (so those rows are vendor-run and labelled as such — the same report also supplies MiMo-V2.6-Pro's numbers, a shared-lineage relationship recorded explicitly here rather than presenting the report's figures as independently measured for the Flash variant), cross-checked against BenchLM's 24-row catalog (attributing independent numbers to Artificial Analysis) and OpenCode Zen's pricing table. The series-worst Omniscience index (−10.8) and the 58.8-point Terminal-Bench 2.1-to-4.0 drop are recorded rather than smoothed over. Missing benchmarks (τ³-Banking, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, MazeBench, GPQA Diamond, HLE vendor-run, FrontierMath, ARC-AGI, MRCR, SWE-bench Verified, AA Coding Index, LiveCodeBench, and all multimodal benchmarks except AA-MMMU-Pro) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Flash-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of most benchmark rows; also supplies MiMo-V2.6-Pro's numbers)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [BenchLM — MiMo-V2.6-Flash benchmark scores (24 rows, 54.78/100, #76/1009)](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Artificial Analysis — MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
