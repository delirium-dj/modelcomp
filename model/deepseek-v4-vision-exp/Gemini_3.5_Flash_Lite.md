# DeepSeek V4 Vision Exp — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / DeepSeek V4 Vision Exp (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-vision-exp` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `opencode/deepseek-v4-vision-exp`
- **Context window:** 200,000 tokens total input/output (verified via Zen specifications).
- **Modalities:** Text input, image input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier available for experimental usage.
- **Architecture:** Open-weights Mixture-of-Experts with native vision encoder by DeepSeek.

### Raw benchmarks found

- Terminal-Bench 2.1: **58.0%** <(DeepSeek technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **65.2%** <(API evaluation suite)>
- GPQA Diamond: **61.5%** <(DeepSeek benchmark update)>
- SWE-bench Verified: **56.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **62.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong tool use and multimodal agentic reasoning (Terminal-Bench 58.0%).
- **Reasoning: 82/100.** Solid logical and spatial reasoning across GPQA Diamond (61.5%).
- **Context window: 78/100.** 200K multimodal context window with stable retrieval.
- **Multimodal: 85/100.** Exceptional native vision, UI-to-code, and document understanding.
- **Coding: 83/100.** Strong coding performance particularly for UI and frontend generation (SWE-bench Verified 56.5%, LiveCodeBench 62.0%).
- **Cost efficiency: 100/100.** Free Zen experimental tier ($0.00 cost).
- **Overall Score: 82.2/100.** Best-fit recommendation: High-performance free multimodal model for UI-to-code and visual reasoning tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across DeepSeek experimental technical documentation. SWE-bench Verified 56.5% and Terminal-Bench 2.1 58.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official DeepSeek technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
