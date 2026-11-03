# GPT-5.3 Codex — findings by Mercury 3

- Source: OpenAI/GPT-5.3 Codex
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's February 2026 coding-agent model (released 2026-02-05, superseded by GPT-5.4/5.5 line): strong agentic coding (SWE-bench Verified 85%, TB2.0 77.3%), GPQA 91.5%, 400K context, $1.75/$14.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), Codex; 1 API provider tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.3-codex` (OpenAI API; xhigh reasoning; sibling GPT-5.3-Codex-Spark).
- **Context window:** 400,000 tokens total; max output 128K (models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $1.75 input / $14.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (system card); OSWorld-Verified: **64.7%**; τ²-bench: **86%** (AA); GERT Labs: 57.47%; JobBench: 33.7%
- No GDPval/Agentic-index figure verified in sources reviewed (sparse agentic coverage)

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (AA); HLE: **42.5%** (AA); AA-LCR: **83.3%**; CritPt: **16.9%**; AA-IFBench: 75.4%
- No ARC/FrontierMath figure verified in sources reviewed

Coding:

- SWE-bench Verified: **85%**; SWE-bench Pro: **56.8%**; SWE-Rebench: **58.2%**; Terminal-Bench 2.0 77.3%; Vibe Code Bench: **61.77%**; LiveCodeBench: **87.3%** (Vals); SWE-bench: 78.0% (Vals)

Long context:

- 400K window; AA-LCR 83.3%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; AA-MMMU-Pro 78.5%; Design Arena 1161 Elo.

### Normalized scores (1–100)

- **Tool use: 81/100.** TB2.0 77.3%, τ² 86%, OSWorld-Verified 64.7% — decent agentic; capped by JobBench 33.7% and missing GDPval.
- **Reasoning: 84/100.** GPQA 91.5%, LCR 83.3%, IFBench 75.4%; capped by HLE 42.5%, CritPt 16.9%, and no ARC figure.
- **Context window: 80/100.** 400K (below the 1M class) with good LCR 83.3%.
- **Multimodal: 83/100.** image input with solid MMMU-Pro 78.5%; text-only output.
- **Coding: 86/100.** SWE Verified 85%, LiveCodeBench 87.3%, Vibe 61.77%; capped by SWE Pro 56.8% and SWE-Rebench 58.2%.
- **Cost efficiency: 78/100.** $1.75/$14 with 90% cache discount — fair; 102.6 t/s, high TTFT (70.9s).
- **Overall Score: 83/100.** Mean of (81+84+80+83+86)/5 = 82.8 → 83. A capable late-2025/early-2026 coding agent; the 400K cap and thin agentic coverage date it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.3-Codex System Card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.3-Codex System Card (OpenAI)](https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf)
  - [GPT-5.3 Codex — Artificial Analysis model page ($1.75/$14, 400K, cutoff Aug 2025)](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [GPT-5.3 Codex — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-3-codex)
  - [GPT-5.3 Codex — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.3-codex)
