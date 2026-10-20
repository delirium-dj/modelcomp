# Muse Glimmer 30B — findings by MiniMax M3.1 Flash

- Source: Meta Superintelligence Lab (Muse Glimmer 30B), `meta-models/Muse-Glimmer-30B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weight (Apache 2.0) on-device agentic model — a ~29.6B dense multimodal model distilled from Muse Spark, quantised to fit a 24–32 GB consumer GPU and shipped with a DFlash speculative-decoding drafter for 3× faster local generation. It is the strongest open local model for tool-using agents in its size class; it is **not** on OpenCode Zen (Zen lists only Muse Spark 1.2/1.3).
- **Provider / access:** Hugging Face `meta-models/Muse-Glimmer-30B` (BF16 + two 4-bit quants + DFlash drafter + frozen perception encoder); OpenRouter `meta/muse-glimmer-30b`; Together AI, Vercel, NVIDIA NIM, Fireworks-class gateways; local serving with vLLM, SGLang, ExecuTorch, Transformers, llama.cpp.
- **Release / knowledge:** **August 2026** (model card; OpenRouter created 2026-08-09, AA release 2026-08-10). Knowledge cutoff **2026-01-04**. Paper: arXiv 2610.24628.
- **IDs:** `meta/muse-glimmer-30b` (OpenRouter), `meta-models/Muse-Glimmer-30B` (HF), `muse-glimmer` (Artificial Analysis page slug). Not an OpenCode Zen id.
- **Context window:** **131,072+** tokens (model card; 131,072 in provider data), max output 16,384–131,072 depending on host.
- **Modalities:** input text + image (4,096 visual tokens per image); output text; **audio not supported**; video processed as frames; reasoning strength low/medium/high/xhigh; tool use and function calling with precise schemas.
- **Pricing (as of 2026-10-20):** OpenRouter **$0.30/M in, $1.20/M out, $0.04/M cached**; Vercel / Together AI $0.35/$1.50; NVIDIA NIM **$0**; self-host **$0** (Apache 2.0 weights).
- **Architecture:** dense causal transformer (52 layers, hidden 6656, GQA 32/2, SwiGLU, sliding window 2048, RoPE θ=500,000, vocab 202,048) + frozen ~1.8B ViT-G/14 perception encoder; **29.6B total including the encoder**.

### Raw benchmarks found

> Meta's own card (https://huggingface.co/meta-models/Muse-Glimmer-30B) with the AA/benchlm third-party numbers alongside; the two disagree on a few rows.

Agent / tool use:

- MCP Atlas (public): **75.5%** (Meta; Gemma4-31B 54.2, Qwen3.6-27B 62.5)
- DeepSearch QA: **74.6%** (Meta) · WildClawBench: **47.6%** (Meta) · Gaia2: **43.3%** (Meta)
- Tau3-Banking: **23.5%** (Meta) · Tau3-Banking (AA): **23.5%** (AA record 0.2351) · Tau2-bench: no verified public score found
- OSWorld-Verified: **65.9%** (Meta) · GDPval-AA v2: **953** (Meta) vs **786.79** (AA)
- Terminal-Bench 2.1: **51.7%** (Meta, terminus2 harness) — AA's own TB2.1 run: **51.69%**
- AutomationBench partial: **6.8%** (AA) · EnterpriseOpsGym: **34.7%** (AA) · SkillsBench (with skills): **44.3%** (Meta)

Reasoning / knowledge:

- GPQA Diamond (AA harness): **83.5%** (Meta; Gemma4-31B 85.7) · HLE text (AA): **22.0%** (Meta)
- AA-LCR: **80.0%** (Meta) vs **83.3%** (AA / BenchLM ledger) — conflict flagged
- AIME 2026: **94.7%** (Meta) · IFBench: **77.0%** (Meta) · Beam128K: **65.1%** (Meta)
- Artificial Analysis Intelligence Index: **17** (AA) / 41.2 composite, #134 (BenchLM); output speed **131.7 tok/s**
- Omniscience Accuracy / Hallucination Rate: **27.0% / 81.9%** (AA) · CritPt: **2.6%** (AA) · FrontierCode: **13.9%** (AA)

Coding:

- SWE-bench Verified: **76.0%** (Meta; Gemma4-31B 66.6, Qwen3.6-27B 77.2) · SWE-bench Pro: **51.2%** (Meta)
- Terminal-Bench 2.1: **51.7%** (Meta) · SciCode: **43.6%** (Meta) vs **44.91%** (AA)

Multimodal:

- MMMU-Pro: **74** (Meta) · CharXiv Reasoning: **78.8%** (Meta) · ScreenSpot Pro: **75.4%** (Meta) · OmniDocBench 1.5: **75.8%** (Meta)

Long context:

- Beam128K: **65.1%** (Meta) — the only long-context retrieval figure published for the family.

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP Atlas 75.5%, DeepSearch QA 74.6%, OSWorld-Verified 65.9% and Terminal-Bench 2.1 51.7% are solid mid-to-high band agentic results, but τ³-Banking 23.5%, AutomationBench 6.8% and GDPval-AA 787–953 are weak for a frontier-adjacent agent.
- **Reasoning: 72/100.** GPQA 83.5%, AIME 2026 94.7%, IFBench 77.0% and AA-LCR 80–83% are strong, capped by HLE 22.0%, CritPt 2.6%, an AA Intelligence Index of 17 and a 81.9% hallucination rate.
- **Context window: 58/100.** 131,072 tokens falls in the 100K–200K band (50–64); Beam128K 65.1% shows the window is real but the ceiling is well under 256K.
- **Multimodal: 68/100.** Text and image in with text out, MMMU-Pro 74%, CharXiv 78.8%, ScreenSpot Pro 75.4% — the "+image in" band; audio is explicitly unsupported, so no top-tier score.
- **Coding: 72/100.** SWE-bench Verified 76.0% and SWE-bench Pro 51.2% are mid-band for the size class (the frontier reference at this scale is far lower), but SciCode 43.6% and FrontierCode 13.9% cap it.
- **Cost efficiency: 96/100.** $0.30/M in and $1.20/M out hosted, $0 on NVIDIA NIM, and Apache 2.0 weights you can run on a 24 GB consumer GPU — one of the cheapest capable open models to run.
- **Overall Score: 68/100.** Mean of the five quality dims = (68 + 72 + 58 + 68 + 72) / 5 = 67.6 → **68**. Best fit: fully local, private agents on one consumer GPU — the 128K window and 16K max output are the trade-offs versus the hosted frontier.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Meta's Hugging Face model card and research blog, Artificial Analysis, BenchLM, OpenRouter API, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.
