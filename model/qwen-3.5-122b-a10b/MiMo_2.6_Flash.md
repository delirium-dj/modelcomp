# Qwen3.5-122B-A10B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-21)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-21 (Overall 74). Fresh source this pass: BenchLM model page
> (snapshot 2026-11-10, overall **52.7, #91/1020**, 32/804 rows — was 41.7
> #125/211) with per-row provenance (Qwen HF model card, Artificial Analysis
> leaderboards). All previously recorded rows re-confirm byte-identically
> (TB2.0 49.4, OSWorld 58, BrowseComp 63.8, GPQA 86.6, MMLU-Pro 86.7,
> SWE-V 72.0, LCB v6 78.9, LongBench v2 60.2, MMMU 83.9, MMVU 74.7,
> MMMU-Pro 76.9). Change: **Tool use 66→67** — the named cap "missing
> Tau3/GDPval/Claw rows keep it under 70" is now two-thirds filled: **τ²-bench
> 93.6%** (AA — strong top-band multi-turn tool row) and **GDPval-AA 925 Elo
> / 15.7% normalized** (AA — weak-mid); offsets recorded: **AA Agentic Index
> 9.6** (very weak) and Claw-Eval still absent. Overall 74 unchanged (mean
> 74.0 → 74.2). Held: Reasoning 84 (independent AA-HLE 25.2 / AA-GPQA 85.7
> confirm the recorded rows; new **CritPt 0.6%** and SuperGPQA 67.1 add
> sub-reference depth without moving the band — precedent: qwen-3.5-397b
> CritPt 1.7 held), Context 72 (new **AA-LCR 76.3%** corroborates usable
> long-context but is not the missing 512K+ retrieval measurement; window
> tier unchanged), Multimodal 72 (new depth rows — MathVision **86.2**,
> V* **93.2**, CharXiv 77.2, independent **AA-MMMU-Pro 75.0** — confirm the
> upper image tier; no video/audio → band cap unchanged), Coding 76 (new
> **AA-SciCode 39.7** and **AA Coding Index 45.7** are weak-mid and exactly
> where the previous "missing SciCode" cap priced them; DeepSWE still
> absent), Cost 88 (pricing unchanged).

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's mid-size open-weight MoE reasoning model of the Qwen3.5 generation (~125B total / 10B active parameters per Artificial Analysis); text+image understanding with strong GPQA/MMLU-Pro and SWE-class coding for its cost, aimed at efficient hosted and self-served workloads.
- **Provider / access:** Open weights (Apache 2.0) served by Alibaba Cloud Model Studio / PAI-EAS, DeepInfra, SiliconFlow and OpenRouter; Chat Completions style APIs. Ships reasoning and non-reasoning modes (separately tracked by Artificial Analysis).
- **Release / knowledge:** released 2026-02-24 (Artificial Analysis; LLMReference); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-122b-a10b` (Model Studio), `deepinfra/qwen3.5-122b-a10b`, `siliconflow/qwen3.5-122b-a10b`, OpenRouter `qwen/qwen3.5-122b-a10b`; weights `Qwen/Qwen3.5-122B-A10B`. No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 tokens (262K, Artificial Analysis model card; some provider tables list 256K); max output not separately published by the vendor.
- **Modalities:** text and image in; text out; reasoning mode yes; JSON / tool use yes (LLMReference capability flags).
- **Pricing (as of 2026-10-21):** Alibaba API $0.40 in / $3.20 out per 1M (Artificial Analysis; blended $0.68 at 7:2:1 cache ratio); cheaper routes from $0.26 / $2.08 (LLMReference tracked providers). Paid; no $0 tier verified.
- **Architecture:** MoE, ~125B total / 10B active at inference (Artificial Analysis); Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**agent**): **49.4%** (HF model card, via BenchLM — re-confirmed)
- OSWorld-Verified: **58%** (re-confirmed); BrowseComp: **63.8%** (re-confirmed)
- **τ²-bench: 93.6%** (Artificial Analysis — **new**, strong top-band multi-turn tool row)
- **GDPval-AA: 925 Elo / 15.7% normalized** (AA — **new**, weak-mid); **AA Agentic Index: 9.6** (AA — new, very weak)
- Tau3-Banking / Claw-Eval / ClawProBench: no verified public score found (re-checked 2026-11-10)

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (BenchLM compare; LLMReference independently lists 85.7%; **AA-GPQA Diamond 85.7%** — AA harness, new independent confirmation)
- HLE (Humanity's Last Exam): **25.3%** (LLMReference); **AA-HLE: 25.2%** (new — independent confirmation)
- MMLU-Pro: **86.7%** (LLMReference; re-confirmed); **SuperGPQA: 67.1%** (new, mid)
- Artificial Analysis Intelligence Index: **16** (reasoning mode, Index v4.3.2 — well above the size-class median of 8; non-reasoning mode 18 estimated; Artificial Analysis); no v5.0.1 re-read published on BenchLM's page this pass
- BenchLM overall: **52.7/100, #91/1020** (32/804 rows, snapshot 2026-11-10 — was 41.7 #125/211)
- **CritPt: 0.6%** (AA — new, very weak); **AA-LCR: 76.3%** (AA — new, feeds long-context); MLCR / Omniscience: no standalone public figures found

Coding:

- SWE-bench Verified: **72.0%** (LLMReference, BenchLM — re-confirmed)
- LiveCodeBench v6: **78.9%** (BenchLM, LLMReference — re-confirmed)
- **AA-SciCode: 39.7%** (AA — **new**, far under the 55 reference); **AA Coding Index: 45.7%** (AA — new, weak-mid)
- DeepSWE: no verified public score found (re-checked)

Long context:

- LongBench v2: **60.2%** (re-confirmed); **AA-LCR: 76.3%** (AA — new, solid reasoning-at-context for a 262K window)
- No MRCR/RULER 512K+ figure found (re-checked 2026-11-10)

Multimodal:

- MMMU: **83.9%** (Qwen blog, via BenchLM — re-confirmed)
- MMVU: **74.7%** (re-confirmed); MMMU-Pro: **76.9%** (LLMReference, BenchLM — re-confirmed)
- New depth rows (HF model card, via BenchLM 2026-11-10): **MathVision 86.2%**, **CharXiv 77.2%**, **V* 93.2%**; **AA-MMMU-Pro: 75.0%** (independent — slightly under the vendor 76.9)

Performance notes:

- ~124–142 output tok/s, TTFT ~2.3–2.5 s on Alibaba API (Artificial Analysis); reasoning mode averages ~17K output tokens per Index task (verbose).

### Normalized scores (1–100)

- **Tool use: 67/100.** Terminal-Bench 2.0 49.4% sits in the mid band, OSWorld-Verified 58% and BrowseComp 63.8% are solid — and two of the three previously-missing rows now exist: **τ²-bench 93.6%** (AA, top band) and **GDPval-AA 925 Elo** (AA, weak-mid) → 67 (was 66). Held under 70 by Claw-Eval still absent, the very weak **AA Agentic Index 9.6**, and OSWorld/τ² both under their frontier references.
- **Reasoning: 84/100.** GPQA 86.6% and MMLU-Pro 86.7% are near-frontier; HLE 25.3% is strong for a 10B-active model but below the 40%+ frontier reference, and the AA Index (16, v4.3.2) is size-class-leading rather than absolute-frontier.
- **Context window: 72/100.** 262K native lands in the 200K–500K tier (200K = 70 reference); no public 512K+ retrieval measurement.
- **Multimodal: 72/100.** Image + text input, text output (no video/audio, no non-text out) with strong vision scores (MMMU 83.9%, MMMU-Pro 76.9%) — upper end of the image-in tier.
- **Coding: 76/100.** SWE-bench Verified 72.0% and LiveCodeBench v6 78.9% are strong mid-tier; Terminal-Bench 2.0 49.4% (agentic coding) plus the now-measured weak rows — **AA-SciCode 39.7%** (far under the 55 ref) and **AA Coding Index 45.7** — and still-missing DeepSWE cap it at 76 (the new rows land exactly where the previous "missing SciCode" cap priced them).
- **Cost efficiency: 88/100.** $0.40/$3.20 on Alibaba API (expensive for its size class per Artificial Analysis) with routes from $0.26/$2.08 — good absolute value, but no free lane and higher blended cost than the 27B sibling.
- **Overall Score: 74/100.** Mean of (67 + 84 + 72 + 72 + 76) / 5 = 371/5 = 74.2 → 74. Best fit: efficient 10B-active hosted workhorse for GPQA-class reasoning and SWE-class coding with image input; step to the 397B-A17B flagship for harder agentic terminal tasks.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with per-row provenance — Qwen3.5-122B-A10B HF model card, Artificial Analysis model/leaderboard rows [τ², GDPval, Agentic Index, SciCode, Coding Index, LCR, CritPt, HLE, GPQA, MMMU-Pro, IFBench] — checked against the 2026-10-21 sources: Artificial Analysis model cards, BenchLM mirrors, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-21.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
