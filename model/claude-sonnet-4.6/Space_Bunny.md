# Claude Sonnet 4.6 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-4-6`; extended thinking configurations)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked on 2026-09-29. **MATERIAL change.** Artificial Analysis now carries an explicit **"This model is deprecated"** banner on the Claude Sonnet 4.6 page and names **Claude Sonnet 5** as the suggested replacement; AA also states it only keeps benchmarking the default 10k-input workload and that the remaining Index figure is an **estimate (independent evaluation forthcoming)** — no component rows exist. Because the only independent composite is now an unverified estimate on a retired model, **Tool use 87 → 85** and **Reasoning 82 → 80**, moving Overall **83.4 → 82.6**. The v4.3.2 re-base itself did **not** move the index value: it remains 25.

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-capability Sonnet model for coding, computer use, long-context reasoning, agent planning, knowledge work, and design. Now a retired generation in the Sonnet line.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-6`); Claude.ai and major cloud platforms. Artificial Analysis lists 4 providers. The evaluated AA page is the non-reasoning/high configuration; reasoning settings are separate configurations.
- **Release / knowledge:** Announced 2026-02-17; no reliable knowledge cutoff was shown in the reviewed announcement.
- **Lifecycle (new, 2026-09-29):** Artificial Analysis banner: **"This model is deprecated."** Suggested replacement: **Claude Sonnet 5**. AA also notes results outside the default 10k input workload are historical and no longer updated. **No hard discontinuation date was found** for the Sonnet 4.6 API ID in the sources checked.
- **IDs:** `claude-sonnet-4-6`; effort and thinking settings are configurations.
- **Context window:** 1M tokens in beta (Anthropic announcement and Artificial Analysis, re-verified 2026-09-29); exact standard output limit was not shown in the announcement.
- **Modalities:** Text and image input; text output; computer use, tool use, vision, and agent planning supported. Audio/video are not listed.
- **Pricing (verified 2026-09-29, unchanged):** **$3.00 per 1M input tokens and $15.00 per 1M output tokens**, 90% cache discount, blended **$2.31 per 1M** (7:2:1 cache hit/input/output). Artificial Analysis flags both legs as "somewhat expensive" against a $1.88 / $9.50 non-reasoning peer median.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **80.2%** with prompt modification; Anthropic's standard result was averaged over 10 trials (Anthropic Sonnet 4.6 announcement)
- Artificial Analysis Intelligence Index **v4.3.2**: **25/100 (estimate — "independent evaluation forthcoming")**, class rank **#5/60** for non-reasoning/high (Artificial Analysis, accessed 2026-09-29). **Value unchanged by the v4.3.2 re-base**; the asterisk is new and load-bearing — no component evals are published for this model.
- BrowseComp: Anthropic documents a max-effort, tool-enabled setup but does not expose the absolute Sonnet 4.6 score in the fetched announcement text.
- Terminal-Bench 2.0/4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, and AutomationBench-AA: **no verified public exact value found** (AA publishes no component rows for this model)
- Performance: output speed **42.3 tokens/s**, ranked #40/60 in class and "notably slow" against a 79.9 t/s peer median; TTFT **1.41s** against a 1.15s median. AA shows cost per Index task and verbosity as **N/A** — the model is no longer being fully re-benchmarked.

Reasoning / knowledge:

- ARC-AGI-2: **60.4%** at high effort with a 120K thinking budget; Anthropic's max-effort score is referenced but not exposed in the fetched text.
- Artificial Analysis Intelligence Index: **25 (estimated)** — same estimate caveat as above.
- GPQA Diamond, HLE absolute score, CritPt, LCR/MLCR, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **80.2%** with prompt modification; the standard 10-trial result is referenced but not exposed in the fetched text.
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found (AA-LCR v1.1 is not published for it). Anthropic verifies a 1M-token context window in beta.

Sources consulted: [Anthropic Sonnet 4.6 announcement](https://www.anthropic.com/news/claude-sonnet-4-6) and [Artificial Analysis Claude Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6), accessed 2026-09-29. The AA page's non-reasoning configuration is kept separate from reasoning-mode benchmark claims, and its Index figure is labeled an estimate throughout.

### Normalized scores (1–100)

- **Tool use: 85/100.** *(was 87)* Anthropic documents major computer-use gains and a strong SWE-bench Verified 80.2%, but the AA agentic signal for this model is now an **estimate with no component rows**, and exact Terminal-Bench, Tau, GDPval, and MCP values remain unavailable.
- **Reasoning: 80/100.** *(was 82)* ARC-AGI-2 60.4% at high effort is a real vendor number, but the AA Index 25 is an **estimate pending independent evaluation** and the model is deprecated, so GPQA/HLE/hallucination evidence is entirely absent.
- **Context window: 95/100.** *(unchanged)* A 1M-token context is verified by Anthropic and AA, though retrieval quality was not measured and AA-LCR is not published for it.
- **Multimodal: 65/100.** *(unchanged)* Text and image input with text output are supported; audio/video are not listed.
- **Coding: 88/100.** *(unchanged)* SWE-bench Verified 80.2% and Anthropic's explicit coding improvements support a high score; exact LiveCodeBench/SciCode/DeepSWE values are still missing.
- **Cost efficiency: 63/100.** *(was 65)* $3/$15 with a 90% cache discount and $2.31 blended is still cheaper than Opus-class pricing, but AA rates it "somewhat expensive" against its price tier and the model is now deprecated.
- **Overall Score: 82.6/100.** *(was 83.4)* (85 + 80 + 95 + 65 + 88) / 5 = 413 / 5 = 82.6. Best fit narrowed: existing coding and computer-use agents needing 1M context should be migrated to **Claude Sonnet 5** (56 on the v4.3.2 Index at max effort vs 25 here) rather than adopted fresh.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official Sonnet 4.6 announcement and Artificial Analysis (Index v4.3.2) metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
