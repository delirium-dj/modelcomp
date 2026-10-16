# Nemotron 3.5 Super VL — findings by GLM 5.3 Flash

- Source: NVIDIA (`Nemotron-3.5-Super-VL-120B-A12B`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open multimodal agentic flagship released 2026-10-15 — a 120B/12B-active hybrid Mamba-2-attention MoE that unifies reasoning, tool use, and text/image/document/video understanding for always-on enterprise agents; distilled from Nemotron 3 Ultra and now the leading US open-weight model on the Artificial Analysis Intelligence Index.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`), OpenRouter, ModelScope, NVIDIA NIM; hosted by DeepInfra, Fireworks, Together, Lambda, CoreWeave, Baseten and others. OpenCode Zen offers the free tier `opencode/nemotron-3.5-super-vl-free` (live roster, fetched 2026-10-16); no paid plain-ID Zen route listed.
- **Release / knowledge:** released 2026-10-15 (NVIDIA blog + AA article, same day); no knowledge-cutoff statement found.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B(-NVFP4)` (HF), `opencode/nemotron-3.5-super-vl-free` (Zen free tier).
- **Context window:** 1M tokens (Artificial Analysis model details); NVFP4 release runs on a single DGX Spark. Verified via AA's independent listing plus NVIDIA's technical blog deployment guidance.
- **Modalities:** text + image + document (PDF) + video in; text out; reasoning yes; tool calls yes (validated across Hermes, LangChain, OpenClaw, OpenCode, Pi, Codex, Claude harnesses); JSON mode not explicitly confirmed in sources consulted.
- **Pricing (as of 2026-10-16):** free on Zen's limited-time `nemotron-3.5-super-vl-free` route (Zen free-tier caveat: prompts may be used to improve the model; no zero-retention guarantee). Self-hosting free under the open license (weights + datasets + recipes; OpenMDW-1.1 per independent coverage). No verified per-token price found for hosted providers in consulted sources — unpriced here.
- **Architecture:** open weights; 120B total / 12B active parameters, hybrid Mamba-2 + attention MoE with C-RADIO vision encoder (per independent technical coverage), distilled from Nemotron 3 Ultra; trained on ~26T tokens, post-trained on ~3.8M samples plus RL; NVFP4 quantization is near-lossless (within 0.1 AA points of BF16 per AA).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **26.5** — leading US open-weight model (independent AA evaluation; edges out Inkling Small 25.7, Nemotron 3 Ultra 23, Muse Glimmer 17)
- Hermes Bench: **63.44%** (official; Nemotron 3 Ultra: 56.33%)
- LangChain Evals: **87.05%** (official; Ultra: 84.3%)
- OCRBench v2: top open model (official, leaderboard-linked)
- PinchBench / BrowseComp class leadership claims are for sibling Bolt 74B-A9B, not this model
- Terminal-Bench: no absolute public score found (official states it outperforms Nemotron 3 Super across setups)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AA Index component detail: not individually published in text for this model (26.5 composite, independent)
- Indic benchmarks (MILU 1.5, Indic GPQA/AIME/FrontierMath/MBPP): highest of compared open models (official charts, values not textually citable)

Coding:

- SWE-bench: no absolute public score found (official states outperformance vs Nemotron 3 Super across multiple setups)
- APEX-SWE: Mercor post-trained variant only (not base model)
- AA Index 26.5 includes Terminal-Bench 4.0 + SciCode components (independent, composite only)

Long context:

- 1M window per AA; no public MRCR/RULER number found; long-context datasets released but no published retrieval score

### Normalized scores (1–100)

- **Tool use: 84/100.** Hermes 63.44% and LangChain 87.05% above Nemotron 3 Ultra, composite AA 26.5 (includes Terminal-Bench 4.0/AutomationBench-AA), ~630 tok/s at 100K prompts — fastest measured 20+ model; capped by absent absolute Terminal-Bench/SWE-bench numbers.
- **Reasoning: 76/100.** AA Index 26.5 independently verifies mid-frontier reasoning (2× predecessor Nemotron 3 Super); no public GPQA/HLE to test the ceiling.
- **Context window: 85/100.** 1M-token window verified by AA's independent listing; measured long-context retrieval unpublished.
- **Multimodal: 82/100.** Text + image + PDF + video in — rare coverage; CharXiv 80.8% (84% with code interpretation), top-of-leaderboard OCR, video understanding; no image/audio output.
- **Coding: 75/100.** Distilled from Ultra with coding-focused losses and beats Nemotron 3 Super on SWE-bench/Terminal-Bench per official claims, but no absolute public score exists — provisional.
- **Cost efficiency: 90/100.** $0 on Zen's free route (limited-time, prompt-data caveat) and free self-hosting of near-lossless NVFP4 weights on one DGX Spark; hosted per-token pricing unverified.
- **Overall Score: 80/100.** Mean of (84+76+85+82+75)/5 = 80.4 → 80. Best fit: self-hostable multimodal always-on agents (documents, charts, video) at extreme throughput; avoid as a sole coding workhorse until absolute SWE/TB numbers land.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (official NVIDIA blog + developer technical blog, independent Artificial Analysis evaluation, build.nvidia.com model card listing, marktechpost/unite.ai/aicoder coverage; one-day-old release, all sources agree on specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
