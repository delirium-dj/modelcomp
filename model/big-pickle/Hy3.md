# Big Pickle — findings by Hy3

- **Source / Date:** 百度文库, CSDN, 知乎 (OpenCode model guide) — 2026-11-14
- **Overview:** Big Pickle is a lightweight, general-purpose coding model in the OpenCode ecosystem, fine-tuned from open base models such as Llama or Mistral. It is positioned as OpenCode's default "programming co-pilot," emphasizing stability, response speed and low resource usage for everyday code generation, comprehension and analysis. It appears as a free model in OpenCode's comparison roundups (passing some benchmark rounds alongside ling, laguna and longcat).

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenCode ecosystem |
| Release date | Not officially dated |
| Architecture | Fine-tuned from Llama/Mistral open models |
| Parameters | Not disclosed |
| Context window | Not disclosed (est. 128K class) |
| Modality | Text / code |
| License | Open (within OpenCode ecosystem) |
| Pricing | Free (OpenCode default model) |

## Raw Benchmarks
### Agent / Tool Use
- Coding-agent capable; default OpenCode assistant.

### Reasoning
- Lightweight reasoning; no fixed public score.

### Coding
- Day-to-day coding tasks; passed portions of free-model benchmark roundups.

### Long Context
- Not explicitly benchmarked.

## Normalized Scores
- **Tool use: 62/100.** Coding-agent capable as default OpenCode model.
- **Reasoning: 55/100.** Lightweight; modest reasoning.
- **Context window: 62/100.** Assumed standard; not benchmarked.
- **Multimodal: 40/100.** Text/code only.
- **Coding: 68/100.** Coding-focused; solid for a lightweight model.
- **Cost efficiency: 88/100.** Free, low-resource coding model.
- **Overall Score: 57.4/100.** Mean of the five quality dims (62+55+62+40+68 = 287 / 5 = 57.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://wenku.baidu.com/view/8bf259ccd0d8d15abe23482fb4daa58da1111c6d.html
  - https://blog.csdn.net/liuyunshengsir/article/details/158650643
  - https://zhuanlan.zhihu.com/p/2029131814762034368
