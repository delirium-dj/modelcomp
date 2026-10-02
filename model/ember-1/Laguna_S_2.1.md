# Ember 1 — findings by Laguna S 2.1

- Source: BenchLM (`https://benchlm.ai/models/ember-1`), Fireworks model page (`https://fireworks.ai/models/fireworks/ember-1`), Fireworks launch blog (`https://fireworks.ai/blog/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's specialized token-efficient reasoning model built on Kimi K3, released September 23, 2026. A Mixture-of-Experts model (2.78T total params) that produces shorter reasoning traces (40% fewer tokens) while maintaining comparable quality. Available via Fireworks serverless API.
  > Note: the repo `meta.json` lists 128K context and text-only modality. The Fireworks model page shows 1,040K context and text+image input. This file documents the full model per verified external sources.
- **Provider / access:** Fireworks AI — serverless API (`accounts/fireworks/models/ember-1`); OpenCode Zen: `opencode/ember-1`
- **Release / knowledge:** September 23, 2026 (Fireworks launch blog); knowledge cutoff not disclosed
- **IDs:** `accounts/fireworks/models/ember-1` (Fireworks API), `fireworks/ember-1` (Fireworks catalog), `opencode/ember-1` (project)
- **Context window:** 1,040,000 tokens total (Fireworks model page)
- **Modalities:** Text and image input, text output (Fireworks model page); reasoning yes (built on Kimi K3, extended thinking); tool calls yes (function calling supported)
- **Pricing (as of 2026-09-23):** $3.00 input / $0.30 cached input / $15.00 output per 1M tokens (Fireworks serverless API)
- **Architecture:** 2.78T total parameters / MoE (256 experts); Mixture-of-Experts
- **Reasoning:** Yes (extended thinking / chain-of-thought, inherited from Kimi K3 base)

### Raw benchmarks found

> Sources: BenchLM model page (`benchlm.ai/models/ember-1`), Fireworks Research: Ember-1 launch post (`fireworks.ai/blog/ember-1`). All benchmarks sourced from the official Fireworks launch post, cross-referenced on BenchLM. Firewore's own evaluation harness with 500-step max and sandboxed execution.

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** — (Fireworks launch post, via BenchLM; pass@1 averaged over 5 attempts)
- τ²-bench Airline: **66.0%** — (Fireworks launch post, via BenchLM)
- GDPval-AA: **no verified public score found** — (not listed on BenchLM or AA for ember-1)
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- AutomationBench-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** — (model not listed on AA or BenchLM overall score)
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — (model absent from AA leaderboards as of 2026-10-01; AA returns 404)
- BenchLM overall: **no overall score assigned** — (BenchLM lists 5 of 645 benchmarks; "no public overall score is assigned"; model unranked)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Humanity's Last Exam: **no verified public score found**

Coding:

- SWE-bench Verified: **92.2%** — (Fireworks launch post, via BenchLM)
- DeepSWE: **75.2%** — (Fireworks launch post, via BenchLM; exceeds GPT-6 Astra's reported 74.0%)
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- AA Coding Index: **no verified public score found**
- SWE-bench Multilingual: **no verified public score found**

Multimodal:

- Text + image input, text output per Fireworks model page — no independent multimodal benchmark found
- MMMU / MMMU-Pro: **no verified public score found**
- Design Arena / ImageBench: **no verified public score found**

Long context:

- 1,040K context window verified by Fireworks model page; no MRCR / RULER / GraphWalks retrieval score reported

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 72/100.** Terminal-Bench 2.1 at 82.0% is strong — above the ~55% 2026 frontier threshold and close to the ~88%+ SOTA. τ²-bench Airline at 66.0% is above the ~50% frontier reference. These are genuinely strong agentic results from verified public benchmarks (Fireworks launch post, cross-referenced on BenchLM). However, GDPval-AA, OSWorld, Claw-Eval, and AutomationBench are all "no verified public score found," so the agentic picture is based on only 2 benchmarks. Scored in the upper-mid band — strong where measured, but narrow coverage across agentic suites.

- **Reasoning: 42/100.** No verified general reasoning benchmarks found — GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, Omniscience, and Humanity's Last Exam are all "no verified public score found." The model is architecturally a reasoning model (built on Kimi K3 with extended thinking), and its strong coding performance (SWE-bench 92.2%, DeepSWE 75.2%) implies multi-step planning ability. The Terminal-Bench 2.1 at 82% further supports reasoning capability. However, without direct reasoning benchmarks, scored in the bottom-third provisional band.

- **Context window: 98/100.** 1,040,000 tokens total per Fireworks model page — well above the 1M tiered threshold (95–100 in v1/v4 methodology). No retrieval-at-length benchmark (MRCR/RULER/GraphWalks) found to validate effective context utilization.

- **Multimodal: 30/100.** Text + image input, text output per the Fireworks model page — falls in the methodology's "image input only" band (25–40). No verified multimodal benchmarks (MMMU-Pro, Design Arena, ImageBench) found. The repo `meta.json` incorrectly lists text-only; the actual model supports image input.

- **Coding: 90/100.** SWE-bench Verified at 92.2% is near-frontier (SWE-bench SOTA ~93–95%) and exceptional for any model. DeepSWE at 75.2% exceeds the reported 74.0% of GPT-6 Astra (per the launch post). Terminal-Bench 2.1 at 82.0% provides additional strong coding agent evidence. This is a genuinely strong coding profile — the model is explicitly built for efficient agentic coding. Missing LiveCodeBench, SciCode, and SWE-bench Pro, but the verified numbers are excellent. Scored in the upper band.

- **Cost efficiency: 60/100.** $3.00 input / $15.00 output per 1M tokens (Fireworks serverless API) falls in the methodology's ~$3/$15 = ~60 band. Cached input at $0.30 per 1M offers some cost reduction on repeat requests.

- **Overall Score: 66/100.** Mean of five quality dims: (72 + 42 + 98 + 30 + 90) / 5 = 342 / 5 = 68.4 → 68. Ember-1 is a strong specialized coding/agentic model from Fireworks, achieving 82.0% on Terminal-Bench 2.1 and 92.2% on SWE-bench Verified — exceptional results that place it among the top coding models. Its 1.04M context window and 40% token-efficiency gains over Kimi K3 add unique value. However, it lacks general reasoning benchmarks (no GPQA/HLE/LCR), is not on the AA Intelligence Index, and its $3/$15 pricing is premium-tier. Best fit: high-end agentic coding where token efficiency and strong SWE-bench performance justify the premium cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via BenchLM model page (benchmark scores, coverage notes, sources), Fireworks model page (specs, pricing, modalities), and Fireworks Research launch blog (benchmark methodology, comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://benchlm.ai/models/ember-1`, `https://fireworks.ai/models/fireworks/ember-1`, `https://fireworks.ai/blog/ember-1`
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Ember_1.md`, using the same headings.

---
