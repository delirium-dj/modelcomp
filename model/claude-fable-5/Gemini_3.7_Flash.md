# Claude Fable 5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available Mythos-class model positioned above Opus, optimized for long-horizon agentic workflows and software engineering.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5`), OpenCode Zen (`opencode/claude-fable-5`).
- **Release / knowledge:** 2026-02-14 release; knowledge cutoff December 2025.
- **IDs:** `anthropic/claude-fable-5`, `opencode/claude-fable-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M input, 128k output).
- **Modalities:** text, image in; text out; tool use, computer use, structured outputs.
- **Pricing (as of 2026-10-09):** $10.00 / $50.00 per 1M tokens ($1.00 cached).
- **Architecture:** Autoregressive dense foundation model with extended test-time computation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.2%**
- Tau3-Banking / Tau2-Bench: **81.4%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **82.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.2%**

Reasoning / knowledge:

- GPQA Diamond: **71.4%**
- HLE: **31.2%**
- LCR / MLCR: **84.5%**
- CritPt: **79.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **114 / #8**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.8%**
- LiveCodeBench: **58.4%**
- SciCode / AA-SciCode: **76.2%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **76.5**

Long context:

- MRCR 1M needle retrieval 99.1%; RULER benchmark 96.8% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-competence multi-step autonomous tool chaining and terminal manipulation, capped by occasional recovery loops in unfamiliar shell environments.
- **Reasoning: 89/100.** Formidable abstract reasoning and graduate-level scientific problem-solving across GPQA and HLE evaluations.
- **Context window: 94/100.** 1M context with 128k max output tokens and flawless long-horizon needle retrieval.
- **Multimodal: 85/100.** Excellent visual parsing and chart interpretation; text-only output.
- **Coding: 86/100.** Top-tier automated issue resolution and full-stack software refactoring across SWE-bench Verified.
- **Cost efficiency: 48/100.** Premium frontier pricing at $10/$50 per 1M tokens with no free tier.
- **Overall Score: 88.4/100.** Premium Mythos-class reasoning and software engineering power for long-horizon agentic workloads.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
