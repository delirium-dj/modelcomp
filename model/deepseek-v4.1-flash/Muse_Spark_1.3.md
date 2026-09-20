# DeepSeek V4.1 Flash — findings by Muse Spark 1.3 Contributor

- Source: DeepSeek/DeepSeek V4.1 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (MIT-licensed multimodal MoE)
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek via API + HF weights (MIT); no Zen Free ID under deepseek/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (V4.1 generation); knowledge cutoff undisclosed
- **IDs:** `deepseek/deepseek-v4.1-flash` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 384K out — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $0.30/$1.20 per 1M (curated metadata; no Zen Free ID)
- **Architecture:** open MoE, 552B total (MIT licensed; active params undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **strong terminal-bench results per curated short (exact % unverified in this research — closest proxy as provisional)**
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

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window with 384K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 75/100.** Input-heavy agentic positioning with strong terminal-bench reputation; capped by unverified absolute percentages.
- **Reasoning: 72/100.** Flash-class reasoning in a large MoE; capped by zero public GPQA/HLE/CritPt numbers.
- **Context window: 100/100.** 1M / 384K out verified; top tier.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 75/100.** Agentic workload coding reputation; capped by zero public SWE/LiveCodeBench numbers.
- **Cost efficiency: 85/100.** Paid $0.30/$1.20 is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 77/100.** Mean of the five non-cost dims (75+72+100+65+75)/5 = 77.4; best-fit cheap paid input-heavy agentic pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
