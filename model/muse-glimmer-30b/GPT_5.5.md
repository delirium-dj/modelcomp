# Muse Glimmer 30B — findings by GPT 5.5

- Source: Meta (`muse-glimmer-30b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta open-weight dense 30B multimodal model distilled from Muse Spark and aimed at local agentic workflows on consumer hardware.
- **Provider / access:** Open weights and third-party hosted routes such as OpenRouter-style providers.
- **Release / knowledge:** Public listings appeared September 2026; cutoff not stated.
- **IDs:** `meta/muse-glimmer-30b`, `Muse-Glimmer-30B`.
- **Context window:** Catalog listings report **131K** tokens; community experiments report extended contexts such as 512K-832K with custom settings.
- **Modalities:** Text and image input through official `mmproj`/vision setup; text output.
- **Pricing (as of 2026-10-05):** Hosted routes report about **$0.35/M input** and **$1.50/M output**; open-weight self-hosting has no per-token license fee.
- **Architecture:** Dense open-weight 30B-class model.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis summary reports **Tau-Bench Banking 23.5%** and **Terminal-Bench 51.7%**.
- Public local reports describe strong agentic/tool-calling behavior relative to same-size local models.

Reasoning / knowledge:

- Artificial Analysis summary reports **GPQA 83.5%** and **Humanity's Last Exam 22%**.
- ModelScale overall score: **42.28**.

Coding:

- Artificial Analysis Coding Index: **49.0**; SciCode **44.9%**.

Long context:

- Artificial Analysis summary reports Long Context Reasoning **83.3%**.
- Catalog context: **131K**; community extended tests report **832K 3/3 retrieval**, treated as nonstandard.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 51.7 is respectable for a local 30B model, while Tau-Bench 23.5 caps agent reliability.
- **Reasoning: 72/100.** GPQA 83.5 is strong, but HLE 22 and overall score keep it below frontier.
- **Context window: 76/100.** Official 131K is moderate-high; long-context reasoning and extended community tests lift confidence.
- **Multimodal: 65/100.** Vision input is available, but no audio/video output support was verified.
- **Coding: 64/100.** SciCode 44.9 and Coding Index 49 are solid for the size.
- **Cost efficiency: 90/100.** Open weights plus low hosted prices make it high value.
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions; best fit is local multimodal agent experiments on modest hardware.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

