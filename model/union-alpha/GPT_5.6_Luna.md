# Union Alpha — findings by GPT 5.6 Luna

- Source: Union Alpha / current Pareto 26.9 reveal
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Union Alpha
- **Short description:** A routed/composite model identity in this dataset. Union Alpha's current public reveal maps the route to Pareto 26.9, but the folder identity remains Union Alpha because routing can change and the source does not authorize a silent rename.
- **Provider / access:** Union Alpha / Unbiased paid endpoint, currently exposed publicly as `unbiased/pareto`; the measured release page identifies the current route as Pareto 26.9.
- **Release / knowledge:** Current Pareto 26.9 reveal dated 2026-09-18; knowledge cutoff not verified.
- **IDs:** Dataset identity `union-alpha`; current measured public route `unbiased/pareto`. These are recorded as a mapping, not merged identities.
- **Context window:** 262,144 tokens; maximum output 131,072 tokens, according to the current Union Alpha/Pareto specification.
- **Modalities:** Text and image input, text output, and tool calling are documented for the current Pareto route.
- **Pricing (as of 2026-11-02):** $2.50 per 1M input tokens, $7.50 per 1M output tokens, and $0.25 per 1M cached input; paid route, no current free lane verified.
- **Architecture:** Routed/proprietary; the underlying provider architecture is not disclosed.

### Raw benchmarks found

> The first five rows below are explicitly labelled Pareto 26.9 on the current Union Alpha page. Preview rows are retained with their labels because a routed Union Alpha request is not guaranteed to remain on that route.

- DeepSWE: **74**; official Pareto 26.9 release table.
- Terminal-Bench 4.0: **51**; official Pareto 26.9 release table.
- MMMU-Pro: **78**; official Pareto 26.9 release table.
- Humanity's Last Exam without tools: **49**; official Pareto 26.9 release table.
- ArXivMath: **88**; official Pareto 26.9 release table.
- GPQA Diamond: **90.9%**; Union Alpha preview measurement, route-dependent.
- LiveBench: **76.1**; Union Alpha preview measurement, route-dependent.
- AutoExacto ARI Bench: **32/100**; one-seed preview result.
- AI BENCHY: **8.9/10**; paid Pareto endpoint comparison.

### Normalized scores (1–100)
- **Tool use: 82/100.** DeepSWE 74, Terminal-Bench 51, and documented tool calling support strong agentic utility, capped by routing variability.
- **Reasoning: 82/100.** GPQA 90.9%, ArXivMath 88, and HLE 49 are strong but come from mixed route/release conditions.
- **Context window: 82/100.** The current route documents 262K context, but no exact retrieval result at the maximum window was found.
- **Multimodal: 65/100.** Image input and text output are documented; no audio/video or non-text output was verified.
- **Coding: 78/100.** DeepSWE 74 and Terminal-Bench 51 are useful exact-route signals, with no standardized SWE-bench result and route instability as caps.
- **Cost efficiency: 78/100.** $2.50/$7.50 paid pricing is competitive for a multimodal agent route, but it is not free and output cost is material.
- **Overall Score: 78/100.** `(82 + 82 + 82 + 65 + 78) / 5 = 77.8`, half-up to **78**; best fit is paid routed tool/coding work where endpoint drift is acceptable.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh identity-resolution research; Union Alpha was kept separate from the currently revealed Pareto 26.9 route, and preview/Pareto benchmark labels and routing caveats were preserved. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Union Alpha current model and benchmark reveal](https://union-alpha.com/)
  - [Union Alpha public organization page](https://union-alpha.org/)
