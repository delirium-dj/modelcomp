# Gemini 3.6 Flash — findings by Space Bunny

- Source: Google (`gemini-3.6-flash`; high reasoning mode)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 88.8).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for agentic loops, code generation, spatial reasoning, and long-horizon tasks. Now superseded twice over — by Gemini 3.7 Flash (Aug 2026) and Gemini 3.8 Flash (Sep 2026) — and carrying a published Vertex AI retirement date.
- **Provider / access:** Google Gemini API (`gemini-3.6-flash`); Google AI Studio; Vertex AI. Default thinking level `medium`; `high` is the configuration scored here. GA since 2026-07-21.
- **Release / knowledge:** released 2026-07-21 (GA). No public knowledge cutoff on the official model page — still unstated.
- **Lifecycle — record, do not average (a real two-source conflict):**
  - **Vertex AI / Gemini Enterprise Agent Platform** publishes a **retirement date of 2026-11-19**, replacement `gemini-3.8-flash`, in its "models available for shorter availability periods" table (page dated 2026-10-15). A third-party tracker confirms the read: "Gemini 3.6 Flash retires from Vertex AI on November 19, 121 days after its July 21 release… Google never dated the notice; the dates appeared in its model-versions table."
  - The **Gemini API deprecation page** lists `gemini-3.6-flash` with **"No shutdown date announced"**, and Google's own migration guide recommends *other* models (Gemini 3.5 Flash, Gemini 3 Flash Preview, Gemini 3.1 Pro) rather than 3.8 Flash. So the date is real but **platform-scoped to Vertex AI**, not a Gemini API shutdown. Scored as a cost and risk factor, not as a capability change.
  - Artificial Analysis also banners the model "deprecated" and points at 3.7 Flash — again an aggregator restatement, and itself out of date.
