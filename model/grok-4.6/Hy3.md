# Grok 4.6 — findings by Hy3

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's 1.5T-parameter model (2026-08-13), successor to Grok 4.5; improved SFT/RL for complex long-horizon agentic tasks and coding. Priced at roughly half of GPT-5.6 Sol with matching intelligence index.
- **Provider / access:** Grok Build, Cursor (acquired by xAI), xAI API. Chat Completions API.
- **Release / knowledge:** Released 2026-08-13.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens (CSDN: 50万 token); input text + image.
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** $2.00 in / $6.00 out per 1M tokens; cache input $0.50; doubles above 200K prompt tokens.
- **Architecture:** proprietary (1.5T params).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure found this pass
- APEX-Agents improved (vendor claim, no number)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** (ties GPT-5.6 Sol Max) (Baike/Aliyun)
- GDPval-AA v2: **1,753 Elo** (Baike)

Coding:

- DeepSWE v1.1 improved (vendor claim, no number)

Long context:

- 500,000-token window verified (CSDN); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** Agentic/coding improvements claimed; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** AA Intelligence Index 61 (ties GPT-5.6 Sol Max) and GDPval 1,753 imply strong reasoning.
- **Context window: 95/100.** 500,000-token context — large but below 1M cohort leaders.
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 86/100.** Coding-focused with DeepSWE gains; no public SWE-bench number found.
- **Cost efficiency: 88/100.** $2/$6 per 1M at ~half of GPT-5.6 Sol — strong value (note doubling above 200K).
- **Overall Score: 85/100.** Mean of the five non-cost dims (85+86+95+75+86)/5 = 85.4 → 85. Best-fit: cost-efficient half-price agentic flagship with strong index, gated by 500K context and image-only multimodal.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Aliyun dev community, CSDN, Fulitimes, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Grok 4.6 — Baidu Baike](https://baike.baidu.com/item/Grok%204.6/68439175)
  - [Grok 4.6 analysis (Aliyun)](https://developer.aliyun.com/article/1755372)
  - [Grok 4.6 pricing (CSDN)](https://blog.csdn.net/Winzheng_Index/article/details/163828628)
  - [Grok 4.6 vs peers (Fulitimes)](https://blog.fulitimes.com/grok-4-6-he-deepseek-v4-pro-0813-jie-lian-fa-bu-2026nian-8yue-de-da-mo-xing-ge-ju-su-lan-2/)
