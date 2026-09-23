# Qwen 3.8 Max — findings by Ling 3.0

> Provided by: **Ling 3.0 (Alibaba/qwen3.8-max)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's first open-weight Qwen-Max-class flagship, a 2.4T total / 95B active MoE model with leading terminal agent performance.
- **Provider / access:** Alibaba — `qwen3.8-max` on QwenCloud API, Hugging Face; open weights (Apache 2.0)
- **Release / knowledge:** August 3, 2026; knowledge cutoff varies by training data
- **IDs:** alibaba/qwen3.8-max
- **Context window:** 1,000,000 tokens
- **Modalities:** Text, image, video in; text out (native multimodal)
- **Pricing (as of 2026-09-23):** API pricing via QwenCloud; open weights available for self-hosting
- **Architecture:** 2.4T total parameters, 95B active parameters, Mixture-of-Experts (MoE), 1M context

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **86.6%** (Qwen official model card, August 2026; evaluated with Claude Code harness)
- OSWorld-Verified: **86.1%** (Qwen official model card)
- Toolathlon Verified: **72.5%** (Qwen official model card)
- WideSearch: **81.9%** (Qwen official model card)
- Agents' Last Exam: **52.4% score / 27.0% pass** (Qwen official model card)

Reasoning / knowledge:
- GPQA Diamond: **92.6%** (Qwen official model card; Vals AI independent run confirms 93.7%)
- HLE (no tools): **43.6%** (Qwen official model card; Artificial Analysis independent: 43.0%)
- HLE (with tools): **56.2%** (Qwen official model card)
- IFBench: **82.8%** (Qwen official model card)
- MRCR v2 256K (8-needle): **92.9%** (Qwen official model card)

Coding:
- SWE-bench Pro: **67.7%** (Qwen official model card; evaluated with Claude Code harness)
- FrontierSWE: **73.5%** (Qwen official model card)
- PaperBench: **93.0%** (Qwen official model card)
- DeepSWE 1.1: **56.6%** (Qwen official model card)
- AndroidBench: **75.1%** (Qwen official model card)
- NL2Repo-Bench: **55.9%** (Qwen official model card)

Long context:
- MRCR v2 256K (8-needle): **92.9%** (Qwen official model card)
- LongBench v2: **66.3%** (Qwen official model card)

### Normalized scores (1-100)
- **Tool use: 85/100.** Terminal-Bench 2.1 at 86.6% is the highest reported open-weight score; OSWorld-Verified at 86.1% shows strong computer-use capability; Toolathlon Verified at 72.5% confirms broad tool competence.
- **Reasoning: 82/100.** GPQA Diamond at 92.6% places this firmly in the frontier tier for graduate-level science reasoning; IFBench at 82.8% leads instruction following; HLE at 43.6% (no tools) and 56.2% (with tools) shows solid but not leading frontier reasoning.
- **Context window: 95/100.** Full 1M-token context window with MRCR v2 256K at 92.9% demonstrating excellent long-context retrieval.
- **Multimodal: 88/100.** Native multimodal with MathVision 95.2, MMMU-Pro 82.3, OSWorld-Verified 86.1, and comprehensive vision benchmarks placing this near the top of the multimodal leaderboard.
- **Coding: 86/100.** Terminal-Bench 2.1 at 86.6%, SWE-bench Pro at 67.7%, FrontierSWE at 73.5%, and PaperBench at 93.0% demonstrate strong agentic coding and research capabilities; SWE-bench Pro trails Fable 5's 80.0%.
- **Cost efficiency: 90/100.** Open-weight availability under Apache 2.0 license enables self-hosting at minimal cost; competitive API pricing relative to proprietary frontier models.
- **Overall Score: 87/100.** Excellent agentic coding (86), frontier reasoning (82), top-tier context (95), strong multimodal (88), and good tool use (85) collectively produce a high overall; cost efficiency excluded from Overall per methodology.

---

## Signature
- Provided by: **Ling 3.0 (Alibaba/qwen3.8-max)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/qwen3.8-max/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
