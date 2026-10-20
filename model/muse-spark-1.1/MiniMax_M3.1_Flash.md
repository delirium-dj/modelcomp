# Muse Spark 1.1 — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's **original** Muse Spark release (July 2026) — "Muse Spark 1.1 (`muse-spark-1.1`): the original version" — which launched the Muse Spark line with a 1M context, native multimodal perception and a strong tool/coding profile (MCP Atlas 88.1% and Toolathlon-Verified 75.6%, both best-verified in the catalogue; WebArena-Verified 69%). It is now **deprecated** in favour of Muse Spark 1.2, is **Standard-mode only** (no contributor SKU), is **not** part of Muse Code, and has **no `max` reasoning level** (that arrives with 1.3).
- **Provider / access:** Meta Model API `muse-spark-1.1` (OpenAI-compatible); OpenRouter `meta/muse-spark-1.1` (created 2026-07-16). **Absent from the OpenCode Zen catalogue** — 1.1 is the one Muse Spark generation with no Zen route.
- **Release / knowledge:** released **2026-07-08/09, 2026** (Meta dev blog dated Jul 08; ai.meta.com blog and the Evaluation Report cover "July 9, 2026"). Knowledge cutoff: **no verified public value found**.
- **IDs:** `muse-spark-1.1` (Meta Model API), `meta/muse-spark-1.1` (OpenRouter). No `-contributor` id exists for 1.1.
- **Context window:** **1,048,576 tokens** (1M) — "All take text, image, video, audio, and PDF input, return text, and have a 1,048,576-token context window." Max output: 256K (Vals) / 943,718 (OpenRouter) — the conservative reading is used.
- **Modalities:** input text, image, video, audio and PDF; output text (OpenRouter modality string `text+image+video+file->text`). Reasoning: `reasoning_effort` from **minimal to xhigh** — "Extended reasoning beyond `"xhigh"`. Supported by `muse-wonder-1.0` and `muse-spark-1.3`" — so 1.1 has **no `max` level**; `"none"` returns HTTP 400.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$1.25**, output **$4.25**, cached input **$0.15**; web search $2.50/1,000 queries. **The contributor price table ($0.10/$0.20/$0.002) does not apply** — "Muse Spark 1.1 is Standard mode only."
- **Rate limits:** 3,000 RPM / 4,000,000 TPM.
- **Architecture:** proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

> Meta's own model page (`dev.meta.ai/models/muse-spark-1-1`) and its Evaluation Report PDF are marked "vendor"; Artificial Analysis, Vals AI and the BenchLM ledger are independent. The report states: "All Muse Spark 1.1 results are run through Meta Model API, using xhigh reasoning effort."

Agent / tool use:

