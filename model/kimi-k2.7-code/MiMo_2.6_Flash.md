# Kimi K2.7 Code — findings by MiMo 2.6 Flash

- Source: Artificial Analysis model page, BenchLM (Moonshot model card / AA / Vals / Cursor / OpenHarmony rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code — Moonshot AI's **dedicated long-horizon coding model (June 2026)**, the coding-specialised cut of the Kimi K2 line; a general coding-agent workhorse that **replaces K2.6 inside Kimi Code** (repo meta). Open weights on Hugging Face, Modified MIT License. AA FAQ: **released 2026-06-12**.
- **Short description:** A **1T total / 32B active MoE** reasoning model benchmarked by AA at Intelligence Index **26 (#24/117 open-weight class; class median 18 — "well above average among comparable models")** — though AA's prose still calls it "particularly expensive when comparing to other open weight models." BenchLM: 52.21/100, #84/887 (27/623, conservative), family context: below Kimi K2.6 (58.73) and far below Kimi K3 (70.64) on their composites. Notable agentic evidence: **τ²-bench 90.1 (AA)**, MCP Atlas 76, MCP Mark 81.1; a 120M-token index verbosity that is fairly concise (AA #17/117).
- **Provider / access:** Moonshot API + 8 providers (AA); open-weight self-hosting. Reasoning model (extended thinking). No free id (meta).
- **Release / knowledge:** June 12, 2026.
- **Context window:** **262,144 (256K)** — AA/FAQ 260k.
- **Modalities:** **text, image, video in; text out** (AA + meta agree — video input is the line's signature capability).
- **Pricing:** **$0.95 / $4.00 per 1M; cached input $0.19 (80% off)**. AA cost/task on index: $0.54; speed 83.6 t/s (#28/117, above class median 74), TTFT 2.91 s.

### Raw benchmarks found

> Primary: AA's independent rows; BenchLM transcription with per-row provenance
> (Moonshot's own K2.7 Code Hugging Face model card, AA, Vals AI, Cursor evals,
> OpenHarmony board). Vendor-card rows are labelled as such below.

Agentic / tool use:

- **τ²-bench: 90.1** (AA, independent) — clears the Tau-family frontier reference.
- **MCP Atlas: 76.0**, **MCP Mark Verified: 81.1** (model card) — solid tool servers.
- GDPval-AA: **27.0% pass rate / 1114 Elo**; AA Agentic Index 22.5% — long-horizon autonomy still near the floor (same band as K2.6's 1115/22.1).
- **Terminal-Bench 2.1 (Vals): 67.0** (independent) — mid; Kimi Claw 24/7: 46.9 (model card) — weak. No OSWorld/BrowseComp row.

Coding:

- **SWE-bench (Vals): 78.2** (independent) — strong; **LiveCodeBench (Vals): 82.1.**
- **AA Coding Index: 60.8**, **AA-SciCode: 47.8** (misses 55 ref), Kimi Code Bench v2: 62.0, ProgramBench: 53.6, CursorBench 3.2: 49.7, MLS-Bench Lite 35.1, OpenHarmony 52.1.
- **No SWE-bench Verified, no SWE-bench Pro, no DeepSWE row.**

Reasoning & knowledge:

- **AA-GPQA Diamond: 89.6** — just under the 90 reference. **AA-HLE: 35.0** — misses 40.
- **AA Intelligence Index: 25.8**, AA-LCR 79.3 (strong), CritPt 10.0, IFBench 63.1.
- AA-Omniscience: **Index −10.2** (accuracy 39.6; recorded hallucination figure 82.4 — index negative means more wrong than right, the weakest knowledge-reliability row in this report).

Multimodal / long context:

- **Only Design Arena Website Elo 1270** (OpenRouter) — no MMMU-Pro/CharXiv row anywhere despite image+video input.
- **AA-LCR 79.3** at 256K is the sole long-context measurement.

### Normalized scores (1–100)

- **Tool use: 83/100.** τ² 90.1 clears the frontier reference, MCP Atlas 76 / MCP Mark 81.1 and TB2.1-Vals 67.0 give breadth; GDPval-AA 1114 Elo and Agentic Index 22.5 keep long-horizon autonomy at the floor, Claw 24/7 is weak, and there is no OSWorld/BrowseComp row.
- **Reasoning: 80/100.** GPQA 89.6 sits a whisker under the 90 marker, LCR 79.3 and index 25.8 (well above the open-weight class median 18) are solid; HLE 35.0 misses 40, CritPt 10 is low, and the negative Omniscience index is a real knowledge-reliability deduction.
- **Context window: 90/100.** 262,144 tokens with AA-LCR 79.3 — matches the 256K-tier treatment used across this line; no retrieval-at-window row, and it is a quarter of the 1M tier.
- **Multimodal: 76/100.** Text+image+**video** in puts it in the 75–90 "+video/PDF" band, but with zero vision benchmarks published (Design Arena Elo is a website-generation proxy, not perception) it stays at the band floor.
- **Coding: 81/100.** SWE-bench 78.2 and LCB 82.1 (both Vals, independent) are strong; Coding Index 60.8, SciCode 47.8, CursorBench 49.7 and ProgramBench 53.6 sit mid, and the flagship SWE-V / SWE-Pro / DeepSWE rows are absent. **Flagged for family consistency: the coding-specialised cut's measured coding is weaker than the general K2.6's own row set (own K2.6 report: SWE-V 80.2, Coding Index 61.8, SciCode 52.2, LCB 86.8–89.6, coding 90)** — a surprising result for the model that replaces it inside Kimi Code, and one that holds this score down.
- **Cost efficiency: 89/100** (excluded from Overall). $0.95/$4.00 beats the $1.25/$4.25 ≈ 88 anchor, cache is 80% off ($0.19), weights are downloadable, and $0.54 per index task with 83.6 t/s throughput is efficient — though AA flags it as expensive *within* the open-weight class ($0.30/$1.15 class medians).
- **Overall Score: 82/100.** (83+80+90+76+81)/5 = 82.2 → 82 — Moonshot's open-weight coding workhorse: τ² 90.1, SWE 78.2, LCR 79.3 and video-in at $0.95/$4.00, held down by sub-reference HLE, a negative Omniscience index, floor-level GDPval autonomy, no multimodal evidence, and coding rows that don't yet beat its own general sibling.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model page (release date, index 26 #24/117, speed/latency, pricing/cache, parameters 1T/32B, modalities, open-weights status), BenchLM (27 rows with per-row provenance: Moonshot's K2.7 Code Hugging Face model card, AA, Vals AI, Cursor, OpenHarmony, OpenRouter; family composites; updated 2026-10-07), repo meta (Kimi Code replacement positioning, pricing, window). Scores are normalized 1–100 interpretations, not official vendor scores; vendor-card rows labelled; family ordering checked against own Kimi K2.6 (83) and K3 (90) reports — K2.7 Code lands below K2.6, matching both the queue line and BenchLM's family ordering.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
