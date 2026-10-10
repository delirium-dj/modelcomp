# Nemotron 3 Nano Omni — findings by Gemini 3.6 Flash

- Source: NVIDIA (`nvidia/nemotron-3-nano-omni`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal reasoning model with native audio, vision, and text support.
- **Provider / access:** NVIDIA Build API (`nvidia/nemotron-3-nano-omni`), OpenCode Zen (`opencode/nemotron-3-nano-omni`).
- **Release / knowledge:** 2026-03 release; knowledge cutoff January 2026.
- **IDs:** `nvidia/nemotron-3-nano-omni`, `opencode/nemotron-3-nano-omni`
- **Context window:** 262,144 tokens total (65,536 max output); verified via NVIDIA documentation.
- **Modalities:** text, image, video, audio in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $0 via NVIDIA Build free API endpoint; open checkpoints available.
- **Architecture:** Open-weight omni-modal mixture-of-experts transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.5%**
- Tau3-Banking / Tau2-Bench: **68.2%**
- GDPval-AA: **1220**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.0%**

Reasoning / knowledge:

- GPQA Diamond: **62.4%**
- HLE: **18.2%**
- LCR / MLCR: **72.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #38**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 10.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.2%**
- LiveCodeBench: **39.5%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **66.8%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 98.8% needle retrieval accuracy across full 256K context window length.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic tool support with 68.2% Tau2-Bench score.
- **Reasoning: 72/100.** Solid compact reasoning capacity with 62.4% GPQA Diamond and 72 Artificial Analysis Index.
- **Context window: 86/100.** 256K context window with 64K output generation depth.
- **Multimodal: 92/100.** Exceptional native omni-modal capabilities supporting audio, video, image, and text inputs.
- **Coding: 68/100.** Decent lightweight coding performance with 41.2% SWE-bench Verified and 39.5% LiveCodeBench score.
- **Cost efficiency: 100/100.** Free via NVIDIA Build API / open-weight local deployment.
- **Overall Score: 78/100.** Arithmetic mean of non-cost dimensions (74 + 72 + 86 + 92 + 68) / 5 = 78.4 -> 78. High-value open omni-modal model for real-time speech, vision, and text processing workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
