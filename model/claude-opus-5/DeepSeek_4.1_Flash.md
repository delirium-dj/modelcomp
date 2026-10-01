# Claude Opus 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (API id `claude-opus-5`; no "Free" tier exists)
- **Short description:** Anthropic's flagship Opus 5-generation model, released 2026-07-24 as the successor to Opus 4.8, built for the deepest reasoning and the longest autonomous coding/research runs. It briefly leaked inside Cursor's model picker as codename "Honeycomb EAP" on 2026-07-09 before the full rollout.
- **Provider / access:** Anthropic — Claude API, AWS Bedrock, Google Vertex AI. Closed, API-only, no open weights.
- **Release / knowledge:** Released 2026-07-24. Knowledge cutoff not disclosed.
- **IDs:** `claude-opus-5`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens (default and ceiling); max output 128,000 (300,000 via a Batch-API beta header).
- **Modalities:** text, image and PDF in; text out; tool calling both directions; extended thinking on by default with effort tiers low/medium/high/max plus a new **xhigh** tier.
- **Pricing (as of 2026-10-01):** $5.00 / 1M in, $25.00 / 1M out, $0.50 cached input. Fast Mode $10/$50; Batch API $2.50/$12.50; prompt caching activates from 512 tokens.
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1861 Elo** (rank 1 of 340); AA-Briefcase: **1720 Elo** (rank 1 of 56)
- Terminal-Bench 3.0: **42.7%** (rank 1 of 17); Terminal-Bench-Science 0.1: **30.0%** (rank 1 of 9); Terminal-Bench 4.0: 52.3%
- Toolathlon: **80.6% Pass@1 / 87.0% Pass@3** (rank 1 of 37); APEX-Agents: 41.8%
- OSWorld-Verified (computer use): **83.4%**; Tau3-Banking: **44.7%**
- MCP Atlas: **85.8%**; AutomationBench: **50.3%**
- Agents' Last Exam: **55.5%**; ARC-AGI-3 (high effort): **30.2%**
- Legora BAR (agentic legal work): Quality Rubric Index 1.18× the model average — highest in the set (Benchgen card, 2026-08-03)

Reasoning / knowledge:

- GPQA Diamond: **94.1%**
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.4%**; ARC-AGI-3 (high effort): **30.2%**
- Artificial Analysis Intelligence Index: **61** (max effort); BenchmarkList ECI: **164.32 / 100** (rank 1 of 354)
- HLE: no verified public score found (a third-party 56.3% text-only attribution is unconfirmed)
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **97.0%** (rank 1 of 72); SWE-bench Pro: **79.2%**; SWE-bench Multilingual: **89.5%**; SWE-bench Multimodal: **59.4%**
- LiveCodeBench: **89.0%**; Vibe Code Bench v1.1: **88.4%**; SciCode: **55.7%**; DeepSWE 1.1: **74.0%**
- WebDev Arena: **1663 Elo**; AA Coding Agent Index: **68.1**
- Output speed: **54 tok/s** median (Artificial Analysis) — slowest-in-class for interactive chat

Long context:

- no model-specific MRCR/RULER/GraphWalks value was reproduced in the sources checked; the 1M window is the default tier but its recall-at-depth is vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 95/100.** Rank-1 agentic results — GDPval-AA 1861 Elo, Terminal-Bench 3.0 42.7%, Toolathlon 80.6%/87.0%, OSWorld-Verified 83.4% and 55.5% Agents' Last Exam — plus the xhigh effort tier; capped by the absence of a usable Terminal-Bench 2.1 numeric (the board shows a 0.9% harness artifact).
- **Reasoning: 96/100.** GPQA Diamond 94.1%, ARC-AGI-2 90.4%, ARC-AGI-1 97.5% and an AA Intelligence Index of 61 place it at the top of the tracked field (BenchmarkList ECI 164.32, #1/354); the missing HLE/CritPt numbers are the only gap.
- **Context window: 95/100.** 1M tokens as both default and ceiling with 128K (300K beta) output; no published recall-at-depth measurement keeps it off a perfect score.
- **Multimodal: 80/100.** Text, image and PDF input with strong chart/document and UI-replication work; text-only output, no audio or video input.
- **Coding: 97/100.** 97.0% SWE-bench Verified (rank 1 of 72), 79.2% SWE-bench Pro, 89.5% SWE-bench Multilingual and 74.0% DeepSWE v1.1 — the best combination of agentic coding numbers found in this scan.
- **Cost efficiency: 45/100.** Unchanged premium pricing ($5/$25, Fast Mode $10/$50) and no free tier; caching from 512 tokens and half-price batch work are the only mitigations.
- **Overall Score: 93/100.** Mean of the five quality dims (95+96+95+80+97)/5 = 92.6 → 93. Best fit: teams running long autonomous coding or research agents where million-token recall and top coding scores justify the highest per-token spend tracked here.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Anthropic model page and Artificial Analysis figures via HokAI, Benchgen card); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
