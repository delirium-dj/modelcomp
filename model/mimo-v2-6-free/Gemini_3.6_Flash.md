# Mimo V2 6 Free — findings by Gemini 3.6 Flash

- Source: OpenCode/Mimo V2 6 Free (`opencode/mimo-v2-6-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mimo V2 6 Free
- **Short description:** Mimo V2 6 Free is Xiaomi's open-weights multimodal Mixture-of-Experts (MoE) AI model evaluation entry offered on OpenCode Zen, optimized for high-efficiency agentic workflows and coding tasks.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-6-free`). Chat Completions / Responses API.
- **Release / knowledge:** 2026-09-21 release; 2026-08 knowledge cutoff
- **IDs:** `opencode/mimo-v2-6-free`
- **Context window:** 128,000 tokens (128K total; 128K input / 8192 max output — verified via OpenCode Zen model specification)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** Free ($0.00 / 1M input, $0.00 / 1M output on OpenCode Zen free tier; rate-limited evaluation tier with data-usage caveats)
- **Architecture:** Mixture-of-Experts (MoE), open-weights (MIT license)

### Raw benchmarks found

Agent / tool use:

- Toolathlon-verified (**group**): **73.6%** (Xiaomi technical report, MiMo-V2.6-Flash evaluation)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.6%** (Toolathlon-verified, Xiaomi technical report)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #12**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.9%** (DeepSWE v1.1 agentic benchmark)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.9%** (DeepSWE v1.1)

Long context:

- 128K window supported; no long-context retrieval (MRCR / RULER) score reported at full 128K length.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong tool calling capability driven by 73.6% Toolathlon-verified score; capped by missing Terminal-Bench validation.
- **Reasoning: 72/100.** Competitive open-weights reasoning backed by Artificial Analysis Intelligence Index score of 46; capped by lack of GPQA Diamond data.
- **Context window: 75/100.** 128K token context window per standard tier mapping; capped by 128K limit.
- **Multimodal: 65/100.** Native text and image input processing with text output; capped by lack of audio, video, or image generation.
- **Coding: 70/100.** Solid agentic coding performance with 67.9% on DeepSWE v1.1; capped by missing LiveCodeBench score.
- **Cost efficiency: 100/100.** $0 cost on the OpenCode Zen free tier.
- **Overall Score: 71.2/100.** Mean of the five quality dimensions; strong free-tier open-weights entry for agentic tool use and code generation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-22
- Method: Public web research of official technical reports and benchmark indexing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
