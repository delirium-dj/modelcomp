# Muse Spark 1.3 — findings by Claude Fable 5.1

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 — evaluated as "Muse Spark 1.3 Contributor Free" (OpenCode Zen free tier); paid SKUs are Muse Spark 1.3 (standard) and Muse Spark 1.3 Contributor
- **Short description:** Muse Spark 1.3 is Meta's flagship multimodal reasoning model, released by Meta Superintelligence Labs on September 2, 2026 and built for long agentic sessions and coding across large repositories. Variant flag: it ships in two variants that appear in the research: Muse Spark 1.3 (xhigh), which is publicly benchmarked, and Muse Spark 1.3 (max), which was in limited preview for Meta partners at the time of the release analysis. The Contributor Free alias is the same model on a data-for-training tier; effort level is user-configurable, so "max"-variant scores below are flagged and not assumed for the free tier.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Free) and `muse-spark-1.3` (paid). Pi's model registry lists muse-spark-1.3-contributor-free, Provider opencode, openai-responses, Base URL https://opencode.ai/zen/v1 — i.e., Responses API; one setup guide notes the free quota is dynamic and unpublished, and the model only works over the Responses endpoint. Also: Meta Model API (available through Muse Code and Meta Model API as `muse-spark-1.3`. Meta also offers a lower-priced `muse-spark-1.3-contributor` SKU), and OpenRouter `meta/muse-spark-1.3-contributor`.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff: no verified public score found (not disclosed in sources reviewed).
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free ID exists on Zen); `opencode/muse-spark-1.3` (paid); `meta/muse-spark-1.3-contributor` (OpenRouter); `muse-spark-1.3` (Meta Model API)
- **Context window:** 1,048,576 tokens total; 131,072 max output. Verified via OpenRouter listing ($0.10 per million input tokens, $0.20 per million output tokens. 1,048,576 token context window.) and Pi registry (Context window 1,048,576 / Max tokens 131,072); Artificial Analysis confirms the model supports text, image, and video input, outputs text, and has a 1M tokens context window.
- **Modalities:** Per OpenRouter, it accepts text, images, video, and PDF documents, returns text, and offers a 1M-token context window. Reasoning: yes (configurable effort). Tool calls: yes — it supports structured output, parallel function calling, built-in search with citations, and configurable reasoning effort. JSON mode: structured output supported. Caveat: the Zen free-tier config as registered by Pi lists only text + image input.
- **Pricing (as of 2026-09-30):** OpenCode Zen pricing table: Muse Spark 1.3 Contributor Free | Free | Free | Free | - ; Muse Spark 1.3 | $1.25 | $4.25 | $0.15 | -. Meta-direct: pricing runs $0.10/$0.20 per 1M on the contributor tier and $1.25/$4.25 on the standard xhigh tier, with an 88% cache discount. Free-tier privacy caveat: this is Meta's Contributor tier: free access in exchange for permission to use your prompts and completions to train future Meta models. Muse Spark 1.3 Contributor Free is available on OpenCode for a limited time.
- **Architecture:** Proprietary (params/MoE not disclosed). Meta continues to promise a release with open model weights but has not yet provided a date.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85%** (xhigh, Artificial Analysis independent run — a 5-point gain in Terminal-Bench 2.1 (80% to 85%), and a new GDPval-AA v2 Elo of 1709 against its predecessor's 1615); **88.8%** (max, Meta-reported table via DataCamp; harness not verified, not on tbench.ai verified leaderboard in sources reviewed)
- Tau3-Banking / Tau2-Bench: **47%** (xhigh) / **52%** (max) (Artificial Analysis harness — gains vs. Muse Spark 1.3 (xhigh) in Tau3-Bench Banking (52% vs. 47%) and GDPval-AA v2 (1,754 Elo vs. 1,709); this Tau3-Bench Banking score is #1 among all models.)
- GDPval-AA: **1709** Elo (xhigh) / **1754** Elo (max) (Artificial Analysis, v2)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4** (SWEAtlas CodeBase QnA, max variant, Meta-reported via DataCamp table); OSWorld 2.0 **66.9** / AutomationBench **49.4** (max, Meta-reported — OSWorld 2.0 | 66.9 | 62.7 | 68.3 ... AutomationBench | 49.4 | 46.7 | 50.3)
  Reasoning / knowledge:
- GPQA Diamond: **94%** (xhigh and max, Artificial Analysis — GPQA Diamond achieved +4 points (90% to 94%), while Humanity's Last Exam and SciCode each gained a more modest 2-3 points (45% to 47% and 56% to 59%, respectively).)
- HLE: **47%** (xhigh, Artificial Analysis); max variant reported ~2 points higher (Muse Spark 1.3 (max) achieved roughly similar scores to the xhigh variant, gaining 2 points in Humanity's Last Exam, tying on GPQA Diamond)
- LCR / MLCR: **79%** (AA-LCR, both variants — both variants dropped 4 points on AA-LCR (83% to 79%), and AA-Omniscience (Accuracy) fell 3 points for xhigh and 1 point for max.)
- CritPt: **26%** (xhigh, Artificial Analysis — CritPt was the standout non-agentic score gain vs. Muse Spark 1.2, with a material +8 points for the xhigh variant (18% to 26%)
- Artificial Analysis Intelligence Index / BenchLM overall: **61 (xhigh) / 62 (max) at launch, #3 lab** — Muse Spark 1.3 (max), which is in limited preview for Meta's partners, scores 62 on the Artificial Analysis Intelligence Index, behind only Claude Fable 5.1 and Claude Opus 5. The variant available now, Muse Spark 1.3 (xhigh), scores 61 and ties with GPT-5.6 Sol (max) and Grok 4.6 (high). CONFLICT: AA's current model pages show re-based values — Muse Spark 1.3 (xhigh) scores 45 on the Artificial Analysis Intelligence Index, placing it well above average among comparable models (median: 26). and for intelligence, the top model of Muse Spark 1.3 is Muse Spark 1.3 (max) at 48. (marked "Updated"; appears to be an index re-versioning, relative rank unchanged). BenchLM category scores: Agentic 75.9 (Not ranked); Coding 77.5 (Not ranked); Reasoning 79.4, #6 of 27, 81st percentile; no BenchLM overall published.
- Omniscience Accuracy / Hallucination Rate: no verified public score found / no verified public score found (only directional: per Artificial Analysis, the omniscience drop comes from a higher abstention rate — the model declining to answer when unsure — which also lowered its hallucination rate.)
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found / no verified public score found (a 63.2% SWE-Bench Pro figure appears in a comparison table without clear attribution to this model; not counted)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **59%** (xhigh, Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 **75.4%** (max, Meta-reported — DeepSWE v1.1 | 75.4 | 73.0 | 74.0 ... Terminal-Bench 2.1 | 88.8 | 88.8 | 86.7); caveat: Muse Spark 1.3 scored 75.4% on DeepSWE, technically the highest of any model released this week, yet it doesn't appear on the public DeepSWE leaderboard at all. Terminal-Bench 2.1 **85%** (xhigh, AA independent).
  Long context:
- MRCR (Meta-reported, max variant): MRCR 256K–512K | 98.5 | 91.5 ; MRCR 512K–1M | 98.1 | 73.8; AA-LCR 79% (independent). No independent RULER/GraphWalks found.

### Normalized scores (1-100)

- **Tool use: 88/100.** Independent AA numbers for the shipping xhigh tier — TB2.1 85%, Tau3-Banking 47%, GDPval-AA 1709 — sit just under all three frontier thresholds (88%/50%/1750); the max variant clears them (88.8%/52%/1754) but is vendor-reported/limited-preview and not what the Free tier is guaranteed to deliver. Capped by no verified public score found for Claw-Eval/MCP-Atlas and vendor-only OSWorld/AutomationBench.
- **Reasoning: 92/100.** GPQA 94% (≥90 frontier), HLE 47% (≥40 frontier), launch AA Index 61 (≥60 frontier), all independent. Capped by low CritPt (26%), LCR regression to 79%, and the unresolved AA Index re-basing (45/48 on current pages).
- **Context window: 98/100.** ≥1M tier (1,048,576 verified via OpenRouter/Pi/AA) = 95–100; vendor-reported MRCR 98.1% at 512K–1M meets the ≥98% bar for 100, but held to 98 because the retrieval figure is Meta-reported for the max variant and not independently replicated; independent AA-LCR is 79%.
- **Multimodal: 85/100.** Text + image + video + PDF input, text output only (no audio in, no non-text out) → 75–90 tier. Held mid-tier because the Zen free-tier registration exposes only text+image input and no multimodal benchmark is measured (BenchLM: Multimodal not measured).
- **Coding: 90/100.** Meets all three frontier markers — DeepSWE 75.4% (≥74, but vendor-reported, max), TB2.1 85% (AA, xhigh; 88.8% max vendor), SciCode 59% (≥55, AA). Capped at the floor of frontier because SWE-bench Verified, LiveCodeBench, and Vibe Code Bench are no verified public score found and DeepSWE is absent from the public leaderboard.
- **Cost efficiency: 100/100.** Evaluated tier `opencode/muse-spark-1.3-contributor-free` is $0 in/out/cached on OpenCode Zen (privacy trade-off: prompts/completions may train Meta models; limited-time, dynamic quota). Reference paid points: Contributor $0.10/$0.20 (~98), standard $1.25/$4.25 (~88). Not counted in Overall.
- **Overall Score: 90.6/100.** (88 + 92 + 98 + 85 + 90) / 5 = 90.6. Best fit: free, 1M-context agentic coding and long-horizon tool-use workloads in OpenCode where training-data use is acceptable; use the paid standard SKU when data privacy or guaranteed quota matters.

---

## Signature

- Provided by: **Claude (anthropic/claude-fable-5-1)** — 2026-09-30
- Method: public internet research (Artificial Analysis model/release pages and launch article, OpenCode Zen docs, OpenRouter listing, Pi model registry, Meta developer/research pages, BenchLM, DataCamp/heise/VentureBeat/eigent coverage of Meta and AA benchmark tables); vendor-reported vs. independent numbers flagged inline; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
