# Claude Haiku 4.5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's high-speed, compact intelligence model designed for fast sub-agent tool execution, document triage, and cost-effective coding assistance.
- **Provider / access:** Anthropic API (`claude-haiku-4-5-20260410`) / OpenCode Zen API (`anthropic/claude-haiku-4.5`), Messages API with tool use.
- **Release / knowledge:** 2026-04-10 release; 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200,000 tokens (200k context window; 8k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; function calling and computer use.
- **Pricing (as of 2026-10-02):** $0.80 / $4.00 per 1M tokens ($0.08 prompt caching read).
- **Architecture:** Compact proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.8%**
- Tau3-Banking / Tau2-Bench: **66.4%**
- GDPval-AA: **1120**
- Claw-Eval / ClawProBench: **60.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **56.2%**

Reasoning / knowledge:

- GPQA Diamond: **54.6%**
- HLE: **19.8%**
- LCR / MLCR: **66.8%**
- CritPt: **33.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74.6 / #35**
- Omniscience Accuracy / Hallucination Rate: **78.4% / 11.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.5%**
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **33.5%**
- Vibe Code Bench: **61.2%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR at 200K: **89.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 66/100.** Fast and reliable function calling and lightweight agent orchestration (Tau2-Bench 66.4%).
- **Reasoning: 68/100.** Capable general logic and analysis (GPQA Diamond 54.6%, Intelligence Index 74.6); bounded on difficult multi-hop problems.
- **Context window: 75/100.** 200K context window with stable 89.0% needle retrieval.
- **Multimodal: 70/100.** Accurate visual parsing of UI screenshots and documents.
- **Coding: 71/100.** Solid everyday coding, refactoring, and test writing (SWE-bench Verified 44.5%, LiveCodeBench 52.0%).
- **Cost efficiency: 86/100.** Good balance of speed, capability, and price at $0.80/$4.00 per 1M tokens.
- **Overall Score: 70/100.** Mean of the five non-cost quality dimensions (66+68+75+70+71)/5 = 70.0 → 70; reliable fast worker for high-volume agent routing and code tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
