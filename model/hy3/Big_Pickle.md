# Hy3 — findings by Big Pickle

- Source: Tencent Hunyuan (`hy3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hunyuan's third-gen open-source MoE — reborn on rebuilt pretrain/RL infra in six months — that rivals flagship open-source models 2–5x its size with only 21B active parameters, with a hybrid fast/slow-thinking design and production-grade agentic tool calling.
- **Provider / access:** Tencent official API (1/4 RMB per 1M in/out), OpenRouter (`tencent/hy3`, plus a `hy3:free` tier through 2026-07-21), DeepInfra (USD $0.14/$0.58); weights on Hugging Face, GitHub, ModelScope, AtomGit/GitCode under **Apache 2.0**.
- **Release / knowledge:** Hy3-preview launched late April 2026; full Hy3 released 2026-07-06 after feedback from 50+ products and scaled post-training RL.
- **IDs:** `hy3` / `tencent-hunyuan/hy3` (295B total; open weights)
- **Context window:** 256,000 tokens (262,144 / "262K"; ≈394 pages text).
- **Modalities:** text input; text output.
- **Pricing (as of 2026-09-20):** $0.14 in / $0.58 out per 1M tokens (DeepInfra low; $0.035 cached); official CN pricing 1/4 RMB per 1M (0.25 RMB cached) ≈ $0.15/$0.59 USD.
- **Architecture:** Mixture-of-Experts: 295B total, 21B active, 3.8B MTP layer; 80 layers; 192 experts top-8; GQA 64 heads / 8 KV (head dim 128); hidden 4096, intermediate 13312; vocab 120,832; context 256K; BF16. Configurable reasoning effort: direct no-think default plus low/high chain-of-thought.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.4** (HF scorecard).
- SWE-Bench Verified: **78 resolved** (HF card) with accuracy variance across scaffoldings (CodeBuddy, Cline, KiloCode) within 4 points; strong results reported on search-agent benchmarks BrowseComp and WideSearch.
- Tool-call reliability fixed to production grade: error recovery, output-format stability, and generalization across scaffolds.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41**.
- Tencent blind panel, 270 expert workflows: **2.67/4** vs GLM-5.1 2.51/4; hallucination rate down to **5.4%** (from 12.5% in preview); multi-turn issue rate down to **7.9%** (from 17.4%).
- GPQA Diamond / HLE / MMLU-Pro: **no verified public score found**.

Coding:

- SWE-Bench Verified 78 resolved; Terminal-Bench 2.1 90.4; SWE-Bench Multilingual resolved **5.8** (HF card); SWE-Bench Pro (ScaleAI) — listed on card, no value surfaced; strongest blind-panel gains in frontend development, data & storage, and CI/CD.

Long context:

- 256K window with improved MRCR long-dialogue evals (no raw score published); multi-turn coreference, ellipsis recovery, and constraint inheritance explicitly optimized.

Productivity:

- WorkBuddy internal: task success **90%** (from 72% on preview), average completion time **-34%**; uses 47.4% fewer tokens than GLM-5.2 on document processing and ~49% fewer on presentation creation.

### Normalized scores (1–100)

- **Tool use: 76/100.** SWE-Bench Verified 78, Terminal-Bench 2.1 90.4, stable multi-scaffold tool calling, and strong BrowseComp/WideSearch results make it a genuinely production-grade agent model.
- **Reasoning: 72/100.** Hybrid fast/slow thinking with effort control and a solid 2.67/4 expert panel, but an Intelligence Index of 41 and no published GPQA/HLE keep it below the true frontier.
- **Context window: 72/100.** 256K is strong for agentic coding and multi-doc work, with real MRCR improvements; still well short of the 1M open/closed leaders.
- **Multimodal: 50/100.** Text-only in and out — no vision, audio, or generation; this pins the floor for omni-capability.
- **Coding: 78/100.** SWE-bench Verified 78 and Terminal-Bench 2.1 90.4 with the strongest expert-panel lifts in frontend and CI/CD make it a very capable open coding agent; Multilingual/SWE-bench Pro results stay modest.
- **Cost efficiency: 88/100.** ~$0.14/$0.58 per 1M with MTP-accelerated decoding, Apache-2.0 weights, quantized single-GPU builds, and ~47% fewer tokens than GLM-5.2 on real tasks — outstanding value.
- **Overall Score: 70/100.** Mean of the five quality dims (76+72+72+50+78)/5 = 69.6. A cheap, reliable, open 256K agentic workhorse with near-frontier coding for 21B active parameters; multimodal absence and unbenchmarked frontier reasoning hold it to a "very good" score.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (hy.tencent.com, Hugging Face card, tencentcloud.com, GitHub, OpenRouter, llm-stats.com, kie.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.