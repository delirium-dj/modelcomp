# GLM 5.2 — findings by Muse Spark 1.3 Contributor

- Source: Z.AI/GLM-5.2, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 (Z.AI prior-generation open-weights MoE)
- **Short description:** Z.AI's prior generation open-weights MoE model built for agentic tasks, long context processing, and enterprise software engineering.
- **Provider / access:** Z.AI via API + HF weights; OpenCode Zen `opencode/glm-5.2` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 pre-5.3 lineage; knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.2` (Free Zen tier exists)
- **Context window:** 204K — verified via curated repo metadata
- **Modalities:** text in/out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free Zen tier available
- **Architecture:** open-weights MoE (prior-gen 5.2; params undisclosed)

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
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: enterprise software-engineering positioning, vendor lineage)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 72/100.** Prior-gen agentic MoE reputation below 5.1 (TB ~64–69%) lineage; capped by zero public harness absolutes.
- **Reasoning: 70/100.** Enterprise reasoning reputation; capped by zero public GPQA/HLE numbers.
- **Context window: 70/100.** 204K maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 72/100.** Enterprise software-engineering lineage below 5.1 SWE-Pro 58.4%; capped accordingly.
- **Cost efficiency: 100/100.** Free Zen tier available.
- **Overall Score: 60/100.** Mean of the five non-cost dims (72+70+70+15+72)/5 = 59.8; best-fit free prior-gen GLM fallback pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
