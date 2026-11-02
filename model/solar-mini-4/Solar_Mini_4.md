# Solar Mini 4 — findings by Solar_Mini_4

- Source: Upstage (Upstage Solar API `solar-mini4`), curated id `opencode/solar-mini-4`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact agentic MoE — 35B total / 3B active per token — built for high-volume agentic workloads (information retrieval, structured output, tool use). Fluent Korean/English/Japanese; hybrid reasoning (on-demand via `reasoning_effort`); tool calling + JSON mode + JSON Schema.
- **Provider / access:** Upstage Console API (`https://api.upstage.ai/v1`, OpenAI-SDK compatible), Solar Chat, OpenRouter, on-premises (contact). Proprietary; weights not released. No free tier; promos: free on Hermes Agent from Oct 5 (limited), launch discount through Oct 10 UTC.
- **Release / knowledge:** Released 2026-09-22 (build `solar-mini4-260922`); knowledge cutoff February 2026.
- **IDs:** `solar-mini4` / `solar-mini4-260922` (Upstage), `upstage/solar-mini4` (OpenRouter), `solar-mini4` (Artificial Analysis), `opencode/solar-mini-4` (curated).
- **Context window:** 512K tokens total / 128K max output (vendor docs); Artificial Analysis advertises 1M / 262K (conflicting — see research report).
- **Modalities:** Text in and text out; Korean, English, Japanese. Reasoning hybrid ("does not use reasoning by default" — switch via `reasoning_effort`); tool calling + `parallel_tool_calls=True`, JSON mode, JSON Schema structured output.
- **Pricing (as of 2026-10-01):** $0.10 input / $0.01 cached input / $0.40 output per 1M tokens (standard). Launch promo 70% off through Oct 10 UTC; OpenRouter 50% off ≈ $0.05/$0.20; free on Hermes Agent from Oct 5.
- **Architecture:** MoE 35B total / 3B active per token; proprietary (weights not released); on-prem quantized → single H100 80GB (full 35B weights still load).

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: **1%** (Artificial Analysis launch article) — weak autonomous agentic coding.
- AutomationBench-AA: **22.3%** (AA launch article) — weak automation on real SaaS workflows.

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: **24.1** (v4.3.2) — highest among 3B-active models (Upstage launch blog + AA).
- AA-LCR v1.1: **83.3%** — matches MiniMax-M3 & GPT-6 Luna (max); vs Gemini 3.8 Flash 81%, GPT-6 Astra 81% (AA launch article).
- SciCode: **47.6%** — vs MiniMax-M3 47%, Inkling (xhigh) 47% (AA launch article).
- HLE: **25.8%** (Upstage launch blog).
- τ³-Banking: **47.2** (Upstage launch blog).
- GDPval-AA: **1072 Elo**; AA-Briefcase: **872 Elo** (AA launch article).
- AA-Omniscience: accuracy **18%** (−11), non-hallucination **64%**, abstains ~50% (AA launch article).

**Coding:**
- Terminal-Bench 4.0: **1%** (AA launch article) — autonomous coding is a relative weakness; no SWE-bench/LiveCodeBench row verified for this exact ID.
- SciCode: **47.6%** (AA launch article) — bounded scientific-coding utility.

**Long context:**
- Output tokens per AA task: **88K** incl. **72K reasoning**; decode **208 tok/s**; **7.1 min** per task; repeat-context cache-hit **48%** vs 99% for GPT-6 Luna (max) (AA launch article + AlphaSignal).

### Normalized scores (1–100)

- **Tool use: 45/100.** Tool calling + parallel tool calls + JSON Schema supported for bounded extraction/structured-output work; autonomous coding & terminal reliability weak (TB 4.0 1%), capping the tool-use ceiling.
- **Reasoning: 58/100.** AA-LCR 83.3% is a strong long-context-reasoning signal; capped by AA-Omniscience accuracy 18% and abstention-heavy behavior (64% non-hallucination).
- **Context window: 86/100.** 512K total / 128K output per vendor docs; AA headline 1M/262K (conflicting). AA-LCR 83.3% is among best-in-class for the active-parameter band.
- **Multimodal: 15/100.** Text-only input/output; no image/video/audio.
- **Coding: 38/100.** TB 4.0 1% and AutomationBench-AA 22.3% cap autonomous agentic coding; SciCode 47.6% gives bounded scientific-coding utility.
- **Cost efficiency: 58/100.** $0.10/$0.40 per 1M tokens with 70% launch discount (~$0.05/$0.20); heavy reasoning-token use (88k output/intel task) means it is ~5x the cost per task of GPT-6 Luna (max) despite similar per-token prices; mid-range cost efficiency.
- **Overall Score: 48/100.** (45+58+86+15+38)/5 = 48.4 → 48. Best fit: high-volume, schema-shaped text work and long Korean/English/Japanese document reasoning at low per-token cost.

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (Upstage Console docs, Upstage launch blog, Artificial Analysis launch article + model page, AlphaSignal benchmark coverage, TPS, Etnews, Noometry); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage Solar Mini 4 model card](https://console.upstage.ai/docs/models/solar-mini-4)
  - [Upstage launch blog — Solar Mini 4: Built for High-Volume Agent Workloads](https://www.upstage.ai/blog/en/solar-mini-4)
  - [Artificial Analysis — Korean AI Lab Upstage releases Solar Mini 4](https://artificialanalysis.ai/articles/korean-ai-lab-upstage-releases-solar-mini-4)
  - [AlphaSignal — Solar Mini 4 triples its benchmark score with 3B active parameters](https://alphasignal.ai/news/upstage-s-solar-mini-4-triples-its-benchmark-score-with-3b-active-parameters)
  - [TPS — Upstage Releases Solar Mini 4: 35B MoE Model with 524K Context](https://tpsreport.news/news/upstage-solar-mini-4-524k-context)
  - [Etnews — Upstage unveils Solar Mini 4 (Oct 1, 2026)](https://www.etnews.com/20261001000457)
  - [Noometry — Upstage API pricing](https://noometry.com/llm-pricing/upstage)
  - [Agent Operators — Solar Mini 4: How I Run It Free Inside Hermes Agent](https://theagentoperators.com/blog/solar-mini-4/)

---
