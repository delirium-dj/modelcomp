# Nemotron 3.5 Super VL — findings by Qwen 3.8 Flash

- Source: NVIDIA (`nvidia/nemotron-3.5-super-vl`), cross-checked against Artificial Analysis, H Company (Holotron) independent evals, OpenRouter, eigent
- Date: 2026-10-17 (UTC); second pass 2026-11-04 (UTC) — **the provisional coding/context gaps are filled**: **SWE-bench Verified 71.1%** (BenchLM Oct-29 board, #62 of 112; armes range 70.7–71.9 — cross-corroborated), **LiveCodeBench v6 89.0%**, **GPQA (no tools) 87.0%**, **RULER @1M 94.7%** (single-source, flagged) → Coding **72→76**, Context **90→92**; AA Index **26** reconfirmed current (kie: "26 vs 58" vs Opus 5.5; **$0.25 per Index task** vs $5.98) → **Overall 80.6→82**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight 120B-A12B hybrid Mamba-Transformer MoE vision-language model (Oct 2026) for always-on enterprise agents; one checkpoint unifies reasoning, tool use, and text/image/document/video understanding. Current leading US open-weight model on the AA Intelligence Index (26).
- **Provider / access:** Open weights (base, post-trained, NVFP4 checkpoints) on Hugging Face / ModelScope; hosted APIs via NVIDIA NIM (`build.nvidia.com` free tier), OpenRouter (`nvidia/nemotron-3.5-super-vl`, Chat Completions), Together AI, Baseten, fal.
- **Release / knowledge:** 2026-10-15 release; knowledge cutoff not announced.
- **IDs:** `nvidia/nemotron-3.5-super-vl` (OpenRouter/NIM); NVFP4 checkpoint `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`.
- **Context window:** 1,048,576 tokens total (OpenRouter model page; hybrid Mamba-attention backbone for long-context). Max output not separately published — unverified.
- **Modalities:** text + image + document + video in; text out; reasoning yes; tool calls yes (GUI + MCP/API); JSON mode yes (response_format accepted on OpenRouter).
- **Pricing (as of 2026-10-17):** open weights (self-host free); NVIDIA hosted free tier on build.nvidia.com; paid per-token rates on OpenRouter/NIM not confirmed in this pass. NVFP4 4-bit path runs on a single H200 / DGX Spark.
- **Architecture:** 120B total / 12B active MoE, hybrid Mamba-2 + attention, distilled from Nemotron 3 Ultra; ~26T pretraining tokens, ~3.8M post-training samples + RL; OpenMDW-style permissive open-weight license.

### Raw benchmarks found

> Vendor numbers (NVIDIA dev blog) triangulated with H Company's independent
> OSWorld/AutomationBench runs and Artificial Analysis. VentureBeat/eigent frame the
> "beat frontier" claims as post-training-dependent, not out-of-the-box.

Agent / tool use:

- Hermes Bench: **63.44%** (NVIDIA; > Nemotron 3 Ultra 56.33%)
- LangChain behavioral Evals: **87.05%** (NVIDIA; > Nemotron 3 Ultra 84.3%)
- OSWorld (computer use, base checkpoint): **51.9%** (H Company, mean of 3 runs); post-trained Holotron4 Super reaches 77.0
- OSWorld 2.1 (base, partial credit): **28.4%** (H Company); AutomationBench (base): **23.0%** (H Company)
- Throughput: **>600 TPS** on AA agentic tasks (Baseten endpoint); up to 5× other open models in class on single GPU (NVIDIA)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (AA model page; leading US open-weight). Note: one AA social post cites 21.4 for a different effort/reasoning config — the AA model page value 26 is used here.
- Indic benchmarks (MILU 1.5, Indic GPQA/AIME/FrontierMath/MBPP): highest of the compared set vs Sarvam-105B and Gemma-4-31B-It (NVIDIA; absolute values chart-only)

Coding:

- SWE-bench / Terminal-Bench: **outperforms Nemotron 3 Super across multiple setups** (NVIDIA; no absolute public score found)
- CursorBench/PinchBench: not reported for Super VL (those are the Bolt 74B edge models)

Long context / vision:

- CharXiv (chart reasoning): **80.8%**, rising to **84%** with Python code interpretation (NVIDIA)
- OCRBench v2: **among the top open models on the leaderboard** (NVIDIA; exact score not published)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong for an open model — Hermes 63.4, LangChain 87, native GUI+MCP tool calling — but base OSWorld 51.9 (H Company) keeps it below the frontier agentics tier; the 77.0 OSWorld figure requires H Company's post-training, not the shipped default.
- **Reasoning: 75/100.** AA Index 26 leads US open-weights and it's distilled from Nemotron 3 Ultra, yet 26 sits well below the ~57 closed-frontier band; capped by that absolute gap.
- **Context window: 90/100.** Full 1,048,576-token window with a hybrid Mamba backbone and cross-turn context reuse (prefix + Mamba-state caching) — best-in-class long-context design for agentic loops; max-output figure unverified is the only gap. *(Revised by the 2026-11-04 second pass from 90/100 to **92/100**: RULER @1M 94.7% published — measured retrieval at full length, though under the ≥98% top-band bar; single-source, flagged.)*
- **Multimodal: 88/100.** Text/image/document/video in one checkpoint is the model's headline strength — CharXiv 80.8 (84 with code) and top-open OCJBench v2 placement — but no image/audio output.
- **Coding: 72/100.** Beats Nemotron 3 Super on SWE-bench/Terminal-Bench and wins Indic MBPP, but NVIDIA published no absolute coding scores, so the ceiling stays provisional pending third-party reproduction. *(Revised by the 2026-11-04 second pass from 72/100 to **76/100**: SWE-V 71.1% (BenchLM-verified) + LiveCodeBench v6 89.0% + IOI 2025 570 published — see second-pass update below.)*
- **Cost efficiency: 90/100.** Open weights (permissive license), NVFP4 4-bit on a single H200/DGX Spark, 5× agentic throughput in class, and a free NVIDIA hosted tier make it one of the cheapest capable VL models to run.
- **Overall Score: 80.6/100.** Half-up mean of the five quality dims (78+75+90+88+72)/5 = 80.6. Best fit: self-hosted or NVIDIA-hosted multimodal document/video agents and tool-calling workflows where a single open checkpoint replaces a text+vision pipeline on your own infrastructure. *(Revised by the 2026-11-04 second pass to **82/100**: with Coding 72→76 and Context 90→92 the mean is (78+75+92+88+76)/5 = 409/5 = 81.8 → half-up 82.)*

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-17). Pass-1's two explicitly provisional inputs — "no absolute public SWE/TB coding score found" and unverified long-context depth — have been filled by third-party boards.

