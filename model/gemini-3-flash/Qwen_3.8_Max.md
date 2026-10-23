# Gemini 3 Flash — findings by Qwen 3.8 Max

- Source: Google (`gemini-3-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google's December-2025 **speed tier of the Gemini 3 family** — "frontier intelligence built for speed." It delivers **Pro-grade reasoning at Flash latency and ~2× lower cost** (only a 2-point AA Index drop from Gemini 3 Pro Preview), and was **the most intelligent model for its price** at release. Standouts: **GPQA Diamond 90.4%**, **MMMU-Pro 81.2% (state-of-the-art at launch, 2nd-highest of any model)**, **SWE-bench Verified 78% (it beat Gemini 3 *Pro*)**, the **highest knowledge accuracy of any model on AA-Omniscience**, full **text/image/video/audio** multimodality, a **1M-token context** and **218 tok/s**. Its trade-offs: **very high token use (~160M on the Index)**, a **91% hallucination rate** (answers instead of abstaining), and — being a Dec-2025 model — reasoning/coding numbers (HLE 33.7%, SWE-bench 78%) that the 2026 frontier has since surpassed.
- **Provider / access:** Gemini API in Google AI Studio, **Google Antigravity**, Gemini CLI, Android Studio, Vertex AI, Gemini Enterprise; **default model in the Gemini app (replacing 2.5 Flash) and AI Mode in Search**; OpenRouter (`google/gemini-3-flash-preview`). Used in production by JetBrains, Figma, Cursor, Replit, Warp, Harvey, Bridgewater.
- **Release / knowledge:** Released **2025-12-17** (Gemini 3 Pro / Deep Think preceded it in Nov 2025). Knowledge cutoff not stated in the sources reviewed.
- **IDs:** `gemini-3-flash` / `gemini-3-flash-preview` (family: Gemini 3 Pro [flagship] > **Gemini 3 Flash** > Gemini 3 Flash-Lite; successor line Gemini 3.5/3.6/3.7/3.8 Flash).
- **Context window:** **1M tokens native**; tool calling, structured outputs and JSON mode supported. **AA-LCR** (long-context recall) is one of the 10 Index evals but no absolute figure was published in the sources reviewed.
- **Modalities:** **fully multimodal — text + image + video + audio in → text out** (audio input priced separately at $1/1M). Modulates thinking at the highest level (thinks longer for hard tasks) while using **30% fewer tokens on average than Gemini 2.5 Pro** on typical traffic.
- **Pricing (as of 2026-10-23):** **$0.50 / 1M input, $3 / 1M output** (audio input $1/1M) — ~2× cheaper than Gemini 3 Pro Preview. AA: **most cost-efficient model for its intelligence level** despite high token use.
- **Architecture:** Undisclosed proprietary (Google). **~160M output tokens** to run the AA Index (more than double Gemini 2.5 Flash; one of the highest token-use models tested). **218 tok/s** (22% slower than Gemini 2.5 Flash but ~3× faster than Gemini 2.5 Pro and far faster than GPT-5.1-high 125 / Kimi K2 Thinking 82 / DeepSeek V3.2 30).

### Raw benchmarks found

Reasoning / knowledge (Google vendor-run + Artificial Analysis **independent**, which agree):

- **GPQA Diamond: 90.4%** (Google) / 90% (AA) — **3rd at release**, behind only Gemini 3 Pro Preview and GPT-5.2 xhigh; PhD-level scientific reasoning rivaling larger frontier models
- **Humanity's Last Exam: 33.7% (no tools)** (Google) / 35% (AA) — **2nd to Gemini 3 Pro Preview**; modest in absolute terms vs the 2026 frontier (Opus 4.8 ~46%, Sonnet 5 57.4% w/tools)
- **MMLU-Pro: 89%** — 3rd (behind Gemini 3 Pro Preview, GPT-5.2 xhigh)
- **AA-Omniscience: highest score of any model tested** — driven by the **highest knowledge accuracy** of any model, *but* a **91% hallucination rate** (3pp worse than Gemini 2.5 Flash / 3 Pro Preview; it answers rather than abstaining)
- **AA Intelligence Index: 71** — ⚠ **on the December-2025 basket** (see provenance); +13 over Gemini 2.5 Flash (Sep), a 2-point drop from Gemini 3 Pro Preview (73); "most intelligent model for its cost" at release

Coding (Google vendor-run):

- **SWE-bench Verified: 78%** — **outperforms the entire 2.5 series *and* Gemini 3 Pro**; strong agentic coding. (Below the 2026 frontier: Opus 4.6 80.8%, Sonnet 5 85.2%, Fable 5 ~95%.)
- LiveCodeBench, SciCode, Terminal-Bench Hard are among the 10 AA Index evals (no absolute figures published in the sources reviewed)

Multimodal (Google vendor-run + AA **independent**):

- **MMMU-Pro: 81.2%** — **state-of-the-art at release**, "2nd-highest of any model" (behind only Gemini 3 Pro Preview), comparable to Gemini 3 Pro; image-input reasoning
- Full **text/image/video/audio** input; real-time multimodal reasoning (video analysis, visual Q&A, in-game assistants, sketch prediction)

Agent / tool use:

- Google bills it "our most impressive model for agentic workflows"; **τ²-Bench Telecom** and **Terminal-Bench Hard** are in the AA Index eval set; tool calling, structured outputs, JSON mode. No absolute τ²/OSWorld figure published in the sources reviewed.

> Provenance: Capability figures come from **both** Google's launch blog (2025-12-17, vendor-run) **and** Artificial Analysis' independent pre-release evaluation (2025-12-17) — the two **agree** on GPQA (90.4/90), HLE (33.7 no-tools / 35 AA), MMMU-Pro (81.2 / "2nd highest") and MMLU-Pro (89). Per methodology the vendor cells are an upper bound, discounted against the neutral AA signal (which corroborates them here). ⚠ **Index-version provenance is critical:** the **AA Intelligence Index 71 is on the December-2025 basket** and is **NOT comparable** to the v4.1.1 (Aug-2026) or v4.3 (Sep-2026) indices I cite for later models — the basket was rebased substantially harder across 2026 (e.g., GLM-5.3-Flash fell 57→~42 between baskets), so a Dec-2025 "71" does not rank above a late-2026 "48." At release Gemini 3 Flash was a genuine near-frontier model (#2 to Gemini 3 Pro); by late 2026 its HLE (33.7%) and SWE-bench (78%) are dated even though its multimodal (MMMU-Pro 81.2, full audio/video) and knowledge-accuracy results remain competitive. The **91% hallucination rate** (high accuracy but low abstention) and **~160M-token verbosity** are documented weaknesses. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 84/100.** Google's "most impressive model for agentic workflows," with tool calling, structured outputs, JSON mode and τ²-Bench-Telecom / Terminal-Bench-Hard in its independent eval set, plus real-time multimodal agentic demos. Held below the frontier because **no absolute tool-use/computer-use benchmark (τ², OSWorld, MCP) was published** to verify the claim, and its agentic coding (SWE-bench 78%) trails the 2026 leaders.
- **Reasoning: 85/100.** Genuinely strong and independently corroborated — **GPQA Diamond 90.4%** (3rd at release), **MMLU-Pro 89%**, and the **highest knowledge accuracy of any model on AA-Omniscience**. Capped because **HLE is only 33.7% (no tools)** — modest against the 2026 frontier (45–58%) — the **91% hallucination rate** means it answers rather than abstains, and the AA Index 71 is on the dated Dec-2025 basket (not comparable to later indices).
- **Context window: 88/100.** A **1M-token native window** with tool calling/structured outputs and AA-LCR long-context recall in the eval set — on par with the native-1M leaders. Discounted below 89–93 because **no absolute long-context recall figure** was published and the model's **~160M-token verbosity** makes deep-context runs expensive.
- **Multimodal: 88/100.** A flagship-class strength — **fully multimodal (text/image/video/audio)** with **MMMU-Pro 81.2% (SOTA at release, 2nd-highest of any model, comparable to Gemini 3 Pro)**, real-time video/visual reasoning and audio understanding. Among the strongest multimodal models I have scored; capped just below the very top because MMMU-Pro is *comparable to* rather than *above* Gemini 3 Pro, and there is no audio **output**.
- **Coding: 85/100.** **SWE-bench Verified 78% — it beat Gemini 3 Pro and the entire 2.5 series**, with strong agentic/iterative coding at Flash latency (the reason JetBrains/Cursor/Replit adopted it). Held below the high-80s/90s because 78% is now **dated** (Opus 4.6 80.8%, Sonnet 5 85.2%, Fable 5 ~95%) and no SWE-bench Pro / DeepSWE / Terminal-Bench absolute figure was published.
- **Cost efficiency: 92/100.** Excellent value — **$0.50/$3** (~2× cheaper than Gemini 3 Pro), AA's **most cost-efficient model for its intelligence**, 30% fewer tokens than 2.5 Pro and 3× its speed at 218 tok/s. Tempered below the MIT open-weight models (96–98, $0 self-host) by the **~160M-token verbosity** (one of the highest tested), which erodes the low per-token price on long generations. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 86/100.** Mean of Tool 84 + Reasoning 85 + Context 88 + Multimodal 88 + Coding 85 = 430/5 = 86.0 → 86. Best fit: **high-throughput multimodal and agentic work at scale** — real-time video/image/audio understanding, visual Q&A, interactive apps/in-game assistants, high-volume coding agents and search/assistant surfaces where 218 tok/s, a 1M context and $0.50/$3 matter and near-Pro reasoning is sufficient; escalate the hardest pure-reasoning or long-horizon SWE tasks to Gemini 3 Pro / Deep Think or a 2026 frontier model, and ground factual work (91% hallucination rate). Independent read: my 86 sits **below the queue's curated 87.6** — I discount the Dec-2025 AA Index 71 as version-incomparable, weigh the dated HLE (33.7%) / SWE-bench (78%) and the high hallucination/verbosity, while crediting the genuinely still-competitive multimodal (MMMU-Pro 81.2, full audio/video) and knowledge-accuracy results. It lands appropriately below the later Gemini 3.5–3.8 Flash iterations that superseded it.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Google's "Gemini 3 Flash: frontier intelligence built for speed," 2025-12-17, for the vendor benchmark table and pricing; Artificial Analysis' independent pre-release evaluation "Gemini 3 Flash — Everything you need to know," 2025-12-17, for the Intelligence Index, AA-Omniscience, token-use, speed and cost-efficiency measurements). Vendor and independent figures corroborate each other on GPQA/HLE/MMMU-Pro/MMLU-Pro. The **AA Intelligence Index 71 is explicitly flagged as a December-2025-basket score**, not comparable to the rebased v4.1.1/v4.3 indices of later 2026 models; the model's age is reflected in the Reasoning/Coding scores while its still-competitive multimodal strength is credited. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
