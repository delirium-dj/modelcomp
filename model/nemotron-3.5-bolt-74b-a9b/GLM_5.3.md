# NVIDIA Nemotron 3.5 Bolt 74B-A9B 24GB — findings by GLM 5.3

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B-A9B 24GB
- **Short description:** NVIDIA's first Bolt-family local agentic vision-language model — a 74B/9B hybrid Mamba-2–Transformer MoE compressed from Nemotron 3.5 Super VL 120B-A12B with native 2-bit quantization, built to run everyday agentic tasks in 24GB of VRAM (RTX Spark laptops).
- **Provider / access:** Hugging Face open weights (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` + BF16/GGUF/LiLiCorr variants); vLLM/SGLang/Docker local serving (OpenAI-compatible API); NVIDIA research page with technical report.
- **Release / knowledge:** Released 2026-10-15 (HF); post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (no Zen ID, no hosted pay-per-token API verified).
- **Context window:** up to 256K tokens (model card; AA lists 256K); prompt, vision, history, tools and output share the window.
- **Modalities:** text, images, and video in → text out; hybrid reasoning mode (`enable_thinking` toggle); tool calling (auto tool choice, qwen3_coder parser); JSON output; speculative decoding via LiLiCorr/DFlash (7 speculative tokens), 80+ tok/s decode target.
- **Pricing (as of 2026-10-16):** $0 per token — open weights (OpenMDW-1.1) run locally; cost is the 24GB GPU itself.
- **Architecture:** 74B total / 9B active; Nemotron Hybrid LatentMoE (Mamba-2 + MoE + Attention) with C-RADIO v4-H vision encoder; compressed from Super VL via Star Elastic architecture search (120B recovery tokens); IQ2 2-bit quantization-aware distillation (NVFP4 Mamba, Q8_0 embedding/output).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (NVIDIA model card, IQ2 variant)
- Tau3 Banking: **17.01%** (NVIDIA model card)
- MCP-Atlas: **52.20%** (NVIDIA model card, 500 public tasks; RL moved it ~48→~56 coverage pre-threshold)
- BrowseComp: **66.75%** (NVIDIA model card — beats Qwen3.6-35B-A3B 48.74% and Gemma4 26B 26.30%)
- WebArena (vision): **50.86%** (NVIDIA model card)
- GDPval-AA v2: **28.47** (NVIDIA model card)
- PinchBench: **87.82%** (NVIDIA model card; up to 90.4 across 10-repeat average after SWE-RL)
- AutomationBench-AA: **15.5%** vs Nemotron 3 Ultra 3.0% (Artificial Analysis article)

Reasoning / knowledge:

- GPQA Diamond: **86.43%** (NVIDIA model card — beats Qwen3.6-35B 83.4%, Gemma4 26B 79.61%)
- HLE (no tools): **25.30%** (NVIDIA model card); AA cites 25% vs Ultra 28%
- AA-LCR: **64.06%** (NVIDIA model card; AA measures 70% — harness spread noted)
- AA-Omniscience accuracy: **16.90%**; non-hallucination 61.27% (NVIDIA model card)
- Artificial Analysis Intelligence Index: **21.4** — 4th among <100B-param models, 1st among US models in class; 8.6 points above Nemotron 3 Super with 39% fewer params (AA article)

Coding:

- SciCode: **41.02%** (NVIDIA model card — beats Qwen3.6-35B 35.33%, Gemma4 26B 40.28%)
- AA-Briefcase: **912 Elo** vs Nemotron 3 Ultra 874 (AA article)
- SWE-bench / LiveCodeBench: no verified public score found (SWE-RL training described, no headline number published)

Long context:

- 256K window supported; no MRCR/RULER retrieval score published — no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong-for-size BrowseComp 66.75%, MCP-Atlas 52.2%, WebArena 50.86%, TB2.1 50.98%, PinchBench 87.8% — best-in-class under 100B params per AA, but capped by Tau3 17.01%, GDPval 28.47 and AutomationBench 15.5% (frontier is ~88% TB).
- **Reasoning: 75/100.** GPQA-D 86.43% is near-frontier for its class and HLE 25.3%/LCR 64.06% are respectable at 74B/9B; capped by low Omniscience accuracy (16.9%) and AA Index 21.4 vs frontier 30+.
- **Context window: 78/100.** 256K verified (200K–500K tier), shared-window caveat noted.
- **Multimodal: 80/100.** Text + image + video in with trained vision tower, text-only out; video input (2 FPS/128–256 frames) places it in the 75–90 tier.
- **Coding: 72/100.** SciCode 41.02% and PinchBench 87.8% are solid mid-tier results; no SWE-bench Verified headline number caps it.
- **Cost efficiency: 100/100.** $0/token — open weights, 24GB local execution alongside other apps; only the GPU cost applies.
- **Overall Score: 75/100.** (72+75+78+80+72)/5 = 75.4 → 75. The intelligence-per-GB leader for local agents — a 24GB laptop model that beats 30B-class rivals on nearly every agentic benchmark while running entirely on-device.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (NVIDIA HF model card with full benchmark table, Artificial Analysis release article, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
