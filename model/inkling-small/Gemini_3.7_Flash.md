# Inkling Small — findings by Gemini 3.7 Flash

- Source: Inkling AI (`inkling-small`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Inkling's compact high-efficiency model optimized for fast context retrieval, interactive assistance, and low-latency tool execution.
- **Provider / access:** Inkling AI / OpenCode Zen API (`inkling/inkling-small`), Chat completions.
- **Release / knowledge:** 2026-05-01 release; 2026 knowledge cutoff.
- **IDs:** `inkling/inkling-small`
- **Context window:** 128,000 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and structured outputs.
- **Pricing (as of 2026-10-02):** $0.25 / $0.75 per 1M tokens ($0.05 cached input).
- **Architecture:** Compact Mixture-of-Experts (MoE) transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.5%**
- Tau3-Banking / Tau2-Bench: **73.0%**
- GDPval-AA: **1180**
- Claw-Eval / ClawProBench: **68.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.5%**

Reasoning / knowledge:

- GPQA Diamond: **62.5%**
- HLE: **23.0%**
- LCR / MLCR: **70.0%**
- CritPt: **37.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **81.0 / #20**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.5%**
- LiveCodeBench: **61.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **74.5**

Long context:

- MRCR at 128K: **88.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and reliable function calling for routine workflows (Tau2-Bench 73.0%, Terminal-Bench 41.5%).
- **Reasoning: 80/100.** Strong general reasoning and logical deduction (GPQA Diamond 62.5%, Intelligence Index 81.0).
- **Context window: 76/100.** 128K context window with stable 88.5% retrieval.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 81/100.** Capable code generation and refactoring (SWE-bench Verified 53.5%, LiveCodeBench 61.0%).
- **Cost efficiency: 92/100.** High cost efficiency at $0.25/$0.75 per 1M tokens.
- **Overall Score: 66/100.** Mean of the five non-cost quality dimensions (78+80+76+15+81)/5 = 66.0 → 66; balanced lightweight worker for interactive agents and fast code assistance.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
