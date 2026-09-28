# MiMo-V2.6-Pro — findings by GLM 5.3 Flash

- Source: Xiaomi (`XiaomiMiMo/MiMo-V2.6-Pro-RL`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (RL checkpoint; Zen has no free tier for this model)
- **Short description:** Xiaomi's flagship checkpoint of the MiMo-V2.6 series — a 1-trillion-parameter omnimodal reasoning MoE built to "scale reinforcement learning toward self-improvement" with groupwise agentic grading (GRS/GAR) and MOPD2 distillation. Top use cases: agentic coding, general agents, cybersecurity, and long-horizon multimodal runs. Sibling of MiMo-V2.6-Flash-RL; distinct from the tracked `mimo-v2.5-free`.
- **Provider / access:** HuggingFace/ModelScope weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`); also on Xiaomi MiMo Open Platform API and OpenRouter. No Zen Free ID was verified during research (Zen lists no paid `mimo-v2.6-pro` either).
- **Release / knowledge:** Published September 2026 (HF MiMo-V2.6 collection, ~7 days before 2026-09-28); no verified knowledge cutoff found.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (no Free ID exists on Zen for this model)
- **Context window:** 1M tokens (verified via HF model card architecture table — Max Context Length 1M).
- **Modalities:** Text, image, video, and audio input; text output; reasoning yes (RL reasoning model, `--reasoning-parser mimo`); tool calls yes (`--tool-call-parser mimo`, `--enable-auto-tool-choice`); JSON mode not independently verified.
- **Pricing (as of 2026-09-28):** no verified public pricing found (paid-only; OpenRouter/Xiaomi platform pricing not published in readable form during research).
- **Architecture:** Sparse MoE, 1.02T total / 42B activated parameters (HF safetensors lists 1T total); hybrid SWA/GA backbone (70 layers, sliding window 128, 384 routed experts / 8 activated); 681M MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer speculative MTP decoder. MIT license (open weights).

### Raw benchmarks found

> Verified via the official HF model card for `XiaomiMiMo/MiMo-V2.6-Pro-RL` (vendor-published "MiMo-V2.6 Pro" column; harnesses: harborframework Terminal-Bench 2.1/4.0, datacurve deep-swe, HKUST Toolathlon) and the HF eval-results hub.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (HF model card + harborframework/terminal-bench-2.1 hub; beats Claude Opus 5 89.1%, GPT-5.6 Sol 88.8%, Fable 5 84.3%)
- Terminal Bench 4.0: **34.9%** (HF model card + harborframework hub; vs Claude Opus 5 49.0%, Fable 5 42.4%)
- Toolathlon-Verified: **76.9%** (HF model card + HKUST-nlp/Toolathlon; vs Claude Opus 5 80.6%, Fable 5 77.9%)
- GDPval-AA 2.1: **1673 Elo** (HF model card; vs Claude Opus 5 1708, GPT-5.6 Sol 1588, Fable 5 1595)
- AutomationBench v1.0.6: **53.1%** (HF model card; beats Claude Opus 5 50.3%, GPT-5.6 Sol 45.8%)
- OSWorld-Verified: **80.8%** (HF model card; vs Claude Opus 5 83.4%, Fable 5 86.0%)
- JobBench: **62.0%**; Agents' Last Exam: **31.6%** (HF model card)
- Cybersecurity (supplementary): CyberGym **94.0%**, MiMo Cyber Bench **80.2%**, ExploitBench **47.9%**, ExploitGym **17.8%**, SEC Bench Pro **66.3%** (HF model card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **71.9%** (HF model card + datacurve/deep-swe eval hub; vs Claude Opus 5 74.0%, GPT-5.6 Sol 73.0%, Fable 5 70.0%)
- MiMo Code Bench: **63.2%** (HF model card; vs Claude Opus 5 68.6%, GPT-5.6 Sol 59.3%)
- ProgramBench: **26.5%** (HF model card; vs Claude Opus 5 37.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- MiMo VisualCoding (supplementary): **72.3%** (HF model card)

Long context:

- No long-context retrieval reported (1M window advertised, but no MRCR/RULER/GraphWalks retrieval value was found for this model)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.9% reaches the ~88%+ frontier reference (beating Claude Opus 5) and GDPval-AA 1673 Elo trails Opus 5's 1708 only slightly, with Toolathlon 76.9% and OSWorld 80.8% corroborating; capped by mid-tier Terminal-Bench 4.0 (34.9%) and AutomationBench (53.1%).
- **Reasoning: 58/100.** No verified GPQA Diamond, HLE, AA Intelligence Index, or math-suite numbers exist for the Pro checkpoint — only Agents' Last Exam 31.6%; scored at the conservative mid band rather than guessing.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100), capped at the band floor because no ≥98%-retrieval measurement at 512K+ was published.
- **Multimodal: 90/100.** Text, image, video, and audio input with verified dedicated ViT (681M) and audio encoders meets the omni-tier floor (90–100); text-only output and no measured multimodal benchmark keep it at the floor.
- **Coding: 78/100.** DeepSWE v1.1 71.9% and Terminal-Bench 2.1 89.9% are strong, but the DeepSWE frontier reference is 74%+ and no verified LiveCodeBench/SciCode exists — capped in the upper-mid band just under the frontier.
- **Cost efficiency: 50/100.** Provisional midpoint — paid-only with no verified public pricing found (Cost never counts toward Overall, so the quality dims stand; provisional-cost phrasing has repo precedent).
- **Overall Score: 81.8/100.** Mean of the five non-cost dims (88 + 58 + 95 + 90 + 78) / 5 = 81.8 — best fit as an open-weights omnimodal agentic flagship for self-hosting on coding, cybersecurity, and tool-driven automation; pair with a frontier reasoner for deep science/math reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (official HF model card for XiaomiMiMo/MiMo-V2.6-Pro-RL with eval-results hub, XiaomiMiMo HF org page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
