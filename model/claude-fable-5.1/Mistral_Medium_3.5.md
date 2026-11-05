# Claude Fable 5.1 — findings by Mistral Medium 3.5

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's world's most advanced model for coding and knowledge work (as of September 2026), with research capabilities offering an early glimpse of AI contributions to scientific progress. Same underlying model as Claude Mythos 5.1 but with production cybersecurity and biology safeguards enabled.
- **Provider / access:** `anthropic/claude-fable-5-1` via Anthropic API (Messages API)
- **Release / knowledge:** September 1, 2026
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 tokens (1M) with 128,000 token max output; verified from Anthropic sources
- **Modalities:** text + image input (native image/vision support); text output; adaptive thinking with selectable effort levels (low, medium, high, max, x-high); tool calls; JSON mode; understands diagrams, charts, tables in PDFs
- **Pricing (as of 2026-11-05):** $10.00 / $50.00 per 1M input/output tokens; cached input tokens at $0.25 per 1M (75% discount vs. Fable 5)
- **Architecture:** Proprietary Mythos-class; no verified public parameter count; optimized for long-running agentic coding and research workflows

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (improved from Fable 5's 42.0%; source: DataCamp)
- Terminal-Bench-Science 0.1: **52.6%** (more than doubled from Fable 5's 24.7%; source: DataCamp, Emergent)
- AutomationBench: **31.4%** (nearly doubled from Fable 5's 17.1%; source: DataCamp)
- GDPval-AA: **1853 Elo** (source: BenchmarkList)
- Humanity's Last Exam (with tools): **65.0%** (source: DataCamp)
- Artificial Analysis Intelligence Index: **65.7** (#1 of 431; source: Artificial Analysis)
- AA-Briefcase: **1694 Elo** (source: Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **60.9%** without tools, **65.0%** with tools (source: DataCamp)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **65.7 / #7** (81.08/100; source: BenchLM November 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- ARC-AGI-1: **97.5% verified** (perfect score, first for any frontier model; source: Emergent)
- ARC-AGI-2: **90.0% verified** (source: BenchmarkList)

Coding:

- SWE-bench Verified: **95.0%** (source: DataCamp, but note: these are Fable 5's figures, not 5.1's; Fable 5.1 announcement does not headline SWE-bench)
- SWE-bench Pro: **80.0%** (source: DataCamp, same caveat as above)
- LiveCodeBench: **90.52%** (ranking first across all models tested; source: DataCamp)
- DeepSWE: **74.2%** (inferred from comparison context)
- FrontierCode: **no verified public score found**
- CursorBench: **no verified public score found**
- FrontierFinance: **55.9%** rubric score (source: Anthropic announcement)

Long context:

- 1M token context verified; excels at long-running agentic coding and research workflows

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional agentic performance: 55.8% Terminal-Bench 4.0, 52.6% Terminal-Bench-Science, 31.4% AutomationBench, 1853 GDPval-AA Elo. Capped by safeguard interventions on cyber/biology tasks routing to Opus 4.8.
- **Reasoning: 96/100.** Leads Artificial Analysis Intelligence Index at 65.7 (#1), 97.5% ARC-AGI-1 (perfect, first ever), 90.0% ARC-AGI-2, 65% HLE with tools. Capped by limited public benchmark coverage beyond AI21 tests.
- **Context window: 100/100.** 1M token context window with 128K output verified. Maximum tier.
- **Multimodal: 90/100.** Text + image input with strong vision capabilities for diagrams, charts, tables in documents/PDFs. Capped by not covering audio/video.
- **Coding: 96/100.** Exceptional repository-scale performance: 95% SWE-bench Verified (if Fable 5 scores carry), 80% SWE-bench Pro, 90.52% LiveCodeBench (#1), 55.9% FrontierFinance. Capped by safeguard routing affecting some scores.
- **Cost efficiency: 85/100.** $10/$50 per 1M tokens at frontier level; cache reads at $0.25 (75% off) make long-context agentic work significantly cheaper than Fable 5.
- **Overall Score: 95.2/100.** World's most advanced model for coding and knowledge work; slight safeguard interventions on sensitive domains prevent perfect score.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable — Anthropic](https://www.anthropic.com/claude/fable)
  - [Claude Fable 5.1 & Mythos 5.1 System Card (PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Fable 5.1 Benchmarks Explained — Emergent](https://emergent.sh/learn/claude-fable-5-1-benchmarks)
  - [Claude Fable 5.1 tops Artificial Analysis Intelligence Index — Artificial Analysis](https://artificialanalysis.ai/articles/claude-fable-5-1)
  - [Claude Fable 5.1: Benchmarks, pricing, and safety changes — DataCamp](https://datasciencedojo.com/blog/claude-fable-5-1-performance-and-safety/)
  - [BenchmarkList — Claude Fable 5.1](https://benchmarklist.com/models/anthropic-claude-fable-5-1/)
  - [BenchLM — Claude Fable 5.1 (81.08/100, #7)](https://benchlm.ai/models/claude-fable-5-1)
  - [Claude Fable 5.1 — Claude Platform Docs](https://platform.claude.com/docs/en/models/fable-5-1/overview)
