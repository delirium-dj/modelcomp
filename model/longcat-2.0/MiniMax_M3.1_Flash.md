# LongCat 2.0 — findings by MiniMax M3.1 Flash

- Source: Meituan (LongCat 2.0), `meituan-longcat/LongCat-2.0`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's June 2026 open-weight (MIT) 1.6T/48B-active MoE with a 1M context and LongCat Sparse Attention — a rare open model at trillion-parameter scale, with Terminal-Bench 2.1 70.8% and SWE-bench Pro 59.5% self-reported, served from $0.30/$1.20 per 1M.
- **Provider / access:** Hugging Face `meituan-longcat/LongCat-2.0` (MIT; `-FP8` and `-INT8` variants), GitHub `meituan-longcat/LongCat-2.0`, OpenRouter `meituan/longcat-2.0` ($0.30/$1.20, cache $0.006), SiliconFlow, NanoGPT (`longcat-2.0:thinking` $0.75/$3.00), LongCat API platform. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-06-29** (AA release date; chart asset filename) / 2026-06-30 (models.dev) / HF repo created 2026-07-05 — conflicting dates, all cited. Knowledge cutoff not published.
- **IDs:** `meituan-longcat/LongCat-2.0` (HF), `meituan/longcat-2.0` (OpenRouter), `longcat-2.0` (NanoGPT).
- **Context window:** **1,000,000** tokens (AA `contextWindowTokens: 1000000`; BenchLM "1M"; OpenRouter 1,048,756) — trained on hundreds of billions of 1M-context tokens with LongCat Sparse Attention.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.30/M in, $1.20/M out, $0.006/M cached** (OpenRouter / LongCat platform); $0.75/$2.95 (SiliconFlow, AA's median). Self-host $0 (MIT).
- **Architecture:** MoE, **1.6T total / ~48B active** (model card; 135B of that is the N-gram embedding table), 38 layers, 768 routed experts with top-12, MLA, 3 MTP steps, vocab 163,840. The 1.78T figure is a derived tensor count, not a published number.

### Raw benchmarks found

> Meituan's in-house table (README chart) versus Artificial Analysis — the two disagree by 10+ points on the same benchmarks, so both are carried.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan, in-house) vs **50.19%** (AA) — conflict flagged
- BrowseComp: **79.9%** (Meituan) · RWSearch: **78.8%** (Meituan) · τ-Bench Banking: **13.2%** (AA) · GDPval-AA: **869.76 Elo / 18.5% normalized** (AA)
- MCP-Atlas / Toolathlon / AutomationBench for LongCat 2.0: no verified public score found (AutomationBench partial **4.5%**, AA)
- BenchLM: "0 of 668 source-displayable benchmark rows" — the LongCat 2.0 benchmark table ships as bundled app data, not extractable

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Meituan) vs **77.98%** (AA) — conflict flagged
- HLE: **33.69%** (AA) · AA-LCR: **65.0%** (AA) · CritPt: **2.6%** (AA)
- Artificial Analysis Intelligence Index: **19.11** (Coding Index 45.3, Agentic Index 14.0) · output speed **64.3 tok/s**, TTFT 2.67s
- IFEval: **90.0%** (Meituan) · IMO-AnswerBench: **81.8%** (Meituan) · FORTE: **73.2%** (Meituan) · Writing Bench: **83.8%** (Meituan)
- Omniscience Accuracy / Hallucination Rate: **29.63% / 75.39%** (AA) · SciCode: **36.3%** (AA)

Coding:

- SWE-bench Pro: **59.5%** (Meituan) · SWE-bench Multilingual: **77.3%** (Meituan) · SWE-bench Verified: no verified public score found
- Terminal-Bench 4.0: **0.0%** (AA) · LiveCodeBench / DeepSWE / SciCode (AA 36.3%): no other verified figures

Long context:

- No MRCR / RULER measurement published for LongCat 2.0; the 1M claim rests on training data and the model's LongCat Sparse Attention design.

### Normalized scores (1–100)

- **Tool use: 52/100.** BrowseComp 79.9% and RWSearch 78.8% are strong retrieval numbers, but Terminal-Bench 2.1 lands at 50.2% on AA (70.8% self-reported), τ-Bench Banking is 13.2%, GDPval-AA 870 is low and AutomationBench 4.5% is at the floor.
- **Reasoning: 64/100.** IFEval 90.0%, IMO-AnswerBench 81.8% and HLE 33.7% are mid-band, capped by GPQA 78.0% on AA (88.9% self-reported), an AA Intelligence Index of 19.1, LCR 65% and a 75.4% hallucination rate.
- **Context window: 85/100.** A genuinely 1M-token window trained at that length, discounted for the absence of any published retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 62/100.** SWE-bench Pro 59.5% and SWE-bench Multilingual 77.3% are mid-band, Terminal-Bench 2.1 50.2% (AA) and SciCode 36.3% cap the score, and no SWE-bench Verified, LiveCodeBench or DeepSWE figure exists.
- **Cost efficiency: 93/100.** $0.30/M in and $1.20/M out on OpenRouter is cheap for a 1.6T open model, and MIT weights are free to self-host.
- **Overall Score: 56/100.** Mean of the five quality dims = (52 + 64 + 85 + 15 + 62) / 5 = 55.6 → **56**. Best fit: self-hosted 1M-context research and long-horizon coding — but every headline number is vendor-published, so validate on your own harness.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Meituan LongCat 2.0 Hugging Face card and config, GitHub org, LongCat platform docs, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `LongCat_DeepResearch.md`, using the same headings.
