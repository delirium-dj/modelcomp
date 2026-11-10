# GPT-5.2 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI `gpt-5.2-codex`
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-27)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-27 (Overall 78). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **56.35/100, #63/1020, 18/804 rows**) and
> **LLMBenchmark.ai model page** (data 2026-11-10, 22/216 boards measured,
> Vibe Coding Index 45.4 #62/102) — headline: **the Artificial Analysis
> model page for `gpt-5.2-codex` now exists** (previous pass: "No
> independent index entry (AA/Vals composite) found for this variant").
> Changes: **Reasoning 76→78** — the "zero science/reasoning benchmarks for
> the Codex variant" cap is gone: independent AA runs at xHigh — **GPQA
> Diamond 89.9%** (just under the 90 ref), **HLE 35.7%** (just under 40),
> **IFBench 77.6% (#10/123)**, Intelligence Index 28.5 — offset recorded:
> **CritPt 8.7%**, **AA-Omniscience net −2.2** (41.1 acc / **73.4
> hallucination**), no math rows. **Tool use 80→81** — first top-band
> agentic row: **τ²-bench Telecom 92.1% (xHigh, AA)**, plus TB2.0 **66.5**
> (Deep Agents harness, #5/34) corroborating the recorded 64.0; held back
> by GDPval still unpublished (llmbenchmark re-confirms), OSWorld-Verified
> 38.2 unchanged, JobBench 26.0 weak. **Multimodal 68→70** — the "no MMMU
> figure" deduction resolved: **AA-MMMU-Pro 76.3%** (independent) → top of
> the +image-in band. Overall 78→**79** (mean 78.0 → 79.0). Held: Context
> 80 (new **AA-LCR 82.3%** is long-context reasoning, not retrieval-at-
> window — no MRCR/RULER row), Coding 86 (new LCB Vals **88.0 #9/91**,
> SWE-V 72.8, SWE-Multi 66.3, Vibe 37.9, ALE-Bench 1299.9 corroborate the
> recorded profile; the successor-generation cap is unchanged — BenchLM
> GPT-5.3-Codex 62.32 vs 56.35 here), Cost 55 (pricing re-verified
> 2026-11-10: $1.75/$14, $0.175 cache, output ranks 305/342 from
> cheapest). Conflicts recorded: llmbenchmark sides with the **2026-01-14**
> release date (vs OpenAI blog index 2025-12-18) and confirms knowledge
> cutoff **2025-08-31** for the variant; llmbenchmark lists AA Intelligence
> Index "not measured" while BenchLM shows 28.5 from the AA page.

## Model card

- **Name:** GPT-5.2 Codex (`gpt-5.2-codex`) — GPT-5.2 further optimized for agentic coding in Codex: long-horizon work via context compaction, large code changes (refactors/migrations), native Windows environments, stronger cybersecurity, and stronger vision for screenshots/diagrams/charts/UI surfaces (OpenAI launch post).
- **Short description:** OpenAI's December-2025 coding specialist — claimed SOTA on SWE-Bench Pro and Terminal-Bench 2.0 at launch; superseded by GPT-5.3-Codex (2026-02-05), which leapfrogged it on Terminal-Bench 2.0 (77.3 vs 64.0) and OSWorld (64.7 vs 38.2). BenchLM (2026-11-10): **56.35/100, #63/1020** (18/804 rows).
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), Codex app/CLI, ChatGPT plans with Codex; OpenRouter. Proprietary, no weights.
- **Release / knowledge:** **conflict:** OpenAI's blog index dates "Introducing GPT-5.2-Codex" to **2025-12-18**; llm-stats and **LLMBenchmark (2026-11-10)** track **2026-01-14** as the release date; both reported. Knowledge cutoff **2025-08-31** — now confirmed for the Codex variant per OpenAI model documentation via LLMBenchmark (previous pass: "not republished for the Codex variant").
- **IDs:** `gpt-5.2-codex` (OpenAI API); Kilo Code/OpenRouter `openai/gpt-5.2-codex`.
- **Context window:** 400,000 input / 128,000 max output (llm-stats, Kilo Code family records, OpenAI family docs).
- **Modalities:** text + image in, text out; vision explicitly strengthened for coding-session artifacts (screenshots, technical diagrams, charts, UI surfaces); reasoning effort tiers incl. xhigh.
- **Pricing (as of 2026-10-27; re-verified 2026-11-10):** **$1.75 in / $14.00 out** per 1M, cache read $0.175 (llm-stats; eesel's OpenAI-API-sourced table; LLMBenchmark 2026-11-10 — output price ranks 305/342 from cheapest, $0.43 per solved SWE-V task; same rate card as GPT-5.2 Thinking and as its GPT-5.3-Codex successor's standard tier).
- **Architecture:** proprietary — weights private; no parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (OpenAI, xhigh): **64.0%** — SOTA at launch (Dec 2025); vs GPT-5.2 62.2, later crushed by GPT-5.3-Codex 77.3 (OpenAI 5.3-Codex appendix table)
- OSWorld-Verified (OpenAI, xhigh): **38.2%** vs GPT-5.2 37.9; GPT-5.3-Codex later 64.7
- SWE-Lancer IC Diamond (OpenAI, xhigh): **76.0%** (vs GPT-5.2 74.6; later 5.3-Codex 81.4)
- Cybersecurity CTF (OpenAI, xhigh): **67.4%** (vs GPT-5.2 67.7; later 5.3-Codex 77.6)
- GDPval: not published for the Codex variant (OpenAI appendix shows "-") — still unpublished on llmbenchmark 2026-11-10 ("Not measured")
- **τ²-bench Telecom: 92.1% (xHigh)** (Artificial Analysis — **new**, the variant's first top-band agentic row; #32/121 per llmbenchmark)
- **Terminal-Bench 2.0: 66.5% (Deep Agents harness)** (#5/34, llmbenchmark — corroborates the recorded OpenAI xhigh 64.0); **Terminal-Bench Hard (AA): 37.1% (xHigh)** (#35/118 — new, weak-mid)
- **Gert Labs: 51.79%**, **JobBench: 26.0%** (BenchLM 2026-11-10 — new, mid/weak)
- Design Arena agent rows (llmbenchmark, new): Android apps 1176 (#26/47), Godot games 1142, mobile 1088, web apps 1037, full-stack 978 — mid-low
- Still absent (llmbenchmark re-check): OSWorld/OSWorld-2.0 [llmbenchmark lists "Not measured" — the 38.2 figure is OpenAI's own appendix row], BrowseComp, BFCL, MCP Atlas, Toolathlon, τ³-Banking, BALROG, TheAgentCompany, METR time horizons
- Windows-environment agent reliability: explicitly improved over GPT-5.1-Codex-Max (launch post; no public metric)

Coding:

- SWE-Bench Pro (public, OpenAI xhigh): **56.4%** — SOTA at launch (vs GPT-5.2 55.6; later 5.3-Codex 56.8). HN cross-check (mohsen1) independently compiled the same 56.4 with SWE-Verified ~80 at launch.
- SWE-bench Verified (Vals AI): **72.40%** (Mini-SWE-agent harness, $0.31/task, rank 55) — **conflict:** Vals' multi-config leaderboard row for "GPT 5.2 Codex" reads 88/68/29/33 across its four displayed columns (different harness configs); both reported, harness variance unreconciled.
- Launch claim: "state-of-the-art on SWE-Bench Pro and Terminal-Bench 2.0" (OpenAI, Dec 2025) — true only for the launch window; contradicted by its own successor's February appendix table.
- **New rows (llmbenchmark/BenchLM 2026-11-10):** **LiveCodeBench (Vals): 88.0%** (#9/91 — strong); **SWE-bench Verified: 72.8%** (swebench.com run, $0.4494/attempt — second harness reading alongside Vals 72.40); **SWE-bench Multilingual: 66.3%** (#8/11); **Vibe Code Bench: 37.91%** (OpenHands, Vals — mid, no <10 penalty); **ALE-Bench: 1299.9 (xHigh)** (#33/108); LMArena WebDev 1338 Elo (6,669 votes, ±9.0). Coding index 45.4 (#62/102, llmbenchmark).

Reasoning / knowledge:

- **The AA model page now exists (2026-11-10) — the "no independent index entry" gap is resolved.** Independent AA runs at xHigh: **GPQA Diamond 89.9%** (#39/166), **HLE 35.7%** (#57/184), **AA Intelligence Index 28.5**, **AA-IFBench 77.6%** (#10/123), **CritPt 8.7%** (weak), **AA-Omniscience net −2.2** (accuracy 41.1 / **hallucination 73.4** — poor factuality)
- Still no AIME / FrontierMath / MMLU-Pro row for the variant (llmbenchmark: math 0/14, knowledge 0/20 boards measured); family GPQA 92.4 (Thinking tier) remains the family reference
- **Conflict:** llmbenchmark (2026-11-10) lists "AA Intelligence Index: Not measured" while BenchLM shows 28.5 sourced from the AA model page — both reported

Long context:

- 400K/128K with **context compaction** for long-horizon sessions (launch post) — a Codex-specific mechanism; no MRCR/RULER figure for the variant (re-checked 2026-11-10 — still absent)
- **AA-LCR: 82.3% (xHigh)** (#27/172) — **new**; long-context reasoning, not retrieval-at-window, so it corroborates the profile but does not fill the retrieval cap

Multimodal:

- **AA-MMMU-Pro: 76.3%** (Artificial Analysis — **new**; the previous "no MMMU figure" gap is resolved, upper-mid for an image-in model)
- Text + image in, text out (llmbenchmark: "Takes in Text, Images / Gives back Text") — vision tuned for screenshots/diagrams/charts/UI; no audio/video, no non-text output

### Normalized scores (1–100)

- **Tool use: 81/100.** TB2.0 64.0 (corroborated at 66.5 by the Deep Agents harness, #5/34) and SWE-Lancer IC Diamond 76.0 were SOTA-class at launch, and the variant now has its first top-band agentic row — **τ²-bench Telecom 92.1% (xHigh, AA)** → 81 (was 80). Still capped: OSWorld-Verified 38.2 weak, GDPval still unpublished (re-checked), JobBench 26.0, and the successor's appendix shows the agentic stack moving on (TB-2.0 64.0 → 77.3).
- **Reasoning: 78/100.** The "zero science/reasoning benchmarks for the Codex variant" cap is gone — independent AA xHigh runs: **GPQA 89.9** (just under 90), **HLE 35.7** (just under 40), IFBench 77.6 (#10/123), Index 28.5 → 78 (was 76). Held below frontier by CritPt 8.7, **AA-Omniscience net −2.2** (73.4% hallucination), no math rows, and Index 28.5 in the mid band.
- **Context window: 80/100.** 400K/128K plus context compaction beats the bare family window; the new **AA-LCR 82.3** corroborates long-context reasoning but is not a retrieval-at-window measurement — no MRCR/RULER row exists for the variant (no change).
- **Multimodal: 70/100.** Text + image in with vision tuned for screenshots/diagrams/charts/UI, and the missing MMMU figure now exists — **AA-MMMU-Pro 76.3%** (independent, upper-mid) → 70 (was 68), the top of the +image-in band; text-only output and no audio/video keep it out of the 75+ band.
- **Coding: 86/100.** Launch SOTA on SWE-Bench Pro (56.4) and TB2.0 (64.0), Vals Verified 72.40–88, SWE-Lancer 76.0 — corroborated this pass by **LCB (Vals) 88.0 (#9/91)**, SWE-V 72.8, SWE-Multi 66.3, Vibe 37.9, ALE-Bench 1299.9 (no change); capped because GPT-5.3-Codex beat it within two months (SWE-Pro 56.8, TB-2.0 77.3; BenchLM 62.32 vs 56.35) and CodingAgents.md has since retired its numbers as "one or two generations behind".
- **Cost efficiency: 55/100** (excluded from Overall). $1.75/$14 with 90%-discount caching ($0.175) is standard mid-frontier pricing — re-verified 2026-11-10 (output price ranks 305/342 from cheapest); neither cheap nor premium.
- **Overall Score: 79/100.** (81 + 78 + 80 + 70 + 86) / 5 = 395/5 = 79.0 → 79 — best fit: December-2025-to-early-2026 agentic coding in Codex/Windows environments at standard frontier pricing, now with variant-level AA reasoning/vision evidence on record; not the pick today — GPT-5.3-Codex dominates the same niche for the same money.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 [56.35, #63/1020, 18/804 rows, per-row provenance incl. the now-existing Artificial Analysis model page] and LLMBenchmark.ai model page data 2026-11-10 [22/216 boards measured, Vibe Coding Index 45.4]; checked against the 2026-10-27 sources: OpenAI launch post, GPT-5.3-Codex appendix table, API pricing, Vals AI leaderboards, HN cross-check, llm-stats, eesel, Kilo Code, CodingAgents.md, morphllm). Conflicting dates and harness figures are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-27.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
