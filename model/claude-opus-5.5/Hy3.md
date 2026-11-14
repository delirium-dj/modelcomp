# Claude Opus 5.5 — findings by Hy3

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-class flagship for long-running agentic coding and knowledge work; succeeds Opus 5 at lower price with always-on adaptive thinking steered by an effort parameter.
- **Provider / access:** Anthropic API (`claude-opus-5-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-09-22.
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1,000,000 tokens in; up to 128,000 tokens out (verified via Anthropic model page / OpenModels).
- **Modalities:** text in/out; image in; reasoning (adaptive thinking, effort param); tool/function calling; JSON mode. No native audio/video out.
- **Pricing (as of 2026-11-14):** In $4.00 / Out $20.00 / Cached read $0.20 per 1M tokens (Anthropic list). Fast mode In $8 / Out $40.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (xHigh): **66.4%** (Anthropic launch post, 2026-09-22)
- Terminal-Bench 4.0 (Max, Claude Code harness): **64.9%** (Terminal-Bench team, independent)
- OSWorld 2.1 (partial credit): **81.8%** (Anthropic)
- AutomationBench (max effort): **40%** (Anthropic)
- τ²-Bench Airline: listed on OpenRouter proxy, score not publicly disclosed

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (Anthropic)
- Artificial Analysis Intelligence Index: **58 / rank #1** (Artificial Analysis, independent, 2026-10-01)
- Terminal-Bench Science 0.1 (max): **58.7%** (Anthropic)

Coding:

- SWE-bench Pro Public (Max): **89.9%** (Anthropic)
- Vibe Code Bench 1.1 (OpenHands): **90.3%** (Vals AI, independent, Oct 2026)
- FrontierCode v1.1: **54.4%** (Anthropic)
- CursorBench 4.0: **57.8%** (Anthropic)
- GDPval-AA 2.1 (knowledge-work Elo): **1,846** (Anthropic)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER retrieval score found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite OSWorld 2.1 (81.8%) and Terminal-Bench 4.0 (66.4%); capped by AutomationBench 40% and undisclosed τ²-Bench.
- **Reasoning: 90/100.** HLE 67.7% with tools and AA Intelligence Index rank #1 (58) anchor top-tier reasoning; no public GPQA Diamond figure found this pass.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 78/100.** Text + image in, strong Chartography (89%); no native audio/video generation caps it at text-centric multimodal.
- **Coding: 90/100.** SWE-bench Pro 89.9% and Vibe Code Bench 90.3% are elite; FrontierCode 54.4% and CursorBench 57.8% hold it below 95.
- **Cost efficiency: 62/100.** $4/$20 per 1M is premium Opus pricing — cheaper than Opus 5 (~40% lower task cost) but high vs small models.
- **Overall Score: 89/100.** Mean of the five non-cost dims (90+90+99+78+90)/5 = 89.4 → 89. Best-fit: top-tier agentic coding & knowledge-work model with elite SWE and tool-use, gated by mid multimodal and premium cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — vendor launch posts, benchmark registries (Benchmark Registry, LuminaBench, OpenModels) and news; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Opus 5.5 — Benchmark Registry](https://benchmarkregistry.org/models/20015)
  - [Claude Opus 5.5 — OpenModels](https://openmodels.run/models/claude-opus-5-5)
  - [Anthropic releases Claude Opus 5.5 (CoAI)](https://ai.codigital.co.jp/zh-cn/news/claude-opus-5-5)
  - [Claude 5 series — Baidu Baike](https://baike.baidu.com/item/Claude%205/67948437)
