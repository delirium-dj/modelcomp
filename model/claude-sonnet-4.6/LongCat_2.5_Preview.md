# Claude Sonnet 4.6 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's balanced Sonnet of early 2026 — a full upgrade across coding, computer use, long-context reasoning, and agent planning over Sonnet 4.5, with a 1M-token context window. Now the legacy option behind Sonnet 5.
- **Provider / access:** Anthropic Claude API — `claude-sonnet-4-6` (Chat Completions-style messages API; adaptive thinking, context compaction in beta). Also AWS Bedrock, Google Vertex, Azure Foundry, OpenRouter. Released 2026-02-17.
- **Release / knowledge:** Released 2026-02-17; reliable knowledge cutoff August 2025.
- **IDs:** `anthropic/claude-sonnet-4-6` (Bedrock/Vertex/Foundry), `claude-sonnet-4-6` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens (GA from 2026-03-13 at standard pricing across the full window); 128K max output (300K with the output-300k beta header on Batches API).
- **Modalities:** Text and image in; text out; reasoning yes (adaptive); tool calls yes (function calling, code execution, computer use, parallel agents); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $3.00/M in, $15.00/M out; cache read $0.30/M; cache write $3.75/$6.00/M; Batch API 50% off. Paid only.
- **Architecture:** Proprietary; decoder-only; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%**; Terminal-Bench 2.1 (Vals): **57.3%**
- Claw-Eval: **67.8%**; Gert Labs: **62.92%**
- OSWorld-Verified: **72.1%**; OSWorld 2.0: **8.3%**
- CyberGym: **65.2%**; JobBench: **36.9%**

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Vals mirror 85.6%)
- HLE: **49%**
- ARC-AGI-1: **86.50%**; ARC-AGI-2: **60.42%** (max/high effort, system card)
- MMLU-Pro: **79.2%** (Vals 87.3%); MMLU: **88.0%**; MATH 500: **54.2%**

Coding:

- SWE-bench Verified: **79.6%**
- LiveCodeBench (Vals): **82.1%**; SWE-bench (Vals): **77.4%**
- Vibe Code Bench: **51.48%**; SWE-Rebench: **60.7%**
- cursorBench31: **48.8%**; FrontierCode 1.1 Main: **24.3%**
- React Native Evals: **80.6%**

Long context:

- 1M-token window with context compaction (beta); maintains accuracy across the full window (Anthropic).

Tool-calling extras:

- Berkeley Function Calling: **88.3%**

### Normalized scores (1–100)

- **Tool use: 68/100.** Claw-Eval 67.8% and Gert Labs 62.92% are solid; TB2.0 59.1% sits mid-band (45–60% → 50–70) and OSWorld 2.0 8.3% lags the field.
- **Reasoning: 82/100.** GPQA 89.9% is a notch under the 90%+ frontier bar; HLE 49% and ARC-AGI-2 60.42% are strong for the generation.
- **Context window: 95/100.** 1M tokens with 128K output and flat pricing across the window earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 68/100.** SWE-bench Verified 79.6% and LiveCodeBench 82.1% are decent; Vibe Code Bench 51.48% and FrontierCode 24.3% keep the dimension mid-band.
- **Cost efficiency: 60/100.** $3/$15 pricing matches the methodology's $3/$15 ≈ 60 reference point.
- **Overall Score: 77/100.** Mean of the five quality dims (68+82+95+70+68)/5 = 76.6 → 77. Best-fit: legacy Sonnet for Claude Code/agent workloads at Sonnet pricing — approaches Opus-level intelligence, superseded by Sonnet 5 on every axis.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic announcement + system card, BenchLM, llm-stats, OpenTools, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
