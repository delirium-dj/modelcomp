# Solar Open 2 — findings by Step 5 Preview

- Source: Upstage (`upstage/Solar-Open2-250B`, released 2026-07-23)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B; Korea's sovereign foundation-model effort)
- **Short description:** Upstage's agent-first open-weight flagship, built under Korea's national foundation-model initiative and delivered with a technical report. Its architecture is the story: a **hybrid-attention MoE** that interleaves one softmax layer among every three linear-attention layers (`[Softmax, Linear×3] × 12`) with **NoPE** (no rotary embeddings) and a gated-delta rule extended to negative eigenvalues — a design that buys a 1M-token window at roughly a quarter of the memory cost of an all-softmax stack. Training was made cheap by selectivity: only the 5.69B shared skeleton survived from Solar Open 1 (2.3% of weights), everything else was re-initialized, and a 20T-token pool was curated down to a 10T mixture; twelve domain specialists were then consolidated by Multi-teacher On-Policy Distillation. On English benchmarks it leads comparably sized open-weight models on MMLU-Pro (86.2), LiveCodeBench (92.4) and APEX-Agents, and on the Korean suite it records the highest average of **any** model compared (85.4), including fast-tier closed APIs.
- **Provider / access:** Hugging Face (`upstage/Solar-Open2-250B`) + INT4/NVFP4/INT4-GlobalPruned quants by NotaAI; deployment min 4× H200 (BF16), 2× H200 quantized; beta demo at open2-beta.upstage.ai.
- **Release:** 2026-07-23.
- **Context window:** 1M tokens.
- **Modalities:** Text in → text out; English, Korean, Japanese.
- **Pricing:** open weights (Upstage Solar License, Apache-2.0-based: commercial use and derivatives permitted, but derivatives must prefix "Solar" and display "Built with Solar" attribution); no hosted per-token rate published.
- **Architecture:** 250B total / 15B active MoE; 48 layers; hidden 4096; 321 experts (320 routed top-8 + 1 shared); ~12T pre-training tokens; 2M B200 GPU-hours.

### Raw benchmarks found

Vendor (technical report arXiv:2607.20062; Solar Open 100B / Command A+ / Mistral Medium 3.5 / MiMo-V2.5 / DeepSeek-V4-Flash):

Knowledge & reasoning:

- MMLU-Pro: **86.2** (best in table; DS-V4-Flash 85.9, MiMo-V2.5 84.6)
- GPQA-Diamond: **86.3** (DS-V4-Flash 88.9); HLE (w/o tools): **28.8** (DS-V4-Flash 32.3)
- LiveCodeBench v6: **92.4** (best in table); HMMT2602: 93.9; AIME2026: 95.7; ArtifactsBench: 55.9

Instruction following & long context:

- Multi-Challenge: 61.0; IFBench: **80.0** (DS-V4-Flash 80.3); AA-LCR: **62.3** (DS-V4-Flash 63.7)

Agent:

- SWE-bench Verified: **70.4** (Mistral Medium 3.5 69.6, MiMo-V2.5 73.0, DS-V4-Flash 73.8)
- Terminal-Bench Hard: **28.3** (MiMo-V2.5 41.7); APEX-Agents: **16.6** (best in table)
- MCP-Atlas: **58.2** (MiMo-V2.5 63.9); τ³ banking: 19.6; GDPval-AA v2: **1,128 Elo** (DS-V4-Flash 1,187, MiMo-V2.5 1,145)

Korean suite (in-house benchmarks marked †):

- Average: **85.4** — highest of all models compared (DS-V4-Flash 84.9, GPT-5.4 mini 80.8, Claude Haiku 4.5 69.6)
- KMMLU-Pro 78.4; CLIcK **90.7**; HAE-RAE 73.8; Ko-AIME'25† 97.7; HRM8K 92.2; KBank-MMLU† **80.8**; KBL 75.5; KorMedMCQA 93.0; **Ko-GDPval† 86.8** (DeepSeek-V4-Pro 86.9 at 6× the size)

### Normalized scores (1–100)

- **Tool use: 56/100.** MCP-Atlas 58.2% and APEX-Agents 16.6% (best in its size class) are real but mid-band; τ³-banking 19.6%, GDPval Elo 1,128 and Terminal-Bench Hard 28.3% cap it — competitive for 250B, not for the frontier.
- **Reasoning: 74/100.** MMLU-Pro 86.2% (class-best), GPQA 86.3%, AIME 95.7%, HMMT 93.9% are solid upper-mid-band; HLE 28.8% and AA-Omniscience absence keep it below the frontier tier.
- **Context window: 84/100.** A 1M-token window is the ≥1M band (95–100) with AA-LCR 62.3% — the hybrid-attention design is built for it, but retrieval evidence is mid-band.
- **Multimodal: 12/100.** Text-only (text in → text out) — the methodology's text-only band (10–20).
- **Coding: 68/100.** LiveCodeBench 92.4% (class-best) and SWE-bench Verified 70.4% are strong; Terminal-Bench Hard 28.3% and ArtifactsBench 55.9% show the agentic-coding gap vs DeepSeek-V4-Flash.
- **Cost efficiency: 95/100.** Open weights under a commercially usable license at 15B active parameters, deployable on 2× H200 quantized — near the methodology's ~$0.6/$2.2 ≈ 92 range with self-hosting freedom; the attribution-required license and 4-GPU minimum (BF16) are the docks.
- **Overall Score: 59/100.** Best-fit recommendation: the Korean-sovereign agent workhorse — best-in-class Korean (85.4 avg, Ko-GDPval 86.8 vs a 1.6T rival) with class-best MMLU-Pro and LiveCodeBench at 15B active, MIT-adjacent open weights; text-only and mid-band on agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Upstage launch blog, Hugging Face model card, technical report arXiv:2607.20062, Korean press coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Open_3.md`, using the same headings.
