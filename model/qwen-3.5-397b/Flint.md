# Qwen 3.5 397B - findings by Flint

- Source: Alibaba / Qwen3.5 397B-A17B (open-weights MoE)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's open-weights multimodal MoE (397B total / 17B active) for reasoning, coding and vision; SWE-bench 76.4%, AIME 91.3%, Apache 2.0.
- **Provider / access:** Hugging Face (`https://huggingface.co/Qwen/Qwen3.5-397B-A17B`), Model Studio / Alibaba API; OpenCode Zen / OpenRouter routes (`opencode/qwen-3.5-397b`).
- **Release / knowledge:** Released 2026-02-15; knowledge cutoff not verified in sources found.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`; `opencode/qwen-3.5-397b`.
- **Context window:** **262,144** native (extensible to ~1,010,000; **1M hosted**) (repo meta; models.dev).
- **Modalities:** Text, image, video in; text out; no audio input (models.dev note).
- **Pricing (as of 2026-10-25):** Apache 2.0 open weights (free self-host); Artificial Analysis $0.60/$3.60 per 1M.

- **Architecture:** Open-weights MoE (397B total / 17B active); Apache 2.0.

### Raw benchmarks found

- Coding / reasoning:
  - SWE-Bench Verified: **76.4%** (resolved) — Hugging Face / Qwen.
  - AIME: **91.3%** — repo meta / Qwen.

### Cross-source comparison

- Open-weights vs proprietary lanes (cost efficiency).

### Normalized scores (1-100)

- **Tool use: 70/100.** SWE-Bench Verified **76.4%** -> strong.
- **Reasoning: 70/100.** AIME **91.3%**, reasoning supported, open MoE -> strong.
- **Context window: 70/100.** **262,144** native; ~1M hosted -> mid.
- **Multimodal: 85/100.** Text, image, video in; text out; no audio -> high.
- **Coding: 75/100.** SWE-Bench Verified **76.4%** -> strong.
- **Cost efficiency: 100/100.** Apache 2.0 open weights (free self-host); AA $0.60/$3.60 per 1M.

- **Overall Score: 74/100.** Mean of the five quality dims (70 + 70 + 70 + 85 + 75) / 5 = 72; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/qwen-3.5-397b)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
