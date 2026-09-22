# Union Alpha — findings by GLM 5.3 Flash

- Source: Unbiased / Pareto (`unbiased/pareto`, launched anonymously as `stealth/union-alpha`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha — revealed as **Pareto** by Unbiased
- **Short description:** Stealth multimodal model that appeared free on OpenRouter on 2026-09-16 and was revealed 33 hours later as Pareto, a served blend of several frontier and open models by Unbiased (Circuit & Chisel), tuned for research, coding, and agentic workflows. It is a blended product, not one lab's weights — distinct entry from the earlier GLM stealth drop (Ox Alpha = GLM-5.3-Flash).
- **Provider / access:** OpenRouter `stealth/union-alpha` (2026-09-16 14:42 UTC) renamed `unbiased/pareto` (2026-09-17 23:24 UTC); OpenCode carried the preview as `opencode/union-alpha` (free window 33 h, now closed). OpenAI-compatible Chat Completions API; tool calling (`tools` + `tool_choice`) and JSON output (`response_format`, no JSON-schema enforcement).
- **Release / knowledge:** Appeared 2026-09-16, revealed 2026-09-17 (UTC). Knowledge cutoff: not published — as a per-request blend there is no single training cutoff to cite.
- **IDs:** `unbiased/pareto` (OpenRouter, ex-`stealth/union-alpha`); OpenCode preview ID `opencode/union-alpha`. No Free ID remains on Zen — the $0 window closed with the reveal. No open weights (served blend).
- **Context window:** 262,144 total; 131,072 max output (verified via the OpenRouter model API endpoint as tabulated by Siora, 2026-09-17).
- **Modalities:** text + image in / text out; tool calling; JSON output; reasoning left at provider default. No verified audio/video/PDF input evidence found.
- **Pricing (as of 2026-09-21):** $2.50 in / $0.25 cached in / $7.50 out per 1M tokens (unbiased/pareto). Was $0/$0 for ~33 h (2026-09-16 14:42 → 2026-09-17 23:24 UTC). Stealth-preview data terms: prompts/completions may be retained by the provider, not used for training.
- **Architecture:** undisclosed — Pareto blends several frontier and open models per request and keeps the best answer; Unbiased (remote-first startup by ex-Stripe engineers Louis Amira and David Noel-Romas) states it is "not a router" because it never switches models mid-conversation.

### Raw benchmarks found

> All scored numbers below are **vendor-run** (Unbiased's "Pareto 26.9" model card) — no independent leaderboard entry or third-party harness run existed as of 2026-09-21. Treat as provisional.

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Unbiased model card via CellCog reveal record, 2026-09-18; trails GPT-6 Astra at 58 on the same board)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49%** (Unbiased model card; vs GPT-6 Astra 54)
- MMMU-Pro: **78%** (Unbiased model card; vs Astra 87)
- ArXivMath: **88%** (Unbiased model card; vs Astra 91)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no independent entry as of 2026-09-21)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE: **74%** (Unbiased model card; ties GPT-6 Astra and DeepSeek 4.1 Flash at 74; ~73% independently read off OpenRouter's launch-day chart — Siora, 2026-09-17)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks at window length found)

Operational notes (context, not scored): ~24 tok/s throughput, ~16.5 s P50 latency, 98.14% availability (Siora API spec table, 2026-09-17) — an agentic workhorse profile, not an interactive-chat profile.

### Normalized scores (1–100)

- **Tool use: 63/100.** Terminal-Bench 4.0 at 51% (vs frontier Astra 58) lands mid-band on the newest harness, and the complete absence of Tau3/GDPval/Claw numbers costs the usual cross-checks — capped in the low 60s pending independent agentic runs.
- **Reasoning: 87/100.** HLE 49% without tools clears the 40%+ frontier reference band, with ArXivMath 88 and MMMU-Pro 78 corroborating; vendor-run-only provenance and no GPQA/LCR/Index data cap it below 90.
- **Context window: 72/100.** 262,144 tokens sits in the 200K–500K tier (200K = 70 baseline, scaled slightly up for the extra headroom); 131K max output noted as caveat; zero published long-context retrieval scores cap the tier mapping.
- **Multimodal: 68/100.** Image input + text output with MMMU-Pro 78 supporting genuine vision competence; no verified PDF/video/audio input keeps it inside the image-in 60–70 band.
- **Coding: 88/100.** DeepSWE 74% reaches the DeepSWE 74%+ frontier reference band, but the score is vendor-run only and Terminal-Bench 4.0 (51 vs Astra 58) trails the frontier by 7 — held just under 90 until independently reproduced.
- **Cost efficiency: 72/100.** Current paid pricing $2.50 in / $7.50 out per 1M sits between the ~88 band ($1.25/$4.25) and the ~60 band ($3/$15), with the $0.25 cached-input rate softening agentic loops; the $0 free window lasted only 33 hours and is over.
- **Overall Score: 76/100.** (63 + 87 + 72 + 68 + 88) / 5 = 75.6 → 76. Best fit: a frontier-grade agentic coding/ops pick at mid-market paid pricing — strong default while it exists, but re-verify scores when an independent run or a stable provider identity lands.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-21
- Method: public internet research (OpenRouter reveal records, Siora API spec table, CellCog reveal tracker, Unbiased model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

