# Nemotron 3 Ultra Free — findings by Gemini 3.6 Flash

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's flagship 550B hybrid Mamba-MoE open model built for complex long-running agents with extremely low hallucination.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-ultra-free`), Chat Completions API.
- **Release / knowledge:** 2026-06-04 release; 2025-11 knowledge cutoff.
- **IDs:** `opencode/nemotron-3-ultra-free`
- **Context window:** 1,048,576 tokens input / 32,768 max output; verified via build.nvidia.com.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.00 / 1M input, $0.00 / 1M output ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models)).
- **Architecture:** Open hybrid Mamba-MoE (550B total / 55B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%**
- Tau3-Banking / Tau2-Bench: **81.5%** (Tau3 Airline) / **86.4%** (Retail)
- GDPval-AA: **1448**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0**

Reasoning / knowledge:

- GPQA Diamond: **86.7%**
- HLE: **28.0%**
- LCR / MLCR: **65.4%**
- CritPt: **60.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48.0 / #40**
- Omniscience Accuracy / Hallucination Rate: **94.5% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.4%**
- LiveCodeBench: **78.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **45.0%**
- DeepSWE / Coding Index / other: **66.0%**

Long context:

- MRCR / RULER: **95.0%** retrieval accuracy across 1M window

### Normalized scores (1–100)

- **Tool use: 78/100.** Outstanding Tau3 scores (81.5% Airline / 86.4% Retail).
- **Reasoning: 75/100.** High GPQA Diamond (86.7%) with exceptional factual grounding and 48 AA Index.
- **Context window: 97/100.** 1M context with fast Mamba-MoE state retrieval.
- **Multimodal: 20/100.** Text input primary; non-text unverified.
- **Coding: 80/100.** Strong SWE-bench performance (70.4%).
- **Cost efficiency: 100/100.** Free tier access ($0/1M tokens).
- **Overall Score: 70/100.** Mean of five quality dims (78+75+97+20+80)/5 = 70. Top open-weights planner for long-horizon agent orchestration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-29
- Method: Re-researched with verified benchmark updates from NVIDIA release documentation; scores are normalized 1–100 interpretations.
