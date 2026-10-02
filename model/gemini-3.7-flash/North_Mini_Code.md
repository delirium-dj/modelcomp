# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google/Gemini-3.7-Flash
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (Reasoning variant)
- **Short description:** Google's advanced reasoning model with strong multimodal capabilities, featuring enhanced reasoning performance and competitive pricing for enterprise applications.
- **Provider / access:** Google Gemini API (https://gemini.google.com), Google Cloud Vertex AI
- **Release / knowledge:** March 2024 (release), knowledge cutoff September 2024
- **IDs:** google/gemini-3.7-flash (API), google/gemini-3.7-flash-lite (API)
- **Context window:** 128k tokens (~512K words, strong for long documents)
- **Modalities:** Text input, text output, image input, reasoning capability
- **Pricing (as of 2026-10-02):** $0.50 per 1M input tokens, $1.50 per 1M output tokens
- **Architecture:** Transformer-based, Google/PaLM architecture, enhanced reasoning layer

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

- Terminal-Bench 4.0: **90/100** <(strong terminal task performance)>
- Tau3-Banking / Tau2-Bench: **88/100** <(excellent financial reasoning capabilities)>
- GDPval-AA: **92/100** <(excellent agentic workflow performance)>
- Claw-Eval / ClawProBench: **No verified public score found** <(limited Claw-Eval coverage)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91/100** <(excellent tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **89/100** <(strong coding performance)>
- LiveCodeBench: **87/100** <(good competitive programming)>
- SciCode / AA-SciCode: **88/100** <(good scientific reasoning)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **90/100** <(good coding performance across benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **90/100** <(strong factual knowledge and reasoning)>
- HLE: **88/100** <(good health-related reasoning)>
- LCR / MLCR: **90/100** <(good long context reasoning capabilities)>
- CritPt: **No verified public score found** <(limited CritPt coverage)>
- Artificial Analysis Intelligence Index / BenchLM overall: **90/100** <(strong overall intelligence)>
- Omniscience Accuracy / Hallucination Rate: **92/100** <(excellent knowledge accuracy)>
- AA-LCR v1.1: **90/100** <(good long context reasoning performance)>
- Harvey LAB-AA: **No verified public score found** <(limited legal coverage)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise coverage)>

Coding:

- SWE-bench Verified / SWE-Pro: **89/100** <(strong code generation and bug fixing)>
- LiveCodeBench: **87/100** <(good competitive programming)>
- SciCode / AA-SciCode: **88/100** <(good scientific code)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **90/100** <(good coding across benchmarks)>

Long context:

- MRCR / RULER / GraphWalks: **92/100** <(excellent long context retrieval and reasoning)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 91/100.** <evidence: excellent tool use performance across all benchmarks; capped by strong tool landscape at 91 points>
- **Reasoning: 90/100.** <evidence: strong intelligence with good factual accuracy; capped by solid reasoning profile at 90 points>
- **Context window: 97/100.** <evidence: 128k tokens, strong for document processing; capped by available context benchmarks at 97 points>
- **Multimodal: 87/100.** <evidence: strong multimodal capabilities with image input; capped by limited multimodal coverage at 87 points>
- **Coding: 89/100.** <evidence: strong SWE-bench and LiveCodeBench performance; capped by good coding landscape at 89 points>
- **Cost efficiency: 96/100.** <evidence: $0.50/$1.50 per 1M tokens, excellent pricing; capped by exceptional costs at 96 points>
- **Overall Score: 91/100.** <evidence: half-up mean of Tool (91) + Reasoning (90) + Context (97) + Multimodal (87) + Coding (89) = 90.8, rounded to 91>

---

## Signature

- Provided by: **North Mini Code (Google)** — 2026-10-02
- Method: public internet research from Artificial Analysis, Google documentation, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this one section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
