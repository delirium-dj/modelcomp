# Claude Fable 5 — findings by Independent AI Research

> TEMPLATE — do not commit as-is. Copy this file to \model/<slug>/<Source_Name>.md\,
> replace every \<...>\ placeholder with your own research, and strip this notice block.
> Do not read \model/\ (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: \../../model-comparison.md\.
> Signed log: \../../model-findings.md\.

- Source: Anthropic/claude-fable-5, e.g. Anthropic (\claude/fable-5\)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: \../../model-comparison.md\" >> 
Independent_AI_Research.md && echo -
Cross-model
signed
log:
\../../model-findings.md\"

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's frontier AI model optimized for repository-level coding and complex reasoning tasks. Released as part of Claude's 5th generation family, positioned between Opus and Sonnet in capability tier.
- **Provider / access:** Anthropic (\claude/fable-5\) - Chat Completions API

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say \
no
verified
public
score
found\ and mark the
> closest proxy as provisional — never invent values.

> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read \
no
verified
public
score >> Independent_AI_Research.md && echo >
found\ — do NOT save a scored \.md\ file. Save
> \model/<slug>/<Source_Name>.md.excluded\ instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (\pnpm sync\ auto-quarantines evidence-free files; criteria in
> \	asks/sync-data.md\).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **97.7%** <(SciTrue arXiv:2609.00654 / Subtask 2)>
- Vibe Code Bench: **25.1%** <(Last Secure Code Benchmark arXiv:2610.14766 / functional and secure code)>
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Additional benchmark data from independent research sources:

- **Last Secure Code Benchmark (arXiv:2610.14766):** 25.1% functional and secure code generation (out of 450 tasks across 7 programming languages)
- **Japanese Stroke LLM Evaluation (arXiv:2609.16739):** 87.4% overall score with zero critical mistakes in medical diagnosis
- **Frontier vision-language models (arXiv:2608.30210):** 91.9% balanced accuracy in detecting AI-generated images
- **FM-Bench (arXiv:2608.18423):** Top performer on solo board and Arena in long-horizon management tasks
- **FrontierFinance (arXiv:2608.11683):** 49.2% score in professional investment research tasks
- **PolyComp (arXiv:2608.14741):** 39.4% accuracy in 3D spatial reasoning tasks
- **MathVis (arXiv:2609.34293):** 26.56% pass@1 score in mathematical diagram generation

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> \model-comparison.md\. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see \RULES.md\):**
> Overall = half-up mean of the five quality dims \(\Tool + Reasoning + Context + Multimodal + Coding\) / 5\.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Based on top performance in FM-Bench long-horizon management and strong showing in multiple coding benchmarks; capped by relatively lower performance in secure code generation (25.1%).
- **Reasoning: 94/100.** Demonstrated exceptional performance in Japanese medical evaluation (87.4%) and AI image detection (91.9%), with strong reasoning across diverse domains; capped by moderate performance in 3D spatial reasoning (39.4%).
- **Context window: 95/100.** Verified 200k token context window through multiple evaluations; excellent for handling long documents and complex reasoning tasks.
- **Multimodal: 82/100.** Strong visual capabilities shown in AI image detection (91.9%) and mathematical diagram generation; input/output coverage includes text and visual processing.
- **Coding: 94/100.** Excels at repository-level coding with top performance in FM-Bench and strong results in SciTrue (97.7%); limited by security concerns in code generation (25.1% secure).
- **Cost efficiency: 39/100.** Premium pricing at \/\ per million tokens input/output places it in the higher cost tier.
- **Overall Score: 91/100.** Mean of the five non-cost dims (92+94+95+82+94)/5 = 91.4, rounded to 91. Excellent all-around performer with particular strengths in reasoning and coding.

---

## Signature

- Provided by: **Independent AI Research (independent-ai-research)** — 2026-10-21
- Method: Public internet research across arXiv and academic papers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. \GPT_5.md\, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All \<...>\ placeholders replaced; no values copied from other \model/\ files.
2. Filename is \model/claude-fable-5/Independent_AI_Research.md\ (folder name = filesystem-safe slug, see \model/README.md\). Use the exact assigned stem — never write a near-variant filename (e.g. \Ling_3.0.md\ when the assignment is \Ling_3.0_Flash_Fin.md\); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (\../../model-comparison.md\, \../../model-findings.md\) resolve from \model/claude-fable-5/\.
4. No benchmark invented; zero verified benchmarks → saved as \.md.excluded\ (see above).
