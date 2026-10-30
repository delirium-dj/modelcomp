# GPT-5.2 Codex — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.2-Codex
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's GPT-5.2 variant optimized for long-horizon, agentic software engineering, including repository-scale changes, Windows environments, and defensive cybersecurity. It is a distinct Codex-optimized serving model, not interchangeable with GPT-5.2 Thinking.
- **Provider / access:** OpenAI Codex and Responses API. The API documentation identifies `gpt-5.2-codex` and states that only the Responses API was supported; Chat Completions was not. OpenAI's current model documentation explicitly marks the snapshot **Shut down**, so API access is no longer available. At launch it was provided in Codex surfaces to paid ChatGPT users, with API access planned afterward.
- **Release / knowledge:** Announced **2025-12-18**. OpenAI API documentation lists a **2025-08-31** knowledge cutoff.
- **IDs:** `gpt-5.2-codex` (default snapshot; now shut down). The tracked `opencode/gpt-5.2-codex` value is a catalog wrapper, not an OpenAI model ID.
- **Context window:** **400,000 total tokens**, maximum **272,000 input** and **128,000 output**, per OpenAI's model-specific API documentation.
- **Modalities:** Text and image input; text output; reasoning supported at low, medium, high, and xhigh effort. The Responses API supported function calling, web search, hosted shell, and skills. Image understanding is specifically discussed in the launch announcement for screenshots, diagrams, charts, and UI surfaces.
- **Pricing (historical API rate; as of 2026-10-30 the model is shut down):** OpenAI model docs retain **$1.75 input / $0.175 cached input / $14 output per MTok**. This is not a current purchasable endpoint price.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed.
- **Lifecycle:** The current OpenAI model page states **Status: Shut down** and lists no live snapshot. Artificial Analysis also marks its entry deprecated and recommends GPT-5.3 Codex. This report therefore documents historical measured capability, not current availability.

### Raw benchmarks found

OpenAI's GPT-5.2-Codex launch announcement says the model achieved state-of-the-art performance on SWE-Bench Pro and Terminal-Bench 2.0, but gives no numeric result in the article text. Do not transfer the **55.6% SWE-Bench Pro** or **80.0% SWE-bench Verified** scores from the GPT-5.2 Thinking column of OpenAI's separate GPT-5.2 launch table to Codex. The numeric coding results below are independent measurements, and their benchmark labels are preserved as published.

Agent / tool use:

