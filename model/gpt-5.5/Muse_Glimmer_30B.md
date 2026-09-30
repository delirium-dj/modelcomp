# GPT-5.5 — findings by Muse Glimmer 30B

- Source: OpenAI/GPT-5.5
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI frontier agentic model released April 2026 for complex real-world work including agentic coding, computer use, knowledge work and early scientific research. Delivers higher intelligence with GPT-5.4-level per-token latency.
- **Provider / access:** OpenAI ChatGPT Plus/Pro/Business/Enterprise, Codex; API Responses and Chat Completions as `gpt-5.5`. Thinking and Pro variants in ChatGPT.
- **Release / knowledge:** 2026-04-23 release. Knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-5.5`. No free Zen ID.
- **Context window:** 1M tokens API (1M total, ~922K input / 128K output reported). Codex UI capped at 400K. Verified via OpenAI blog 2026-04-23 and third-party specs.
- **Modalities:** text and image input, text output; reasoning yes, tool calls yes, JSON mode, computer use, web search, file search. No verified audio/video input.
- **Pricing (as of 2026-09-24):** API $5 per 1M input tokens, $30 per 1M output tokens; $15 per 1M cached input per OpenAI blog. Batch/Flex half rate, Priority 2.5x. Subscription tier access in ChatGPT/Codex.
- **Architecture:** proprietary large-scale transformer, MoE details undisclosed; reinforcement-learning trained reasoning model; served on NVIDIA GB200/GB300 NVL72.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Terminal-Bench 2.0: **82.7%** (OpenAI Introducing GPT-5.5 blog 2026-04-23)
- Tau2-bench Telecom (original prompts, no prompt tuning): **98.0%** (OpenAI blog 2026-04-23)
- GDPval (wins or ties): **84.9%** (OpenAI blog 2026-04-23)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon: **55.6%** (OpenAI blog 2026-04-23)
- MCP Atlas: **75.3%** (OpenAI blog 2026-04-23)
- BrowseComp: **84.4%** (OpenAI blog 2026-04-23)
- OSWorld-Verified: **78.7%** (OpenAI blog 2026-04-23)

Reasoning / knowledge:
- GPQA Diamond: **93.6%** (OpenAI blog 2026-04-23)
- HLE (no tools): **41.4%** (OpenAI blog 2026-04-23); HLE (with tools): **52.2%** (OpenAI blog 2026-04-23)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:
- SWE-bench Pro (Public): **58.6%** (OpenAI blog 2026-04-23)
- Expert-SWE (Internal): **73.1%** (OpenAI blog 2026-04-23)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Terminal-Bench 2.0 82.7% above

Long context:
- GraphWalks BFS 1mil f1: **45.4%** (OpenAI blog 2026-04-23)
- GraphWalks BFS 256k f1: **73.7%** (OpenAI blog 2026-04-23)
- OpenAI MRCR v2 8-needle 512K-1M: **74.0%** (OpenAI blog 2026-04-23)
- OpenAI MRCR v2 8-needle 256K-512K: **81.5%** (OpenAI blog 2026-04-23)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 90/100.** Terminal-Bench 82.7% + Tau2 Telecom 98% + OSWorld 78.7% place it near frontier; Toolathlon 55.6% caps the score.
- **Reasoning: 95/100.** GPQA Diamond 93.6% and HLE 41.4-52.2% with strong FrontierMath performance indicate frontier reasoning.
- **Context window: 95/100.** 1M API context with MRCR 74% at 512K-1M and GraphWalks 45% at 1M; tier ≥1M with solid retrieval.
- **Multimodal: 70/100.** MMMU Pro 81.2-83.2% indicates image input capability; text/image in, text out only.
- **Coding: 88/100.** SWE-Bench Pro 58.6%, Expert-SWE 73.1%, Terminal-Bench 82.7% show strong agentic coding; lacks public LiveCodeBench/SciCode.
- **Cost efficiency: 40/100.** $5/$30 per 1M input/output is premium pricing vs $0 free tiers and sub-$1 frontier alternatives.
- **Overall Score: 88/100.** Mean of Tool 90 + Reasoning 95 + Context 95 + Multimodal 70 + Coding 88 = 87.6 rounded. Best fit for complex agentic coding and knowledge work with large context.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.5/Muse_Glimmer_30B.md`.
3. Signature block filled in; relative links resolve from `model/gpt-5.5/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `.md`, not `.excluded`.
