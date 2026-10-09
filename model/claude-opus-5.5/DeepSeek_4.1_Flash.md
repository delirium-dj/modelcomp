# Claude Opus 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: Artificial Analysis Terminal-Bench 4.0 **59.6%** (Anthropic self-reports 66.4% at xhigh), GDPval-AA v2.1 **1846 Elo**, AA-Briefcase v1.1 **1822 Elo**, HLE **61.4%** (AA) vs **67.7%** with tools (Anthropic), SciCode **66.9%**, AA Intelligence Index **58 (max, #1/227)**, AutomationBench 40.0%, Vals Finance Agent v2 58.59% (#9). SWE-bench Pro 89.9%, CursorBench 4.0 57.8%, FrontierCode 1.1 Main 54.4%.
> **Conflicts surfaced:** (1) HLE 67.7% (with tools, Anthropic) vs 61.4% (AA harness); (2) TB4.0 66.4% (xhigh) vs 59.6% (AA max) — effort/harness difference, and TB4.0 ≠ the TB2.1 the methodology anchors on; (3) modalities: earlier sources list PDF input, the second pass found text+image only in some docs — treated as text+image+PDF with the caveat retained; (4) max-effort latency is extreme (AA TTFT 682s at max).
> Sources: https://www.anthropic.com/claude-opus-5-5 · https://platform.claude.com/docs/en/models/opus-5-5/overview · https://artificialanalysis.ai/models/claude-opus-5-5 · https://artificialanalysis.ai/articles/claude-opus-5-5 · https://www.vals.ai/benchmarks/fabv2 · https://benchlm.ai/models/claude-opus-5-5

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's upgraded Opus-tier model (2026-09-22), an upgrade to Claude Opus 5 rather than a new generation — long-running agentic coding, computer use and knowledge work, priced 20% below Opus 5 at the same 1M context. Anthropic now recommends it as the default start point for most workloads.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry; OpenCode Zen `opencode/claude-opus-5.5`. ID `claude-opus-5-5`. Effort low/medium/high/xhigh/max; Batch API; research-preview Fast Mode.
- **Release / knowledge:** 2026-09-22; knowledge cutoff June 2026.
- **IDs:** `claude-opus-5-5`; Zen `opencode/claude-opus-5.5`. No Free ID → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens; 128,000 max output (300,000 via `output-300k-2026-03-24` beta).
- **Modalities:** text, image and PDF in → text + tool-calls out; reasoning, five effort levels; ZDR available.
- **Pricing (as of 2026-10-09):** **$4 in / $20 out** per 1M; cache reads **$0.20** (95% off); cache writes $5 (5m) / $8 (1h); Batch 50% ($2/$10); Fast Mode $8/$40.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 **1846 Elo**; AA-Briefcase v1.1 **1822 Elo** (AA, first-in-field)
- Terminal-Bench 4.0 **59.6%** (AA) / **66.4%** xhigh (Anthropic); AutomationBench 40.0%; Toolathlon-Verified 77.8%
- OSWorld 2.0 81.8% partial; Terminal-Bench-Science 0.1 58.7%; Tau3-Banking 47.2% (AA)
- Vals Finance Agent v2 58.59% (#9, $9.22/test)

Reasoning / knowledge:

- HLE **61.4%** (AA) / **67.7%** with tools (Anthropic); SciCode **66.9%**
- AA Intelligence Index **58 (max, #1/227)**; ARC-AGI-2 91.7%; GraphWalks BFS 256K–1M 66.8%
- OfficeQA Pro 67.7%; Chartography (tools) 89.0%; HealthBench Professional 65.6%

Coding:

- SWE-bench Pro **89.9%**; SWE Multilingual 93.9%; FrontierCode 1.1 Main 54.4%; CursorBench 4.0 57.8%
- DeepSWE 74.2%; SWE-bench Verified **no verified public score found**

Long context:

- 1M window; ProgramBench full-window run reported but no percentage reproduced — no verified retention score.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1846 and AA-Briefcase 1822 are first-in-field (>1750 ref) with TB4.0 59.6% and AutomationBench 40%; capped because TB4.0 ≠ the TB2.1 anchor and Tau3 is 47.2%.
- **Reasoning: 92/100.** HLE 61.4–67.7% and SciCode 66.9% are frontier, AA Index 58 leads the field; held just below 95 by Index <60 and unpublished GPQA/CritPt/LCR.
- **Context window: 96/100.** 1M input with 128K (300K batch) output (≥1M band); no ≥98%-at-512K retention benchmark.
- **Multimodal: 80/100.** Text + image + PDF in, text out (≤"+video/PDF" band); no audio/video, no non-text output.
- **Coding: 94/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, SciCode 66.9% and CursorBench 57.8% are frontier; missing SWE-bench Verified/DeepSWE independent rows cap the very top.
- **Cost efficiency: 52/100.** $4/$20 per 1M sits above the $3/$15 ≈ 60 anchor; Batch + 95%-cache soften it.
- **Overall Score: 91/100.** (91 + 92 + 96 + 80 + 94) / 5 = 90.6 → 91. Best fit: the default for long agentic coding and computer-use, at a premium price justified only when the agentic gains pay for themselves.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Opus 5.5 docs/announcement, Artificial Analysis model page + launch article, Vals Finance Agent v2, BenchLM snapshot). Independent AA rows were promoted; the HLE/TB4.0 harness gaps and the max-effort latency caveat are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
