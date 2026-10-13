# Claude Sonnet 4.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Sonnet 4.5 (`opencode/claude-sonnet-4.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's September 2025 Sonnet flagship — best-in-class long-horizon coding agent and computer-use model of its generation. Achieves 77.2% on SWE-bench Verified (82.0% with parallel compute), 61.4% on OSWorld-Verified, 50% on Terminal-Bench 2.0, 87% on AIME 2025, and 83.4% on GPQA. Non-reasoning model with 200K context (1M beta for Tier 4+). Superseded by Sonnet 4.6. Priced at $3.00/$15.00 per 1M. Only 13 benchmarks covered on BenchLM (partial coverage).
- **Provider / access:** Anthropic (API, Claude.ai). Proprietary.
- **Release / knowledge:** September 29, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/claude-sonnet-4.5`
- **Context window:** 200,000 tokens standard (64K output); 1M beta (Tier 4+)
- **Modalities:** Text, image, file in; text out
- **Pricing:** $3.00/$15.00 per 1M in/out; $0.30 cached input

### Raw benchmarks found

Agent / tool use: OSWorld-Verified 61.4% · Terminal-Bench 2.0 50% · Gert Labs 48.51% · JobBench 27.7% · VITA-Bench 17.0%.

Reasoning / knowledge: GPQA 83.4% · AIME 2025 87% · ARC-AGI-2 13.6% · FrontierMath v2 Tiers 1-3 13.5% · FrontierMath v2 Tier 4 4.2%.

Coding: SWE-bench Verified 77.2% (82.0% with parallel compute) · Terminal-Bench 2.0 50%.

Multimodal: Design Arena Website 1193. Text and image input supported. Limited multimodal benchmark coverage.

Long context: 200K standard, 1M beta for Tier 4+.

### Normalized scores (1–100)

- **Tool use: 50/100.** OSWorld-Verified 61.4% was leading at launch. Terminal-Bench 2.0 50% is moderate. Gert Labs 48.51% is modest. Limited agentic benchmark coverage (13 benchmarks).
- **Reasoning: 48/100.** AIME 2025 87% and GPQA 83.4% are strong. However, ARC-AGI-2 13.6% and FrontierMath v2 13.5% are low. Limited reasoning benchmark coverage.
- **Context window: 60/100.** 200K standard context is good. 1M beta available for Tier 4+. Trails current frontier models offering native 1M.
- **Multimodal: 35/100.** Text and image input supported. Very limited multimodal benchmark coverage (only Design Arena 1193 reported).
- **Coding: 68/100.** SWE-bench Verified 77.2% (82.0% with parallel compute) was best-in-class at launch. Terminal-Bench 2.0 50% is moderate.
- **Cost efficiency: 40/100.** $3.00/$15.00 per 1M is expensive. No free tier. Superseded by Sonnet 4.6.
- **Overall Score: 52.2/100.** Mean of Tool (50) + Reasoning (48) + Context (60) + Multimodal (35) + Coding (68) = 261/5 = 52.2. Adjusted to 50 given limited benchmark coverage (13 benchmarks), expensive pricing, and supersession by Sonnet 4.6.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
