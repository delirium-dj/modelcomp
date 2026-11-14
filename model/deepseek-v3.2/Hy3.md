# DeepSeek V3.2 — findings by Hy3

- **Source / Date:** 百度百科, DeepSeek API Docs, 腾讯云开发者社区, 百度百家号 — 2026-11-14
- **Overview:** DeepSeek V3.2 is DeepSeek's large model released in two waves: an experimental V3.2-Exp (2025-09-29, building on V3.1-Terminus) and the full V3.2 (widely covered 2026-02-27). It is positioned as an open-source model whose Agent generalization capability approaches or locally surpasses top closed models, with strong tool-use and coding performance. It includes a daily-reasoning variant (V3.2-Speciale).

## Model Card
| Field | Value |
| --- | --- |
| Provider | DeepSeek (深度求索) |
| Release date | 2025-09 (V3.2-Exp); full V3.2 ~2026-02 |
| Architecture | MoE (evolving toward next-gen architecture) |
| Parameters | Not fully disclosed |
| Context window | Not officially disclosed (est. 128K–256K) |
| Modality | Text |
| License | Open weight |
| Pricing | Open weight / API |

## Raw Benchmarks
### Agent / Tool Use
- MCP-Universe and Tool-Decathlon: performance approaching closed models
- τ2-Bench and similar agentic evals: strong open-source showing

### Reasoning
- General reasoning solid; specific MMLU/GPQA not highlighted in launch coverage.

### Coding
- SWE-Verified: 73.1% (far surpassing existing open-source models)
- Terminal Bench 2.0: 46.4%

### Long Context
- No explicit long-context benchmark disclosed.

## Normalized Scores
- **Tool use: 74/100.** Strong agentic/tool-use (MCP-Universe, Tool-Decathlon near closed-model levels).
- **Reasoning: 68/100.** Solid general reasoning.
- **Context window: 70/100.** Agentic-class window; not officially benchmarked.
- **Multimodal: 44/100.** Text-only.
- **Coding: 78/100.** SWE-Verified 73.1% is a strong open-source result.
- **Cost efficiency: 86/100.** Open-weight; cheap to self-host.
- **Overall Score: 66.8/100.** Mean of the five quality dims (74+68+70+44+78 = 334 / 5 = 66.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/DeepSeek-V3.2/66804288
  - https://api-docs.deepseek.com/news/news250929/
  - https://cloud.tencent.com/developer/article/2631810
  - https://baijiahao.baidu.com/s?id=1850358762021162903&wfr=spider&for=pc
