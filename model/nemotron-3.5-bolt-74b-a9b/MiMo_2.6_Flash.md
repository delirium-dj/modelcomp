# Nemotron 3.5 Bolt 74B-A9B — findings by MiMo 2.6 Flash

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` weights; no hosted API found)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Supersedes a 2026-10-16 self-exclusion that could not verify the model (HuggingFace card was gated/newly published). Fresh evidence below verifies the exact 74B/9B SKU, released 2026-10-15.

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's local-first agent vision-language model — a 74B-total/9B-active MoE compressed from Nemotron 3.5 Super VL (120B-A12B) via Star Elastic and natively quantized to 2-bit (IQ2_XXS, QAD) to fit 24GB memory at 80+ TPS on RTX/DGX Spark. Distinct SKU from Super VL and Lightning.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, plus `-GGUF` and `-BF16` checkpoints); local runtimes llama.cpp, Ollama (`ollama run nemotron-3.5-bolt`), LM Studio, Unsloth, vLLM. No OpenCode Zen ID found (scaffolded `opencode/nemotron-3.5-bolt-74b-a9b` in repo meta.json is unverified); AA lists no publicly available API; OrcaRouter catalogue confirmed no Nemotron routing.
- **Release / knowledge:** 2026-10-15 (NVIDIA research page; AA; ai-tldr); post-training data cutoff May 2026; model dates Dec 2025–May 2026 (HF card).
- **IDs:** HF `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (quantized), `-BF16` (base), `-GGUF`.
- **Context window:** 256K tokens (HF model summary; shared across prompt, visual inputs, history, tool results); Artificial Analysis lists 262K.
- **Modalities:** text, images, and MP4 video up to ~2 min in; text out; reasoning yes (`enable_thinking` chat-template flag); tool use/JSON yes (llmreference); C-RADIO v4-H vision encoder.
- **Pricing (as of 2026-10-17):** free local weights (OpenMDW-1.1, commercial use permitted); no hosted API price located; hardware cost ≈ 24–48GB NVIDIA VRAM (Ollama: Apple Silicon unsupported as of 2026-10-16).
- **Architecture:** 74B total / 9B active MoE; Mamba-2–Transformer hybrid LatentMoE (expert top-K 9, down from 22 in parent); IQ2_XXS 2.0625-bit experts + NVFP4 Mamba + Q8_0 embeddings/attention/lm_head; LiLiCorr 1.13B speculative drafter (mean acceptance 4.68 greedy); BF16 checkpoint for customization.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.0%** (benchgap measured; NVIDIA table 50.98; AA-harness est. 50.2)
- Tau3-Banking: no verified public score found (benchgap AA Tau3 est. 26.2%, medium confidence); τ³-bench **17.0%** measured (benchgap)
- MCP Atlas: **52.2%** (benchgap measured)
- BrowseComp: **66.8%** (benchgap measured; NVIDIA 66.75) — #2 in class per NVIDIA among ≤24GB models
- PinchBench: **87.8%** (benchgap measured; NVIDIA table 87.82 — NVIDIA claims #1 in class, but the same table shows Qwen3.6-35B-A3B at 88.07; conflict noted via ai-tldr)
- GDPval-AA: **24.0%** (benchgap measured)
- OSWorld-Verified: no verified public score found (benchgap est. 60.4%, medium)
- Claw-Eval: no verified public score found (benchgap est. 62.1%, medium)
- Toolathon: no verified public score found (benchgap Toolathlon-Verified est. 49.9%, medium)
- WebArena: #2 in class per NVIDIA (no exact % found in fetched sources)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (benchgap measured; NVIDIA 86.43; Vals est. 85.6)
- HLE: **25.3%** no-tools (benchgap measured; AA-run 24.7); with-tools est. 45.6% (low confidence)
- LCR: **69.7%** (AA-LCR, benchgap measured)
- CritPt: **4.3%** (benchgap measured)
- Artificial Analysis Intelligence Index: **21** — #4/67 in its open-weights size class (median 8); very verbose (230M output tokens on Index vs 100M median)
- Omniscience Accuracy: 17.1% (AA, benchgap measured)
- MMLU-Pro: 84.9% (benchgap est., medium)

Coding:

- SWE-bench Verified: no verified public score found (benchgap est. 65.5%, medium confidence — marked estimate only)
- DeepSWE: no verified public score found (benchgap est. 51.9%, low confidence)
- LiveCodeBench: no verified public score found (benchgap v6 est. 80.3%, high confidence)
- SciCode: **39.7%** (AA-SciCode, benchgap measured; vLLM-tracked 39.8 est.)
- Terminal-Bench 2.1 (also agentic): 51.0% measured
- Independent hands-on (MindStudio, llama.cpp on ~30GB VRAM): failed a hidden-bug fix in a full-stack app and a creative single-file HTML animation even after correction; "not yet reliable for production coding without human review"

Long context:

- LongBench v2: no verified public score found (benchgap est. 60.8%, low confidence); MRCRv2 est. 72.9% — no long-context retrieval measured at 512K+ (window caps at 256K anyway).

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.1 51.0% and τ³-bench 17.0% sit squarely in the mid band (TB2.1 45–60, Tau3 10–25); BrowseComp 66.8% and MCP Atlas 52.2% are class-leading for a ≤24GB model; capped by weak GDPval-AA 24.0% and no hosted API to benchmark serverlessly.
- **Reasoning: 68/100.** GPQA 86.4% is near-frontier, LCR 69.7% solid; capped by HLE 25.3% (mid), CritPt 4.3% (very low), and AA Index 21 in the mid band (20–35) — plus 2.3x verbose token use on the Index.
- **Context window: 72/100.** 256K window = 200K–500K tier (65–84); no measured long-context retrieval to justify higher.
- **Multimodal: 80/100.** Text + image + video (~2 min MP4) in, text out = 75–90 tier; independent tests scored vision-reasoning 9/9 and circuit-diagram solving 7/7 (MindStudio). No audio.
- **Coding: 64/100.** Mid band overall: SciCode 39.7%, TB2.1 51.0%; SWE-V/DeepSWE/LCB exist only as estimates; independent hands-on found agentic coding unreliable.
- **Cost efficiency: 85/100.** $0 marginal API cost (free OpenMDW-1.1 weights, local run), but no free hosted tier and a hard 24GB-NVIDIA hardware requirement (Apple Silicon unsupported) keeps it below free-API models.
- **Overall Score: 69/100.** (60 + 68 + 72 + 80 + 64) / 5 = 68.8 → 69. Best fit: offline/private local vision-agent and browsing work on a single 24GB NVIDIA GPU; not a hosted coding agent.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-17
- Method: public internet research (NVIDIA research page + HF card + technical report; Artificial Analysis; benchgap/BenchLM measured scores; MindStudio independent hands-on; ai-tldr; The AI Loadout; OrcaRouter; llmreference) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

