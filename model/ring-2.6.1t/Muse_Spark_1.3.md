# Ring-2.6-1T — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's trillion-parameter open-weight reasoning flagship (1T total / 63B active) — the thinking half of the 2.6-1T pair with adjustable Reasoning Effort (high/xhigh). MIT open weights; OpenRouter Programming top 10 (May 2026 audit).
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ring-2.6.1t`; also OpenRouter + Novita.
- **Release / knowledge:** 2026-05-08 release (AA + LLM Reference); knowledge cutoff not disclosed.
- **IDs:** `opencode/ring-2.6.1t` (no Free ID on Zen — paid route; MIT self-host free).
- **Context window:** 128K native (256K with YaRN); 262,144 served (AA) — verified via repo meta + AA + LLM Reference (65,536 max output per LLM Reference).
- **Modalities:** Text in/out; reasoning yes (high/xhigh effort modes); JSON/tool use + structured outputs yes.
- **Pricing (as of 2026-10-08):** AA median $0.30 in / $2.50 out per 1M ($0.29/task); cheapest OpenRouter $0.075/$0.625 (cache read $0.015); MIT open weights free self-host.
- **Architecture:** MoE 1T total / 63B active, MIT license, weights on HuggingFace.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **95.3% Tau2-Bench Telecom** (LLM Reference observed 2026-06-07)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (OpenRouter catalog blurb claims leading PinchBench/ClawEval/TAU2/GAIA2-search — no numeric PinchBench/ClawEval/GAIA values published, not counted)

Reasoning / knowledge:

- GPQA Diamond: **88.3%** (LLM Reference Google-Proof Q&A observed 2026-06-07)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **17 / #64 of 117** (AA; below open-large median 18; speed #14/117 at 112.9 t/s, cost #22/117 at $0.29/task, verbosity #16/117 at 120M tokens)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- AIME 2025: **95.8%** (LLM Reference, labeled AIME 2026 accuracy observed 2026-06-07)

Coding:

- SWE-bench Verified / SWE-Pro: **74.0% Verified (rank 47/90)** (LLM Reference observed 2026-06-07); Pro unreported
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 128K native / 256K YaRN / 262K served.

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2-Telecom 95.3pct is elite tool-use evidence + JSON/tool-use + high/xhigh effort + Programming top 10; capped with no TB/GDPval/Claw numeric rows.
- **Reasoning: 80/100.** GPQA 88.3pct + AIME 95.8pct are strong; Index 17 (below median 18) tempers — capped with no HLE/LCR/CritPt rows.
- **Context window: 84/100.** 262K served / 256K YaRN (256K+ tier) + fast 112.9 t/s; capped under 1M band (native 128K), no measured retrieval score.
- **Multimodal: 15/100.** Text-only — floor tier.
- **Coding: 76/100.** SWE-Verified 74.0pct (rank 47/90); capped with no Pro/LCB/SciCode/Vibe rows.
- **Cost efficiency: 95/100.** MIT self-host free + $0.075/$0.625 cheapest API ($0.29/task, fairly concise 120M) — near-maximum value.
- **Overall Score: 68/100.** Mean of five non-cost dims (84+80+84+15+76)/5 = 67.8 → 68; best for self-hosted reasoning agent work where tau2/GPQA + MIT weights beat text-only 262K limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Ring-2.6-1T page, LLM Reference page with peer bars); unnumbered vendor blurbs not counted; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
