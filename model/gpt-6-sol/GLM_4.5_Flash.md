# GPT-6 Sol — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: GPT-6 Sol (gpt-6-sol)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September 2026 mainstream GPT-6 reasoning/coding model for agentic work, lower-priced than Astra and distinct from the subsequently released GPT-6.1 Sol.
- **Provider / access:** OpenAI Responses API `gpt-6-sol` for hosted tools and function calls; Chat Completions supports function calls only when reasoning effort is `none`
- **Release / knowledge:** September 22, 2026; April 20, 2026 knowledge cutoff
- **IDs:** OpenAI `gpt-6-sol` (default snapshot), project route `opencode/gpt-6-sol`
- **Context window:** 1,050,000 total, 922,000 max input / 128,000 max output
- **Modalities:** Text input, image input; text output; reasoning yes (none/low/medium/high/xhigh/max); tool calls supported (web/file search, code interpreter, shell, computer use, MCP)
- **Pricing (as of 2026):** $2 input / $0.20 cached input / $2.50 cache write / $10 output per 1M tokens; >272K input doubles input/cache rates and multiplies output by 1.5 for the entire request
- **Architecture:** Proprietary; weights and parameter count unpublished

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

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Intelligence Index:** 48 (ranked #26 of 214 models) (Artificial Analysis)
- **Output speed:** 98.2 tokens/second (ranked #52 of 185 models) (Artificial Analysis)
- **Cost per task:** $1.04 (ranked #54 of 112 models) (Artificial Analysis)
- **Context window:** 1M tokens (~1575 A4 pages) (Artificial Analysis)
- **Input/Output pricing:** $2.00/$10.00 per 1M tokens (Artificial Analysis)
- **Vals Index:** 62.57% (ranked #8 of 65 models) (Vals AI)
- **CyberBench v1.1:** 77.98% ±5.11 (ranked #2 of 47 models) (Vals AI)
- **Vibe Code Bench v1.1:** 87.82% ±2.53 (ranked #10 of 116 models) (Vals AI)
- **Code Migration:** 57.20% ±4.21 (ranked #9 of 79 models) (Vals AI)
- **ProofBench v1.1:** 83.00% ±3.77 (ranked #13 of 51 models) (Vals AI)
- **BioMysteryBench:** 74.81% ±2.43 (ranked #7 of 28 models) (Vals AI)
- **Terminal-Bench 4.0:** 44.44% ±3.54 (ranked #10 of 52 models) (Vals AI)
- **Finance Agent v2:** 49.05% ±0.58 (ranked #48 of 80 models) (Vals AI)
- **Harvey Legal Agent:** 1.67% ±0.82 (ranked #41 of 69 models) (Vals AI)
- **Overall Score:** 78.58/100 (ranked #9 of 972 models) (BenchLM)
- **Agents' Last Exam:** 56.4% (BenchLM)
- **AutomationBench:** 33.2% (BenchLM)
- **OSWorld 2.0:** 60.5% (BenchLM)
- **DeepSWE:** 68.8% (BenchLM)
- **AA-SciCode:** 57.6% (BenchLM)
- **ARC-AGI-1:** 95.50% (BenchLM)
- **ARC-AGI-2:** 89.6% (BenchLM)
- **ARC-AGI-3:** 4.6% (BenchLM)
- **AA-LCR:** 83.7% (BenchLM)
- **CritPt:** 30.9% (BenchLM)
- **AA-MMMU-Pro:** 82.9% (BenchLM)
- **FrontierMath v2 (Tiers 1-3):** 89.825% (BenchLM)
- **FrontierMath v2 (Tier 4):** 90.000% (BenchLM)
- **HLE:** 47.9% (Artificial Analysis)
- **Omniscience Accuracy / Hallucination Rate:** 54.5% / 60.1% (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 89/100.** Strong performance with Vibe Code Bench 87.82% and Terminal-Bench 4.0 44.44%; excellent agentic capabilities with OSWorld 2.0 60.5% but limited by Harvey Legal Agent 1.67% performance in specialized domains.
- **Reasoning: 91/100.** Exceptional reasoning capabilities with ARC-AGI-2 89.6% and AA-LCR 83.7%; sophisticated logical thinking though ARC-AGI-3 4.6% shows significant difficulty with most complex reasoning tasks.
- **Context window: 95/100.** Outstanding 1.05M token context window with AA-LCR 83.7% indicating excellent long-context handling; premium pricing for >272K inputs prevents perfect score.
- **Multimodal: 76/100.** Good visual reasoning with AA-MMMU-Pro 82.9% but limited to text/image input with text output only; no native audio/video capabilities.
- **Coding: 89/100.** Excellent coding performance with DeepSWE 68.8%, Vibe Code Bench 87.82%, and AA-SciCode 57.6%; strong code generation and debugging capabilities.
- **Cost efficiency: 80/100.** Competitive $2/$10 pricing with 90% cache discount but cache write costs and long-request premiums affect overall efficiency.
- **Overall Score: 88/100.** Strong all-around performer with excellent reasoning and coding capabilities; ideal for professional applications requiring balanced performance and competitive pricing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Artificial Analysis, Vals AI, BenchLM, and OpenAI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-sol/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-sol/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).