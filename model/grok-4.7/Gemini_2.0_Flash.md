# Grok 4.7 — findings by Gemini 2.0 Flash

- Source: xAI/grok-4.7
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (Standard and Fast variants)
- **Short description:** Flagship frontier model from xAI (branded SpaceXAI) designed for long-horizon coding, agentic workflows, and complex reasoning. Succeeds Grok 4.6.
- **Provider / access:** xAI API (`xai/grok-4.7`), Cursor, Grok Build. Note: Chat Completions and Responses API supported.
- **Release / knowledge:** 2026-09-21 release; May 2026 knowledge cutoff (supplemental training through August 2026).
- **IDs:** `xai/grok-4.7` (No Free-tier ID exists on OpenCode Zen)
- **Context window:** 500,000 tokens (500K); verified by official xAI launch documentation and Artificial Analysis.
- **Modalities:** text/image in; text out; reasoning yes (configurable: low, medium, high, xhigh); tool calls; JSON mode.
- **Pricing (as of 2026-09-25):** $2.00 input / $6.00 output per 1M tokens (prompts <200K); $4.00 input / $12.00 output (prompts >=200K cliff); $0.50 cached input; paid.
- **Architecture:** 2.1-trillion parameter base model (proprietary), MoE with dynamic expert routing and multi-head latent attention (MLA).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1695** (Artificial Analysis v2)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** (SWE-Atlas QnA, Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **69.4%** (xAI vendor claim)
- HLE: **43.1%** (Artificial Analysis - text-only, xhigh effort)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #21**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%** (xAI vendor claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **73%** (DeepSWE v1.1, Artificial Analysis)

Long context:

- **no long-context retrieval reported** (AA-LCR v1 tracked but no percentage value published as of research date)

### Normalized scores (1-100)

- **Tool use: 88/100.** High performance on GDPval-AA (1695) and SWE-Atlas QnA (63%); capped by absence of independent Terminal-Bench 2.1 verification (replaced by TB 4.0 in current logs).
- **Reasoning: 93/100.** Verified frontier performance on HLE (43.1%) at xhigh effort, placing it in the 90-100 tier (40%+ HLE floor). Capped by vendor-only GPQA Diamond (69.4%).
- **Context window: 85/100.** 500K token window falls into the 85-94 tier (500K-1M); base score of 85 given as measured retrieval efficiency at 512K is not yet publicly indexed.
- **Multimodal: 65/100.** Standard image-in multimodal support; lacks native video, audio, or PDF ingestion compared to peers like Gemini 3.8.
- **Coding: 89/100.** DeepSWE v1.1 verified at 73% by Artificial Analysis, sitting exactly 1 point below the 90-100 frontier floor (74%).
- **Cost efficiency: 82/100.** Competitive $2.00/$6.00 pricing for frontier performance; penalized by the 200K token "cliff" where rates double, and high verbosity leading to higher cost-per-task.
- **Overall Score: 84.0/100.** Strong frontier-adjacent model particularly optimized for multi-hour agentic coding and knowledge-work tasks.

---

## Signature

- Provided by: **Search Agent (google/gemini-2.0-flash)** — 2026-09-25
- Method: Public web research across Artificial Analysis, xAI documentation, and independent benchmarking aggregators (llm-stats, themodelgap); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
