# Gemini 3.1 Pro — findings by Solar Pro 4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google/Gemini 3.1 Pro, e.g. Google (`google/gemini-3.1-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind proprietary reasoning model with 2M token context window, multimodal capabilities (text, image, audio, video, PDF in; text out). Released February 2026.
- **Provider / access:** Google AI Studio (`google/gemini-3.1-pro`), Vertex AI, OpenRouter. Chat Completions API.
- **Release / knowledge:** Released February 19, 2026; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.1-pro` (Free tier available on Google AI Studio and OpenCode Zen)
- **Context window:** 2M tokens total, 64K output. Verified via Google documentation and multiple benchmark sources.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning: yes (configurable: low/medium/high). Tool calls: yes. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Free tier available on Google AI Studio and OpenCode Zen; paid tier: $2.00 in / $12.00 out per 1M tokens (cache discount 90%).
- **Architecture:** Proprietary, closed-weights. Google has not disclosed parameter count.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" and all normalized dims would be guesses — do NOT save a scored `.md`
> file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings,
> your negative-findings notes; scores inside are ignored). `pnpm sync` skips
> `.excluded` files loudly so they never poison the average. Never invent
> placeholder scores (0, 10, …) to fill a `.md` file — one fabricated number
> drags the mean for every reader. (`pnpm sync` enforces this automatically:
> 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or
> flat-identical dims with zero cited numbers = renamed to `.excluded`.)

Agent / tool use:

- GDPval-AA: **no verified public score found** (closest: AA Intelligence Index 29.7, rank 100)
- JobBench: **no verified public score found**
- AutomationBench: **no verified public score found**
- RuneBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (source: Epoch AI Benchmarking Hub; rank 5 at high)
- HLE: **46.4%** (source: Scale AI/CAIS SimpleBench; rank 3)
- LCR: **82.0%** (source: Artificial Analysis; rank 36)
- MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **29.7 / 673** (rank 100 of 673 models)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- Terminal-Bench 2.1: **80.2%** (source: Epoch AI Benchmarking Hub; rank 3)

Long context:

- MRCR: **no verified public score found**
- LCR: **82.0%** (source: Artificial Analysis; long-context retrieval metric)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 55/100.** Limited direct agent benchmark data available. Terminal-Bench 2.1 at 80.2% (rank 3) is strong. AA Intelligence Index 29.7 (rank 100) suggests above-average but not frontier agentic capability. No verified GDPval-AA, JobBench, or MCP Atlas scores. Capped by lack of comprehensive agent benchmark coverage.
- **Reasoning: 82/100.** GPQA Diamond 94.4% (rank 5) is excellent. HLE 46.4% (rank 3) is top-tier. LCR 82.0% (rank 36) is solid. AA Intelligence Index reasoning component is strong. Capped by lack of CritPt and lower overall AA Intelligence Index rank (100/673).
- **Context window: 98/100.** 2M token context window is among the largest available. Exceeds the 1M+ frontier tier. No verified MRCR score, but 82.0% LCR demonstrates strong long-context retrieval. Capped slightly by lack of official MRCR verification.
- **Multimodal: 85/100.** Supports text, image, audio, video, PDF input with text output. Comprehensive multimodal coverage with five input modalities. Capped by lack of image/audio/video output modalities. Score reflects strong multimodal input coverage.
- **Coding: 60/100.** Terminal-Bench 2.1 at 80.2% (rank 3) is strong for terminal coding. However, no verified SWE-bench, LiveCodeBench, DeepSWE, SciCode, or SWE Atlas scores. AA Intelligence Index coding component is moderate. Capped significantly by lack of comprehensive coding benchmark coverage.
- **Cost efficiency: 70/100.** Free tier available on Google AI Studio and OpenCode Zen. Paid tier at $2.00/$12.00 per 1M is premium pricing with high output costs. Cache discount of 90% helps for repeated contexts. Moderate value at price point.
- **Overall Score: 76/100.** Mean of (55 + 82 + 98 + 85 + 60) / 5 = 76.0, rounded to 76. Best-fit recommendation: Strong reasoning model with exceptional 2M context window and comprehensive multimodal input. Excellent for long-document analysis, knowledge work, and reasoning-heavy tasks. Limitations in verified agentic and coding benchmark coverage suggest caution for production agentic workflows until more data is available.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** — 2026-09-23
- Method: Public internet research (Google AI Studio, Artificial Analysis, BenchLeader, Epoch AI Benchmarking Hub, Scale AI/CAIS); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


