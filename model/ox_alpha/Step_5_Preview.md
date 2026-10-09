# Ox Alpha — findings by Step 5 Preview

- Source: Z.ai (`glm-5.3-flash` — stealth preview alias `ox-alpha`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth preview alias of **GLM-5.3-Flash**, Z.ai)
- **Short description:** The anonymous stealth model listed on OpenRouter (`stealth/ox-alpha`) and OpenCode Zen (`Ox Alpha Free`) from 2026-08-20, revealed on 2026-08-26 as Z.ai's GLM-5.3-Flash. Community fingerprinting during the preview (identical 7-field API contract and 50/50 tokenizer match with GLM-5.3, a leaked `com.wd.paas` stack trace) had already traced it to Z.ai's GLM-5.3 lineage; Z.ai confirmed it in the GLM-5.3-Flash launch post ("we tested GLM-5.3-Flash anonymously as ox-alpha"). It pulled 3.94T prompt tokens as the most popular model of its week — served entirely on Chinese AI chips. Model evidence: a 320B-total/18B-active hybrid sparse+linear-attention MoE, 1M context, native multimodality.
- **Provider / access:** Now served openly as `glm-5.3-flash` (Z.ai API), `z-ai/glm-5.3-flash` (OpenRouter, 26 providers), `opencode/glm-5.3-flash` (OpenCode Zen); MIT open weights `zai-org/GLM-5.3-Flash` on Hugging Face; 3x GLM-5.3 quota on the GLM Coding Plan. The `stealth/ox-alpha` listing is withdrawn.
- **Release / knowledge:** stealth listing 2026-08-20; revealed + weights + GA 2026-08-26. Knowledge cutoff not disclosed.
- **IDs:** `stealth/ox-alpha` (withdrawn), `glm-5.3-flash` / `z-ai/glm-5.3-flash` / `opencode/glm-5.3-flash` (current).
- **Context window:** 1,048,576 tokens (OpenRouter's API reported 1,310,720 during the preview); 131,072 max output.
- **Modalities:** Text, image, video and file in → text out; thinking always on (`low`/`high`/`max` effort only); function calling, structured output, tool streaming, context caching.
- **Pricing (as of 2026-10-09):** **$0 during the stealth preview** (prompts retained by the provider, not used for training — the only stealth listing with that carve-out); now $0.15 / MTok input, $0.50 output (the 50% launch discount ended 2026-09-09), cached input $0.03; MIT weights free to self-host.
- **Architecture:** Sparse MoE, 320B total / 18B active, 45 layers; hybrid linear + sparse attention (3.0x less attention compute, 4.4x smaller KV cache vs GLM-5.3); mHC; IndexPool; 30T-token multimodal pretraining.

### Raw benchmarks found

(Per Z.ai's launch disclosure, ox-alpha and GLM-5.3-Flash are the same model — the weights below are the GLM-5.3-Flash evidence base.)

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai / AA; Opus 4.8 85.0, GPT-5.6 Terra 87.4); Vals Terminus-2: **62.9%** (large harness spread)
- Terminal-Bench 4.0: **32.8%** (AA)
- Toolathlon-Verified: **78.4%** (vendor)
- AutomationBench v1.0.6: **48.8%** (vendor; GLM-5.2 26.2)
- Agents' Last Exam: **26.3%** (vendor)
- GDPval-AA v2: **Elo 1773** (vendor) / **57.3%** (AA) — above Opus 4.8's 1582 on the vendor table
- OSWorld 2.0: **59.1%** (vendor, computer use)
- OfficeQA Pro: **62.4%** (vendor); Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA); 86.4% (Vals); 90.2% (aggregate)
- HLE: **39.9%** (AA); **55.3% with tools** (vendor, GPT-5.6-Luna-judged)
- Artificial Analysis Intelligence Index: **57** (v4.1.1 at launch, $0.045/task discounted); **41.8** on the current rebased v4.3.2
- AA-LCR: **80.0%** (AA); CritPt: **15.4%** (AA); SciCode: **51.6%** (AA)
- MMLU-Pro: **86.1%** (Vals); base-model row: MMLU 88.1, LiveCodeBench-Base 37.6

Coding:

- SWE-bench Verified: **92.0%** (Vals AI)
- DeepSWE v1.1: **63.4%** (vendor, mini-swe-agent; GLM-5.2 46.2, Opus 4.8 58.0, GPT-5.6 Terra 69.6)
- LiveCodeBench: **80.5%** (Vals)
- Vibe Code Bench v1.1: **30.8%** (Vals); ProgramBench **0.0%** and SRE Bench **0.8%** (Vals); Code Migration 20.5%
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
- **Cost efficiency: 94/100.** $0.15/$0.50 per MTok with $0.03 cache reads sits just above the methodology's ~$0.10/$0.20 = 97–99 tier — the cheapest 1M-context omni-modal model in this comparison, MIT weights included, with 50%-off batch and a measured $0.045/task at the launch discount.
- **Overall Score: 83/100.** Best-fit recommendation: the cost-efficiency workhorse — Pro-adjacent agentic coding and office automation at $0.15/$0.50 with 1M context and open MIT weights; route hard long-horizon coding (SWE-Pro/DeepSWE) to a frontier-tier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenRouter stealth listing + de-cloaking notice, Z.ai GLM-5.3-Flash launch blog/docs, Artificial Analysis, Vals AI, Zentor/AI Catchup reveal coverage, community fingerprinting write-ups); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
