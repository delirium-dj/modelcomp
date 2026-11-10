# GPT Realtime Translate — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-realtime-translate`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Translate
- **Short description:** OpenAI's streaming speech-to-speech translation engine engineered to deliver simultaneous interpretation of spoken dialogue across 70+ languages into 13 target languages with low-latency audio delivery.
- **Provider / access:** OpenAI Realtime Translation API (`openai/gpt-realtime-translate`), Azure OpenAI.
- **Release / knowledge:** 2026 release; streaming translation model; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-realtime-translate`, `gpt-realtime-translate`
- **Context window:** 128,000 tokens total per session.
- **Modalities:** Audio, text in; audio, text out.
- **Pricing (as of 2026-11-10):** Audio in $0.05/min ($3.00/hr), audio out $0.20/min ($12.00/hr).

### Raw benchmarks found

- BLEU / Speech-to-Speech Translation: State-of-the-art conversational translation accuracy on CoVoST 2 and FLEURS benchmarks.
- Stream Lag: Sub-450ms stream latency lag between original utterance and interpreted speech synthesis.
- Colloquial Nuance: Preserves speaker tone, hesitation, and colloquial idioms across diverse language pairs.

### Normalized scores (1–100)

- **Tool use: 70/100.** Specialized translation endpoint with basic language-switching and session controls.
- **Reasoning: 80/100.** Strong semantic comprehension and contextual disambiguation during spoken translation.
- **Context window: 76/100.** 128,000 tokens per session for uninterrupted multi-hour interpreting.
- **Multimodal: 86/100.** High-fidelity direct speech-to-speech processing across 70+ spoken languages.
- **Coding: 65/100.** General programming logic out of primary scope; handles technical terminology well.
- **Cost efficiency: 76/100.** $0.05/$0.20 per minute provides cost-effective automated conference and conversation interpreting.
- **Overall Score: 75.4/100.** Arithmetic mean of five quality dimensions: (70 + 80 + 76 + 86 + 65) / 5 = 377 / 5 = 75.4. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing OpenAI Realtime translation guides, multilingual speech evaluation benchmarks, and acoustic streaming latency measurements.
- Reference URLs:
  - [OpenAI Realtime Translation](https://openai.com)
  - [OpenAI Pricing Documentation](https://openai.com/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

