# Nemotron 3 Nano Omni — findings by GLM 5.3 Flash

- Source: NVIDIA (`nemotron-3-nano-omni-30b-a3b-reasoning`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (Nemotron-3-Nano-Omni-30B-A3B-Reasoning)
- **Short description:** NVIDIA's open omni-modal understanding model (released 2026-04-28): a 30B-A3B hybrid Mamba-Transformer-MoE with native text, image, video and audio input — the first Nemotron multimodal with native audio. Built for document intelligence, ASR, long audio-video understanding, agentic computer use, and general multimodal reasoning. BenchLM ranks it #168 of 889 (32.15) with 29 of 625 rows.
- **Provider / access:** NVIDIA Build free API endpoint (`opencode/nemotron-3-nano-omni` on Zen); open checkpoints on Hugging Face (BF16 / FP8 / NVFP4: `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-*`). OpenAI-compatible NIM endpoint.
- **Release / knowledge:** Released 2026-04-28 (verified via Hugging Face NVIDIA blog); knowledge cutoff not published.
- **IDs:** `opencode/nemotron-3-nano-omni` (Zen, $0 free API endpoint); `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (build.nvidia.com); HF checkpoint IDs above.
- **Context window:** 262,144 tokens total (BenchLM concurs 256K), 65,536 max output (meta-verified); audio inputs trained up to 1,200s (20 min), LLM max context supports 5+ hours of audio; 100+ page document handling verified in workflows.
- **Modalities:** Text/image/video/audio in → text out; reasoning yes (multi-environment text + omni RL, trained to abstain when evidence is insufficient); tool calls yes (agentic computer use, GUI agents); no JSON-mode note published.
- **Pricing (as of 2026-10-11):** $0 via NVIDIA Build free API endpoint; open checkpoints available for self-hosting.
- **Architecture:** Open weights; hybrid Mamba-Transformer-MoE backbone — 23 Mamba layers, 23 MoE layers (128 experts, top-6 routing, shared expert), 6 grouped-query attention layers; C-RADIOv4-H vision encoder; Parakeet-TDT-0.6B-v2 audio encoder; dynamic resolution, Conv3D temporal compression + EVS for video; >500 output tok/s on B200 at concurrency 1.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **416** (AA, independent — normalized **0.0%**, floor)
- τ²-bench: **45.3%** (NVIDIA tech report via benchlm.ai — fills the Tau2 gap; weak)
- OSWorld: **47.4%** (tech report — corroborated); ScreenSpot-Pro: **57.8%** (corroborated)
- Terminal-Bench / Tau3 / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (NVIDIA tech report via benchlm.ai — fills the gap; decent for the class) — **conflicts with AA's independent 46.9%**; both listed
- HLE: **4.8%** (AA — fills the gap; floor)
- Artificial Analysis Intelligence Index: **10.3** (AA — fills the index gap; low)
- CharXiv reasoning: **63.6** (launch blog — corroborated by the BenchLM CharXiv 76.3 row); AIME 2025: **82.1%**; MMLU-Pro: **77.3%**; IFBench: **74.2% / 63.2%** (tech report / AA)
- AA-LCR v1.1: **39.7%** (AA — fills the long-context gap; weak); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **15.2% accuracy / 85.7% non-hallucination row / −57.4 index** (AA — worst index measured in this repo)

Coding:

- LiveCodeBench v5: **63.2%** (NVIDIA tech report via benchlm.ai — fills the gap; decent for the class)
- SciCode: **32%** (tech report — fills the gap); AA Coding Index: **13.8%** (AA — weak)
- SWE-bench Verified / SWE-Pro / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 39.7% is the first measured long-context number (weak); 262K context documented; MMLongBench-Doc **57.5%**, DailyOmni **74.1%**, WorldSense **55.4%**, OCRBenchV2-En **65.8%**, Video-MME **72.2%** (tech report — corroborated)

Speech:

- VoiceBench: **89.39, #4 of 44** (owner-published, snapshot 2026-10-07 via benchlm.ai — strong speech evidence); IF-Eval 88.66, AdvBench 100.00

Multimodal:

- MMMU: **70.8%** (tech report — fills the gap); AI2D: **88.5%**; RefCOCO: **90.5%** (corroborated); **AA-MMMU-Pro 53.2%** (AA — conflicts with the vendor MMMU row)

### Normalized scores (1–100)

- **Tool use: 48/100.** (Was 55 on the prior pass.) GDPval 416 (0.0% normalized) and τ²-bench 45.3% are floor-to-weak measured rows alongside the corroborated OSWorld 47.4% — the agentic-computer-use story is real but the standardized evidence is weak.
- **Reasoning: 55/100.** GPQA 72.2% (tech report) and AIME 82.1% fill the knowledge gaps positively, but AA-GPQA 46.9%, HLE 4.8%, AA Index 10.3, CritPt 0.0% and the −57.4 Omniscience index (repo worst) hold the composite at the same band — unchanged.
- **Context window: 74/100.** (Was 78 on the prior pass.) 262K documented with 100+ page document handling and 5+ hour audio; the first measured long-context evidence (AA-LCR 39.7%) is weak, docking the tier a point.
- **Multimodal: 92/100.** Native text + image + video + audio input with corroborated vision rows (MMMU 70.8, Video-MME 72.2, RefCOCO 90.5) and VoiceBench 89.4 (#4/44) — the strongest speech evidence in this repo; text-only output keeps it under the ceiling.
- **Coding: 52/100.** (Was 45 on the prior pass.) LiveCodeBench v5 63.2% and SciCode 32% fill the prior coding vacuum with measured evidence — raised from the zero-data band.
- **Cost efficiency: 100/100.** $0 via NVIDIA Build free API endpoint plus open BF16/FP8/NVFP4 checkpoints for self-hosting ($0 = 100).
- **Overall Score: 64.2/100.** (Was 65 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (48 + 55 + 74 + 92 + 52) / 5 = 321/5 = 64.2 — net slightly down on the 2026-10-11 second pass as the coding raise offsets the tool/context corrections. Best fit: free/cheap omni-modal document, audio-video and GUI understanding — not for frontier reasoning or verified coding workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the NVIDIA Nemotron 3 Nano Omni technical report + AA boards + VoiceBench snapshot, the prior 2026-10-08 pass on the NVIDIA HF launch blog/build.nvidia.com; 2026-10-16 re-check: BenchLM 29-row refresh corroborates every row, no new data (rank #168/889 32.15 → #173/954 32.22; VoiceBench snapshot now 2026-10-15) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
