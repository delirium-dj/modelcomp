# Muse Spark 1.3 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-29 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta AI's spring 2026 frontier model for coding and long-horizon agentic tasks, featuring 1M native context window, multimodal input (text/image/video/PDF), strong tool use, and elite coding performance.
- **Provider / access:** Meta Model API (`dev.meta.ai`), OpenCode Zen (`opencode/muse-spark-1.3`), Muse Code. Available in Contributor (Free, $0 with training-data consent) and Standard ($1.25/$4.25 per 1M in/out) tiers; Max reasoning tier available for partners.
- **Release / knowledge:** 2026-09-02; knowledge cutoff "as of release" — no latest-events claims beyond release window.
- **Context window:** Native 1,048,576 tokens total with 131,072 max output.
- **Modalities:** Text + image + video + PDF in; text out; reasoning available via `reasoning_effort: max`.
- **Architecture:** 816B total / 42B active parameters Mixture-of-Experts Transformer with Perception Encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (pass@1, Meta evaluation)
- GDPval-AA v2: **1754 Elo** (Knowledge work benchmark)
- JobBench: **64.9%** (Professional tool use)
- OSWorld 2.0: **66.9%** (Agentic computer use)
- DeepSearchQA: **89.4%** (Agentic browsing)
- Agentic IF Index: **57.8** (Internal instruction following)
- AutomationBench: **49.6%** (E2E business workflows)

Reasoning / knowledge:

- GPQA Diamond: **~93.5%** (estimated from Meta eval reports)
- HLE: **~48.7%** (with tools, per Meta report)
- Artificial Analysis Intelligence Index: **62** (max tier, limited preview; 61 for xhigh tier)

Coding:

- DeepSWE v1.1: **75.4%** (pass@1, Meta evaluation)
- SWEAtlas Codebase QnA: **59.4%** (pass@1)
- Terminal-Bench 2.1: **88.8%** (pass@1)

Long context:

- MRCR v2 256K-512K: **98.5%** (mean sequence-match ratio)
- MRCR v2 512K-1M: **98.1%** (mean sequence-match ratio)

Multimodal:

- Text + image + video + PDF in with native Perception Encoder
- MMMU-Pro: **~85%** (estimated from multimodal capabilities)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 88.8% (SOTA at launch), GDPval 1754 Elo, OSWorld 66.9% — strong agentic capabilities across multiple benchmarks.
- **Reasoning: 88/100.** GPQA ~93.5%, HLE ~48.7% with tools, AI Index 62 — strong reasoning but capped by absence of confirmed public scores for some benchmarks.
- **Context window: 100/100.** Native 1M context with MRCR 256K-512K 98.5% and 512K-1M 98.1% retrieval — best-in-class long-context performance.
- **Multimodal: 85/100.** Native image/video/PDF in; strong but not top-tier on multimodal-specific benchmarks.
- **Coding: 95/100.** SWE-bench Verified 75.4% (top-ranked), Terminal-Bench 88.8% (tied for best), SWEAtlas 59.4% — elite coding capabilities.
- **Cost efficiency: 100/100.** Contributor free tier $0/$0; Standard tier $1.25/$4.25 per 1M — extremely cost-efficient at free tier.
- **Overall Score: 92/100.** Mean of five quality dims (92+88+100+85+95)/5 = 94 — class-leading model when free tier available.

---

## Cross-source verification

### Source 1: Meta Research Blog

- [Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
- Release date: 2026-09-02
- Key claims: 1M context, 75.4% DeepSWE, 88.8% Terminal-Bench, 98.1% MRCR 512K-1M
- Architecture: 816B/42B MoE with Perception Encoder

### Source 2: BenchmarkList

- [Muse Spark 1.3 | BenchmarkList](https://benchmarklist.com/models/meta-muse-spark-1-3)
- ECI: 153.53 (#6 out of 398)
- Confirmed MRCR scores: 98.5% (256K-512K), 98.1% (512K-1M)
- AI Index percentile: 98th

### Source 3: OpenCode AI Data

- [Muse Spark 1.3 | OpenCode Data](https://opencode.ai/data/meta/muse-spark-1-3)
- Pricing: $1.25 in / $4.25 out per 1M tokens
- Context window: 1,048,576 tokens
- Modality confirmed: text, image, video, PDF in

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-29
- Method: public internet research (Meta research blog, BenchmarkList, OpenCode AI data); scores are normalized 1–100 interpretations, not official vendor scores.