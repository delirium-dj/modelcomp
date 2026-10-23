# Claude 3.5 Haiku — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude 3.5 Haiku (`claude-3-5-haiku-20241022`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `claude-haiku-3.5` (404); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked Artificial Analysis (https://artificialanalysis.ai/models/claude-3-5-haiku — Intelligence Index **9** estimated, #105/300, text+image in / text out, 200k, knowledge cutoff Jul 2024), RankedAGI (https://rankedagi.com/models/claude-3.5-haiku — SWE-bench Verified 40.6%, Aider-Polyglot 28.0%, GPQA Diamond 41.6%, HumanEval 88.1%, MMLU-Pro 65.0%, MMLU 81.0%), LLMLearner (https://llmlearner.com/models/claude-3-5-haiku — retired 2026-02-19, MMLU 77.6%, ECI 127, MMMU-Pro 45.6%, SimpleQA 8.0%, Terminal Bench Hard 2.3%) and llm-stats (https://llm-stats.com/models/claude-3-5-haiku-20241022 — 200K/200K, $0.80/$4.00 Bedrock vs $1.00/$5.00 first-party), plus the official launch/model card (https://www.anthropic.com/news/3-5-models-and-computer-use, via LLMLearner) and Anthropic model overview (https://platform.claude.com/docs/en/models/overview — the 3.5 generation is superseded by Haiku 4.5/5.5). Conflicts logged: **MMLU 77.6% (LLMLearner) vs 81.0% (RankedAGI)**; **pricing $0.80/$4.00 (Bedrock) vs $1.00/$5.00 (Anthropic first-party)**; **GPQA 37.5% vs GPQA Diamond 41.6%**; **MATH 69.2% vs 69.4%**; **AA Intelligence Index 9 (current, estimated) vs deprecated AA Quality Index 69 (RankedAGI)**. Evidence confirms the prior band placements; all six dims re-verified, none changed.

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's small, fast 3.5-generation model (successor to Claude 3 Haiku), pitched at Claude 3 Opus-level coding within the budget Haiku tier. Now retired and superseded by Claude Haiku 4.5 (and Haiku 5.5).
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock (`anthropic.claude-3-5-haiku-20241022-v1:0`), Google Cloud Vertex AI. Retired on the first-party API 2026-02-19 (LLMLearner); requests now fail. Messages API.
- **Release / knowledge:** Released 2024-10-22 (GA on API/Bedrock/Vertex 2024-11-04). Knowledge cutoff July 2024 (Artificial Analysis).
- **IDs:** `claude-3-5-haiku-20241022`. No OpenCode Zen ID.
- **Context window:** 200K tokens (200,000), 8,192 max output.
- **Modalities:** Text and image (vision) in; text out. Vision was added to the first-party API 2025-02-25 (some platforms kept it text-only). No audio/video in, no audio out.
- **Pricing (as of retirement):** $0.80 in / $4.00 out per 1M on Bedrock (Anthropic first-party listed $1 / $5); cached input $0.08, cache write $1.00.
- **Architecture:** Proprietary, undisclosed transformer; API-only, no public weights.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench Hard: **2.3%** (LLMLearner — https://llmlearner.com/models/claude-3-5-haiku)
- Aider-Polyglot: **28.0%** (LLMLearner / RankedAGI — https://rankedagi.com/models/claude-3.5-haiku)
- RankedAGI Agentic: **30.5%** (RankedAGI — https://rankedagi.com/models/claude-3.5-haiku)
- Artificial Analysis Intelligence Index: **9** (estimated, #105/300) (https://artificialanalysis.ai/models/claude-3-5-haiku)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (LLMLearner / RankedAGI); GPQA: **37.5%** (LLMLearner)
- MMLU: **77.6%** (LLMLearner) — conflicting **81.0%** (RankedAGI)
- MMLU-Pro: **65.0%** (LLMLearner / RankedAGI)
- MATH: **69.2%** (LLMLearner) — earlier read 69.4% (AI/TLDR)
- FrontierMath: **0.3%** (LLMLearner)
- ECI: **127** (#121/166, LLMLearner)
- SimpleQA: **8.0%** (LLMLearner)
- RankedAGI Reasoning: **31.9%**; RankedAGI Math: **43.7%** (https://rankedagi.com/models/claude-3.5-haiku)

Coding:

- SWE-bench Verified: **40.6%** (Anthropic, via RankedAGI / LLMLearner)
- HumanEval: **88.1%** (Anthropic, via LLMLearner / RankedAGI)
- Aider-Polyglot: **28.0%** (LLMLearner / RankedAGI)
- RankedAGI Coding: **32.9%**; ChatArena (LMSYS) coding ELO **1263**; SvelteBench (old v1) **73.3%**; LiveBench Coding (old) **51.4%** (https://rankedagi.com/models/claude-3.5-haiku)

Long context:

- No RULER/MRCR retrieval curve published; 200K context window (llm-stats — https://llm-stats.com/models/claude-3-5-haiku-20241022).

Multimodal:

- MMMU-Pro: **45.6%** (LLMLearner — https://llmlearner.com/models/claude-3-5-haiku)
- Text + image in → text out (Artificial Analysis — https://artificialanalysis.ai/models/claude-3-5-haiku)

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal Bench Hard 2.3% (https://llmlearner.com/models/claude-3-5-haiku), Aider-Polyglot 28.0% and RankedAGI Agentic 30.5% (https://rankedagi.com/models/claude-3.5-haiku) mark it as a weak agentic executor — the mid band starts around TB2.1 45–60%, which it never reaches.
- **Reasoning: 50/100.** GPQA Diamond 41.6% is below the 60–80% mid band, while MATH 69.2% and MMLU 77.6% are solid; FrontierMath 0.3% and SimpleQA 8.0% (LLMLearner) hold it at the low end of mid. AA Intelligence Index 9 (estimated) is likewise a below-average non-reasoning score (https://artificialanalysis.ai/models/claude-3-5-haiku).
- **Context window: 70/100.** 200K tokens is the methodology's 200K anchor (70); the 8K max output is a real limitation, noted as a caveat.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band (https://artificialanalysis.ai/models/claude-3-5-haiku); MMMU-Pro 45.6% supports the lower half of that band (https://llmlearner.com/models/claude-3-5-haiku).
- **Coding: 66/100.** SWE-bench Verified 40.6% was class-leading for a small 2024 model and HumanEval 88.1% is strong, but Aider-Polyglot 28.0% and RankedAGI Coding 32.9% keep it mid (https://rankedagi.com/models/claude-3.5-haiku).
- **Cost efficiency: 80/100.** $0.80 in / $4.00 out per 1M is cheap on input but well above the $0.10–$0.60 leaders; cache reads at $0.08 help (https://llm-stats.com/models/claude-3-5-haiku-20241022).
- **Overall Score: 58/100.** (40 + 50 + 70 + 62 + 66) / 5 = 57.6 → **58**. Best-fit: retired budget sub-agent / routing model — migrate to Claude Haiku 4.5 for new work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: independent public internet research (Artificial Analysis, RankedAGI, LLMLearner, llm-stats; plus the official Anthropic launch post via LLMLearner and Anthropic's model overview). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
