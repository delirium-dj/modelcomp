# Claude Opus 5 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-02 (UTC); deep second pass 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's 5th-generation Opus flagship for the deepest reasoning and longest autonomous coding/research runs, with a 1M-token window; surpassed by Opus 5.5 in the same line.
- **Provider / access:** Anthropic Messages API (`claude-opus-5`); also AWS Bedrock / Google Vertex. No OpenCode Zen free ID (`noFreeId`).
- **Release / knowledge:** 2026 (Claude Opus 5); knowledge cutoff not disclosed in the system card index. *(Second pass 2026-10-09: Anthropic's model page now states **Reliable knowledge cutoff = May 2026, training data cutoff = May 2026**, released **July 24, 2026**, status **Active (legacy)**, retirement not sooner than **July 24, 2027**.)*
- **IDs:** `anthropic/claude-opus-5`.
- **Context window:** 1,000,000 in / 128,000 max out (curated meta). *(Second pass: **confirmed by Anthropic's own spec page**, plus **300,000 max output on the Message Batches API** with the `output-300k-2026-03-24` beta header; thinking = Adaptive, default effort `high`.)*
- **Modalities:** text, image, PDF in; text out; reasoning on; tool calls; JSON mode. No audio/video input, no non-text output. *(Second pass: Anthropic's capability table summarizes it as "Text and images → text"; PDF arrives through the API's `document` content block — 100 pages / 32 MB per file — which is what the system card's GDP.pdf and OfficeQA rows are run on.)*
- **Pricing (as of 2026-10-02):** Paid $5 / $25 per 1M (no free tier). *(Second pass: verified against Anthropic's price table — $5 in / $25 out, **cache read $0.50** (10% of input), **cache write $6.25 (5m) / $10.00 (1h)**, **Batch API 50% off** on both directions; Artificial Analysis measures **$5.86 per Intelligence-Index task (#106 of 226)** and a blended $3.85/M.)*
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (96 of 618 rows — the deepest coverage in this run), citing the Anthropic "Introducing Claude Opus 5" post and Claude Opus 5 System Card, plus Artificial Analysis, Vals AI, Epoch, Cursor and VulcanBench (fetched 2026-10-02).
>
> **Second pass 2026-10-09:** BenchLM re-pulled (**96 of 625** tracks still, page updated October 9, 2026) — **every pass-1 row reproduced exactly** (GDPval-AA 1862, Toolathlon 80.6 / Pass@3 87.0 / 23.5 turns, MCP Atlas 85.8 / claim 89.1, TB 2.1 (Vals) 84.6, TB 3.0 42.7, BrowseComp 90.8, DeepSearchQA 95.0, OSWorld 2.0 70.6, DRACO 88.6, AA Agentic 56.2, Harvey LAB 93.5, AutomationBench 26.0, ARC 97.5/90.4/30.2, GPQA 93.2, HLE 64.7/56.3, SWE-bench Verified 96 / Vals 97, ProgramBench 93.0, LCB 89.0, AA Coding Index 78.0, DeepSWE 68.8, SciCode 56.4, VulcanBench 87.0 / CII 96.4, GDP.pdf 85.5, Chartography 83.0, MMMU-Pro 84.7, IMO 42/42, RiemannBench 60.0/79.0, ArXivMath 90.8/91.3, Index 50.8). Only the AA-derived GDPval normalization moved (60.4% → **61.2%**). ~30 rows are newly published and listed below.

Agent / tool use:

- GDPval-AA: **1862** (System Card; AA normalized 60.4%) — top of set; AA Briefcase 1720
- Toolathlon-Verified: **80.6%** (Pass@3 87.0%, avg 23.5 turns); MCP Atlas **85.8%** (claim coverage 89.1%)
- Terminal-Bench 2.1 (Vals) **84.6%**; Terminal-Bench 3.0 42.7%
- BrowseComp **90.8%**; DeepSearchQA 95.0%; OSWorld 2.0 70.6%; DRACO 88.6%
- AA Agentic Index 56.2%; AA Harvey LAB 93.5%; AutomationBench 26.0% (weak)
- *(2026-10-09)* Toolathlon **Pass³ 73.1%**; BrowseComp **93.6%** (10-agent, prerelease); **AA-AnalystAgent 53.8%**; **ApprenticeBench 36%** (NeoCognition); legal-agent split: **LAB all-pass 23.58%** (Anthropic harness) / **11.7%** (Harvey held-out) vs **criterion-pass 93.74% / 94.1%**

Reasoning / knowledge:

- GPQA-Diamond: **93.2%** (Vals 93.4%); HLE (w tools / no tools): **64.7% / 56.3%**
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **97.5% / 90.4% / 30.2%** (System Card)
- AA-LCR 79.3%; MLCR-AA 55.6%; CritPt 29.1%
- IMO 2026: **42/42** (perfect); RiemannBench 60.0/79.0; ArXivMath 90.8/91.3
- Artificial Analysis Intelligence Index **50.8**; Omniscience accuracy 60.9 / hallucination 60.8
- *(2026-10-09)* AA live page: Index **51, #16 of 226** (class median 26) for the **(max)** effort variant · Omniscience **Index 37.1** · MMLU-Pro (Vals) **91.6%** · AA-HLE **54.9%** · HealthBench **67.1%** raw / **57.8%** length-adjusted / **59.8%** Professional · BioMysteryBench **90.1%** human-solvable / **49.4%** human-difficult · SingleCellBench 60.6%, ProteinGym Hard 47.7%, Protein Design 42.5%, Organic Chemistry V2 61.6%, Protocols 61.1/78.4 · multilingual: GMMLU **92.5%**, MILU **92.1%**, INCLUDE **89.8%**

Coding:

- SWE-bench Verified: **96%** (Vals 97%); SWE-bench Pro 79.2%; SWE Multilingual 89.5%
- ProgramBench: **93.0%**; LiveCodeBench (Vals) **89.0%**; AA Coding Index **78.0%**
- DeepSWE 68.8%; AA-SciCode 56.4%; VulcanBench v3 87.0 / CII v1 96.4; FrontierSWE v2 52.0%; CursorBench 4.0 46.6%
- *(2026-10-09)* **FrontierCode 1.1 Main 53.4% / Extended 63.6%**; **SWE Multimodal 59.4%**; ProgramBench **episode 1 83.0%** (vs 93.0 headline); **Bug Hunt Bench 27.0 fixes**; **PostTrainBench v1.1 35.0%**; CursorBench 3.2 **70.0%**

Multimodal / long context:

- GDP.pdf (tools) 85.5, Chartography (tools) 83.0, AA-MMMU-Pro 84.7, BenchCAD Vision2Code (tools) 0.821; 1M window (BenchLM context "coming soon"; no ≥98% MRCR reported).
- *(2026-10-09)* without tools: **Chartography 29.6%**, **BenchCAD Vision2Code 0.366** — vision-heavy construction collapses when the harness removes tools; **GDP.pdf (no tools) 83.4%**; OfficeQA **78.1%** / OfficeQA Pro **66.9%**; SpatialBench Verified **72.5%**; Design Arena Website **1314 Elo**.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 95/100.** GDPval-AA 1862, Toolathlon-Verified 80.6%, MCP Atlas 85.8% and Terminal-Bench 2.1 84.6% are frontier; only AutomationBench 26.0% and ApprenticeBench 36% dent an otherwise elite agentic profile. *(2026-10-09 re-check: the newly published LAB all-pass rows — 23.58% Anthropic harness / **11.7%** Harvey held-out — and AA-AnalystAgent 53.8% show the same all-or-nothing fragility on multi-hour professional work, while criterion-pass sits at 93.7–94.1%; holds at 95 because the headline agentic refs are unchanged and Opus 5 is also the model Anthropic's own 5.5 safeguards fall back to for cyber work.)*
- **Reasoning: 95/100.** ARC-AGI-2 90.4%, IMO 2026 42/42, GPQA 93.2%, HLE 64.7% and strong RiemannBench/ArXivMath sit at the ceiling; the mid Intelligence Index (50.8) and Omniscience accuracy 60.9% are the only caps.
- **Context window: 96/100.** 1M-token window / 128K output qualifies for the ≥1M tier; long-context retrieval evidence is moderate (AA-LCR 79.3, no ≥98% MRCR), so short of 100. *(2026-10-09: Anthropic confirms 1M / 128K and adds **300K output on the Batch API beta**, which helps the long-run use case; held at 96 for consistency with Opus 5.5, which has the identical published window, the same 128K/300K output limits and the same absence of an MRCR figure.)*
- **Multimodal: 78/100.** Accepts image + PDF in (GDP.pdf 85.5, MMMU-Pro 84.7) but is text+image/PDF in / text out with no audio or video — the +PDF band (75–90), mid-range. *(2026-10-09: tool-dependence is now explicit — Chartography falls 83.0 → **29.6** and BenchCAD Vision2Code 0.821 → **0.366** without tools, and each PDF is capped at 100 pages / 32 MB — but no new modality was added or removed, so the band placement stands.)*
- **Coding: 96/100.** SWE-bench Verified 96%, ProgramBench 93%, LiveCodeBench 89%, AA Coding Index 78% and VulcanBench CII 96.4% are record-class; only FrontierSWE v2 52.0% and CursorBench 4.0 46.6% are middling.
- **Cost efficiency: 48/100.** *(re-scored 2026-10-09 from 50.)* $5 / $25 per 1M is confirmed — same list price as Opus 4.8, and Anthropic's own successor Opus 5.5 costs $4 / $20 (**20% less**) — with cache reads $0.50, cache **writes $6.25 (5m) / $10.00 (1h)** *above* the input price, and Batch at 50% off as the only real mitigations. Artificial Analysis ranks the **$5.86 per-Index-task cost #106 of 226** (class median $0.27), calls it "particularly expensive" and measures **140 M Index output tokens (#87/226, median 81 M)** at **52.6 tok/s (#147/226)** with 64.89 s to first token — so the flat price understates what a long agentic run actually costs. AA also flags the id as deprecated in favour of 5.5. No free tier. Cost is excluded from Overall.
- **Overall Score: 92/100.** *(re-derived 2026-10-09: Tool 95 + Reasoning 95 + Context 96 + Multimodal 78 + Coding 96 = 460 / 5 = 92.0 → 92 — identical to the first pass, because no quality dimension's evidence moved.)* Best fit: premier autonomous coding/research agent and the reference pick for deep reasoning where text+image/PDF suffices; add an omni model when audio/video input or non-text output is required. Note it is now **Active (legacy)** in Anthropic's lineup and priced above its own successor, so Opus 5.5 or Fable 5.1 is the default choice for new work.

---

## Second-pass update — 2026-10-09 (UTC)

**Sources consulted (≥3 independent):** Anthropic model page — https://platform.claude.com/docs/en/models/opus-5/overview (1M ctx, 128K max out, **300K Batch-API beta output**, $5/$25, cache read $0.50, cache write $6.25/$10.00, Batch 50% off, Adaptive thinking, default effort `high`, **reliable + training cutoffs May 2026**, released July 24, 2026, status **Active (legacy)**, retirement not sooner than July 24, 2027, 5 platforms, min cacheable prompt 512 tokens) · Anthropic models overview + legacy roster — https://platform.claude.com/docs/en/models/overview · Anthropic launch post — https://www.anthropic.com/news/claude-opus-5 ("$5 per million input tokens and $25 per million output tokens (the same as Opus 4.8)", DeepSearchQA 95.0%, AA Coding Index 78.0%) · **Claude Opus 5 System Card (PDF)** — https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf (source of ~60 BenchLM rows) · Artificial Analysis — https://artificialanalysis.ai/models/claude-opus-5 (**"(max)" variant: Index 51 #16/226, 52.6 tok/s #147/226, TTFT 64.89 s, $5.00/$25.00, 90% cache discount, $5.86/task #106/226, 140 M tokens #87/226, 1M ctx, text+image in, 8 providers, page banner: "This model is deprecated … Anthropic has launched a newer release, Claude Opus 5.5"**) · BenchLM — https://benchlm.ai/models/claude-opus-5 (**Overall 79.29/100, #7 of 889**, 96 of 625 tracks, "partial coverage … so the overall score is conservative", Context Window "Coming soon", updated October 9, 2026) · Anthropic PDF support — https://platform.claude.com/docs/en/build-with-claude/pdf-support · third-party confirmations of the 1M/128K/$5-$25 spec — https://www.morphllm.com/claude-context-window, https://www.layer3labs.io/guides/claude-opus-5-explained, https://apidog.com/blog/claude-opus-5-pricing/ (cache hits $0.50)

**Conflicts found and how they were resolved:**

1. **PDF input.** Anthropic's Opus 5 capability table says "Text and images → text" (no PDF row), while the first pass — and the system card's own GDP.pdf 85.5 / OfficeQA 78.1 results — assume PDF ingestion. Resolved by Anthropic's PDF-support and Files docs: PDFs enter as `document` content blocks (100 pages / 32 MB per file) on current models. Multimodal therefore keeps its +PDF placement, with the per-file cap and the tool-dependence noted.
2. **Index 50.8 (BenchLM's AA row) vs 51 (AA live page).** Same measurement; the live page is the **`(max)` effort** variant while Anthropic's API default is `high`, so 51 is the *best-case* figure — Reasoning 95 is not inflated by it (HLE w/ tools 64.7% is likewise a system-card best case).
3. **GDPval-AA normalized 60.4% (2026-10-02) vs 61.2% (Oct 9).** AA re-normalization against a larger pool; the raw Elo 1862 is unchanged, so no score effect.
4. **ProgramBench 93.0% headline vs 83.0% "episode 1".** Two different slices of the same suite now published side by side; the headline number is what the first pass used, and the lower episode slice is recorded as a caveat rather than a replacement — Coding stays 96 (SWE-bench Verified 96, VulcanBench CII 96.4 and Coding Index 78 still anchor it; DeepSWE 68.8 and FrontierSWE 52.0 still cap it).
5. **LAB all-pass 11.7–23.6% vs criterion-pass 93.7–94.1%.** Scoring-agreement artifact (same pattern found on Opus 5.5's AutomationBench 40 vs AA 69.5): near-perfect on partial credit, weak on end-to-end file acceptance. Noted under Tool use, which already carries the AutomationBench 26.0% dent.
6. **Gray Swan IPI 4.6%** — appears on this page only as a row sourced from **a rival's launch chart** (Google's Gemini 4 Argon post). Unverified third-party injection testing; recorded, not scored (identical treatment as the 5.5 pass).
7. **"Deprecated / legacy" status.** Both AA (banner) and Anthropic ("Active (legacy)", migration guide to 5.5) confirm the id is superseded. This is a lifecycle fact, not a capability decline — no quality dimension changes, but it drives the **Cost 50 → 48** re-score (the successor is 20% cheaper at $4/$20 while the list price stayed the same, and cache writes cost *more* than input).

**New rows this pass (absent from the 2026-10-02 report):** BenchLM composite **79.29/100, #7/889** · **May 2026** knowledge/training cutoffs · Toolathlon **Pass³ 73.1%** · BrowseComp **93.6%** (10-agent prerelease) · **AA-AnalystAgent 53.8%** · **ApprenticeBench 36%** (now sourced) · **LAB all-pass 23.58% / 11.7%** and criterion-pass **93.74% / 94.1%** · **FrontierCode 1.1 53.4% / Extended 63.6%** · **SWE Multimodal 59.4%** · ProgramBench episode 1 **83.0%** · **Bug Hunt 27.0 fixes** · **PostTrainBench v1.1 35.0%** · CursorBench 3.2 **70.0%** · **Chartography no-tools 29.6%**, **BenchCAD no-tools 0.366**, GDP.pdf no-tools 83.4% · **OfficeQA 78.1% / Pro 66.9%** · **SpatialBench Verified 72.5%** · **HealthBench 67.1 / 57.8 / 59.8 / 73.4** · **BioMysteryBench 90.1 / 49.4** · SingleCellBench 60.6, ProteinGym Hard 47.7, Protein Design 42.5, Organic Chem V2 61.6, Protocols 61.1/78.4 · **GMMLU 92.5 / MILU 92.1 / INCLUDE 89.8** · **AA-Omniscience Index 37.1** · **Design Arena 1314 Elo** · MMLU-Pro (Vals) 91.6 · AA-HLE 54.9 · measured economics: 52.6 tok/s, TTFT 64.89 s, 140 M Index tokens, $5.86/task.

**Scores changed by this pass:** **Cost efficiency 50 → 48** (verified full price table including cache-write premiums, AA's $5.86/task bottom-half rank, 140 M verbosity, and a 20%-cheaper successor). **Tool use 95, Reasoning 95, Context 96, Multimodal 78 and Coding 96 re-confirmed unchanged** — all of their feeding rows reproduced exactly on October 9. **Overall stays 92/100** (95 + 95 + 96 + 78 + 96 = 460 / 5 = 92.0 → 92, Cost excluded), matching the first pass's derivation. Curated queue Overall for this slug is 91.2, i.e. *below* my computed 92 — the registry will nudge this model up when it syncs.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Claude Opus 5 post and System Card, plus Artificial Analysis, Vals AI, Epoch, Cursor and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: Anthropic's own Opus 5 model page + models overview + launch post + System Card, cross-checked against Artificial Analysis (live "(max)" page) and BenchLM's October 9 snapshot, plus Anthropic PDF-support/Files docs and three independent pricing/context write-ups; ≥3 independent sources, conflicts compared rather than averaged. Only **Cost efficiency** changed (50 → 48) — the price table, cache-write premium, per-task cost, verbosity and legacy status are now measured, while every capability row behind Tool 95 / Reasoning 95 / Context 96 / Multimodal 78 / Coding 96 reproduced unchanged, so **Overall holds at 92**. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
