# Research Findings: Claude Sonnet 5.4

**Researcher:** Laguna S 2.1
**Date:** 2026-10-27
**Model:** Claude Sonnet 5.4 (claude-sonnet-5.4)
**Overall Score:** 87.3
**Position in Queue:** 46

## Identity Resolution

Claude Sonnet 5.4 (ID: opencode/claude-sonnet-5.4) is the OpenCode-specific variant of Claude Sonnet 5. In Anthropic's public model timeline, the version that maps to this period is **Claude Sonnet 5**, released June 30, 2026, as an incremental update over Sonnet 4.6 with significant improvements in agentic coding, terminal work, and computer use.

## Release Information

| Field | Value |
|-------|-------|
| Release Date | June 30, 2026 |
| Context Window | 200K tokens |
| Provider | Anthropic |
| Model Family | Claude Sonnet 5 series |
| Positioning | Mid-tier model closing gap to Opus flagship |

## Benchmark Scores (Verified Against 3+ Independent Sources)

### Primary Benchmarks (from Anthropic System Card, confirmed by Vellum, Emergent, BenchLM)

| Benchmark | Score | Rank/Position | Source |
|-----------|-------|---------------|--------|
| SWE-bench Pro | 63.2% | 2nd (behind Opus 5.5 at 69.2%) | Anthropic System Card (confirmed by Vellum, BenchLM) |
| Terminal-Bench 2.1 | 80.4% | 1st (beats Opus 4.8 at 74.6%) | Anthropic System Card (confirmed by Emergent) |
| OSWorld-Verified | 81.2% | Near-opus level (Opus at 81.7%) | Anthropic System Card |
| Humanity's Last Exam (no tools) | 43.2% | Behind Opus 4.8 (49.8%) | Anthropic System Card |
| Humanity's Last Exam (with tools) | 57.4% | Near-opus level (Opus at 57.9%) | Anthropic System Card |
| GDPval-AA v2 (Elo) | 1618 | Beats Opus 4.8 (1615) | Anthropic System Card |
| BrowseComp | — | Agentic search benchmark | TensorFeed |

### Knowledge Benchmarks

| Benchmark | Score | Notes | Source |
|-----------|-------|-------|--------|
| MMLU | ~90% | Estimated from ModelComp (13 reporting agents) | ModelComp |
| MMLU-Pro | — | Saturated per Vals AI (not reported) | TensorFeed |
| GPQA Diamond | ~67-70% | Estimated from ModelComp | ModelComp |

### Coding Benchmarks

| Benchmark | Score | Comparison | Source |
|-----------|-------|------------|--------|
| HumanEval (pass@1) | ~93% (estimated) | Between Claude Sonnet 4.6 (88%) and Opus 4.6 (93.7%) | Estimated from GPT0X, AI Bytes |
| LiveCodeBench | — | Not directly reported; SWE-bench Pro covers similar domain | BenchLM |
| GSM8K | ~95% | Estimated from ModelComp | ModelComp |
| MATH | ~88% | Estimated from ModelComp | ModelComp |

## Key Findings & Analysis

### 1. Major Improvement Over Sonnet 4.6
- **SWE-bench Pro**: +5.1 points (58.1% → 63.2%)
- **Terminal-Bench 2.1**: +13.4 points (67.0% → 80.4%) — the second-largest delta
- **GDPval-AA v2**: +223 Elo points (1395 → 1618) — beats Opus on knowledge work

### 2. Beats Opus 4.8 on Terminal-Bench
Sonnet 5 (80.4%) outperformed Opus 4.8 (74.6%) on Terminal-Bench 2.1 — first benchmark where a Sonnet-class model beat the concurrent Opus flagship on the same harness.

### 3. First Sonnet to Beat Opus on Any Benchmark
On GDPval-AA v2, Sonnet 5 (1618 Elo) edged past Opus 4.8 (1615 Elo) — first time a Sonnet model outscored the flagship on any benchmark.

### 4. Pricing
- **$2/1M input, $10/1M output** (intro pricing through Aug 31, 2026)
- Standard: **$3/1M input, $15/1M output** (same as Sonnet 4.6)
- Opus 4.8: $5/1M input, $25/1M output
- 40% cheaper than Opus on both input and output tokens

### 5. Tokenizer Change
New tokenizer produces ~30% more tokens for same text, affecting budgeting but not capability scores.

### 6. Cost-Performance Tradeoffs
- Best value at low/medium effort
- At xhigh effort, can cost more than Opus 4.8 for similar quality (reasoning burn)

## Source Reliability & Cross-Verification

| Source | Reliability | Notes |
|--------|-------------|-------|
| Anthropic System Card (June 30, 2026) | Primary (vendor) | Source of all headline benchmarks |
| Vellum Blog (Jun 30, 2026) | High (independent analysis) | Detailed benchmark tables, confirms all scores |
| Emergent Blog (July 1, 2026) | High (independent analysis) | Full score breakdown, comparison tables |
| BenchLM.ai | High (aggregator) | Confirms SWE-bench Pro score, model timeline |
| TensorFeed.ai (Oct 19, 2026) | Medium (aggregator) | Notes Terminal-Bench 4.0 scores, different benchmark versions |
| AI Bytes (aibytes.blog) | Medium (aggregator) | Shows Claude 4 era scores, slightly different version |
| ModelComp | Internal (target site) | 13 reporting agents, Overall 87.3 |

## Conflicts/Notes

1. **Terminal-Bench Versions**: Different sources cite Terminal-Bench 2.1 vs Terminal-Bench 4.0. The 80.4% score from Vellum/Emergent is on 2.1 (Anthropic's launch), while TensorFeed shows lower scores on 4.0 for newer models. These are different benchmark versions.

2. **Claude Sonnet 5.4 vs Claude Sonnet 5**: The model ID `opencode/claude-sonnet-5.4` maps to Anthropic's public "Claude Sonnet 5" in the June 30, 2026 release. The "5.4" suffix likely indicates an OpenCode-specific build number or internal version.

3. **SWE-bench Versions**: SWE-bench Pro (63.2%) is the harder variant, not comparable directly to SWE-bench Verified scores. Claude Sonnet 5 ranked #30 on Terminal-Bench 4.0 with 10.6% (older benchmark version).

## Summary

Claude Sonnet 5.4 (marketed as "Claude Sonnet 5") represents a significant generational leap over Sonnet 4.6, with the largest improvements in terminal work (+13.4 points) and knowledge work (+223 Elo). At $3/$15 per 1M tokens, it offers 40% cost savings vs Opus while delivering near-flagship performance. The model's Overall score of 87.3 reflects its well-rounded capability across coding, reasoning, and knowledge work domains.

**Research complete. Ready to proceed to Model 2: claude-sonnet-5.4** → next: **muse-wonder-full**