# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Flash (`gemini-3.8-flash`; sibling `gemini-3.8-flash-cyber`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-09-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: tau3-Banking **45%** (high, +12 over 3.7 Flash; AA), Vals Finance Agent v2 **61.44% (#2**, behind Gemini 4 Argon 65.40%), HLE-Verified 54.9% (Google), Harvey Legal Agent leading (Google chart, no number), and DeepSWE "outperforms most larger frontier models" (Google chart, **no numeric**). AA Intelligence Index reads **59 (high, launch v4.1.1)** but **41 (high, current v4.3.2 page)**.
> **Conflicts surfaced:** (1) AA Index 59 → 41 is an index-basket rebase, not a capability change — not comparable across versions; (2) pricing basis: official intro **$0.75/$3.75** (through 2026-12-31) vs Vals' $1.50/$7.50 snapshot; (3) modalities: audio/speech per AA + Google, but PDF not in the AA modality table; (4) independent coding evidence is thin — the DeepSWE claim is a chart with no published number.
> Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/ · https://artificialanalysis.ai/articles/gemini-3-8-flash · https://artificialanalysis.ai/models/gemini-3-8-flash · https://www.vals.ai/benchmarks/fabv2 · https://llm-stats.com/models/gemini-3.8-flash

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's production Flash upgrade (2026-09-02), built directly on Gemini 3.7 Flash — more test-time compute, more reasoning steps and more persistent tool use for long-horizon coding/agentic work at the cost of latency/tokens.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, stable ID), AI Studio, Gemini app; relayed by gateways. Paid only (no Zen Free ID).
- **Release / knowledge:** 2026-09-02; knowledge cutoff March 2026.
- **IDs:** `gemini-3.8-flash`.
- **Context window:** 1,048,576 input / ~65,536 output tokens.
- **Modalities:** text, image, video, audio and (per LLM Stats prose) PDF input; text output only; thinking levels; persistent tool use.
- **Pricing (as of 2026-10-09):** intro **$0.75 in / $3.75 out** per 1M through 2026-12-31; standard $1.50/$7.50 after; cached input 90% off.
- **Architecture:** proprietary; 3.7-Flash foundation with more test-time compute.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking **45%** (high; AA independent, +12 vs 3.7 Flash); Vals Finance Agent v2 **61.44% (#2)**
- Terminal-Bench 2.1: "improved" (AA, no number); GDPval-AA v2 "improved" (AA, no number)
- Harvey Legal Agent Benchmark: leads (Google chart, no number); CyberGym / CWE-Bench belong to the Cyber sibling

Reasoning / knowledge:

- HLE-Verified **54.9%** (Google, self-reported)
- Artificial Analysis Intelligence Index **59** (high, launch v4.1.1) vs **41** (current v4.3.2) — conflict
- GPQA / SciCode / LiveCode / LMArena: **no verified public score found**

Coding:

- DeepSWE v1.1 "outperforms most larger frontier models" (Google chart, **no numeric**)
- Prior-run rows (Terminal-Bench 2.1 90.8%, Tau3 38.1%, SWE-Atlas 51.9%, GPQA 95.4%, AA Index 59) **not re-verified this pass**
- Cost per AA Intelligence Index task **$0.58** (high; AA)

Long context:

- 1M window; no model-specific MRCR reproduced — no verified retention value.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vals Finance Agent #2 (61.44%) and tick-up Tau3 45% support strong agentic use; capped by the absence of an independent terminal/tool index and no published GDPval number.
- **Reasoning: 88/100.** HLE-Verified 54.9% is frontier-level; no independent GPQA, and the AA Index conflict (59 vs 41) prevents a higher score.
- **Context window: 95/100.** 1,048,576 input (≥1M band) with a ~65K output cap; no recall-at-depth benchmark for this checkpoint.
- **Multimodal: 90/100.** Text + image + video + **audio** input (audio band 90–100) with text-only output; PDF ambiguous.
- **Coding: 88/100.** Best coding Flash yet and strong Vals standing, but the headline DeepSWE result has no numeric and no independent coding index was located.
- **Cost efficiency: 90/100.** $0.75/$3.75 intro with 90% cache discount is near the ~92 band; rates double in Jan 2027.
- **Overall Score: 90/100.** (88 + 88 + 95 + 90 + 88) / 5 = 89.8 → 90. Best fit: autonomous coding agents, terminal tasks and finance/document workflows at Flash prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Google 3.8 Flash blog, Artificial Analysis launch article + current model page, Vals Finance Agent v2, LLM Stats, Codersera). Independent rows are separated from Google self-reported chart claims (no numeric) and the AA index rebase is flagged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
