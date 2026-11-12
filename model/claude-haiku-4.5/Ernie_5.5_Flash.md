# Claude Haiku 4.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Haiku 4.5 (`claude-haiku-4.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast Claude (released 2025-10-15) for responsive assistance, classification and lightweight agents — the Claude 4.5 Haiku tier.
- **Provider / access:** Anthropic API (`claude-haiku-4-5-20251001`), Amazon Bedrock, Google Vertex (`claude-haiku-4-5@20251001`), LLM Gateway, Qihang, Unorouter, plus ~34 routes.
- **Release / knowledge:** 2025-10-15; knowledge cutoff 2025-02-28 (models.dev).
- **IDs:** `claude-haiku-4-5`, `claude-haiku-4-5-20251001`, `anthropic/claude-haiku-4.5`.
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.00 / $5.00 per 1M input/output; cache read $0.10 (Qihang $0.14/$0.71, Unorouter $1.20/$6).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **43.8%** (below the agent baseline)
- OSWorld 2.1 offline subset (82 tasks): **15.7%** (near-floor); JobBench: **16.0%**; MazeBench: **0%**
- SkillsBench v1.1 (BenchFlow): **30.1**
- Terminal-Bench 4.x / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **72.2%**; MMLU-Pro (Vals AI): **78.7%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published for Haiku 4.5

Coding:

- SWE-bench Verified: **73.3%** (Vals **66.6%**); VulcanBench v3: **76.2%**
- LiveCodeBench (Vals AI): **41.2%** (near-floor)
- ParseBench: **49.34%**

Long context:

- 200K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** OSWorld 2.1 offline 15.7%, JobBench 16.0% and TB2.1 (Vals) 43.8% are all below the agent baseline — this is a chat/classification model, not an agent.
- **Reasoning: 62/100.** GPQA 72.2% and MMLU-Pro 78.7% are mid; no HLE/ARC/FrontierMath row was published.
- **Context window: 65/100.** 200,000 tokens with 64,000 max output — the smallest window in the Claude line.
- **Multimodal: 70/100.** Text, image and PDF in; ParseBench 49.34% is the only verified document row and it is mid.
- **Coding: 70/100.** SWE-bench Verified 73.3% and VulcanBench 76.2% are decent for a Haiku, but LiveCodeBench (Vals) 41.2% is near-floor.
- **Cost efficiency: 88/100.** $1/$5 per 1M — cheap, but Haiku 5.5 is $0.10/$0.50 with a 1M context.
- **Overall Score: 63.4/100.** Best fit for legacy Claude 4.5 Haiku pipelines; Haiku 5.5 is 10× cheaper with a 5× larger window.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 4.5 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Haiku 4.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-haiku-4-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4.5_v2.md`, using the same headings.