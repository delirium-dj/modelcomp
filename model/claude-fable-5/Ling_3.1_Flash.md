# Claude Fable 5 — findings by Ling 3.1 Flash

- Source: Anthropic / Claude Fable 5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's flagship "Mythos-class" model, released 2026-06-09 for general availability (Mythos 5 is the restricted trusted-access twin of the same underlying model). Positioned for long-horizon agentic coding, knowledge work, and vision research; strongest gains are on long, complex tasks.
- **Provider / access:** Anthropic API `claude-fable-5` (Messages API, adaptive thinking always on, default effort `high`).
- **Release / knowledge:** 2026-06-09; reliable knowledge cutoff Jan 2026 (training-data cutoff Jan 2026).
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1M tokens default (no beta header; long context billed at standard pricing); max output 128K tokens per request. Verified on platform.claude.com model docs.
- **Modalities:** text and images in; text out; adaptive reasoning (always on); tool calls; computer use (OSWorld); no audio/video input documented.
- **Pricing (as of 2026-10-08):** $10 / MTok input, $50 / MTok output; cache read $1 / MTok (5% of input), 5m cache write $12.50, 1h cache write $20; Batch API 50% off input+output.
- **Architecture:** proprietary; shares weights with Claude Mythos 5, with safety fallbacks that route some sensitive requests to Claude Opus 4.8 (Anthropic states fallback occurs in <5% of sessions on average, 2% of GDPval-AA tasks).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas Public (Apr 2026 update): **83.3%** (Scale AI, pass rate; BenchmarkList 84.7%)
- Toolathlon: **77.9%** (BenchmarkList, 90th pct, rank 5/41)
- APEX-Agents (max effort): **43.3%** (BenchmarkList; 59.2% on APEX-Agents-AA)
- Tau3-Banking (AllTools retrieval, v1.0.1 grading): **38.1%** (BenchmarkList; 39.7% Sierra τ³-bench max)
- Tau2-Bench Telecom: **98.5%** (BenchmarkList, 99th pct)
- OSWorld Verified: **85.0%** (Anthropic system card, self-reported)
- BrowseComp: **88.0%** (BenchmarkList, 78th pct)
- AutomationBench: **68.7%** (BenchmarkList; Anthropic card reports 17.4% on a different AutomationBench row)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (BenchmarkList, 97th pct; Epoch AI harness 85.9% at max effort)
- Humanity's Last Exam: **59.0%** without tools / **64.5%** with tools (Anthropic launch data via CoreWeave/W&B; BenchmarkList 63.8%)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%** (evals.report / BenchmarkList, official)
- AA Intelligence Index: **62.1** (BenchmarkList, 100th pct of field, rank 3/427) / **65** (evals.report, official Jun 2026)
- AA-Omniscience: **43** index, 43.3 (evals.report / BenchmarkList, 90th pct factuality)
- AA-LCR: **82.3%** (Artificial Analysis, 95th pct long-context)

Coding:

- SWE-bench Verified: **95.0%** (Anthropic system card; Mercor mini-swe-agent 95.9%)
- SWE-bench Pro: **80.0%** (evals.report, verified; 80.4% small field, rank 1)
- LiveCodeBench: **89.8%** (BenchmarkList, 100th pct, rank 1/123)
- SciCode: **61.0%** (evals.report / BenchmarkList, 99th pct)
- DeepSWE: **70.0%** (DeepSWE 1.1, Datacurve); FrontierSWE: **90%** dominance score (official), FrontierSWE v2 47.0%
- Vibe Code Bench 1.1 (OpenHands): **90.4%** (Vals AI, 99th pct)
- CursorBench 3.1: **72.9%**; FrontierCode weighted (Main): **64.9%** (FrontierCode Diamond 29.3%)
- Terminal-Bench 2.1: **84.6%** (mini-swe-agent, high effort); best reported harness 88.0%
- Terminal-Bench 4.0 (Claude Code, max): **42.4–44.6%**
- SkillsBench: **70.9%**; SWE Atlas Codebase QnA: 39.0% (weak row)

Long context:

- AA-LCR **82.3%** (95th pct of 408); 1M-token window served at standard price; no separate MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 83.3%, Toolathlon 77.9%, OSWorld 85.0% and Tau2 Telecom 98.5% show elite tool/computer-use breadth; capped by mid-field APEX-Agents 43.3% and Tau3-Banking 38.1% on graded multi-turn retrieval.
- **Reasoning: 91/100.** GPQA Diamond 93.2%, ARC-AGI-2 89.2%, HLE 64.5% w/ tools and AA Index ~62–65 (rank 3/427) are frontier-tier; HLE without tools (59.0%) and GDP.pdf 29.8% keep it below the very top reasoning claims.
- **Context window: 90/100.** Full 1M-token window by default at standard pricing with 128K output, plus AA-LCR 82.3% measured long-context reasoning — among the best served windows in the dataset.
- **Multimodal: 85/100.** Image+text input with strong vision rows (ScreenSpot-Pro 87.3%, CharXiv 89.1%, OSWorld 85.0%) but text-only output, no audio/video, and a weak GDP.pdf 29.8% row.
- **Coding: 95/100.** SWE-bench Verified 95.0%, SWE-bench Pro 80.0%, LiveCodeBench 89.8%, Vibe Code Bench 90.4% and FrontierSWE 90% dominance make this the strongest coding profile in the field; Terminal-Bench 4.0 (42.4%) and SWE Atlas Codebase QnA (39.0%) are the caps.
- **Cost efficiency: 30/100.** $10 in / $50 out per 1M is top-of-market pricing; cache read at $1 and Batch 50% offset only heavy, cache-friendly workloads.
- **Overall Score: 90/100.** Mean of the five quality dims (88+91+90+85+95)/5 = 89.8 → 90; best fit for long-horizon agentic coding and knowledge work where budget is secondary.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Anthropic platform docs and system card, Artificial Analysis, BenchmarkList, evals.report, Benchmark Registry, Vals AI, Mercor, Epoch AI, CoreWeave/W&B); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
