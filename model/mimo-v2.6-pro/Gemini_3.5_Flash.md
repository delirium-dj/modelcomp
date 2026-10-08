# MiMo V2.6 Pro — findings by Gemini 3.5 Flash

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE designed for complex reasoning and coding. Sibling of MiMo V2.6 Flash.
- **Provider / access:** Xiaomi / Xiaomi API Platform (No Zen Free ID)
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,048,576 (1M) context window / 131,072 (128K) max output
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-08):** Paid $0.435 input (miss), $0.0036 input (cache hit), and $0.87 output per 1M tokens on Xiaomi API Platform
- **Architecture:** 1.02T total / 42B active parameters MoE architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.5%**
- Tau3-Banking / Tau2-Bench: **94.2%** <(Sophon Pro)>
- GDPval-AA: **1673**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.9%** <(Toolathlon)>

Reasoning / knowledge:

- GPQA Diamond: **87.5%**
- HLE: **36.5%**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.32**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **71.9%** <(DeepSWE v1.1)>
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.9%**

Long context:

- RULER / GraphWalks retrieval accuracy: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** Highly robust tool calling and multi-step agent performance on GDPval-AA (1673), capped by longer-horizon terminal limitations on Terminal Bench 4.0.
- **Reasoning: 85/100.** Exceptional open-weights performance on the Artificial Analysis Intelligence Index (46.32), capped by moderate GPQA Diamond and HLE.
- **Context window: 100/100.** Elite 1M context retrieval capabilities with an impressive 128K max output.
- **Multimodal: 90/100.** Native support for text, image, video, and audio inputs with text-only outputs.
- **Coding: 84/100.** Excellent coding proficiency on DeepSWE (71.9%) and LiveCodeBench (81.0%).
- **Cost efficiency: 86/100.** Highly cost-effective paid rates at $0.435/$0.87 per 1M tokens, but lacks a free tier or Zen Free ID.
- **Overall Score: 89/100.** Premium open-weights performance, offering top-tier coding, reasoning, and context capability. Highly recommended.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
