# Gemini 3 Pro — findings by Grok 4.6

- Source: Google DeepMind (`gemini-3-pro-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google’s November 2025 sparse-MoE natively multimodal reasoning model (text/image/video/audio in, 1M context). Successor line is Gemini 3.1 Pro; the `gemini-3-pro-preview` API was **shut down 2026-03-09**. Optional Deep Think is a separate inference mode, not this default endpoint.
- **Provider / access:** Gemini API `gemini-3-pro-preview` (deprecated). Vertex AI / AI Studio historically. OpenCode Zen listed `opencode/gemini-3-pro` (`https://opencode.ai/zen/v1/models/gemini-3-pro`, `@ai-sdk/google`) with the same March 9, 2026 deprecation. No verified $0 Zen Free ID. Current Google docs tell callers to migrate to `gemini-3.1-pro-preview`.
- **Release / knowledge:** Released November 2025; model card last updated May 2026; knowledge cutoff January 2025 (Gemini 3 family developer guide).
- **IDs:** `gemini-3-pro-preview`; OpenCode `opencode/gemini-3-pro`. No Free ID. Do not confuse with `gemini-3-pro-image-preview` (Nano Banana image-out) or Gemini 3.1 Pro.
- **Context window:** 1,048,576 input / 65,536 output (Gemini API model page).
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking; function calling; structured outputs; code execution; file search; search grounding; caching. Computer use **not** supported on the preview card. Image generation not on this ID.
- **Pricing (as of last public 3 Pro list):** $2 / $12 per 1M in/out for prompts ≤200k; $4 / $18 above 200k; cache $0.20 / $0.40. Same table on historical OpenCode Zen docs. Paid; API free tier not available for this Pro id.
- **Architecture:** Proprietary sparse MoE transformer; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google Gemini 3 launch blog) vs **56.9%** Terminus-2 harness (DeepMind 3.1 Pro comparison table, Gemini 3 Pro Thinking High column)
- Terminal-Bench Hard: **41.7%** (Artificial Analysis via Frontierlog); AA article: second-highest at launch
- Terminal-Bench 2.1 / 4.0: **no verified public score found** for this exact ID
- Tau2-Bench: **87.1** (AA via Frontierlog); τ2 Retail **85.3%** (DeepMind comparison table). AA: second on Tau2-Bench Telecom at launch
- Tau3-Banking: **no verified public score found**
- GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** vendor (launch blog / DeepMind tables); **90.8%** AA independent (Frontierlog)
- HLE: **37.5%** no tools (vendor); **45.8%** search+code (DeepMind table); **37.2%** AA. Deep Think (optional): **41.0%** no tools — not scored as the default model
- AA-LCR / LCR: **70.7%** (AA via Frontierlog)
- CritPt: **no verified public score found** for this ID
- Artificial Analysis Intelligence Index: launch (Nov 2025) **leader**, +3 vs GPT-5.1 on the then-current Index. Later Index versions report **~28** (v4.3.2 high) / **~41** (v4.1.1) — composition changed (TB4.0, GDPval, etc.); use raw evals, not the deflated composite, for scoring
- AA-Omniscience: launch **first** on Index and Accuracy; Hallucination Rate **88%** (AA article)
- ARC-AGI-2 (ARC Prize Verified): **31.1%** (DeepMind table)
- MathArena Apex: **23.4%** (launch blog)
- MMLU-Pro: **89.8%** (AA via Frontierlog)

Coding:

- SWE-bench Verified: **76.2%** single-attempt (launch blog / DeepMind table)
- SWE-bench Pro: **43.3%** (DeepMind table)
- LiveCodeBench: **91.7%** (AA via Frontierlog). LiveCodeBench Pro Elo **2439** (DeepMind table)
- SciCode: **56%** vendor table; **56.1%** AA (Frontierlog / AA article “56%”)
- DeepSWE / Vibe Code Bench: **no verified public score found**
- WebDev Arena: **1487** Elo (launch blog)
- LMArena: **1501** Elo (launch blog)

Long context:

- Native **1M**. MRCR v2 (8-needle): **77.0%** at 128k average; **26.3%** at 1M pointwise (DeepMind table) — far from ≥98% at 512K+. AA-LCR **70.7%**.

Multimodal extras: MMMU-Pro **81.0%** (DeepMind; AA said highest at launch); Video-MMMU **87.6%** (AI/TLDR recap of vendor set).

### Normalized scores (1–100)

- **Tool use: 74/100.** Tau2 ~85–87% is strong; TB 2.0 54–57% sits in the mid TB band (45–60% → 50–70) with TB Hard 41.7 second at launch. Caps: no TB2.1 ~88%+ / Tau3 / GDPval / Claw; computer use unsupported on the preview card.
- **Reasoning: 87/100.** GPQA Diamond ~91–92% is in the 90%+ frontier band; HLE 37.5% is just under 40%+. Caps: AA-LCR 70.7 vs 95%+; Omniscience hallucination **88%**; later Index versions no longer treat 3 Pro as #1.
- **Context window: 95/100.** Documented 1,048,576 / 65,536 (≥1M tier 95–100). Floor of the band: MRCR v2 **26.3%** at 1M and LCR 70.7% are not ≥98% retrieval at 512K+; max out 64K noted.
- **Multimodal: 93/100.** Native image + video + audio in (90–100 band), MMMU-Pro 81 / Video-MMMU 87.6. Caps: text-only output on this ID; no computer use.
- **Coding: 88/100.** SWE-Verified 76.2, SciCode ~56 (55%+ frontier), LiveCodeBench 91.7. Caps: SWE-Pro 43.3; no DeepSWE; TB 2.0 only mid-50s.
- **Cost efficiency: 64/100.** Evaluated on ≤200k list **$2/$12** (between ~$1.25/$4.25 ≈88 and ~$3/$15 ≈60, output-heavy). Caps: $4/$18 long-context surcharge; among the most expensive Index runs at launch (AA); not $0.
- **Overall Score: 87/100.** Mean of 74, 87, 95, 93, 88 = 87.4 → 87 half-up. Best-fit historically: omni 1M reasoning/coding Pro; **do not newly provision** — shut down 2026-03-09; migrate to Gemini 3.1 Pro.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (Gemini API model page, DeepMind model card + 3.1 Pro comparison table, Google launch blog, Artificial Analysis Nov 2025 article, Frontierlog AA extracts, OpenCode Zen deprecation list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
