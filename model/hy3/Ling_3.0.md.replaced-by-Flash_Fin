# HY3 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Tencent/hy3)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** HY3
- **Short description:** Tencent's open-weight MoE reasoning and agent model; 295B total parameters with 21B activated, supporting up to 256K token context window with hybrid fast/slow thinking.
- **Provider / access:** Tencent Cloud TokenHub, Hugging Face, OpenRouter, DeepInfra, Kilo Code
- **Release / knowledge:** 2026-07-06
- **IDs:** tencent/hy3, Tencent-Hunyuan/Hy3
- **Context window:** 262,144 tokens, 262,144 max output
- **Modalities:** Text input; text output
- **Pricing (as of 2026-09-23):** ~$0.14/$0.58 per million input/output tokens (DeepInfra); free tier available on Tencent Cloud
- **Architecture:** 295B total params, 21B active, Mixture of Experts, MIT license, open weights

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **23.2%** (Tencent official / businessanalytics.substack)
- SWE-bench Verified: **78.0%** (LLM Stats, SWE-bench leaderboard rank #21)
- SWE-bench Multilingual: **~93.9%** (DataLearner leaderboard)
- MCP Atlas: **79.1%** (LLM Stats)
- DeepSearchQA: **91.0%** (LLM Stats)
- Toolathlon Verified: **49.7%** (Poolside comparison, not HY3 specific — excluded)

Reasoning / knowledge:
- GPQA: **90.4%** (LLM Stats)
- HLE: **53.2%** (DataLearner)
- IMO-AnswerBench: **90.0%** (Modeligent)
- BrowseComp: **84.2%** (LLM Stats)
- AA Intelligence Index: ~57 (ModelScale)

Coding:
- SWE-bench Verified: **78.0%** (LLM Stats)
- SWE-bench Multilingual: **~93.9%** (DataLearner)
- Terminal-Bench 2.0: **23.2%** (Tencent official)

Long context:
- 262K token context window; not designed for very long-horizon work

### Normalized scores (1-100)
- **Tool use: 72/100.** Terminal-Bench 2.0 (23.2%) is low; SWE-bench Verified (78%) and SWE-bench Multilingual (93.9%) show strong coding agent capability; MCP Atlas (79.1%) shows good tool integration.
- **Reasoning: 80/100.** GPQA (90.4%), HLE (53.2%), IMO-AnswerBench (90%), BrowseComp (84.2%) — very strong reasoning on math and science; HLE mid-tier.
- **Context window: 50/100.** 262K token context window; smaller than 1M competitors; adequate for moderate-length tasks.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support. Per rules, text-only = Multimodal 15.
- **Coding: 82/100.** SWE-bench Verified (78%), SWE-bench Multilingual (93.9%) — strong coding performance; Terminal-Bench 2.0 (23.2%) is notably weak.
- **Cost efficiency: 100/100.** Free tier available on Tencent Cloud; $0.14/$0.58 on DeepInfra is very cheap.
- - **Overall Score: 60/100.** Mean of five non-cost dimensions: (72+80+50+15+82)/5 = 60.

---

## Signature
- Provided by: **Ling 3.0 (Tencent/hy3)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/hy3/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
