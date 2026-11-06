# MiMo-V2.6-Pro — findings by Step 5 Preview

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro. Xiaomi's open-weight reasoning model, and the **best-ranked open-weight model in this batch** (BenchLM 56.44, #59 of 1009 — ahead of MiMo-V2.5-Pro's 55.12 and MiMo-V2.6-Flash's 54.78).
- **Short description:** A genuine specialist rather than a generalist: **outstanding at defensive cybersecurity** (CyberGym 94.0%, CyberGym-E2E-AA 78.6%, AA Cyber Index 56.1% — the joint-best cyber figures measured in this research series) and solid at agentic coding (Terminal-Bench 2.1 89.9%, Toolathlon-Verified 76.9%, OSWorld-Verified 82%), paired with a **negative AA-Omniscience index (−4.5)** — meaning it produces more incorrect than correct answers on knowledge questions. An open-weight cyber/coding workhorse, not a knowledge model.
- **Provider / access:** Weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`), and OpenCode Zen (`xiaomi/mimo-v2.6-pro`) at **$0.435 input / $0.87 output / $0.217 cached** — roughly 1/23rd of GPT-5.5 Pro's rate card. Also on OpenRouter (`xiaomi/mimo-v2.6-pro`).
- **Release / knowledge:** release date not restated on the model card; the V2.6 generation is Xiaomi's 2026 line. Knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (Zen, OpenRouter); `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face). No Free ID — paid, but open weights are self-hostable.
- **Context window:** **1M tokens** (BenchLM). Max output not published.
- **Modalities:** the model card does not state a modality set, and only one visual benchmark (Design Arena Website 1,307 Elo) exists — so multimodal coverage is **inferred from a single web-design result rather than vendor-documented**, and is recorded as such below.
- **Pricing (as of 2026-11-05):** **$0.435 / $0.217 / $0.87 per 1M** (input / cached read / output) on Zen. Methodology anchors put $0.435/$0.87 between ~$0.60/$2.20 (≈92) and ~$0.10/$0.20 (≈97–99). Self-hosting is available under the model card's licence.
- **Architecture:** **open weights** (MiMo-V2.6-Pro-RL); parameter count undisclosed in the sources checked.

### Raw benchmarks found

Xiaomi's MiMo-V2.6 technical report is the primary source for most rows (so these are **vendor-run**), with Artificial Analysis, STEMBench, Bug Hunt Bench and OpenRouter supplying independent measurements. Vendor and AA figures are shown separately where both exist.

Agent / tool use — **a genuinely strong dimension**:

- **Terminal-Bench 2.1: 89.9%** (Xiaomi) — clears the 88%+ frontier reference
- **GDPval-AA: 1,673 Elo** (Xiaomi) / **59.2%** normalized (AA) — 77 Elo points under the 1,750 frontier reference
- **CyberGym: 94.0%** (Xiaomi) — the joint-highest CyberGym figure in this research series
- **CyberGym-E2E-AA: 78.6%** (AA); **AA Cyber Index: 56.1%** — the highest cyber index here; CWE-Bench-AA: 63.3%; DeepsecBench-AA: 26.2%
- **Toolathlon-Verified: 76.9%**; **OSWorld-Verified: 82%**; JobBench: **62.0%**
- AutomationBench: 53.1% (vendor) / **AA AutomationBench 58.6%**; AA Briefcase: **1,511 Elo**
- **Agents' Last Exam: 31.6%**; **Terminal-Bench 4.0: 34.90%** (vendor) / **34.8%** (AA — the two agree closely here)
- ExploitGym: 17.8%; GDP.pdf: **19.2%**; AA-AnalystAgent: **37.5%**
- **τ³-Banking, BrowseComp, MCP-Atlas, Claw-Eval: no verified public score found**

Reasoning / knowledge — **split, and the split is the finding**:

- **AA-HLE: 49.4%** — clears the 40%+ frontier reference
- **AA-LCR: 86.3%** — the highest long-context-reasoning figure measured in this batch
- **AA-Omniscience index: −4.5** — a *negative* score, meaning more incorrect than correct answers; accuracy **34.8%**, hallucination rate **60.2%**
- Artificial Analysis Intelligence Index: **46.3** (vendor-cited); CritPt: **26.6%**; MLCR-AA: **12.8%**; STEMBench: 2.17
- **GPQA Diamond, ARC-AGI-1/2, MMLU-Pro, FrontierMath, MRCR: no verified public score found** — the entire frontier-reference set except HLE is missing

Coding:

- **Terminal-Bench 2.1: 89.9%** — clears the 85% reference
- **AA-SciCode: 60.9%** — clears the 55% reference
- **DeepSWE: 71.9%** — 2.1 points under the 74% reference
- CyberGym: 94.0%; CWE-Bench-AA: 63.3%; ProgramBench: **26.5%**; Bug Hunt Bench: **22.7 fixes**
- **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, AA Coding Index, Vibe Code Bench, FrontierCode: no verified public score found**

Multimodal — **one benchmark, total**:

