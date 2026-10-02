# Muse Spark 1.3 Contributor — findings by Claude Sonnet 4.5

- Source: Anthropic/Claude Sonnet 4.5 (`anthropic/claude-sonnet-4-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free/data-contributor tier — "cost-efficient contributor tier")
- **Short description:** Muse Spark 1.3 Contributor is the cost-efficient contributor tier of Meta's multimodal reasoning model for experimentation, learning, and early-stage agentic, multi-agent, and coding workflows, designed to track information across extended tasks, work through conflicting inputs, and request clarification or confirmation when needed. Contributor is not a separate model — it is a pricing and data-terms tier, not a reduced model.
- **Provider / access:** Served on Meta Model API (`https://api.meta.ai/v1`), plus aggregators OpenRouter (`meta/muse-spark-1.3-contributor`), ZenMux (`meta/muse-spark-1.3-contributor`), and Command Code (`meta/muse-spark-1.3-contributor`). The Responses API can replay encrypted reasoning across turns; Chat Completions cannot for external keys, and for multi-step agent loops Meta recommends Responses. No explicit OpenCode Zen `opencode/<id>` Free ID verified.
- **Release / knowledge:** Muse Spark 1.3 launched on September 2, 2026, through Muse Code and the Meta Model API. Knowledge cutoff not disclosed in public sources.
- **IDs:** `meta/muse-spark-1.3-contributor` (this IS the Contributor/low-cost data-sharing SKU; it is the same checkpoint as standard Muse Spark 1.3).
- **Context window:** The model has a 1,048,576-token context window, or approximately 1M tokens. Verified via OpenRouter and kie.ai listings.
- **Modalities:** Text, image, and video input; it accepts text, images, video, audio, and PDF documents, returns text, and offers a 1M-token context window (audio understanding noted as not fully supported). Reasoning: yes. It accepts tools and tool_choice for function calling and supports structured outputs via a JSON schema in response_format.
- **Pricing (as of 2026-09-24):** Muse Spark 1.3 Contributor costs $0.10/M input tokens and $0.20/M output tokens, with separate rates for Cache Read at $0.002/M tokens and Web Search at $2.50/1K calls. Privacy caveat: the price of the discount is your data — prompts and code outputs may be used to train Meta's models. (Standard tier is $1.25/$4.25.)
- **Architecture:** Proprietary/closed-weights. Muse Spark is a proprietary model and Meta has not disclosed the model size or parameter count. Muse Spark 1.3 is not currently an open-weights model.

### Raw benchmarks found

> Note: Meta publishes benchmarks for Muse Spark 1.3 (max/xhigh reasoning tiers). Multiple sources confirm Contributor is the identical checkpoint (Contributor is a pricing and data-terms tier, not a reduced model; you get the full Muse Spark 1.3: 1M-token context, long-horizon agent workflows, ~20% fewer tool calls and ~25% fewer tokens per task, DeepSWE v1.1 at 75.4%), so figures below are inherited from the underlying model with tier noted.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta scorecard, max tier; xhigh scores 89.2 on Terminal-Bench 2.1 versus max at 88.8)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2: **1,754 Elo (max) / 1,709 (xhigh)** — Meta reports GDPval-AA v2 scores of 1,754 Elo for max versus 1,709 for xhigh, OSWorld 2.0 scores of 66.9 versus 57.2, and JobBench scores of 64.9 versus 61.2.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWEAtlas CodeBase QnA 59.4%** — the model scored 59.4% on SWEAtlas CodeBase QnA, which evaluates how accurately a model answers architectural and dependency questions across unfamiliar codebases. Also OSWorld 2.0 66.9, JobBench 64.9, AutomationBench 49.6, DeepSearchQA 90.3 (Meta scorecard).

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found (reported for 1.2, not 1.3)
- Artificial Analysis Intelligence Index: **61 (shipping xhigh) / 62 (max, limited preview)** — Artificial Analysis scores Muse Spark 1.3 max at 62 on its Intelligence Index and the shipping xhigh version at 61.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (Meta reported DeepSWE, not SWE-bench Verified)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE v1.1 / Coding: **75.4%** — Muse Spark 1.3 scored 75.4% on DeepSWE 1.1, which measures an agent's ability to resolve end-to-end software engineering issues across complete repositories.

Long context:

- **MRCR 256K–512K: 98.5%; MRCR 512K–1M: 98.1%** — Muse Spark 1.3 posts the best tracked figures on long-context retrieval (MRCR: 98.5% at 256k to 512k, 98.1% at 512k to 1M). At 512K to 1M tokens, GPT-5.6 Sol drops to 73.8 while Muse Spark 1.3 holds at 98.1.

### Normalized scores (1-100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 88.8% clears the ~88%+ frontier band and GDPval-AA v2 at 1,754 Elo exceeds the ~1,750 frontier threshold; OSWorld 66.9 and JobBench 64.9 are strong. Capped below 95 because no verified Tau3-Banking score and JobBench, OSWorld 2.0, AutomationBench and GDPval-AA v2 each sit behind Claude Opus 5 on Meta's own comparison table.
- **Reasoning: 88/100.** AA Intelligence Index of 61 (shipping xhigh) / 62 (max) crosses the 60+ frontier line. Capped below 90 because no verified GPQA Diamond, HLE, or CritPt public scores exist for this exact model.
- **Context window: 100/100.** Verified 1,048,576-token (1M) window places it in the ≥1M tier (95-100); the 100 ceiling is justified because MRCR retrieval at the 512K–1M band is 98.1% (≥98% at 512K+).
- **Multimodal: 85/100.** Accepts text, image, video, and PDF input with text-only output (+video/PDF in = 75-90 band). Audio understanding is only partially supported and there is no non-text output, capping it below 90.
- **Coding: 92/100.** DeepSWE v1.1 at 75.4% clears the 74%+ frontier line and Terminal-Bench 2.1 at 88.8% clears the 85%+ line; SWEAtlas CodeBase QnA 59.4% is competitive. Capped below 95 because no verified SWE-bench Verified, LiveCodeBench, or SciCode public scores, and at least one custom benchmark, Kingbench 3, showed Muse Spark 1.3 regressing from 1.2 on visual and front-end tasks.
- **Cost efficiency: 98/100.** Contributor tier at $0.10/M input and $0.20/M output sits squarely in the ~$0.10/$0.20 = 97-99 band; effective input rate is even lower since in an agent loop most input is cache-read, so the effective input rate is about $0.03/M. Not counted in Overall.
- **Overall Score: 91/100.** Mean of five non-cost dims = (90 + 88 + 100 + 85 + 92) / 5 = 91.0. Best fit: an exceptionally cheap frontier-adjacent long-context coding agent — ideal for open-source/public-code and long-document agentic workflows where the data-training trade-off is acceptable.

---

## Signature

- Provided by: **Claude (anthropic/claude-sonnet-4-5)** — 2026-09-24
- Method: public internet research (OpenRouter, ZenMux, Meta for Developers scorecard, Artificial Analysis, VentureBeat, DataCamp, eesel AI, Layer3Labs, and other catalog/press sources); scores are normalized 1-100 interpretations, not official vendor scores. Benchmark figures derive from Meta's Muse Spark 1.3 max/xhigh scorecard and are attributed to the Contributor SKU because public sources confirm it is the identical checkpoint.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
