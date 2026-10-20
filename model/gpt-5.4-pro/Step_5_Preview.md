# GPT-5.4 Pro — findings by Step 5 Preview

- Source: OpenAI `gpt-5.4-pro`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (`gpt-5.4-pro`; highest-accuracy inference setting in the GPT-5.4 family)
- **Short description:** OpenAI's Pro-tier inference setting for the GPT-5.4 family — the SAME weights as standard GPT-5.4 but with parallel test-time compute (explores multiple reasoning paths before answering). Positioned for correctness-critical work. Released Mar 2026, superseded by GPT-5.5 Pro (Apr 2026).
- **Provider / access:** OpenAI API (Responses API). ChatGPT Pro/Business/Enterprise. No free/Plus tier. Enterprise ZDR eligible.
- **Release / knowledge:** Released 2026-03-05. Knowledge cutoff not explicitly disclosed (GPT-5.4 family).
- **IDs:** `gpt-5.4-pro` (+ `xhigh`/`web`). No free/contributor ID.
- **Context window:** 1,000,000 (1M) input; 128,000 max output (GPT-5.4 family base — Pro is the same weights).
- **Modalities:** Text, image in; text out (GPT-5.4 family). Reasoning yes (parallel test-time compute); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $30.00/M in · $180.00/M out (6× standard GPT-5.4, the most expensive tier tracked — >99% of models). No confirmed Pro-specific cached price. No free tier.
- **Architecture:** Same MoE weights as standard GPT-5.4; parallel test-time compute is the only difference.

### Raw benchmarks found

> Cross-referenced vectorwire.ai (19 results/17 benchmarks, 11 independent, capability profile). Coverage is thin — coding, agentic, long-context, and multimodal are NOT separately rated for the Pro setting (7 of 8 capability baskets are unrated). Independent runs noted where available.

- BenchLM composite (2026-10-19): **68.7/100** overall, #22 of 956 models, 12 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): no Intelligence Index or speed measured for the Pro setting (N/A across the board); $30.00/$180.00 (blended $45.00/M) confirmed, ~1M context, text+image, 1 provider, cutoff 2025-08-31 — DEPRECATED on AA (suggests GPT-5.5 Pro)

Agent / tool use:

- HLE (with tools): **58.7%** (cross-ref, Anthropic Opus 4.7 system card)
- Finance Agent Benchmark: **61.5%** (cross-ref, Opus 4.7 system card)
- MultiChallenge (instruction-following under pressure): **69.23%** (labs.scale.com, independent)
- Vector Wire capability: Agentic **not rated** (too few results) — no live Terminal-Bench/OSWorld/Tau-bench row for the Pro setting
- BrowseComp / Toolathlon: not surfaced live for 5.4 Pro — treated as provisional
- BrowseComp now surfaced (2026-10-19): **89.3%** (OpenAI GPT-5.4 launch table, BenchLM) — a strong Pro-specific agentic-search row; Toolathlon still missing

Reasoning / knowledge:

