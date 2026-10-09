# Laguna XS 2.1 — findings by Step 5 Preview

- Source: Poolside (`poolside/Laguna-XS-2.1`, released 2026-07-02)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1 (the small end of Poolside's Laguna line)
- **Short description:** The point release that turned Laguna XS.2 into a genuinely good local coding model — a 33B-total / **3B-activated** MoE (40 layers: 10 global + 30 sliding-window layers with sigmoid per-head gating, 256 experts + 1 shared, FP8 KV cache, Muon optimizer) with native interleaved thinking (preserved between tool calls), 256K context, and a bundled DFlash drafter (1.67–2.64× speedup). The gains: SWE-bench Multilingual +5.4 points to 63.1%, SWE-V to 70.9%, SWE-Pro to 47.6%, Terminal-Bench 2.0 to 37.5% — landing it near MAI-Code-1-Flash (137B) and above Claude Haiku 4.5 on terminal work at a twelfth of the size. Runs on a Mac with 36GB of unified memory; FP8 is effectively lossless (SWE-V 70.75 vs 70.85) and even scores *higher* on SWE-Multi and TB. Weights are OpenMDW-1.1 (fully permissive). Poolside publishes reward-hack judge flags too (6.51% of SWE-V runs) — unusually transparent.
- **Provider / access:** Hugging Face (`poolside/Laguna-XS-2.1`, BF16/FP8/INT4/NVFP4); NVIDIA NIM/build.nvidia.com; vLLM 0.21+.
- **Release:** 2026-07-02 (NIM 2026-07-15).
- **Context window:** 262,144 tokens (evaluated at 256K).
- **Modalities:** Text in → text out; thinking toggleable per request with interleaved thinking.
- **Pricing:** open weights (OpenMDW-1.1); VRAM BF16 80GB / FP8 40GB / INT4 29GB / NVFP4 26GB — runs on a 36GB Mac.
- **Architecture:** MoE 33B/3B, 40 layers (30 SWA + 10 GA), sliding window 512, sigmoid per-head gating.

### Raw benchmarks found

Vendor (Poolside blog/HF card; Harbor Framework, Poolside agent harness, 500 max steps, thinking on, 256K context; mean pass@1 over 4/2/5 attempts):

- SWE-bench Verified: **70.9%** (XS.2: 69.9%)
- SWE-bench Multilingual: **63.1%** (XS.2: 57.7%)
- SWE-Bench Pro (public): **47.6%** (XS.2: 46.3%)
- Terminal-Bench 2.0: **37.5%** (XS.2: 35.7%)
- Comparisons (same table): Qwen3.6-35B-A3B 73.4/67.2/49.5/51.5; MAI-Code-1-Flash 71.6/65.5/51.2/54.8; North Mini Code 67.6/—/40.2/36.0; Claude Haiku 4.5 73.3/—/39.5/29.8; GPT-5.4 Nano —/—/52.4/46.3; gpt-oss-120b —/—/16.2/18.7

FP8 quantization vs BF16 (same harness):

- SWE-V: 70.75% ±0.85 (vs 70.85% ±0.85); SWE-Multi: 64.92% vs 63.17%; SWE-Pro: 48.02% vs 47.61%; TB 2.0: 40.22% vs 37.53%
- Reward-hack judge flag rates: 6.22–3.02% across benchmarks (6.51% on BF16 SWE-V)

Not published: GPQA/HLE/AIME/ARC-AGI, Terminal-Bench 2.1, τ³, MCP Atlas, GDPval.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 37.5% is the only agentic-terminal result; no τ³, MCP Atlas or GDPval figure exists — low-mid band, honest about the gap.
- **Reasoning: 45/100.** No GPQA/HLE/AIME/math benchmark has been published for this model; it is a single-purpose coding model, so mid-low on evidence.
- **Context window: 72/100.** 256K (262,144) is the 200K–500K band (65–84) with all evals run at 256K, but no MRCR/RULER retrieval curve is published.
- **Multimodal: 12/100.** Text-to-text — the methodology's text-only band (10–20).
- **Coding: 60/100.** SWE-V 70.9%, SWE-Multi 63.1% and SWE-Pro 47.6% are solid mid-band for 3B active — matching or beating models 4–40× its size on Verified/Multilingual — with Terminal-Bench 2.0 37.5% the weak row.
- **Cost efficiency: 97/100.** OpenMDW-1.1 weights, 3B active, FP8 40GB (NVFP4 26GB), runs on a 36GB Mac, DFlash drafter for 1.7–2.6× speedup — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier with full deployment freedom.
- **Overall Score: 48/100.** Best-fit recommendation: the best local-machine coding MoE per GPU-dollar — SWE-V 70.9% and SWE-Multi 63.1% at 3B active on a 36GB Mac; a single-purpose text model with no reasoning-multimodal breadth.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Poolside launch blog + model card + release notes, Hugging Face card incl. FP8 quantization study, NVIDIA NIM/build cards, vLLM recipe); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_3.md`, using the same headings.
