# Xiaomi MiMo V2.5 Pro — findings by GLM 5.3

- Source: Xiaomi (`mimo-v2.5-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights MoE (1.02T total / 42B active, released 2026-04-27) for demanding agentic and 1,000+ tool-call long-horizon tasks with 1M-token coherence. Text-focused Pro sibling of the omni MiMo V2.5. Top use case: autonomous long-horizon coding and tool-use agents.
- **Provider / access:** Xiaomi MiMo Open Platform API (`mimo-v2.5-pro`, AI Studio, Token Plan); open weights on Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro` (permissive license, FP8 E4M3 mixed).
- **Release / knowledge:** 2026-04-27; knowledge cutoff not stated publicly.
- **IDs:** `xiaomi/mimo-v2-5-pro` (no OpenCode Zen Free ID; `noFreeId` — paid pricing).
- **Context window:** 1M tokens (instruct checkpoint; the Base checkpoint ships 256K) — vendor blog + BenchLM.
- **Modalities:** text in / text out (text-focused Pro; the omni V2.5 sibling carries vision/audio — no image rows exist for the Pro on BenchLM); reasoning yes; tool calls yes (Claude Code / OpenCode / Kiro harness support advertised); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** ~$0.44 in / $0.87 out per 1M on Xiaomi platform (curated pricing note; no Zen listing). Token Plan subscription model with upgraded inference infrastructure.
- **Architecture:** 1.02T-parameter MoE, 42B active; hybrid attention (SWA:GA 6:1, 128-token window, attention-sink bias, ~7x KV-cache cut); native MTP module (~3x output throughput); 27T-token FP8 pretraining at native 32K extended to 1M; three-stage post-training with multi-teacher on-policy distillation (MOPD).

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **63.8% Pass^3 at ~70K tokens/trajectory** (BenchLM 63.8%; vendor blog: "64% Pass^3", 40–60% fewer tokens than Claude Opus 4.6 / Gemini 3.1 Pro / GPT-5.4 at comparable capability)
- Tau3-Bench: **72.9%** (BenchLM); Tau2-Bench: **94.2%** (BenchLM)
- GDPval-AA: **1265 Elo** (BenchLM; normalized field 30.4%)
- Terminal-Bench 2.0: **68.4%** (BenchLM); Terminal-Bench 2.1 (Vals): **57.3%** (BenchLM)
- Gert Labs: **62.7%** (BenchLM)
- AA Agentic Index **22.7%**, APEX-Agents-AA **2.4%** (BenchLM)
- Long-horizon demos (vendor): SysY compiler in Rust — **233/233 hidden tests over 672 tool calls / 4.3 hours**; desktop video editor — **8,192 lines over 1,868 tool calls / 11.5 hours**; FVF-LDO analog EDA closed-loop ngspice optimization.
- Toolathlon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (BenchLM, AA-GPQA); Vals variant 82.6% (BenchLM)
- HLE: **48% with tools / 34% without** (BenchLM; AA-HLE 35.7%)
- LCR / MLCR: AA-LCR **79.7%** (BenchLM); MLCR no verified public score found
- CritPt: **4.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.0** (BenchLM)
- Omniscience: Index **3.3**, Accuracy **22.4%**, hallucination-rate field **24.7%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals) **84.6%**, AA-IFBench **79.9%** (BenchLM)

Coding:

- SWE-bench (Vals): **74.0%** (BenchLM); SWE-bench Verified official: **no verified public score found**
- SWE-bench Pro: **57.2%** (BenchLM)
- LiveCodeBench (Vals): **81.4%** (BenchLM)
- AA Coding Index **60.2%**, AA-SciCode **50.6%** (BenchLM)
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 79.7% (BenchLM) at the 1M window; vendor demonstrates 1,000+ tool-call trajectories staying coherent; no MRCR/RULER per-length table — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ³-bench 72.9% clears the 50%+ frontier reference, τ² 94.2%, ClawEval 64% Pass^3 with best-in-class token efficiency, plus verified 672–1,868-tool-call autonomous trajectories; GDPval-AA 1265 is upper-mid and AA Agentic Index 22.7% caps it below the frontier agents.
- **Reasoning: 78/100.** GPQA 86.6% is near-frontier and HLE-with-tools 48% strong, but CritPt 4.0%, AA Index 26.0, weak Omniscience (Index 3.3) keep it out of the 80s.
- **Context window: 96/100.** 1M verified with vendor-demonstrated ultra-long-horizon coherence and solid AA-LCR 79.7%; the Base checkpoint ships only 256K.
- **Multimodal: 15/100.** Text-only Pro (per template: 15 if text-only; the omni V2.5 sibling covers vision/audio).
- **Coding: 72/100.** SWE-bench (Vals) 74%, LiveCodeBench 81.4% and TB 2.0 68.4% are competitive open-weights results; SWE-bench Pro 57.2% and AA Coding Index 60.2% sit below frontier agentic coding.
- **Cost efficiency: 94/100.** ~$0.44/$0.87 per 1M is cheaper than the ~$0.60/$2.20 (~92) anchor on output, and the 40–60% token-efficiency advantage per trajectory lowers effective cost further; open weights add a $0 self-host path.
- **Overall Score: 69/100.** Half-up mean of the five quality dims (85+78+96+15+72)/5 = 69.2 → 69 — the top open-weights pick for text-only long-horizon agents (1000+ tool calls) at aggressive pricing; pair with an omni model for vision/audio needs.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Xiaomi MiMo release blog, BenchLM, curated platform pricing note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
