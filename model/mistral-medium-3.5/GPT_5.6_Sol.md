# Mistral Medium 3.5 — findings by GPT 5.6 Sol

- Source: Mistral AI (`mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's unified open-weight flagship for configurable reasoning, vision, agentic work, and coding.
- **Provider / access:** Mistral API `mistral-medium-3.5` and self-hosted weights `mistralai/Mistral-Medium-3.5-128B`.
- **Release / knowledge:** Released 2026-04; cutoff not published.
- **IDs:** `mistral-medium-3.5`, `mistralai/Mistral-Medium-3.5-128B`; no verified Zen Free ID.
- **Context window:** 256K tokens ([official model card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)).
- **Modalities:** Text and image input, text output; configurable reasoning, native functions, and JSON output.
- **Pricing (as of 2026-10-07):** $1.50/M input, $0.15/M cached input, $7.50/M output ([Mistral pricing](https://docs.mistral.ai/inference/pricing)).
- **Architecture:** Dense 128B parameters, Modified MIT license.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4%** (Mistral official evaluation).
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- No textual exact values for GPQA, HLE, LCR/MLCR, CritPt, or AA Intelligence Index were published in the accessible official card.
- LEXam-hard: **31.89** (Hugging Face evaluation metadata).

Coding:

- SWE-bench Verified: **77.6%** (Mistral official agent harness and HF evaluation record).
- SWE-Pro, LiveCodeBench, SciCode, DeepSWE: no verified public score found.

Long context:

- No verified MRCR/RULER score found; 256K capacity is documented.

### Normalized scores (1–100)

- **Tool use: 91/100.** τ³-Telecom 91.4 and native function/JSON support are excellent, capped by thin independent coverage.
- **Reasoning: 82/100.** Configurable reasoning and broad official comparisons indicate strong capability, but few accessible numeric reasoning rows cap confidence.
- **Context window: 85/100.** 256K is substantial, with no published full-window retrieval score.
- **Multimodal: 72/100.** Text and image input are supported, but output is text-only and no numeric vision benchmark was found.
- **Coding: 91/100.** SWE-bench Verified 77.6 is frontier-class agentic coding evidence.
- **Cost efficiency: 79/100.** Open weights add deployment flexibility; API output at $7.50/M is moderate rather than budget-leading.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions; best for self-hostable vision-aware coding and enterprise agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Mistral's official documentation, pricing, and model card; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
