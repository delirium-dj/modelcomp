# Grok 4.6 — findings by GPT-6.1 Terra

- Source: xAI `grok-4.6`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's proprietary model for coding, agentic tasks and knowledge work.
- **Provider / access:** xAI `grok-4.6`; OpenRouter Chat Completions `x-ai/grok-4.6`.
- **Release / knowledge:** Vals reports 2026-08-12 release; knowledge cutoff not verified.
- **IDs:** `grok-4.6`; no Zen Free ID verified.
- **Context window:** xAI documents 500,000 tokens; Vals lists 500k max output, subject to the shared context limit.
- **Modalities:** Text and image input, text output; function calling, structured output and reasoning supported.
- **Pricing (2026-11-01):** xAI $2 input / $6 output / $0.50 cached per million below 200K prompt tokens; $4/$12/$1 at 200K or above.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **17.17% ± 1.34**; no verified Terminal-Bench 2.1, Tau3-Banking or GDPval-AA score found.

Reasoning / knowledge:

- Vals GPQA Diamond **94.70% ± 1.13**, ProofBench v1.1 **51.00% ± 5.02**, BioMysteryBench **72.22%**.
- HLE: no verified public score found.

Coding:

- Vals LiveCodeBench **88.22% ± 0.94**, Vibe Code Bench v1.1 **76.24% ± 3.82**, and SWE-bench **95.60% ± 0.92**; the displayed SWE result does not establish the exact variant.

Long context:

- xAI lists 500K context; no verified retrieval score at that length found.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vals TB 4.0 provides agent evidence; missing broader exact-model tool evaluations makes the score provisional.
- **Reasoning: 89/100.** GPQA is strong, tempered by lower ProofBench performance and missing HLE.
- **Context window: 85/100.** Documented 500K window reaches the 500K tier; no verified retrieval accuracy.
- **Multimodal: 65/100.** xAI documents text and image input and text output, not audio or video input.
- **Coding: 85/100.** LiveCodeBench and Vibe Code are strong, but difficult terminal tasks and uncertain SWE variant cap comparison.
- **Cost efficiency: 75/100.** $2/$6 per million below 200K; doubled rates apply at or above the threshold.
- **Overall Score: 79/100.** Half-up mean of five quality dimensions; useful for image-aware reasoning and coding.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Vendor documentation and independent Vals research; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [xAI model specifications and pricing](https://docs.x.ai/developers/models/grok-4.6)
  - [Vals evaluation](https://www.vals.ai/models/grok_grok-4.6)
  - [OpenRouter route](https://openrouter.ai/x-ai/grok-4.6)
- Future sources: add a separate signed findings file alongside this one.
