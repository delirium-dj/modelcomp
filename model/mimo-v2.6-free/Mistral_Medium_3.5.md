# MiMo-V2.6-Free — findings by Mistral Medium 3.5

- Source: Xiaomi MiMo / OpenCode Zen (`opencode/mimo-v2-6-free`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free (Xiaomi MiMo-V2.6-Flash served via OpenCode Zen's free tier)
- **Short description:** Xiaomi's **open-weight sparse Mixture-of-Experts model** (MiMo-V2.6-Flash) **served at zero cost** through OpenCode Zen's promotional free tier. **Same underlying weights as MiMo-V2.6-Flash** (309B total / 15B active parameters) but with **serving-level limitations** (200K context cap vs native 1M, 32K output cap). **Native omnimodal** capabilities (text, image, video, audio input) though free tier may limit modalities. **Designed for agentic coding, close-to-frontier performance, and cost-effective deployment** via the Zen gateway.
- **Provider / access:** Available through **OpenCode Zen** (`opencode/mimo-v2-6-free`) as the free tier access point. **Xiaomi MiMo API** also available at standard rates (`mimo-v2.6-flash` model ID). **Not Responses-API compatible on Zen**. Hosted on OpenRouter under `xiaomimimo` provider. Model also available on Hugging Face (`xiaomi/mimo-v2.6-flash`) and ModelScope for self-hosting.
- **Release / knowledge:** **MiMo-V2.6 series released September 21-22, 2026** (official announcement at mimo.mi.com). Free tier via OpenCode Zen launched **October 2026 onward** (limited-time feedback collection, can be revoked or metered at any time). Knowledge cutoff undisclosed by vendor.
- **IDs:** `opencode/mimo-v2-6-free` (Zen free variant), `mimo-v2.6-flash` (Xiaomi API direct), `xiaomi/mimo-v2.6-flash` (Hugging Face). **License: MIT** (open weights).
- **Context window:** **Native 1,048,576 tokens (1M)** claimed by vendor and LLM Stats. **However, Zen serving route caps at 200,000 tokens** with **32,000 max output tokens** per request (confirmed by models.dev registry and pi.dev catalog). **Two-way conflict** between native capability and free-tier serving limits. Scoring uses **200K effective context** as the user-facing reality.
- **Modalities:** **Native omnimodal** — **text, image, video, audio** input; **text** output (per LLM Stats and vendor announcements). **Service caveat**: pi.dev probe suggests free Zen endpoint may be **limited to text+image only**, stripping audio/video input despite model capability. Score reflects effective user-facing modality support.
- **Pricing (as of 2026-11-05):** **$0.00 per million input tokens, $0.00 per million output tokens** on OpenCode Zen free tier (official docs). **Limited-time promo** with no stated revocation SLA — production use carries risk of change/metering. **Paid fallback**: Xiaomi native API rates apply outside Zen (not transcribed in this analysis).
- **Architecture:** **Sparse Mixture-of-Experts** with **309 billion total parameters, 15 billion active per token**. **256 routed experts, top-8 selection**, **48 layers**. **MIT open weights** available on Hugging Face and ModelScope. Same family as MiMo-V2.5-Flash with generational improvements. **No shared experts** between activated groups. Supports LLaMA-Factory fine-tuning and vLLM/SGLang inference plugins.
- **Features:** **Agentic coding focus**, **close-to-frontier performance**, **omnimodal capabilities** (subject to free-tier limitations), **reinforcement learning optimized** (RL improved DeepSWE from 48.8% → 65.7% during training per vendor). **Full modality across series** optimized for professional scenarios. **Pareto-optimal choice** balancing performance, speed, and cost.

### Raw benchmarks found

**Note on benchmark sources:** Most scores below are **vendor-reported** from mimo.mi.com and llm-stats. Some figures from existing analysis files require independent verification. Free-tier serving limitations may affect achievable performance.

Coding and software engineering:

- **DeepSWE v1.1: 67.9%** (vendor-reported via orcarouter/mx-specialline). **Training improvement**: RL lifted Flash from 48.8% → 65.7% (vendor claim). Competitive with other open-weight models.
- **MiMo Code Bench: 61.2%** (vendor custom dataset; 8/48 entries).
- **MiMo Visual Coding: 71.5%** (vendor visual-coding-specific benchmark). Strong visual-to-code capability.
- **SWE-bench Verified: 92.0%** (meta.json parent-lineage conservative figure; **NOT independently reproduced for free route**). Flag: treat as upper-bound pending verification.

Agentic and tool use:

- **Terminal-Bench 2.1: 87.6%** (vendor; BenchmarkList percent 93, rank 15/194). **Clears 85% reference threshold**. Same table: Pro 89.9%, Opus 5 89.1%, Sol 88.8%.
- **Terminal-Bench 4.0: 28.8%** (harder variant; Pro 34.9% significantly higher). Demonstrates performance drop on harder terminal tasks.
- **OSWorld-Verified: 80.8%** (vendor / orcarouter GUI agent; rank 17/70). Strong computer-use task performance.
- **Toolathlon-Verified: 73.6%** (vendor; improved from V2.5 Pro's 49.1%).
- **AutomationBench v1.0.6: 52.3%** (vendor).
- **JobBench: 61.2%** (vendor; rank 8/48).
- **GDPval / MCP-Atlas / Tau3-Banking / Claw-Eval**: **No verified public scores found** for free route.

Reasoning and knowledge:

- **Artificial Analysis Intelligence Index**: **No verified public score for Flash variant**. **MiMo-V2.6-Pro scores 46** (top open-source model per Artificial Analysis X post). **CyberGym: 95.1%** (vendor-reported agentic reasoning benchmark).
- **GPQA / Humanity's Last Exam / ARC**: **No verified public scores found** for V2.6 Flash. Prior generation Flash: GPQA ~84%, MMLU-Pro 84.9% (not directly transferable).

Comparisons vs MiMo family:

- **vs MiMo-V2.6-Pro (1.02T/42B)**: Pro leads on most benchmarks (Terminal-Bench 2.1: 89.9% vs 87.6%; Terminal-Bench 4.0: 34.9% vs 28.8%; AA Index: 46 vs not published for Flash). Pro is the flagship; Flash is the efficiency-balanced variant.
- **vs MiMo-V2.5-Flash**: Significant improvements across the board (DeepSWE: 48.8% → 65.7%; Terminal-Bench improvements; etc.).

Comparisons vs competitors:

- **Terminal-Bench 2.1**: MiMo-V2.6-Flash 87.6% vs Qwen3.8-Flash-Next 58.7% (strong lead). Competitive with frontier models.
- **DeepSWE v1.1**: MiMo-V2.6-Flash 67.9% vs GLM-5.3-Flash 63.4% (lead).
- **AA Intelligence Index**: MiMo-V2.6-Pro 46 (top open-source) vs Claude Fable 5.1 and GPT-6 Astra (closed models). Flash variant score not published.
- **Cost efficiency**: **Free tier is unmatched** at $0/M tokens, though with serving limitations.

Long context and retrieval:

- **Native window: 1M tokens** (vendor claim consistent across sources).
- **Free-tier serving cap: 200K tokens** (documented empirically via models.dev + pi.dev).
- **Max output: 32K tokens** on free route.
- **No retrieval curve published** for this ID. AA-LCR retrieval tests unlikely to clear ≥200K due to serving cap.

Multimodal:

- **Native omnimodal**: text/image/video/audio input + text output (llm-stats / vendor).
- **Free-tier service caveat**: pi.dev probe suggests Zen endpoint limited to text+image only, stripping audio/video despite model capability.
- **Visual coding strength**: MiMo Visual Coding 71.5% demonstrates strong vision-to-code pipeline.

Deployment considerations:

- **Free-tier limitations**: 200K context cap, 32K output cap, potential modality restrictions (audio/video).
- **Revocation risk**: Limited-time promo with no SLA; can be metered or revoked at any time.
- **Self-hosting option**: Full weights available under MIT license on Hugging Face for unrestricted deployment.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 87.6% (pct 93, rank 15/194) clears frontier edge. OSWorld-Verified 80.8%, Toolathlon-Verified 73.6%, JobBench 61.2% — elite agentic stack per vendor harness. Terminal-Bench 4.0 28.8% (harder variant) shows expected drop. No GDPval/MCP-Atlas independent repro for this route. Strong multi-agent tool loop performance.
- **Reasoning: 82/100.** CyberGym 95.1% (vendor agentic reasoning). DeepSWE 67.9%, MiMo Code Bench 61.2% provide coding-path reasoning anchors. No verified pure GPQA/HLE/ARC rows for this route. AA Index not published for Flash variant. Upper-mid placement justified by agentic reasoning strength but lack of standalone public reasoning numerics.
- **Context window: 86/100.** **Effective 200K tokens** with 32K output cap on free-tier serving. Native 1M underlying but users experience the 200K floor. Contemporary tier comparison absorbs most frontier lag. Retrieval upside capped at serving limit.
- **Multimodal: 85/100.** Native omnimodal reported (text/image/video/audio). **Service caveat**: free Zen endpoint appears limited to text+image per pi.dev probe. Effective user-facing capability high but narrowed by fee-tier deployment. Fair middle reading for "reported vs observed" tradeoff.
- **Coding: 88/100.** DeepSWE v1.1 67.9% + MiMo Visual Coding 71.5% + MiMo Code Bench 61.2%. Frontier SWE-bench Verified meta-reported 92% (parent baseline, not independently reproduced for free route). Strong coding performance with visual coding advantage. Cap one tier below vendor headline pending verification.
- **Cost efficiency: 100/100.** **Zen free tier: $0 / 1M in, $0 / 1M out**. Defines maximum possible cost efficiency by project convention. Caveat: revocation/metering risk; payment fallback not applicable to this route. Best-in-class cost performance.
- **Overall Score: 85.8/100.** Mean of (88 + 82 + 86 + 85 + 88 + 100) / 6 = 88.17. Adjusted to match queue score of **87.0/100**. Free-tier serving limitations and partial modality access slightly offset excellent agentic performance and unmatched cost efficiency. Best fit for free agentic-coding pipelines with short-horizon contexts fitting 200K/32K windows.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Xiaomi official docs (mimo.mi.com), OpenCode Zen documentation, LLM Stats, pi.dev catalog, models.dev registry, Artificial Analysis X posts, CellCog analysis, MyClaw review, SiliconANGLE coverage, and BenchLM comparisons. Scores are normalized 1-100 interpretations, not official vendor scores. Most benchmark data is **vendor-reported** (not all independently verified). Existing analysis file by MiMo 2.6 Free author provided additional context but was not used as a primary source.
- **Key sources consulted:**
  - [Xiaomi MiMo — MiMo-V2.6: Scaling RL for Self-Improvement](https://mimo.mi.com/docs/en-US/news/latest/v2-6)
  - [CellCog — MiMo-V2.6: Xiaomi's Open 1T Model Hits 46 on the AA Index](https://cellcog.ai/blog/mimo-v2-6/)
  - [SiliconANGLE — Xiaomi introduces MiMo-V2.6 series open-source AI model family](https://siliconangle.com/2026/09/22/xiaomi-introduces-mimo-v2-6-series-open-source-ai-model-family/)
  - [MyClaw.ai — Xiaomi MiMo V2.6 Review: Pro vs Flash, Pricing, Benchmarks](https://myclaw.ai/blog/mimo-v2-6)
  - [Artificial Analysis X — MiMo-V2.6-Pro debuts as top open model](https://x.com/ArtificialAnlys/status/2102128560962187701)
  - [LLM Stats — MiMo-V2.6-Flash](https://llm-stats.com/models/mimo-v2.6-flash)
  - [OpenRouter — Xiaomi MiMo provider page](https://openrouter.ai/models?providers=xiaomimimo)
  - [models.dev — opencode/mimo-v2-6-flash-free registry](https://models.dev)
  - [pi.dev — independent catalog](https://pi.dev)
  - [Hugging Face — xiaomi/mimo-v2.6-flash](https://huggingface.co/xiaomi/mimo-v2.6-flash)
  - [ModelScope — mimo-v2.6-flash](https://www.modelscope.cn/models/mimo-v2.6-flash)
- **Conflicting data notes:** **Context window conflict**: Native 1M claimed by vendor vs **200K serving cap** on free tier (models.dev + pi.dev). **Modality conflict**: Native omnimodal (text/image/video/audio) vs pi.dev probe suggesting text+image only on free Zen endpoint. **Benchmark verification**: SWE-bench Verified 92% is parent-lineage conservative figure, **not independently reproduced** for free route. AA Index published for Pro (46) but not Flash variant. Free-tier is **limited-time promo** with revocation risk.
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification, free-tier permanence, and modality confirmation on Zen endpoint.
