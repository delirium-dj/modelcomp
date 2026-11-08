# Mistral Large 3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`opencode/mistral-large-3`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's 675B-total / 41B-active Apache-2.0 open-weights MoE flagship (released 2025-12-02) with native vision (text+image in) — predecessor of Mistral Large 4; 256K context, $0.50/$1.50 hosted.
- **Provider / access:** Mistral La Plateforme (`mistral-large-3`), OpenRouter, OpenCode Zen (`opencode/mistral-large-3`); Apache-2.0 open-weights for self-hosting.
- **Release / knowledge:** 2025-12-02 release; Apache-2.0 open-weights license; knowledge cutoff 2025.
- **IDs:** `opencode/mistral-large-3`, `mistral-large-3`, `mistral-large-3-2512`, `mistral/mistral-large-3` (Mistral AI / OpenRouter).
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-08):** $0.50 per 1M input, $1.50 per 1M output (La Plateforme / providers); 90% cache discount; self-host Apache-2.0 open weights at $0 license cost.
- **Architecture:** 675B total / 41B active Mixture-of-Experts (MoE) transformer with native vision input; open-weights Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51.4%** (autonomous terminal tasks)
- AgentBench: **56.8%** (agentic workflows)

Reasoning / knowledge:

- GPQA Diamond: **64.2%**
- MMLU-Pro: **76.5%**
- Artificial Analysis Intelligence Index: **N/A** (deprecated/superseded by Large 4)
- LongBench v2: **71.3%** (long-context reasoning at 256K)

Coding:

- SWE-bench Verified: **42.7%**
- LiveCodeBench v5: **48.9%**
- HumanEval+: **81.4%**

Long context / vision:

- 256,000 token context with 71.3% on LongBench v2 at scale.
- Native image input for visual reasoning.

### Normalized scores (1–100)

- **Tool use: 57/100.** Moderate agent performance with 51.4% on Terminal-Bench 4.0 and 56.8% on AgentBench; limited by 256K context for long-horizon tasks.
- **Reasoning: 63/100.** Moderate reasoning with 64.2% on GPQA Diamond; deprecated on Artificial Analysis (superseded by Large 4) so no AA Intelligence Index rank.
- **Context window: 77/100.** 256K token context with 71.3% on LongBench v2; trails frontier 1M+ context models.
- **Multimodal: 63/100.** Text and image input with native vision; no audio/video support.
- **Coding: 60/100.** Competent coding with 42.7% on SWE-bench Verified and 48.9% on LiveCodeBench v5; 81.4% on HumanEval+.
- **Cost efficiency: 88/100.** Excellent value at $0.50/$1.50 with 90% cache discount; Apache-2.0 open-weights enable zero-license self-hosting.
- **Overall Score: 64/100.** Arithmetic mean of five quality dimensions: (57 + 63 + 77 + 63 + 60) / 5 = 320 / 5 = 64.0 → 64. Mistral AI's open-weights vision-capable MoE flagship (675B/41B); strong value with self-hosting freedom, but superseded by Large 4 and limited by 256K context.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Mistral AI announcements, Artificial Analysis model cards, SWE-bench/LiveCodeBench leaderboards, and Apache-2.0 release documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [Mistral AI — Pricing](https://mistral.ai/pricing)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [Hugging Face — Mistral Large 3](https://huggingface.co/mistralai/Mistral-Large-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---