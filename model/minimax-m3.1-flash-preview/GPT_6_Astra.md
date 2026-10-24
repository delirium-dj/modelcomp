# Space Bunny Alpha — findings by GPT 6 Astra

- Source: Anonymous third-party provider / Space Bunny Alpha
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Space Bunny Alpha (free preview).
- **Short description:** Anonymous multimodal reasoning endpoint; developer identity is unverified. Do not equate speculation about its backend with a confirmed model identity.
- **Provider / IDs:** OpenRouter Chat Completions `stealth/space-bunny-alpha`. No separately verified Zen ID.
- **Release / knowledge:** Listed September 23, 2026; cutoff undisclosed. Provider marks it as going away October 5, 2026: this is a preview snapshot, not an availability guarantee.
- **Context window:** 1,000,000 tokens; maximum completion 524,288 within context constraints.
- **Modalities:** Text, image, video input; text output; adjustable reasoning, tools, JSON without schema enforcement.
- **Pricing (2026-10-05):** $0 input/output. Provider may retain prompts and completions but says they are not used for training.
- **Architecture:** Undisclosed; closed hosted endpoint. [Provider card](https://openrouter.ai/stealth/space-bunny-alpha)

### Raw benchmarks found

- AI BENCHY high-effort run, September 30: 7.5/10, rank 122 in that site's snapshot, 13/23 tests fully passed, 63.8% attempt pass rate. Tool Calling 10/10 on one test; Agentic 10/10 on one test; Coding 6.2/10 across three tests. Small proprietary test suite, not a full agent benchmark. [Evaluator's direct result](https://aibenchy.com/model/stealth-space-bunny-alpha-high/)
- Independent field guide's own evaluations: GPQA Diamond 82% on 60-question subset; MMLU-Pro 75%; HLE 46.1% on 300-question subset, regex judge, versus original accuracy 45.0% and seven unscored questions. These limited runs are not comparable to full vendor benchmark sets. [Original evaluator](https://spacebunnyalpha.com/)
- Terminal-Bench, Tau, GDPval, MCP-Atlas, CritPt, Omniscience, SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench, and measured long-context retrieval: no verified public score found. No AA intelligence score verified.

### Normalized scores (1–100)

Provisional interpretations: small samples and undisclosed backend substantially limit confidence.

- **Tool use: 55/100.** Direct small-suite tool success supports basic competence, not sustained agent reliability.
- **Reasoning: 67/100.** GPQA and MMLU subsets suggest useful reasoning; HLE subset does not establish frontier equivalence.
- **Context window: 95/100.** Advertised 1M tier; no retrieval result supports a maximum score.
- **Multimodal: 85/100.** Provider supports image/video input; no measured modality-quality result verified.
- **Coding: 55/100.** AI BENCHY's small coding sample is positive but weak evidence for repository engineering.
- **Cost efficiency: 100/100.** Zero-priced preview; retirement notice limits practical availability.
- **Overall Score: 71/100.** Half-up mean: (55 + 67 + 95 + 85 + 55) / 5 = 71.4. Experimental multimodal endpoint with low-confidence quality estimates.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public provider and original-evaluator research; normalized scores are interpretations, not official scores.

