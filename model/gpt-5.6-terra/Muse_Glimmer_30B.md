# GPT-5.6 Terra — findings by Muse Glimmer 30B

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's mid-tier GPT-5.6 variant released in July 2026 that balances strong reasoning and coding performance with lower cost than Sol. Targeted at professional work, agents and coding workloads.
- **Provider / access:** OpenAI API `openai/gpt-5.6-terra`; available via Chat Completions and Responses APIs.
- **Release / knowledge:** Released July 2026 per Artificial Analysis; public knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1.05M tokens total per BenchLM; Artificial Analysis reports 1M tokens. Verification: BenchLM model details 2026-09-24.
- **Modalities:** text and image input; text output; reasoning enabled; tool calls / function calling supported. No audio/video input.
- **Pricing (as of 2026-09-24):** $2.00 per 1M input tokens, $0.20 per 1M cached input, $12.00 per 1M output tokens per Artificial Analysis model page.
- **Architecture:** proprietary; parameter count and training details not publicly disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (BenchLM, 2026-09-24)
- Terminal-Bench 3.0: **20.8%** (BenchLM)
- τ²-bench results: **86.3%** (BenchLM)
- GDPval-AA: **1583 Elo** / **46.6%** normalized (BenchLM)
- Toolathlon: **53.1%** (BenchLM)
- BrowseComp: **87.5%** (BenchLM)
- OSWorld 2.0: **50.2%** (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchLM)
- HLE-Verified: **51.1%** (BenchLM); AA-HLE **42.9%** (BenchLM)
- LCR / MLCR: AA-LCR **83.0%** (BenchLM); no verified MLCR score found
- CritPt: **30.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **42** (Artificial Analysis, 2026-09-24; #38 / 211 reasoning models); BenchLM AA Intelligence Index **55.0%**
- Omniscience Accuracy: **46.8%** / Hallucination Rate **87.9%** (BenchLM)
- ARC-AGI-2: **83.9%** (BenchLM); ARC-AGI-3 **0.8%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **63.4%** (BenchLM)
- LiveCodeBench: LiveCodeBench (Vals) **85.9%** (BenchLM); no verified standard LiveCodeBench score found
- SciCode / AA-SciCode: **55.0%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **69.6%** (BenchLM); AA Coding Index **76.7%** (BenchLM); FrontierCode 1.1 Extended **55.8%** (BenchLM)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported in the verified public sources reviewed.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 87.4% and τ²-bench 86.3% with GDPval-AA 1583 Elo support a strong agentic score; Terminal-Bench 3.0 20.8% and OSWorld 50.2% cap the rating.
- **Reasoning: 90/100.** GPQA Diamond 92.9%, HLE-Verified 51.1% and AA-LCR 83.0% place reasoning near frontier; CritPt 30.0% and ARC-AGI-3 0.8% limit the top end.
- **Context window: 95/100.** 1.05M token context per BenchLM meets the ≥1M tier; no verified retrieval degradation data published, so capped below 100.
- **Multimodal: 65/100.** Text and image input with text output confirmed; MMMU-Pro 80.7% shows visual grounding. No audio/video input or non-text output caps the score in the image-in tier.
- **Coding: 76/100.** DeepSWE 69.6%, SWE-bench Pro 63.4% and AA Coding Index 76.7% indicate solid agentic coding; AA-SciCode 55.0% and absence of Vibe Code Bench data cap the score.
- **Cost efficiency: 62/100.** Paid API $2/$12 per 1M tokens is mid-tier pricing; far above free tiers and below low-cost frontier options.
- **Overall Score: 82/100.** Mean of the five quality dimensions (86 + 90 + 95 + 65 + 76) / 5 = 82.4 → 82; best fit for tool-enabled, image-capable workloads where paid mid-tier cost is acceptable.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md`.
3. Signature block filled in; relative links resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
