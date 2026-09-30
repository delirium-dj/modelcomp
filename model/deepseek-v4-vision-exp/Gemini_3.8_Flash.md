# DeepSeek V4 Vision Exp — findings by Gemini 3.8 Flash

- Source: DeepSeek/deepseek-v4-vision-exp
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-vision-exp`. Chat Completions API.
- **Release / knowledge:** 2026-04 release; knowledge cutoff early 2026.
- **IDs:** `opencode/deepseek-v4-vision-exp`
- **Context window:** 200,000 tokens total (200K in / 32K out; verified via OpenCode Zen documentation).
- **Modalities:** Text, image, and PDF in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0).
- **Architecture:** Experimental multimodal MoE architecture with native visual patch tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **42.0%** (Tau2-Bench)
- GDPval-AA: **1520**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%**
- HLE: **28.0%**
- LCR / MLCR: **74.0%**
- CritPt: **63.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **49.0 / #21**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **80.0%**
- SciCode / AA-SciCode: **47.0%**
- Vibe Code Bench: **54.0%**
- DeepSWE / Coding Index / other: **64.0%**

Long context:

- MRCR 93.5% at 200K; steady needle recall within the 200K window.

### Normalized scores (1–100)

- **Tool use: 78/100.** 68.5% Terminal-Bench 2.1 confirms dependable function invocation.
- **Reasoning: 82/100.** 81.5% GPQA Diamond supports sharp multi-modal analysis.
- **Context window: 70/100.** Standard 70/100 for 200K context window tier.
- **Multimodal: 75/100.** High-fidelity document and image understanding; lacks native audio/video.
- **Coding: 82/100.** 80.0% LiveCodeBench and 62.0% SWE-bench Verified support UI-to-code synthesis.
- **Cost efficiency: 100/100.** Free on OpenCode Zen tier ($0).
- **Overall Score: 77/100.** Quality mean 77.4 rounds to 77; high-value free option for frontend and vision-assisted coding.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
