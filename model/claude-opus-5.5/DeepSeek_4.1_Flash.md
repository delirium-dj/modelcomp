# Claude Opus 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-10-16 (UTC) — deep rewrite pass
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources re-run).
> Confirmed independent data this pass: Artificial Analysis Terminal-Bench 4.0 **60% (max, AA)** / **66.4% xhigh (Anthropic/Zapier)**, GDPval-AA v2.1 **1846 Elo**, AA-Briefcase v1.1 **1822 Elo**, AutomationBench-AA **70%**, SciCode **67%**, HLE **61%** (67.7% with tools), CritPt 32%, AA Intelligence Index **58 (#1/227)**. Coding: SWE-bench Pro **89.9% (#1/88, Vals; #1 on llm-stats)**, SWE Multilingual 93.9%, SWE-bench (Vals) 97.0%. **LMArena Agent leaderboard #1 of 54 (17.2%, Max config, 2026-10-14).**
> **Conflicts surfaced:** (1) HLE 67.7% (with tools, Anthropic) vs 61% (AA harness). (2) TB4.0 66.4% (xhigh, Anthropic) vs 60% (AA max) — effort/harness difference; TB4.0 ≠ the TB2.1 the methodology anchors on. (3) OSWorld 2.0 **48.7% (BenchLM)** contradicts an earlier "81.8% partial" reading — the 48.7% row is the sourced one. (4) Modalities: Anthropic lists text+image; PDF input appears in some trackers — treated as text+image+PDF with the caveat retained. (5) max-effort latency is extreme (AA TTFT >600s).
> Sources: https://www.anthropic.com/claude-opus-5-5 · https://www.anthropic.com/claude/opus · https://artificialanalysis.ai/models/claude-opus-5-5 · https://benchlm.ai/models/claude-opus-5-5 · https://benchlm.ai/benchmarks/swe-bench-pro · https://www.vals.ai/comparisons/anthropic_claude-opus-5-5-vs-grok_grok-4.7 · https://llm-stats.com/benchmarks/swe-bench-pro · https://modelcap.ai/benchmarks/lmarena-agent

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded Opus-tier model (2026-09-22), first of the Claude 5.5 family — long-running agentic coding, computer use and knowledge work, performing at Claude Fable 5.1 level for ~40% less to run and priced 20% below Opus 5 at the same 1M context.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud, Microsoft Foundry. No Zen Free ID.
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; no Free ID → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via `output-300k` batch beta).
- **Modalities:** text, image and PDF in → text out; reasoning, adaptive five effort levels; ZDR available.
- **Pricing (as of 2026-10-16):** **$4 in / $20 out** per 1M; cache reads **$0.20** (60% below Opus 5); Batch 50% ($2/$10); Fast Mode $8/$40 (up to 2.5× speed).
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 **1846 Elo**; AA-Briefcase v1.1 **1822 Elo** (AA, first-in-field)
- Terminal-Bench 4.0 **60% (AA max)** / **66.4% xhigh (Anthropic)**; Terminal-Bench-Science 0.1 58.7%
- AutomationBench-AA **70%** (AA) / 40.0% (BenchLM); Toolathlon-Verified 77.8%; CWE-bench v1 67.0%
- LMArena Agent #1 of 54 (17.2%, Max); OSWorld 2.0 **48.7%** (BenchLM, sourced)
- Vals Index 66.97% (#2 of 48); Vals Finance Agent v2 58.59% (#9); SRE Bench 12.21%

Reasoning / knowledge:

- HLE **61%** (AA) / **67.7% with tools** (Anthropic); HLE w/o tools 64.4%; SciCode **67%**
- AA Intelligence Index **58 (max, #1/227)**; ARC-AGI-1 97.5%, ARC-AGI-2 91.7%; CritPt 32%; AA-Omniscience 46 (accuracy)
- HealthBench Professional 65.6%; AA-LCR v1.1 (LCR) not published for this row

Coding:

- SWE-bench Pro **89.9%** (#1/88, Vals; #1 on llm-stats); SWE-bench (Vals) **97.0%**
- SWE Multilingual 93.9%; SWE Multimodal 61.4%; DeepSWE 74.2%; CursorBench 4.0 **57.8%**; FrontierCode 1.1 Main 54.4%
- SWE-bench Verified independent (Vals) 97.0%; ProgramBench 91.2%

Long context:

- 1M window; no ≥98%-at-512K retention benchmark found — no verified retention score.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 and AA-Briefcase 1822 are first-in-field (>1750 ref), with TB4.0 60–66.4%, AutomationBench-AA 70% and LMArena Agent #1; capped because TB4.0 ≠ the TB2.1 anchor and OSWorld 2.0 is only 48.7%.
- **Reasoning: 92/100.** HLE 61–67.7%, SciCode 67% and ARC-AGI-2 91.7% are frontier; AA Index 58 (#1) sits just below the 60 frontier ref, holding it under 95.
- **Context window: 96/100.** 1M input with 128K (300K batch) output (≥1M band); no verified ≥98%-at-512K retention benchmark.
- **Multimodal: 80/100.** Text + image + PDF in, text out (≤"+video/PDF" band); no audio/video in, no non-text output.
- **Coding: 95/100.** SWE-bench Pro 89.9% (#1), SWE-bench (Vals) 97.0%, SWE Multilingual 93.9% and CursorBench 57.8% are frontier-leading; DeepSWE 74.2% keeps the very top in reach.
- **Cost efficiency: 52/100.** $4/$20 per 1M sits above the $3/$15 ≈ 60 anchor; Batch + 95% cache-read discount soften it.
- **Overall Score: 91/100.** (92 + 92 + 96 + 80 + 95) / 5 = 91.0 → 91. Best fit: the default for long agentic coding and computer-use, at a premium price justified only when the agentic gains pay for themselves.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: deep rewrite-pass public internet research (Anthropic Opus 5.5 announcement/model pages, AWS Bedrock model card, Artificial Analysis model page, BenchLM, Vals AI, LLM Stats, ModelCap/LMArena). Independent AA rows were promoted; the HLE/TB4.0 harness gaps, the OSWorld 2.0 discrepancy and the max-effort latency caveat are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
