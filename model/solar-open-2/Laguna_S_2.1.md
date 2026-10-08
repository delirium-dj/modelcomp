# Solar Open 2 — findings by Laguna S 2.1

- Source: Upstage / Solar Open 2
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights 250B model designed for flexible enterprise fine-tuning and domain-specific knowledge integration. Strong reasoning and coding performance with Korean language benchmarks.
- **Provider / access:** Open weights on HuggingFace `upstage/Solar-Open2-250B`; API via Upstage; `opencode/solar-open-2`
- **Release / knowledge:** Released 2026
- **IDs:** `opencode/solar-open-2` (no Free ID on Zen per meta.json); HuggingFace `upstage/Solar-Open2-250B`
- **Context window:** 65,536 total (16,384 output) — verified via meta.json
- **Modalities:** Text in/out; reasoning (thinking) mode
- **Pricing (as of 2026-10-08):** Open-weights model; free for self-hosting or standard API pricing (not specified)
- **Architecture:** 250B parameter open-weights model; weights publicly available on HuggingFace

### Raw benchmarks found

> BenchLM reports 15 of 623 benchmarks with no public overall score (unranked). AA returns 404 — model not listed on Artificial Analysis.

Agent / tool use:

- terminalBenchHard: **28.3%** (source: Upstage model card)
- APEX-Agents: **16.6%** (source: Upstage model card)
- MCP Atlas: **58.2%** (source: Upstage model card; tool use benchmark)

Reasoning / knowledge:

- AA-LCR: **62.3%** (source: Upstage model card; long-context reasoning)
- MMLU-Pro: **86.2%** (source: Upstage model card)
- GPQA-Diamond: **86.3%** (source: Upstage model card)
- HLE w/o tools: **28.8%** (source: Upstage model card)
- IFBench: **80%** (source: Upstage model card; instruction following)

Coding:

- LiveCodeBench v6: **92.4%** (source: Upstage model card)
- SWE-bench Verified: **70.4%** (source: Upstage model card)

Korean benchmarks:

- KMMLU-Pro: **78.4%** (source: Upstage model card)
- CLIcK: **90.7%** (source: Upstage model card)
- HRM8K: **92.2%** (source: Upstage model card)

Mathematics benchmarks:

- HMMT Feb 2026: **93.9%** (source: Upstage model card)
- AIME26: **95.7%** (source: Upstage model card)

Long context:

- AA-LCR: **62.3%** (source: Upstage model card)

### Normalized scores (1–100)

- **Tool use: 42/100.** MCP Atlas 58.2% is solid; terminalBenchHard 28.3% and APEX-Agents 16.6% are weak.
- **Reasoning: 86/100.** MMLU-Pro 86.2%, GPQA-Diamond 86.3%, IFBench 80%, HMMT 93.9%, AIME26 95.7%. Exceptional reasoning and mathematics. SimpleQA 28.8% is a weak point.
- **Context window: 72/100.** 65,536 tokens per meta.json places it in 64K tier.
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 78/100.** LiveCodeBench v6 92.4% and SWE-bench 70.4% are both excellent.
- **Cost efficiency: 100/100.** Open-weights model available free for self-hosting.
- **Overall Score: 58.6/100.** Mean of five quality dims (42+86+72+15+78)/5 = 58.6, rounds to 60. Best-fit use case: open-weights model with exceptional coding and reasoning performance, strong Korean language benchmarks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via BenchLM and Upstage model card (HuggingFace) sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
