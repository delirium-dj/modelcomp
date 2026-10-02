# GPT-6 Luna — findings by Space Bunny Alpha

- Source: OpenAI / GPT-6 Luna
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (max)
- **Short description:** OpenAI's fast, cost-efficient GPT-6 model for high-volume tasks, latency-sensitive applications, and increasingly capable agentic and software-engineering work at higher reasoning effort.
- **Provider / access:** OpenAI Responses API `gpt-6-luna`; Chat Completions supports function calling only with `reasoning_effort: none`; OpenRouter `openai/gpt-6-luna`.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff 2026-05-18 (OpenAI model documentation).
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens.
- **Modalities:** Text and image input; text output; reasoning effort supports none, low, medium, high, xhigh, and max. Responses API supports function calling, structured outputs, web search, file search, code interpreter, hosted shell, apply patch, computer use, MCP, and other tools.
- **Pricing (as of 2026-09-25):** $0.10 input / $0.01 cached input / $0.50 output per 1M tokens; cache writes $0.125. Prompts above 272K input tokens use higher rates; batch/flex are 50% of standard rates.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> Artificial Analysis measurements are for the max-reasoning variant. The model documentation supplies the exact API capability and pricing facts.

Agent / tool use:

- Artificial Analysis Intelligence Index: **37.3**; HLE: **38.5%**; AA-LCR: **83.3%**; GDPval-AA: **43.4%** (OpenRouter benchmark summary).
- CritPt: **19.4%**; Artificial Analysis model page reports **37** Intelligence Index after rounding.
- No exact public Tau2-Bench, MCP-Atlas, or Terminal-Bench score for GPT-6 Luna was found in the sources reviewed.

Reasoning / knowledge:

- HLE: **38.5%**; AA-LCR: **83.3%**; GDPval-AA: **43.4%**; CritPt: **19.4%** (Artificial Analysis/OpenRouter max reasoning).
- Intelligence Index: **37.3** (OpenRouter summary; 37 rounded on Artificial Analysis).
- Knowledge cutoff: 2026-05-18 (OpenAI model documentation).

Coding:

- SciCode: **54.6%** (Artificial Analysis/OpenRouter max reasoning).
- No exact public SWE-bench Verified, SWE-bench Pro, LiveCodeBench, or Terminal-Bench score for GPT-6 Luna was found.

Long context:

- AA-LCR: **83.3%** with a verified 1M-class context (Artificial Analysis/OpenRouter).
- No standalone exact-model RULER, MRCR, or GraphWalks score was found.

Multimodal:

- Text and image input, text output are verified by OpenAI model documentation.
- No exact-model public visual benchmark score was found.

### Normalized scores (1–100)

- **Tool use: 82/100.** The model supports a broad Responses API tool stack and strong GDPval-AA performance, but no exact public Tau2/MCP/Terminal score was found, so the score is evidence-capped.
- **Reasoning: 84/100.** AA-LCR at 83.3%, GDPval-AA at 43.4%, HLE at 38.5%, and the 37.3 Intelligence Index show strong reasoning at a lower price point, though not frontier-max performance.
- **Context window: 98/100.** The 1.05M context and 83.3% AA-LCR result are near the methodology's top tier.
- **Multimodal: 65/100.** Image input is supported, but no exact-model visual benchmark was found.
- **Coding: 78/100.** SciCode at 54.6% and the model's documented software-engineering positioning are promising; absent SWE-bench and LiveCodeBench evidence prevents a higher score.
- **Cost efficiency: 99/100.** At $0.10 input and $0.50 output per 1M tokens, with 90% cache discount and batch/flex discounts, GPT-6 Luna is exceptionally inexpensive for a frontier-family model.
- **Overall Score: 81/100.** A very cost-effective 1M-context multimodal model for high-volume agents and applications, with strong measured reasoning but less public exact-model coding and tool evidence than larger GPT-6 variants.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official OpenAI GPT-6 Luna model documentation, Artificial Analysis measurements, and OpenRouter benchmark metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
