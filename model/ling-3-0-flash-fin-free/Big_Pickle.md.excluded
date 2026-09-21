# Ling 3.0 Flash Fin Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** Finance-enhanced reasoning MoE (InclusionAI / Ant Group) built for financial research, multi-step investment workflows, and tool use; retains strong coding/math. Free tier on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`) at `https://opencode.ai/zen/v1/chat/completions`; Vercel AI Gateway (`inclusionai/ling-3.0-flash-fin-free`); weights on HuggingFace + ModelScope; APIs on OpenRouter/Vercel
- **Release / knowledge:** base Ling-3.0-flash 2026-07-27; Fin variant 2026-08-27; open-sourcing announced 2026-09-09 (Business Wire; "Inclusion·Conference on the Bund")
- **IDs:** `opencode/ling-3.0-flash-fin-free`
- **Context window:** 262,144 (Zen/Pi) / 256,000 (Vercel/HF); 32,768 / 32,000 max output. Independent test confirmed a hard 262,144 limit; base architecture natively 256K (scalable to 1M per Ant).
- **Modalities:** text in / text out; reasoning (thinking mode default on for Fin); function calling. No image/audio/video reported on Zen.
- **Pricing (as of 2026-09-17):** Free / Free / Free on Zen (limited-time). Base: 124B total / 5.1B active hybrid-linear MoE (35 KDA + 7 MLA, 512 routed + 1 shared, 8 active).
- **Privacy:** free-period data may be used to improve the model — no confidential financial filings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: vendor protocol documented (AA Terminus 2 harness, 256K) but **no public numeric score found**.
- Tau3-banking-AA: vendor evaluated on AA leaderboard; **no public numeric score found**.
- GDPval-AA: vendor claims strong; **no public numeric score found**.
- Claw-Eval / MCP-Atlas / SWE-Bench Pro / SpreadsheetBench / Finance Agent: vendor "strong" claims; numbers not published in sources fetched.

Reasoning / knowledge:

- Independent eval (frangelbarrera/Ling-3-flash-evaluation): overall **7.0/10**; MMLU+GPQA 100% (small sample n≈35); tool-calling schema 45/45 valid, 0/10 invented params; HumanEval 19/19 syntactically valid.
- BenchLM base `ling-3-0-flash`: **53.9/100, #110/228**, strongest Instruction Following #24.
- HLE / CritPt / MRCR: **no verified public score found**.

Coding:

- Independent HumanEval validation 19/19 (subset, author-authored — not leaderboard-comparable); vendor claims SWE-Pro/Multilingual/MiniAppBench; **no SWE-bench Verified / LiveCodeBench public number found**.

Long context:

- Hard limit independently verified at 262,144 tokens (raw API returns "HTTP 400: maximum context length is 262144 tokens").
- Known quirks captured by the independent eval: reasoning-effort param inert; `max_tokens` 128 → empty output, ≥2048 → 0% failure (oC1-style budget bug).

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling verified clean (0 invented params), but no public TB/Tau3/GDPval numbers — penalized.
- **Reasoning: 68/100.** Small-sample MMLU/GPQA perfect + modest BenchLM; no frontier-scale evidence.
- **Context window: 72/100.** 262K tier, verified limit; 32K output small-ish.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Clean HumanEval syntax; no public SWE/LiveCode numbers. Finance-vs-coding balance favors Fin niche.
- **Cost efficiency: 100/100.** $0 free tier.
- **Overall Score: 58/100.** Niche finance pick; verify on real financial+Swe tasks before relying.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (Business Wire press release, HuggingFace, Vercel changelog, GitHub eval, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.