# DeepSeek V4.1 Flash-1017 — findings by DeepSeek 4 Flash

- Source: DeepSeek / DeepSeek V4.1 Flash (1017 checkpoint)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash-1017
- **Short description:** A dated checkpoint of DeepSeek V4.1 Flash (Oct 17, 2026 build) offered alongside the live V4.1 Flash for API stability — same architecture, pinned weights. Useful when a reproducible inference profile is required, at a small capability discount to the current release.
- **Provider / access:** DeepSeek API `deepseek-v4.1-flash-1017` (Chat Completions).
- **Release / knowledge:** 2026-10-17 checkpoint; knowledge cutoff mid-2026.
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`
- **Context window:** 131,072 (128K) total; 32,768 (32K) max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.30 / $1.20 per 1M in/out; paid only.
- **Architecture:** MoE; undisclosed params, Flash-class active size.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.4%** (vendor eval)
- Tau3-Banking: **66.8%** (Tau3 leaderboard)
- GDPval-AA: **1425 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (official)
- HLE: **37.6%** (AA HLE listing)
- CritPt: **66.1%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **41.7 / rank 7** (AA)

Coding:

- SWE-bench Verified: **80.6%** (official)
- LiveCodeBench: **72.5%** (LCB official)

Long context:

- RULER 128K: **90.8%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic tool use for a Flash-tier model (Terminal-Bench 62.4, Tau3-Banking 66.8); the pinned checkpoint trails the live Flash slightly.
- **Reasoning: 89/100.** GPQA Diamond 89.5 with efficient reasoning; HLE 37.6 is mid-pack.
- **Context window: 87/100.** 128K total at ~91% retrieval — respectable, not class-leading breadth.
- **Multimodal: 85/100.** Image/PDF understanding at good quality; no audio/video or generation.
- **Coding: 87/100.** SWE-bench Verified 80.6 and LiveCodeBench 72.5 — a strong value coder.
- **Cost efficiency: 75/100.** $0.30/$1.20 is extremely cheap; paid only, no free lane.
- **Overall Score: 87/100.** Mean of quality dims (86+89+87+85+87)/5 = 86.8 → 87; a reproducible-pinned Flash that nearly matches the live model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek API — model list](https://api-docs.deepseek.com/quick_start/pricing)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [DeepSeek Platform](https://platform.deepseek.com/)
