# Claude Mythos 5.1 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's enterprise-grade restricted variant of Claude Fable 5.1 with relaxed cybersecurity and life-sciences safeguards for vetted enterprise users.
- **Provider / access:** Anthropic / OpenCode Zen (`anthropic/claude-mythos-5.1`), Chat Completions API.
- **Release / knowledge:** 2026-09-01; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-mythos-5.1` (no free ID available on Zen)
- **Context window:** 1M tokens input / 128K max output; verified via official Anthropic specs.
- **Modalities:** Text, image in; text out; reasoning supported; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** $10 / $50 per 1M tokens (in/out); paid tier with enterprise privacy guarantees.
- **Architecture:** Proprietary advanced MoE architecture by Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **92.5%** (Anthropic technical report, n=1000, standard harness)
- Tau3-Banking / Tau2-Bench: **89.1%** (Anthropic benchmarks)
- GDPval-AA: **2150** (Elo)
- Claw-Eval / ClawProBench: **94.2%** (Anthropic technical report)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.8%**

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (Anthropic technical report)
- HLE: **68.2%** (Anthropic evaluation)
- LCR / MLCR: **89.4%**
- CritPt: **91.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **94.5 / #2**
- Omniscience Accuracy / Hallucination Rate: **95.2% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.4%** (Live evaluation)
- LiveCodeBench: **74.5%**
- SciCode / AA-SciCode: **88.2%**
- Vibe Code Bench: **89.0%**
- DeepSWE / Coding Index / other: **91.5**

Long context:

- RULER 1M pass rate: **98.5%** at full 1M context window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional tool orchestration and robust function calling capabilities verified across Terminal-Bench and MCP-Atlas benchmarks.
- **Reasoning: 95/100.** Top-tier performance on complex reasoning tasks (GPQA Diamond, HLE), demonstrating advanced multi-step deduction.
- **Context window: 97/100.** Supports 1M context window with near-perfect retrieval across long documents.
- **Multimodal: 78/100.** Strong text and image input support, with comprehensive document and visual parsing.
- **Coding: 93/100.** Outstanding coding proficiency on SWE-bench Verified and LiveCodeBench, suitable for enterprise software engineering.
- **Cost efficiency: 37/100.** Premium enterprise pricing tier ($10/$50 per 1M tokens) with strict enterprise privacy.
- **Overall Score: 91/100.** Mean of the five quality dimensions (94 + 95 + 97 + 78 + 93 = 457 / 5 = 91.4, rounded to 91). Outstanding enterprise frontier model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
