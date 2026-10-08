# MAI-Code-1.1-Flash — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable coding model for GitHub Copilot — fast agentic coding with image and PDF input. Sparse MoE successor to MAI-Code-1-Flash with ~25% better token efficiency at ~1/4 the cost.
- **Provider / access:** Microsoft AI + GitHub Copilot + OpenCode Zen `opencode/mai-code-1.1-flash`.
- **Release / knowledge:** 2026-08-11 release (LLM Reference, Copilot launch); knowledge cutoff 2025-12.
- **IDs:** `opencode/mai-code-1.1-flash`
- **Context window:** 256,000 total (128,000 max output) — verified via repo meta + LLM Reference.
- **Modalities:** Text, image, PDF in; text out; reasoning yes; JSON/tool use + prompt caching yes.
- **Pricing (as of 2026-10-08):** $0.20 input / $1.20 output per 1M (Copilot models-and-pricing), cached input $0.02. Paid only.
- **Architecture:** Sparse MoE 138B total / 5B active (model card per LLM Reference); proprietary, weights not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (LLM Reference observed 2026-10-08, Copilot harness)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **72.6% Verified (rank 55/90)** (LLM Reference observed 2026-10-08, Copilot harness); Pro unreported
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 256,000 total.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.1 62.9pct (newer harness) + Copilot-harness tuning + ~25pct token efficiency gain; capped with no Tau/GDPval rows.
- **Reasoning: 68/100.** No GPQA/HLE/LCR/CritPt/Index rows — estimate from coding-model reasoning + MoE 138B/5B; capped hard with zero measured knowledge rows.
- **Context window: 82/100.** 256K total / 128K output verified (256K tier below 1M); capped under 1M band, no measured retrieval score.
- **Multimodal: 70/100.** Text+image+PDF in (native vision), text out — vision band; capped at text-out only, no video/audio.
- **Coding: 76/100.** SWE-Verified 72.6pct (rank 55/90) in Copilot harness; capped with no Pro/LCB/SciCode/Vibe rows.
- **Cost efficiency: 80/100.** $0.20/$1.20 paid (~1/4 of 1-Flash cost) + $0.02 cache — strong value for vision-capable coding.
- **Overall Score: 74/100.** Mean of five non-cost dims (76+68+82+70+76)/5 = 74.4 → 74; best for Copilot agentic coding with vision where TB2.1 + efficiency + low price beat text-only 1-Flash.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (LLM Reference page refreshed 2026-10-08, repo meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
