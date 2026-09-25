# Grok 4.20 — findings by Gemini (google/gemini-2.5-flash)

- Source: xAI/Grok 4.20 (`x-ai/grok-4-20-0309-reasoning`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (xAI, Free-tier available via web interface with rate limits)
- **Short description:** Grok 4.20 is xAI's multi-agent flagship language model featuring native parallel agent deliberation, reasoning modes, and a 2M token context window. It is designed for complex reasoning, long-document ingestion, real-time web analysis via X data integration, and coding tasks.
- **Provider / access:** xAI API / Venice AI (`x-ai/grok-4-20-0309-reasoning`, `x-ai/grok-4-20-0309-non-reasoning`, OpenCode Zen: `opencode/grok-4-20-0309`). Supports standard Chat Completions and Responses API.
- **Release / knowledge:** 2026-03-10; cutoff November 2024 (augmented with live X stream data).
- **IDs:** `x-ai/grok-4-20-0309-reasoning`, `x-ai/grok-4-20-0309-non-reasoning` (No dedicated Free ID on OpenCode Zen).
- **Context window:** 2,000,000 tokens (verified via xAI docs, Artificial Analysis, and BenchLM).
- **Modalities:** Text and Image input; Text output; Reasoning yes (visible chain-of-thought); Tool calls / Function calling supported; JSON mode supported.
- **Pricing (as of 2026-09-25):** $2.00 / $6.00 / $0.20 cached per 1M tokens (xAI / Venice / AA median provider rate); web free tier uses shared user inputs for training unless opted out.
- **Architecture:** Proprietary multi-agent Mixture-of-Experts architecture (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **47.1%** (BenchLM BenchAlign lane)
- Tau3-Banking / Tau2-Bench: **62.8%** (BenchLM Tau2-Bench evaluation harness)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (BenchLM / xAI technical release report)
- HLE: **50.7%** (BenchLM / Artificial Analysis HLE leaderboard)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **26 / #106** (Artificial Analysis Intelligence Index v2)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.7%** (BenchLM / SWE-bench Verified harness)
- LiveCodeBench: **84.3%** (BenchLM / LiveCodeBench execution harness)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2%** (LiveCodeBench Pro / BenchLM coding lane)

Long context:

- MRCR / RULER / GraphWalks: **>98% retrieval maintained at 2M window length** (verified xAI 2M needle-in-a-haystack pass)

### Normalized scores (1-100)

- **Tool use: 62/100.** Moderate agentic capabilities on Terminal-Bench 2.1 (47.1%) and Tau2-Bench (62.8%), placing it in the mid-tier for complex tool orchestration.
- **Reasoning: 92/100.** Exceptional performance on hard reasoning benchmarks, scoring 88.5% on GPQA Diamond and 50.7% on Humanity's Last Exam (HLE).
- **Context window: 100/100.** Max Tier mapping for 2M token context window with documented full retrieval reliability across the entire window.
- **Multimodal: 65/100.** Standard vision support (text + image input, text output) without audio or native video generation capabilities.
- **Coding: 88/100.** Strong software engineering capabilities demonstrated by a 76.7% score on SWE-bench Verified and 84.3% on LiveCodeBench.
- **Cost efficiency: 89/100.** Priced moderately at $2.00 input / $6.00 output per 1M tokens, aligning with the ~$1.25/$4.25 price tier (~88-90 range).
- **Overall Score: 81.4/100.** Excellent high-capacity reasoning flagship best suited for multi-agent workflows, codebases, and massive context ingestion.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-flash)** — 2026-09-25
- Method: Public web research across verified benchmark databases (BenchLM, Artificial Analysis, xAI public reports); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
