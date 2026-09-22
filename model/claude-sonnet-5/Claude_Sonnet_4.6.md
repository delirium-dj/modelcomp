# Claude Sonnet 5 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's balanced agentic model released June 30, 2026, designed for coding, tool use, and complex reasoning at Sonnet-tier pricing; approaches Opus-class performance with adaptive thinking and first Sonnet to include real-time cybersecurity safeguards.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5`); available via Claude API, AWS Bedrock, Google Cloud Vertex AI. Chat Completions API.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-5` (no Zen Free ID found; paid pricing)
- **Context window:** 1,000,000 tokens (1M); verified via Anthropic documentation.
- **Modalities:** Text + image input; text output; reasoning yes (adaptive thinking, effort levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-06-30):** $2.00 / $10.00 per 1M input/output tokens (permanent pricing). Paid — no free tier.
- **Architecture:** Proprietary transformer (Anthropic); exact params undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench (version unspecified): **76.1%** vs Claude Sonnet 4.6 at 55.4% (Anthropic launch, June 2026 — cosmicjs.com)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.0%** vs Claude Sonnet 4.6 at 68.0% (Anthropic launch, June 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- MMMU: **76.3%** vs Sonnet 4.6 at 70.4% (Anthropic launch, June 2026)
- MathVista: **76.6%** vs Sonnet 4.6 at 67.2% (Anthropic launch, June 2026)

Coding:

- SWE-bench Verified: **72.7%** vs Claude Sonnet 4.6 at 62.3% (Anthropic launch, June 2026)
- SWE-bench Pro / DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks publicly reported; 1M context confirmed.

### Normalized scores (1–100)

- **Tool use: 79/100.** Terminal-Bench 76.1% is high mid-tier (frontier ref ~88%+ = 90–100; 70–80% ≈ 75–82); agentic capabilities designed for autonomous multi-step workflows including browser use and terminal. No Tau3/GDPval/Claw-Eval. Scored 79.
- **Reasoning: 80/100.** GPQA Diamond 78.0% is upper mid-tier (frontier ref ≥90% = 90–100; 70–80% ≈ 75–82); MathVista 76.6% and MMMU 76.3% are consistent. Scored 80.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 65/100.** Text + image input confirmed (MMMU test implies image multimodal). No audio/video/PDF. Per methodology: image in = 60–70; scored 65.
- **Coding: 78/100.** SWE-bench Verified 72.7% is high mid-tier (frontier ref ≥90% = 90–100; 65–75% ≈ 75–80); TB 76.1% supports agentic coding. No DeepSWE/LiveCodeBench anchor. Scored 78.
- **Cost efficiency: 90/100.** $2/$10 per 1M input/output tokens. Between ~$0.60/$2.20 (~92) and $3/$15 (~60); scored 90 for this competitive price point.
- **Overall Score: 79/100.** Mean of (Tool 79 + Reasoning 80 + Context 95 + Multimodal 65 + Coding 78) / 5 = 397 / 5 = 79.4 → 79. Best-fit: balanced workhorse for complex agentic and coding workflows at accessible pricing (replaces Sonnet 4.6 for new work); upgrade to Opus 5 or Fable 5.1 for mission-critical autonomy.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (Anthropic official launch, cosmicjs.com benchmark table, claude.com, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
