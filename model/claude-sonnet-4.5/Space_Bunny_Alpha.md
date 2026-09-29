# Claude Sonnet 4.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-4-5`; extended thinking)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's 2025 frontier Sonnet model for complex coding, computer use, reasoning, and long-horizon agents. Now a legacy model in the current lineup.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-5`); Claude Code, Claude apps, and major cloud platforms. It was broadly available at release and remains serviceable, but is no longer a current-generation route.
- **Release / knowledge:** Anthropic announced Sonnet 4.5 on 2025-09-29. No reliable knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-sonnet-4-5`.
- **Context window:** **1M tokens** — Artificial Analysis now publishes a 1M-token context window for Claude 4.5 Sonnet, up from the 200K figure recorded in the previous run of this report (verified 2026-09-29). The original announcement described a 1M-context SWE-bench experiment; that is now the published window rather than an experiment footnote.
- **Modalities:** Text and image input; text output; extended thinking, tool use, computer use, code execution, and JSON/structured workflows supported. Audio/video are not listed.
- **Pricing (as of 2026-09-29):** $3 per 1M input tokens and $15 per 1M output tokens (Anthropic announcement).
- **Lifecycle:** Artificial Analysis flags Claude 4.5 Sonnet as **deprecated** and names **Claude Sonnet 4.6** as the successor, with Anthropic's own guidance pointing current users to Sonnet 5 for new work. The tentative retirement date on Anthropic's deprecations page has now been reached, so this model should be treated as end-of-life and not selected for new deployments.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **61.4%** (Anthropic Sonnet 4.5 announcement; official OSWorld-Verified, 100 max steps, averaged across four runs)
- Terminal-Bench 2.0: **50%** (BenchLM, provider-exact Anthropic system-card source)
- JobBench: **27.7%**; VITA-Bench: **17.0%** (BenchLM, independent leaderboard sources)
- Artificial Analysis Intelligence Index: **30** for the non-reasoning configuration and **37** for the reasoning configuration, with the reasoning variant measured at 43.3 tokens/s and 10.77s time to first token (Artificial Analysis comparisons, accessed 2026-09-29)
- τ2-bench: **no absolute public score found** in the fetched announcement text; methodology states extended thinking with tool use and prompt addenda.
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

- Artificial Analysis reports a 1M-token context window for this model, and the model also appears in AA long-context comparisons at the 1M tier. No standalone exact-model RULER or MRCR result was found for Sonnet 4.5 specifically; the previously cited 78.2% 1M-context SWE-bench experiment is retained as a configuration result, not a retrieval benchmark.

Sources consulted: [Anthropic Claude Sonnet 4.5 announcement](https://www.anthropic.com/news/claude-sonnet-4-5), [Anthropic Sonnet 4.6 announcement](https://www.anthropic.com/news/claude-sonnet-4-6), [Artificial Analysis model comparisons](https://artificialanalysis.ai/models/comparisons/claude-opus-4-6-adaptive-vs-claude-4-5-sonnet-thinking), and [BenchLM Claude Sonnet 4.5 profile](https://benchlm.ai/models/claude-sonnet-4-5), accessed 2026-09-29. The ARC-AGI-2 row is explicitly not treated as an exact Sonnet 4.5 score because the BenchLM source labels it as an Opus 4.5 system-card record.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 61.4%, Terminal-Bench 2.0 50%, and extensive computer-use/tool positioning support strong agent use; missing Tau, GDPval, and exact newer terminal values cap the score.
- **Reasoning: 78/100.** AIME 87% and Anthropic's reasoning/math positioning are positive, but exact Sonnet 4.5 GPQA/HLE/LCR values are unavailable and the surfaced ARC-AGI-2 record belongs to a different model.
- **Context window: 76/100.** Raised from 70: Artificial Analysis now publishes a 1M-token context window for this model, so it is no longer a 200K-only route. It still scores below current 1M-native generations because no direct retrieval-at-length result was published.
- **Multimodal: 65/100.** Text/image input and text output are supported; audio/video are not listed.
- **Coding: 93/100.** SWE-bench Verified 77.2% and high-compute 82.0% are strong measured coding results; missing LiveCodeBench/SciCode/DeepSWE values cap confidence.
- **Cost efficiency: 60/100.** Lowered from 65: the $3/$15 price is unchanged and still cheaper than Opus-class models, but the model is deprecated with its retirement date reached, so there is no future price path or vendor support to value.
- **Overall Score: 79.2/100.** (84 + 78 + 76 + 65 + 93) / 5 = 396 / 5 = 79.2. Best fit: maintaining existing Sonnet 4.5 integrations until they are migrated. The published 1M context lifts the score, but deprecation with a reached retirement date means it should not be chosen for new work — migrate to Sonnet 4.6 or Sonnet 5.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official announcement and documentation, Artificial Analysis metadata, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
