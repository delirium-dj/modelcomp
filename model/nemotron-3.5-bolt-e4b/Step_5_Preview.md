# Nemotron 3.5 Bolt E4B — findings by Step 5 Preview

- Source: NVIDIA (`nemotron-3.5-bolt-e4b`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt E4B (builds: `NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` Q4_K_M + `NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` + `NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash` drafter)
- **Short description:** NVIDIA's smallest Nemotron 3.5 model — an 8B-total/4B-effective SLM post-trained (RL-only, GRPO via NeMo RL/Gym) from Google's Gemma-4-E4B-it for fast local conversational agents: voice/device assistants, interactive personas, embedded/robot interfaces. Released 2026-10-23 (three days after the sibling Bolt 74B-A9B 24GB), packaged to fit ~4GB VRAM. Designed for low-memory, low-TTFT operation "while preserving headroom for applications or adjacent model pipelines" (developer card).
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`, `-BF16`, `-DFlash`), build.nvidia.com (NIM), llama.cpp / Ollama / LM Studio / vLLM / Unsloth; OpenAI-compatible local serving. No paid per-token host found — "This model isn't deployed by any Inference Provider" (HF, 2026-10-26). 35,608 downloads last month.
- **Release / knowledge:** **2026-10-23** GA (HF + build.nvidia.com). Post-training data cutoff **May 2026**; model dates December 2025–May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB` (Q4_K_M, 6.18 GB), `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash`.
- **Context window:** **64K tokens input / 64K output** (developer card + HF model summary agree). RULER is evaluated at the full 64K.
- **Modalities:** **text in → text out only**; reasoning toggle (`enable_thinking` + runtime thinking budget), conversational mode toggle, multi-turn tool calling (async capable), 35 languages (top: EN/ES/FR/DE/IT/JA), no image/audio/video input.
- **Pricing:** **free / open weights** — OpenMDW-1.1 (Gemma-4 base under Apache 2.0). Self-hosted cost only (4GB VRAM class; measured on RTX 5070 12GB: TTFT 548 ms @ 3K ISL, 133.4 tok/s; 32K-cache: TTFT 1,238 ms, 106.2 tok/s; RTX Spark 32GB: TTFT 930 ms, 67 tok/s — vendor-measured).
- **Architecture:** Gemma-4-E4B, **8B total / 4B effective**, Q4_K_M (4GB build) or BF16 (full precision) + DFlash speculative-decoding drafter. GRPO multi-environment RL across instruction following, multi-step tool use, multi-turn conversation, structured output.

### Raw benchmarks found

All numbers below are **vendor-measured by NVIDIA under a consistent NeMo Gym harness** (developer card, 2026-10-23) for the E4B (BF16 / Q4_K_M-4GB where both are listed). Comparisons in the same table: Gemma4 E4B-it (base), Qwen3.5 4B, Nemotron-3 Nano-4B (prior gen). Evaluations in reasoning mode except RoleBench, EQ-Bench v3, RULER.

Agent / tool use:

- Tau2-Bench: **55.10 / 52.32** (base Gemma4-E4B-it 38.50/38.72; Nano-4B 29.20/14.89; Qwen3.5 4B 75.06/61.74 leads)
- BFCL-v3: **68.51 / 67.31** (base 66.39/65.03; Qwen3.5 4B 70.95/70.56 leads)
- ToolSandbox: **68.77 / 74.13** (base 65.43/68.31; Qwen3.5 4B 69.54/74.51)
- When2Call Multi-Turn: **63.36 / 60.50** (base 62.90/61.12)
- RelyToolBench: **63.16 / 69.29** (base 61.60/67.15)
- AgentIF: **25.81 / 22.95** (base 21.89/20.05) — hard multi-round agent instruction following, weak for all small models
- Terminal-Bench: no verified public score found.
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.
- Vendor summary claim: ~40% higher average than prior-gen Nano-4B on these conversational-agent benchmarks, ~10% higher than other peers, with up to ~80% fewer output tokens (NVIDIA blog/developer page, 2026-10-23).

Reasoning / knowledge (conversational/instruction proxies — no GPQA/HLE/AIME published):

- MultiChallenge (multi-turn chat quality): **53.10 / 55.60** (base 42.08/39.36; Qwen3.5 4B 51.76/52.23; Nano-4B 35.30/34.53)
- IHEval (instruction hierarchy): **84.79 / 82.40** (base 67.04/66.61)
- IFBench (instruction following): **63.79 / 64.00** (base 42.84/42.67; Qwen3.5 4B 58.91/66.67 leads at Q4)
- InverseIFEval: **46.84 / 45.26** (base 42.00/39.75)
- StructEval-T (structured output): **80.40 / 79.99** (base 79.27/77.28)
- RoleMRC: **80.63 / 79.12**; RoleBench: **67.05 / 71.21** (base 49.95/60.51); EQ-Bench v3: 39.40/38.15 (base 41.17/39.77 — base wins); Brevity: **82.52 / 82.84**
- GPQA Diamond: no verified public score found.
- HLE / LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: no AA model page found (only an AA-hosted IFBench evaluation row references this model ID in the card links).

Coding:

- No coding benchmark is reported for this model (no SWE-bench Verified/Pro, LiveCodeBench, SciCode, Terminal-Bench, or vendor code suite). Closest adjacent: SysBench (systems reasoning) **67.88 / 67.22**, ToolSandbox 68.77/74.13 (tool-driven task execution). SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found.

Long context:

- RULER at 64K: **86.99 / 85.76** (base 86.55/86.14; Qwen3.5 4B 95.15/95.37 leads)
- LongMemEval: **72.10 / 69.92** (base 70.95/67.95; Qwen3.5 4B 66.85/76.60)
- LongBench v2 (48K): 50.50 / 48.67 (base 49.34/45.70; Qwen3.5 4B 59.93/58.28 leads)
- GaRAGe: **42.61 / 40.73**; RAGTruth: **77.59 / 77.88**; MRCR / GraphWalks: no verified public score found.

### Conflict / resolution notes

- **Existence conflict resolved by the release itself.** The 2026-10-19 twin recorded this slug as a tracked-but-unreleased name (BenchLM page, "coverage coming soon", no weights). NVIDIA's Oct 15 blog scheduled Bolt E4B for Oct 23; the model shipped exactly then with weights, a model card, a technical report and a 21-benchmark table — the twin's own re-search trigger ("an NVIDIA model card or HF repo for a Bolt E4B checkpoint") has fired, so this file supersedes it.
- **All numbers are vendor-measured** (NeMo Gym harness; the card explicitly notes they "may differ from vendors' self-reported numbers"), and the comparison column set is drawn by NVIDIA (Gemma-4-E4B-it base, Qwen3.5 4B, Nano-4B) — no independent tracker (AA, BenchLM) yet carries scored coverage, so every score here is provisional until independent replication.
- **Q4_K_M ≈ BF16 quality** across nearly every row (within ±3 pts; ToolSandbox and RelyToolBench actually favor the 4GB Q4 build), so the 4GB consumer build is the correct default deployment reference.
- **Not inherited:** the sibling Bolt 74B-A9B's PinchBench #1 / BrowseComp #2 open-model claims from the Oct 15 blog belong to the 74B model, not this one; none of its numbers are used here.

### Normalized scores (1–100)

- **Tool use: 62/100.** Consistent mid-pack tool-use suites for an 8B model — Tau2-Bench 55.10, BFCL-v3 68.51, ToolSandbox 68.77, When2Call 63.36, RelyToolBench 63.16 — well above the Nano-4B prior generation (+40% per vendor), clearly behind frontier models (Tau2 55 vs Qwen3.5-4B's 75.06); AgentIF 25.81 shows hard multi-round instruction following remains unsolved.
- **Reasoning: 55/100.** No GPQA/HLE/AIME published; strongest available proxies are instruction/chat reasoning suites — IHEval 84.79, MultiChallenge 53.10, RoleMRC 80.63, LongMemEval 72.10 — adequate conversational reasoning for an edge SLM, capped by the complete absence of knowledge/reasoning benchmarks.
- **Context window: 60/100.** 64K input / 64K output per the developer card, with RULER measured at the full 64K (86.99) — a solid mid tier, far below the 1M+ tier of frontier models.
- **Multimodal: 15/100.** Text-only in/out (developer card: "Input Type(s): Text"); every modality flag on HF is unset. Per methodology, text-only scores 15.
- **Coding: 45/100.** No coding benchmark of any kind is published for this model; the closest measured proxies (SysBench 67.88, ToolSandbox 68.77/74.13) cover systems/tool reasoning, not code generation, so coding is scored from proxies and capped accordingly.
- **Cost efficiency: 95/100.** Fully open weights (OpenMDW-1.1), free, ~4GB VRAM class with measured 548 ms TTFT / 133.4 tok/s on a 12GB consumer GPU — the cheapest possible deployment tier for its capability class.
- **Overall Score: 47.4/100.** Mean of the five non-cost dims: (62 + 55 + 60 + 15 + 45) / 5 = 47.4. Best fit: local voice/device assistants, interactive personas and embedded/IoT agents where a ~4GB, sub-second-TTFT, open-weights conversational agent model matters more than raw intelligence — not a substitute for frontier general-purpose LLMs.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-26
- Method: public internet research across five independent source families on 2026-10-26 — NVIDIA's official model card (developer card / build.nvidia.com), the Hugging Face model cards (4GB Q4_K_M, BF16, DFlash) with the full 21-row benchmark table, NVIDIA's Nemotron 3.5 launch blog (2026-10-15) and the Bolt E4B technical blog (2026-10-23), MarkTechPost/GEroundtable release coverage, and the AI/TLDR catalog record — cross-compared for conflicts (release timing, benchmark scope and vendor-vs-independent status are all flagged above). Scores are normalized 1–100 interpretations, not official vendor scores; all benchmark numbers are vendor-measured and provisional pending independent replication.
- Supersedes: `Step_5_Preview.md.excluded` (2026-10-19, "tracked name, no release") — the model shipped 2026-10-23 and that verdict no longer holds.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_5_Bolt_E4B.md`, using the same headings.
