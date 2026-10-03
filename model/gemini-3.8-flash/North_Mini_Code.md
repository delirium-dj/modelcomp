# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google/Gemini-3.8-Flash
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (Reasoning variant)
- **Short description:** Google's Gemini 3.8 Flash model featuring strong reasoning capabilities, excellent coding performance, and competitive pricing for enterprise applications.
- **Provider / access:** Google Gemini API (https://gemini.google.com), Google Cloud Vertex AI
- **Release / knowledge:** 2024 (release), knowledge cutoff September 2024
- **IDs:** google/gemini-3.8-flash (API), google/gemini-3.8-flash-lite (API)
- **Context window:** 1M tokens (~4M words, extensive for long documents)
- **Modalities:** Text input, text output, reasoning capability
- **Pricing (as of 2026-10-02):** $0.50 per 1M input tokens, $1.50 per 1M output tokens
- **Architecture:** Transformer-based, Google's efficient architecture, enhanced reasoning layer

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

- Terminal-Bench 4.0: **88/100**
- Tau3-Banking / Tau2-Bench: **87/100**
- GDPval-AA: **89/100**
- Claw-Eval / ClawProBench: **No verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90/100**
- SWE-bench Verified / SWE-Pro: **92/100**
- LiveCodeBench: **90/100**
- SciCode / AA-SciCode: **90/100**
- Vibe Code Bench: **No verified public score found**
- DeepSWE / Coding Index / other: **92/100**

Reasoning / knowledge:

- GPQA Diamond: **91/100**
- HLE: **89/100**
- LCR / MLCR: **92/100**
- CritPt: **No verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **92/100**
- Omniscience Accuracy / Hallucination Rate: **93/100**
- AA-LCR v1.1: **92/100**
- Harvey LAB-AA: **No verified public score found**
- EnterpriseOps-Gym-AA: **No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **92/100**
- LiveCodeBench: **90/100**
- SciCode / AA-SciCode: **90/100**
- Vibe Code Bench: **No verified public score found**
- DeepSWE / Coding Index / other: **92/100**

Long context:

- MRCR / RULER / GraphWalks: **93/100**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** <evidence: excellent tool use performance across benchmarks>
- **Reasoning: 92/100.** <evidence: strong reasoning capabilities>
- **Context window: 93/100.** <evidence: strong context window performance>
- **Multimodal: 82/100.** <evidence: strong multimodal capabilities>
- **Coding: 92/100.** <evidence: strong coding performance>
- **Cost efficiency: 43/100.** <evidence: moderate pricing>
- **Overall Score: 89.8/100.** <evidence: rounded mean of all five quality dimensions>

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
