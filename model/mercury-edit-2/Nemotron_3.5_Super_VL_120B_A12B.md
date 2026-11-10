# Mercury Edit 2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Inception Labs / Mercury Edit 2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs diffusion-based next-edit prediction model for code autocomplete and multi-line edits. Public webfetch lookup of Inception Labs' models page lists Mercury 3, Mercury Voice, and Mercury Decide — Mercury Edit 2 is not listed on the current public models page (Inception notes Mercury 2 and Mercury 2.5 are no longer available to new users).
- **Provider / access:** Inception Labs route `inception/mercury-edit-2`; API at https://api.inceptionlabs.ai/v1/chat/completions (OpenAI-compatible). Public models page does not list Mercury Edit 2 with a price; Inception's listed models: Mercury 3 ($0.10/$0.35 per 1M), Mercury Decide ($0.02/$0 per 1M), Mercury Voice ($0.20/$0.75 per 1M).
- **Release / knowledge:** Not confirmed via public source.
- **IDs:** `inception/mercury-edit-2` referenced in project metadata; not found on Inception's public models page via webfetch.
- **Context window:** not publicly confirmed via webfetch (Inception's flagship Mercury 3 lists 1M tokens context; Mercury Edit 2 not confirmed).
- **Modalities:** text in; text out (Inception diffusion dLLMs are OpenAI-compatible; unified language + other modalities is a stated research direction, but Mercury Edit 2 specifically not confirmed via webfetch).
- **Pricing (as of 2026-11-11):** not publicly confirmed for Mercury Edit 2 via webfetch; Inception's public listed pricing: Mercury 3 $0.10/$0.35 per 1M, Mercury Decide $0.02/$0 per 1M.
- **Architecture:** Diffusion-based LLM (dLLM) per Inception Labs (webfetch): generates tokens in parallel, 1000+ tokens/sec on commercial NVIDIA GPUs, OpenAI-compatible, sub-300ms time to first token claimed for the family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): no per-task cost or speed figures located via webfetch for Mercury Edit 2. Inception claims family-wide 1000+ tokens/sec and up to 70% lower cost per task.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 45/100.** Specialized edit-prediction model (FIM / multi-line diffs), not a general tool-calling agent per public description; no published Terminal-Bench / Tau3 / GDPval figures. Capped by narrow edit-prediction scope.
- **Reasoning: 40/100.** Diffusion-based model, not a traditional chain-of-thought reasoning model; no published GPQA / HLE / CritPt numbers. Capped by absence of verified reasoning benchmarks.
- **Context window: 10/100.** Not publicly confirmed via webfetch; lowest tier (<100K → 10–49).
- **Multimodal: 15/100.** Text in, text out per public description — text-only = 10–20 per methodology.
- **Coding: 65/100.** Purpose-built for code autocomplete and multi-line edits (FIM tuning); parallel denoising for low-latency Tab completions. Capped by absence of published SWE-bench / LiveCodeBench figures.
- **Cost efficiency: 50/100.** No public pricing confirmed for Mercury Edit 2 via webfetch; cannot claim free or verified cheap tier.
- **Overall Score: 35/100.** Mean of (45 + 40 + 10 + 15 + 65) / 5 = 35.0 → 35. Best-fit: low-latency code autocomplete / multi-line edit prediction; not a general-purpose conversational or reasoning model; public specs unverified.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (Inception Labs models page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs: Our Models](https://inceptionlabs.ai/models)
  - [Inception Labs: https://inceptionlabs.ai/](https://inceptionlabs.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
