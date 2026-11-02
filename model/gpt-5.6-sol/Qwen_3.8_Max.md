# GPT-5.6 Sol — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft drew every benchmark from a third-party "Wan 2.7 / Kimi-K3" comparison table, so the 2026-11-02 pass re-grounds it on **Artificial Analysis + BenchLM (Vals AI, ARC Prize, Cognition, Cursor, Proximal, LlamaIndex)**. AA has **deprecated the id** (superseded by GPT-6 Sol — "consider it instead"; composite N/A, only **Speed 101.9 tok/s #61/196** survives). Independent data **raises the capability floor well above the aggregator's read**: **ARC-AGI-2 92.5% (ARC Prize)** — a score the draft's table did not contain — GPQA Diamond **triple-corroborated at 94.6 (vendor) / 94.1 (AA) / 95.2 (Vals)**, **SWE-bench 96.2% (Vals)** closes the draft's "no SWE-bench published" gap, and **AA-LCR 84.0** closes the long-context gap. Coding and reasoning therefore lift (Coding 90→91, Reasoning 89→91), Tool 90→91 and Context 93→94 on independent breadth. The single **adverse** finding, invisible in the vendor table, is honesty: **AA-Omniscience hallucination 92.2%** (accuracy 59.4%) — the dataset's worst band (level with Gemini 3 Pro) — which is the reason Reasoning stops at 91 despite elite raw scores. **Provenance guards:** the draft's "HLE-Full 44.5" is superseded by independent **AA-HLE 49.5**; BenchLM's HLE-Verified 54.5 / LABBench2 82.1 come from the **Gemini 3.8 Flash card** and Gray-Swan from **Google's Argon launch chart** — all **quarantined**. **Overall 90 → 91.**

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** The largest, highest-tier model of OpenAI's GPT-5.6 family (Sol > Terra > Luna), pitched as "frontier intelligence that scales with your ambition." A strong all-rounder that leads its comparison set on GPQA Diamond (94.1%), MMMU-Pro (83.0), DeepSWE (73.0) and Terminal-Bench 2.1 (88.8), while trailing Claude Fable 5 on the hardest reasoning/deep-repo work and Kimi K3 on agentic endurance.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), platform.openai.com; the flagship GPT-5.6 tier.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff **February 2026**.
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** ~1,100,000 tokens input / 128,000 tokens output (llm-stats). Prompts with >272K input tokens are billed at 2x input / 1.5x output (surcharge tier, per developers.openai.com).
- **Modalities:** text + image in → text out; reasoning yes (effort-tunable); tool calls yes (browsing, automation, function tools). No native audio/video input reported (unlike GPT-5.5's omnimodal architecture).
- **Pricing (as of 2026-10-21):** $5.00 / 1M input, $0.50 / 1M cached input, $30.00 / 1M output. OpenAI cut API+credit pricing >20% for 3 months from 2026-08-21; promotional pricing runs at least through 2026-11-21. Family: Terra $2.50/$15, Luna $1/$6.
- **Architecture:** proprietary (closed weights); p95 TTFT 5.85s, ~21 chars/s sustained output floor.
- **Tracking status (added 2026-11-02):** AA marks `gpt-5-6-sol` (Max) **deprecated** — superseded by **GPT-6 Sol**; composite Index/Cost/Verbosity N/A, only **Speed 101.9 tok/s (#61/196, faster than the 81 median)** persists. AA's measured median price is **$4.00/$20.00** (post the Aug-2026 >20% promo cut) versus the $5.00/$30.00 list above — both recorded; AA's spec table confirms **text+image in → text out, 1M** (no audio/video, matching the card).

### Raw benchmarks found

Agent / tool use:

- BrowseComp (autonomous web research): **90.4** (#2 in the Kimi-K3 comparison field — behind Kimi K3 91.2, ahead of Fable 5 88.0, Opus 4.8 84.3)
- Automation Bench: **29.7** (behind Kimi K3 30.8; ahead of Fable 5 29.1, Opus 4.8 27.2, GLM-5.2 12.9)
- GDPval-AA v2 (Elo): **1,748** (#2 — behind Fable 5 1,760; ahead of Kimi K3 1,668, Opus 4.8 1,600); AA-Briefcase (Elo): **1,495**
- SpreadsheetBench 2: **32.4**; JobBench: **46.5**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (leads the field — Kimi K3 93.5%, Fable 5 92.6%, GLM-5.2 91.2%, Opus 4.8 91.0%)
- HLE-Full: **44.5** (a relative weak point — behind Fable 5 53.3 and Opus 4.8 49.8; just ahead of Kimi K3 43.5)

Coding:

- DeepSWE (deep-repo autonomous SWE): **73.0** (leads the field — Fable 5 70.0, Kimi K3 67.5, GPT-5.5 67.0, Opus 4.8 59.0)
- Terminal-Bench 2.1: **88.8** (leads — Kimi K3 88.3, Fable 5 / Opus 4.8 84.6, GPT-5.5 83.4)
- Program Bench: **77.6** (#2 behind Kimi K3 77.8, ahead of Fable 5 76.8); SWE Marathon: **39.0** (behind Kimi K3 42.0, Opus 4.8 40.0)
- FrontierSWE: **71.3** (behind Fable 5 86.6 and Kimi K3 81.2; ahead of Opus 4.8 66.7, GPT-5.5 64.9); Frontend Code Arena (Elo): **1,618** (#3 behind Kimi K3 1,679, Fable 5 1,631)
- No SWE-bench Verified figure published in accessible sources

Multimodal:

- MMMU-Pro: **83.0** (leads the field — Kimi K3 81.6, Fable 5 81.2, Opus 4.8 78.9)
- OmniDocBench (document understanding): **85.8** (behind Kimi K3 91.1, Fable 5 89.8, Opus 4.8 87.9)

Long context:

- ~1.1M-token input window with a 128K output cap and a >272K surcharge tier; no MRCR / needle-in-a-haystack retrieval score published in accessible sources.

> Provenance: benchmark figures from the Wan 2.7 Kimi-K3 cross-vendor comparison table (July 2026; GPT-5.6 Sol column, drawing on OpenAI/BenchLM/Artificial Analysis), with specs, pricing, release date and Feb-2026 knowledge cutoff confirmed via llm-stats.com and developers.openai.com. All benchmark values vendor/third-party-reported; OpenAI's own launch page was not directly fetched.

> **Independent cross-check (2026-11-02, AA + BenchLM):** ARC-AGI-2 **92.5%** / ARC-AGI-1 **96.5** / ARC-AGI-3 **7.8** (ARC Prize, independent — the 92.5 was absent from the draft's table); GPQA Diamond **94.1 (AA) / 95.2 (Vals)** confirms the vendor 94.6; **AA-HLE 49.5** (supersedes the aggregator's 44.5); **SWE-bench 96.2 (Vals)**, LiveCodeBench **82.6 (Vals)**, **AA Coding Index 77.4**, **AA-LCR 84.0**, **AA Agentic Index 50.5**, τ²-bench **85.1**, terminalBenchHard **65.9**, **AA-MMMU-Pro 83.4**, ExtractBench **93.77 (LlamaIndex)**, FrontierMath v2 **Tier-4 83.0** (OpenAI). Adverse independent: **AA-Omniscience hallucination 92.2%** (accuracy 59.4%). Current-gen cliffs: FrontierCode 2.0 **27.6** (Cognition), FrontierSWE v2 **32.2** (Proximal), CursorBench 4.0 **41.7**. **Quarantined (competitor/sibling-sourced, not scored):** HLE-Verified 54.5 / LABBench2 82.1 (Gemini 3.8 Flash card), Gray-Swan IPI 27.0 (Google Argon chart). BenchLM aggregate **74.83, #12/1004**.

### Normalized scores (1–100)

- **Tool use: 91/100.** *(90 → 91 — independent breadth.)* Top-2/3 across the agentic board (BrowseComp 90.4→92.2 vendor, Automation Bench 29.7, GDPval-AA 1,748) is now backed by neutral instruments: **AA Agentic Index 50.5**, **τ²-bench 85.1 (AA)**, **terminalBenchHard 65.9**, CyberGym 84.5 (security tooling). Capped by Vals TB 2.1 **85.8** (below the vendor 91.9) and JobBench 46.5 lagging.
- **Reasoning: 91/100.** *(89 → 91 — the aggregator table understated it.)* Independent evidence lifts the raw-reasoning floor: **ARC-AGI-2 92.5% (ARC Prize)**, GPQA **triple-corroborated (94.6 vendor / 94.1 AA / 95.2 Vals)** as field-leading, **AA-HLE 49.5** (better than the draft's 44.5), and FrontierMath v2 Tier-4 83.0. Held to 91 (not the 93–94 its raw scores alone would earn) by **AA-Omniscience hallucination 92.2% (accuracy 59.4%)** — the dataset's worst honesty band — so its confident-sounding output cannot be trusted unverified.
- **Context window: 94/100.** *(93 → 94 — the "no retrieval published" gap is closed.)* ~1.1M-token input with 128K output, and independent **AA-LCR 84.0** now corroborates long-context quality (the draft had none). Discounted for the **>272K surcharge tier** and the 128K output cap.
- **Multimodal: 88/100.** *(87 → 88.)* **AA-MMMU-Pro 83.4 (independent)** confirms the vendor 83.0, and **ExtractBench 93.77 (LlamaIndex)** is excellent document extraction. Still capped because it accepts only **text+image** (AA confirms no native audio/video, unlike GPT-5.5/Gemini) — a genuine modality-breadth ceiling.
- **Coding: 91/100.** *(90 → 91 — independent SWE-bench closes the gap.)* **SWE-bench 96.2 (Vals)**, **AA Coding Index 77.4**, LiveCodeBench 82.6 (Vals), DeepSWE 72.7 and FrontierCode 1.1 Extended 60.6 (Cognition) corroborate the draft's field-leading DeepSWE/TB 2.1. Capped by the **current-gen cliff**: FrontierCode 2.0 27.6, FrontierSWE v2 32.2, CursorBench 4.0 41.7 — the hardest 2026 long-horizon repo work still favors Fable 5 / Kimi K3.
- **Cost efficiency: 70/100.** *(68 → 70.)* AA's **measured $4.00/$20.00** (post the >20% Aug-2026 promo) is meaningfully better value than the $5/$30 list the draft scored, though output remains "expensive" vs the $10 median, the >272K surcharge stands, cheaper Terra/Luna siblings sit below, and **GPT-6 Sol has superseded it**. Not counted in the Overall mean.
- **Overall Score: 91/100.** *(90 → 91.)* Mean of Tool 91 + Reasoning 91 + Context 94 + Multimodal 88 + Coding 91 = 455 / 5 = 91.0 → 91. Independent measurement (ARC-AGI-2 92.5, GPQA triple, SWE-bench 96.2, AA-LCR 84.0) lifts every capability dim above the aggregator-table baseline, and the one severe adverse signal — **hallucination 92.2%** — caps Reasoning rather than the whole mean. Best fit: balanced frontier workloads — graduate-level scientific reasoning, deep-repo coding, large document sets, long agentic browsing — where a strong generalist with a 1.1M window is worth flagship pricing. Standing caveats: **do not trust unverified output (92.2% hallucination)** and **AA deprecation** (GPT-6 Sol supersedes). The hardest current-gen reasoning/endurance still favors Fable 5 and Kimi K3.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21, re-researched 2026-11-02
- Method: public internet research (Wan 2.7's Kimi-K3 cross-vendor benchmark table for the GPT-5.6 Sol column; specs/pricing/release/cutoff via llm-stats.com and developers.openai.com); the 2026-11-02 pass adds **Artificial Analysis** (`gpt-5-6-sol`, Max — **deprecated**, composite N/A, Speed only) and the **BenchLM.ai** aggregator (updated 2026-10-29) carrying **Vals AI**, **ARC Prize**, **Cognition (FrontierCode)**, **Proximal (FrontierSWE)**, **Cursor**, **LlamaIndex ExtractBench**, and AA per-evaluation cells. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *Reasoning* — aggregator HLE-Full 44.5 vs independent **AA-HLE 49.5** + **ARC-AGI-2 92.5 (ARC Prize)** → independent governs, Reasoning 89→91. (2) *SWE-bench* — draft "none published" vs **Vals 96.2** → gap closed, Coding 90→91. (3) *Long context* — draft "no retrieval" vs **AA-LCR 84.0** → gap closed, Context 93→94. (4) *Price* — list $5/$30 vs AA measured $4/$20 → both recorded, AA's per-provider median informs Cost. (5) *Hallucination* — vendor silent vs **AA 92.2%** → independent adverse caps Reasoning at 91. (6) *BenchLM AA-Index 58.9* — attributed to OpenAI's own launch page (vendor claim), not an AA independent composite (which is N/A/deprecated) → recorded as vendor, not used to rescore.
- **Guards applied:** (a) **competitor/sibling-run quarantine** — HLE-Verified 54.5 and LABBench2 82.1 (sourced to Google's Gemini 3.8 Flash card) and Gray-Swan IPI 27.0 (Google's Argon launch chart) are **not** used as GPT-5.6 Sol evidence; (b) **harness discipline** — Terminal-Bench 2.1 (91.9 vendor / 85.8 Vals) vs 3.0 (34.6) vs terminalBenchHard (65.9) kept separate; CursorBench 3.2 (67.2) vs 4.0 (41.7) separated; FrontierCode 1.1 (60.6) vs 2.0 (27.6) separated; (c) **sibling quarantine** — no GPT-6 Sol / Terra / Luna / GPT-5.5 figure used as evidence; (d) **modality verified** — AA spec confirms text+image only; (e) **Cost efficiency and Speed excluded from the Overall mean**; (f) never read peer raters' findings files (zero-influence). Remaining gaps: none material — SWE-bench, GPQA, ARC-AGI, long-context all now independently populated.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
