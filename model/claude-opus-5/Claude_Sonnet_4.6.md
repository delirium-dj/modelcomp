# Claude Opus 5 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's near-frontier agentic model released July 24, 2026, designed for complex enterprise coding and research workflows; delivers performance approaching Fable 5.x at a significantly lower cost, with adaptive thinking and effort-toggle controls.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5`); available via Claude API, Claude Max plan (default), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Chat Completions API.
- **Release / knowledge:** 2026-07-24 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5` (no Zen Free ID found; paid pricing)
- **Context window:** 1,000,000 tokens (1M); verified via Anthropic documentation.
- **Modalities:** Text + image input; text output; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-07-24):** $5.00 / $25.00 per 1M input/output tokens; 90% savings with prompt caching; 50% savings with batch processing. Paid — no free tier.
- **Architecture:** Proprietary (Anthropic); transformer; exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (morphllm.com comparative, September 2026 — cited as benchmark for Fable 5.1 comparison)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1824 Elo** (Meta's comparison table, cited in Muse Spark 1.3 launch blog — Opus 5 leads GDPval-AA over Muse Spark 1.3 at 1754)
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld 2.0 / Computer use: outperforms comparable-cost models per Anthropic launch blog

Reasoning / knowledge:

- GPQA Diamond: no verified public score found separately
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **51** (Artificial Analysis model page, September 2026)
- Frontier-Bench v0.1: state-of-the-art cited by Anthropic at launch (no verified public number)

Coding:

- SWE-bench Verified: no verified public score separately (SWE-bench Pro: no verified public score)
- Terminal-Bench 2.1: **89.1%** (morphllm.com, September 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context window confirmed.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB2.1 89.1% is near-frontier (ref ~88%+ = 90–100); GDPval-AA 1824 is the highest cited score in the ecosystem, above Muse Spark 1.3's 1754; computer use cited as outperforming cost-comparable peers. Scored 91 due to missing Tau3/Claw-Eval numbers.
- **Reasoning: 90/100.** AA Index 51 places Opus 5 in the top-3 frontier models; Frontier-Bench v0.1 SOTA cited at launch. No GPQA/HLE/LCR individual breakdowns publicly released. Scored 90 reflecting high frontier placement.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100 per tier mapping; scored 95 as retrieval performance at far end not publicly verified.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF input reported. Per methodology: image in = 60–70; scored 65.
- **Coding: 91/100.** TB2.1 89.1% is frontier-class; GDPval 1824 Elo is top-tier agentic; SOTA on Frontier-Bench v0.1 per Anthropic. No verified SWE-bench or LiveCodeBench numbers. Scored 91.
- **Cost efficiency: 55/100.** $5/$25 per 1M input/output tokens. Between the $3/$15 (~60) and $10/$50 (~30) anchors; scored 55 for the $5/$25 price point, slightly above mid-premium.
- **Overall Score: 86/100.** Mean of (Tool 91 + Reasoning 90 + Context 95 + Multimodal 65 + Coding 91) / 5 = 432 / 5 = 86.4 → 86. Best-fit: near-frontier agentic coding and enterprise research workflows where cost vs. Fable 5.1 matters; default for Claude Max subscribers.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Anthropic launch blog, Artificial Analysis, morphllm.com, Layer3Labs, Medium, Wikipedia, codersera.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
