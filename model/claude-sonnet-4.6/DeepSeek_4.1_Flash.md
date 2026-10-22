# Claude Sonnet 4.6 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: Anthropic docs — release **2026-02-17**, knowledge cutoff Aug 2025 (reliable) / Jan 2026 (training), 1M context / 128K output (300K Batch beta), $3 in / $0.30 cached / $15 out; system-card/independent rows **GPQA Diamond 89.9%**, **HLE 49% with tools**, **ARC-AGI-2 58.3%** (60.4% high effort), **ARC-AGI-1 86.0%**, **SWE-bench Verified 79.6%** (Anthropic 76.2% 10-trial / 80.2% prompt-mod), SWE-Rebench 60.7%, LiveCodeBench 82.09%, Terminal-Bench 2.0 59.1–59.55%, **Terminal-Bench 2.1 57.3%**, **OSWorld-Verified 72.1%**, τ²-bench 79.5%, Claw-Eval 67.8%, **AA-LCR 68.3%**, CharXiv 77.4%, MMMU-Pro 83.58% (Vals) / 70.6% (AA); BenchLM overall 55.41; Vals accuracy 56.68%.
> **Conflicts surfaced:** (1) **Context window** — 1M (official docs) vs **200K** (BenchLM). (2) **SWE-bench Verified** — 79.6% (system card) vs 77.40% (Vals) vs 76.2%/80.2% (Anthropic trials). (3) **GPQA Diamond** — 89.9% (system card) vs 85.61% (Vals) vs 79.9% (AA variant). (4) **HLE** 49% with tools vs 13.3% no tools (AA). (5) **Reasoning flag** — Anthropic "yes" (adaptive thinking) vs AA's *non-reasoning* variant page.
> **Adjusted dimension:** Reasoning 78→84 — the prior file had no GPQA/HLE figure and stayed deliberately sub-Opus; the newly published GPQA ~86–90% and HLE 49% (tools) support a large correction. Overall 85 → **87**.
> Sources: https://platform.claude.com/docs/en/models/sonnet-4-6/overview · https://www.anthropic.com/news/claude-sonnet-4-6 · https://benchlm.ai/models/claude-sonnet-4-6 · https://www.vals.ai/models/anthropic_claude-sonnet-4-6

## Model card

- **Name:** Claude Sonnet 4.6 (API id `claude-sonnet-4-6`; no "Free" tier exists)
- **Short description:** Anthropic's cost-efficient frontier Sonnet, released 2026-02-17, positioned as near-Opus intelligence at about a third of Opus pricing. In early testing developers preferred it to Sonnet 4.5 ~70% of the time and to Opus 4.5 ~59% of the time, citing less over-engineering and better instruction following.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Closed, API-only.
- **Release / knowledge:** Released 2026-02-17. Knowledge cutoff Aug 2025 (reliable) / Jan 2026 (training data).
- **IDs:** `claude-sonnet-4-6` (Bedrock `anthropic.claude-sonnet-4-6`). No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (300,000 via Batch-API beta header).
- **Modalities:** text + image (+files) in, text out; reasoning yes (adaptive thinking default high; extended thinking deprecated on this model); tool calls and structured output yes.
- **Pricing (as of 2026-10-11):** $3.00 / 1M in, $15.00 / 1M out, $0.30 cached input (90%); 5m cache write $3.75, 1h $6.00; Batch −50%. Blended $2.31/M.
- **Architecture:** proprietary, closed, API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **72.1%**; OSWorld 2.0 8.3%
- Terminal-Bench 2.0: **59.1% (system card) / 59.55% (Vals)**; Terminal-Bench 2.1: **57.3%** (Vals)
- τ²-bench 79.5%; Claw-Eval 67.8%; CyberGym 65.2%; JobBench 36.9%; ApprenticeBench 2%
- Vals domain: Finance Agent v2 51.03%; LegalBench 82.12%; SAGE 46.58%; TaxEval v2 77.11%
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (system card) / 85.61% (Vals) / 79.9% (AA variant); HLE: **49% with tools** / 13.3% no tools (AA)
- ARC-AGI-1 **86.0%**; ARC-AGI-2 **58.3%** (max) / 60.4% (high effort); MMLU-Pro 87.34% (Vals)
- AA-LCR 68.3%; CritPt 0.9%; FrontierMath v2 T1–3 32.4% / Tier 4 8.3%
- AA Intelligence Index 25 (estimated, non-reasoning variant); BenchLM overall 55.41; Vals accuracy 56.68%

Coding:

- SWE-bench Verified: **79.6%** (system card) / 77.40% (Vals) / 76.2% (10-trial) / 80.2% (prompt-mod)
- LiveCodeBench 82.09%; SWE-Rebench 60.7%; Vibe Code Bench 51.48%; CursorBench 3.1 48.8%; FrontierCode 1.1 24.3%
- SWE-bench Pro / DeepSWE: **no verified public score found**

Long context:

- AA-LCR **68.3%**; no MRCR/RULER/GraphWalks recall result published; the 1M window is beta and its recall-at-depth is unmeasured.

Multimodal:

- CharXiv 77.4% (system card); MMMU-Pro 83.58% (Vals) / 70.6% AA variant.

### Normalized scores (1–100)

- **Tool use: 86/100.** Best-in-class computer-use evidence — 72.1% OSWorld-Verified, 57.3% Terminal-Bench 2.1, 67.8% Claw-Eval, 94% on Anthropic's insurance workflow — capped by missing Terminal-Bench 2.1/GDPval system-card numbers.
- **Reasoning: 84/100.** GPQA Diamond 85.6–89.9%, HLE 49% with tools, ARC-AGI-2 58–60% and MMLU-Pro 87.34% now put it near-frontier (raised from 78, which predated any published GPQA/HLE); CritPt 0.9% and the AA index reading cap it.
- **Context window: 95/100.** 1M-token window (beta) with 128K output and AA-LCR 68.3%; capped by beta status and no recall-depth measurement.
- **Multimodal: 80/100.** Text and vision input with strong document/computer-use grounding; no audio, video or non-text output.
- **Coding: 88/100.** 79.6% SWE-bench Verified is only ~1 point behind Opus 4.6 — a class-leading value proposition; capped by Vibe Code Bench 51.5% and the system-card/Vals spread.
- **Cost efficiency: 70/100.** $3/$15 per 1M is mid-tier: ~40% cheaper than Opus 4.6 on both sides, with a 90% cache discount, but far from free.
- **Overall Score: 87/100.** Mean of the five quality dims (86+84+95+80+88)/5 = 86.6 → 87. Best fit: high-volume agentic coding and computer-use pipelines that want near-Opus output quality without Opus pricing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Anthropic Sonnet 4.6 docs + news, BenchLM model page + per-eval results, Vals AI, Artificial Analysis). Newly published GPQA/HLE rows corrected the prior conservatively sub-Opus Reasoning; the context-window, SWE and GPQA spreads are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
