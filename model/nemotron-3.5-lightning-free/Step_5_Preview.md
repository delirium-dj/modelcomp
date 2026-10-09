# Nemotron 3.5 Lightning (free) — findings by Step 5 Preview

- Source: NVIDIA (`nvidia/nemotron-3.5-lightning:free`; weights `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (30B-A3B; the `:free` variant is the zero-cost OpenRouter route)
- **Short description:** NVIDIA's compact, speed-first specialist — a 30B-total / **3B-active** hybrid LatentMoE (Mamba-2 + MoE layers with select attention layers, plus native MTP speculative decoding) that NVIDIA positions on the accuracy-versus-speed Pareto frontier for small open models. Its purpose-built claim is agent efficiency: on PinchBench it hits **85.37%** while completing 10,000 tasks **30% faster than Qwen3.6-35B** at comparable accuracy — designed for long-running agents and specialized task execution rather than raw intelligence. General capability is modest for 2026: SWE-bench Verified 51.6%, GPQA ~75%, HLE ~11%, AA Intelligence Index 12.9. Weights are OpenMDW-1.1 (BF16/NVFP4/base) with full evaluation recipes in NeMo Gym. The OpenRouter `:free` route serves it at $0/$0 with 1.45 s latency, 24 tok/s and 99.97% uptime — one of the more reliable free endpoints in the catalog.
- **Provider / access:** Open weights (OpenMDW v1.1) on Hugging Face / ModelScope; NVIDIA NIM (OpenAI- and Anthropic-compatible APIs); OpenRouter (`:free` and paid); build.nvidia.com.
- **Release:** 2026-08-11.
- **Context window:** 1M tokens (256K default in vLLM/SGLang); max output 65,536.
- **Modalities:** Text in → text out; reasoning-capable; tool calling.
- **Pricing (as of 2026-10-09):** free route $0/$0 (rate-limited, NVIDIA provider, 99.97% uptime); weights free to self-host.
- **Architecture:** hybrid LatentMoE (Mamba-2 + MoE + attention), 30B/3B active, MTP.

### Raw benchmarks found

NVIDIA (BF16 checkpoint, NeMo Gym / NeMo Evaluator harnesses):

- PinchBench: **85.37%** (its strongest result; Qwen3.6-35B 88.07, Gemma 4 26B A4B 74.70)
- MMLU-Pro: **81.94%**; AA-Omniscience: 17.50
- GPQA Diamond (no tools): **76.89%** (75.44 in the NVFP4 table); HLE (text-only): **11.72%**
- SciCode: **32.60%**; SWE-bench Verified: **51.56%**; SWE-bench Multilingual: **39.33%**
- Terminal-Bench 2.1: **24.58%**; BrowseComp: **36.97%**; τ³-Bench Banking: **9.28%**; GDPval-AA-V2: **832 Elo**
- IFBench (loose): **71.88%**; AA-LCR: **52.00%**
- Base checkpoint: RULER 256K 76.88, RULER 1M 69.62 (beating Qwen3.5-35B-A3B's 56.43)

Artificial Analysis (independent, via OpenRouter):

- Intelligence Index: **12.9**; Coding Index: **26.8**; Agentic Index: **3.5**
- GPQA Diamond 74.3%; HLE 10.6%; AA-LCR 60.3%; τ-Bench Banking 8.9%; GDPval-AA 7.1%; TB 2.1 24.3%; TB 4.0 0.5%; SciCode 32.1%; AA-Omniscience 14.4% accuracy / 62.4% non-hallucination

### Normalized scores (1–100)

- **Tool use: 42/100.** PinchBench 85.4% shows strong structured-task execution (30% faster than Qwen3.6-35B), but Terminal-Bench 2.1 24.6%, τ³-Banking 9.3%, GDPval Elo 832 and AA Agentic Index 3.5% cap it low-mid.
- **Reasoning: 48/100.** GPQA 74.3–76.9% and MMLU-Pro 81.9% are mid-low; HLE 10.6–11.7%, SciCode 32.1% and the AA Intelligence Index of 12.9 confirm a small-model tier.
- **Context window: 74/100.** A 1M-token window is the ≥1M band with RULER@1M 69.6% on the base checkpoint and AA-LCR 60.3% — evidence of a real long window, not the ≥98% retrieval of the top band.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 42/100.** SWE-V 51.6%, SWE-Multi 39.3%, Coding Index 26.8% and TB 2.1 24.6% are low-mid; the model is not positioned for heavy coding.
- **Cost efficiency: 100/100.** The `:free` route is literally $0/$0 with 99.97% measured uptime, and the OpenMDW weights are free to self-host — the methodology's $0 tier with a dependable free endpoint.
- **Overall Score: 44/100.** Best-fit recommendation: the reliable free tier — PinchBench 85% agent execution and 1M context at zero cost; a small-model reasoning tier that should be routed to specialized high-throughput tasks, not hard reasoning or coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (NVIDIA developer blog, NGC/build model cards, Hugging Face base card, OpenRouter free-route page, Layer3 Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_6.md`, using the same headings.
