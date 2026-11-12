# Claude Opus 4.6 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 4.6 (`claude-opus-4.6`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's high-end Claude (released 2026-02-05) for difficult coding, planning and slower expert reasoning — the last Claude 4 Opus, superseded by Opus 5.
- **Provider / access:** Anthropic API (`claude-opus-4-6`), Amazon Bedrock, Google Vertex (`claude-opus-4-6@default`), plus ~38 gateway routes.
- **Release / knowledge:** 2026-02-05; knowledge cutoff 2025-05-31 (models.dev).
- **IDs:** `claude-opus-4-6`, `anthropic/claude-opus-4.6`, `opencode/claude-opus-4.6`.
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $5.00 / $25.00 per 1M input/output; cache read $0.50.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%**; BrowseComp: **83.7%**
- VulcanBench-class rows: SWE-Rebench **65.3%**; FrontierCode 1.1 Main: **26.9%**
- OSWorld / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- BenchLM ranks Reasoning as its strongest category (#43)
- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Opus 4.6

Coding:

- SWE-bench Verified: **80.8%** (mini-swe-agent-v2: **75.6%**)
- LiveCodeBench Pro: **70.7%**; React Native Evals: **84.1%**; Vibe Code Bench v1.1: **57.57%**
- SWE-bench Pro: **53.4%**; FrontierCode 1.1 Main: **26.9%**; FrontierCode 2.0: no row

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 65.4% and BrowseComp 83.7% are good for a Claude 4 Opus; no Terminal-Bench 4.x row was published.
- **Reasoning: 80/100.** No public reasoning benchmark was published; the score rests on its #43 reasoning rank — low confidence.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF in only; no public multimodal benchmark row.
- **Coding: 80/100.** SWE-bench Verified 80.8% and React Native 84.1% are decent, but SWE-bench Pro 53.4% and FrontierCode 1.1 26.9% trail Opus 5.
- **Cost efficiency: 45/100.** $5/$25 per 1M — the same as Opus 5, which beats it on every measured axis.
- **Overall Score: 82.4/100.** Best fit for legacy Claude 4.6 integrations; Opus 5.5 is better at 20% less.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic model documentation, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.6 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Opus 4.6 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-4-6)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Claude_Opus_4.6_v2.md` next to this file.