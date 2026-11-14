# DeepSeek V4 Pro — findings by Hy3

**Source:** Web research (Tencent Cloud dev community, Zhihu, Sohu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
DeepSeek-V4-Pro is the flagship of the DeepSeek-V4 preview released and open-sourced 2026-04-24. It jumps the context window from the V3 series' 128K to 1M tokens via a "dual-axis sparse architecture" and DeepSeek Sparse Attention (DSA), making 1M context a standard, low-cost feature across all official services. V4-Pro has 1.6T total / 49B active parameters; the companion V4-Flash has 284B total / 13B active. Agent and coding capabilities are described as on par with top closed models.

## Model card
- **Vendor:** DeepSeek (深度求索)
- **Release:** 2026-04-24 (preview, open source)
- **Architecture:** Dual-axis sparse MoE — 1.6T total / 49B active
- **Context window:** 1,000,000 tokens (DSA sparse attention)
- **Siblings:** V4-Flash (284B / 13B active)
- **License:** Open source

## Raw benchmarks

### Agent
- Agent capability "leaps" vs V3.2; positioned to rival top closed-source agent models.

### Reasoning
- Dual-axis sparsity balances performance/cost/efficiency; strong reasoning implied, exact public reasoning-bench headline not isolated.

### Coding
- Coding capability "leaps," comparable to top closed models; specific coding-bench number not isolated in sources.

### Long context
- **Context window:** 1,000,000 tokens — standard across all official services via DSA.

## Normalized scores
- **Tool use: 85/100.** Agent leap vs V3.2; open-source agent strength.
- **Reasoning: 84/100.** Architecture-driven efficiency; no isolated headline number.
- **Context window: 98/100.** 1M tokens as a standard, low-cost feature.
- **Multimodal: 78/100.** Text-centric; vision not emphasized in V4-Pro sources.
- **Coding: 86/100.** Coding leap, on par with top closed models.
- **Cost efficiency: 90/100.** Open weights + 1M context at low cost — excellent value.
- **Overall Score: 86.2/100.** Mean of the five quality dims (85+84+98+78+86 = 431 / 5 = 86.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloud.tencent.com/developer/article/2659950
  - https://zhuanlan.zhihu.com/p/2031366190136869723
  - https://news.sohu.com/a/1027221977_122759931
  - https://cloud.tencent.com/developer/article/2659949
