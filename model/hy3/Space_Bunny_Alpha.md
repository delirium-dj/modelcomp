# Hy3 — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`tencent/Hy3`; open-weight MoE)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight Hunyuan Mixture-of-Experts model for agentic coding, office/productivity work, and general reasoning, with configurable `reasoning_effort` and a 256K context.
- **Provider / access:** Hugging Face `tencent/Hy3` (Apache-2.0); `tencent/Hy3-FP8` quantized variant; Tencent TokenHub; DeepInfra and other inference providers; OpenCode Go route on TokenDyno. The official model card documents vLLM and SGLang deployment with MTP speculative decoding.
- **Release / knowledge:** BenchLM lists July 6, 2026; the official card describes Hy3 as following the late-April Hy3 Preview. These dates are retained as source-specific. No reliable knowledge cutoff was shown.
- **IDs:** `tencent/Hy3`; `hy3` (served model name); catalog display name `Hy3`.
- **Context window:** **256K** context length (official model card property table and curated model metadata); repository metadata additionally records 32,000 max output tokens. The card reports clear MRCR long-dialogue improvement but publishes no retrieval-at-length number.
- **Modalities:** **Text generation** (the Hugging Face pipeline tag is `text-generation` and the safetensors listing is a causal LM with no vision tower). Earlier curated metadata claiming text/image input is **not** supported by the official card and is corrected here. Hybrid fast-and-slow reasoning is controlled by `reasoning_effort` = `no_think` (default), `low`, `high`.
- **Pricing (as of 2026-09-29):** Tencent TokenHub official price is **$0.132 input / $0.528 output per 1M tokens**, with **$0.033** per 1M cache-hit tokens (Tencent Cloud TokenHub pricing page and Model Pricing documentation, both accessed 2026-09-29). For comparison on the same page, GLM-5.3 is $1.40/$4.40 and DeepSeek-V4-Flash is $0.14/$0.28. Open weights are Apache 2.0, so self-hosting is available.
- **Architecture:** Open-weight MoE, **295B total / 21B activated** parameters plus a **3.8B MTP layer**; 80 layers (excluding MTP), 64 attention heads (GQA, 8 KV heads, head dim 128), hidden size 4096, intermediate size 13312, **192 experts with top-8 activated**, vocabulary 120,832, BF16. Apache-2.0 license. The card recommends H20-3e or similar large-memory GPUs to serve on 8 GPUs.

### Raw benchmarks found

> The official Hy3 model card previously showed an empty Benchmark Appendix. The benchmark table has since been published, and the values below are vendor-reported exact-model results. BenchLM still reports 0 sourced benchmark rows for this profile, so these remain single-sourced.

Agent / tool use:

- **Terminal-Bench 2.1: 71.7%** (official Hy3 model card / Harbor leaderboard row)
- **Terminal-Bench (long-horizon subset): 28.8%** (official Hy3 model card) — a materially weaker long-horizon number than the headline Terminal-Bench 2.1 result, and the two are kept separate.
- SWE-bench Verified accuracy variance across CodeBuddy, Cline, and KiloCode scaffoldings: **within 4%** (official card; a stability claim, not an absolute score)
- WildClawBench overall: **53.6%** (official model card / InternLM leaderboard row)
- Apex Agents: **25.6** (official model card / Mercor leaderboard row)
- Tool-call stability and output-format reliability were fixed to production grade post-training; internal hallucination rate improved from 12.5% to **5.4%** and commonsense error rate from 25.4% to **12.7%** (official card, internal evaluation, not a public benchmark)
- Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 90.4%** (official Hy3 model card / Idavidrein leaderboard row)
- **HLE: 53.2%** (official Hy3 model card)
- Blind 270-expert evaluation on real Tencent product tasks: **2.67/4** versus GLM-5.1 at 2.51/4 (official card; internal blind study, not a public benchmark)
- LCR/MLCR, CritPt, hallucination metrics, and Artificial Analysis Intelligence Index: **no verified public score found**
- TokenDyno shows a **25.3** Artificial Analysis Intelligence Index figure on the OpenCode Go route for Hy3; that is a leaderboard mirror of the AA index, not a Hy3-authored score.

