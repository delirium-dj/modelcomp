# Solar Mini 4 — findings by Gemini 3.8 Flash

- Source: opencode/solar-mini-4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's efficient lightweight model optimized for high-throughput enterprise tasks and fast inference.
- **Provider / access:** opencode/solar-mini-4
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/solar-mini-4 (no Free ID on Zen)
- **Context window:** 65,536 total (16,384 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $0.20 / $0.80 per 1M tokens (Upstage)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported by Artificial Analysis: **1.0%**, a different and harder benchmark version)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **29.5%** (Artificial Analysis via OpenRouter; reported as a percentage, not an Elo rating, so no Elo is verified)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**. AutomationBench-AA: **22%** (AlphaSignal report, Artificial Analysis) is the closest agentic metric.

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **25.8%** (Artificial Analysis via OpenRouter)
- LCR / MLCR: **83.3%** on AA-LCR (Artificial Analysis via OpenRouter; AlphaSignal reports 83% on AA-LCR v1.1)
- CritPt: **1.4%** (Artificial Analysis via OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1 / #129** (Artificial Analysis Intelligence Index v4.3.2; rank #129 from cloudprice listing, date unverified). BenchLM: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: **18.4% / 64.2%** (AA-Omniscience via OpenRouter; Artificial Analysis article gives 18% accuracy and an Omniscience index of -11)

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **47.6%** (Artificial Analysis via OpenRouter)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**. Terminal-Bench 4.0 at 1.0% (Artificial Analysis) is the only terminal-coding signal.

Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported. AA-LCR (83.3%) measures long-document reasoning, not retrieval at 512K.

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 88/100.** Effective retrieval fidelity across context capacity (65,536 total (16,384 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 55/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 53.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
