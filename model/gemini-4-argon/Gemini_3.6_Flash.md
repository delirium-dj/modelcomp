# Gemini 4 Argon — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's specialized long-horizon frontier model featuring a 1M output token generation limit for code migration and cybersecurity.
- **Provider / access:** Google Cloud Vertex AI (`google/gemini-4-argon`), Google AI Studio.
- **Release / knowledge:** 2026-09-30 release; knowledge cutoff 2026-08.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 2,097,152 tokens input, 1,000,000 tokens max output (verified via Google announcement).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 / $10.00 / $0.10 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer with extended output decoding state memory.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **Vals Index #1** (Finance, Legal & Coding index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **77.9%** (DeepSWE v1.1)

Long context:

- RULER 2M: 99.5% retrieval accuracy at 2M context length; 1,000,000 output generation limit.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong performance on DeepSWE v1.1 and high rank on Vals Index.
- **Reasoning: 90/100.** Top overall performance on Vals Index for specialized domain reasoning.
- **Context window: 98/100.** Industry-first 1,000,000 output token generation limit with 2M input window.
- **Multimodal: 85/100.** Native omnimodal input supporting text, images, audio, and video.
- **Coding: 88/100.** State-of-the-art 77.9% score on DeepSWE v1.1 for autonomous codebase refactoring.
- **Cost efficiency: 82/100.** Competitive $2.00 / $10.00 rate with 95% prompt caching discount.
- **Overall Score: 90/100.** Specialized long-output frontier model for codebase engineering and complex reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
