# GPT-5.4 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's early-2026 flagship reasoning model with xhigh effort tier; strong science reasoning and computer-use agency.
- **Provider / access:** OpenAI (Responses API, `gpt-5.4`); OpenCode Zen `opencode/gpt-5.4`; AI-only paid tier.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff early 2026.
- **IDs:** `opencode/gpt-5.4`, `gpt-5.4` (OpenAI).
- **Context window:** 1,000,000 tokens (1M); verified via llm-stats.
- **Modalities:** Text and image in (screenshots); text out; reasoning with xhigh effort; tool calls, JSON mode, computer use enabled.
- **Pricing (as of 2026-10-01):** $2.50 input / $15.00 output per 1M tokens (breakpoint @ 272K); cached input $0.25; paid only.
- **Architecture:** Proprietary; xhigh reasoning focus; Responses API with effort levels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%**
- Tau2-Bench telecom: **98.9%**
- Toolathlon: **54.6%**
- MCP Atlas: **67.2%**
- OSWorld-Verified: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- HLE: **39.8%** no-tools / **52.1%** with tools
- BenchLM overall: **73.2** (#11 supported)

Coding:

- SWE-bench Pro: **57.7%**
- LiveCodeBench Pro: **87.5%**
- React Native Evals: **85.3%**
- Vals splits: **88/76/50/0%** (difficulty tiers)

Long context:

- MRCR v2: **86.0%** at 64-128K / **79.3%** at 128-256K
- Graphwalks BFS: **93.1%**, parents accuracy **89.8%**

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 80/100.** TB 75.1% + OSWorld 75% + MCP Atlas 67.2%; strong agency capped by Toolathlon 54.6%, missing GDPval/Tau3 numbers.
- **Reasoning: 92/100.** GPQA 93% + HLE 39.8%/52.1% frontier-level reasoning; excellent science/math capability.
- **Context window: 93/100.** Full 1M window with MRCR 79-86% to 256K, Graphwalks 93%; missing 512K+ retrieval caps from higher tier.
- **Multimodal: 70/100.** Image-in (screenshots) with text-only output; MMMU-Pro 81.2% image capability; no video/audio caps tier.
- **Coding: 80/100.** LiveCode Pro 87.5% + React Native 85.3% + Vals splits strong; SWE-Pro 57.7% moderate caps average.
- **Cost efficiency: 62/100.** $2.50/$15 per 1M premium pricing; expensive for this tier.
- **Overall Score: 83/100.** Mean of (80+92+93+70+80)/5 = 83. Best fit: expert-reasoning and computer-use workloads where quality outranks cost.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (OpenAI launch docs, BenchLM, llm-stats); scores normalized 1-100 interpretations, not official vendor scores. Reference: Muse Spark 1.3 authoritative report with official OpenAI xhigh numbers.
- Future sources: add a new file next to this one, e.g. `GPT_6.0.md`, using the same headings.