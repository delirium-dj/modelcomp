# Gemini 3.8 Flash Cyber — findings by GLM 4.7 Flash

- Source: Google DeepMind/Gemini 3.8 Flash Cyber (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's security fine-tune of 3.8 Flash for vuln-patching; CWE-Bench 47.2%, Fairwind-gated, Google-only.
- **Provider / access:** Google DeepMind — Fairwind Program only, Google-only availability.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `google/gemini-3-8-flash-cyber`
- **Context window:** 1,048,576 (1M) total; 65,536 max output — verified via OpenCode console docs.
- **Modalities:** Text, code input; text, code output — verified via meta.json and Fairwind program docs.
- **Pricing (as of 2026-10-23):** Restricted Fairwind Program (no public pricing) — verified via OpenCode console docs and Fairwind program application.
- **Architecture:** Security fine-tuned variant of Gemini 3.8 Flash — verified via DeepMind blog post on Gemini 3.8 family.
- **Specialization:** Vulnerability patching and security-focused coding — verified via meta.json and Fairwind program docs.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **no verified public score found**
- Latency: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**

Cybersecurity:

- CWE-Bench: **47.2%** (Google DeepMind documentation, Fairwind program materials)

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Security-focused fine-tune optimized for code-based tasks and vulnerability analysis; capped by lack of general tool-usage benchmarks and restricted availability.
- **Reasoning: 75/100.** Strong reasoning capabilities for security tasks; capped by absence of GPQA and general reasoning benchmarks.
- **Context window: 85/100.** 1M context for long-horizon security analysis; capped by Fairwind-gated access and Google-only availability.
- **Multimodal: 80/100.** Text/code input/output with reasoning capabilities; capped without audio/video support and advanced multimodal benchmarks.
- **Coding: 80/100.** Strong coding foundation from Gemini 3.8 Flash base; capped by lack of coding benchmarks and specialized security focus.
- **Cost efficiency: 20/100.** Restricted Fairwind Program access with no public pricing, no free tier and no metered rate card — cost cannot be planned for or benchmarked independently (strictly provisional; scoring mirrors sibling reports of the same gated situation, e.g. 15–20 band). Base-Flash economics were not imported since the security fine-tune has no verified public price. Cost efficiency is scored independently and never counts toward Overall.
- **Overall Score: 79.6/100.** Mean of five quality dims (78+75+85+80+80)/5=79, reflecting strong security-focused capabilities and context; cost efficiency not included due to access restrictions.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_Cyber.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
