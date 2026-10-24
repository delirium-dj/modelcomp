# Claude Opus 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-10-16 (UTC) — deep rewrite pass; re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-opus-5-5`) re-read on 2026-10-23 now carries **83 source-displayable rows** (was 63 on 2026-10-18) and computes **86.6/100, #1 of 992** (was #1 of 228). Newly captured: **AA-LCR 84.7%**, **MLCR-AA 66.7%**, **AA Harvey LAB v1.0 91.2%** (held-out LAB criterion-pass 91.2%, all-pass 8.3%), **AA ITBench 38.2%**, AA-AnalystAgent 56.3%, Hermes Index 63.3 / Bench 76.7, GDP.pdf 26.2%, MazeBench 13%, **FrontierSWE v2 62.3%**, FrontierCode 1.1 Extended 63.6%, Bug Hunt 41.7 fixes, PostTrainBench v1.1 49.3%, **AA-MMMU-Pro 87.7%**, Chartography (tools) 89.0% / (no tools) 64.4%, OfficeQA 78.9% / Pro 67.7%, ExtractBench 86.06%, ParseBench 79.85%, Biomedical image 71.4%, GMMLU 94.3 / MILU 93.1, **FrontierMath v2 T1–3 91.2% / Tier-4 95.0%**, GraphWalks BFS 256K–1M 66.8%.
> **Refreshed values / conflicts:** AA-Briefcase now reads **1803 Elo** (was 1822 on 2026-10-18); AA AutomationBench **69.5%** (vs an earlier 70%); AA Intelligence Index **57.6%** (was 58); Terminal-Bench 4.0 **59.6% (AA)** vs **66.4% (Anthropic)**; and **AA-Omniscience hallucination rate 58.6%** (accuracy 66.2%) is a high confident-error rate worth flagging.
> **No material score change:** the new rows confirm the prior profile — frontier coding/tool use, weaker long-context-at-depth (GraphWalks 66.8% vs Gemini 4 Argon 84.2%) and premium price — so scores are held. Enriched evidence is recorded below.
> Sources this pass: https://benchlm.ai/models/claude-opus-5-5 · https://artificialanalysis.ai/models/claude-opus-5-5 · https://www.anthropic.com/claude-opus-5-5-system-card · https://epoch.ai/benchmarks/frontiermath-tier-4-v2 · https://llm-stats.com/models/claude-opus-5-5

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-5-5`, 63 rows) computed an overall **86.62/100 (#1 of 228)** and re-confirmed the prior pass. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run).
> Confirmed independent data this pass: Artificial Analysis Terminal-Bench 4.0 **60% (max, AA)** / **66.4% xhigh (Anthropic/Zapier)**, GDPval-AA v2.1 **1846 Elo**, AA-Briefcase v1.1 **1822 Elo**, AutomationBench-AA **70%**, SciCode **67%**, HLE **61%** (67.7% with tools), CritPt 32%, AA Intelligence Index **58 (#1/227)**. Coding: SWE-bench Pro **89.9% (#1/88, Vals; #1 on llm-stats)**, SWE Multilingual 93.9%, SWE-bench (Vals) 97.0%. **LMArena Agent leaderboard #1 of 54 (17.2%, Max config, 2026-10-14).**
> **Conflicts surfaced:** (1) HLE 67.7% (with tools, Anthropic) vs 61% (AA harness). (2) TB4.0 66.4% (xhigh, Anthropic) vs 60% (AA max) — effort/harness difference; TB4.0 ≠ the TB2.1 the methodology anchors on. (3) OSWorld 2.0 **48.7% (BenchLM)** contradicts an earlier "81.8% partial" reading — the 48.7% row is the sourced one. (4) Modalities: Anthropic lists text+image; PDF input appears in some trackers — treated as text+image+PDF with the caveat retained. (5) max-effort latency is extreme (AA TTFT >600s; LLM-Stats p95 TTFT 16.1s).
> Sources: https://www.anthropic.com/claude-opus-5-5 · https://www.anthropic.com/claude/opus · https://artificialanalysis.ai/models/claude-opus-5-5 · https://benchlm.ai/models/claude-opus-5-5 · https://benchlm.ai/benchmarks/swe-bench-pro · https://www.vals.ai/comparisons/anthropic_claude-opus-5-5-vs-grok_grok-4.7 · https://llm-stats.com/benchmarks/swe-bench-pro · https://modelcap.ai/benchmarks/lmarena-agent

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded Opus-tier model (2026-09-22), first of the Claude 5.5 family — long-running agentic coding, computer use and knowledge work, performing at Claude Fable 5.1 level for ~40% less to run and priced 20% below Opus 5 at the same 1M context.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud, Microsoft Foundry. No Zen Free ID.
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; no Free ID → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via `output-300k` batch beta).
- **Modalities:** text, image and PDF in → text out; reasoning, adaptive five effort levels; ZDR available.
- **Pricing (as of 2026-10-24):** **$4 in / $20 out** per 1M; cache reads **$0.20** (60% below Opus 5); Batch 50% ($2/$10); Fast Mode $8/$40 (up to 2.5× speed).
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 **1846 Elo**; AA normalized GDPval-AA **68.3%**; AA-Briefcase **1803 Elo** (refreshed from 1822)
- Terminal-Bench 4.0 **59.6% (AA)** / **66.4% xhigh (Anthropic)**; Terminal-Bench-Science 0.1 58.7%
- AutomationBench-AA **69.5% (AA)** / 40.0% (BenchLM); AA Harvey LAB v1.0 **91.2%**; Toolathlon-Verified 77.8% (pass@3 82.4%, pass³ 72.2%); AA ITBench 38.2%; AA-AnalystAgent 56.3%
- LMArena Agent #1 of 54 (17.2%, Max); OSWorld 2.0 **48.7%** (BenchLM, sourced); MazeBench 13%; GDP.pdf 26.2%
- Hermes Index 63.3 / Hermes Bench 76.7; CWE-bench v1 67.0%
- Vals Index 66.97% (#2 of 48); Vals Finance Agent v2 58.59% (#9); SRE Bench 12.21%

Reasoning / knowledge:

- HLE **61.4%** (AA) / **67.7% with tools** (Anthropic) / 64.4% no-tools; SciCode **66.9%**
- AA Intelligence Index **57.6 (#1)**; ARC-AGI-1 97.5%, ARC-AGI-2 91.7%; **AA-LCR 84.7%**, MLCR-AA 66.7%; CritPt 31.7%
- **AA-Omniscience index 46.4 / accuracy 66.2% / hallucination 58.6%**; HealthBench Professional 65.6% (raw 77.1%)
- FrontierMath v2 Tiers 1–3 **91.2%** / Tier-4 **95.0%** (Epoch AI); GMMLU 94.3, MILU 93.1

Coding:

- SWE-bench Pro **89.9%** (#1/88, Vals; #1 on llm-stats); SWE-bench (Vals) **97.0%**
- SWE Multilingual 93.9%; SWE Multimodal 61.4%; DeepSWE 74.2%; CursorBench 4.0 **57.8%**
- FrontierCode 1.1 Main 54.4% / Extended 63.6%; **FrontierSWE v2 62.3%**; ProgramBench 91.2%; Bug Hunt 41.7 fixes; PostTrainBench v1.1 49.3%

Multimodal / long context:

- AA-MMMU-Pro **87.7%**; Chartography (tools) 89.0% / (no tools) 64.4%; OfficeQA 78.9% / Pro 67.7%
- ExtractBench 86.06%; ParseBench 79.85%; Biomedical image 71.4%; BenchCAD Vision2Code 0.730 (no tools) / 0.962 (tools); Design Arena 1334
- AA-LCR 84.7%; GraphWalks BFS 256K–1M **66.8%** (vs Gemini 4 Argon 84.2%) — long-context retrieval is strong but not frontier at depth; no ≥98%-at-512K row

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846, AA-Briefcase 1803 and AA Harvey LAB 91.2% are first-in-field (>1750 ref), with TB4.0 59.6–66.4%, AutomationBench-AA 69.5% and LMArena Agent #1; capped because TB4.0 ≠ the TB2.1 anchor and OSWorld 2.0 is only 48.7%.
- **Reasoning: 92/100.** HLE 61–67.7%, FrontierMath Tier-4 95%, ARC-AGI-2 91.7% and AA-LCR 84.7% are frontier; AA Index 57.6 (#1) sits just below the 60 frontier ref and a 58.6% Omniscience hallucination rate holds it under 95.
- **Context window: 96/100.** 1M input with 128K (300K batch) output (≥1M band); GraphWalks 66.8% and no verified ≥98%-at-512K retention row keep it below 98.
- **Multimodal: 80/100.** Text + image + PDF in, text out; strong document/chart vision (MMMU-Pro 87.7%, ExtractBench 86.06%) but no audio/video in and no non-text output.
- **Coding: 95/100.** SWE-bench Pro 89.9% (#1), SWE-bench (Vals) 97.0%, SWE Multilingual 93.9% and CursorBench 57.8% are frontier-leading; DeepSWE 74.2% keeps the very top in reach.
- **Cost efficiency: 52/100.** $4/$20 per 1M sits above the $3/$15 ≈ 60 anchor; Batch + 95% cache-read discount soften it.
- **Overall Score: 91/100.** (92 + 92 + 96 + 80 + 95) / 5 = 91.0 → 91. Best fit: the default for long agentic coding and computer-use, at a premium price justified only when the agentic gains pay for themselves.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: second-pass enrichment over deep rewrite-pass public internet research (Anthropic Opus 5.5 announcement + system card, Artificial Analysis model page/leaderboards, BenchLM re-read 2026-10-23, Vals AI, LLM Stats, Epoch AI, ModelCap/LMArena). Independent AA rows were promoted; the HLE/TB4.0 harness gaps, the refreshed AA-Briefcase value, the 58.6% Omniscience hallucination rate and the long-context-at-depth gap are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
