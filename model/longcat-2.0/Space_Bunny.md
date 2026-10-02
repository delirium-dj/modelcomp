# LongCat 2.0 — findings by Space Bunny Alpha

- Source: Meituan (`LongCat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0 (MIT-licensed open weights; no OpenCode Zen Free ID)
- **Short description:** Meituan's 1.6T-parameter open-weights MoE for coding, long-context, and agentic work, unveiled 2026-06-29/30 — notable as the first truly frontier-scale model trained and deployed entirely on Chinese AI-ASIC superpods. It punches above its price class on software engineering (SWE-bench Pro 59.5 edges GPT-5.5's 58.6) and ships a native 1M-token context, while trailing closed frontier models on general knowledge and reasoning. Distinct from LongCat-2.5-Preview, which reuses the same 1.6T/48B scale figures with vision added and no published benchmarks.
- **Provider / access:** LongCat API platform (`https://longcat.ai/platform/`), model ID `LongCat-2.0`, with both OpenAI-compatible Chat Completions and Anthropic-compatible Messages endpoints (switch `base_url`, key, and model name). Also on OpenRouter (`meituan/longcat-2.0`). Integrated with Claude Code, OpenClaw, Hermes, OpenCode, and Kilo Code.
- **Release / knowledge:** unveiled 2026-06-29, launch blog 2026-06-30, API billing live 2026-06-30; knowledge cutoff not documented.
- **IDs:** `LongCat-2.0` (Meituan first-party); `meituan/longcat-2.0` on OpenRouter; Hugging Face `meituan-longcat/LongCat-2.0` (full MIT safetensors plus an INT8 build). No Free ID exists on OpenCode Zen — cost is scored on the paid rate card.
- **Context window:** 1M tokens input, 128K (131,072) max output, native and no beta header. Verified two ways: Meituan's launch materials, and the fact that the model was trained on hundreds of billions of tokens of 1M-context data using LongCat Sparse Attention.
- **Modalities:** text in, text out. No image, audio, or video input (vision arrives only in the separate LongCat-2.5-Preview). Native tool calling, multi-step reasoning, long-context tasks, and automatic context caching.
- **Pricing (as of 2026-09-29):** standard $0.75 per 1M uncached input / $2.95 output, cache read $0.015; limited-time promotional $0.30 / $1.20 with cache read $0.006. **Context-cache hits are processed free of charge** regardless of tier, and under a Token Pack only cache-miss inputs and generated tokens consume quota — the economic hook of the release. OpenRouter lists $0.30 / $1.20 with $0.006 cache read. Paid, with 5M free tokens granted to existing users at launch and Token Pack flash sales four times daily (10:00, 16:00, 21:00, 23:00 Beijing time), valid 30 days.
- **Architecture:** Mixture-of-Experts, 1.6 trillion total parameters with ~48 billion activated per token; MIT license (commercially usable). LongCat Sparse Attention (LSA) with streaming-aware indexing, cross-layer indexing, and hierarchical indexing; 3-step Multi-Token Prediction for speculative decoding; 135B N-gram Embedding parameters inherited from LongCat-Flash-Lite. Pretrained on 35+ trillion tokens across millions of accelerator-days on AI ASIC superpods (Ascend 910B) with no rollbacks.

### Raw benchmarks found

> All figures below come from Meituan's own launch table, in which scores **without** a `*` are measured in-house under a unified harness — including the LongCat-2.0 column, so the vendor comparisons are not like-for-like. Harness notes published by Meituan: Terminal-Bench 2.1 via Claude Code, 8c16g per sandbox, temperature 1.0, top_p 0.95, 6-hour agent timeout; SWE-bench series via Claude Code, 4c8g per sandbox, temperature 1.0, top_p 1.0, problematic tasks corrected.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan launch table, in-house; Gemini 3.1 Pro 70.7, GPT-5.5 73.8, Opus 4.7 71.7, Opus 4.8 78.9 — all `*`-cited from vendor reports. BenchmarkList ranks it 41st of 182, 78th percentile)
- FORTE (enterprise workflow simulator): **73.2%** (in-house; GPT-5.5 77.8, Opus 4.6 73.2 — a tie, Gemini 3.1 Pro 70.3)
- BrowseComp: **79.9%** (`*`-cited; Gemini 3.1 Pro 85.9, GPT-5.5 84.4, Opus 4.8 84.3)
- RWSearch: **78.8%** (in-house; GPT-5.5 85.3, Opus 4.6 81.3, Gemini 3.1 Pro 76.3)
- IFEval: **90.0%** (in-house; Gemini 3.1 Pro 96.1, GPT-5.5 95.0)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (`*`-cited; Gemini 3.1 Pro 94.3, GPT-5.5 93.6, Opus 4.8 92.4. BenchmarkList: 45th of 464, 90th percentile)
- IMO-AnswerBench: **81.8%** (in-house; Gemini 3.1 Pro 90.0, GPT-5.5 79.5 — LongCat is the only model in the table to edge past GPT-5.5 here; BenchmarkList ranks it 2nd of 5 on mathematics)
- Writing Bench: **83.8%** (in-house; Gemini 3.1 Pro 83.7, Opus 4.8 85.2; BenchmarkList 2nd of 55, 98th percentile)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no independent composite index row for LongCat-2.0)
- HLE / CritPt / LCR / MLCR / Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **59.5%** (`*`-cited; GPT-5.5 58.6, Gemini 3.1 Pro 54.2, Opus 4.8 69.2. BenchmarkList: 20th of 49, 60th percentile, field leader Fable 5.1 at 81.2)
- SWE-bench Multilingual: **77.3%** (`*`-cited; Gemini 3.1 Pro 76.9, Opus 4.6 77.8, Opus 4.8 84.8. BenchmarkList: 13th of 46, 73rd percentile)
- Terminal-Bench 2.1: **70.8%** (see above; the coding-agent headline alongside SWE-bench Pro)
- SciCode: **35.4%** (BenchmarkList leaderboard record, source attribution not given by the model card; treated as provisional)
- SWE-bench Verified / LiveCodeBench / AA-SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Ecosystem reach worth recording as a practical, not benchmark, signal: deeply integrated with Claude Code, OpenClaw, and Hermes, with repository-level edits and agentic workflows called out as design targets.

