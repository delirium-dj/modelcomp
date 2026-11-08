# Mistral Small 4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`opencode/mistral-small-4`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's compact multimodal MoE model unifying instruct chat, reasoning, and agentic coding with configurable reasoning effort (256K context, Apache 2.0 open-weight).
- **Provider / access:** Mistral La Plateforme (`mistral-small-4`), OpenRouter, OpenCode Zen (`opencode/mistral-small-4`); Apache 2.0 open-weight.
- **Release / knowledge:** 2026 release; Apache 2.0 open-weight license; knowledge cutoff 2026.
- **IDs:** `opencode/mistral-small-4`, `mistral-small-4` (Mistral AI / OpenRouter).
- **Context window:** 262,144 tokens total (256K).
- **Modalities:** Text and image input; text and code output.
- **Pricing (as of 2026-11-08):** $0.15 per 1M input, $0.60 per 1M output, $0.015 per 1M cached reads (Mistral AI La Plateforme / OpenRouter).
- **Architecture:** Compact Mixture-of-Experts (MoE) hybrid unifying chat, reasoning (Magistral), and agentic coding (Devstral) in one model; ~24B active parameters estimated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **48.2%** (autonomous terminal tasks)
- AgentBench: **52.7%** (agentic workflows)

Reasoning / knowledge:

- GPQA Diamond: **58.4%**
- MMLU-Pro: **72.1%**
- Magistral reasoning benchmarks: **64.3%** (configurable reasoning effort)
- Artificial Analysis Intelligence Index: **42** (#18 global rank)

Coding:

- SWE-bench Verified: **38.9%**
- LiveCodeBench v5: **45.6%**
- HumanEval+: **78.3%**
- Devstral coding benchmarks: **51.2%** (agentic coding subset)

Long context / vision:

- 262,144 token context window; no public long-context retrieval benchmarks verified at 256K.
- Image input for visual reasoning and code analysis.

### Normalized scores (1–100)

- **Tool use: 61/100.** Modest agent performance with 48.2% on Terminal-Bench 4.0 and 52.7% on AgentBench; limited by 256K context for long-horizon tasks.
- **Reasoning: 66/100.** Moderate reasoning with 58.4% on GPQA Diamond and #18 AA Intelligence Index rank (score 42); configurable reasoning effort via Magistral integration.
- **Context window: 77/100.** 256K token context; no verified retrieval scores at this window size caps effective utility.
- **Multimodal: 62/100.** Text and image input only; no audio/video support limits multimodal breadth.
- **Coding: 66/100.** Competent but not flagship coding with 38.9% on SWE-bench Verified and 45.6% on LiveCodeBench v5; Devstral integration helps agentic coding.
- **Cost efficiency: 91/100.** Excellent value at $0.15/$0.60 with 90% cache discount; Apache 2.0 open-weight enables zero-license self-hosting.
- **Overall Score: 66/100.** Arithmetic mean of five quality dimensions: (61 + 66 + 77 + 62 + 66) / 5 = 332 / 5 = 66.4 → 66. Mistral AI's versatile compact MoE unifying chat/reasoning/coding at exceptional value; limited by 256K context and below-frontier benchmark scores.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Mistral AI announcements, Magistral/Devstral integration docs, SWE-bench/LiveCodeBench leaderboards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Small 4](https://mistral.ai)
  - [Mistral AI — Pricing](https://mistral.ai/pricing)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---