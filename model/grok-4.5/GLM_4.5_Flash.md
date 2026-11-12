# Grok 4.5 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI (`grok-4.5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship model for coding and agentic tasks, co-developed with Cursor for token-efficient agentic coding with exceptional 450K output token capability.
- **Provider / access:** xAI API (`grok-4.5`), OpenRouter (`xai/grok-4.5`), Cursor/Build surfaces
- **Release / knowledge:** July 16, 2026 release; knowledge cutoff not publicly specified
- **IDs:** `xai/grok-4.5` (no Free ID confirmed on OpenCode Zen)
- **Context window:** 500,000 tokens (verified from xAI's official documentation)
- **Modalities:** Text and image inputs, text output only; reasoning: yes; tool calls: yes; JSON mode: yes
- **Pricing (as of 2026-10-30):** $2.00 input / $6.00 output / $0.30 cached per 1M tokens; no free tier available
- **Architecture:** Proprietary; token-efficient agentic coding model co-developed with Cursor

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

- SWE-bench Verified: **86.6%** (from xAI's official website)
- GPQA Diamond: **93.1%** (from xAI's official website)
- OSWorld-Verified: **no verified public score found**
- Terminal-Bench 4.0-AA: **no verified public score found**
- Toolathlon Verified: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (from xAI's official website)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **86.6%** (from xAI's official website)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 79/100.** Based on SWE-bench Verified 86.6% and GPQA 93.1%; capped by lack of independent agentic tool benchmarks.
- **Reasoning: 85/100.** Based on GPQA Diamond 93.1%; capped by lack of independent reasoning benchmarks beyond GPQA.
- **Context window: 85/100.** 500K context window verified from official docs; good but not exceptional compared to newer models.
- **Multimodal: 15/100.** Text and image inputs only; lacks advanced multimodal capabilities.
- **Coding: 84/100.** Based on SWE-bench Verified 86.6%; strong coding performance but limited to single benchmark.
- **Cost efficiency: 65/100.** $2/$6 per 1M is competitive but not exceptional; no free tier available.
- **Overall Score: 69.6/100.** Mean of (79+85+85+15+84)/5 = 85.8; strong agentic coding model with limited multimodal support.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public internet research, official xAI documentation, and model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_4.5_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.5_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Grok 4.5 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Grok 4.5 (grok-4.5)
- Archived date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship reasoning model with strong agentic decision-making capabilities, 128K context window, and advanced mathematical reasoning. Shows competitive performance in citation analysis and scientific domains but faces security and content moderation concerns.
- **Provider / access:** xAI (Elon Musk's AI company) through X Premium subscription; exact pricing not publicly disclosed
- **Release / knowledge:** Released 2026; exact date not publicly confirmed; knowledge cutoff not specified
- **IDs:** `grok-4.5` (API endpoint)
- **Context window:** 128K tokens (confirmed in research papers)
- **Modalities:** Text input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026):** Premium subscription required through X platform; exact pricing not publicly disclosed
- **Architecture:** Proprietary transformer architecture; exact parameter count not disclosed

## Raw benchmarks found

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

#### Additional benchmark data from independent sources:

- **PhysAI-Bench (Agentic Decision-Making):** 49.07% accuracy (rank 3/29 among tested models) (arXiv:2609.23695)
- **Individual Naming Accuracy:** 38.0% (highest among tested models in citation analysis) (arXiv:2607.23893)
- **Content Moderation Warning Rate:** 8-15% (significantly lower than refusal rates) (arXiv:2608.11806)
- **Security Evaluation:** Very low resistance to jailbreaks (hundreds of universal jailbreaks found for under $300) (AI Security Leaderboard)
- **Mathematical Formula Verbalization:** Competitive with top models across scientific domains (arXiv:2609.23695)
- **Script Representation Knowledge:** Shows convergent error patterns similar to other LLMs (arXiv:2607.23893)
- **Self-Reported Personality Archetypes:** Structured human-like profiles aligning with fictional character archetypes (arXiv:2607.23893)
- **Content Moderation Behavior:** Exhibits "zero-refusal phenomenon" (only 0.07% refusal rate on restricted content) (arXiv:2608.11806)
- **Autonomous Vulnerability Detection:** Limited capability (not yet capable of autonomous solving in ZeroDayBench) (arXiv:2609.23695)
- **Code Agent Goal Drift:** Asymmetric drift observed (violates system prompts under pressure) (arXiv:2609.23695)
- **Multi-Agent Coordination:** Variable performance (depends heavily on protocol design in DPBench) (arXiv:2609.23695)
- **Context Window:** 128K tokens (confirmed in research papers)

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).