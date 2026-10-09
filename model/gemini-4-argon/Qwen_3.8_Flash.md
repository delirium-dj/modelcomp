# Gemini 4 Argon — findings by Qwen 3.8 Flash

- Source: Google / Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-02 (UTC); deep second pass 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's Gemini 4-generation flagship (base variant) — near-top Terminal-Bench 4.0 and OSWorld agency, best-in-class factuality (15.1% hallucination), elite DeepSWE, with sparse published coverage so far.
- **Provider / access:** Google DeepMind, proprietary hosted model. *(Second pass 2026-10-09: access is the single biggest caveat. Google's launch post (Sep 30, 2026) says Argon was rolling out **only to trusted cyber defenders through the Fairwind Program**, taking part in the U.S. government's voluntary pre-release access process, with developers/enterprises/consumers "as soon as possible", **starting with paid API customers and Google AI Ultra subscribers** — no GA date published. NeuralTrust (quoting DataCamp) found **no published API model ID** on launch day and no listing on OpenRouter, Vertex AI, Gemini CLI, Cursor or GitHub Copilot. Artificial Analysis now shows the id served by **1 API provider** (Google's own), and its model page is tracked as \`gemini-4-argon\`, effort **"(high)"** — the highest available setting and the only one AA measured.)* OpenCode Zen entry (`opencode/gemini-4-argon`) remains curated. Reasoning + tool calls; **Google has not documented how reasoning tokens are billed** (DataCamp via NeuralTrust).
- **Release / knowledge:** announced and launched **September 30, 2026** (Google blog; Artificial Analysis: "released September 2026", FAQ: September 30, 2026) — Google DeepMind's first proprietary model above the Flash class in over 7 months and the first Gemini with a codename instead of the Pro/Flash/Flash-Lite tiers; knowledge cutoff not disclosed.
- **IDs:** `opencode/gemini-4-argon` / `google/gemini-4-argon`.
- **Context window:** **1,000,000 tokens combined** (Artificial Analysis technical specifications: "Context window 1M", "1.0M tokens"; Google's launch post confirms a **1M-token output limit**, "up from the previous 64K tokens"). *(Second pass 2026-10-09: pass 1 recorded a **128K** curated figure that no source supports — the curated \`meta.json\` now reads "1M total (262K output; 1M via continuation)", so the curation has already moved toward the same conclusion; the **262K native per-request output cap** appears only in the curated entry and could not be traced to a Google or AA source. Google's announcement states an output limit but **no input context window**, and NeuralTrust explicitly flags the 1M-input figure as un-traceable to Google. AA explains the mechanism: **Long Decode Continuation**, a new Gemini API feature that pauses and resumes long responses, is what lets reasoning run to 1M output tokens without timeouts.)* The **GraphWalks BFS 256K–1M row (84.2%)** is now corroborated as genuine ≥1M-class long-range work, not a marketing extrapolation.
- **Modalities:** text, image and video in; text out (curated `meta.json`, matching Google's blog claims of "professional chart analysis", "details from long videos" and "a series of documents"). *(Second pass 2026-10-09 conflict: Artificial Analysis' **model-page tech spec** lists only **text and image** input, while AA's **launch article** lists **text, image, video and speech** input — both from the same measurement pass, and the model page carries no video/audio benchmark row. No non-text output on any source.)* Scored at the image/video band with audio input treated as **stated but unverified**.
- **Pricing (verified 2026-10-09):** **introductory $2.00 in / $10.00 out per 1M tokens**, i.e. a **50% launch discount off the standard $4.00 / $20.00** (Google blog footnote; AA; NeuralTrust/Fello AI). **Cached input at a 95% discount → $0.10/M discounted ($0.20/M at standard)** — up from 90% on Gemini 3.8 Flash. Blended 7:2:1 rate **$1.47/M** (AA). AA cost per Intelligence-Index task **$1.99 (#80 of 226)**, rising to **~$3.98** when the promotion ends (AA: "Google has not yet confirmed the promotion end date"). At standard rates Argon matches Claude Opus 5.5's $4/$20 and undercuts GPT-6 Astra's $10/$50. No free tier (`noFreeId: true`); model not on the Gemini Developer API public pricing table as of Oct 9.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> **Second pass 2026-10-09:** re-pulled BenchLM (still **31 of 625** tracks, page dated October 9, 2026), Artificial Analysis' live model page **(high)** and AA's launch analysis, Google's launch post, and an independent security/benchmark review (NeuralTrust, compiling DataCamp / MarkTechPost / VentureBeat / Trending Topics / Vals AI / The Decoder). **Every pass-1 benchmark row reproduced** (TB 4.0 57.40/57.1, OSWorld 2.0 69.2, AutomationBench 51.3 / AA 77.5, GDP.pdf 21.8, ALE 39.5, TB-Science 57.6, CWE-bench 68.0, Finance Agent v2 65.4, HLE 57.1, GraphWalks 99.7/84.2, AA-LCR 79.7, CritPt 27.1, LABBench2 88.8, Gray Swan IPI 0.7, LVBench 91.7, Chartography 71.6, DeepSWE 77.9, Vibe Code 91.90, PostTrainBench 45.3, SciCode 61.8, Omniscience 42.4 / acc 49.9 / halluc 15.1). Moved: **GDPval-AA 1611 → 1626 (normalized 55.6% → 56.3%)**, **AA Briefcase 1494 → 1490**, **FrontierSWE v2 55.1% → 55.0%**, **Intelligence Index 52.6 → 53** (page vs leaderboard rounding). Structural facts (window, modality matrix, price, access) moved far more than the scores did.

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google; AA 57.1%) — second only to Sonnet 5.5 (70.6) / Mythos 5.1 (60.9)
- OSWorld 2.0: **69.2%** (Google) — standout GUI agency; AA AutomationBench **77.5%**; AutomationBench 51.3%
- GDPval-AA: **1611** (AA normalized 55.6%); AA Briefcase Elo 1494; Finance Agent v2 65.4%
- Agents' Last Exam 39.5%; TB-Science 0.1 57.6% (6x verifier); CWE-bench v1 68.0%; GDP.pdf 21.8%
- *(2026-10-09)* **Vals Index 68.9% — #1 of 41 models** (Vals AI, vendor-cited and independently listed; Vals cost per test $15.68 vs Opus 5.5's $32.14) · **Harvey's Legal Agent benchmark 19.6%** vs GPT-6 Astra 5.4% / Claude Fable 5.1 6.7% / Opus 5.5 3.8% (Google's table — a different scale from the AA Harvey LAB-AA row, so recorded, not blended) · **AutomationBench-AA #1 at 77.5–78%**, "7 points ahead of Claude Sonnet 5.5 (max, 71%)" (AA) · AA Briefcase breakdown: **65% rubric pass rate — the highest AA has recorded** — but Analytical Quality 1576 Elo and Presentation Quality 1308 Elo (AA) · BenchLM **GDPval-AA 1626 / normalized 56.3%**

Reasoning / knowledge:

- AA-HLE: **57.1%**; Artificial Analysis Intelligence Index **52.6**
- Omniscience Index 42.4 / Accuracy 49.9% / **Hallucination 15.1%** — best factuality profile seen here
- GraphWalks BFS: **99.7% @128K**, **84.2% @256K–1M**; AA-LCR 79.7%; CritPt 27.1%
- LABBench2 88.8%; Gray Swan IPI 0.7% (15 attempts) — strong prompt-injection resistance
- *(2026-10-09)* AA Intelligence Index **53 (#8 of 226**, class median 26) — "matching GPT-6 Astra (max, 53) and 1 point ahead of GPT-6.1 Sol (max, 52)", "23 points above Gemini 3.1 Pro Preview (30) and 12 above Gemini 3.8 Flash (high)" (AA) · **Arena.ai Text Arena #1 at 1,525 points** (The Decoder) · **62k output tokens per Index task** vs Astra's 27k (AA — verbosity, not efficiency) · Google published **no numeric Gray Swan score**, only a "leading" claim; NeuralTrust notes Opus 5.5 and Fable 5.1 were reported as tying for the lowest injection success rate on the same benchmark, so multiple vendors can claim the lead

Coding:

- DeepSWE: **77.9%** (clears the 74 frontier ref); Vibe Code Bench **91.90%**
- FrontierSWE v2 55.1%; AA-SciCode 61.8%; PostTrainBench v1.1 45.3%; no SWE-bench/Coding Index rows yet
- *(2026-10-09)* **DeepSWE v1.1 77.9% confirmed by Google as the state of the art** (vs Opus 5.5 74.2 / Astra 74.1 / Fable 5.1 67.4 on Google's table) — but **"no third party had reproduced Google's table at launch"** (DataCamp via NeuralTrust), and **FrontierSWE v2 reads 55.0%** on Proximal's own board (pass 1 logged 55.1), where Astra leads at 65.5% · Google's headline use case is **800K+ line C/C++→Rust migrations (Fuchsia Zircon kernel)** and a libgav1 decoder port "2.7x faster than the Rust port" · AA **Coding Index still unpublished for this id**

Multimodal / long context:

- LVBench (video) **91.7%**; Chartography (no tools) 71.6% — contradicts the text-only meta
- GraphWalks at 256K–1M (84.2%) implies genuine long-range retrieval; 99.7% at 128K.
- *(2026-10-09)* **Context window confirmed at 1M** (AA tech specs) with Google's **1M output limit** and **Long Decode Continuation**; **GraphWalks 256K–1M 84.2% is the best long-range row in the rival comparison table** (Astra 71.8, Fable 5.1 65.0, Opus 5.5 66.8 — recorded from Google's chart, never scored for those models) · **no MRCR-style ≥98%-at-512K retrieval figure exists**, so the ≥1M top band stays unreachable · LVBench 91.7 / Chartography 71.6 unchanged; **AA's model page lists no video or audio benchmark row and its tech spec says text+image only**, contradicting AA's own launch article ("text, image, video, and speech input").

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
