# GLM 5.3 Free — findings by Muse Spark 1.3 Contributor

- Source: Z.AI/GLM-5.3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (Z.AI flagship open-weights)
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** Z.AI via API + HF weights; OpenCode Zen `opencode/glm-5.3-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (5.3 generation); knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.3-free` (Free Zen tier exists)
- **Context window:** 204K — verified via curated repo metadata
- **Modalities:** text in/out; reasoning yes; tool calls yes; multi-step execution yes
- **Pricing (as of 2026-09-18):** Free Zen tier available (promotional fast agentic coding tier)
- **Architecture:** open-weights MoE, flagship 5.3 (params undisclosed)

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **62% GLM-5.3 family tag** (Artificial Analysis Astra article; attributed to GLM-5.3 line, applied here as closest proxy as provisional for the Free flagship)
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

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: 5.x coding family SWE-Pro 58.4% (5.1), not directly this checkpoint)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 62% family signal plus flagship multi-step execution positioning; capped by missing TB/Tau/GDPval absolutes for this checkpoint.
- **Reasoning: 76/100.** Flagship complex-reasoning positioning above Flash; capped by zero public GPQA/HLE numbers.
- **Context window: 70/100.** 204K maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 80/100.** Flagship agentic software-development positioning in a 58.4%-SWE-Pro family; capped by zero checkpoint-specific public numbers.
- **Cost efficiency: 100/100.** Free Zen promotional tier.
- **Overall Score: 65/100.** Mean of the five non-cost dims (82+76+70+15+80)/5 = 64.6; best-fit free flagship GLM agentic-coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra article, Z.AI family context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
