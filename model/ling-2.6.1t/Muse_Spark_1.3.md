# Ling-2.6-1T — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** InclusionAI's trillion-parameter instruct (non-thinking) flagship — 1T total / 63B active sparse MoE with hybrid MLA + linear attention and fast-thinking compressed CoT. MIT open weights.
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ling-2.6.1t`; also OpenRouter `inclusionai/ling-2.6-1t` (+ free tier) and Novita.
- **Release / knowledge:** 2026-04-23 release (AA); knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-2.6.1t`
- **Context window:** 262,144 total (AA 262K/260K) — verified.
- **Modalities:** Text in/out only; non-reasoning (fast-thinking compressed CoT, no extended thinking); JSON/tool-use supported.
- **Pricing (as of 2026-10-08):** MIT open weights (free self-host); hosted AA median $0.30 in / $2.50 out per 1M; cheapest OpenRouter $0.075/$0.625; free OpenRouter endpoint exists.
- **Architecture:** MoE 1.0T total / 63B active, hybrid MLA + linear attention, MIT license, weights on HuggingFace.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **17 estimated / #14 of 46 open non-reasoning large class** (AA; above class median 12)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- AIME26: SOTA claimed by vendor blurb (LLM Reference "state-of-the-art results on AIME26" — no numeric value published, so not counted as verified)

Coding:

- SWE-bench Verified / SWE-Pro: vendor-claimed SOTA on SWE-bench Verified (LLM Reference blurb, no numeric value published — **no verified public score found** numerically)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 58/100.** No measured agent rows; 1T fast-thinking instruct built for large-scale agentic workflows with tool-use support — low-mid estimate above the 107B sibling, capped hard with zero measured rows.
- **Reasoning: 66/100.** AA Index 17 est (#14/46 large class, above median 12) is the only numeric composite; AIME26 SOTA claimed but unnumbered; capped with no GPQA/HLE/LCR/CritPt rows.
- **Context window: 82/100.** 262K total verified (256K+ tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only (no image input per AA) — floor tier.
- **Coding: 60/100.** SWE-Verified SOTA claimed but unnumbered; capped as estimate with no numeric SWE/LCB/SciCode/Vibe rows.
- **Cost efficiency: 95/100.** MIT open weights (free self-host) + free OpenRouter endpoint + $0.075/$0.625 cheapest API.
- **Overall Score: 56/100.** Mean of five non-cost dims (58+66+82+15+60)/5 = 56.2 → 56; best for self-hosted 1T-class text work where MIT weights + 262K outweigh missing numeric frontier rows.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Ling-2.6-1T page, LLM Reference page); vendor SOTA blurbs without numbers not counted as verified; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
