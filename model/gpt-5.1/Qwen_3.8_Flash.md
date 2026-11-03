# GPT 5.1 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.1 (`opencode/gpt-5.1`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 72 provisional→**70 verified** ($1.25 in / $10.00 out per 1M — cheap input but expensive $10 output); **legacy-with-date**: GPT-5.1 retired in ChatGPT 2026-03-11 but **still served on the OpenAI API** with a scheduled **2027-04-01** shutdown (replacement gpt-6-sol), so it stays ranked; quality bands unchanged, Overall remains 62
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (base)
- **Short description:** The interim GPT-5.x refresh — decent τ² tool use (81.9%) and AA-LCR (80.0), but on BenchLM it is one of the weaker GPT-5 tiers (#53 of 645, 58.95; 19/618 rows): GPQA 87.3% under the 90 bar, AA-HLE 28.5% under the 40 bar, Intelligence Index 24.7, Coding Index 49.4% and a very weak GDPval-AA (930 / 15.6%). 200K window; superseded on every axis by 5.2/5.4/5.5.
- **Provider / access:** OpenAI API (`gpt-5.1`); OpenCode Zen (`opencode/gpt-5.1`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** OpenAI GPT-5.1; knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.1` / OpenAI `gpt-5.1`.
- **Context window:** BenchLM lists **200K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 200K.
- **Modalities:** image in (AA-MMMU-Pro, Design Arena); curated `meta.json` "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI GPT-5.x tier; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (19 of 618 rows; 58.95/100, #53 of 645), citing Artificial Analysis, Epoch AI, Gert Labs, Vals AI and OpenRouter (fetched 2026-10-02). Coverage is partial and skews thin on coding/agentic breadth, so several dims are evidence-limited.

Agent / tool use:

- τ²-bench **81.9%** (good tool use); Gert Labs 41.24%
- **GDPval-AA 930 / 15.6%** (very weak professional-office autonomy); no Terminal-Bench / BrowseComp rows

Reasoning / knowledge:

- AA-GPQA Diamond 87.3% (under 90 bar); AA-HLE 28.5% (well under 40 bar); AA-LCR 80.0; AA Intelligence Index 24.7 (low); AA-IFBench 72.9; CritPt 4.9% (very low)
- FrontierMath v2 Tiers 1-3 31.0% / Tier 4 12.5%; AA-Omniscience Index 5.4 / Accuracy 37.7% / Hallucination 51.9%

Coding:

- AA Coding Index 49.4% (under 70 bar); Vibe Code Bench 24.61% (weak) — no SWE-bench / LiveCodeBench rows

Multimodal / long context:

- AA-MMMU-Pro 75.5% (image); Design Arena Website 1195
- 200K window (AA-LCR 80.0 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Thin coding/agentic coverage → evidence-limited conservative scores.

- **Tool use: 66/100.** τ²-bench 81.9% is a genuinely good tool-use signal, but it is near the only one — Gert Labs 41.24% and a very weak GDPval-AA 930 / 15.6% (with no Terminal-Bench/BrowseComp) show limited real-world autonomy breadth.
- **Reasoning: 62/100.** GPQA 87.3% and AA-LCR 80.0 are respectable, but HLE 28.5% is far under the 40 bar, Intelligence Index 24.7 and CritPt 4.9% are low, and a 51.9% hallucination rate (Accuracy 37.7%) undermines unaided reliability.
- **Context window: 64/100.** A 200K window sits at the top of the 100–200K (50–64) band; AA-LCR 80.0 supports it and no ≥98% MRCR is demonstrated (curated meta conflicts at 128K), so an upper-band placement.
- **Multimodal: 64/100.** Text+image in with modest vision reads (AA-MMMU-Pro 75.5, Design Arena 1195) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 52/100.** AA Coding Index 49.4% (under the 70 bar) and Vibe Code 24.61% are weak, with no SWE-bench/LiveCodeBench coverage — an evidence-limited floor for a model that BenchLM places below its siblings on code.
- **Cost efficiency: 70/100.** (Revised by the 2026-11-03 second pass from 72/100: the exact rate is now verified — **"GPT-5.1 costs $1.25 per 1M input tokens and $10.00 per 1M output tokens"** (aipricing.guru, last verified 2026-11-02; chatlyai concurs **"$1.25 … and $10 …"**). The $1.25 input sits on the methodology's cheap $1.25 anchor, but the $10.00 output is ~2.4× the $4.25 mid anchor, so a blended placement just under the provisional 72. Cost is excluded from Overall.) OpenAI GPT-5.x "standard pricing" is mid; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 62/100.** Mean of Tool 66, Reasoning 62, Context 64, Multimodal 64, Coding 52 = 61.6 → 62. Best fit: a general 2025-era assistant for standard chat, moderate tool use and image questions at low cost; it is clearly superseded by GPT-5.2/5.4/5.5 and the Pro tiers on reasoning, coding and agentic work, so don't pick it for frontier autonomy or hard code/reasoning tasks.

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); four-plus independent sources. Two things were open on this folder: a provisional Cost band (no published rate) and a lifecycle question (pass-1 already noted it is "superseded on every axis"). Both are now resolved; the measured capability figures are unrebutted.

**Sources:** pricing — https://www.aipricing.guru/models/gpt-5-1/ (**"GPT-5.1 costs $1.25 per 1M input tokens and $10.00 per 1M output tokens … last verified on 2026-11-02"**) and https://chatlyai.app/blog/gpt-5-1-pricing-explained (**"GPT-5.1 API costs $1.25 per million input tokens and $10 per million output tokens"**) · lifecycle — https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models (**"GPT-5.1 models were retired on March 11, 2026 across both normal chats and GPTs. They will continue to be available through the OpenAI API"**) and https://www.developersdigest.tech/blog/migrating-off-retired-gpt-models-2026 (**"OpenAI's deprecations page added an April 1, 2027 shutdown for gpt-5.1 … (replacement gpt-6-sol)"**) and https://developers.openai.com/api/docs/deprecations.

**What moved and how it was resolved:**

1. **Cost 72 → 70 (provisional → verified).** The real lane is **$1.25 in / $10.00 out**. Cheap input but an expensive $10 output (≈2.4× the $4.25 mid anchor) puts it a hair under pass-1's provisional midpoint. Excluded from Overall, so the composite is unchanged.
2. **Lifecycle → legacy-with-date.** GPT-5.1 was retired in ChatGPT on **2026-03-11** but remains on the API with a **scheduled** (not yet executed) **2027-04-01** shutdown; per the repo convention a future, unexecuted API shutdown keeps the id ranked with a legacy flag. `gpt-6-sol` is its announced replacement (own folder). The Oct 23 2026 OpenAI shutdown batch was for *older* models and does **not** include gpt-5.1.
3. **Quality bands — unrebutted.** No post-2026-10-02 independent re-run of GPQA 87.3 / HLE 28.5 / Intelligence Index 24.7 / Coding Index 49.4 / τ² 81.9 / GDPval-AA 930 surfaced; pass-1's evidence-limited conservative scores stand.

**Scores changed by this pass:** Cost 72→70 (verified); Tool 66, Reasoning 62, Context 64, Multimodal 64, Coding 52 all hold → **Overall remains 62**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Artificial Analysis, Epoch AI, Gert Labs, Vals AI and OpenRouter); partial coverage (19/618), Coding/Tool scored conservatively from the evidence present. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (aipricing.guru + chatlyai for the verified $1.25/$10.00 rate; OpenAI help + deprecations page + developersdigest for the ChatGPT-retired-but-API-live legacy-with-date status and the 2027-04-01 scheduled shutdown). Firmly cost-verified and lifecycle-flagged, declined to move any quality band absent a fresh independent re-run — **no quality dimension changed and Overall remains 62** (Cost 72→70 excluded). Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
