# Qwen 3.5 397B — findings by Kimi K3

- Source: Alibaba Qwen (`qwen-3.5-397b`; upstream `Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (project alias `qwen-3.5-397b`; RULES.md: "397B" is a parameter count, not a version)
- **Short description:** First open-weight release of Alibaba's Qwen3.5 series (2026-02-16): a native vision-language hybrid linear-attention + sparse-MoE model, 397B total / 17B active. The hosted `qwen3.5-plus` API is this same model (datalearner).
- **Provider / access:** OpenRouter `qwen/qwen3.5-397b-a17b` (10 providers), Alibaba Cloud/DashScope `qwen3.5-plus`, self-host via HF weights. Chat Completions with reasoning and non-reasoning variants.
- **Release / knowledge:** 2026-02-16 (OpenRouter/llm-stats/datalearner); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF, open weights); `qwen/qwen3.5-397b-a17b` (OpenRouter); `qwen3.5-plus` (hosted). No OpenCode Zen Free ID verified for this size.
- **Context window:** 262,144 tokens native, extensible to ~1,010,000 (official model card); max output 65,536 (OpenRouter). benchlm's "128K" is its own conservative lane, not the spec.
- **Modalities:** text/image/video in → text out (native VL foundation model); reasoning variant exists; tool calling incl. MCP; JSON mode supported.
- **Pricing (as of 2026-10-09):** OpenRouter from **$0.39 / $2.34** per 1M in/out; llm-stats lists $0.45/$3.00 with $0.22 cached. Open weights remove per-token cost for self-hosters (~FP8 multi-GPU node required).
- **Architecture:** hybrid linear-attention + sparse MoE; 397B total / 17B active per token; open weights (Qwen license); NVIDIA ships an official NVFP4 quant.

### Raw benchmarks found

(benchlm consolidated table, sources noted per row: Qwen launch/comparison tables = vendor; Artificial Analysis = independent; HF card)

Agent / tool use:

- τ²-bench: **83.9%** (AA, independent); τ³-bench: **68.4%** (vendor)
- MCP Atlas: **46.1%**; Toolathlon: **36.3%**; DeepPlanning: **37.6%**; VITA-Bench: **43.7%** (vendor)
- BrowseComp: **62%** (HF model card); Claw-Eval: **56.8%** (leaderboard); MCP-Tasks: **74.2%**; WideResearch: **74.0%**
- Terminal-Bench 2.0: **52.5%** (vendor comparison table)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vendor) / **86.1%** (AA independent)
- MMLU-Pro: **87.8%**; MMLU-Redux: **94.9%**; SuperGPQA: **70.4%** (vendor)
- HLE: **28.7%** (vendor) / **19.8%** (AA) — below frontier
- AIME 2026: **93.3%**; HMMT Feb-2026: **87.9%** (vendor)
- CritPt: **0.9%** (AA — near-zero physics reasoning)
- AA Intelligence Index: **21.4** (AA, non-reasoning variant)
- AA-Omniscience: accuracy **24.5%**, hallucination rate **82.7%** (AA — weak factual reliability)

Coding:

- SWE-bench Verified: **76.2%**; SWE-bench Pro: **50.9%**; LiveCodeBench v6: **83.6%** (all vendor comparison table)

Long context:

- AA-LCR: **64.3%** (AA); LongBench v2: **63.2%**; AI-Needle: **68.7%** (vendor) — mid-pack for a 262K model.

Multimodal:

- MMMU-Pro: **79%** (vendor) / **52.7%** (AA-MMMU-Pro, independent); MathVision: **88.6%**; CharXiv: **80.8%**; VideoMMMU: **84.7%**; V\*: **95.8%**; ScreenSpot Pro: **65.6%**

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** Solid agentic plumbing (τ² 83.9%, MCP-Tasks 74.2%, Terminal-Bench 52.5%, Claw-Eval 56.8%) dragged by weak MCP Atlas (46.1%), Toolathlon (36.3%) and DeepPlanning (37.6%).
- **Reasoning: 68/100.** GPQA 86–88% and elite math (AIME26 93.3%) vs low HLE (19.8–28.7%), near-zero CritPt (0.9%), AA Index 21.4, and an 82.7% hallucination rate on AA-Omniscience — strong narrow reasoning, unreliable broad knowledge.
- **Context window: 74/100.** 262K native (1M-extensible) with mid AA-LCR 64.3%; solid but a generation behind 1M-native rivals.
- **Multimodal: 80/100.** Native vision+video intake with strong vendor chart/doc/video scores (MathVision 88.6, VideoMMMU 84.7, V* 95.8); independent AA-MMMU-Pro (52.7%) is much lower than the vendor 79% — capped by that verification gap and text-only output.
- **Coding: 76/100.** SWE-bench Verified 76.2% / LiveCodeBench 83.6% are competitive; SWE-bench Pro 50.9% and mid Terminal-Bench keep it belowcoding leaders.
- **Cost efficiency: 88/100.** $0.39/$2.34 blended with open weights — among the cheapest paths to this capability class.
- **Overall Score: 74/100.** Mean of 72/68/74/80/76 = 74.0 → 74. Best fit: self-hosted multilingual/multimodal agents where open 400B-class weights and cheap API fallback matter more than frontier reasoning reliability.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (benchlm.ai consolidated 49-row table with per-row sourcing, OpenRouter model page, llm-stats, datalearner, Qwen/HF model card referenced inline, inferencex.semianalysis); scores are normalized 1–100 interpretations, not official vendor scores. Vendor vs independent (AA) numbers are flagged where both exist.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
