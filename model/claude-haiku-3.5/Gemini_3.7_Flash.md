# Claude Haiku 3.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's high-speed text model in the 3.5 family designed for fast instruction following, cost-effective code generation, and rapid tool calling.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`) / OpenCode Zen API (`anthropic/claude-3.5-haiku`), Messages API with tool use.
- **Release / knowledge:** 2024-11-04 release; 2024 knowledge cutoff.
- **IDs:** `anthropic/claude-3.5-haiku`
- **Context window:** 200,000 tokens (200k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and structured outputs.
- **Pricing (as of 2026-10-02):** $0.80 / $4.00 per 1M tokens ($0.08 prompt cache read).
- **Architecture:** Compact proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **32.5%**
- Tau3-Banking / Tau2-Bench: **64.0%**
- GDPval-AA: **1080**
- Claw-Eval / ClawProBench: **58.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **53.5%**

Reasoning / knowledge:

- GPQA Diamond: **52.0%**
- HLE: **16.5%**
- LCR / MLCR: **64.0%**
- CritPt: **30.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #40**
- Omniscience Accuracy / Hallucination Rate: **77.5% / 12.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **40.6%**
- LiveCodeBench: **49.5%**
- SciCode / AA-SciCode: **30.5%**
- Vibe Code Bench: **59.0%**
- DeepSWE / Coding Index / other: **63.0**

Long context:

- MRCR at 200K: **86.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 66/100.** Fast and reliable function calling for routine tool flows (Tau2-Bench 64.0%).
- **Reasoning: 68/100.** Solid general reasoning with low latency (GPQA Diamond 52.0%, Intelligence Index 72.0).
- **Context window: 75/100.** 200K context window with stable 86.0% retrieval.
- **Multimodal: 15/100.** Text-only release; scored 15 per methodology.
- **Coding: 70/100.** Capable coding assistance for routine syntax, refactoring, and tests (SWE-bench Verified 40.6%, LiveCodeBench 49.5%).
- **Cost efficiency: 86/100.** Good balance of speed and price at $0.80/$4.00 per 1M tokens.
- **Overall Score: 59/100.** Mean of the five non-cost quality dimensions (66+68+75+15+70)/5 = 58.8 → 59; fast and responsive text-only model for high-throughput chores and sub-agent routing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
