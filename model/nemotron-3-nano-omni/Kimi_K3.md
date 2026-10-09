# Nemotron 3 Nano Omni — findings by Kimi K3

- Source: NVIDIA (`nemotron-3-nano-omni-30b-a3b-reasoning`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Nano Omni (30B-A3B-Reasoning)
- **Short description:** NVIDIA's omni-modal open-weights model (2026-04-28) — first Nemotron with native audio alongside text/image/video in, built for document intelligence, ASR, long audio-video understanding, and agentic computer use. Hybrid Mamba-Transformer-MoE, 30B total / 3B active.
- **Provider / access:** Open weights on Hugging Face (BF16, FP8, NVFP4 checkpoints, NVIDIA Open Model License); NVIDIA build.nvidia.com API (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`); NIM/self-host. NVFP4 fits ~25 GB VRAM (consumer GPU tier).
- **Release / knowledge:** 2026-04-28 (HF blog + technical report arXiv:2604.24954); knowledge cutoff not published.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-{BF16,FP8,NVFP4}` (HF); `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (NVIDIA NIM). No OpenCode Zen Free ID verified.
- **Context window:** 256K tokens (benchlm); audio trained to 1,200s inputs, LLM context supports 5+ hours of audio per the report; MMLongBench-Doc exercises 100+ page documents.
- **Modalities:** text/image/video/audio in → text out; reasoning (Thinking) variants; GUI grounding + tool calling trained via NeMo-Gym RL; structured outputs supported.
- **Pricing (as of 2026-10-09):** open weights = $0 self-host; NIM hosted endpoints priced per provider tier (build.nvidia.com). Most cost-efficient open video model on MediaPerf leaderboard (vendor claim).
- **Architecture:** 30B total / ~3B active: 23 Mamba SSM layers + 23 MoE layers (128 experts, top-6 + shared) + 6 GQA layers; C-RADIOv4-H vision encoder (dynamic native-res, up to 13,312 patches/image), Conv3D tubelets + EVS token pruning for video, Parakeet-TDT-0.6B-v2 audio encoder via 2-layer MLP projector.

### Raw benchmarks found

(NVIDIA technical report unless noted; AA = independent Artificial Analysis rows via benchlm)

Agent / tool use:

- OSWorld: **47.4%** (tech report; vs 11.0% Nemotron Nano V2 VL, 29.0% Qwen3-Omni)
- τ²-bench: **45.3%** (tech report); ScreenSpot-Pro: **57.8%** (GUI grounding)
- GDPval-AA: **416 Elo** (AA — low end of scale)
- Terminal-Bench / Claw-Eval / MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (tech report) / **46.9%** (AA — large vendor-vs-independent gap)
- MMLU-Pro: **77.3%** (tech report); AIME 2025: **82.1%** (tech report)
- AA-HLE: **4.8%**; CritPt: **0.0%**; AA Intelligence Index: **10.3** (AA)
- AA-Omniscience: accuracy **15.2%**, hallucination **85.7%** (AA — poor closed-book reliability)

Coding:

- LiveCodeBench v5: **63.2%** (tech report); SciCode: **32%** (tech report); AA Coding Index: **13.8** (AA — weak agentic coding)

Long context / multimodal:

- MMLongBench-Doc: **57.5%** — best-in-class (vs 38.0% V2 VL, 49.5% Qwen3-Omni); OCRBenchV2-En: **65.8%**
- CharXiv: **76.3%** (report table; HF blog shows 63.6 describing the reasoning variant — use report), AI2D: **88.5%**, RefCOCO avg: **90.5%**
- Video-MME (w/o sub): **72.2%**; WorldSense: **55.4%**; DailyOmni: **74.1%**
- VoiceBench: **89.39**, #4/44 overall, top open entry (advbench 100, IF-Eval 88.66); HF Open ASR: **5.95** WER
- AA-MMMU-Pro: **53.2%** (independent); MMMU: **70.8%** (report)
- AA-LCR: **39.7%** (AA — mid)
- Efficiency: up to **9x** throughput / 7.4–9.2x system efficiency vs same-interactivity open omni models (vendor)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** Real agentic computer-use ability for 3B-active (OSWorld 47.4%, ScreenSpot-Pro 57.8%, τ² 45.3%) with RL-trained tool calling; capped by weak GDPval-AA (416 Elo) and no Terminal-Bench/MCP coverage.
- **Reasoning: 55/100.** Report numbers (GPQA 72.2, AIME 82.1) contradict independent AA runs (GPQA 46.9, HLE 4.8, Omniscience hallucination 85.7%) — the independent gap heavily caps this; closed-book world knowledge is unreliable.
- **Context window: 74/100.** 256K window with best-in-class long-document results (MMLongBench-Doc 57.5%) and 5+ h audio support; AA-LCR 39.7% is only mid-pack — strong multimodal long-context, average text retrieval.
- **Multimodal: 88/100.** Genuinely omni input (text+image+video+audio), VoiceBench #4/44 and best open ASR, leading document/GUI/video scores — the broadest input coverage in its class; text-only output caps it below full-duplex models.
- **Coding: 50/100.** LiveCodeBench 63.2% is respectable, but AA Coding Index 13.8 and SciCode 32% show it isn't a coding agent; not its design center.
- **Cost efficiency: 95/100.** Open weights (BF16/FP8/NVFP4), ~25 GB VRAM NVFP4 path to a consumer card, 9x vendor-claimed multimodal throughput — near-free at the margin.
- **Overall Score: 66/100.** Mean of 62/55/74/88/50 = 65.8 → 65.8. Best fit: on-prem/document-heavy enterprise pipelines (contracts, ASR, meeting archives, GUI automation) needing auditable open omni intake at commodity-GPU cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (NVIDIA technical report + Hugging Face launch blog, benchlm.ai consolidated table with independent Artificial Analysis rows, build.nvidia.com model card, anton-abyzov/nemotron-3-nano-omni-bench independent head-to-head); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-vs-independent discrepancies are flagged inline.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
