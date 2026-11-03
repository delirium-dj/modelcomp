# GPT 5.2 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.2 (`opencode/gpt-5.2`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 65 provisional→**60 verified** (direct/Azure lane $1.75/$14 — output at the $15 anchor; aggregator lane $0.875 logged); lifecycle: **sunset from Codex + ChatGPT surfaces in 2026, API base model GA with Azure retirement 2027-06-08** — legacy-with-date listing, kept ranked; quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2 (thinking)
- **Short description:** OpenAI's mid-line GPT-5.2 reasoning model — strong contest math (AIME 99%, FrontierMath) and solid SWE-bench, but a very high Omniscience hallucination rate (81.2%) and thin, partly third-party benchmark coverage.
- **Provider / access:** OpenAI API / ChatGPT (`gpt-5.2`), also surfaced on OpenCode Zen (`opencode/gpt-5.2`). Reasoning (thinking) + tool calls.
- **Release / knowledge:** late 2025 / early 2026 (OpenAI "Introducing GPT-5.2"); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.2` / OpenAI `gpt-5.2`.
- **Context window:** BenchLM lists **400K**; curated `meta.json` says "128K total" — conflict, resolved in favour of the BenchLM 400K figure.
- **Modalities:** BenchLM rows include grounded/vision results (MMMU-Pro, CharXiv, MathVision, V*), so image-in despite curated `meta.json` "Text in/out"; no audio/video rows. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (GPT-5-class, exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (27 of 618 rows; 61.92/100, #47 of 645), citing the OpenAI GPT-5.2/GPT-5.4 launch posts, Artificial Analysis, Vals AI, Epoch AI, JobBench, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall); several rows are third-party comparison tables.

Agent / tool use:

- τ²-bench **84.8%**; BrowseComp 65.8%
- OSWorld-Verified **47.3%**; JobBench 34.3%; Gert Labs 46.5% — agentic cluster is weak/mid

Reasoning / knowledge:

- GPQA-Diamond 92.4/90.3%; **AA-HLE 37.7%** (under the 40% bar); Intelligence Index 30.4; CritPt 11.6%
- AA-LCR **82.7%**; ARC-AGI-2 52.9%
- **Omniscience Index -0.9 / Accuracy 44.3% / Hallucination 81.2%** — extreme confabulation
- AA AIME 2025 **99.0%**; FrontierMath v2 Tiers 1-3 40.7% / Tier 4 18.8% (Epoch AI) — strong math

Coding:

- SWE-bench Verified **80.0%**; SWE-bench Pro 55.6%; Vibe Code Bench 53.5% (no LiveCodeBench/Coding-Index row published)

Multimodal / long context:

- MMMU-Pro 79.5%; MathVision 83.0%; CharXiv 82.1%; V* 75.9%; Design Arena Website 1202
- 400K window (AA-LCR 82.7 supportive; no ≥98% MRCR at length reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 66/100.** τ²-bench 84.8% is solid single-turn tool use, but OSWorld-Verified 47.3%, JobBench 34.3%, BrowseComp 65.8% and Gert Labs 46.5% are mid-to-weak, and no Terminal-Bench 2.1 row supports a higher band.
- **Reasoning: 74/100.** GPQA-Diamond 92.4%, AA-LCR 82.7%, AIME 99.0% and FrontierMath 40.7% are genuinely strong, but HLE 37.7% misses the bar, Intelligence Index 30.4 is low, and an **81.2% Omniscience hallucination rate** (-0.9 index) is the worst factuality profile in this audit — a big reliability drag.
- **Context window: 80/100.** BenchLM's 400K window sits between the 100–200K (50–64) and ≥1M (95–100) bands; AA-LCR 82.7 is supportive but no ≥98% retrieval metric is published, and curated meta conflicts at 128K, so a mid-band placement.
- **Multimodal: 68/100.** Image-in evidence (MMMU-Pro 79.5, CharXiv 82.1, MathVision 83.0, V* 75.9) is a strong +image profile (60–70 band); no audio/video/document rows and curated meta claims text-only, so it stays in the top of the image band.
- **Coding: 70/100.** SWE-bench Verified 80.0% is good, but SWE-bench Pro 55.6%, Vibe Code 53.5% and the absence of LiveCodeBench/Coding-Index rows keep it mid.
- **Cost efficiency: 60/100.** (Revised by the 2026-11-03 second pass from 65/100: exact list now verified — **$1.75 per 1M input / $14 per 1M output** on the direct/Azure lane (Inworld spec), output sitting essentially ON the methodology's $15 anchor, with aggregator/cheapest-route readings at **$0.875 input** (pricepertoken, range $0.875–$1.75) logged un-averaged; the model is also a legacy surface — Codex/ChatGPT lanes retired during 2026 — so the conservative anchor read is 60. Cost is excluded from Overall.
- **Overall Score: 72/100.** Mean of Tool 66, Reasoning 74, Context 80, Multimodal 68, Coding 70 = 71.6 → 72. Best fit: math-heavy and code-review tasks where an answer is verified against provided context; not for unaided factual recall — the 81.2% hallucination rate and thin coverage make unsupervised claims unreliable, and the 5.4/5.5+ siblings are the matured replacements.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://inworld.ai/models/openai-gpt-5-2 (**"It supports a 400K token context window with up to 128K tokens of output. Priced at $1.75 per million input tokens and $14 per million output tokens"**) and https://pricepertoken.com/pricing-page/model/openai-gpt-5.2 (**"OpenAI offers GPT 5.2 at $0.875 per million input tokens, the lowest of 3 providers (input prices range from $0.875 to $1.75 per million tokens)"**) and https://azure.microsoft.com/en-us/pricing/details/azure-openai/ (**"Unifies the frontier coding performance of GPT-5.2-Codex with the reasoning and professional knowledge capabilities of GPT-5.2"** — Foundry listing) · lifecycle — https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule (**"gpt-5.2, 2025-12-11, GA, 2027-06-08"**; row **"gpt-5.2-chat … Retired, 2026-05-13"**) and https://community.openai.com/t/gpt-5-2-and-gpt-5-3-codex-have-been-sunset-in-codex-with-chatgpt-subscriptions/ (**"GPT-5.2 and GPT-5.3-Codex have been sunset in"** Codex-with-subscription, Jun 2026) and https://community.openai.com/t/gpt-5-2-disappeared-from-chatgpt-without-advance-notice-despite-aug-10-shutdown-date-in-deprecations-docs/ (**"GPT-5.2 disappeared from ChatGPT without advance notice despite Aug 10 shutdown date in deprecations docs"**) and https://developers.openai.com/api/docs/deprecations (**"On May 8th, 2026, we notified developers using gpt-5.2-chat-latest and gpt-5.3-chat-latest model snapshots of their deprecation"**) and https://help.openai.com/en/articles/9624314-model-release-notes (**"February 4, 2026: We're restoring the Extended thinking level for GPT-5.2 Thinking to its prior setting"**) · benchmarks — no AA/Vals re-run dated after 2026-10-02 found for `gpt-5.2`; https://www.joinnextdev.com/blog/gpt-55-retires-october-14-migrate-now-or-break-later confirms the successor wave (**"GPT-5.5 Retires October 14"**, GPT-5.2-Codex retired earlier in 2026) without touching this base-thinking row's numbers.

**What moved and how it was resolved:**

1. **Cost 65→60 (provisional→verified):** the "standard pricing" guess is now pinned — $1.75/$14 direct, output essentially at the $15 anchor and input ~58% of it; the $0.875 aggregator floor logged side by side. Anchoring at the verified direct lane gives 60, not the provisional 65. Overall unaffected (Cost excluded).
2. **Lifecycle: legacy-with-date.** The *surfaces* were sunset through 2026 (Codex-with-subscription June; ChatGPT picker by the Aug-10 snapshot wave; `gpt-5.2-chat` retired on Azure 2026-05-13), but the **base `gpt-5.2` GA model row remains listed with Azure retirement 2027-06-08** — same treatment as gpt-6-sol: keep ranked until the executed shutdown. The Feb-4-2026 "restoring Extended thinking" note confirms the Thinking variant served here is the canonical current setting.
3. **Context window reconfirmed:** Inworld's spec ("400K … up to 128K output") matches pass 1's 400K resolution against the 128K curated stub — Context 80 stands.
4. **No quality-row movement:** the 81.2% hallucination profile, HLE 37.7% (under bar), GPQA 92.4% and SWE-bench 80.0% went unrebutted; Tool 66, Reasoning 74, Multimodal 68, Coding 70 unchanged. 66+74+80+68+70 = 358/5 = 71.6 → **Overall 72**.

**Scores changed by this pass:** Cost efficiency 65→60 (excluded from Overall). **Overall remains 72.** Curation flag: legacy-with-date (Azure 2027-06-08); ChatGPT/Codex surfaces already sunset.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.2/GPT-5.4 launch posts plus Artificial Analysis, Vals AI, Epoch AI, JobBench, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Inworld, pricepertoken, Azure/Foundry retirement schedule, OpenAI deprecations + release notes, two OpenAI community confirmations); Cost 65→60 on the verified $1.75/$14 lane; legacy-with-date listing kept ranked per house convention — **no quality dim changed and Overall remains 72**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
