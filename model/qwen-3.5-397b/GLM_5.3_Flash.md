# Qwen 3.5 397b — findings by GLM 5.3 Flash

- Source: Alibaba / Qwen (`qwen-3.5-397b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b (Qwen3.5-397B-A17B)
- **Short description:** Alibaba Cloud's largest and most capable Qwen 3.5 multimodal foundation model (released February 2026): 397B total parameters with 17B active via sparse MoE (512 experts) plus a hybrid linear-attention mechanism, native vision-language, and open weights under Apache 2.0. BenchLM ranks it #60 of 889 (55.53; a Reasoning sibling is tracked separately).
- **Provider / access:** OpenRouter `qwen/qwen3.5-397b-a17b` (OpenAI-compatible); NovitaAI, SiliconFlow CN, Run BiOS serverless `qwen3.5-397b-a17b`; OpenCode Zen `opencode/qwen-3.5-397b` (standard pricing). Function calling, per-request thinking toggle, vision input, prompt caching.
- **Release / knowledge:** Released 2026-02-24 (apxml model card; OpenRouter lists 2026-02-16 for series availability); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-397b` (Zen); `qwen/qwen3.5-397b-a17b` (OpenRouter).
- **Context window:** 262,144 tokens native (262K), max output 65,536 tokens (OpenRouter/llm-stats) — **BenchLM's 2026-10-10 page lists 128K, an unresolved conflict**; the verified 262K native window stays primary. Extended context up to 1M tokens claimed by Alibaba (unverified — scored on the native window).
- **Modalities:** Text/image in (native vision-language) → text out; reasoning yes (hybrid, thinking mode toggleable per request; BenchLM classifies the base variant as non-reasoning); tool calls yes (function calling, BFCL-v4 listed); JSON mode yes.
- **Pricing (as of 2026-10-11):** varies by provider — $0.39/$2.34 per 1M in/out (OpenRouter), $0.45 in / $0.22 cached / $3.00 out (llm-stats), $0.60/$3.60 (apxml/Novita), $0.29/$1.74 (SiliconFlow CN). Paid only; no Free ID confirmed on Zen.
- **Architecture:** Open weights, Apache 2.0; sparse MoE — 397B total, 17B active (11 of 512 experts), 450M auxiliary parameters; hybrid attention: linear attention (75% ratio) + grouped-query attention (32Q/2KV, head dim 256); 60 layers; 248,320 vocab; multi-token prediction head.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **83.9%** (AA, independent); τ³-bench: **68.4%** (Qwen3.6-Plus comparison table — fills the Tau3 gap)
- MCP-Tasks: **74.2%**; WideResearch: **74.0%**; BrowseComp: **69%** (model card); Claw-Eval: **56.8%**; OSWorld-Verified: **62.2%**; QwenClawBench: **51.8%**; VITA-Bench: **43.7%**; DeepPlanning: **37.6%** (Qwen tables — fill gaps)
- MCP Atlas: **46.1%**; Toolathlon: **36.3%** (Qwen tables — weak); Gert Labs: **46.76%**; ResearchClawBench: **14.2%**
- Terminal-Bench 2.0: **52.5%** (Qwen table; the apxml read of 54.0% is consistent)
- AA Agentic Index: **8** (prior pass, rank #103 — weak); GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (Qwen3.6-Plus table — corroborates the apxml read); AA independent: **86.1%**
- HLE: **28.7%** (Qwen3.6-Plus table — fills the gap); AA-HLE: **19.8%** (AA)
- Artificial Analysis Intelligence Index: **21.4** (AA — corroborates the 18–21 zone)
- AA-LCR v1.1: **64.3%** (AA — fills the long-context gap, mid); LongBench v2: **63.2%**; AI-Needle: **68.7%** (Qwen tables); CritPt: **0.9%** (AA — near-zero)
- AIME26: **93.3%**; HMMT Feb 2025: **94.8%** / Nov 2025: **92.7%** / Feb 2026: **87.9%** (Qwen tables — strong math)
- MMLU-Pro: **87.8%** (corroborated); MMLU-Redux: **94.9%**; C-Eval: **93%**; SuperGPQA: **70.4%**
- AA-Omniscience: **24.5% accuracy / 82.7% non-hallucination row / −37.9 index** (AA — worst index measured in this repo)

Coding:

- SWE-bench Verified: **76.2%** (Qwen3.6-Plus table) — **conflicts with the apxml model-card read of 80.0%** the prior pass cited; both listed
- LiveCodeBench v6: **83.6%** (Qwen3.6-Plus table — fills the unconfirmed gap)
- SWE-bench Pro: **50.9%** (Qwen table — fills the gap; weak); SWE Multilingual: **69.3%**; NL2Repo: **32.2%**
- Stack Unseen: **76.3%** (apxml, prior pass); WebDev Arena: **1399** Elo (apxml, prior pass); AA Coding Index: **48** (prior pass)

Long context:

- AA-LCR 64.3%, LongBench v2 63.2%, AI-Needle 68.7% — first measured long-context evidence (mid); 262K native verified, 1M claim still unmeasured

Multimodal (richly measured; note the AA-vs-vendor MMMU-Pro conflict):

- MMMU: **85.0%**; MMMU-Pro: **79.0%** (Qwen tables) — **AA-MMMU-Pro reads 52.7%**, a major vendor-vs-independent conflict on the same benchmark
- Video-MME: **87.5%** with subs / **83.7%** without; VideoMMMU: **84.7%**; MLVU: **86.7%** — video understanding measured
- OmniDocBench 1.5: **90.8%**; CharXiv: **80.8%**; MathVision: **88.6%**; We-Math: **87.9%**; DynaMath: **86.3%**; AI2D: **93.9%**; CountBench: **97.2%**; RefCOCO: **92.3%**; V*: **95.8%**; ScreenSpot-Pro: **65.6%**; CC-OCR: **82.0%**; RealWorldQA: **83.9%**

### Normalized scores (1–100)

- **Tool use: 62/100.** (Was 58 on the prior pass.) τ²-bench 83.9% (AA) and the MCP-Tasks/WideResearch rows (74%) strengthen the orchestration story; MCP Atlas 46.1%, Toolathlon 36.3% and AA Agentic 8 keep it below the 2026 Qwen tiers.
- **Reasoning: 72/100.** GPQA 86.1–88.4% (two sources) and the AIME/HMMT sweep stay near-frontier, HLE 28.7% now fills the gap and the AA Index 21.4 is corroborated — unchanged; the −37.9 Omniscience index is the repo's worst and CritPt 0.9% is floor.
- **Context window: 78/100.** Verified native 262K (BenchLM's 128K listing is a lone conflict); AA-LCR 64.3%, LongBench v2 63.2% and AI-Needle 68.7% provide first measured evidence (mid); the 1M claim stays unmeasured.
- **Multimodal: 78/100.** (Was 65 on the prior pass.) Video understanding is now measured (VideoMMMU 84.7, Video-MME 83.7–87.5, MLVU 86.7) with a strong document/vision suite — the +video band (75–90); the AA-MMMU-Pro 52.7% vs vendor 79.0% conflict is flagged.
- **Coding: 78/100.** LiveCodeBench v6 83.6% fills the gap and SWE-ML 69.3% corroborates, but the SWE-V conflict (76.2 vs 80.0), SWE Pro 50.9% and NL2Repo 32.2% hold the mid-frontier band.
- **Cost efficiency: 85/100.** $0.60/$3.60 per MTok (apxml) — below the ~$0.60/$2.20 ≈ 92 reference because of the higher output rate; OpenRouter's $0.39/$2.34 would score ~88.
- **Overall Score: 73.6/100.** (Was 70.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (62 + 72 + 78 + 78 + 78) / 5 = 368/5 = 73.6 — nudged up on the 2026-10-11 second pass as the video-measurement raise outweighs the confirmed mid-band tool profile. Best fit: cost-efficient open-weights coding agent and vision/video work at 262K context — not for frontier reasoning or top-tier autonomous tool use.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Qwen3.5-397B-A17B HF model card + Qwen3.6-Plus comparison tables, Artificial Analysis model benchmarks, the prior 2026-10-08 pass on apxml/OpenRouter/llm-stats; 2026-10-16 re-check: BenchLM Reasoning-sibling page (11 rows) corroborates all rows, still unranked; base variant rank → #65/954 55.34 — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
