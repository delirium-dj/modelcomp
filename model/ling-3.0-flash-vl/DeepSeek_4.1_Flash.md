# Ling 3.0 Flash VL — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group — Ling-3.0-flash-VL (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked the official HF card (`inclusionAI/Ling-3.0-flash-VL`), Artificial Analysis (`artificialanalysis.ai/models/ling-3-0-flash-vl`), OpenRouter (`openrouter.ai/inclusionai/ling-3.0-flash-vl`), BenchLM (`benchlm.ai/models/ling-3-0-flash-vl`), Benchable (`benchable.ai`), LM Market Cap (`lmmarketcap.com`) and Opper (`opper.ai`). Confirmed: 124B total / 5.5B active MoE, text+image+video in → text out, MIT open weights, native VideoRoPE, and the AA Intelligence Index ≈ 24.6–25 (AA v4.3.2) with GPQA 86.2%, HLE 22%, LCR 78.3%, SciCode 44.2%, MMMU-Pro 79.0%. Newly stress-tested the pricing and context rows: **pricing conflicts** — AA / first-party = $0.075 in / $0.22 out, but OpenRouter/Novita = $0.021 / $0.0616 and DeepInfra = $0.06 / $0.18 (LMMarketCap $0.02 / $0.06); **context conflicts** — 262K (HF "up to 256K", AA, BenchLM, LMMarketCap, OpenRouter 262,144) vs 131K native on the DeepInfra/Opper route (Opper: "128K native extended to 256K with YaRN"); max output now confirmed 32,768. Net effect: Cost efficiency 97 → 98 (cheaper verified routes); all five quality dims unchanged; Overall holds at 73.

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) native multimodal Flash model — built on Ling-3.0-flash, it brings image and video understanding into the full understand → reason → act → verify loop; 124B-A5.5B sparse MoE with open weights.
- **Provider / access:** `opencode/ling-3.0-flash-vl`; also on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`, 125B params / F32+BF16), OpenRouter (`inclusionai/ling-3.0-flash-vl`), DeepInfra (`inclusionAI/Ling-3.0-flash-VL`), Novita, Benchable and Opper. Reasoning, tool calling, structured outputs and response_format per OpenRouter/Benchable.
- **Release / knowledge:** 2026-09-10 (HF card / OpenRouter / AA / LMMarketCap all agree). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-vl`; upstream `inclusionAI/Ling-3.0-flash-VL`; DeepInfra `deepinfra/inclusionAI/Ling-3.0-flash-VL`; OpenRouter `inclusionai/ling-3.0-flash-vl`.
- **Context window:** 262,144 (256K) per HF ("up to 256K"; OpenRouter `262,144`), AA/BenchLM/LMMarketCap also 262K; the DeepInfra endpoint and Opper list a native **131K** window (Opper: "128K native context that InclusionAI extends to 256K with YaRN scaling"), and the SGLang recipe uses `--context-length 262144` (YaRN factor 2.0). **Max output: 32,768** (OpenRouter / LMMarketCap). Card text recommends temp 0.6 while `generation_config.json` and the client recipes use temp 1.0 / top_p 0.95 / top_k 20 — noted discrepancy.
- **Modalities:** Text, image and video in; text out. Thinking is enabled by default (`enable_thinking: false` to disable).
- **Pricing (as of 2026-10-11):** conflicting by route — Artificial Analysis / first-party **$0.075 in / $0.22 out** per 1M (cache discount 80%); OpenRouter & Novita **$0.021 / $0.0616**; DeepInfra **$0.06 / $0.18** (cache read $0.012); LMMarketCap lists $0.02 / $0.06. Prior report's $0.00 `:free` OpenRouter route not re-confirmed live on this pass.
- **Architecture:** Sparse MoE, 124B total / 5.5B active per token. ViT visual encoder + 2-layer MLP projector, VideoRoPE for temporal order, 42-layer hybrid KDA/Gated-MLA backbone (5:1). MIT license, open weights. AA measures 124.2 tok/s output, TTFT 2.13s (Opper/DeepInfra route: 143 tok/s, 1.38s).

### Raw benchmarks found

Agent / tool use:

