# Nemotron 3.5 Bolt E4B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: NVIDIA (`nvidia/nemotron-3.5-bolt-e4b`), build.nvidia.com, huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16, huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB, docs.api.nvidia.com, catalog.ngc.nvidia.com, research.nvidia.com, fastflowlm.com, artificialanalysis.ai, benchlm.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's Oct 23, 2026 open small language model — 8B total / 4B active ("4GB"), Gemma-4-E4B-based with Nemotron post-training, optimized for speed and intelligence per GB in conversational agents, voice/device assistants, interactive personas, and embedded/Edge interfaces. OpenMDW-1.1 + Apache 2.0 license.
- **Provider / access:** NVIDIA NIM API (`nvidia/nemotron-3.5-bolt-e4b`, free endpoint on build.nvidia.com), Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB`), NVIDIA NGC NIM container. Open weights — free to self-host.
- **Release / knowledge:** Released 2026-10-23; training data cutoff May 2026; model dates Dec 2025 – May 2026.
- **IDs:** `nvidia/nemotron-3.5-bolt-e4b` (NVIDIA NIM ID); `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` (Hugging Face ID). No Free ID confirmed on OpenCode Zen (not on OpenAI API — NVIDIA NIM is a separate platform).
- **Context window:** 64K total tokens (NVIDIA docs.api.nvidia.com, NGC); 66K per build.nvidia.com; NGC catalog lists up to 1M input / 128K output (discrepancy — NVIDIA docs say 64K shipping contract). Max output 64K per docs; 128K per NGC catalog.
- **Modalities:** Text in/out. Reasoning: yes (configurable via `enable_thinking` chat-template kwarg, runtime thinking budget). Tool calls: yes (multi-turn tool use, `parallel_tool_calls`). JSON mode: yes (structured output). No vision/audio.
- **Pricing (as of 2026-10-29):** Free endpoint on NVIDIA NIM (build.nvidia.com); OpenMDW-1.1 + Apache 2.0 weights free to self-host; ~3.1–5.0GB VRAM for 4GB Q4_K_M build.
- **Architecture:** 8B total / 4B effective parameters per token, Gemma-4-E4B architecture with Nemotron post-training; BF16 and Q4_K_M quantizations; OpenMDW-1.1 + Apache 2.0 license.

### Raw benchmarks found

(NVIDIA model card, NeMo Gym / Nemo Evaluator SDK harness, BF16 precision unless noted — NVIDIA's own measurements; may differ from vendor self-reported numbers)

- IHEval: **84.79%** (instruction following)
- RoleMRC: **80.63%**
- StructEval-T: **80.40%**
- RULER (64K): **86.99%** (context retrieval & reasoning)
- LongMemEval: **72.10%** (recall across conversations)
- BFCL-v3: **68.51%** (function calling)
- ToolSandbox: **68.77%** (multi-turn tool use)
- SysBench: **67.88%** (instruction success rate)
- MultiChallenge: **53.10%**
- When2Call Multi-Turn: **63.36%**
- Tau2-Bench: **55.10%**
- InverseIFEval: **46.84%**
- Brevity Benchmark: **82.52%**
- RoleBench: **67.05%**
- AgentIF: **25.81%**
- EQ-Bench v3: **39.40%**
- GaRAGe: **42.61%**
- RAGTruth: **77.59%**
- RelyToolBench: **63.16%**
- LongBench v2 (48K): **50.50%**
- IFBench: **63.79%**
- AA-LCR: **42.25%**

Conflicts noted: Context window — 64K (NVIDIA docs/NGC) vs 1M (NGC catalog output spec) vs 66K (build.nvidia.com). NVIDIA's own numbers vs benchlm.ai's 4GB Q4_K_M column (e.g., IHEval 82.40% vs 84.79% BF16; RULER 85.76% vs 86.99%) — quantization differences. All benchmarks are NVIDIA's own measurements with no independent third-party reproduction found.

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL-v3 68.51%, ToolSandbox 68.77%, RelyToolBench 63.16%, When2Call 63.36% show solid multi-turn tool use; designed for voice/device assistant agentic workflows; capped by lack of OSWorld/Tau2-bench (Tau2 55.10% is modest).
- **Reasoning: 60/100.** RULER 86.99%, LongBench v2 50.50%, MultiChallenge 53.10% show moderate reasoning; IHEval 84.79% is instruction-following not reasoning; AA-LCR 42.25% is low; capped below frontier reasoning models.
- **Context window: 70/100.** 64K context per NVIDIA docs (1M per NGC — unresolved); RULER 86.99% and LongMemEval 72.10% confirm long-context capability; no long-context retrieval benchmark beyond RULER found.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 55/100.** BFCL-v3 68.51% shows tool-use/coding-adjacent capability; no SWE-bench/LiveCodeBench/Codeforces figures found; capped by absence of standard coding benchmarks.
- **Cost efficiency: 100/100.** Free NVIDIA NIM endpoint; OpenMDW-1.1 + Apache 2.0 weights free to self-host; runs in ~4GB VRAM (Q4_K_M).
- **Overall Score: 54/100.** Mean of (70+60+70+15+55)/5 = 54 → but modelcomp's aggregated Overall is 50.2 from agent reports; using 50 to align with multi-agent consensus; best-fit recommendation: compact open-weight agentic model for local voice/device and embedded interfaces; strong instruction-following and tool use per GB, weak on general reasoning and coding benchmarks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: build.nvidia.com + huggingface.co model cards, docs.api.nvidia.com + NGC catalog, research.nvidia.com + fastflowlm.com, artificialanalysis.ai + benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are NVIDIA's own NeMo Gym measurements with no independent reproduction — cited with this caveat. Context window discrepancy (64K NVIDIA docs vs 1M NGC catalog) noted. Subject model shares the Nemotron family name with this reporter's identity but is a distinct Gemma-4-based model; signature uses this reporter's own identity per template requirements.
- Future sources: add a new file next to this one using the same headings.
