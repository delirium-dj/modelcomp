# Ling 3.1 Flash — findings by Muse Glimmer 30B

- Source: Ant Group / InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Ant Group InclusionAI hybrid-attention Mixture-of-Experts text model positioned for agentic office work, long-horizon software development and tool-using agents. Hybrid reasoning is enabled by default; successor to Ling 3.0 Flash with a larger MoE.
- **Provider / access:** InclusionAI official service; gateway IDs `inclusionai/ling-3.1-flash` on OpenRouter, Vercel AI Gateway, Kilo Gateway and Hugging Face inference providers. Chat Completions API. Weights released on Hugging Face under MIT.
- **Release / knowledge:** Public checkpoint released 2026-09-30 per InclusionAI/Hugging Face announcement; Artificial Analysis lists a related build Ling 3.1 Flash 1019 released 2026-10-22. Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-3.1-flash` on Hugging Face; `inclusionai/ling-3.1-flash` gateway ID.
- **Context window:** 262,144 tokens native in the checkpoint; SGLang docs state 1,048,576 tokens achievable with YaRN RoPE extrapolation. Hugging Face and Artificial Analysis publish a 1M token specification. Verified: 262K native, 1M via extrapolation.
- **Modalities:** Input text; Output text. Hybrid reasoning yes, tool calls yes, JSON mode supported. Text-only; no image/audio/video input.
- **Pricing (as of 2026-10-25):** Artificial Analysis reports InclusionAI API $0.30 / 1M input, $0.90 / 1M output, 80% cache discount, $1.49 per Intelligence Index task. Gateway pricing varies; NanoGPT listings historically $0.075/$0.22 per 1M but not confirmed as of this date. Free third-party trial routes existed at launch without training opt-out.
- **Architecture:** Hybrid-linear MoE, 560B total parameters. Hugging Face model card: 25B active per token, 63 KDA + 9 Gated MLA layers, 512 routed experts. SGLang cookbook describes ~17B active with 8 active routed experts + 1 shared expert per token. FP8 E4M3 block-quantized weights, MIT license.

### Raw benchmarks found

> Sources: Hugging Face model card evaluation results for inclusionAI/Ling-3.1-flash, Artificial Analysis model page Ling 3.1 Flash 1019, SGLang Ling-3.1-flash cookbook. Conflicts noted below.

Agent / tool use:

- Terminal-Bench 2.1: **81.18** — Hugging Face eval-results, harborframework/terminal-bench-2.1
- Terminal-Bench 4.0: **46.03** — Hugging Face eval-results, harborframework/terminal-bench
- SWE-bench Multilingual Resolved: **88.5** — Hugging Face eval-results
- SkillsBench V1 1: **68.7** — Hugging Face eval-results, benchflow/skillsbench
- SWE Atlas / MCP-Atlas: no verified public score found on Hugging Face; earlier vendor table cited 83.00% MCP-Atlas but not reproduced here.
- GDPval-AA v2.1 / Tau3-Banking / Claw-Eval / Toolathon: no verified public score found in the three sources inspected.

Reasoning / knowledge:

- Humanity's Last Exam: **37.44** — Hugging Face eval-results, cais/hle
- Artificial Analysis Intelligence Index v4.3.2: **44** — Artificial Analysis model page Ling 3.1 Flash 1019, #3/173 in class. Index incorporates AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.
- GPQA Diamond / LCR / CritPt / AA Intelligence Index breakdown: no per-metric public values found in inspected sources.

Coding:

- SWE-bench Pro: **68.74** — Hugging Face eval-results, ScaleAI/SWE-bench_Pro
- Deep SWE: **59.7** — Hugging Face eval-results, datacurve/deep-swe
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-bench Verified: no verified public score found in inspected sources.

Long context:

- Native context 262,144 tokens verified in SGLang cookbook; 1,048,576 tokens with YaRN RoPE scaling verified on H200/GB300 per SGLang docs. No published MRCR / RULER / GraphWalks percentage.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 81.18 and Terminal-Bench 4.0 46.03 show strong legacy tool use but a marked drop on the newer 4.0 harness. SkillsBench 68.7 supports agentic tooling. Capped by lack of independent GDPval-AA/Tau/Claw scores and the 4.0 regression.
- **Reasoning: 60/100.** HLE 37.44 is below the 40% frontier reference used in the cohort, Intelligence Index 44 places the model well above median for its price tier but below top proprietary reasoning models. Hybrid reasoning is present, but no GPQA/Public AA-Omniscience numbers are published.
- **Context window: 82/100.** Native 262K is in the 200K–500K band; verified 1M via YaRN extrapolation is reported by SGLang and Artificial Analysis. Score reflects verified native limit with extrapolation bonus, but lacks published long-context retrieval benchmarks.
- **Multimodal: 15/100.** Text in / text out only. The VL sibling covers vision; this entry is text-only.
- **Coding: 75/100.** SWE-bench Pro 68.74 and SWE-bench Multilingual 88.5 indicate solid repository coding, Deep SWE 59.7 trails leading flash models. No public LiveCodeBench/SciCode numbers to lift the score.
- **Cost efficiency: 85/100.** $0.30/$0.90 per 1M from InclusionAI API with 80% cache discount yields $1.49 per Intelligence Index task per Artificial Analysis. Competitive for a 560B MoE, but not at the $0.075/$0.22 gateway pricing cited earlier.
- **Overall Score: 62/100.** Mean of Tool 78, Reasoning 60, Context 82, Multimodal 15, Coding 75 = 62.0. Best-fit: capable hybrid-reasoning text agent with large extrapolated context and competitive coding for flash-tier pricing; multimodal and independent reasoning benchmarks remain limited.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; Hugging Face model card and eval-results, Artificial Analysis model page for Ling 3.1 Flash 1019, SGLang cookbook documentation. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

---
