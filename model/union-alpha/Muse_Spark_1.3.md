# Union Alpha — findings by Muse Spark 1.3

- Source: Unbiased/Pareto 26.9 (stealth `union-alpha`), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Unbiased's blended Pareto 26.9 model (multiple frontier + open models per request, best answer kept) that ran as the `union-alpha` stealth preview. Top use case is DeepSWE-class agentic coding where a $2.50/$7.50 blended bill still undercuts Fable/Astra.
- **Provider / access:** OpenCode Zen `opencode/union-alpha` at `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, OpenAI-compatible). Also OpenRouter `stealth/union-alpha` (preview, now `unbiased/pareto`).
- **Release / knowledge:** 2026-09-16 stealth listing (OpenRouter/OpenCode Zen/Cloudflare); revealed 2026-09-17 23:24 UTC as Unbiased Pareto 26.9; knowledge cutoff undisclosed
- **IDs:** `opencode/union-alpha` (Zen); `unbiased/pareto` (OpenRouter named); `stealth/union-alpha` (expired preview page)
- **Context window:** 262,144 total in, 131,072 max out — verified via OpenRouter catalog API (quoted in Capital & Compute 2026-09-18 and CellCog 2026-09-16)
- **Modalities:** text + image in; text out; reasoning control not exposed; tool calling yes (tool_choice supported); JSON mode via standard chat API
- **Pricing (as of 2026-09-22):** Paid $2.50 in / $7.50 out / $0.25 cached per 1M (Unbiased card + OpenRouter listing agree). Free preview ($0) ran only ~33 hours 2026-09-16→17, against the announced week — scored on paid pricing. Privacy split: Zen documents zero-retention/no-training, OpenRouter preview listing allowed provider retention without training.
- **Architecture:** proprietary blended composite (Unbiased, Circuit & Chisel) — several models run per request with a selection layer; params, MoE status, and weights undisclosed; no open weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Unbiased Pareto 26.9 model card, vendor-run, 2026-09-17; Fable 5.1 56, GPT-6 Astra 58, DeepSeek 4.1 Flash 31 on same card)
- Terminal-Bench 4.0 community: **~52% at ~$1.60/task** (OpenCode Artificial-Analysis-branded chart 2026-09-16, read off chart, anticipated pricing — provisional, consistent with vendor 51; no printed number)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OpenCode coding snapshot: **23.14/40 across 4 projects at ~$0.03/prompt** (community snapshot quoted in buildfastwithai review 2026-09-16 — provisional, small sample, not a standardized leaderboard score)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (no tools): **49%** (Unbiased model card, vendor-run; Fable 5.1 55, Astra 54, DeepSeek 4.1 Flash 39 on same card)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA index page or independent leaderboard entry as of 2026-09-19)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU-Pro: **78%** (Unbiased card, vendor-run; Fable 81, Astra 87, DeepSeek 77 on same card)
- ArXivMath: **88%** (Unbiased card, vendor-run; Fable 72, Astra 91, DeepSeek 28 on same card)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (OpenRouter CEO claim 2026-09-16 of outscoring GPT-5.6 Sol on SWE-Verified printed no numbers — unscored)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **74%** (Unbiased card, vendor-run; ties GPT-6 Astra 74 and DeepSeek 4.1 Flash 74, beats Fable 5.1 67 — most relevant agent-coding row)
- DeepSWE community: **~73% near $0/task** (OpenRouter CEO chart 2026-09-16, read off chart with no printed number — provisional, consistent with vendor 74)
- Terminal-Bench 2.1: **no verified public score found** (claims of beating Sol/Opus 5 on TB2.1 printed no numbers — unscored)

Long context:

- **No long-context retrieval reported at a stated window length** (262,144 context verified; no MRCR/RULER/GraphWalks percentage published)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 78/100.** TB4.0 51 sits 5–7 pts behind Astra/Fable but well ahead of MiMo-V2.6-Pro (34.9) and DeepSeek Flash (31); capped by zero Tau/GDPval/Atlas runs and vendor-only provenance.
- **Reasoning: 82/100.** HLE 49 near frontier with ArXivMath 88 close to Astra 91 and MMMU-Pro 78 slightly ahead of DeepSeek; capped by missing GPQA/LCR/CritPt/Index runs.
- **Context window: 74/100.** 262K tier (200K–500K maps 65–84, 200K = 70); capped by zero measured retrieval at length.
- **Multimodal: 65/100.** Text + image in, text out (image-input verified, no video/audio); mid image-in band.
- **Coding: 86/100.** DeepSWE 74 ties the Astra/DeepSeek frontier lead for agent coding; capped by unscored SWE-Verified/TB2.1 claims and TB4.0 trailing Astra by 7.
- **Cost efficiency: 70/100.** Paid $2.50/$7.50 ($0.25 cached) — ~1/4 Fable input, ~15% output per Unbiased; free window lasted only 33 hours so scored on paid.
- **Overall Score: 77/100.** Mean of the five non-cost dims (78+82+74+65+86)/5 = 77.0 → 77; best-fit as DeepSWE-parity blended coder for retry-tolerant agent work behind a model switch, not hardwired.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-22
- Method: public internet research (Unbiased Pareto 26.9 card via CellCog/Capital & Compute 2026-09-16→18, OpenRouter + OpenCode charts with times, buildfastwithai review, OpenCode data page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
