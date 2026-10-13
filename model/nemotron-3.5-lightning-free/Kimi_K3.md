# Nemotron 3.5 Lightning (Free) — findings by Kimi K3

- Source: NVIDIA / Nemotron 3.5 Lightning 30B-A3B (NVFP4) (`opencode/nemotron-3.5-lightning-free`; HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; **official HF card confirms the entire first-pass benchmark table row by row**, plus release date 2026-08-11, data cutoffs, OpenMDW-1.1 license, and full hardware/deployment matrix)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's compact open 30B/3B-active hybrid (Mamba-2 + MoE + Attention layers, NVFP4) built for high-volume low-latency execution as the "worker" paired with a frontier planner. Fast but shallow: CritPt 0%, TB 2.1 23.5%, GPQA 75.6%. Official NVIDIA-measured table matches the first-pass numbers essentially row-for-row.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (**still present on Zen, verified 2026-10-13**); NVIDIA build.nvidia.com endpoint; open weights HF (incl. GGUF via `ggml-org`); Ollama (`ollama run nemotron-3.5-lightning`) / LM Studio / llama.cpp.
- **Release / knowledge:** **Released 2026-08-11** (HF card GA date — new this pass); **pre-training data cutoff Sep 2025, post-training cutoff May 2026** (HF card — new).
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free ID ✓ live); HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4` (+ `-DSpark` / `-DFlash` draft checkpoints).
- **Context window:** **1M validated at serving** (official card — hardware matrix confirms 1M default on GB200/H100/A100/DGX Spark; llama.cpp recipe ~40K by VRAM). Zen tier serves 262K (first-pass note).
- **Modalities:** text-only (official card Input/Output: Text); reasoning yes — `enable_thinking` chat-template kwarg (default on); tool calls (qwen3_coder parser; `force_nonempty_content` kwarg recommended for coding agents); JSON mode.
- **Pricing (as of 2026-10-13):** Free Zen / NVIDIA trial ($0); open weights → self-host; single-GPU class (1× DGX Spark or 1× H100; A100 via W4A16).
- **Architecture:** **MoE hybrid — interleaved Mamba-2 + MoE + select Attention layers, 30B total / 3B active, NVFP4 PTQ (W4A16 experts, FP8 KV/mamba), MTP layer + DSpark/DFlash speculative drafters; 20T+ pre-train tokens; 6 supported languages; RL via GRPO across math/code/tool environments** (all official card — new this pass). **License: OpenMDW-1.1** (corrects any MIT/Apache assumption; commercial use ready).
- Pre-training corpus released alongside the model (Nemotron 3 corpus collections — openness of data is notable).

### Raw benchmarks found

All headline rows confirmed against NVIDIA's own NeMo Gym / NeMo Evaluator measurements for the NVFP4 checkpoint (BF16 twin differs by ≤1pt):

Agent / tool use:

- PinchBench: **83.43%** (official; first pass 83.4 ✓)
- Terminal-Bench 2.1: **23.46%**; τ³-bench (Banking): **9.48%**; GDPval-AA-V2: **865 Elo**; BrowseComp: **36.8%** (official — all match first-pass benchlm rows)
- AA Agentic Index: 6.1% (benchlm.ai, first-pass snapshot)
- Tau2 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.57%** (official; first pass 75.6 ✓); AA variant 74.3% (first pass)
- HLE (text, no tools): **10.47%** (official; first pass 10.5 ✓); AA-HLE 10.6%
- AA-LCR: **49.19%** (official; first pass 49.2 ✓); CritPt: 0.0% (first pass)
- Artificial Analysis Intelligence Index: 12.9; AA Openness Index: 83.3; BenchLM overall 19.1/100, #186 of 507 (benchlm.ai, first-pass snapshot)
- AA-Omniscience: **16.63 (NVFP4)** official ↔ first-pass 14.4/37.6% style reading consistent
- MMLU-Pro: **81.62%** (official ✓); IFBench (loose): **72.88%** (official ✓)

Coding:

- SWE-bench Verified: **52.80%** (official); SWE Multilingual: **36.47%** (official; first pass 36.5 ✓)
- SciCode: **31.38%** (official); AA Coding Index: 26.8 (benchlm.ai, first-pass snapshot)

Long context:

- AA-LCR 49.19% official at 1M; window spec verified all the way to 1M on the hardware matrix (first-pass "1M native vs 262K Zen serve" framing stands).

Multimodal:

- Text-only (official card) — floor.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — the official card confirmed the first-pass numbers almost exactly.**

- **Tool use: 48/100.** PinchBench 83.4% and IFBench 72.9% are its best numbers; agentic depth poor (TB 2.1 23.5%, τ³ 9.5%).
- **Reasoning: 55/100.** GPQA 75.6% / MMLU-Pro 81.6% decent static QA; capped by CritPt 0.0% and HLE ~10.5% — doesn't think far.
- **Context window: 58/100.** Spec 1M now fully validated on xPU hardware matrix; Zen serve cap 262K and LCR 49.2% still cap.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 52/100.** SWE-bench Verified 52.8% is usable; capped by SciCode 31.4% / Coding Index 26.8.
- **Cost efficiency: 99/100.** $0 + open weights at 3B-active — near-minimal serving cost; single-GPU deployability confirmed.
- **Overall Score: 46/100.** Mean of the five quality dims (48+55+58+15+52)/5 = 45.6 → 46 (unchanged). Best fit: free high-volume result-execution agents behind a strong planner; not for deep reasoning.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (official HF card `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4` — GA date 2026-08-11, OpenMDW-1.1 license, 30B/3B hybrid architecture, 1M validated context, Sep 2025 / May 2026 data cutoffs, full official benchmark table matching the first pass; OpenCode Zen `/zen/v1/models` 2026-10-13 — ID live). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
