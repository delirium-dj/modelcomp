# Qwen3.5-35B-A3B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Qwen3.5-35B-A3B is an Alibaba Tongyi-lab open-source sparse-MoE model: 35B total parameters with only 3B active per token, making it extremely cheap to serve while retaining strong agentic coding behavior. It has been adapted to multiple domestic AI accelerators (T-Head/平头哥, Huawei, Hygon) and can plug into agent stacks such as OpenClaw and Claude Code. An FP8 variant is ~37.5 GB across 14 safetensors shards, runnable on modest hardware.

## Model card
| Field | Value |
|---|---|
| Vendor | Alibaba Tongyi Lab |
| Release | 2026 (Qwen 3.5 line) |
| Architecture | Sparse MoE, 35B total / 3B active |
| Modalities | Text (code) |
| Deployment | Open weights; adapted to T-Head/Huawei/Hygon; FP8 ~37.5GB |
| Positioning | Agentic coding, cost-efficient serving |

## Raw benchmarks
- **Agent / Tool use:** Explicit agentic-coding capability; integrates with OpenClaw and Claude Code workflows.
- **Reasoning:** Mid-tier for its size class; no flagship reasoning-leaderboard number found.
- **Coding:** Strong agentic coding for a 3B-active model; competes with much larger dense models on tool-driven dev tasks.
- **Long context:** Not explicitly specified in reviewed sources; treated as unconfirmed (Qwen lines typically offer long context, but no figure verified here).

## Normalized scores
- **Tool use: 80/100.** Agentic-coding orientation with ecosystem integration.
- **Reasoning: 76/100.** 3B-active config caps hard-reasoning headroom.
- **Context window: 80/100.** Long-context expected from Qwen line but not verified for this build.
- **Multimodal: 66/100.** Text/code-focused; no multimodal claims found.
- **Coding: 82/100.** Strong agentic coding relative to active-parameter budget.
- **Cost efficiency: 90/100.** Tiny 3B-active footprint; open weights; multi-accelerator support.
- **Overall Score: 76.8/100.** Mean of the five quality dims (80+76+80+66+82 = 384 / 5 = 76.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.6-35B-A3B/67633254
  - https://blog.csdn.net/gitblog_00075/article/details/136959439
  - https://blog.csdn.net/u010026928/article/details/158582591
  - https://zhuanlan.zhihu.com/p/2026276920799576820
  - https://wenku.csdn.net/answer/349u5nhzj970
