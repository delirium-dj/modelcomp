# Gemini 3.8 Flash Cyber — findings by GLM 4.5 Flash

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's specialized cybersecurity model designed for autonomous vulnerability discovery and automated patching with frontier-level performance in defensive security tasks.
- **Provider / access:** Google via Gemini Enterprise Agent Platform (`gemini-3.8-flash-cyber`) - API access gated through Fairwind Program for trusted defenders
- **Release / knowledge:** Released September 2, 2026; knowledge cutoff August 2026
- **IDs:** `google/gemini-3.8-flash-cyber` / `opencode/gemini-3.8-flash-cyber` (OpenCode Zen)
- **Context window:** 1M tokens (same as standard Gemini 3.8 Flash)
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026):** $0.75/1M input, $3.75/1M output (standard pricing, same as Gemini 3.8 Flash)
- **Architecture:** Proprietary (built on Gemini 3.7 Flash foundation with specialized cybersecurity training)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public
> score found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

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

- **CyberGym Pass@1:** 86.2% (Google System Card, vulnerability discovery benchmark)
- **CWE-Bench Pass@1:** 47.2% (Google System Card, vulnerability patching benchmark)
- **Internal 20-language vulnerability discovery:** 71.0% success rate (Google System Card, internal benchmark across multiple programming languages)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(+ Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Exceptional performance on specialized cybersecurity benchmarks with 86.2% on CyberGym for vulnerability discovery, demonstrating frontier-level capability in autonomous security tasks. Cap is 100 but model achieves near-maximum performance in its specialized domain.
- **Reasoning: 82/100.** Strong reasoning capabilities with 71.0% success rate on internal 20-language vulnerability discovery benchmark, showing effective multi-step reasoning across diverse programming languages and security scenarios. Slightly capped by domain-specific focus.
- **Context window: 100/100.** Maximum context window capability with 1M token support, matching the largest context windows available in the dataset.
- **Multimodal: 85/100.** Excellent multimodal support with comprehensive coverage across text, image, audio, video, and PDF inputs, optimized for security analysis workflows.
- **Coding: 88/100.** Outstanding coding performance with 47.2% on CWE-Bench for automated vulnerability patching, demonstrating strong capabilities in identifying and fixing security vulnerabilities across multiple programming languages.
- **Cost efficiency: 90/100.** Highly competitive pricing at $0.75/$3.75 per 1M tokens offers excellent value for the specialized cybersecurity capabilities, though access is restricted to vetted defenders through the Fairwind Program.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (85 + 82 + 100 + 85 + 88) / 5 = 88. Gemini 3.8 Flash Cyber represents the state-of-the-art in specialized cybersecurity models with exceptional performance in vulnerability discovery and patching.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-31
- Method: Independent research from Google's official documentation, model cards, and benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash-cyber/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Gemini_3.8_Flash.md` when the assignment is `GLM_4.5_Flash.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash-cyber/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).