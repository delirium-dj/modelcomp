# GPT-5.1 Codex Max — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.1 Codex Max (`gpt-5.1-codex-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's premier frontier agentic coding model, designed for long-running multi-window tasks, repository-scale refactoring, PR creation, and IDE/CLI integrations. Features native compaction for coherent context over millions of tokens across development tasks.
- **Provider / access:** OpenAI API, Azure, OpenRouter `opencode/gpt-5.1-codex-max`. Responses API / Chat Completions.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/gpt-5.1-codex-max`
- **Context window:** 400,000 tokens (400K). Verified via OpenAI documentation and LLM-stats.
- **Modalities:** Text input/output. Scaffolded agent mode (terminal, file I/O, multi-window). No native image/audio/video input. Tool calls and JSON mode supported.
- **Pricing (as of 2026-10-19):** $1.25 per 1M input / $10.00 per 1M output. Standard caching applies.
- **Architecture:** Proprietary. Part of the GPT-5.1 family. Scaffolded — runs within Codex agent infrastructure with native compaction for multi-hour agent loops, Windows environment support, and Codex CLI integration.

### Raw benchmarks found

Agent / tool use:

- IC SWE (internal coding evaluation): **top-tier placement** (OpenAI report — exact score not publicly disclosed)
- Terminal-Bench 2.1: no verified public score found specific to this variant
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found specific to Max variant (GPT-5.1 Mini scores 81.3%)
- MMLU Pro: no verified public score found specific to Max variant

Coding:

- SWE-bench Verified: **~85–90%** (provisional — OpenAI positions as outperforming GPT-5 Codex significantly; exact public number not disclosed for Max specifically)
- SWE-bench Pro: no verified public score found
- Multi-file debugging / PR reviews: **major leaps** over GPT-5 Codex per OpenAI (qualitative assessment)
- Frontend generation: **top-tier** per OpenAI internal evaluation

Long context:

- Native compaction enables multi-million-token coherent development sessions. No RULER/MRCR reported. 400K is the stated serving window.

### Normalized scores (1–100)

- **Tool use: 72/100.** As OpenAI's premier scaffolded coding agent, Max has deep integration with terminal, file I/O, and multi-window environments. Compaction enables multi-hour agent loops. Capped by lack of published agentic benchmark scores and trailing the absolute top on public leaderboards.
- **Reasoning: 68/100.** Inherits GPT-5.1 family's strong reasoning capabilities. GPT-5.1 Mini's 81.3% GPQA suggests the Max variant should be at least competitive. Capped by lack of variant-specific reasoning benchmarks.
- **Context window: 82/100.** 400K context is beyond the 256K tier (78) but below 500K (85-88). Compaction enables effectively longer sessions. Scored at 82 for the raw 400K window.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input. Fixed at 15.
- **Coding: 75/100.** Positioned as OpenAI's top coding agent with significant SWE-bench gains over GPT-5 Codex. Estimated ~85-90% on SWE-bench Verified. Strong multi-file and frontend capabilities. Capped by lack of precise public benchmark disclosure and trailing the very top scaffolded systems (GPT-5.6 Sol at 96.2%).
- **Cost efficiency: 35/100.** $1.25/$10.00 per 1M is premium pricing. Expensive for high-volume use but justified by frontier capabilities.
- **Overall Score: 62/100.** Mean of (72 + 68 + 82 + 15 + 75) / 5 = 62.4 → 62. A top-tier scaffolded coding agent with excellent long-context compaction capabilities, limited by text-only modality. Best for enterprise teams needing long-running autonomous coding workflows.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing OpenAI documentation, PricePerToken, ExplainX, LLM API, and LLM-stats; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
