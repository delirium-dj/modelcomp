# Ember-1 — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Fireworks AI / Ember-1 (`accounts/fireworks/models/ember-1`)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Ember-1 — Fireworks AI research model built on Moonshot Kimi K3
- **Short description:** Post-trained reasoning model on Kimi K3: shorter reasoning traces, ~40% fewer tokens (vendor claim; A/B tests show ~-35% tokens/task) while maintaining comparable quality on Fireworks' benchmarks. Part of Fireworks' new Research series.
- **Provider / access:** Fireworks AI serverless API (pay-per-token; `accounts/fireworks/models/ember-1`); OpenAI-compatible REST. Research Preview; permanent access subject to community demand (per TensorFeed).
- **Release / knowledge:** Released Sep 23, 2026. Knowledge cutoff: not published.
- **IDs:** `accounts/fireworks/models/ember-1`; OpenRouter `fireworks/ember-1`.
- **Context window:** 1,048,576 tokens (1M, Fireworks spec: 1,040k). Max output: not disclosed.
- **Modalities:** Text input; image input supported; text output. Function calling supported. Not open weights (proprietary).
- **Pricing (2026-10-31):** $3.00 per 1M input, $0.30 cached, $15.00 per 1M output — same rate card as Kimi K3.
- **Architecture:** MoE, ~2.78–2.8T parameters; built as a post-trained variant of Kimi K3 (Fireworks). No official parameter disclosure beyond ~2.8T.

### Raw benchmarks found

> Evidence: Fireworks' own benchmark table + BenchGap (measured and estimated). **No independent evaluations exist**; no public weights, no GPQA/HLE/LCR/CritPt boards for this snapshot.

**Agent / tool use:**
- Terminal-Bench 2.1: **82.0%** measured (Fireworks benchmark table; BenchGap agrees 81.8% estimated).
- SWE-bench Verified: **92.2%** measured (Fireworks table + BenchGap; llmboard rank 3/122).
- DeepSWE: **75.2%** measured (BenchGap).
- LiveCodeBench: **86.2%** estimated (BenchGap); Vals LiveCodeBench 91.8% estimated.
- Tau2-Banking (Airline): **66.0%** (Fireworks table, rank 8).
- AA Terminal-Bench 4.0: **20.7%** (TensorFeed) — note v4 is a harder newer benchmark; not to be confused with TB2.1.
- AA Coding Index: **77.8%** estimated (high).
- CursorBench 3.2: **68.2%** estimated (BenchGap).

**Reasoning / knowledge:**
- No GPQA/HLE/LCR/CritPt boards for Ember-1 (BenchGap lists none; AA light).
- AA-SciCode: **58.7%** estimated (medium) — science-coding, not reasoning per se.
- TAU2-Banking: **66.0%** (agentic) — tool-use adjacent.
- AA Intelligence Index: not published for this snapshot (Fireworks' own tables show only coding/terminal rows).

**Coding:**
- SWE-bench Verified 92.2% measured (rank 3/122, llmboard) vs K3 max 93.2%.
- Terminal-Bench 2.1 82.0% measured (Fireworks) vs K3 80.9% — held/won.
- LiveCodeBench: 86.2% estimated; Vals LiveCodeBench 91.8% estimated.
- DeepSWE 75.2% measured.

**Long context / cost / speed:**
- 1M context inherited from K3; MSA ruled out (Kimi base); per-token compute not published.
- Cost: $3.00/$15.00 per 1M — identical to Kimi K3; vendor claims ~-35% to -40% fewer reasoning tokens (token-efficiency win).
- Multimodal: text + image in, text out.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 82.0% measured (near the ~88% frontier bar → 80–90); SWE-bench Verified 92.2% measured (strong, rank 3/122); DeepSWE 75.2%; AA Coding Index 77.8% estimated.
- **Reasoning: 60/100.** No verified GPQA/HLE/LCR/CritPt/Index boards for this snapshot — provisional; AA-SciCode 58.7% estimated and TAU2 66.0% are agentic/science-adjacent, not reasoning.
- **Context window: 96/100.** 1M (1,048,576) — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+ (not verified).
- **Multimodal: 65/100.** Text + image input, text output — +image tier (60–70).
- **Coding: 88/100.** SWE-bench Verified 92.2% measured (frontier class, rank 3/122); Terminal-Bench 2.1 82.0%; LiveCodeBench 86.2% estimated; DeepSWE 75.2%.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M — exactly the $3/$15 reference (60); token savings (-40% reasoning) help per-task cost, not per-token.
- **Overall Score: 79/100.** (85+60+96+65+88)/5 = 394/5 = 78.8 → half-up 79. Best fit: cost-efficient Kimi-K3-derivative agentic/coding model; strong on SWE-bench/TB2.1 at identical $/token pricing.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Fireworks AI — Ember-1 API page](https://fireworks.ai/models/fireworks/ember-1)
  - [BenchGap — Ember-1 benchmark scores](https://benchgap.net/model/ember-1)
  - [llmboard.ai — Ember 1 benchmarks & pricing](https://www.llmboard.ai/models/ember-1)
  - [TensorFeed.ai — Ember-1 pricing & benchmarks](https://tensorfeed.ai/models/ember-1)
  - [Kimi K3 reference (TensorFeed)](https://tensorfeed.ai/models/kimi-k3)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; note that all benchmark numbers are Fireworks/vendor-reported (no independent evaluations exist yet).
