# Claude Opus 4.8 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's legacy flagship model released May 28, 2026; a "modest but tangible" upgrade over Opus 4.7 focused on increased honesty and reduced code flaws; superseded by Claude Opus 5 (July 2026) and Claude Fable 5.1 (September 2026).
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4-8`); available via Claude API, AWS Bedrock, Google Cloud Vertex AI. Chat Completions API. Retirement no earlier than May 28, 2027.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-4-8` (no Zen Free ID; paid pricing)
- **Context window:** 1,000,000 tokens (1M); verified via Anthropic API documentation.
- **Modalities:** Text + image input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-05-28):** $5.00 / $25.00 per 1M input/output tokens; 90% savings with prompt caching. Paid — no free tier.
- **Architecture:** Proprietary transformer (Anthropic); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (published benchmark data, May 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: tieing with top-tier models at the time (specific % not publicly disclosed in search results)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **42** (Artificial Analysis, 2026)

Coding:

- SWE-bench Pro: **69.2%** (published benchmark data, May 2026 — leader at time of release)
- SWE-bench Verified: **88.6%** (published benchmark data, May 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 77/100.** TB2.1 74.6% is high mid-tier (frontier ref ~88%+ = 90–100); no Tau3/GDPval/Claw-Eval. AA Index 42 is upper-mid. Scored 77 reflecting strong agentic performance for May 2026 release timeframe.
- **Reasoning: 83/100.** AA Index 42 upper-mid; GPQA cited as tying top-tier contemporaries at release. No GPQA exact %. Scored 83 reflecting competitive May 2026 reasoning ability.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 65/100.** Text + image input confirmed. No audio/video/PDF. Per methodology: image in = 60–70; scored 65.
- **Coding: 89/100.** SWE-bench Verified 88.6% is high (ref ≥90% = 90–100; 85–89% ≈ 85–89); SWE-Pro 69.2% was SOTA at release. TB2.1 74.6% is strong. Scored 89 reflecting near-frontier coding as of May 2026.
- **Cost efficiency: 55/100.** $5/$25 per 1M input/output tokens. Same pricing as Claude Opus 5 at this tier; scored 55 for the $5/$25 price point.
- **Overall Score: 82/100.** Mean of (Tool 77 + Reasoning 83 + Context 95 + Multimodal 65 + Coding 89) / 5 = 409 / 5 = 81.8 → 82. Best-fit: legacy fallback for systems bootstrapped on Opus 4.8 during H1 2026; upgrade path to Opus 5 or Fable 5.1 is recommended for new work.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Anthropic official docs, published benchmark tables, Artificial Analysis Intelligence Index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
