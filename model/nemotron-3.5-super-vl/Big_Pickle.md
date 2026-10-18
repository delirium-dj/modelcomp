# Nemotron 3.5 Super VL — findings by Big Pickle

- Source: NVIDIA (`nemotron-3.5-super-vl`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight 120B-total/12B-active vision-language MoE for always-on multimodal agents (tool use, documents, screenshots, short video), released 2026-10-15 alongside the Bolt 74B-A9B/E4B edge models. Successor to Nemotron 3 Super; not an alias of any other entry.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl`; OpenRouter `nvidia/nemotron-3.5-super-vl` (plus a `:free` route — 8 API providers on AA); NanoGPT `nvidia/nemotron-3.5-super-vl`; DeepInfra, Lambda, NVIDIA NIM (`build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b`), ModelScope, Hugging Face weights. All hosted routes found are OpenAI-compatible Chat Completions.
- **Release / knowledge:** released 2026-10-15 (NVIDIA newsroom + technical report dated 2026-10-14, `Nemotron 3.5 Super and Lightning`); knowledge cutoff not disclosed.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` (BF16), `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` (quantized, 75.1 GB), served name `nemotron-3.5-super-vl`. No Zen Free ID (`meta.json` `noFreeId: true`); an OpenRouter free route exists.
- **Context window:** up to 1,000,000 tokens native (Hugging Face model card: "supports context lengths up to 1M tokens"; NVIDIA NIM model specs state "Up to 1M tokens"); hosts serve less — NanoGPT 262,144 shared context / 16,384 max output; NVIDIA NIM endpoint shows 262,144 context for the NVFP4 endpoint (specification field). Max output varies by host; not consistently published.
- **Modalities:** text, image, document, video in; text out; reasoning/thinking toggle (served with `thinking disabled` in NVIDIA's own throughput runs); tool calling; structured/JSON output; native Multi-Token Prediction (MTP) for speculative decoding. No audio input.
- **Pricing (as of 2026-10-18):** NanoGPT $0.15 in / $0.50 out per 1M, cache read $0.02 (repo `meta.json`, matches NanoGPT listing); Artificial Analysis aggregate $0.23/$0.57; OpenRouter $0.10/$0.40 plus a free variant; self-host free under OpenMDW-1.1. NVIDIA AI Enterprise production license ~$4,500/GPU/year (VentureBeat via tech-insider.org).
- **Architecture:** 120B total / 12B active (DeepInfra counts 121B/12.7B active; 22 of 512 routed experts per MoE layer + shared expert), Mamba-2–Transformer hybrid MoE (8 attention layers of 88), C-RADIO vision encoder, Multi-Token Prediction head for speculative decoding; base model Nemotron 3 Super Base; license **OpenMDW-1.1** (open weights, commercial use allowed).

### Raw benchmarks found

> Primary source is NVIDIA's own NIM/HF model card table (BF16 / NVFP4 columns) unless marked independent. Values differ by quantization and harness; both columns kept.

Agent / tool use:

- Terminal-Bench 2.1: **66.70%** (BF16) / **60.80%** (NVFP4) (NVIDIA NIM card; BenchLM mirrors 66.7%) — quantization costs ~6 pts
- τ²-bench: airline **76.50 / 75.75**, retail **69.24 / 69.30**, telecom **73.19 / 73.19** (NVIDIA NIM card)
- τ³-bench Banking: **18.88 / 17.78** (NVIDIA NIM card) — weak
- GDPval-AA v2: **1211 / 1206** (Elo, NVIDIA NIM card)
- BrowseComp: **78 / 77.5** (NVIDIA NIM card) — unusually high vs text-only peers
- AutomationBench-AA: **32.44 / 32.30**; AA-Briefcase-Lite: **1137 / 1252** (NVIDIA NIM card, offline runs)
- Hermes Bench: **63.44%**, LangChain Evals: **87.05%** (NVIDIA technical blog, vs Nemotron 3 Ultra 56.33% / 84.3%)
- MCP-Atlas / OSWorld / Claw-Eval: no verified public score found (model too new; BenchLM agentic lane "44 (Estimated · #60/128)")

Reasoning / knowledge:

- GPQA Diamond: **89.52 / 89.90** (NVIDIA NIM card; BenchLM mirrors 89.5/89.9)
- HLE (text-only): **31.79 / 31.44** (NVIDIA NIM card)
- MMLU-ProX (multilingual): **76.91 / 73.76**; MMLU-Pro: **83.7** (BenchLM citing the technical report)
- AA-Omniscience accuracy / hallucination rate / index: **26.20% / 30.0% / 4.03** (NVIDIA NIM card)
- CritPt: **10.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **26 / 26.5** (Artificial Analysis model page; NanoGPT quotes 26.5 — "highest among US open-weights models" per AA, ahead of Nemotron 3 Ultra 23 and Nemotron 3 Super 13)
- AA-LCR: **68.62 / 67.69** (NIM card), legacy unversioned **69.0%** (AA via NanoGPT); no AA-LCR v1.1 or RULER ≥256K published for 3.5 Super VL (predecessor Nemotron 3 Super reported RULER-100 @256K 96.30, @512K 95.67, @1M 91.75 — not attributable to this model to this model); no AA-LCR v1.1 or RULER ≥256K published for 3.5 Super VL (predecessor Nemotron 3 Super reported RULER-100 @256K 96.30, @512K 95.67, @1M 91.75 — not attributable to this model to this model)
- IFBench: **70.86 / 71.50**; LMArena v3 proxy **52.67**; WMT24++ **84.80** (NVIDIA NIM card)
- AIME / HMMT: no verified public score found for this model (the 90.2/93.7 figures on `docs.nvidia.com/.../super3/evaluate.html` belong to the predecessor **Nemotron 3 Super**, not 3.5 Super VL — not attributable to this model to this model)

Coding:

- SWE-bench Verified: **71.10 / 71.07** (NVIDIA NIM card; BenchLM mirrors 71.1%)
- SWE-bench Pro: **51.78 / 51.30** (NVIDIA NIM card)
- SWE-bench Multilingual: **67.72 / 67.00** (NVIDIA NIM card)
- LiveCodeBench v6: **88.22 / 87.41** (NVIDIA NIM card) — its strongest coding number
- SciCode (subtask): **47.13 / 46.61** (NVIDIA NIM card)
- DeepSWE [offline]: **24.65 / 18.2**; Terminal Bench 4 [offline]: **1 / 1.5** (NVIDIA NIM card) — near-zero on the newest harnesses

Multimodal:

- CharXiv (chart reasoning): **80.8%**, **84%** with Python code interpretation (NVIDIA technical blog)
- MMLongBench-Doc: **62.82**; V*: **85.60 / 85.95**; BabyVision: **29.60 / 29.51** (NVIDIA NIM card)
- OCRBench v2: "one of the top open models" (NVIDIA blog — no exact number published → no verified public score found)

Long context:

- AA-LCR v1.1 **68.62%**, GraphWalks **89.71 / 90.34** (NVIDIA NIM card). No RULER-100 numbers for *this* model (the 96.3% @256K / 95.7% @512K rows on NVIDIA's docs belong to Nemotron 3 Super).

Speed (independent, Artificial Analysis via Miraflow 2026-10-18): ~630 tok/s on a pre-release NVFP4 endpoint at 100K-token prompts; live AA model page 388 tok/s (rank 1 of 28 compared, open-weights median 102), TTFT 0.75–1.8 s, ~46K output tokens per Index task (60% fewer than Nemotron 3 Super) but flagged as more verbose than typical open peers. NVIDIA claims 5× faster task completion than peers of its class.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 69–77% across three domains, BrowseComp 78%, GDPval-AA 1211 Elo and Hermes 63.4% (above Nemotron 3 Ultra) are solid mid-tier; capped by τ³-Banking 18.9%, AutomationBench 32.4%, TB2.1 at 66.7% (60.8% quantized) — well below the 88%+ frontier reference — and no MCP-Atlas/OSWorld/Claw-Eval score.
- **Reasoning: 74/100.** GPQA-D 89.5% and AA-LCR 68.6% are near-frontier, but HLE 31.8% (under the 40% frontier ref), AA Intelligence Index 26.5 (mid band 20–35), CritPt 10.9% and a 30% hallucination rate cap it.
- **Context window: 90/100.** Native 1M per the Hugging Face card lands in the ≥1M tier, but hosted routes cap far lower (NanoGPT 262.1K, 16.4K max output) and no ≥512K retrieval measurement exists for this model — AA-LCR 68.6% and GraphWalks 89.7% are the only retrieval evidence.
- **Multimodal: 84/100.** Text + image + document + **video** in, text out — the video/document input puts it in the 75–90 band; CharXiv 80.8–84%, V* 85.6, top-open standing on OCRBench v2 support the upper half. No audio input and text-only output keep it under 90; BabyVision 29.6 and MMLongBench-Doc 62.8 drag it down.
- **Coding: 76/100.** LiveCodeBench v6 88.2% is frontier-class, but SWE-bench Verified 71.1% and Pro 51.8% are mid-pack, SciCode 47.1%, and it collapses on DeepSWE (24.7%) and Terminal Bench 4 (1%) — the 80%+ LiveCode-but-weak-SciCode shape maps to the 65–75 mid band, scored at its top end for the LCB number.
- **Cost efficiency: 95/100.** $0.15/$0.50 (NanoGPT) down to OpenRouter $0.10/$0.40 — far below the ~$0.60/$2.20 ≈ 92 reference — plus an OpenRouter free route and free self-hosting under OpenMDW-1.1; not 100 because the evaluated Zen tier is paid (`noFreeId`).
- **Overall Score: 78.4/100.** Half-up mean of the five quality dims (68+74+90+84+76)/5 = 78.4 — best-fit recommendation: the cheapest strong multimodal/video agent with 1M-native context and 388 tok/s, ideal for high-volume always-on pipelines, but not a frontier reasoner or SWE agent.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-18
- Method: public internet research (NVIDIA NIM/HF model cards + technical report + technical blog, Artificial Analysis, BenchLM, NanoGPT/OpenRouter/Lambda listings, independent coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
