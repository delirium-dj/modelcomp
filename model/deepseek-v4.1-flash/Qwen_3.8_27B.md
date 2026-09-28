# DeepSeek V4.1 Flash — findings by Qwen 3.8 27B

- Source: DeepSeek/DeepSeek-V4.1-Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed multimodal MoE (552B backbone) built for input-heavy agentic workloads: 1M context, KV-cache compression (CED architecture, 8B/16B active params per token), controllable reasoning effort 1–100. Not a variant/alias of DeepSeek-V4-Flash (its predecessor, which V4.1 cuts KV footprint ~4x vs).
- **Provider / access:** DeepSeek API `deepseek/deepseek-v4.1-flash` (Chat Completions / Responses via deepseek-recipe toolkit); open weights on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`. No OpenCode Zen Free ID (noFreeId).
- **Release / knowledge:** 2026 (tech report citation year; BenchLM family shows it postdates "DeepSeek V4 Flash 0731"); exact release date and knowledge cutoff not stated on the model card.
- **IDs:** `deepseek/deepseek-v4.1-flash` (paid, no Free ID on Zen), HF `deepseek-ai/DeepSeek-V4.1-Flash`
- **Context window:** 1M total; recommended `max_tokens` ≥ 256K (official card; repo meta lists 384K out cap on some hosts).
- **Modalities:** text + image in (native DeepSeek-ViT vision encoder, interleaved image support), text out; reasoning yes (controllable effort 1–100); tool calls yes; JSON mode supported.
- **Pricing (as of 2026-09-28):** $0.30 in / $1.20 out per 1M (DeepSeek API, per repo pricing entry). Paid; no Free ID.
- **Architecture:** MoE — 552B backbone, 1 shared + 384 routed experts (6 active per token), 8B active prefill / 16B decode; Causal Encoder-Decoder (40 layers: 20 causal encoder + 20 decoder); Engram conditional memory 196B (sparsely accessed); CSA2 sparse attention with FP4 KV (≈890 B/token); MIT license, open weights (HF 763B total incl. vision/memory).

### Raw benchmarks found

Instruct results at max reasoning effort (official model card, `reasoning_effort=100`, 1M context; frontier comparison column from the card):

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (field-best in card table vs Opus-5.0 89.1, GPT-5.6 Sol 88.8, K3 88.3); Terminal-Bench 2.1 (Vals) **74.5%** (BenchLM)
- Terminal-Bench 3.0 / 4.0: **30.0% / 31.2%** (card; harder 2026 harnesses — Opus-5.0 leads at 43.3 / 51.8)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1,600** Elo / 55.0% normalized (BenchLM; AA Briefcase **1,425** Elo, AA ITBench **46.9%**)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Extras: CyberGym **88.1%** (field-best vs GPT-5.6 Sol 84.5), HLE w/ tools **63.9%** (field-best vs Opus 63.6), AutomationBench **54.8%** / AA AutomationBench **68.9%** (field-best), Agent's Last Exam **31.8%** (field-best vs Opus 28.6), SEC-Bench Pro **62.8%**, ExploitGym **15.3%**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (card + BenchLM; vs Opus-5.0 93.4, GPT-5.6 Sol 94.1, K3 92.9, GLM-5.3 88.1)
- HLE: **36.8%** (text-only subset 39.1%; vs Opus-5.0 56.3, GPT-5.6 Sol 44.5, K3 43.5)
- LCR / MLCR: LCR **84.0%**, MLCR-AA **22.8%** (BenchLM)
- CritPt: **14.3%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **39.5** / no public overall yet (BenchLM unranked, 40 rows covered); MathArena Apex **65.6%** (card)
- Omniscience Accuracy / Hallucination Rate: **46.4%** accuracy (AA-Omniscience; BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found on card/BenchLM
- LiveCodeBench: no verified public score found; Codeforces rating **3,471** (field-best in card table)
- SciCode / AA-SciCode: AA-SciCode **51.9%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 **74.2%** resolved (field-best vs Opus 74.0, GPT-5.6 Sol 73.0; card + BenchLM), NL2Repo **64.0** (card; BenchLM lists 65.4), ProgramBench **20.3%** Almost@1 (Opus 37.0)

Long context:

- 1M context; LCR **84.0%** (BenchLM); LongBench-V2 45.2 (base model, card); no MRCR at 512K+ published.

Multimodal (image in):

- AAA-MMMU-Pro **77.0** (BenchLM); Chartography w/ tools **78.9%**, BabyVision w/ Python **89.6%**, ZeroBench w/ Python **49.0%** (card); base model: MMMU-Pro 56.5, DocVQA 95.6, CVBench 77.9 (card).

### Normalized scores (1–100)

- **Tool use: 90/100.** Field-best Terminal-Bench 2.1 (90.6%, above the ~88%+ frontier ref) plus field-best HLE w/ tools, AutomationBench, and Agent's Last Exam, and GDPval-AA 1,600 near the ~1750 frontier mark; capped just under 100 by weak TB 3.0/4.0 (30.0/31.2) on the newest hard harnesses.
- **Reasoning: 85/100.** GPQA Diamond 90.9% is frontier-band and Apex 65.6% ties the best, but HLE 36.8% trails every frontier model in the card's table (44.5–56.3) and CritPt 14.3% is low; AA Index 39.5 sits above the mid band.
- **Context window: 95/100.** 1M native context puts it in the ≥1M tier (95–100); LCR 84.0% is solid but no ≥98% retrieval at 512K+ is published, so it holds the tier floor.
- **Multimodal: 70/100.** Image-in only (no video/audio in): image-in band is 60–70; strong DocVQA 95.6 and BabyVision 89.6 justify the top of the band.
- **Coding: 90/100.** Field-best DeepSWE v1.1 74.2% (clears the 74%+ frontier ref) and TB2.1 90.6%, with Codeforces 3,471; held back from 95+ by ProgramBench 20.3% and no published SWE-bench Verified.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (≈92) reference points, plus MIT open weights for self-hosting.
- **Overall Score: 86/100.** Mean of 90/85/95/70/90 = 86.0 → 86 (half-up); best fit: cheapest near-frontier agentic/coding engine for input-heavy, long-context pipelines; pick a reasoning extreme (Opus/GPT-5.6) for HLE-class knowledge work.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (official Hugging Face model card, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
