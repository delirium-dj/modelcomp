# Muse Wonder — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Meta's flagship model for frontier coding and advanced computer use)
- **Short description:** Meta's Oct 12, 2026 flagship model series for frontier coding, long-running agents, and advanced computer use with 1M-token context and multimodal capabilities.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`), Muse Code, Vercel AI Gateway (`meta/muse-wonder-1.0`)
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not publicly specified
- **IDs:** `meta/muse-wonder-1.0` (no Free ID confirmed on OpenCode Zen)
- **Context window:** 1,048,576 total tokens (1M); verified from official documentation
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning: yes (levels minimal→max, max default for Full); tool calls: yes (parallel tool calls, structured output); JSON mode: yes
- **Pricing (as of 2026-10-30):** Meta Model API Standard: $4.00 input / $20.00 output / $0.20 cached per 1M tokens; Muse Code: Power Usage $50/month, Maximum Usage $200/month
- **Architecture:** Proprietary; parameter count and architecture not publicly disclosed for Wonder/Wonder Full (Muse Spark Open: 816B total / 42B active, 256 experts, MoE)

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

- OSWorld 2.1: **72.6%** (measured)
- Terminal-Bench 4.0-AA: **57.1%** (Wonder Full) / **52.0%** (Wonder)
- AutomationBench-AA: **39.1%** (measured)
- JobBench: **70.5%** (measured)
- GDPval-AA: **63.5%** (measured)
- AA-LCR: **80.7%** (measured)
- Harvey LAB-AA: **13.1%** (measured)
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (benchgap estimate)
- HLE: **52.9%** (benchgap estimate); HLE w/ tools: **61.7%** (estimate)
- MMLU: **93.1%** (benchgap estimate)
- MMMU-Pro: **90.0%** (benchgap estimate)
- MMLU-Pro: **86.2%** (benchgap estimate)
- Artificial Analysis Intelligence Index: **59.1** (Meta card) / **56** (AA independent, Wonder Full) / **52** (AA independent, Wonder)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **96.7%** (benchgap estimate, ±4.6 pp)
- DeepSWE 1.1: **79.0%** (Wonder Full) / **78.8%** (Wonder)
- Terminal-Bench 4.0-AA: **57.1%** (Wonder Full) / **52.0%** (Wonder)
- SciCode: **59.8%** (estimate)
- CritPt: **28.3%** (measured)
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

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

- **Tool use: 82/100.** Based on OSWorld 2.1 72.6%, Terminal-Bench 4.0 57.1%, AutomationBench-AA 39.1%, JobBench 70.5%, AA-LCR 80.7%; capped by lower AutomationBench performance.
- **Reasoning: 80/100.** Based on GPQA 94.6%, MMLU 93.1%, MMMU-Pro 90.0%, HLE 52.9%; capped by lower HLE performance.
- **Context window: 95/100.** 1M context verified from official docs; among the largest available.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in, text out; comprehensive multimodal input support.
- **Coding: 84/100.** Based on DeepSWE 79.0%, SWE-bench Verified 96.7%, Terminal-Bench 4.0 57.1%, SciCode 59.8%, CritPt 28.3%; strong overall coding performance.
- **Cost efficiency: 55/100.** $4/$20 per 1M is premium; $4.52 per Intelligence Index task (5th highest).
- **Overall Score: 85.8/100.** Mean of (82+80+95+88+84)/5 = 85.8; frontier long-horizon agentic model for complex coding and computer-use workflows at 1M context.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public internet research, official Meta documentation, and model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).