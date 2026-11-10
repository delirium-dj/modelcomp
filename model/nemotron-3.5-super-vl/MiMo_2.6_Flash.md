# Nemotron 3.5 Super VL — findings by MiMo 2.6 Flash

- Source: NVIDIA (`NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`; evaluated route OpenCode Zen `opencode/nemotron-3.5-super-vl`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-16)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-16 (Overall 81). Fresh sources this pass: the **Artificial
> Analysis model page** (it did not exist as of 2026-10-16 — the previous
> pass recorded "no verified public score found for this exact model"), AA's
> launch article (2026-10-15), llm-stats and eesel provider listings. BenchLM
> still has no page for this model (404, re-checked). Changes: **Cost
> efficiency 85→88** — hosted pricing is no longer unverified: AA measures a
> **$0.17 / $0.50** per-1M median across 10 providers (71% cache discount,
> $0.52 per AA-Index task), with eesel listing $0.10/$0.40 and llm-stats
> $0.20/$1.00 at some hosts — all well under the $0.60/$2.20 ≈ 92 anchor,
> alongside free open weights; the "pricing unverified" deduction is
> resolved (remaining deductions: real self-host GPU cost, 2.56× output
> verbosity, no $0 Zen tier). Held: Tool 72 (no new GDPval/Tau3/OSWorld/
> MCP rows — AA's page publishes no model-specific tool rows in its
> rendered benchmarks), Reasoning 87 (the previously-missing **AA
> Intelligence Index row now exists**: **26** at launch on the v4.3.2-era
> scale, re-measured to **14** on v5.0.1 — #1 in its open-weight size class
> (median 4) but absolute level still well under the 60+ reference; recorded,
> not credited or penalized — HLE 31.79 and GPQA 89.52 anchors unchanged),
> Context 95 (AA confirms 1M; llm-stats shows a 262K provider listing —
> deployment-dependent window noted), Multimodal 80 (AA lists text+image in;
> no MMMU/Video-MME row published), Coding 72 (no new rows). Overall 81
> unchanged (Cost excluded).

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weights multimodal agent model (120B total / 12B active MoE) for coding, document intelligence, web research, and video understanding in one model — released 2026-10-15, distilled from Nemotron 3 Ultra with added SWE and visual post-training. Not an alias.
- **Provider / access:** NVIDIA NIM / Build.NVIDIA.com API trial; HuggingFace weights (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` and `-NVFP4`); hosted by Baseten, Fireworks, Together, Nebius, Lambda, and others. Evaluation route OpenCode Zen `opencode/nemotron-3.5-super-vl` (Chat Completions).
- **Release / knowledge:** Build.NVIDIA.com + HuggingFace 2026-10-15 (model card); training mix through late 2025; knowledge cutoff not posted.
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b` (NIM); BF16 and NVFP4 checkpoints on HuggingFace. No $0-forever Zen free tier verified; NVIDIA API trial available under NVIDIA API Trial Terms.
- **Context window:** up to 1,000,000 tokens total (shared across inputs, tool results, and response; deployment/memory-dependent per NVIDIA blog). Max output not posted.
- **Modalities:** text, images, and video (sampled frames) in → text out; reasoning mode configurable via chat template (`enable_thinking`); tool calling / structured outputs; native Multi-Token Prediction speculative decoding. No audio input; PDFs handled as images (no native PDF channel documented).
- **Pricing (as of 2026-10-16, hosted rates verified 2026-11-10):** open weights free under OpenMDW-1.1 (commercial use allowed); hosted-endpoint pricing now verified — AA median across 10 providers **$0.17 in / $0.50 out per 1M** (71% cache discount, $0.52 per AA-Index task), eesel lists $0.10/$0.40, llm-stats $0.20 in / $0.10 cached / $1.00 out at some hosts. NVIDIA API trial available under NVIDIA API Trial Terms; NeMo fine-tuning supported.
- **Architecture:** 120B total / 12B active parameters; Mamba-2–Transformer hybrid MoE (512 routed experts per MoE layer) with C-RADIO vision encoder + vision-language connector; base model Nemotron 3 Super; BF16 and NVFP4 (quantization-aware distillation) releases.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.70%** (BF16, NVIDIA model card; NVFP4 60.80%; NVIDIA launch chart shows 60.7 — conflict flagged by LuminaBench, card figure used)
- BrowseComp: **78** (model card; launch chart 78.9 — same LuminaBench-flagged discrepancy)
- GDPval-AA / Tau3-Banking / Tau2-Bench / OSWorld / MCP-Atlas / Toolathon: no verified public score found
- Throughput note: >600 TPS on Artificial Analysis agentic tasks (Baseten endpoint); up to 5× agentic throughput vs same-size open models on one GPU (NVIDIA blog)

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (BF16 model card; NVFP4 89.90%)
- HLE (text-only): **31.79%** (model card)
- GraphWalks (long-context multi-hop retrieval): **89.71%** (BF16 model card; vs Nemotron 3 Ultra 63.3 on NVIDIA's chart — its headline strength)
- **AA Intelligence Index: 26** at launch (AA article 2026-10-15, v4.3.2-era — "leading US open weight model") → **14** on the current v5.0.1 scale (AA model page, checked 2026-11-10 — **the page now exists**; #1 in its open-weight size class where the median is 4; 2.567 output/input ratio, 119M output tokens per run). Absolute level remains well under the 60+ frontier reference — recorded, neither credited nor penalized this pass.
- LCR / MLCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-bench Pro: **51.78%** (model card — above Nemotron 3 Ultra 49.7, below Qwen3.8 Flash-Next 60.4 on NVIDIA's chart)
- SWE-bench Multilingual: **67.72%** (model card)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Multimodal (document/vision):

- CharXiv reasoning: **80.82%** (model card)
- OCRBench v2 (English): **68.12%** (model card)
- MMLongBench-Doc: **62.82%** (model card)
- MMMU / MathVista / Video-MME / OmniDocBench: no verified public score found

Long context:

- GraphWalks 89.71% is the only measured retrieval-at-depth number; no MRCR / RULER published.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 66.70% sits above the methodology's mid band (TB2.1 45–60 → 50–70) but well under the ~88% frontier reference; BrowseComp 78 and >600 TPS agentic throughput support a capable web/tool agent; capped by zero GDPval-AA, Tau3, OSWorld, or MCP-Atlas rows and by the NVFP4 build's TB2.1 drop to 60.80%.
- **Reasoning: 87/100.** GPQA Diamond 89.52% is a hair under the ≥90% frontier anchor and HLE 31.79% is strong for an open 12B-active model (frontier reference 40%+); GraphWalks 89.71% (vs 63.3 for Nemotron 3 Ultra) is near-leading long-context reasoning; capped by HLE below frontier, no AA Intelligence Index/LCR/CritPt row, and Qwen3.8 Flash-Next leading NVIDIA's launch chart on GPQA/HLE.
- **Context window: 95/100.** Verified 1M-token window (≥1M tier 95–100); GraphWalks 89.71% evidences real depth, but no ≥98%-at-512K retrieval curve (MRCR/RULER) is published, and effective capacity is deployment-dependent, so it holds the band floor.
- **Multimodal: 80/100.** Text + image + video in → text out puts it in the +video/PDF-in band (75–90); supported by CharXiv 80.82%, OCRBench v2 68.12%, and MMLongBench-Doc 62.82%; capped by no audio input, text-only output, no MMMU/Video-MME confirmation, and video arriving as sampled frames.
- **Coding: 72/100.** SWE-bench Pro 51.78% and SWE-bench Multilingual 67.72% are solid mid-band results for a 12B-active open model (above Nemotron 3 Ultra, below Qwen3.8 Flash-Next's 60.4 on Pro); capped by no SWE-bench Verified, LiveCodeBench, SciCode, or DeepSWE rows and TB2.1 66.70% under the 85%+ coding frontier reference.
- **Cost efficiency: 88/100.** Open weights under OpenMDW-1.1 make the token price $0 for self-hosting (commercial use allowed) and NVIDIA's NIM trial is free-to-try; hosted rates are now verified and cheap — AA median **$0.17/$0.50** across 10 providers (71% cache discount), eesel $0.10/$0.40 — well under the $0.60/$2.20 ≈ 92 anchor → 88 (was 85; the "hosted pricing unverified" deduction is resolved). Remaining deductions: running a 120B MoE still costs real GPU compute (2×H100 / 1×H200 / DGX Spark configurations), output verbosity is 2.56× its input rate per AA-Index run, and no permanent $0 Zen tier was confirmed.
- **Overall Score: 81/100.** Mean of the five non-cost dims (72 + 87 + 95 + 80 + 72) / 5 = 81.2 → 81. Best-fit: the default self-hostable multimodal workhorse for document intelligence, chart/OCR pipelines, and long-context research agents (GraphWalks 89.7), where one 12B-active model replaces a separate VLM + LLM stack — not for frontier coding (SWE-Pro 51.78) or top-band terminal agentic work (TB2.1 66.70).

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: Artificial Analysis model page + launch article — both absent/uncited at the 2026-10-16 pass — llm-stats and eesel provider/pricing listings; BenchLM re-checked, still no page (404). Previous pass used NVIDIA NIM model card, NVIDIA developer blog 2026-10-15, HuggingFace model page, LuminaBench independent launch analysis — conflicts compared (LuminaBench-flagged model-card-vs-launch-chart discrepancy on Terminal-Bench 2.1 and BrowseComp — card figures used). Scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-16.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

