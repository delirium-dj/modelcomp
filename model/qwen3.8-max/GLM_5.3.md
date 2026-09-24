# Qwen3.8 Max — findings by GLM 5.3

- Source: Alibaba/Qwen (`qwen3.8-max`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's commercial flagship of the Qwen3.8 generation (August 2026) — the official API version built on the open-weights Qwen3.8-2.4T-A95B, adding vision input, non-thinking support and 1M context by default. Top use case: frontier coding/cowork with full multimodal input.
- **Provider / access:** Qwen Cloud `https://www.qwencloud.com/models/qwen3.8-max`; Aliyun Model Studio. **Not on the current OpenCode Zen list** (Zen carries Qwen3.8 Flash and Qwen3.7 Max).
- **Release / knowledge:** 2026-08 (Qwen3.8 launch); knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.8-max` (Qwen Cloud/Aliyun); no Zen ID, no Free ID
- **Context window:** 1M tokens by default (official Qwen3.8-2.4T-A95B card: base weights are 262K native, extensible to 1.01M; the Max API serves 1M default).
- **Modalities:** text/image in; text out (video understanding benchmarks reported); reasoning toggle (thinking can be disabled on Max) + effort levels; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Qwen Cloud/Aliyun per-token list price **not verified this session**; no Zen ID — scored provisionally at flagship-Max tier.
- **Architecture:** MoE, 2.4T total / 95B active (per the open base card); proprietary API serving.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM `qwen3-8-max` / official card, Claude Code avg@10; Vals harness 67.4%)
- OSWorld-Verified: **86.1%**; AndroidWorld **85.3%**; MobileWorld **77.8%**; WebArena-Verified **66.8%** (BenchLM — elite device/computer use)
- Toolathlon-Verified: **72.5%**; CoWorkBench **74.8%**; SkillsBench **70.2%**; JobBench **53.4%**; Agents' Last Exam **27.0 pass / 52.4 score**; WideResearch **81.9%**; HLE w/ tools **56.2%** (BenchLM/official)
- GDPval-AA / Claw-Eval / Tau3: **no verified public score found** for this ID
- FrontierSWE v1 **73.5%** / v2 **15.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (BenchLM; Vals 93.7%)
- HLE: **43.6%** (no tools; 56.2% with tools) (BenchLM/official)
- MRCR v2 256K (8-needle): **92.9%**; LongBench v2 **66.3%** (official card)
- IFBench: **82.8%**; HealthBench **60.2%**; $OneMillion-Bench expert **52.5** (official card)
- CritPt / AA Intelligence Index / ARC-AGI: **no verified public score found** for this ID
- MMLU-Pro (Vals): **88.6%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **85.6%** (BenchLM)
- SWE-bench Pro: **67.7%**; DeepSWE 1.1 **56.6%**; NL2Repo-Bench **55.9%**; LiveCodeBench (Vals) **87.9%** (BenchLM/official)
- PaperBench: **93.0%** (official card — class-best); QwenSWEBench **80.7%**; QwenReactBench **1724** (official)

Long context:

- 1M default on the Max API; MRCR v2 92.9% verified at 256K; no 512K–1M retrieval figure published.

Multimodal (grounding):

- MathVision **95.2%** / w/ Python **97.7%**; CharXiv **93.5%**; OmniDocBench 1.5 **92.1%**; Video-MME (sub) **90.4%**; VideoMMMU **88.7%**; MLVU **90.8%**; ScreenSpot Pro **84.5%**; MMMU-Pro **82.3%**; RealWorldQA **88.0%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 86.1%, TB2.1 86.6%, AndroidWorld 85.3% and CoWorkBench 74.8% are top-tier; GDPval/Tau3/Claw-Eval unpublished for this ID and AutomationBench 27.3% is weak.
- **Reasoning: 84/100.** GPQA 92.6% and HLE 43.6% (56.2% w/tools) clear the frontier bars, MRCR 92.9% at 256K and IFBench 82.8% strong; no AA Index/CritPt/ARC data published — evidence gap caps it.
- **Context window: 95/100.** 1M default on the API (top tier band); retrieval only verified at 256K (92.9%), not ≥98% at 512K+.
- **Multimodal: 90/100.** Text+image(+video) input with elite vision (MathVision 95.2%, CharXiv 93.5%) and strong video (Video-MME 90.4%); no audio modality verified.
- **Coding: 85/100.** SWE-bench V 85.6%, LiveCodeBench 87.9%, TB2.1 86.6% and PaperBench 93.0% are excellent; DeepSWE 56.6% and FrontierSWE v2 15.8% sit below frontier refs.
- **Cost efficiency: 70/100.** No verified public list price (not on Zen); scored provisionally at flagship-Max tier — expect premium per-token pricing; open base weights (2.4T-A95B) offer a self-host alternative.
- **Overall Score: 88.0/100.** (86 + 84 + 95 + 90 + 85) / 5 = 88.0. Best-fit: Alibaba's frontier multimodal agent — near-top device use and cowork; verify Qwen Cloud pricing before committing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, official Qwen3.8 model card, Qwen Cloud docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
