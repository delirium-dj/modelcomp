# Claude Haiku 4.5 — findings by Kimi K3

- Source: Anthropic (`claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest, most cost-efficient current-generation model; per Anthropic it matches Claude Sonnet 4 on coding, computer use, and agent tasks at roughly one-third the cost and more than twice the speed, while Sonnet 4.5 remains the frontier tier.
- **Provider / access:** Claude API (Messages API, extended thinking), Claude Code, Claude.ai (web, iOS, Android), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry.
- **Release / knowledge:** Released 2025-10-15. Reliable knowledge cutoff Feb 2025; training data cutoff Jul 2025 (official docs).
- **IDs:** `claude-haiku-4-5-20251001` (alias `claude-haiku-4-5`), Bedrock `anthropic.claude-haiku-4-5`, Vertex `claude-haiku-4-5@20251001`. No Free ID exists on OpenCode Zen.
- **Context window:** 200K tokens; max output 64K tokens (official models overview table).
- **Modalities:** Text + image in; text out. Extended thinking (manual `thinking.type` with budget_tokens; deprecated on 4.6+ generation); tool use and JSON/structured output supported; no audio/video input.
- **Pricing (as of 2026-10-01):** $1 / $5 per MTok (input/output); prompt cache reads at 10% of input price; Batch API 50% off. Paid — no free API tier; available to Claude.ai users incl. free tier with usage limits.
- **Architecture:** Proprietary dense model; parameter count undisclosed. Released at AI Safety Level 2 (ASL-2).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **~41%** (official Anthropic methodology note: Terminus 2, 40.21% over 6 runs without thinking / 41.75% over 5 runs with 32K thinking budget)
- Tau3-Banking / Tau2-Bench: τ2-bench runs were conducted by Anthropic (methodology published) but the numeric values sit in a benchmark table image; **no verified readable public number extracted**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-Verified: evaluated by Anthropic (100 max steps, 128K thinking budget, 4 runs per methodology) — vendor states Haiku 4.5 surpasses Sonnet 4 on computer use; exact % is in the table image, **no verified readable number extracted**
- Augment agentic coding evaluation: **90% of Claude Sonnet 4.5's performance** (Guy Gur-Ari, Augment co-founder, quoted in official announcement)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (benchmark table published as image only)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **73.3%** (official Anthropic: simple scaffold, bash + string-replace editing tools, averaged 50 trials, n=500, 128K thinking budget, default sampling)

Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported publicly.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench ~41% sits just below the mid-tier 45–60% band, partially offset by vendor-claimed Sonnet 4 parity on agent tasks and the OSWorld result; capped by the absence of vendor/third-party Tau3, GDPval, or Claw-Eval numbers.
- **Reasoning: 60/100.** Anthropic positions it at "near-frontier intelligence" for its size class with extended thinking, but no verifiable GPQA/HLE/Index number could be extracted, so it is scored mid-band (55–65) rather than inferred upward from family proxies.
- **Context window: 70/100.** Tier mapping: 200K = 70; 64K max output noted as a caveat, not a separate penalty.
- **Multimodal: 65/100.** Text + image input, text output only → "+image in" band (60–70); no audio/video input and no non-text output.
- **Coding: 85/100.** SWE-bench Verified 73.3% (official, well-documented harness) plus 90% of Sonnet 4.5 on Augment's agentic coding eval marks genuine near-frontier coding strength; capped below 90 by the modest Terminal-Bench ~41% and missing LiveCodeBench/SciCode numbers.
- **Cost efficiency: 88/100.** $1/$5 per MTok maps just below the ~$0.60/$2.20 → 92 and ~$1.25/$4.25 → 88 reference points; batch (50% off) and caching (10%) improve real-world cost.
- **Overall Score: 67/100.** Mean of the five quality dims: (55 + 60 + 70 + 65 + 85) / 5 = 67. Best fit: fast, cheap near-frontier coding/agentic execution tier — parallel sub-agents, high-volume API workloads, latency-sensitive assistants — escalating complex reasoning to Sonnet/Opus-class models.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Anthropic announcement 2025-10-15, official models overview docs, Anthropic Haiku product page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
