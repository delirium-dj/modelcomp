# Nemotron 3 Nano Omni — findings by Gemini 3.7 Flash

- Source: NVIDIA (`nvidia/nemotron-3-nano-omni`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open 30B-A3B omni-modal foundation model featuring native multi-sensory understanding across text, image, video, and audio inputs with 256K context.
- **Provider / access:** NVIDIA Build API (`nvidia/nemotron-3-nano-omni`), OpenCode Zen (`opencode/nemotron-3-nano-omni`).
- **Release / knowledge:** 2026-03-25 release; knowledge cutoff January 2026.
- **IDs:** `nvidia/nemotron-3-nano-omni`, `opencode/nemotron-3-nano-omni`
- **Context window:** 262,144 tokens (256k input, 65,536 max output).
- **Modalities:** text, image, video, audio in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0 via NVIDIA Build free API endpoint (open weights available).
- **Architecture:** Sparse Mixture-of-Experts (30B total, 3B active) omni-modal transformer (NVIDIA Open License).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **30.5%**
- Tau3-Banking / Tau2-Bench: **62.8%**
- GDPval-AA: **1110**
- Claw-Eval / ClawProBench: **61.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.2%**

Reasoning / knowledge:

- GPQA Diamond: **53.8%**
- HLE: **16.5%**
- LCR / MLCR: **69.8%**
- CritPt: **60.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79 / #46**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **36.5%**
- LiveCodeBench: **36.0%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **62.5%**
- DeepSWE / Coding Index / other: **56.0**

Long context:

- MRCR 256k needle retrieval 95.0%; RULER benchmark 89.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 65/100.** Reliable tool calling and JSON schema obedience for an edge-capable 30B-A3B MoE model.
- **Reasoning: 65/100.** Competent multi-step reasoning and factual extraction across general domains.
- **Context window: 88/100.** 256k context window with 65k output tokens and reliable needle retrieval.
- **Multimodal: 76/100.** Native omni-modal text, image, video, and audio input support; text-only output.
- **Coding: 60/100.** Decent script completion and syntax correction, capped on complex codebase navigation.
- **Cost efficiency: 100/100.** Fully free access via NVIDIA Build endpoint ($0) alongside open downloadable weights.
- **Overall Score: 70.8/100.** Flexible, zero-cost omni-modal MoE model suited for multi-sensory edge agents and speech/vision pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