- **IDs:** `gemini-3.6-flash`; repository family metadata identifies `google/gemini-3.6-flash`. Google retired the `temperature`, `top_p` and `top_k` sampling parameters for this model and all later ones.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified; LiteLLM agrees as of 2026-10-18).
- **Modalities:** text, image, video, audio and PDF input; text output; thinking, code execution, computer use, function calling, structured outputs, URL context and search grounding. Document tokens are billed at the image-token rate.
- **Pricing (corrected this pass — the first pass used the wrong number):** Google's own documentation lists **$1.50 per 1M input / $7.50 per 1M output** as the **standard** rate. The **$0.75 / $3.75 the first pass used is an INTRODUCTORY rate that expires 2026-12-31**, after which $1.50 / $7.50 applies from 2027-01-01 — stated verbatim on the Gemini Developer API pricing page, the Agent Platform pricing page and the 3.8 Flash launch post. **The cache discount is 90%, not 80%** ($0.075 vs $0.75 per 1M through 2026-12-31, $0.15 vs $1.50 from 2027-01-01). Artificial Analysis's model page still shows "$0.75 / $3.75, Cache Discount 80%" — both figures on that page are stale, and this is exactly the aggregator-relabels-the-number failure mode to watch for.
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- **OSWorld-Verified 83.0%** (#11 of 72, 86th percentile) — Google self-reported, corroborated by rank
- **GDPval-AA 1422 Elo** (#47 of 356, 87th percentile); AA also reports it as 39.2% normalized
- **Tau3-Banking 29.9%** (#35 of 177, 81st percentile) — **new; the first pass recorded this as "no verified public score found"**
- **Terminal-Bench 2.1 78.9%** (BenchmarkList, launch-post sourced) / **77.5%** (AA) / **73.8%** (Vals AI). Three values, three harnesses — recorded, not averaged
- **Terminal-Bench 3.0 5.4%** (#19 of 20, 5th percentile, launch post) and **AA Terminal-Bench 4.0 7.1%** — near-floor on the newest terminal suites
- **AutomationBench 17.1%** at high effort (#29 of 48, 40th percentile; low 15.7 / medium 16.4)
- **Agents' Last Exam 24.2%** (#25 of 42); **AA-Briefcase 953 Elo** (#61 of 147, rubric pass 28.1%, Verified)
- **BrowseComp 54.6% ±6.1** (#51 of 60, 15th percentile, Verified, 519 samples); **Vals CyberBench 48.5% ±4.5** (#16 of 20); **RuneBench 5.6** attack XP/min (#17 of 61)
- AA Agentic Index **29.0** (was 30.1 at the first pass); output speed **224.2 tok/s**, TTFT and per-task figures per AA
- Toolathlon, MCP-Atlas, SWE Atlas, Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond 93.4%** (#4 of 117, 97th percentile, Vals AI); AA's own figure is 92.8%
- **MMLU-Pro 89.3%** (#9 of 116, 93rd percentile)
- **Humanity's Last Exam 40.8%** (#39 of 480, 92nd percentile)
- **ARC-AGI-1 91.2%** (#25 of 97, 75th percentile, $0.34/task); **ARC-AGI-2 60.4%** (#32 of 99, 68th percentile, $0.61/task)
- **Global-MMLU-Lite 94.3%** (#6 of 44, 88th percentile) across 16 languages
- **ObviousBench 100.0%** answer pass³ (#3 of 254, 99th percentile) — tied for the field lead
- AIIQ Composite IQ **121** (#47 of 147); AA-LCR **80.0%**; AA-Omniscience Index **22.1%**, Accuracy **50.0%**, Non-Hallucination **44.4%** (i.e. Hallucination Rate 55.6%)
- **CritPt 10.6%** — unchanged and still a clear weakness
- Weaker independent rows: ProofBench v1 **36.0%**, IOI **35.1%**, Tax Agent Bench **18.0%**, Legal Research Bench **25.0%**, **Harvey's Legal Agent Benchmark 3.3%** (#25 of 39), **Harvey LAB-AA 2.5%** all-pass (criterion pass 85.1%)
- **AA Intelligence Index — unresolved conflict, recorded not averaged.** AA's own model page reads **34** (#79 of 217, *not* marked estimated). AA's July 2026 launch article reads **50** for the same model at high reasoning. BenchmarkList imports **52** (#19 of 431) attributed to the 2026-08-13 launch post. rank.ai reads 34.0. So the same index is published at 34, 50 and 52 by different pages. The 34 is what AA currently displays; the 50/52 are launch-era. None of the three is used as the primary reasoning anchor — GPQA/HLE/MMLU are.
- **Deliberately not used:** FrontierMath v2 Tier 4. It prints **21.951% byte-identically for both Gemini 3.6 Flash and Gemini 3.8 Flash** (with Argon at 78.049%). Two different models cannot produce the same value to six significant figures on a hard-research suite; that is an aggregation artifact, not a measurement. Excluded from reasoning justification. **BenchLM's Gemini 3.6 Flash overall was also excluded** — it is internally inconsistent across its own pages (62.77 #44/954 vs 75.21 #9/224).
- MLCR: **no verified public score found**

Coding:

- **Vibe Code Bench v1.1 64.00%** (#46 of 112) on the **OpenHands harness** — the new independent evidence that clears the methodology's named soft spot. **But record the conflict:** the *same* board shows **57.321%** (#24 of 75) for Gemini 3.6 Flash high on Vals' own default harness, and the earlier Vibe Code Bench paper's test split (arXiv 2603.04601v2) predates this model entirely. Same model, same benchmark version, 6.7 points apart on harness choice. Both are real; neither is wrong.
- **LiveCodeBench 88.1%** (#4 of 123, **98th percentile**)
- **SWE-bench Verified 79.6%** (#14 of 72, 82nd percentile)
- **Terminal-Bench 2.1 78.9% / 77.5% / 73.8%** (three harnesses, above)
- **SciCode 53.4%** (#40 of 299, 87th percentile); AA Coding Index **69.2%**
- **Android Bench 75.6%** (67.5–82.1 CI; 10.2 h and $135.5 per 100-task run) — #10 of 46
- **SWE-bench Pro 58.7%** (#31 of 58) — **new; the first pass recorded "no verified public score found"**
- **ProgramBench 55.7% raw pass rate** but **0.0% fully resolved**, 4.0% almost resolved, 151 calls/task at $4.88/task
- **CursorBench 3.2 53.5%** at high effort (#16 of 17; low 47.4 / medium 51.2)
- **DeepSWE 1.1 49.0%** — #4 of 4, an explicitly tiny field; Google's own launch figure, not independent
- **FrontierCode Main 34.4%** (#24 of 37); **Code Migration 30.9%** (#15 of 33); Vals Index 55.4% on OpenRouter vs 62.4% on BenchmarkList (dated conflict)

Long context:

- Google verifies a 1,048,576-token input limit and a 65,536-token output limit
- **MRCR v2 (8-needle) 54.0%** — **new, and it is the weak spot**; it ranks #1 of only 3 models on that board
- **AA-LCR 80.0%** (AA Long-Context Reasoning) — independent and strong
- Long-context evals: median 90th percentile, 3 evals, per BenchmarkList

Sources consulted (2026-10-17): [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing), [Agent Platform pricing](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing), [What's new in Gemini 3.6 Flash](https://ai.google.dev/gemini-api/docs/generate-content/whats-new-gemini-3.6), [Gemini API deprecations](https://ai.google.dev/gemini-api/docs/deprecations), [Vertex AI model versions and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions), [Gemini API changelog](https://ai.google.dev/gemini-api/docs/changelog), [Gemini 3.8 Flash launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/), [Artificial Analysis Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash), [AA launch article](https://artificialanalysis.ai/articles/gemini-3-6-flash-3-5-flash-lite-halving-time), [BenchmarkList Gemini 3.6 Flash](https://benchmarklist.com/models/google-gemini-3.6-flash/), [BenchmarkList Vibe Code Bench v1.1](https://benchmarklist.com/benchmarks/vals_vibe_code/), [BenchLM Vibe Code Bench board](https://benchlm.ai/benchmarks/vibecodebench), [OpenRouter Gemini 3.6 Flash](https://openrouter.ai/google/gemini-3.6-flash).

### Normalized scores (1–100)

- **Tool use: 84/100.** Raised 2 from 82. The gaps that were open in the first pass are now filled with independent rows, and they are good: **Tau3-Banking 29.9%** (#35 of 177, 81st percentile — previously "no verified public score found"), **OSWorld-Verified 83.0%** (#11 of 72), **GDPval-AA 1422** (#47 of 356), plus RuneBench 5.6 (#17 of 61) and DuelLab GameBench 2 52.3 (#8 of 48). Capped, and this is where the evidence cuts both ways: **Terminal-Bench 3.0 at 5.4% (#19 of 20)**, AA Terminal-Bench 4.0 7.1%, **AutomationBench 17.1%** (40th percentile), **BrowseComp 54.6%** (15th percentile, Verified) and AA Agentic Index 29.0 are all mid-to-low. Strong at desktop and knowledge work, weak at the newest long-horizon agent suites.
- **Reasoning: 88/100.** Raised 3 from 85 on newly ranked independent evidence: **GPQA Diamond 93.4% (#4 of 117)**, **MMLU-Pro 89.3% (#9 of 116)**, **HLE 40.8% (#39 of 480, 92th percentile)**, ARC-AGI-1 91.2%, **Global-MMLU-Lite 94.3% (#6 of 44)**, **ObviousBench 100% (#3 of 254, tied lead)**, AIIQ 121. Every one of these lands in the methodology's frontier-reasoning region (GPQA 90%+, HLE 40%+). Capped by **CritPt 10.6%**, ARC-AGI-2 60.4%, ProofBench 36.0%, IOI 35.1%, the unresolved AA Intelligence Index conflict (34 / 50 / 52), and the absent knowledge cutoff. The FrontierMath byte-identical artifact and BenchLM's inconsistent overall were excluded, not scored.
- **Context window: 95/100.** Cut 2 from 97. The 1,048,576 / 65,536 specification is verified and unchanged, and AA-LCR 80.0% is strong — but **MRCR v2 (8-needle) is 54.0%**, newly measured, on a board with only three models. Retrieval at 1M is adequate, not excellent, so 100 is clearly out of reach and the first pass's 99–100 range was optimistic.
- **Multimodal: 97/100.** Raised 1 from 96. The measured AA-MMMU-Pro figure the first pass used (83.2%) is superseded by **MMMU-Pro 88.4% (#4 of 79, 96th percentile)** on Vals AI, and **Global-MMLU-Lite 94.3%** covers 16 languages. Text/image/video/audio/PDF in with text out is the broadest non-text coverage in this comparison. The counterweight is document work specifically: **GDP.pdf 22.0%** (#18 of 20, 11th percentile) is a near-floor professional-PDF result, which is why this is 97 and not higher.
- **Coding: 86/100.** Raised 2 from 84. The methodology names a "Vibe <10% and SciCode <40%" soft spot; the first pass had no Vibe figure at all. It now has two, and both clear it: **Vibe Code Bench v1.1 64.00%** (#46 of 112, OpenHands) / 57.32% (#24 of 75, default harness). Also newly ranked: **LiveCodeBench 88.1% at the 98th percentile of 123**, **Android Bench 75.6% (#10 of 46)**, **SciCode 53.4% (87th percentile)**, and **SWE-bench Pro 58.7%** which the first pass listed as not found. Held below the 90–100 band by **DeepSWE 1.1 49.0%** (Google's own figure, and the field has only four entries), **ProgramBench 0.0% fully resolved** against a 55.7% raw pass rate, FrontierCode Main 34.4%, Code Migration 30.9%, CursorBench 53.5% (#16 of 17) and a still-disputed Vals Index (55.4% vs 62.4%).
- **Cost efficiency: 80/100.** Cut 8 from 88. **The first pass priced this model wrong.** Google's documentation lists **$1.50 / $7.50** as the standard rate; the **$0.75 / $3.75 the first pass scored on is introductory and expires 2026-12-31**, and the **cache discount is 90%, not the 80% AA displays**. On the durable standard rate this sits below the methodology's ~$1.25/$4.25 ≈ 88 anchor and well below the $0.60/$2.20 ≈ 92 tier. Two mitigating facts kept this out of the 70s: the introductory window is still open for another ~2.5 months, and caching at 90% genuinely matters at 1M context. **One correction to the earlier lead: the model does not cost 2× its own replacement.** Gemini 3.8 Flash carries the *identical* introductory rate ($0.75/$3.75 through 2026-12-31) and the *identical* standard rate ($1.50/$7.50 from 2027-01-01), so there is no price cliff on migration — the retirement date is a migration deadline, not a cost penalty. **Cost is excluded from Overall.**
- **Overall Score: 90.0/100.** (84 + 88 + 95 + 97 + 86) / 5 = **90.0**, cost excluded. Up from 88.8. Best fit unchanged: fast multimodal agents and software workflows where low latency, a 1M context and broad modality coverage matter. The caveat has sharpened rather than changed — Vertex AI retires this model on **2026-11-19**, roughly a month out, with `gemini-3.8-flash` named as the replacement at identical pricing and materially stronger coding (DeepSWE 73.8% vs 49.0%; Vibe Code Bench 78.65% vs 64.00%). Treat Gemini 3.6 Flash as a model to migrate off, not to build on.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass)
- Method: Public web research of Google's own pricing, deprecation, lifecycle and changelog documentation plus the launch posts for 3.6 and 3.8 Flash; Artificial Analysis (model page and July 2026 launch article); BenchmarkList, BenchLM and the Vibe Code Bench paper; Vals AI, ARC Prize, Cursor evals and Design Arena. Vendor-reported and independent rows are labelled per row, and aggregator restatements of vendor numbers are flagged where found (notably AA's stale $0.75/$3.75 and 80% cache discount). Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- What changed this pass: Overall 88.8 → 90.0 (Tool use 82 → 84, Reasoning 85 → 88, Context 97 → 95, Multimodal 96 → 97, Coding 84 → 86, Cost 88 → 80). Four dimensions rose on newly ranked independent rows — Tau3-Banking, GPQA-D #4/117, LiveCodeBench #4/123, MMMU-Pro #4/79 and the first-ever Vibe Code Bench figure for this model all appeared in this pass. Context fell on the new MRCR reading and Cost fell hard because the first pass used an introductory price as if it were the list price.
- Leads from the earlier lost pass: **verified** — the $1.50/$7.50 standard rate, the $0.75/$3.75 introductory rate expiring 2026-12-31, and the 90% (not 80%) cache discount are all confirmed verbatim on Google's pricing pages. **Verified with a scope correction:** a 2026-11-19 retirement date exists, but it is a **Vertex AI / Gemini Enterprise Agent Platform** date; the Gemini API deprecation page still says "No shutdown date announced". **Verified:** Vibe Code Bench v1.1 64.00% (#46/112) is real — and the 57.32% (#24/75) reading on Vals' default harness is equally real; both are recorded. **Verified:** Harvey's Legal Agent Benchmark 3.3%. **Corrected and excluded:** FrontierMath v2 Tier 4 prints 21.951% byte-identically for Gemini 3.6 and 3.8 Flash and is an aggregation artifact, so it was not used; BenchLM's own Gemini 3.6 Flash overall (62.77 #44/954 vs 75.21 #9/224) is internally inconsistent and was not used. **Could not verify:** MazeBench 0%, TB-Science 4.29% and BioMysteryBench 58.52% (#27/27) — not found in any current source, so none of the three appears in the scores or the raw-benchmark table. **Corrected:** the model does not cost 2× its replacement; Gemini 3.8 Flash is priced identically in both the introductory and standard windows.
- Still unmeasured: any Google-stated knowledge cutoff; Terminal-Bench 4.0 (only AA's 7.1%); MLCR; Toolathlon, MCP-Atlas, SWE Atlas, Claw-Eval; DeepSWE under any harness other than Google's own; a Gemini API shutdown date; the reason AA publishes the Intelligence Index at three different values for this model.
- Re-run when: (1) **2026-11-19**, the Vertex AI retirement date — confirm whether the Gemini API endpoint follows or the model survives there; (2) **2027-01-01**, when standard pricing replaces the introductory rate and cost should be re-scored; (3) Vals re-runs Vibe Code Bench on a common harness so 64.00% and 57.32% can be reconciled; (4) Artificial Analysis resolves or explains the 34 / 50 / 52 Intelligence Index conflict; (5) MazeBench, TB-Science or BioMysteryBench appear on a named leaderboard.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.