- ARC-AGI-1: **94.5%** (xHigh, ARC Prize — independent)
- FrontierMath Tier 4: **37.5%** (epoch.ai, independent)
- HLE (with tools): **58.7%** (see tool use)
- vectara Factual Consistency: **91.7%** / Answer Rate: **100%** (independent)
- Vector Wire capability: **Reasoning "Capable"** (−22.7% vs leader, 3/6); **Math "Capable"** (−24.5%); **Factuality "Limited"** (−31.7%)
- GPQA Diamond / AIME 2025: not surfaced live for 5.4 Pro — treated as provisional
- New Pro-specific verified rows (2026-10-19): ARC-AGI-2 **83.3%** (OpenAI launch table via BenchLM — joins the 94.5% ARC-AGI-1), CritPt **30.0%** (AA), HLE without tools **42.7%** (clears the 40% bar on the no-tools read), FrontierScience **36.7%**, Epoch FrontierMath v2 Tiers 1–3 **82.456%** / Tier 4 **58.537%** (far above the file's v1-era Tier-4 37.5%), IPhO 2025 Theory **93.5%** (Meta Muse Spark chart — exceptional olympiad math)

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **not separately rated** for the Pro setting (Vector Wire leaves Coding unrated — too few results)
- Shares standard GPT-5.4's weights, so GPT-5.4 coding applies, but no Pro-specific verified number surfaced live — treated as provisional
- Terminal-Bench: not surfaced live for 5.4 Pro — treated as provisional

Multimodal:

- Text + image in; text out (GPT-5.4 family). No audio/video input, no non-text output.
- Vector Wire: Multimodal **not rated** (too few results) — no live MMMU row for the Pro setting

Long context:

- 1M input / 128K output (GPT-5.4 family base). Vector Wire: Long Context **not rated** (too few results). No explicit MRCR ≥98%-at-512K figure published.

- **Tool use: 72/100.** HLE with tools 58.7% and Finance Agent 61.5% are mid-tier, but Vector Wire does NOT rate Agentic for the Pro setting (too few results) and there is no live Terminal-Bench/OSWorld/Tau-bench/BrowseComp row — the thinnest agentic coverage of any model reviewed here. Scored conservatively on the shared-weights base plus the two tool-enabled reasoning numbers.
- **Reasoning: 87/100.** ARC-AGI-1 94.5% (independent, ARC Prize) and HLE with tools 58.7% are strong, and the third pass added Pro-specific verified rows that lift this above the prior read: ARC-AGI-2 83.3%, HLE without tools 42.7% (clears the 40% bar), CritPt 30.0%, IPhO 2025 Theory 93.5% and Epoch FrontierMath v2 82.5%/58.5% (Tiers 1–3/Tier 4 — well above the v1-era 37.5% Tier 4). Raised from 84; still below GPT-5.5 Pro's 88 on Vector Wire's Reasoning "Capable" (−22.7%) / Factuality "Limited" (−31.7%) and the missing GPQA/AIME row.
- **Context window: 92/100.** 1M input / 128K output (the GPT-5.4 family base — Pro is the same weights) — solid ≥1M tier. Not a full 100 because Vector Wire does not rate Long Context for the Pro setting and no explicit MRCR ≥98%-at-512K figure was published.
- **Multimodal: 78/100.** Text + image in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and Vector Wire not rating Multimodal for the Pro setting (no live MMMU row).
- **Coding: 80/100.** Coding is NOT separately rated for the Pro setting (Vector Wire leaves it unrated); scored on the shared GPT-5.4 weights, which are a capable mid-frontier coder. No Pro-specific SWE-bench/LiveCodeBench/Terminal-Bench number surfaced live, so this is a provisional estimate capped by the missing direct evidence.
- **Cost efficiency: 25/100.** Paid-only at $30/$180 per 1M (6× standard GPT-5.4, the most expensive tier tracked — >99% of models); no confirmed Pro-specific cached price and no free tier. Reserve for escalations that fail a confidence check.
- **Overall Score: 82/100.** Mean of the five non-cost dims (72+87+92+78+80)/5 = 81.8 (Reasoning raised 84→87 on the third-pass Pro-specific verified rows). A correctness-critical Pro setting for abstract/math reasoning (ARC-AGI-1 94.5%) at the highest price, but with very thin independent coverage — most capability baskets are unrated for this setting, and it is superseded by the cheaper-per-capability GPT-5.5 Pro. Prefer standard GPT-5.4 for everyday work.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated page, suggests GPT-5.5 Pro: no Index/speed measured for the Pro setting; $30/$180 confirmed, blended $45/M) and BenchLM (composite 68.7/100, #22/956, 12/644 benchmarks): new Pro-specific rows BrowseComp 89.3%, ARC-AGI-2 83.3%, CritPt 30.0%, HLE w/o tools 42.7%, FrontierScience 36.7%, Epoch FrontierMath v2 82.5%/58.5%, IPhO 2025 Theory 93.5% — Reasoning raised 84→87 on that verified evidence (Overall 81→82); Tool use stays 72 (BrowseComp is the only new agentic row; TB/OSWorld/Toolathlon still missing for Pro). Second-pass verification (2026-10-10): benchmarkregistry.org has no standalone GPT-5.4 Pro page (Pro shares standard GPT-5.4's weights; the base GPT-5.4 page — 56 results, updated 2026-10-07 — carries the shared independent runs: APEX-Agents 52.4%, BrowseComp 73.3%, SWE-bench Pro 57.7–59.1%). Prior pass (2026-10-08) used vectorwire.ai (19 results, 11 independent). GPT-5.4 Pro shares standard GPT-5.4's weights (parallel test-time compute is the only difference).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

### Normalized scores (1–100)
