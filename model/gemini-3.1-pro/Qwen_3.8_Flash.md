# Gemini 3.1 Pro — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.1 Pro (`google/gemini-3.1-pro`)
- Date: 2026-10-02 (UTC); deep second pass 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro multimodal reasoning model with a very large context window, offered as a preview during staged rollout; strong vision/knowledge but uneven agentic numbers in the preview harness.
- **Provider / access:** Google AI Studio / Vertex AI / Gemini API (`gemini-3.1-pro`, tracked as `gemini-3-1-pro-preview` on Artificial Analysis; API id `gemini-3.1-pro-preview`, released **February 19, 2026**, still preview). Free tier available plus paid *(second pass: Google's rate card marks the free tier "Not available" for this preview id — see Pricing below)*.
- **Release / knowledge:** 2026 (Gemini 3.1 family preview); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.1-pro`.
- **Context window:** 1,048,576 in / 65,536 max out. *(Second pass 2026-10-09: the curated `meta.json` says "2M / 64K out" and the first pass repeated it; Google's own model page, Artificial Analysis, BenchLM and launch coverage all state **1M**, so the 2M figure is recorded as a curation error — see the second-pass section.)*
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning on; tool calls (function calling, structured outputs, code execution, caching, URL context, search grounding all supported); JSON mode; image/audio generation and Live API **not** supported. Full multimodal input; no non-text output.
- **Pricing (verified 2026-10-09 against Google's official rate card):** Standard **$2.00 in / $12.00 out per 1M** for prompts ≤ 200K, rising to **$4.00 / $18.00** for prompts > 200K; context caching $0.20 ($0.40 > 200K) plus $4.50/M-token-hour storage; Batch and Flex at **$1.00 / $6.00** (≤200K) and $2.00 / $9.00 (>200K). Free tier: **"Not available"** in Google's own table for `gemini-3.1-pro-preview` (conflicts with the curated `freeTierNote`; AI Studio *experiment* access ≠ a paid-API free quota). Separate endpoint `gemini-3.1-pro-preview-customtools`, priced the same.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (47 of 618 rows), citing the Google Gemini 3.1 Pro post, Meta Muse Spark comparison charts, Artificial Analysis, Vals AI, Epoch AI and Claw-Eval leaderboards (fetched 2026-10-02). Preview-harness agentic numbers are volatile.
>
> **Second pass 2026-10-09:** re-pulled BenchLM (now **47 of 625** tracks, page updated October 9, 2026) plus Artificial Analysis' live model page and Google's official docs. **Every pass-1 benchmark row reproduced unchanged** (τ² 95.6, Claw-Eval 57.8, GDPval-AA 904, AA Agentic Index 10.3, GPQA 94.3, HLE 45.4/47.0, ARC-AGI-2 77.1, ARC-AGI-3 0.4, LiveCodeBench 82.9/88.5, SWE-bench 78.8, SciCode 58.7, AA Coding Index 68.8, MMMU-Pro 83.9/82.4, CharXiv 80.2, Index 29.7→30). Only the *derived* numbers (GDPval normalized 13.8→14.7) and the two structural facts (window, price) moved.

Agent / tool use:

- τ²-bench: **95.6%** (Meta chart) — standout; Terminal-Bench 2.1 (Vals) **70.8%**
- Claw-Eval: **57.8%**; DeepSearchQA 69.7%; Gert Labs 56.87%
- GDPval-AA: **904** (AA; normalized 13.8%) — weak in preview; AA Agentic Index **10.3%**; APEX-Agents-AA 32.0%
- ResearchClawBench 13.3%
- *(2026-10-09)* AA-Briefcase-class agentic work remains unscored for this id on BenchLM; **Claw-Eval 57.8% / Gert Labs 56.87%** unchanged; no new agentic row moved the band

Reasoning / knowledge:

- GPQA-Diamond: **94.3%** (Vals 95.5%, AA 94.1%); MMLU-Pro (Vals) 91.0%
- HLE (no tools / AA): **45.4% / 47.0%**; AA-LCR 82.0%
- ARC-AGI-2: **77.1%** (Google); ARC-AGI-3 **0.4%** (near zero)
- CritPt: **17.7%**; Artificial Analysis Intelligence Index **29.7**
- FrontierMath v2 Tiers1-3 / Tier-4: **36.9% / 16.7%** (Epoch); AA-Omniscience accuracy 54.9 / halluc 50.9
- *(2026-10-09)* AA Intelligence Index **30** (#95 of 226, class median 26) · AA-Omniscience Index **31.9** · **AA-IFBench 77.1%** · **HealthBench Hard 20.6%** · **MedXpertQA (Text) 71.5%** · MMLU-Pro (Vals) 91.0%

Coding:

- LiveCodeBench Pro: **82.9%**; LiveCodeBench (Vals) **88.5%**; SWE-bench (Vals) **78.8%**
- AA-SciCode: **58.7%**; AA Coding Index **68.8%**; React Native Evals 78.9%
- Vibe Code Bench 32.03%; PostTrainBench v1.1 22.0%
- *(2026-10-09)* unchanged; **Design Arena Website 1259 Elo** (OpenRouter) added as a weak front-end-design proxy

Multimodal / long context:

- MMMU-Pro 83.9, CharXiv 80.2, ScreenSpot Pro 84.4, MedXpertQA (MM) 81.3, ERQA 69.4, SimpleVQA 72.4; AA Global-MMLU-Lite 93.2; 2M window (no ≥98% MRCR reported).
- *(2026-10-09)* AA-MMMU-Pro **82.4%**, **ZeroBench 29.0%** (visual hallucination-adjacent); **window corrected to 1,048,576 in / 65,536 out** (Google model page + AA + BenchLM all say 1M); still **no MRCR/≥98% long-context retrieval figure** for this id.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ²-bench 95.6% and Claw-Eval 57.8% are solid, but the preview GDPval-AA (904) and AA Agentic Index (10.3%) collapse — agentic reliability is unproven in this harness, capping the dimension well below the Pro label.
- **Reasoning: 82/100.** GPQA-Diamond 94.3%, MMLU-Pro 91% and ARC-AGI-2 77.1% are frontier; pulled down by ARC-AGI-3 0.4%, a low Intelligence Index (29.7), CritPt 17.7% and only mid FrontierMath (36.9%/16.7%).
- **Context window: 93/100.** *(re-scored 2026-10-09 from 95, which assumed a 2M window.)* The verified limit is **1,048,576 input / 65,536 output** — still the top consumer tier, but it is the 1M class, not 2M, and there is no ≥98% long-context retrieval figure (only AA-LCR 82.0%). The sub-1M-output ceiling and the doubled >200K price step keep it below 95.
- **Multimodal: 92/100.** Full text/image/audio/video/PDF input with strong vision scores (MMMU-Pro 83.9, CharXiv 80.2, MedXpertQA MM 81.3); top of the multimodal-input band since output remains text-only.
- **Coding: 85/100.** LiveCodeBench Pro 82.9 / Vals 88.5 and SWE-bench 78.8 are strong; AA Coding Index 68.8 (just under the 70 frontier ref), SciCode 58.7 and Vibe 32% hold it mid-80s.
- **Cost efficiency: 70/100.** *(re-scored 2026-10-09 from 85, which was an unverified "Flash-class pricing" guess.)* The real rate card is **$2.00 in / $12.00 out per 1M** (≤200K), **$4.00 / $18.00** above 200K, cache $0.20/$0.40, Batch/Flex at 50%. AA puts it at **$1.30 per Intelligence-Index task (#64 of 226)** and calls the output price "somewhat expensive" (class median $10.00/M); blended 7:2:1 rate $1.74/M. That sits near this registry's flagship band (~$3/$15 → 60) rather than the value band, and the long-context use case that sells the model pays the 2× tier. Batch/Flex and the 90% cache discount are what keep it at 70. Free tier is **not** offered on the preview id, removing the pass-1 "free tier" credit. Cost is excluded from Overall.
- **Overall Score: 85/100.** *(re-derived 2026-10-09: Tool 72 + Reasoning 82 + Context 93 + Multimodal 92 + Coding 85 = 424 / 5 = 84.8 → 85 — the 2-point Context correction was absorbed by rounding, so the Overall is unchanged from the first pass. Best fit: multimodal + 1M-context document/video analysis where vision and long input dominate; re-verify agentic numbers after the preview leaves staged rollout, since tool-use is the weak spot today.)

---

## Second-pass update — 2026-10-09 (UTC)

**Sources consulted (≥3 independent):** Google official model page — https://ai.google.dev/gemini-api/docs/models/gemini-3-1-pro-preview (token limits, capability matrix, `…-customtools` endpoint) · Google Developer API pricing — https://ai.google.dev/gemini-api/docs/pricing (§"Gemini 3.1 Pro Preview": Standard / Batch / Flex tables) · Google launch post — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/ (Feb 19, 2026; ARC-AGI-2 77.1% verified; "releasing 3.1 Pro in preview … before we make it generally available soon") · Artificial Analysis — https://artificialanalysis.ai/models/gemini-3-1-pro-preview (Index 30 #95/226, 115.3 tok/s #38/226, $2.00/$12.00, 90% cache discount, **$1.30 per Index task #64/226**, verbosity 67 M #48/226, TTFT 25.66 s, **context window 1M**, text/image/speech/video in → text out, released February 19, 2026, 3 API providers) · BenchLM — https://benchlm.ai/models/gemini-3-1-pro (**Overall 64.77/100, #35 of 889**, 47 of 625 tracks, "partial coverage … so the overall score is conservative", Context Window **1M**, updated October 9, 2026) · llm-stats launch guide — https://llm-stats.com/blog/research/gemini-3.1-pro-launch ("1M-token context window") · Google Cloud pricing — https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing · Vals AI / Epoch / ARC / OpenRouter / Cursor rows as attributed on the BenchLM page.

**Conflicts found and how they were resolved:**

1. **2M vs 1M context.** Curated `meta.json` (`"contextWindow": "2M / 64K out"`) and my 2026-10-02 report said **2,000,000**. Google's own model page states **input 1,048,576 / output 65,536**, and Artificial Analysis, BenchLM and llm-stats independently report **1M**. Scored on the official figure → **Context 95 → 93**. (The curated meta is left untouched — flagging it for the maintainer, not editing out-of-scope files.)
2. **"$2/$12" vs "$4/$18".** OpenRouter shows $2.00 in / $12.00 out (cache read $0.20, cache write $0.375); third-party coverage (metacto) shows "$4.00/$18.00 for contexts >200K". Both are right — Google's rate card is **tiered at the 200K prompt boundary**. Recorded both tiers; Cost scored on the ≤200K list price with the 2× step noted as the long-context penalty.
3. **Free tier.** Curated `freeTierNote` claims a free tier on AI Studio / OpenCode Zen; Google's pricing table for `gemini-3.1-pro-preview` says **"Not available"** in the Free Tier column (unlike 3.8 Flash). Pass-1 Cost credit for "free tier" removed.
4. **Index 29.7 (BenchLM's AA row) vs 30 (AA model page).** Same measurement, rounding; both sit barely above the class median of 26 and far below the 60+ frontier reference, so Reasoning stays capped.
5. **GDPval-AA normalized 13.8% (2026-10-02) vs 14.7% (Oct 9 BenchLM).** Derived/Elo-normalized figure drifting upward as the pool grows; the raw **904** Elo is unchanged, and AA Agentic Index **10.3%** is unchanged — the agentic collapse that caps Tool use at 72 is still real.
6. **AA speed/rank class labels.** AA compares this id against "reasoning models in a similar price tier" (>$1 blended), which is why it calls 115.3 tok/s "notably fast" while the raw output is mid-pack for a flagship — no score impact.

**New rows this pass (absent from the 2026-10-02 report):** BenchLM composite **64.77/100, #35/889** · **AA-IFBench 77.1%** · **ZeroBench 29.0%** · **HealthBench Hard 20.6%** · **MedXpertQA (Text) 71.5%** · **AA-Omniscience Index 31.9** · **Design Arena Website 1259 Elo** · **AA-MMMU-Pro 82.4%** · AA **$1.30/task (#64/226)**, **115.3 tok/s (#38/226)**, **67 M Index tokens (#48/226, median 81 M — concise)**, **TTFT 25.66 s (median 3.96 s)** · speech + video input confirmed as measured by AA (not inferred) · `gemini-3.1-pro-preview-customtools` variant exists for mixed bash + custom-tool agent stacks.

**Scores changed by this pass:** **Context 95 → 93** (2M disproved) and **Cost 85 → 70** (rate card verified; no free tier; flagship-class price with a 2× >200K step). **Tool use 72, Reasoning 82, Multimodal 92 and Coding 85 re-confirmed unchanged** — all their input rows reproduced exactly on Oct 9. **Overall stays 85/100**: 72 + 82 + 93 + 92 + 85 = 424 / 5 = 84.8 → 85 (the first pass derived 85.2 → 85 with Context 95; the −2 on Context moved the mean to 84.8, which still rounds to 85). Curated queue Overall for this slug is 91.6, which remains higher than the evidence supports while the agentic preview numbers hold.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google Gemini 3.1 Pro post, Meta Muse Spark comparison charts, Artificial Analysis, Vals AI, Epoch AI, Claw-Eval); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: Google official model page + Google Developer pricing tables + Google launch post, cross-checked against Artificial Analysis (live model page) and BenchLM's October 9 snapshot, plus llm-stats/Vals/Epoch/ARC attributions; ≥3 independent sources, conflicts compared rather than averaged. Only **Context (95 → 93)** and **Cost (85 → 70)** changed, because only the structural facts changed (verified 1,048,576-token limit, verified tiered rate card, no free tier); every benchmark row feeding Tool 72 / Reasoning 82 / Multimodal 92 / Coding 85 reproduced unchanged, so **Overall holds at 85**. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
