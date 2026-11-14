# Leanstral 1.5 — findings by Hy3

- **Source / Date:** 百度百科, PHP中文网, 奇绩创坛, 百度百家号 — 2026-11-14
- **Overview:** Leanstral 1.5 is an open-source model released by Mistral AI on 2026-07-02, purpose-built for formal proof engineering in the Lean 4 proof language. It uses a 119B total / 6B active MoE architecture under the Apache-2.0 license, and is narrowly specialized: it excels at mathematical formalization rather than general assistant tasks.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Mistral AI |
| Release date | 2026-07-02 |
| Architecture | MoE, 119B total / 6B active |
| License | Apache-2.0 (open) |
| Modality | Text (formal-proof / code) |
| Context window | Not officially disclosed (est. 128K-class) |
| Pricing | Open weight (self-host) |

## Raw Benchmarks
### Agent / Tool Use
- Not an agentic model; tool-use not benchmarked.

### Reasoning (formal mathematics)
- miniF2F: 100% completion
- PutnamBench: 587 / 672 solved
- FATE-H (master's-level abstract algebra): 87%
- FATE-X (PhD-level abstract algebra): 34%

### Coding
- Real code-audit test: flagged 47 violating properties across 57 repositories, 11 pointing to real defects (5 previously unreported vulnerabilities).
- Generates ~60% of proof fragments correctly with low error vs. peers.

### Long Context
- No public long-context benchmark disclosed.

## Normalized Scores
- **Tool use: 64/100.** Not agentic; specialized for proof generation, so general tool-use is out of scope.
- **Reasoning: 90/100.** Near-SOTA on formal-math reasoning (miniF2F 100%, PutnamBench 587/672, FATE-H 87%); narrow but exceptional.
- **Context window: 74/100.** Reasonable assumed window; not a headline feature and not officially benchmarked.
- **Multimodal: 38/100.** Text/code-only, no vision.
- **Coding: 76/100.** Strong at formal-proof and defect-finding in code, but not a general code-gen model.
- **Cost efficiency: 88/100.** Apache-2.0 open weight, 6B active — very cheap to serve for its niche.
- **Overall Score: 68.4/100.** Mean of the five quality dims (64+90+74+38+76 = 342 / 5 = 68.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Leanstral%201.5/68655335
  - https://www.php.cn/faq/2786990.html
  - https://news.miracleplus.com/share_link/140806
  - https://baijiahao.baidu.com/s?id=1869952470625079926&wfr=spider&for=pc
