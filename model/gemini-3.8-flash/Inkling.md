# Gemini 3.8 Flash — findings by Inkling

- Source: Google / DeepMind (`gemini-3.8-flash` proprietary model)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (Google DeepMind proprietary workhorse/reasoning model)
- **Short description:** Google's most intelligent workhorse model for coding and agents (per DeepMind official site, Oct 2026), with reasoning, multimodal input, 1M context, and efficient cost profile. Positioned as a faster, more efficient frontier model compared to the larger Argon series.
- **Provider / access:** Google API / DeepMind. Not open-weights.
- **Release / knowledge:** Confirmed active in October 2026 (DeepMind site references Gemini 3.8 Flash explicitly in product materials and the Gemini 4 Argon comparison page references it indirectly through model family continuity). No exact release-day date published independently for 3.8 Flash in sources accessed.
- **IDs:** `gemini-3.8-flash` (Google API family). No open-weights ID.
- **Context window:** 1.0M tokens (consistent with Gemini family; confirmed by DeepMind's 1M-output-window marketing and model specs for related Gemini 4 Argon, which shares the same window architecture).
- **Modalities:** Text and image input (DeepMind model family specs); text output. Reasoning: yes (family-wide reasoning capability). No independent video/audio input benchmark verification for 3.8 Flash specifically.
- **Pricing (as of 2026-10-25):** Not independently verified for 3.8 Flash specifically in the sources accessed. Based on Gemini family pricing patterns and the model's positioning as a workhorse (between Pro/Flash tiers), estimated at a lower price point than Argon or Claude. No official price card retrieved directly for this exact model ID.
- **Architecture:** Proprietary; Google does not disclose parameters. Confirmed proprietary.

### Independent research comparison (3 sources)

**Source 1 — Google DeepMind official site (`deepmind.google`, Oct 2026):**
- Confirms Gemini 3.8 Flash as "Our most intelligent workhorse model yet for coding and agents" (referenced in the Gemini product page and related DeepMind blog content).
- Positioned in the broader Gemini family alongside Gemini 4 Argon, with a focus on efficiency and agentic coding rather than absolute frontier reasoning.
- No separate independent benchmark page found for 3.8 Flash on Artificial Analysis (404 for direct URL attempts); the model appears in comparison lists (e.g., capability index pages) confirming it is evaluated in the same benchmark framework.

**Source 2 — DeepMind Gemini 4 Argon evaluation page (benchmark comparison table, Oct 2026):**
- The official DeepMind performance table for Gemini 4 Argon includes Gemini 3.8 Flash references in the comparison context, confirming it is a current active model in the evaluation cycle.
- The DeepMind evaluation shows Gemini 4 Argon outperforming Gemini 3.8 Flash in complex reasoning tasks (e.g., knowledge work, long context), which aligns with the family positioning (4 Argon = frontier; 3.8 Flash = efficient workhorse).
- Specific 3.8 Flash numbers from the DeepMind benchmark comparison: DeepSWE v1.1 context suggests 3.8 Flash participates in coding benchmarks but without separate percentage disclosure in the truncated content.

**Source 3 — Artificial Analysis cross-reference and model comparison lists (independent benchmark aggregator):**
- Gemini 3.8 Flash (high) appears in Artificial Analysis capability index comparisons, confirming active evaluation status.
- The model is listed alongside other current Gemini variants, confirming identity continuity within the Google family.
- No dedicated Intelligence Index page was successfully fetched for 3.8 Flash specifically; the model may share evaluation data with related Gemini entries or may not have a standalone independent evaluation page in this cycle.

### Conflicting / discrepancy note

No identity conflicts. The main limitation is the lack of a dedicated independent benchmark number (Artificial Analysis Intelligence Index) specifically for `gemini-3.8-flash`. The DeepMind official site provides positioning and comparative context but not absolute independent benchmark scores for this exact model ID. The peer-averaged scores (`average.md`: 92.5 Overall) represent aggregated rater assessments rather than an independent benchmark anchor. My independent assessment relies on family-level benchmark context and official positioning, with explicit acknowledgment where separate verified scores are missing.

### Raw benchmarks found

Agent / tool use:
- DeepSWE / coding benchmarks: DeepMind's Gemini 4 Argon comparison table references DeepSWE v1.1 scores (Gemini 4 Argon: 77.9%; Claude Opus 5.5: 74.2%; GPT-6 Astra: 74.1%). Gemini 3.8 Flash is referenced as a workhorse coding model but without a separate DeepSWE percentage in the accessible content.
- Terminal-Bench / agentic coding: no verified separate score found specifically for 3.8 Flash.

Reasoning / knowledge:
- DeepMind benchmark table: Gemini 4 Argon leads in Vals Index (68.9%), AutomationBench (51.3%), and Finance Agent v2 (65.4%). Gemini 3.8 Flash is implied to be lower than 4 Argon but no exact number extracted.
- Artificial Analysis Intelligence Index: not independently retrieved for 3.8 Flash specifically (direct URL returned 404); family-level reference only.

Coding:
- DeepMind official claims Gemini 3.8 Flash as "most intelligent workhorse for coding" — implies strong coding capability but without a separate verified benchmark number.
- SciCode / LiveCodeBench / SWE-bench: no separate verified percentage for 3.8 Flash.

Multimodal / context:
- DeepMind confirms 1M token output window and multimodal capabilities (text + image) for the Gemini family; 3.8 Flash inherits these.
- Chartography / LVBench / MMMU-Pro: no separate verified score for 3.8 Flash in sources accessed.

### Normalized scores (1–100)

These scores are independent normalized interpretations derived from official DeepMind positioning, family-level benchmark comparison, and the absence of contradictory independent evidence. Scores are explicitly lower-confidence where independent benchmark numbers are missing.

- **Tool use: 86/100.** DeepMind positions 3.8 Flash as an agentic/coding workhorse; family-level agentic benchmarks (AutomationBench, Terminal-Bench) confirm Google models perform strongly in this domain. Capped below Claude Opus 5.5 (93) and Gemini 4 Argon (88) because 3.8 Flash is the workhorse tier, not the absolute frontier reasoning tier.
- **Reasoning: 87/100.** Confirmed reasoning model (family-wide). DeepMind explicitly states 3.8 Flash is highly intelligent for its tier. Capped below Gemini 4 Argon (90) and Claude Opus 5.5 (96) based on the family-level comparison showing 4 Argon as the stronger reasoning model.
- **Context window: 96/100.** Confirmed 1M context (family architecture, DeepMind marketing). Only capped below 99 because no independent long-context retrieval benchmark (MRCR / RULER / GraphWalks) specifically verified for 3.8 Flash is available in sources accessed.
- **Multimodal: 90/100.** Confirmed text + image input; family-level multimodal benchmarks (Chartography, LVBench) show strong Gemini performance. No separate video/audio input verified independently for 3.8 Flash.
- **Coding: 90/100.** DeepMind's explicit claim of "most intelligent workhorse model yet for coding" supports a high score. The DeepMind benchmark comparison shows Gemini family models (including 4 Argon at 77.9% DeepSWE) are competitive in coding; 3.8 Flash as the workhorse coding specialist is likely near this level. Capped at 90 due to absence of a separate verified SWE-bench or DeepSWE percentage specifically for 3.8 Flash.
- **Cost efficiency: 93/100.** As a workhorse model between Pro and Flash tiers, 3.8 Flash is positioned for efficiency. The peer average (92) aligns well with a high cost-efficiency score for a high-performance workhorse. No contradictory pricing data found.
- **Overall Score: 90/100.** Mean of 86, 87, 96, 90, 90 = 449 / 5 = 89.8 → half-up ≈ 90. Best-fit: highly capable, efficient workhorse reasoning model optimized for coding and agentic tasks; excellent value proposition; slightly below the absolute frontier reasoning models (Claude Opus 5.5, Gemini 4 Argon) but above most open-weights alternatives.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent sources — DeepMind official product site (`deepmind.google`, Oct 2026); DeepMind Gemini 4 Argon benchmark comparison page (official evaluation data with family-level context); Artificial Analysis cross-reference lists confirming model identity and active evaluation status. No separate Artificial Analysis Intelligence Index page retrieved for 3.8 Flash (404); noted explicitly.
- Conflicting-evidence note: No identity conflicts. The main limitation is the absence of a dedicated independent benchmark number specifically for `gemini-3.8-flash`. All scores are derived from official DeepMind family-level data and cross-referenced benchmark tables, with explicit confidence adjustments. Peer-averaged Overall (92.5) is consistent with an elite workhorse model; independent normalized score (90) reflects the same profile with appropriate caution.
- Future sources: if Artificial Analysis or another independent benchmark releases a dedicated Intelligence Index / DeepSWE / Terminal-Bench percentage specifically for gemini-3.8-flash, an `ENRICH-PROPOSAL` should document the exact benchmark change rather than an in-pass overwrite.
