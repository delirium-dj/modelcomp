# Hy3 Preview — findings by MiniMax M3.1 Flash

- Source: Tencent (Hy3 Preview), `tencent/Hy3-preview`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 MoE (295B total / 21B active, 256K context) — the same architecture later shipped as Apache-2.0 GA, but previewed under a restrictive community licence with SWE-bench Verified 74.4% and Terminal-Bench 2.0 54.4%; superseded by the GA build in July 2026.
- **Provider / access:** Hugging Face `tencent/Hy3-preview` (Base + Instruct, **Tencent Hy Community License Agreement**), OpenRouter `tencent/hy3-preview` (single GMICloud bf16 endpoint, $0.18/$0.60, cache $0.06), other hosts (NanoGPT $0.066/$0.26, Zenmux $0.172/$0.572). **Not on OpenCode Zen.**
- **Release / knowledge:** weights open-sourced **2026-04-23** per the card's news entry (HF repo created 2026-04-13; models.dev release_date 2026-04-20; AA release date 2026-04-23) — "late April 2026" in Tencent's own wording. Knowledge cutoff not published.
- **IDs:** `tencent/Hy3-preview` (HF), `tencent/hy3-preview` (OpenRouter, models.dev).
- **Context window:** **256,000** tokens (256K per the card; OpenRouter lists 262,144).
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.18/M in, $0.60/M out, $0.06/M cached** (OpenRouter list price); AA measured $0.063/$0.21 on its own row. No Tencent first-party rate card exists — the model is open-weight and self-hosted.
- **Architecture:** MoE, 295B total / **21B active** (+3.8B MTP layer), 80 layers, 192 routed experts with top-8, GQA 64 heads / 8 KV, hidden 4096, vocab 120,832, BF16. Identical to the GA Hy3 checkpoint.

### Raw benchmarks found

> Tencent publishes its tables as image appendices; the preview card's own figures are used here, and the GA card's "Hy3 preview" comparison column is marked as such. **Provenance flag:** BenchLM's preview profile mixes in Artificial Analysis rows whose source URL points at the GA page (`/models/hy3`) — those are not preview measurements.

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (preview card) · Terminal-Bench 2.1: **58.0%** (GA card's preview column) · Terminal-Bench Hard: **34.1%** (AA preview page)
- MCP Atlas: **66.1%** (GA card, preview column) · Toolathlon: **32.1%** (GA card, preview column) · BrowseComp: **67.1%** (preview card) · WideSearch: **70.2%** (preview card) · DeepSearchQA: **82.8%** (GA card, preview column)
- Tau2-bench (telecom): **92.69%** (AA preview page) · ClawEval (pass^3): **55.0%** (preview card) · WildClawBench: **45.3%** (preview card) · Gert Labs: **36.91%** (BenchLM)
- GDPval-AA: no verified public score for the preview (the 1136 Elo / 35.8% rows on BenchLM's preview page point at the GA page)

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (preview card) / **86.67%** (AA preview page) · HLE: **30.0%** (preview card) / **27.76%** (AA) · IMO-AnswerBench: **84.3%** (preview card) · FrontierScience-Olympiad: **70.0%** (preview card)
- Artificial Analysis Intelligence Index: **22.74 (estimated)** (preview page) · AA-LCR: **64.67%** (AA) · CritPt: **4.57%** (AA) · IFBench: **63.13%** (AA)
- Omniscience Accuracy / Hallucination Rate: **27.93% / 87.40%** (AA)

Coding:

- SWE-bench Verified: **74.4%** (preview card) · SWE-bench Pro: **46.0%** (GA card, preview column) · DeepSWE: **0.9%** (GA card, preview column) · NL2Repo: **35.3%** (GA card, preview column) · SkillsBench: **29.1%** (GA card, preview column) · LiveCodeBench: only the **base** model figure (v6 34.86%) is published — not the instruct preview

Long context:

- No MRCR / RULER measurement published for the preview.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 54.4% / 2.1 58.0%, MCP Atlas 66.1%, τ²-telecom 92.7%, BrowseComp 67.1% and DeepSearchQA 82.8% are mid-band, capped by Toolathlon 32.1%, ClawEval 55.0% and Gert Labs 36.9%.
- **Reasoning: 70/100.** GPQA 86.7–87.2%, IMO-AnswerBench 84.3%, HLE 27.8–30.0% and an AA Intelligence Index of 22.7 are mid-to-high band, capped by CritPt 4.6% and an 87.4% hallucination rate.
- **Context window: 68/100.** 256,000 tokens is the 200K–500K tier and no retrieval measurement was published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 60/100.** SWE-bench Verified 74.4% is mid-band, but SWE-bench Pro 46.0%, DeepSWE 0.9%, NL2Repo 35.3% and SkillsBench 29.1% show a preview that was not yet post-trained for agentic coding.
- **Cost efficiency: 92/100.** $0.18/M in and $0.60/M out on the one OpenRouter endpoint is cheap, but the preview is **open-weight under a non-commercial-style community licence**, and no first-party rate card exists.
- **Overall Score: 55/100.** Mean of the five quality dims = (60 + 70 + 68 + 15 + 60) / 5 = 54.6 → **55**. Best fit: reference only — the same weights shipped two months later as Apache-2.0 GA Hy3 with much stronger coding numbers (SWE-bench Verified 78.0%, Terminal-Bench 2.1 71.7%).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Tencent Hy3-preview and Hy3 model cards, Artificial Analysis preview page, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4.md`, using the same headings.