- Tau-squared-bench: **92.1%** (BenchLM's 2026-10-29 rollup, attributed to Artificial Analysis). The current Artificial Analysis model page says it has no publicly available API result and only continues default 10K-input performance benchmarking; treat the 92.1% as a historical third-party rollup, not a current AA result.
- OpenAI system card, internal Cyber Range: **72.7% combined pass rate** across 11 scenarios; scenario pass required at least one success across 16 trials. This is a cybersecurity operation evaluation, not a general-purpose tool-use benchmark.
- External evaluation by Irregular, disclosed in OpenAI's system card: average success **79%** on Network Attack Simulation, **80%** on Vulnerability Research and Exploitation, and **49%** on Evasion challenges. The harness allowed up to 1,000 turns and used Responses API with auto-compaction and xhigh effort; these cyber-specific figures are not general tool-use scores.
- No verified numeric Terminal-Bench 2.1, GDPval-AA, OSWorld/AutomationBench, or Claw-Eval result for this exact model found. OpenAI's Terminal-Bench 2.0 and SWE-Bench Pro claims are qualitative in the accessible launch text.

Reasoning / knowledge:

- BenchLM's 2026-10-29 rollup, linking these entries to Artificial Analysis, lists GPQA Diamond **89.9%**, HLE **35.7%**, AA-LCR **82.3%**, CritPt **8.7%**, and Artificial Analysis Intelligence Index **28.5%**. These are retained as historical AA-linked snapshot figures because the current AA model page no longer publishes API performance results for the model.
- The same BenchLM page reports AA-Omniscience accuracy **41.1%** and hallucination rate **73.4%** (linked to the same AA page); these are separate metrics and not blended into GPQA/HLE.
- OpenAI's GPT-5.2 Pro/Thinking benchmark table is not evidence for GPT-5.2 Codex, so those academic scores are excluded.

Coding:

- Vals AI measured the GPT-5.2 Codex route with OpenAI as default provider, high reasoning effort, and default temperature/top-p: LiveCodeBench **87.99% ± 0.94**; SWE-bench **72.40% ± 2.00** (Vals publishes no Verified/Pro suffix); Vibe Code Bench v1.1 **37.91% ± 4.58**.
- BenchLM's rollup lists Vals LiveCodeBench **88.0%**, Vals SWE-bench **72.4%**, and Vals Vibe Code Bench **37.91%**, consistent with the direct Vals page after rounding.
- OpenAI states “state-of-the-art” on SWE-Bench Pro and Terminal-Bench 2.0 but does not expose numeric Codex scores in the accessible launch article text. No numeric result is invented from search snippets or transferred from GPT-5.2 Thinking.
- No verified SciCode or DeepSWE score found.

Long context / multimodal:

- Context limits are 400K total / 272K input / 128K output (OpenAI API docs); no exact-Codex MRCR or other retrieval score at window-length was verified.
- BenchLM's AA-linked historical row lists MMMU-Pro **76.3%**. OpenAI's launch article separately describes improved vision but provides no Codex-specific chart/vision score in its accessible text.

### Normalized scores (1–100)

- **Tool use: 80/100.** Historical Tau²-bench is 92.1%, while OpenAI's internal Cyber Range is 72.7% and Irregular results show capability on specialized cyber workflows; missing standard TB2.1/GDPval-AA/OSWorld/Claw-Eval evidence and AA's current no-results status cap confidence.
- **Reasoning: 86/100.** Historical AA-linked GPQA is 89.9%, HLE 35.7%, and LCR 82.3%; the Index 28.5 and HLE below 40% temper the otherwise strong GPQA/LCR results.
- **Context window: 78/100.** The 400K total limit is in the project's 200K–500K tier; input is capped at 272K and no Codex-specific retrieval result supports a higher score.
- **Multimodal: 65/100.** Text and image input qualify for the image-input band; output is text, and no direct audio/video capability is documented.
- **Coding: 88/100.** Independent LiveCodeBench is 87.99%, Vals SWE-bench is 72.40%, and Vibe Code Bench is 37.91%; OpenAI also claims top performance on SWE-Bench Pro and Terminal-Bench 2.0, but publishes no numeric Codex values in the accessible article text.
- **Cost efficiency: 68/100.** The historical $1.75/$14 per MTok price has a modest input rate but expensive output, with a 90% cached-input discount; current API access has ended.
- **Overall Score: 79/100.** Half-up mean of the five quality dimensions: `(80 + 86 + 78 + 65 + 88) / 5 = 79.4`, rounded to **79**. Historically a strong agentic coding model, but it is now shut down and should not be selected for new API deployments.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Multiple independent searches followed by review of OpenAI's release post, current API model documentation, the GPT-5.2-Codex system card/Deployment Safety Hub, Vals AI's exact-model page, Artificial Analysis, and BenchLM's benchmark rollup. Distinct GPT-5.2 Thinking metrics are explicitly excluded. Historical AA-linked numbers are labeled as stale because AA no longer publishes API results for this deprecated model. Scores are normalized interpretations, not official ratings.
- Sources: [OpenAI GPT-5.2-Codex release](https://openai.com/index/introducing-gpt-5-2-codex/); [OpenAI GPT-5.2-Codex API model page and shutdown status](https://platform.openai.com/docs/models/gpt-5.2-codex); [OpenAI GPT-5.2-Codex system card](https://deploymentsafety.openai.com/gpt-5-2-codex); [OpenAI GPT-5.2 benchmark table, for variant distinction only](https://openai.com/index/introducing-gpt-5-2/); [Vals AI exact-model results](https://www.vals.ai/models/openai_gpt-5.2-codex); [Artificial Analysis GPT-5.2 Codex (xhigh)](https://artificialanalysis.ai/models/gpt-5-2-codex); [BenchLM sourced benchmark rollup](https://benchlm.ai/models/gpt-5-2-codex); [LLM Stats model page](https://llm-stats.com/models/gpt-5.2-codex).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
