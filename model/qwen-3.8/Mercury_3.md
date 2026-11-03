# Qwen 3.8 — findings by Mercury 3

- Source: Alibaba Qwen/Qwen 3.8 (open weights)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open release: Qwen3.8-2.4T-A95B; the Qwen3.8 open-family flagship)
- **Short description:** Alibaba Qwen's most capable open-model generation to date (released 2026-08-12): a 2.4T-total/95B-active MoE reasoning model, text-only (thinking required), 262K native context extensible to ~1M. This folder tracks the open Qwen3.8 release; the sibling `qwen-3.8-max` API flagship is tracked separately.
- **Provider / access:** Qwen Cloud API + open weights on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`); OpenRouter route `qwen/qwen3.8-2.4t-a95b`; 25 providers per models.dev.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (HF / `qwen/qwen3.8-2.4t-a95b` on OpenRouter).
- **Context window:** 262,144 tokens native, extensible to ~1,010,000; max output 131,072.
- **Modalities:** text only (no vision); reasoning model with `reasoning_effort` (xhigh/medium/low) and `preserve_thinking`; tool calls; JSON mode.
- **Pricing (as of 2026-11-03):** $1.95 input / $5.70 output per 1M tokens (models.dev, Alibaba route); ~$2/$6 on OpenRouter providers (NovitaAI, Alibaba Cloud Intl, SiliconFlow, Venice, Together).
- **Architecture:** 2.4T total / 95B active MoE, 512 experts (10 routed + 1 shared), 92 layers with Gated DeltaNet/Attention mix, MTP; permissive Qwen license (open weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (HF eval row, * = reported with tools/harness note) — top-class for open weights
- WildClawBench overall: **56.2%** (avg time 708s)
- No GDPval-AA/Agentic-Index figure verified in sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (HF eval row); HLE: **43.6%** (HF eval row)
- No ARC-AGI/LCR/MRCR figure verified in sources reviewed for this exact open checkpoint

Coding:

- DeepSWE: **56.6%**; SWE-bench Pro: **67.7%** (HF eval rows)
- No LiveCodeBench/FrontierCode figure verified in sources reviewed for this exact open checkpoint

Long context:

- 262K native / ~1M extensible; no long-context retrieval figure verified in sources reviewed.

Multimodal:

- Text-only input/output (no vision/audio/video) — per HF card ("text-only model... multimodal inputs not supported").

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 86.6% and WildClawBench 56.2% are strong for open weights; capped by missing GDPval/agentic-index figures and no vision/tool-heavy evals.
- **Reasoning: 84/100.** GPQA 92.6% excellent, HLE 43.6% mid; capped by sparse independent verification for this exact checkpoint.
- **Context window: 86/100.** 262K native (~1M extensible) with no verified retrieval figure; scored below the 1M-native class.
- **Multimodal: 15/100.** Text-only — no multimodal input (per HF card).
- **Coding: 82/100.** DeepSWE 56.6% and SWE-Pro 67.7% solid; capped by FrontierCode/LCB figures and the 2.4T open MoE's mid-coding profile.
- **Cost efficiency: 84/100.** $1.95/$5.70 (or ~$2/$6 via OpenRouter) with free open weights — good value, but not the cheapest open option.
- **Overall Score: 70/100.** Mean of (82+84+86+15+82)/5 = 69.8 → 70. A strong open-weight reasoning/coding model; text-only modality and thin independent benchmark coverage hold it back.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Hugging Face official model card, models.dev registry, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: this folder tracks the open Qwen3.8-2.4T-A95B release; Qwen3.8-Max (API flagship) is the separate `qwen-3.8-max` folder. Several benchmark rows (TB2.1, DeepSWE, SWE-Pro, GPQA, HLE) come from the HF card's own eval rows — independent verification is sparse.
- Reference URLs:
  - [Qwen3.8-2.4T-A95B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8 collection (Hugging Face)](https://huggingface.co/collections/Qwen/qwen38)
  - [Qwen3.8-2.4T-A95B — models.dev registry ($1.95/$5.70, 262K/131K, 2026-08-12)](https://models.dev/models/alibaba/qwen3.8-2.4t-a95b)
  - [Qwen3.8-2.4T-A95B — OpenRouter model page (~$2/$6)](https://openrouter.ai/qwen/qwen3.8-2.4t-a95b)
