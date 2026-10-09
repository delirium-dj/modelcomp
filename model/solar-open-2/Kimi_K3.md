# Solar Open 2 — findings by Kimi K3

- Source: Upstage (`Solar-Open2-250B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B)
- **Short description:** Upstage's open-weight sovereign foundation model for agentic enterprise work, released 2026-07-22. 250B total / 15B active MoE with a 1M-token hybrid-attention context, trained on verified agent scenarios (search, MCP tool calling, coding, office work); official Korean/English/Japanese support.
- **Provider / access:** Hugging Face `upstage/Solar-Open2-250B` (Upstage Solar License — commercial use + fine-tune/distill permitted); Upstage API/Console playground; Hermes official model list; vLLM/Transformers serving guides in the card. Deploys on 4x H200 (BF16) or 2x H200 (quantized).
- **Release / knowledge:** 2026-07-22 (Upstage blog, kblip); technical report arXiv:2607.20062; knowledge cutoff not published.
- **IDs:** `upstage/Solar-Open2-250B` (HF); Upstage API model name per console docs. No OpenCode Zen Free ID verified.
- **Context window:** 1M tokens via hybrid attention: 48 layers = 12 GQA (NoPE full-softmax) + 36 linear-attention (fixed-state) layers — KV cache grows on only 25% of layers (Upstage blog/tech report).
- **Modalities:** text in → text out (no vision/audio in the release); tool calling (MCP) + JSON; reasoning-style long-horizon agent training, no separate "thinking" API documented.
- **Pricing (as of 2026-10-09):** open weights ($0 marginal, ~2x H200 hosting); Upstage API priced per token on console (flash-tier); Korean tokenizer uses 50–80% of the tokens global models need for the same text (vendor).
- **Architecture:** 250B total / 15B active per token; 320 routed experts + 1 shared, top-8 routing; Selective Weight Transfer init from Solar Open 100B (~1.7x training-token efficiency); trained on verified agentic data with an own synthesis/verification pipeline.

### Raw benchmarks found

(Upstage launch blog + tech report, vendor-harness; kblip relay of the comparison table vs DeepSeek V4 Flash)

Agent / tool use:

- MCP-Atlas: **58.2%** (top of its comparison group, tied DeepSeek V4 Flash)
- IFBench: **80.0** (vs Solar Open 100B's 57.7)
- APEX-Agents: **16.6** (highest in the vendor's comparison)
- Ko-GDPval (Korean real-work, 170 scenarios/58 professions): **86.8** — 0.16 pts behind 1.6T DeepSeek-V4-Pro, ahead of MiMo-V2.5-Pro
- Tau3 / Terminal-Bench / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.26** (+20.1p over Solar Open 100B)
- HMMT: **93.94**; AIME 2026: **95.7** (vs DeepSeek V4 Flash 97.0)
- MMLU-Pro: **86.2** (best among comparable models in the vendor table; vs DSV4-Flash 85.9)
- HLE (no tools): **28.8%** (kblip/tech-report table; vs DSV4-Flash 32.3)
- Korean benchmark average: **85.43** (vs DSV4-Flash 84.9, GPT-5.4 mini 80.8)

Coding:

- LiveCodeBench v6: **92.42** (+35.9p over Solar Open 100B; par with DSV4-Flash 92.3)
- ArtifactsBench: **55.9** (vs DSV4-Flash 61.0)
- SWE-bench Verified / Terminal-Bench: no verified public score found

Long context:

- 1M window via hybrid linear attention with NoPE extrapolation claims; efficiency ablations in tech report (210B tokens to 100B-class MMLU with 58% of the tokens). No MRCR/RULER/AA-LCR public number found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Agent-first training shows: MCP-Atlas 58.2, IFBench 80, APEX-Agents best-in-comparison, Ko-GDPval 86.8 ≈ 6x-larger models; capped by missing independent Tau/Terminal-Bench evidence.
- **Reasoning: 80/100.** GPQA-D 86.26, HMMT 93.94, AIME 2026 95.7, MMLU-Pro 86.2 — roughly DeepSeek-V4-Flash level; HLE 28.8% no-tools keeps it below frontier.
- **Context window: 86/100.** 1M tokens with a purpose-built hybrid linear/NoPE attention design and published efficiency ablations; capped by absence of independent long-context retrieval scores.
- **Multimodal: 15/100.** Text-only input/output in the release (no vision/audio documented) — the methodology floor for text-only.
- **Coding: 82/100.** LiveCodeBench 92.42 matches DeepSeek V4 Flash and leads its comparison class; coding-agent training loops are documented; ArtifactsBench 55.9 trails DSV4-Flash; no SWE-bench Verified published.
- **Cost efficiency: 90/100.** Open weights with a commercial license on 2x H200 quantized; 15B active per token; exceptionally token-efficient Korean tokenizer.
- **Overall Score: 69/100.** Mean of 82/80/86/15/82 = 69.0 → 69. Best fit: Korean/English/Japanese on-prem agent deployments (office + tool-calling + repo work) where sovereignty and per-call cost dominate; not for vision or text-out-frontier reasoning tasks.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (Upstage official launch blog + tech report arXiv:2607.20062, kblip.com third-party comparison, openmodelmap listing); scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks are vendor-harness unless noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
