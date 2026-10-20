# Hy3 — findings by MiniMax M3.1 Flash

- Source: Tencent (Hy3), `tencent/Hy3`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's July 2026 GA open-weight (Apache 2.0) MoE — 295B total / 21B active with 192 experts and MTP speculative decoding, 256K context, and an unusually low hallucination rate (5.4% in Tencent's own eval) alongside SWE-bench Verified 78.0% and Terminal-Bench 2.1 71.7% at roughly $0.08/$0.33 per 1M.
- **Provider / access:** Hugging Face `tencent/Hy3` (BF16, plus `tencent/Hy3-FP8`), OpenRouter `tencent/hy3` (snapshot `20260706`), Tencent TokenHub, Novita, GMICloud, Vercel, NanoGPT, Phala, AtlasCloud. **ID note:** `tencent/hy3` (GA) is the current, Apache-licensed checkpoint; `tencent/hy3-preview` (April 2026, Tencent Hy Community License) is superseded — it is a different licence and a different release, not a tier of the same id. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-07-02** (HF repo and GitHub created) vs **2026-07-06** (models.dev, OpenRouter, AA, BenchLM) — conflicting dates, both cited. Knowledge cutoff not published.
- **IDs:** `tencent/Hy3` (HF), `tencent/hy3` (OpenRouter, models.dev), `tencent/hy3-preview` (superseded preview).
- **Context window:** **256,000–256K** (model card, TokenHub, AA) vs **262,144** (OpenRouter, HF router, Vercel) — conflict noted. Output limit varies 64,000–128,000 by host; the repo's "32K out" is not supported by any source.
- **Modalities:** text in / text out only; reasoning always available; MTP speculative decoding (3.8B MTP layer).
- **Pricing (as of 2026-10-20):** **$0.0825/M in, $0.33/M out** off-peak (Tencent fp8; 00:00–16:00 UTC), $0.132/$0.528 in peak hours; cache $0.0206/M; $0.14/$0.58 (HF router, Novita, GMICloud), $0.15/$0.64 (Phala), $0.20/$0.80 (AtlasCloud). Tencent's TokenHub lists `$0` with a subscription plan. Self-host $0 (Apache 2.0).
- **Architecture:** MoE, 295B total (298,786,155,776 checkpoint tensors including the MTP layer) / **21B active**, 80 layers, 192 routed experts with top-8, hidden 4096, GQA 64 heads / 8 KV, vocab 120,832.

### Raw benchmarks found

> Tencent publishes its benchmark tables as **image appendices** (the GA table lists preview→GA deltas); Artificial Analysis supplies the independent rows.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (Tencent, GA) vs **64.4%** (AA) vs 58.0% (preview) — conflict flagged
- MCP Atlas (public): **79.1%** (Tencent) · Toolathlon: **48.5%** (Tencent) · ClawEval (pass^3): **68.5%** (Tencent) · DeepSearchQA: **91.0%** · BrowseComp: **84.2%** · WideSearch: **76.4%** (Tencent)
- GDPval-AA: **1066.59** (AA) · AutomationBench partial: **18.4%** (AA) · Apex-Agent (pass@1): **25.6%** (Tencent) · SkillsBench: **55.3%** (Tencent)
- Tencent internal blind eval (270 experts, real work tasks): Hy3 **2.67/4** vs GLM-5.1 **2.51/4**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Tencent) vs **89.70%** (AA) · HLE: **53.2%** with tools / **37.0%** without (Tencent) vs **33.46%** (AA) · AA-LCR: **73.4%** (Tencent) / **79.0%** (AA) · CritPt: **4.9%** (AA)
- Artificial Analysis Intelligence Index: **25.3** (not estimated) · Omniscience Accuracy / Hallucination Rate: **32.0% / 74.1%** (AA)
- IMOAnswerBench: **90.0%** (Tencent) · USAMO 2026: **72.0%** (Tencent) · MathArena Apex: **38.7%** (Tencent) · PHYBench: **77.4%** (Tencent)
- Tencent's own quality claims: hallucination rate 12.5% → **5.4%**, commonsense error 25.4% → 12.7%, multi-turn issue rate 17.4% → 7.9% versus the preview

Coding:

- SWE-bench Verified: **78.0%** (Tencent) vs **74.4%** (preview) · SWE-bench Pro: **57.9%** (Tencent) · SWE-bench Multilingual: **75.8%** · DeepSWE: **28.0%** · NL2Repo: **45.6%** (Tencent)
- No LiveCodeBench figure is published for the GA model (the 34.86% LiveCodeBench-v6 number in the table is the **base** model, not the instruct build)

Long context:

- No MRCR / RULER measurement published for Hy3 despite the 256K window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 71.7% (Tencent) / 64.4% (AA), MCP Atlas 79.1%, ClawEval 68.5%, DeepSearchQA 91.0% and BrowseComp 84.2% are strong mid-to-high band agentic numbers, capped by Toolathlon 48.5%, GDPval-AA 1067 and AutomationBench 18.4%.
- **Reasoning: 80/100.** GPQA 89.7–90.4%, HLE 33.5–53.2%, IMOAnswerBench 90.0%, USAMO 72.0%, AA-LCR 79.0% and an AA Intelligence Index of 25.3 are strong; the cap is the absence of independent confirmation and a 74.1% AA hallucination rate.
- **Context window: 68/100.** 256K is the 200K–500K tier and no retrieval measurement was published, so the tier midpoint applies.
- **Multimodal: 15/100.** Text-in/text-out only — Tencent's vision models are separate.
- **Coding: 74/100.** SWE-bench Verified 78.0%, SWE-bench Pro 57.9%, SWE Multilingual 75.8% and Terminal-Bench 2.1 71.7% are solid mid-to-high band results, held back by DeepSWE 28.0% and the missing LiveCodeBench for the instruct build.
- **Cost efficiency: 98/100.** $0.0825/M in and $0.33/M out off-peak (cache $0.02/M) is among the cheapest frontier-adjacent routes anywhere, and Apache 2.0 weights are free to self-host.
- **Overall Score: 61/100.** Mean of the five quality dims = (70 + 80 + 68 + 15 + 74) / 5 = 61.4 → **61**. Best fit: cheap self-hosted agentic coding and research in the open-weight class — but every headline number is vendor-published, so verify before committing.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Tencent Hy3 model card and GitHub repo, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4.md`, using the same headings.
