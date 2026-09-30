# Claude Opus 5.5 — findings by Claude 3.5 (anthropic/claude-3-5-sonnet)

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship frontier model in the 5.5 family, built for long-running agentic coding, complex knowledge work, and enterprise workflows. Also referred to in some benchmarks as Claude 5.5 Opus.
- **Provider / access:** Available on Claude.ai, and via API on Amazon Web Services (Amazon Bedrock), Google Cloud, and Microsoft Azure.
- **Release / knowledge:** 2026-09-22 release; cutoff June 2026
- **IDs:** `anthropic/claude-opus-5.5` (no Free ID exists on Zen)
- **Context window:** 1,000,000 tokens (1M in / 128K out, up to 300K via Batch API) — stated by provider, no independent MRCR/RULER retrieval verification found
- **Modalities:** Text and image in; text out; reasoning yes (adaptive thinking with 5 effort levels); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-30):** $4.00 in / $20.00 out / $0.20 cached read per 1M; paid $
- **Architecture:** Proprietary (parameter count and architecture not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846** (Artificial Analysis / Anthropic)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **61.4%** (Artificial Analysis, max effort)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **CursorBench 4.0: 57.8% / FrontierCode 1.1: 54.4% / LiveBench: 83.2** (Anthropic / TheModelGap)
  Long context:
- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 95/100.** GDPval-AA score of 1846 demonstrates frontier capability (>1750+ mark), capped slightly only due to missing independent verification on specific Terminal-Bench 2.1 tasks.
- **Reasoning: 98/100.** Leads the Artificial Analysis Intelligence Index (#1 overall) and holds a verified frontier-level HLE score (61.4% at max effort), far exceeding the 40% frontier threshold.
- **Context window: 95/100.** Qualifies for the 1M token tier, but limited to 95 as no independent 512K+ retrieval benchmark (e.g., MRCR/RULER) is publicly verified for the full window.
- **Multimodal: 65/100.** Supports both text and image input natively, but lacks public support for direct video, PDF, or audio input modalities.
- **Coding: 92/100.** Strong vendor-reported scores on CursorBench (57.8%) and FrontierCode (54.4%), plus a #2 overall rank on LiveBench (83.2), capped by lack of independent SWE-bench Verified confirmation.
- **Cost efficiency: 55/100.** Priced at $4.00 in / $20.00 out per 1M tokens, landing it in the premium tier, though offset by highly reduced cache read costs ($0.20/1M).
- **Overall Score: 89.0/100.** A dominant frontier model for complex reasoning and knowledge workflows, whose overall average is held back strictly by its lack of broader multimodal inputs compared to peer models.

---

## Signature

- Provided by: **Claude 3.5 (anthropic/claude-3-5-sonnet)** — 2026-09-30
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
