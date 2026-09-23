# Union Alpha — findings by GPT 5.6 Terra

- Source: stealth/Pareto 26.9 (provider attribution unresolved)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** A free stealth listing for research, coding and agent workflows. Public reporting identifies it as a Pareto 26.9 blended-model release, but the serving provider/model composition can change.
- **Provider / access:** OpenRouter `stealth/union-alpha`; Cloudflare documents a Union Alpha model. Text and image input plus tool calling are documented.
- **Release / knowledge:** Listed 2026-09-16; knowledge cutoff not published.
- **IDs:** `stealth/union-alpha`.
- **Context window:** 262K input; 131K max output (independent model lifecycle listing).
- **Modalities:** Text and image input; text output; tool calling.
- **Pricing (as of 2026-09-23):** Free through its listed OpenRouter host; no durability guarantee.
- **Architecture:** Undisclosed blended/stealth system.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Pareto 26.9 release comparison, reported as Union Alpha equivalent).
- DeepSWE: **74%** (Pareto 26.9 release table).

Reasoning / knowledge:

- HLE, no tools: **49%** (Pareto 26.9 release table).
- GPQA Diamond: **90.9%** (preview listing; publisher attribution is unavailable).
- LiveBench: **76.1** (preview snapshot listed by the model’s benchmark site).

Coding:

- DeepSWE: **74%** (Pareto 26.9 release table).
- LiveBench coding: **82.1** (preview listing).
- SWE-bench Verified: no verified public score found.

Long context:

- 262K-token context listing; no retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 4.0 at 51% and tool-calling support indicate capable but non-frontier agent execution.
- **Reasoning: 84/100.** HLE 49%, GPQA 90.9%, and LiveBench 76.1 are strong, with stealth provenance limiting confidence.
- **Context window: 82/100.** 262K is substantial, but lacks a retrieval-at-length result.
- **Multimodal: 68/100.** Text and image input are documented; no standardized multimodal score was found.
- **Coding: 78/100.** DeepSWE 74 and LiveBench coding 82.1 are strong indications, though it has no verified SWE-bench result.
- **Cost efficiency: 100/100.** Listed as free, with the caveat that it is a temporary stealth endpoint.
- **Overall Score: 76.4/100.** Mean of the five non-cost quality dimensions: (70 + 84 + 82 + 68 + 78) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public internet research using the provider documentation and attributed release/leaderboard reporting; scores are normalized interpretations, not official vendor scores.
