# MiMo-V2.6-Pro — findings by GLM 5.3 Flash

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Pro-RL`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (RL checkpoint; Zen has no free tier for this model)
- **Short description:** Xiaomi's flagship checkpoint of the MiMo-V2.6 series — a 1-trillion-parameter omnimodal reasoning MoE built to "scale reinforcement learning toward self-improvement" with groupwise agentic grading (GRS/GAR) and MOPD2 distillation. Top use cases: agentic coding, general agents, cybersecurity, and long-horizon multimodal runs. BenchLM ranks it #11 of 889 (74.15) — the strongest open-weights model in its coverage. Sibling of MiMo-V2.6-Flash-RL; distinct from the tracked `mimo-v2.5-free`.
- **Provider / access:** HuggingFace/ModelScope weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`); also on Xiaomi MiMo Open Platform API and OpenRouter. No Zen Free ID was verified during research (Zen lists no paid `mimo-v2.6-pro` either).
- **Release / knowledge:** Published September 2026 (HF MiMo-V2.6 collection); no verified knowledge cutoff found.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (no Free ID exists on Zen for this model)
- **Context window:** 1M tokens (verified via HF model card architecture table — Max Context Length 1M; BenchLM concurs).
- **Modalities:** Text, image, video, and audio input; text output; reasoning yes (RL reasoning model, `--reasoning-parser mimo`); tool calls yes (`--tool-call-parser mimo`, `--enable-auto-tool-choice`); JSON mode not independently verified.
- **Pricing (as of 2026-10-11):** verified — "the MiMo-V2.6 series keeps the API pricing of the V2.5 series" (Xiaomi official mimo.xiaomi.com/mimo-v2-6): $0.435 in / $0.87 out per 1M, or the $1.00/$3.00 route (V2.5-Pro platform pricing); paid-only, no Zen Free ID.
- **Architecture:** Sparse MoE, 1.02T total / 42B activated parameters (HF safetensors lists 1T total); hybrid SWA/GA backbone (70 layers, sliding window 128, 384 routed experts / 8 activated); 681M MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer speculative MTP decoder. MIT license (open weights).

### Raw benchmarks found

> Verified via the official HF technical report for `XiaomiMiMo/MiMo-V2.6-Pro-RL` (benchlm.ai cites `MiMo_V2_6_technical_report.pdf`, updated 2026-10-10) and Artificial Analysis independent boards.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (HF technical report + harborframework hub; beats Claude Opus 5 89.1%, GPT-5.6 Sol 88.8%, Fable 5 84.3%)
- Terminal-Bench 4.0: **34.9%** (vendor) / **34.8%** (AA independent — corroborated, vs Claude Opus 5 59.6)
- Toolathlon-Verified: **76.9%** (HF + HKUST-nlp/Toolathlon; vs Claude Opus 5 80.6%)
- GDPval-AA 2.1: **1673 Elo** (technical report); AA-normalized: **59.3%** (AA)
- AA-Briefcase v1.1: **1516 Elo** (AA, independent)
- AA AutomationBench-AA: **58.6%** (AA, independent); AutomationBench v1.0.6: **53.1%** (vendor; beats Claude Opus 5 50.3%)
- OSWorld-Verified: **82%** (technical report via benchlm.ai; the 2026-10-08 pass read 80.8% from the model card — minor variance, same harness)
- JobBench: **62.0%**; Agents' Last Exam: **31.6%** (technical report)
- AA GDP.pdf: **19.2%** (AA)
- Cybersecurity (supplementary): CyberGym **94.0%**, MiMo Cyber Bench **80.2%**, ExploitBench **47.9%**, ExploitGym **17.8%**, SEC Bench Pro **66.3%** (technical report)

Reasoning / knowledge:

