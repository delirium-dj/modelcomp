# Claude Opus 4.8 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was a competent CodingFleet head-to-head compilation (Anthropic system card + Vals + AA), but it was written *at launch* and its framing has since aged on two axes the independent pass corrects. **(1) The "world #2, AA Index 61.4" headline is stale.** AA now lists Opus 4.8 as **DEPRECATED** (superseded by Claude Opus 5); the v5.0 composite reads N/A and the current Index value surfaced via BenchLM is **41.8** — still above the v5.0 class median (~37), but *not* the #2-of-the-world position the draft recorded, because Opus 5 / Fable 5.1 / GPT-6 have passed it. The draft's 61.4 was launch-vintage (v4.x) and is not comparable to v5.0. **(2) The "4x honesty, 35.9% hallucination" claim is a vendor number; AA measures 39.3%** (accuracy 48.8, Index 28.8) — still good versus peers (most are 50–90%+) but not the standout the card implies. Against those corrections the model's *absolute* reasoning stands well on neutral instruments — **AA-GPQA 92.0 / Vals 92.4** (vs vendor 93.6), **USAMO 96.7**, **Epoch FrontierMath v2 T4 56.1 / T1–3 80.0**, **ARC-AGI-2 72.1** (ARC Prize, confirms the draft) though **ARC-AGI-3 1.5** and **CritPt 20.9** are weak. Net **Reasoning 91 → 90** (honesty overstatement + mid AA-HLE 48.7, offset by strong absolute scores). **Tool 90 → 88:** the agentic set was almost entirely vendor system-card; the neutral read is only mid-pack (**AA Agentic Index 42.6**, **OSWorld 2.0 20.6** on the harder new version, AutomationBench 15.5) and vendor BrowseComp is **84.3** (not the draft's 88.5). **Multimodal 82 → 84:** the draft flagged "no discrete vision benchmark published" — independent **ExtractBench 87.09 / ParseBench 62.27 (LlamaIndex)** now fill exactly that gap with measured document-extraction vision; AA confirms **text + image only** (the card's "+ file" is a container, not a modality → corrected). **Coding holds 90** — independently corroborated (**Vals SWE-bench 88.6** = the vendor figure, **Vals LiveCodeBench 87.8**, **AA Coding Index 74.3**) — and **Context holds 90** (**AA-LCR 77.7** mid, GraphWalks 68.1 unchanged). **Cost holds 72** ($5/$25, AA expensive vs $2/$10 median). **Overall 89 → 88** — a *recalibration*, not a capability change: the model is the same, but the launch-vintage "#2 / 4x-honesty" provenance no longer survives independent checking. Sibling Fable 5 / Opus 5 comparison numbers used throughout the draft are context only, never transferred onto this model's cells.

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-tier flagship, released 2026-05-28 — it dethroned GPT-5.5 on the Artificial Analysis Intelligence Index and was the world's #1 model for 12 days (May 28 – June 9) until Claude Fable 5 (Mythos-class) arrived. Its signature is calibrated, cautious honesty (a 4x honesty improvement, 35.9% hallucination vs Fable 5's higher rate) plus Dynamic Workflows (hundreds of parallel subagents). Successor to Opus 4.7 (April 16).
- **Provider / access:** Claude API (`claude-opus-4-8`), Claude Pro/Max, Claude Code, AWS Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4.8`.
- **Context window:** 1,000,000 tokens — expanded from ~200K in Q2 2026 (5x increase). GraphWalks BFS evaluated at the 1M span (68.1%).
- **Modalities:** text + image in → text out (AA spec table authoritative; the earlier "+ file" is a container, not a distinct input modality — corrected 2026-11-02); reasoning yes (extended thinking); tool calls yes (MCP, Dynamic Workflows / parallel subagents, computer use).
- **Pricing (as of 2026-10-21):** $5.00 / 1M input, $25.00 / 1M output (standard — "pricing unchanged" from Opus 4.7 despite the 5x context expansion); **fast mode** $10.00 / 1M input, $50.00 / 1M output. Batch route discounted.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **83.4%** (behind Fable 5 85.0%). **Independent (2026-11-02): OSWorld 2.0 (harder new version) 20.6, AA Agentic Index 42.6, AA Terminal-Bench 2.1 84.6** — vendor BrowseComp is **84.3** (not the 88.5 the draft recorded).
- MCP Atlas (multi-tool orchestration): **82.2%**; Online-Mind2Web: **84%**; BrowseComp (multi-agent): **88.5%**; Toolathlon: **59.9%** (Opus 4.8 has published scores where Fable 5 did not)
- GDPval-AA (Elo): **1,890** (behind Fable 5 1,932); AutomationBench: **15.5%** (behind Fable 5 17.4%)
- GDP.pdf (no tools): **22.5%**; Finance Agent v2: **53.9%**; Legal Agent Benchmark: **10.4%** (all behind Fable 5)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61.4** (#2 behind Fable 5's 64.9; was #1 for its 12-day reign) — **launch-vintage (v4.x); the id is now DEPRECATED on AA (superseded by Opus 5), the v5.0 composite reads N/A, and the current value surfaced via BenchLM is 41.8 — above the ~37 v5.0 median but no longer the #2 position.**
- **Independent (added 2026-11-02):** **AA-GPQA Diamond 92.0 / Vals 92.4** (vs vendor 93.6), **AA-HLE 48.7** (mid), **ARC-AGI-1 92.5 / ARC-AGI-2 72.1 / ARC-AGI-3 1.5 (ARC Prize)**, **Epoch AI FrontierMath v2 T1–3 80.0 / Tier 4 56.1**, **CritPt 20.9 (AA)**, and **AA-Omniscience hallucination 39.3% / accuracy 48.8 / Index 28.8** (neutral, vs the vendor 35.9% honesty claim).
- GPQA Diamond: **93.6%** (leads / ties Fable 5's ~93%)
- Humanity's Last Exam: **49.8%** no tools / **57.9%** with tools (behind Fable 5 59.0% / 64.5%)
- USAMO 2026: **96.7%**; ARC-AGI-2 (High): **72.1%** (both Opus-4.8-only scores in the comparison)
- AA-Omniscience Index: **27.4** (#3), Accuracy **46.6%**, Hallucination **35.9%** — the more honest/calibrated model vs Fable 5

Coding:

- SWE-bench Verified: **88.6%** (behind Fable 5 95.0%/93.9%)
- SWE-bench Pro: **69.2%** (behind Fable 5 80.3%); SWE-bench Multilingual: **84.4%** (behind Fable 5 ~87%)
- Terminal-Bench 2.1: **82.7%** (behind Fable 5 88.0%); FrontierCode Diamond: **13.4%** (behind Fable 5 29.3%)

Multimodal / biology:

- HealthBench Professional: **56.9%**; BioMysteryBench hard **40.0%**, human-solved **80.4%** (all behind Fable 5)
- Blueprint-Bench 2 (spatial reasoning): **14.5%** (a marked weak point vs Fable 5's 38.6%)
- **Independent (added 2026-11-02):** **ExtractBench 87.09 / ParseBench 62.27 (LlamaIndex)** — measured document-extraction vision, filling the draft's "no discrete vision benchmark" gap.

Long context:

- 1,000,000-token window (expanded from 200K); GraphWalks BFS 1M: **68.1%** (behind Fable 5 80.0%) — retrieval degrades more than Fable 5 at the full 1M span.

> Provenance: benchmark figures compiled by CodingFleet (June 11, 2026) from Anthropic, Vals.ai and Artificial Analysis for the Claude Fable 5 vs Opus 4.8 head-to-head; pricing confirmed via Anthropic's "Introducing Claude Opus 4.8" ($5/$25 standard, $10/$50 fast) and finout.io ("pricing unchanged"), and the 1M context expansion (from ~200K, Q2 2026) via Anthropic/developer coverage. A conflicting "$15/$75, 200K" figure in one third-party table reflects stale Opus 4/4.1-era data and was disregarded.

### Normalized scores (1–100)

- **Tool use: 88/100.** *(90 → 88 — vendor-heavy read corrected.)* Broad agentic coverage (MCP Atlas 82.2%, OSWorld-Verified 83.4%, Dynamic Workflows) but the neutral instruments are only mid-pack: **AA Agentic Index 42.6**, **OSWorld 2.0 20.6** (harder new version), AutomationBench 15.5, and vendor BrowseComp is **84.3** (not 88.5). Trails Fable 5 / Opus 5 on GDPval-AA.
- **Reasoning: 90/100.** *(91 → 90 — honesty overstatement corrected, absolute standing holds.)* Strong on neutral instruments — **AA-GPQA 92.0 / Vals 92.4**, USAMO 96.7, **Epoch FrontierMath v2 T4 56.1 / T1–3 80.0**, **ARC-AGI-2 72.1** — but the draft's "4x honesty / 35.9% hallucination" is a vendor figure; AA measures **39.3%** (accuracy 48.8). Held by mid **AA-HLE 48.7**, weak **ARC-AGI-3 1.5 / CritPt 20.9**, and the launch-vintage "#2 Index 61.4" no longer holds (deprecated; v5.0 41.8).
- **Context window: 90/100.** A genuine 1M-token window (5x expansion at unchanged price); discounted because GraphWalks BFS at 1M is 68.1% — noticeably weaker long-span retrieval than Fable 5's 80.0%.
- **Multimodal: 84/100.** *(82 → 84 — the "no discrete vision benchmark" gap is now measured.)* Independent **ExtractBench 87.09 / ParseBench 62.27 (LlamaIndex)** supply the document-extraction vision evidence the draft lacked, on top of vendor CharXiv 89.9 / ScreenSpot Pro 87.9 and computer-use vision (OSWorld 83.4%). Still capped by **text + image only** (AA-confirmed, no video), weak Blueprint-Bench spatial 14.5%, and no MMMU-Pro under this id.
- **Coding: 90/100.** Top-tier at release — SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, SWE-bench Multilingual 84.4%, Terminal-Bench 2.1 82.7% (it "led on coding benchmarks by wide margins" for its 12-day reign); capped by FrontierCode Diamond 13.4% and being overtaken by Fable 5 (and later GPT-5.6 Sol on DeepSWE/Terminal-Bench).
- **Cost efficiency: 72/100.** $5/$25 standard is competitive flagship pricing (below GPT-6 Astra $10/$50 and GPT-5.6 Sol's $30 output) and the 1M context came at no price increase; not higher because it is still a premium Opus tier with a $10/$50 fast mode and a discounted-only batch lane.
- **Overall Score: 88/100.** *(89 → 88.)* Mean of Tool 88 + Reasoning 90 + Context 90 + Multimodal 84 + Coding 90 = 442 / 5 = 88.4 → 88. A **recalibration, not a capability change** — the model is unchanged, but the launch-vintage "#2 world / 4x-honesty" provenance does not survive independent checking (Tool −2 for vendor-heavy agentic + mid AA read, Reasoning −1 for the 39.3% hallucination correction, offset by Multimodal +2 once LlamaIndex measures the previously-unpublished vision gap). Best fit: production coding agents and knowledge work where calibrated honesty still matters (39.3% hallucination is low versus peers), long multi-subagent Dynamic Workflows, and 1M-context tasks; raw capability ceilings (HLE, spatial, deep-repo coding) and the current intelligence ranking now favor Fable 5.1 / Opus 5.5.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21; re-researched 2026-11-02.
- Method: public internet research (CodingFleet's Claude Fable 5 vs Opus 4.8 30-benchmark comparison compiling Anthropic/Vals.ai/Artificial Analysis; Anthropic's Opus 4.8 announcement and finout.io for pricing; developer coverage for the 1M-context expansion); scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research sources (2026-11-02):** Artificial Analysis model page (`claude-opus-4-8` — **deprecated**, composite N/A, Speed 59.2 #152/196, text+image spec) and BenchLM (`claude-opus-4-8` — 69.63 #16/1004, 64 of 724) for AA-GPQA/AA-HLE/AA-LCR/Omniscience, ARC Prize, Epoch FrontierMath v2, Vals and LlamaIndex cells.
- **Conflict handling:** independent governs. Vendor system-card cells (BrowseComp 88.5, hallucination 35.9, "#2 Index 61.4") are corrected to their neutral counterparts (84.3, 39.3, deprecated/41.8 v5.0) where AA/BenchLM disagree; Vals SWE-bench 88.6 that *matches* the vendor is accepted as corroboration. Vendor and independent rows recorded side by side, never averaged.
- **Guards:** launch-vintage v4.x Index (61.4) not treated as a current ranking; sibling Fable 5 / successor Opus 5 / Opus 4.7 comparison numbers kept as context only, never transferred onto Opus 4.8's cells; OSWorld 2.0 (20.6) and OSWorld-Verified (83.4) recorded as distinct harness versions, not merged.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
