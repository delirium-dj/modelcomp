# LongCat 2.0 — findings by Space Bunny Alpha

- Source: Meituan (`LongCat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-validation 2026-09-29 — what changed.** One real addition and one real
> correction. **(1) An independent composite now exists:** the previous pass recorded
> "Artificial Analysis Intelligence Index: no verified public score found," and AA now
> lists LongCat 2.0 at **19 on v4.3.2** (`artificialanalysis.ai/models/longcat-2-0`,
> #54 of 116 in class vs a median of 18; #5 of 116 on cost). That is *well below* the
> vendor in-house table's implied quality, and it is the reason **Reasoning moved
> 76 → 69** and **Coding 76 → 74**. **(2) The successor is real and dated:** LongCat-2.5-
> Preview went live on the LongCat platform **2026-09-25**, so 2.0 is no longer the
> current Meituan agentic endpoint. Overall moved **66.8 → 64.4**.

## Model card

- **Name:** LongCat-2.0 (MIT-licensed open weights; no OpenCode Zen Free ID)
- **Short description:** Meituan's 1.6T-parameter open-weights MoE for coding, long-context, and agentic work, unveiled 2026-06-29/30 — notable as the first truly frontier-scale model trained and deployed entirely on Chinese AI-ASIC superpods. It punches above its price class on software engineering (SWE-bench Pro 59.5 edges GPT-5.5's 58.6) and ships a native 1M-token context, while trailing closed frontier models on general knowledge and reasoning. **Now the previous generation:** LongCat-2.5-Preview (same 1.6T/48B scale, vision added, no published benchmarks) launched 2026-09-25 and is the endpoint Meituan is promoting.
- **Provider / access:** LongCat API platform (`https://longcat.ai/platform/`), model ID `LongCat-2.0`, with both OpenAI-compatible Chat Completions and Anthropic-compatible Messages endpoints (switch `base_url`, key, and model name). Also on OpenRouter (`meituan/longcat-2.0`). Integrated with Claude Code, OpenClaw, Hermes, OpenCode, and Kilo Code. AA tracks 2 API providers.
- **Release / knowledge:** unveiled 2026-06-29 (AA release date; Meituan launch blog 2026-06-30), API billing live 2026-06-30; knowledge cutoff not documented.
- **IDs:** `LongCat-2.0` (Meituan first-party); `meituan/longcat-2.0` on OpenRouter; Hugging Face `meituan-longcat/LongCat-2.0` (full MIT safetensors plus an INT8 build). No Free ID exists on OpenCode Zen — cost is scored on the paid rate card.
- **Context window:** 1M tokens input, 128K (131,072) max output, native and no beta header. Verified three ways: Meituan's launch materials, the LongCat API docs (which now list 2.0 and 2.5-Preview side by side with identical 1M/128K limits), AA's spec table (1M, ~1500 A4 pages), and the fact that the model was trained on hundreds of billions of tokens of 1M-context data using LongCat Sparse Attention.
- **Modalities:** text in, text out. AA's spec table explicitly records "text input / text output" and answers "no" to both image input and multimodal. No image, audio, or video input (vision arrives only in the separate LongCat-2.5-Preview). Native tool calling, multi-step reasoning, long-context tasks, and automatic context caching.
- **Pricing (as of 2026-09-29):** standard $0.75 per 1M uncached input / $2.95 output, cache read $0.015; limited-time promotional $0.30 / $1.20 with cache read $0.006. **AA is now scoring the model at the promotional $0.30 / $1.20 with a 98% cache discount ($0.06)**, blended 7:2:1 = $0.18 per 1M, and reports $0.06 per task to run the full Intelligence Index — so the promo is the rate in force as of this pass, not the standard card. **Context-cache hits are processed free of charge** regardless of tier, and under a Token Pack only cache-miss inputs and generated tokens consume quota — the economic hook of the release. OpenRouter lists $0.30 / $1.20 with $0.006 cache read. Paid, with 5M free tokens granted to existing users at launch and Token Pack flash sales four times daily (10:00, 16:00, 21:00, 23:00 Beijing time), valid 30 days.
- **Architecture:** Mixture-of-Experts, 1.6 trillion total parameters with ~48 billion activated per token (confirmed in AA's spec table); MIT license (commercially usable). LongCat Sparse Attention (LSA) with streaming-aware indexing, cross-layer indexing, and hierarchical indexing; 3-step Multi-Token Prediction for speculative decoding; 135B N-gram Embedding parameters inherited from LongCat-Flash-Lite. Pretrained on 35+ trillion tokens across millions of accelerator-days on AI ASIC superpods (Ascend 910B) with no rollbacks.

### Raw benchmarks found

> All figures in the Meituan table come from Meituan's own launch table, in which scores **without** a `*` are measured in-house under a unified harness — including the LongCat-2.0 column, so the vendor comparisons are not like-for-like. Harness notes published by Meituan: Terminal-Bench 2.1 via Claude Code, 8c16g per sandbox, temperature 1.0, top_p 0.95, 6-hour agent timeout; SWE-bench series via Claude Code, 4c8g per sandbox, temperature 1.0, top_p 1.0, problematic tasks corrected.

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 19** (`artificialanalysis.ai/models/longcat-2-0`, read 2026-09-29) — **#54 of 116** in the open-weights class, against a class median of 18, i.e. above average but barely. AA records it as a reasoning model, notes the run generated 140M output tokens (**#18 of 116 on verbosity**), and does **not** publish output speed (Speed field reads N/A — 2 providers tracked, no first-party measurement). The individual sub-eval rows (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR) are **not populated on the model page**, so the composite is the only independent number.
- Terminal-Bench 2.1: **70.8%** (Meituan launch table, in-house; Gemini 3.1 Pro 70.7, GPT-5.5 73.8, Opus 4.7 71.7, Opus 4.8 78.9 — all `*`-cited from vendor reports. BenchmarkList ranks it 41st of 182, 78th percentile)
- FORTE (enterprise workflow simulator): **73.2%** (in-house; GPT-5.5 77.8, Opus 4.6 73.2 — a tie, Gemini 3.1 Pro 70.3)
- BrowseComp: **79.9%** (`*`-cited; Gemini 3.1 Pro 85.9, GPT-5.5 84.4, Opus 4.8 84.3)
- RWSearch: **78.8%** (in-house; GPT-5.5 85.3, Opus 4.6 81.3, Gemini 3.1 Pro 70.3)
- IFEval: **90.0%** (in-house; Gemini 3.1 Pro 96.1, GPT-5.5 95.0)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (`*`-cited; Gemini 3.1 Pro 94.3, GPT-5.5 93.6, Opus 4.8 92.4. BenchmarkList: 45th of 464, 90th percentile)
- IMO-AnswerBench: **81.8%** (in-house; Gemini 3.1 Pro 90.0, GPT-5.5 79.5 — LongCat is the only model in the table to edge past GPT-5.5 here; BenchmarkList ranks it 2nd of 5 on mathematics)
- Writing Bench: **83.8%** (in-house; Gemini 3.1 Pro 83.7, Opus 4.8 85.2; BenchmarkList 2nd of 55, 98th percentile)
- **⚠ Reconciling the two sources:** the AA v4.3.2 composite of **19** sits well below what the GPQA 88.9 / IMO 81.8 / WritingBench 83.8 column would imply. Both can be true — GPQA Diamond and WritingBench are narrow, in-harness, in-house measurements while v4.3.2 is a 10-eval composite weighted toward agentic, tool-use, document and long-context work, none of which LongCat 2.0 has a public row for. The composite is the more honest single number for a general-purpose read, and the gap is the clearest evidence that Meituan's table flatters the model.
- HLE / CritPt / MLCR / Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **59.5%** (`*`-cited; GPT-5.5 58.6, Gemini 3.1 Pro 54.2, Opus 4.8 69.2. BenchmarkList: 20th of 49, 60th percentile, field leader Fable 5.1 at 81.2)
- SWE-bench Multilingual: **77.3%** (`*`-cited; Gemini 3.1 Pro 76.9, Opus 4.6 77.8, Opus 4.8 84.8. BenchmarkList: 13th of 46, 73rd percentile)
- Terminal-Bench 2.1: **70.8%** (see above; the coding-agent headline alongside SWE-bench Pro)
- SciCode: **35.4%** (BenchmarkList leaderboard record, source attribution not given by the model card; treated as provisional)
- **AA v4.3.2 includes SciCode and Terminal-Bench 4.0 in the composite of 19**, but neither is published as a standalone row for this model.
- SWE-bench Verified / LiveCodeBench / AA-SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Ecosystem reach worth recording as a practical, not benchmark, signal: deeply integrated with Claude Code, OpenClaw, and Hermes, with repository-level edits and agentic workflows called out as design targets.

Long context:

- AA-LCR: **62.7%** (BenchmarkList long-context leaderboard record, 133rd of 409, 68th percentile; attributed as a leaderboard figure rather than a Meituan-published measurement, so provisional). **AA's own v4.3.2 AA-LCR v1.1 row for LongCat 2.0 is not populated**, so this leaderboard entry remains the only retrieval figure.
- No MRCR / RULER / GraphWalks measurement at any window length has been published. The 1M window itself is credible beyond the datasheet because the model was trained on hundreds of billions of tokens of 1M-context data with a purpose-built sparse-attention scheme, but that is a training claim, not a retrieval score.

### Normalized scores (1–100)

- **Tool use: 75/100.** ⬇ **CHANGED from 78.** Solid across the agent and search rows: Terminal-Bench 2.1 70.8% is level with Gemini 3.1 Pro, FORTE 73.2% ties Opus 4.6, and RWSearch 78.8% is a genuine strength. Moved down 3 points on the new evidence: an **AA v4.3.2 composite of 19** is well below the level these in-house agent rows suggest, and the entire table remains Meituan's own unified harness rather than like-for-like against the `*`-cited vendor numbers beside it. Still capped by BrowseComp at 79.9% and IFEval at 90.0%, both behind Gemini 3.1 Pro and GPT-5.5.
- **Reasoning: 69/100.** ⬇ **CHANGED from 76.** GPQA Diamond 88.9% at the 90th percentile, an IMO-AnswerBench 81.8% that is the best in its comparison column, and WritingBench 83.8% at the 98th percentile are all real. But the independent **AA v4.3.2 composite is 19**, and the methodology's "Index 20–35 → 55–65" band does not accommodate a 76 — an index of 19 with GPQA trailing Gemini 3.1 Pro by 5.4 points and GPT-5.5 by 4.7 is a mid-70s-on-in-house-narrow-benchmarks, high-60s-on-independent-composite profile. 69 is the compromise, and it is held well below the vendor table's own framing.
- **Context window: 89/100.** *(unchanged)* A native 1M input / 128K output window — now confirmed in three independent places including AA's spec table — backed by purpose-built LongCat Sparse Attention and 1M-context training data: top of the practical tier map. Held below the ceiling because the only retrieval figure (AA-LCR 62.7%) is a leaderboard entry of uncertain provenance, AA's own AA-LCR v1.1 row is empty, and no MRCR/RULER/GraphWalks sweep has been run.
- **Multimodal: 15/100.** *(unchanged)* Text in, text out only — no image, audio, or video input, now stated explicitly by AA as well as by Meituan. Vision is a LongCat-2.5-Preview capability and must not be read onto this checkpoint; the template's text-only floor applies.
- **Coding: 74/100.** ⬇ **CHANGED from 76.** The model's clearest reason to exist: SWE-bench Pro 59.5% edges past GPT-5.5's 58.6, SWE-bench Multilingual 77.3% clears Gemini 3.1 Pro, and Terminal-Bench 2.1 70.8% matches it. Moved down 2 points because the **AA v4.3.2 composite of 19** is the first independent check on these vendor numbers and it does not support reading them as frontier-adjacent, and because placements remain only 60th- and 73rd-percentile against much stronger field leaders (Fable 5.1 at 81.2 on SWE-bench Pro, Opus 4.8 at 84.8 on Multilingual) with a provisional SciCode of 35.4%.
- **Cost efficiency: 90/100.** *(unchanged)* $0.30 / $1.20 with a **98% cache discount to $0.06** on MIT-licensed weights, a **$0.18/1M blended rate** and a **$0.06 per Intelligence Index task** — AA ranks it **#5 of 116** on cost in its class, which is a genuinely elite cost position. Context-cache hits are billed at zero under the Token Pack structure, which makes long-horizon iterative agent loops unusually cheap. Capped only by the rate being explicitly time-limited against a $0.75 / $2.95 standard card, and by 1.6T parameters being impractical to self-host for most buyers.
- **Overall Score: 64.4/100.** ⬇ **CHANGED from 66.8.** Mean of the five non-cost dims (75 + 69 + 89 + 15 + 74) / 5 = 322 / 5 = 64.4. The entire move is the arrival of the independent composite: LongCat-2.0's vendor table is a strong marketing artifact and the first independent number to touch it lands well below where that table sits. Still held down by a text-only modality score. Best fit is cost-sensitive software-engineering agents and long-context repository work on an open-weights budget, where its SWE-bench Pro and Multilingual edges over GPT-5.5 and Gemini 3.1 Pro are the reason to pick it, and its composite-19 reasoning profile against closed frontier models is the reason not to — and it is now the *previous* generation, with LongCat-2.5-Preview live since 2026-09-25.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Meituan's `longcat.chat` launch blog, the `meituan-longcat/LongCat-2.0` Hugging Face and GitHub model cards, the LongCat API platform docs supported-models page, VentureBeat, BigGo finance summary, LLM Reference, BenchmarkList, and the Artificial Analysis model page for LongCat 2.0 including the v4.3.2 composite and cost/verbosity ranks). Scores are normalized 1–100 interpretations, not official vendor scores. Meituan's own table is vendor-reported under a unified in-house harness, and the SciCode and AA-LCR figures are leaderboard records treated as provisional — both are flagged above.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
