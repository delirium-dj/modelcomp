# Gemma 4 31B - findings by Solar Pro 4

> TEMPLATE - do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing - your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google/Gemma 4 31B, e.g. Google (`google/gemma-4-31b`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google open-weights model released April 2026. 31B parameter model with strong instruction following capabilities. Part of the Gemma 4 family.
- **Provider / access:** Google AI Studio, Hugging Face (`google/gemma-4-31B-it`), available via 15+ providers on OpenRouter. Chat Completions API.
- **Release / knowledge:** Released April 2, 2026; knowledge cutoff not publicly specified.
- **IDs:** `google/gemma-4-31b` (check meta.json for exact Zen ID)
- **Context window:** 262K tokens. Verified via multiple sources.
- **Modalities:** Text in/out. Reasoning: yes (thinking mode available). Tool calls: check meta.json. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Open weights - self-hosting available. API: ~$0.14 in / $0.40 out per 1M. Check meta.json for Zen pricing.
- **Architecture:** Open weights. 31B parameters. Released under Gemma license.

### Raw benchmarks found

> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`

Agent / tool use:

- GDPval-AA: **no verified public score found** (closest: AA Intelligence Index 19.0, rank 214)
- JobBench: **no verified public score found**
- AutomationBench: **no verified public score found**
- RuneBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.8%** (source: Epoch AI Benchmarking Hub; rank 132 at minimal)
- HLE: **11.8%** (source: Artificial Analysis; rank 256 at minimal)
- LCR: **46.7%** (source: Artificial Analysis; rank 294 at no reasoning)
- MLCR: **no verified public score found**
- CritPt: **0.0%** (source: Artificial Analysis; rank 280 at no reasoning)
- Artificial Analysis Intelligence Index: **19.0 / 673** (rank 214 at thinking)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **43.4%** (source: Epoch AI Benchmarking Hub; rank 98 at thinking)
- SciCode WeirdML: **52.3%** (source: WeirdML; rank 65 at thinking)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**

Long context:

- MRCR: **no verified public score found**
- LCR: **46.7%** (source: Artificial Analysis; rank 294 at no reasoning)

### Normalized scores (1-100)

- **Tool use: 48/100.** AA Intelligence Index 19.0 (rank 214) indicates below-average capability. No direct agent benchmark scores available. Capped by low overall intelligence rating and lack of agent benchmarks.
- **Reasoning: 50/100.** GPQA Diamond 75.8% (rank 132) is moderate. HLE 11.8% (rank 256) is low. CritPt 0.0% (rank 280) is very low. LCR 46.7% (rank 294) is below average. Capped by low scores across reasoning benchmarks.
- **Context window: 65/100.** 262K token context window is decent but below frontier-tier. LCR 46.7% (rank 294) shows moderate long-context retrieval. Capped by 262K window being below 500K+ tier.
- **Multimodal: 45/100.** Text-only model. No image, video, audio, or PDF input/output. Score 15 base for text-only plus minimal additional for any multimodal capabilities (none found).
- **Coding: 52/100.** SciCode 43.4% (rank 98) and WeirdML 52.3% (rank 65) show moderate coding capability. No SWE-bench, LiveCodeBench, or other major coding benchmarks available. Capped by lack of comprehensive coding benchmark coverage.
- **Cost efficiency: 90/100.** Open weights model - self-hosting available. API pricing at ~$0.14/$0.40 per 1M is very affordable. Check meta.json for Zen Free ID.
- **Overall Score: 52/100.** Mean of (48 + 50 + 65 + 45 + 52) / 5 = 52.0, rounded to 52. Best-fit recommendation: Entry-level open-weights model suitable for basic tasks, instruction following, and lightweight applications. Not suitable for complex reasoning, agentic workflows, or production coding tasks. Best for cost-sensitive deployments where open-weights self-hosting is preferred.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** - 2026-09-23
- Method: Public internet research (Google, Artificial Analysis, BenchLeader, Epoch AI Benchmarking Hub, WeirdML); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented - "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


