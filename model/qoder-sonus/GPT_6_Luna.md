# Qoder Sonus — findings by GPT-6 Luna

- Source: Qoder/Qoder Sonus
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoder Sonus
- **Short description:** Qoder's built-in model for long-running autonomous tasks, complex knowledge work, coding, and computer use. Qoder describes it as a new model, but does not disclose its underlying base checkpoint or model architecture.
- **Provider / access:** Available only through Qoder products (Qoder IDE/Desktop/CLI, JetBrains plugin, QoderWake, and Cloud Agents); no public standalone API or model ID was verified.
- **Release / knowledge:** Announced 2026-09-10; knowledge cutoff not published.
- **IDs:** Product name Sonus; no independently verifiable provider model ID. Do not assume an underlying Qwen or other checkpoint without disclosure.
- **Context window:** Qoder does not publish a Sonus-specific token window in the materials reviewed.
- **Modalities:** Text and computer-use interaction are documented; Qoder's product can operate the user's desktop and professional software. Native image/video input and non-text output are not specified for Sonus itself.
- **Pricing (as of 2026-10-28):** Qoder subscription credits, with model consumption multiplier reported as 8x effective Sept. 21, 2026. This is a product credit factor, not a token price; plan quotas vary.
- **Architecture:** Undisclosed proprietary service; no parameter count, weights, or license identified.

### Raw benchmarks found

Qoder's announcement describes intended use cases and product access but publishes no reproducible model benchmark results for Sonus.

Agent / tool use:

- No verified public Sonus score for OSWorld, τ-bench, Toolathlon, or another common tool-use benchmark found.

Reasoning / knowledge:

- No verified public GPQA, HLE, or Artificial Analysis Intelligence Index score found.

Coding:

- Qoder describes Sonus as designed for serious coding, but no Sonus-specific SWE-bench or coding benchmark score was found.

Long context:

- Qoder calls the tasks “marathon-length,” but publishes no verified token context limit or long-context retrieval score.

### Normalized scores (1–100)

- **Tool use: 55/100.** Computer-use positioning is documented, but no benchmark or accessible standalone API validates success rates.
- **Reasoning: 55/100.** Marketing describes difficult knowledge work, but no verified reasoning benchmark was found.
- **Context window: 50/100.** No public token capacity or retrieval benchmark is documented.
- **Multimodal: 55/100.** Desktop interaction is a useful capability, but native modality support is not specified; no score claim is inferred from the surrounding Qoder application.
- **Coding: 55/100.** Coding is a stated target use case, but no reproducible Sonus-specific coding result is public.
- **Cost efficiency: 40/100.** The 8x Qoder credit multiplier is high relative to built-in model options, and there is no token-based price for value comparison.
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions; promising as an integrated Qoder computer-use agent, but public evaluation evidence is insufficient for a capability ranking.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public-source research. No benchmark numbers are fabricated; absent public measurements are stated explicitly. Normalized scores are conservative interpretations of limited public evidence.
- Sources: [Qoder Sonus announcement](https://forum.qoder.com/t/sonus-is-here-our-new-built-in-model-with-a-special-talent-for-computer-use/12408); [Qoder credit multiplier notice](https://docs.qoder.com/release-notes/model-consumption-reference-update); [Qoder CLI model selection reference](https://docs.qoder.com/cli/model).
