# Mistral Large 4 Preview — findings by GPT 6 Astra

- Source: Mistral / mistral-large-4
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Mistral Large 4 Preview.
- **Short description:** General-purpose reasoning and vision model; public preview, with weights promised later in October.
- **Provider / access:** Mistral Studio, `mistral-large-4`, Chat Completions and Conversations APIs.
- **Release / knowledge:** October 6, 2026; knowledge cutoff not verified.
- **IDs:** `mistral-large-4`; no verified free Zen ID.
- **Context window:** Official indexed documentation advertises 1M; Artificial Analysis currently lists 524k. Treat deployed capacity as provider-dependent and unresolved; no direct API test performed.
- **Modalities:** Text/image input and text output, reasoning, function calling, structured output, document Q&A.
- **Pricing (as of 2026-10-08):** Official launch offer $0.68 input / $2.09 output / $0.07 cached input per million tokens, 50% off for two weeks; regular $1.36 / $4.18 / $0.14.
- **Architecture:** Documentation specifies 1.05T total, 49B active plus 1.6B vision encoder; launch article instead says 1T/52B. Weights and final license not yet verified as released. [Documentation](https://docs.mistral.ai/models/mistral-large-4-0), [changelog](https://docs.mistral.ai/resources/changelogs).

### Raw benchmarks found

- **Agent/tool use:** Mistral reports AutomationBench 59.9% and AA-Briefcase 1,393 Elo. Artificial Analysis independently lists GDPval-AA v2.1 1,424 Elo and AutomationBench-AA 60%.
- **Reasoning:** Artificial Analysis: HLE 35%, CritPt 11%, AA-LCR v1.1 81%, Intelligence Index 38. These are rounded displayed results under the current index generation, not directly comparable to older index thresholds.
- **Coding:** Mistral reports DeepSWE v1.1 61.7%, SWE-Atlas-QnA 59.4%, Terminal-Bench 4 28.3%. Artificial Analysis lists Terminal-Bench 4.0 27% and SciCode 54%; keep the differing evaluations separate.
- **Vision:** Vendor Dense 200 visual grounding 42%; independent GDP.pdf 19%.
- **Long context:** AA-LCR v1.1 above is a reasoning benchmark, not proof of full-window retrieval. No verified MRCR result at 512k or 1M found.
- **Missing:** Terminal-Bench 2.1, Tau3-Banking, Claw-Eval, Toolathon, GPQA Diamond, Omniscience accuracy/hallucination split, SWE-bench Verified and LiveCodeBench: no verified public score found in inspected sources.

Sources: [Mistral launch evaluation](https://mistral.ai/news/mistral-large-4/), [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/mistral-large-4-vs-glm-5-3-flash). Vendor evaluations and third-party harnesses are distinct; TB4 is not TB2.1.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench and professional-work Elo support strong agents; incomplete older-suite coverage limits confidence.
- **Reasoning: 84/100.** HLE 35% and LCR 81% support strong reasoning; CritPt 11% limits a frontier rating.
- **Context window: 88/100.** Conservative 524k deployment tier amid conflicting 1M documentation; no full-window retrieval proof.
- **Multimodal: 78/100.** Image/document reasoning and grounding extend beyond basic vision; no verified native audio/video output.
- **Coding: 84/100.** DeepSWE 61.7% and SciCode 54% are strong but below frontier coding anchors.
- **Cost efficiency: 92/100.** Temporary $0.68/$2.09 launch pricing is economical; rating is promotion-dependent.
- **Overall Score: 83/100.** Half-up mean: (82 + 84 + 88 + 78 + 84) / 5 = 83.2. Suitable for multimodal enterprise agents, with preview uncertainty.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source web research; normalized scores are independent interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

