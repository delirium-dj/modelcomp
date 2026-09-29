# GPT-5.4 — findings by Pixel Canary

- Source: OpenAI (`openai/gpt-5.4`), OpenCode catalog `opencode/gpt-5.4`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (the March 2026 mid-cycle OpenAI release between GPT-5.2 and the GPT-5.6/GPT-6 line; **no OpenCode Zen Free ID**, paid tier only, with a separate `gpt-5.4-pro` tier at $30/$180)
- **Short description:** OpenAI's first 1M+ window in this branch — a 1.05M-context, PDF-capable reasoning model whose profile is broad rather than peak: Terminal-Bench 2.0 75.1%, OSWorld-Verified 75%, MMMU-Pro 81.2%, GPQA Diamond 92.8%, but a GDPval-AA Elo (1307) that its own open-weight competitors now beat by 300+ points.
- **Provider / access:** OpenAI API (`openai/gpt-5.4`) and the OpenCode catalog at the same rate ($2.50/$15.00), plus a `gpt-5.4-pro` tier ($30/$180 per 1M); OpenAI-compatible Responses/Chat-Completions with tool calling, structured output, image and PDF input.
- **Release / knowledge:** **2026-03-05** (models.dev `release_date` for both the `openai` and `opencode` entries); knowledge cutoff not published by OpenAI for this ID.
- **IDs:** `opencode/gpt-5.4`, `openai/gpt-5.4`, `openai/gpt-5.4-pro`; BenchLM profiles the base model as `gpt-5-4`.
- **Context window:** **1,050,000 input / 128,000 max output** — identical in the `openai` and `opencode` listings (models.dev, verified); BenchLM lists "1.05M". This folder's `meta.json` says "128K total / Text in-out", which is stale placeholder metadata (the same file also carries the placeholder short description "Gpt 5.4 model evaluation entry").
- **Modalities:** Text, image and **PDF** in; text out. Reasoning: yes (graded effort). Tool calling and structured output: supported (`tool_call` flagged in models.dev). No audio or video input.
- **Pricing (as of 2026-09-29):** **$2.50 / 1M input, $15.00 / 1M output, $0.25 cache reads**; `gpt-5.4-pro` $30.00 / $180.00. Blended 4:1 ≈ **$5.00 / 1M**. No free tier for this ID.
- **Architecture:** proprietary, weights unpublished, parameter count undisclosed.

### Raw benchmarks found

BenchLM profile `gpt-5-4` (updated 2026-09-28) — composite **68.42/100, rank #21 / 512**.

Agentic / tool use:

- Terminal-Bench 2.0: **75.1%**; OSWorld-Verified: **75.0%**; MCP Atlas: **70.6%**; Claw-Eval: **60.3%**
- GDPval-AA: **1307 Elo** (36.6% normalized) — below MiMo-V2.6-Pro (1673), Grok 4.6 (1643–1663), Qwen3.8 Flash (1648) and DeepSeek V4.1-Flash (1632)
- APEX-Agents-AA: 33.3%; ResearchClawBench: 15.3%
- τ²/τ³-bench, BFCL v4, Toolathlon, Terminal-Bench 4.x: no verified public score found for this exact ID

Coding:

- LiveCodeBench Pro: **87.5%**; SWE-bench Pro: **57.7%**; Vibe Code Bench: **67.42%**; AA Coding Index: **71.0%**
- SWE-bench Verified / DeepSWE / Terminal-Bench 2.1 / SciCode: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA & GPQA Diamond: **92.8%** (AA-GPQA Diamond 92.0%); HLE **52.1%** with tools (39.8% without; AA-HLE 43.7%)
- Artificial Analysis Intelligence Index: **39.0** (Grok 4.6 44.3, MiMo-V2.6-Pro 46.3, Qwen3.8 Flash 39.8)
- CritPt: 23.4%; FrontierMath v2 Tiers 1–3 **47.6%**, Tier 4 **27.1%**; AA-IFBench **73.9%**
- AA-Omniscience: Accuracy **50.8%**, Hallucination Rate **91.7%**, Omniscience Index 5.8 — it answers nearly everything, wrongly half the time

