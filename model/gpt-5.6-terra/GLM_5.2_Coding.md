# GPT-5.6 Terra — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's mid-tier GPT-5.6 model, released 2026-07-09 alongside GPT-5.6 Sol (launch post: openai.com/index/gpt-5-6/) — the price-efficiency sibling in the 5.6 family at $2/$12. Post-DevDay-2026 it occupies an awkward middle: GPT-6.1 Sol (2026-09-29) beats it broadly at the same $2 input but lower $10 output, and the Sept flagship tables consistently show Terra trailing Sol on agent rows while staying close on knowledge/reasoning rows.
- **Provider / access:** OpenAI API (1 provider tracked by LLM Stats); playground mode chat.
- **Release / knowledge:** 2026-07-09; knowledge cutoff February 2026 (same as Sol).
- **IDs:** `openai/gpt-5.6-terra`. Siblings: GPT-5.6 Sol ($5/$30) and GPT-5.6-family Luna-tier budget model.
- **Context window:** 1.1M tokens in / 128K out (LLM Stats) — same class as Sol.
- **Modalities:** text + image input; text out; reasoning effort dial per family pattern.
- **Pricing (as of 2026-10-09):** $2.00 / $12.00 per 1M in/out; cached $0.20 (LLM Stats; matches Google's Sept table). TTFT p95 4.37s; output p5 33 c/s — faster than Sol's 5.76s/26.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> Primary independent rows: Google's Gemini 3.8 Flash six-model launch table (2026-09-02, vendor=Google runs) — the only full public Terra benchmark table surfaced this session. LLM Stats dataset tables JS-gated; no OpenAI Terra launch table surfaced.

Agent / tool use (Google's runs):

- Terminal-bench 2.1: **87.4%** vs Sol's 88.8%, 3.8 Flash's 89.4% — close to the top on bounded terminal work.
- Terminal-bench 4.0: **23.6%** vs Sol's 37.3%, 3.8 Flash's 19.1%, Opus 5's 51.8% — Flash-class on open-ended agency.
- OSWorld-2.0 (partial): **50.2%** vs Sol's 62.6%, 3.8 Flash's 59.0%.
- GDPVal-AA v2 (Elo): **1,528** vs Sol's 1,710, Sonnet 5's 1,584, 3.8 Flash's 1,545.
- Vals Finance Agent v2: **54.4%** vs Sol's 53.8% (Terra's one agent win), 3.8 Flash's 61.4%.
- Harvey's Legal Agent Benchmark: **0.8%** — bottom of the table vs Sol's 2.5%, 3.8 Flash's 10.0%.
- AutomationBench / Agents' Last Exam / AA Briefcase: no Terra rows published.

Reasoning / knowledge (Google's runs):

- HLE-Verified: **51.1%** vs Sol's 54.5%, 3.8 Flash's 54.9%.
- CharXiv Reasoning (no tools): **85.9%** — edges Sol's 85.8%, just under 3.8 Flash's 86.2%.
- BioMysteryBench human-solvable: **83.8%** (Sol 79.5%); human-difficult: **49.4%** — ties Opus 5, beats Sol's 44.7%.
- GDP.PDF: **29.0%** vs Sol's 40.0%, 3.8 Flash's 35.0%.
- LVBench (long video): **78.9%** vs Sol's 82.1%, 3.8 Flash's 87.8%.
- LABBench2: **81.2%** vs Sol's 82.1%, 3.8 Flash's 86.2%.
- ARC-AGI-3 / GPQA / AA Index: no verified Terra rows found this session.

Coding:

- DeepSWE v1.1: **69.6%** vs Sol's 72.7%, 3.8 Flash's 73.7%, Opus 5's 74.0% — respectable cluster entry.
- Terminal-bench 2.1: **87.4%** — see agent section.
- SWE-bench Verified / CursorBench / FrontierCode: no verified Terra rows found.

Long context:

- 1.1M / 128K out (LLM Stats). No MRCR/RULER Terra row (Astra's table baselined Sol, not Terra) — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 76/100.** TB 2.1 87.4% is near-top and Vals Finance 54.4% edges Sol, but TB 4.0 23.6%, OSWorld 50.2%, GDPval 1,528 and Harvey Legal 0.8% (worst in table) put open-ended agency a full tier below Sol; no AutomationBench/ALE coverage.
- **Reasoning: 78/100.** HLE-Verified 51.1%, CharXiv 85.9%, BioMystery-difficult 49.4% (ties Opus 5), LVBench 78.9% — genuinely close to Sol on knowledge rows; capped by the 3.4-pt HLE gap, GDP.PDF 29%, and absent ARC/GPQA/AA Index rows.
- **Context window: 95/100.** 1.1M in / 128K out — full top tier on spec; no retrieval benchmark exists for Terra, so held just under the evidenced 1M ceiling.
- **Multimodal: 65/100.** Text + image in, text out (+image band); LVBench 78.9% is a video *benchmark* row run on its input path, but no native video-input claim verified — scored on verified modalities only.
- **Coding: 84/100.** DeepSWE 69.6% + TB 2.1 87.4% — inside the respectable cluster, ~5 pts behind the 73–75 frontier; no CursorBench/SWE-bench Verified confirmations.
- **Cost efficiency: 78/100.** $2/$12 with $0.20 cache — mid-tier rates that beat Sol's $5/$30 outright, but GPT-6.1 Sol now delivers more capability at $2/$10 and Terra's output premium over Sonnet 5.5 is unjustified by its agent rows; fastest TTFT in family (4.37s) partially offsets.
- **Overall Score: 80/100.** (76 + 78 + 95 + 65 + 84) / 5 = 79.6 → 80. Best-fit (historical): the July-2026 price-efficiency pick for bounded coding + knowledge work; as of Oct 2026 GPT-6.1 Sol dominates its slot — migrate unless pinned.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats GPT-5.6 Terra page: price/context/cutoff/latency; benchmark rows from Google's Gemini 3.8 Flash launch table as the only full public Terra column); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.