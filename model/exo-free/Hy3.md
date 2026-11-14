# Exo Free — findings by Hy3

- **Source / Date:** Bilibili (OpenCode stealth-model coverage), Tencent Cloud (exo local-cluster tooling) — 2026-11-14
- **Overview:** Exo Free is referenced as a free / stealth model surfaced within the OpenCode ecosystem (a "new stealth model" analogous to other OpenCode free models such as Big Pickle). Public, independently verifiable benchmark data for it is scarce; it is characterized as a free, low-cost coding/advisor model in the OpenCode model matrix. Scores below are a conservative estimate pending verified public benchmarks.

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenCode ecosystem (stealth/free) |
| Release date | Not officially dated |
| Architecture | Not disclosed |
| Parameters | Not disclosed |
| Context window | Not disclosed (est. 128K class) |
| Modality | Text / code |
| License | Free (OpenCode) |
| Pricing | Free |

## Raw Benchmarks
### Agent / Tool Use
- Coding-agent capable within OpenCode; no public agentic benchmark located.

### Reasoning
- No fixed public reasoning score.

### Coding
- Free coding model in OpenCode's matrix; no public SWE-bench-style score located.

### Long Context
- Not explicitly benchmarked.

## Normalized Scores
- **Tool use: 60/100.** Coding-agent capable; unverified by public benchmark.
- **Reasoning: 54/100.** Modest; unverified.
- **Context window: 60/100.** Assumed standard; not benchmarked.
- **Multimodal: 40/100.** Text/code only.
- **Coding: 66/100.** Coding-focused free model; capable for its class.
- **Cost efficiency: 88/100.** Free to use; extremely cheap.
- **Overall Score: 56.0/100.** Mean of the five quality dims (60+54+60+40+66 = 280 / 5 = 56.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.bilibili.com/video/BV1CfHk6EEf2/
  - https://cloud.tencent.com/developer/article/2638626
