# GPT-5.2 Codex — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`
>
> **NOTE:** Status shown as "Shut down" / "Deprecated" (deprecation date July 23, 2026) on OpenAI API docs and CloudPrice. Replaced by GPT-5.3 Codex. Research reflects capabilities at time of availability.

## Model card

- **Name:** GPT-5.2 Codex (GPT-5.2-Codex)
- **Short description:** OpenAI's most advanced agentic coding model, optimized for long-horizon software engineering in Codex environments. Released January 14, 2026 as upgraded GPT-5.2 with context compaction, Windows environment improvements, stronger cybersecurity. Deprecated July 23, 2026 per OpenAI API docs. Proprietary, Responses API only.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`, deprecated), Azure OpenAI, OpenRouter, Vercel AI Gateway. Responses API only (not Chat Completions). Reasoning effort: low, medium, high, xhigh.
- **Release / knowledge:** 2026-01-14 release; deprecated 2026-07-23; knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.2-codex` (OpenAI), `openai/gpt-5.2-codex` (OpenRouter). No free tier.
- **Context window:** 400,000 tokens (272K input + 128K output). Verified via OpenAI API docs, OpenRouter, CloudPrice. LiteLLM shows 272K context.
- **Modalities:** Text and image input; text output. Reasoning: yes (xhigh support). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Input $1.75/M, cached input $0.175/M, output $14.00/M (OpenAI list). OpenRouter: $1.75/$14. Azure: $1.925/$15.40 (eu/us). Batch not supported. Extremely cost-efficient for coding model (12x cheaper than GPT-5.2 Pro).
- **Architecture:** Proprietary. GPT-5.2 base optimized for agentic coding: context compaction, native Windows support, improved factuality, cybersecurity hardening. Parameter count undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-Bench Telecom (AA): **92.1%** (xhigh) — OpenRouter / Artificial Analysis
- AA-LCR: **82.3%** (xhigh) — OpenRouter / Artificial Analysis
- IFBench: **77.6%** (xhigh) — OpenRouter / Artificial Analysis
- AA Agentic Index: **not directly reported** (Gert Labs: **51.8%**, JobBench: **26.0%**) — llmboard.ai
- Terminal-Bench Hard (AA): **37.1%** (xhigh) — OpenRouter
- Terminal-Bench 2.0: **64.0%** (rank #18/53, 67th pctl) — llmboard.ai (Oct 26, 2026)
- MCP-Atlas / Scale MCP: **no direct score** for Codex
- BrowseComp: **no direct score** for Codex

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (xhigh) — OpenRouter / Artificial Analysis / llmboard.ai
- HLE (no tools): **35.7%** (xhigh) — OpenRouter / Artificial Analysis / llmboard.ai
- AA Intelligence Index: **28.5** (xhigh, rank #60/353) — OpenRouter
- CritPt: **8.7%** (xhigh) — OpenRouter / llmboard.ai
- AA-Omniscience Accuracy: **41.1%** / Non-Hallucination: **26.6%** — OpenRouter
- SimpleBench: **no direct score**
- MMLU-Pro: **no direct score** (LiveBench math: 88.77 score, rank #21/43)

Coding:

- SWE-bench Verified: **no direct score** (Vals AI: **72.4%**) — OpenRouter / llmboard.ai
- SWE-bench Pro: **56.4%** (rank #38/63, 40th pctl) — llmboard.ai (Oct 26, 2026)
- LiveCodeBench: **88.0%** (Vals AI) — OpenRouter
- Vibe Code Bench v1.1: **37.9%** (Vals AI) — OpenRouter
- LiveBench: **74.3%** (rank #17/38, 57th pctl) — llmboard.ai
- LiveBench Coding: **83.6%** (BenchGecko)
- LiveBench Math: **88.8%** (BenchGecko)
- LiveBench Data Analysis: **78.2%** (BenchGecko)
- Terminal-Bench 2.0: **64.0%** — llmboard.ai
- LM Arena Webdev: **1338.82** rating (rank #88/107) — llmboard.ai

Long context:

- AA-LCR: **82.3%** (xhigh) — OpenRouter / Artificial Analysis
- MRCR / RULER / GraphWalks: **no direct score** for Codex
- Native 400K context verified

Multimodal:

- Vision benchmarks: **no direct scores** for Codex (GPT-5.2 Thinking: CharXiv 88.7%, MMMU Pro 80.4%, Video MMMU 85.9%, ScreenSpot 86.3%)
- Input modalities: text, image (per OpenAI API docs). No audio/video.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Tau2 Telecom 92%, AA-LCR 82%, IFBench 78%, Terminal-Bench 2.0 64%, Terminal-Bench Hard 37%. Strong agentic tool use but Terminal-Bench Hard low. Capped by TB Hard and no MCP-Atlas/BrowseComp for Codex.
- **Reasoning: 70/100.** GPQA Diamond 90%, HLE 36%, AA Intelligence Index 28.5 (#60), CritPt 9%, Omniscience 41%. Good GPQA but composite index low vs top models (Opus 5.5 57.6). Capped by AA Index 28.5 and HLE 36%.
- **Context window: 85/100.** 400K native context. AA-LCR 82% (xhigh) shows strong long-context retrieval. No MRCR/RULER/GraphWalks for Codex specifically. Tier placement + AA-LCR score.
- **Multimodal: 60/100.** Text + image input only (per API docs). No vision benchmarks for Codex; GPT-5.2 Thinking scores 80–89% on vision. Capped by text-only output, no audio/video, no Codex-specific vision scores.
- **Coding: 85/100.** SWE-bench Pro 56% (Vals), SWE-bench Verified 72% (Vals), LiveCodeBench 88%, LiveBench Coding 84%, Vibe Code 38%, Terminal-Bench 2.0 64%. Exceptional coding benchmarks (SWE-bench, LiveCodeBench). Capped by Vibe Code 38% and TB Hard 37%.
- **Cost efficiency: 90/100.** $1.75/$14 per 1M — 12x cheaper than GPT-5.2 Pro, competitive with base GPT-5.2. Blended ~$5.25/M. No free tier but extremely cost-efficient for capability tier.
- **Overall Score: 75/100.** Mean of (75+70+85+60+85)/5 = 75.0. Model-queue shows 79.6 — close. Best fit: specialized agentic coding model at breakthrough price/performance; deprecated status limits future use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (OpenAI API docs/system card addendum, OpenRouter/Artificial Analysis, llmboard.ai, BenchGecko, BenchLM, GitHub xdotli/gpt-5.2-tb2, LiteLLM, CloudPrice); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Model deprecated (Jul 23, 2026); most benchmarks from Artificial Analysis xhigh reasoning; no independent SWE-bench Verified reproduction; vision scores inferred from GPT-5.2 Thinking.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.