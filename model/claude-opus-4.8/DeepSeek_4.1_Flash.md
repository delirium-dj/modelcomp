# Claude Opus 4.8 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4-8`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. Vals AI: **Vals Index 55.10% (#15/45)** with **SWE-bench Verified 88.60% (#1)**, **Vibe Code Bench 82.72% (#1)**, **ProofBench 69.00% (#1)**, **Terminal Bench 2 70.04% (#2)**, Finance Agent v2 53.92% (#2), LiveCodeBench 87.82% (#3), GPQA 92.42% (#4), MMLU-Pro 89.58% (#4), MMMU 86.59% (#9), SAGE 54.79% (#3), MortgageTax 69.91% (#2), TaxEval v2 75.63% (#7), CorpFin v2 66.71% (#8). Artificial Analysis (max): **Intelligence Index 42 (#49/690)**, AA-Briefcase v1.1 1321, **GDPval-AA v2.1 1456 Elo**, AutomationBench-AA 46%, Terminal-Bench 4.0 22%, AA-SciCode 54%, HLE 49%, CritPt 21%, AA-Omniscience 29, AA Coding Index 74; TTFT ~37.9s. Anthropic system card / launch: OSWorld-Verified **83.4%**, BrowseComp **84.3%** (88.5 multi-agent), SWE-bench Pro 69.2%, SWE Multilingual 84.4%, SWE Multimodal 38.4%, GPQA Diamond 93.6%, HLE 49.8% / 57.9% with tools, USAMO 2026 96.7%, FrontierMath v2 T4 31.25%, MCP Atlas 82.2%, DeepSearchQA 93.1%, CharXiv 89.9%, ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%. opencode.ai data confirms **1M ctx, 128K out, cutoff 2026-01, text+image+pdf in, $5/$25 ($0.50 cached)**.
> **Conflicts surfaced:** (1) **AA Intelligence Index** — the launch article's **61.4 (old basket, 2026-05-28, "#1")** is not comparable to the current **v4.3.2 Index of 42 (#49/690)**, *below* GPT-6.1 Sol's 52. (2) **GDPval-AA** — **1890 Elo at launch (max)** vs **1456 Elo on the current v2.1 page**; the system card's 1593 is a third reading. (3) **Vals Index rebased** from #1 / ~70% at launch to **#15 / 55.10%** as the field deepened. (4) **Terminal-Bench 2.1 74.6% (system card)** vs **70.04% (Vals, "Terminal Bench 2")**; GPT-5.5's 78.2% leads it here. (5) **OSWorld 2.0 20.6% (BenchLM, newer harness)** vs OSWorld-Verified 83.4% (system card) — different versions, not comparable. (6) **BenchLM overall 69.08–70.12** (BenchAlign v5.8, 40 benchmarks) is a composite, not the 61.4 launch index.
> Sources: https://www.anthropic.com/news/claude-opus-4-8 · https://www.vals.ai/models/anthropic_claude-opus-4-8 · https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks · https://artificialanalysis.ai/models/claude-opus-4-8-vs-gpt-5-2 · https://benchlm.ai/compare/claude-opus-4-8-vs-gpt-5-6-sol · https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea/Claude%20Opus%204.8%20System%20Card.pdf · https://opencode.ai/data/anthropic/claude-opus-4-8

## Model card

