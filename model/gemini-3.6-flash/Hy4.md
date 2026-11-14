- Source: Google DeepMind/Gemini 3.6 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's 2026-07-21 "workhorse" model balancing frontier intelligence with inference efficiency, notable for large token-efficiency gains (up to 17% fewer output tokens, up to 65% on DeepSWE) and built-in Computer Use. A distinct version; 3.5 Flash, 3.7 Flash, 3.5 Flash-Lite and 3.5 Flash Cyber are separate releases.
- **Provider / access:** Google AI Studio, Android Studio, Gemini API, Gemini app, Google Antigravity, Gemini Enterprise. Customers include Figma, Harvey and JetBrains. Enhanced Frontier Safety protections against jailbreaks and CBRN/cyber misuse.
- **Release / knowledge:** 2026-07-21; **knowledge cutoff 2026-03** (some early users reported it may not fully reflect that date).
- **IDs:** `gemini-3.6-flash` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**; **64K** maximum output.
- **Modalities:** text and image in, text out (multimodal capability improved per the launch); built-in native **Computer Use** tool; code writing, knowledge work, financial-data analysis, code migration and creative-tool building. The derived `Nano Banana 2.1` image model (2026-10-07) is a separate SKU, not this model.
- **Pricing (as of 2026-11-14):** no per-token rate card in the retrieved page — described by Pichai as Google's lower-cost, faster mainstream line; no verified public price found. Token-efficiency gains (17% average, up to 65% on DeepSWE) lower effective cost.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (Computer Use): **83.0%**, up from 3.5 Flash's **78.4%**
- GDPval-AA v2 (knowledge work): **1421**, up from **1349**
- Efficiency case study (Wikipedia search → image download → Python processing): **1,695 tokens / 14 steps / 100% completion** vs the previous generation's **3,833 tokens / 18 steps / 85**
- Launch coverage (secondary) reports Terminal-Bench 2.1 **31% → 54%**, GDM-MRCR v2 **60.1% → 72.2%**, GDPval-AA v2 **642 → 1140**, SWE-Bench Pro **54.2% vs 49.6%** and OSWorld-Verified **74.0% vs 65%** — these are a different measurement set from the Baike official figures and are reported separately, never merged
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis intelligence index: reported **unchanged from Gemini 3.5 Flash** in third-party testing (no absolute number published in the retrieved page) — a documented weakness
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **49%**, up from 3.5 Flash's **37%**
- MLE-Bench (ML engineering): **63.9%**, up from **49.7%**
- Launch coverage figures above (Terminal-Bench 2.1 54%, SWE-Bench Pro 54.2%) labelled secondary
- Early user reports: weak front-end interface generation and spatial reasoning
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- GDM-MRCR v2 **60.1% → 72.2%** (secondary launch coverage) with a 1M window; the Baike page does not publish this figure — reported as a secondary measurement
- Independent MRCR / RULER / GraphWalks official figures: no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** 83.0% OSWorld-Verified with Computer Use as a built-in tool, GDPval-AA v2 1421, and a striking 14-step/1,695-token full-completion efficiency case; capped by no τ-bench/AutomationBench figure.
- **Reasoning: 85/100.** Improved knowledge work and MLE-Bench 63.9%; capped by an AA intelligence index unchanged from 3.5 Flash, weak spatial reasoning reports, and no GPQA/HLE numbers.
- **Context window: 92/100.** A verified 1M-token window with 64K output and a reported MRCR v2 jump to 72.2%; capped by the MRCR figure being secondary and no vendor-verified retrieval benchmark.
- **Multimodal: 86/100.** Improved multimodal capability and built-in Computer Use (vision-driven UI operation); capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 87/100.** DeepSWE v1.1 49% (from 37%) and MLE-Bench 63.9% (from 49.7%) with up to 65% fewer DeepSWE tokens; capped by weak front-end generation reports and no SWE-bench Verified figure.
- **Cost efficiency: 93/100.** Up to 17% fewer output tokens overall and up to 65% on DeepSWE, a 2x-better token/step efficiency case, and Google's low-cost Flash positioning; capped by no public rate card. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 89, 85, 92, 86, 87 = 87.8 → 88. Best fit: high-volume agentic and computer-use workflows where token efficiency drives the bill; avoid front-end/spatial-reasoning-heavy work.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini3.6Flash article (official launch benchmark table with before/after deltas, 1M/64K context, knowledge cutoff, Computer Use, token-efficiency case study, safety). Secondary launch coverage figures (Terminal-Bench 2.1, GDM-MRCR v2, SWE-Bench Pro) are explicitly labelled secondary and kept separate from the official Baike numbers rather than merged. The derived Nano Banana 2.1 image model is treated as a separate SKU. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini3.6Flash — 百度百科 (official benchmark deltas, 1M context, token efficiency, safety)](https://baike.baidu.com/item/Gemini3.6Flash/68332883)
