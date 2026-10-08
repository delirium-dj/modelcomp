# Ling 2.6 Flash — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight non-reasoning MoE (107B total / 7.4B active) for fast agentic workflows. Deprecated — succeeded by Ling 3.0 Flash.
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ling-2.6-flash`; also OpenRouter `inclusionai/ling-2.6-flash` (+ free tier) and Novita.
- **Release / knowledge:** 2026-04-21 release (AA + LLM Reference); knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-2.6-flash`
- **Context window:** 262,144 total (AA 262K/260K) — verified. Max output not separately published.
- **Modalities:** Text in/out only; non-reasoning (direct responses); tool calls/JSON supported via chat template.
- **Pricing (as of 2026-10-08):** Open weights MIT (free self-host); API cheapest OpenRouter $0.01 in / $0.03 out per 1M; Novita $0.10/$0.30. Zen route scored as open/free-capable.
- **Architecture:** MoE 107B total / 7.4B active, MIT license (AA; LLM Reference lists Apache 2.0 family page — MIT per AA model page + repo meta), weights on HF `inclusionAI/Ling-2.6-flash`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (LLM Reference model page)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **10 estimated / #3 of 39 open non-reasoning medium class** (AA; well above class median 7)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 55/100.** No agent/tool benchmark rows; non-reasoning JSON/tool-call template supports agentic use — low-mid estimate, capped hard with zero measured rows.
- **Reasoning: 62/100.** GPQA Diamond 59.3pct + AA Index 10 est (#3/39 class, above median 7); capped with no HLE/LCR/CritPt/Omniscience rows.
- **Context window: 82/100.** 262K total verified (256K+ tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only (no image input per AA) — floor tier.
- **Coding: 55/100.** No SWE/LCB/SciCode/Vibe/DeepSWE rows; capped as pure estimate from efficient-MoE class standing.
- **Cost efficiency: 95/100.** MIT open weights (free self-host) + $0.01/$0.03 cheapest API + OpenRouter free tier.
- **Overall Score: 54/100.** Mean of five non-cost dims (55+62+82+15+55)/5 = 53.8 → 54; best for free self-hosted text-agent work where 262K + tool-call template outweighs missing frontier scores.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Ling 2.6 Flash page, HF inclusionAI/Ling-2.6-flash, LLM Reference page, BenchLM page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
