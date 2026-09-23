# Hy4 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Tencent/hy4)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hy4-preview open-weights flagship (770B/49B-active MoE, 1M context) for long-horizon coding and productivity.
- **Provider / access:** Tencent (`tencent/hy4`, `hy4-preview`)
- **Release / knowledge:** August 2026
- **IDs:** tencent/hy4
- **Context window:** 1M (960K in / 64K out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-23):** Apache 2.0 open weights, self-hosted (no Zen Free ID)
- **Architecture:** 770B total parameters, 49B active per token; MoE; Apache 2.0 license

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1 (Hy4 preview): **85.4** (hy4ai.com/hy4-benchmarks.html)
- DeepSWE: **64.3** (hy4ai.com)
- SWE Atlas - Codebase Q&A: **64.0** (hy4ai.com)
- SWE Atlas - Test Writing: **57.8** (hy4ai.com)
- SWE Atlas - Refactoring: **53.3** (hy4ai.com)
- Toolathlon-Verified: **74.1** (hy4ai.com)
- AutomationBench: **37.1** (hy4ai.com)
- Agents' Last Exam / ALE-CLI: **22.8** (hy4ai.com)
- ProgramBench: **17.5** (hy4ai.com)
- SWE-Marathon: **31.9** (hy4ai.com)
- PostTrainBench V1.1: **35.6** (hy4ai.com)
- OneMillionBench (with tools): **65.4** (hy4ai.com)

Reasoning / knowledge:
- GPQA Diamond: **92.3%** (llm-stats.com, hy4ai.com)
- HLE (Humanity's Last Exam, text no tools): **43.4** (hy4-site/benchmarks)
- BioMysteryBench: **71.3** (hy4ai.com)

Coding:
- SWE-bench Multilingual Resolved: **82.9%** (hy4ai.com, hy4-site)
- SWE-bench Pro: **65.7%** (hy4ai.com)
- SWE-bench Verified: **not directly published** (SWE-bench Multilingual 82.9% available)
- DeepSWE: **64.3** (hy4ai.com)

Long context:
- No specific long-context benchmark found; 1M context window is frontier-class

### Normalized scores (1-100)
- **Tool use: 75/100.** Terminal-Bench 2.1 at 85.4% is strong; DeepSWE 64.3 and Toolathlon 74.1 confirm solid multi-tool agentic capability; however, ProgramBench 17.5 and ALE-CLI 22.8 show weaknesses in certain agentic tasks.
- **Reasoning: 80/100.** GPQA Diamond 92.3% is near-frontier; HLE 43.4% is solid for a text-only model; the model demonstrates strong STEM reasoning capability.
- **Context window: 90/100.** 1M context window (960K in / 64K out) is excellent and at the frontier standard; supports long-horizon coding and productivity tasks.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video modalities supported.
- **Coding: 75/100.** SWE-bench Multilingual 82.9% and SWE-bench Pro 65.7% demonstrate strong coding capability; DeepSWE 64.3 and SWE Atlas scores confirm solid software engineering performance.
- **Cost efficiency: 100/100.** Apache 2.0 open weights; self-hosted deployment eliminates API costs entirely; no Zen Free ID available.
- **Overall Score: 67/100.** Strong reasoning (GPQA 92.3%) and coding (SWE-bench Multilingual 82.9%) with excellent context window, offset by text-only modality and some agentic weaknesses in specialized benchmarks.

---

## Signature
- Provided by: **Ling 3.0 (Tencent/hy4)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/hy4/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
