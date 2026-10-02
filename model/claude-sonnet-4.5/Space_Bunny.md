# Claude Sonnet 4.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-4-5`; extended thinking)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's 2025 frontier Sonnet model for complex coding, computer use, reasoning, and long-horizon agents.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-5`); Claude Code, Claude apps, and major cloud platforms. It is a legacy model in the current Anthropic lineup but was broadly available at release.
- **Release / knowledge:** Anthropic announced Sonnet 4.5 on 2025-09-29. No reliable knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-sonnet-4-5`.
- **Context window:** 200K tokens; exact output limit was not shown in the reviewed sources. The announcement discusses a 1M-context experiment for SWE-bench, but the standard model limit is retained as 200K.
- **Modalities:** Text and image input; text output; extended thinking, tool use, computer use, code execution, and JSON/structured workflows supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $3 per 1M input tokens and $15 per 1M output tokens (Anthropic announcement).
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **61.4%** (Anthropic Sonnet 4.5 announcement; official OSWorld-Verified, 100 max steps, averaged across four runs)
- τ2-bench: **no absolute public score found** in the fetched announcement text; methodology states extended thinking with tool use and prompt addenda.
- Terminal-Bench 2.0: **50%** (BenchLM, provider-exact Anthropic system-card source)
- JobBench: **27.7%**; VITA-Bench: **17.0%** (BenchLM, independent leaderboard sources)
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- ARC-AGI-2: **13.6%** (BenchLM, provider-exact Anthropic Opus 4.5 system-card source; row is retained as the closest surfaced Claude 4.5-family record, not a verified Sonnet 4.5 exact-model score)
- AIME 2025: **87%** (BenchLM, independent/upstream leaderboard source)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **77.2%** averaged over 10 trials, 200K thinking budget (Anthropic Sonnet 4.5 announcement; standard scaffold with bash and file editing)
- SWE-bench Verified high-compute variant: **82.0%** after multiple parallel attempts and internal patch selection (Anthropic announcement; high-compute methodology)
- SWE-bench Verified: **77.2%** in BenchLM's provider-exact Claude 4.5 system-card record
- LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for the standard 200K model was found. Anthropic reports a 1M-context SWE-bench experiment reaching **78.2%**, but that is not treated as the standard context specification or a general retrieval result.

Sources consulted: [Anthropic Claude Sonnet 4.5 announcement](https://www.anthropic.com/news/claude-sonnet-4-5), [Anthropic current models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview), and [BenchLM Claude Sonnet 4.5 profile](https://benchlm.ai/models/claude-sonnet-4-5), accessed 2026-09-24. The ARC-AGI-2 row is explicitly not treated as an exact Sonnet 4.5 score because the BenchLM source labels it as an Opus 4.5 system-card record.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 61.4%, Terminal-Bench 2.0 50%, and extensive computer-use/tool positioning support strong agent use; missing Tau, GDPval, and exact newer terminal values cap the score.
- **Reasoning: 78/100.** AIME 87% and Anthropic's reasoning/math positioning are positive, but exact Sonnet 4.5 GPQA/HLE/LCR values are unavailable and the surfaced ARC-AGI-2 record belongs to a different model.
- **Context window: 70/100.** The standard 200K context is verified, placing it below newer 1M-class models; the 1M SWE-bench experiment is not a general context guarantee.
- **Multimodal: 65/100.** Text/image input and text output are supported; audio/video are not listed.
- **Coding: 93/100.** SWE-bench Verified 77.2% and high-compute 82.0% are strong measured coding results; missing LiveCodeBench/SciCode/DeepSWE values cap confidence.
- **Cost efficiency: 65/100.** $3/$15 is a paid frontier price, cheaper than Opus-class models but above current Flash-tier options.
- **Overall Score: 78.0/100.** (84 + 78 + 70 + 65 + 93) / 5 = 78.0. Best fit: established coding and computer-use agents that value a mature 200K Anthropic route, with a lower context ceiling than newer models.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official announcement and documentation plus BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
