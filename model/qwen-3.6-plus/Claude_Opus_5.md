# Qwen3.6-Plus — findings by Claude Opus 5

- Source: Alibaba Cloud / Qwen Team (`qwen3.6-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus. **Proprietary and hosted-only.** Variant/alias flag: the Qwen3.6 series also contains **Qwen 3.6 Max (preview)**, **Qwen3.6-27B** and **Qwen3.6-35B-A3B**; "Plus" is the mid tier. **Superseded by Qwen3.7-Plus** (late May / early June 2026), which scores higher on a composite tracker (56.55 vs 55.21) — so this is a legacy entry.
- **Short description:** Alibaba's Qwen3.6 mid-tier model, documented on Qwen's own release blog. Its defining characteristic is an unusually **bimodal capability profile**: it posts **the single best τ²-bench result in this entire research pass (97.7%)** and a **τ³-bench score of 70.7% that is roughly 20 points above the methodology's frontier reference**, while simultaneously recording **the worst GDPval-AA Elo (1,066) and the worst CritPt score (2.9%) of any model reviewed here**. It is exceptional at structured tool-calling and poor at open-ended autonomy and hard reasoning.
- **Provider / access:** Alibaba Cloud DashScope and OpenRouter (`qwen/qwen3.6-plus`). Reasoning: explicit reasoning mode.
- **Release / knowledge:** Released in the Qwen3.6 cycle, ahead of Qwen3.7-Plus. **No verified public release date or knowledge cutoff found.**
- **IDs:** `qwen3.6-plus`; `qwen/qwen3.6-plus` (OpenRouter).
- **Context window:** **1,000,000 tokens.** Max output: no verified public figure found. Long-context evidence exists but is mediocre — see benchmarks.
- **Modalities:** **Text and image input → text output at minimum**, with **video input evidenced by a published VideoMMMU score of 84.0%**. No audio input or non-text output documented or benchmarked. **No vendor modality specification sheet was retrievable**, so the modality list is inferred from the benchmark set rather than documented.
- **Pricing (as of 2026-10-03):** **No rate card was verified for this specific model.** For tier context, its direct successor **Qwen3.7-Plus is $0.32 / 1M input, $0.08 cached, $1.28 / 1M output**, and the Qwen Plus tier is consistently positioned as Alibaba's value workhorse. **Any budgeting must re-verify the live rate** — the Cost efficiency score below is explicitly flagged as resting on tier positioning rather than a confirmed figure.
- **Architecture:** Proprietary; **parameter count, active parameters and topology are not disclosed.**

### Raw benchmarks found

> **63 of 645 tracked benchmark slots are populated**, with per-row source attribution. **(Qwen)** = Qwen's own Qwen3.6-Plus release blog; **(AA)** = Artificial Analysis; **(Vals)** = Vals AI's independent leaderboards; **(Epoch)** = Epoch AI's FrontierMath v2 leaderboard; plus three further independent leaderboards. A composite tracker places it at **55.21/100, #65 of 783**, flagged conservative on partial coverage.

Agent / tool use:

- **τ²-bench: 97.7% (AA, independent)** — **the highest τ²-bench figure found anywhere in this research pass**, ahead of Gemini 3.5 Flash (95.3%) and Claude Opus 4.8 (94.4%).
- **τ³-bench: 70.7% (Qwen)** — **roughly 20 points above the methodology's Tau3 ~50%+ frontier reference**, and one of very few published τ³ figures in this dataset.
- **Claw-Eval: 58.8%** (independent Claw-Eval leaderboard) — notable because the methodology explicitly penalises a missing Claw-Eval, and this is sourced from the benchmark's own leaderboard rather than the vendor. **QwenClawBench: 57.2% (Qwen)** (vendor-internal).
- **GDPval-AA: 1,066 Elo / 23.8% normalized (AA)** — **roughly 690 Elo below the ~1750+ frontier reference, and the lowest GDPval figure recorded in this research pass.**
- **MCP-Tasks: 74.1% (Qwen)**; **WideResearch: 74.3% (Qwen)**; **MCP Atlas: 48.2% (Qwen)**; **Toolathlon: 39.8% (Qwen)**; **VITA-Bench: 44.3% (Qwen)**; **DeepPlanning: 41.5% (Qwen)**
- **Terminal-Bench 2.0: 61.6% (Qwen)**; **Terminal-Bench 2.1: 53.2% (Vals, independent)** — both in the methodology's mid band.
- **Gert Labs: 50.60%**; **ResearchClawBench: 18.0%** (both independent leaderboards)

Reasoning / knowledge:

- **GPQA Diamond: 90.4% (Qwen)**, but **88.2% (AA)** and **87.4% (Vals)** — **the vendor figure clears the 90%+ frontier reference and both independent measurements do not**, by 1.8 and 3.0 points respectively.
- **HLE: 28.8% (Qwen)** / **27.8% (AA)** — **well below the 40%+ frontier reference** on both, with close vendor-independent agreement.
- **AA-LCR: 78.3% (AA)**; **AI-Needle: 68.3% (Qwen)**; **LongBench v2: 62% (Qwen)**. No MRCR figure.
- **CritPt: 2.9% (AA)** — **the lowest CritPt score recorded in this entire research pass** (GPT-5.4 Pro scores 30, Claude Opus 4.8 20.9, Muse Spark 1.2 18).
- **Artificial Analysis Intelligence Index: 27.0% (AA)** — **squarely in the methodology's mid band (20–35 → 55–65)**, 33 points below the 60+ frontier marker.
- **AA-Omniscience: Index 0.9%, accuracy 26.4%, hallucination rate 34.6% (AA)** — the hallucination rate is respectably low, but 26.4% accuracy makes the composite index effectively zero.
- **MMLU-Pro: 88.5% (Qwen) / 87.7% (Vals)**; **MMLU-Redux: 94.5% (Qwen)**; **SuperGPQA: 71.6% (Qwen)**; **C-Eval: 93.3% (Qwen)**
- **Mathematics (Qwen): AIME 2026 95.3%, HMMT Feb 2025 96.7%, HMMT Nov 2025 94.6%, HMMT Feb 2026 87.8%, MMAnswerBench 83.8%.** But **Epoch AI's independent FrontierMath v2: Tiers 1–3 26.2%, Tier 4 8.3%** — strong on competition-style exams, weak on research-level mathematics.
- **Instruction following: IFEval 94.3% (Qwen), IFBench 75.8% (Qwen) / 75.2% (AA)** — corroborated within 0.6 points.
- **Multilingual: MMLU-ProX 84.7%, NOVA-63 57.9% (Qwen)**

Coding:

- **SWE-bench Verified: 78.8% (Qwen)** but **73.4% (Vals, independent)** — a 5.4-point vendor-independent gap.
- **SWE-bench Pro: 56.6% (Qwen)**; **SWE Multilingual: 73.8% (Qwen)**
- **LiveCodeBench v6: 87.1% (Qwen)**, independently corroborated at **86.0% (Vals)** — a tight 1.1-point agreement.
- **Vibe Code Bench: 25.56% (Vals, independent)** — **very low**, and roughly half Gemini 3.5 Flash's 48.68% on the same benchmark.
- **AA Coding Index: 54.5% (AA)** — **15.5 points below the methodology's 70%+ frontier reference.**
- DeepSWE / SciCode: no verified public score found.

Multimodal / documents:

- **MMMU: 86.0% (Qwen)**; **MMMU-Pro: 78.8% (Qwen)**, independently corroborated at **78.0% (AA)** — a 0.8-point agreement.
- **V*: 96.9% (Qwen)** — near-saturation on fine-grained visual search.
- **MathVision: 88.0% (Qwen)**; **VideoMMMU: 84.0% (Qwen)**; **CharXiv: 81.5% (Qwen)**; **ScreenSpot Pro: 68.2% (Qwen)**
- **Design Arena Website: 1,248 Elo** (independent)

### Normalized scores (1–100)

- **Tool use: 80/100.** The structured tool-calling evidence is outstanding and independently sourced: **τ²-bench at 97.7% is the highest figure in this entire research pass**, **τ³-bench at 70.7% sits roughly 20 points above the methodology's frontier reference**, and a **Claw-Eval score of 58.8% comes from the benchmark's own leaderboard** rather than the vendor — the methodology penalises a missing Claw-Eval, and this model is one of the few to have one. MCP-Tasks (74.1%) and WideResearch (74.3%) corroborate. What caps it hard is everything involving open-ended autonomy: **GDPval-AA at 1,066 Elo is roughly 690 below the ~1750+ reference and the worst figure recorded in this dataset**, **MCP Atlas at 48.2% and Toolathlon at 39.8% are both weak**, **Terminal-Bench sits mid-band at 61.6% vendor / 53.2% independent**, and ResearchClawBench reaches only 18.0%. This model calls tools superbly and does not finish long jobs.
- **Reasoning: 74/100.** The exam-style mathematics is genuinely strong — AIME 2026 95.3%, HMMT Feb 2025 96.7%, MMLU-Redux 94.5%, C-Eval 93.3% — and AA-LCR reaches 78.3%. But every independent check and every hard-reasoning benchmark lands poorly. **GPQA Diamond clears the 90%+ reference only in Qwen's own figure (90.4%); both independent measurements fall below it (88.2% AA, 87.4% Vals).** **HLE at 28.8% vendor / 27.8% independent is ~12 points below the 40%+ reference.** **The Artificial Analysis Intelligence Index of 27.0% is mid-band**, 33 points off the frontier marker. **CritPt at 2.9% is the lowest recorded anywhere in this pass**, and **Epoch AI's independent FrontierMath v2 puts Tier 4 at 8.3%** — so competition mathematics does not transfer to research mathematics. AA-Omniscience accuracy of 26.4% completes the picture: it knows comparatively little, though commendably it hallucinates at only 34.6%.
- **Context window: 93/100.** A **1,000,000-token window** places it in the ≥1M tier (95–100), but it sits below the tier floor because the published retrieval evidence is weak rather than merely absent. **AI-Needle at 68.3% and LongBench v2 at 62%** are both mediocre for a model advertising a million tokens, and **there is no MRCR or RULER figure at all** — so the ≥98%-at-512K condition is not just unverified, the adjacent evidence actively suggests it would not be met. **AA-LCR at 78.3%** is the one respectable long-context datapoint. **Max output tokens are undocumented.**
- **Multimodal: 86/100.** A broad and well-corroborated vision profile: **MMMU-Pro at 78.8% vendor is independently confirmed at 78.0% by Artificial Analysis**, **V\* reaches 96.9%** on fine-grained visual search, MathVision 88.0% and CharXiv 81.5% are solid, and **a published VideoMMMU score of 84.0% evidences video input**, which places it in the methodology's "+video/PDF in = 75–90" band. It sits near the top of that band but not at it: **ScreenSpot Pro at 68.2% is mid-field** for screen understanding, there is **no document-understanding benchmark** (no OmniDocBench, no OCRBench), **no audio input**, and **no non-text output**. The modality list is also **inferred from the benchmark set rather than documented**, since no vendor specification sheet was retrievable.
- **Coding: 78/100.** **LiveCodeBench at 87.1% vendor is independently corroborated at 86.0% by Vals AI** — a tight agreement and a genuinely strong algorithmic-coding result. **SWE-bench Verified at 78.8%** is respectable, though independent measurement trims it to 73.4%. Everything else is below reference: **the AA Coding Index at 54.5% is 15.5 points short of the 70%+ frontier reference**, **SWE-bench Pro at 56.6%** is mid-field, and **Vibe Code Bench at 25.56% — independently measured — is very low**, roughly half what Gemini 3.5 Flash achieves. **DeepSWE and SciCode are absent**, so two of the band's references cannot be checked. Strong at writing isolated code, weak at agentic and repository-scale engineering.
- **Cost efficiency: 80/100.** **This score carries an explicit evidentiary caveat: no rate card was verified for Qwen3.6-Plus specifically.** It rests on documented tier positioning — the Qwen "Plus" line is Alibaba's value workhorse, and this model's direct successor **Qwen3.7-Plus is $0.32 / $1.28 with $0.08 cached input**, roughly an order of magnitude below the $3/$15 anchor. On that basis the tier is excellent value and the τ²/τ³ results make it unusually cost-effective for tool-calling pipelines specifically. Deductions: the price is **unconfirmed for this model**, it is **proprietary and hosted-only** with no self-hosting escape, **no free tier is documented**, and its own successor scores higher on a composite tracker at a confirmed low price — so there is little reason to pay anything for the older model. **Re-verify the live rate before budgeting.**
- **Overall Score: 82.2/100.** Mean of the five non-cost dimensions (80 + 74 + 93 + 86 + 78) / 5 = 82.2 — a sharply specialised model with a genuinely unusual profile. Choose it for **structured tool-calling and function-calling pipelines**, where **τ²-bench 97.7% is the best result in this entire dataset**, τ³-bench 70.7% clears the frontier reference by ~20 points, and a real Claw-Eval figure exists; for **algorithmic coding** (LiveCodeBench corroborated at 86–87%); for **competition mathematics** (AIME 2026 95.3%, HMMT 96.7%); and for **fine-grained visual search** (V\* 96.9%). Do not choose it for autonomous long-horizon work — **GDPval-AA at 1,066 Elo is the worst figure in this dataset** and MCP Atlas, Toolathlon and ResearchClawBench all corroborate. Do not choose it for hard reasoning: **CritPt 2.9% is the lowest recorded here**, HLE is ~12 points below reference, FrontierMath Tier 4 is 8.3%, and both independent labs put GPQA below 90%. Do not choose it for repository-scale coding (Vibe Code Bench 25.56%, AA Coding Index 54.5%) or for genuinely long contexts (AI-Needle 68.3%, no MRCR). And note the succession: **Qwen3.7-Plus scores higher at a confirmed $0.32/$1.28**, which makes this model hard to justify for new work.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only — BenchLM's model page (last updated 2026-10-02) for the complete 63-row benchmark table with per-row source attribution to Qwen's own Qwen3.6-Plus release blog, Artificial Analysis, Vals AI's Terminal-Bench 2.1 / LiveCodeBench / SWE-bench / GPQA Diamond / MMLU-Pro / Vibe Code Bench leaderboards, Epoch AI's FrontierMath v2 leaderboard, the independent Claw-Eval and ResearchClawBench leaderboards, Gert Labs rankings and OpenRouter's benchmark page — plus the 55.21/100 composite at #65 of 783 with its partial-coverage caveat, the proprietary source type, reasoning type, 1M context and the Alibaba family ranking table used to establish the Qwen3.7-Plus succession; and the Qwen3.7-Plus research conducted earlier in this same session, which established the Qwen Plus tier's confirmed $0.32 / $0.08 cached / $1.28 rate card used here only as tier context. Vendor and independent figures are labelled on every row; where they corroborate closely (MMMU-Pro 78.8% vendor against 78.0% AA; LiveCodeBench 87.1% against 86.0%; IFBench 75.8% against 75.2%; HLE 28.8% against 27.8%) that agreement is stated, and where the vendor figure exceeds both independent measurements (GPQA Diamond 90.4% vendor against 88.2% AA and 87.4% Vals; SWE-bench Verified 78.8% against 73.4%) that is called out explicitly as the vendor clearing a frontier reference that independent testing does not. The Cost efficiency score is flagged in its own text as resting on unverified tier positioning rather than a confirmed rate card for this model, and the modality list is flagged as inferred from the benchmark set because no vendor specification sheet was retrievable. No peer `model/` findings files were read. Unavailable figures (release date, knowledge cutoff, max output tokens, parameter count, architecture, confirmed pricing, DeepSWE, SciCode, MRCR/RULER, and any document-understanding or audio benchmark) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
