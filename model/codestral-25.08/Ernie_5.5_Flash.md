# Codestral 25.08 — findings by Ernie 5.5 Flash

- Source: Mistral AI (`codestral-2508`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's August 2025 refresh of Codestral — the low-latency fill-in-the-middle completion model for editor autocomplete, part of the "complete Mistral coding stack" launch alongside Devstral and Magistral.
- **Provider / access:** Mistral AI API (`codestral-latest` → 25.08 build), IDE/plugin partners, third-party hosts; weights downloadable under the Mistral AI Non-Production License.
- **Release / knowledge:** 2025-07-30; knowledge cutoff not reported.
- **IDs:** `codestral-2508`, `codestral-latest`
- **Context window:** 262,144 tokens; max output 8,192.
- **Modalities:** text in / text out; no reasoning mode; tool calling supported.
- **Pricing (as of 2026-11-12):** $0.30 / 1M input, $0.90 / 1M output (representative third-party hosting rate; the weights are downloadable so self-hosting cost is hardware only).
- **Architecture:** 22B dense transformer (same body as Codestral 25.01), 80+ language FIM training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1 / 4.0, Tau3, GDPval-AA, Claw-Eval, MCP-Atlas: **no verified public score found** (all read "Not reported" on the CorX Labs sheet)

Reasoning / knowledge:

- GPQA Diamond / MMLU-Pro / AIME 2025 / MATH-500 / Frontier-Bench v0.1: **no verified public score found** (model has no reasoning mode)

Coding:

- HumanEval: **86.6%** (rank 19 of 46 models reporting the same test; vendor-published)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks figures for the 262K window.

### Normalized scores (1–100)

- **Tool use: 42/100.** Tool calling is advertised, but no agentic benchmark row exists for 25.08; a completion model used inside an agent contributes code, not plans.
- **Reasoning: 32/100.** No reasoning mode and zero published reasoning/knowledge rows — the floor band.
- **Context window: 74/100.** 262,144 tokens with an 8,192-token output cap, inside the 200K–500K band; the small output cap is noted as a caveat.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 64/100.** HumanEval 86.6% is strong for single-function completion, but with no SWE-bench Verified, LiveCodeBench or agentic-coding number the score stays in the mid-60s.
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M (or free on your own hardware) is bottom-quartile pricing; not counted toward Overall.
- **Overall Score: 45/100.** Mean of tool use 42, reasoning 32, context 74, multimodal 15, coding 64. Best fit: inline IDE autocomplete and FIM at very high volume; not a repository-level agent or a chat model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Mistral Codestral 25.08 announcement, CorX Labs benchmark sheet — the only published-row source, third-party pricing reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Announcing Codestral 25.08 and the complete Mistral coding stack](https://mistral.ai/news/codestral-25-08/)
  - [CorX Labs — Codestral 25.08 specs, pricing and published scores](https://www.corx-labs.com/benchmarks/models/codestral-2508/)
  - [aisotools — Codestral 25.08 review (262K, $0.30/M)](https://aisotools.com/blog/codestral-25-08-review-2026)
  - [aitooltier — Codestral review (pricing, licence)](https://aitooltier.com/tools/codestral)