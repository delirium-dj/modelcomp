# Muse Glimmer 30B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Muse Glimmer 30B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model, distilled from Muse Spark and purpose-built for always-on local agent workflows on a single consumer GPU (24/32 GB with 4-bit quantization + DFlash speculative decoding).
- **Provider / access:** Meta — open weights on Hugging Face (meta-models/Muse-Glimmer-30B) under Apache 2.0; local via Ollama, LM Studio, Unsloth; edge via llama.cpp, ExecuTorch, MLX; serving via vLLM, SGLang; cloud via Together AI, Fireworks AI, OpenRouter, Vercel; NVIDIA NIM. Hardware partners: AMD, Arm, Dell, Intel, NVIDIA.
- **Release / knowledge:** 2026-08-10 (Meta AI Research blog; model card "Model Release Date: August 2026"). Knowledge cutoff: January 4, 2026 (model card).
- **IDs:** `meta/muse-glimmer-30b` (repo meta.json); `meta-models/Muse-Glimmer-30B` (HF); arXiv 2602.06036 (DFlash drafter), arXiv 2504.13181 (perception encoder).
- **Context window:** 131,072+ tokens (128K default).
- **Modalities:** Text, image in (interleaved, via ~1.8B-param ViT-G/14 perception encoder; max 4,096 visual tokens per image); text out. Audio not supported; video processed as individual frames (not optimized for video).
- **Pricing (as of 2026-10):** Open weights (Apache 2.0): self-host free. OpenRouter $0.30 input / $1.10 output per 1M; Fireworks/Together/Vercel $0.35 / $1.50; NVIDIA NIM $0.
- **Architecture:** Dense causal transformer + perception encoder — ~29.6B total params (incl. vision); hidden 6656, 52 layers, [Local, Local, Local, Global] repeating attention with 2048 sliding window and gated attention, 32 Q / 2 KV heads (GQA 16:1), head dim 128, SwiGLU FFN 19,968, RoPE θ=500,000 (local layers), vocab 202,048. DFlash block-diffusion drafter: 5 draft layers, block size 16, 32Q/8KV. Reasoning strength low/medium/high/xhigh; recommended sampling temp 1.0, top_p 0.95, top_k 64.

### Raw benchmarks found

Meta HF model card (Muse Glimmer-30B "High Reasoning" vs Gemma4-31B "Thinking Mode" vs Qwen3.6-27B "Thinking Mode"; methodology report at research.meta.ai/static/muse-glimmer-methodology):

General agentic:

- MCP Atlas (Public): **75.5** (Gemma4-31B: 54.2; Qwen3.6-27B: 62.5).
- DeepSearch QA: **74.6** (61.7; 71.1).
- τ³-Banking: **23.5** (15.1; 16.7).
- WildClawBench: **47.6** (37.6; 43.2).
- GDPVal-AA v2: **953** (811; 1141).
- Gaia2: **43.3** (36.4; 40.0).
- SkillsBench (with skills): **44.3** (32.4; 46.6).
- OSWorld-Verified: **65.9** (58.5; 75.6).

Agentic coding:

- SWE-Bench Pro: **51.2** (36.9; 50.2) — best of the three.
- SWE-Bench Verified: **76.0** (66.6; 77.2).
- TerminalBench 2.1 (terminus2): **51.7** (43.4; 60.7).
- SciCode: **43.6** (43.4; 39.8) — best of the three.

Multimodal:

- CharXiv Reasoning: **78.8** (77.7; 78.4) — best of the three.
- ScreenSpot Pro: **75.4** (75.9; 76.1).
- OmniDocBench v1.5: **75.8** (72.5; 77.8).
- MMMU Pro: **74** (73; 75).

Security & privacy:

- CI Memories: Violation 26.4↓ (12.1↓; 53.4↓), Coverage 64.8 (53.0; 66.9).
- Siren AgentDojo: Attack Success Rate 28.4↓ (25.6↓; 40.3↓), Utility 94.2 (90.8; 92.7).

General capabilities & reasoning:

- IFBench: **77.0** (76.0; 70.8) — best of the three.
- AIME 2026: **94.7** (89.2; 94.1) — best of the three.
- GPQA Diamond (AA): **83.5** (85.7; 84.2).
- HLE Text (AA): **22.0** (23.6; 23.1).
- AA-LCR: **80.0** (68.3; 73.3) — best of the three.
- Beam128K: **65.1** (58.2; 63.0) — best of the three.

Preparedness (chem/bio; Kimi K3 shown for context):

- MBCT 41.5% (Gemma4-31B 50.6%; Qwen3.6-27B 45.9%; Kimi K3 58.9%); HPCT 52.3% (54.0%; 48.7%; 59.6%); VCT 37.0% (43.5%; 33.7%; 48.0%); WMDP Bio 86.5% (85.9%; 84.8%; 89.1%); WMDP Chem 75.2% (80.5%; 74.8%; 84.2%); Lab Bench (ProtocolQA) 80.2% (75.8%; 69.1%; 81.9%).

Deployment/quantization:

- 4-bit quantization: K-Quant-Dynamic 0.2% degradation (32 GB VRAM target), K-Quant-17GB 1.0% (24 GB), full precision 64 GB (degradation = average across 15 common benchmarks).
- DFlash speculative decoding speedups: RTX 5090 74.9→233.4 tok/s (3.1×), M5 Max 26.6→50.2 (1.8×), M4 Max 23.7→37.8 (1.5×) — batch size 1, greedy decoding; M4/M5 via ExecuTorch, RTX via llama.cpp.

### Normalized scores (1–100)

- **Tool use: 69/100.** MCP Atlas 75.5% beats both size-class peers by 13–21 points and approaches the GPT-5.5/Opus 4.8 band (79–81%); τ³-Banking 23.5%, GDPVal 953 and OSWorld 65.9% remain behind the closed frontier.
- **Reasoning: 70/100.** AIME 2026 94.7% (best of class), IFBench 77.0%, AA-LCR 80.0% and Beam128K 65.1% all lead the size class; GPQA Diamond 83.5% (AA) is a point below peers and HLE Text 22.0% is weak.
- **Context window: 66/100.** 131,072-token window with direct 128K retrieval evidence (Beam128K 65.1%, best of class); no 200K+ evidence.
- **Multimodal: 68/100.** Native text + image input; CharXiv Reasoning 78.8% leads the class, OmniDocBench 75.8 and ScreenSpot Pro 75.4 are second; MMMU Pro 74 mid. No video/audio input.
- **Coding: 74/100.** SWE-Bench Verified 76.0%, SWE-Bench Pro 51.2% and SciCode 43.6% all beat Gemma4-31B (SWE-Bench Pro and SciCode best of class); TerminalBench 2.1 51.7% trails Qwen3.6-27B's 60.7%.
- **Cost efficiency: 97/100.** $0.30/$1.10 per 1M hosted (self-host free), Apache 2.0 weights that run on a single 24 GB consumer GPU at ~1% quantization degradation — effectively free inference for local deployments.
- **Overall Score: 69.4/100.** Mean of the five quality dimensions. Glimmer leads its size class on most agentic, coding and math benchmarks; the folder's peer average (75.3) is higher, likely weighting size-class dominance more heavily than frontier-absolute gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
