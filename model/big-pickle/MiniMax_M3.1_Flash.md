# Big Pickle — findings by MiniMax M3.1 Flash

- Source: OpenCode Zen (free stealth tier, underlying vendor disputed), `big-pickle`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen's long-running free stealth slot (live since 2025-10-17) serving a **disputed** underlying model: OpenCode's maintainer confirmed in November 2025 that it was **GLM-4.6**, and by mid-2026 community fingerprinting (provider error strings reading "Error from provider (DeepSeek)") indicated the slot had been **swapped in place to a DeepSeek V4-Flash-class model**. 200K context, 32K output, text-only, $0, and one third-party measurement.
- **Provider / access:** OpenCode Zen `big-pickle` — **still live** (Zen endpoint table, pricing table, free-model list and privacy section; present in `https://opencode.ai/inference/v1/models`), priced **$0 input / $0 output / $0 cache**. **Data policy:** *"During its free period, collected data may be used to improve the model"* — not zero-retention. OpenCode publishes no end date for free models.
- **Release / knowledge:** launched **2025-10-17** (models.dev release_date/last_updated, unchanged since). Knowledge cutoff recorded as **2025-01**.
- **IDs:** `big-pickle` (OpenCode Zen only) — not on OpenRouter, not on Artificial Analysis, not on BenchLM, no Hugging Face weights.
- **Context window:** **200,000** tokens (catalog) with **32,000** max output — the maintainer said "max output is 128k" in 2025, and a community claim puts the true context near 1M; the catalog was never updated.
- **Modalities:** text in / text out only; reasoning model with interleaved `reasoning_content`; tool calling, structured output and temperature supported; no open weights.
- **Pricing (as of 2026-10-20):** **$0 / $0 / $0** (free Zen tier, no published end date).
- **Architecture:** undisclosed — and disputed: GLM-4.6 (maintainer-confirmed) vs a DeepSeek V4-Flash-class model (fingerprinting).

### Raw benchmarks found

> No mainstream benchmark exists for this slot. Exactly one third-party measurement
> has been published, and it targets codebase Q&A rather than coding.

- SWE-Atlas Codebase QnA: **50.8%** (63/124) — third-party direct evaluation of the Zen route (https://github.com/PhillipChaffee/big-pickle-swe-atlas)
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / GPQA / HLE / LiveCodeBench / DeepSWE / MMMU-Pro / MRCR: **no verified public score found** — Artificial Analysis `/models/big-pickle` → 404, BenchLM `/models/big-pickle` → 404, absent from the OpenRouter catalogue, no HF weights, and third-party trackers deliberately leave it unscored ("so live rankings leave it unscored", opensource-model-tracker, 2026-09-30)
- Operational reports rather than scores: mixed-script token soup, inline CoT leaks and gateway-wide unavailability (OpenCode issues #52033, #54599, #55268, #50282)

### Normalized scores (1–100)

- **Tool use: 40/100.** No Terminal-Bench, τ², GDPval or OSWorld measurement exists; the SWE-Atlas codebase-Q&A eval is the only signal, and it is a retrieval/QA task rather than an agentic one.
- **Reasoning: 45/100.** No GPQA, HLE, AIME or MMLU figure has ever been published for this slot, and the underlying model has been swapped at least once — capability cannot be attributed to a stable checkpoint.
- **Context window: 70/100.** 200,000 tokens with 32,000 max output is the 200K tier, discounted for the conflicting "128k output"/"~1M context" claims.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 55/100.** SWE-Atlas 50.8% is a mid-band codebase-Q&A result with no SWE-bench, Terminal-Bench or LiveCodeBench figure to sit beside it.
- **Cost efficiency: 100/100.** The evaluated tier is **free** ($0 in/out/cache) with no published end date.
- **Overall Score: 45/100.** Mean of the five quality dims = (40 + 45 + 70 + 15 + 55) / 5 = 45.0 → **45**. Best fit: free, unmeasured experimentation — the one free Zen slot that has survived every purge, but treat its capability as unknown rather than as GLM-4.6.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (models.dev catalogue, OpenCode Zen docs and live model endpoint, OpenCode issue #4276 maintainer confirmation and the DeepSeek error-string fingerprint, third-party SWE-Atlas evaluation repo, Artificial Analysis and BenchLM 404 checks, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_2.md`, using the same headings.
