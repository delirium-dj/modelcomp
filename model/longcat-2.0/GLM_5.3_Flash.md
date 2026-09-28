# LongCat-2.0 — findings by GLM 5.3 Flash

- Source: Meituan (`meituan-longcat/LongCat-2.0`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's frontier-scale open MoE LLM — 1.6 trillion total parameters (~48B activated per token) with LongCat Sparse Attention (LSA) and N-gram Embedding, trained on AI ASIC superpods across 35T+ tokens with hundreds of billions of tokens of 1M-context data. Built for long-horizon coding and agentic work, integrated with Claude Code, OpenClaw, and Hermes. Distinct from the tracked `longcat_2.5_preview` (Zen stealth free tier).
- **Provider / access:** HuggingFace/ModelScope weights (`meituan-longcat/LongCat-2.0`), chat at longcat.ai, GPU deployment via SGLang cookbook and NPU via SGLang-FluentLLM. No Zen Free ID was verified during research (the Zen free LongCat listing is `longcat-2.5-preview-free`, a different entry).
- **Release / knowledge:** Released July 2026 (HF updated Jul 8, 2026; benchmark charts dated 2026-06-29); no verified knowledge cutoff found.
- **IDs:** `meituan-longcat/LongCat-2.0` (no Free ID exists on Zen for this model)
- **Context window:** trained on 1M-context data with LongCat Sparse Attention; no explicit deployment context cap published beyond the 1M-context training (verified via HF model card introduction).
- **Modalities:** Text in/out only; reasoning yes (thinking mode on/off via chat template, `save_reasoning_content` option); tool calls yes (function-calling chat template, `arguments` as dict); no image/audio/video input.
- **Pricing (as of 2026-09-28):** no verified public pricing found (paid-only; a third-party aggregator lists `lc/LongCat-2.0` behind a 10M one-time KYC credit, unverified).
- **Architecture:** Sparse MoE, 1.6T total / ~48B activated parameters (HF safetensors lists 1.8T total incl. 135B N-gram Embedding); LongCat Sparse Attention (Streaming-aware + Cross-Layer + Hierarchical Indexing); 3-step Multi-Token Prediction; MIT license (open weights); trained on AI ASIC superpods.

### Raw benchmarks found

> Verified via the official HF model card for `meituan-longcat/LongCat-2.0` (vendor in-house unified harness unless marked `*` = cited from the compared model's official report) and the HF eval-results hub.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (HF model card + harborframework/terminal-bench-2.1 hub; vs Gemini 3.1 Pro 70.7%, GPT-5.5 73.8%, Opus 4.7 71.7%, Opus 4.8 78.9%)
- SWE-bench Pro: **59.5%** (HF model card; vs Gemini 3.1 Pro 54.2%, GPT-5.5 58.6%, Opus 4.7 64.3%, Opus 4.8 69.2%)
- SWE-bench Multilingual: **77.3%** (HF model card; vs Opus 4.8 84.8%)
- FORTE: **73.2%** (HF model card, AGI-Eval harness; vs Gemini 3.1 Pro 70.3%, GPT-5.5 77.8%)
- BrowseComp: **79.9%** (HF model card; vs Gemini 3.1 Pro 85.9%, GPT-5.5 84.4%)
- RWSearch: **78.8%** (HF model card, AGI-Eval harness; vs GPT-5.5 85.3%)
- GDPval-AA: **no verified public score found**
- Tau2-Bench / Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (HF model card; vs Gemini 3.1 Pro 94.3%, GPT-5.5 93.6%, Opus 4.8 92.4%)
- IMO-AnswerBench: **81.8%** (HF model card; vs Gemini 3.1 Pro 90.0%, GPT-5.5 79.5%)
- IFEval: **90.0%** (HF model card; vs Gemini 3.1 Pro 96.1%)
- Writing Bench: **83.8%** (HF model card)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 2.1: **70.8%** (see above — primary agentic coding evidence)
- SWE-bench Pro: **59.5%** (see above)
- SWE-bench Multilingual: **77.3%** (see above)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval reported (1M-context training advertised via LSA, but no MRCR/RULER/GraphWalks retrieval value was found for this model)

### Normalized scores (1–100)

- **Tool use: 74/100.** FORTE 73.2%, BrowseComp 79.9%, and RWSearch 78.8% show strong agentic/search execution near the Opus 4.x cohort, with Terminal-Bench 2.1 70.8% in the upper-mid band; capped by the missing GDPval Elo and TB2.1 trailing the ~88%+ frontier reference.
- **Reasoning: 84/100.** GPQA Diamond 88.9% sits just under the 90%+ frontier reference and IMO-AnswerBench 81.8% beats GPT-5.5's 79.5%; capped by no verified HLE/LCR evidence and IFEval 90.0% trailing Gemini 3.1 Pro's 96.1%.
- **Context window: 95/100.** 1M-context training with dedicated sparse attention maps to the ≥1M tier (95–100), capped at the band floor because no ≥98%-retrieval measurement at 512K+ was published.
- **Multimodal: 15/100.** Text-only in/out (Text Generation pipeline, no vision or audio encoders) — scored at the text-only floor per methodology.
- **Coding: 74/100.** Terminal-Bench 2.1 70.8%, SWE-bench Pro 59.5%, and SWE-bench Multilingual 77.3% land in the upper-mid band — competitive with Opus 4.7 but trailing Opus 4.8; no verified LiveCodeBench/SciCode caps it under the 90+ band.
- **Cost efficiency: 50/100.** Provisional midpoint — paid-only with no verified public pricing found (Cost never counts toward Overall, so the quality dims stand; provisional-cost phrasing has repo precedent).
- **Overall Score: 68.4/100.** Mean of the five non-cost dims (74 + 84 + 95 + 15 + 74) / 5 = 68.4 — best fit as an open-weights long-horizon coding/agent platform for self-hosting; text-only input makes it a poor pick for multimodal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (official HF model card for meituan-longcat/LongCat-2.0 with eval-results hub, HF org page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
