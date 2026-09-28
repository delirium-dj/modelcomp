# MiMo-V2.6-Flash — findings by GLM 5.3 Flash

- Source: Xiaomi (`mimo-v2.6-flash-free`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (RL checkpoint; Zen free tier "MiMo-V2.6-Flash Free")
- **Short description:** Xiaomi's efficiency-balanced checkpoint of the MiMo-V2.6 series — an omnimodal reasoning MoE built to "scale reinforcement learning toward self-improvement" with groupwise agentic grading (GRS/GAR) and MOPD2 distillation. Top use cases: agentic coding, general agents, cybersecurity, and long-horizon multimodal runs. Sibling of MiMo-V2.6-Pro-RL; distinct from the tracked `mimo-v2.5-free` (Xiaomi MiMo-V2.5 Free).
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.6-flash-free` (`https://opencode.ai/zen/v1/chat/completions`, Chat Completions, `@ai-sdk/openai-compatible`); also on HuggingFace/ModelScope, Xiaomi MiMo Open Platform API, and OpenRouter. A paid `mimo-v2.6-flash` tier was not verified on Zen pricing during research.
- **Release / knowledge:** Published September 2026 (HF MiMo-V2.6 collection, Flash-RL ~7 days before 2026-09-28, Flash-MOPD 1 day before); no verified knowledge cutoff found.
- **IDs:** `opencode/mimo-v2.6-flash-free` (Zen Free ID verified in Zen docs, 2026-09-28); weights: `XiaomiMiMo/MiMo-V2.6-Flash-RL`, `XiaomiMiMo/MiMo-V2.6-Flash-MOPD`.
- **Context window:** 1M tokens (verified via HF model card architecture table — Max Context Length 1M).
- **Modalities:** Text, image, video, and audio input; text output; reasoning yes (RL reasoning model, `--reasoning-parser mimo`); tool calls yes (`--tool-call-parser mimo`, `--enable-auto-tool-choice`); JSON mode not independently verified.
- **Pricing (as of 2026-09-28):** Free on OpenCode Zen for a limited time ($0 in/out); caveat — during its free period collected data may be used to improve the model (Zen privacy notes). Paid equiv. not verified.
- **Architecture:** Sparse MoE, 309B total / 15B activated parameters (HF safetensors lists 311B total); hybrid SWA/GA backbone (48 layers, sliding window 128, 256 routed experts / 8 activated); 681M MiMo ViT vision encoder; 308M AudioTokenizer + 127M audio patch encoder; 5-layer speculative MTP decoder. MIT license (open weights).

### Raw benchmarks found

> Verified via the official HF model card for `XiaomiMiMo/MiMo-V2.6-Flash-RL` (vendor-published "MiMo-V2.6 Flash" column; harnesses: harborframework Terminal-Bench 2.1/4.0, datacurve deep-swe, HKUST Toolathlon) and the HF eval-results hub entries.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (HF model card, harborframework/terminal-bench-2.1; vs Pro 89.9%, Claude Opus 5 89.1%, GPT-5.6 Sol 88.8%)
- Terminal Bench 4.0: **28.8%** (HF model card; vs Pro 34.9%, Claude Opus 5 49.0%)
- Toolathlon-Verified: **73.6%** (HF model card + HKUST-nlp/Toolathlon; vs Pro 76.9%, Claude Opus 5 80.6%)
- AutomationBench v1.0.6: **52.3%** (HF model card; beats Claude Opus 5 50.3%, GPT-5.6 Sol 45.8%)
- OSWorld-Verified: **80.8%** (HF model card; vs Claude Opus 5 83.4%, Claude Fable 5 86.0%)
- GDPval-AA: **no verified public score found for Flash** (model card lists Pro 1673, Flash column empty)
- JobBench: **61.2%**; Agents' Last Exam: **27.6%** (HF model card)
- Cybersecurity (supplementary): CyberGym **95.1%**, MiMo Cyber Bench **77.2%**, ExploitBench **25.3%**, ExploitGym **6.0%**, SEC Bench Pro **47.5%** (HF model card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **67.9%** (HF model card + datacurve/deep-swe eval hub; vs Pro 71.9%, Claude Opus 5 74.0%, GPT-5.6 Sol 73.0%)
- MiMo Code Bench: **61.2%** (HF model card; vs Pro 63.2%, Claude Opus 5 68.6%)
- ProgramBench: **26.0%** (HF model card; vs Pro 26.5%, Claude Opus 5 37.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- MiMo VisualCoding (supplementary): **71.5%** (HF model card)

Long context:

- No long-context retrieval reported (1M window advertised, but no MRCR/RULER/GraphWalks retrieval value was found for this model)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 87.6% sits just under the ~88%+ frontier reference, with Toolathlon 73.6% and OSWorld 80.8% corroborating strong agentic execution; capped by the missing GDPval Elo for Flash and mid-tier Terminal-Bench 4.0 (28.8%).
- **Reasoning: 58/100.** No verified GPQA Diamond, HLE, AA Intelligence Index, or math-suite numbers exist for the Flash checkpoint — only Agents' Last Exam 27.6% and the Pro-vs-Flash coding deltas; scored at the conservative mid band rather than guessing.
- **Context window: 95/100.** 1M tokens maps to the ≥1M tier (95–100), capped at the band floor because no ≥98%-retrieval measurement at 512K+ was published.
- **Multimodal: 90/100.** Text, image, video, and audio input with verified dedicated ViT (681M) and audio encoders meets the omni-tier floor (90–100); text-only output and no measured multimodal benchmark keep it at the floor.
- **Coding: 75/100.** DeepSWE v1.1 67.9% and Terminal-Bench 2.1 87.6% are strong upper-mid results, but the DeepSWE frontier reference is 74%+ (90–100 band), ProgramBench trails at 26.0%, and no verified LiveCodeBench/SciCode exists — capped in the upper-mid band.
- **Cost efficiency: 98/100.** $0 on the evaluated Zen Free tier (near the $0 = 100 methodology mapping), slightly adjusted down for the limited-time window and the free-period training-data-use caveat; no verified paid pricing.
- **Overall Score: 80/100.** Mean of the five non-cost dims (82 + 58 + 95 + 90 + 75) / 5 = 80.0 — best fit as a cheap, omni-input agentic workhorse for coding, cybersecurity, and tool-driven automation; pair with a frontier reasoner for deep science/math reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (official HF model card for XiaomiMiMo/MiMo-V2.6-Flash-RL with eval-results hub, XiaomiMiMo HF org page, OpenCode Zen docs verified 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
