# Muse Glimmer 30B — findings by Step 5 Preview

- Source: Meta (`Muse-Glimmer-30B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Lab's open model for always-on **local** agents (released 2026-08-10, Apache 2.0) — a ~29.6B dense model with a dedicated ~1.8B ViT-G/14 perception encoder, distilled from Muse Spark and purpose-built for autonomous agentic tasks on consumer hardware: multi-step reasoning, reliable tool use, multimodal understanding and failure recovery in one package that runs offline. 4-bit quants fit a 24/32GB GPU (17–20GB), and the bundled DFlash drafter gives up to 3.1x speculative-decoding speedup (233 tok/s on RTX 5090).
- **Provider / access:** Open weights `meta-models/Muse-Glimmer-30B` (+ GGUF, assistant/drafter, ExecuTorch repos) on Hugging Face; vLLM, SGLang, llama.cpp, ExecuTorch; Hugging Face Inference Endpoints preset; OpenClaw/Hermes-agent compatible.
- **Release / knowledge:** 2026-08-10; knowledge cutoff 2026-01-04.
- **IDs:** `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131,072+ tokens (128K default; Meta docs note longer contexts supported).
- **Modalities:** Text + image in → text out (up to 4,096 visual tokens/image); effort low/medium/high/xhigh; temp 1.0 / top-p 0.95 / top-k 64 recommended; 100+ languages.
- **Pricing (as of 2026-10-09):** free open weights (Apache 2.0) — self-hosted on ~17–20GB VRAM.
- **Architecture:** Dense causal transformer, 29.6B incl. vision encoder; 52 layers, hidden 6656, [Local×3, Global] attention with 2048 sliding window, GQA 32/2 heads, SwiGLU; RoPE θ=500K on local layers.

### Raw benchmarks found

(All from Meta's model card, high-reasoning config, vs Gemma4-31B Thinking and Qwen3.6-27B Thinking.)

Agentic / tool use:

- MCP Atlas (Public): **75.5** (field-best of the three; Gemma4-31B 54.2, Qwen3.6-27B 62.5)
- DeepSearch QA: **74.6** (field-best)
- τ³-Banking: **23.5** (field-best of the three)
- WildClawBench: **47.6** (field-best); GAIA2: **43.3** (field-best)
- GDPval-AA v2: **Elo 953** (behind Qwen3.6-27B's 1141)
- OSWorld-Verified: **65.9** (behind Qwen3.6-27B's 75.6)
- SkillsBench (with skills): 44.3%
- Claw-Eval / ClawProBench / Toolathlon: **no verified public score found**

Coding:

- SWE-bench Verified: **76.0** (vs Qwen3.6-27B 77.2, Gemma4-31B 66.6); SWE-bench Pro: **51.2** (field-best of the three)
- Terminal-Bench 2.1 (Terminus-2): **51.7**; SciCode: **43.6** (field-best)
- Vibe Code Bench / LiveCodeBench / DeepSWE: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (AA): **83.5**; HLE text (AA): **22.0**; AIME 2026: **94.7** (field-best); IFBench: **77.0** (field-best)

Multimodal:

- MMMU-Pro: **74.0**; CharXiv Reasoning: **78.8** (field-best); ScreenSpot-Pro: 75.4%; OmniDocBench v1.5: 75.8%

Long context:

- AA-LCR: **80.0** (field-best of the three); Beam 128K: **65.1** (field-best); no MRCR/RULER figure

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP-Atlas 75.5%, DeepSearchQA 74.6% and WildClawBench 47.6% are genuinely strong for a 30B local model; capped by τ³-Banking 23.5%, GDPval-AA Elo 953 and OSWorld-Verified 65.9%.
- **Reasoning: 66/100.** GPQA 83.5%, AIME 94.7% and IFBench 77.0% are solid for the size class; capped by HLE 22.0% and no ARC-AGI/LiveBench numbers.
- **Context window: 64/100.** 131K-token window is the 100K–200K band; AA-LCR 80.0% and Beam-128K 65.1% (both field-best vs the two comparison models) support mid-band, but no MRCR/RULER figure exists.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 74.0% and CharXiv 78.8%; no video/audio input or non-text output.
- **Coding: 66/100.** SWE-bench Verified 76.0% and SWE-bench Pro 51.2% (field-best of its comparison set) are respectable local-model coding; capped by Terminal-Bench 2.1 51.7%, SciCode 43.6% and no Vibe/DeepSWE data.
- **Cost efficiency: 100/100.** Free Apache-2.0 weights running on a single 24/32GB consumer GPU (the methodology's $0 = 100 tier) — the entire pitch is local, private, zero-marginal-cost inference.
- **Overall Score: 66/100.** Best-fit recommendation: the strongest local-first agentic model at 30B — Pro-class MCP-Atlas tool use and SWE-Pro for its size on a single consumer GPU; pair with a hosted frontier model for heavy document/coding work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Meta Muse Glimmer model page + HuggingFace model card + NVIDIA NIM card + dev.meta.ai docs, HF blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark.md`, using the same headings.
