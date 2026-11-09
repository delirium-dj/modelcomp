# Kimi K2.7 Code — findings by MiMo 2.6 Flash

- Source: Moonshot AI/Kimi K2.7 Code (`moonshotai/Kimi-K2.7-Code`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 82). Fresh sources this pass: BenchLM model page (last
> updated 2026-11-07) and the Epoch AI FrontierMath v2 leaderboard rows it
> transcribes, plus a fresh Artificial Analysis model-page snapshot.
> Changes: Reasoning 80→81 (new verified FrontierMath v2 rows);
> Tool use, Context window, Multimodal, Coding, Cost efficiency held.

## Model card

- **Name:** Kimi K2.7 Code — Moonshot AI's dedicated long-horizon **coding** model (released 2026-06-12), the coding-specialised cut of the Kimi K2 line that replaces K2.6 inside Kimi Code. Open weights on Hugging Face, Modified MIT License.
- **Short description:** A 1T total / 32B active MoE reasoning model. BenchLM (updated 2026-11-07): overall **53.79/100, #80/1016** (partial coverage — 26 of 759 benchmarks, "conservative"); family context: above Kimi K2.6 (57.6 composite on the same page — K2.7 Code sits just under it) and far below Kimi K3 (69.58) / K3.1 Pro (75.03). Artificial Analysis Intelligence Index **26 (#24/117 open-weight class; class median 18)**; notable agentic evidence τ²-bench 90.1, MCP Atlas 76, MCP Mark 81.1.
- **Provider / access:** Moonshot API (`kimi-k2.7-code`) plus 5 API providers listed by AA; open-weight self-hosting; reasoning model (extended thinking, always on). No Free ID on Zen (meta).
- **Release / knowledge:** 2026-06-12 (AA FAQ). Knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (HF), `kimi-k2.7-code` (Kimi API).
- **Context window:** **262,144 (256K)** — AA and HF agree; max output 32,768 by default.
- **Modalities:** **text, image, video in; text out** (AA technical specs + FAQ confirm image and video input).
- **Pricing (as of 2026-11-08):** **$0.95 / $4.00 per 1M; cached input $0.19 (80% cache discount)** (AA snapshot). AA's latest performance snapshot shows 57 t/s output and 34.34 s TTFT (slower than the 83.6 t/s / 2.91 s recorded on 2026-10-07); AA's index charts now read "No publicly available API" for this model, so its Intelligence Index line is frozen rather than re-run.
- **Architecture:** MoE ~1T total / 32B active, 384 experts, MLA attention, MoonViT 400M vision encoder; Modified MIT License.

### Raw benchmarks found

> Primary: BenchLM model page (last updated 2026-11-07) with per-row provenance
> (Moonshot K2.7 Code HF model card, Artificial Analysis, Vals AI, Cursor evals,
> OpenHarmony board, OpenRouter, Epoch AI), cross-checked against the live
> Artificial Analysis model page.

Agent / tool use:

- **τ²-bench: 90.1** (AA, independent) — clears the Tau-family frontier reference.
- **MCP Atlas: 76.0**, **MCP Mark Verified: 81.1** (Moonshot model card).
- **Terminal-Bench 2.1 (Vals): 67.0** (independent); **Terminal-Bench Hard (AA): 44.7** — new row this pass; Kimi Claw 24/7: 46.9 (model card). No OSWorld/BrowseComp row.
- GDPval-AA: **1114 Elo / 26.9% pass rate**, AA Agentic Index **22.5%** — long-horizon autonomy still near the floor.

Reasoning / knowledge:

