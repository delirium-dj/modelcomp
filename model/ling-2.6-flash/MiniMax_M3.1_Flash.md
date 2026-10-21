# Ling 2.6 Flash — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 2.6 Flash), `inclusionAI/Ling-2.6-flash`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's April 2026 open-weight (MIT) non-reasoning MoE — ~107B total / 7.4B active, hybrid Lightning-linear/MLA attention, 128K native (256K via YaRN) — an "instant" tool-calling model with SWE-bench Verified 61.2% and a 96.7% hallucination rate. Deprecated in favour of Ling 3.0 Flash.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-flash` (MIT; base + FP8/GGUF quants), ZenMux `inclusionai/ling-2.6-flash` ($0.10/$0.30), Requesty `ling-2.6-flash` ($0.10/$0.30), and the retired OpenCode slot `ling-2.6-flash-free` (free; now deprecated and gone from the live Zen catalogue). The OpenRouter page exists but has **no live endpoints**.
- **Release / knowledge:** **2026-04-21** (AA, models.dev, OpenRouter listing); the HF repo was created 2026-04-28. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-flash` (HF), `inclusionai/ling-2.6-flash` (OpenRouter/models.dev).
- **Context window:** **131,072** native, extended to **262,144** with YaRN (factor 2.0, θ=6e6) — the extension is inference-side, and AA lists 262k.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.10/M in, $0.30/M out, $0.02/M cached** (ZenMux, Requesty); self-host $0 (MIT).
- **Architecture:** `BailingMoeV2_5ForCausalLM`, 32 layers, hidden 4096, 256 routed + 1 shared expert (top-8), 7:1 Lightning-linear : MLA hybrid, vocab 157,184, 1 MTP nextn layer (inference-only), hybrid/retrofit attention on the Ling-2.0 base.

### Raw benchmarks found

> The model card's table is arXiv Table 4 of the Ling/Ring 2.6 technical report; the
> Artificial Analysis rows are added from BenchLM's mirror. One τ² row conflicts.

Coding:

- SWE-bench Verified: **61.20%** (openhands fc) — also in the HF eval yaml `swe-bench_verified = 61.2`
- LiveCodeBench-v6: **62.28%** (Mean@4) · SciCode: **27%** (AA) · AA Coding Index: **25.3%** (AA) · Codeforces: no verified public score found
- Terminal-Bench 2.0 / 2.1: **no verified public score for the Flash model** (TB2.0 40.45 belongs to the 1T sibling)

Agent / tool use:

- Tau2-bench: **76.36%** average (Retail 71.49, Airline 63.00, Telecom 94.96) per the card/arXiv — vs **85.96%** on AA (different harness/version; both cited)
- Claw-Eval: **64.56%** (card) · BFCL-V4: **66.81%** (card) · PinchBench: **81.30%** avg (best 88.10) · GDPval-AA: **550 Elo / 0% normalized** (AA) · Tau3-bench: no verified public score found · MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2026: **73.85%** (Mean@64, CoT) — also in the HF eval yaml `aime_2026 = 73.85` · HMMT-Feb26: **49.29%** (eval yaml agrees) · IMO-AnswerBench: **54.28%** · HLE: **6.30%** (card) / **6.26%** (AA) · GPQA-Diamond: **59.29%** (AA)
- Artificial Analysis Intelligence Index: **10 (estimated)** (#3/39 in class) — BenchLM cites **14.1** for the same model; both cited
- AA-LCR: **31.3%** · CritPt: **0%** · Omniscience Index / Accuracy / Hallucination Rate: **−66.1 / 15.6% / 96.7%** (AA) — one of the highest hallucination rates measured
- BenchLM composite: **32.4/100, #175 of 972** (16 of 668 benchmarks) · AA output speed: **N/A ("no publicly available API")**; vendor claims up to **340 tok/s** on 4×H20

Long context:

- MRCR (16K–256K): **75.93%** (card) · Multichallenge: **39.71%** · Multi-IF (turn-3): **74.80%**

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 76.4–86.0%, Claw-Eval 64.6%, BFCL v4 66.8% and PinchBench 81.3% are solid mid-band agentic numbers, capped by GDPval-AA 550 Elo (0% normalized) and the absence of τ³ or MCP-Atlas rows.
- **Reasoning: 50/100.** AIME 2026 73.9% and GPQA 59.3% are mid, but HLE 6.3%, AA-LCR 31.3%, CritPt 0%, an Intelligence Index of 10 and a **96.7% hallucination rate** pull it down.
- **Context window: 76/100.** 256,144 (YaRN over a 128K native window) with measured MRCR 75.93% at 16K–256K — real retrieval evidence, in the upper part of the tier.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 62/100.** SWE-bench Verified 61.2% and LiveCodeBench v6 62.3% are mid-band, with SciCode 27% and no DeepSWE row.
- **Cost efficiency: 98/100.** $0.10/M in and $0.30/M out on the hosted routes, a (now retired) free Zen slot, and MIT weights for free self-hosting.
- **Overall Score: 53/100.** Mean of the five quality dims = (62 + 50 + 76 + 15 + 62) / 5 = 53.0 → **53**. Best fit: cheap long-context tool-calling with instant (non-reasoning) latency — but the 96.7% hallucination rate argues against unattended use, and Ling 3.0/3.1 Flash are the better buy.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Hugging Face model card, config.json and .eval_results yamls, arXiv Ling/Ring 2.6 technical report, Artificial Analysis, BenchLM, models.dev, ZenMux, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.0_Flash.md`, using the same headings.
