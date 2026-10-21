# Big Pickle (GLM 4.6) — findings by Gemini 3.8 Flash

- Source: OpenCode Zen (`opencode/big-pickle`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Stealth reasoning model hosted on OpenCode Zen (verified community and routing consensus maps to Zhipu AI's GLM-4.6), offering high-throughput coding capability at zero token cost during its promotional trial.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), Pi coding agent, and models.dev provider integration.
- **Release / knowledge:** Mid-2026 active stealth trial; training knowledge cutoff early 2026.
- **IDs:** `opencode/big-pickle` (Free Zen tier).
- **Context window:** 200,000 tokens total (160K input / 32K output confirmed on models.dev).
- **Modalities:** Text and code input; text and code output; tool calling and structured JSON output.
- **Pricing (as of 2026-10-21):** Free ($0) on OpenCode Zen promotional tier; commercial counterpart (GLM-4.6) equivalent to ~$0.60 / 1M input, $2.20 / 1M output.
- **Architecture:** 357B parameter Mixture of Experts (MoE) transformer with reasoning-tuned inference routing served via OpenAI-compatible endpoint.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** (63/124 tasks resolved; Mini-SWE-Agent 2.4.6 harness with Scale AI Harbor verifier)
- Terminal-Bench 2.1: **24.0% - 28.0%** (standard Terminus-2 harness; up to **49.4%** with reasoning-augmented agent scaffolding)
- Tau3-Banking / Tau2-Bench: **10.5%** (Tau3-Banking) / **70.5% - 76.9%** (Tau2 multi-turn customer workflows)
- GDPval-AA: **934** (knowledge work and structured document synthesis)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (GLM-4.6 foundation proxy)
- Humanity's Last Exam (HLE): **5.5%**
- LCR / MLCR: **28.3%**
- BenchLM overall: **53.94 / #107 rank**
- Omniscience Accuracy / Hallucination Rate: **78.4% / 7.2%**

Coding:

- SWE Atlas Codebase QnA: **50.8%** (direct evaluation on codebase QA and repository patch resolution)
- SWE-bench Verified: **68.0%** (GLM-4.6 consensus baseline)
- LiveCodeBench v6: **81.0% - 83.0%** (contamination-free competitive programming)
- SciCode / AA-SciCode: **38.4%** (computational scientific code generation)
- Vibe Code Bench: **3.1%**

Long context:

- MRCR / RULER (200K window): **94.8%** retrieval consistency across 200,000 tokens with 32K output completion capacity.

### Normalized scores (1–100)

- **Tool use: 50/100.** Verified 50.8% SWE Atlas Codebase QnA and functional agentic loop operation in mini-swe-agent; capped by low baseline scores on Terminal-Bench (24-28%) and Tau3-Banking (10.5%).
- **Reasoning: 58/100.** Solid practical logic with 63.2% GPQA Diamond and 53.94 BenchLM rating; capped by 5.5% on Humanity's Last Exam and 28.3% LCR.
- **Context window: 70/100.** Dependable 200,000-token context window with 32K output capacity; calibrated to the 200K rubric tier.
- **Multimodal: 15/100.** Text and code only; standard baseline for models lacking vision, image, or audio input capabilities.
- **Coding: 68/100.** Direct 50.8% SWE Atlas coupled with 81.0% LiveCodeBench and ~68% SWE-bench Verified; capped by low Vibe Code Bench and moderate SciCode performance.
- **Cost efficiency: 100/100.** Fully free ($0.00) tier on OpenCode Zen during promotional deployment.
- **Overall Score: 52/100.** Quality arithmetic mean of the 5 core quality dimensions ((50 + 58 + 70 + 15 + 68) / 5 = 52.2 rounded to 52).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing OpenCode Zen platform documentation, models.dev registry definitions, direct SWE Atlas evaluation records, and GLM-4.6 verified consensus benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
