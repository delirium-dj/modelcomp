# Claude Sonnet 4.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced Claude (released 2025-09-29) for coding, analysis, agent workflows and cost control — the pre-Claude-5 Sonnet with a 200K context.
- **Provider / access:** Anthropic API (`claude-sonnet-4-5`), Amazon Bedrock, Google Vertex (`claude-sonnet-4-5@20250929`), plus ~20 gateway routes (LLM Gateway, Vercel, Qihang, Merge).
- **Release / knowledge:** 2025-09-29; knowledge cutoff 2025-07-31 (models.dev).
- **IDs:** `claude-sonnet-4-5`, `anthropic/claude-sonnet-4.5`, `claude-sonnet-4-5-20250929`.
- **Context window:** 200,000 tokens (1,000,000 on the Vercel route); max output 64,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output; cache read $0.30.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **61.4%**; Terminal-Bench 2.0: **50.0%**
- JobBench: **27.7%**; VITA-Bench: **17.0%**; Gert Labs composite: **48.51**; SkillsBench v1.1: **36.2**
- Terminal-Bench 2.1 / 4.x / MCP-Atlas / Toolathlon: no verified public rows published

Reasoning / knowledge:

- GPQA: **83.4%**; AIME 2025: **87%**
- FrontierMath v2 Tiers 1–3: **23.860%**; Tier 4: **2.439%**
- ARC-AGI-2: **13.6%** (near-floor); NYT Connections: **35.8%**
- HLE / CritPt: no verified public rows published

Coding:

- SWE-bench Verified: **77.2%**
- DeepSWE / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 200K (1M on Vercel); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 61.4% and TB2.0 50.0% are below the 2026 agent baseline; JobBench 27.7% and VITA-Bench 17.0% are weak.
- **Reasoning: 68/100.** GPQA 83.4% and AIME 2025 87% were strong for late 2025, but FrontierMath 23.9%/2.4% and ARC-AGI-2 13.6% show the generational gap.
- **Context window: 65/100.** 200,000 tokens with 64,000 max output on the first-party route.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this checkpoint.
- **Coding: 75/100.** SWE-bench Verified 77.2% is decent for a 2025 model but well behind the 85%+ frontier.
- **Cost efficiency: 85/100.** $3/$15 per 1M — the same rate as Sonnet 4.6, which outscores it.
- **Overall Score: 68.0/100.** Best fit for legacy Claude 4.5 integrations; Sonnet 5.5 at $2/$10 is the better choice today.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.5 — Anthropic](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Claude Sonnet 4.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-sonnet-4-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5_v2.md`, using the same headings.