# Omen Alpha — findings by Hy3

- **Source / Date:** omenalpha.io (official site), web search — 2026-11-14
- **Overview:** Omen Alpha is a low-cost reasoning model distributed under the model ID `omen-alpha` via omenalpha.io. It is widely reported in community coverage as the "2.0 successor" to an earlier "Ox Alpha" model, but that lineage relationship has **not been officially confirmed**. Public, independently verified benchmark numbers are sparse at the time of writing; the assessment below is a conservative estimate aligned to the queue's relative ranking and should be treated as low-confidence.

> ⚠️ Low confidence: only an official landing page and secondary "successor to Ox Alpha" reporting were found. No primary benchmark sheets (MMLU/GPQA/SWE-bench etc.) were verifiable.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Omen (omenalpha.io) |
| Release date | Not officially confirmed |
| Architecture | Not disclosed |
| Parameters | Not disclosed |
| Context window | Not disclosed |
| Modality | Text (assumed) |
| License | Proprietary hosted (assumed) |
| Pricing | Positioned as "low-cost" |

## Raw Benchmarks
### Agent / Tool Use
- No verified public agentic benchmark located.

### Reasoning
- Marketed as a reasoning model; no verified numeric reasoning benchmark found.

### Coding
- No verified public coding benchmark located.

### Long Context
- No public context-window benchmark located.

## Normalized Scores
- **Tool use: 68/100.** Assumed competent for a reasoning model; unverified.
- **Reasoning: 74/100.** Positioned as a reasoning model; no public score to confirm.
- **Context window: 68/100.** Unknown; assumed standard.
- **Multimodal: 50/100.** No modality information found.
- **Coding: 68/100.** No verified coding benchmark.
- **Cost efficiency: 85/100.** Explicitly positioned as low-cost, which is its main advertised edge.
- **Overall Score: 65.6/100.** Mean of the five quality dims (68+74+68+50+68 = 328 / 5 = 65.6). Conservative estimate pending verified benchmarks.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://omenalpha.io/
