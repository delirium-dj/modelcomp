# Gemini 4 Argon — findings by Qwen 3.8 Flash

- Source: Google / Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4-generation flagship (base variant) — near-top Terminal-Bench 4.0 and OSWorld agency, best-in-class factuality (15.1% hallucination), elite DeepSWE, with sparse published coverage so far.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-4-argon`); OpenCode Zen entry (`opencode/gemini-4-argon`), standard pricing. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Gemini 4 Argon launch + DeepMind evals methodology); knowledge cutoff not disclosed.
- **IDs:** `opencode/gemini-4-argon` / `google/gemini-4-argon`.
- **Context window:** curated meta says 128K total — **conflicting** with Google's own GraphWalks BFS 256K–1M row (84.2%), implying a ≥1M-capable window; BenchLM lists "Coming soon".
- **Modalities:** meta says text in/out — **conflicting** with published video (LVBench 91.7) and chart (Chartography 71.6) evals; treated as image/video-capable input, text out.
- **Pricing (as of 2026-10-02):** Standard paid-tier pricing (exact rate not published in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (31 of 618 rows), citing Google's Gemini 4 Argon evaluation-methodology page and launch chart, Artificial Analysis, Collinear and Proximal (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google; AA 57.1%) — second only to Sonnet 5.5 (70.6) / Mythos 5.1 (60.9)
- OSWorld 2.0: **69.2%** (Google) — standout GUI agency; AA AutomationBench **77.5%**; AutomationBench 51.3%
- GDPval-AA: **1611** (AA normalized 55.6%); AA Briefcase Elo 1494; Finance Agent v2 65.4%
- Agents' Last Exam 39.5%; TB-Science 0.1 57.6% (6x verifier); CWE-bench v1 68.0%; GDP.pdf 21.8%

Reasoning / knowledge:

- AA-HLE: **57.1%**; Artificial Analysis Intelligence Index **52.6**
- Omniscience Index 42.4 / Accuracy 49.9% / **Hallucination 15.1%** — best factuality profile seen here
- GraphWalks BFS: **99.7% @128K**, **84.2% @256K–1M**; AA-LCR 79.7%; CritPt 27.1%
- LABBench2 88.8%; Gray Swan IPI 0.7% (15 attempts) — strong prompt-injection resistance

Coding:

- DeepSWE: **77.9%** (clears the 74 frontier ref); Vibe Code Bench **91.90%**
- FrontierSWE v2 55.1%; AA-SciCode 61.8%; PostTrainBench v1.1 45.3%; no SWE-bench/Coding Index rows yet

Multimodal / long context:

- LVBench (video) **91.7%**; Chartography (no tools) 71.6% — contradicts the text-only meta
- GraphWalks at 256K–1M (84.2%) implies genuine long-range retrieval; 99.7% at 128K.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** TB 4.0 57.4%, OSWorld 2.0 69.2%, AA AutomationBench 77.5% and CWE-bench 68.0% are near-frontier; GDPval-AA 1611 (under the 1750 ref) and Briefcase 1494 keep it at the band floor rather than Fable/Sonnet-5.5 levels.
- **Reasoning: 90/100.** HLE 57.1%, Index 52.6, GraphWalks 99.7/84.2 and a 15.1% hallucination rate (Omniscience Index 42.4, best tracked) clear the high bars; CritPt 27.1%, no GPQA row and partial coverage cap it.
- **Context window: 88/100.** Evidence conflicts: curated meta says 128K, but Google's own 256K–1M GraphWalks (84.2%) and 99.7% at 128K demonstrate far beyond 128K; until the vendor window is confirmed this scores between the 100K–200K (50–64) and ≥1M (95–100) bands.
- **Multimodal: 85/100.** Published video (LVBench 91.7) and chart (Chartography 71.6) evals show real visual input despite the text-only meta entry — +video band (75–90); no audio input or non-text output evidenced, and the meta conflict holds it back.
- **Coding: 88/100.** DeepSWE 77.9% clears the 74 frontier ref and Vibe Code Bench 91.9% is elite; FrontierSWE v2 55.1% is good but SWE-bench Pro and Coding Index rows are still unpublished, capping the score.
- **Cost efficiency: 60/100.** "Standard pricing" only — no verified rate card in curated meta; anchored at the $3/$15 ≈ 60 reference pending confirmation. Cost is excluded from Overall.
- **Overall Score: 88/100.** Mean of Tool 90, Reasoning 90, Context 88, Multimodal 85, Coding 88 = 88.2 → 88. Best fit: high-stakes autonomous GUI/terminal work where trust matters — its 15.1% hallucination rate and prompt-injection resistance are the standout safety story; confirm the real context window and modality matrix before pipeline design, since the curated entry lags the launch evals.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Google's Gemini 4 Argon evals methodology and launch chart, plus Artificial Analysis, Collinear and Proximal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