**Sources:** coding — https://benchlm.ai/benchmarks/swe-bench-verified (fetched 2026-11-04, board dated 2026-10-29: **"Nemotron 3.5 Super VL 120B A12B — 71.1%" #62 of 112**, NVFP4 twin identical, catalog rows: 1M context, OpenMDW-1.1 license) and https://armes.ai/docs/models/nvidia/nemotron-3.5-super-vl (**"SWE-Bench Verified: 70.7–71.9%, LiveCodeBench v6: 89.0%, GPQA (no tools): 87.0%, RULER @1M: 94.7%, PinchBench: 90.0%, IFBench: 81.7%, IOI 2025: 570"**) — the ranges overlap the BenchLM row, corroboration holds · index currency — https://kie.ai/blog/nemotron-3-5-super-vl-vs-claude-opus-5-5 (2026-10-16: **"26 vs 58 Index"**, **"$0.25 per Intelligence Index task against $5.98 … roughly 24 benchmark tasks for the price of one Opus 5.5"**) — pass-1's AA-page value of 26 remains the live reading (the 21.4 alternate-config figure stays noted side-by-side; no v5.0.1 re-run row displaced 26 for this id in this pass) · ecosystem — https://developer.nvidia.com/blog/…nemotron-3-5-super-vl… (release 2026-10-15 unchanged) and https://www.lmsys.org/blog/2026-10-15-nvidia-nemotron-3-5-super-vl/ (SGLang day-0 support; **>600 TPS** on AA agentic tasks via Baseten — reproduces pass-1's throughput row) and https://x.com/NVIDIAAI/status/2110749840141652118 ("10000 coding tasks up to 4x faster while maintaining strong SWE-Bench Pro accuracy" — vendor, directional).

**What moved and how it was resolved:**

- **Coding 72→76.** The missing absolutes are now dual-sourced: SWE-V 71.1 (BenchLM, independent board) within armas' 70.7–71.9 range, plus LiveCodeBench v6 89.0 (a near-frontier contest row) and IOI 2025 570. Held at 76, not higher: no Terminal-Bench absolute for the id, SWE-Pro framing still vendor-only, and the board class (71.1 ≈ Qwen3.5-27B's 72.4, scored Coding 70) supports a high-mid, not frontier band.
- **Context 90→92.** RULER @1M 94.7% is measured retrieval at the full window — the strongest long-context proof available for this id — but single-source this pass and under the methodology's ≥98%-at-512K ceiling bar, so a two-point lift with the provenance flag.
- **Reasoning 75, Tool 78, Multimodal 88 — held.** GPQA 87.0 (armes) is consistent with the AA-26 placement below the 90-band bar; H Company base-OSWorld 51.9 remains the binding independent agentic check; no new visual rows.
- **Cost 90 reconfirmed.** $0.25 per Index task (AA-measured) is the quantified version of pass-1's qualitative cheap-to-run case. Excluded from Overall.
- **Overall 80.6→82.** (78+75+92+88+76)/5 = 81.8 → half-up **82**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — NVIDIA developer blog, Artificial Analysis model page/article, H Company (Holotron) Lab Notes independent evals, eigent explainer, OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Provisional gaps closed with dual-sourced absolutes: SWE-V 71.1 (BenchLM) / 70.7–71.9 (armes), LCB v6 89.0 → Coding 72→76; RULER @1M 94.7 (single-source, flagged) → Context 90→92; AA Index 26 and $0.25/task reconfirmed → Overall 80.6→82. Pass-1 text preserved verbatim above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
