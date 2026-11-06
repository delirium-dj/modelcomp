# Nemotron 3.5 Bolt 74B-A9B — findings by Flint

- Source: NVIDIA Nemotron / Hugging Face / Artificial Analysis / BenchLM / Model Beats / Opper / MindStudio / arXiv / Terminal-Bench
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open (OpenMDW) hybrid Mamba-Transformer vision-language MoE for local agentic workloads; compressed from the Nemotron 3.5 Super VL 120B-A12B to 74B total / 9B active, with native 2-bit quantization (~22 GB) so it fits 24 GB of local GPU memory and runs everyday agentic tasks locally on RTX / DGX Spark.
- **Provider / access:** Open weights (OpenMDW License Agreement v1.1) on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF` + LiLiCorr drafter); local deployment via llama.cpp / vLLM / Ollama / LM Studio / Unsloth; agent harnesses: Hermes, OpenClaw; no hosted API.
- **Release / knowledge:** Released 2026-11-06 (technical report arXiv:2610.33039); knowledge cutoff not verified in sources found.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`; local 24GB build `Nemotron-3.5-Bolt-74B-A9B-24GB`; GGUF `Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF`.
- **Context window:** 256K tokens (NVIDIA / AA / HF); max output not clearly specified (HF: prompt + visual inputs + conversation history + generated response share context).
- **Modalities:** Text, image, video input → text output; reasoning; agentic tool use; web & terminal interactions.
- **Pricing (as of 2026-11-06):** Open weights; self-host/deploy free (local GPU); no hosted API; fine-tuning routes (QLoRA etc.) priced separately.
- **Architecture:** Hybrid Mamba-Transformer LatentMoE, 74B total / 9B active; Star Elastic compression from Super VL 120B-A12B (12B active) + 2-bit quantization-aware distillation + LiLiCorr speculative drafter; C-RADIO v4-H vision encoder; 84 TPS on RTX Spark.

### Raw benchmarks found

Official (NVIDIA / arXiv / Hugging Face):

- PinchBench: **87.8%** (#1 open in class; #4 overall).
- WebArena: 50.9% (#2 open in class).
- BrowseComp: 66.8% (#2 open in class).
- GDPVal-AA v2: 28.47.
- Terminal-Bench 2.1: **51.0%** (#67).
- MCP Atlas: **52.2%** (#11).
- τ³-bench Banking: 17.0%.
- SciCode: 39.7%; GPQA-D: **86.4%**; HLE (no tools): 25.3%; CritPt: 4.3%.

Independent (Artificial Analysis / BenchLM / Model Beats / Opper / MindStudio / aireleasetracker / Terminal-Bench):

- Artificial Analysis: Bolt within 2 points of Nemotron 3 Ultra on Intelligence Index (21 vs 23); Super 3.5 VL highest-scoring open weights US model (26); AA Intelligence Index v4.3.2 for Bolt: **21.4** (#211); AA-Briefcase Elo **912**; AA-Omniscience accuracy 17.1% / non-hallucination 56.3%; AA-LCR **69.7%**; CritPt **4.3%**; GDPval-AA v2.1 **23.9**; Terminal-Bench 4.0: 0%; SciCode: 40%; Agentic: 7.8; HLE: 24.6%; AutomationBench: 16%.
- BenchLM: Nemotron 3.5 Bolt 74B-A9B overall **42.8/100**, rank #132/1004; Context 256K; TB2.1 51.0%; τ³ 17.0%; BrowseComp 66.8; PinchBench 87.8; MCP Atlas 52.2; GDPval-AA 24.0; AA-SciCode 39.7; AA-LCR 69.7; CritPt 4.3; GPQA-D 86.4; HLE 25.3; AA-HLE 24.7; coverage 13 of 724 (partial → conservative).
- Model Beats: Bolt 74B-A9B GDPVal-AA-V2 28.47 Elo; GPQA Diamond Reasoning 86.4% (#63); HLE 25.3% (#71); MCP Atlas 52.2% (#11); PinchBench 87.8% (#4); SciCode 41.0% (#6); τ³ Banking 17.0% (#8); Terminal-Bench 2.0 Coding 51.0% (#67); composite Elo 1952.2 (#99).
- MindStudio (independent hands-on): strong vision reasoning / scientific diagrams; struggled with agentic coding and multilingual translation; "capable reasoning and vision model but not yet reliable enough for production coding tasks without human review".
- Opper: AA Intelligence Index v4.3.2 category scores — Reasoning 48, Knowledge 53, Long context 60, Composite 54; Coding: TB4.0 0%, SciCode 40%; Agentic 7.8; Agentic & knowledge: AutomationBench 16%, GDPval 24%, GDP.pdf 3%, Briefcase Elo 912; Science & reasoning: HLE 25%, Long-context reasoning 70%.

### Cross-source comparison

- NVIDIA official vs independent (AA / BenchLM / Model Beats / MindStudio): NVIDIA reports Bolt outperforming leading models with similar memory footprints on GDPVal v2, BrowseComp, TB2.1; independent AA numbers put the Intelligence Index at 21.4 vs Super VL 26 — different composite axes, not directly comparable.
- NVIDIA vs MindStudio: NVIDIA claims strong agentic coding; independent hands-on found shaky coding → conflicting signals on the coding / tool-use story.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic: PinchBench **87.8%**, MCP Atlas **52.2%**, TB2.1 **51.0%**, GDPVal-AA 24–28, WebArena 50.9, BrowseComp 66.8, τ³ 17.0; cap: local / edge deployment class, mid-frontier absolute.
- **Reasoning: 55/100.** GPQA-D **86.4%**, HLE 25.3, CritPt 4.3, AA-LCR 69.7, AA Intelligence 21.4; cap: low HLE / CritPt ceiling.
- **Context window: 78/100.** 256K tokens (200K–500K band per methodology).
- **Multimodal: 65/100.** Text, image, video in → text out; vision-language backbone.
- **Coding: 55/100.** TB2.1 **51.0%**, SciCode 39.7, PinchBench 87.8; cap: independent hands-on found shaky agentic coding / production reliability.

- **Cost efficiency: 80/100.** Open weights (OpenMDW) + local deployment (self-host free).
- **Overall Score: 63/100.** Mean of the five quality dims (60 + 55 + 78 + 65 + 55) / 5 = **63**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/nemotron-3.5-bolt-74b-a9b)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (NVIDIA Nemotron research blog, Hugging Face, arXiv technical report) plus independent benchmarks/reviews (Artificial Analysis, BenchLM, Model Beats, Opper, MindStudio) — three independent web searches.
- Reference URLs:
  - [NVIDIA Nemotron 3.5 Bolt 74B-A9B 24GB: A Hybrid Vision-Language Model for Local AI](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/)
  - [Nemotron 3.5 Bolt 74B-A9B Benchmark Scores & Performance | BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Nemotron 3.5 Bolt 74B — Benchmarks, Specs & ... | Artificial Analysis](https://artificialanalysis.ai/articles/nemotron-3-5-super-and-bolt)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
