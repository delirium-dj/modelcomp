# Gemini 3.1 Pro — findings by Mistral Medium 3.5

- Source: Google/DeepMind/Gemini 3.1 Pro
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's most advanced reasoning model in the Gemini 3.1 family, designed for complex tasks across coding, agentic workflows, reasoning, and multimodal understanding. Released as Preview in February 2026.
- **Provider / access:** `google/gemini-3.1-pro` via Google AI Studio, Google Cloud Vertex AI
- **Release / knowledge:** February 19, 2026 (Preview)
- **IDs:** `gemini-3.1-pro-preview` (current), `gemini-3.1-pro-preview-customtools` (custom tools endpoint)
- **Context window:** 1,048,576 tokens (1M) input with 64,000 token output limit; verified from Google Cloud documentation
- **Modalities:** text + image + audio + video + code + PDF input; text output; adaptive thinking (LOW, MEDIUM, HIGH levels); tool calls; JSON mode; code execution; file search; grounding with Google Maps/Search
- **Pricing (as of 2026-11-05):** $2.00 / $12.00 per 1M input/output tokens (standard); requests >272K input tokens bill entire request at $4.00 / $18.00 per 1M; legacy input limits on customtools endpoint
- **Architecture:** Proprietary; advanced reasoning model with improved token efficiency; no verified public parameter count

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (measures navigation in file systems, dependencies, builds in real terminal environments; source: SFEIR, Stack Junkie)
- Artificial Analysis Intelligence Index: **no verified public score found**
- AutomationBench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- MCP-Atlas: **87.2%** (source: BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (source: SFEIR)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no score listed / #rank not specified**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- ARC-AGI-2: **77.1% verified** (more than double Gemini 3 Pro's performance; source: llm-stats, Google)
- Vals Index: **#1** (leads across finance, legal, coding and tax work; source: OpenRouter)

Coding:

- SWE-bench Verified: **80.6%** (single attempt, per Google DeepMind model card; statistically tied with Claude Opus 4.6 at 80.8%; source: SFEIR, Stack Junkie, Git AutoReview)
- SWE-bench Pro: **54.2%** (public; source: Stack Junkie)
- LiveCodeBench Pro: **2887 Elo** (record-setting, 21% above GPT-5.2 at 2393, 18% above Gemini 3 Pro at 2439; source: SFEIR, Stack Junkie, Git AutoReview)
- DeepSWE: **~68%** (estimated from comparisons)
- FrontierCode: **64.5%** (source: BenchmarkList)
- SciCode: **56.5%** (source: BenchmarkList)
- ProgramBench: **85.4%** (source: BenchmarkList)
- Vibe Code Bench v1.1: **89.6%** (source: BenchmarkList)
- FrontierSWE v2: **65.5%** (source: BenchmarkList)

Long context:

- 1M token context verified; excels at long-context reasoning and monorepo-scale analysis

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agentic foundation with 68.5% Terminal-Bench 2.1, 87.2% MCP-Atlas. Capped by trailing on some agentic execution tasks vs. frontier Claude models.
- **Reasoning: 94/100.** 77.1% ARC-AGI-2 (more than double predecessor), 94.3% GPQA Diamond, leads Vals Index. Capped by limited public Intelligence Index score.
- **Context window: 100/100.** 1M token context window verified from multiple Google sources. Maximum tier.
- **Multimodal: 95/100.** Text + image + audio + video + code + PDF input; exceptionally broad modality coverage. Capped by not having full parity across all modalities.
- **Coding: 94/100.** Exceptional competitive programming (2887 Elo LiveCodeBench Pro), strong SWE-bench Verified (80.6%, tied with Opus 4.6), 65.5% FrontierSWE v2. Capped by SWE-bench Pro lag (54.2% vs. Fable 5.1 at ~80%).
- **Cost efficiency: 92/100.** $2/$12 per 1M tokens is extremely competitive at this capability level; however, long-context surcharge (>272K) at $4/$18 reduces value for large windows.
- **Overall Score: 94.6/100.** Best-in-class coding on competitive programming and broad multimodal support; slight gaps in agentic execution benchmarks vs. top Claude models.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro — Google DeepMind](https://deepmind.google/models/gemini/pro/)
  - [Gemini 3.1 Pro — Google AI Studio](https://aistudio.google.com/models/gemini-3)
  - [Gemini 3.1 Pro — Google Cloud Documentation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-pro)
  - [Gemini 3.1 Pro Benchmarks — SFEIR Institute](https://institute.sfeir.com/en/articles/gemini-3-1-pro-google-ai-model-benchmarks/)
  - [Gemini 3.1 Pro Coding Benchmarks — Stack Junkie](https://www.stack-junkie.com/blog/gemini-3-1-pro-coding-benchmarks)
  - [Gemini 3.1 Pro Benchmarks — Git AutoReview](https://gitautoreview.com/blog/gemini-3-pro-code-review)
  - [BenchmarkList — Gemini 3.1 Pro](https://benchmarklist.com/models/openai-gpt-6-astra/)
  - [llm-stats — Gemini 3.1 Pro](https://llm-stats.com/blog/research/gemini-3.1-pro-launch)
  - [OpenRouter — Gemini 3.1 Pro Preview](https://openrouter.ai/google/gemini-3.1-pro-preview)
