# Claude Haiku 4.5 — findings by Muse Glimmer 30B

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic high-volume, latency-sensitive model for classification, extraction, routing. Text and image input, text output.
- **Provider / access:** Anthropic Claude API, Bedrock, Google Cloud, Microsoft Foundry. Chat Completions compatible.
- **Release / knowledge:** Released Oct 15 2025. Reliable knowledge cutoff Feb 2025, training data cutoff Jul 2025.
- **IDs:** `claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`
- **Context window:** 200,000 tokens input / 64,000 tokens max output
- **Modalities:** Input text and images → text output. Extended thinking supported, not adaptive.
- **Pricing (as of 2026-11-11):** $1.00 per 1M input, $5.00 per 1M output. Batch 50% off.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.21%** without thinking (6 runs), **41.75%** with 32K thinking budget (5 runs) — Anthropic release notes, Terminus 2 framework, XML parser, n-attempts=1
- Tau2-Bench: no verified public score found; Anthropic notes scores achieved with extended thinking 128k budget but numeric not published
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** — Anthropic news Introducing Claude Haiku 4.5, averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling, full 500-problem dataset
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported for Haiku 4.5; 200K window documented, no MRCR/RULER/GraphWalks public score found

### Normalized scores (1–100)

- **Tool use: 42/100.** Terminal-Bench ~40-42% on default Terminus 2 scaffold caps the score; limited public agent scores and no independent tool-benchmark validation.
- **Reasoning: 45/100.** No verified GPQA/HLE/LCR/CritPt public scores found; inference from coding strength and Anthropic marketing of near-Sonnet 4 performance, capped by lack of independent reasoning benchmarks.
- **Context window: 55/100.** 200K token window with 64K max output is mid-tier per tier mapping; capped by smaller window vs 1M+ models and no long-context retrieval measurements.
- **Multimodal: 35/100.** Input supports text + images, output text only; partial multimodal coverage, no audio/video. Above text-only floor of 15 but below full multi-modal models.
- **Coding: 73/100.** SWE-bench Verified 73.3% from official release, one of the strongest Haiku-class coding results; capped by absence of independent LiveCodeBench/SciCode verification and no SWE-Pro data.
- **Cost efficiency: 78/100.** $1/$5 per MTok is low for 2025-2026 frontier small models with 200K context; not free and successor Haiku 5.5 is 10x cheaper, limiting score.
- **Overall Score: 50/100.** Mean of Tool 42, Reasoning 45, Context 55, Multimodal 35, Coding 73 = 50.0. Best-fit recommendation: high-volume sub-agent for coding/classification/routing under a larger orchestrator; not suitable for open-ended reasoning or long-horizon agents.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-11
- Method: Public internet research, Anthropic release notes and platform docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5)
  - [Anthropic — Claude Haiku 4.5 model page](https://docs.anthropic.com/en/docs/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Claude Haiku 4.5 — findings by Muse Glimmer 30B

- Source: Anthropic Claude Haiku 4.5
- Archived date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: 40.21% without thinking (6 runs), 41.75% with 32K thinking budget (5 runs) (Anthropic news claude-haiku-4-5 footnotes, Terminus 2 framework, XML parser, n-attempts=1)
- Tau2-Bench: no verified public score found; Anthropic notes scores achieved with extended thinking 128k budget but numeric not published
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: 73.3% (Anthropic news Introducing Claude Haiku 4.5, averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling, full 500-problem dataset)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported for Haiku 4.5; 200K window documented, no MRCR/RULER/GraphWalks public score found

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
