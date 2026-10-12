# Claude Opus 4.8 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed independent data: Vals AI Index **55.10% (#13/45)** with **SWE-bench 88.60% (#1)**, **Vibe Code Bench 82.72% (#1)**, **ProofBench 69.00% (#1)**, **LiveCodeBench 87.82% (#3)**, **GPQA Diamond 92.42% (#4)**, **MMLU-Pro 89.58% (#4)**, **MMMU-Pro 86.59% (#9)**, SAGE 54.79% (#3); Artificial Analysis **AA-LCR 77.7%**, **AA Coding Index 74.3%**, **AA-SciCode 54.4%**, AA-IFBench 62.2%, AA-Omniscience Index 28.8% (hallucination 39.3%). System-card rows added: **SWE Multilingual 84.4%**, **SWE Multimodal 38.4%**, BrowseComp 84.3%, DeepSearchQA 93.1%, CharXiv 89.9% (80.5% no tools), ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%, Finance Agent v2 53.9%, INCLUDE 87.6%, FrontierMath v2 Tier 4 31.25%.
> **Conflicts surfaced:** (1) **Terminal-Bench 2.1** — the prior file's **86.9% (BenchmarkList)** is contradicted by Anthropic's **74.6% system card** and Vals' **Terminal Bench 2 70.04%**; the two direct measurements are adopted and Tool use was corrected downward. (2) **Toolathlon** reads **79.9% (prior file)** vs **59.9% (system card)**. (3) **GDPval-AA** reads **1890 Elo (prior file)** vs **1593 (system card)** / **47.8% normalized (AA)**. (4) **AA Intelligence Index** — the prior file's **72** is the old basket; the current **v4.3.2 index reads 42 (#49/227)**, *below* GPT-6.1 Sol's 52, so the two are not comparable. (5) Vals' own index rebased from **#1 / 70.17% at launch (2026-05-28)** to **#13 / 55.10%** now as the field deepened.
> Sources: https://www.vals.ai/models/anthropic_claude-opus-4-8 · https://benchlm.ai/models/claude-opus-4-8 · https://artificialanalysis.ai/models/claude-opus-4-8 · https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf (Anthropic system card)

## Model card

- **Name:** Claude Opus 4.8 (API id `claude-opus-4-8`; no "Free" tier exists)
- **Short description:** Anthropic's most capable generally available model through mid-2026, released 2026-05-28 as an incremental checkpoint on Opus 4.7 with targeted gains in agentic coding, mathematical reasoning and behavioural consistency. Built for long-running autonomous coding, research synthesis and enterprise tool orchestration; now superseded by Claude Opus 5 / 5.5.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-05-28 (AI Release Tracker / Vals). Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-4-8`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (200K on Microsoft Foundry); max output 128,000 (Vals), with a 300,000-token beta via a Batch-API header.
- **Modalities:** text, image and PDF/file in (Vals lists file input; video unsupported); text out; tool calling both directions; reasoning yes (adaptive thinking); native computer-use automation added in this release.
- **Pricing (as of 2026-10-11):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input (90% cache discount); Fast Mode (research preview) $10/$50; Batch 50% off. Blended ≈$3.85/M (AA); **$13.14 per Vals Index test**.
- **Architecture:** proprietary dense transformer, closed; parameter count undisclosed (~600B estimated).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic system card) / **70.04%** (Vals, #2) — prior file's 86.9% (BenchmarkList) not reproduced
- Terminal-Bench 4.0: **23.23%** (Vals, rank 19/45); Terminal-Bench 3.0: 21.1%; Terminal-Bench Science 0.1: 4.29% (Vals) / 10.5% (prior file)
- OSWorld-Verified (computer use): **83.4%** (system card); WebArena-Verified: 71.2%
- MCP Atlas: **82.2%** (system card); Toolathlon: **59.9%** (system card; prior file had 79.9%)
- GDPval-AA: **1593 Elo** (system card) / **47.8% normalized** (AA); Finance Agent v2: **53.9%** (system card, AA agrees 53.92%)
- BrowseComp: **84.3%** (system card); DeepSearchQA: **93.1%** (system card); AA Agentic Index: 42.6% (AA)
- Tau2-Bench Telecom: **94.4%** (AA); Tau3-Banking: **34.2%** — the checkpoint's weakest agentic row
- Vals AI Index: **55.10% (#13/45)**; EMB 69.37%; Code Migration 47.25%; SkillsBench 59.23% (#9)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (system card) / **92.42%** (Vals, #4); HLE: **49.8%** without tools / **57.9%** with tools
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (effort-dependent)
- USAMO 2026 (math): **96.7%** (system card); FrontierMath v2 Tier 4: **31.25%**, Tiers 1–3: 47.24%
- Artificial Analysis Intelligence Index: **42 (#49/227, v4.3.2)** — a rebase from the 72 the prior file recorded on the old basket
- AA-LCR: **77.7%** (AA); CritPt: **20.9%** (AA); AA-Omniscience Index 28.8% (hallucination 39.3%); AA-HLE 48.7%
- MMLU-Pro: **89.58%** (Vals, #4); INCLUDE: 87.6% (system card); LCR / MLCR: **no verified public score found**

Coding:

- SWE-bench Verified: **88.6%** (system card + Vals #1); SWE-bench Pro: **69.2%**; SWE Multilingual: **84.4%**; SWE Multimodal: 38.4%
- Vibe Code Bench v1.1: **82.72% (#1)** (Vals); LiveCodeBench: **87.82% (#3)** (Vals); ProofBench v1.1: 69.00% (#1)
- AA Coding Index: **74.3%** (AA); AA-SciCode: **54.4%** (AA); CursorBench 3.2: 62.3%; FrontierCode 1.1: 46.5%
- GBA Eval (Game Boy Advance in Rust/Wasm, 24h): **70.9%** overall; KernelBench CUDA: **37.3%**
- Output speed: **57.3 tok/s** median (AA); AA blended price **$3.85/M**; very verbose (170M AA index tokens)

Long context:

- AA-LCR **77.7%** (AA) is the first published long-context-reasoning number; no model-specific MRCR/RULER value for 4.8 was reproduced. The Opus 4.6 MRCR v2 8-needle 76% at 1M is the closest proxy for the shared window.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 83.4%, MCP Atlas 82.2%, BrowseComp 84.3%, DeepSearchQA 93.1% and GDPval-AA 1593 keep it top-tier (lowered from 93 after the corrected Terminal-Bench 2.1 74.6%/70.04%, Toolathlon 59.9% and sub-frontier GDPval replaced the prior 86.9%/79.9%/1890 Elo readings).
- **Reasoning: 94/100.** GPQA Diamond 93.6%, HLE 57.9% with tools, USAMO 2026 96.7% and Vals GPQA 92.42% are frontier-grade; the ARC-AGI-3 dip (1.5%) and CritPt 20.9% hold it back, and the current AA index (42) now trails GPT-6.1 Sol's 52.
- **Context window: 95/100.** 1M tokens (200K on Foundry) with 128K default output and a 300K batch beta; AA-LCR 77.7% is moderate and no model-specific public recall number exists.
- **Multimodal: 80/100.** Text, image and PDF/file input with text + tool-call output; CharXiv 89.9%, ScreenSpot Pro 87.9% and MMMU-Pro 86.59% (Vals) show strong chart/screen/document reading, but no audio, video or media generation.
- **Coding: 94/100.** SWE-bench Verified 88.6% (#1), SWE-bench Pro 69.2%, Vibe Code Bench 82.72% (#1), LiveCodeBench 87.82% and AA Coding Index 74.3% are top-tier; capped by SWE Multimodal 38.4% and no DeepSWE for the checkpoint.
- **Cost efficiency: 45/100.** $5/$25 per 1M with no free tier, a $10/$50 Fast Mode and $13.14 per Vals test — premium by design; cached input and 50%-off batch are the only relief.
- **Overall Score: 90/100.** Mean of the five quality dims (89+94+95+80+94)/5 = 90.4 → 90. Best fit: enterprise agent platforms where coding/computer-use reliability and long-context fidelity outweigh a frontier price tag (consider Opus 5 / 5.5 for newer work).

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (Anthropic Opus 4.8 system card, Vals AI model page + launch review, BenchLM model page + per-eval results, Artificial Analysis model page). Direct system-card and independent Vals/AA measurements were promoted over the prior BenchmarkList rows; the Terminal-Bench 2.1, Toolathlon, GDPval-AA and AA-index-rebase discrepancies are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
