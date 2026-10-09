# Solar Open 2 — findings by GLM 5.3 Flash

- Source: Upstage (`solar-open-2` — Solar Open 2 250B-A15B)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B; listed by Artificial Analysis as "Solar Open2 250B")
- **Short description:** Upstage's open-weight agentic LLM built for office productivity, document-intensive work, and coding. Hybrid-Attention MoE (linear attention + NoPE) delivers small-model inference cost at 250B scale with a 1M-token context; strong English/Korean/Japanese trilingual coverage.
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/upstage/Solar-Open2-250B`), self-hosted via vLLM (Upstage fork, OpenAI-compatible `/v1` Chat Completions plus Anthropic-compatible `/v1/messages` for Claude Code) or Transformers; official NotaAI INT4/NVFP4 quantizations available. No first-party hosted API pricing verified as of 2026-10-09.
- **Release / knowledge:** 2026-08-12 release (AA); knowledge cutoff February 1, 2026.
- **IDs:** `upstage/Solar-Open2-250B` (self-host); no Free ID on OpenCode Zen verified.
- **Context window:** 1M tokens (Hugging Face model card "Context Length 1M", corroborated by AA's 1M listing); recommended client-side max_tokens up to 256K, reasoning block capped at 131,072 tokens.
- **Modalities:** text in, text out (no image/audio/video input); reasoning yes (`reasoning_effort="high"`, cap 131,072); tool calls yes (OpenAI function-calling interface, MCP via tool calling); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** no verified public hosted-API pricing found; open weights under the Upstage Solar License (commercial use allowed; derivative models must carry the "Solar" name prefix and "Built with Solar" attribution).
- **Architecture:** 250B total (250,287,794,944) / 15B active MoE; 48 layers, hybrid attention `[Softmax, Linear×3] × 12`, NoPE positional encoding, 321 experts (8 routed + 1 shared), 196,608 vocab; ~12T pretraining tokens on NVIDIA B200 GPUs (2M GPU hours); initialized by selective weight transfer (2.3%) from Solar Open 1 (102B); min 4× H200 / recommended 8× H200.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench Hard: **28.3%** (Upstage HF card)
- MCP-Atlas: **58.2%** (Upstage HF card)
- τ³ (banking): **19.6%** (Upstage HF card)
- APEX-Agents: **16.6%** (Upstage HF card)
- GDPval-AA v2: **1128 Elo** (Upstage HF card)
- Artificial Analysis Intelligence Index: **25 (estimated) / #29 of 117 in class** (AA model page; open-weight median 18)
- Toolathlon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (Upstage HF card)
- HLE (w/o tools): **28.8%** (Upstage HF card)
- AA-LCR (long-context reasoning): **62.3%** (Upstage HF card)
- AIME2026: **95.7%** (Upstage HF card)
- HMMT2602: **93.9%** (Upstage HF card)
- MMLU-Pro: **86.2%** (Upstage HF card)
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Korean: KMMLU-Pro **78.4%**, CLIcK **90.7%**, Ko-GDPval **86.8%** (Upstage HF card, in-house where marked †)

Coding:

- SWE-bench Verified: **70.4%** (Upstage HF card)
- LiveCodeBench (v6): **92.4%** (Upstage HF card)
- ArtifactsBench: **55.9%** (Upstage HF card)
- Terminal Bench Hard: **28.3%** (Upstage HF card)
- DeepSWE / SciCode / SWE-Atlas: no verified public score found

Long context:

- AA-LCR: **62.3%** (Upstage HF card); no MRCR/RULER retrieval reported — the hybrid linear-attention stack (NoPE, only 12/48 layers with KV cache) is the design rationale for 1M, not a measured retrieval score

### Normalized scores (1–100)

- **Tool use: 55/100.** GDPval-AA v2 1128 Elo and MCP-Atlas 58.2% land squarely in the 50–70 mid-band (GDPval ~900–1200), but τ³ banking 19.6%, Terminal Bench Hard 28.3%, and APEX-Agents 16.6% are weak for an agentic specialist — real-world tool execution caps the score.
- **Reasoning: 70/100.** GPQA Diamond 86.3% and exceptional math (AIME2026 95.7%, HMMT2602 93.9%) approach frontier references (GPQA 90%+), HLE 28.8% is mid-band, and AA-LCR 62.3% shows only moderate long-context reasoning — capping below frontier.
- **Context window: 88/100.** 1M native context (top tier), but the only measured long-context signal (AA-LCR 62.3%) is mediocre and no MRCR/RULER ≥98%-retrieval-at-512K+ result is published, so the score sits at the bottom of the ≥1M band rather than 95–100.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 78/100.** SWE-bench Verified 70.4% and LiveCodeBench v6 92.4% are strong (LiveCode clears the ~80% frontier marker), but Terminal Bench Hard 28.3% and missing DeepSWE/SciCode numbers keep terminal/agentic coding below the 90–100 frontier band.
- **Cost efficiency: 85/100.** Provisional — no verified public hosted-API pricing found; scored on open-weights self-host economics (15B active per token, official INT4/NVFP4 quantizations for 4×H200-class nodes). Not counted toward Overall.
- **Overall Score: 61/100.** Mean of the five quality dims (55 + 70 + 88 + 15 + 78) / 5 = 61.2 → 61. Best-fit recommendation: efficient open-weight pick for trilingual (EN/KO/JA) document and math-heavy work at 1M context; escalate to a stronger agentic model for terminal-heavy or tool-dense loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (Artificial Analysis model pages, official Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
