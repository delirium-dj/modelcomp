# GPT-5.2 Codex — findings by Claude Opus 4.6

- Source: OpenAI (`openai/gpt-5.2-codex`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's specialized agentic coding and software engineering model built on GPT-5.2 architecture. Designed for long-horizon programming, multi-step development tasks, repository-wide reasoning, and defensive cybersecurity operations with context compaction for sustained multi-hour sessions.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), GitHub Copilot, Microsoft Foundry, Azure OpenAI. Responses API.
- **Release / knowledge:** January 2026 (following GPT-5.2 base in December 2025); knowledge cutoff not publicly disclosed
- **IDs:** `openai/gpt-5.2-codex`
- **Context window:** 400,000 tokens total; 128,000 max output — verified via ashna.ai / llm-stats.com; context compaction auto-summarizes near limit
- **Modalities:** Text, image in; text out; reasoning yes (configurable effort incl. xHigh); tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** ~$1.75 / $14.00 per 1M input/output tokens; cached input ~$0.175 per 1M (90% discount)
- **Architecture:** Proprietary closed-weight model; built on GPT-5.2 architecture

### Raw benchmarks found

Agent / tool use:

- CVE-Bench (cybersecurity): **87%** (source: nxcode.io)
- Terminal-Bench: no verified standalone score found for Codex variant
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found for Codex variant (inherits GPT-5.2 base improvements)
- HLE: no verified public score found
- ARC-AGI: inherits high GPT-5.2 baseline (source: openai.com)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro / Verified: described as "outstanding" performance (source: llm-stats.com / openai.com), no specific percentage found for this variant
- LiveCodeBench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 400K token context window with context compaction; no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 85/100.** CVE-Bench 87% demonstrates exceptional tool-use capability in security workflows. Near-perfect agentic workflow accuracy noted. Context compaction enables sustained multi-hour tool-use sessions. Strong IDE/terminal integration.
- **Reasoning: 82/100.** Inherits GPT-5.2 base reasoning improvements including high GPQA Diamond and ARC-AGI scores. xHigh reasoning effort mode for complex architectural problems. Capped by lack of Codex-specific reasoning benchmark numbers.
- **Context window: 72/100.** 400K tokens is substantial but below the 1M standard of frontier models. Context compaction partially compensates by auto-summarizing history. 128K max output is competitive.
- **Multimodal: 40/100.** Text and image input only; text output. Designed for reading UI comps, flowcharts, and screenshots for coding context. No audio or video support. Score reflects limited modality scope.
- **Coding: 88/100.** Purpose-built for long-horizon programming with repository-wide reasoning. "Outstanding" SWE-bench performance noted. CVE-Bench 87% confirms deep code understanding. Capped slightly by lack of specific SWE-bench Verified percentage.
- **Cost efficiency: 50/100.** ~$1.75/$14.00 per 1M tokens is moderate — cheaper than Opus-tier but more expensive than many mid-tier models. Cached input at 90% discount provides savings for iterative coding sessions.
- **Overall Score: 73/100.** Mean of (85 + 82 + 72 + 40 + 88) / 5 = 73.4, rounded to 73. A specialized coding powerhouse with excellent agentic capabilities, held back by a smaller context window and limited multimodal support compared to broader frontier models.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.2 Codex Overview](https://openai.com)
  - [NXCode GPT-5.2 Codex Deep Dive](https://nxcode.io)
  - [LLM Stats GPT-5.2 Codex Specs](https://llm-stats.com)
  - [Azure OpenAI GPT-5.2 Codex](https://azure.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
