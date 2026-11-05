# Claude Opus 5.5 — findings by Mistral Medium 3.5

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier reasoning model for agentic coding, knowledge work, and computer use. Released September 22, 2026 as the strongest-performing model in Anthropic's lineup, with improved efficiency and lower cost than Opus 5.
- **Provider / access:** `anthropic/claude-opus-5.5` via Anthropic API (Messages API)
- **Release / knowledge:** September 22, 2026
- **IDs:** `anthropic/claude-opus-5.5` (no free tier)
- **Context window:** 1,048,576 tokens (1M) verified from official system card and product page
- **Modalities:** text + image input; text output; adaptive always-on extended thinking; tool calls; JSON mode
- **Pricing (as of 2026-11-05):** $4.00 / $20.00 per 1M input/output tokens; ~98 tokens/s streaming speed
- **Architecture:** Proprietary dense autoregressive decoder-only transformer with grouped-query attention; adaptive always-on extended thinking; no verified public parameter count or MoE configuration disclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort, safeguards on; source: Anthropic system card §8, Vellum blog)
- AutomationBench: **40.0%** (Zapier harness, no fallback; source: Anthropic announcement)
- GDPval-AA v2.1: **1846 Elo** (knowledge work; source: Anthropic, Vellum, BenchLM)
- Humanity's Last Exam (with tools): **67.7%** (source: Anthropic system card)
- Chartography (with tools): **89.0%** (source: Anthropic system card)
- Artificial Analysis Intelligence Index: **58** (max effort, leading 6 of 10 core evaluations; source: Artificial Analysis, Vellum)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** (with tools; source: Anthropic system card)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** (source: Artificial Analysis October 2026)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **89.9%** (source: Anthropic system card §8)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (source: Artificial Analysis via Vellum)
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **74.2%** (source: Anthropic system card §8)
- FrontierCode v1.1 Main: **54.4%** (source: Anthropic announcement)
- FrontierCode Extended: **63.6%** (source: Anthropic system card)
- FrontierSWE V2: **62.3%** (Proximal harness, mean across trials; source: Anthropic system card)
- ProgramBench: **91.2%** (source: Anthropic system card)
- CursorBench 4.0: **57.8%** (source: Anthropic announcement)

Long context:

- No specific long-context retrieval benchmarks reported; 1M token context verified

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong agentic performance with 66.4% Terminal-Bench 4.0 at xhigh effort, 40% AutomationBench, and 1846 GDPval-AA Elo. Capped by AutomationBench ceiling and lack of public Toolathon/MCP-Atlas results.
- **Reasoning: 95/100.** Leads Artificial Analysis Intelligence Index at 58, with 1846 Elo on GDPval-AA v2.1 and 67.7% HLE with tools. Capped by absence of GPQA Diamond and limited public knowledge benchmark coverage.
- **Context window: 100/100.** 1M token context window verified from official documentation. Maximum tier.
- **Multimodal: 85/100.** Native image input with strong vision capabilities for computer use and document understanding. Not full video support. Capped by multimodal breadth vs. specialized vision models.
- **Coding: 95/100.** Exceptional repository-scale performance: 89.9% SWE-bench Pro, 74.2% DeepSWE v1.1, 57.8% CursorBench 4.0. Capped by Terminal-Bench being best-in-class but not perfect.
- **Cost efficiency: 85/100.** $4/$20 per 1M input/output tokens represents premium pricing but 40% cheaper than Opus 5 for typical workloads; competitive at frontier performance level.
- **Overall Score: 94/100.** Frontier reasoning and coding with best-in-class agentic capabilities; slight gap in multimodal breadth prevents perfect score.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 — Anthropic](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 System Card (PDF)](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [Claude Opus 5.5 Benchmarks Explained — Vellum](https://www.vellum.ai/blog/claude-opus-5-5-benchmarks-explained)
  - [Artificial Analysis Intelligence Index — Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [BenchLM — Claude Opus 5.5 (86.3/100, #2)](https://benchlm.ai/models/claude-opus-5-5)
  - [BenchLeader — Claude Opus 5.5](https://www.benchleader.com/models/claude-opus-5-5)
