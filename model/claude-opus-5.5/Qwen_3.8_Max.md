# Claude Opus 5.5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Claude 5.5-family model, leading in agentic coding, computer use and knowledge work; performs near Claude Fable 5.1 while costing 40% less to run than Opus 5.
- **Provider / access:** Claude Platform (`claude-opus-5-5`), plus AWS Bedrock, Google Cloud Vertex AI and Microsoft Azure. Messages API; Fast mode (up to 2.5x) in Claude Code / platform.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not published. First release since Anthropic's "pacing the frontier" call; externally evaluated by Frontier Design and METR.
- **IDs:** `anthropic/claude-opus-5-5` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens (armes.ai model docs); max output not separately published in the launch post.
- **Modalities:** text + image in, text out; reasoning yes (adaptive thinking, always-on — no "thinking off" mode); tool calls yes; computer use (OSWorld) and visual chart recognition confirmed.
- **Pricing (as of 2026-10-20):** $4 / 1M input, $20 / 1M output, $0.20 / 1M cache reads, $5 / 1M cache writes (Anthropic). Fast mode: $8 in / $40 out per 1M. Zero data retention available.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort; leads Fable 5.1 55.8%, Opus 5 52.3%, GPT-6 Astra 57.9%, GPT-5.6 Sol 37.3%; ±2.6 pts SE)
- OSWorld 2.1 (computer use): **81.8%** partial (Anthropic table)
- AutomationBench (Zapier): **40.0%** (run without fallback models; safeguard interventions counted as failures, so understates real-world)
- GDPval-AA v2.1: **1846 Elo** (best in table; Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542)
- WANDR (Perplexity, large data collection): outperforms Fable 5.1 / Opus 5 at lower cost (offline-tool setup, not directly comparable to Perplexity's published numbers)

Reasoning / knowledge:

- Humanity's Last Exam: **67.7%** with tools (leads Fable 5.1 65.6%, Opus 5 63.6%, GPT-6 Astra 57.2%)
- Terminal-Bench-Science 0.1: **58.7%** (agentic scientific research; behind GPT-6 Astra 64.6%)
- GPQA Diamond: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- FrontierCode v1.1 (Main): **54.4%** (54.6% at default medium effort — higher than all other models; GPT-6 Astra 53.3% top)
- CursorBench 4.0: **57.8%** (52.5% at default; beats GPT-5.6 Sol top 41.7% by 11 pts)
- Terminal-Bench 4.0: **66.4%** (see tool use; also the agentic-coding headline)
- Chartography (visual chart recognition): **89.0%** with tools
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found in the launch post

Long context:

- 1M-token window; no MRCR/RULER figure published in the launch post — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 66.4% (leads all rivals), OSWorld 2.1 81.8% and strong WANDR; capped slightly by AutomationBench 40.0% (run without fallbacks) trailing GPT-6 Astra 41.4%.
- **Reasoning: 96/100.** HLE 67.7% with tools (best in table) and GDPval-AA 1846 Elo (top); near the ceiling, held back only by absent GPQA and Terminal-Bench-Science trailing Astra.
- **Context window: 98/100.** 1M-token window; a touch below perfect because no long-context retrieval benchmark (MRCR/RULER) was published to verify effective use.
- **Multimodal: 88/100.** Chartography 89.0% (with tools) and OSWorld computer-use confirm strong vision; capped as no MMMU-Pro / broad image-in benchmark was reported.
- **Coding: 96/100.** FrontierCode 54.4% (beats all), CursorBench 57.8%, Terminal-Bench 4.0 66.4% and Terminal-Bench-Science 58.7% — best-in-class agentic coding at ~1/5 the cost of Astra per task; held just short of 100 by vendor-run provenance.
- **Cost efficiency: 70/100.** $4/$20 is 20% cheaper than Opus 5 and 40% cheaper to run per task with 60%-cheaper cache reads — excellent for a frontier model, but still a premium paid tier (not $0).
- **Overall Score: 95/100.** Mean of Tool 95 + Reasoning 96 + Context 98 + Multimodal 88 + Coding 96 = 94.6 → 95. Best fit: long-horizon agentic coding, codebase-wide migrations/audits, computer use and high-stakes knowledge work where efficiency and alignment matter.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Anthropic's official "Introducing Claude Opus 5.5" launch post benchmark table + pricing; armes.ai model docs for the 1M context window); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
