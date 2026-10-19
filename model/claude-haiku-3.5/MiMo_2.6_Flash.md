# Claude Haiku 3.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/claude-3-5-haiku (Claude 3.5 Haiku — RETIRED)
- Date: 2026-10-19 (UTC; original research 2026-10-03, re-researched 2026-10-19)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku (fast tier of Anthropic's 3.5 generation; **RETIRED 2026-02-19** — deprecated 2025-12-19, shut down 2026-02-19, API requests now fail; recommended replacement Claude Haiku 4.5)
- **Short description:** Anthropic's former small fast model (launched as a Claude 3 Opus-beating workhorse at Haiku prices); was used for high-volume lightweight classification/extraction/chat. Not a variant of another tracked entry (Haiku 4.5 is a separate successor).
- **Provider / access:** **None live** — retired from the Anthropic Claude API (Anthropic model-deprecations page; modeldeprecations.dev verified 2026-07-30: "API requests to it now fail"). Historical: Anthropic Messages API, Amazon Bedrock, Google Vertex AI; Chat Completions style with tool use.
- **Release / knowledge:** 2024-10-22 announcement / 2024-11-04 general availability; deprecated 2025-12-19; **retired 2026-02-19**. Training cutoff July 2024.
- **IDs:** `claude-3-5-haiku-20241022` / `claude-3-5-haiku-latest` (same lifecycle; now dead).
- **Context window:** 200,000 tokens input; max output 8,192 tokens at launch (documented cap caveat).
- **Modalities:** text + image in (vision added 2025-02-25), text out; no reasoning/thinking mode; tool calls yes; no audio/video.
- **Pricing (historical — model no longer purchasable):** $0.80 in / $4.00 out per 1M (cut from launch $1/$5 on 2024-12-05).
- **Architecture:** proprietary dense transformer; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **24.6%** (benchgap measured, dataset 2026-10-18)
- GDPval-AA: **0.0%** (benchgap measured)
- Terminal-Bench / Tau3 / Claw-Eval / MCP-Atlas: no verified public score found (benchgap estimates only: Toolathlon-Verified 0.0 medium, MCP Atlas 56.7 low, AA Tau3 Banking 10.7 low)
- Tool calling: supported (Anthropic tool-use docs) — historical

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (benchgap measured; AA-run 40.8%) — supersedes the older Serenities 35% (better-sourced, same ballpark)
- HLE: **3.6%** (AA-run measured via benchgap; AA-LCR **27.3%**, Omniscience **13.2% acc**, CritPt **0.0%** — all AA measured)
- Artificial Analysis Intelligence Index: **8.9** (AA v4.3.2 measured via benchgap)
- MMLU-Pro: **65.0%** (benchgap measured, supersedes Serenities 60%); MMLU 80.3%, BBH 86.6%, AIME 2024 5.3% (benchgap measured)
- IFEval: **85.9%** / AA-IFBench 42.8% (benchgap measured); ARC-AGI: est. 1.4% (benchgap) — Serenities' older 12% figure not corroborated, flagged legacy

Coding:

- SWE-bench Verified: **40.6%** (benchgap measured) vs **22.0%** (Serenities AI stricter harness) — **conflict noted, both retained**
- LiveCodeBench: 50.0% (benchgap estimate, low confidence) vs 28.0% (Serenities measured) — no modern verified measured row
- HumanEval+: 74.0% (Serenities, legacy); SciCode: 27.8% (benchgap estimate, medium)
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 200K window; no MRCR / RULER figure published (benchgap MRCRv2 est. 22.8%, low confidence)

Multimodal:

- **AA-MMMU-Pro: 45.6%** (benchgap measured) — first hard vision number found for this SKU; weak-mid, consistent with a 2024-era vision add-on
- Other vision rows estimates only (MMMU 65.5 low conf, MathVision 81.5 medium)

### Normalized scores (1–100)

- **Tool use: 52/100.** New measured rows this pass: τ²-bench 24.6% (top of the Tau mid band 10–25) but GDPval-AA 0.0%; still no Terminal-Bench/Tau3/Claw-Eval measurement — barely above the 50 neutral (was 50 with zero data).
- **Reasoning: 47/100.** Better-sourced measured set: GPQA 41.6% (still far under the 60–80 mid band), HLE 3.6%, LCR 27.3%, AA Index 8.9 (under the 20–35 mid band), MMLU-Pro 65.0% and BBH 86.6% keep it off the floor — entry-tier reasoning confirmed (was 45).
- **Context window: 70/100.** 200K maps exactly to the documented anchor (200K = 70); 8K max-output cap remains the caveat. Unchanged.
- **Multimodal: 62/100.** First hard number: AA-MMMU-Pro 45.6% measured — mid-low but real vision capability, consistent with the +image-in band (60–70); text-only out caps it (was 63 without any vision measurement — nudged down on evidence).
- **Coding: 52/100.** SWE-bench Verified **40.6%** measured (benchgap) — materially higher than the older Serenities 22% under a stricter harness (conflict retained); LiveCodeBench still has no verified measured row (est. 50 vs Serenities 28). Between entry and mid band (was 45).
- **Cost efficiency: 90/100.** Historical $0.80/$4.00 (model retired 2026-02-19 — no current price exists; score kept on last served rates).
- **Overall Score: 57/100.** (52 + 47 + 70 + 62 + 52) / 5 = 56.6 → 57 (was 55 — better-sourced SWE-V/τ²/GPQA lifts it +2). Best-fit note: **retired model** — no live endpoint; historical record only. Migrate to Claude Haiku 4.5 for any budget-Anthropic workload.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured/estimate ledger, Anthropic model-deprecations page, modeldeprecations.dev retirement record, Anthropic models overview; plus 2026-10-03 original: Anthropic Haiku page, Simon Willison, Serenities AI sets, pricing history) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
