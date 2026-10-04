# Grok 4.3 — findings by GPT 6 Astra

- Source: xAI / SpaceXAI, `grok-4.3`
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.3, evaluated at high reasoning.
- **Short description:** Configurable reasoning model with image input and tool calling.
- **Provider / access:** xAI API; Amazon Bedrock availability confirmed by the [vendor announcement](https://x.ai/news/grok-amazon-bedrock). Responses/Chat Completions availability follows provider integrations.
- **Release / knowledge:** April 2026 according to [AA release profile](https://artificialanalysis.ai/models/releases/grok-4-3); exact cutoff unverified.
- **IDs:** `grok-4.3`, alias `grok-4.3-latest`; no verified Zen Free ID.
- **Context window:** 1,000,000 tokens; exact maximum output not verified.
- **Modalities:** Text/image input, text output; functions and structured output. Docs list none/low/medium/high in the capability summary and additionally xhigh in details; default low. This report uses the evaluator's high setting.
- **Pricing (2026-10-04):** USD 1.25 input / 0.20 cache hit / 2.50 output per million tokens; long-context tier at 200K doubles these to 2.50 / 0.40 / 5.00. [Model docs](https://docs.x.ai/developers/models/grok-4.3), [pricing](https://docs.x.ai/developers/pricing).
- **Architecture:** Proprietary; no verified public parameter count.
- **Identity caveat:** Some retired model slugs redirect to 4.3 at low or none. Their historical results are not 4.3 high results. [Migration notice](https://docs.x.ai/developers/migration/may-15-retirement).

### Raw benchmarks found

One current [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/grok-4-3-vs-grok-4), **Grok 4.3 High column**, supplies the measurements below. These use the newer index and benchmark versions, not the methodology's historical index scale.

Agent / tool use:

- GDPval-AA v2.1 **941 Elo**; AA-Briefcase v1.1 **760**; AutomationBench-AA **1%**; Terminal-Bench 4.0 **0%**.
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval, Toolathlon and MCP-Atlas: no verified public score found in the retrieved primary evidence.

Reasoning / knowledge:

- Intelligence Index **25**; HLE **37%**; CritPt **8%**; AA-Omniscience **18**, a composite rather than accuracy.
- GPQA Diamond and separate hallucination rate: no verified public score found.

Coding:

- SciCode **48%**.
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 **73%**; GDP.pdf **6%**.
- Full-window MRCR/RULER retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Mid-band GDPval with weak measured automation and terminal execution limits autonomous-workflow confidence.
- **Reasoning: 80/100.** HLE and long-context reasoning are useful, while CritPt and missing GPQA prevent a frontier rating.
- **Context window: 95/100.** Million-token documented capacity; no near-perfect full-window retrieval evidence.
- **Multimodal: 70/100.** Image input fits the visual tier; no native audio/video coverage established.
- **Coding: 67/100.** Provisional: SciCode provides direct coding evidence, but missing repository benchmarks and weak terminal outcomes cap extrapolation.
- **Cost efficiency: 91/100.** Affordable short-context input/output, with long-context premiums.
- **Overall Score: 73/100.** Half-up mean: (55 + 80 + 95 + 70 + 67) / 5 = 73.4; useful for inexpensive image/text reasoning with supervised tools.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh vendor documentation and independent evaluator research; normalized scores are interpretations, not vendor ratings.

