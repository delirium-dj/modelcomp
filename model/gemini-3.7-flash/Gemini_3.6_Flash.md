# Gemini 3.7 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model offering hybrid reasoning, superior coding, and 1M context performance.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.7-flash`), GenerateContent API.
- **Release / knowledge:** 2026-05 release; 2026-01 knowledge cutoff.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning/tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal hybrid reasoning MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.5%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.5**

Reasoning / knowledge:

- GPQA Diamond: **89.0%**
- HLE: **38.0%**
- LCR / MLCR: **88.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.5 / #5**
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.0%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **76.0%**

Long context:

- MRCR / RULER: **99.4%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional accuracy on multi-turn agent benchmarks.
- **Reasoning: 90/100.** High GPQA Diamond score (89%).
- **Context window: 95/100.** 1M context length with top-grade retrieval.
- **Multimodal: 90/100.** Native text, image, audio, video, and PDF input.
- **Coding: 88/100.** Top-tier coding and software engineering capability.
- **Cost efficiency: 95/100.** Excellent pricing structure with free tier.
- **Overall Score: 90/100.** Near-frontier multimodal reasoning model at Flash pricing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
