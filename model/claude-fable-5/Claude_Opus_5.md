# Claude Fable 5 — findings by Claude Opus 5

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first "Mythos-class" model released for general use — a tier Anthropic positions *above* its Opus class — built for demanding reasoning and long-horizon agentic work. It is the safeguarded twin of `claude-mythos-5`: same underlying weights, same specs, same pricing, with cyber/bio/distillation classifiers that reroute flagged requests to Claude Opus 4.8 ([Anthropic announcement, 2026-06-09](https://www.anthropic.com/news/claude-fable-5-mythos-5)). Now marked **legacy** in favour of Claude Fable 5.1 ([platform docs](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **Provider / access:** Claude API (Messages API) as `claude-fable-5`; also Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud Vertex AI, Microsoft Foundry, and Claude Platform on AWS ([platform docs — Model IDs](https://platform.claude.com/docs/en/models/fable-5/overview)). Anthropic's own surface is the Messages API, not an OpenAI-style Responses API. Not listed as an OpenCode Zen ID; this repo's `meta.json` records the local route `opencode/claude-fable-5`.
- **Release / knowledge:** Released 2026-06-09; access suspended 2026-06-12 and restored 2026-07-01 ([announcement update log](https://www.anthropic.com/news/claude-fable-5-mythos-5)). Reliable knowledge cutoff **Jan 2026**; training data cutoff Jan 2026 ([platform docs — Capabilities](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **IDs:** `anthropic/claude-fable-5` (Claude API `claude-fable-5`). **No free tier of any kind** — no Zen Free ID; subscription inclusion was explicitly temporary (included on Pro/Max/Team through 2026-06-22, then credit-metered).
- **Context window:** **1,000,000 tokens** total, **128,000 tokens** max synchronous output (300k output available on the Message Batches API via the `output-300k-2026-03-24` beta header). Verified from Anthropic's own capability table ([platform docs](https://platform.claude.com/docs/en/models/fable-5/overview)); note the repo `meta.json` claim of "128K total" contradicts the vendor page and appears to be a scaffold placeholder.
- **Modalities:** **Text and images in → text out** ([platform docs — Capabilities](https://platform.claude.com/docs/en/models/fable-5/overview)). No audio, no video, no image generation. Reasoning: yes — adaptive thinking is **always on** and cannot be disabled; raw chain-of-thought is never returned (`summarized` or `omitted` only). Tool calls: yes, including the memory tool, code execution, programmatic tool calling, context editing, compaction, and task budgets.
- **Pricing (as of 2026-10-08):** **$10 / MTok input, $50 / MTok output**; 5-minute cache write $12.50, 1-hour cache write $20, cache read $1 / MTok; Batch API 50% off both directions ([platform docs — Pricing](https://platform.claude.com/docs/en/models/fable-5/overview)). Caveat: **mandatory 30-day data retention** on all first- and third-party traffic, and zero-data-retention is unavailable without express Anthropic authorisation — Anthropic states the data is not used for training ([announcement, "A new data retention policy"](https://www.anthropic.com/news/claude-fable-5-mythos-5)).
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme, and training compute are undisclosed. Distillation attempts are actively classified and rerouted, so no public distillation-derived architecture evidence exists either.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (**agentic tool use**): **98.5%** (Artificial Analysis tau2-bench leaderboard, via [BenchLM](https://benchlm.ai/models/claude-fable-5)) — effectively saturated
- OSWorld-Verified (**computer use**): **85%** ([Anthropic Fable 5 / Mythos 5 system card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf))
- Terminal-Bench 2.1: **84.3%** (Anthropic system card); independent replication **80.5%** ([Vals AI](https://www.vals.ai/models/anthropic_claude-fable-5))
- Terminal-Bench 3.0: **34.0%** ([Terminal-Bench 3.0 / FrontierBench leaderboard](https://www.frontierbench.ai/)) — the harder successor harness collapses the score
- Terminal-Bench Hard: **62.9%** (Artificial Analysis)
- GDPval-AA: **1747 Elo** (Anthropic system card); normalized **55.6%** (Artificial Analysis)
- AA Agentic Index: **51.0%**; AA EnterpriseOps-Gym: **51.1%**; AA-AnalystAgent: **48.8%** (Artificial Analysis)
- AA Harvey LAB (legal agentic): **93.6%** (Artificial Analysis)
- ApprenticeBench (GUI agents): **34%** ([NeoCognition ApprenticeBench](https://neocognition.io/blog/apprentice-bench/#are-frontier-agents-ready-for-the-job))
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Artificial Analysis) / **93.2%** ([Vals AI](https://www.vals.ai/models/anthropic_claude-fable-5))
- HLE (Humanity's Last Exam, AA harness): **55.5%** ([AA HLE leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam))
- AA-LCR (long-context reasoning): **82.3%** (Artificial Analysis)
- MLCR-AA: **64.4%** ([AA mlcr-aa leaderboard](https://artificialanalysis.ai/evaluations/mlcr-aa))
- CritPt: **28.6%** (Artificial Analysis) — hardest physics-research set, and the weakest reasoning datapoint
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%** ([ARC Prize verified results](https://arcprize.org/results/anthropic-claude-fable-5))
- MMLU-Pro: **91.5%** (Vals AI)
- Artificial Analysis Intelligence Index: **49.6**; BenchLM overall **78.84/100, rank #8 of 887** ([BenchLM](https://benchlm.ai/models/claude-fable-5), 42 of 623 benchmarks covered — BenchLM flags its own coverage as partial and the score as conservative)
- AA-Omniscience: Index **43.3**, Accuracy **65.4%**, **Hallucination Rate 63.6%** (Artificial Analysis)
- AA-IFBench (instruction following): **63.5%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **95%** (Anthropic system card; independently reproduced at **95.0%** by [Vals AI](https://www.vals.ai/models/anthropic_claude-fable-5))
- SWE-bench Pro: **80%** (Anthropic system card)
- LiveCodeBench: **89.8%** (Vals AI)
- AA-SciCode: **61.0%** ([AA scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode))
- VulcanBench v3: **89.5%** ([VulcanBench v3 Technical Report No. 4](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-3way-2026-07/model-card.md))
- FrontierCode 1.1 Main: **53.5%** ([Cognition FrontierCode 1.1](https://cognition.com/blog/frontier-code-1.1)) — Cognition's Scott Wu calls Fable 5 the highest scorer on this eval
- FrontierSWE v2: **47.0%** ([Proximal FrontierSWE v2](https://www.frontierswe.com/))
- CursorBench 3.1: **70.6%**; CursorBench 3.2: **70.5%** ([Cursor evals](https://cursor.com/cursorbench)) — Cursor states Fable 5 is SOTA on CursorBench alongside Opus 5
- AA Coding Index: **76.5%** (Artificial Analysis)
- Vibe Code Bench: no verified public score found (Replit reports Fable 5 highest on its internal *ViBench*, but publishes no number)

Multimodal / grounded:

- Blueprint-Bench 2: **38.6%** (Anthropic system card)
- OfficeQA Pro: **57.9%** (Anthropic system card)
- Design Arena — Website: **1302 Elo** ([OpenRouter benchmarks](https://openrouter.ai/anthropic/claude-fable-5/benchmarks))
- Qualitative vendor claim: Anthropic calls Fable 5 "the new state-of-the-art model for tasks involving vision", citing completion of Pokémon FireRed from raw screenshots with a vision-only harness — no reproducible metric attached, so treated as provisional

Long context:

- No MRCR / RULER / GraphWalks needle-retrieval number published at the 1M window. The only quantified long-context evidence is **AA-LCR 82.3%** and **MLCR-AA 64.4%** (reasoning-over-long-input harnesses, not retrieval), plus Anthropic's unquantified claim that the model "stays focused across millions of tokens" and gains 3× more from file-based memory than Opus 4.8 on Slay the Spire.

### Normalized scores (1–100)

- **Tool use: 91/100.** τ²-bench 98.5% is saturated, OSWorld-Verified 85% is computer-use SOTA class, Terminal-Bench 2.1 84.3% is independently corroborated at 80.5%, and GDPval-AA 1747 Elo is top-of-field; capped below the mid-90s by the harder-harness collapse (Terminal-Bench 3.0 34%, ApprenticeBench 34%, AA Agentic Index 51.0%) and by the production reality that safety classifiers silently reroute a reported <5% of sessions to Opus 4.8, which breaks tool-loop determinism.
- **Reasoning: 90/100.** GPQA Diamond 92.6–93.2%, MMLU-Pro 91.5%, ARC-AGI-2 89.2% and HLE 55.5% put it in the top handful of models measured anywhere; capped by CritPt 28.6% (frontier physics research is still largely out of reach), AA-IFBench 63.5%, and an AA-Omniscience hallucination rate of 63.6% — it answers confidently when it should abstain.
- **Context window: 93/100.** Vendor-documented 1M-token window with a 128K synchronous output ceiling (300K on batch) — top tier on raw size, and AA-LCR 82.3% shows the window is usable rather than nominal. Held under the mid-90s because no MRCR/RULER retrieval curve at 1M has been published, so the far end of the window is unverified.
- **Multimodal: 68/100.** Text **and images** in, text only out — no audio, no video, no generated media, so the ceiling is structural. Within vision it is strong (OSWorld-Verified 85% is screenshot-driven, Design Arena Website 1302 Elo), but the two document-vision numbers Anthropic itself published are modest (Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%), and the "vision SOTA" claim carries no reproducible metric.
- **Coding: 93/100.** SWE-bench Verified 95% independently reproduced by Vals AI, SWE-bench Pro 80%, LiveCodeBench 89.8%, VulcanBench v3 89.5%, plus first-party SOTA claims on CursorBench and FrontierCode from Cursor and Cognition; capped by the frontier-difficulty sets where absolute numbers stay low (FrontierSWE v2 47.0%, FrontierCode 1.1 53.5%, CursorBench ~70.5%) and by AA-SciCode 61.0%.
- **Cost efficiency: 25/100.** $10 in / $50 out per MTok is the most expensive tier Anthropic ships — 2.5× the input and output price of Claude Opus 5.5 ($4/$20) for a model BenchLM ranks *below* Opus 5.5 overall (78.84 vs 86.37). Mitigations exist (50% batch discount, $1/MTok cache reads) but there is no free tier at all, and the mandatory 30-day retention is a non-monetary cost for regulated workloads.
- **Overall Score: 87.4/100.** Mean of the five non-cost dims (91 + 90 + 93 + 68 + 93) / 5 = 87.4. Best fit: long-horizon autonomous engineering and research agents on a 1M-token codebase or document corpus where per-token price is irrelevant and a classifier-triggered fallback to Opus 4.8 is tolerable — for everything else, Opus 5.5 scores higher at a fifth of the output price.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's launch announcement and `platform.claude.com` model reference for specs and pricing, the Fable 5 / Mythos 5 system card, BenchLM's aggregated model page for cross-harness benchmark collection, and the underlying Artificial Analysis, Vals AI, Cursor, Cognition, ARC Prize, NeoCognition and OpenRouter leaderboards it cites. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
