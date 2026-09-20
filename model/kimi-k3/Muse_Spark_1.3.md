# Kimi K3 — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship multimodal MoE)
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** Moonshot AI via Kimi API (17 providers) + HF weights (Kimi K3 License); no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-16 release; knowledge cutoff undisclosed
- **IDs:** `moonshotai/kimi-k3` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) in / 1M out — verified via Artificial Analysis model page + curated metadata
- **Modalities:** text, image, document in; text out; reasoning yes (max); tool calls yes
- **Pricing (as of 2026-09-18):** Paid $3.00 in / $15.00 out ($0.30 cached) per 1M (AA page; no Zen Free ID)
- **Architecture:** open-weights MoE, 2.8T total / 104B active; Kimi K3 License

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1685 Elo** (Artificial Analysis 1.2 article context: Kimi K3 max 1685 trails GPT-5.6 Sol 1730)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **44 AA Index (max), #2/113 open class** (AA Kimi K3 page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxy as provisional: frontier terminal-agent coding positioning per curated short, vendor claim)

Reasoning / knowledge (AA eval detail):

- AA evaluation set computed but per-eval absolutes not extracted in this research beyond Index 44 — **no further verified public score found**

Long context:

- **1M in / 1M out verified (rare full-duplex 1M); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1685 is frontier-adjacent; capped by missing TB/Tau harness numbers.
- **Reasoning: 86/100.** Index 44 (#2 open class) with 2.8T flagship reasoning; capped by zero public GPQA/HLE absolutes.
- **Context window: 100/100.** 1M in / 1M out is the best duplex window in cohort; top tier.
- **Multimodal: 75/100.** Text/image/document in, text out; capped below video/audio omni models.
- **Coding: 84/100.** Frontier terminal-agent coding reputation at 104B-active scale; capped by zero public SWE/DeepSWE numbers.
- **Cost efficiency: 40/100.** Paid $3/$15 premium open-weights pricing; value only at flagship scale.
- **Overall Score: 86/100.** Mean of the five non-cost dims (84+86+100+75+84)/5 = 85.8; best-fit premium flagship open MoE with duplex 1M.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis K3 page + 1.2 article, curated metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
