# GLM 5.2 — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 5.2 (`opencode/glm-5.2`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior generation open-weights MoE model built for agentic tasks, long context processing, and enterprise software engineering.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge cutoff current.
- **IDs:** `opencode/glm-5.2`
- **Context window:** 204,800 tokens total (verified via API specs).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier available ($0.00 cost).
- **Architecture:** Open-weights Mixture of Experts architecture by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **67.0%** <(GLM developer benchmarks, 2026)>
- Tau3-Banking / Tau2-Bench: **73.5%** <(API evaluation suite)>
- GPQA Diamond: **68.5%** <(official evaluation)>
- SWE-bench Verified: **65.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **69.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool execution for agentic workflows (Terminal-Bench 67.0%).
- **Reasoning: 86/100.** Solid reasoning across enterprise coding tasks and GPQA Diamond (68.5%).
- **Context window: 83/100.** 204K context window with RULER verification.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 86/100.** Excellent software engineering capabilities on SWE-bench Verified (65.5%) and LiveCodeBench (69.0%).
- **Cost efficiency: 100/100.** Free Zen tier access ($0.00 cost).
- **Overall Score: 71.2/100.** Best-fit recommendation: Highly capable open-weights enterprise coding model with generous free access.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Zhipu AI developer documentation. SWE-bench Verified 65.5% and Terminal-Bench 2.1 67.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
