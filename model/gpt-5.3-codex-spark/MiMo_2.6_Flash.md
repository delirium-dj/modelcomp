# GPT-5.3-Codex-Spark — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.3-codex-spark`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** A distilled, Cerebras-powered speed variant of GPT-5.3-Codex (launched 2026-02-12 as a research preview), running on Cerebras Wafer Scale Engine 3 at 1,000+ tokens/sec (~15× the standard model) with a latency-first serving tier — optimized for rapid prototyping and targeted edits over long-horizon reasoning. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI — research preview for ChatGPT Pro subscribers (Turing College); latency-first serving tier alongside OpenAI's GPU infrastructure (ApX). **No published API token rate found** (BenchLM: "no comparable published API token rate" / "Pricing unavailable").
- **Release / knowledge:** released 2026-02-12 (ApX release-date row; Turing College launch article 2026-02-14); knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex-spark`. **No OpenCode Zen Free ID found.**
- **Context window:** 128K tokens (ApX narrative: "supports a 128k token context window, tailored to handle significant portions of active files"; Turing College agrees). ApX's structured field shows 131K and one BenchLM snapshot shows 256K — treat 128K as the consensus and note the conflict. No max-output figure published.
- **Modalities:** text/code in, text out — ApX lists modality "Code" and describes a "dense transformer optimized for high-velocity text-only generation". Reasoning: yes (BenchLM metadata flags Reasoning). No image/audio/video input found.
- **Pricing (as of 2026-10-01):** not published; access is bundled with ChatGPT Pro preview. Cost efficiency scored as a provisional midpoint per repo precedent for unverified pricing (Cost never counts toward Overall).
- **Architecture:** dense transformer, proprietary, closed weights, parameters unpublished (ApX); serving runs on Cerebras WSE-3.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> Evidence base is thin: BenchLM records **0 sourced benchmark rows** and "Evidence status unavailable"; everything below comes from catalog pages and one third-party hands-on test.

Agent / tool use:

- Terminal-Bench (any version) / τ²-Bench / Tau3 / GDPval / Toolathlon / OSWorld / MCP-Atlas / Claw-Eval: **no verified public score found**
- Qualitative: multiple X-developer reports of **unreliable tool-call formatting** — JSON schemas missing fields, function signatures with phantom parameters (Turing College roundup)

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME / MMLU-Pro / AA Intelligence Index / BenchLM reasoning lanes: **no verified public score found**
- Qualitative: Turing College's step-tracking test found Spark "drifts after 6–8 steps" versus the full model holding state across 12+ step plans; developer consensus quoted: "Speed without intelligence is just fast failure"

Coding:

- SWE-Bench Pro: **~56%** (Turing College, third-party approximate; their paired figure for full GPT-5.3-Codex ~72% conflicts with OpenAI's official 56.8% — cite both, flag the harness uncertainty)
- WebDev Arena: **ELO 1408, rank #73** (ApX); ApX overall rank #110, coding rank #74 of tracked models
- SWE-bench Verified / LiveCodeBench / SciCode / Terminal-Bench / Vibe Code Bench: **no verified public score found**
- BenchLM independent public score: **56.34** with "Benchmarks Covered: 0" (composite built from metadata, no rankable rows)
- Hands-on: delivered a working snake game in 50 seconds vs 6 minutes for full Codex, but with a one-pixel collision blind spot and a restart-function memory leak (Turing College test)

Long context:

- 128K window (spec rows); MRCR / RULER / GraphWalks retrieval: **no verified public score found** — Turing notes the window "falls short for large codebase analysis"

Multimodal:

- Text/code only (ApX); MMMU / CharXiv / ScreenSpot: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 40/100.** No Terminal-Bench, τ², GDPval, OSWorld or Toolathon number exists for this ID — scored below the 50–70 mid band as an evidence floor, with the qualitative tool-call-formatting defect reports as a further drag rather than a measured harness failure.
- **Reasoning: 50/100.** Zero reasoning-benchmark rows (BenchLM: 0 covered); the score is an evidence-gap floor held down by documented multi-step drift after 6–8 steps — an unmeasured checkpoint, not a proven failure.
- **Context window: 58/100.** 128K sits in the 100K–200K tier (50–64); no retrieval measurement, and the window is half of full Codex's 400K, explicitly flagged as insufficient for large-codebase analysis.
- **Multimodal: 15/100.** Text/code in, text out — the methodology's text-only floor (10–20, scored 15).
- **Coding: 60/100.** SWE-Bench Pro ~56% (approximate third-party) and WebDev Arena 1408 (#73) are respectable but mid-pack; no SWE-bench Verified, LiveCodeBench or Terminal-Bench row exists, and the hands-on test found real correctness bugs — well short of the frontier anchors (DeepSWE 74%+, TB2.1 85%+).
- **Cost efficiency: 50/100.** No published API token rate; access is a ChatGPT Pro research preview. Provisional midpoint per repo precedent for paid-only models with no verified pricing (Cost never affects Overall).
- **Overall Score: 45/100.** (40 + 50 + 58 + 15 + 60) / 5 = 44.6 → 45 — best-fit as an ultra-low-latency editing/prototyping companion to full GPT-5.3-Codex, not a standalone frontier model; the low Overall reflects sparse evidence and documented drift as much as capability.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (ApX model page, Turing College "Codex 5.3 vs. Codex Spark" hands-on comparison, BenchLM head-to-head snapshots); scores are normalized 1–100 interpretations, not official vendor scores. Evidence base is unusually thin — BenchLM carries zero sourced benchmark rows for this ID.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
