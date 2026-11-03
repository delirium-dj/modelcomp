# GPT 5.4 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.4 (`opencode/gpt-5.4`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost revised 72→62 (verified $2.50/$15 plus the >272K 2×/1.5× long-context premium; pass-1 provisional was high), base id shows no deprecation entry (cyber variant removed 2026-10-01); quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (base)
- **Short description:** OpenAI's flagship with an elite τ²-bench (98.9%), strong reasoning (GPQA 92.8%, HLE 43.7%, ARC-AGI-2 74.0%) and a broad image/document profile (MMMU-Pro 81.2, CharXiv 82.8, ScreenSpot Pro 85.4) on a **1.05M** window. Offsetting: a severe **91.7% hallucination rate**, weak professional-office autonomy (GDPval-AA 1307 / 36.6%, JobBench 38.9%), and mid repo-scale coding (SWE-bench Pro 57.7%). BenchLM #23 of 645 (68.89), 54/618 rows.
- **Provider / access:** OpenAI API (`gpt-5.4`); OpenCode Zen (`opencode/gpt-5.4`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** OpenAI "Introducing GPT-5.4"; knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.4` / OpenAI `gpt-5.4` (siblings: Pro / mini / nano).
- **Context window:** BenchLM lists **1.05M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1.05M.
- **Modalities:** image + text in; text out (MMMU-Pro, CharXiv, ScreenSpot Pro, MedXpertQA-MM confirm vision/document) — curated `meta.json` "Text in/out" is out of date.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI flagship tier; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (54 of 618 rows; 68.89/100, #23 of 645), citing the OpenAI GPT-5.4/GPT-5.5 launch posts, plus Artificial Analysis, Meta, ARC Prize, Epoch AI, Vals AI, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- **τ²-bench 98.9%** (elite single/multi-turn tool use); BrowseComp 82.7%; CyberGym 79.0%; OSWorld-Verified 75.0%; Terminal-Bench 2.0 75.1%; MCP Atlas 70.6%; DeepSearchQA 73.6%
- GDPval-AA 1307 / 36.6% (weak); Toolathlon 54.6%; Gert Labs 64.89%; JobBench 38.9%; APEX-Agents-AA 33.3%; ResearchClawBench 15.3%; ApprenticeBench 11%; ExploitGym 6.0%

Reasoning / knowledge:

- **GPQA 92.8% / AA-GPQA Diamond 92.0%** (clear 90); **AA-HLE 43.7%** (clears 40; 52.1 w/ tools, 39.8 w/o); **ARC-AGI-2 74.0%** (ARC-AGI-3 0.2%); AA Intelligence Index 39.0; CritPt 23.4; FrontierMath v2 Tiers1-3 47.6%
- AA-Omniscience Index 5.8 / Accuracy 50.8% / **Hallucination 91.7%** — severe confabulation

Coding:

- LiveCodeBench Pro 87.5%; React Native Evals 85.3%; AA Coding Index 71.0% (clears 70)
- Vibe Code Bench 67.42%; SWE-bench Pro 57.7%; PostTrainBench v1.1 19.0% (no SWE-bench Verified / LiveCodeBench v6 rows)

Multimodal / long context:

- MMMU-Pro 81.2% / 82.1 w/ Python; CharXiv 82.8%; ScreenSpot Pro 85.4%; MedXpertQA (MM) 77.1%; SimpleVQA 61.1%; ERQA 65.4%; Design Arena 1228
- 1.05M window (AA-LCR 82.0 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 79/100.** τ²-bench 98.9% is genuinely elite and BrowseComp 82.7 / CyberGym 79.0 / OSWorld-Verified 75.0 are strong, but the sustained-office-autonomy suites stay weak — GDPval-AA 1307 / 36.6%, JobBench 38.9%, APEX-Agents 33.3% — so breadth of long-horizon work is not frontier.
- **Reasoning: 78/100.** GPQA 92.8% and AA-HLE 43.7% clear their bars and ARC-AGI-2 74.0% is excellent abstraction, but Intelligence Index 39.0 and CritPt 23.4 are mid and a **91.7% hallucination rate** (despite 50.8% accuracy) is a serious reliability drag.
- **Context window: 92/100.** The 1.05M window is in the ≥1M (95–100) band; AA-LCR 82.0 is supportive, but no ≥98% MRCR retrieval at 512K+ is demonstrated and the curated meta conflicts at 128K, so a high-but-not-perfect placement.
- **Multimodal: 78/100.** A rich image+document profile (ScreenSpot Pro 85.4, CharXiv 82.8, MMMU-Pro 81.2, MedXpertQA-MM 77.1) — upper +image/PDF tier (75–90); no audio/video rows and text-only output, so no non-text-output credit.
- **Coding: 76/100.** LiveCodeBench Pro 87.5% and Coding Index 71.0% (clears 70) are solid, but SWE-bench Pro 57.7%, Vibe Code 67.42% and PostTrainBench 19.0% keep repo-scale/agentic code mid; no SWE-bench Verified read.
- **Cost efficiency: 62/100.** (Revised by the 2026-11-03 second pass from 72/100, a stub-based provisional: the base lane is verified at **$2.50 / $15 per 1M** — essentially on the $3/$15 ≈ 60 anchor — and OpenAI's model page adds **"prompts with >272K input tokens are priced at 2x input and 1.5x output for the full session"**, a real surcharge for exactly the long-context work this model is picked for. No free tier.) Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 79, Reasoning 78, Context 92, Multimodal 78, Coding 76 = 80.6 → 81. Best fit: very long-context image/document analysis and tool-calling (τ², BrowseComp, 1.05M window) where breadth matters; treat every factual output as unverified given the 91.7% hallucination rate, and don't lean on it for sustained office-work autonomy (GDPval/JobBench weak).

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://openrouter.ai/openai/gpt-5.4 (**"$2.50 per million input tokens, $15 per million output tokens"**, "unifying the Codex and GPT lines") and https://inworld.ai/models/openai-gpt-5-4 (**"Priced at $2.5 per million input tokens and $15 per million output tokens"**, **"1.1M token context window with up to 128K tokens of output"**) and https://pricepertoken.com/pricing-page/model/openai-gpt-5.4 (**"$2.50 per million input … $15.00 per million output … context window of up to 1.1M"**) · long-context premium + window — https://developers.openai.com/api/docs/models/gpt-5.4 (**"For models with a 1.05M context window (GPT-5.4 and GPT-5.4 Pro), prompts with >272K input tokens are priced at 2x input and 1.5x output for the full session"**) · lifecycle — https://developers.openai.com/api/docs/deprecations (**"The gpt-5.4-cyber model is deprecated and will be removed from the API on October 1, 2026"** — variant-level only; **no entry for base `gpt-5.4`**) and https://www.layer3labs.io/guides/openai-deprecated-models (Oct 14 consumer-surface retirement covers GPT-5.5; base 5.4 absent) · external standing — https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf (**"GPT-5.4 High, the top model, reached 50.6%"** on the report's reasoning figure, March 2026) and https://news.ycombinator.com/item?id=48196570 (AA effort-tier chatter).

**What moved and how it was resolved:**

1. **Cost 72→62 — the provisional was too generous.** Three independent price pages fix the base lane at **$2.50/$15**, sitting essentially on the methodology's $3/$15 ≈ 60 anchor, and OpenAI's own model page documents a **2× input / 1.5× output surcharge above 272K input tokens** for the whole session — precisely the long-context usage class Context 92 advertises. Subtracting the premium risk from the anchor placement lands 62; the pass-1 72 (a "standard pricing" guess) is superseded. Cost is excluded from Overall.
2. **Lifecycle: base id clean; the cyber sibling was removed 2026-10-01.** OpenAI's deprecations page lists **gpt-5.4-cyber** for removal but carries **no entry for base gpt-5.4**, and the October consumer-surface retirements (GPT-5.5, 2026-10-14) did not touch it — unlike the sibling Pro variant (legacy, Foundry retirement 2027-09-07, per today's gpt-5.4-pro pass). The base stays fully served; variant-specific retirement does not cascade per the exact-ID rule.
3. **Every scored row stands; the hallucination flag is unrebutted.** No second-pass source contradicts the **91.7% hallucination / Omniscience 5.8** profile, GDPval-AA 1307 / 36.6%, or JobBench 38.9% — Reasoning 78 and Tool 79 caps intact. Stanford HAI's 2026 Index Report independently lists **GPT-5.4 High as the top model at 50.6%** on its tracked reasoning eval (March 2026), corroborating the GPQA/HLE/ARC-AGI-2 74.0% strength side. Effort-tier chatter ("GPT-5.4 low" on AA) concerns other configs, not the base reading; the batch-wide index rebase remains scale drift.
4. **Window bookkeeping:** OpenAI says **1.05M** (pricing doc), third parties say **1.1M** — same artifact, rounding; pass 1's resolved 1.05M and its Context 92 (no ≥98% MRCR proof) are unaffected.

**Scores changed by this pass:** Cost 72→62 (outside Overall). Tool 79, Reasoning 78, Context 92, Multimodal 78, Coding 76 → Overall = half-up mean(79, 78, 92, 78, 76) = 403/5 = 80.6 → **81, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.4/GPT-5.5 launch posts, plus Artificial Analysis, Meta, ARC Prize, Epoch AI, Vals AI, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenRouter/Inworld/PricePertoken pricing triangulation, OpenAI model page for the >272K premium and 1.05M window, OpenAI deprecations + layer3labs lifecycle cross-check, Stanford HAI report for external standing); Cost re-anchored 72→62 on the verified $2.50/$15 + long-context surcharge, base id confirmed clean while the cyber variant's removal is logged as variant-only, hallucination cap and all rows uncontradicted — **only Cost moved; Overall remains 81**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
