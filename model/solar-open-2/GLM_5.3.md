# Solar Open 2 — findings by GLM 5.3

- Source: Upstage (`solar-open-2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights flagship for flexible enterprise fine-tuning and domain-specific knowledge integration (Hugging Face `upstage/Solar-Open2-250B`) — strong math/knowledge and Korean benchmarks with a 1M window, built to be adapted rather than used off-the-shelf.
- **Provider / access:** self-host via open weights (Hugging Face `upstage/Solar-Open2-250B`); Upstage API at standard pricing. Project meta lists Zen ID `opencode/solar-open-2` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026 (exact date not pinned on tracked pages); knowledge cutoff not stated.
- **IDs:** `opencode/solar-open-2` (project meta); Hugging Face `upstage/Solar-Open2-250B`.
- **Context window:** 1M per the official model card via BenchLM (the project meta's 65,536 appears to be a stale placeholder — scored from the model-card figure); max output split not published.
- **Modalities:** text in/out only; reasoning yes; tool calls yes (MCP Atlas / terminal results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** open weights — free self-hosting; hosted API at standard Upstage pricing (per-token rate not published for this ID).
- **Architecture:** 250B-class open-weight model (per the HF repository name); license terms per the HF repo (not verified in this pass).

### Raw benchmarks found

> All capability numbers are vendor-run from the official model card (tracked by BenchLM; 15 rows, unranked composite). No independent aggregator coverage exists (Artificial Analysis 404).

Agent / tool use:

- MCP Atlas: **58.2%** (Upstage Solar Open 2 model card via BenchLM)
- terminalBench-Hard: **28.3%** (model card via BenchLM)
- APEX-Agents: **16.6%** (model card via BenchLM)
- GDPval / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (model card via BenchLM)
- MMLU-Pro: **86.2%** (model card via BenchLM)
- HLE w/o tools: **28.8%** (model card via BenchLM)
- AIME26: **95.7%** / HMMT Feb 2026: **93.9%** (model card via BenchLM)
- AA-LCR: **62.3%** (model card via BenchLM)
- Korean: KMMLU-Pro **78.4%** / CLIcK **90.7%** / HRM8K **92.2%** (model card via BenchLM)

Coding:

- LiveCodeBench v6: **92.4%** (model card via BenchLM)
- SWE-bench Verified: **70.4%** (model card via BenchLM)
- SciCode / SWE-bench Pro: **no verified public score found**

Multimodal:

- **no verified public score found** — text-only model.

Long context:

- 1M window per the model card (BenchLM); AA-LCR 62.3% is the only long-context proxy — moderate; no MRCR/RULER published.

Instruction following:

- IFBench: **80%** (model card via BenchLM)

### Normalized scores (1–100)

- **Tool use: 42/100.** MCP Atlas 58.2% is fair, but terminalBench-Hard 28.3% and APEX-Agents 16.6% are weak with no GDPval/Tau coverage — an adaptable tool caller, not a proven autonomous agent.
- **Reasoning: 78/100.** AIME26 95.7%, HMMT 93.9%, GPQA 86.3% and MMLU-Pro 86.2% are near-frontier (with best-in-class Korean scores: CLIcK 90.7%, HRM8K 92.2%); capped by HLE 28.8% (below the 40% ref), AA-LCR 62.3% and vendor-only sourcing.
- **Context window: 90/100.** 1M per the official model card — top tier; not higher because the project meta conflicts (65K placeholder) and no retrieval-quality measurement exists.
- **Multimodal: 15/100.** Text-only input and output — text-only band.
- **Coding: 75/100.** LiveCodeBench v6 92.4% is excellent with SWE-bench Verified 70.4% solid; capped by zero SciCode/SWE-Pro corroboration and vendor-only sourcing.
- **Cost efficiency: 92/100.** Open weights make self-hosting free and fine-tuning is the intended use; hosted per-token pricing is unpublished for this ID (no penalty beyond the unverifiable API rate).
- **Overall Score: 60/100.** (42 + 78 + 90 + 15 + 75) / 5 = 60. Best-fit recommendation: an open-weights base for enterprise fine-tuning — Korean-heavy and math-strong domains especially; weak raw agentics and text-only I/O mean it should be adapted and paired with tooling rather than deployed as a general assistant.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (official model card via BenchLM, project meta, Hugging Face repository); scores are normalized 1–100 interpretations, not official vendor scores. All capability numbers are vendor-run.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
