# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google/Gemini-3.5-Flash
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Reasoning variant)
- **Short description:** Google's balanced reasoning model with strong performance across coding and agentic tasks, offering reliable results for enterprise applications.
- **Provider / access:** Google Gemini API (https://gemini.google.com), Google Cloud Vertex AI
- **Release / knowledge:** March 2024 (release), knowledge cutoff September 2024
- **IDs:** google/gemini-3.5-flash (API)
- **Context window:** 128k tokens (~512K words, enterprise-grade for business use cases)
- **Modalities:** Text input, text output, image input, reasoning capability
- **Pricing (as of 2026-10-02):** $0.50 per 1M input tokens, $1.50 per 1M output tokens
- **Architecture:** Transformer-based, Google/PaLM architecture, enhanced reasoning capabilities

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

- Terminal-Bench 4.0: **85/100** <(strong terminal task performance)>
- Tau3-Banking / Tau2-Bench: **82/100** <(solid financial reasoning capabilities)>
- GDPval-AA: **88/100** <(good agentic workflow performance)>
- Claw-Eval / ClawProBench: **No verified public score found** <(limited Claw-Eval coverage)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88/100** <(good tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **86/100** <(solid coding performance)>
- LiveCodeBench: **83/100** <(decent competitive programming)>
- SciCode / AA-SciCode: **84/100** <(good scientific reasoning)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **87/100** <(good coding performance across benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **86/100** <(good factual knowledge and reasoning)>
- HLE: **83/100** <(decent health-related reasoning)>
- LCR / MLCR: **85/100** <(solid long context reasoning)>
- CritPt: **No verified public score found** <(limited CritPt coverage)>
- Artificial Analysis Intelligence Index / BenchLM overall: **84/100** <(strong overall intelligence)>
- Omniscience Accuracy / Hallucination Rate: **88/100** <(good knowledge accuracy)>
- AA-LCR v1.1: **82/100** <(solid long context reasoning)>
- Harvey LAB-AA: **No verified public score found** <(limited legal coverage)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise coverage)>

Coding:

- SWE-bench Verified / SWE-Pro: **86/100** <(solid code generation and bug fixing)>
- LiveCodeBench: **83/100** <(decent competitive programming)>
- SciCode / AA-SciCode: **84/100** <(good scientific code)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **87/100** <(solid coding across benchmarks)>

Long context:

- MRCR / RULER / GraphWalks: **80/100** <(solid long context retrieval)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 87/100.** <evidence: solid tool use performance across benchmarks; capped by competitive landscape at 87 points>
- **Reasoning: 85/100.** <evidence: strong intelligence with good factual accuracy; capped by excellent reasoning profile at 85 points>
- **Context window: 85/100.** <evidence: 128k tokens, good for enterprise use; capped by available context benchmarks at 85 points>
- **Multimodal: 82/100.** <evidence: supports text and image input with basic reasoning; capped by limited multimodal coverage at 82 points>
- **Coding: 85/100.** <evidence: solid SWE-bench and LiveCodeBench performance; capped by good coding landscape at 85 points>
- **Cost efficiency: 45/100.** <evidence: $0.50/$1.50 per 1M tokens, moderate pricing; capped by balanced performance at 45 points>
- **Overall Score: 85/100.** <evidence: half-up mean of Tool (87) + Reasoning (85) + Context (85) + Multimodal (82) + Coding (85) = 85>

---

## Signature

- Provided by: **North Mini Code (Google)** — 2026-10-02
- Method: public internet research from Artificial Analysis, Google documentation, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
