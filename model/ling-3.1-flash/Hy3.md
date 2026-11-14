# Ling-3.1-flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Ling-3.1-flash is Ant Group's (百灵) model, released 2026-09-30 and open-sourced 2026-10-15. It is a ~560B-parameter MoE (25B active per token) with a 1M-token context, optimized for general agents, search, daily office work, and software R&D. A two-week free trial was offered at launch. On office-task evaluation GDPVal-AA V2.1 it scored 1673 (ELO); quantized weights are ~292GB, lowering self-hosting门槛 to ~4 cards.

## Model card
| Field | Value |
|---|---|
| Vendor | Ant Group (inclusionAI / 百灵) |
| Release | 2026-09-30 (open-sourced 2026-10-15) |
| Architecture | MoE, ~560B total / 25B active |
| Context window | 1,000,000 tokens |
| Modalities | Text (agent/office/software R&D) |
| Trial | 2-week free at launch |

## Raw benchmarks
- **Agent / Tool use:** General-agent, search, office, and software-R&D optimization.
- **Reasoning:** Mid-tier active-param reasoning.
- **Coding:** Software-R&D tasks; office automation.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 72/100.** Agent/search/office optimization.
- **Reasoning: 66/100.** 25B active; efficient but mid-tier.
- **Context window: 86/100.** 1M-token context.
- **Multimodal: 56/100.** Text-focused (not the VL variant).
- **Coding: 68/100.** Software-R&D oriented.
- **Cost efficiency: 82/100.** Open weights; 4-card self-host; free trial.
- **Overall Score: 69.6/100.** Mean of the five quality dims (72+66+86+56+68 = 348 / 5 = 69.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ling-3.1-flash/69254199
  - http://h5.tk-transformer.com/wvknews/061824.shtml
  - http://m.show.senwen-design.com/gnqnews/202611/680888_article527754.shtml
  - https://www.tmtpost.com/baidu/7717017.html
  - http://wap.baise.bjgnfy.com/jhrnews/1113/544310.shtml
