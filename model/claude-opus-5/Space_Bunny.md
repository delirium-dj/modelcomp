# Claude Opus 5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-5`; adaptive reasoning, max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's high-capability general model for demanding coding, knowledge work, computer use, and long-running agent tasks.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`); available across Anthropic platforms and major cloud marketplaces. Adaptive effort is available; this report evaluates max effort. **Status as of 2026-09-29: superseded** — Artificial Analysis flags the model as deprecated and recommends Claude Opus 5.5, released 2026-09-22.
- **Release / knowledge:** Anthropic announced Opus 5 on 2026-07-24 (AA gives the same date). Claude Opus 5.5, released 2026-09-22, is the current frontier in this family and scores 58 on the current AA Intelligence Index v4.3.2 (adaptive/max) — seven points above Opus 5. No Opus 5 knowledge cutoff was shown in the reviewed pages.
- **IDs:** `claude-opus-5`; max is an effort configuration rather than a separate model ID.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-29; AA rounds the window to 1M).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported. Audio/video are not listed for the current model family overview.
- **Pricing (as of 2026-09-29):** $5 per 1M input tokens and $25 per 1M output tokens (90% cache discount; blended 7:2:1 $3.85); fast mode is approximately 2.5x speed at twice the applicable base price. These are legacy rates — Opus 5.5 is priced at $4/$20.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **51/100**, rank **#13/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark). Index version is v4.3.2 — the 51 figure is unchanged from the 2026-09-24 reading. Any higher pre-re-basing value (e.g. 63.1 on v4.1.1/v4.3) is superseded and no longer valid; on the current scale Opus 5 sits 7 points under the 58 ceiling set by Claude Opus 5.5.
- Status: AA now carries an explicit deprecation banner for this model and no longer refreshes non-default workloads; treat all figures below as historical.
- Output speed: **58.6 tokens/s** (revised up from 54.2 tokens/s as measured on 2026-09-24); Intelligence Index task cost: **$5.86** (unchanged); time to first token: **48.50s** (Artificial Analysis, accessed 2026-09-29)
- ARC-AGI 3: Anthropic states Opus 5's score is **three times the next-best model**, but does not expose the absolute score; no numeric exact value recorded
- Zapier AutomationBench: pass rate is approximately **1.5x** the next-best model at the same cost; no absolute score recorded
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** for adaptive reasoning at max effort, v4.3.2 scale (unchanged from the 2026-09-24 reading)
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

Sources consulted: [Anthropic Opus 5 announcement](https://www.anthropic.com/news/claude-opus-5), [Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), [Anthropic Opus 5.5 overview](https://platform.claude.com/docs/en/models/opus-5-5/overview), [Anthropic Opus 5.5 announcement](https://www.anthropic.com/claude-opus-5-5), and [Artificial Analysis Opus 5](https://artificialanalysis.ai/models/claude-opus-5), all accessed 2026-09-29. Re-validation: the Intelligence Index value of 51 holds on the v4.3.2 scale; new facts are the AA deprecation status, the 2026-09-22 Opus 5.5 successor release, and a revised output speed.

### Normalized scores (1–100)

- **Tool use: 94/100.** Anthropic reports state-of-the-art Frontier-Bench and strong AutomationBench/OSWorld positioning, while AA Index 51 is near the frontier (though 7 points behind Opus 5.5 on the current scale); exact Terminal-Bench, Tau, and GDPval values were not published in the reviewed sources.
- **Reasoning: 95/100.** AA Index 51 and Anthropic's ARC-AGI 3 and scientific-research improvements support a frontier score; absolute ARC-AGI, GPQA, HLE, and hallucination values were not available.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K output tokens, exceeding the top context tier; retrieval-at-length evidence was not found.
- **Multimodal: 65/100.** Text and image input are supported, but audio and video are not listed.
- **Coding: 94/100.** Anthropic explicitly reports frontier coding results on Frontier-Bench and near-Fable CursorBench performance; exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 50/100.** Standard price is $5/$25 per 1M input/output tokens; cache and effort controls can improve realized cost, but the model remains expensive and verbose, and it is now superseded by the cheaper Opus 5.5 ($4/$20, ~40% cheaper per task).
- **Overall Score: 89.2/100.** (94 + 95 + 98 + 65 + 94) / 5 = 89.2. Best fit: high-stakes coding, computer use, and long-running knowledge work where quality outweighs cost and latency — though new deployments should start from Opus 5.5.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official announcement/model overview and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
