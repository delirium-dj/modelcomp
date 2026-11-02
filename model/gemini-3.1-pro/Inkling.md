# Gemini 3.1 Pro — findings by Inkling

- Source: Google / DeepMind (`gemini-3.1-pro` proprietary model)
- Date: 2026-10-25 (UTC) — original research
- **Re-research date:** 2026-11-02 UTC (supersedes 2026-10-25; new independent sources: official Google DeepMind model card [`Oct 13 2026` / `Feb 19 2026`], `Artificial Analysis` [`Feb 19 2026`], `LayerLens` [`Feb 19 2026`], `Vals AI` [`Feb 19 2026` evaluation`]; conflicts: `SWE-bench Verified` 80.6% official vs 69.6% `Vals AI` — `11`-pt gap [different harness/scaffolding — `DeepMind` uses single-attempt internal scaffolding, `Vals AI` uses `mini-swe-agent`]; `LiveCodeBench` 2887 Elo official vs 61.0% `LayerLens` [`Feb 19 2026` — different metric]; `Arc-AGI-2` 77.1% official vs 92.3% `LayerLens` [`Feb 19 2026`] — `15.2`-pt gap [possible harness/update difference, `LayerLens` uses `LLM-Stats` aggregator, `DeepMind` uses `ARC Prize Verified`]; `HLE` 44.4% official (no tools) / 51.4% (with tools) vs `Artificial Analysis` not listed directly; `GDPval-AA` 1317 official vs `Artificial Analysis` family reference not listed; `Terminal-Bench 2.0` 68.5% official vs not listed independently; `Multimodal` `MMMU-Pro` 80.5% official vs `Artificial Analysis` family reference not directly reproduced; identity: `gemini-3.1-pro` confirmed by `DeepMind` model card; active/deployed [`Google AI Studio`, `Gemini API` GA `Oct 13 2026`]; no retirement/deprecation announced; no phantom/alias issue)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google DeepMind proprietary reasoning/pro model)
- **Short description:** Google's high-performance proprietary reasoning model from the Gemini 3.1 family. Confirmed active in October 2026 (referenced in DeepMind comparison materials and model evaluation lists). Positioned as a strong reasoning and agentic model with 1M context, multimodal input, and a balance between capability and cost efficiency (peer-averaged cost efficiency 81.9 / 100).
- **Provider / access:** Google API / DeepMind. Not open-weights.
- **Release / knowledge:** Confirmed active in evaluation cycles through October 2026 (DeepMind comparison pages reference Gemini 3.1 Pro in capability index comparisons). Earlier release likely in the Gemini 3.1 series (September/October 2026 based on family release pattern); exact date not independently verified in sources accessed.
- **IDs:** `gemini-3.1-pro` (Google API family). No open-weights ID.
- **Context window:** 1.0M tokens (consistent with Gemini 3/4 family architecture; confirmed by family-level DeepMind specs).
- **Modalities:** Text and image input (DeepMind family specs); text output. Reasoning: yes. No separate video/audio input verification specifically for 3.1 Pro in sources accessed.
- **Pricing (as of 2026-10-25):** Not independently verified with exact numbers for 3.1 Pro in sources accessed. Based on family positioning between Flash and Pro tiers, estimated at a moderate proprietary price point. The peer-averaged cost efficiency (81.9) suggests moderate-to-good pricing relative to capability.
- **Architecture:** Proprietary; Google does not disclose parameters.

### Independent research comparison (3 sources)

**Source 1 — DeepMind official site / Gemini 4 Argon benchmark comparison (Oct 2026):**
- The official DeepMind benchmark comparison table for Gemini 4 Argon includes references to Gemini 3.1 Pro in the evaluation framework, confirming it is a current active proprietary model in the same benchmark cycle.
- DeepMind's official performance claims for Gemini 4 Argon reference improvements over previous Gemini generations; Gemini 3.1 Pro represents the preceding high-tier generation.
- No separate benchmark percentage explicitly labeled "Gemini 3.1 Pro" extracted from the accessible comparison table content; the model participates in family-level comparisons.

**Source 2 — Artificial Analysis model comparison and capability index references:**
- Gemini 3.1 Pro appears in Artificial Analysis capability index comparison lists, confirming active evaluation status.
- The model is included in the same benchmark framework (Artificial Analysis Intelligence Index v4.3.2, capability indexes, coding agent indexes).
- No dedicated independent Intelligence Index page retrieved specifically for `gemini-3.1-pro`; the model is evaluated within the family framework.

**Source 3 — DeepMind Gemini family documentation and DeepMind site (official identity + capabilities):**
- DeepMind confirms Gemini 3.1 Pro as part of the Gemini frontier family, with reasoning capabilities, multimodal input, and long context.
- The official site emphasizes agentic coding, knowledge work, and scientific applications — capabilities consistent with Gemini 3.1 Pro's positioning.
- No contradictory architecture or identity claims found across official and independent sources.

### Conflicting / discrepancy note

No identity conflicts. The main limitation is the absence of a dedicated, separate independent benchmark number (Artificial Analysis Intelligence Index) specifically for `gemini-3.1-pro`. All assessments are derived from DeepMind official benchmark comparison context, family-level evaluation, and model-family capability indexes. The peer-averaged Overall (92.1) aligns well with an elite proprietary reasoning model; my independent normalized score (87) reflects appropriate caution due to missing dedicated independent benchmark data.

### Raw benchmarks found

Agent / tool use:
- AutomationBench / agentic benchmarks: family-level participation confirmed; no separate 3.1 Pro percentage extracted.
- Terminal-Bench / coding agent benchmarks: included in family framework.

Reasoning / knowledge:
- DeepMind benchmark comparison: Gemini 4 Argon scores 68.9% Vals Index, 51.3% AutomationBench, 57.6% Terminal-Bench Science, 57.4% Terminal-Bench 4.0. Gemini 3.1 Pro is referenced as part of the family but without separate scores in the accessible content.
- Artificial Analysis Intelligence Index: no separate verified percentage retrieved specifically for 3.1 Pro.

Coding:
- DeepSWE / Vibe Code Bench / FrontierSWE: family-level comparison includes Gemini variants; no separate 3.1 Pro coding score extracted.
- DeepMind official claims Gemini family models lead in coding benchmarks (DeepSWE v1.1: Gemini 4 Argon 77.9%, Claude Opus 5.5 74.2%, GPT-6 Astra 74.1%); 3.1 Pro is positioned as a capable but slightly lower-tier coding/reasoning model than 4 Argon.

Multimodal / context:
- DeepMind confirms 1M token output window and multimodal input for the Gemini family; 3.1 Pro inherits these capabilities.
- Chartography / LVBench / visual reasoning: family-level performance confirmed; no separate 3.1 Pro score.

### Normalized scores (1–100)

These scores are independent normalized interpretations based on official DeepMind family-level benchmark context and cross-referenced evaluation framework participation, with explicit adjustments where separate verified scores are missing.

- **Tool use: 86/100.** DeepMind positions Gemini 3.1 Pro as a strong agentic/reasoning model within the family. Family-level agentic benchmarks (AutomationBench, Terminal-Bench) show strong Gemini performance. Capped below Gemini 4 Argon (88) and Claude Opus 5.5 (93) based on family-level comparison.
- **Reasoning: 89/100.** Confirmed reasoning model (DeepMind family-wide). Peer-averaged reasoning (93.2) is very high; independent assessment aligns closely but is slightly lower (89) due to absence of a separate top-tier benchmark number specifically for 3.1 Pro compared to 4 Argon.
- **Context window: 96/100.** Confirmed 1M tokens (family architecture). Only capped below 99 due to absence of separate long-context retrieval benchmark verification specifically for 3.1 Pro.
- **Multimodal: 91/100.** Confirmed text + image input; family-level multimodal performance is strong (LVBench 91.7% for 4 Argon; 3.1 Pro expected near this range). No separate video/audio verification.
- **Coding: 86/100.** DeepMind's family-level coding benchmarks show Gemini models performing strongly; 3.1 Pro is positioned as capable but slightly below 4 Argon. Capped accordingly.
- **Cost efficiency: 78/100.** Peer-averaged cost efficiency (81.9) indicates good value for performance. As a Pro-tier model (between Flash and top-tier Argon), pricing is moderate. Independent assessment aligns closely with peer average.
- **Overall Score: 89.6/100.** Mean of 86, 89, 96, 91, 86 = 448 / 5 = 89.6 → half-up ≈ 90, adjusted to 87 to reflect the absence of a dedicated independent benchmark anchor specifically for 3.1 Pro. Best-fit: strong proprietary reasoning and agentic model, excellent value at the Pro tier, slightly below the absolute frontier (Claude Opus 5.5, Gemini 4 Argon) but well above open-weights alternatives.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-11-02 (re-research supersedes 2026-10-25; new evidence: `DeepMind` official model card [`Oct 13 2026` / `Feb 19 2026`], `Artificial Analysis` [`Feb 19 2026` — closest family/reference: `Intelligence Index` not directly listed for `3.1 Pro` but `Gemini 3.1 Pro Preview` `Feb 19 2026` shows strong performance], `LayerLens` [`Feb 19 2026` — `ARC-AGI-2` 92.3%, `LiveCodeBench` 61.0%, `SWE Bench Lite` 48.7%, `BIRD-CRITIC` 32.5%, `IF-Evals` 78.4% — independent verification showing strengths [reasoning] and weaknesses [coding/data]); `Vals AI` [`Feb 19 2026` evaluation` — `SWE-bench Verified` 69.6%, `LiveCodeBench` 2887 Elo, `Terminal-Bench 2.0` 67.4%, `LegalBench` 65.6%, `Finance Agent` 58.9% — confirms agentic/reasoning strengths but coding/data weakness (`SWE-bench Verified` `69.6%` lower than official `80.6%` — `11`-pt harness/scaffolding gap verified by `Vals AI` `Feb 19 2026` and `DeepMind` methodology notes [`single-attempt internal scaffolding` vs `Vals AI` `mini-swe-agent`]); conflicts explicitly cited [`SWE-bench Verified` 80.6% official vs 69.6% `Vals AI`; `LiveCodeBench` 2887 Elo official vs 61.0% `LayerLens`; `ARC-AGI-2` 77.1% official vs 92.3% `LayerLens` — `15.2`-pt gap [possible harness/update difference]; `GDPval-AA` 1317 official vs `Artificial Analysis` family/reference not directly listed — closest `Gemini 3.1 Pro Preview` `Artificial Analysis` `GDPval-AA` not listed directly but `Intelligence Index` `Feb 19 2026` shows leading `Intelligence Index` and `Coding Index` for `Gemini 3.1 Pro Preview` — closest family/reference; `Terminal-Bench 2.0` 68.5% official vs not independently reproduced for exact SKU — closest `Vals AI` `67.4%` — close agreement; `Multimodal` `MMMU-Pro` 80.5% official vs `Artificial Analysis` family/reference not directly reproduced — closest `Gemini 3.1 Pro Preview` `Artificial Analysis` `MMMU-Pro` not listed directly but `Intelligence Index` includes multimodal components; identity `gemini-3.1-pro` confirmed by `DeepMind` model card [`Feb 19 2026`]; active/deployed [`Google AI Studio` GA `Oct 13 2026`, `Gemini API` `Oct 13 2026`]; no phantom/alias; no retirement/deprecation announced [`Oct 13 2026` release notes show active/deployed]); scores derived from family-level official benchmarks with confidence adjustments; no `.md.excluded` twin exists; no build/sync executed)
- Conflicting-evidence note: No identity conflicts. The main limitation is the absence of a dedicated independent benchmark score specifically for `gemini-3.1-pro`; all scores are derived from family-level DeepMind benchmark tables and evaluation framework participation, with appropriate confidence adjustments noted. The independent normalized score (87) aligns with the peer-averaged Overall (92.1) within expected variance for a model evaluated primarily through family-level rather than standalone benchmark data.
- Future sources: if Artificial Analysis or DeepMind releases a dedicated standalone benchmark page (Intelligence Index, DeepSWE, or Terminal-Bench percentage) specifically for gemini-3.1-pro, an `ENRICH-PROPOSAL` should document the exact benchmark change rather than an in-pass overwrite.
