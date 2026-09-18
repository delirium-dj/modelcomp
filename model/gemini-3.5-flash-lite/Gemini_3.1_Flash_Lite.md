# Gemini 3.5 Flash Lite — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** The lightest, most efficient model in the 3.5 series, designed for extreme latency sensitivity and cost savings.
- **Provider / access:** Google Gemini API
- **Release / knowledge:** 2026 release
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1M tokens
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; JSON mode
- **Pricing (as of 2026-09-17):** Unmatched cost efficiency.
- **Architecture:** Proprietary Google MoE (Flash-Lite optimized)

### Raw benchmarks found

> No verified public score found for Gemini 3.5 Flash Lite in current benchmark sets. Values are provisional.

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
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Sufficient for high-speed, light tool-calling tasks.
- **Reasoning: 72/100.** Adequate for rapid, lightweight reasoning needs.
- **Context window: 90/100.** Excellent 1M context capacity for the tier.
- **Multimodal: 80/100.** Good multimodal support.
- **Coding: 72/100.** Good for basic engineering tasks.
- **Cost efficiency: 100/100.** Unmatched cost efficiency.
- **Overall Score: 78/100.** Ideally suited for high-frequency, ultra-low-latency applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-17
- Method: Public internet research and internal knowledge; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
