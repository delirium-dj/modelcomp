# GPT-OSS 120B — findings by Qwen 3.8 Max

- Source: OpenAI (`openai/gpt-oss-120b`; id `openai/gpt-oss-120b`; AA `gpt-oss-120b` — **High** reasoning variant)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** OpenAI's **flagship of the first-ever open-weight gpt-oss line** — an **Apache-2.0 sparse-MoE reasoning model, 117B total / 5.1B active**, released **5 Aug 2025** (knowledge cutoff **31 May 2024**), engineered to fit **one 80 GB GPU** (MXFP4) and served through the **Harmony response format**. It is a genuinely strong **small-cost reasoning/knowledge engine** — **AIME-2025 ≈ 90–92.5, GPQA-Diamond ≈ 78.5–80.8, MMLU-Pro 79.2, LiveCodeBench 83.2 (Vals harness)** — but a **weak autonomous agent**: its own model card and every independent run flag **very high hallucination** (**~90.8%** non-cited-fact rate on SimpleQA-class probes) and **bottom-tier agentic coding** (**SWE-bench Vals 33.6% → rank 87/88 dead-last; Terminal-Bench 2.0 19.1% → rank 59/67**), even though the vendor card reports **SWE-bench Verified 62.4%** on a friendlier harness. Artificial Analysis **profiles the High variant**, confirms specs + **Speed 206.4 tok/s (#4/26, 4-of-4 notably fast)** + **Cost $0.15/$0.60 (33% cache)**, but its **Intelligence Index = N/A ("No publicly available API")** — so no neutral composite quality score exists; Vals AI supplies the independent per-benchmark picture. **Multimodal: strictly text-only.** **Guards:** this is the **120B**, **not** the sibling **gpt-oss-20b** (much weaker) nor **gpt-oss-120b-lite** (a separate distillation in the queue); the vendor's 62.4% SWE-bench-Verified belongs to a different harness than Vals' 33.6% and must not be conflated.

## Model card

- **Name:** GPT-OSS 120B (a.k.a. `gpt-oss-120b (High)` on AA; ships with configurable reasoning effort `low`/`medium`/`high`)
- **Short description:** OpenAI's first **open-weights** release — a reasoning MoE distilled from larger OpenAI models plus large-scale RL, published under **Apache 2.0** (commercial use allowed) with a **"gpt-oss chat/completions" usage policy**. Its design goal is **intelligence-per-dollar on a single GPU**, not frontier agentic autonomy.
- **Provider / access:** **Apache-2.0 open weights** (Hugging Face `openai/gpt-oss-120b`) — self-host $0 (fits one 80 GB H100 in MXFP4). Hosted across many vendors (meta cites 17 — OpenRouter, Groq, Together, Fireworks, etc.); **AA/LLM-Stats currently track 2** (OpenAI $0.10/$0.50, Fireworks $0.15/$0.60). `noFreeId: true` (no free route in the curated catalog).
- **Release / knowledge:** Released **5 August 2025** alongside gpt-oss-20b. **Knowledge cutoff 31 May 2024** (AA) — old for a model still in the roster.
- **IDs:** `openai/gpt-oss-120b` (HF / OpenRouter). AA slug `gpt-oss-120b`.
- **Context window:** **131,072 total** (AA spec 131k; Vals lists 128k / 33k-max-out — immaterial rounding). Matches meta.
- **Modalities:** **Text in → text out only.** AA + Vals + model card all confirm no image/audio/video input. **NOT multimodal.**
- **Pricing:** **$0.15 / $0.60 per 1M in/out (OpenAI/Fireworks; LLM-Stats floor $0.10/$0.50)**, **~$0.075 cached (33% cache discount)**; **$0 Apache-2.0 self-host**.
- **Architecture:** **Sparse MoE, 117B total / 5.1B active per token** (LLM-Stats 116.8B), reasoning-capable (`low/med/high` effort; AA profiles **High**), mandatory **Harmony format** (a real integration cost). Distillation + RL post-training.

### Raw benchmarks found

> **Provenance: Artificial Analysis `gpt-oss-120b` (High)** for independently measured **Speed / Cost / specs** (Intelligence Index **N/A — no public API**); **Vals AI `fireworks/gpt-oss-120b`** for **independent per-benchmark accuracy** (its own harnesses); **OpenAI gpt-oss model card (arXiv 2508.10925 / cdn.openai.com PDF)** for the **vendor** headline numbers. Vals' SWE-bench/Terminal-Bench use **different, harder harnesses** than the vendor card's SWE-bench Verified — the two are **not** the same measurement.

