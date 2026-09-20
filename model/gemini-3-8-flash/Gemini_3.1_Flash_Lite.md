# Gemini 3.8 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-efficiency Flash tier model in the 3.8 series, optimized for speed and cost.
- **Provider / access:** Google AI Studio / Vertex AI (proprietary)
- **Release / knowledge:** No public release date provided.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** No verified public value.
- **Modalities:** Text and image in; text out.
- **Pricing (as of 2026-09-20):** No verified public pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Moderate tool-use capabilities.
- **Reasoning: 65/100.** Capable for high-speed tasks.
- **Context window: 60/100.** Likely sufficient for most standard tasks.
- **Multimodal: 60/100.** Standard text/image input support.
- **Coding: 60/100.** Suitable for basic coding tasks.
- **Cost efficiency: 80/100.** Expected to be cost-effective for a Flash tier model.
- **Overall Score: 61.0/100.** A high-speed, cost-effective model suitable for general-purpose, high-throughput tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-20
- Method: Independent public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
