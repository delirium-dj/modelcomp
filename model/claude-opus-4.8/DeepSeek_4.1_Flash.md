# Claude Opus 4.8 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4-8`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-opus-4-8`, **64 rows**, **69.69/100, #16 of 1015** — was 63 rows, 69.75, #18 of 992), Anthropic system card, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex.
> **Refreshed values:** Terminal-Bench 2.1 (Vals) **71.9%** (was 70.04%; system-card row 74.6% stands); ExtractBench 86.84% (Nov 5 snapshot).
> **Newly captured:** **FrontierCode 2.0 14.7%** (Cognition — a weak coding-harness row).
> **Re-verified unchanged:** OSWorld-Verified 83.4%; MCP Atlas 82.2%; BrowseComp 84.3%; DeepSearchQA 93.1%; Finance Agent v2 53.9%; τ²-bench 94.4%; GDPval-AA 1593 (card) / 47.7% (AA); AA Agentic Index 42.6; GPQA 93.6% / 92.4% (Vals); HLE 57.9% w/ tools; USAMO 96.7%; FrontierMath v2 80.000/56.098; AA Index 41.8; Omniscience 28.8/48.8/39.3; SWE-bench Verified 88.6%; pricing $5/$25 ($0.50 cached).
> **No score change:** enterprise-agent profile unchanged; scores held at 90.
> Sources this pass: https://benchlm.ai/models/claude-opus-4-8 · https://www.anthropic.com/news/claude-opus-4-8 · https://artificialanalysis.ai/models/claude-opus-4-8 · https://www.vals.ai/models/anthropic_claude-opus-4-8

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-opus-4-8`) re-read on 2026-10-23/25 carried **63 rows** (was 43) and computed **69.75/100, #18 of 992**. Newly captured then: aaTerminalBench21 84.6%, TB2.1 Vals 71.9%*(first read 70.04)*, terminalBenchHard 58.3%, AA Agentic Index 42.6%, EnterpriseOps-Gym 44.0%, AA-AnalystAgent 45.0%, Gert Labs 72.97%, ResearchClawBench 21.1%, MazeBench 0%; CursorBench 3.1 58.4% / 3.2 62.3%, AA-SciCode 54.4%, FrontierCode 46.5%, AA Coding Index 74.3%, ExtractBench 87.09%, ParseBench 62.27%, CharXiv 80.5% no-tools; AA Index 41.8%, AA-GPQA 92.0%, AA-HLE 48.7%, AA-Omniscience 28.8/48.8/39.3, AA-IFBench 62.2%, FrontierMath v2 80.000/56.098.

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-4-8`, 43 rows) computed an overall **69.82/100 (#17 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Re-sourced: Vals Index 55.10% (#15/45) with SWE-bench Verified 88.60% (#1), Vibe Code 82.72% (#1), ProofBench 69.00% (#1), TB2 70.04% (#2), Finance Agent v2 53.92%, LiveCodeBench 87.82%, GPQA 92.42%, MMLU-Pro 89.58%. AA (max): Index 42 (#49/690), AA-Briefcase 1321, GDPval-AA 1456, AutomationBench 46%, TB4.0 22%, SciCode 54%, HLE 49%, CritPt 21%. Anthropic card: OSWorld-Verified 83.4%, BrowseComp 84.3% (88.5 multi-agent), SWE-bench Pro 69.2%, SWE Multilingual 84.4%, SWE Multimodal 38.4%, GPQA 93.6%, HLE 49.8%/57.9% tools, USAMO 96.7%, FrontierMath v2 T4 31.25%, MCP Atlas 82.2%, DeepSearchQA 93.1%, CharXiv 89.9%, ScreenSpot Pro 87.9%. Conflicts surfaced: AA Index rebase (61.4→42); GDPval 1890 launch vs 1456 current vs 1593 card; Vals Index drift; TB2.1 74.6 vs 70.04; OSWorld 2.0 20.6 vs Verified 83.4; BenchLM composite.

## Model card

- **Name:** Claude Opus 4.8 (API id `claude-opus-4-8`; no "Free" tier exists)
- **Short description:** Anthropic's most capable generally available model through mid-2026, released 2026-05-28 as an incremental checkpoint on Opus 4.7 with targeted gains in agentic coding, multi-domain reasoning, computer use and behavioural consistency ("honesty"). Built for long-running autonomous coding, research synthesis and enterprise tool orchestration; now superseded by Claude Opus 5 / 5.5.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI, Microsoft Foundry. Closed, API-only; no open weights.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff 2026-01.
- **IDs:** `claude-opus-4-8`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (200K on Microsoft Foundry); max output 128,000; 1M requests bill at standard rates with no long-context surcharge. A 300,000-token beta was offered via a Batch-API header.
- **Modalities:** text, image and PDF/file in; text out; tool calling both directions; reasoning yes (adaptive thinking); native computer-use automation added in this release.
- **Pricing (as of 2026-11-06):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input, $6.25 cache write; Fast Mode $10/$50; Batch 50% off. Blended ≈$3.85/M (AA); $13.14 per Vals Index test.
- **Architecture:** proprietary dense transformer, closed; parameter count undisclosed (~600B estimated).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (system card) / **71.9% (Vals, refreshed)** / 84.6% (AA variant row); TB4.0 22% (AA); TB3.0 21.1%
- OSWorld-Verified **83.4%** (card) / OSWorld 2.0 offline **20.6%** (BenchLM newer harness); MCP Atlas **82.2%**; Toolathlon **59.9%**; WebArena-Verified 71.2%
- GDPval-AA **1593 (card) / 47.7% (AA)**; AA-Briefcase 1321; AutomationBench-AA 46%; AA Agentic Index 42.6%; EnterpriseOps-Gym 44.0%; AA-AnalystAgent 45.0%
- BrowseComp 84.3% / 88.5% multi-agent; DeepSearchQA 93.1%; Finance Agent v2 53.9%; τ²-bench Telecom **94.4%**; Gert Labs 72.97%; MazeBench 0%
- Vals Index 55.10% (#15/45); EMB 69.37%; Code Migration 47.25%; SkillsBench 59.23%

Reasoning / knowledge:

- GPQA Diamond **93.6%** (card) / 92.4% (Vals); HLE **57.9%** with tools / 49.8% w/o; USAMO 2026 **96.7%**
- ARC-AGI-1 92.5%; ARC-AGI-2 **72.1%**; ARC-AGI-3 1.5%; FrontierMath v2 T1–3 80.000% / Tier-4 **56.098%**
- AA Intelligence Index **41.8**; AA-LCR 77.7%; CritPt 20.9; MLCR-AA ~; AA-HLE 48.7; AA-Omniscience 28.8 / 48.8% / 39.3%; AA-IFBench 62.2%; MMLU-Pro 89.6% (Vals); INCLUDE 87.6%

Coding:

- SWE-bench Verified **88.6%** (#1-class); SWE-bench Pro 69.2%; SWE Multilingual 84.4%; SWE Multimodal 38.4%
- Vibe Code Bench 82.72% (#1); LiveCodeBench 87.8%; ProofBench 69.00% (#1); AA Coding Index 74.3
- CursorBench 3.1 58.4% / 3.2 62.3%; FrontierCode 1.1 Main 46.5% / **FrontierCode 2.0 14.7%**; PostTrainBench 32.9%; Bug Hunt 27.0 fixes; output ~57.3 tok/s

Long context / multimodal:

- AA-LCR 77.7%; no model-specific MRCR/RULER reproduced for this checkpoint
- CharXiv 89.9% (80.5% w/o tools); ScreenSpot Pro 87.9%; OfficeQA Pro 66.2%; ExtractBench 86.84%; ParseBench 62.27%; Design Arena 1257

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld-Verified 83.4%, MCP Atlas 82.2%, BrowseComp 84.3%, DeepSearchQA 93.1% and τ² 94.4% keep it high; held below 90 by TB2.1 71.9–74.6%, Toolathlon 59.9% and GDPval-AA 1593 / 47.7%.
- **Reasoning: 94/100.** GPQA 93.6%, HLE 57.9% with tools, USAMO 96.7% and FrontierMath T4 56.1% are strong; the ARC-AGI-3 dip (1.5%), CritPt 20.9 and the current AA index (41.8) hold it back.
- **Context window: 95/100.** 1M tokens (200K on Foundry) with 128K output, standard pricing and no long-context surcharge; AA-LCR 77.7% is moderate and no model-specific public recall number exists.
- **Multimodal: 80/100.** Text, image and PDF/file input with text + tool-call output; CharXiv 89.9%, ScreenSpot Pro 87.9% and MMMU-Pro 86.59% show strong document/screen reading; no audio/video.
- **Coding: 94/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, Vibe Code 82.72% and LiveCodeBench 87.8% are top-tier; capped by SWE Multimodal 38.4%, FrontierCode 2.0 14.7% and no DeepSWE for the checkpoint.
- **Cost efficiency: 45/100.** $5/$25 per 1M, no free tier, $10/$50 Fast Mode and $13.14 per Vals test — premium by design; cached input and 50%-off batch are the only relief.
- **Overall Score: 90/100.** (89 + 94 + 95 + 80 + 94) / 5 = 90.4 → 90. Best fit: enterprise agent platforms where coding/computer-use reliability and long-context fidelity outweigh a frontier price tag (consider Opus 5 / 5.5 for newer work).

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Opus 4.8 announcement + system card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex). Refreshed TB2.1-Vals and ExtractBench, captured FrontierCode 2.0; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [BenchLM — Claude Opus 4.8 benchmark scores](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Vals AI — Claude Opus 4.8](https://www.vals.ai/models/anthropic_claude-opus-4-8)
  - [Epoch AI — FrontierMath v2 Tier-4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