- τ-Bench V3 Banking: **34.43%** (Artificial Analysis)
- GDPval (win rate): **32.49%** (AA); BenchLM lists GDPval-AA **33.1%** — same-family harness, listed for traceability.
- Terminal-Bench 2.1: **64.42%** (AA; HF protocol note: Terminus 2 harness, 2-hour timeout, 3 runs/task)
- Terminal-Bench 4.0: **0.00%** (AA)
- Benchable independent suite: 100% success rate; function calling, structured output and response_format supported (not a standard agent benchmark).

Reasoning / knowledge:

- GPQA Diamond: **86.16%** (AA); BenchLM 86.2%
- HLE: **21.96%** (AA); Opper 22%; BenchLM 22.0%
- CritPt: **2.00%** (AA / BenchLM)
- AA Intelligence Index: **24.6** (Opper / BenchLM); AA direct page shows **25** (v4.3.2). HF card reports **42** on AA Intelligence Index v4.1.1 (vs Ling-3.0-flash 38) — different index revision, listed for traceability.
- AA-Omniscience: Accuracy **14.35%**, non-hallucination **77.95%**, hallucination rate **22.0%**, net Index **−4.5** (AA / BenchLM)
- Benchable independent suite (harness-specific, not standard): Reasoning 97.5%, Mathematics 95.0%, Ethics 100%, General Knowledge 95.8%.

Coding:

- SciCode: **44.21%** (AA); BenchLM 44.2%
- AA Coding Index: **57.0** (Opper)
- Terminal-Bench 2.1: **64.42%** (AA)
- Benchable independent suite (harness-specific): Coding **95.0%** accuracy (90th percentile); no SWE-bench/DeepSWE found.

Long context:

- AA-LCR: **78.33%** (AA); Opper "long-context reasoning" 78%; BenchLM 78.3%

Multimodal:

- MMMU-Pro: **78.96%** (AA); BenchLM 79.0%

### Normalized scores (1–100)

- **Tool use: 68/100.** τ-Bench V3 Banking 34.43% is above the mid band (Tau3 10–25% → 50–70) and TB2.1 64.42% is mid-high, but GDPval win-rate 32.49% (BenchLM 33.1%) and TB4.0 0.00% hold it mid (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`).
- **Reasoning: 72/100.** GPQA Diamond 86.16% is near-frontier; HLE 21.96% and AA Index 24.6–25 are mid, and CritPt 2.00% caps the score (`https://benchlm.ai/models/ling-3-0-flash-vl`).
- **Context window: 74/100.** 256K/262,144 sits in the 200K–500K tier (200K = 70), with AA-LCR 78.33% supporting genuine long-context retrieval; note the native 131K window on the DeepInfra/Opper route (YaRN-extended to 262K) as a caveat (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`).
- **Multimodal: 85/100.** Native image **and** video input (VideoRoPE), projected through a ViT; MMMU-Pro 78.96% confirms strong visual reasoning — the 75–90 band for video-in models (`https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`).
- **Coding: 68/100.** SciCode 44.21% is mid and TB2.1 64.42% is fine, but no SWE-bench/DeepSWE figure lifts it into the frontier band; Benchable's 95% coding accuracy is a harness-specific suite, not a standard coding benchmark (`https://benchable.ai/models/inclusionai/ling-3.0-flash-vl-20260910`).
- **Cost efficiency: 98/100.** AA / first-party $0.075 in / $0.22 out ≈ the ~$0.10/$0.20 (97–99) reference point, but verified cheaper routes — OpenRouter/Novita $0.021/$0.0616 and DeepInfra $0.06/$0.18 (LMMarketCap $0.02/$0.06) — sit below that anchor, raising the score from the prior 97 (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`, `https://lmmarketcap.com/model/ling-3-0-flash-free`).
- **Overall Score: 73/100.** (68 + 72 + 74 + 85 + 68) / 5 = 73.4 → **73**. Best-fit: cheap native-vision/video worker model for image- and video-heavy agent tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: independent public internet research (HF model card `inclusionAI/Ling-3.0-flash-VL`, Artificial Analysis `ling-3-0-flash-vl`, OpenRouter, BenchLM, Benchable, LM Market Cap, Opper). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
