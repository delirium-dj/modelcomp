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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Kimi K2.7 Code — findings by Mimo v2.6 Flash

- Source: Moonshot AI/Kimi K2.7 Code (`moonshotai/Kimi-K2.7-Code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused open-weight agentic model (2026-06-12), built on Kimi K2.6 with big claimed gains on in-house coding/agent suites and ~30% fewer thinking tokens. Not a variant of K2.8 Preview (that is a closed Kimi Code checkpoint) or K3.
- **Provider / access:** Kimi Open Platform API (`kimi-k2.7-code`, `kimi-k2.7-code-highspeed`), Kimi Code membership, Hugging Face `moonshotai/Kimi-K2.7-Code` (+ ModelScope, community GGUFs), OpenRouter. OpenAI-compatible Chat Completions; thinking is always on (no non-thinking path on the API).
- **Release / knowledge:** 2026-06-12 (Sophon / DataLLM Lab / AI release trackers; HF collection updated Jul 27); knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (HF), `kimi-k2.7-code` (Kimi API). **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 262,144 tokens (256K) — HF card and DataLLM Lab; **max output 32,768 by default** (262,144 is the context, not the output cap, per Moonshot quickstart).
- **Modalities:** text + image in (MoonViT 400M vision encoder); text out. A third-party site also claims native video input — **unconfirmed**, so only image input is credited. Reasoning always on (low/high/max effort on Kimi Code); tool calls; JSON mode supported by the platform.
- **Pricing (as of 2026-09-25):** **$0.95 in / $4.00 out** per 1M tokens on the Kimi API, cache-hit reads $0.19/M (DataLLM Lab pricing guide); Kimi Code memberships from ~$19/week-equivalent plans; open weights = self-host free but 1T/32B-active hardware is expensive.
- **Architecture:** MoE ~1T total / 32B active, 384 experts (8 selected + 1 shared), Multi-head Latent Attention (MLA), MoonViT 400M vision encoder; **Modified MIT License** (code and weights).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Vendor = Moonshot's own Kimi Code CLI runs (temp 1.0, top_p 0.95, 262,144 ctx).

Agent / tool use:

- MCP Atlas: **76.0** (Moonshot vendor table; GPT-5.5 79.4, Claude Opus 4.8 81.3 on the same table)
- MCP Mark Verified: **81.1** (Moonshot; GPT-5.5 92.9, Opus 4.8 76.4)
- Kimi Claw 24/7 Bench (in-house): **46.9** (Moonshot; K2.6 42.9)
- Tau3-Banking / Tau2-Bench: no verified public score found; Sophon lists **τ²-bench 90.1** (#52 of 321) — a different (τ²) harness, do not read as τ³
- GDPval-AA: evaluated by Artificial Analysis (one of its nine evals) but **no published value found**
- Terminal-Bench 2.1: evaluated by Artificial Analysis but **no published value found**; no vendor figure either
- Claw-Eval / ClawProBench: no verified public score found (Kimi Claw 24/7 is the in-house substitute)
- Toolathon / MCP-Atlas covered above / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (Artificial Analysis, cited by Sophon and Inferbase)
- HLE: one of AA's nine evals — **no published value found**
- LCR / MLCR: AA-LCR run by Artificial Analysis — **no published value found**
- CritPt: run by Artificial Analysis — **no published value found**
- Artificial Analysis Intelligence Index: **42**, #6 of 97 (AA, as of 2026-07-17; DataLLM Lab). Same-harness K2.6 scored **44** — the index went *down* generation over generation. BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: run by AA, no published value found
- Sophon aggregate: 14 evals across 5 domains, best 90.1 τ²-bench (#52/321); LiveBench Coding rank 7

Coding:

- SWE-bench Verified: **no verified public score found** — Moonshot published none and the model was absent from the Vals AI board as of 2026-07-14. ⚠️ The 78.2% / 60.4% / 68.5% SWE-bench and LiveCodeBench figures circulating on aggregator sites have no primary source and are flagged as likely generated filler (DataLLM Lab); the RankLLMs rows (SWE-bench Verified 68.5%, GPQA 48.0%) contradict the AA/Sophon GPQA 89.6 and are not used.
- LiveCodeBench: no verified public score found (see warning above)
- SciCode: run by Artificial Analysis — no published value found
- DeepSWE: **31% ± 1**, 13th of 15 (DeepSWE leaderboard, 2026-07-16 board; K2.6's prior board score was 24% ± 2)
- Kimi Code Bench v2 (in-house): **62.0** (vs K2.6 50.9, GPT-5.5 69.0, Opus 4.8 67.4)
- Program Bench (in-house, 200 tasks): **53.6**; MLS Bench Lite (in-house): **35.1**
- Vibe Code Bench: no verified public score found

Long context:

- 262,144-token window; MRCR / RULER / GraphWalks: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 76.0 and MCP Mark Verified 81.1 sit within a few points of GPT-5.5/Opus 4.8 on Moonshot's own table, τ²-bench 90.1 is top-decile, and the in-house Kimi Claw 24/7 46.9 is above K2.6. Capped below frontier by the missing TB2.1, Tau3 and GDPval values (AA ran them but publishes no number) and by Kimi Claw 46.9 still trailing GPT-5.5's 52.8.
- **Reasoning: 78/100.** GPQA Diamond 89.6 is one point off the 90+ frontier reference, and AA ranks it #6 of 97 on its index. Capped by the AA Intelligence Index 42 (below the 60+ frontier reference and *lower* than K2.6's 44 — a deliberate specialization trade), plus no published HLE, LCR or CritPt value.
- **Context window: 74/100.** 262,144 tokens is in the 200K–500K tier (65–84, 200K = 70) at the upper end; no retrieval-accuracy measurement exists to justify more, and the 32K default output cap is noted as a caveat rather than a separate score.
- **Multimodal: 65/100.** Confirmed image input via the MoonViT encoder puts it in the +image band (60–70); no audio/video/PDF input is *verified* (video is a single unconfirmed third-party claim) and output is text-only, so it cannot reach the +video band.
- **Coding: 68/100.** In-house numbers are genuinely strong (Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1 — near GPT-5.5), but the one independent agentic-coding board has it at DeepSWE **31%, 13th of 15**, far under GPT-5.6-sol (73%) and Opus 4.8 (59%), and there is **no** SWE-bench Verified, LiveCodeBench, SciCode or TB2.1 figure. That vendor-vs-independent gap plus the missing public suites is what caps it in the high-60s.
- **Cost efficiency: 88/100.** $0.95/$4.00 list with $0.19 cache-hit reads sits just better than the ~$1.25/$4.25 → 88 anchor; Modified MIT weights mean free self-hosting, but 1T/32B-active hardware keeps that option expensive for most users.
- **Overall Score: 73/100.** (80 + 78 + 74 + 65 + 68) / 5 = 73.0 → 73 — best-fit as a lean-reasoning, 256K self-hostable coding agent for long agentic loops where cache-hit cost matters; wait for a real SWE-bench Verified / TB2.1 number before treating it as frontier coding, and pick K3 or a closed frontier model for hard reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Moonshot HF model card and kimi.ai resource page, Sophon, DataLLM Lab independent review (AA + DeepSWE figures), Inferbase, AI release trackers); scores are normalized 1–100 interpretations, not official vendor scores. Aggregator SWE-bench/LiveCodeBench numbers without a primary source were rejected.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

