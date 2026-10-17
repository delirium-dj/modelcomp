# Qwen 3.8 Flash — findings by MiniMax M3

- Source: Alibaba Qwen Team (`opencode/qwen-3.8-flash` / hosted `qwen3.8-flash` / open-weights `Qwen3.8-Flash-Next`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's production multimodal sparse-MoE (Aug 26, 2026) — 125B main + 51B N-gram embeddings / **6B active per token**, hybrid Gated DeltaNet + Qwen Sparse Attention + Gated Residual, **LiveCodeBench v6 91.9%** and **GPQA Diamond 91.7%** at **$0.15 / $0.47 per 1M**. The fastest Flash in its tier at ~50 c/s prose vs GLM-5.3 Flash ~25 c/s. Open-weight preview `Qwen3.8-Flash-Next` is shipped separately for self-host.

- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.8-flash`, OpenAI- and Anthropic-compatible APIs), gmi_cloud, OpenCode Go, OpenRouter / Novita via LLM Gateway. Open weights for `Qwen3.8-Flash-Next` on Hugging Face (Qwen Community 1.0 license). Repo Zen ID: `opencode/qwen-3.8-flash`.
- **Release / knowledge:** API GA **2026-08-26**; open-weight preview weights **2026-08-27**. Knowledge cutoff not explicitly disclosed (Qwen3.8 family vintage; presumed late-2025/early-2026).
- **IDs:** `qwen3.8-flash` (hosted), `Qwen3.8-Flash-Next` (open-weight preview), `opencode/qwen-3.8-flash` (Zen mirror). They share the architecture **but** reported benchmark scores are on the preview; production API may score slightly differently per [kie.ai analysis](https://kie.ai/blog/what-is-qwen3-8-flash).
- **Context window:** **1M tokens (production API, 991K max input / 131K max output)**. Native preview window **262,144**, **YaRN-extensible to 1M** in the open-weights preview. ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash), [marktechpost](https://www.marktechpost.com/2026/08/26/alibabas-qwen-team-releases-qwen3-8-flash-next-a-125b-multimodal-moe-with-6b-active-parameters-previewing-the-qwen4-architecture/))
- **Modalities:** **Text, image and video input → text output**. Function calling, structured output, partial mode, context caching supported.
- **Pricing (as of 2026-10-16):** **$0.15 input / $0.47 output / $0.016 cached per 1M**; ¥0.8 in / ¥2.7 out; intl alt pricing $0.113/$0.382 (varies by reseller); **open weights free to self-host** (with 75GB–355GB RAM depending on quantization). ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash), [QwenCloud](https://qwen.ai))
- **Architecture:** **Sparse MoE** — 125B main model + **51B N-gram Embedding lookup** (20M entries; 2-/3-token pattern table) + **6B active per token**. **Hybrid attention**: Gated DeltaNet (3 of every 4 layers, linear-recurrent) + Qwen Sparse Attention (QSA, 1 of 4 layers, **micro-block sparse**). **Gated Residual** widens the residual stream into 4 gated branches. **Muon optimizer**; one-ninth Qwen3.7-Plus training cost (vendor claim). NVIDIA reports up to **7.6× prefill / 4.9× decode speedup vs full attention** at 1M, and **8.6× prefill** under a 90% prefix-cache hit scenario. ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash), [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next))

### Raw benchmarks found

Triangulated across **six** independent surfaces: Alibaba official launch post (vendor-claimed), kie.ai architecture analysis, llm-stats HLE leaderboard (independent), Vals AI public aggregates (independent), Artificial Analysis independent reasoning suite, a2aprotocol / DataCamp / local-ai-zone third-party writeups. Some vendor-attributed scores (SWE-bench Pro, GPQA Diamond) have **no independent third-party reruns** under the exact production ID yet — flagged inline.

Agent / tool use:

- **Alibaba vendor table**: SWE-bench Pro **62.5** (vs Claude Opus 4.6 Max 53.4), SWE-bench Multilingual **81.0** (vs 77.5), Toolathlon Verified **73.5** (vs DeepSeek-V4-Flash-0731 70.3), CoWorkBench **73.9** (vs Claude Opus 4.6 Max 68.2), AndroidWorld **84.5**, Code Mile Score **84.7**.
- **llm-stats agents index** (independent): **34.7** points; overall llm-stats Score **49.2 (#19)**, beating GPT-5.4 on DeepSWE 1.1, SWE-bench Pro and Toolathlon (head-to-head context).
- **OSWorld / Terminal-Bench 2.1 / Tau2-Bench / Claw-ProBench**: **no verified public score found** for Qwen 3.8 Flash production ID in surveyed sources.
- **GDPval-AA**: **1628** (per AA leaderboard rank snapshot, Aug 2026).

Reasoning / knowledge:

- **GPQA Diamond**: **91.7** (Alibaba vendor table; matches `meta.json` reference). **AA-GPQA Diamond** (independent rerun, value to extract): **no verified rerun found** beyond vendor.
- **Humanity's Last Exam (HLE)**: **35.9** (per [llm-stats HLE leaderboard](https://llm-stats.com/benchmarks/humanity%27s-last-exam)) — ranks at 46/leaderboard, mid-pack tier; well under Claude Opus 4.6 Max 40.0.
- **Artificial Analysis Intelligence Index (independent)**: **40** (AA page snapshot, Qwen3.8-Flash-Next preview); a separate Reddit citation of AA notes **Qwen3.8-Flash 56** on the same index, suggesting either the production API scores higher than the preview weights, or different versions — record the band.
- **No verified CritPt / AA-LCR / Omniscience score** for the Qwen3.8 Flash exact production ID.

Coding:

- **SWE-bench Pro (vendor, Scale standardized)**: **62.5** ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash), [a2aprotocol](https://a2aprotocol.ai/insights/qwen-3-8-flash-next)) — above Claude Opus 4.6 Max 53.4 in the same table.
- **SWE-bench Multilingual**: **81.0** vendor.
- **DeepSWE 1.1**: **58.7** (vendor-aligned a2aprotocol citation).
- **LiveCodeBench v6**: **91.9** ([a2aprotocol](https://a2aprotocol.ai/insights/qwen-3-8-flash-next)) — matches the meta.json headline.
- **Code Mile Score**: **84.7** vendor.
- **SWE-bench Verified**: **no verified score found** for the production ID; same-harness rerun from Vals or Scale not yet published.

Long context / multimodal:

- **Production API: 1M tokens (verified)**. Native preview window 262K with YaRN extension. ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash))
- **MRCR / RULER / GraphWalks at ≥512K**: **no verified public score found**; the architectural claims (3× / 4.4× long-context compute / KV reduction, IndexPool-style pooling) are architecturally attested, not benchmark-replicated.
- **Image / video input**: provider docs confirm; the Flash-Next preview checkpoints support native visual; no MMMU-Pro / CharXiv / Chartography **for this exact ID** found in surveyed sources — the equivalent family rows (Qwen 3.7 Plus) are stronger in the multimodal dimension.

Operational / performance:

- **Output speed (community early test, prose workload)**: **~50 c/s** vs **GLM-5.3 Flash ~25 c/s** (2× faster on prose). Pure coding speeds much closer between the two. ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash))
- **Two-DGX-Spark NVFP4 setup**: ~64 c/s single stream / ~117 c/s two concurrent. ([@ivanfioravanti](https://github.com/ivanfioravanti))
- **Local memory floor (1-bit quant, Unsloth)**: **~75 GB**; 2-bit ~79 GB; 3-bit ~90 GB; 4-bit ~112 GB; BF16 ~355 GB. ([kie.ai](https://kie.ai/blog/what-is-qwen3-8-flash))
- **Rate limits (QwenCloud)**: 2M tokens/min, 15K requests/min (account-dependent).

Pricing compared to peers (current as of 2026-10-16):

- **vs DeepSeek V4.1 Flash (max)**: similar input tier ($0.30 vs $0.15), Qwen cheaper on output ($0.47 vs $1.20).
- **vs GLM-5.3 Flash**: ~2× input ($0.15 vs $0.075), comparable output ($0.47 vs $0.25) — slower compute profile per dollar but stronger code/agent scores.
- **vs Claude Opus 4.6 Max**: ~100× cheaper at list; SWE-Pro 62.5% beats Opus 4.6 Max 53.4% — best $/agent-coding-pt ratio on the field.
- **vs GPT-5.4 ($5/$25)**: Qwen 3.8 Flash is **~33× input / ~53× output cheaper**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Toolathlon 73.5, AndroidWorld 84.5, CoWorkBench 73.9 (above Claude Opus 4.6 Max on all three in same vendor table); llm-stats agents index 34.7 is mid-tier; absent verified OSWorld / TB2.1 / Tau2 / GDPval-AA 1628 reinforces mid-frontier claim.
- **Reasoning: 84/100.** GPQA Diamond 91.7 (near-top) plus AA Intelligence Index 40-56 (preview-vs-production band); HLE 35.9 (#46 on llm-stats) is mid-pack. Verified AA scores cap the ceiling under 90 unless production index lands at 56.
- **Context window: 88/100.** 1M production API window is top-band, backed by 7.6× prefill / 4.9× decode speedups and YaRN at the preview layer; capped below 90 by absence of a 512K+ MRCR/RULER published score.
- **Multimodal: 82/100.** Native image + video input + Qwen Sparse Attention multimodality; no Qwen-3.8-Flash-exact MMMU-Pro / CharXiv cap it below the 90+ gate; family rows (Qwen 3.7 Plus, Qwen 3.8 Max) reach 88+ with same architecture.
- **Coding: 84/100.** **LiveCodeBench v6 91.9** + SWE-bench Pro 62.5 (above Opus 4.6 Max 53.4) + SWE-Multilingual 81.0 + DeepSWE 58.7 — a top-tier coding value at 6B-active parameters; missing SWE-bench Verified same-harness rerun keeps it below 90.
- **Cost efficiency: 96/100.** $0.15/$0.47 hosted + $0.016 cached + open weights make this the **deepest cost-efficiency MoE in the Flash tier** at frontier-coding parity; near-floor cost across the surveyed model set.
- **Overall Score: 84/100** Half-up mean of the five non-cost dims: (82 + 84 + 88 + 82 + 84) / 5 = 84.0 → **84**. Best fit: high-volume multimodal agentic coding where cost-per-token dominates, with the open-weight preview adding a self-host path for $0 marginal cost on Flash-Next quantizations ≥75 GB RAM.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (Alibaba official, kie.ai architecture analysis, llm-stats HLE leaderboard, Vals AI public aggregates, Artificial Analysis Intelligence Index, a2aprotocol/DataCamp/third-party writeups). Conflicting AA Index values (40 vs 56) recorded as a preview-vs-production band — the production ID has limited verified independent reruns. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

