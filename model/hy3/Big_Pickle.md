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

- **Tool use: 72/100.** SWE-Bench Verified 78 and Terminal-Bench 2.1 90.4 on the HF card are strong, and multi-scaffold reliability is validated — but AA Agentic Index 25.6% and GDPval-AA 1,136 (28.3%) are lower than "production-grade" pitch implies (contrast GLM-5.2's 39.4/43.7%).
- **Reasoning: 70/100.** AA-GPQA Diamond 89.7% and AA-HLE 33.5% are solid, and the hybrid fast/slow design with effort control is real; but CritPt 4.9%, a 2.67/4 expert panel, and the AA II ambiguity (25.3 current vs 41.2 snapshot, see Re-verification) keep it clearly below the true frontier.
- **Context window: 74/100.** 256K is strong for agentic coding and multi-doc work, with an independently measured AA-LCR **79.0%** (the strongest long-context-reasoning row in its price class); still well short of the 1M leaders.
- **Multimodal: 50/100.** Text-only in and out — no vision, audio, or generation; this pins the floor for omni-capability.
- **Coding: 74/100.** SWE-bench Verified 78 and Terminal-Bench 2.1 90.4 on the card with the strongest expert-panel lifts in frontend and CI/CD; AA Coding Index 58.8% and AA-SciCode 48.6% show the harness-level ceiling is solid mid-tier, not frontier.
- **Cost efficiency: 88/100.** ~$0.14/$0.58 per 1M with MTP-accelerated decoding, Apache-2.0 weights, quantized single-GPU builds, and ~47% fewer tokens than GLM-5.2 on real tasks — outstanding value.
- **Overall Score: 68/100.** Mean of the five quality dims (72+70+74+50+74)/5 = 68 (lowered from 70 on 2026-10-08, see Re-verification). A cheap, reliable, open 256K agentic workhorse with near-frontier coding for 21B active parameters; multimodal absence and harness-verified mid-tier agentic/reasoning keep it at "very good".

---

## Re-verification — 2026-10-08 (18 days after original)

Re-run adds independent verification and clears two "no verified score found" gaps (BenchLM profile, updated 2026-10-07, 14/623 covered; AA; HF card).

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 76 | 72 | −4 |
| Reasoning | 72 | 70 | −2 |
| Context window | 72 | 74 | +2 |
| Multimodal | 50 | 50 | — |
| Coding | 78 | 74 | −4 |
| Cost efficiency | 88 | 88 | — |
| **Overall** | **70** | **68** | **−2** |

New and corrected data:

- **Knowledge gaps filled:** AA-GPQA Diamond **89.7%**, AA-HLE **33.5%**, AA-LCR **79.0%**, CritPt 4.9%, AA-Omniscience Index −18.5 (accuracy 32.0, hallucination 74.1), AA Coding Index 58.8%, AA-SciCode 48.6%, AA Agentic Index 25.6%, GDPval-AA 1,136 (28.3%).
- **AA Intelligence Index ambiguity (worth flagging):** the current AA row for `hy3` reads **25.3**; an earlier AA snapshot of the same row reads **41.2** (which is what BenchLM attaches to Hy3 Preview, and whence the original report's "41" came). The 25.3 is the newer full-release (likely no-thinking default) figure. Reasoning is scored on the evidence mix, not either number alone.
- **Vendor coding rows stay as the high-water mark:** SWE-bench Verified 78 and Terminal-Bench 2.1 90.4 (HF card) — against harness-level AA Coding 58.8/48.6, the vendor-vs-AA gap is deliberately preserved.
- **Positioning:** BenchLM **52.76, #82/887** (14/623); Hy3 Preview 51.11; **Hy4 Preview now exists at 60.79** — the family line has moved one generation past this model. Pricing unchanged (~$0.14/$0.58 DeepInfra/$0.035 cached; ¥1/4 official).
- BrowseComp/WideSearch search-agent claims remain vendor-stated (no independent row surfaced).

Gaps still open after re-run: FRONTIER Math row, official MRCR 1M-style retrieval number, independent BrowseComp/WideSearch scores, SWE-bench Verified on Vals' harness (76-model leaderboard has no Hy3 row yet), τ²-bench/UBP agentic rows beyond AA Agentic Index.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (hy.tencent.com, Hugging Face card, tencentcloud.com, GitHub, OpenRouter, llm-stats.com, kie.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.