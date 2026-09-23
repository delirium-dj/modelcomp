# Gemini 3.6 Flash — findings by Mimo V2.6 Flash

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's July 2026 mid-tier Flash workhorse — multimodal agentic coding model sitting below 3.1 Pro, beat its 3.5 Flash predecessor on every published benchmark while cutting output price. Distinct from `gemini-3.5-flash` and later 3.7 Flash.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.6-flash`), Vertex AI, Gemini Enterprise, Gemini app, GitHub Copilot (HokAI / Requesty). Chat-style generateContent API.
- **Release / knowledge:** Released 2026-07-21 (DeepMind model card; WaitWhichModel). Knowledge cutoff 2026-03 (WaitWhichModel).
- **IDs:** `google/gemini-3.6-flash`. Free tier available in Google AI Studio with account-specific rate limits (HokAI).
- **Context window:** 1,000,000 tokens; max output 66K tokens (Requesty / DeepMind).
- **Modalities:** multimodal input (image/audio/video supported per Flash-series lineage and product pages; text out); reasoning yes; tool calls yes; Computer Use built into Gemini API (HokAI); JSON/structured outputs yes.
- **Pricing (as of 2026-09-23):** $1.50 in / $7.50 out per 1M standard (DeepMind card; Requesty lists $1.50/$7.00 via their route). Batch 50% off; Priority ~+$80%; cache input $0.075–$0.15 / 1M depending on tier (HokAI).
- **Architecture:** proprietary (dense/MoE undisclosed).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **78.0%** (DeepMind model card, Terminus-2 harness); **78.9%** independent (BenchmarkList, 85th pct, rank 29/182)
- OSWorld-Verified: **83.0%** (DeepMind/HokAI vs 78.4% on 3.5 Flash)
- GDPval-AA v2: **1421** (DeepMind/HokAI)
- MLE-Bench: **63.9%** (HokAI)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas / Toolathon: no verified public score found for this ID in sources consulted

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA-measured via WaitWhichModel); **93.4%** independent 2026-07-28 (BenchmarkList)
- HLE: **38.3%** (Artificial Analysis measurement via WaitWhichModel — not Google-reported)
- Artificial Analysis Intelligence Index: **50** third-party (WaitWhichModel; HokAI cites 34 under a later v4.3 methodology — methodology shift, both noted)
- LMArena Text Elo: **1485** rank 12 (WaitWhichModel / arena.ai)
- CritPt / Omniscience numeric: no verified public score found in sources consulted

Coding:

- SWE-bench Verified: **79.6%** (BenchmarkList independent, 82nd pct, rank 14/72, thinking high)
- SWE-bench Pro (Public): **58.7%** (DeepMind model card, self-reported)
- DeepSWE v1.1: **49%** (DeepMind card; BenchmarkList 49.0%)
- LiveCodeBench: **88.1%** (BenchmarkList, 98th pct, rank 4/123)
- SciCode: **52.7%** (BenchmarkList, 95th pct)
- Vibe Code Bench v1.1: **57.3%** (BenchmarkList, 77th pct)
- ProgramBench: **55.7%** raw pass (BenchmarkList); CursorBench 3.2: **53.5%** (6th pct); FrontierCode: **34.4%** (BenchmarkList); Android Bench: **75.6%** (BenchmarkList)

Long context:

- GDM-MRCR v2 128K: **91.8%**; 1M: **54%** (DeepMind/HokAI vendor-reported)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

- **Tool use: 85/100.** TB2.1 78.0/78.9% is above the mid band and approaching the ~88% frontier line, with OSWorld-Verified 83.0% and GDPval-AA v2 1421 showing strong computer-use/knowledge-work agentic skill; capped below 90 because GDPval still trails Claude-class 1800+ ElOs and no Tau3/MCP-Atlas/Claw-Eval rows exist for this ID.
- **Reasoning: 90/100.** GPQA 92.8–93.4% is in the frontier 90%+ band and LMArena 1485 is competitive; held to 90 because HLE 38.3% sits just under the 40%+ frontier reference and AA Index 50 (or 34 on v4.3) remains below the top proprietary cluster (60+ on older scale / GPT-5.5-class).
- **Context window: 93/100.** Full 1M window with excellent mid-window retrieval (MRCR 128K 91.8%) but only 54% at 1M pointwise — far short of the ≥98%-at-512K+ bar for a top tier score; lands at 93 for large usable window + strong 128K recall.
- **Multimodal: 88/100.** Multimodal Flash-series input (image/audio/video lineage; computer use) with competitive multimodal reasoning; no single MMMU-Pro figure published for 3.6 in sources consulted (3.5 Flash hit 84.2) — score reflects confirmed multimodal product surface, not a 3.6-specific MMMU peak; text-only out caps it below 90+.
- **Coding: 88/100.** Independent SWE-V 79.6% + SWE-Pro 58.7% + LiveCodeBench 88.1% + TB2.1 ~78% make this a top Flash-tier coding stack; capped below 90+ because DeepSWE 49% and FrontierCode 34.4% still trail frontier agents (GPT-5.6 Sol DeepSWE ~73, Fable ~70), and CursorBench 53.5% is only 6th percentile of its field.
- **Cost efficiency: 78/100.** $1.50/$7.50 per 1M is well below frontier Opus/Fable pricing and cheaper than 3.5 Flash output ($9), with batch 50% and free Studio tier — but not in the sub-$1 Flash-Lite/cheap band (methodology ~$0.60/$2.20 ≈ 92), so ~78.
- **Overall Score: 89/100.** Mean of the five quality dims: (85 + 90 + 93 + 88 + 88) / 5 = 88.8 → 89. Best-fit: default high-volume agentic coding + multimodal workhorse when you want near-Pro terminal/SWE numbers at Flash prices.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (DeepMind Gemini 3.6 Flash model card, BenchmarkList independent runs, WaitWhichModel/HokAI/Requesty aggregations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
