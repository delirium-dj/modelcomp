# Xiaomi MiMo-V2.5-Pro — findings by GLM 5.3 Flash

- Source: Xiaomi (`mimo-v2.5-pro`; no Zen Free ID — scored on paid pricing)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (Xiaomi's most capable model; the text-focused Pro sibling of the omni MiMo-V2.5)
- **Short description:** A 1.02T-param MoE (42B active) with hybrid 6:1 sliding-window/global attention and a 1M-token window, built for ultra-long-horizon agency: 1,000+ tool-call tasks, a complete SysY compiler written in 4.3 hours (233/233), and ClawEval frontier capability at 40–60% fewer tokens than Opus 4.6 / Gemini 3.1 Pro / GPT-5.4.
- **Provider / access:** Xiaomi native API (`mimo-v2.5-pro`, Token Plans; "no change in pricing" vs V2-Pro), AI Studio; OpenCode Zen lists it paid (no `*-free` ID found); open weights on Hugging Face (FP8 E4M3 mixed; Base 256K + 1M checkpoints), SGLang/vLLM deployment guides.
- **Release / knowledge:** released and open-sourced 2026-04-27 (five days after MiMo-V2.5). Knowledge cutoff not verified in this pass.
- **IDs:** `mimo-v2.5-pro` (Xiaomi) / `xiaomi/mimo-v2-5-pro` (repo id). **No Zen Free ID** — scored on paid pricing.
- **Context window:** 1,000,000 tokens (Pro checkpoint; Base checkpoint 256K); strong coherence maintained across ultra-long contexts per Xiaomi.
- **Modalities:** text in / text out (the Pro line is text-focused; Artificial Analysis's V2.5-vs-Pro comparison notes "Pro: no image").
- **Pricing (as of 2026-09-18):** ~$0.44 in / $0.87 out per 1M (repo catalog; $1.00/$3.00 routes also exist). No free tier; permissive-license open weights.
- **Architecture:** 1.02T total / 42B active MoE; local SWA + Global Attention interleaved 6:1 (128-token window, ~7× KV-cache reduction, learnable attention-sink bias); native MTP module (~3× output throughput); 27T-token pretrain; three-stage post-training (SFT → domain-specialized RL teachers → MOPD multi-teacher distillation).

### Raw benchmarks found

Agent / tool use:

- ClawEval: **64% Pass³** at ~**70K tokens per trajectory** — 40–60% fewer tokens than Claude Opus 4.6, Gemini 3.1 Pro and GPT-5.4 at comparable capability (Xiaomi launch post)
- Long-horizon demos: SysY compiler in Rust — **233/233** hidden tests, **672 tool calls in 4.3 hours** (PKU course-scale project); full video editor — **8,192 LOC over 1,868 tool calls / 11.5 hours**; FVF-LDO analog EDA design in ~1 hour (Xiaomi launch demos)
- Sustains complex tasks spanning **1,000+ tool calls** with a proper harness (Xiaomi claim)
- Tau2-Bench: **94.2%** (Sophon Pro's independent measurement, catalogued in `../../model-comparison.md`)

Reasoning / knowledge:

- GPQA Diamond: **86.6%**; HLE: **35.7%** (Sophon Pro, catalogued in `../../model-comparison.md`)
- Artificial Analysis Intelligence Index: **43** vs 38 for the non-Pro V2.5 (AA comparison, catalogued in `../../model-comparison.md`)

Coding:

- MiMo Coding Bench (in-house, agentic frameworks): "closing the gap to Opus 4.6" (vendor claim, no public number)
- SWE-bench Verified / Terminal-Bench: no verified public score found for the Pro variant

Long context:

- **1M tokens** native with coherence claims; no MRCR/RULER number published

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 87/100.** Tau2 94.2% + ClawEval 64% Pass³ at 40–60% fewer tokens + demonstrated 672–1,868-call autonomous runs — the strongest long-horizon tool-discipline evidence measured here.
- **Reasoning: 82/100.** GPQA 86.6 / HLE 35.7 / AA II 43 — frontier-adjacent knowledge and reasoning.
- **Context window: 100/100.** 1M native (Base 256K separate) with ultra-long coherence as the design goal.
- **Multimodal: 15/100.** Text-only (Pro has no image input per AA's comparison).
- **Coding: 85/100.** Near-Opus-4.6 in-house coding bench and a perfect 233/233 compiler build; missing public SWE-bench rows keep it under the top coding packages.
- **Cost efficiency: 85/100.** No Zen Free ID, but ~$0.44/$0.87 is cheap for the class, and permissive-license weights cap long-run costs.
- **Overall Score: 74/100.** Mean: (87 + 82 + 100 + 15 + 85 + 85) / 6 = 454/6 = 75.7 → **76**. Best fit: the 1M-coherence text flagship for 1,000+-call autonomous engineering at open-weights prices.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (Xiaomi's official MiMo-V2.5-Pro launch page for architecture, demos, ClawEval token-efficiency and licensing; Sophon Pro and Artificial Analysis rows as catalogued in `../../model-comparison.md`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
