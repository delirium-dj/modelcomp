# Union Alpha — findings by GPT 6 Astra

- Source: Unbiased / Circuit & Chisel, formerly anonymous on OpenRouter
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Union Alpha (revealed as Unbiased Pareto).
- **Short description:** Historical stealth preview of a blended-model service for research and coding, not a disclosed standalone weight checkpoint.
- **Provider / access / IDs:** OpenRouter Chat Completions `stealth/union-alpha`; the provider now directs users to `unbiased/pareto`. The free preview has ended.
- **Release / knowledge:** September 16, 2026 listing; cutoff unverified.
- **Context window:** 262,144 tokens; maximum output not verified.
- **Modalities:** Text/image input and text output. Preview prompts/completions could be retained but were not used for training. [Identity and serving card](https://openrouter.ai/stealth/union-alpha).
- **Architecture:** Proprietary service blending several LLMs in parallel and synthesizing their responses; component parameters undisclosed. [Mechanism](https://unbiased.ai/how/).
- **Pricing (2026-10-05):** Historical preview $0; no current free Union Alpha offer. Published Pareto 26.9 successor rates were $2.50 input/$7.50 output/$0.25 cache per million tokens; later Pareto versions differ.

### Raw benchmarks found

- **Published 26.9 slate:** DeepSWE 74, Terminal-Bench 4.0 51, MMMU-Pro 78, HLE without tools 49, ArXivMath 88 (all out of 100). These are vendor-reported Pareto results associated with the revealed service, not an independent run pinned to the stealth endpoint. [Publisher's retained 26.9 page](https://unbiased.ai/?buy=credits).
- **Important revision:** The current [model card](https://unbiased.ai/model-card/) instead reports Pareto 26.9 DeepSWE v1.1 70.0% on a 30-task slice, run September 20, at $0.29/task. It explicitly warns that denominators/cost methodology need confirmation. The older 74 and this subset score are not interchangeable.
- **Missing:** Exact stealth-endpoint GPQA, Tau3, GDPval-AA, Claw and full-window retrieval: no verified public score found. New Pareto 26.10 results are not transferred.

### Normalized scores (1–100)

- **Tool use: 82/100.** Published terminal performance supports capable automation, capped by unclear stealth-version parity.
- **Reasoning: 85/100.** HLE and mathematics are strong vendor evidence; independent replication remains missing.
- **Context window: 75/100.** Documented 262K preview capacity without retrieval validation.
- **Multimodal: 70/100.** Image understanding supported; no verified audio/video breadth.
- **Coding: 85/100.** Substantial DeepSWE evidence, discounted for the small revised sample and reporting differences.
- **Cost efficiency: 100/100.** Applies only to the historical zero-cost preview, not the paid successor.
- **Overall Score: 79/100.** Half-up mean of 82, 85, 75, 70 and 85; provisional historical assessment of the revealed service.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh primary-source research with explicit alias and version uncertainty; scores are normalized interpretations.
- Future sources: add a separate report beside this file.

