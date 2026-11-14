# Qwen3.8-Omni-Flash — findings by Hy3

- Source: Alibaba (`qwen-3.8-omni-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba's native omnimodal model (2026-09-18); text/image/audio/video input with 1M context and up to 1 hour of continuous audio/video. Aims to move omni models from "understanding" to "planning, tool use, and creation." Cloud-hosted (no weights released).
- **Provider / access:** Alibaba BaiLian (Model Studio), Qianwen Platform (Beijing, Singapore, Hong Kong, Tokyo, Frankfurt, Virginia). Chat Completions API; open-source multimodal plugin kit Qwen-MM-Plugins.
- **Release / knowledge:** Released 2026-09-18.
- **IDs:** `qwen/qwen-3.8-omni-flash`
- **Context window:** 1,000,000 tokens in; up to 1 hour continuous audio/video input.
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** cloud-hosted API (rates not itemized this pass); audio cost cut ~98% vs prior per Baijiahao.
- **Architecture:** native omnimodal (proprietary, no open weights).

### Raw benchmarks found

Agent / tool use:

- WildClawBench-MM: **+36.5 pts** vs Qwen3.5-Omni-Plus (Baijiahao)
- AgenticVBench: **+22.3 pts**; UniClawBench: **69.6** (Baijiahao)
- Avg **+25–26%** across 29–30 benchmarks vs prior gen (Baijiahao)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Coding / long-horizon gains claimed; no public SWE-bench number found this pass

Long context / multimodal:

- AliMeeting: speaker error rate **3.35**, WER **17.18** (Baike)
- LongAudioSpan **+8.3**, OmniVideoBench **+9.6** vs prior (Baijiahao)

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong agentic/omni gains (WildClawBench-MM +36.5, UniClawBench 69.6); capped by no public Terminal-Bench number.
- **Reasoning: 86/100.** Frontier reasoning implied; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 95/100.** True native omnimodal (text/image/audio/video with 1hr continuous AV) — among the broadest coverage.
- **Coding: 86/100.** Coding gains claimed; no public SWE-bench number found to push higher.
- **Cost efficiency: 75/100.** Cloud-hosted API (no open weights); competitive but not free.
- **Overall Score: 91/100.** Mean of the five non-cost dims (87+86+99+95+86)/5 = 90.6 → 91. Best-fit: broadest-coverage native omni model with strong agentic AV, gated by thin public coding/reasoning disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Baijiahao, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Qwen3.8-Omni-Flash — Baidu Baike](https://baike.baidu.com/item/Qwen3.8-Omni-Flash/69084226)
  - [Qwen3.8-Omni-Flash release (Baijiahao)](https://baijiahao.baidu.com/s?id=1876649304677547773)
  - [Qwen3.8-Omni-Flash AV gains (Baijiahao)](https://baijiahao.baidu.com/s?id=1876639054345758872)
  - [Qwen3.8-Omni-Flash (Zhihu)](https://zhuanlan.zhihu.com/p/2084655690472224326)
