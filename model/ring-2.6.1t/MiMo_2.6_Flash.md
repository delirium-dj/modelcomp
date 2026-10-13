# Ring-2.6-1T — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ring-2.6.1t`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** Trillion-parameter flagship reasoning model in the Ling/Ring 2.6 family from InclusionAI (Ant Group), optimized for deep reasoning with controllable effort (high / xhigh) and real-world agent workflows — tool collaboration, long-horizon tasks, scientific and engineering work. Sibling to Ling-2.6 instant-response models; not a from-scratch rewrite of Ling-2.0-1T (architectural retrofit + continued pretraining + large-scale post-training).
- **Provider / access:** InclusionAI API; Hugging Face / ModelScope open weights (MIT); aggregators including haimaker (`inclusionai/ring-2.6-1t`); OpenAI-compatible chat completions with function calling and reasoning.
- **Release / knowledge:** Released May 2026 (HF / AA); tech report June 2026 (arXiv 2606.15079). Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ring-2.6-1T` (HF); `inclusionai/ring-2.6-1t` (haimaker).
- **Context window:** 262,144 tokens (262K; native 128K → 256K via YaRN); max output 65,536 tokens.
- **Modalities:** text in; text out; reasoning (adjustable effort: high / xhigh); function calling; open weights for self-host.
- **Pricing (as of 2026-10-13):** haimaker $0.07 / 1M input, $0.63 / 1M output; Artificial Analysis listed price ~$0.52 / 1M blended. Open-weight MIT means free self-host.
- **Architecture:** ~1.0T total parameters, ~63B active at inference (MoE, 256 experts, 8 active + 1 shared); hybrid linear attention (Lightning Attention + MLA at 7:1 ratio) for efficient long context; upgraded from Ling-2.0-1T base via retrofit + continued pretraining + Async RL (IcePop algorithm).

### Raw benchmarks found

Agent / tool use (vendor, high unless noted):

- PinchBench: **87.60** (vendor; claimed above GPT-5.4 xHigh and Gemini-3.1-Pro high)
- ClawEval: **63.82** (vendor; top comparable class)
- Tau2-Bench Telecom: **95.32** (vendor; <1 pt from best)
- GAIA-2 Search: strong (no exact figure in excerpts)

Independent (Artificial Analysis, various snapshot versions):

- AutomationBench-AA: **1%**
- Terminal-Bench v4.0: **1%**
- AA-Briefcase: 654–659 (Elo-scale)

Reasoning / knowledge (vendor, xhigh):

- AIME 2026: **95.83** (on par with multiple leading models)
- GPQA Diamond: **88.27**
- ARC-AGI-V2: **66.18** (claimed above Gemini-3.1-Pro high and Claude-Opus-4.7 xhigh)

Independent:

- Humanity's Last Exam: **22%**
- SciCode: **45%**
- CritPt: **4%**
- GDP.pdf: **4%**
- AA-Omniscience: **−38**
- Artificial Analysis Intelligence Index: **17–32** across snapshot versions (v4.1 ~31; later v4.3 snapshots ~17); mid-pack

Coding:

- SciCode 45% (independent)
- No SWE-bench Verified / LiveCodeBench public figure found in reviewed sources

Long context:

- 262K API window (native 128K → 256K YaRN); hybrid linear attention designed for efficient ultra-long context; no MRCR/RULER figure published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Vendor agent numbers are elite (PinchBench 87.60, ClawEval 63.82, Tau2 Telecom 95.32). Capped hard by independent agent evals that are near-floor (AutomationBench 1%, Terminal-Bench 4.0 1%) — vendor claims not yet corroborated on general agentic harnesses.
- **Reasoning: 80/100.** Vendor math/science ceilings are frontier-class (AIME26 95.83, GPQA-D 88.27, ARC-AGI-V2 66.18). Capped by independent HLE 22% and weak CritPt/GDP.pdf, plus AA Intelligence Index mid-pack.
- **Context window: 82/100.** 262K with hybrid linear attention for efficient long-context compute is solid mid-2026. Capped by no long-context retrieval measurements and 128K native (256K YaRN).
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 60/100.** Strong agent-coding narrative in vendor report; independent SciCode 45% is mid. Capped by no SWE-bench/LCB figures and independent Terminal-Bench near-floor.
- **Cost efficiency: 92/100.** MIT open weights + $0.07/$0.63 API is exceptional value for a 1T-class model; free self-host. Among the best cost/size ratios in the roster.
- **Overall Score: 59.8/100.** Mean of (62 + 80 + 82 + 15 + 60) / 5 = 59.8 → **60**. Best-fit recommendation: cheapest credible trillion-param open-weight reasoner for cost-sensitive STEM and tool-use workloads — treat vendor agent scores as aspirational until independent agentic evals catch up; prefer Ling-2.6 instant models when latency matters more than deep reasoning.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Hugging Face inclusionAI/Ring-2.6-1T, arXiv 2606.15079 tech report, haimaker listing, Artificial Analysis comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
