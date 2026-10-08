# Qwen3 Max — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode. Deprecated on AA (Qwen3 Max Thinking newer).
- **Provider / access:** Alibaba + OpenCode Zen `opencode/qwen3-max`; also OpenRouter, Vercel AI Gateway, Novita.
- **Release / knowledge:** 2025-09-23 per AA (LLM Reference family date 2025-04-28); knowledge cutoff 2025-12.
- **IDs:** `opencode/qwen3-max` (no Free ID on Zen — paid only).
- **Context window:** 262,144 total (65,536 max output) — verified via repo meta + AA 262K/260K.
- **Modalities:** Text in/out per AA + repo meta (LLM Reference lists vision/multimodal capability tags — scored text-only per AA/repo with tag noted).
- **Pricing (as of 2026-10-08):** $1.20 input / $6.00 output per 1M (Alibaba; tiered above 32K/128K) per AA + repo meta; cheapest OpenRouter $0.78/$3.90. Paid only.
- **Architecture:** Proprietary (Alibaba; params undisclosed); decoder-only per LLM Reference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **tau-bench 76.8%** (LLM Reference observed 2026-04-24 — suite version unspecified, counted as Tau-family row)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Berkeley Function Calling v3: **71.9%** (LLM Reference observed 2026-04-12)
- MultiChallenge: **41.2%** (LLM Reference observed 2026-04-26)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **16 estimated / #29 of 61 price-tier class** (AA; above class median 15; speed #28/61 at 59.8 t/s)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **78.8% Verified (rank 22/90)** (LLM Reference observed 2026-04-24); Pro unreported
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau-bench 76.8pct + BFCL v3 71.9pct + MultiChallenge 41.2pct; capped with no TB/GDPval rows and unspecified tau version.
- **Reasoning: 64/100.** AA Index 16 est (#29/61, above median 15) is the only composite; capped with no GPQA/HLE/LCR/CritPt rows.
- **Context window: 82/100.** 262K total / 65K output verified (256K+ tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only per AA + repo meta (LLM Reference vision tags noted but unverified by AA) — floor tier.
- **Coding: 78/100.** SWE-Verified 78.8pct (rank 22/90 — strong); capped with no Pro/LCB/SciCode/Vibe rows.
- **Cost efficiency: 55/100.** $1.20/$6.00 paid (tiered; cheapest OR $0.78/$3.90) — mid flagship price, output-heavy.
- **Overall Score: 63/100.** Mean of five non-cost dims (78+64+82+15+78)/5 = 63.4 → 63; best for tool-call-heavy agent coding where tau/BFCL + SWE-V signal outweigh text-only 262K limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Qwen3 Max page, LLM Reference page with peer bars); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
