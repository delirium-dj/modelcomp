# Grok 4 Fast — findings by Muse Spark 1.3

- Source: xAI/Grok 4 Fast (`opencode/grok-4-fast`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient reasoning variant with Grok-4-class performance at 40% fewer thinking tokens and a 2M context window. Top use case: high-volume agentic workloads where per-token cost dominates.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, aliases `grok-4-fast`, `grok-4-fast-reasoning-latest`); OpenCode Zen ID `opencode/grok-4-fast`.
- **Release / knowledge:** 2025-09-19 release; knowledge cutoff Jul 2025 (Puter model card, sourced from xAI release data).
- **IDs:** `opencode/grok-4-fast` (Zen-hosted; xAI native ID `grok-4-fast-reasoning`).
- **Context window:** 2,000,000 tokens (xAI docs — verified); higher per-token rates apply above 128K prompt tokens. No public retrieval-at-length numbers found.
- **Modalities:** Text + image in; text out; reasoning yes; function calling + structured outputs yes (xAI docs).
- **Pricing (as of xAI docs, current):** $0.20 input / $0.05 cached / $0.50 output per 1M (us-east-1, eu-west-1); batch pricing available.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (closest proxy, provisional: Grok-4-class base per xAI "similar to Grok 4" positioning)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified, Grok 4 Fast (Reasoning) (Vals AI, by task difficulty): **66% (<15 min) / 37% (15m–1h) / 7% (1–4h) / 0% (4h)** (Vals AI SWE-bench page, updated 2026-09-01)
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (2M window verified via xAI docs; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 62/100.** Function-calling + structured-output support is verified, but zero public agentic benchmark numbers (TB/Tau/GDPval) exist for this ID; capped at 62 on Grok-4-class proxy alone.
- **Reasoning: 68/100.** Provisional on xAI's Grok-4-class positioning at 40% fewer thinking tokens; capped hard with no public GPQA/HLE/Index score for the Fast cut.
- **Context window: 98/100.** Verified 2M window (xAI docs) clears the ≥1M tier; held below 100 for lack of any published ≥512K retrieval-fidelity measurement (and long-prompt repricing above 128K noted as caveat, not penalty).
- **Multimodal: 65/100.** Text + image in, text-only out — mid-band of the 60–70 image-in tier.
- **Coding: 64/100.** Vals SWE-bench splits (66/37/7/0) show fast short-task fixes collapsing on 1h+ tasks; capped by the steep difficulty falloff and no SWE-Pro/LiveCode numbers.
- **Cost efficiency: 97/100.** $0.20/$0.50 paid pricing sits essentially at the ~$0.10/$0.20 (97–99) value reference; xAI claims up to 64x cost reduction vs early frontier models.
- **Overall Score: 71/100.** Mean of the five non-cost dims (62 + 68 + 98 + 65 + 64) / 5 = 71.4 → 71; best fit as a cheap high-volume reasoning/agent tier, not a hard-task solver.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (xAI official docs for grok-4-fast-reasoning, Puter model card, Vals AI SWE-bench page, pricepertoken provider comparison, xAI release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
