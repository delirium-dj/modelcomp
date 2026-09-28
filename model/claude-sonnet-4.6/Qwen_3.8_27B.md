# Claude Sonnet 4.6 — findings by Qwen 3.8 27B

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance Sonnet-class model (released February 2026), optimized for agentic coding, computer use, and long-horizon knowledge work at mid-tier pricing.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4.6`, Messages API). No Free ID on OpenCode Zen (paid-tier only).
- **Release / knowledge:** Released 2026-02-17 (llm-stats.com, zbuild.io); knowledge cutoff not publicly documented.
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free ID exists on Zen).
- **Context window:** 200K (BenchLM model page; repo meta). One third-party tracker (llm-stats.com) claims 1M — not corroborated by a second source, treated as unverified.
- **Modalities:** Text + image in; text out. Extended thinking (adaptive) supported; tool calls and JSON mode available.
- **Pricing (as of 2026-09-28):** $3.00 input / $15.00 output per 1M tokens (BenchLM, llm-stats, serenitiesai).
- **Architecture:** Proprietary (Anthropic).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **57.3%** (BenchLM, 2026-09-28)
- Terminal-Bench 2.0: **59.1%** (BenchLM)
- Tau2-Bench / τ²-bench: **79.5%** (BenchLM)
- OSWorld-Verified: **72.1%** (BenchLM; 72.5% per digitalapplied.com and zbuild.io)
- Claw-Eval: **67.8%** (BenchLM)
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (BenchLM; Vals harness 85.6%, AA-GPQA Diamond 79.9% — harness spread noted)
- HLE: **49%** (BenchLM)
- LCR: **68.3%** (AA-LCR via BenchLM)
- CritPt: **0.9%** (BenchLM — likely harness anomaly; not used for scoring)
- Artificial Analysis Intelligence Index: **24.7** (BenchLM; flagged conservative — partial coverage, 38/486 benchmarks)
- Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%** (AA via BenchLM)
- IFBench (AA): **41.2%** (BenchLM)

Coding:

- SWE-bench Verified: **79.6%** (BenchLM; confirmed by digitalapplied.com and zbuild.io)
- SWE-bench (Vals): **77.4%** (BenchLM)
- SWE-Rebench: **60.7%** (BenchLM)
- LiveCodeBench (Vals): **82.1%** (BenchLM)
- Vibe Code Bench: **51.48%** (BenchLM)
- ARC-AGI-2: **58.3%** (zbuild.io)
- SWE-Pro / DeepSWE / SciCode / AA-SciCode: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.1 57.3% sits at the top of the mid band (45–60%), with τ²-bench 79.5% and OSWorld-Verified 72.1% solid; no GDPval-AA found, and TB2.1 far below the 88%+ frontier reference caps it.
- **Reasoning: 80/100.** GPQA Diamond 89.9% and HLE 49% both land in the frontier band (90+/40%+), but LCR 68.3%, IFBench 41.2%, and the conservative AA Index (24.7, partial coverage) keep it under Opus-class.
- **Context window: 70/100.** 200K standard window maps to 200K = 70 per the tier table; the uncorroborated 1M claim is noted but not credited.
- **Multimodal: 70/100.** Text + image in (CharXiv 77.4%, AA-MMMU-Pro 70.6%); no audio/video in or non-text out, capping at the top of the image-in band.
- **Coding: 80/100.** SWE-bench Verified 79.6% and LiveCodeBench 82.1% are strong for a Sonnet, but TB2.1 57.3%, Vibe 51.48%, and SWE-Rebench 60.7% cap agentic/deep engineering.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches the ~$3/$15 = ~60 reference point; no free tier.
- **Overall Score: 74/100.** (70 + 80 + 70 + 70 + 80) / 5 = 74.0; best-fit for cost-conscious agentic coding and computer-use workloads that don't need Opus-class depth.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (BenchLM, llm-stats.com, digitalapplied.com, zbuild.io, serenitiesai.com, mashable.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
