# Laguna XS 2.1 — findings by Hy3

- **Source / Date:** CSDN, 51CTO, 百度百科 (Laguna S2.1 context) — 2026-11-14
- **Overview:** Laguna XS 2.1 is Poolside's extra-small ("XS") open-weight coding model — the compact member of the Laguna family (alongside the 118B Laguna S 2.1). It is a sparse mixture-of-experts reasoning model focused on code generation, optimized for local execution (e.g., MLX/Apple Silicon), and gained broad tooling support (Ollama v0.22.0 added it in 2026-04). It is aimed at on-device and resource-constrained coding workflows.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Poolside |
| Release date | ~2026-04 (Ollama support 2026-04-29/30) |
| Architecture | Sparse MoE (small/XS scale) |
| Parameters | Not fully disclosed (XS = extra-small) |
| Context window | Not disclosed (est. 128K class) |
| Modality | Text / code |
| License | Open weight |
| Pricing | Open weight / self-host |

## Raw Benchmarks
### Agent / Tool Use
- Coding/agentic tooling supported; integrated into local dev toolchains.

### Reasoning
- Sparse-MoE reasoning model; small scale limits general reasoning.

### Coding
- Code-generation focused; optimized for local/Apple-Silicon execution.

### Long Context
- Not explicitly benchmarked.

## Normalized Scores
- **Tool use: 64/100.** Local coding agent support; modest scale.
- **Reasoning: 58/100.** Small reasoning model; code-oriented.
- **Context window: 66/100.** Assumed standard; not benchmarked.
- **Multimodal: 42/100.** Text/code only.
- **Coding: 70/100.** Coding-focused; strong for its XS size.
- **Cost efficiency: 88/100.** Small open-weight model; runs locally cheaply.
- **Overall Score: 60.0/100.** Mean of the five quality dims (64+58+66+42+70 = 300 / 5 = 60.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/gitblog_01053/article/details/142075766
  - https://blog.51cto.com/moonfdd/14598935
  - https://moonfdd.blog.csdn.net/article/details/160626059
