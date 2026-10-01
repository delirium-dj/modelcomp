# Claude Opus 5.5 — findings by Laguna S 2.1

> Source: anthropic/claude-opus-5-5 (Anthropic), e.g. BenchLM, Artificial Analysis, Anthropic platform docs
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (Anthropic)
- **Short description:** First model of Anthropic's Claude 5.5 family; enterprise Opus workhorse with adaptive thinking (always on) and 1M context, built for long-running agentic coding and knowledge work.
- **Provider / access:** Anthropic API `claude-opus-5-5` (Messages API); OpenCode Zen `opencode/claude-opus-5-5` (paid tier, noZen Free ID — `noFreeId: true`); also available on Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS. Chat Completions / Messages API.
- **Release / knowledge:** 2026-09-22 (Anthropic platform docs / BenchLM). Reliable knowledge cutoff: Jun 2026; training data cutoff: Jun 2026.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API, Bedrock, Vertex, Foundry, AWS). No free Zen Free ID (`noFreeId`).
- **Context window:** 1M tokens total (1M input / 128K output; up to 300K output via Batch API beta header `output-300k-2026-03-24`).
- **Modalities:** Text, image in; text out. Reasoning yes (adaptive thinking, always on, non-disableable); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $4.00 in / $20.00 out per 1M tokens (Anthropic API); cache read $0.20/MTok (5% = 95% cache discount); Batch API 50% off input+output. noFreeId — no Zen free tier.
- **Architecture:** Proprietary (Anthropic has not disclosed parameter count or internal architecture).

### Raw benchmarks found

> Verified public numbers, sourced per metric, with harness noted. GPQA Diamond was not published for this ID on BenchLM or Artificial Analysis; GPQA-D leaderboard shows earlier Claude models (Opus 4.8 93.6%, Opus 4.6 89.2%) but not Claude Opus 5.5 (perbenchlm.ai/benchmarks/gpqa-diamond, rank #1-65 of 65 models). No values are inferred from those siblings.

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (BenchLM)
- GDPval-AA: **1846 Elo** (BenchLM; exceeds frontier 1750+ threshold)
- AA Briefcase: **1822 Elo** (BenchLM)
- Toolathlon-Verified: **77.8%** (BenchLM)
- OSWorld 2.0: **48.7%** (BenchLM)
- DRACO: **87.0%** (BenchLM)
- AA ITBench: **38.2%** (BenchLM)
- CWE-bench v1: **67.0%** (BenchLM)
- AutomationBench: **40.0%** (BenchLM)
- Terminal-Bench 2.1: **no verified public score found** (not published for this ID on BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not published on BenchLM or AA for this ID)
- ARC-AGI-1: **97.50%** (BenchLM)
- ARC-AGI-2: **91.7%** (BenchLM)
- HLE w/ tools: **67.7%** (BenchLM)
- HLE w/o tools: **64.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **57.6%** / rank #1 of 223 (AA reports 58)
- AA-LCR: **84.7%** (BenchLM)
- MLCR-AA: **66.7%** (BenchLM)
- CritPt: **31.7%** (BenchLM)
- MRCR / RULER: **no verified public score found** (long-context retrieval not benchmark-published for this ID)
- GraphWalks BFS 256K–1M: **66.8%** (BenchLM)

Coding:

- SWE-bench Pro: **89.9%** (BenchLM)
- SWE Multilingual: **93.9%** (BenchLM)
- AA-SciCode: **66.9%** (BenchLM; above 55%+ frontier)
- DeepSWE: **74.2%** (BenchLM; at frontier 74%+ threshold)
- ProgramBench: **91.2%** (BenchLM)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1M-token window verified (BenchLM / Anthropic platform docs); no MRCR / RULER / GraphWalks retrieval figure published for this ID.

Multimodal:

- Text + image input / text output only (verified: "All current models support text and image input, text output" — Anthropic docs).
- Chartography (tools): **89.0%** (BenchLM)
- AA-MMMU-Pro: **87.7%** (BenchLM)
- Chartography (no tools): **64.4%** (BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost excluded. Independent grounding: benchmarks from BenchLM (https://benchlm.ai/models/claude-opus-5-5) + Artificial Analysis (https://artificialanalysis.ai/models/claude-opus-5-5) + Anthropic platform docs (https://platform.claude.com/docs/en/models/opus-5-5/overview). Research conducted without reading peer findings files.

- **Tool use: 88/100.** GDPval-AA 1846 (exceeds frontier 1750+) + AA Briefcase 1822 Elo + Toolathlon-Verified 77.8% + DRACO 87.0%; TB 4.0 66.40% and OSWorld 48.7% cap it below the 90+ frontier band; no TB 2.1 published for this ID.
- **Reasoning: 87/100.** ARC-AGI-1 97.50%, ARC-AGI-2 91.7%, AA-LCR 84.7%, HLE w/ tools 67.7% (exceeds 40%+ frontier); AA Intelligence Index 57.6 below the 60 frontier threshold; no GPQA Diamond published for this exact ID.
- **Context window: 95/100.** Verified 1M-token window (≥1M tier); no MRCR/RULER retrieval curve published to reach 100.
- **Multimodal: 72/100.** Text + image in / text out (+image in = 60–70 tier); lifted by Chartography tools 89.0% and AA-MMMU-Pro 87.7%; no video/audio/PDF input.
- **Coding: 89/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, ProgramBench 91.2%, DeepSWE 74.2% (at frontier 74%+), AA-SciCode 66.9% (above 55%+ frontier); no SWE-bench Verified / LiveCodeBench published.
- **Cost efficiency: 55/100.** $4.00 in / $20.00 out per 1M (paid, above $3/$15 ~60 ref); 95% cache discount noted; noFreeId (no Zen free tier).
- **Overall Score: 86/100.** (88 + 87 + 95 + 72 + 89) / 5 = 431 / 5 = 86.2 → 86. Best-fit: premium reasoning + coding agent for complex knowledge work, long-horizon agentic coding, and tool use where the 1M context and adaptive thinking justify $4/$20; escalate from Claude Sonnet 5.5 for frontier-tier agentics.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM model page, Artificial Analysis model page, and Anthropic platform docs / pricing page for specs and pricing; scores are normalized 1–100 interpretations, not official vendor scores). Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5_5.md`, using the same headings.
