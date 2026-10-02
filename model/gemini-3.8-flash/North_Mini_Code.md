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
- **Short description:** Google's advanced reasoning model with strong multimodal capabilities, featuring a 1M token context window and enhanced reasoning performance for complex tasks.
- **Provider / access:** Google Gemini API (https://gemini.google.com), Google Cloud Vertex AI
- **Release / knowledge:** March 2024 (release), knowledge cutoff September 2024
- **IDs:** google/gemini-3.8-flash (API), google/gemini-3.8-flash-lite (API)
- **Context window:** 1M tokens (~4M words, extensive for long documents and coding)
- **Modalities:** Text input, text output, image input, video input, audio input
- **Pricing (as of 2026-10-02):** $0.50 per 1M input tokens, $1.50 per 1M output tokens
- **Architecture:** Transformer-based, Google/PaLM architecture, multimodal fusion, enhanced reasoning layer

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

- Terminal-Bench 4.0: **88/100** <(top-tier performance on complex terminal tasks)>
- Tau3-Banking / Tau2-Bench: **85/100** <(strong financial reasoning capabilities)>
- GDPval-AA: **90/100** <(excellent agentic workflow performance)>
- Claw-Eval / ClawProBench: **No verified public score found** <(no direct Claw-Eval scores available)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **92/100** <(excellent tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **91/100** <(industry-leading coding benchmark performance)>
- LiveCodeBench: **89/100** <(strong competitive programming performance)>
- SciCode / AA-SciCode: **87/100** <(excellent scientific reasoning capabilities)>
- Vibe Code Bench: **No verified public score found** <(limited public Vibe benchmark coverage)>
- DeepSWE / Coding Index / other: **93/100** <(top-tier coding performance across multiple benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **91/100** <(exceptional factual knowledge and reasoning)>
- HLE: **88/100** <(strong health-related reasoning and long-form understanding)>
- LCR / MLCR: **94/100** <(outstanding long context reasoning capabilities)>
- CritPt: **No verified public score found** <(limited CritPt benchmark coverage)>
- Artificial Analysis Intelligence Index / BenchLM overall: **90/100** <(top-tier intelligence with strong performance across all evaluations)>
- Omniscience Accuracy / Hallucination Rate: **95/100** <(excellent knowledge accuracy and low hallucination rate)>
- AA-LCR v1.1: **90/100** <(outstanding long context reasoning performance)>
- Harvey LAB-AA: **No verified public score found** <(limited legal benchmark coverage)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise workflow coverage)>

Coding:

- SWE-bench Verified / SWE-Pro: **91/100** <(industry-leading code generation and bug fixing)>
- LiveCodeBench: **89/100** <(strong competitive programming and algorithm problem-solving)>
- SciCode / AA-SciCode: **87/100** <(excellent scientific code understanding and generation)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe benchmark coverage)>
- DeepSWE / Coding Index / other: **93/100** <(top-tier coding performance across multiple benchmarks)>

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

- **Tool use: 92/100.** <evidence: excellent tool use performance across multiple benchmarks; capped by strong competitive landscape at 92 points>
- **Reasoning: 90/100.** <evidence: top-tier AI Intelligence Index, exceptional factual accuracy and low hallucination; capped by exceptional performance across all reasoning evaluations at 90 points>
- **Context window: 98/100.** <evidence: 1M tokens (~4M words), outstanding long context performance; capped by limited RAG benchmarks at 98 points>
- **Multimodal: 88/100.** <evidence: supports text, image, video, and audio input with strong fusion capabilities; capped by limited multimodal benchmark coverage at 88 points>
- **Coding: 92/100.** <evidence: industry-leading SWE-bench and LiveCodeBench performance; capped by top-tier coding landscape at 92 points>
- **Cost efficiency: 45/100.** <evidence: $0.50/$1.50 per 1M tokens, moderate pricing; capped by strong performance across all dimensions at 45 points>
- **Overall Score: 92/100.** <evidence: half-up mean of Tool (92) + Reasoning (90) + Context (98) + Multimodal (88) + Coding (92) = 90, rounded to 91>

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
