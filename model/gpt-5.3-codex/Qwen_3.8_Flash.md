# GPT 5.3 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.3 Codex (`opencode/gpt-5.3-codex`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 75 provisional→**55 verified** (official OpenAI Codex lane **$3.50 in / $28.00 out / $0.35 cached** — output far above the $3/$15≈60 anchor; the $1.75/$14 explainx reading is actually the older 5.2-codex rate, logged); **legacy-with-date**: sunset from Codex-with-ChatGPT-subscription 2026-06-02 and the `-Spark` variant retired 2026-09-14 (own id), but the base `gpt-5.3-codex` API row remains listed → kept ranked; quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex (base)
- **Short description:** OpenAI's code-specialised agent model — strong SWE-bench Verified (85%) and LiveCodeBench (87.3%) with a capable reasoning core (GPQA 91.5%, HLE 42.5%), but an 89.2% Omniscience hallucination rate and a hard focus on coding over breadth.
- **Provider / access:** OpenAI API / Codex (`gpt-5.3-codex`), also on OpenCode Zen (`opencode/gpt-5.3-codex`). Reasoning + tool calls.
- **Release / knowledge:** Feb 2026 (OpenAI GPT-5.3-Codex system card); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.3-codex` / OpenAI `gpt-5.3-codex`.
- **Context window:** BenchLM lists **400K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 400K.
- **Modalities:** AA-MMMU-Pro indicates image-in; curated `meta.json` lists "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI Codex-class, exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (22 of 618 rows; 62.46/100, #46 of 645), citing the OpenAI GPT-5.3-Codex system card, plus Artificial Analysis, Vals AI, SWE-Rebench, JobBench, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- Terminal-Bench 2.0 **77.3%**; τ²-bench 86.0%; OSWorld-Verified 64.7%
- Gert Labs 57.5%; JobBench 33.7% (no Terminal-Bench 2.1 / GDPval-AA rows published)

Coding:

- SWE-bench Verified **85.0%**; LiveCodeBench (Vals) **87.3%**; SWE-bench (Vals) 78.0%
- SWE-bench Pro 56.8%; SWE-Rebench 58.2%; Vibe Code 61.8% (no DeepSWE / Coding-Index / SciCode rows)

Reasoning / knowledge:

- AA-GPQA Diamond **91.5%** (clears 90); **AA-HLE 42.5%** (clears the 40% bar); AA-LCR 83.3; Intelligence Index 32.5; CritPt 16.9; IFBench 75.4
- Omniscience Index 10.9 / Accuracy 52.9% / Hallucination **89.2%** — very high confabulation

Multimodal / long context:

- AA-MMMU-Pro 78.5% (only image row); Design Arena Website 1170
- 400K window (AA-LCR 83.3 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 74/100.** Terminal-Bench 2.0 77.3% and τ²-bench 86.0% are solid agentic-tool signals for a code agent, but no Terminal-Bench 2.1 / GDPval-AA rows exist, and OSWorld-Verified 64.7% and JobBench 33.7% are mid — good, not frontier breadth.
- **Reasoning: 72/100.** GPQA-Diamond 91.5% and HLE 42.5% both clear their bars with AA-LCR 83.3, but Intelligence Index 32.5 and CritPt 16.9% are mid and an **89.2% hallucination rate** (despite 52.9% accuracy) is a serious reliability drag.
- **Context window: 74/100.** BenchLM's 400K window sits between the 100–200K (50–64) and ≥1M (95–100) bands; AA-LCR 83.3 supports it and no ≥98% MRCR is demonstrated (curated meta conflicts at 128K), so an upper-mid placement.
- **Multimodal: 66/100.** The only grounded row is image (AA-MMMU-Pro 78.5, Design Arena 1170) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit for this code-focused model.
- **Coding: 82/100.** SWE-bench Verified 85.0% and LiveCodeBench 87.3% (Vals) are genuinely strong and Codex-calibrated, trimmed by SWE-bench Pro 56.8%, SWE-Rebench 58.2% and the absence of DeepSWE/Coding-Index rows.
- **Cost efficiency: 55/100.** (Revised by the 2026-11-03 second pass from 75/100: the exact rate is now verified from OpenAI's own pricing page — **"Codex, gpt-5.3-codex, $3.50, $28.00, $0.35"** (in/out/cached per 1M). The $28 output sits far above the methodology's $3/$15≈60 anchor (near-2×), landing this model mid-cheap despite the steep 90% cached-input discount ($0.35) that coding-agent work leans on; explainx's **"$1.75 per 1M input and $14 per 1M output"** is the superseded 5.2-codex lane, logged un-averaged. Anchored **55** (verified list, mitigated by cache economics). Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 74, Reasoning 72, Context 74, Multimodal 66, Coding 82 = 73.6 → 74. Best fit: agentic software engineering — repo edits, refactors and code generation where a spec or test suite grounds the answer; its narrow multimodal profile and 89.2% hallucination make it a poor general/factual assistant, so keep it in the coding lane and verify output against tests.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://developers.openai.com/api/docs/pricing (**"Codex, gpt-5.3-codex, $3.50, $28.00, $0.35"** [in / out / cached per 1M], the authoritative OpenAI rate card) and https://explainx.ai/models/openai/gpt-5.3-codex/cost (**"GPT-5.3-Codex costs $1.75 per 1M input tokens and $14 per 1M output tokens"** — matches the older https://www.eesel.ai/blog/gpt-53-codex-pricing 5.2-codex table **"gpt-5.2-codex, $1.75, $14.00"**, so the $1.75/$14 reading is a lineage carry-over, logged un-averaged) and https://openai.com/index/introducing-gpt-5-4/ (2026-03-05 — successor wave) · lifecycle — https://community.openai.com/t/gpt-5-2-and-gpt-5-3-codex-have-been-sunset-in-codex-with-chatgpt-subscriptions/ (2026-06-02: **"GPT-5.2 and GPT-5.3-Codex are no longer available in Codex through a ChatGPT subscription"**) and https://github.com/openai/codex/issues/25839 (**"The gpt-5.2 and gpt-5.3-codex models have been retired. Please update to a newer model 5.4 or 5.5"**) and https://learn.chatgpt.com/docs/models (**"GPT-5.3-Codex-Spark retired on September 14, 2026, and is no longer available in the ChatGPT desktop app, Codex CLI, or IDE extension"**) and https://www.reddit.com/r/codex/comments/1tp8ujz/ (Jun 2 subscription sunset) · benchmarks — no post-2026-10-02 AA/Vals re-run found for this id; SWE-bench Verified 85.0% / LiveCodeBench 87.3% / GPQA 91.5% / HLE 42.5% / hallucination 89.2% stand unrebutted.

**What moved and how it was resolved:**

1. **Cost 75→55 (provisional→verified):** the earlier "low-to-mid" guess was wrong — the official Codex lane is **$3.50/$28**, whose $28 output is ~1.9× the $3/$15≈60 anchor; even with the 90% cached-input discount ($0.35, heavily used in agentic coding), the verified list anchors at **55**, not 75. The $1.75/$14 figures trace to the retired 5.2-codex rate and are logged, not merged. Overall unaffected (Cost excluded).
2. **Lifecycle: legacy-with-date.** Subscription Codex removed it 2026-06-02 and the `-Spark` sibling retired 2026-09-14 (a distinct id, not this row), but the base `gpt-5.3-codex` still appears on OpenAI's live API rate card — kept ranked with a legacy flag, per the gpt-5.2 / gemini-2.5-pro convention (schedule-not-executed on the base API lane → stay listed until an executed shutdown).
3. **No quality-row movement:** Tool 74 (no TB 2.1/GDPval rows), Reasoning 72 (89.2% hallucination drag), Context 74 (400K reconfirmed), Multimodal 66 (image-only), Coding 82 unchanged. 74+72+74+66+82 = 368/5 = 73.6 → **Overall 74**.

**Scores changed by this pass:** Cost efficiency 75→55 (excluded from Overall). **Overall remains 74.** Curation flag: legacy-with-date (subscription Codex sunset 2026-06-02; `-Spark` variant retired 2026-09-14).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.3-Codex system card, plus Artificial Analysis, Vals AI, SWE-Rebench, JobBench, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenAI official pricing, explainx/eesel for the 5.2-codex lane, OpenAI `Introducing GPT-5.4`, OpenAI community + GitHub + learn.chatgpt + reddit lifecycle); Cost 75→55 on the verified $3.50/$28 lane; legacy-with-date flag set; `-Spark` variant kept as a distinct id — **no quality dim changed and Overall remains 74**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