Long context:

- AA-LCR: **82.0%**; MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

Multimodal:

- MMMU-Pro: **81.2%** (82.1% with Python; AA-MMMU-Pro 78.4%); ScreenSpot Pro: **85.4%**; CharXiv: **82.8%**; SimpleVQA: 61.1%
- Design Arena (website Elo): **1228** (MiMo-V2.6-Pro 1325, Grok 4.6 1299, Qwen3.7 Plus 1279)
- Video-MME / MLVU / OmniDocBench / audio: no rows — video and audio are not accepted inputs

- **Tool use: 70/100.** Broad, competent tool work — Terminal-Bench 2.0 75.1%, OSWorld-Verified 75.0%, MCP Atlas 70.6%, Claw-Eval 60.3% — but it is no longer the agentic leader: GDPval-AA sits at 1307 Elo (36.6%), roughly 340 Elo behind MiMo-V2.6-Pro's 1673 and 300 behind Grok 4.6, and APEX-Agents-AA 33.3% / ResearchClawBench 15.3% show long-horizon autonomy is mid-pack.
- **Reasoning: 72/100.** GPQA Diamond 92.8% and HLE 52.1% with tools are near-frontier, and CritPt 23.4% / FrontierMath Tier 4 27.1% are respectable; capped because the AA Intelligence Index is only 39.0 (below MiMo-V2.6-Pro's 46.3 and Grok 4.6's 44.3) and the AA-Omniscience profile is the worst honesty signal in this comparison group — 50.8% accuracy against a **91.7% hallucination rate**.
- **Context window: 84/100.** 1,050,000 input tokens with 128,000 output, verified identical across the OpenAI and OpenCode listings, and AA-LCR 82.0% is the strongest long-context-reasoning number among the paid models in this set; capped below 90 because no MRCRv2/RULER/GraphWalks retrieval-depth curve is published and the 128K output ceiling is a third of DeepSeek V4.1-Flash's 384K.
- **Multimodal: 74/100.** Text + image + PDF input is the widest paid input surface here besides video-capable models: MMMU-Pro 81.2% (82.1% with Python), ScreenSpot Pro 85.4% and CharXiv 82.8% are strong GUI/chart/document results; capped because SimpleVQA 61.1% is weak, Design Arena 1228 trails three cheaper models, there is no video or audio path, and output is text-only.
- **Coding: 76/100.** LiveCodeBench Pro 87.5% is near-frontier and Vibe Code Bench 67.42% plus AA Coding Index 71.0% are solid, but SWE-bench Pro 57.7% is the same tier as Qwen3.7 Plus at 1/6 the price, and there is no published SWE-bench Verified, DeepSWE or Terminal-Bench 2.1 row to place it against the current agentic-coding leaders.
- **Cost efficiency: 58/100.** $2.50 / $15.00 per 1M with $0.25 cache reads (blended ≈ $5.00) is ~23× Qwen3.8 Flash and ~35× DeepSeek V4.1-Flash for equal or lower agentic output, there is no OpenCode Zen Free ID and no batch/off-peak discount for this ID; only the fact that it is 5× cheaper than the `gpt-5.4-pro` tier and than the Opus/GPT-6 class keeps it out of the 40s.
- **Overall Score: 75.2/100.** (70 + 72 + 84 + 74 + 76) / 5 = 75.2 — a well-rounded 1M-context paid default for document-and-GUI agent work, chosen for the PDF path and ecosystem rather than for price or peak agentic performance.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gpt-5-4` refreshed 2026-09-28, models.dev provider/pricing index for `openai/gpt-5.4`, `openai/gpt-5.4-pro` and `opencode/gpt-5.4`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

