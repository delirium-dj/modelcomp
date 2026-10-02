# Muse Spark 1.1 — findings by Qwen 3.8 Flash

- Source: Meta / Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's reasoning-tier Muse Spark (sibling of Muse Spark 1.2/1.3). BenchLM ranks it high (#27 of 645; 66.6/100; 40/618 rows, Reasoning) on an **outstanding agentic/tool breadth** — MCP Atlas **88.1%**, Cybench 92.9%, Terminal-Bench 2.1 80.0%, OSWorld-Verified 80.8%, DeepSearchQA 84.9%, Toolathlon 75.6% — and solid coding (SWE-bench Vals 82.0%, LiveCodeBench Vals 85.9%, AA Coding Index 71.3%) and knowledge (GPQA ~90–91%, AA-HLE 46.2%). The main drags are a middling Intelligence Index (33.7), low full-length retrieval (MRCR 1M only 54.1%), weak newest-tier autonomy (GDPval-AA 35.4%, AA Agentic Index 27.5%, ExploitGym 0.8%) and image-only multimodality.
- **Provider / access:** Meta AI; OpenCode (`opencode/muse-spark-1.1`); OpenRouter (`meta/muse-spark-1.1`). Reasoning + tool calls; image input.
- **Release / knowledge:** 2026 (Muse Spark 1.1); cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.1` / OpenRouter `meta/muse-spark-1.1`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M (but see MRCR caveat).
- **Modalities:** Text + image in; text out (CharXiv/BabyVision corroborate vision; curated `meta.json` "Text in/out" is a stub).
- **Pricing (as of 2026-10-02):** Meta proprietary paid tier (exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (40 of 618 rows; 66.6/100, #27 of 645, Reasoning type), citing the Meta AI Muse Spark 1.1 evaluation report, Artificial Analysis, Vals AI and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- MCP Atlas **88.1%**; Cybench **92.9%**; Terminal-Bench 2.1 **80.0%** (Vals 69.3); OSWorld-Verified **80.8%**; DeepSearchQA 84.9%; Toolathlon 75.6%; WebArena-Verified 69%; Finance Agent v2 57.2%; JobBench 54.7%; deepSWE 53.3%; CyberGym 59.0%
- weak newest/frontier autonomy: GDPval-AA **1375 / 35.4%**, AA Agentic Index 27.5%, OSWorld 2.0 14.2%, ExploitGym 0.8%

Coding:

- SWE-bench (Vals) **82.0%**; LiveCodeBench (Vals) **85.9%**; AA Coding Index **71.3%** (over 70 bar); SWE-bench Pro 61.5%; AA-SciCode 58.8%

Reasoning / knowledge:

- AA-GPQA Diamond **89.8%** (Vals 91.2 — at/over the bar); AA-HLE **46.2%** (over 40 bar; Meta HLE 62.1% w/tools, 52.2% w/o); MMLU-Pro (Vals) 88.7; HealthBench Professional 59.3%
- AA Intelligence Index **33.7** (moderate); CritPt 15.1%; AA-LCR 77.7
- AA-Omniscience Index 28.1 / Accuracy 52.1% / Hallucination 50.0% (moderate)

Multimodal / long context:

- CharXiv **88.4%** (strong document/chart); BabyVision 76.3; Design Arena Website 1278
- 1M window, but **MRCR 1M only 54.1%** (weak full-length retrieval); AA-LCR 77.7

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Exceptionally broad and strong agentic coverage — MCP Atlas 88.1%, Cybench 92.9%, OSWorld-Verified 80.8%, Terminal-Bench 2.1 80.0%, DeepSearchQA 84.9% and Toolathlon 75.6% — tempered only at the newest autonomy frontier (GDPval-AA 1375 / 35.4%, AA Agentic Index 27.5%, ExploitGym 0.8%).
- **Reasoning: 74/100.** GPQA ~90–91% and AA-HLE 46.2% both clear their bars with a good Omniscience Index (28.1), but the Intelligence Index is only 33.7, CritPt 15.1% is low, and a 50.0% hallucination rate is a moderate reliability drag.
- **Context window: 80/100.** A native 1M window is the top band by size, but full-length retrieval is weak (MRCR 1M 54.1%) with only middling AA-LCR 77.7 — so it lands below the 90+ 1M tier that has strong retrieval, and the curated `meta.json` (128K) is a stub overridden by evidence.
- **Multimodal: 70/100.** Text+image in with a very strong document/chart read (CharXiv 88.4) and good general vision (BabyVision 76.3, Design Arena 1278) — the top of the +image band, but no audio/video rows and text-only output keep it out of the multi-input/omni tiers.
- **Coding: 80/100.** SWE-bench (Vals) 82.0%, LiveCodeBench (Vals) 85.9% and an AA Coding Index of 71.3% (over 70) clear the ~74 bar, tempered by SWE-bench Pro 61.5% and SciCode 58.8% on the harder/longer end.
- **Cost efficiency: 65/100.** Meta proprietary paid tier (exact per-1M not published in curated meta; "Standard pricing" stub) — provisionally mid-band. Cost is excluded from Overall.
- **Overall Score: 77/100.** Mean of Tool 82, Reasoning 74, Context 80, Multimodal 70, Coding 80 = 77.2 → 77. Best fit: a strong agentic/tool-use and coding model (MCP/Cybench/OSWorld/Terminal-Bench breadth is a standout) with good GPQA/HLE grounding and solid document vision; its weak spots are full-length (1M) retrieval, frontier autonomy (GDPval/ExploitGym), only-image multimodality, and a middling Intelligence Index.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Meta AI Muse Spark 1.1 evaluation report, Artificial Analysis, Vals AI and OpenRouter); partial coverage (40/618, Reasoning). Curated `meta.json` stub (128K/text) corrected to verified 1M/image with the MRCR-1M retrieval caveat. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
