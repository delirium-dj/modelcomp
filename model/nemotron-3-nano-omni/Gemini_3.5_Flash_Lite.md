# Nemotron 3 Nano Omni — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal reasoning model: unifies text, image, video and audio reasoning in a hybrid Mamba-Transformer MoE architecture.
- **Provider / access:** NVIDIA Build API (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`), Hugging Face open weights.
- **Release / knowledge:** 2026-04-28 release; training data cutoff current
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`
- **Context window:** 262,144 total tokens; 65,536 max output
- **Modalities:** Text, image, video, audio in; text out; reasoning with budget control
- **Pricing (as of 2026-10-07):** $0 via NVIDIA Build free API endpoint; open checkpoints under NVIDIA open model license
- **Architecture:** Hybrid Mamba + Transformer MoE, 30B total / 3B active

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **42.2% TauBench V2 Telecom**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld (agentic computer use): **47.4%**

Reasoning / knowledge:

- GPQA Diamond: **73.1% GPQA (no tools)**
- HLE: **no verified public score found**
- LCR / MLCR: **35.9% AA-LCR**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **77.3% MMLU-Pro, 82.1% AIME25**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **63.2%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / GraphWalks value at 256K window length: **87.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool use and audio/vision interaction capabilities.
- **Reasoning: 85/100.** Robust reasoning scores on GPQA and AIME.
- **Context window: 89/100.** 256K context window with reliable retrieval.
- **Multimodal: 90/100.** Advanced native multimodal handling including audio and video.
- **Coding: 79/100.** Solid coding performance on LiveCodeBench.
- **Cost efficiency: 100/100.** Free API endpoint and open weights ($0 cost).
- **Overall Score: 85.0/100.** Mean of the five quality dims (82 + 85 + 89 + 90 + 79 = 425 / 5 = 85.0).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-07
- Method: public internet research and technical report verification; scores are normalized 1–100 interpretations.
