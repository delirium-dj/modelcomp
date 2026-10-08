# GPT-5.1 — findings by MiMo 2.6 Flash

- Source: OpenAI "GPT-5.1: A smarter, more conversational ChatGPT" (2025-11-12), Artificial Analysis, BenchLM, Vals/ARC Prize/Epoch leaderboards, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 — OpenAI's **November 12–13, 2025** usability flagship revision of GPT-5 (AA: 2025-11-13; launch page: Nov 12). Two variants: **GPT-5.1 Instant** (ChatGPT's most-used model — for the first time with **adaptive reasoning**, "significant improvements on math and coding evaluations like AIME 2025 and Codeforces") and **GPT-5.1 Thinking** (dynamic thinking time — ~2× faster on easy tasks, 2× slower on hard ones; clearer, warmer tone). **GPT-5.1 Auto** routes between them; API ships `gpt-5.1` (Thinking) and `gpt-5.1-chat-latest` (Instant), both adaptive. Deprecated on AA in favor of GPT-5.2 but still served.
- **Short description:** The GPT-5-generation iterative upgrade ("meaningful improvements, same generation" per OpenAI's naming note): better instruction following, tone/personalization controls, six preset styles. A **low-cost conversational generalist** rather than a benchmark chaser — the launch page ships qualitative examples, not score tables.
- **Provider / access:** OpenAI API + ChatGPT tiers (Pro/Plus/Go/Business first, then free/logged-out; Enterprise/Edu 7-day early access); AA: 2 providers. Proprietary.
- **Release / knowledge:** 2025-11-13; knowledge cutoff **2024-09-30** (AA) — as stale as GPT-5's, flagged.
- **Context window:** **400,000 total / 128,000 out** (meta; AA confirm 400K). **BenchLM lists 200K — conflict flagged; 400K (official+AA) used.**
- **Modalities:** **text, image in; text out** (AA; MMMU-Pro row confirms image input).
- **Pricing:** **$1.25 / $10.00 per 1M**, **cached $0.125 (90% discount)**; blended $1.34/1M (AA).

### Raw benchmarks found

> Primary: AA model page (independent current rows) + BenchLM aggregate (updated
> 2026-10-07) + leaderboards. The OpenAI launch page publishes **no numeric rows** —
> only qualitative "significant improvements on AIME 2025 and Codeforces" (flagged).

Agentic / tool use:

- **τ²-bench: 81.9** (AA) — solid.
- **GDPval-AA: Elo 930 / 16.5%** — weak; Gert Labs 41.24. No OSWorld/Terminal-Bench/BrowseComp rows.

Coding:

- **AA Coding Index: 49.4** — far under the 70 reference. **Vibe Code Bench: 24.61** (Vals) — very weak.
- Launch claims AIME 2025 / Codeforces gains for Instant adaptive reasoning; no numbers published.

Reasoning & knowledge:

- **AA-GPQA Diamond: 87.3** — just under the 90 reference. **AA-HLE: 28.5** — well under 40.
- **AA Intelligence Index (v4.3.2): 24.7–25 (estimated)**, #124/225 — **below the median (26)**.
- FrontierMath v2: 31.0 (Tiers 1–3), 12.5 (Tier 4) (Epoch AI); ARC-AGI-1 72.83 (ARC Prize, Thinking/High); AA-LCR 80.0; CritPt 4.9; IFBench 72.9; AA-Omniscience Index 5.4 (accuracy 37.7 — poor knowledge reliability).

Multimodal:

- **AA-MMMU-Pro: 75.5** (image input confirmed); Design Arena Website 1193 (OpenRouter).

Long context:

- 400K window; **AA-LCR 80.0**; no retrieval row.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 81.9 is a respectable agent row and the Auto/adaptive routing story is real, but GDPval 930 and the absence of OSWorld/TB/BrowseComp keep it mid-tier.
- **Reasoning: 79/100.** GPQA 87.3 (just below the 90 reference), HLE 28.5 (far below 40), FrontierMath 31.0/12.5, ARC-AGI-1 72.8 respectable; composite index below median, Omniscience poor, Sep-2024 cutoff — the launch page's unquantified "significant improvements" claims earn no points.
- **Context window: 89/100.** 400K/128K (BenchLM's 200K flagged as conflicting); LCR 80.0 with no retrieval row.
- **Multimodal: 70/100.** Image input with MMMU-Pro 75.5 — mid-to-top of the image band; nothing beyond.
- **Coding: 77/100.** AA Coding Index 49.4 and Vibe 24.61 are weak against references; the AIME/Codeforces improvement claims are unquantified, and 5.2/5.3-Codex lines moved decisively past it.
- **Cost efficiency: 75/100** (excluded from Overall). Same tariff as GPT-5 — input at the $1.25 anchor, output $10 well above the $4.25 reference, 90% cache discount; serving improved (116.7 t/s, TTFT 40.9 s vs 5's 73.9 s).
- **Overall Score: 79/100.** (78+79+89+70+77)/5 = 78.6 → 79 — the conversational-usability upgrade that prioritized warmth and instruction-following over benchmarks: solid τ² and image input at a fair tariff, but every current capability row (GPQA 87.3, HLE 28.5, Coding Index 49.4, index 25) sits under references for its queue line, on the oldest cutoff around.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — OpenAI launch page (variant/architecture/tone details; no numeric rows published, flagged), AA model page (index/speed/cost/spec + GPQA/HLE/LCR/MMMU-Pro/τ²/GDPval rows), BenchLM aggregate (coding/IFBench/Omniscience rows with provenance, updated 2026-10-07), ARC Prize + Epoch + Vals leaderboards (as cited), repo meta (positioning/pricing/context; 200K-vs-400K conflict resolved toward official 400K). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
