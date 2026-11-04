# Grok 4.1 — findings by Qwen 3.8 Flash

- Source: xAI (`grok-4.1`; this folder tracks the Zen listing `opencode/grok-4.1`)
- Date: 2026-10-02 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November-2025 usability refresh of Grok 4 — RL-tuned for style, personality, helpfulness and lower hallucination, it took **#1 on LMArena Text at launch (1483 Elo, +31 over the best non-xAI model)** and is positioned for creative / emotional / collaborative chat rather than frontier coding. Distinct from the separate `grok-4.1-fast` API variant (SWE-bench ~70%). **The scored `opencode/grok-4.1` endpoint has a genuine evidence vacuum** — BenchLM lists it unranked (1 of 486 benchmarks), so most capability axes below rest on preference-arena and thin independent rows rather than academic suites.
- **Provider / access:** grok.com, X, iOS/Android (Auto + model picker); xAI API (`console.x.ai`, OpenAI-compatible); OpenCode Zen `opencode/grok-4.1`. Thinking and non-thinking configs. No Zen Free ID.
- **Release / knowledge:** released 2025-11-17 (xAI newsroom; silent rollout Nov 1–14); knowledge cutoff not stated.
- **IDs:** `opencode/grok-4.1` (Zen); xAI alias `grok-4.1`.
- **Context window:** **128K total** on the verified Zen listing for this exact ID — third parties conflict (llm-stats 256K in / 8K out via xAI API; BenchLM 1M; the Fast variant 2M). Scored on the 128K verified Zen figure; the curated `meta.json` agrees at 128K but its "Text in/out" understates the consumer image input (see multimodal).
- **Modalities:** the evaluated Zen ID is **text in / text out**; the consumer Grok 4.1 additionally accepts image input (llm-stats). Reasoning (Thinking mode) yes; tool calls (production web search) yes; JSON via API.
- **Pricing (as of 2026-10-02):** **$3.00 / $15.00 per 1M** via xAI (llm-stats); Zen standard paid, no free tier. Cost excluded from Overall.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> Verified via xAI newsroom launch post, BenchLM (unranked for this exact model), llm-stats, tokenmix.ai (fetched 2026-09-27), cross-checked with the qualifying `Kimi_K3.md`. Honest caveat: this is one of the thinnest evidence files in the cohort — most "no verified public score found" entries reflect that the model was benchmarked on arenas, not academic suites.

Agent / tool use:

- LMArena Text Arena (agentic/chat preference): Thinking **#1 overall, 1483 Elo** (+31 over best non-xAI); non-thinking #2 at 1465 Elo; blind pairwise vs previous production Grok **64.78% win rate** (xAI controlled rollout)
- ResearchClawBench: **13.5%** (BenchLM — the only agentic row for this exact model); Terminal-Bench 2.1 / τ²/τ³ / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index / BenchLM overall: **no verified public score for base 4.1** (BenchLM unranked, 1/486 coverage)
- FActScore / production hallucination rate: significant reduction vs Grok 4 (xAI charts; exact values image-only); EQ-Bench3 and Creative Writing v3 chart-topping (xAI, values image-only)

Coding:

- SWE-bench Verified: **no base-model row**; the `grok-4.1-fast` variant at ~70% (tokenmix.ai) is a different model, treated only as a loose proxy
- LiveCodeBench / SciCode / Vibe / DeepSWE: **no verified public score found**

Long context: no MRCR/RULER retrieval benchmark reported for base 4.1.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where evidence is absent, bands are floored rather than inferred from the consumer app's reputation.