- **Name:** Claude Opus 4.8 (API id `claude-opus-4-8`; no "Free" tier exists)
- **Short description:** Anthropic's most capable generally available model through mid-2026, released 2026-05-28 as an incremental checkpoint on Opus 4.7 with targeted gains in agentic coding, multi-domain reasoning, computer use and behavioural consistency ("honesty"). Built for long-running autonomous coding, research synthesis and enterprise tool orchestration; now superseded by Claude Opus 5 / 5.5.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-05-28 (Anthropic announcement / Vals / opencode.ai data); knowledge cutoff 2026-01 (opencode.ai data).
- **IDs:** `claude-opus-4-8`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (200K on Microsoft Foundry); max output 128,000 (Vals / opencode.ai); 1M-token requests bill at standard rates with no long-context surcharge. A 300,000-token beta was offered via a Batch-API header.
- **Modalities:** text, image and PDF/file in (opencode.ai data + Vals list file input; video unsupported); text out; tool calling both directions; reasoning yes (adaptive thinking); native computer-use automation added in this release.
- **Pricing (as of 2026-10-16):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input, $6.25 cache write; Fast Mode (research preview) $10/$50; Batch 50% off. Blended ≈$3.85/M (AA); **$13.14 per Vals Index test**.
- **Architecture:** proprietary dense transformer, closed; parameter count undisclosed (~600B estimated).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic system card) / **70.04%** (Vals, "Terminal Bench 2", #2) — GPT-5.5's 78.2% leads here
- Terminal-Bench 4.0: **22%** (AA, v4.3.2); Terminal-Bench 3.0: 21.1%; Terminal-Bench Science 0.1: 4.29% (Vals)
- OSWorld-Verified (computer use): **83.4%** (system card) / OSWorld 2.0 offline **20.6%** (BenchLM, newer harness)
- MCP Atlas: **82.2%** (system card); Toolathlon: **59.9%** (system card; prior file had 79.9%); WebArena-Verified 71.2%
- GDPval-AA: **1456 Elo (current AA v2.1)** / **1890 Elo (launch, max)** / **1593 (system card)**; AA-Briefcase v1.1 1321 Elo; AutomationBench-AA **46%** (AA)
- BrowseComp: **84.3% single-agent / 88.5% multi-agent** (system card); DeepSearchQA: **93.1%** (system card); Finance Agent v2: **53.92%** (Vals #2, AA agrees)
- Tau2-Bench Telecom: **94.4%** (AA); Tau3-Banking: ~34% — the checkpoint's weakest agentic row
- Vals Index: **55.10% (#15/45)**; EMB 69.37%; Code Migration 47.25%; SkillsBench 59.23% (#9)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (system card) / **92.42%** (Vals, #4); HLE: **49.8%** without tools / **57.9%** with tools (system card)
- ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (effort-dependent, BenchLM)
- USAMO 2026 (math): **96.7%** (system card); FrontierMath v2 Tier 4: **31.25%**, Tiers 1–3: 47.24%
- Artificial Analysis Intelligence Index: **42 (#49/690, v4.3.2)** — a rebase from the **61.4 (#1)** of the old launch basket
- AA-LCR ~77.7% (AA); CritPt **21%** (AA); AA-Omniscience **29** (AA, #2 at launch); AA-HLE 49%; AA-SciCode 54%
- MMLU-Pro: **89.58%** (Vals, #4); INCLUDE: 87.6% (system card); LCR / MRCR: **no verified public score found**

Coding:

- SWE-bench Verified: **88.6%** (system card + Vals #1); SWE-bench Pro: **69.2%**; SWE Multilingual: **84.4%**; SWE Multimodal: 38.4%
- Vibe Code Bench v1.1: **82.72% (#1)** (Vals); LiveCodeBench: **87.82% (#3)** (Vals); ProofBench v1.1: 69.00% (#1)
- AA Coding Index: **74** (AA); CursorBench 3.2: 62.3%; cursorBench31 58.4%; FrontierCode 1.1 Main 46.5%; PostTrainBench v1.1 32.9%
- GBA Eval (Game Boy Advance in Rust/Wasm, 24h): 70.9% overall; KernelBench CUDA: 37.3%
- Output speed: **57.3 tok/s** median (AA); AA blended price **$3.85/M**; very verbose (170M AA index tokens)

Long context:

- AA-LCR ~77.7% (AA) is the closest long-context-reasoning number; no model-specific MRCR/RULER value for 4.8 was reproduced. The Opus 4.6/4.7 MRCR v2 128K–256K 59.2% (4.7) is the nearest proxy for the shared 1M window.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 83.4%, MCP Atlas 82.2%, BrowseComp 84.3%, DeepSearchQA 93.1% and a still-top Vals rank keep it high; held below 90 because the corrected Terminal-Bench 2.1 (74.6%/70.04%), Toolathlon 59.9% and a declined GDPval-AA (1456 current vs 1890 launch) replaced the loftier prior readings.
- **Reasoning: 94/100.** GPQA Diamond 93.6%, HLE 57.9% with tools, USAMO 2026 96.7% and Vals GPQA 92.42% are frontier-grade; the ARC-AGI-3 dip (1.5%) and CritPt 21% hold it back, and the current AA index (42) trails GPT-6.1 Sol's 52.
- **Context window: 95/100.** 1M tokens (200K on Foundry) with 128K output, standard pricing and no long-context surcharge; AA-LCR ~77.7% is moderate and no model-specific public recall number exists.
- **Multimodal: 80/100.** Text, image and PDF/file input with text + tool-call output; CharXiv 89.9%, ScreenSpot Pro 87.9% and MMMU-Pro 86.59% (Vals) show strong chart/screen/document reading, but no audio, video or media generation.
- **Coding: 94/100.** SWE-bench Verified 88.6% (#1), SWE-bench Pro 69.2%, Vibe Code Bench 82.72% (#1), LiveCodeBench 87.82% and AA Coding Index 74 are top-tier; capped by SWE Multimodal 38.4% and no DeepSWE for the checkpoint.
- **Cost efficiency: 45/100.** $5/$25 per 1M with no free tier, a $10/$50 Fast Mode and $13.14 per Vals test — premium by design; cached input and 50%-off batch are the only relief.
- **Overall Score: 90/100.** Mean of the five quality dims (89+94+95+80+94)/5 = 90.4 → 90. Best fit: enterprise agent platforms where coding/computer-use reliability and long-context fidelity outweigh a frontier price tag (consider Opus 5 / 5.5 for newer work).

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Anthropic Opus 4.8 announcement + system card, Vals AI model page + Vals Index leaderboard, Artificial Analysis launch article + model pages, BenchLM comparison pages, opencode.ai data, GIGAZINE / Tech Insider / RD World coverage). Direct system-card and independent Vals/AA measurements were promoted over vendor-only rows; the AA-index rebase, GDPval-AA decline, Vals-index drift, Terminal-Bench 2.1 gap and OSWorld version mismatch are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
