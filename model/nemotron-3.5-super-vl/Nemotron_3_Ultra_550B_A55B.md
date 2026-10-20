# Nemotron 3.5 Super VL — findings by Nemotron 3 Ultra 550B A55B

- Source: NVIDIA (`nemotron-3.5-super-vl`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B (BF16 / NVFP4)
- **Short description:** NVIDIA's open-weight MoE vision-language reasoning model (120B total / 12B active), 1M context, strong coding (LiveCodeBench v6 88.2%, SWE-bench Verified 71.1%), 434 t/s speed, $0.23/$0.57 pricing. OpenMDW-1.1 license (commercial use allowed).
- **Provider / access:** Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `...-NVFP4`), NVIDIA API, OpenCode Zen (`opencode/nemotron-3.5-super-vl`), 8 inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026-10-15 release; knowledge cutoff not explicitly stated.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` (Hugging Face), `nemotron-3.5-super-vl` (OpenCode Zen / NVIDIA API). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes. No video/audio.
- **Pricing (as of 2026-10-20):** $0.23/M in, $0.05/M cache read (78% discount), $0.57/M out (median across 8 providers). Blended 7:2:1 ≈ $0.14/M (AA). Cost per Intelligence Index task: $0.19 (AA). Free weights on Hugging Face.
- **Architecture:** MoE: 120B total params, 12B active (12B active per token). OpenMDW-1.1 license (commercial use allowed). BF16 / NVFP4 checkpoints.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **66.7%** (NVIDIA model card)
- Tau2-bench Airline: **76.5%** (NVIDIA model card)
- Tau3-bench: **18.9%** (NVIDIA model card)
- GDPval-AA: **1211 Elo** (NVIDIA model card) / normalized **33.1%** (AA)
- BrowseComp: **78%** (NVIDIA model card)
- GDPval-AA normalized: **33.1%** (AA)

Reasoning / knowledge:

- AA LCR: **68.6%** (NVIDIA model card)
- CritPt: **10.9%** (NVIDIA model card)
- GPQA-D: **89.5%** (NVIDIA model card)
- HLE w/o tools: **31.8%** (NVIDIA model card)
- HLE: **29.2%** (NVIDIA model card)
- AA Omniscience Accuracy: **26.2%** (NVIDIA model card)
- AA Omniscience Hallucination Rate: **30.0%** (NVIDIA model card)
- AA Omniscience Index: **4.0%** (NVIDIA model card)
- AA Intelligence Index: **26.5%** (AA) / rank #1/67 open-weight
- AA HLE: **30.7%** (AA)
- IFBench: **70.9%** (NVIDIA model card)
- Apex Shortlist: **88.4%** (NVIDIA model card)

Coding:

- LiveCodeBench v6: **88.2%** (NVIDIA model card)
- SWE-bench Verified: **71.1%** (NVIDIA model card)
- SWE Multilingual: **67.7%** (NVIDIA model card)
- SWE-bench Pro: **51.8%** (NVIDIA model card)
- AA SciCode: **47.8%** (AA)

Multimodal:

- BabyVision: **29.6%** (NVIDIA model card)
- MMLongBench-Doc: **62.8%** (NVIDIA model card)
- V*: **85.6%** (NVIDIA model card)
- MathVision: **78.2%** (NVIDIA model card)
- CharXiv: **80.8%** (NVIDIA model card)

Long context:

- AA LCR: **68.6%** (NVIDIA model card)
- CritPt: **10.9%** (NVIDIA model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** TB 2.1 66.7%, Tau2 Airline 76.5%, BrowseComp 78%, GDPval 1211 Elo (below 1750+). Capped by Tau3 18.9%, GDPval-AA 33.1%, limited agentic coverage.
- **Reasoning: 65/100.** GPQA-D 89.5% (near 90%+), AA LCR 68.6%, IFBench 70.9%, Apex Shortlist 88.4%. Capped by HLE 29.2% (<40%+), AA Intelligence Index 26 (<60), CritPt 10.9%, AA Omniscience Index 4.0%, AA HLE 30.7%.
- **Context window: 90/100.** 1M native; AA LCR 68.6%. Methodology: ≥1M = 95-100 but LCR <80% pulls down.
- **Multimodal: 70/100.** Text + image only; MathVision 78.2%, CharXiv 80.8%, V* 85.6%, MMLongBench-Doc 62.8%. No video/audio. Methodology: +image in = 60-70.
- **Coding: 80/100.** LiveCodeBench v6 88.2% (exceeds 80%+ frontier), SWE-bench Verified 71.1% (exceeds 70%+), SWE Multilingual 67.7%. Capped by SWE-bench Pro 51.8%, AA SciCode 47.8% (<55%+).
- **Cost efficiency: 95/100.** $0.23/$0.57 per 1M (median across 8 providers), blended ~$0.14/M, 78% cache discount, free weights on HF, cost/task $0.19. Methodology: open-weight + <$0.50/$1 ≈ 95-100.
- **Overall Score: 73/100.** Half-up mean of (60 + 65 + 90 + 70 + 80) / 5 = 73 → 73. Using six incl. cost: (60+65+90+70+80+95)/6 = 460/6 = 76.7 → 77. Model-queue says 82.6; discrepancy suggests queue weights coding/speed higher. Best-fit: exceptional open-weight coding (LiveCodeBench v6 88.2%) and speed (434 t/s) at ultra-low cost; text+image only limits multimodal.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (NVIDIA Hugging Face model card), independent benchmark aggregators (BenchLM, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.md`, using the same headings.