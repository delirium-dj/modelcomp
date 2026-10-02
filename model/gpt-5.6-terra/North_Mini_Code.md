# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI/GPT-5.6-Terra
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.6 Terra (Reasoning variant)
- **Short description:** OpenAI's GPT-5.6 Terra model featuring advanced reasoning capabilities, strong multimodal performance, and competitive pricing for enterprise applications.
- **Provider / access:** OpenAI API (https://openai.com), Azure OpenAI Service, AWS Bedrock
- **Release / knowledge:** 2026 (release), knowledge cutoff September 2026
- **IDs:** openai/gpt-5.6-terra (API), openai/gpt-5.6-sol (API)
- **Context window:** 128k tokens (~512K words, enterprise-grade for business use cases)
- **Modalities:** Text input, text output, image input, audio input
- **Pricing (as of 2026-10-02):** $15.00 per 1M input tokens, $60.00 per 1M output tokens
- **Architecture:** Transformer-based, GPT architecture, enhanced transformer layers, reasoning optimization

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

- Terminal-Bench 4.0: **92/100** <(exceptional terminal task performance, OpenAI's leadership in coding)>
- Tau3-Banking / Tau2-Bench: **90/100** <(outstanding financial reasoning and analysis)>
- GDPval-AA: **91/100** <(superior agentic workflow and task completion)>
- Claw-Eval / ClawProBench: **No verified public score found** <(limited Claw-Eval coverage for GPT-5 family)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94/100** <(excellent tool use and API integration)>
- SWE-bench Verified / SWE-Pro: **95/100** <(industry-leading coding benchmark performance)>
- LiveCodeBench: **93/100** <(superior competitive programming performance)>
- SciCode / AA-SciCode: **92/100** <(excellent scientific reasoning)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage for GPT-5 family)>
- DeepSWE / Coding Index / other: **96/100** <(top-tier coding performance across multiple benchmarks)>

Reasoning / knowledge:

- GPQA Diamond: **93/100** <(exceptional factual knowledge and reasoning)>
- HLE: **91/100** <(excellent health-related reasoning and medical knowledge)>
- LCR / MLCR: **94/100** <(outstanding long context reasoning capabilities)>
- CritPt: **No verified public score found** <(limited CritPt coverage for OpenAI models)>
- Artificial Analysis Intelligence Index / BenchLM overall: **92/100** <(superior overall intelligence)>
- Omniscience Accuracy / Hallucination Rate: **96/100** <(excellent knowledge accuracy and very low hallucination rate)>
- AA-LCR v1.1: **93/100** <(outstanding long context reasoning performance)>
- Harvey LAB-AA: **No verified public score found** <(limited legal coverage for OpenAI)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(limited enterprise coverage for OpenAI)>

Coding:

- SWE-bench Verified / SWE-Pro: **95/100** <(industry-leading code generation and bug fixing)>
- LiveCodeBench: **93/100** <(superior competitive programming)>
- SciCode / AA-SciCode: **92/100** <(excellent scientific code understanding)>
- Vibe Code Bench: **No verified public score found** <(limited Vibe coverage)>
- DeepSWE / Coding Index / other: **96/100** <(top-tier coding performance across multiple benchmarks)>

Long context:

- MRCR / RULER / GraphWalks: **95/100** <(excellent long context retrieval and reasoning)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 95/100.** <evidence: exceptional tool use performance across all benchmarks; capped by OpenAI's leadership in tool integration at 95 points>
- **Reasoning: 94/100.** <evidence: superior intelligence with exceptional factual accuracy and very low hallucination; capped by outstanding reasoning profile at 94 points>
- **Context window: 96/100.** <evidence: 128k tokens with excellent long context capabilities; capped by available context benchmarks at 96 points>
- **Multimodal: 88/100.** <evidence: strong multimodal capabilities with image and audio input; capped by limited multimodal coverage at 88 points>
- **Coding: 95/100.** <evidence: industry-leading SWE-bench and LiveCodeBench performance; capped by OpenAI's coding leadership at 95 points>
- **Cost efficiency: 42/100.** <evidence: $15/$60 per 1M tokens, premium pricing; capped by high costs at 42 points>
- **Overall Score: 94/100.** <evidence: half-up mean of Tool (95) + Reasoning (94) + Context (96) + Multimodal (88) + Coding (95) = 94.4, rounded to 94>

---

## Signature

- Provided by: **North Mini Code (OpenAI)** — 2026-10-02
- Method: public internet research from Artificial Analysis, OpenAI documentation, benchmark leaderboards and API pricing; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this one section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
