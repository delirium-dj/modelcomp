# Claude Sonnet 3.5 — findings by Mimo v2.6 Flash

- Source: Anthropic (`claude-3-5-sonnet-20241022` / `claude-3-5-sonnet-20240620`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (two builds: June 2024 and the upgraded October 2024 version — scores below use the upgraded build unless noted)
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation — balanced text/image reasoning and coding for its era; the Oct 2024 build was the first model above 45% SWE-bench Verified. Legacy model in 2026, superseded by Sonnet 4.5/5 lines; standalone entry, not a variant of another tracked model.
- **Provider / access:** Anthropic Claude API (Messages API, chat), Amazon Bedrock, Google Vertex AI, Microsoft Foundry, plus aggregators (OpenRouter, llm-stats listed routes). Proprietary — no open weights.
- **Release / knowledge:** 2024-06-20 (build `claude-3-5-sonnet-20240620`), upgraded 2024-10-22 (`claude-3-5-sonnet-20241022`); knowledge cutoff 2024-04-30 (TypingMind model record; June build April 2024).
- **IDs:** `claude-3-5-sonnet-20241022` (current API id), alias `claude-3-5-sonnet`; Bedrock `anthropic.claude-3-5-sonnet-20241022-v2.0`. **No Zen Free ID exists** (proprietary paid model).
- **Context window:** 200,000 tokens input; max output 8,192 tokens (TypingMind/Spice.ai model records — the 64K output figure some trackers attach belongs to Sonnet 4.5, not this model).
- **Modalities:** text, image, PDF in; text out; tool calling; no native thinking/reasoning mode (pre-extended-thinking era).
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M tokens; cache read $0.30, 5m cache write $3.75 (Anthropic list pricing, unchanged since launch).
- **Architecture:** proprietary dense transformer (size undisclosed), text + vision encoder.

### Raw benchmarks found

Agent / tool use:

- TAU-bench Airline: **46.0%**, TAU-bench Retail: **69.2%** (Oct 2024 build, llm-stats record of Anthropic evals)
- Anthropic internal agentic coding eval: **64%** (vs Claude 3 Opus 38% — Anthropic model card addendum)
- OSWorld / Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: no verified public score found (all post-date or were not run for this model; Terminal-Bench and GDPval did not exist at its launch)

Reasoning / knowledge:

- GPQA Diamond: **67.2%** (Oct 2024 build; June build 59.4% 1-shot CoT, 67.2% Maj@32 — Anthropic model card addendum)
- MMLU: **90.4** (5-shot CoT, official card) / MMLU-Pro: **76.1** (RankedAGI)
- BIG-Bench Hard: 93.1% / GSM8K: 96.4% / MATH: 71.1% (June build, official card); MATH 78.3% on Oct build (llm-stats)
- HLE / LCR / MRCR / Artificial Analysis Intelligence Index: no verified public score found (HLE/LCR post-date launch; AA Quality Index 76 listed but marked deprecated by source)

Coding:

- SWE-bench Verified: **49%** (Oct 2024 build, Anthropic 2024-10-30 announcement — then SOTA; June build 33.4%)
- HumanEval: 92.0% (June official card) / 93.7% (Oct build per llm-stats); HumanEval+ 81.7%
- LiveCodeBench v5: 36.0 (RankedAGI record, old build)
- DeepSWE / SciCode / SWE-pro / Terminal-Bench: no verified public score found

Long context:

- 200K window with no public MRCR/RULER/GraphWalks retrieval score found; long-doc handling was market-leading in 2024 but no measured retrieval curve published for this model.

Multimodal:

- MMMU (val): **68.3%** (official card) / Open VLM Leaderboard average **67.9**, rank #2 of 18 at launch (8 benchmarks: MMBench 78.5, MMStar 62.2, MathVista 61.6, AI2D 80.2, OCRBench 788, MMVet 66.0, HallusionBench 49.9)
- Oct build: MathVista 67.7, ChartQA 90.8, DocVQA 95.2, AI2D 94.7 (llm-stats record)

### Normalized scores (1–100)

- **Tool use: 65/100.** TAU-bench Retail 69.2 / Airline 46.0 and a 64% internal agentic coding rate were solid for 2024; capped by no Terminal-Bench/GDPval/Claw-Eval numbers and a pre-tool-orchestration API generation.
- **Reasoning: 64/100.** GPQA-D 67.2 sits in the mid band (60–80), MMLU 90.4 / BBH 93.1 are strong but shallow by 2026 standards; capped by no HLE/long-context reasoning evidence and April 2024 knowledge.
- **Context window: 70/100.** 200K is the methodology's exact 200K anchor (= 70); no measured retrieval-at-depth published, max output only 8K.
- **Multimodal: 68/100.** Image + PDF in with MMMU 68.3 and a #2 launch-era Open VLM rank; capped by text-only output and no video/audio — sits at the top of the +image tier (60–70).
- **Coding: 62/100.** SWE-bench Verified 49% (SOTA in Oct 2024, ~30 points behind 2026 leaders) plus HumanEval 93.7, but LiveCodeBench v5 36.0 and zero DeepSWE/SciCode/Terminal-Bench evidence cap it well below the current mid band.
- **Cost efficiency: 60/100.** $3/$15 per 1M matches the methodology's $3/$15 = ~60 anchor; no free tier, no caching-era discounts beyond standard prompt caching.
- **Overall Score: 66/100.** (65 + 64 + 70 + 68 + 62) / 5 = 65.8 → half-up 66. Best fit: legacy 2024-era paid workhorse still fine for light image-aware tasks — new work should move to current Sonnet/Haiku tiers.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
