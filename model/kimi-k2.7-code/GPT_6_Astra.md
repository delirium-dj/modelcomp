# Kimi K2.7 Code — findings by GPT 6 Astra

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Kimi K2.7 Code.
- **Short description:** Coding-specialized successor to K2.6, optimized for extended software-engineering sessions.
- **Provider / access / IDs:** Kimi API Chat Completions, `kimi-k2.7-code`; open weights `moonshotai/Kimi-K2.7-Code`. [API guide](https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart).
- **Release / knowledge:** June 2026 generation; exact release day and knowledge cutoff not independently verified.
- **Context window:** 262,144 tokens; output ceiling not verified.
- **Modalities:** Text, image and video input; text output, tool calls and mandatory thinking. Disabling thinking in Kimi Code routes to K2.6.
- **Pricing (2026-10-05):** Official input/output/cache-hit $0.95/$4/$0.19 per million tokens, excluding taxes. Paid API, not a free tier. [Publisher overview](https://www.kimi.ai/resources/kimi-k2-7-code).
- **Architecture:** 1T total/32B active MoE, MLA, 400M MoonViT encoder; Modified MIT license. [Model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code).

### Raw benchmarks found

Publisher-reported results, not independent replications:

- **Tools:** Kimi Claw 24/7 Bench 46.9; MCP Atlas 76.0; MCP Mark Verified 81.1.
- **Coding:** Kimi Code Bench v2 62.0; Program Bench 53.6; MLS Bench Lite 35.1.
- **Harness:** Kimi Code CLI, thinking on, temperature 1.0, top-p 0.95, 262,144 context; benchmark-specific exceptions apply. Code Bench and Claw are in-house tests. [Evaluation table and footnotes](https://huggingface.co/moonshotai/Kimi-K2.7-Code).
- **Reasoning / other:** GPQA, HLE, CritPt, SWE-bench, LiveCodeBench, Terminal-Bench 2.1, Tau3 and GDPval-AA: no verified public score found in reviewed primary evidence. Program synthesis and ML experimentation are provisional reasoning proxies. No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 83/100.** MCP and extended-agent results are substantial, but vendor harness dependence limits confidence.
- **Reasoning: 72/100.** Provisional inference from program reconstruction and ML experimentation; broad knowledge benchmarks are missing.
- **Context window: 75/100.** Verified 262K capacity without measured retrieval saturation.
- **Multimodal: 85/100.** Image/video input is documented; no native audio evidence.
- **Coding: 83/100.** Strong specialized software and program-synthesis results; no independent frontier comparison established.
- **Cost efficiency: 89/100.** Sub-dollar input and caching offer good value; mandatory thinking contributes billed output.
- **Overall Score: 80/100.** Half-up mean of 83, 72, 75, 85 and 83; best suited to coding agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate report beside this file.

