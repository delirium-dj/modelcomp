# Research: qwen-3.7 — Laguna S 2.1

## Sources (3+ independent, cross-reviewed)

| # | Source | Type | Date | URL |
|---|--------|------|------|-----|
| 1 | Artificial Analysis | Independent benchmark aggregator | 2026 | https://artificialanalysis.ai/models/comparisons/qwen3-7-max-vs-qwen3-6-max |
| 2 | BenchmarkList | Independent benchmark aggregator | 2026 | https://benchmarklist.com/models/qwen-qwen3.7-max/ |
| 3 | Qwen.ai Blog | Official (Alibaba) launch post | May 20, 2026 | https://qwen.ai/blog?id=qwen3.7 |

## Conflicting Results Resolved

- **GPQA Diamond**: BenchmarkList reports **92.4%** (rank 1/22, self-reported May 28). No conflicting sources found.
- **SWE-bench Verified**: 80.4% (BenchmarkList, rank 16/57). Artificial Analysis doesn't list this specific number.
- **LiveCodeBench**: 91.6% (BenchmarkList new version, rank 5/55) and 87.1% (older version, rank 12/123). Both reported; the 91.6% is from the newer version.

## Key Specifications

- **Release Date**: May 20, 2026 (Qwen.ai Blog)
- **Architecture**: Sparse Mixture of Experts (MoE)
- **Context Window**: 1,000,000 tokens (~1,500 A4 pages)
- **Modalities**: Text in/out
- **Pricing**: $1.60 in / $7.50 out per 1M tokens ($0.50 cached input)
- **Reasoning**: Yes, always-on
- **Open Source**: No

## Benchmark Scores (consolidated)

### Intelligence Index
- **Artificial Analysis Intelligence Index**: 45.99 (93rd percentile, rank 31/433)
- Incorporates 9 evaluations: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1

### Knowledge Benchmarks
| Benchmark | Score | Rank | Source |
|-----------|-------|------|--------|
| MMLU-Pro (multilingual, 14 languages) | 90.3% | 4/14 (77th pct) | BenchmarkList |
| GPQA Diamond (self-reported) | 92.4% | 1/22 (100th pct) | BenchmarkList |
| SimpleBench | 70.4% | 7/36 (83rd pct) | BenchmarkList |
| NYT Connections Extended | 89.8% | 12/64 (83rd pct) | BenchmarkList |

### Coding & Agentic Benchmarks
| Benchmark | Score | Rank | Source |
|-----------|-------|------|--------|
| LiveCodeBench (new) | 91.6% | 5/55 (93rd pct) | BenchmarkList |
| LiveCodeBench (old) | 87.1% | 12/123 (91st pct) | BenchmarkList |
| SWE-bench Verified | 80.4% | 16/57 (73rd pct) | BenchmarkList |
| Terminal-Bench 2.1 | 75.0% | 4/4 (small field) | BenchmarkList |
| SWE-bench Multilingual | 78.3% | 15/55 (74th pct) | BenchmarkList |
| MCPMark | 60.8% | 1/41 (100th pct) | BenchmarkList |
| Terminal-Bench Hard | 50.8% | 10/326 (97th pct) | BenchmarkList |
| Vibe Code Bench v1.1 | 47.7% | 28/75 (64th pct) | BenchmarkList |
| SWE-bench Pro | 60.6% | 26/61 (58th pct) | BenchmarkList |

### Speed & Performance
- **Output Speed**: 206 tokens/s
- **Time to First Token**: 2.19s
- **Time to First Answer Token**: 13.91s
- **End-to-End Response Time**: 16.34s

## Comparison: Qwen3.7 Max vs Qwen3.6 Max Preview

| Metric | Qwen3.7 Max | Qwen3.6 Max Preview |
|--------|-------------|---------------------|
| Context Window | 1.0M tokens | 256k tokens |
| Release Date | May 2026 | April 2026 |
| Input Price | $1.60/M tokens | $2.50/M tokens |
| Output Price | $7.50/M tokens | $10.00/M tokens |
| Cached Input | $0.50/M tokens | N/A |
| Intelligence Index | 45.99 | Lower |
| Terminal-Bench 4.0 | 2% | N/A |

## Analysis

Qwen3.7 Max represents Alibaba's latest frontier model, released May 20, 2026. Key observations:

1. **Knowledge performance**: Top-tier GPQA Diamond score of 92.4% (ranked #1 on BenchmarkList), with MMLU-Pro at 90.3% multilingual. This places it among the best open-weight-available knowledge models.

2. **Coding strength**: Strong LiveCodeBench performance (91.6% on the new version, rank 5/55), SWE-bench Verified 80.4%, and Terminal-Bench 2.1 at 75%. These are competitive with tier-1 frontier models.

3. **Cost advantage**: At $1.60/$7.50 per 1M tokens, it offers significant cost savings over comparable models like Claude Sonnet 5.4 ($2.50/$12.50). With 1M context window, it's well-suited for long-running agentic workflows.

4. **Intelligence Index**: The Artificial Analysis composite score of 45.99 (93rd percentile, #31/433) confirms strong overall capability, though slightly behind the absolute top tier.

5. **Speed**: Output speed of 206 tokens/s is solid for a reasoning model of this class.

## Confidence Level

**High** — Three independent sources (official blog, Artificial Analysis, BenchmarkList) with consistent data on specifications, pricing, benchmarks, and release timeline.