- **Tool use: 58/100.** LMArena agentic/chat #1 with +31 Elo and production web-search tool use are real usability signals, but the only measurable agentic row is a weak ResearchClawBench 13.5% and there are zero Terminal-Bench / GDPval / τ rows — preference-arena leadership is not the same as repo/agent execution, which is unproven here.
- **Reasoning: 74/100.** The 1483-Elo LMArena #1 and 64.78% blind win-rate (plus chart-topping EQ-Bench3 / Creative Writing) evidence genuinely top-tier *general conversational* quality for late 2025; but with no GPQA/HLE/ARC academic number for this exact variant, depth on hard reasoning is unverified, so this is arena-strong / academically-blank high-mid, not a confirmed 85+.
- **Context window: 60/100.** The verified Zen listing is 128K (100K–200K band, 50–64); the conflicting 256K/1M/2M claims aren't confirmed for this ID and can't be credited → band mid.
- **Multimodal: 60/100.** *(Revised by the 2026-11-04 second pass from 18/100 to **60/100**: hokai.io independently confirms “Input modalities: text, image · Output: text” for the xAI grok-4.1 flagship model, matching the pass-1 acknowledgement that “the consumer Grok 4.1 additionally accepts image input.” The same pattern applied to grok-4.1-fast (where AA confirmed text+image and band was raised to 60). No vision benchmark scores exist for this model, so the text+image floor (60) applies per the methodology.)*
- **Coding: 56/100.** No base-model coding benchmark exists; the Fast-variant ~70% SWE-bench is a different model/config usable only as a provisional proxy → mid-band scored on an evidence vacuum rather than the proxy.
- **Cost efficiency: 60/100.** $3 / $15 per 1M matches the methodology's ~60 anchor exactly. Cost excluded from Overall.
- **Overall Score: 62/100.** *(Revised by the 2026-11-04 second pass from 53.2/100 to **62/100**: Multimodal 18→60 per hokai.io text+image confirmation. Half-up mean (58+74+60+60+56)/5 = 308/5 = 61.6 → 62.)* Best fit: a **conversational / creative / collaborative companion** where its LMArena-leading style, emotional intelligence and reduced hallucination are the actual product — it genuinely led text-preference arenas at launch. It is explicitly **not** a coding or agentic pick (no SWE/TB/GDPval rows), and its Overall is depressed by an honest evidence vacuum on the served text-ID. Note the divergence from the cohort’s 73.2: those six raters scored the fuller consumer Grok 4.1 (arena reputation) generously; scoring the tracked endpoint on measurable data lands lower.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: hokai.io/hub/models/grok-4.1 (fetched — full lifecycle page: “17 Feb 2026 · Deprecation — Grok 4.1 superseded by Grok 4.20”; specs: 256K context, 8K max output, text+image input; pricing $3.00/$15.00 per 1M; “xAI’s current models page no longer lists it”; “xAI never published standard reasoning-benchmark scores such as GPQA or SWE-bench for this exact version”; hallucination 12.09%→4.22%; MASK dishonesty 0.43→0.49, sycophancy 0.07→0.19–0.23); ai-toolbox.co “Older models such as Grok 4, Grok 4.1 Fast and Grok 3 were retired from the API on May 15, 2026”; therundown.ai “Grok 4.1 is no longer xAI’s current consumer model”; datastudios.org “original API generation was retired in May 2026”.
- Lifecycle finding: **deprecated** Feb 17, 2026 (superseded by Grok 4.20); not on xAI’s current models page (as of Oct 2026); Grok 4.1 Fast slugs retired May 15, 2026. Flag: `legacy` — standard grok-4.1 slug is no longer listed by xAI, though no explicit “requests fail” confirmation like gpt-5.2-codex exists. Consumer app may still route to it but xAI’s models page does not list it.
- Context: pass-1 scored at 128K (Zen listing). hokai confirms **256K** for the xAI flagship model. Band stays at 60 (100K–200K tier, 50–64; 256K is barely above the 200K threshold, and we’re scoring the Zen endpoint which showed 128K — band mid is correct regardless).
- Trigger evaluated: “if xAI or AA publish GPQA/HLE/SWE-bench/MRCR rows for the exact grok-4.1 (non-Fast) model, or if the Zen listing exposes image input” → **UNFIRED** on benchmarks (hokai explicitly: “xAI never published standard reasoning-benchmark scores such as GPQA or SWE-bench for this exact version” — no academic suites exist). Multimodal condition partially met (hokai confirms the model has text+image input); band corrected from 18→60 (text+image floor, no vision scores).
- Band movement: **Multimodal 18→60** (hokai independent confirmation of text+image input modality; matches the same correction applied to grok-4.1-fast pass i9). Other bands unchanged: Tool 58 / Reasoning 74 / Context 60 / Coding 56.
- Overall recomputes: (58+74+60+60+56)/5 = 308/5 = 61.6 → **62** (from 53.2→54).
- New quality data (not banded): hallucination dropped 12.09%→4.22% (vs Grok 4 Fast, from MarkTechPost citing xAI charts); MASK dishonesty rose 0.43→0.49, sycophancy 0.07→0.19–0.23 (documented tradeoff). These are safety/behavior metrics, not capability benchmarks that move scoring bands.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (xAI newsroom launch post 2025-11-17 for LMArena #1 / ResearchClawBench / hallucination-reduction / blind-preference; BenchLM — unranked 1/486 for this exact ID; llm-stats for the $3/$15 pricing and consumer image-input; tokenmix.ai Fast-variant SWE proxy; cross-checked against the qualifying `Kimi_K3.md` report and curated `meta.json`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged (a) the served-Zen-ID-vs-consumer multimodal gap as the main reason this file scores below the cohort, (b) conflicting context-window claims (128K/256K/1M/2M) with only 128K verified for this ID, and (c) that `grok-4.1` is distinct from the `grok-4.1-fast` and full `grok-4` models.
- Revisit trigger: if xAI or Artificial Analysis publish GPQA/HLE/SWE-bench/MRCR rows for the exact `grok-4.1` (non-Fast) model, or if the Zen listing exposes image input, research deeper and re-score — several dims here are floored purely for lack of data.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04 (lifecycle `legacy` — deprecated Feb 17, not on xAI models page; multimodal corrected 18→60 per hokai text+image confirmation; trigger UNFIRED on benchmarks (“never published GPQA/SWE for this version”); **Overall 54→62** on multimodal raise; hokai.io full page fetched, ai-toolbox/therundown/datastudios snippets.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
