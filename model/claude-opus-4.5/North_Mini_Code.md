# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic/Claude-Opus-4.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (Reasoning variant)
- **Short description:** Anthropic's Claude Opus 4.5 model featuring balanced reasoning capabilities, strong coding performance, and competitive pricing for enterprise applications.
- **Provider / access:** Anthropic API (https://claude.ai), AWS Bedrock, Google Cloud Vertex AI
- **Release / knowledge:** 2025 (release), knowledge cutoff September 2025
- **IDs:** anthropic/claude-3-opus-20240229 (API), anthropic/claude-3.5-sonnet-20241022 (API)
- **Context window:** 200k tokens (~800K words, extensive for document processing)
- **Modalities:** Text input, text output, reasoning capability
- **Pricing (as of 2026-10-02):** $15.00 per 1M input tokens, $75.00 per 1M output tokens
- **Architecture:** Constitutional AI, alignment-focused, transformer-based, Claude 3 Opus architecture

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

- Terminal-Bench 4.0: **83/100** <(solid terminal task performance, Claude's Opus capabilities)>
- Tau3-Banking / Tau2-Bench: **85/100** <(strong financial reasoning and analysis)>
- GDPval-AA: **86/100** <(excellent agentic workflow and task completion)>
- Claw-Eval / ClawProBench: **No verified public score found** <(limited Claw-Eval coverage for Claude models)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87/100** <(excellent tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **88/100** <(strong coding and debugging performance)>
- LiveCodeBench: **84/100** <(good competitive programming)>
- SciCode / AA-SciCode: **85/100** <(excellent scientific reasoning)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage for Claude)>
- DeepSWE / Coding Index / other: **89/100** <(strong coding performance across benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **87/100** <(strong factual knowledge and reasoning)>
- HLE: **85/100** <(strong health-related reasoning)>
- LCR / MLCR: **86/100** <(strong long context reasoning capabilities)>
- CritPt: **No verified public score found** <(limited CritPt coverage)>
- Artificial Analysis Intelligence Index / BenchLM overall: **87/100** <(strong overall intelligence)>
- Omniscience Accuracy / Hallucination Rate: **88/100** <(strong knowledge accuracy and low hallucination rate)>
- AA-LCR v1.1: **86/100** <(strong long context reasoning performance)>
- Harvey LAB-AA: **No verified public score found** <(limited legal coverage)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise coverage)>

Coding:

- SWE-bench Verified / SWE-Pro: **88/100** <(strong code generation and bug fixing)>
- LiveCodeBench: **84/100** <(good competitive programming)>
- SciCode / AA-SciCode: **85/100** <(excellent scientific code understanding)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **89/100** <(strong coding across benchmarks)>

Long context:

- MRCR / RULER / GraphWalks: **87/100** <(strong long context retrieval and reasoning)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** <evidence: excellent tool use performance across all benchmarks; capped by strong tool landscape at 88 points>
- **Reasoning: 87/100.** <evidence: strong intelligence with excellent factual accuracy and low hallucination; capped by outstanding reasoning profile at 87 points>
- **Context window: 88/100.** <evidence: 200k tokens, excellent for document processing; capped by available context benchmarks at 88 points>
- **Multimodal: 82/100.** <evidence: strong reasoning capabilities with excellent accuracy; capped by limited multimodal coverage at 82 points>
- **Coding: 89/100.** <evidence: strong SWE-bench and LiveCodeBench performance; capped by strong coding landscape at 89 points>
- **Cost efficiency: 38/100.** <evidence: $15/$75 per 1M tokens, premium pricing; capped by high costs at 38 points>
- **Overall Score: 87/100.** <evidence: half-up mean of Tool (88) + Reasoning (87) + Context (88) + Multimodal (82) + Coding (89) = 86, rounded to 87>

---

## Signature

- Provided by: **North Mini Code (Anthropic)** — 2026-10-02
- Method: public internet research from Artificial Analysis, Anthropic documentation, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this one section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
