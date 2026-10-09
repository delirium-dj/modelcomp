# Gemma 4 E2B — findings by Step 5 Preview

- Source: Google (`google/gemma-4-E2B-it`, released 2026-04-02)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (instruct-tuned `-it`; base `google/gemma-4-E2B`)
- **Short description:** Google's efficient-parameter flagship for the edge — a **2.3B-effective / 5.1B-total** dense transformer in which "the 'E' stands for 'effective' parameters": Per-Layer Embeddings give every decoder layer its own small embedding per token, so the large embedding tables are quick lookups and the effective parameter count is far smaller than the total. It is the smallest of five Gemma 4 sizes (E2B, E4B, 12B Unified, 26B A4B, 31B Dense), carries Google's hybrid local (sliding-window 512) + global attention with Dual RoPE, and is fully multimodal in — text, image, audio, and video via frames (≤60 s @1 fps) — with a 128K context. It beats the much larger Gemma 3 27B on math and code reasoning (AIME 2026 37.5% vs 20.8%, LiveCodeBench 44.0 vs 29.1, Codeforces Elo 633 vs 110) while running in **<1.5 GB memory** with 2-bit/4-bit LiteRT weights, **133 prefill / 7.6 decode tok/s on a Raspberry Pi 5 CPU** and 3,700/31 tok/s on Qualcomm's Dragonwing IQ8 NPU, with ~78 M-parameter MTP drafter checkpoints giving up to ~3× end-to-end speedups. Independent Artificial Analysis scoring is modest (Intelligence Index 8, #67/142) — the model trades raw intelligence for texture and edge deployability.
- **Provider / access:** Open weights, Apache 2.0, on Hugging Face / ModelScope; Google AI Edge Gallery on-device; no verified hosted API price for E2B (Vertex hosts only the larger sizes).
- **Release:** 2026-04-02.
- **Context window:** 128K tokens (RULER 128K 70.4, LOFT 128K 50.5, MRCR v2 8-needle 128K 19.1).
- **Modalities:** Text, image, audio, video in; text out. Image token budgets 70–1120; audio ≤30 s.
- **Pricing (as of 2026-10-09):** no verified hosted price for E2B; Apache 2.0 weights free to self-host.
- **Architecture:** dense transformer, 35 layers, vocab 262K, sliding window 512, Per-Layer Embeddings, hybrid local/global attention, Dual RoPE (no MatFormer, no MoE).

### Raw benchmarks found

Official model card / technical report (instruct-tuned, thinking on; Gemma 3 27B as reference):

- MMLU-Pro: **60.0%** (67.6); GPQA Diamond: **43.4%** (42.4); MMMLU: 67.4 (70.7)
- AIME 2026: **37.5%** (20.8); LiveCodeBench v6: **44.0%** (29.1); Codeforces Elo: **633** (110); BBH Extra Hard: 21.9 (19.3)
- MMMU Pro: **44.2%** (49.7); MATH-Vision: **52.4%** (46.0); MedXPertQA MM: 23.5; OmniDocBench 1.5: 0.290 (0.365)
- TAU2 (avg of 3): **24.5%** (16.2); MRCR v2 8-needle 128K: **19.1%** (13.5)
- CoVoST BLEU: **33.47**; FLEURS WER: **0.090** (Gemma 3n E2B: 31.6 / 0.108)
- Technical report: SciCode **21.0**, IFEval **94.6**, IFBench **38.0**, InfographicVQA **63.9**, RULER 32K **83.0**, RULER 128K **70.4**, LOFT 128K **50.5**, GraphWalks F1 4.1

Artificial Analysis (independent; via BenchLM):

- Intelligence Index: **8** (#67/142); AA-MMMU-Pro 44.6; AA-GPQA 43.3; AA-HLE 4.8; AA-IFBench 38.0; AA-LCR 16.3; CritPt 0.0; TAU2-bench 20.8; GDPval-AA 36; Coding Index **7.2**; AA-Omniscience accuracy 6.6 / hallucination 32.4 (index −23.6)

Edge/performance (official Developers Blog): RPi5 CPU 133 prefill / 7.6 decode tok/s; Qualcomm Dragonwing IQ8 NPU 3,700 / 31; <1.5 GB memory on some devices; 4,000 input tokens across 2 skills in under 3 s; RTX 4090 11,234 prefill / 143 decode.

### Normalized scores (1–100)

- **Tool use: 40/100.** TAU2 20.8–24.5%, GDPval-AA Elo 36 and AA-LCR 16.3% show functional but weak agentic execution; native function calling is standard, nothing here reaches the mid-band.
- **Reasoning: 41/100.** AIME 37.5, LiveCodeBench 44.0, MRCR 19.1 and IFEval 94.6 are strong for 2.3B effective parameters but low in absolute terms; GPQA 43.4, HLE 4.8, AA index 8 confirm a small-model tier.
- **Context window: 52/100.** 128K sits in the 100K–200K band (50–64), lifted by RULER 128K 70.4 but held down by AA-LCR 16.3 and MRCR 19.1.
- **Multimodal: 88/100.** Text, image, audio and video input with MMMU Pro 44.2%, MATH-Vision 52.4%, InfographicVQA 63.9%, OmniDocBench 0.290 and audio CoVoST 33.5 BLEU / FLEURS 0.09 WER — near the top band, a full-spectrum multimodal input stack at edge sizes.
- **Coding: 41/100.** LiveCodeBench 44.0 and Codeforces Elo 633 (vs 110 for Gemma 3 27B) are strong relative-to-size results; SciCode 21.0 and AA Coding Index 7.2 keep the absolute level low-mid.
- **Cost efficiency: 97/100.** Apache 2.0 weights free to self-host, <1.5 GB memory with 2-bit/4-bit quants, plus MTP drafters for ~3× end-to-end speed — the methodology's near-$0 tier (a hosted price for E2B does not exist yet).
- **Overall Score: 52/100.** Best-fit recommendation: the edge multimodal workhorse — audio+image+video input, 128K context and 27B-beating math/code at 2.3B effective parameters, runnable on a Raspberry Pi; only small-model absolute intelligence.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google Gemma 4 E2B model card and HF blog, Developers Blog edge post, official technical report arXiv 2607.02770, Artificial Analysis via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_E4B.md`, using the same headings.
