# Qwen 3.7 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash (qwen3.7-flash)
- **Short description:** Alibaba Cloud's cost-optimized Flash tier in the Qwen 3.7 series, released July 15/27, 2026. Proprietary vision-language reasoning model (text, image, video in; text out). Hybrid thinking model (reasoning on by default, toggleable). 1M context, 65K output. Positioned below Qwen 3.7 Plus and Max. Supports function calling, built-in tools (code interpreter, web search, web extractor). No open weights.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-flash`), OpenRouter (`qwen/qwen3.7-flash`), Vercel AI Gateway. Chat Completions / Responses API. Reasoning on by default (enable_thinking switch).
- **Release / knowledge:** 2026-07-15 release (Model Studio); knowledge cutoff not published.
- **IDs:** `qwen3.7-flash` (Alibaba Cloud), `qwen/qwen3.7-flash` (OpenRouter), `alibaba/qwen3.7-flash` (Vercel). No free tier (1M token free quota Singapore only for some models).
- **Context window:** 1,000,000 tokens (991,808 usable input, 131K output). Verified via Alibaba Cloud docs, OpenRouter, Vercel.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (on by default, toggleable). Tool calls: yes (built-in: code interpreter, t2i_search, web_search, web_extractor). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Alibaba Cloud Intl: $0.030/M in (≤32K), $0.100/M in (32K–256K), $0.200/M in (256K–1M); $0.130/M out (≤32K), $0.400/M out (32K–256K), $0.800/M out (256K–1M). Cache read $0.006/M. Batch 50% off. OpenRouter: $0.03/M in, $0.13/M out. Vercel: $0.03/$0.13. Blended ~$0.038/M (agentic). **Cheapest Qwen tier** (~8× under Qwen 3.6 Flash). Free quota: 1M tokens (Singapore only).
- **Architecture:** Proprietary. Vision-language reasoning model. Native video input (unlike Max/Plus which are text-only). Reasoning on by default. Chain-of-thought budget up to 262K tokens.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL LIMITATION:** Almost zero independent benchmarks. Qwen published no technical report or weights. Artificial Analysis does not list it (404). LMArena has no entry. Only third-party evals: Roboflow Vision Evals (3 snapshots), Kunya (single run), eesel AI review, The Aggregate. BenchLM shows 47.14 overall but only 1 benchmark covered.

Agent / tool use:

