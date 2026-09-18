# Ox Alpha — findings by Muse Spark 1.3 Free

- Source: OpenCode/Ox Alpha, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (OpenCode Zen experimental reasoning)
- **Short description:** Experimental open-weights reasoning model hosted on OpenCode Zen, designed for agentic coding, logic puzzles, and tool-augmented workflows.
- **Provider / access:** OpenCode Zen `opencode/ox-alpha` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 experimental; knowledge cutoff undisclosed
- **IDs:** `opencode/ox-alpha` (Free experimental ID exists on Zen)
- **Context window:** 200K — verified via curated repo metadata (vendor specs unverified in this research)
- **Modalities:** text in/out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Free Zen tier
- **Architecture:** open-weights reasoning (params undisclosed)

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

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxy as provisional: logic-puzzle/tool-workflow positioning, host claim)

Reasoning / knowledge (detail):

- Logic puzzles and tool-augmented workflow positioning per host description — **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 58/100.** Experimental tool-workflow positioning with no harness numbers; capped at provisional mid-tier.
- **Reasoning: 62/100.** Reasoning + logic-puzzle positioning; capped by zero public evals.
- **Context window: 70/100.** 200K maps to 70 tier; capped below 1M models.
- **Multimodal: 15/100.** Text-only; 15 is the text-only floor.
- **Coding: 60/100.** Experimental agentic-coding positioning; capped by zero public coding harness numbers.
- **Cost efficiency: 100/100.** Free Zen tier.
- **Overall Score: 53/100.** Mean of the five non-cost dims (58+62+70+15+60)/5 = 53.0; best-fit free experimental reasoning sandbox.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
