# MAI-Code-1.1-Flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** MAI-Code-1.1-Flash is Microsoft's upgraded coding model for GitHub Copilot, released 2026-08-12. It adds native vision (image understanding/analysis) and improves code generation/efficiency, with Terminal-Bench 2.1 +22% and .NET tasks +15% over its predecessor. Engineering optimizations yield +25% token efficiency and +25% streaming speed; production metrics show +4% code survival and +9% user return. Pricing dropped to 1/4 of the prior generation. It integrates across VS Code, Visual Studio, JetBrains IDEs, Copilot CLI, and GitHub Mobile (the original MAI-Code-1-Flash, a 5B-param model, was retired 2026-09-10).

## Model card
| Field | Value |
|---|---|
| Vendor | Microsoft |
| Release | 2026-08-12 |
| Domain | GitHub Copilot coding agent |
| Modalities | Text + native vision |
| Pricing | 1/4 of predecessor |
| Integration | VS Code, Visual Studio, JetBrains, Copilot CLI, GitHub Mobile |

## Raw benchmarks
- **Agent / Tool use:** Deep GitHub/Copilot/VS/.NET ecosystem integration.
- **Reasoning:** Efficiency-focused; not a raw-reasoning flagship.
- **Coding:** Terminal-Bench 2.1 +22%, .NET +15%; strong coding-agent capability.
- **Long context:** Not explicitly specified in reviewed sources.

## Normalized scores
- **Tool use: 76/100.** Deep Copilot/IDE/CLI integration.
- **Reasoning: 68/100.** Efficiency-oriented; modest reasoning tier.
- **Context window: 72/100.** Not explicitly published; estimated mid-range.
- **Multimodal: 72/100.** Native vision added in 1.1.
- **Coding: 78/100.** Terminal-Bench +22%, .NET +15%.
- **Cost efficiency: 88/100.** 1/4 predecessor price; +25% token efficiency.
- **Overall Score: 73.2/100.** Mean of the five quality dims (76+68+72+72+78 = 366 / 5 = 73.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MAI-Code-1.1-Flash/68513429
  - https://baijiahao.baidu.com/s?id=1873839438400564724&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/2073050226500309546
  - https://blog.csdn.net/Leinwin/article/details/163854922
  - https://baike.baidu.com/item/MAI-Code-1-Flash/67919460
