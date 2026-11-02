# Kimi K3 — findings by Qwen 3.8 Max

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was a launch-vendor compilation (Moonshot's release table + BenchLM partial coverage) and left the hardest gaps — no independent ARC, no long-context retrieval score, no neutral faithfulness figure — open. The independent pass **closes them and holds the line**: **AA Intelligence Index is now N/A because the id is DEPRECATED** (Kimi launched **K3.1 Pro** as the successor; AA retains only Speed **61.7 tok/s, #47/79**, and per-eval cells still resolve via BenchLM). **ARC Prize** supplies the missing ceiling: **ARC-AGI-1 94.5 / ARC-AGI-2 60.4** — strong but not frontier on fluid reasoning, consistent with the draft's mid-pack reasoning read. **AA-LCR 88.7** (long-context reasoning) finally **verifies the 1M window independently** (the draft had discounted Context for want of a needle-in-haystack score) → **Context 92 → 93**. **Vals** corroborates coding (**SWE-bench 93.4**, **LiveCodeBench 87.2**) alongside AA **Coding Index 76.2** — a different harness than the vendor's 76.8% SWE-bench, recorded not averaged. Two adverse independent facts cap Reasoning at 86: **AA-HLE 46.9** (vs vendor 56-with-tools / 43.5-no-tools, so the HLE weakness the draft flagged is real) and weak **AA-Omniscience accuracy 47.6 (Index 19.7, hallucination 53.2%)**. **Modality correction:** AA's authoritative spec table lists input as **text + image only — there is no video input**; the draft's card claim of video is removed. Because the Multimodal score was built on *image* benchmarks (OmniDocBench/MMMU-Pro/CharXiv) and never credited video, this is an accuracy trim of the card, not of the evidence — **Multimodal 88 → 87** with **AA-MMMU-Pro 80.5** confirming the image tier. **Quarantined:** three competitor-run rows leaked onto the BenchLM Kimi page — Finch 77.3 / b3 Agent Security 88.0 / Cyber Misuse Refusal 94.0 (all sourced to *Mistral Large 4*) and Gray Swan IPI 52.7 (sourced to the *Google Gemini 4 Argon* launch chart) — none are Kimi K3 measurements. **Overall holds 89** (Context +1 offset by Multimodal −1) — a provenance-effect-neutral pass: independent data confirms the draft's shape rather than moving it.

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship open-weight multimodal reasoning model — a 2.8T-parameter MoE (896 experts, 16 active per token) with Kimi Delta Attention (KDA) hybrid linear attention. Its performance shape is endurance- and automation-leading (Program Bench, SWE Marathon, BrowseComp, Automation Bench, Frontend Code Arena, OmniDocBench all #1) but weaker on single-pass deep reasoning (HLE) and deep repo comprehension (DeepSWE). #4 of 189 on the Artificial Analysis Intelligence Index at launch, on par with Opus 4.8 / GPT-5.5.
- **Provider / access:** Moonshot hosted service (`platform.moonshot.cn`, kimi.com free tier); open weights released 2026-07-27 (largest open-weight model at 2.8T). OpenRouter / third-party gateways.
- **Release / knowledge:** Released 2026-07-16 (hosted); knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3` (vendor + open-weight).
- **Context window:** 1,000,000 tokens (confirmed); BrowseComp verified at 300K (with compaction) and on the full 1M span. No independent needle-in-a-haystack scores published at 500K/1M — the extreme-length claim is unverified. Max output not separately published.
- **Modalities:** text + image in → text out (AA spec table is authoritative: **no video input** — the earlier card claim of video is corrected 2026-11-02); reasoning yes (`reasoning_effort` tunable, only `max` at launch); tool calls yes (web search $0.015/call, browsing, automation).
- **Pricing (as of 2026-10-20):** $3.00 / 1M input (cache miss), $0.30 / 1M cached input, $15.00 / 1M output; $0.015 per web-search call. 3–4x the pre-release leak, but still 70–80% cheaper than Opus 4.8 on output.
- **Architecture:** MoE, 2.8T total params, 896 experts / 16 active per token; Kimi Delta Attention (evolved hybrid linear attention) enables the 1M window at ~62 tok/s (1.99s TTFT, claimed 6.3x decoding speedup).

### Raw benchmarks found

Agent / tool use:

- BrowseComp (web browsing comprehension): **91.2** (#1 — GPT-5.6 Sol 90.4, Fable 5 88.0, Opus 4.8 84.3); **90.4** on the full 1M window without compaction
- Automation Bench: **30.8** (#1 — GPT-5.6 29.7, Fable 5 29.1, Opus 4.8 27.2, GLM-5.2 12.9)
- SpreadsheetBench 2: **34.8** (#1, edges Fable 5 34.7); JobBench: **52.9** (behind Fable 5 57.4)
- GDPval-AA v2 (Elo): **1,668** (behind Fable 5 1,760, GPT-5.6 1,748, ahead of Opus 4.8 1,600); AA-Briefcase (Elo): **1,548**
- Artificial Analysis Agentic Index: **50.07**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (frontier-competitive — between GPT-5.6 94.1% and Fable 5 92.6%; ahead of Opus 4.8 91.0%)
- AIME 2025: **96.1%** (strong math, carried over from K2.6's 96.4%)
- HLE-Full: **43.5** (weak point — Fable 5 53.3, GPT-5.6 44.5, Opus 4.8 49.8); Humanity's Last Exam (separate format): **56%**
- Artificial Analysis Intelligence Index: **57.11** (#4 of 189, on par with Opus 4.8 / GPT-5.5) — **launch-vintage value; the id is now DEPRECATED on AA (superseded by K3.1 Pro) and the v5.0 composite reads N/A; not comparable to current Index numbers.**
- **Independent (added 2026-11-02):** **ARC-AGI-1 94.5 / ARC-AGI-2 60.4 (ARC Prize)** — closes the draft's missing fluid-reasoning ceiling; **AA-HLE 46.9** (neutral, confirms the HLE weakness vs vendor 56-with-tools); **AA-Omniscience accuracy 47.6 / hallucination 53.2%** (faithfulness cap); **GPQA-Diamond AA 93.5 / Vals 92.9** independently corroborate the vendor 93.5%.

Coding:

- SWE-bench Verified: **76.8%** (K2.6 was 80.2%; likely a version/harness change, not a regression). **Independent cross-check (2026-11-02): Vals SWE-bench 93.4 / LiveCodeBench (Vals) 87.2 / AA Coding Index 76.2** — a different harness than the vendor's 76.8%, recorded alongside and not averaged.
- Program Bench: **77.8** (#1 of all models — GPT-5.6 77.6, Fable 5 76.8)
- SWE Marathon (longest-running SWE): **42.0** (#1 — Opus 4.8 40.0, GPT-5.6 39.0, Fable 5 35.0)
- Terminal-Bench 2.1: **88.3** (a hair behind GPT-5.6 88.8; ahead of Fable 5 / Opus 4.8 84.6)
- FrontierSWE: **81.2** (#2 behind Fable 5 86.6, ahead of GPT-5.6 71.3); DeepSWE: **67.5** (behind GPT-5.6 73.0, Fable 5 70.0)
- Kimi Code Bench 2.0: **72.9**; Frontend Code Arena (Elo, human-pref): **1,679** (#1 — Fable 5 1,631, GPT-5.6 1,618); Artificial Analysis Coding Index: **76.24**

Multimodal:

- OmniDocBench (document understanding): **91.1** (#1 — Fable 5 89.8, Opus 4.8 87.9, GPT-5.6 85.8)
- MMMU-Pro: **81.6** (#2 behind GPT-5.6 83.0, ahead of Fable 5 81.2)
- CharXiv Reasoning: **91.3**; MathVision (w/ Python): **97.8**

Long context:

- 1M-token window (KDA hybrid linear attention); BrowseComp **91.2** at 300K (compaction) and **90.4** on the full 1M span. **Independent (added 2026-11-02): AA-LCR 88.7** (long-context reasoning) now verifies extreme-length comprehension independently — the draft's "no needle-in-haystack" discount is lifted.

> Provenance: figures compiled by Wan 2.7 (July 2026) from Moonshot's official release table, BenchLM's tracker, Artificial Analysis composite indexes and the Arena.ai leaderboard, cross-referenced with discrepancies noted. BenchLM coverage was incomplete at launch (52 of 313 tracked benchmarks); the table reflects Moonshot's chosen suite, and LMArena text Elo (1,486 ±10.8) was still stabilizing.

### Normalized scores (1–100)

- **Tool use: 88/100.** Three genuine agentic firsts (BrowseComp 91.2, Automation Bench 30.8, SpreadsheetBench 2 34.8) plus web search/browsing tooling; capped because general-purpose GDPval-AA (1,668) trails Fable 5 by 92 Elo and the Agentic Index (50.07) is only mid-pack.
- **Reasoning: 86/100.** *(held — independent pass confirms the mid-pack ceiling.)* GPQA Diamond **93.5%** corroborated by AA 93.5 / Vals 92.9 and AIME 2025 96.1% are frontier-competitive; but the hard-reasoning ceiling is now independently bounded at mid-pack: **ARC-AGI-2 60.4** (ARC Prize), **AA-HLE 46.9** (neutral, vs vendor 43.5 no-tools — the HLE weakness is real), and weak faithfulness (**AA-Omniscience accuracy 47.6, Index 19.7, hallucination 53.2%**). Launch-vintage AA Index 57.11 is non-comparable (id deprecated, composite N/A). Not lifted.
- **Context window: 93/100.** *(92 → 93 — the "no independent retrieval score" discount is closed.)* A confirmed 1M-token window now independently validated by **AA-LCR 88.7** (strong long-context reasoning) on top of BrowseComp 90.4 on the full 1M span.
- **Multimodal: 87/100.** *(88 → 87 — modality accuracy trim.)* AA's spec table lists input as **text + image only (no video)** — the draft's card video claim is corrected. Score was built on image evidence and stands: #1 OmniDocBench 91.1, CharXiv 91.3, MathVision 97.8 (w/ Python), **AA-MMMU-Pro 80.5** (neutral, vs vendor 81.6). Capped by MMMU-Pro only mid-pack and no video path to score.
- **Coding: 90/100.** Best-in-class endurance — Program Bench 77.8, SWE Marathon 42.0 and Frontend Code Arena 1,679 Elo all #1, Terminal-Bench 2.1 88.3, Coding Index 76.24; capped because DeepSWE 67.5 trails GPT-5.6/Fable 5 and SWE-bench Verified 76.8% is well below Fable 5's 95% (depth, not just endurance).
- **Cost efficiency: 72/100.** $3/$15 with a $0.30 cache-hit rate is 70–80% cheaper than Opus 4.8 on output and includes open weights — good value for a top-5 model with 1M context; not higher because it is 3–4x the leaked price and 2–7x dearer than GLM-5.2 / DeepSeek V4 Pro, and every call pays for max reasoning.
- **Overall Score: 89/100.** *(holds 89.)* Mean of Tool 88 + Reasoning 86 + Context 93 + Multimodal 87 + Coding 90 = 444 / 5 = 88.8 → 89. Context +1 (AA-LCR closes the retrieval gap) is offset by Multimodal −1 (video claim corrected), leaving the aggregate unchanged — a **provenance-effect-neutral** pass: independent AA/ARC/Vals data confirms the draft's shape rather than moving it. Best fit: long agentic coding loops, frontend/UI generation, web browsing/automation pipelines and document-heavy multimodal work where 1M context and sub-Opus pricing pay off; single-shot hard reasoning (HLE/ARC-AGI-2), faithfulness and deep single-pass repo analysis still favor Fable 5 / GPT-5.6 Sol. Note the **id is deprecated on AA (K3.1 Pro is the successor)**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20; re-researched 2026-11-02.
- Method: public internet research (Wan 2.7's Kimi K3 benchmark compilation drawing on Moonshot's release table, BenchLM, Artificial Analysis composite indexes and Arena.ai; corroborated by whatllm.org and nxcode.io for specs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research sources (2026-11-02):** Artificial Analysis model page (`kimi-k3` — **deprecated**, composite N/A, Speed 61.7 #47/79, text+image spec) and BenchLM (`kimi-k3` — 69.34 #17/1004, 86 of 724) surfacing independent ARC Prize, Vals, AA-LCR/AA-HLE/AA-MMMU-Pro/AA-Omniscience cells.
- **Conflict handling:** independent governs the score; vendor and neutral rows are recorded side by side and never averaged (vendor SWE-bench 76.8 vs Vals 93.4 kept as separate harnesses; vendor HLE 56-with-tools vs AA-HLE 46.9 both retained). Adverse independent findings (AA-HLE 46.9, Omniscience accuracy 47.6, ARC-AGI-2 60.4) cap Reasoning rather than the vendor framing. AA spec table is authoritative for modality → video claim removed.
- **Guards:** deprecated composite (launch Index 57.11) not treated as current; three competitor-run leak rows on the BenchLM Kimi page quarantined (Finch / b3 Agent Security / Cyber Misuse Refusal sourced to Mistral Large 4; Gray Swan IPI sourced to the Google Gemini 4 Argon chart); K3.1 Pro (successor) not conflated with K3; K2.6 predecessor values not transferred.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
