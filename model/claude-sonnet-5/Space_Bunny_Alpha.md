# Claude Sonnet 5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-5`; adaptive reasoning, max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's most agentic Sonnet model, designed for browser/terminal tool use, autonomous coding, and multi-step knowledge work at a lower price than Opus-class models.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5`); available on the Claude Platform, AWS, and Microsoft Foundry. Anthropic's model overview lists adaptive thinking with default high effort.
- **Release / knowledge:** Anthropic announced Sonnet 5 on 2026-06-30. The current model overview lists a January 2026 reliable knowledge cutoff and June 2026 training-data cutoff.
- **IDs:** `claude-sonnet-5`.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-24).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $2 per 1M input tokens and $10 per 1M output tokens; the introductory pricing was made permanent. The reviewed overview gives no separate cache figure.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **38/100**, rank **#54/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **76.8 tokens/s**; Intelligence Index task cost **$5.09** (Artificial Analysis, accessed 2026-09-24)
- BrowseComp: Anthropic presents a comparative curve and says higher-effort Sonnet 5 can match Opus 4.8 on some tasks, but no absolute Sonnet 5 score was visible in the reviewed text.
- OSWorld-Verified: Anthropic presents comparative curves; no absolute Sonnet 5 score was visible in the reviewed text.
- Terminal-Bench 2.1/4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- Anthropic describes Sonnet 5 as a strict improvement over Sonnet 4.6 on coding and says it narrows the gap with Opus 4.8; no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode value was visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Anthropic verifies a 1M-token context window and 128K maximum output.

Sources consulted: [Anthropic Sonnet 5 announcement](https://www.anthropic.com/news/claude-sonnet-5), [Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), and [Artificial Analysis Sonnet 5](https://artificialanalysis.ai/models/claude-sonnet-5), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 89/100.** Sonnet 5 is explicitly designed for browser/terminal tools and autonomous agent loops; AA Index 38 is solid, while exact Terminal-Bench, Tau, GDPval, and OSWorld values were not exposed.
- **Reasoning: 82/100.** AA Index 38 is above the compared-model median of 25 and Anthropic reports broad reasoning gains, but exact GPQA, HLE, and hallucination values were unavailable.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K output tokens; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 86/100.** Anthropic explicitly reports improved coding and near-Opus performance on some tasks, but exact SWE/DeepSWE/LiveCodeBench/SciCode values were not available.
- **Cost efficiency: 85/100.** $2/$10 per 1M input/output is substantially cheaper than Opus 5 and remains paid; the model is verbose on the AA evaluation.
- **Overall Score: 84.0/100.** (89 + 82 + 98 + 65 + 86) / 5 = 84.0. Best fit: production coding agents and multimodal tool workflows where Sonnet-class cost and latency are more important than absolute frontier scores.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official Sonnet 5 announcement/model overview and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
