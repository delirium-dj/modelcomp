# Claude Haiku 3.5 — findings by Claude Opus 5

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (Anthropic's launch styling was "Claude 3.5 Haiku")
- **Short description:** Anthropic's fast, low-cost model from the Claude 3.5 generation, positioned at launch as matching its then-flagship **Claude 3 Opus on many evaluations** while staying in the Haiku speed tier. Its standout result was coding: **40.6% on SWE-bench Verified**, which Anthropic said outperformed many agents built on the original Claude 3.5 Sonnet and GPT-4o ([AI/TLDR model record](https://ai-tldr.dev/models/claude-3-5-haiku/), which links each figure to its published source). Distinct model; Claude 3 Haiku, Haiku 4.5 and Haiku 5.5 are separate folders.
- **Provider / access:** Launched on the Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock (`anthropic.claude-3-5-haiku-20241022-v1:0`) and Google Cloud Vertex AI. **Lifecycle — this model is retired, and the lifecycle data is authoritative:** Anthropic's own deprecation register lists `claude-3-5-haiku-20241022` as **Retired**, deprecated **2025-12-19** and retired **2026-02-19**, with `claude-haiku-4-5-20251001` as the recommended replacement ([Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)). **Amazon Bedrock set a separate end-of-life of 2026-06-19.** OpenCode Zen's own deprecation table lists Claude Haiku 3.5 at 2026-02-16 ([Zen docs](https://opencode.ai/docs/zen/)). Requests now fail everywhere.
- **Release / knowledge:** Announced **2024-10-22** (the date encoded in its model ID), generally available **2024-11-04**. **Knowledge cutoff: July 2024.** Service life approximately 16 months on the first-party API.
- **IDs:** `claude-3-5-haiku-20241022`, `anthropic.claude-3-5-haiku-20241022-v1:0`. **No free tier** at any point on the API.
- **Context window:** **200,000 tokens**, with a **maximum output of only 8,192 tokens** — by far the lowest output ceiling of any model in this research pass, and a serious practical constraint.
- **Modalities:** **Text in → text out at launch; image (vision) input was added to the first-party Claude API on 2025-02-25**, while "some platforms such as Amazon Bedrock kept it text-only." So its modality surface was route-dependent for most of its life. No audio, no video, no generated media. Reasoning: **no** — this predates Anthropic's hybrid/extended-thinking models entirely; there is no thinking budget or effort control. Tool calls: yes.
- **Pricing (as of 2026-10-08):** **No live price — the model is retired.** Historically: launched at **$1 / MTok input, $5 / MTok output**, reduced to **$0.80 / $4.00 on 2024-12-05**, with prompt caching supported.
- **Architecture:** Proprietary and undisclosed — described as a "proprietary transformer-based **dense** model". Parameter count never published.

### Raw benchmarks found

> **A source-quality problem I resolved rather than averaged.** Several low-authority aggregators report wildly different SWE-bench Verified figures for this model — **22.0%** (serenitiesai), **40.6%** (AI/TLDR, inferencerate) and **49%** (houdao) — a 27-point spread. I weight **40.6%**, because it is the figure carried by the source that links each benchmark to its published origin, is corroborated by a second tracker, and is consistent with Anthropic's own launch framing (beating the original 3.5 Sonnet and GPT-4o). The 22.0% and 49% outliers are recorded here as unverified and not used. **BenchLM has no entry** for this model (its Anthropic list includes Claude 3 Haiku at 14.47 but not 3.5 Haiku), **evals.report returns 404**, and **Artificial Analysis has no entry** — so there is no aggregate index and **no hallucination measurement**.

Agent / tool use:

- **Nothing verifiable.** No Terminal-Bench, no OSWorld, no τ²-bench, no GDPval, no MCP, no WebArena. One low-authority source reports TAU-bench retail 80.5% and aviation 60.3%, but that source also carries the 49% SWE-bench outlier and a contradicted release date, so **I do not credit it**. Tool calling was supported and is unmeasured.

Reasoning / knowledge:

- **MGSM: 85.6%** (AI/TLDR, published-source linked) — multilingual grade-school math
- **DROP (F1): 83.1%** (AI/TLDR)
- **MATH: 69.4%** (AI/TLDR)
- **MMLU-Pro: 65%** (AI/TLDR)
- **GPQA Diamond: no verified figure.** One low-authority source reports 59.4%; it is not corroborated and comes from the same source as the 49% SWE-bench outlier, so it is recorded as unverified and not used.
- **HLE, CritPt, AA-LCR, AA-IFBench, Artificial Analysis Intelligence Index, AA-Omniscience: no verified public score found**

Coding:

- **SWE-bench Verified: 40.6%** (AI/TLDR, published-source linked; see the source-quality note above) — Anthropic's own framing was that this "outperformed many agents using the original Claude 3.5 Sonnet and GPT-4o"
- **HumanEval: 88.1%** (AI/TLDR)
- SWE-bench Pro, LiveCodeBench, Aider Polyglot, SciCode: no verified public score found

Multimodal:

- **No vision benchmark of any kind.** Vision input existed only on the first-party API and only from 2025-02-25 — four months after launch — and was never measured publicly.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 200K window is unvalidated, and the **8,192-token output ceiling** means long-context work could read a great deal and write almost nothing.

### Normalized scores (1–100)

- **Tool use: 38/100.** Scored on the absence of any verifiable agentic measurement. Tool calling was supported, but there is **no Terminal-Bench, OSWorld, τ²-bench, GDPval or MCP result**, and the only TAU-bench figures I found come from a source whose other numbers are demonstrably wrong. This model predates the agentic-benchmark era and nobody has retroactively measured it.
- **Reasoning: 50/100.** The four verifiable figures are a coherent mid-tier picture for late 2024: **MGSM 85.6%** and **DROP F1 83.1%** are solid, **MATH 69.4%** respectable, **MMLU-Pro 65%** unremarkable even then and clearly below current small models (Gemma 4 12B posts 77.2%, Qwen 3.5 9B 82.5%). Capped further by having **no verified GPQA figure, no HLE, no CritPt and no hallucination measurement**, and by a **July 2024 knowledge cutoff** that is now over two years stale.
- **Context window: 56/100.** 200,000 tokens was generous for a budget model in 2024 and the review literature rightly flagged it as the cheapest 200K access in the Claude family at the time. But two hard constraints cap it: the **8,192-token maximum output** is the lowest in this entire dataset by a factor of four, making it structurally unsuitable for long-form generation; and **no long-context measurement of any kind exists**.
- **Multimodal: 38/100.** It **launched text-only**, gained vision on the first-party API only in February 2025, and **retained text-only behaviour on Amazon Bedrock** — so the capability was both late and route-dependent. There is **no vision benchmark whatsoever**. Scored above the text-only floor to reflect that vision genuinely existed on one route, and well below any measured-vision model.
- **Coding: 58/100.** The dimension that justified the model, and still its best: **SWE-bench Verified 40.6%** was a genuinely notable result for a small model in late 2024 — beating the original Claude 3.5 Sonnet and GPT-4o — and **HumanEval 88.1%** is strong. Capped by how far the field has moved (Claude Haiku 4.5 reaches 66.6% independently, MAI-Code-1.1-Flash 72.6%), by the absence of SWE-bench Pro or LiveCodeBench, and by the unresolved 22/40.6/49 source spread that leaves even the headline figure less certain than I would like.
- **Cost efficiency: 16/100.** **The model is retired on every route** — Anthropic 2026-02-19, Bedrock 2026-06-19, Zen 2026-02-16 — so requests fail and its value at any price is effectively nil. Judged on its historical $0.80 / $4.00, the intra-vendor comparison is stark: **Claude Haiku 5.5 costs $0.10 / $0.50 — 8× cheaper on both lines — with a 1M context window instead of 200K, 128K output instead of 8K, adaptive thinking, a Jun 2026 cutoff, and a BenchLM score of 66.35.** The 16 rather than lower reflects two real historical virtues: prompt caching support, and Anthropic cutting the launch price by 20% within six weeks.
- **Overall Score: 48/100.** Mean of the five non-cost dims (38 + 50 + 56 + 38 + 58) / 5 = 48.0. Best fit: **none — it is retired.** Its historical significance is real and narrow: it demonstrated that a budget-tier model could reach 40.6% on SWE-bench Verified and match the previous flagship on many evaluations, and it made 200K context cheap. It is also a useful cautionary case for this dataset: a retired model with no authoritative tracker coverage attracts a cloud of mutually contradictory third-party figures, and the only reliable facts left about it are the ones Anthropic still publishes in its deprecation register.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **Anthropic's own model-deprecation register** as the authoritative lifecycle source (Retired; deprecated 2025-12-19, retired 2026-02-19, replacement `claude-haiku-4-5-20251001`); the **AI/TLDR** model record, which supplied the internally-consistent specification and benchmark set (2024-10-22 announcement and 2024-11-04 GA, 200K context, 8,192-token max output, July 2024 knowledge cutoff, text-only launch with first-party vision added 2025-02-25 and Bedrock remaining text-only, undisclosed dense proprietary architecture, the $1/$5 launch price cut to $0.80/$4 on 2024-12-05 with prompt caching, both platform model IDs, the Bedrock 2026-06-19 EOL, and the SWE-bench Verified / HumanEval / MMLU-Pro / MATH / MGSM / DROP figures, each of which that source links to a published origin); and the **OpenCode Zen** deprecation table. **A 27-point spread in third-party SWE-bench Verified figures (22.0% / 40.6% / 49%) is reported in full, with reasoning given for weighting 40.6% and discarding the outliers**; a single uncorroborated GPQA Diamond figure of 59.4% and uncorroborated TAU-bench figures from the same low-authority source as the 49% outlier are recorded as unverified and **not used in any score**. BenchLM (no entry, while Claude 3 Haiku is indexed), evals.report (404) and Artificial Analysis (no entry) were all checked, so the absence of an aggregate index and hallucination rate is reported rather than proxied. No data was imported from `claude-haiku-4.5` or `claude-haiku-5.5`; their figures appear only in the cost comparison and were gathered independently in this same pass. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
