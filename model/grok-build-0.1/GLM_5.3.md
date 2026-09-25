# Grok Build 0.1 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-build-0.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (aliases: `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`)
- **Short description:** xAI's fast coding model trained specifically for agentic software-engineering workflows — interactive coding agents, tool use, and multi-step development rather than general conversation. Early access May 2026, public API beta June 2026; it is the default model of the Grok Build coding agent. Top use case: latency-sensitive agentic coding loops.
- **Provider / access:** xAI API (`grok-build-0.1`; us-east-1 / us-west-2; 37 requests/s, 10M tokens/min; no Batch API); OpenCode Zen `opencode/grok-build-0.1` (Responses API); 18 gateway providers tracked by models.dev.
- **Release / knowledge:** registry snapshot 2026-05-20 (early access May, API beta June 2026); knowledge cutoff not disclosed.
- **IDs:** `grok-build-0.1` (xAI, Zen); aliases above. Free promo routes reported at $0 by one tracker (models.dev) — not a standing free tier.
- **Context window:** 256,000 tokens (output up to 256,000 per models.dev); prompts reaching 200K tokens bill the whole request at the higher rate.
- **Modalities:** text, image, and PDF input; text output; function calling, structured outputs, and reasoning all supported (official docs).
- **Pricing (as of 2026-09-25):** per 1M tokens — < 200K prompt: $1.00 in / $0.20 cached / $2.00 out; ≥ 200K prompt: $2.00 / $0.40 / $4.00. Same rates on OpenCode Zen.
- **Architecture:** proprietary; parameter count and license undisclosed; purpose-built fast-serving coding model.

### Raw benchmarks found

> One standardized coding row (GenAIList catalog) plus third-party suite/panel signals; xAI publishes no benchmark table for this ID.

Agent / tool use:

- Purpose-built agentic engineering profile: function calling + structured outputs + reasoning verified on the official model page; default model of the Grok Build coding agent
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Reasoning capability verified (official docs); no reasoning-depth rows published for this ID
- Six-persona AI panel review (topreviewed.ai): **6.7/10** overall
- GPQA Diamond / HLE / LCR / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **70.8%** — rank 32 of 56 models scored on that benchmark (GenAIList, 2026-09-25)
- LM Market Cap coding composite: **40/100**, rank #325 (their scale; category rank only)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported; 256K is a capacity spec

### Normalized scores (1–100)

> Early-access coding model; one standardized row plus official capability verification.

- **Tool use: 70/100.** Agentic-engineering DNA is verified at the API level (function calling, structured outputs, reasoning) and it anchors a shipping coding agent (Grok Build); absence of Terminal-Bench/Tau3/GDPval rows keeps it below the top band.
- **Reasoning: 55/100.** Reasoning is supported but purpose-scoped to coding workflows; no standardized reasoning rows and a mid 6.7/10 panel verdict place it just above mid.
- **Context window: 72/100.** 256,000 tokens = 200K–500K tier (200K baseline 70); the ≥200K full-request higher billing threshold is a mild drag; no measured retrieval quality.
- **Multimodal: 75/100.** Text, image, and PDF input with text output (image+PDF band, 75–90 floor-weighted: no video/audio).
- **Coding: 78/100.** SWE-bench Verified 70.8% (rank 32/56) is a strong upper-mid result for a fast-tier coding model, just under the 74%+ frontier band; fast-iteration positioning and Grok Build integration corroborate; no LiveCodeBench/DeepSWE rows.
- **Cost efficiency: 90/100.** $1.00/$2.00 per 1M with $0.20 cached reads under 200K is cheaper than Grok 4.7 ($2/$6) and near open-weight territory for a proprietary model; the ≥200K doubling is the caveat.
- **Overall Score: 70/100.** (70 + 55 + 72 + 75 + 78) / 5 = 70.0 → 70. Best-fit: the budget agentic-coding workhorse of the Grok line — near-frontier SWE-bench at half Grok 4.7's price; keep frontier models for deep reasoning and high-risk changes.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (xAI official model docs, GenAIList catalog, Benchable/registry trackers, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
