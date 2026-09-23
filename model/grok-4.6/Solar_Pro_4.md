# Grok 4.6 - findings by Solar Pro 4

> TEMPLATE - do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing - your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: SpaceXAI/Grok 4.6, e.g. SpaceXAI (`spacexai/grok-4.6`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** SpaceXAI proprietary reasoning model released August 2026. Strong knowledge and agentic tool use capabilities with moderate coding performance. Part of the Grok model family.
- **Provider / access:** SpaceXAI API (`spacexai/grok-4.6`), Amazon Bedrock, OpenRouter. Chat Completions API.
- **Release / knowledge:** Released August 12, 2026; knowledge cutoff not publicly specified.
- **IDs:** `spacexai/grok-4.6` (check meta.json for exact Zen ID)
- **Context window:** 500K tokens. Verified via Artificial Analysis and multiple sources.
- **Modalities:** Text, image in; text out. Reasoning: yes (configurable: low/medium/high/xhigh). Tool calls: yes. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Paid: $2.00 in / $6.00 out per 1M tokens ($0.50 cached). Check meta.json for Zen pricing.
- **Architecture:** Proprietary, closed-weights. SpaceXAI has not disclosed parameter count.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
>

Agent / tool use:

- GDPval-AA: **no verified public score found** (closest: AA Intelligence Index 42.8, rank 35 at medium)
- JobBench: **no verified public score found**
- AutomationBench: **no verified public score found**
- RuneBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 4.0 (AA): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.0%** (source: Epoch AI Benchmarking Hub; rank 8 at medium)
- HLE: **42.1%** (source: Artificial Analysis; rank 56 at medium)
- LCR: **81.0%** (source: Artificial Analysis; rank 49 at medium/high)
- MLCR: **12.2%** (source: Artificial Analysis; rank 27 at high)
- CritPt: **no verified public score found** (closest: not in index at medium)
- Artificial Analysis Intelligence Index: **42.8 / 673** (rank 35 of 673 models at medium)
- Omniscience Accuracy / Hallucination Rate: **41.9% / 76.0%** (source: Artificial Analysis; rank 91 accuracy, rank 16 non-hallucination at medium)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- AIME 2026: **no verified public score found**

Long context:

- MRCR: **no verified public score found**
- LCR: **81.0%** (source: Artificial Analysis; rank 49 at medium/high)

### Normalized scores (1-100)

> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`

- **Tool use: 72/100.** AA Intelligence Index 42.8 (rank 35) indicates above-average capability. Agents & tools category score is 73 (strong). Knowledge score 76 is excellent. No direct agent benchmark scores available. Capped by lack of GDPval-AA, JobBench, and other agent-specific benchmarks.
- **Reasoning: 78/100.** GPQA Diamond 94.0% (rank 8) is excellent. HLE 42.1% (rank 56) is moderate. LCR 81.0% (rank 49) is solid. AA Intelligence Index reasoning component is 66 at medium. Capped by moderate HLE and lower MLCR (12.2%).
- **Context window: 75/100.** 500K token context window is solid but below frontier-tier 1M+ models. AA-LCR 81.0% (rank 49) shows good long-context retrieval. Capped by 500K window being below the 1M frontier threshold.
- **Multimodal: 70/100.** Supports text and image input with text output. Basic multimodal coverage. No video, audio, or PDF input. Score reflects standard text+image coverage.
- **Coding: 62/100.** No direct coding benchmark scores (SWE-bench, LiveCodeBench, etc.) available. Coding category score is 63 at medium effort. Capped significantly by lack of verified coding benchmark coverage.
- **Cost efficiency: 75/100.** Paid at $2.00/$6.00 per 1M ($0.50 cached). Moderate pricing with reasonable output costs. Check meta.json for Zen Free ID availability.
- **Overall Score: 71/100.** Mean of (72 + 78 + 75 + 70 + 62) / 5 = 71.4, rounded to 71. Best-fit recommendation: Above-average reasoning model with strong knowledge capabilities (rank 56 HLE, 76 knowledge score). Good for knowledge work and tasks requiring strong factual recall. 500K context is adequate but not frontier-tier. Limitations in verified agentic and coding benchmark coverage.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** - 2026-09-23
- Method: Public internet research (SpaceXAI, Artificial Analysis, BenchLeader, Epoch AI Benchmarking Hub); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented - "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


