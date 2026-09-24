# Grok 4 — findings by Space Bunny Alpha

- Source: xAI (`grok-4`; non-reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's 2025 reasoning-oriented model, now superseded by later Grok releases and documented as a legacy/non-reasoning catalog entry.
- **Provider / access:** xAI API (`grok-4`); current SpaceXAI documentation focuses on Grok 4.7 and does not expose a current Grok 4 model page.
- **Release / knowledge:** BenchLM lists July 9, 2025. No reliable knowledge cutoff was found.
- **IDs:** `grok-4`; exact current availability should be confirmed with xAI before deployment.
- **Context window:** **128K** (BenchLM catalog, accessed 2026-09-24; the profile notes the direct source link is unavailable). Maximum output not verified.
- **Modalities:** Exact Grok 4 modality table was not found in current official documentation; do not transfer current Grok 4.7 capabilities backward. Reasoning/tool details are therefore marked unverified.
- **Pricing (as of 2026-09-24):** No comparable first-party API token rate was published in the reviewed catalog; current xAI pricing is not substituted.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Gert Labs Composite Game Benchmark: **42.34** (BenchLM, exact benchmark source; only surfaced agentic row for this profile)
- Terminal-Bench, Tau3, GDPval, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **19.655%**; Tier 4: **2.083%** (BenchLM, Epoch AI leaderboard)
- No exact-model GPQA, HLE, LCR/MLCR, CritPt, or hallucination values were found.

Coding:

- React Native Evals: **72.6%** (BenchLM, React Native Evals leaderboard)
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Catalog context: **128K**; no retrieval-at-length result found.

Sources consulted: [BenchLM Grok 4 profile](https://benchlm.ai/models/grok-4) and [SpaceXAI model documentation](https://docs.x.ai/docs/models/grok-4), accessed 2026-09-24. Current SpaceXAI documentation is for Grok 4.7; its specifications are not transferred to Grok 4.

### Normalized scores (1–100)

- **Tool use: 48/100.** Gert Labs Composite Game 42.34 is the only surfaced agentic measure, and no standard Terminal-Bench/Tau/tool benchmark was found.
- **Reasoning: 38/100.** FrontierMath v2 results are weak (19.655% and 2.083%), with no exact-model GPQA/HLE values to support a higher estimate.
- **Context window: 60/100.** The catalog reports 128K context, below modern 200K+ tiers, with no retrieval result.
- **Multimodal: 15/100.** The exact Grok 4 modality table was not verified; no multimodal capability is claimed.
- **Coding: 65/100.** React Native Evals 72.6% is useful, but standard SWE-bench, LiveCodeBench, SciCode, and DeepSWE results are absent.
- **Cost efficiency: 60/100.** No comparable first-party rate was published, so the model is scored conservatively as a paid route without a verified low price.
- **Overall Score: 45.2/100.** (48 + 38 + 60 + 15 + 65) / 5 = 45.2. Best fit: historical comparison only; current xAI documentation directs users to newer Grok models.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of BenchLM's exact Grok 4 profile and current SpaceXAI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
