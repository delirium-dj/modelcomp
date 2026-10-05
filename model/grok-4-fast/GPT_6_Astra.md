# Grok 4 Fast — findings by GPT 6 Astra

- Source: xAI / Grok 4 Fast reasoning
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Grok 4 Fast (original reasoning configuration).
- **Short description:** Historical inexpensive reasoning/search model; non-reasoning shares weights but is not the evaluated setting here.
- **Provider / access / IDs:** Historical xAI Chat Completions `grok-4-fast-reasoning`. Since May 15, 2026 this redirects to Grok 4.3 low; `grok-4-fast-non-reasoning` redirects to Grok 4.3 none. [Retirement](https://docs.x.ai/developers/migration/may-15-retirement).
- **Release / knowledge:** September 19, 2025; cutoff unverified.
- **Context window:** 2,000,000 tokens, historical.
- **Modalities / architecture:** Proprietary text/image-input, text-output reasoning model. Web/X tools can ingest other media; that does not establish native video or audio input. [Evaluator specifications](https://artificialanalysis.ai/models/comparisons/grok-4-fast-reasoning-vs-grok-4).
- **Pricing (checked 2026-10-05):** Original launch input/output $0.20/$0.50 per million tokens below 128K prompt; $0.40/$1 at 128K+, cache $0.05. [Launch](https://x.ai/news/grok-4-fast). Current redirected calls cost $1.25/$2.50 for the replacement.

### Raw benchmarks found

- **Tools:** Vendor pass@1 BrowseComp 44.9%, Reka Research Eval 66.0%.
- **Reasoning:** GPQA Diamond 85.7%, AIME 2025 without tools 92.0%, HLE without tools 20.0%.
- **Coding:** LiveCodeBench January–May 80.0%. [Original vendor table](https://x.ai/news/grok-4-fast).
- **Independent reasoning/context:** HLE 19%, CritPt 3%, AA-LCR v1.1 74%; AA-Omniscience index -30, not accuracy. Intelligence Index v4.3.2 is an estimated 18 and is not comparable numerically to earlier index versions. [Artificial Analysis](https://artificialanalysis.ai/models/comparisons/grok-4-fast-reasoning-vs-grok-4).
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA, Claw, SWE-Pro, DeepSWE and verified full-2M retrieval: no verified public score found in reviewed evidence.

### Normalized scores (1–100)

- **Tool use: 72/100.** Search performance is solid; broad workflow reliability remains less established.
- **Reasoning: 76/100.** Strong mathematics, but HLE and knowledge reliability impose limits.
- **Context window: 95/100.** Historical 2M capacity; full-window retrieval is not demonstrated.
- **Multimodal: 70/100.** Image understanding supported, without verified native audio/video breadth.
- **Coding: 75/100.** Competitive-programming evidence is strong; repository repair evidence is missing.
- **Cost efficiency: 96/100.** Applies to original inexpensive API pricing, not current redirect charges.
- **Overall Score: 78/100.** Half-up mean of 72, 76, 95, 70 and 75; historical value-oriented reasoning model.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

