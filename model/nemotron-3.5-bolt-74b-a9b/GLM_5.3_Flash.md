# Nemotron 3.5 Bolt 74B-A9B — findings by GLM 5.3 Flash

- Source: NVIDIA (`Nemotron-3.5-Bolt-74B-A9B-24GB`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B-A9B (24GB)
- **Short description:** The first model in NVIDIA's Bolt edge family, released 2026-10-15 — a 74B/9B-active hybrid Mamba-Transformer MoE compressed from Nemotron 3.5 Super VL and aggressively 2-bit quantized (IQ2_XXS) to run everyday agentic tasks locally in 24GB on RTX/DGX Spark hardware.
- **Provider / access:** open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, plus BF16, GGUF, and LiLiCorr-drafter checkpoints); runs via llama.cpp, Ollama, LM Studio, Unsloth, vLLM. Not on the live OpenCode Zen roster (fetched 2026-10-16) — no Zen route of any tier.
- **Release / knowledge:** released 2026-10-15 (NVIDIA research page + blog + AA article agree); no knowledge-cutoff statement found.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (HF); no Free ID on Zen.
- **Context window:** 256K tokens (Artificial Analysis model details). Verified against AA's independent listing; no conflicting figure found.
- **Modalities:** text + image (vision) in; text out; reasoning yes; tool calls yes (local agent harnesses); video understanding was part of the parent but is not separately verified post-compression; JSON mode not explicitly confirmed.
- **Pricing (as of 2026-10-16):** $0 — free open-weights self-host (BF16 + GGUF under the Nemotron open-model license); designed to fit entirely in 24GB VRAM alongside other apps. No hosted API pricing found in consulted sources.
- **Architecture:** open weights; 74B total / 9B active parameters, hybrid Mamba-2 + attention MoE, compressed from Nemotron 3.5 Super VL (120B/A12B) via Star Elastic router-guided search, post-trained, then QAD-quantized to 2.0625-bit IQ2_XXS experts (Mamba layers NVFP4, attention/embeddings Q8_0); ships a 1.13B LiLiCorr speculative-decoding drafter (84 TPS on AIPerf SPEED-Bench on RTX Spark).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **21.4** (independent AA; 4th among sub-100B models, 1st US model in class)
- AutomationBench-AA: **15.5%** (independent AA; vs Nemotron 3 Ultra 3.0%)
- AA-Briefcase: **Elo 912** (independent AA; vs Ultra 874)
- PinchBench: **#1 open model in its memory class** (public leaderboard, per official research page)
- WebArena: **#2 open model in class** (steel.dev leaderboard, per official research page)
- BrowseComp: **#2 open model in class** (steel.dev leaderboard, per official research page)
- AA-AgentPerf Local: **600.8s replay duration** (official; slower than Qwen3.6 35B-A3B at 454.0s and Gemma 4 26B-A4B at 480.7s — an honest speed trade-off)
- AIPerf SPEED-Bench-Coding: **83.99 TPS** (official throughput metric, not accuracy)

Reasoning / knowledge:

- HLE: **25%** (independent AA; Nemotron 3 Ultra: 28%)
- AA-LCR: **70%** (independent AA; Ultra: 79%)
- GPQA Diamond: no verified public score found

Coding:

- SWE-bench / LiveCodeBench: no verified public score found (AA Index includes Terminal-Bench 4.0 + SciCode in its composite only)
- Terminal-Bench: no absolute public score found

Long context:

- AA-LCR **70%** at the 256K class (independent AA); no MRCR/RULER number found

### Normalized scores (1–100)

- **Tool use: 78/100.** Class-leading PinchBench, top-2 WebArena/BrowseComp, AutomationBench-AA 15.5% beating a model 7× its size; AA-AgentPerf Local replay is slower than Qwen3.6/Gemma-4 peers, capping it.
- **Reasoning: 68/100.** AA Index 21.4 independently verified; HLE 25% and AA-LCR 70% trail Nemotron 3 Ultra — real but bounded reasoning at the edge.
- **Context window: 68/100.** 256K window (solid mid-tier, not 1M) with AA-LCR 70% as the only retrieval evidence.
- **Multimodal: 55/100.** Vision input retained through compression and post-training, but no published vision-benchmark numbers for this SKU (parent's CharXiv 80.8% does not transfer automatically).
- **Coding: 62/100.** Local coding-agent positioning with class-leading speed-per-GB claims, yet zero absolute public coding benchmark — provisional.
- **Cost efficiency: 92/100.** Free open weights fully resident in 24GB consumer/workstation VRAM — near-zero marginal cost for local agent work; not 100 because it demands dedicated local hardware.
- **Overall Score: 66/100.** Mean of (78+68+68+55+62)/5 = 66.2 → 66. Best fit: privacy-preserving local agents on RTX/DGX Spark; wrong pick for maximum coding/reasoning capability or data-center throughput.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (official NVIDIA research page with technical report link, independent Artificial Analysis evaluation, NVIDIA blog, unite.ai/marktechpost coverage; sources agree on all specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
