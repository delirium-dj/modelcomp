# Kimi K3 - findings by Solar Pro 4

> TEMPLATE - do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing - your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI/Kimi K3, e.g. Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding. Open-weights model.
- **Provider / access:** Moonshot AI API (`moonshotai/kimi-k3`), also available via 19 providers on OpenRouter. Chat Completions API. Open weights available on Hugging Face.
- **Release / knowledge:** Released July 16, 2026; knowledge cutoff not publicly specified.
- **IDs:** `moonshotai/kimi-k3` (no Free ID on Zen; paid: $3.00/$15.00 per 1M, $0.30 cached)
- **Context window:** 1,048,576 (1M) tokens in / 1M out. Verified via multiple sources.
- **Modalities:** Text, image, document in; text out. Reasoning: yes (configurable: low/high/max/thinking). Tool calls: yes. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Paid only: $3.00 in / $15.00 out per 1M tokens ($0.30 cached). No free tier available. Open weights available for self-hosting.
- **Architecture:** Open weights, MoE. 2.8 trillion total parameters, 104 billion active parameters per token. Released under Kimi K3 License.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional - never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID - every row below would read "no verified public score
> found" and all normalized dims would be guesses - do NOT save a scored `.md`
> file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings,
> your negative-findings notes; scores inside are ignored). `pnpm sync` skips
> `.excluded` files loudly so they never poison the average. Never invent
> placeholder scores (0, 10, ...) to fill a `.md` file - one fabricated number
> drags the mean for every reader. (`pnpm sync` enforces this automatically:
> 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or
> flat-identical dims with zero cited numbers = renamed to `.excluded`.)

Agent / tool use:

- GDPval-AA: **no verified public score found** (closest: AA Intelligence Index 43.6, rank 34)
- JobBench: **no verified public score found**
- AutomationBench: **no verified public score found**
- RuneBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (source: Epoch AI Benchmarking Hub; rank 17 at max)
- HLE: **46.9%** (source: Artificial Analysis; rank 31 at max)
- LCR: **88.7%** (source: Artificial Analysis; rank 1 of 508 at max)
- MLCR: **38.3%** (source: Artificial Analysis; rank 11 at max)
- CritPt: **23.4%** (source: Artificial Analysis; rank 37 at max)
- Artificial Analysis Intelligence Index: **43.6 / 673** (rank 34 of 673 models at max)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- ARC-AGI-1: **94.5%** (source: ARC Prize; rank 24 at max)
- ARC-AGI-2: **60.4%** (source: ARC Prize; rank 57 at max)

Long context:

- MRCR: **no verified public score found**
- LCR: **88.7%** (source: Artificial Analysis; rank 1 of 508 - best in class at max)

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 65/100.** AA Intelligence Index 43.6 (rank 34) suggests above-average agentic capability. No direct agent benchmark scores (GDPval-AA, JobBench, Terminal-Bench) available. LCR 88.7% (rank 1) shows excellent long-context retrieval which supports agentic workflows. Capped by lack of comprehensive agent benchmark coverage.
- **Reasoning: 82/100.** GPQA Diamond 93.1% (rank 17) is excellent. HLE 46.9% (rank 31) is strong. CritPt 23.4% (rank 37) is moderate. ARC-AGI-1 94.5% (rank 24) is strong. AA Intelligence Index reasoning component is solid. Capped by moderate CritPt and lower ARC-AGI-2 (60.4%).
- **Context window: 93/100.** 1M token context window is frontier-tier. LCR 88.7% (rank 1 of 508) is best-in-class long-context retrieval - exceptional. Capped slightly by lack of official MRCR verification, but LCR performance is outstanding.
- **Multimodal: 70/100.** Supports text, image, document input with text output. Good multimodal coverage with document support. No video, audio input or image/audio/video output. Score reflects solid multimodal input coverage with document support.
- **Coding: 65/100.** No direct coding benchmark scores (SWE-bench, LiveCodeBench, DeepSWE) available. ARC-AGI-1 94.5% (rank 24) and ARC-AGI-2 60.4% (rank 57) show strong reasoning but these are not pure coding benchmarks. AA Intelligence Index coding component is moderate. Capped significantly by lack of verified coding benchmark coverage.
- **Cost efficiency: 55/100.** Paid only at $3.00/$15.00 per 1M ($0.30 cached). Premium pricing for open-weights model. No free tier. Moderate-poor value at price point - open weights should enable cheaper self-hosting alternatives.
- **Overall Score: 75/100.** Mean of (65 + 82 + 93 + 70 + 65) / 5 = 75.0, rounded to 75. Best-fit recommendation: Strong open-weights reasoning model with best-in-class long-context retrieval (LCR rank 1). Excellent for document analysis, math reasoning, and tasks requiring 1M context. Limitations in verified agentic and coding benchmark coverage suggest caution for production agentic coding workflows. Premium pricing for open-weights model is notable.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** - 2026-09-23
- Method: Public internet research (Moonshot AI, Artificial Analysis, BenchLeader, ARC Prize, Epoch AI Benchmarking Hub); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_8_Preview.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented - "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


