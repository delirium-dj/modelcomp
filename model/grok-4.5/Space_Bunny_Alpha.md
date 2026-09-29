# Grok 4.5 — findings by Space Bunny Alpha

- Source: SpaceXAI (`grok-4.5`; high reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked on 2026-09-29. **MATERIAL change.** Artificial Analysis now carries an explicit **"This model is deprecated"** banner and names **Grok 4.6** as the suggested replacement (a nearer successor than the Grok 4.7 previously documented as current), and states it only keeps benchmarking the default 10k-input workload. **Speed and TTFT now measured:** 59.2 t/s and 6.95s, both worse than peers, with $1.04 per Index task. The deprecation plus the weak throughput lowered **Tool use 90 → 88** and **Reasoning 84 → 82**, moving Overall **83.6 → 82.8**. The v4.3.2 re-base did **not** move the index value — it remains 39.

## Model card

- **Name:** Grok 4.5 (high)
- **Short description:** SpaceXAI's prior-generation frontier reasoning and agent model, now formally deprecated in favour of Grok 4.6 and later releases.
- **Provider / access:** SpaceXAI API (`grok-4.5`); Artificial Analysis lists 2 providers. Current SpaceXAI documentation lists newer Grok models and the broader Responses/tool ecosystem.
- **Release / knowledge:** Artificial Analysis lists July 8, 2026; no exact training-data cutoff was shown in the reviewed sources.
- **Lifecycle (new, 2026-09-29):** Artificial Analysis banner: **"This model is deprecated."** Suggested replacement: **Grok 4.6**. AA adds that results outside the default 10k input token workload are historical and no longer updated. **No hard discontinuation date was found** for the `grok-4.5` endpoint in the sources checked.
- **IDs:** `grok-4.5`; high is a reasoning configuration.
- **Context window:** 500K tokens (Artificial Analysis and BenchLM, re-verified 2026-09-29; AA lists 500k ≈ 750 A4 pages). Exact output limit was not shown.
- **Modalities:** Text and image input; text output; reasoning and tool use supported. Audio/video are not shown for Grok 4.5.
- **Pricing (verified 2026-09-29, unchanged):** Artificial Analysis reports **$2.00 per 1M input and $6.00 per 1M output tokens**, with an 85% cache discount, blended **$1.21 per 1M** (7:2:1), and **$1.04 cost per Intelligence Index task** (class rank #47/216). BenchLM reports cached input at $0.30.
- **Architecture:** Proprietary; SpaceXAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (BenchLM, provider-exact xAI Grok 4.5 launch post)
- Terminal-Bench 2.1 (Vals AI): **67.8%** (BenchLM, Vals AI leaderboard; different harness)
- SWE-bench (Vals AI): **86.6%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **87.4%** (BenchLM, Vals AI leaderboard)
- SWE Multilingual: **78%** (BenchLM, secondary exact xAI launch-post source)
- Performance (newly recorded 2026-09-29): output speed **59.2 tokens/s** (class rank #119/216, "slower than average" vs a 79.1 t/s peer median); TTFT **6.95s** (vs a 3.89s median); verbosity 77M Index output tokens vs an 88M median ("fairly concise").
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, MCP-Atlas, AutomationBench-AA, and Terminal-Bench 4.0: **no verified public exact value found** (AA publishes no itemised component rows for this model)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v4.3.2**: **39/100**, class rank **#56/216** (Artificial Analysis, accessed 2026-09-29; composite). **Value unchanged by the v4.3.2 re-base**; the rank moved from #52/210 to #56/216 because the field grew.
- GPQA Diamond (Vals AI): **92.9%** (BenchLM, Vals AI leaderboard)
- ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%** (BenchLM, ARC Prize official leaderboard data)
- HLE, LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- Terminal-Bench 2.1: **83.3%** provider-exact; **67.8%** Vals harness
- SWE-bench (Vals AI): **86.6%**
- LiveCodeBench (Vals AI): **87.4%**
- DeepSWE, SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for Grok 4.5 was found. The verified context-window capacity is 500K tokens; AA-LCR v1.1 is not itemised for this model.

Sources consulted: [Artificial Analysis Grok 4.5](https://artificialanalysis.ai/models/grok-4-5) (page fetched live 2026-09-29), [SpaceXAI model documentation](https://docs.x.ai/docs/models/grok-4-5), and [BenchLM Grok 4.5](https://benchlm.ai/models/grok-4-5). The current xAI page primarily documents newer Grok releases; Grok 4.5 benchmark values are therefore attributed to BenchLM/provider-exact sources.

### Normalized scores (1–100)

- **Tool use: 88/100.** *(was 90)* Terminal-Bench 83.3%, SWE-bench Vals 86.6%, LiveCodeBench Vals 87.4%, and tool-oriented positioning provide strong evidence; the 67.8% Vals Terminal-Bench row shows harness sensitivity, and the model is now deprecated with no itemised AA agentic components.
- **Reasoning: 82/100.** *(was 84)* AA Index 39 and GPQA Diamond 92.9% are strong, but ARC-AGI-3 0.3%, missing HLE/LCR values, and the deprecation banner materially limit confidence.
- **Context window: 90/100.** *(unchanged)* A 500K context is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** *(unchanged)* Text and image input with text output are supported; audio/video are not shown.
- **Coding: 89/100.** *(unchanged)* SWE-bench Vals 86.6%, LiveCodeBench Vals 87.4%, and Terminal-Bench 83.3% support strong coding; exact SWE-bench Verified and DeepSWE values are missing.
- **Cost efficiency: 82/100.** *(was 86)* $2/$6 with an 85% cache discount is still attractive on sticker price, but the newly measured **$1.04 per Intelligence Index task**, 59.2 t/s and 6.95s TTFT make it a poor throughput buy against cheaper peers, and the model is deprecated.
- **Overall Score: 82.8/100.** *(was 83.6)* (88 + 82 + 90 + 65 + 89) / 5 = 414 / 5 = 82.8. Best fit narrowed: cost-sensitive coding and tool agents with image input **on existing pinned integrations only**. New work should move to Grok 4.6 or later; Grok 4.7 (44 on the v4.3.2 Index) and the newer line are well clear of it.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Artificial Analysis (Index v4.3.2, page fetched live), SpaceXAI documentation, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
