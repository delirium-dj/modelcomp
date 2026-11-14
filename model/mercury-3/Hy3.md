# Mercury 3 — findings by Hy3

- **Source / Date:** Inception Labs (Stefano Ermon, X), 百度百家号, CSDN, 知乎 — 2026-11-14
- **Overview:** Mercury 3 is Inception Labs' third-generation large language model, released 2026-10-19/20, built on a **diffusion** architecture rather than the dominant autoregressive paradigm. The company claims it is "the smartest diffusion LLM released to date," with quality surpassing GPT-6 Luna and Claude Haiku 5.5, generation speed of ~1,000+ tokens/sec, a 1M-token context, and input pricing of $0.10 per 1M tokens.
- ⚠️ **Verification caveat:** At release, independent evaluator Artificial Analysis listed **no quality score** for Mercury 3 (the "quality" column was empty; CSDN coverage noted "third-party scores zero"). The capability claims above are vendor assertions and were not independently benchmarked at the time of writing. Scores below are a conservative estimate pending verified public benchmarks.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Inception Labs |
| Release date | 2026-10-19/20 |
| Architecture | Diffusion LLM (non-autoregressive) |
| Parameters | Not disclosed |
| Context window | 1M tokens (claimed) |
| Modality | Text (claimed) |
| License | Proprietary (API) |
| Pricing | ~$0.10 / 1M input tokens (claimed) |

## Raw Benchmarks
### Agent / Tool Use
- No verified public agentic/tool-use benchmark at release.

### Reasoning
- Vendor claim: quality surpasses GPT-6 Luna and Claude Haiku 5.5 — unverified by independent eval.

### Coding
- No verified public coding benchmark at release.

### Long Context
- 1M-token context claimed; not independently benchmarked.

## Normalized Scores
- **Tool use: 62/100.** No verified tool-use benchmark; estimated modest-to-moderate.
- **Reasoning: 66/100.** Vendor claims frontier-level; treated as unverified, estimated moderate.
- **Context window: 86/100.** 1M context is a claimed headline strength.
- **Multimodal: 40/100.** Text-only (no modality claim).
- **Coding: 62/100.** No verified coding benchmark; estimated moderate.
- **Cost efficiency: 88/100.** Claimed $0.10/1M input is very cheap; diffusion speed ~1,000 tok/s.
- **Overall Score: 63.2/100.** Mean of the five quality dims (62+66+86+40+62 = 316 / 5 = 63.2). Conservative estimate pending verified benchmarks.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1879579269048146504&wfr=spider&for=pc
  - https://blog.csdn.net/summerliyang/article/details/170562270
  - https://cloud.tencent.com/developer/article/2504972
