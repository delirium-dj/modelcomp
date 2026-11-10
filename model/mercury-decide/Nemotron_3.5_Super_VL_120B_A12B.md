# Mercury Decide — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Inception Labs / Mercury Decide
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based System One decision model for structured classification, confidence estimation, and agentic routing via typed log-probabilities. Native structured decision output with sub-100ms latency claimed for the family.
- **Provider / access:** Inception Labs route `inception/mercury-decide`; API at https://api.inceptionlabs.ai/v1/chat/completions (OpenAI-compatible). Listed on Inception's public models page as "Mercury Decide".
- **Release / knowledge:** Not confirmed via public source.
- **IDs:** `inception/mercury-decide` (Inception Labs). Listed on Inception's public models page.
- **Context window:** not publicly confirmed via webfetch.
- **Modalities:** text in; text out — structured decision output (typed choices, binary routing), not open-ended conversational generation; no vision/audio confirmed via webfetch.
- **Pricing (as of 2026-11-11):** $0.02 per 1M input tokens, $0 per 1M output tokens (Inception's public models page, Mercury Decide). Very cheap.
- **Architecture:** Diffusion-based System One decision model per Inception Labs (webfetch); generates tokens in parallel, 1000+ tokens/sec on commercial NVIDIA GPUs, OpenAI-compatible.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found. System One decision model, not a traditional reasoning model.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): sub-100ms latency claimed for the family; no per-task cost figures located via webfetch. Pricing: $0.02/1M input, $0/1M output.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 45/100.** Designed for structured classification and agentic routing via typed log-probabilities, not general tool calling; no published Terminal-Bench / Tau3 / GDPval figures. Capped by narrow decision-routing scope.
- **Reasoning: 50/100.** System One (fast, instinctive) decision model rather than deliberative chain-of-thought reasoning; no published GPQA / HLE / CritPt numbers. Capped by narrow scope and absence of verified reasoning benchmarks.
- **Context window: 10/100.** Not publicly confirmed via webfetch; lowest tier (<100K → 10–49).
- **Multimodal: 15/100.** Text in, text out only — text-only = 10–20 per methodology.
- **Coding: 45/100.** Not designed for conversational open-ended coding; specialized for structured decision output. No published SWE-bench / LiveCodeBench / DeepSWE figures. Capped by narrow scope.
- **Cost efficiency: 98/100.** $0.02 per 1M input tokens, $0 per 1M output tokens (very cheap; methodology: ~$0.10/$0.20 → 97–99; $0 output pushes to ~98).
- **Overall Score: 33/100.** Mean of (45 + 50 + 10 + 15 + 45) / 5 = 33.0 → 33. Best-fit: ultra-low-latency structured classification and agentic routing; not a general-purpose conversational, reasoning, or coding model.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (Inception Labs models page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs: Our Models](https://inceptionlabs.ai/models)
  - [Inception Labs: https://inceptionlabs.ai/](https://inceptionlabs.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
