# Claude Opus 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-5`, 80 rows) computes an overall **79.95/100 (#8 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: SWE-bench Verified **96.0%** (Anthropic, avg of 5 trials) / **97.0%** (Vals, #1/88); SWE-bench Pro **79.2%**; Frontier-Bench v0.1 **43.3%** (SOTA); CursorBench 3.2 70.0%; GDPval-AA v2 **1861 Elo** (#1); ARC-AGI-3 **30.2%** (≈3–4× next best); ARC-AGI-2 90.4%; ARC-AGI-1 97.5%; GPQA 93.2–93.43%; MMMU-Pro 89.88% (Vals); MMLU-Pro 91.59% (Vals); LiveCodeBench 89.0% (Vals); Terminal-Bench 3.0 42.7% (#1); Terminal-Bench 4.0 52.3%; OSWorld 2.0 70.6%; BrowseComp 90.8%; HLE w/ tools 64.7%; DeepSWE 1.1 68.8%; SWE Multilingual 89.5%; SWE Multimodal 59.4%.
> **Conflicts surfaced:** (1) **GDPval-AA is source-unstable** — ~1932 / 1815 / 1861 Elo across tables, and one table puts Opus 4.8 (1890) *above* Opus 5 (1861). (2) Release **Jul 24 (Anthropic)** vs Jul 22 (Vals). (3) **Modalities conflict**: text+image+PDF (Vals MMMU-Pro vision rows) vs "text only" (ComputePrices). (4) Terminal-Bench 2.1 anchor **not published** for Opus 5 (only TB3.0/TB4.0). (5) Provider price spread $2.00–$10.00/1M input across 6 providers; Anthropic list is $5/$25.
> Sources: https://www.anthropic.com/news/claude-opus-5 · https://benchlm.ai/compare/claude-fable-vs-claude-opus-5 · https://claude5.ai/news/claude-opus-5-benchmark-results-analysis · https://llm-stats.com/models/compare/claude-opus-5-vs-claude-opus-5-5 · https://pricepertoken.com/pricing-page/model/anthropic-claude-opus-5 · https://dev.to/raxxostudios/claude-opus-5-benchmarks-what-the-numbers-actually-show-35gf

## Model card

- **Name:** Claude Opus 5 (API id `claude-opus-5`; no Free tier)
- **Short description:** Anthropic's Opus 5-generation flagship (2026-07-24), successor to Opus 4.8, built for the deepest reasoning and longest autonomous coding/research runs; new default on Claude Max. Superseded by Opus 5.5 (2026-09-22).
- **Provider / access:** Anthropic Claude API, AWS Bedrock, Google Vertex AI; closed, API-only.
- **Release / knowledge:** 2026-07-24 (Vals: Jul 22); knowledge cutoff not disclosed.
- **IDs:** `claude-opus-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via Batch beta); standard pricing across the full window.
- **Modalities:** text, image and PDF in; text out; tool calling; extended thinking with effort low/medium/high/max (+ xhigh).
- **Pricing (as of 2026-10-16):** $5.00 in / $25.00 out per 1M; cache read $0.50; 5m cache write $6.25 / 1h $10; Fast Mode $10/$50; Batch $2.50/$12.50.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 **1861 Elo** (rank 1); OSWorld 2.0 **70.6%**; BrowseComp **90.8%**
- Terminal-Bench 3.0 **42.7%** (rank 1/17); Terminal-Bench 4.0 52.3%
- HLE w/ tools 64.7%; LAB all-pass (Anthropic harness) 23.58% / criterion-pass 93.74%
- Toolathlon 80.6% Pass@1 / 87.0% Pass@3; OSWorld-Verified 83.4%; Tau3-Banking 44.7%; MCP Atlas 85.8%
- Terminal-Bench 2.1 / Claw-Eval / AA Agentic Index: **no verified public score found**

Reasoning / knowledge:

- GPQA **93.2–93.43%**; MMLU-Pro 91.59% (Vals); ARC-AGI-1 97.5%; ARC-AGI-2 **90.4%**; ARC-AGI-3 **30.2%**
- GFPQA / CritPt / AA-LCR: **no verified public score found**

Coding:

- SWE-bench Verified **96.0%** (Anthropic) / **97.00% (#1/88)** (Vals); SWE-bench Pro **79.2%**; SWE Multilingual 89.5%; SWE Multimodal 59.4%
- Frontier-Bench v0.1 **43.3%**; CursorBench 3.2 70.0%; LiveCodeBench 89.0% (Vals); DeepSWE 1.1 68.8%; Vibe Code Bench 88.4%
- Output speed ~53.5 tok/s (prior AA pass) — slow for interactive chat

Long context:

- 1M window; no model-specific MRCR/RULER/GraphWalks reproduced — no verified recall-at-depth value.

### Normalized scores (1–100)

- **Tool use: 92/100.** Rank-1 GDPval-AA 1861, OSWorld 2.0 70.6%, BrowseComp 90.8% and TB3.0 42.7% (#1) are frontier; capped by the unpublished TB2.1 anchor and MCP-depth checks.
- **Reasoning: 94/100.** GPQA 93.3%, ARC-AGI-2 90.4%, MMLU-Pro 91.59% and ARC-AGI-3 30.2% (≈3–4× next best) are frontier-leading; HLE/CritPt omission and the source-unstable GDPval row keep it under 95.
- **Context window: 96/100.** 1M as default and ceiling (128K / 300K batch output) at standard pricing, ≥1M band; no published recall-at-depth measurement.
- **Multimodal: 82/100.** Text, image and PDF in with MMMU-Pro 89.88%; text-only output, no audio/video, and one tracker lists text-only.
- **Coding: 95/100.** SWE-bench Verified 96–97% (#1), SWE-bench Pro 79.2%, LiveCodeBench 89.0% and Frontier-Bench 43.3% are elite; SWE Multimodal 59.4% is the only soft spot.
- **Cost efficiency: 45/100.** $5/$25 per 1M (above the $3/$15 ≈ 60 anchor), worsened by verbosity; caching/batch are the only relief.
- **Overall Score: 92/100.** (92 + 94 + 96 + 82 + 95) / 5 = 91.8 → 92. Best fit: long autonomous coding/research where the #1 SWE-bench Verified and million-token recall justify the highest per-token spend.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Anthropic Opus 5 launch page, BenchLM Fable-5 comparison, claude5.ai launch analysis, llm-stats Opus 5 vs 5.5, pricepertoken, dev.to critical review). Anthropic absolute rows were cross-checked against third-party tables; the GDPval-AA instability and modality conflict are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
