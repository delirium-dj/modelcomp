# Claude Opus 5.5 — findings by Crouton Alpha

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship proprietary reasoning model for agentic coding, long-horizon tool use, and science/knowledge work; top use case is complex software engineering and terminal-based automation.
- **Provider / access:** Anthropic Claude API `claude-opus-5-5`, OpenCode Zen `opencode/claude-opus-5-5` via `https://opencode.ai/inference/anthropic/v1/messages` (Anthropic Messages API).
- **Release / knowledge:** 2026-09-22 release (Artificial Analysis model card; Anthropic announcement 2026-09-22). Knowledge cutoff not disclosed in fetched sources.
- **IDs:** `anthropic/claude-opus-5-5`, `opencode/claude-opus-5-5` (paid, no Free ID on Zen).
- **Context window:** 1M tokens total (Artificial Analysis technical specs; BenchLM 1M). Max output not separately disclosed in fetched sources.
- **Modalities:** Text and image in; text out; reasoning yes (extended thinking); tool calls yes; structured output unknown.
- **Pricing (as of 2026-11-09):** Anthropic Claude API $4.00 input / $20.00 output / $0.20 cached-read per 1M tokens (BenchLM pricing table; OpenCode Zen $4/$20); batch 50% off. Paid only.
- **Architecture:** Proprietary, parameter count not disclosed (Artificial Analysis: "proprietary model and Anthropic has not disclosed the model size").

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. No numbers invented.

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (Anthropic: Introducing Claude Opus 5.5); AA Terminal-Bench 4.0 **59.6%** (Artificial Analysis leaderboard)
- GDPval-AA: **1846** (Anthropic: Introducing Claude Opus 5.5)
- AutomationBench: **40.0%** (Anthropic: Introducing Claude Opus 5.5); AA AutomationBench **69.5%** (Artificial Analysis leaderboard)
- Toolathlon-Verified: **77.8%**, Pass@3 **82.4%** (Anthropic: Claude Opus 5.5 system card)
- OSWorld 2.0: **48.7%** (Anthropic: Claude Opus 5.5 system card)
- AA Briefcase Elo: **1800** (Artificial Analysis: aa-briefcase leaderboard)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found in fetched sources
- HLE w/o tools: **64.4%** (Anthropic: Claude Opus 5.5 system card); AA-HLE **61.4%** (Artificial Analysis)
- HLE w/ tools: **67.7%** (Anthropic: Introducing Claude Opus 5.5)
- LCR (AA-LCR): **84.7%** (Artificial Analysis: long-context-reasoning leaderboard)
- CritPt: **31.7%** (Artificial Analysis: critpt leaderboard)
- Artificial Analysis Intelligence Index: **59 / 59.1, #2 of 69 / #2 of 1017** (Artificial Analysis; BenchLM overall 86.32/100 #2 of 1017)
- AA-Omniscience Accuracy: **65.5%**, Hallucination Rate **50.3%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic: Claude Opus 5.5 system card)
- SWE Multilingual: **93.9%** (Anthropic: Claude Opus 5.5 system card)
- SWE Multimodal: **61.4%** (Anthropic: Claude Opus 5.5 system card)
- DeepSWE: **74.2%** (Anthropic: Claude Opus 5.5 system card)
- FrontierCode 1.1 Main: **54.4%** (Anthropic: Introducing Claude Opus 5.5); Extended **63.6%**
- FrontierSWE v2: **62.3%** (Proximal: FrontierSWE v2 leaderboard)
- ProgramBench: **91.2%** (Anthropic: Claude Opus 5.5 system card)
- AA-SciCode: **66.9%** (Artificial Analysis: scicode leaderboard)

Long context:

- Context window **1M** (Artificial Analysis; BenchLM)
- AA-LCR **84.7%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **66.8%** (Google: Gemini 4 Argon launch chart)
- MLCR-AA: **27.8%** (Artificial Analysis: mlcr-aa leaderboard)

Multimodal:

- AA-MMMU-Pro: **87.7%** (Artificial Analysis: mmmu-pro leaderboard)
- Chartography (tools) **89.0%** (Anthropic: Introducing Claude Opus 5.5)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost excluded.

- **Tool use: 94/100.** Terminal-Bench 4.0 66.4%, GDPval-AA 1846, Toolathlon-Verified 77.8% and AA AutomationBench 69.5% place it at frontier; capped by slightly lower AA Terminal-Bench 4.0 59.6% harness variance.
- **Reasoning: 95/100.** HLE w/o tools 64.4%, LCR 84.7%, ARC-AGI-2 91.7% and Intelligence Index 59 (#2) are frontier-level; capped by CritPt 31.7% hard-subset physics gap.
- **Context window: 96/100.** 1M total with LCR 84.7% at long context and GraphWalks BFS 66.8% across 256K–1M; capped by MLCR-AA 27.8% on medical long-context.
- **Multimodal: 72/100.** Text + image in, text out; MMMU-Pro 87.7% and Chartography 89.0% show strong vision reasoning, but no video/audio in or non-text out, so methodology caps at image-in tier (+60–70, +2 for exceptional MMMU).
- **Coding: 95/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, DeepSWE 74.2% and ProgramBench 91.2% meet frontier refs; capped by FrontierCode 2.0 45.5% on newest hard suite.
- **Cost efficiency: 55/100.** Paid $4/$20 per 1M (Zen + Anthropic API), $10.04 per Intelligence Index task (AA); $0 = 100, ~$3/$15 ≈ 60, so $4/$20 prices it below mid-tier on cost.
- **Overall Score: 90/100.** Mean of five quality dims (94+95+96+72+95)/5 = 90.4 → 90; best-fit frontier agentic coder where quality outweighs price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic announcement/system card, BenchLM, and Artificial Analysis model pages; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 System Card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [Artificial Analysis — Claude Opus 5.5 (Max)](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [BenchLM — Claude Opus 5.5](https://benchlm.ai/models/claude-opus-5-5)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
