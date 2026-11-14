# MAI-Thinking-1 — findings by Hy3

- **Source / Date:** 百度百科, 知乎, CSDN, 智源社区 (BAAI), 奇绩创坛, 腾讯云 — 2026-11-14
- **Overview:** MAI-Thinking-1 is Microsoft's first advanced reasoning model, announced at Build 2026 on 2026-06-03. It is a sparse MoE with ~35B active parameters over a ~1T total, uses a no-distillation ("hill-climbing") training approach, and is positioned as a mid-size reasoning-focused model. Context window is reported as 128K (some sources cite 256K).

## Model Card
| Field | Value |
| --- | --- |
| Provider | Microsoft (MAI) |
| Release date | 2026-06-03 (Build 2026) |
| Architecture | Sparse MoE, ~35B active / ~1T total (one source: 962B total / 34.7B active, 78 layers, 512 experts, 8 active) |
| Context window | 128K (some sources 256K) |
| Modality | Text |
| Training | No-distillation RL / pure RL self-evolution |
| License | Not open-weight (research/production bound) |
| Pricing | Not publicly listed |

## Raw Benchmarks
### Agent / Tool Use
- Not separately benchmarked in launch coverage.

### Reasoning
- AIME: reported up to 97% (pure-RL self-evolution report)
- SWE-Bench Pro: ~52.8–53% (tied with Opus 4.6 per some coverage)

### Coding
- SWE-Bench Pro ~52.8–53% indicates competent software-engineering reasoning.

### Long Context
- 128K–256K context window.

## Normalized Scores
- **Tool use: 66/100.** No dedicated public agentic benchmark; assumed moderate for a reasoning model.
- **Reasoning: 80/100.** Very strong math (AIME up to 97%) and solid SWE-Bench Pro (~53%); no-distillation training is a differentiator.
- **Context window: 74/100.** 128K–256K is competitive but not class-leading.
- **Multimodal: 46/100.** Text-only.
- **Coding: 72/100.** SWE-Bench Pro ~53% is respectable for a mid-size model.
- **Cost efficiency: 65/100.** Not open-weight and no public pricing; serving cost unknown but likely API-bound.
- **Overall Score: 67.6/100.** Mean of the five quality dims (66+80+74+46+72 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MAI-Thinking-1/67895198
  - https://zhuanlan.zhihu.com/p/2048161644740719975
  - https://hub.baai.ac.cn/view/55348
  - https://news.miracleplus.com/share_link/134671
