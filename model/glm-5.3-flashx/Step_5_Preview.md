# GLM-5.3-FlashX — findings by Step 5 Preview

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash (released 2026-09-18) — the identical 320B-total/18B-active model served through a faster inference configuration at up to 200 tokens/s (vendor peak; the base Flash tier measures 50.2 tok/s at AA). Same weights, same benchmarks, same 1M context; priced ~2.5x the base Flash tier. GLM-5.3-Flash itself was pre-release-tested anonymously as `ox-alpha` on OpenCode/OpenRouter.
- **Provider / access:** Z.ai API `glm-5.3-flashx` (next to `glm-5.3-flash`); OpenRouter `z-ai/glm-5.3-flashx`; base weights `zai-org/GLM-5.3-Flash` on Hugging Face (MIT, self-hostable via SGLang/vLLM/TokenSpeed — FlashX itself is API-only). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-18 (FlashX tier); base model 2026-08-26. Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.ai), `z-ai/glm-5.3-flashx` (OpenRouter).
- **Context window:** 1,048,576 tokens (1M); 131,072 max output.
- **Modalities:** Text, image, video and file in → text out (first natively multimodal GLM-5). Thinking always on (`thinking.type: enabled` only, cannot be disabled); function calling, structured output, tool streaming, context caching.
- **Pricing (as of 2026-10-09):** $0.37 / MTok input, $1.25 output; cached input $0.075 (Z.ai list; ~$0.32/$1.12 via resellers). For reference the base Flash tier is $0.15/$0.50 with $0.03 cache reads. FlashX is excluded from the GLM Coding Plan (Flash gets 3x GLM-5.3 quota).
- **Architecture:** Sparse MoE, 320B total / 18B active, 45 layers; hybrid linear + sparse attention (3.0x less attention compute, 4.4x smaller KV cache vs GLM-5.3); Manifold-Constrained Hyper-Connections (mHC); IndexPool indexer compression; 30T-token multimodal pretraining corpus. Served at scale on Chinese AI chips with an EPD-disaggregated SGLang stack.

### Raw benchmarks found

(All benchmark figures are for the shared GLM-5.3-Flash weights — Z.ai publishes no separate FlashX numbers because the model is unchanged.)

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai / Artificial Analysis; Opus 4.8 85.0, GPT-5.6 Terra 87.4); Vals AI Terminus-2 run: **62.9%** (large harness spread)
- Terminal-Bench 4.0: **32.8%** (AA)
- Toolathlon-Verified: **78.4%** (vendor)
- AutomationBench v1.0.6: **48.8%** (vendor; GLM-5.2 26.2)
- Agents' Last Exam: **26.3** (vendor)
- GDPval-AA v2: **Elo 1773** (vendor) / **57.3%** (AA) — above Opus 4.8's 1582 on the vendor table
- OSWorld 2.0: **59.1%** (vendor, computer use)
- OfficeQA Pro: **62.4%** (vendor); Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA); 86.4% (Vals); 90.2% (anotherwrapper aggregate)
- HLE: **39.9%** (AA); **55.3% with tools** (vendor, GPT-5.6-Luna-judged)
- Artificial Analysis Intelligence Index: **57** (v4.1.1 at launch, $0.045/task discounted); **41.8** on the current rebased v4.3.2 listing
- AA-LCR: **80.0%** (AA); CritPt: **15.4%** (AA); SciCode: **51.6%** (AA)
- MMLU-Pro: **86.1%** (Vals); base-model row: MMLU 88.1, LiveCodeBench-Base 37.6

Coding:

- SWE-bench Verified: **92.0%** (Vals AI)
- DeepSWE v1.1: **63.4%** (vendor, mini-swe-agent; GLM-5.2 46.2, Opus 4.8 58.0, GPT-5.6 Terra 69.6)
- LiveCodeBench: **80.5%** (Vals)
- Vibe Code Bench v1.1: **30.8%** (Vals); ProgramBench **0.0%** and SRE Bench **0.8%** (Vals — near-zero on these agentic suites); Code Migration 20.5%
- Z.ai Code Bench v1.0 (in-house, max effort): **29.0** vs Claude Opus 4.8's 29.5

Multimodal:

- MMMU-Pro: **86.0%** (Vals); MVbench 77.8%; MMVU 80.5%; BabyVision 53.4%; CharXiv Reasoning w/ tools 89.4%; Chartography w/ tools 78.0%; Vision2Web 77.8%

Long context:

- 1M-token window; AA-LCR 80.0% (AA) is the only published long-context measure; **no MRCR/RULER**

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 84.3% (AA), Toolathlon 78.4%, GDPval-AA 57.3%/Elo 1773 and OSWorld 2.0 59.1% sit mid-frontier; capped by the Vals TB2.1 reading of 62.9%, Terminal-Bench 4.0 32.8%, Agents' Last Exam 26.3% and no public Claw-Eval.
- **Reasoning: 79/100.** GPQA 91.2% (AA) and the launch-era AA Intelligence Index of 57 (41.8 rebased) are strong, with AA-LCR 80.0% and MMLU-Pro 86.1% backing; capped by HLE 39.9% (55.3% only with tools on a vendor-chosen judge), CritPt 15.4% and SciCode 51.6%.
- **Context window: 93/100.** 1M-token window with 131K output is the ≥1M tier, with the hybrid linear+sparse attention stack (4.4x smaller KV cache) as genuine long-context engineering; the 100 tier's ≥98% retrieval at 512K+ is unverifiable — AA-LCR 80.0% and no MRCR/RULER.
- **Multimodal: 82/100.** Native text + image + video + file in → text out is the 75–90 band, anchored by MMMU-Pro 86.0%, CharXiv 89.4% and Chartography 78.0%; BabyVision 53.4% shows weaker pure-vision reasoning, and output is text-only.
- **Coding: 80/100.** SWE-bench Verified 92.0% (Vals), DeepSWE 63.4% and TB2.1 84.3% are frontier-adjacent at Flash pricing; capped hard by Vibe Code Bench 30.8%, ProgramBench 0.0%, SRE Bench 0.8% and Code Migration 20.5% — the end-to-end and ops-coding suites where this class still fails.
- **Cost efficiency: 88/100.** $0.37/$1.25 per MTok with $0.075 cache reads sits between the methodology's ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 tiers — the FlashX premium over the base Flash ($0.15/$0.50) buys speed, not intelligence; measured $0.045/task (discounted base tier) remains best-in-class value.
- **Overall Score: 83/100.** Best-fit recommendation: Flash-class intelligence at 200 tok/s peak for latency-sensitive coding agents — the same weights as GLM-5.3-Flash; choose the base Flash tier for batch work since only the queue differs.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai docs + GLM-5.3-Flash blog/HF model card, Artificial Analysis via OpenRouter, Vals AI, APIMaster.AI, OrcaRouter, glm5.app analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
