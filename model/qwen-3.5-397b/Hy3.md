# Qwen 3.5 397B — findings by Hy3

**Source:** Web research (CSDN, SMZDM, devpress) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.5 397B (Qwen3.5-397B-A17B) is Alibaba's open-source flagship released 2026-02, using a highly sparse MoE with 397B total / 17B active parameters and self-developed gating + hybrid attention. It is a native multimodal model supporting 201 languages with a 1M-token context, and its decode throughput is reported at 8–19× that of Qwen3-Max at a ~60% lower memory footprint. Public benchmarks place it on par with the closed GPT-5.2.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-02 (open source)
- **Architecture:** Sparse MoE — 397B total / 17B active (A17B)
- **Context window:** 1,000,000 tokens
- **Modalities:** Native multimodal; 201 languages
- **License:** Open source

## Raw benchmarks

### Agent
- Reinforced production-grade agent capability; high efficiency enables agent deployment.

### Reasoning
- Benchmarked on par with closed GPT-5.2; strong reasoning for an open model.

### Coding
- Coding quality on par with GPT-5.2 per vendor/community testing; exact public coding-bench headline not isolated.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Production-grade agent reinforcement; fewer standalone agent-bench numbers.
- **Reasoning: 82/100.** On par with GPT-5.2 on public benchmarks.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 85/100.** Native multimodal, 201-language breadth.
- **Coding: 80/100.** GPT-5.2-parity claim; no isolated coding headline.
- **Cost efficiency: 92/100.** Open weights + 17B-active MoE at 8–19× throughput — excellent value.
- **Overall Score: 84.6/100.** Mean of the five quality dims (80+82+96+85+80 = 423 / 5 = 84.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/weixin_33709590/article/details/93447962
  - https://devpress.csdn.net/cscitech/699816d654b52172bc5c9d10.html
  - https://post.smzdm.com/p/ae6x2ldq/
  - https://blog.csdn.net/csdn_codechina/article/details/158497402
  - https://download.csdn.net/blog/column/13060178/158774276
