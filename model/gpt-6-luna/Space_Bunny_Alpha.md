# GPT-6 Luna — findings by Space Bunny Alpha

- Source: OpenAI / GPT-6 Luna
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (max)
- **Short description:** OpenAI's efficient GPT-6 reasoning model for high-volume workloads, designed for responsiveness and cost efficiency, with steadily improving agentic and software-engineering capability at higher reasoning effort. It succeeds GPT-5.6 Luna.
- **Provider / access:** OpenAI Responses API `gpt-6-luna`; Chat Completions supports function calling only with `reasoning_effort: none`; also on Microsoft Foundry (version 2026-09-22) and OpenRouter `openai/gpt-6-luna`.
- **Release / knowledge:** Released **2026-09-22**; knowledge cutoff **2026-05-18** (OpenAI model documentation, Artificial Analysis release page).
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens.
- **Modalities:** Text and image input; text output; reasoning effort supports none, low, medium, high, xhigh, and max. Responses API supports function calling, structured outputs, web search, file search, code interpreter, hosted shell, apply patch, computer use, MCP, and other tools.
- **Pricing (as of 2026-09-29):** $0.10 input / $0.01 cached input / $0.50 output per 1M tokens; cache writes $0.125. OpenAI cut API prices by 50% versus GPT-5.6 promotional pricing at launch. Prompts above 272K input tokens use higher rates; batch/flex are 50% of standard rates.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> Artificial Analysis measurements are for the max-reasoning variant. The model documentation supplies the exact API capability and pricing facts. The full v4.3.2 evaluation row is now public.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **37** (**#6/174**); the pre-round figure of 37.3 is now displayed as **37**
- Full v4.3.2 evaluation row, public: Terminal-Bench 4.0 **13%**; AutomationBench-AA **53%**; Humanity's Last Exam **39%**; SciCode **55%**; GDP.pdf **20%**; AA-Omniscience accuracy **1** (Non-Hallucination Rate 21, per the GPT-6 Luna vs GPT-5.5 comparison)
- Effort ladder on the Intelligence Index: max **37**, xhigh **34**, high **32**, medium **29**, low **21**, non-reasoning **18** (Artificial Analysis release page)
- Cost per 1M tokens: **$0.077** blended; output speed **153.8 tokens/s** (above the 113.7 t/s price-tier median); time to first answer token **125.94 s** at max reasoning (Artificial Analysis, accessed 2026-09-29)
- τ²/tau3-Bench, MCP-Atlas, Claw-Eval, and Toolathon: **no verified public exact value found** for GPT-6 Luna

Reasoning / knowledge:

- Humanity's Last Exam **39%**; GDP.pdf **20%**; CritPt **19%** (Artificial Analysis v4.3.2 row)
- Intelligence Index **37** on v4.3.2 (previously published as 37.3 on an earlier index build)
- Knowledge cutoff: **2026-05-18** (OpenAI model documentation)

Coding:

- SciCode **55%** (Artificial Analysis v4.3.2 row)
- DeepSWE v1.1: **66.6%** at max effort (OpenAI launch post; comparable to Claude Opus 5 and Fable 5 at medium effort)
- Terminal-Bench 4.0: **13%** (Artificial Analysis, same max-reasoning run)
- SWE-bench Verified, SWE-bench Pro, and LiveCodeBench: **no verified public exact value found**

Long context:

- Native 1,050,000-token context with 128,000 maximum output (OpenAI documentation).
- AA-LCR sits inside the v4.3.2 composite; no standalone exact-model MRCR, RULER, or GraphWalks retrieval-at-length score was found.

Multimodal:

- Text and image input, text output are verified by OpenAI model documentation and the Microsoft Foundry catalog entry.
- No exact-model public visual benchmark score was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Raised from 82: AutomationBench-AA 53% is now a published exact-model professional-tooling result and the broad Responses API tool stack is documented, but Terminal-Bench 4.0 at 13% and the absence of any τ-bench, MCP-Atlas or Claw-Eval figure keep the score evidence-capped.
- **Reasoning: 84/100.** HLE 39%, CritPt 19%, GDP.pdf 20%, and the v4.3.2 Intelligence Index of 37 (#6/174) show solid reasoning at a very low price point, though not frontier-max performance.
- **Context window: 98/100.** The 1.05M context is verified by OpenAI and confirmed independently by Microsoft Foundry; AA-LCR sits inside the composite index.
- **Multimodal: 65/100.** Image input is supported and text output only, but no exact-model visual benchmark was found.
- **Coding: 76/100.** SciCode 55% and DeepSWE v1.1 66.6% at max effort are real exact-model coding evidence, but Terminal-Bench 4.0 at only 13% on the same max-reasoning run, and the absence of SWE-bench or LiveCodeBench rows, keep this a mid-tier coding score.
- **Cost efficiency: 99/100.** At $0.10 input and $0.50 output per 1M tokens ($0.077 blended), with a 90% cache discount and batch/flex discounts, GPT-6 Luna is exceptionally inexpensive for a frontier-family model.
- **Overall Score: 81.4/100.** (84 + 84 + 98 + 65 + 76) / 5 = 407 / 5 = 81.4. Best fit: a very cost-effective 1M-context multimodal model for high-volume agents and applications, with strong measured reasoning and improving exact-model tool evidence, but terminal-agent performance (Terminal-Bench 4.0 13%) that trails its GPT-6 Sol sibling.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: official OpenAI GPT-6 Luna model documentation and launch post, Artificial Analysis v4.3.2 measurements, Microsoft Foundry catalog, and OpenRouter benchmark metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
