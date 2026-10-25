# Nemotron-3-Ultra-Free — findings by Muse Glimmer 30B

- Source: NVIDIA / Nemotron-3-Ultra-550B-A55B-NVFP4 free tier
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Nemotron-3-Ultra-Free
- **Short description:** NVIDIA frontier-scale proprietary reasoning LLM, 550B total / 55B active LatentMoE with MTP. Optimized for complex multi-step agentic workflows, long-context analysis, and high-stakes reasoning over code, math and science. Free tier is the same weights as NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4 served via OpenRouter free access.
- **Provider / access:** Hugging Face weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`; OpenRouter free Chat Completions `openrouter/nvidia/nemotron-3-ultra-550b-a55b:free`. Chat Completions API.
- **Release / knowledge:** Hugging Face 2026-06-04; post-training data cutoff May 2026, pre-training cutoff Sep 2025.
- **IDs:** `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`; free access `openrouter/nvidia/nemotron-3-ultra-550b-a55b:free`.
- **Context window:** Up to 1M tokens total. Verified by Hugging Face README Model Summary and README Input/Output sections.
- **Modalities:** Input text; Output text. Reasoning yes configurable via chat template `enable_thinking`, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** Free tier via OpenRouter, $0 per 1M input/output. Rate limits apply; weights are OpenMDW-1.1 licensed for self-host.
- **Architecture:** 550B total / 55B active parameters. Latent Mixture-of-Experts hybrid Mamba-2 + MoE + Attention with Multi-Token Prediction. NVFP4 quantization-aware pre-training. OpenMDW-1.1 license.

### Raw benchmarks found

> Sources: Hugging Face README for NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4 2026-06-04; independent needle-in-haystack sweep metrics.json from OpenRouter free tier 2026-08-28; GitHub repo Rajashekarredde/nemotron-chunk-sweep.

Agent / tool use:

- Terminal-Bench 2.1: **53.9%** NVFP4 — Hugging Face README Benchmarks table
- GDPVal: **47.9** — Hugging Face README
- SWE-Bench Verified: **69.5%** NVFP4 — Hugging Face README
- SWE-Bench Multilingual: **69.1%** NVFP4 — Hugging Face README
- ProfBench Search: **56.4** — Hugging Face README
- PinchBench: **89.8** — Hugging Face README
- TauBench V3 average: **70.3%** NVFP4 — Hugging Face README; Airline 80.0%, Retail 88.4%, Telecom 93.6%, Banking 19.2%
- BrowseComp: **41.4** — Hugging Face README
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA no tools: **87.9%** NVFP4 — Hugging Face README
- HLE no tools: **26.1%** NVFP4 — Hugging Face README
- IOI 2025: **564.7** NVFP4 — Hugging Face README
- CritPt no tools: **3.4%** NVFP4 — Hugging Face README
- OmniScience Accuracy: **24.6%** NVFP4 — Hugging Face README
- OmniScience Non-Hallucination: **75.5%** NVFP4 — Hugging Face README
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for free ID
- Omniscience Accuracy / Hallucination Rate: see above

Coding:

- SWE-bench Verified / SWE-Pro: **69.5%** NVFP4 — Hugging Face README
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode subtask: **43.5%** NVFP4 — Hugging Face README
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR: **65.5** NVFP4 at 1M window — Hugging Face README
- RULER 1M: **94.0%** NVFP4 — Hugging Face README
- Needle-in-haystack retrieval on OpenRouter free tier: **89.7%** overall accuracy, 29 trials, max verified OK ~640k prompt tokens — metrics.json 2026-08-28

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 53.9% and GDPVal 47.9% are moderate; TauBench V3 average 70.3% and SWE-Bench Verified 69.5% show strong agentic/tool signals. Banking 19.2% and modest Terminal-Bench cap the score.
- **Reasoning: 78/100.** GPQA 87.9% and IOI 2025 564.7 are high; HLE 26.1% and CritPt 3.4% limit broad knowledge/critical reasoning breadth.
- **Context window: 95/100.** 1M token context verified, RULER 1M 94.0% and AA-LCR 65.5. Independent needle test shows 89.7% retrieval to ~640k tokens, empty response beyond ~768k.
- **Multimodal: 15/100.** Text in / text out only. No image/audio/video input reported for this checkpoint.
- **Coding: 68/100.** SWE-Bench Verified 69.5% and SWE-Bench Multilingual 69.1% are solid; SciCode subtask 43.5% and absence of LiveCodeBench/SWE-Pro numbers cap the score.
- **Cost efficiency: 100/100.** Free tier $0 on OpenRouter as of 2026-10-25.
- **Overall Score: 66/100.** Mean of five quality dims (72+78+95+15+68)/5 = 65.6 → 66. Best-fit: powerful long-context reasoning/agentic model with free access, text-only, moderate tool bench scores.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
