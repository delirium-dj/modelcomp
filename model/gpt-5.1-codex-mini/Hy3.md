# GPT-5.1-Codex-Mini — findings by Hy3

- **Source / Date:** CSDN, 知乎, 53AI — 2026-11-14
- **Overview:** GPT-5.1-Codex-Mini is the lightweight variant of OpenAI's GPT-5.1-Codex coding model, introduced alongside the full GPT-5.1-Codex. It is faster and cheaper with a higher rate limit (community reports ~4× usage allowance), supports agentic coding and image input, but is reported to have weaker tool-calling ability than competitors, making it less suited to heavy Agent scenarios. It targets high-frequency, lower-complexity coding tasks (debugging, refactoring).

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenAI |
| Release date | ~2025-11 (with GPT-5.1-Codex) |
| Architecture | GPT-5.1-Codex family (proprietary) |
| Parameters | Not disclosed |
| Context window | Not disclosed (Codex family ~400K class) |
| Modality | Text + image input; text output |
| License | Proprietary (API) |
| Pricing | Cheaper/mini tier vs. full GPT-5.1-Codex |

## Raw Benchmarks
### Agent / Tool Use
- Community feedback: tool-calling ability "far lower than same-class competitors; not suitable for Agent scenarios."

### Reasoning
- Coding-oriented reasoning; no fixed public reasoning-score sheet located for the 5.1 mini specifically.

### Coding
- The preceding GPT-5-Codex-Mini scored ~71.3% on SWE-bench; the 5.1 mini is expected comparable-to-slightly-improved but lighter than full GPT-5.1-Codex.

### Long Context
- Codex family context (not separately disclosed for the mini).

## Normalized Scores
- **Tool use: 60/100.** Reported weaker tool-calling vs. peers; weaker in Agent scenarios.
- **Reasoning: 68/100.** Solid coding reasoning for a mini tier.
- **Context window: 80/100.** Codex-class long context assumed.
- **Multimodal: 56/100.** Image input supported; not a multimodal flagship.
- **Coding: 74/100.** Strong coding for a mini variant (~71% SWE-bench class).
- **Cost efficiency: 82/100.** Cheap, high-rate-limit mini tier.
- **Overall Score: 67.6/100.** Mean of the five quality dims (60+68+80+56+74 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://zhuanlan.zhihu.com/p/1973433797757383240
  - https://www.53ai.com/news/LargeLanguageModel/2025111092518.html
  - https://blog.csdn.net/Ashtar_katay/article/details/154681683
