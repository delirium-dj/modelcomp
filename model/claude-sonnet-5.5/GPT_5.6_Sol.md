# Claude Sonnet 5.5 — findings by GPT 5.6 Sol

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast, efficient mid-tier Claude 5.5 model for everyday professional work, coding, documents, slides, spreadsheets, and design.
- **Provider / access:** Claude API (`claude-sonnet-5-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, and Claude.ai.
- **Release / knowledge:** Released 2026-09-28; reliable and training-data cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`; available to free Claude.ai users, but no free API tier.
- **Context window:** 1M tokens; 128K maximum output, or 300K in Message Batches beta.
- **Modalities:** Text and image input; text output; adaptive thinking and tool use.
- **Pricing (as of 2026-10-04):** $2/1M input, $10 output, $2.50 five-minute cache writes, $4 one-hour cache writes, and $0.20 cache reads; Batch API is 50% off input/output.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic).
- OSWorld 2.1: **80.1%** (Anthropic).
- GDPval-AA v2.1: **1844 Elo** (Anthropic launch comparison).
- Code Migration: **69.83%** (Vals AI).
- Finance Agent v2: **58.10%** (Vals AI).

Reasoning / knowledge:

- MedScribe: **91.10%**, Tax Agent Bench **73.39%**, and Legal Research Bench **48.08%** (Vals AI).
- GPQA Diamond: reported across providers at approximately **91.4–94.6%**.
- HLE / CritPt / MLCR: no verified public score found in the consulted sources.

Coding:

- FrontierCode 1.1 Main: **52.1%** at xhigh and 46.2% at max (Anthropic).
- CursorBench 4.0: **55.5%** (Anthropic/SpaceXAI).
- Unity multi-step editor/coding benchmark: **90%** (Unity evaluation quoted by Anthropic).
- CyberBench v1.1: **59.58%** and IOI **83.06%** (Vals AI).
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found.

Long context:

- No verified public MRCR/RULER score found; documented context is 1M tokens with up to 128K standard output.

Multimodal:

- Text and image input are supported, with strong screenshot-driven game and chart recognition claims; no verified public MMMU/CharXiv result found and audio/video input is unsupported.

Sources: [Anthropic launch and benchmark table](https://www.anthropic.com/claude-sonnet-5-5), [Claude Platform specifications](https://platform.claude.com/docs/en/models/sonnet-5-5/overview), and [AIEvals evidence index](https://aievals.app/models/claude-sonnet-5-5).

### Normalized scores (1–100)

- **Tool use: 96/100.** Terminal-Bench 4.0 at 70.6%, OSWorld 80.1%, and efficient multi-step tool use place it near the frontier.
- **Reasoning: 94/100.** Strong professional-domain and GPQA results support excellent reasoning, capped by limited independent coverage of the hardest general suites.
- **Context window: 94/100.** A 1M-token window and very large output limits are excellent, but no public retrieval measurement was found.
- **Multimodal: 68/100.** Capable image understanding complements text, while native audio/video and broad multimodal benchmark coverage are absent.
- **Coding: 96/100.** Terminal-Bench, FrontierCode, CursorBench, and Unity results demonstrate elite practical coding.
- **Cost efficiency: 86/100.** $2/$10 pricing, cheap cache reads, batch discounts, and lower token use deliver strong value, though the API remains paid.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; best for fast, cost-conscious coding and professional agents with image input.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Anthropic documentation and independent benchmark evidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