- AA-HLE: **49.4%** (AA, independent — fills the gap the 2026-10-08 pass marked missing)
- Artificial Analysis Intelligence Index: **46.3** (AA leaderboard via benchlm.ai, corroborating the vendor-cited 46.32 "strongest open-source model" claim)
- AA-LCR v1.1: **86.3%** (AA, independent — best measured in this repo, ahead of Fable 5.1's 85.3%)
- CritPt: **26.6%**; MLCR-AA: **18.3%** (AA — both weak)
- AA-Omniscience: **34.8% accuracy / 40.6% non-hallucination row / 8.4 index** (AA — weak)
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE v1.1: **71.9%** (technical report + datacurve/deep-swe hub; vs Claude Opus 5 74.2%, GPT-5.6 Sol 73.0%)
- AA-SciCode: **60.9%** (AA, independent — fills the SciCode gap)
- MiMo Code Bench: **63.2%** (technical report); ProgramBench: **26.5%** (weak)
- Terminal-Bench 2.1: **89.9%** (as above)
- LiveCodeBench / Vibe Code Bench: no verified public score found
- MiMo VisualCoding (supplementary): **72.3%** (technical report)
- Bug Hunt Bench: **22.7 fixes**

Long context:

- AA-LCR v1.1: **86.3%** (AA — best measured in this repo; fills the 2026-10-08 gap)
- MRCR/RULER/GraphWalks at window length: no verified public score found

Multimodal:

- Design Arena Website: **1314** (OpenRouter); MiMo VisualCoding 72.3% (as above); no MMMU-Pro/CharXiv-class row published

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.9% reaches the ~88%+ frontier reference (beating Claude Opus 5) and GDPval-AA 1673 (normalized 59.3%) trails Opus 5 slightly, with Toolathlon 76.9% and OSWorld 82% corroborating; AA's independent TB4.0 34.8% confirms the vendor number and caps it.
- **Reasoning: 70/100.** (Was 68 on the prior pass.) New AA rows strengthen the case: AA-HLE 49.4% clears the 40%+ frontier reference and AA-LCR 86.3% is the best long-context reasoning measured in this repo; the Index 46.3 stands as the open-weights high-water mark — but MLCR 18.3%, CritPt 26.6% and the weak Omniscience index (8.4) plus the still-missing GPQA cap it in the low 70s.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100); AA-LCR 86.3% is strong measured evidence; no MRCR/RULER at 512K+ keeps it at the band floor.
- **Multimodal: 90/100.** Text, image, video, and audio input with verified dedicated ViT (681M) and audio encoders meets the omni-tier floor (90–100); text-only output and no measured MMMU-Pro-class benchmark keep it at the floor.
- **Coding: 78/100.** DeepSWE v1.1 71.9% and Terminal-Bench 2.1 89.9% are strong, AA-SciCode 60.9% now adds measured evidence, but the DeepSWE frontier reference is 74%+ and ProgramBench 26.5% is weak — upper-mid band just under the frontier.
- **Cost efficiency: 88/100.** Verified V2.5-series API pricing ($0.435/$0.87, or the $1.00/$3.00 route) maps near the ~$1.25/$4.25 ≈ 88 reference; ~$0.13 per AA index task (45× cheaper than Claude Opus 5 at max effort) makes it an exceptional price/quality open-weights pick.
- **Overall Score: 84.2/100.** (Was 83.8 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (88 + 70 + 95 + 90 + 78) / 5 = 421/5 = 84.2 — raised on the 2026-10-11 second pass as new AA rows (HLE 49.4, LCR 86.3, SciCode 60.9) convert reasoning/coding gaps into measured evidence. Best fit: an open-weights omnimodal agentic flagship for self-hosting on coding, cybersecurity, and tool-driven automation at exceptional price/quality; pair with a frontier reasoner for deep science/math reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Xiaomi MiMo-V2.6 technical report, Artificial Analysis independent leaderboards (HLE/LCR/SciCode/Omniscience/Briefcase) via benchlm.ai, OpenRouter benchmarks, plus the prior 2026-10-08 pass on the official HF model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
