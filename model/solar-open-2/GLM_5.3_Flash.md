# Solar Open 2 — findings by GLM 5.3 Flash

- Source: Upstage (`solar-open-2` — Solar Open 2 250B-A15B)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B; listed by Artificial Analysis as "Solar Open2 250B")
- **Short description:** Upstage's open-weight agentic LLM built for office productivity, document-intensive work, and coding. Hybrid-Attention MoE (linear attention + NoPE) delivers small-model inference cost at 250B scale with a 1M-token context; strong English/Korean/Japanese trilingual coverage.
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/upstage/Solar-Open2-250B`), self-hosted via vLLM (Upstage fork, OpenAI-compatible `/v1` Chat Completions plus Anthropic-compatible `/v1/messages` for Claude Code) or Transformers; official NotaAI INT4/NVFP4 quantizations available. No first-party hosted API pricing verified.
- **Release / knowledge:** 2026-08-12 release (AA); knowledge cutoff February 1, 2026.
- **IDs:** `upstage/Solar-Open2-250B` (self-host); no Free ID on OpenCode Zen verified.
- **Context window:** 1M tokens (BenchLM concurs; Hugging Face model card "Context Length 1M"); recommended client-side max_tokens up to 256K, reasoning block capped at 131,072 tokens.
- **Modalities:** text in, text out (no image/audio/video input); reasoning yes (`reasoning_effort="high"`, cap 131,072); tool calls yes (OpenAI function-calling interface, MCP via tool calling); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-11):** no verified public hosted-API pricing found; open weights under the Upstage Solar License (commercial use allowed; derivative models must carry the "Solar" name prefix and "Built with Solar" attribution).
- **Architecture:** 250B total (250,287,794,944) / 15B active MoE; 48 layers, hybrid attention `[Softmax, Linear×3] × 12`, NoPE positional encoding, 321 experts (8 routed + 1 shared), 196,608 vocab; ~12T pretraining tokens on NVIDIA B200 GPUs (2M GPU hours); initialized by selective weight transfer (2.3%) from Solar Open 1 (102B); min 4× H200 / recommended 8× H200.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10, still unranked with 15 of 625 rows) corroborates every Upstage model-card row identically and adds two new rows (IFBench 80%, HRM8K 92.2% — Korean math). Scores are carried, not moved.

Agent / tool use:

- Terminal Bench Hard: **28.3%** (corroborated); MCP-Atlas: **58.2%** (corroborated); τ³ (banking): **19.6%**; APEX-Agents: **16.6%** (corroborated)
- GDPval-AA v2: **1128 Elo** (Upstage HF card, prior pass); Toolathlon / Claw-Eval: no verified public score found
- IFBench: **80%** (new — strong instruction following)

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (corroborated); HLE (w/o tools): **28.8%** (corroborated); AA-LCR (long-context reasoning): **62.3%** (corroborated); CritPt: no verified public score found
- AIME2026: **95.7%**; HMMT2602: **93.9%** (corroborated); MMLU-Pro: **86.2%** (corroborated)
- Korean: KMMLU-Pro **78.4%**, CLIcK **90.7%**, Ko-GDPval **86.8%**, **HRM8K 92.2%** (new) (Upstage HF card)
- Artificial Analysis Intelligence Index: **25 (estimated) / #29 of 117 in class** (AA model page, prior pass); Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **70.4%** (corroborated); LiveCodeBench (v6): **92.4%** (corroborated — clears the ~80% frontier marker)
- ArtifactsBench: **55.9%** (prior pass); Terminal Bench Hard: **28.3%** (corroborated)
- DeepSWE / SciCode / SWE-Atlas: no verified public score found

Long context:

- AA-LCR: **62.3%** (corroborated); no MRCR/RULER retrieval reported — the hybrid linear-attention stack (NoPE, only 12/48 layers with KV cache) is the design rationale for 1M, not a measured retrieval score

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration plus two in-band fills (IFBench 80%, HRM8K 92.2%).

- **Tool use: 55/100.** GDPval-AA v2 1128 Elo and MCP-Atlas 58.2% land squarely in the 50–70 mid-band (GDPval ~900–1200), but τ³ banking 19.6%, Terminal Bench Hard 28.3%, and APEX-Agents 16.6% are weak for an agentic specialist — real-world tool execution caps the score.
- **Reasoning: 70/100.** GPQA Diamond 86.3% and exceptional math (AIME2026 95.7%, HMMT2602 93.9%) approach frontier references (GPQA 90%+), HLE 28.8% is mid-band, and AA-LCR 62.3% shows only moderate long-context reasoning — capping below frontier; IFBench 80% reinforces the instruction-following strength.
- **Context window: 88/100.** 1M native context (top tier, BenchLM concurs), but the only measured long-context signal (AA-LCR 62.3%) is mediocre and no MRCR/RULER ≥98%-retrieval-at-512K+ result is published, so the score sits at the bottom of the ≥1M band rather than 95–100.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 78/100.** SWE-bench Verified 70.4% and LiveCodeBench v6 92.4% are strong (LiveCode clears the ~80% frontier marker), but Terminal Bench Hard 28.3% and missing DeepSWE/SciCode numbers keep terminal/agentic coding below the 90–100 frontier band.
- **Cost efficiency: 85/100.** Provisional — no verified public hosted-API pricing found; scored on open-weights self-host economics (15B active per token, official INT4/NVFP4 quantizations for 4×H200-class nodes). Not counted toward Overall.
- **Overall Score: 61.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (55 + 70 + 88 + 15 + 78) / 5 = 306/5 = 61.2 — unchanged. Best-fit recommendation: efficient open-weight pick for trilingual (EN/KO/JA) document and math-heavy work at 1M context; escalate to a stronger agentic model for terminal-heavy or tool-dense loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (verification pass: the freshly fetched benchlm.ai Solar Open 2 page corroborates all rows identically and remains unranked with 15 rows; the prior 2026-10-09 pass on the Upstage HF card + AA model pages remains the evidence base); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
