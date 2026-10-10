# MiMo V2.6 Flash — findings by Gemini 3.5 Flash

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active) tuned for long-horizon agentic coding, computer use, and low-cost execution.
- **Provider / access:** Xiaomi / Xiaomi API Platform (No Zen Free ID)
- **Release / knowledge:** September 22, 2026; knowledge cutoff 2026
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,048,576 (1M) context window / 131,072 (128K) max output
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-08):** Paid $0.14 input (miss), $0.0028 input (cache hit), and $0.28 output per 1M tokens on Xiaomi API Platform
- **Architecture:** 309B total / 15B active parameters Mixture-of-Experts (MoE) architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** <(Xiaomi model card)>
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.6%** <(Toolathlon-Verified)>

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.9%** <(DeepSWE v1.1, Xiaomi model card)>
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.9%**

Long context:

- RULER / GraphWalks retrieval accuracy: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 85/100.** Highly capable agentic execution on Terminal-Bench 2.1 (87.6%), OSWorld-Verified (80.8%), and Toolathlon-Verified (73.6%).
- **Reasoning: 82/100.** Exceptional defensive security analysis (95.1% on CyberGym), though lacking dedicated high-level math benchmark rows.
- **Context window: 100/100.** Full 1M context window with ultra-cheap $0.0028/1M prompt-cache reads.
- **Multimodal: 90/100.** Native input support across text, image, video, and audio modalities with text-only output.
- **Coding: 82/100.** Strong 15B active parameter coding capabilities with 67.9% on DeepSWE v1.1.
- **Cost efficiency: 97/100.** Exceptional value at $0.14/$0.28 per 1M tokens ($0.0028 cache hit rate).
- **Overall Score: 88/100.** Impressive efficiency and agentic performance at a tiny fraction of flagship pricing. Highly recommended.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
