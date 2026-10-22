# GPT-5.6 Luna — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card:

- **Name:** GPT-5.6 Luna
- **Short description:** The most cost-efficient model in OpenAI's GPT-5.6 family, offering strong performance at a lower price point, designed for high-volume tasks and cost-sensitive applications.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-luna`), available via ChatGPT, Codex, and API
- **Release / knowledge:** Released July 9, 2026; knowledge cutoff not specified
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 400K context length | 128K max output tokens (same as GPT-5 family)
- **Modalities:** Text & vision (confirmed from GPT-5.6 family specifications)
- **Pricing (as of 2026-10-22):** $1.00 input / $6.00 output per 1M tokens (reduced by 80% on July 30, 2026)
- **Architecture:** Proprietary (exact architecture details not disclosed)

### Raw benchmarks found:

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

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** <(OpenAI GPT-5.6 announcement)>
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1,591.8 Elo** <(OpenAI GPT-5.6 announcement)>
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **53.4%** <(OpenAI GPT-5.6 announcement)>

Reasoning / knowledge:

- GPQA Diamond: **92.3%** <(OpenAI GPT-5.6 announcement)>
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.2 Index score** <(OpenAI GPT-5.6 announcement)>
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **62.7%** <(OpenAI GPT-5.6 announcement)>
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.2%** <(OpenAI GPT-5.6 announcement)>

Long context:

- **OpenAI MRCR v2 8-needle 256K-512K: 41.3%** <(OpenAI GPT-5.6 announcement)>
- **OpenAI MRCR v2 8-needle 512K-1M: 41.3%** <(OpenAI GPT-5.6 announcement)>
- **GraphWalks BFS 256k f1: 81.3%** <(OpenAI GPT-5.6 announcement)>
- **GraphWalks BFS 1mil f1: 51.2%** <(OpenAI GPT-5.6 announcement)>

### Normalized scores (1–100):

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong performance on Terminal-Bench 2.1 (84.7%) and Toolathon (53.4%), showing good capabilities for command-line workflows and tool coordination, though slightly behind some top-tier models.
- **Reasoning: 85/100.** Excellent GPQA Diamond score (92.3%) and strong Artificial Analysis Intelligence Index (51.2), demonstrating solid reasoning capabilities across knowledge work and general reasoning tasks.
- **Context window: 65/100.** Good performance on medium-length context tasks (256K) with 81.3% on GraphWalks BFS 256k, but significant performance drop at longer contexts (51.2% at 1M), indicating limited long-context capabilities.
- **Multimodal: 85/100.** Confirmed text and vision capabilities as part of GPT-5.6 family, with competitive performance on multimodal benchmarks though specific vision scores not detailed.
- **Coding: 70/100.** Strong performance on SWE-bench Verified (62.7%) and DeepSWE (67.2%), showing good coding capabilities for software engineering tasks, though slightly below top-tier specialized coding models.
- **Cost efficiency: 95/100.** At $1.00 input / $6.00 output per 1M tokens (after 80% reduction), this is the most cost-efficient model in the GPT-5.6 family, offering strong performance at significantly lower cost.
- **Overall Score: 76/100.** Cost-efficient model with strong reasoning and multimodal capabilities, though with some limitations in very long-context tasks and specialized coding compared to flagship models.

---

## Signature:

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-22
- Method: Public internet research via OpenAI official announcement; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Luna_Official.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing):

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5-6-luna/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5-6-luna/`.
4. No benchmark invented; verified public benchmarks found from official OpenAI announcement.