# Claude Opus 5 — findings by Claude Opus 5 (anthropic/claude-opus-5)

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (paid API tier only — no free-tier / "free" variant ID found in public provider catalogs; consumer access is bundled in Claude Pro/Max/Team/Enterprise plans, not a metered free API SKU)
- **Short description:** Anthropic's Opus-tier flagship for demanding reasoning, coding, and long-horizon agentic work, released July 2026; it replaced Claude Opus 4.8 as the Opus-tier flagship at unchanged $5/$25 pricing and is now marked **Legacy**, superseded by Claude Opus 5.5 (released September 22, 2026). Variant/alias flag: `claude-opus-5` is the same ID across Anthropic, Bedrock, Microsoft Foundry and Google Cloud; do not confuse with `claude-opus-5-5`.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`, Messages API); the same model ID is used on Microsoft Foundry and Claude Platform on AWS; OpenRouter as `anthropic/claude-opus-5`; also resold via Requesty (`anthropic/claude-opus-5`) and other unified APIs. Native Anthropic surface is the Messages API (not OpenAI Chat Completions/Responses); third-party hosts expose it as API type chat. No OpenCode Zen `opencode/*` free ID verified.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff May 2026.
- **IDs:** `anthropic/claude-opus-5` (Anthropic / OpenRouter / Bedrock / Foundry). **No Free-tier ID exists on OpenCode Zen for this model — no verified public listing found.**
- **Context window:** 1M tokens total, 128K max output — verified from vendor docs (**Context window**: 1M tokens **Max output**: 128K tokens) and corroborated by OpenRouter (1,000,000 token context window ... up to 128,000 completion tokens); 1M is both default and maximum, with no smaller variant.
- **Modalities:** Input: text, image, file; Output: text (no audio/video input, no non-text output). Reasoning: yes — Adaptive thinking, default effort high, and disabling it above high effort returns a 400 error. Tool calls: yes — strong instruction following and tool use across extended tasks. JSON mode: no verified public documentation found.
- **Pricing (as of 2026-09-30):** $5 / MTok input, $25 / MTok output; 5m cache write $6.25 / MTok, 1h cache write $10 / MTok, cache read $0.50 / MTok, Batch API 50% discount on input and output. Paid tier (no $0 option). Free-tier privacy caveat: not applicable — no free API tier; on resellers, data terms differ (e.g. Data retention Yes, 30 days; Used for training No).
- **Architecture:** Proprietary, closed weights. Parameter count (total/active) and MoE structure: no verified public score found / not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: **42%** τ-bench Banking 42% (api.airforce model catalog, harness not stated)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93%** (api.airforce model catalog; harness/effort setting not stated)
- HLE: **55%** (api.airforce model catalog, listed as Humanity's Last Exam)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **50.8** (Requesty catalog citing Intelligence Index 50.8); 50.7 in the api.airforce comparison table; no public AA leaderboard rank verified
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified model-specific public score found (an aggregator headline groups "Opus 5, Sonnet 5, and Fable 5 at 95% SWE-bench Verified" but does not attribute a per-model figure in verifiable form)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found; vendor positioning only — "state-of-the-art agentic coding benchmarks" and positioned as approaching the intelligence of Claude Fable 5 at half the price

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks result found at any window length for `claude-opus-5`)

### Normalized scores (1-100)

- **Tool use: 80/100.** Only one verified agentic number: τ-bench Banking 42%, which sits between the mid band (10-25%) and the frontier band (~50%+), plus documented sustained tool use over long horizons (strong instruction following and tool use across extended tasks) and vendor computer-use positioning. Capped below 90 by the complete absence of verified Terminal-Bench 2.1, GDPval-AA and OSWorld/AutomationBench results.
- **Reasoning: 92/100.** GPQA Diamond 93% and HLE 55% both clear the frontier thresholds (90%+ / 40%+), but the Intelligence Index of 50.8 is below the 60+ frontier marker, and LCR/MLCR and CritPt are unreported — which caps this at 92 rather than 95+.
- **Context window: 95/100.** Verified total of 1M tokens (1M context, 128K max output, 1M as both default and maximum) places it in the ≥1M tier (95-100); the score stays at the tier floor because no MRCR/RULER retrieval result at 512K+ is published, so the 100 condition (≥98% retrieval) cannot be verified. Actual measured limit used by hosts: 1,000,000 in / 128,000 out.
- **Multimodal: 80/100.** Text, image and file input with text-only output puts it in the "+video/PDF in" band (75-90); held to 80 because there is no audio input, no video input and no non-text output, and no published image/document-understanding benchmark for this exact ID.
- **Coding: 85/100.** No verified model-specific SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE or Terminal-Bench figure exists, so the score rests on the verified general-intelligence signal (Index 50.8, described as a workhorse model for agentic coding), its flagship coding positioning (flagship model for demanding reasoning, coding, and long-horizon agentic work, state-of-the-art agentic coding benchmarks) and the 1M/128K envelope. Missing harness-level coding evidence is exactly what caps it below 90.
- **Cost efficiency: 48/100.** Paid only at $5 / MTok in, $25 / MTok out — worse than the $3/$15 anchor (~60) and better than $10/$50 (~30), interpolating to ~48; partially mitigated by $0.50/MTok cache reads and a 50% Batch API discount, but eroded in practice because its successor Opus 5.5 costs $4/$20 and runs roughly 40% cheaper on typical workloads.
- **Overall Score: 86.4/100.** Mean of the five non-cost dimensions (80 + 92 + 95 + 80 + 85) / 5 = 86.4 — best fit for long-horizon agentic coding and document-heavy reasoning where a verified 1M-token window matters more than per-token price, though new deployments should evaluate `claude-opus-5-5` first since `claude-opus-5` is now vendor-labelled Legacy.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-Opus-5)** — 2026-09-30
- Method: fresh public internet research only (Claude Platform docs model page, OpenRouter model page, Requesty and Sim AI catalogs, api.airforce catalog, MarkTechPost launch coverage, Opus 5.5 launch coverage for comparative pricing); no prior-chat or memorized numbers used; every raw figure is tagged with its source and any missing figure is recorded as "no verified public score found" (Terminal-Bench 2.1, GDPval-AA, SWE-bench Verified, LiveCodeBench, SciCode, MRCR/RULER were all unavailable for this exact ID within the search budget). Exact self-build model ID is not independently verifiable from the sandbox, so the vendor/model-id is given as `anthropic/claude`. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
