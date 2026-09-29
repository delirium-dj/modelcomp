# Claude Sonnet 5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-5`; adaptive reasoning, max effort), Artificial Analysis v4.3.2
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's most agentic Sonnet model, designed for browser/terminal tool use, autonomous coding, and multi-step knowledge work at a lower price than Opus-class models.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5`); available on the Claude Platform, AWS, and Microsoft Foundry. Anthropic's model overview lists adaptive thinking with default high effort, and effort levels run low / medium / high / xhigh / max.
- **Release / knowledge:** Anthropic announced Sonnet 5 on 2026-06-30. The current model overview lists a January 2026 reliable knowledge cutoff and June 2026 training-data cutoff.
- **IDs:** `claude-sonnet-5`.
- **Context window:** 1M tokens; 128K maximum output tokens (Anthropic model overview, verified 2026-09-29).
- **Modalities:** Text and image input; text output; multilingual, vision, and tool use supported. Audio/video are not listed.
- **Pricing (as of 2026-09-29):** $2 per 1M input tokens and $10 per 1M output tokens; the introductory pricing was made permanent on 2026-08-10. The reviewed overview gives no separate cache figure.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2, max effort: **38/100**, rank **#58/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark, v4.3.2 component set)
- Output speed at max effort: **74.8 tokens/s**; time to first token **203.67s** (Artificial Analysis, accessed 2026-09-29)
- Verbosity: **370M output tokens** generated on the Intelligence Index — very high relative to the comparison median, and the main driver of the per-task cost
- Effort ladder on the Artificial Analysis Intelligence Index: max **38**, high **32**, medium **28**, low **25** (Artificial Analysis, accessed 2026-09-29). The high-effort configuration measures 59.8 tokens/s with 7.26s time to first token, so most of the max-effort latency is reasoning time rather than decode speed.
- Sonnet 5 rows from the Opus 5.5 launch table: the Opus 5.5 announcement includes Sonnet 5 comparison rows, with Artificial Analysis noting Sonnet 5 (max) at **56** on the index — just two points behind Opus 5.5 (max) — and reporting Sonnet 5 as the highest output-tokens-per-task model measured at that time.
- BrowseComp: Anthropic presents a comparative curve and says higher-effort Sonnet 5 can match Opus 4.8 on some tasks, but no absolute Sonnet 5 score was visible in the reviewed text.
- OSWorld-Verified: Anthropic presents comparative curves; no absolute Sonnet 5 score was visible in the reviewed text.
- Terminal-Bench 2.1/4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (v4.3.2, max effort; accessed 2026-09-29)
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- Anthropic describes Sonnet 5 as a strict improvement over Sonnet 4.6 on coding and says it narrows the gap with Opus 4.8; no exact SWE-bench, DeepSWE, LiveCodeBench, or SciCode value was visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. Anthropic verifies a 1M-token context window and 128K maximum output.

Sources consulted: [Anthropic Sonnet 5 announcement](https://www.anthropic.com/news/claude-sonnet-5), [Anthropic model overview](https://platform.claude.com/docs/en/about-claude/models/overview), [Artificial Analysis Sonnet 5](https://artificialanalysis.ai/models/claude-sonnet-5), and [Artificial Analysis Opus 5.5 analysis](https://artificialanalysis.ai/articles/claude-opus-5-5), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 89/100.** Sonnet 5 is explicitly designed for browser/terminal tools and autonomous agent loops; AA Index 38 is solid, while exact Terminal-Bench, Tau, GDPval, and OSWorld values were not exposed.
- **Reasoning: 82/100.** AA Index 38 is above the compared-model median and Anthropic reports broad reasoning gains, but exact GPQA, HLE, and hallucination values were unavailable.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K output tokens; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 86/100.** Anthropic explicitly reports improved coding and near-Opus performance on some tasks, but exact SWE/DeepSWE/LiveCodeBench/SciCode values were not available.
- **Cost efficiency: 85/100.** $2/$10 per 1M input/output is substantially cheaper than Opus 5 and remains paid; the low/max effort ladder down to an index of 25 gives real cost control, though 370M output tokens on the index make the max configuration expensive.
- **Overall Score: 84.0/100.** (89 + 82 + 98 + 65 + 86) / 5 = 420 / 5 = 84.0. Best fit: production coding agents and multimodal tool workflows where Sonnet-class cost and latency are more important than absolute frontier scores. Use max effort for hard tasks and high or lower for interactive latency.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official Sonnet 5 announcement/model overview, the Opus 5.5 launch comparison table, and Artificial Analysis v4.3.2 metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
