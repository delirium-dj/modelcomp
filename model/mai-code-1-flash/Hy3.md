# MAI-Code-1-Flash — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 知乎, 雪球 — 2026-11-14
- **Overview:** MAI-Code-1-Flash is Microsoft's code-generation model, first shown at Build 2026 (2026-06-03). It is an efficiency-focused 5B-parameter model fine-tuned for GitHub, integrated into GitHub Copilot and Visual Studio Code. The upgraded MAI-Code-1.1-Flash (2026-08-12) adds native vision (understands/analyzes images) and improves Terminal-Bench 2.1 performance by 22%; it is also planned for Windows 11 devices.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Microsoft (MAI) |
| Release date | 2026-06-03 (Build 2026); 1.1 Flash 2026-08-12 |
| Architecture | 5B-parameter code model |
| Context window | Not disclosed (est. 128K class) |
| Modality | Text (1.1 Flash adds image input) |
| License | Proprietary (integrated into Copilot/VS Code) |
| Pricing | Bundled with GitHub Copilot |

## Raw Benchmarks
### Agent / Tool Use
- Integrated into GitHub Copilot agentic workflows; tool/agent coding in editor.

### Reasoning
- 5B efficiency model; reasoning oriented to code tasks.

### Coding
- Trained in GitHub Copilot production environment (not just evaluated); Terminal-Bench 2.1 +22% in 1.1 Flash.

### Long Context
- No explicit benchmark disclosed.

## Normalized Scores
- **Tool use: 68/100.** Strong in-editor agentic coding via Copilot; tool use solid for its size.
- **Reasoning: 56/100.** 5B efficiency model; code-oriented reasoning, not general.
- **Context window: 64/100.** Assumed standard; not benchmarked.
- **Multimodal: 54/100.** 1.1 Flash adds vision; base is text.
- **Coding: 70/100.** GitHub-tuned code generation; Terminal-Bench gains.
- **Cost efficiency: 80/100.** 5B efficient model; low token cost in Copilot.
- **Overall Score: 62.4/100.** Mean of the five quality dims (68+56+64+54+70 = 312 / 5 = 62.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MAI-Code-1-Flash/67919460
  - https://baike.baidu.com/item/MAI-Code-1.1-Flash/68513429
  - https://zhuanlan.zhihu.com/p/2045418976780580522