- Design Arena (website): **1,307 Elo** (OpenRouter)
- **MMMU-Pro, CharXiv, BabyVision, ZeroBench, ParseBench, ExtractBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong, and specifically strong in defensive security. Terminal-Bench 2.1 89.9% clears the 88% frontier reference, and CyberGym 94.0% / CyberGym-E2E-AA 78.6% / AA Cyber Index 56.1% are the best cyber figures in this batch. Toolathlon-Verified 76.9%, OSWorld-Verified 82% and JobBench 62.0% corroborate. Capped because GDPval-AA 1,673 Elo is 77 points under the reference, **τ³-Banking is missing**, and Agents' Last Exam 31.6%, Terminal-Bench 4.0 34.9% and AA-AnalystAgent 37.5% show the professional-workflows layer is weak.
- **Reasoning: 68/100.** Genuinely split, and the negative Omniscience index is the decisive fact. AA-HLE 49.4% clears the 40% reference and AA-LCR 86.3% is the best long-context reasoning in this batch, but the **AA-Omniscience index is −4.5** — more incorrect than correct answers — with 34.8% accuracy, and **GPQA Diamond, ARC-AGI, MMLU-Pro, FrontierMath and MRCR are all absent**, so four of the methodology's reasoning references cannot be checked. An AA Intelligence Index of 46.3 and CritPt 26.6% sit in the mid band. A model that reasons competently about long context while being actively unreliable as a knowledge source.
- **Context window: 97/100.** 1M-token tier with **AA-LCR 86.3%, the highest measured long-context reasoning in this batch** — above GPT-6 Astra's 80.7%, Claude Opus 5.5's 84.7% and Claude Sonnet 5.5's 82.7%. Held just under 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 72/100.** Scored at the top of the methodology's "+image in" 60–70 band and marginally above it, on the strength of a 1,307-Elio Design Arena web-design result, which requires image understanding. **Explicitly an inference, not a vendor claim**: the model card does not state a modality set, and MMMU-Pro, CharXiv, BabyVision, ZeroBench, ParseBench and ExtractBench are all unpublished. If the card confirms video/audio input this would move to the 90s; if it confirms text-only, it drops to the 10–20 band. Recorded as unverified.
- **Coding: 84/100.** Terminal-Bench 2.1 89.9% clears the 85% reference and AA-SciCode 60.9% clears the 55% reference, with CyberGym 94.0% and CWE-Bench-AA 63.3% showing real security-adjacent engineering strength. Capped by DeepSWE 71.9% (2.1 points under the 74% reference), ProgramBench 26.5%, Bug Hunt Bench 22.7, and the absence of SWE-bench Verified, SWE-bench Pro, LiveCodeBench, the AA Coding Index and Vibe Code Bench — so its position on the most-cited coding references is unknown.
- **Cost efficiency: 95/100.** $0.435/$0.87 per 1M with $0.217 cached reads sits between the methodology's ~$0.60/$2.20 (≈92) and ~$0.10/$0.20 (≈97–99) anchors, and — unlike every closed model at a similar score — **the weights are open and self-hostable**, so the escape hatch is real rather than theoretical. Held just under the 97–99 tier because there is no $0 route and the $0.435 input price is still above MiniMax M3.1 Flash's $0.15.
- **Overall Score: 81/100.** (82 + 68 + 97 + 72 + 84) / 5 = 80.6 → **81** → 81. Recommendation: the best **open-weight defensive-security and agentic-coding** model in this research series, and outstanding value at $0.435/$0.87 with self-hosting available — pick it for code auditing, vulnerability patching, CTF-style work and repository repair where its CyberGym 94.0% and CWE-Bench-AA 63.3% are directly relevant. Do not use it as a knowledge or factual assistant: its **AA-Omniscience index is negative (−4.5)**, meaning it is wrong more often than right, and every reasoning frontier reference except HLE is unmeasured.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Xiaomi's MiMo-V2.6 technical report as the primary source (which supplies most rows, so these are vendor-run and labelled as such), cross-checked against BenchLM's 37-row catalog (attributing independent numbers to Artificial Analysis, STEMBench, Bug Hunt Bench and OpenRouter) and OpenCode Zen's pricing table. Vendor and AA agreement is noted where it exists (Terminal-Bench 4.0 34.90% vs 34.8%). Missing benchmarks are named rather than substituted — GPQA Diamond, ARC-AGI-1/2, MMLU-Pro, FrontierMath, MRCR, SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, Vibe Code Bench, FrontierCode, τ³-Banking, BrowseComp, MCP-Atlas, Claw-Eval and every multimodal benchmark except Design Arena. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Pro-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of most benchmark rows)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [BenchLM — MiMo-V2.6-Pro benchmark scores (37 rows, 56.44/100, #59/1009)](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [STEMBench120 October 28, 2026 snapshot audit](https://www.ulam.ai/stembench#full-run-results)
  - [Bug Hunt Bench public data](https://bughunt.productcompass.pm/data/benchmark.json)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
