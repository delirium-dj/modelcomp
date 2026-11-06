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

- Terminal-Bench 2.1: **66.7%** (NEW, BF16 model card via BenchLM Nov 5 — fills the previously-missing absolute TB row, solid); τ²-bench Airline: **76.5%** (NEW); τ³-bench: **18.9%** (NEW — weak); GDPval-AA: **1211** / 33.1% normalized (NEW); BrowseComp: **78%** (NEW)
- Artificial Analysis Intelligence Index: **26.5** — leading US open-weight model (independent AA evaluation; edges out Inkling Small 25.7, Nemotron 3 Ultra 23, Muse Glimmer 17); Nov 5 refresh reads **13.6%** — an AA Index **version rebase** (v4.3.2→v5.0-class scale), documented per RULES, never averaged across scales
- Hermes Bench: **63.44%** (official; Nemotron 3 Ultra: 56.33%)
- LangChain Evals: **87.05%** (official; Ultra: 84.3%)
- OCRBench v2: top open model (official, leaderboard-linked)
- PinchBench / BrowseComp class leadership claims are for sibling Bolt 74B-A9B, not this model

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (NEW, BF16 model card via BenchLM Nov 5 — fills the previously-missing GPQA; just under the 90% frontier reference); HLE: **29.2%** / **31.8%** w/o tools (NEW); AA-HLE: **30.7%** (NEW); AA-LCR: **68.6%** and CritPt: **10.9%** (NEW); AA-Omniscience: 26.2% accuracy / 30.0% hallucination / 4.0 index (NEW); IFBench: **70.9%** (NEW); Apex Shortlist: **88.4%** (NEW)
- Indic benchmarks (MILU 1.5, Indic GPQA/AIME/FrontierMath/MBPP): highest of compared open models (official charts, values not textually citable)

Coding:

- SWE-bench Verified: **71.1%** (NEW, BF16 model card via BenchLM Nov 5 — fills the previously-missing absolute SWE-V row, mid-frontier); LiveCodeBench v6: **88.2%** (NEW — strong); SWE-bench Pro: **51.8%** (NEW — weak); SWE Multilingual: **67.7%** (NEW); AA-SciCode: **47.8%** (NEW)
- APEX-SWE: Mercor post-trained variant only (not base model)

Long context:

- 1M window per AA; AA-LCR **68.6%** now measured (NEW — mid); long-context datasets released; no MRCR/RULER at length

### Normalized scores (1–100)

- **Tool use: 84/100.** Hermes 63.44% and LangChain 87.05% above Nemotron 3 Ultra, composite AA 26.5 (includes Terminal-Bench 4.0/AutomationBench-AA), ~630 tok/s at 100K prompts — fastest measured 20+ model; the Nov 5 absolute rows corroborate the placement (TB2.1 66.7%, τ²-Airline 76.5%, BrowseComp 78%) while τ³ 18.9% and GDPval 33.1% keep the provisional caveat lifted but the score unchanged.
- **Reasoning: 78/100.** CHANGED from 76 — the Nov 5 model-card rows fill the prior evidence vacuum: GPQA-D 89.5% (just under the 90% frontier reference), HLE 29.2–31.8%, Apex Shortlist 88.4% and IFBench 70.9% land above the old composite-only read; AA-LCR 68.6% is mid, CritPt 10.9% weak, and the AA Index rebase (26.5→13.6) is documented, not averaged.
- **Context window: 85/100.** 1M-token window verified by AA's independent listing; AA-LCR 68.6% now measured (mid); no MRCR/RULER at length.
- **Multimodal: 82/100.** Text + image + PDF + video in — rare coverage; CharXiv 80.8% (84% with code interpretation), top-of-leaderboard OCR, video understanding; no image/audio output.
- **Coding: 77/100.** CHANGED from 75 — the Nov 5 model-card rows fill the provisional gap: SWE-V 71.1% (mid-frontier), LCB 88.2% (strong), SWE-ML 67.7%, with SWE-Pro 51.8% and AA-SciCode 47.8% capping below frontier.
- **Cost efficiency: 90/100.** $0 on Zen's free route (limited-time, prompt-data caveat) and free self-hosting of near-lossless NVFP4 weights on one DGX Spark; hosted per-token pricing unverified.
- **Overall Score: 81/100.** CHANGED from 80 — mean of (84 + 78 + 85 + 82 + 77)/5 = 406/5 = 81.2 → 81, raised as the Nov 5 model-card publication converts the two provisional discounts (Reasoning, Coding) into measured evidence. Best fit: self-hostable multimodal always-on agents (documents, charts, video) at extreme throughput.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM's full Nemotron-3.5-Super-VL-120B-A12B page (fetched 2026-11-05, 28 rows — the BF16 model card was published after the one-day-old first pass) converts the prior provisional caps into measured evidence: GPQA-D 89.5%, SWE-V 71.1%, LCB 88.2%, TB2.1 66.7%, τ²-Airline 76.5%, BrowseComp 78%; AA Index re-read 26.5→13.6% (v5.0-class rebase, documented not averaged); Reasoning 76→78, Coding 75→77, Overall 80→81; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
