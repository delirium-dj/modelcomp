# Gemini 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-7-flash`, 29 rows) computes an overall **66.77/100 (#29 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond **93.94%** (Vals, #5/138), MMLU-Pro **90.12%** (Vals), MMMU-Pro **88.96%** (Vals), CharXiv 88.7% / CharXiv w/o tools 84.5%, HLE 45.7% (HLE-Verified 53.6%), ARC-AGI-1 95.5%, ARC-AGI-2 **84.6%**, FrontierMath T4 v2 36.585%, MRCR v2 64K–128K **97.0%**; LiveCodeBench **88.65%** (Vals, #5), SWE-bench **80.80%** (Vals), SWE-bench Pro **60.4%** (Google), SWE-Atlas 48.0%, DeepSWE 65.3%, FrontierCode 1.1 Main 43.6%, Terminal-Bench 2.1 85.8% (card) / 81.6% (Google) / 77.5% (Vals), Terminal-Bench 3.0 14.9%, Terminal-Bench 4.0 12.12% (Vals), OSWorld 2.0 47.9–59.0%, Finance Agent v2 59.04%, AutomationBench 30.4%, GDP.pdf 34.0%, GDPval-AA v2 1482 Elo, LABBench2 82.1%, BenchLM overall 66.87.
> **Conflicts surfaced:** (1) **Terminal-Bench 2.1 — 85.8% (card) / 81.6% (Google 3.8 doc) / 77.5% (Vals)** vs independent Terminal-Bench 4.0 **12.12%** — a large harness/version gap (v2.1 is near-saturated; v4.0 is the hard successor). (2) **OSWorld 2.0 47.9% (card) vs 59.0% (3.8 comparison)** — unclear re-test. (3) Pricing **$0.75/$3.75 intro** (expires 2026-12-31; then $1.50/$7.50) vs Vals $1.50/$7.50 snapshot. (4) Audio: Google lists audio input; Vals omits it. (5) Max output 65,536 (Google) vs 66K (Vals). (6) Superseded by 3.8 Flash (2026-09-02).
> Lineage: 3.6 Flash (2026-07-21) → **3.7 Flash (2026-08-13)** → 3.8 Flash (2026-09-02); all three are 1M context.
> Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/ · https://llm-stats.com/blog/research/gemini-3.7-flash-launch · https://www.vals.ai/models/google_gemini-3.7-flash · https://datanorth.ai/news/google-releases-gemini-3-7-flash · https://benchlm.ai/compare/gemini-3-7-flash-vs-gpt-5-6-sol · https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash

## Model card

- **Name:** Gemini 3.7 Flash (stable, GA; no "Free" wording — a free AI Studio tier exists)
- **Short description:** Google's August 2026 Flash-tier refinement of Gemini 3.6 Flash (2026-08-13), achieved through algorithmic improvements rather than a new pretraining run; large long-horizon coding gains. Superseded by Gemini 3.8 Flash.
- **Provider / access:** Gemini API, AI Studio, Gemini Enterprise Agent Platform, Spark. Closed; no self-hosting.
- **Release / knowledge:** 2026-08-13; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.7-flash`. No Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 (Vals: 66K).
- **Modalities:** text, image, audio and video input; text output; function calling/structured output; thinking levels low/medium/high (default medium).
- **Pricing (as of 2026-10-16):** intro **$0.75 in / $3.75 out** per 1M (through 2026-12-31; doubles Jan 2027); context caching $0.075/1M + $0.50/1M/hour storage.
- **Architecture:** proprietary; refinement of the 3.6 Flash reasoning foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.8%** (card) / 81.6% (Google) / 77.5% (Vals); Terminal-Bench 3.0 14.9%; Terminal-Bench 4.0 **12.12%** (Vals)
- OSWorld 2.0 47.9% (card) / 59.0% (3.8 comparison); τ³-bench Banking 30.9%; AutomationBench 30.4%
- Agents' Last Exam 26.3%; ApprenticeBench 16%; GDPval-AA v2 1482 Elo
- Finance Agent v2 59.04% (Vals); Harvey LAB 8.75% (Vals); SRE Bench 4.58% (Vals); GDP.pdf 34.0%
- MCP Atlas / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **93.94%** (Vals, #5); MMLU-Pro **90.12%** (Vals); HLE 45.7% (HLE-Verified 53.6%)
- ARC-AGI-1 95.5%; ARC-AGI-2 **84.6%**; FrontierMath T4 v2 36.585%; LABBench2 82.1%
- CharXiv 88.7% / CharXiv w/o tools 84.5%; MMMU-Pro 88.96% (Vals)
- BenchLM overall 66.87; LLM Stats Score 46.9

Coding:

- LiveCodeBench **88.65%** (Vals, #5); SWE-bench **80.80%** (Vals); SWE-bench Pro **60.4%** (Google); SWE-Atlas 48.0%
- DeepSWE 65.3%; FrontierCode 1.1 Main 43.6%; FrontierSWE v2 20.3%; SciCode 57.9%
- IOI 67.83%; Vibe Code Bench 70.39%; SkillsBench 65.89%; WebDev Arena Elo 1588

Long context:

- 1M window; GDM-MRCR v2 128K **97.0%**; no full-window (1M) figure.

### Normalized scores (1–100)

- **Tool use: 74/100.** Near-saturated TB2.1 and Finance Agent 59.04% favour it, but independent Terminal-Bench 4.0 at 12.12%, OSWorld 2.0 47.9% and Agents' Last Exam 26.3% cap the score.
- **Reasoning: 88/100.** Independent GPQA 93.94% (#5), MMLU-Pro 90.12% and LABBench2 82.1% are frontier; ARC-AGI-2 84.6% and FrontierMath 36.6% keep it below 90.
- **Context window: 95/100.** 1,048,576 tokens with 97.0% MRCR-v2 at 128K; the unmeasured full-window depth and 65K output cap are the only gaps.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band) with MMMU-Pro 88.96% and CharXiv 88.7%; text-only output caps it.
- **Coding: 82/100.** Independent LiveCodeBench 88.65%, SWE-bench 80.80% and SWE-bench Pro 60.4% are strong; TB4.0 12.12% and FrontierSWE v2 20.3% keep it mid-band.
- **Cost efficiency: 92/100.** $0.75/$3.75 intro with cheap caching is near the ~92 band; doubles in Jan 2027 and the tier is superseded.
- **Overall Score: 86/100.** (74 + 88 + 95 + 90 + 82) / 5 = 85.8 → 86. Best fit: budget coding agents and document-heavy enterprise workflows.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Google 3.7 Flash launch blog + llm-stats launch analysis, Vals AI model page, DataNorth launch write-up, BenchLM comparisons, Google 3.8 Flash developer guide for 3.7 cross-rows). Independent Vals rows were promoted over the vendor card; the TB2.1-vs-TB4.0 gap and OSWorld/pricing conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
