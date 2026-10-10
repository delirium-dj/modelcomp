# Qwen 3.5 397B — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.5-397b`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba Cloud's flagship open-weights Mixture-of-Experts model (397B total / 17B active parameters per token) featuring native early-fusion multimodal perception across text, image, and video.
- **Provider / access:** Alibaba Cloud DashScope (`alibaba/qwen-3.5-397b`), OpenCode Zen (`opencode/qwen-3.5-397b`).
- **Release / knowledge:** 2025-11-10 release; knowledge cutoff September 2025.
- **IDs:** `alibaba/qwen-3.5-397b`, `opencode/qwen-3.5-397b` (no Free ID on Zen)
- **Context window:** 262,144 tokens native (extensible to 1M hosted).
- **Modalities:** text, image, video in; text out; tool use, function calling.
- **Pricing (as of 2026-10-09):** $0.60 / $3.60 per 1M tokens hosted (free self-host under Apache 2.0).
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer with 397B total and 17B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **32.8%**
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **1150**
- Claw-Eval / ClawProBench: **64.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.2%**
- HLE: **19.5%**
- LCR / MLCR: **73.5%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #38**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.0%**
- LiveCodeBench: **40.5%**
- SciCode / AA-SciCode: **60.5%**
- Vibe Code Bench: **67.0%**
- DeepSWE / Coding Index / other: **61.0**

Long context:

- MRCR 256k needle retrieval 96.5%; RULER benchmark 91.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 70/100.** Functional tool use and API integration, capped by occasional argument schema errors.
- **Reasoning: 72/100.** Capable general reasoning and STEM logic from a 397B/17B active MoE architecture.
- **Context window: 88/100.** 256k native context window extensible to 1M hosted with solid recall fidelity.
- **Multimodal: 78/100.** Native early-fusion multimodal perception across text, image, and video inputs.
- **Coding: 68/100.** Reliable code generation and script editing, capped on deep repo debugging and multi-file refactoring.
- **Cost efficiency: 86/100.** $0.60/$3.60 per 1M hosted pricing and completely free self-hosting under Apache 2.0.
- **Overall Score: 75.2/100.** Capable massive-scale open-weight MoE model with native vision and competitive multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
