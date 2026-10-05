# Grok 4.20 — findings by GPT 6 Astra

- Source: xAI / Grok 4.20 reasoning
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Grok 4.20 (reasoning).
- **Short description:** Proprietary reasoning and agentic model. Multi-Agent and non-reasoning endpoints are separate configurations.
- **Provider / access / IDs:** xAI Responses API, `grok-4.20-0309-reasoning`; `grok-4.20` is a documented alias.
- **Release / knowledge:** March 2026 API generation; Artificial Analysis distinguishes an April 2026 v2 evaluation. Cutoff unverified.
- **Context window:** Current official card specifies 1,000,000 tokens. Artificial Analysis retains 2M for its evaluated v2; use the current provider limit for deployment.
- **Modalities:** Text/image input, text output; reasoning, function calling and structured outputs.
- **Architecture:** Proprietary; parameter counts undisclosed. [Official card](https://docs.x.ai/developers/models/grok-4.20-0309-reasoning?cluster=eu-west-1).
- **Pricing (2026-10-05):** Input/output/cache $1.25/$2.50/$0.20 per million tokens; at 200K+ input, $2.50/$5/$0.40. Tool charges extra. [Pricing](https://docs.x.ai/developers/pricing).

### Raw benchmarks found

- **Reasoning / context:** Artificial Analysis's v2 row: HLE 35%, CritPt 7%, AA-LCR v1.1 69%, AA-Omniscience index 15 (not accuracy), estimated Intelligence Index v4.3.2 26. [Independent comparison](https://artificialanalysis.ai/models/comparisons/grok-4-20-vs-grok-3).
- **Reasoning / coding / vision:** Vals reports GPQA Diamond 88.64%, AIME 96.46%, SWE-bench Verified 74.20%, MMMU Pro 83.47%; xAI API, temperature 0.7, top-p 0.95. These are beta-era results, not a guarantee of unchanged alias behavior. [Evaluator announcement](https://www.vals.ai/home?trk=public_post-text).
- **Agent proxy:** Archived Vals Index v1 46.07%, combining finance and coding workflows; not a pure tool-use score. [Index methodology](https://www.vals.ai/benchmarks/vals_index_v1).
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA, Claw and DeepSWE: no verified public score found in reviewed sources. No verified near-perfect retrieval at the complete window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Mixed workflow evidence supports capable tools; modern tool-specific coverage is incomplete.
- **Reasoning: 82/100.** Strong GPQA and HLE; difficult physics and evaluator revision differences cap confidence.
- **Context window: 95/100.** Current 1M provider capacity; retrieval evidence does not justify 100.
- **Multimodal: 70/100.** Measured image understanding; no verified native audio/video coverage.
- **Coding: 77/100.** SWE-bench supports useful repository work, below demonstrated modern frontier breadth.
- **Cost efficiency: 90/100.** Competitive standard rates; long prompts and tool charges reduce savings.
- **Overall Score: 79/100.** Half-up mean of 70, 82, 95, 70 and 77; suitable for large-context reasoning with image input.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

