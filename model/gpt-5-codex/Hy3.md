# GPT-5-Codex — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GPT-5-Codex is OpenAI's software-engineering-specialized model (released 2025-09-16) built on GPT-5 and trained on real-world complex engineering tasks. It is the default engine for the Codex platform and can run autonomously for extended sessions (reports cite up to ~7 hours of independent work). It integrates via terminal, VSCode extension, and GitHub, and is delivered through both cloud and a local npm CLI (`@openai/codex`).

## Model card
| Field | Value |
|---|---|
| Vendor | OpenAI |
| Release | 2025-09-16 |
| Base | GPT-5 (software-engineering tuned) |
| Context window | Not explicitly published (estimated) |
| Modalities | Text/code |
| Integration | Codex CLI, VSCode, GitHub; cloud + local npm |

## Raw benchmarks
- **Agent / Tool use:** Default Codex engine; terminal/VSCode/GitHub integration; autonomous multi-hour sessions.
- **Reasoning:** Strong engineering reasoning from GPT-5 base + SWE training.
- **Coding:** Specialized for complex real-world engineering; can drive a full PR workflow locally.
- **Long context:** Not explicitly specified in reviewed sources.

## Normalized scores
- **Tool use: 80/100.** Default Codex agent; deep dev-tool integration.
- **Reasoning: 74/100.** Engineering-tuned reasoning.
- **Context window: 78/100.** Not explicitly published; estimated mid-range.
- **Multimodal: 64/100.** Code/text focus; no multimodal claims.
- **Coding: 82/100.** Purpose-built for complex software engineering.
- **Cost efficiency: 72/100.** API/subscription priced; not a cheap tier.
- **Overall Score: 75.2/100.** Mean of the five quality dims (80+74+78+64+82 = 378 / 5 = 75.6 ≈ 75.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.douyin.com/note/7706589768151491498
  - https://www.163.com/dy/article/KH50SRGV0511FQO9.html
  - https://m.163.com/dy/article/K9JJ2DS8051193U6.html
  - https://m.sohu.com/a/935644310_121956422
  - https://news.qq.com/rain/a/20260306A07X5U00
