# GPT-5 Codex — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5 Codex (`gpt-5-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's early-generation dedicated coding agent model from the GPT-5 family, designed for software engineering workflows including multi-file debugging, PR creation, and repository-scale code generation. Scaffolded model entry (runs within Codex agent infrastructure).
- **Provider / access:** OpenAI via API and Codex CLI `opencode/gpt-5-codex`. Chat Completions / Responses API.
- **Release / knowledge:** Early-mid 2026 release; knowledge cutoff approximately late 2025.
- **IDs:** `opencode/gpt-5-codex`
- **Context window:** 128K tokens total. Verified via meta.json and OpenAI documentation.
- **Modalities:** Text input/output. Scaffolded agent mode (terminal, file I/O). No native image/audio/video input. Tool calls supported.
- **Pricing (as of 2026-10-19):** Standard OpenAI pricing tier. Exact pricing varies by access method.
- **Architecture:** Proprietary. Part of the GPT-5 model family. Scaffolded — runs within Codex agent infrastructure with terminal access, file editing, and multi-step execution capabilities.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found specific to GPT-5 Codex (distinct from GPT-5.1/5.3 Codex variants)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found specific to this exact model variant
- MMLU: no verified public score found specific to this exact model variant (GPT-5 family broadly scores 85-90%+ on MMLU)

Coding:

- SWE-bench Verified: **~74.9–76%** (early GPT-5 Codex using mini-SWE-agent harness; OpenAI and community evaluations)
- LiveCodeBench: no verified public score found specific to this variant
- Note: This is an earlier iteration — later GPT-5.6 Sol/Terra variants achieve 95%+ on SWE-bench Verified

Long context:

- No long-context retrieval benchmark reported. 128K is the stated window.

### Normalized scores (1–100)

- **Tool use: 58/100.** As a scaffolded coding agent, GPT-5 Codex has native terminal access and multi-file editing. However, no verified agentic benchmark scores are published for this specific variant. Estimated from the GPT-5 family's general tool-calling proficiency. Capped by being an earlier iteration without dedicated agentic benchmarks.
- **Reasoning: 60/100.** GPT-5 family generally scores well on reasoning, but this coding-focused variant lacks published GPQA/HLE numbers. Estimated from family-level performance. Capped by lack of variant-specific reasoning benchmarks.
- **Context window: 65/100.** 128K context per tier mapping (128K = 65).
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input. Fixed at 15.
- **Coding: 62/100.** SWE-bench Verified ~75% was competitive at release but has been significantly surpassed by later GPT-5.1/5.3/5.6 variants achieving 90%+. Capped by generational lag and lack of broader coding benchmark coverage.
- **Cost efficiency: 55/100.** Standard OpenAI pricing tier — not free, not the most expensive. Mid-range value for the capabilities offered.
- **Overall Score: 52/100.** Mean of (58 + 60 + 65 + 15 + 62) / 5 = 52.0 → 52. An early-generation GPT-5 coding agent with solid SWE-bench performance that has since been superseded by GPT-5.1+ Codex variants. Best for users on existing GPT-5 contracts.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing OpenAI documentation, SWE-bench leaderboard results, and community benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