- MCP Atlas: **88.1%** (vendor) — best-verified in the BenchLM catalogue
- Toolathlon-Verified: **75.6%** (vendor) — best-verified in the catalogue
- WebArena-Verified Browser Agent Benchmark: **69%** (via BenchLM, attributed to the Meta report) — best-verified
- JobBench **54.7%** (vendor); OSWorld-Verified **80.8%** (vendor) / OSWorld 2.0 **14.2%** (via BenchLM); Finance Agent v2 **57.2%** (vendor) / 57.21% (Vals); DeepSearchQA **84.9%** (via BenchLM)
- Terminal-Bench 2.1: **80.0%** (vendor) / **77.90%** (AA) / **69.29%** (Vals AI, #30/75)
- Terminal-Bench 4.0: **6.06%** (AA) — no row on the official Terminal-Bench board
- HLE: **62.1%** with tools (vendor) / **46.20%** (AA) / 45% (AA article)
- Cybench: **92.9% pass@1 / 97.0% pass@10** (Meta Evaluation Report); Curated CTFs 89.9%; CyScenarioBench 0.5%; CyberGym **59.0%**; ExploitGym **0.8%** (all via the report/BenchLM)
- GDPval-AA: **1212.48 Elo** (AA, normalized 35.62%) / 1375 (via BenchLM, attributed to Meta) / AA-Briefcase Elo **850.65** (the lowest in the AA catalogue)
- Tau3-Banking **31.75%** (AA); Claw-Eval / Toolathon (non-Verified) / MCP-Atlas (independent): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.80%** (AA) / **91.16%** (Vals AI)
- LCR **77.67%** (AA); CritPt **15.14%** (AA); Omniscience index 28.08, accuracy **52.05%**, hallucination rate **49.98%** (AA); MMLU-Pro **88.73%** (Vals) / 88.7% (via BenchLM)
- Artificial Analysis Intelligence Index: **34** (#81/217, raw 33.73) at Xhigh — the launch article claimed **51** on the older index version
- No FrontierMath, ARC-AGI, AIME or IPhO figure published for 1.1

Coding:

- SWE-bench Pro **61.5%** (vendor) / SWE-bench **82.00%** (Vals AI, #21/88) / 82.0% (via BenchLM)
- DeepSWE v1.1 **53.3%** (vendor, pass@1 over 5 attempts) / 53.3% (via BenchLM)
- LiveCodeBench **85.91%** (Vals AI) / 85.9% (via BenchLM)
- Terminal-Bench 2.1 80.0/77.90/69.29; Vibe Code Bench v1.1 **72.16%** (Vals); FrontierCode: null; no CursorBench, FrontierSWE or ProgramBench row

Long context:

- MRCR v2 8-needle @1M: **54.1%** (via BenchLM, attributed to the Meta report's figure 44, which is an image and could not be read directly); no RULER / GraphWalks figure; AA-LCR 77.67% (short band only)
- 1,048,576-token window

Performance profile (AA, Xhigh): Index 34 (#81/217), output **240.0 t/s** (#6/186 — one of the fastest models measured), cost per Index task **$1.38** (#70/114), 170M output tokens (#98/116), TTFT 13.19s, first answer token 21.52s, 1M context. The AA launch article (Jul 10) quoted "51 on the Artificial Analysis Intelligence Index", "~114 tokens/s median on Meta's first-party API", "94M output tokens" and "~$0.26 per Intelligence Index task".

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** The best tool profile of the Muse Spark generation — MCP Atlas **88.1%**, Toolathlon-Verified **75.6%**, WebArena-Verified **69%** (all three best-verified in the catalogue), OSWorld-Verified 80.8%, Terminal-Bench 2.1 80.0% (vendor) / 77.90% (AA) / 69.29% (Vals), JobBench 54.7%, Finance Agent v2 57.2%, DeepSearchQA 84.9%, Cybench 92.9% pass@1. Capped by the rubric's anchors (tau3 ~50%+ → 31.75%; GDPval ~1750+ → 1212.48 Elo and an AA-Briefcase Elo of 850.65, the lowest measured), by Terminal-Bench 4.0 at 6.06%, and by the 80.0-vs-69.29 Terminal-Bench 2.1 spread.
- **Reasoning: 80/100.** GPQA Diamond 89.80–91.16%, MMLU-Pro 88.73%, LCR 77.67%, HLE 62.1% with tools (vendor), Omniscience accuracy 52.05% with a 49.98% hallucination rate. Capped by the AA Intelligence Index of **34** (51 at launch on the older index version), CritPt 15.14%, and the complete absence of any FrontierMath, ARC-AGI or AIME figure for 1.1.
- **Context window: 92/100.** 1,048,576-token window — the rubric's top tier on size — with the output cap at 256K/943,718 by different sources. Held at 92 because the only long-context datapoint, MRCR v2 8-needle at 1M, is **54.1%** (and it is figure-derived rather than text-verified), with no RULER or GraphWalks measurement and AA-LCR 77.67% covering only the short band.
- **Multimodal: 88/100.** Text, image, video, audio and PDF input with text output — the rubric's "+audio in = 90–100" band — with CharXiv **88.4%** and BabyVision **76.3%** published by Meta, and OmniDocBench-class document work implied by the WebArena/OSWorld rows. Held at 88 because no MMMU-Pro, ZeroBench or video-specific evaluation has been published for 1.1 (the ZeroBench 50.0 / BabyVision 82.0 / VideoMME 61.5 numbers belong to the open **Muse Spark Open** checkpoint, released three months later).
- **Coding: 76/100.** SWE-bench 82.00% (Vals) and SWE-bench Pro 61.5%, LiveCodeBench 85.91%, Terminal-Bench 2.1 80.0% (vendor) / 77.90% (AA), Vibe Code Bench 72.16%. Capped by DeepSWE **53.3%** (far under the rubric's 74% anchor), Terminal-Bench 4.0 at 6.06%, the absence of any FrontierSWE, CursorBench or ProgramBench figure, and by the missing `max` reasoning level that 1.3 added.
- **Cost efficiency: 88/100.** The evaluated route is Meta's own Model API at **$1.25 in / $4.25 out** per 1M with a $0.15 cached read — exactly the rubric's "~$1.25/$4.25 = ~88" anchor. Artificial Analysis measures **$1.38 per Intelligence Index task** and 240 t/s, so the cost per unit of work is excellent. There is **no contributor tier for 1.1** (Standard mode only) and **no Zen route**, so neither a discounted nor a $0 tier can be credited; the caveat that the model is no longer sold through OpenCode Zen is stated instead.
- **Overall Score: 83.2/100.** (80 + 80 + 92 + 88 + 76) / 5 = 83.2 — best-fit: the tool-and-perception specialist of the Muse Spark line (best-verified MCP Atlas, Toolathlon and WebArena in the catalogue) at 240 t/s and $1.25/$4.25 — excellent for browser-and-computer agents and multimodal pipelines, but with a coding profile (DeepSWE 53.3%, Terminal-Bench 4.0 6.06%) two generations behind Muse Spark 1.3, and a 1M window whose 1M-band retrieval is only ~54%.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 80.0% (Meta) vs 77.90% (AA) vs 69.29% (Vals, #30/75).** Three harnesses; AA is the anchor.
2. **AA index — 34 today vs 51 in the July launch article** ("Muse Spark 1.1 scores 51 on the Artificial Analysis Intelligence Index"), with the same article quoting 114 t/s and $0.26/task against today's 240 t/s and $1.38/task. Index-version re-baselining plus different measurement windows; the current 34 is scored.
3. **AA's own provider count is inconsistent** — the model page says "2 providers" while the providers page says "1 API provider" (median 194 t/s, first chunk 20.89s vs the model page's 240.0 t/s and 13.19s TTFT). Recorded; the model-page figures are quoted.
4. **HLE — 62.1% with tools (Meta) vs 46.20% (AA) vs 45% (AA article).** Tool condition explains the gap; both are listed.
5. **GDPval-AA — 1212.48 Elo (AA) vs 1375 (via BenchLM, attributed to Meta).** A 160-Elo spread; AA is used.
6. **Max output — 256K (Vals) vs 943,718 (OpenRouter) vs the 1,048,576 context window.** The conservative figure is used.
7. **Release date — Jul 8 (Meta dev blog) vs Jul 9 (Meta AI blog, AA, Vals, Evaluation Report cover).** The launch-day date is used.
8. **Meta's report figure 44 is an image**, so the MRCR 1M 54.1%, HealthBench Pro 59.3%, WebArena 69%, DeepSearchQA 84.9% and OSWorld 2.0 14.2% rows could not be read directly from the PDF text and are reported as BenchLM-attributed values.
9. **Muse Code availability** — Meta's docs list 1.1 as "Not available" in Muse Code, so the model is API-only; this is a genuine access constraint, not a quality signal.

### Notes on identity

- `muse-spark-1.1` is a distinct checkpoint from `muse-spark-1.2` (August 2026) and `muse-spark-1.3` (September 2026), and from the open-weight **Muse Spark Open** (October 2026) whose ZeroBench / BabyVision / VideoMME numbers are lineage data, not 1.1 data.
- It has **no contributor SKU** ("Muse Spark 1.1 is Standard mode only") and **no `max` reasoning level** — both arrived with 1.2/1.3. So "Muse Spark 1.1 Free/Contributor/Max" names do not exist as separate products, in the same way that they do not for 1.2.
- It is **absent from the OpenCode Zen catalogue**, so this model has no route in the platform this dataset tracks; access is via the Meta Model API or OpenRouter.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Meta's `dev.meta.ai` model page and docs (models, reasoning, pricing/rate-limits), the Muse Spark 1.1 Evaluation Report PDF, the launch blogs (dev.meta.ai and ai.meta.com), OpenRouter's catalog, Artificial Analysis (model page, per-evaluation payload, launch article, providers page), Vals AI, the BenchLM evidence ledger, and Hacker News / Reuters coverage. Vendor-vs-independent conflicts — including the AA index re-baselining, the provider-count inconsistency and the image-only report figure — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.1.md`, using the same headings.
