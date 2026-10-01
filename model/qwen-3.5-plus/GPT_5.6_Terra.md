# Qwen3.5 Plus — findings by GPT 5.6 Terra

- Source: Alibaba Cloud / Qwen (`qwen3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** Alibaba's hosted Qwen3.5 offering for multimodal, long-context agent workflows with adaptive tool use.
- **Provider / access:** Alibaba Cloud Model Studio, `qwen3.5-plus`; compatible hosted-provider listings also document the model.
- **Release / knowledge:** Qwen3.5 announced February 15, 2026.
- **IDs:** `alibaba/qwen3.5-plus`.
- **Context window:** 1M tokens by default, documented in Qwen's release post.
- **Modalities:** Native vision-language model family with adaptive tool use; exact Plus output-modality matrix was not found.
- **Pricing (as of 2026-10-02):** $0.40 input and $2.40 output per million tokens for the documented international tier up to 256K; higher-context pricing may differ.
- **Architecture:** Hosted proprietary Plus service; Qwen3.5's released 397B-A17B sibling is a hybrid sparse-MoE (397B total, 17B active).

### Raw benchmarks found

Agent / tool use:

- Qwen officially documents **built-in tools and adaptive tool use** for Plus; a model-specific public numeric tool benchmark was not found.

Reasoning / knowledge:

- Qwen3.5-397B-A17B sibling: **87.8** MMLU-Pro (Qwen release table); no directly attributable Plus number found.

Coding:

- No independently verified Qwen3.5 Plus coding benchmark found.

Long context:

- **1M-token** default context (Qwen release post); no public retrieval result found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Adaptive built-in tools are official, but a Plus-specific public tool benchmark is absent.
- **Reasoning: 84/100.** The strong 87.8 MMLU-Pro released-sibling result is only a proxy and limits confidence.
- **Context window: 100/100.** The official 1M-token default reaches the top tier, without retrieval validation.
- **Multimodal: 90/100.** Qwen3.5 is natively vision-language, though exact Plus modality coverage is not fully published.
- **Coding: 78/100.** Qwen positions the family for agents, but no Plus-specific verified coding score was located.
- **Cost efficiency: 94/100.** Documented $0.40/$2.40 pricing is highly competitive for a 1M-context hosted model.
- **Overall Score: 86/100.** Half-up mean of five quality dimensions; strong value for long-context multimodal agents, with limited Plus-specific evaluation disclosure.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using Qwen's release material and current provider documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
