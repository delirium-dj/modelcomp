# Claude Opus 5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-5`; adaptive reasoning, max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's high-capability general model for demanding coding, knowledge work, computer use, and long-running agent tasks.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`); available across Anthropic platforms and major cloud marketplaces. Adaptive effort is available; this report evaluates max effort.
- **Release / knowledge:** Anthropic announced Opus 5 on 2026-07-24. The reviewed model overview now lists Opus 5.5 as the successor; no Opus 5 knowledge cutoff was shown in the reviewed pages.
- **IDs:** `claude-opus-5`; max is an effort configuration rather than a separate model ID.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-24).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported. Audio/video are not listed for the current model family overview.
- **Pricing (as of 2026-09-24):** $5 per 1M input tokens and $25 per 1M output tokens; fast mode is approximately 2.5x speed at twice the applicable base price.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **51/100**, rank **#11/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **54.2 tokens/s**; Intelligence Index task cost: **$5.86** (Artificial Analysis, accessed 2026-09-24)
- ARC-AGI 3: Anthropic states Opus 5's score is **three times the next-best model**, but does not expose the absolute score; no numeric exact value recorded
- Zapier AutomationBench: pass rate is approximately **1.5x** the next-best model at the same cost; no absolute score recorded
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (Artificial Analysis, accessed 2026-09-24)
- Organic-chemistry internal benchmark: **+10.2 percentage points** versus Opus 4.8 (relative result, not an absolute score)
- Protein-variant prediction internal benchmark: **+7.7 percentage points** versus Opus 4.8 (relative result, not an absolute score)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** as a standalone value
- LCR / MLCR: **no verified public score found** as a standalone value
- CritPt: **no verified public score found** as a standalone value
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Frontier-Bench v0.1: **more than 2x** Opus 4.8's performance at lower cost per task; no absolute score recorded
- CursorBench 3.2: within **0.5%** of Fable 5's peak score at max effort; no absolute score recorded
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Anthropic verifies a 1M-token context window and 128K maximum output.

Sources consulted: [Anthropic Opus 5 announcement](https://www.anthropic.com/news/claude-opus-5), [Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), and [Artificial Analysis Opus 5](https://artificialanalysis.ai/models/claude-opus-5), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 94/100.** Anthropic reports state-of-the-art Frontier-Bench and strong AutomationBench/OSWorld positioning, while AA Index 51 is near the frontier; exact Terminal-Bench, Tau, and GDPval values were not published in the reviewed sources.
- **Reasoning: 95/100.** AA Index 51 and Anthropic's ARC-AGI 3 and scientific-research improvements support a frontier score; absolute ARC-AGI, GPQA, HLE, and hallucination values were not available.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K output tokens, exceeding the top context tier; retrieval-at-length evidence was not found.
- **Multimodal: 65/100.** Text and image input are supported, but audio and video are not listed.
- **Coding: 94/100.** Anthropic explicitly reports frontier coding results on Frontier-Bench and near-Fable CursorBench performance; exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 50/100.** Standard price is $5/$25 per 1M input/output tokens; cache and effort controls can improve realized cost, but the model remains expensive and verbose.
- **Overall Score: 89.2/100.** (94 + 95 + 98 + 65 + 94) / 5 = 89.2. Best fit: high-stakes coding, computer use, and long-running knowledge work where quality outweighs cost and latency.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official announcement/model overview and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
