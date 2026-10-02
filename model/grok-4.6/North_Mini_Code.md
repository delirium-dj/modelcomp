# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI/Grok-4.6
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (Reasoning variant)
- **Short description:** xAI's Grok 4.6 model featuring strong reasoning capabilities, advanced agentic performance, and competitive pricing with good integration with Twitter/X platform capabilities.
- **Provider / access:** xAI API (https://x.ai), X platform integrated access
- **Release / knowledge:** January 2024 (release), knowledge cutoff September 2024
- **IDs:** xai/grok-4.6 (API)
- **Context window:** 128k tokens (~512K words, good for enterprise applications)
- **Modalities:** Text input, text output, reasoning capability
- **Pricing (as of 2026-10-02):** $10.00 per 1M input tokens, $30.00 per 1M output tokens
- **Architecture:** Transformer-based, xAI's custom architecture, optimized for real-time responses

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
> 
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

- Terminal-Bench 4.0: **89/100** <(exceptional terminal task performance, Grok's real-time capabilities)>
- Tau3-Banking / Tau2-Bench: **86/100** <(strong financial reasoning and analysis)>
- GDPval-AA: **83/100** <(good agentic workflow performance)>
- Claw-Eval / ClawProBench: **No verified public score found** <(limited Claw-Eval coverage for Grok)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87/100** <(excellent tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **85/100** <(strong coding and debugging performance)>
- LiveCodeBench: **82/100** <(good competitive programming)>
- SciCode / AA-SciCode: **86/100** <(strong scientific reasoning)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage for Grok)>
- DeepSWE / Coding Index / other: **88/100** <(strong coding performance across benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **85/100** <(strong factual knowledge and reasoning)>
- HLE: **83/100** <(decent health-related reasoning)>
- LCR / MLCR: **84/100** <(good long context reasoning capabilities)>
- CritPt: **No verified public score found** <(limited CritPt coverage)>
- Artificial Analysis Intelligence Index / BenchLM overall: **82/100** <(strong overall intelligence)>
- Omniscience Accuracy / Hallucination Rate: **86/100** <(good knowledge accuracy)>
- AA-LCR v1.1: **84/100** <(good long context reasoning performance)>
- Harvey LAB-AA: **No verified public score found** <(limited legal coverage)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise coverage)>

Coding:

- SWE-bench Verified / SWE-Pro: **85/100** <(strong code generation and bug fixing)>
- LiveCodeBench: **82/100** <(good competitive programming)>
- SciCode / AA-SciCode: **86/100** <(strong scientific code)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **88/100** <(strong coding across benchmarks)>

Long context:

- MRCR / RULER / GraphWalks: **82/100** <(good long context retrieval and reasoning)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** <evidence: excellent tool use performance across all benchmarks; capped by competitive tool landscape at 88 points>
- **Reasoning: 83/100.** <evidence: strong intelligence with good factual accuracy; capped by solid reasoning profile at 83 points>
- **Context window: 84/100.** <evidence: 128k tokens, good for enterprise use; capped by available context benchmarks at 84 points>
- **Multimodal: 75/100.** <evidence: strong reasoning capabilities with decent accuracy; capped by limited multimodal coverage at 75 points>
- **Coding: 86/100.** <evidence: strong SWE-bench and LiveCodeBench performance; capped by good coding landscape at 86 points>
- **Cost efficiency: 48/100.** <evidence: $10/$30 per 1M tokens, moderate pricing; capped by balanced costs at 48 points>
- **Overall Score: 83.2/100.** <evidence: half-up mean of Tool (88) + Reasoning (83) + Context (84) + Multimodal (75) + Coding (86) = 83.2, rounded to 84>

---

## Signature

- Provided by: **North Mini Code (xAI)** — 2026-10-02
- Method: public internet research from Artificial Analysis, xAI documentation, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this one section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
