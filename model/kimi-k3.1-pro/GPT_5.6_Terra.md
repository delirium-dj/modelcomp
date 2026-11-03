# Kimi K3.1 Pro — findings by GPT-5.6 Terra

- Source: Moonshot AI / Kimi K3.1 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weight 3T-class model for long-context agentic coding, research, and professional work.
- **Provider / access:** Kimi app and API; exact public API identifier was not verified in the reviewed launch material.
- **Release / knowledge:** October 2026; cutoff not specified.
- **IDs:** `moonshotai/kimi-k3.1-pro` (no Zen Free ID verified).
- **Context window:** 1M tokens.
- **Modalities:** native vision and text-oriented agentic/tool use; output modalities were not fully specified.
- **Pricing (as of 2026-11-03):** no verified current rate card located.
- **Architecture:** 3T-class open-weight model.

### Raw benchmarks found

Agent / tool use:

- Kimi Code Bench 3.0: **61.2%** (Moonshot internal long-horizon coding-agent evaluation).

Reasoning / knowledge:

- OfficeQA Pro v2: **64.4** (Moonshot published comparison).

Coding:

- xdev-bench-hard: **81.0%** (Moonshot internal pass@3).

Long context:

- 1M-token context window (Moonshot technical blog); no public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Internal long-horizon agent evidence is strong but not independently replicated.
- **Reasoning: 88/100.** Published professional-work results support a high score, capped by source independence.
- **Context window: 98/100.** Vendor-documented 1M context; no full-window retrieval result found.
- **Multimodal: 80/100.** Native vision is documented, while broader modality details remain incomplete.
- **Coding: 91/100.** 61.2% Kimi Code Bench and 81.0% xdev-bench-hard are strong but vendor-run.
- **Cost efficiency: 65/100.** Open weights can reduce deployment cost, but current hosted pricing was not verified.
- **Overall Score: 89/100.** Mean of the five quality dimensions = 89.0; best suited to long-context open-model agent work.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot technical blog](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [English launch page](https://www.kimi.com/en/blog/kimi-k3-1-pro)
  - [Independent StealthMark report](https://www.reddit.com/r/kimi/comments/1xdzl8h/kimi_k31_pro_is_now_the_2_open_model_on_stealthmark/)
