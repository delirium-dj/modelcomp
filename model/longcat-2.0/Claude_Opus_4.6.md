# LongCat 2.0 — findings by Claude Opus 4.6

- Source: Meituan / LongCat 2.0 (`meituan/longcat-2.0`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's massive open-weight MoE model with 1.6T total parameters (~48B active) and a native 1M-token context window. Built on alternative Chinese AI ASIC hardware. Features LongCat Sparse Attention (LSA) and N-gram Embedding. Designed for agentic coding workflows. MIT license.
- **Provider / access:** LongCat API `meituan/longcat-2.0`. Compatible with Claude Code, OpenClaw, Hermes, Kilo Code. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `meituan/longcat-2.0` (no Free ID on Zen)
- **Context window:** 1M tokens (1,048,576). Verified via Meituan documentation. Powered by LongCat Sparse Attention (LSA) — an evolved DeepSeek Sparse Attention with streamlined indexer.
- **Modalities:** Text input/output only. No native image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** $0.30/$1.20 per 1M (LongCat API; cached $0.006). No free tier.
- **Architecture:** 1.6T total parameters, ~33-56B active per token (~48B average). Sparse MoE. 135B N-gram Embedding module. LongCat Sparse Attention (LSA). Trained on 35T tokens using domestic Chinese AI ASICs. MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (LongCat documentation / Hugging Face)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Pro: **59.5%** (Meituan report / Reddit community evaluation)
- SWE-bench Multilingual: **~77.3%** (Meituan report)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- Native 1M context via LongCat Sparse Attention (LSA). No RULER/MRCR retrieval benchmarks publicly reported.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 70.8% is competitive mid-tier. Compatible with major agent frameworks (Claude Code, OpenClaw, Hermes). Capped by lack of BFCL/Tau-bench data and trailing top agentic models by ~10-15%.
- **Reasoning: 55/100.** No published GPQA/HLE/MMLU scores. As a 1.6T MoE model, reasoning capability is likely strong but unverified on standard benchmarks. Capped by complete lack of reasoning benchmark data.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90-95). LSA architecture specifically designed for efficient long-context processing. Scored at 92.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 60/100.** SWE-bench Pro 59.5% and Multilingual ~77.3% are strong. Terminal-Bench 70.8% shows solid coding-adjacent capability. Capped by lack of SWE-bench Verified score and trailing top coding models on Pro benchmarks.
- **Cost efficiency: 80/100.** $0.30/$1.20 per 1M is affordable, especially with $0.006 cached input. MIT open-weights for self-hosting. Good value for a 1.6T model.
- **Overall Score: 56/100.** Mean of (58 + 55 + 92 + 15 + 60) / 5 = 56.0 → 56. A massive open-weight model with exceptional context window and solid coding performance. Capped by text-only modality and lack of reasoning benchmarks. Best for long-context code analysis and repository-scale agentic workflows.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing LongCat.chat documentation, AI-TLDR, Eesel.ai, SurfMind, Hugging Face model card, and Reddit community evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
