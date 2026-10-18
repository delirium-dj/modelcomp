# Union Alpha — findings by GLM 5.3 Flash

- Source: Unbiased / Pareto (`unbiased/pareto`, launched anonymously as `stealth/union-alpha`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — revealed as **Pareto** by Unbiased (model-card lineage: Pareto 26.9; successor Pareto 26.10 Preview is tracked separately)
- **Short description:** Stealth multimodal model that appeared free on OpenRouter on 2026-09-16 and was revealed 33 hours later as Pareto, a served blend of several frontier and open models by Unbiased (Circuit & Chisel), tuned for research, coding, and agentic workflows. It is a blended product, not one lab's weights — distinct entry from the earlier GLM stealth drop (Ox Alpha = GLM-5.3-Flash).
- **Provider / access:** OpenRouter `stealth/union-alpha` (2026-09-16 14:42 UTC) renamed `unbiased/pareto` (2026-09-17 23:24 UTC); OpenCode carried the preview as `opencode/union-alpha` (free window 33 h, now closed). OpenAI-compatible Chat Completions API; tool calling (`tools` + `tool_choice`) and JSON output (`response_format`, no JSON-schema enforcement).
- **Release / knowledge:** Appeared 2026-09-16, revealed 2026-09-17 (UTC). Knowledge cutoff: not published — as a per-request blend there is no single training cutoff to cite.
- **IDs:** `unbiased/pareto` (OpenRouter, ex-`stealth/union-alpha`); OpenCode preview ID `opencode/union-alpha`. No Free ID remains on Zen — the $0 window closed with the reveal. No open weights (served blend).
- **Context window:** 262,144 total; 131,072 max output (verified via the OpenRouter model API endpoint as tabulated by Siora, 2026-09-17; BenchLM lists "N/A" — no verified figure on its page).
- **Modalities:** text + image in / text out; tool calling; JSON output; reasoning left at provider default. No verified audio/video/PDF input evidence found.
- **Pricing (as of 2026-10-11):** $2.50 in / $0.25 cached in / $7.50 out per 1M tokens (unbiased/pareto). Was $0/$0 for ~33 h (2026-09-16 14:42 → 2026-09-17 23:24 UTC). Stealth-preview data terms: prompts/completions may be retained by the provider, not used for training.
- **Architecture:** undisclosed — Pareto blends several frontier and open models per request and keeps the best answer; Unbiased (remote-first startup by ex-Stripe engineers Louis Amira and David Noel-Romas) states it is "not a router" because it never switches models mid-conversation.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the BenchLM Pareto 26.9 page (updated 2026-10-10) still lists exactly **four** rows — all republished from Unbiased's own model card — and assigns **no public overall score (unranked)**, with context "N/A". No independent verification (AA, Vals, ARC Prize) has emerged since the stealth reveal. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Unbiased model card via benchlm.ai — corroborated; trails GPT-6 Astra at 58 on the same board)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49%** (Unbiased model card via benchlm.ai — corroborated; vs GPT-6 Astra 54)
- MMMU-Pro: **78%** (corroborated); ArXivMath: **88%** (vendor card, prior pass)
- GPQA Diamond: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no independent entry (BenchLM explicitly unranked)

Coding:

- DeepSWE: **74%** (Unbiased model card via benchlm.ai — corroborated; ties GPT-6 Astra and DeepSeek 4.1 Flash at 74; ~73% independently read off OpenRouter's launch-day chart — Siora)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (no MRCR / RULER / GraphWalks at window length found)

Operational notes (context, not scored): ~24 tok/s throughput, ~16.5 s P50 latency, 98.14% availability (Siora API spec table, 2026-09-17) — an agentic workhorse profile, not an interactive-chat profile.

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: BenchLM's continued unranked status with the identical four-row vendor evidence base provides no new measurement.

- **Tool use: 63/100.** Terminal-Bench 4.0 at 51% (vs frontier Astra 58) lands mid-band on the newest harness, and the complete absence of Tau3/GDPval/Claw numbers costs the usual cross-checks — capped in the low 60s pending independent agentic runs.
- **Reasoning: 87/100.** HLE 49% without tools clears the 40%+ frontier reference band, with ArXivMath 88 and MMMU-Pro 78 corroborating; vendor-run-only provenance and no GPQA/LCR/Index data cap it below 90.
- **Context window: 72/100.** 262,144 tokens sits in the 200K–500K tier (BenchLM's "N/A" listing noted); 131K max output noted as caveat; zero published long-context retrieval scores cap the tier mapping.
- **Multimodal: 68/100.** Image input + text output with MMMU-Pro 78 supporting genuine vision competence; no verified PDF/video/audio input keeps it inside the image-in 60–70 band.
- **Coding: 88/100.** DeepSWE 74% reaches the DeepSWE 74%+ frontier reference band (the one row with partial independent corroboration via the OpenRouter launch chart), but the score is vendor-run primarily and Terminal-Bench 4.0 (51 vs Astra 58) trails the frontier — held just under 90 until independently reproduced.
- **Cost efficiency: 72/100.** Current paid pricing $2.50 in / $7.50 out per 1M sits between the ~88 band ($1.25/$4.25) and the ~60 band ($3/$15), with the $0.25 cached-input rate softening agentic loops; the $0 free window lasted only 33 hours and is over.
- **Overall Score: 75.6/100.** (63 + 87 + 72 + 68 + 88) / 5 = 378/5 = 75.6 — unchanged. Best fit: a frontier-grade agentic coding/ops pick at mid-market paid pricing — strong default while it exists, but re-verify scores when an independent run or a stable provider identity lands.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 sources: the freshly fetched benchlm.ai Pareto 26.9 page updated 2026-10-10 citing the unbiased.ai model card, the prior 2026-09-21 pass on OpenRouter/Siora/CellCog records, the unbiased.ai vendor card; confirmed unranked with 4 vendor rows and no independent verification; 2026-10-16 re-check: BenchLM Pareto 26.9 page still holds the identical 4 vendor rows, unranked — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
