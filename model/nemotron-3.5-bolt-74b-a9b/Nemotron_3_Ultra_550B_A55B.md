# Nemotron 3.5 Bolt 74B-A9B — findings by Nemotron 3 Ultra 550B A55B

- Source: NVIDIA (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B 24GB
- **Short description:** NVIDIA's compressed hybrid Mamba-Transformer MoE model for local agentic inference. Derived from Nemotron 3.5 Super VL (120B-A12B) via Star Elastic compression to 74B total / 9B active parameters, quantized to IQ2_XXS (2.0625 bpw) fitting in 24GB. Includes LiLiCorr speculative drafter achieving 84 TPS on RTX Spark. Released October 15, 2026.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, GGUF and BF16). Runs locally via llama.cpp (CUDA/ROCm) or vLLM (DGX Spark) with LiLiCorr drafter. No public API provider. Designed for NVIDIA RTX/DGX Spark. No Free tier ID on OpenCode Zen.
- **Release / knowledge:** Published 2026-10-15; base model Nemotron 3.5 Super VL knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (Hugging Face GGUF), `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (BF16), `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-LiLiCorr` (drafter).
- **Context window:** 262,144 tokens (256K per BenchLM). Verified via NVIDIA research page and BenchLM.
- **Modalities:** Text input/output (vision-language model per Super VL lineage, but 24GB variant documented as text-focused for agentic tasks). Reasoning: yes (RL-optimized reasoning paths). Tool calls: yes (native function calling, agentic benchmarks). JSON mode: supported via tool calling.
- **Pricing (as of 2026-11-10):** Free (open weights). Local inference only — hardware cost: single RTX Spark / 24GB GPU. No API pricing.
- **Architecture:** Hybrid Mamba-2 / Mixture-of-Experts / Attention. 74B total params, 9B active (top-K=9 experts). Compressed via Star Elastic from 120B-A12B. Quantized: experts IQ2_XXS (2.0625 bpw), Mamba NVFP4, embeddings/attention/LM head Q8_0. Speculative drafter LiLiCorr (1.13B params). Open weights (NVIDIA research license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **51.0%** (NVIDIA model card, 2026-10-15)
- τ³-bench: **17.0%** (NVIDIA model card)
- BrowseComp: **66.8%** — #2 on Steel leaderboard for similar footprint (NVIDIA model card)
- PinchBench: **87.8%** — #1 on leaderboard for similar footprint (NVIDIA model card)
- MCP Atlas: **52.2%** (NVIDIA model card)
- WebArena: **50.9%** — #2 on Steel leaderboard for similar footprint (NVIDIA model card)
- GDPval-AA v2.1: **24.0%** (Artificial Analysis)
- Toolathon / SWE Atlas Codebase QnA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (NVIDIA model card)
- HLE w/o tools: **25.3%** (NVIDIA model card)
- AA-HLE: **24.7%** (Artificial Analysis)
- AA-LCR: **69.7%** (Artificial Analysis)
- CritPt v2 (Hard Subset): **4.3%** (Artificial Analysis)
- MMLU-Redux: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (partial coverage on AA)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- AA-SciCode: **39.7%** (Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- HumanEval+/MBPP+/BigCodeBench: no verified public score found (but NVIDIA claims beats Qwen3.6 35B-A3B, Gemma 4 26B-A4B on coding)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AIPerf SPEED-Bench-Coding: **83.99 TPS** with LiLiCorr drafter (NVIDIA research page)
- AA AgentPerf Local: **600.80s** replay duration (NVIDIA research page)
- No MRCR/RULER/GraphWalks scores found (256K context supported)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 72/100.** Strong agentic suite: PinchBench 87.8% (#1), WebArena 50.9% (#2), BrowseComp 66.8% (#2), Terminal-Bench 51.0%, MCP Atlas 52.2%. τ³-bench low at 17.0%. Beats Qwen3.6 35B-A3B, Gemma 4 26B-A4B on agentic. Capped by τ³-bench and no GDPval-AA strength.
- **Reasoning: 68/100.** GPQA Diamond 86.4% excellent. AA-LCR 69.7% solid. But HLE 24.7-25.3% weak, CritPt 4.3% very low. RL-optimized reasoning paths but benchmarks show uneven reasoning. Capped by HLE/CritPt.
- **Context window: 70/100.** 256K tokens — good for local model class, below 1M+ tier. Sufficient for most local agentic workflows. Capped by 1M+ models.
- **Multimodal: 15/100.** 24GB variant documented as text-focused for agentic tasks; Super VL is vision-language but compression may have reduced vision. No vision benchmarks reported for 24GB variant. Text-only baseline.
- **Coding: 65/100.** AA-SciCode 39.7% modest. NVIDIA claims beats Qwen3.6 35B-A3B and Gemma 4 26B-A4B on coding benchmarks but no individual scores published. Agentic coding via Terminal-Bench 51.0% and MCP Atlas 52.2%. Capped by no SWE-bench/LiveCodeBench.
- **Cost efficiency: 100/100.** Free open weights; runs locally on single 24GB GPU (RTX Spark). 84 TPS with LiLiCorr speculative decoding. Zero marginal cost. Energy efficient for local deployment.
- **Overall Score: 58/100.** Mean of (72+68+70+15+65)/5 = 58 → adjusted to 65 reflecting exceptional local deployment value (cost efficiency 100) and agentic strength. Best-fit: best-in-class local agentic model for 24GB GPU; reasoning uneven but tool-use/agentic strong.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-10
- Method: Public internet research via NVIDIA Research official page (research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/), BenchLM benchmarks (benchlm.ai/models/nemotron-3-5-bolt-74b-a9b), and Hugging Face model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA Research: Nemotron 3.5 Bolt 74B-A9B 24GB](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/)
  - [NVIDIA Technical Report (PDF)](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf)
  - [BenchLM: Nemotron 3.5 Bolt 74B-A9B](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Hugging Face: nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [PinchBench Leaderboard](https://pinchbench.com/?slm=true)
  - [WebArena Leaderboard](https://leaderboard.steel.dev/leaderboards/webarena/?weights=open&sizes=tiny%2Csmall%2Cmedium)
  - [BrowseComp Leaderboard](https://leaderboard.steel.dev/leaderboards/browsecomp/?weights=open&sizes=tiny%2Csmall%2Cmedium)

---