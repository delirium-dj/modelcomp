# GPT-5 Codex — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5 Codex, `openai/gpt-5-codex`
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI version of GPT-5 optimized for agentic coding in Codex or similar environments. Proprietary coding-specialized variant with reasoning and tool use. Independent evaluators note release September 2025; OpenAI docs list status Shut down.
- **Provider / access:** OpenAI API `gpt-5-codex` via Responses API only; OpenCode Zen `opencode/gpt-5-codex`. Chat Completions not supported.
- **Release / knowledge:** Released September 2025 per Artificial Analysis and Vals AI (Artificial Analysis cites Sep 23 2025; Vals AI cites Sep 23 2025). OpenAI docs show Status: Shut down with no release date published. Knowledge cutoff Sep 30 2024 — verified by OpenAI docs and Artificial Analysis.
- **IDs:** `openai/gpt-5-codex`; `opencode/gpt-5-codex`. No Free ID exists on Zen.
- **Context window:** 400,000 tokens total; maximum input tokens 272,000; 128,000 max output tokens. Verified by OpenAI docs and Vals AI.
- **Modalities:** Input text, image; Output text. Reasoning yes, tool calls yes (function calling, web search), structured outputs, prompt caching supported.
- **Pricing (as of 2026-10-25):** $1.25 / 1M input, $0.125 / 1M cached input, $10.00 / 1M output. Paid.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: OpenAI model docs `developers.openai.com/api/docs/models/gpt-5-codex`; Artificial Analysis model page `artificialanalysis.ai/models/gpt-5-codex`; Vals AI model page `vals.ai/models/openai_gpt-5-codex` with Sep 24 2025 coding evaluation update.

Agent / tool use:

- Terminal-Bench: **58.8%** (Vals AI Sep 24 2025, agentic coding terminal benchmark, 1st place, ~10% improvement over previous #1 GPT-5)
- SWE-bench Verified: **rank 1** (Vals AI Sep 24 2025, first place narrowly over GPT-5; no exact percentage published)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **25 estimated** / #121 / 215 (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- IOI v1: **9.8%** accuracy (Vals AI Sep 24 2025 update; full credit on one question)

Coding:

- SWE-bench Verified / SWE-Pro: rank 1 (Vals AI), no exact percentage published
- LiveCodeBench: **84.72%** ±1.03 rank 37/143 (Vals AI)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Terminal-Bench 58.8% as above

Long context:

- No MRCR / RULER / GraphWalks value published; 400k window reported, no long-context retrieval benchmark found

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 58.8% first place and function calling/web search support indicate strong agentic coding tool use. Capped by absence of Tau3/GDPval/Claw/Toolathon public scores.
- **Reasoning: 50/100.** Artificial Analysis Intelligence Index 25 estimated below median, IOI v1 9.8% reported, no GPQA/HLE published. Capped by low composite reasoning evidence.
- **Context window: 78/100.** 400k total with 128k output verified; competitive coding context. No public RULER/MRCR retrieval measurement caps score.
- **Multimodal: 50/100.** Text+image input, text output; no published multimodal reasoning benchmarks.
- **Coding: 80/100.** LiveCodeBench 84.72% rank 37/143, Terminal-Bench 58.8% first place, SWE-bench Verified rank 1. Capped by lack of SciCode/SWE-Pro exact percentages.
- **Cost efficiency: 65/100.** $1.25/$10 with 90% cache discount; input competitively priced, output premium. Above average cost per task.
- **Overall Score: 66/100.** Mean of five quality dims (70+50+78+50+80)/5 = 65.6 → 66. Best-fit: strong agentic coding model with moderate reasoning and limited multimodal evidence.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