- **AA-GPQA Diamond: 89.6**; **AA-HLE: 35.0**; AA-LCR 79.3; CritPt 10.0; AA-IFBench 63.1.
- **FrontierMath v2 (Tiers 1–3): 54.035%**, **FrontierMath v2 (Tier 4): 12.195%** (Epoch AI FrontierMath v2 leaderboard, via BenchLM) — new verified math-reasoning rows this pass.
- AA Intelligence Index: **25.8 (≈26)**, #24/117 open-weight class (class median 18).
- BenchLM overall: **53.79 / 100, #80 of 1016** (conservative; updated 2026-11-07).
- AA-Omniscience: index −10.2 (accuracy 39.6) — more wrong than right on the knowledge-reliability row.

Coding:

- **SWE-bench (Vals): 78.2**; **LiveCodeBench (Vals): 82.1** (both independent).
- **AA Coding Index: 60.8**, **AA-SciCode: 47.8**, Kimi Code Bench v2: 62.0, ProgramBench: 53.6, CursorBench 3.2: 49.7, MLS-Bench Lite: 35.1, OpenHarmony Bench: 52.1.
- No SWE-bench Verified / SWE-bench Pro / DeepSWE row.

Multimodal / long context:

- **Design Arena Website Elo: 1261** (OpenRouter; was 1270 on 2026-10-07) — website-generation proxy only; no MMMU-Pro/CharXiv row despite image+video input.
- **AA-LCR 79.3** at 256K remains the sole long-context measurement.

### Normalized scores (1–100)

- **Tool use: 83/100.** Held: τ² 90.1, MCP Atlas 76 / MCP Mark 81.1 and TB2.1-Vals 67.0 keep breadth (the new TB-Hard 44.7 sits in the same mid band and does not move the dimension), while GDPval-AA 1114 Elo / Agentic 22.5 keep long-horizon autonomy near the floor and OSWorld/BrowseComp remain absent.
- **Reasoning: 81/100.** Moved 80→81 on new verified evidence: Epoch AI's FrontierMath v2 rows (Tiers 1–3 **54.035%**, Tier 4 **12.195%**, via BenchLM updated 2026-11-07) add a strong independent math-reasoning data point next to GPQA 89.6 and LCR 79.3. Caps unchanged: HLE 35.0 misses 40, CritPt 10.0 is low, AA Index 25.8 stays far under the 60+ frontier marker, and the negative Omniscience index still deducts.
- **Context window: 90/100.** Held: 262,144 tokens with AA-LCR 79.3 — 256K-tier treatment, no retrieval-at-window row, a quarter of the 1M tier.
- **Multimodal: 76/100.** Held: text+image+video in (AA technical specs re-confirmed) puts it in the 75–90 "+video/PDF" band, but zero published vision benchmarks keep it at the band floor (Design Arena is a generation proxy).
- **Coding: 81/100.** Held: SWE-bench 78.2 and LCB 82.1 (Vals, independent) are strong; Coding Index 60.8, SciCode 47.8, CursorBench 49.7 and ProgramBench 53.6 sit mid, and SWE-V / SWE-Pro / DeepSWE rows are still absent — no new coding row this pass moved it.
- **Cost efficiency: 89/100** (excluded from Overall). Held: $0.95/$4.00 beats the $1.25/$4.25 ≈ 88 anchor, 80% cache discount ($0.19), weights downloadable; AA still flags it as expensive *within* the open-weight class ($0.47/$1.97 medians).
- **Overall Score: 82/100.** (83+81+90+76+81)/5 = 82.2 → 82 — Moonshot's open-weight coding workhorse: τ² 90.1, SWE 78.2, FrontierMath T1–3 54.0, LCR 79.3 and video-in at $0.95/$4.00, held down by sub-reference HLE, a negative Omniscience index, floor-level GDPval autonomy, and no multimodal evidence.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07, live Artificial Analysis model page, Epoch AI FrontierMath v2 leaderboard rows); scores are normalized 1–100 interpretations, not official vendor scores; vendor-card rows labelled.
- Reference URLs:
  - [Moonshot AI — Kimi K2.7 Code model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [BenchLM — Kimi K2.7 Code](https://benchlm.ai/models/kimi-k2-7-code)
  - [Artificial Analysis — Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
