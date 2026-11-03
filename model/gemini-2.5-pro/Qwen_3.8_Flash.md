# Gemini 2.5 Pro — findings by Qwen 3.8 Flash

- Source: Google / Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — ⚠️ lifecycle: **Vertex/GCP retired this id on 2026-10-20 (date now passed); the Gemini API (aistudio) lists "No shutdown date announced"** — callable on its scored first-party lane, kept ranked with a legacy flag; Cost 72 provisional→**65 verified** ($1.25/$10 ≤200K, $2.50/$15 beyond); quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro (base)
- **Short description:** Google's 2025-era flagship (now well down the leaderboard — #90 of 645 on BenchLM, 50.96/100, 25/618 rows, **Non-Reasoning** type). Its enduring strength is a very large **1M** context and native multimodality; the weaknesses measured today are thin agentic autonomy (τ² 54.1%, GDPval-AA 616 / 0.0%, AA Agentic Index 3.5%), sub-bar knowledge (AA-GPQA 84.4%, AA-HLE 22.5%), weak coding (SWE-bench Verified 63.8%, AA Coding Index 33.3%) and a severe 90.9% hallucination rate. Clearly superseded by the Gemini 3.x line.
- **Provider / access:** Google AI / Gemini API (`gemini-2.5-pro`); OpenCode; Vertex AI; OpenRouter. Non-reasoning tier in this scan; image/audio/video input; text out.
- **Release / knowledge:** March 2025 (Gemini 2.5 Pro); cutoff ~early 2025.
- **IDs:** `opencode/gemini-2.5-pro` / Google `gemini-2.5-pro`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1M.
- **Modalities:** Text + image (+audio/video) in; text out (BenchLM shows AA-MMMU-Pro vision; curated `meta.json` "Text in/out" is a stub — Gemini 2.5 Pro is natively multimodal).
- **Pricing (as of 2026-10-02):** Google paid tier, now below current frontier list price (exact per-1M not in curated meta; "Standard pricing" stub).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (25 of 618 rows; 50.96/100, #90 of 645, Non-Reasoning type), citing Google DeepMind / blog.google, Artificial Analysis, Vals AI, Epoch AI, Gert Labs and OpenRouter (fetched 2026-10-02). Coverage is partial and this is an older model re-scored against the 2026 bar; BenchLM flags the overall score conservative.

Agent / tool use:

- τ²-bench **54.1%** (middling tool use); Gert Labs 42.01%
- near-floor autonomy: **GDPval-AA 616 / 0.0%**, AA Agentic Index **3.5%**

Coding:

- SWE-bench Verified **63.8%** (below the ~74 bar); SWE-bench (Vals) 54.4%; AA-SciCode 46.3%; **AA Coding Index 33.3%** and Vibe Code Bench 0.40% (very weak)

Reasoning / knowledge:

- GPQA 83% (AA-GPQA Diamond 84.4 — under the 90 bar); HLE 18.8% / AA-HLE **22.5%** (well under the 40 bar); AA Intelligence Index **16.1** (low); CritPt 2.6%; AA-LCR 69.0; FrontierMath v2 Tiers 1-3 14.1% / Tier 4 4.2%
- AA-Omniscience Index -16.3 / Accuracy 39.1% / **Hallucination 90.9%** (severe); AA-IFBench 48.7%

Multimodal / long context:

- AA-MMMU-Pro 74.9 (image); Design Arena Website 1175; native audio/video input per Google
- 1M window; AA-LCR 69.0 supportive (no ≥98% MRCR at 512K+ reported in this scan)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Re-scored against the 2026 bar; several dims reflect an older model now below current frontier.

- **Tool use: 42/100.** τ²-bench 54.1% and Gert Labs 42.01% are only middling, and real-world professional autonomy is effectively absent (GDPval-AA 616 / 0.0%, AA Agentic Index 3.5%) — a pre-agentic-era tool profile.
- **Reasoning: 45/100.** AA-GPQA 84.4% is under the 90 bar, AA-HLE 22.5% is far under the 40 bar, the Intelligence Index (16.1) and CritPt (2.6%) are low, and a severe 90.9% hallucination rate (Accuracy 39.1%) badly undermines unaided reliability.
- **Context window: 86/100.** A native 1M window is the top band by size with moderate AA-LCR 69.0 support (no ≥98% MRCR published for this model in this scan, and curated meta conflicts at 128K), so a high-but-not-maximum placement.
- **Multimodal: 72/100.** Natively multimodal input (text+image+audio+video) with a decent image read (AA-MMMU-Pro 74.9, Design Arena 1175), but this scan's vision coverage is thin and output is text-only — a multi-input placement held to the lower end of that tier.
- **Coding: 48/100.** SWE-bench Verified 63.8% is under the ~74 bar, and AA Coding Index 33.3% with Vibe Code 0.40% are very weak — the model does not hold up to the current coding frontier.
- **Cost efficiency: 65/100.** (Revised by the 2026-11-03 second pass from 72/100: exact rates now verified — **$1.25 per 1M input / $10.00 per 1M output for prompts under 200K, doubling to $2.50/$15 beyond** — straddling the $3/$15≈60 anchor (input 80%, output 67% of the $1.25/$4.25≈88 anchor) with a free tier at 50 RPD; the same >200K step that took GPT-5.4 to 62 sits one tier cheaper here, and the 10K/day free grounding prompts support the upper-60s. Cost is excluded from Overall.
- **Overall Score: 59/100.** Mean of Tool 42, Reasoning 45, Context 86, Multimodal 72, Coding 48 = 58.6 → 59. Best fit: a cheap, very-long-context multimodal model for retrieval/summarization over large documents and media where agentic autonomy and hard reasoning/coding are not required; for anything frontier-class it is clearly superseded by the Gemini 3.x line (better reasoning, coding, tool use and grounding).

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Lifecycle — https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions (**"gemini-2.5-pro, June 17, 2025, October 20, 2026"** — retirement date now 14 days past) and https://ai.google.dev/gemini-api/docs/deprecations (fetched 2026-10-22: **"Gemini 2.5 Pro models ; gemini-2.5-pro, June 17, 2025, No shutdown date announced"**) and https://zentor.ai/blog/gemini-2-5-pro-shutdown-date (**"Google Cloud's lifecycle page says October 20, 2026; the Gemini API deprecations page says no shutdown date has been announced"**) and https://www.developersdigest.tech/blog/ai-model-shutdowns-2026-2027 (**"Gemini 2.5 Flash retires on Vertex AI on October 20, 2026, while the Gemini API has not announced a date at all. So inventory by platform first"**) and https://medium.com/@shtse8/gemini-2-5-on-vertex-ai-retires-october-20-what-to-switch-to-and-what-it-costs-b56dd29479bd (**"If you call gemini-2.5-pro … through Google Cloud, Google retires them on October 20, 2026"**) · pricing — https://www.aipricing.guru/models/gemini-2-5-pro/ (**"Gemini 2.5 Pro costs $1.25 per 1M input tokens and $10.00 per 1M output tokens. These rates were last verified on 2026-11-02"**) and https://www.cloudzero.com/blog/gemini-pricing/ (**"$1.25 per million input tokens and $10.00 per million output tokens for prompts under 200K tokens. Prompts exceeding"** [200K cost more]) and https://www.metacto.com/blogs/the-true-cost-of-google-gemini-a-guide-to-api-pricing-and-integration (2026-10-19: **"Gemini 2.5 Pro: $1.25-$2.50 per 1M input tokens | $10-$15 per 1M output tokens (free tier restricted to 50 RPD)"**) and https://cloud.google.com/model-garden/pricing (**"Gemini 2.5 Pro includes 10,000 Grounding Prompts per day at no additional charge"**).

**What moved and how it was resolved:**

1. **⚠️ Platform-split retirement, executed on one side:** Vertex AI / Google Cloud retired `gemini-2.5-pro` on **2026-10-20** (date now past); the first-party Gemini API — the lane this curated id (`opencode/gemini-2.5-pro` via AI Studio/Gemini API) is scored on — still shows **"No shutdown date announced"** (deprecations page fetched 2026-10-22, post-date). Resolution: **kept ranked with a legacy flag** — the house convention used for gpt-6-sol (sunset scheduled but not executed) applies in the milder form here (one lane executed, scored lane open). If Google's API side announces shutdown at the next wave (the 3.6/3.7 flash retireals show the pattern), escalate to a dated listing or delist per RULES.md.
2. **Cost 72→65 (down, provisional→verified):** pass 1 guessed 72 on "repriced below frontier" vibes. The real list is $1.25/$10 tier-1 rising to **$2.50/$15 above 200K** — verified four sources including a 2026-11-02 check. Anchored at 65 (same >200K-step logic that put GPT-5.4's $2.50/$15 at 62, softened by the cheaper ≤200K tier, the 50-RPD free lane and 10K/day grounding). Overall unaffected (Cost excluded): 42+45+86+72+48 = 293/5 = 58.6 → **59**.
3. **No quality-row movement:** AA remains 16.1-class for this vintage; the 90.9% hallucination, 0.0% GDPval and 3.5% Agentic figures stand unrebutted — Tool 42, Reasoning 45, Coding 48 unchanged; Context 86 (1M on the still-live API lane) and Multimodal 72 unchanged.

**Scores changed by this pass:** Cost efficiency 72→65 (excluded from Overall). **Overall remains 59.** Curation flag: ⚠️ retired on Vertex/GCP 2026-10-20; live on the Gemini API with no announced shutdown date.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Google DeepMind/blog.google, Artificial Analysis, Vals AI, Epoch AI, Gert Labs and OpenRouter); partial coverage (25/618, Non-Reasoning) of a 2025-era model re-scored against the 2026 bar. Curated `meta.json` stub (128K/text) corrected to verified 1M/multimodal. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Google Cloud lifecycle, AI-Studio deprecations page, zentor/developersdigest/medium platform-split coverage, aipricing.guru/cloudzero/metacto/model-garden pricing); Cost 72→65 on the verified $1.25/$10 + >200K step; Vertex retirement 2026-10-20 executed while the scored API lane remains open — kept ranked with legacy flag — **no quality dim changed and Overall remains 59**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
