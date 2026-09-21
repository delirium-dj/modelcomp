# GLM 5.3 Flash — findings by Muse Spark 1.3 Contributor

- Source: Z.AI/GLM-5.3 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash (Z.AI lightweight Flash-class MoE)
- **Short description:** Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.
- **Provider / access:** Z.AI via API + HF weights; OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (5.3 generation); knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.3-flash` (Free Zen tier exists)
- **Context window:** 204K — verified via curated repo metadata
- **Modalities:** text in/out; reasoning yes (light); tool calls yes
- **Pricing (as of 2026-09-18):** Free Zen tier available
- **Architecture:** open-weights MoE, Flash-class lightweight (params undisclosed)

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **62%** (Artificial Analysis Astra article: GLM-5.3 62% trails Astra 69% and Grok 4.6 67%)
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

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: ultra-fast agentic coding positioning, vendor claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 62% is verified near-frontier workflow automation; capped by missing TB/Tau/GDPval numbers.
- **Reasoning: 72/100.** Flash-class reasoning for high-frequency tasks; capped by zero public GPQA/HLE numbers.
- **Context window: 70/100.** 204K maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 76/100.** Ultra-fast agentic coding reputation in the 5.x coding family; capped by zero public SWE numbers.
- **Cost efficiency: 100/100.** Free Zen tier available.
- **Overall Score: 63/100.** Mean of the five non-cost dims (80+72+70+15+76)/5 = 62.6; best-fit free high-frequency Flash coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra article for AutomationBench, Z.AI family context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
