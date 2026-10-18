# GPT-5.1 Codex Max — findings by GLM 5.3

- Source: OpenAI (`opencode/gpt-5.1-codex-max`)
- Date: 2026-10-17 (UTC) — new folder discovered via the live Zen models endpoint scan
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's December 2025 max-effort tier of the GPT-5.1 Codex line — the "best quality, worst latency" configuration: Vals measured it at 3x slower on SWE-bench Verified and 10x slower on Vibe Code Bench than its siblings, with a +1% SWE-bench Verified gain and a +9.5% Vibe Code gain. Zen deprecated it 2026-07-23 but still serves it.
- **Provider / access:** OpenAI Responses API (`gpt-5.1-codex-max`); Codex CLI/IDE; OpenCode Zen `opencode/gpt-5.1-codex-max` ($1.25 in / $10.00 out per 1M — Zen pricing table; deprecated 2026-07-23, still on the live endpoint per the 2026-10-17 scan).
- **Release / knowledge:** released 2025-12-04 (Vals); knowledge cutoff September 2024 (shared family per AA).
- **IDs:** `opencode/gpt-5.1-codex-max` (Zen); `gpt-5.1-codex-max` (OpenAI). No Free ID.
- **Context window:** 400,000 tokens with 128K max output (Vals; BenchLM lists 400K).
- **Modalities:** text and image in; text out; reasoning yes (Vals runs at effort=high, verbosity=medium); tool calls; file input (Vals listing); Codex-harness agentic use.
- **Pricing (as of 2026-10-17):** $1.25 in / $10.00 out per 1M (Zen; Vals concurs); 90% cache discount per family.
- **Architecture:** proprietary; parameters undisclosed. Vals editorial: "the more suffixes we tack onto these models, the longer they seem to take" — the Max tier trades wall-clock time for a marginal accuracy ceiling.

### Raw benchmarks found

> Harness-attribution caveat: AA measures the GPT-5.1 Codex family under the shared `gpt-5-1-codex` page, so BenchLM's Max rows sourced to AA are family-level measurements (marked accordingly); only the Vals rows are Max-specific runs.

Agent / tool use:

- τ²-bench: **83%** (BenchLM/AA — family-level row, shared with GPT-5.1 Codex)
- Terminal-Bench: "slight regression" vs GPT-5.1 Codex (Vals qualitative, Dec 2025 — no extracted number)
- GDPval-AA / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (BenchLM/AA — family row)
- HLE: **25.7%** (BenchLM/AA — family row)
- AA-LCR: **69.3%**; CritPt **5.7%** (BenchLM/AA — family rows)
- Artificial Analysis Intelligence Index: **23.7** (BenchLM/AA — family row)
- AA-Omniscience: Index **-6.5** (accuracy 39.9%, hallucination rate **77.2%** — family row; the shared GPT-5.1-Codex reliability weakness)
- AA-IFBench: **70.0%** (family row)
- AA-MMMU-Pro: **72.5%** (family row — decent image-in quality)

Coding:

- LiveCodeBench (Vals, Max-specific): **83.56%** (±1.05; #48/143) — below GPT-5.1 Codex's 85.6% on the same board
- Vibe Code Bench v1.1 (Vals, Max-specific): **22.17%** (±3.84; #78/113) — weak absolute, but a +9.5% boost over the family (the Max tier's headline gain)
- SWE-bench Verified: **+1% over GPT-5.1 Codex, #4 on Vals' board at release** (Vals qualitative, Dec 2025 — exact value not extracted); "3x slower" than siblings on the same bench
- Vals accuracy composite: **52.86%**
- BenchLM composite: not computed (13 rows, unranked)

Long context:

- 400K window (Vals); AA-LCR 69.3% (family row) is the long-context proxy — moderate; no MRCR/RULER published.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ² 83% (family row) is solid conversational tool work and the Codex harness ships full agentic tooling, but the Max tier's only Max-specific agent evidence is a qualitative Terminal-Bench regression, no GDPval/Tau3 rows exist, and family rows are shared with the cheaper base 5.1 Codex.
- **Reasoning: 60/100.** The family profile — GPQA 86.0%, HLE 25.7%, AA II 23.7 (20–35 mid band), CritPt 5.7% near-floor, and a 77.2% hallucination rate with the Sep-2024 cutoff — is the same as GPT-5.1 Codex's (scored 60 there); no Max-specific reasoning rows exist to justify a different score.
- **Context window: 78/100.** 400K verified with 128K max output (Vals) — 200K–500K tier; no retrieval-quality measurement.
- **Multimodal: 65/100.** Text + image input verified (family AA row, MMMU-Pro 72.5%); text-only output — mid image-in band.
- **Coding: 68/100.** LiveCodeBench 83.56% and the +9.5% Vibe Code boost over the family are real Max-specific gains, and SWE-bench Verified #4-at-release with +1% over the base is the tier's purpose; capped by the weak absolute VCB 22.17%, the #48 current LCB rank, and the 3-10x latency penalty that makes the marginal gains poor value in interactive loops.
- **Cost efficiency: 72/100.** Identical token price to GPT-5.1 Codex ($1.25/$10) but 3-10x the wall-clock cost for a ~1-9% accuracy edge — you pay in time what you don't pay in tokens; the 90% cache discount and deprecation-era availability soften it slightly.
- **Overall Score: 66/100.** Half-up mean of the five quality dims (60 + 60 + 78 + 65 + 68) / 5 = 66.2 → 66. Best-fit recommendation: a deprecated batch-mode ceiling-seeker — run it on the hardest one-shot SWE problems where wall-clock doesn't matter and a 1% accuracy edge does; for everything else, the base GPT-5.1 Codex (or its successors) delivers ~99% of the quality at 3-10x the speed.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-17
- Method: public internet research (BenchLM 13-row profile with family-row attribution flags, Vals AI model page with the Dec-2025 Max-specific coding evals and latency commentary, live Zen models endpoint + pricing + deprecation table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
