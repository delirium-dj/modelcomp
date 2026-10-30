# Grok 4 — findings by GPT-6 Luna

- Source: xAI/Grok 4 (base, non-Heavy)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's proprietary reasoning model, released with native tool use and real-time web/X search. This report covers the standard Grok 4 API model, not the distinct Grok 4 Heavy parallel-test-time-compute product.
- **Provider / access:** xAI API at launch; the 2025 xAI announcement says it was available through the xAI API. The current xAI API page focuses on newer Grok 4.5–4.7 models and says older models retire on a published schedule; Artificial Analysis marks Grok 4 deprecated. I found no official Grok 4 retirement date or confirmation that its legacy route remains callable today.
- **Release / knowledge:** Announced **2025-07-09**. No exact knowledge-cutoff date verified.
- **IDs:** API/model ID `grok-4` (also catalogued as `grok-4-0709` by Evals Report); tracked provider-qualified identifier `xai/grok-4`. The `grok-4-heavy` product is excluded from this report.
- **Context window:** **256,000 tokens**, stated in xAI's Grok 4 API description and corroborated by Artificial Analysis. No verified full-window retrieval score found.
- **Modalities:** Text and image input, text output (Artificial Analysis); native web/X search and tool use. No verified audio/video input for the API checkpoint covered here.
- **Pricing (as of 2026-10-30):** The last listed native API rate I could verify is **$3 / MTok input** and **$15 / MTok output**, with **$0.75 / MTok cached input** reported in the model pricing record. xAI's current API page no longer lists Grok 4, so treat these as a last-published rate, not a confirmed current tariff.
- **Architecture:** Proprietary; xAI has not disclosed parameter count or detailed architecture. The release says it used large-scale reinforcement learning, including training on xAI's Colossus cluster.

### Raw benchmarks found

Results vary by benchmark subset and evaluation source. The vendor's launch article discusses several benchmark charts, while Evals Report records the launch-day result series and Artificial Analysis publishes later measurements. Values below are not treated as one shared harness.

Agent / tool use:

- Berkeley Function Calling Leaderboard: **62.97% accuracy** (Evals Report, marked official, 2025-07-09).
- τ²-bench: **74.9%** (Artificial Analysis result reproduced by BenchLM; benchmark page is for Grok 4, not Grok 4 Heavy).
- GDPval Agents: **989 Elo** (Evals Report, marked official, 2025-07-09).
- MCP-Universe: **33.33% overall success rate** (Evals Report, marked verified). Grok 4 supports native tool use and real-time X/web search, per xAI's release page.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** in Evals Report's launch-day official-source record versus **87.7%** in Artificial Analysis (reproduced by BenchLM); source/harness results differ.
- Humanity's Last Exam: **24.52%** in Evals Report's launch-day official-source record versus **26.7%** in Artificial Analysis. Do not conflate these with Grok 4 Heavy's separately reported **50.7%** on the text-only subset.
- MMLU-Pro: **86.6%** (Evals Report, marked verified; the same value is reproduced by BenchLM from the AA leaderboard).
- AIME 2025: **92.7%** (Artificial Analysis leaderboard result reproduced by BenchLM). Evals Report's separate AIME (OTIS Mock) result is **84.0%**; the benchmark variant differs.
- ARC-AGI-2: **15.97%** (Evals Report, marked official).

Coding:

- LiveCodeBench: **81.9%** (Artificial Analysis leaderboard result reproduced by BenchLM; Evals Report also records 81.9% but marks that entry unverified).
- Aider Polyglot: **79.6% correct** (Evals Report, marked official).
- SciCode: **45.7%** (Evals Report, marked unverified). No verified SWE-bench Verified or SWE-bench Pro result found.

Multimodal / long context:

- MMMU-Pro: **68.8%** (Artificial Analysis result reproduced by BenchLM).
- Artificial Analysis lists a **256K** context window and text/image input. No verified MRCR, RULER, or other long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench is 74.9%, Berkeley Function Calling is 62.97%, and GDPval Agents is 989 Elo; native search/tool support is a strength, but the benchmark mix and absence of current-harness evidence cap the score.
- **Reasoning: 85/100.** GPQA Diamond is 87.0–87.7%, MMLU-Pro is 86.6%, and AA AIME 2025 is 92.7%; HLE is substantially lower at 24.52–26.7%, and the HLE/GPQA spread across sources is preserved.
- **Context window: 75/100.** The verified 256K specification falls in the project's 200K–500K band; no retrieval score at 512K+ or even the full 256K supports a higher result.
- **Multimodal: 65/100.** Text and image input meet the image-input band; output is text-only and no audio/video input was verified for this API model.
- **Coding: 82/100.** LiveCodeBench is 81.9% and Aider Polyglot is 79.6%, but SciCode is only 45.7% (unverified) and no SWE-bench result was found.
- **Cost efficiency: 60/100.** The last verified $3/$15 per MTok rate maps to about 60 under the project's pricing scale; current legacy-model pricing and availability are not confirmed.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions: `(80 + 85 + 75 + 65 + 82) / 5 = 77.4`, rounded to 77. Best for reasoning with native search/tool use, but the 256K context, expensive last-listed pricing, and deprecated/uncertain API status are material tradeoffs.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Three independent public searches; xAI's [Grok 4 release post](https://x.ai/news/grok-4), current [xAI API/pricing page](https://x.ai/api), [Artificial Analysis model page](https://artificialanalysis.ai/models/grok-4), and [Evals Report's launch-day benchmark record](https://evals.report/models/xai-grok-4). Later AA scores, launch-day figures and task variants are kept separate; Grok 4 Heavy scores are excluded. BenchLM is cited only where it reproduces linked Artificial Analysis results, not for its conflicting model metadata or aggregate score. Scores are normalized interpretations, not official ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