Long context:

- AA-LCR: **62.7%** (BenchmarkList long-context leaderboard record, 133rd of 409, 68th percentile; attributed as a leaderboard figure rather than a Meituan-published measurement, so provisional)
- No MRCR / RULER / GraphWalks measurement at any window length has been published. The 1M window itself is credible beyond the datasheet because the model was trained on hundreds of billions of tokens of 1M-context data with a purpose-built sparse-attention scheme, but that is a training claim, not a retrieval score.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid across the agent and search rows: Terminal-Bench 2.1 70.8% is level with Gemini 3.1 Pro, FORTE 73.2% ties Opus 4.6, and RWSearch 78.8% is a genuine strength. Capped by BrowseComp at 79.9% and IFEval at 90.0%, both behind Gemini 3.1 Pro and GPT-5.5, and by the fact that the whole table is Meituan's own unified in-house harness — not like-for-like against the `*`-cited vendor numbers beside it.
- **Reasoning: 76/100.** GPQA Diamond 88.9% at the 90th percentile and an IMO-AnswerBench 81.8% that is the best in its comparison column are real strengths, plus WritingBench 83.8% at the 98th percentile. Capped by GPQA trailing Gemini 3.1 Pro by 5.4 points and GPT-5.5 by 4.7, and by no independent composite index, HLE, or hallucination-rate figure existing to corroborate the in-house numbers.
- **Context window: 89/100.** A native 1M input / 128K output window backed by purpose-built LongCat Sparse Attention and 1M-context training data — top of the practical tier map — with an AA-LCR figure of 62.7% on file as at least one measured long-context number. Held below the ceiling because that single retrieval record is a leaderboard entry of uncertain provenance and no MRCR/RULER/GraphWalks sweep has been run.
- **Multimodal: 15/100.** Text in, text out only — no image, audio, or video input. Vision is a LongCat-2.5-Preview capability and must not be read onto this checkpoint; the template's text-only floor applies.
- **Coding: 76/100.** The model's clearest reason to exist: SWE-bench Pro 59.5% edges past GPT-5.5's 58.6, SWE-bench Multilingual 77.3% clears Gemini 3.1 Pro, and Terminal-Bench 2.1 70.8% matches it. Capped by 60th-percentile and 73rd-percentile placements against much stronger field leaders (Fable 5.1 at 81.2 on SWE-bench Pro, Opus 4.8 at 84.8 on Multilingual) and by a provisional SciCode of 35.4%.
- **Cost efficiency: 90/100.** $0.30 / $1.20 promotional with $0.006 cache reads on MIT-licensed weights, and context-cache hits billed at zero under the Token Pack structure, which makes long-horizon iterative agent loops unusually cheap. Capped only by the promo being explicitly time-limited against a $0.75 / $2.95 standard rate, and by 1.6T parameters being impractical to self-host for most buyers.
- **Overall Score: 66.8/100.** Five quality dims mean out at 66.8, held down by a text-only modality score; the best fit is cost-sensitive software-engineering agents and long-context repository work on an open-weights budget, where its SWE-bench Pro and Multilingual edges over GPT-5.5 and Gemini 3.1 Pro are the reason to pick it, and its reasoning gap to closed frontier models is the reason not to.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Meituan's `longcat.chat` launch blog, the `meituan-longcat/LongCat-2.0` Hugging Face and GitHub model cards, VentureBeat, BigGo finance summary, LLM Reference, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores. Meituan's own table is vendor-reported under a unified in-house harness, and the SciCode and AA-LCR figures are leaderboard records treated as provisional — both are flagged above.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