Coding:

- **SWE-bench Verified: 78.0%** (official Hy3 model card / SWE-bench leaderboard row)
- **SWE-bench Pro: 57.9%** (official Hy3 model card / Scale AI leaderboard row)
- **SWE-bench Multilingual: 75.8%** (official Hy3 model card / SWE-bench Multilingual leaderboard row)
- DeepSWE: **28%** (official Hy3 model card / DataCurve leaderboard row) — notably weaker than the SWE-bench family results, and kept separate.
- LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public score found**

Long context:

- Native context capacity: **256K** (official model card property table; curated model metadata confirms).
- The card reports marked improvement on long-dialogue evaluations such as **MRCR** and an internal multi-turn issue-rate drop from 17.4% to **7.9%**, but publishes **no absolute MRCR or RULER number**. No retrieval-at-length score was found.

Sources consulted: [Tencent Hy3 Hugging Face model card](https://huggingface.co/tencent/Hy3), [Tencent Cloud TokenHub model pricing](https://www.tencentcloud.com/act/pro/tokenhub), [Tencent Cloud Model Pricing documentation](https://proxy-hk.tencentcloud.com/document/product/1300/78937), [BenchLM Hy3 profile](https://benchlm.ai/models/hy3), and [TokenDyno](https://tokendyno.com/), accessed 2026-09-29. Vendor-reported rows are labeled as such; the internal blind evaluation and hallucination figures are explicitly marked as internal and are not treated as public benchmark scores.

### Normalized scores (1–100)

- **Tool use: 86/100.** SWE-bench Pro 57.9%, WildClawBench 53.6%, Terminal-Bench 2.1 71.7%, and Apex Agents 25.6 show genuine agentic ability, reinforced by the card's production-grade tool-call stability work. The **Terminal-Bench long-horizon subset at 28.8%** and the absence of Tau3-Banking, GDPval-AA, Toolathlon, and MCP-Atlas rows keep this out of the top band.
- **Reasoning: 92/100.** GPQA Diamond at **90.4%** and HLE at **53.2%** are both strong in absolute terms, and the internal hallucination rate drop to 5.4% is a corroborating quality signal. No public LCR, CritPt, or Artificial Analysis Intelligence Index row was found, so the score rests on a narrow single-source evidence base.
- **Context window: 85/100.** A **256K** context length is explicitly listed in the official model-card property table with 32K max output, and the card reports MRCR and multi-turn improvement. The score is held below the 1M tier because no absolute retrieval-at-length number was published.
- **Multimodal: 15/100.** The official model card describes a text-generation causal LM with no vision encoder, and no image or video input is documented. Per the methodology a text-only model scores 15; the earlier text/image claim came from stale curated metadata and is withdrawn.
- **Coding: 93/100.** SWE-bench Verified **78.0%**, SWE-bench Multilingual **75.8%**, and SWE-bench Pro **57.9%** are strong results across multiple harnesses and providers, with scaffold-variance within 4% indicating stability. The deduction is **DeepSWE at 28%**, which shows clear weakness on long-horizon autonomous software engineering, plus the absence of LiveCodeBench or SciCode values to corroborate algorithmic coding.
- **Cost efficiency: 92/100.** The verified $0.132/$0.528 per 1M with $0.033 cache reads is very cheap for the measured quality, and Apache-2.0 weights allow self-hosting; the only deductions are hardware cost for a 295B MoE and the lack of an independent third-party price verification.
- **Overall Score: 74.2/100.** (86 + 92 + 85 + 15 + 93) / 5 = 371 / 5 = 74.2. Cost efficiency is excluded from this mean. Best fit: cost-sensitive open-weight coding and agentic workloads on text tasks; not suitable for multimodal pipelines, and validate long-horizon agent behavior before production use given the 28.8% Terminal-Bench long-horizon result.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the official Tencent Hy3 Hugging Face model card and its benchmark appendix, Tencent Cloud TokenHub pricing documentation, BenchLM, and TokenDyno; scores are normalized 1–100 interpretations, not official vendor scores. Internal vendor studies are labeled and excluded from public-benchmark claims. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Hy3_Eval.md`, using the same headings.
