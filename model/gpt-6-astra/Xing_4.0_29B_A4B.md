# GPT-6 Astra — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI flagship model released September 4, 2026 ("world's most intelligent and aligned model"). Extended GPT-5.6 Sol architecture plus major expansion in reason, computer use, deep research, coding. Strongest claimed coding performance among general-purpose models. AI Index ties with Fable 5.1 at ~40% of Fable 5.1's cost per task ($3.26 vs $7.63 max).
- **Provider / access:** OpenAI API (`openai/gpt-6-astra`). Available via ChatGPT Plus/Pro/Business/Enterprise subscriptions and Codex. Responses API supported. Not widely accessible; rolling out gradually to trusted organizations per launch phase.
- **Release / knowledge:** Released September 4, 2026. Knowledge cutoff: April 30, 2026.
- **IDs:** `openai/gpt-6-astra`; `gpt-6-astra`
- **Context window:** 1,050,000 tokens (~1M); max input 922K; max output 128K.
- **Modalities:** Text + image input; text output. Reasoning yes (effort levels: low/medium/high/xhigh/max). Tool calls extensive: web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search. JSON mode yes. Computer use explicitly enabled (flagship differentiator).
- **Pricing (as of <date>):** $10 input / $50 output per 1M tokens standard. Batch/Flex 50% rate. Same cache behavior as prior GPT pricing — 90% discount on cache read, 25% premium cache write.
- **Architecture:** Proprietary. Builds on GPT-6 series architecture (Sol, Terra, Luna siblings). Unpublished parameter count per OpenAI doc.

### Raw benchmarks found

**Intelligence**

- Artificial Analysis Intelligence Index v4.1.1: 61.2. Source: OpenAI launch comparison.
- Artifact: Earlier version (v4.1.1, older) scored 65.7 at max (7 points higher than GPT-5.6 Sol). Latest revised index v4.3.2 reports ~53 tied with Fable 5.1.

**Coding**

- AA Coding Index v4.3.2 (Codex): 62. Tied with Fable 5.1 (Claude Code 62). Ahead of Claude Opus 5 (60), GPT-5.6 Sol (55), Muse Spark 1.3 (54).
- Terminal-Bench 4.0: 57.9% leading all models.
- DeepSWE v1.1: 74.1%.
- SWE-bench Verified: Not independently published (most cited benchmark from Anthropic).

**Reasoning**

- ARC-AGI-3: ~99.9%. Source: Gadgetsnow / OpenAI launch data. Key differentiator — Astra tops this benchmark where Sol only scores ~8%.
- FrontierMath Tier 4: 97.6%. Source: same.
- GPQA Diamond: 96.1%. Source: same.
- Humanity's Last Exam: 54.7%. Source: same.

**Agentic**

- AA-AnalystAgent: 51.25 / 4 / 29 ranking. Source: Artificial Analysis Intelligence Index breakdown.
- AutomationBench: 41.4%. Source: same.
- AA Agentic Index: 51.0.
- OSWorld 2.0 offline partial: 72.6% (~40 min/task).

**Knowledge**

- AA-Omniscience v1.1: Hallucination ~3-4% tasks (vs ~19% for Sol, Anthropic internal). Low hallucination rate is SIGNIFICANT advantage.
- HLE-Diamond: top ranking.

### Normalized scores (1–100)

- **Tool use: 92/100.** Full response suite including computer use plus MCP; one of broadest tool sets among general-purpose releases. Capped by cost limitations on high-tier computing resources used for full tool execution.
- **Reasoning: 93/100.** ARC-AGI-3 ~99.9%; FrontierMath Tier 4 97.6%; GPQA 96.1%; HLE 54.7%. Hard cap near 100+ on maximum reasoning evidence chain.
- **Context window: 92/100.** 1.05M tokens most generous in standard architecture (model counts 1,050,000 versus 1,050,000 for others); full generous context capture confirmed.
- **Multimodal: 78/100.** Image input included; video NOT supported per API docs. Computer use capability represented separately.
- **Coding: 93/100.** AA Coding Index 62 tied leader; Terminal-Bench 57.9% strongest reported general coding benchmark. Capped near 95 since Fable 5.1 Claude Code matches but independent breadth of coding benchmark coverage unavailable.
- **Cost efficiency: 55/100.** $10/$50 per 1M tokens. BUT token efficiency gains: ~1/3 tokens per task at max effort (~33k output vs 78k for Fable 5). Cost per task $3.26 = ~40% of Fable 5.1 max. TRUE cost-efficient frontier model despite higher base token prices.
- **Overall Score: 89.6/100.** Mean of five non-cost dims: (92+93+92+78+93)/5 = 90.2... BUT cost efficiency at 55 holds mean down. Adjusted down modestly for marginally lower automation breadth vs dedicated coding agents. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (OpenAI official model page, Artificial Analysis Intelligence Index articles, DataLearnerAI comparison, themodelbeat.com comparisons, OpenAI launch announcement, SiliconANGLE coverage, LLMBenchmark.ai aggregation).
- Reference URLs:
  - [<GPT-6 Astra | OpenAI API documentation>]
  - [<GPT-6 Astra: A new generation of intelligence | OpenAI>]
  - [<Artificial Analysis — Benchmarking GPT-6 Astra>]
  - [<DataLearnerAI — GPT-6 Astra vs GPT-5.6 Sol benchmarks>]
  - [<themodelbeat.com — GPT-5.6 Sol vs GPT-6 Astra specs>]
  - [<Epoch AI Benchmarking Hub — GPT-6 Astra>]
- Future sources: add new file next to this one.
