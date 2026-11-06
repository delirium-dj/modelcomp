# Gemini 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`gemini-3-7-flash`, **47 rows**, **66.49/100, #25 of 1015** — was 29 rows, 66.77, #29 of 228), Google DeepMind model card, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex.
> **Newly captured rows:** GDPval-AA **1525 Elo / 44.6%**; AA Harvey LAB **90.7%**; AA-AnalystAgent **60.0%**; AA Agentic Index 36.4%; aaTB2.1 85.8%; LVBench 85.4%; BioMysteryBench 87.1 / 43.5; AA Index 39.1%; AA-GPQA **94.5%**; AA-HLE 47.9%; AA-Omniscience 26.5 / 55.3% / 64.5%; AA-LCR 81.7%; CritPt 14.3%; AA-SciCode 57.2%; AA Coding Index 76.1%; FrontierMath v2 T1–3 71.579%; ParseBench 70.37%; Design Arena 1302; MazeBench 1%.
> **Re-verified unchanged:** TB2.1 85.8% (card/AA) / 77.5% (Vals); TB4.0 12.12%; OSWorld 2.0 47.9%; Agents' Last Exam 26.3%; GPQA 93.9–94.5%; ARC-AGI-2 84.6%; LiveCodeBench 88.7%; SWE-bench 80.8%; SWE-bench Pro 60.4%; FrontierSWE v2 20.3%; MRCR v2 128K 97.0%; pricing $0.75/$3.75 intro through 2026-12-31.
> **No score change:** the refreshed rows confirm the strong reasoning/multimodal, weak terminal-agent profile; scores held at 86.
> Sources this pass: https://benchlm.ai/models/gemini-3-7-flash · https://deepmind.google/models/model-cards/gemini-3-7-flash/ · https://artificialanalysis.ai/models/gemini-3-7-flash · https://www.vals.ai/models/google_gemini-3.7-flash

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-7-flash`, 29 rows) computed an overall **66.77/100 (#29 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: GPQA Diamond 93.94% (Vals, #5/138), MMLU-Pro 90.12% (Vals), MMMU-Pro 88.96% (Vals), CharXiv 88.7% / w/o tools 84.5%, HLE 45.7% (HLE-Verified 53.6%), ARC-AGI-1 95.5%, ARC-AGI-2 84.6%, FrontierMath T4 v2 36.585%, MRCR v2 64K–128K 97.0%; LiveCodeBench 88.65% (Vals, #5), SWE-bench 80.80% (Vals), SWE-bench Pro 60.4% (Google), SWE-Atlas 48.0%, DeepSWE 65.3%, FrontierCode 1.1 Main 43.6%, Terminal-Bench 2.1 85.8% (card) / 81.6% (Google) / 77.5% (Vals), TB3.0 14.9%, TB4.0 12.12% (Vals), OSWorld 2.0 47.9–59.0%, Finance Agent v2 59.04%, AutomationBench 30.4%, GDP.pdf 34.0%, GDPval-AA v2 1482 Elo, LABBench2 82.1%. Conflicts surfaced: TB2.1 vs TB4.0 harness gap; OSWorld disagreement; pricing intro vs list; audio-listing mismatch; output-cap mismatch; superseded by 3.8 Flash (2026-09-02). Lineage: 3.6 Flash → 3.7 Flash (2026-08-13) → 3.8 Flash; all 1M context.

## Model card

- **Name:** Gemini 3.7 Flash (stable, GA; no "Free" wording — a free AI Studio tier exists)
- **Short description:** Google's August 2026 Flash-tier refinement of Gemini 3.6 Flash (2026-08-13), achieved through algorithmic improvements rather than a new pretraining run; large long-horizon coding gains. Superseded by Gemini 3.8 Flash.
- **Provider / access:** Gemini API, AI Studio, Gemini Enterprise Agent Platform, Spark. Closed; no self-hosting.
- **Release / knowledge:** 2026-08-13; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.7-flash`. No Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 (Vals: 66K).
- **Modalities:** text, image, audio and video input; text output; function calling/structured output; thinking levels low/medium/high (default medium).
- **Pricing (as of 2026-11-06):** intro **$0.75 in / $3.75 out** per 1M (through 2026-12-31; doubles Jan 2027); context caching $0.075/1M + $0.50/1M/hour storage.
- **Architecture:** proprietary; refinement of the 3.6 Flash reasoning foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.8%** (card/AA) / 77.5% (Vals); Terminal-Bench 3.0 14.9%; Terminal-Bench 4.0 **12.12%** (Vals)
- OSWorld 2.0 47.9%; τ³-bench Banking 30.9%; AutomationBench 30.4%; Agents' Last Exam 26.3%; ApprenticeBench 16%; MazeBench 1%
- GDPval-AA v2 **1525 Elo / 44.6%**; AA Harvey LAB **90.7%**; AA-AnalystAgent **60.0%**; AA Agentic Index 36.4%
- Finance Agent v2 59.04% (Vals); Harvey LAB 8.75% (Vals benchmark differs from AA's); SRE Bench 4.58%; GDP.pdf 34.0%

Reasoning / knowledge:

- GPQA Diamond **93.9% (Vals) / 94.5% (AA)**; MMLU-Pro **90.1%** (Vals); HLE 45.7% (HLE-Verified 53.6%); AA-HLE 47.9%
- ARC-AGI-1 95.5%; ARC-AGI-2 **84.6%**; FrontierMath v2 T1–3 71.579% / T4 36.585%; LABBench2 82.1%; BioMysteryBench 87.1 / 43.5
- AA-LCR 81.7%; CritPt 14.3%; AA-Omniscience 26.5 / 55.3% / 64.5%; AA Intelligence Index **39.1**
- CharXiv 88.7% / w/o tools 84.5%; MMMU-Pro 88.96% (Vals); BenchLM overall 66.49

Coding:

- LiveCodeBench **88.7%** (Vals); SWE-bench **80.8%** (Vals); SWE-bench Pro **60.4%** (Google); SWE-Atlas 48.0%
- DeepSWE 65.3%; FrontierCode 1.1 Main 43.6%; FrontierSWE v2 20.3%; SciCode 57.2%; AA Coding Index 76.1%
- IOI 67.83%; Vibe Code Bench 70.39%; SkillsBench 65.89%; WebDev Arena Elo 1588

Long context / multimodal:

- 1M window; GDM-MRCR v2 128K **97.0%**; no full-window (1M) figure; LVBench 85.4%; ParseBench 70.37%; Design Arena 1302.

### Normalized scores (1–100)

- **Tool use: 74/100.** Near-saturated TB2.1 (77.5–85.8%), Finance Agent 59.04%, Harvey LAB 90.7% and AnalystAgent 60% favour it, but independent Terminal-Bench 4.0 at 12.12%, OSWorld 2.0 47.9% and Agents' Last Exam 26.3% cap the score.
- **Reasoning: 88/100.** Independent GPQA 93.9–94.5% (#5-class), MMLU-Pro 90.1% and LABBench2 82.1% are frontier; ARC-AGI-2 84.6%, FrontierMath 36.6% and AA Index 39.1 keep it below 90.
- **Context window: 95/100.** 1,048,576 tokens with 97.0% MRCR-v2 at 128K; the unmeasured full-window depth and 65K output cap are the only gaps.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band) with MMMU-Pro 88.96% and CharXiv 88.7%; text-only output caps it.
- **Coding: 82/100.** Independent LiveCodeBench 88.7%, SWE-bench 80.8% and SWE-bench Pro 60.4% are strong; TB4.0 12.12% and FrontierSWE v2 20.3% keep it mid-band.
- **Cost efficiency: 92/100.** $0.75/$3.75 intro with cheap caching is near the ~92 band; doubles in Jan 2027 and the tier is superseded.
- **Overall Score: 86/100.** (74 + 88 + 95 + 90 + 82) / 5 = 85.8 → 86. Best fit: budget coding agents and document-heavy enterprise workflows.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Google DeepMind model card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex). Captured the new GDPval/Harvey/AnalystAgent/LVBench/BioMystery/AA rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [BenchLM — Gemini 3.7 Flash benchmark scores](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Vals AI — Gemini 3.7 Flash](https://www.vals.ai/models/google_gemini-3.7-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
