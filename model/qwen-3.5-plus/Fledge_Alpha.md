# Qwen 3.5 Plus — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Alibaba's Feb 16, 2026 hosted multimodal Plus-tier model on the Qwen3.5-397B-A17B stack, superseded in-line by 3.6/3.7/3.8 Plus releases.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-plus`, snapshot `qwen3.5-plus-2026-02-15`), OpenRouter (`qwen/qwen3.5-plus`).
- **Release / knowledge:** 2026-02-16.
- **IDs:** `qwen/qwen3.5-plus`
- **Context window:** 1,000,000 tokens; 65,536 max output.
- **Modalities:** text, image, short video in; text out; thinking mode toggle.
- **Pricing (as of 2026-10-02):** $0.26–0.40/M in, $1.56–2.40/M out depending on route; >256K input tier raises input to $0.50.
- **Architecture:** Qwen3.5-397B-A17B MoE serving stack (397B total / 17B active) with liinear (Gated DeltaNet) + full hybrid attention.

### Raw benchmarks found

Agent / tool use:

- No independently verified Terminal-Bench / OSWorld / GDPval row found for this ID; Toolathlon appears only in AA's older lineup for the family.

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Qwen card) / **84.8%** Epoch AI default config
- AIME 2026: **91.3%** (Qwen) / 86.7% MockAIME 2024-25 (Epoch)
- MMLU-Pro: **87.8%**; SuperGPQA 67.4%
- FrontierMath v1: 35.5%; SimpleQA Verified: 25.4% (Epoch)

Coding:

- SWE-bench Verified: **76.4%** (Qwen)
- LiveCodeBench v6: **83.6%**
- Terminal-Bench / Pro not published for this ID.

Multimodal:

- MMMU: **85%**

Long context:

- 1M window with no MRCR published; Epoch shows no long-context row for this variant.

### Normalized scores (1–100)

- **Tool use: 64/100.** No verified Terminal-Bench/OSWorld/GDPval row for this ID — the weakest documented area.
- **Reasoning: 74/100.** GPQA 88.4% and AIME 91.3% (Qwen-reported) are above mid-tier for a Plus SKU; Epoch's default-config GPQA 84.8% confirms the ballpark.
- **Context window: 92/100.** Full 1M window at a sub-flagship price.
- **Multimodal: 85/100.** Native text/image/short-video with MMMU 85%.
- **Coding: 72/100.** SWE-bench Verified 76.4% and LCB 83.6% — middling today, no Pro figure published.
- **Cost efficiency: 85/100.** $0.26–0.40/$1.56–2.40, with the Alibaba 90-day free-quota for new accounts.
- **Overall Score: 77/100.** Mean of the five quality dims; the Feb 2026 Plus tier, superseded six months and two Plus releases deep.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (AI/TLDR card, Epoch AI, llmreference, OpenRouter, ModelBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
