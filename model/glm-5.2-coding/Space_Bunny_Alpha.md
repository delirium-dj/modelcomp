# GLM 5.2 Coding — findings by Space Bunny Alpha

- Source: Z.AI / provider route (`glm-5.2`; coding-plan alias)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** A provider coding-plan alias/route for Z.AI's GLM-5.2, rather than a separately identified checkpoint. It is intended for long-horizon software-engineering agents and project-scale context.
- **Provider / access:** Provider alias `glm-5.2`; AIHubMix exposes `coding-glm-5.2` and maps the actual model ID to `glm-5.2`. OpenAI-compatible Chat Completions, tool calling, web search, URL context, code interpreter, computer use, file search, structured output, caching, and background mode are listed for that route.
- **Release / knowledge:** Z.AI released GLM-5.2 on 2026-06-16 (Featherless release coverage). No reliable knowledge cutoff was shown.
- **IDs:** `glm-5.2`; provider alias `coding-glm-5.2`. The folder's `opencode/glm-5.2-coding` is a route label; do not treat it as a separate model ID. Artificial Analysis tracks `GLM-5.2 (max)` and `GLM-5.2 (Non-reasoning)`.
- **Context window:** **1M input tokens; 128K maximum output** (Z.AI official documentation). Provider deployments may expose different limits; AIHubMix reports 1M/131K for the route.
- **Modalities:** Text input and text output; reasoning modes, streaming, function calling, context caching, structured output, and MCP supported. The reviewed official model specification is text-only.
- **Pricing (as of 2026-09-29):** AIHubMix still lists **$0.06 per 1M input / $0.22 per 1M output** for `coding-glm-5.2`; Z.AI first-party is **$1.40 per 1M input / $4.40 per 1M output** with cached input at $0.14–$0.26/1M, and Artificial Analysis reports a $0.9/1M blended figure. The route is capacity-limited and may return 429s. The limited-time promotion billing off-peak Coding Plan usage at 1× (instead of 2×) **ends with September 2026**, so off-peak economics will worsen after 2026-09-30.
- **Speed / latency:** Z.AI first-party serves roughly **37 output t/s with ~2.9 s time to first token**; multi-provider telemetry averages **~68 t/s** across gateways, ranging from ~30 t/s up to 161 t/s. GLM-5.2 is thinking-first, so time to first *answer* is much longer than TTFT.
- **Architecture:** Open-weight MoE, approximately **753B total / ~40B active**; MIT license (Featherless launch coverage and Artificial Analysis). New for this release: **IndexShare** sparse attention (indexer reused across every four sparse attention layers, ~2.9× fewer per-token FLOPs at 1M context) and an improved MTP layer for speculative decoding (+20% acceptance length). Effort-level control (High / Max) trades capability against speed and token cost.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.AI official documentation)
- FrontierSWE: **74.4%** (Featherless launch coverage quoting the GLM-5.2 benchmark)
- PostTrainBench: exact GLM-5.2 value **not exposed** in the fetched text; source says it ranks second only to Opus 4.8.
- SWE-Marathon: **13.0%** (Featherless launch coverage)
- Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- AIME 2026: **99.2%** (Featherless launch coverage)
- GPQA-Diamond: **91.2%** (Featherless launch coverage)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**
- Artificial Analysis Intelligence Index v4.3.2: **34** for `GLM-5.2 (max)` and **22** for `GLM-5.2 (Non-reasoning)` (Artificial Analysis; the index composes 10 evaluations, including Terminal-Bench 4.0, HLE, SciCode, CritPt, and AA-LCR v1.1). The 2026-09-24 report recorded this as "no verified public score found"; the v4.3.2 value is newly available. Rank: 28 of ~674 models.
- AA-Omniscience and AA-Briefcase v1.1 sub-scores: **no verified public exact value found**

Coding:

- SWE-bench Pro: **62.1%** (Z.AI official documentation and Featherless launch coverage)
- Terminal-Bench 2.1: **81.0%**
- FrontierSWE: **74.4%**
- SWE-Marathon: **13.0%**
- SWE-bench Verified, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public score found**

Long context:

- Context capacity: **1M input tokens** (Z.AI official documentation); no independent retrieval-at-length result was found.

Sources consulted: [Z.AI GLM-5.2 overview](https://docs.z.ai/guides/llm/glm-5.2), [Z.AI GLM-5.2 launch blog](https://z.ai/blog/glm-5.2), [Featherless GLM-5.2 launch coverage](https://featherless.ai/blog/whats-new-in-glm-5-2-run-it-on-featherless), [AIHubMix coding-glm-5.2 route](https://aihubmix.com/model/coding-glm-5.2), and [Artificial Analysis GLM-5.2 (max)](https://artificialanalysis.ai/models/glm-5-2), accessed 2026-09-29. The route is explicitly identified as GLM-5.2, so its measured base-model results are used with the alias clearly labeled.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 81.0%, FrontierSWE 74.4%, and extensive documented function/tool/MCP support provide strong evidence; missing Tau, GDPval, and direct Toolathlon values cap certainty.
- **Reasoning: 91/100.** AIME 2026 99.2% and GPQA-Diamond 91.2% are exceptional measured results, with high/max thinking controls documented; missing HLE/LCR values prevent a maximum.
- **Context window: 95/100.** Z.AI verifies a 1M input window and 128K output, placing it in the top context tier; no retrieval-at-length benchmark was found.
- **Multimodal: 15/100.** The evaluated official model is text-only; image and audio input are not supported in the reviewed specification.
- **Coding: 92/100.** Terminal-Bench 81.0%, SWE-bench Pro 62.1%, FrontierSWE 74.4%, and SWE-Marathon 13.0% provide strong long-horizon coding evidence, with the difficult marathon result a clear limitation.
- **Cost efficiency: 88/100.** The $0.06/$0.22 route is very cheap for a frontier open-weight coding model, but it is a limited provider route rather than a guaranteed general API.
- **Overall Score: 76.6/100.** (90 + 91 + 95 + 15 + 92) / 5 = 76.6. Best fit: low-cost text coding agents and repository-scale refactors; use a multimodal model when visual or audio input is required.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Z.AI, Featherless, and AIHubMix provider documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
