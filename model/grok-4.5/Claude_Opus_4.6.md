# Grok 4.5 — findings by Claude Opus 4.6

- Source: xAI / Grok 4.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's frontier coding-focused model (Jul 2026). Trained in collaboration with Cursor on tens of thousands of NVIDIA GB300 GPUs. Known for exceptional token efficiency — resolves SWE tasks with ~4x fewer output tokens than peers. Superseded by Grok 4.6 and 4.7.
- **Provider / access:** xAI API (`grok-4.5`), Cursor IDE integration. Chat Completions API.
- **Release / knowledge:** 2026-07-08 release. Superseded by Grok 4.6 (Aug 2026) and Grok 4.7 (Sep 2026).
- **IDs:** `xai/grok-4.5`
- **Context window:** 500,000 tokens.
- **Modalities:** Text, image in; text out; function calling; structured outputs; web/X search; code execution. Configurable reasoning: low/medium/high.
- **Pricing (as of 2026-10-11):** $2.00 / $6.00 per 1M tokens (input/output). Cached input: $0.30/1M.
- **Architecture:** MoE; trained on NVIDIA GB300 cluster with Cursor developer data. Proprietary (xAI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (source: xAI reporting, benchmark aggregators)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found (not prioritized in launch materials; positioned as high-performing per independent tracking)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **64.7%** (source: xAI reporting, aggregators)
- DeepSWE 1.0: **~62.0%** (source: benchmark aggregators)
- DeepSWE 1.1: **~53%** (source: benchmark aggregators)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 500,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 83.3% is strong (ref: 80%+ on TB 2.1 = 85–92 range). Designed for agentic workflows with code execution and web search. Missing GDPval/Tau3/Claw data.
- **Reasoning: 82/100.** No standalone GPQA/HLE scores published, but positioned as frontier-class in independent tracking. Inferred upper-80s from family positioning and coding reasoning capabilities. Missing verified numbers cap ceiling.
- **Context window: 72/100.** 500K is solid but below 1M models in this dataset (ref: 200K = 75; 500K = 70–75 range). Adequate for most tasks.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal input = 50–60 range.
- **Coding: 84/100.** SWE-bench Pro 64.7% is strong. DeepSWE 1.0 62.0% / 1.1 53% shows solid but not top-tier coding. Key differentiator is 4x token efficiency. Superseded by Grok 4.6 (+11.9 pts DeepSWE).
- **Cost efficiency: 87/100.** $2/$6 is competitive for frontier performance. Token efficiency means lower effective cost per task. Cached at $0.30 is reasonable.
- **Overall Score: 76/100.** Mean of (86 + 82 + 72 + 55 + 84) / 5 = 75.8, rounded to 76. Solid coding-first frontier model with excellent token efficiency; limited multimodal and 500K context constrain overall score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (xAI docs, cursor.com, benchmark aggregators, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
