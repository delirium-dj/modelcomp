# Gemini 2.5 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's June 2025 flagship "thinking" model with native multimodal input and a 1M-token context window; now deprecated/superseded by the Gemini 3 family, it was the best 2.5-series model before Gemini 3 Flash overtook it across multiple benchmarks. BenchLM ranks it #99 of 889 (49.42). A sparse Mixture-of-Experts transformer trained on Google TPUv5p clusters.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`) via Google AI Studio, Vertex AI, Gemini Enterprise (Chat Completions-style Gemini API). Available through 2 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2025-06-05 (initially Experimental 2025-03-25); knowledge cutoff January 2025 (verified via Artificial Analysis).
- **IDs:** `gemini-2.5-pro` (Google Gemini API / Vertex AI). No Free ID on OpenCode Zen.
- **Context window:** 1,000,000 total tokens (BenchLM concurs; max output ~64K per Gemini API docs).
- **Modalities:** text, image, speech/audio, video input; text output; reasoning yes (thinking model with budget control — BenchLM classifies the base variant as non-reasoning); tool calls (function calling, search-as-a-tool, code execution); JSON mode.
- **Pricing (as of 2026-10-11):** $1.25 / $10.00 per 1M in/out; 90% cache discount (AA blended ~$1.34 per 1M); requests over 200K input tokens billed at 2x the input rate. Paid tier; no developer API free tier.
- **Architecture:** Proprietary; sparse MoE transformer — parameter count not disclosed by Google.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **616** (AA, independent — normalized **0.0%**, effectively floor); AA Agentic Index: **3.5%** (AA) — far below the unverified airank.dev rows the 2026-10-08 pass cited
- τ²-bench: **54.1%** (AA, independent — first measured Tau2 number); Gert Labs: **42.01%**
- Vals Vibe Code Bench v1.1: **0.40%** (Vals, independent — floor)
- MCP-Atlas / Terminal-Bench / Claw-Eval: no verified public score found for this exact model

Reasoning / knowledge:

- GPQA Diamond: **84.4%** (AA, independent) / **83%** (Google DeepMind page via benchlm.ai) — both below the 86.4% datatunnel reading the prior pass cited
- HLE: **18.8%** (Google announcement via benchlm.ai); AA-HLE: **22.5%** (AA)
- Artificial Analysis Intelligence Index: **16.1** (AA current board — corroborates the 16)
- AA-LCR v1.1: **69.0%** (AA — fills the long-context gap); CritPt: **2.6%** (AA — near-zero)
- FrontierMath v2: **14.1%** Tiers 1–3 / **4.2%** Tier 4 (Epoch AI — weak)
- AIME 2024: **92%** (Phi-4-reasoning-plus comparison table); AIME 2025: **88%** (prior pass)
- AA-Omniscience: **39.1% accuracy / 90.9% non-hallucination row / −16.3 index** (AA — very weak index)
- AA-IFBench: **48.7%** (AA)

Coding:

- AA Coding Index: **33.3%** (AA, independent — much weaker than the prior mid-band reads); AA-SciCode: **46.3%** (AA)
- SWE-bench (Vals): **54.4%** (Vals, independent); SWE-bench Verified: **63.8%** (Google, custom-agent harness — corroborated by benchlm)
- LiveCodeBench: **74.2%** (prior pass, datatunnel); Aider Polyglot: **82.2%** (prior pass)
- DeepSWE / Vibe (independent): Vibe Code Bench **0.40%** (Vals)

Long context:

- AA-LCR v1.1: **69.0%** (AA — first measured long-context number, weak-mid)
- MRCR/RULER: no verified public score for this exact model

Multimodal:

- AA-MMMU-Pro: **74.9%** (AA); MMMU: **82%** (prior pass); Design Arena Website: **1172** (OpenRouter); audio + video input confirmed

### Normalized scores (1–100)

- **Tool use: 45/100 (was 58).** The independent AA/Vals rows are floor-class: GDPval 616 (0.0% normalized), AA Agentic Index 3.5%, Vibe Code Bench 0.40% — the prior unverified airank.dev numbers (GDPval 23.3%, MCP-Atlas 8.8%) were optimistic; only τ²-bench 54.1% keeps it above 40.
- **Reasoning: 66/100 (was 72).** GPQA settles at 83–84.4% (two sources, below the prior 86.4 read), HLE 18.8–22.5% and CritPt 2.6% are near-floor, FrontierMath is weak and AA-LCR 69.0% is mid — the June-2025 age adjustment the prior score resisted.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (BenchLM concurs); AA-LCR 69.0% is the first measured evidence (weak-mid); the 200K surcharge is a pricing caveat only.
- **Multimodal: 90/100.** Text, image, speech/audio and video input with MMMU 82% / MMMU-Pro 74.9%; audio input keeps it in the 90–100 band; text-only output.
- **Coding: 62/100 (was 72).** AA Coding Index 33.3%, Vals SWE-bench 54.4% and Vibe Code Bench 0.40% document the age on 2026 harnesses; the dated SWE-V 63.8% and LiveCodeBench 74.2% reads hold mid-band only.
- **Cost efficiency: 85/100.** $1.25/$10.00 per 1M with 90% cache discount and $0.23/task on the AA Intelligence Index; between the ~$1.25/$4.25 = ~88 methodology reference and the higher-output-price penalty, landed at 85.
- **Overall Score: 71.6/100 (was 77.4).** Mean of the five quality dims per `RULES.md` (Cost excluded): (45 + 66 + 95 + 90 + 62) / 5 = 358/5 = 71.6 — lowered materially on the 2026-10-11 second pass: AA/Vals/Epoch boards document a model now three hardware generations behind on agentic and coding work, with only multimodal breadth and 1M context holding value. Best-fit: a cheap multimodal workhorse for long-context document/video analysis only; superseded by Gemini 3 Flash at similar cost and far better reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 with AA/Vals/Epoch AI/Google-blog citations, the prior 2026-10-08 pass (AA page, datatunnel, futureagi), Google DeepMind pages via benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.md`, using the same headings.
