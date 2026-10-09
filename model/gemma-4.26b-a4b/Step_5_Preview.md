# Gemma 4 26B A4B — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-26B-A4B`, inference ID `google/gemma-4-26B-A4B-it`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE member of the Gemma 4 family)
- **Short description:** Google's efficiency-first multimodal MoE — 25.2B total parameters but only 3.8B active per token (8 of 128 routed experts + 1 shared), so it "runs almost as fast as a 4B-parameter model" while delivering benchmark performance between the 12B Unified and the dense 31B. It pairs a ~550M ViT vision encoder (variable aspect ratios, 70/140/280/560/1,120 token budgets per image) with a hybrid attention scheme (local sliding-window layers with unified KV and Proportional RoPE, last layer always global), native function calling, a native `system` role and configurable thinking mode via the `<|think|>` token. Notably, it does **not** take audio — audio is exclusive to the E2B/E4B/12B sizes. This is the one Gemma 4 size (besides E2B/E4B) offered on a hosted API, and it is the family's multimodal agent workhorse on a single 24 GB GPU.
- **Provider / access:** Open weights on Hugging Face / Google (Apache 2.0), instruction-tuned and pre-trained variants; Transformers, vLLM, SGLang, llama.cpp/Ollama; also offered on Google's hosted API.
- **Release:** Gemma 4 family 2026 (26B A4B card current as of 2026-10-09; technical report arXiv:2607.02770, published 2026-07-02).
- **Context window:** 256K tokens; 30 layers; 1024 sliding window; 262K vocabulary.
- **Modalities:** Text and image in → text out (video processed as frames); no audio. 35+ languages out of the box, pre-trained on 140+.
- **Pricing (as of 2026-10-09):** Apache 2.0 open weights — free to self-host (14.4 GB at 4-bit, 28.8 GB SFP8, 57.7 GB BF16; runs on a 24 GB GPU); hosted-API per-token price not published in the model card.
- **Architecture:** MoE (8 active / 128 total + 1 shared expert), 30 layers, hybrid local/global attention, p-RoPE, 550M ViT encoder.

### Raw benchmarks found

Instruction-tuned results, thinking mode (Gemma 4 model card / technical report):

- MMLU Pro: **82.6%**; MMMLU: **86.3%**; BigBench Extra Hard: **64.8%**
- GPQA Diamond: **82.3%**; AIME 2026 (no tools): **88.3%**; HLE (no tools): **8.7%**, HLE with search: **17.2%**
- LiveCodeBench v6: **77.1%**; Codeforces: **1718 Elo**
- Tau2 (average over 3 domains): **68.2%** (the encoder-free 12B Unified actually scores 69.0%)
- MMMU Pro: **73.8%**; MATH-Vision: **82.4%**; InfographicVQA: **89.3%**; OmniDocBench 1.5: 0.149 avg edit distance (lower is better); MedXPertQA MM: **58.1%**
- Long context: MRCR v2 8-needle @128K: **44.1%**; RULER @128K: **89.8%**; LOFT retrieval @128K: **66.3%**; IFBench: **72.0%** (technical-report aggregations)
- SWE-bench, Terminal-Bench, MCP Atlas, GDPval: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 68.2% across three domains plus native function calling is genuine mid-band agentic ability; no Terminal-Bench, MCP Atlas, Toolathlon or GDPval number is published, and the smaller encoder-free 12B outscores it here (69.0%).
- **Reasoning: 62/100.** GPQA Diamond 82.3%, MMLU-Pro 82.6%, AIME 88.3% and BBH 64.8% are mid-band — clearly the best open model in the 26B class at release — while HLE 8.7% (17.2% with search) and no ARC-AGI figure cap it below frontier.
- **Context window: 72/100.** 256K is the 200K–500K band (65–84); RULER@128K 89.8% and LOFT retrieval 66.3% are solid, but MRCR 8-needle@128K at 44.1% matches the mid-band 12B rather than exceeding it — the 31B's 66.4% shows where the family can go.
- **Multimodal: 70/100.** Text + image in → text out (video as frames) is the 60–70 band, at its top on MMMU-Pro 73.8%, MATH-Vision 82.4% and InfographicVQA 89.3% with variable resolution up to 1,120 tokens/image; no audio input and no non-text output keeps it below the 90+ tier.
- **Coding: 66/100.** LiveCodeBench v6 77.1% and Codeforces 1718 are strong mid-band competitive coding from a 3.8B-active model; no SWE-bench or agentic-coding evaluation exists for it, and the 31B is materially better (LCB 80.0, Elo 2150).
- **Cost efficiency: 98/100.** Apache 2.0 weights, 3.8B active per token on a single 24 GB GPU (14.4 GB at 4-bit), plus a hosted API option — effectively free self-hosting at near-4B inference cost, the methodology's top tier.
- **Overall Score: 66/100.** Best-fit recommendation: the sweet spot of the open Gemma 4 family — 26B-class knowledge, vision and coding at 4B-class inference cost on one consumer GPU; choose the 12B Unified instead if you need audio, the 31B if you need maximum quality.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google Hugging Face model card + Gemma 4 technical report arXiv:2607.02770, Gemma docs, gemmai4.com benchmark aggregations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_5.md`, using the same headings.