**Reasoning / knowledge (mix of vendor + Vals-independent — the model's real strength):**
- **AIME 2025 (no tools): ≈ 90.0–92.5%** (vendor high-effort; meta's 92.5 is the high-reasoning figure).
- **GPQA-Diamond: 78.54% (Vals, rank 74/138)** / **≈ 80.8% (vendor card)** — solidly good.
- **MMLU-Pro: 79.17% (Vals, rank 100/138)** · **LiveCodeBench: 83.23% (Vals harness, rank 51/143)**.
- ⚠️ **Hallucination:** the OpenAI model card itself reports a **very high hallucination rate** on factual QA; curated meta states **~90.8%** (SimpleQA-class non-hallucination floor). AA-Omniscience is not scored here (Intelligence N/A). Fact-grounded answers are unreliable despite strong math/science reasoning.

**Coding (vendor mid vs independent bottom — harness split):**
- **SWE-bench Verified: 62.4%** (vendor card). ⚠️ **Vals AI reproduces SWE-bench at only 33.60% (rank 87/88 — dead-last)** on its harder, unassisted harness → the gap is harness/scaffolding, not a contradiction to hide; treat real agentic coding as **weak**.
- **LiveCodeBench 83.2 (Vals) / competition-style math-coding strong** — good at self-contained algorithmic problems, poor at repo-level autonomous edits.

**Agent / tool use (weak — the model's clear ceiling):**
- **Terminal-Bench 2.0: 19.10% (Vals, rank 59/67)** · curated meta **Terminal-Bench 2.1 ≈ 26.2%.** Supports function calling via Harmony, but multi-step terminal/agent tasks land **bottom-tier**; it is an assistant/reasoner, not an autonomous agent.

**Long context:**
- **131K window** is respectable but **not a stated strength**; no MRCR/long-retrieval benchmark published. Dialogue-depth retention (LLM-Stats) degrades on long conversations.

**Speed / cost (AA-measured — independent):**
- **Output speed 206.4 tok/s, #4/26 (4-of-4 units)** — "notably fast" (class median 113). **TTFT p95 6.50s (OpenAI).** **Cost $0.15 / $0.60, 33% cache (blended ≈ $0.05–0.08/M on cache-heavy traffic).** **Intelligence Index N/A** (no public API for AA to run the composite).

> **Self-reported vs independent:** Vals supplies genuinely independent accuracy; AA supplies independent Speed/Cost/specs; the headline AIME/SWE-bench-Verified/62.4% are **vendor** (model card). Weight the **Vals bottom-tier agentic scores (SWE 33.6, TB 19.1)** and the **card's own hallucination admission** as the real ceiling, and the **strong math/science reasoning** as the real strength.

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling exists (Harmony), but **Terminal-Bench 19.1 (rank 59/67)** and **SWE-bench 33.6 (rank 87/88)** on independent harnesses mark it a **poor autonomous agent**; strong as a reasoning assistant, weak as a doer.
- **Reasoning: 72/100.** The genuine strength: **AIME ~90+, GPQA ~78.5–80.8, MMLU-Pro 79.2** — top-of-class for a 5.1B-active open model — **dampened** by the **~90.8% hallucination** admission and **no independent Intelligence Index** (AA N/A).
- **Context window: 62/100.** **131K** is a solid, serviceable window with fast throughput, but no published long-retrieval (MRCR) evidence and documented dialogue-depth decay — competent, not a differentiator.
- **Multimodal: 50/100.** **Strictly text-only** (AA + Vals + card all confirm no image/audio/video I/O).
- **Coding: 64/100.** **Vendor SWE-bench Verified 62.4 / LiveCodeBench 83.2** show real algorithmic + assisted-coding skill, but independent **SWE-bench 33.6** exposes weak repo-level autonomy — mid overall.
- **Cost efficiency: 84/100.** **$0.15/$0.60 (33% cache) + free Apache self-host in one 80 GB GPU at 206 tok/s** — arguably the best intelligence-per-dollar open model of its era. *(Scored; not counted in Overall.)*
- **Overall Score: 60/100.** Half-up mean of the five quality dims (50 + 72 + 62 + 50 + 64)/5 = **298/5 = 59.6 → 60**. **Curated `average.md` = 61.1 → div −1.1** (a mild downward divergence: the report weights the **honest independent agentic floor** — Vals SWE 33.6 / TB 19.1, and the card's own **high-hallucination** admission — a touch more heavily than the curated value, while still crediting the elite math/science reasoning).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `gpt-oss-120b` (High)** — OpenAI open-weights MoE **117B total / 5.1B active**, released **Aug 2025**, **knowledge cutoff 31 May 2024**, **text in → text out**, **131k ctx**, **Speed 206.4 t/s #4/26 (4/4, notably fast)**, **TTFT p95 6.50s**, **Cost $0.15/$0.60, 33% cache**, **Intelligence Index N/A ("No publicly available API")**; **Vals AI `fireworks/gpt-oss-120b`** — independent accuracy **63.02%**, **GPQA-Diamond 78.54% (74/138)**, **LiveCodeBench 83.23% (51/143)**, **MMLU-Pro 79.17% (100/138)**, **SWE-bench 33.60% (87/88 dead-last)**, **Terminal-Bench 2.0 19.10% (59/67)**, TaxEval 71.59%, LegalBench 75.94%; **OpenAI gpt-oss model card** (arXiv 2508.10925 / cdn.openai.com PDF) — vendor **AIME-2025 ~90–92.5**, **SWE-bench Verified 62.4%**, self-admitted **high hallucination**; **LLM-Stats `gpt-oss-120b-high`** — 2 providers (OpenAI $0.10/$0.50, Fireworks $0.15/$0.60), Apache 2.0. Curated meta verified — 117B/5.1B/131K/text-only/$0.15-$0.60/Apache-self-host/SWE-Verified 62.4/AIME 92.5/TB ~26/90.8% hallucination **all confirmed**.)
- Future sources: if Artificial Analysis gains a public API to compute an **Intelligence Index** for `gpt-oss-120b`, replace the vendor card + Vals per-benchmark picture with a neutral composite. **Guard against** (a) crediting the sibling **gpt-oss-20b**'s weaker numbers or **gpt-oss-120b-lite** (separate queue entry) to this model, (b) conflating the vendor's friendlier **SWE-bench Verified 62.4%** with Vals' harder **33.6%** as one measurement, (c) reading AA's **Speed/Cost (High variant)** as a quality index — the Intelligence Index is explicitly **N/A**, and (d) trusting the strong math/science scores to mask the **documented ~90.8% hallucination** on factual recall.