- Roboflow Vision Evals (low effort): **61.7%** overall (Aug 27) / **61.5%** (Sep 3) / **61.7%** (Aug 14) — #22 of 23
  - Identification: **84.4%** (#10/23)
  - OCR transcription: **84.1%** (#23/23, last)
  - Data extraction: **78.4%**
  - Object detection: **42.8%** mAP@50 (#16/23)
  - Object counting: **46%** exact match
  - Reasoning (low): **34.4%** (#53/63) / (high): **61.6%** (#37/50)
  - OCR (low): **54.3%** / (high): **62.3%**
- Kunya (single run, Oct 6): Technical performance **91.3**, Value **72.4**, SWE-bench Verified **64.4%** (cited Vals.ai, Mini-SWE-agent)
  - Code trace: 96.9, Code review: 60.3, Engineering: 98.0, Routing & agents: 100.0, Reasoning: 89.0, Writing: 82.2, Data extraction: 93.3, Instruction following: 100.0, Frontier: 92.9
- The Aggregate: Aggregate Rating **1732 ± 21** (#139/1657), 55 benchmark results
  - AgentVQA Average: **55%** (88.1 pctl), MERA v2 SAGE: **68.2%** (87.5 pctl)
  - Tinybird SQL Exactness: **54.1%** (81.7 pctl), AI Chess Elo: **930** (70.9 pctl)
- FrontierMath v2 Tiers 1-3: **19.3%** — BenchLM (Epoch AI)

Reasoning / knowledge:

- FrontierMath v2 Tiers 1-3: **19.3%** — BenchLM (Epoch AI)
- GPQA Diamond / MMLU-Pro / HLE: **no independent scores** (BenchLM comparison vs Max shows "Coming soon" for all)
- IFEval / IFBench / AA-LCR / CritPt / GPQA / MMLU-Pro / MMLU-Redux / SuperGPQA / MMMLU: **no independent scores**

Coding:

- SWE-bench Verified: **64.4%** — Kunya (cited Vals.ai, Mini-SWE-agent) / **no independent verification**
- Terminal-Bench 2.0 / LiveCodeBench / SWE-Pro / SciCode / Vibe Code / NL2Repo: **no independent scores**
- Kunya categories: Code trace 96.9, Code review 60.3, Engineering 98.0, Routing & agents 100.0, Frontier 92.9
- Vals AI (Max comparison): SWE-bench 68.8%, LiveCodeBench 87.1%, Terminal-Bench 2.1 61.0% — all "Coming soon" for Flash

Long context:

- Native 1M context verified (991,808 usable input)
- MRCRv2 / AA-LCR / RULER / GraphWalks: **no independent scores** for Flash
- Max comparison: MRCRv2 90.4%, AA-LCR 79%, RULER 80% — all "Coming soon" for Flash

Multimodal:

- Roboflow Vision Evals: **61.7%** overall (#22/23)
  - Identification: **84.4%** (#10/23) — strong suit
  - OCR transcription: **84.1%** (#23/23, last) — weak suit
  - Data extraction: **78.4%**
  - Object detection: **42.8%** mAP@50 (#16/23)
  - Object counting: **46%**
  - Reasoning (low): **34.4%** (#53/63) / (high): **61.6%** (#37/50)
- Kunya: Data extraction 93.3, Instruction following 100.0
- Text + image + video in; text out. **Only Qwen 3.7 tier with native video input** (Max/Plus text-only).
- Reasoning on by default helps OCR (+7.9 pts at high effort) and reasoning (+27.2 pts) but 5.3–16× cost/latency.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Kunya Routing & agents 100, Engineering 98, Code trace 97, but no independent SWE-bench/Terminal-Bench/MCP-Atlas/BFCL. Roboflow object detection 43% weak. Kunya SWE-bench 64% cited but unverified. Capped by near-zero independent agentic verification and Roboflow object detection 43%.
- **Reasoning: 45/100.** FrontierMath 19% (BenchLM), Roboflow reasoning 34% (low) / 62% (high), Kunya reasoning 89. No GPQA/MMLU/HLE/AA-LCR/AA Index independent scores. Capped by FrontierMath 19% and Roboflow reasoning 34% low-effort.
- **Context window: 90/100.** 1M native context verified. No retrieval benchmarks for Flash (Max: MRCR 90%, AA-LCR 79%). Tier placement saves score. Capped by zero measured retrieval benchmarks.
- **Multimodal: 65/100.** Native text/image/video in; text out. Roboflow overall 62% (#22/23), Identification 84% (strong), OCR 84% (last), Object detection 43% (weak). Video input unique in tier. Kunya data extraction 93%. Capped by Roboflow overall 62% and OCR last place.
- **Coding: 60/100.** Kunya SWE-bench 64% (cited, unverified), Engineering 98, Code trace 97, Code review 60. No independent SWE-bench/Terminal-Bench/LiveCodeBench. Capped by zero independent reproduction and single Kunya run.
- **Cost efficiency: 95/100.** $0.03/$0.13 per 1M (Intl ≤32K) — **cheapest Qwen tier**, ~8× under Qwen 3.6 Flash. Blended ~$0.038/M agentic. Free 1M tokens (Singapore). No free tier globally.
- **Overall Score: 63/100.** Mean of (55+45+90+65+60)/5 = 63.0. Queue shows 65.8 — close. BenchLM 47.1 (1 benchmark only). eesel AI: "volume tool, not quality tool; 22nd of 23 vision, 1st of 23 cost." Best fit: ultra-cheap high-volume multimodal tagging/classification (Identification 84%, cost $0.0001/sample); not for OCR, GUI control, or quality-critical reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Alibaba Cloud Model Studio docs/pricing, OpenRouter, Vercel AI Gateway, Roboflow Vision Evals (3 snapshots), Kunya, eesel AI review, The Aggregate, BenchLM, BenchLM comparison vs Max, AI Cost Tools, Alibaba developer articles); scores normalized 1–100 per model-comparison.md methodology. **Critical limitation:** Near-zero independent benchmarks — Qwen published no technical report/weights; Artificial Analysis 404; LMArena no entry. Only Roboflow (vision), Kunya (single run), eesel review. Conflicting: Kunya SWE-bench 64% vs no independent verification; Roboflow 62% vs Kunya 91% technical performance.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.