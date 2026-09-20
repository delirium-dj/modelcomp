# Hy3 preview — findings by Big Pickle

- Source: Tencent Hunyuan (`hy3-preview`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 preview
- **Short description:** The first model trained on Tencent Hunyuan's rebuilt pretrain/RL infrastructure — a hybrid fast-and-slow-thinking 295B MoE that reaches the reasoning/coding/agent level of 32B-37B-active peers with just 21B active parameters, and the strongest Hy-series model shipped up to its release.
- **Provider / access:** Open-source weights on Hugging Face (`tencent/Hy3-preview`), ModelScope, GitCode under the **Tencent Hy Community License** (Apache-style for most uses); live across Tencent products (Yuanbao, IMA, CodeBuddy, WorkBuddy, QQ, Tencent Docs, Tencent Cloud) and OpenRouter; day-0 support in vLLM and SGLang.
- **Release / knowledge:** Weights open-sourced 2026-04-23 (first trained on the rebuilt infrastructure; model card dated 2026-04-13); superseded by full Hy3 on 2026-07-06.
- **IDs:** `hy3-preview` / `tencent/Hy3-preview` (295B; open weights)
- **Context window:** 256,000 tokens (262,144; ≈394 pages). Full 256K practically needs ~8xH200.
- **Modalities:** text input; text output.
- **Pricing (as of 2026-09-20):** TokenHub ~¥1.2 in / ¥0.4 cached / ¥4 out per 1M tokens (≈$0.17/$0.55); open weights free to self-host. Tencent reports ~40% inference-efficiency gain over the prior generation.
- **Architecture:** MoE, 295B total / 21B active, 3.8B MTP speculative layer (≥1.5-2x decode speedup); 80 transformer layers; 192 experts top-8 (differentiated expert sizes with P-Penalty routing loss); GQA 64 heads / 8 KV (dim 128); hidden 4096, intermediate 13312; vocab 120,832; BF16. Reasoning modes: `high` (chain-of-thought) and `no_think`.

### Raw benchmarks found

Agent / tool use (vendor-claimed unless noted):

- SWE-bench Verified: **74.4%**; Terminal-Bench 2.0: **54.4%** (Tencent model card; independent reproductions still rolling in).
- Agentic credit: stands out on ClawEval and WildClawBench, integrates with OpenClaw; drove agent workflows up to **495 steps**; CodeBuddy/WorkBuddy internal latency -54%, duration -47%, success rate >99.99%.

Reasoning / knowledge (vendor-reported):

- GPQA Diamond: **87.2%**; SuperGPQA: **51.6%**; HLE: **~30**.
- Base-model suite: MMLU 87.42, MMLU-Pro 65.76, MMLU-Redux 86.86, ARC-Challenge 95.99, DROP 85.50, PIQA 84.39, SimpleQA 26.47.
- Math: GSM8K **95.37**, MATH **76.28**, CMath 91.17; strong on IMOAnswerBench, FrontierScience-Olympiad, Tsinghua Qiuzhen math-PhD qualifying (Spring 2026) and CHSBO 2025.
- Context learning: notable gains on proprietary CL-bench / CL-bench-Life (scheduling, coreference, rule-following over messy long inputs).

Coding (base-model runs unless noted):

- MBPP-plus **78.71**; CRUXEval-I **71.19**; CRUXEval-O 68.38; LiveCodeBench-v6 **34.86** (1-shot base).
- Instruction-tuned agentic target: SWE-bench Verified 74.4%, Terminal-Bench 2.0 54.4% (vendor).

Long context:

- 256K window; CL-bench/CL-bench-Life context learning improved from Hy2 (which erred on start dates and leave rules); MRCR-style retrieval: **no verified public score found**.

Multilingual: MMMLU 80.15, INCLUDE 78.64; Chinese C-Eval 89.80, CMMLU 89.61.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench Verified 74.4% plus standout ClawEval/WildClawBench results and 495-step agent workflows are genuinely strong agentic claims; Terminal-Bench 2.0 54.4% and unverified vendor numbers temper it.
- **Reasoning: 68/100.** GPQA Diamond 87.2% with elite math runs (MATH 76.28, GSM8K 95.37, PhD-exam credit) is solid; HLE ~30 and SuperGPQA 51.6% show the ceiling is mid-frontier.
- **Context window: 72/100.** 256K with dedicated CL-bench context-learning gains is a real long-horizon asset; no independent retrieval score, and full-window serving needs ~8xH200.
- **Multimodal: 50/100.** Text-in / text-out only.
- **Coding: 73/100.** A strong open coding/agent model on its SWE-bench Verified 74.4% claim and MBPP-plus 78.7%, with good direct-execution runs; Terminal-Bench 2.0 54.4% and the preview status keep it below the full Hy3 release.
- **Cost efficiency: 84/100.** ~$0.17/$0.55 per 1M on TokenHub, 21B-active inference cost, open weights, MTP decode speedup, and a 40% efficiency gain over the prior generation — excellent price-performance.
- **Overall Score: 67/100.** Mean of the five quality dims (72+68+72+50+73)/5 = 67.0. A cheap, efficient, open 256K agent/developer workhorse whose vendor-claimed results and text-only scope leave it mid-pack versus 2026 frontier.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Tencent-Hunyuan GitHub/Hugging Face model cards, tencent.com and tencentcloud.com announcements, docs.clore.ai, implicator.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.