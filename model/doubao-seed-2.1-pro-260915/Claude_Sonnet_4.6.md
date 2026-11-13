# Doubao Seed 2.1 Pro 260915 — findings by Claude Sonnet 4.6

- Source: ByteDance / Volcano Engine (`doubao-seed-2.1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro 260915
- **Short description:** ByteDance's flagship multimodal agent-first model on Volcano Engine Ark; 1 M token context, 256 K max output/thinking budget, native GUI grounding, and deep enterprise tool integrations.
- **Provider / access:** ByteDance — Volcano Engine Ark API (`bytedance/doubao-seed-2-1-pro-260915`)
- **Release / knowledge:** September 2026 snapshot; base model released June 2026
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915`
- **Context window:** 1,024,000 tokens total; 256,000 max output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-11-13):** ~\$1.44 per full evaluation (Ark token rates; see Volcano Engine pricing page)
- **Architecture:** Dense transformer with native tool-calling, structured JSON output, long-horizon multi-step planning, GUI task agent execution layer

### Raw benchmarks found

Agent / tool use:

- MMMU-Pro with tools: **82.7** (ByteDance internal evaluation)
- MathVision with tools: **94.5** (ByteDance internal evaluation)
- Terminal-Bench 2.1: **~71–73.8%** (ByteDance internal evaluation)
- SWE-bench Pro: **~57.5%** (independent tracking via neura.market)
- SWE-Atlas subset: **~35.2–44.7%** (varies by subset configuration)

Reasoning / knowledge:

- SuperGPQA: **70.8%** (ByteDance official evaluation)
- Minerva / advanced science reasoning: **~70.7%** (ByteDance evaluation suite)
- HLE (Humanity's Last Exam): no verified standalone public score found
- MMLU-Pro: no verified standalone public score found (tool-augmented results cited instead)

Coding:

- LiveCodeBench v6: **~82.5–87.8%** pass@1 (independent aggregator range; contamination-aware)
- SWE-bench Verified: no verified standalone public score found (SWE-bench Pro reported instead)
- HumanEval: no verified standalone public score found

Long context:

- 1 M token architectural window; no verified MRCR or RULER retrieval score found in public sources

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong agent-first design with native GUI grounding, OpenAI-compatible tool calling, MMMU-Pro with tools at 82.7, Terminal-Bench ~72%, and SWE-bench Pro ~57.5%. Capped by mid-pack SWE-Atlas results (35–44%) and limited independent harness validation outside ByteDance's own evaluation suite.
- **Reasoning: 72/100.** SuperGPQA at 70.8% and Minerva ~70.7% show solid graduate-level reasoning, placing it competitively within top-tier enterprise Asian-market LLMs; held back by absence of public HLE and MMLU-Pro standalone scores.
- **Context window: 92/100.** 1,024,000-token context window maps to the 1 M tier (score = 92).
- **Multimodal: 68/100.** Accepts text, image, and video input (no audio); strong vision+video tier scores 65–72, lifted to 68 by MMMU-Pro tool-augmented score of 82.7.
- **Coding: 74/100.** LiveCodeBench v6 ~82.5–87.8% pass@1 is strong for a non-specialized model; SWE-bench Pro ~57.5% is mid-tier. No HumanEval standalone score. Combined mid-high coding tier.
- **Cost efficiency: 45/100.** ~\$1.44 per full evaluation is mid-range; Ark API pricing is not among the cheapest frontier options.
- **Overall Score: 77/100.** Mean of Tool use (79) + Reasoning (72) + Context window (92) + Multimodal (68) + Coding (74) = 385 / 5 = 77.0. Compelling as an agent-first 1 M context model with GUI grounding and long-horizon execution; raw knowledge benchmarks are lighter on independent validation.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ai-tldr.dev — Doubao Seed 2.1 Pro overview](https://ai-tldr.dev)
  - [ByteDance Volcano Engine docs](https://www.volcengine.com/docs/82379/1330310)
  - [neura.market — SWE-bench Pro tracking](https://neura.market)
  - [benchlm.ai — SuperGPQA and long-context evaluation](https://benchlm.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
