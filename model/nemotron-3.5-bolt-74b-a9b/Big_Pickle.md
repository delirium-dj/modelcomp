# Nemotron 3.5 Bolt 74B-A9B — findings by Big Pickle

- Source: NVIDIA (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B (full release name: Nemotron 3.5 Bolt 74B-A9B 24GB)
- **Short description:** NVIDIA's open-weight local-agent model, released 2026-10-15 alongside Nemotron 3.5 Super VL and timed with the RTX Spark laptop launch (2026-10-16). Compressed from Nemotron 3.5 Super VL (120B-A12B) using Star Elastic architecture search + 2-bit Quantization-Aware Distillation so a capable multimodal agent fits in 24GB of memory. Designed for everyday agentic tasks (coding, web browsing, tool calling, terminal use) on consumer hardware. A smaller sibling, Bolt E4B 4GB, is scheduled for 2026-10-23. Not an alias of any other entry.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (IQ2), `-BF16`, `-24GB-GGUF`, `-24GB-LiLiCorr` (speculative decoding drafter); ModelScope; NVIDIA NIM. Day-one runtimes: llama.cpp, vLLM, SGLang, Ollama, LM Studio, Unsloth. No OpenCode Zen free ID (`meta.json` `noFreeId: true`).
- **Release / knowledge:** released 2026-10-15 (Hugging Face; NVIDIA research page; kie.ai; OneSignalDesk — all agree). Knowledge cutoff not publicly stated in accessible excerpts.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (Hugging Face, OpenMDW-1.1).
- **Context window:** 262,144 tokens (256K) total / 128K max output (repo `meta.json`; NVIDIA research page and ModelScope confirm 256K shared context for prompts, tool results, and conversation history).
- **Modalities:** text, image in; text out (repo `meta.json`). NVIDIA's research page and kie.ai also list **video** input (C-RADIO vision encoder) — the HF card and NVIDIA blog emphasize text+image; video support is stated by NVIDIA research and kie.ai but not by the repo meta. Treated as text+image confirmed, video probable. Tool calls; reasoning channel.
- **Pricing (as of 2026-10-18):** open weights under **OpenMDW License Agreement v1.1** — commercial and non-commercial use permitted; no per-token list price. Self-host free. Designed to fit 24GB (consumer RTX hardware); BF16 checkpoint available for post-training and custom quantization. AA provider median not yet published (model is 3 days old).
- **Architecture:** hybrid Mamba-2/Transformer sparse MoE, 74B total / 9B active, compressed from Nemotron 3.5 Super VL (120B-A12B) via Star Elastic (router-guided architecture search + end-to-end compression). Experts quantized to ~2.06 bits/element (IQ2) for the 24GB checkpoint. C-RADIO vision encoder. LiLiCorr speculative-decoding drafter achieves 84 TPS on RTX Spark (AIPerf SPEED-Bench-Coding 83.99 TPS; Surface Laptop Ultra, 128GB, llama.cpp, Windows 11 ARM x64). 52 layers, hybrid sliding-window + full attention.

### Raw benchmarks found

> All vendor-reported figures below come from the NVIDIA technical report (2026-10-15, Table 7) and the Hugging Face model card. The 24GB IQ2 column is the primary deployment target; BF16 is listed for reference. Independent numbers (BenchLM, AA via kie.ai) are marked as such. Scores for the 24GB IQ2 variant are used for scoring unless noted.

Agent / tool use (24GB IQ2):

- Terminal-Bench 2.1: **50.98%** (NVIDIA tech report; BF16 53.93; BenchLM 51.0) — vs Qwen3.6-35B-A3B 44.38, Gemma 4 26B-A4B 37.22, Lightning 30B-A3B 23.46
- BrowseComp: **66.75%** (NVIDIA tech report; BF16 70.00; BenchLM 66.8) — #2 among open models with similar memory footprint; vs Qwen3.6-35B-A3B 48.74
- PinchBench: **87.82%** (NVIDIA tech report; BF16 90.35) — **#1 in class** (models fitting 24GB with 4-bit quantization)
- WebArena (vision): **50.86%** (NVIDIA tech report; BF16 50.25) — #2 in class; screenshot-based browser interaction, 812-task public set
- MCP-Atlas: **52.20%** (NVIDIA tech report; BF16 55.60; BenchLM 52.2) — NVIDIA notes Qwen3.6-35B-A3B's reported 62.8 was not reproducible (their run: 51.2)
- τ³-Bench (Banking): **17.01%** (NVIDIA tech report; BF16 17.01; BenchLM 17.0) — notably weak
- GDPVal-AA-V2: **28.47** (NVIDIA tech report; BF16 31.13) — Elo-style score
- OSWorld / OSWorld-Verified: **no verified public score found**
- HLE w/ tools: **no verified public score found** for Bolt specifically

Reasoning / knowledge (24GB IQ2):

- GPQA Diamond: **86.43%** (NVIDIA tech report; BF16 88.83; BenchLM 86.4) — near-frontier for a 2-bit local model; vs Qwen3.6-35B-A3B 83.40
- HLE (no tools): **25.30%** (NVIDIA tech report; BF16 28.73; BenchLM 25.3) — vs Qwen3.6-35B-A3B 19.56
- SciCode: **41.02%** (NVIDIA tech report; BF16 44.49) — vs Qwen3.6-35B-A3B 35.33
- AA-LCR: **64.06%** (NVIDIA tech report; BF16 67.38) — long-context reasoning
- AA-Omniscience (accuracy): **16.90** (NVIDIA tech report; BF16 21.80)
- AA-Omniscience (non-hallucination): **61.27** (NVIDIA tech report; BF16 56.14 — IQ2 variant scores higher, unusual)
- IFBench (instruction loose): **66.17%** (NVIDIA tech report; BF16 68.71)
- Artificial Analysis Intelligence Index: **21** (independent, via kie.ai; #4 of 67 comparable open models; class median 8)
- BenchLM overall: **45.21 / 100** (independent, 8 sourced benchmarks); agentic lane 34.5 (#82/128); knowledge lane 41.9 (#110/184); reasoning lane 73.7 (unranked)

Coding (24GB IQ2):

- Terminal-Bench 2.1: **50.98%** (same as agentic row — coding/terminal overlap)
- SciCode: **41.02%** (same as reasoning row)
- SWE-bench Verified: **no verified public score found** for Bolt specifically (BenchLM shows "Coming soon"; the parent Super VL scores 66.70 on TB2.1 per NVIDIA's separate Super VL table)
- LiveCodeBench: **no verified public score found**
- SWE-bench Multilingual: **no verified public score found**
- AIPerf SPEED-Bench-Coding: **83.99 TPS** (throughput, not accuracy — NVIDIA's speed benchmark on RTX Spark)

Multimodal:

- WebArena (vision): **50.86%** (NVIDIA tech report — screenshot-based browser interaction; this is the primary multimodal agentic signal)
- MMMU / MMMU-Pro: **no verified public score found**
- C-RADIO vision encoder confirmed (tech report); video input stated by NVIDIA research and kie.ai but not by the repo meta

Long context:

- AA-LCR: **64.06%** (NVIDIA tech report)
- No RULER or MRCR score published for Bolt specifically (the parent Nemotron 3.5 family docs show RULER-100 @ 256K: 96.30 for Nemotron 3 Super, not Bolt)

### Scores

Scores are for the 24GB IQ2 variant — the primary deployment target referenced in `meta.json` and the model's reason for existing. The BF16 variant scores ~2–5 points higher on most benchmarks but requires substantially more hardware.

- **Tool use: 58/100.** PinchBench 87.82% is #1 in its memory class; BrowseComp 66.75% is strong (#2 open in class); WebArena (vision) 50.86% is solid for a local model. Offsets: Terminal-Bench 2.1 50.98% is mid in absolute terms (vs Beam's 80.1, GLM-5.2's 81.0); MCP-Atlas 52.20% is mid; τ³-Bench 17.01% is notably weak; no OSWorld or GDPval-AA Elo to round out the picture.
- **Reasoning: 65/100.** GPQA Diamond 86.43% is excellent for a 2-bit 24GB model (near GLM-5's 86.0, the full 744B frontier-adjacent model); AA-LCR 64.06% verifies long-context reasoning; AA Index 21 (#4 of 67 comparable open models) is a solid independent placement. Offsets: HLE 25.30% is mid; SciCode 41.02% is mid; AA-Omniscience 16.90 is low; the 2-bit quantization costs ~2–5 points vs BF16 on every benchmark.
- **Context window: 72/100.** 256K is above the 200K tier and sufficient for most local agent workflows. AA-LCR 64.06% verifies real-world long-context fidelity. Offsets: 256K is below the 1M tier common among frontier models; no RULER or MRCR score published for Bolt specifically.
- **Multimodal: 62/100.** C-RADIO vision encoder; text + image input confirmed; video input stated by NVIDIA research and kie.ai (probable but not confirmed by the repo meta). WebArena (vision) 50.86% is a genuine multimodal agentic signal. Offsets: no MMMU or MMMU-Pro score; the 2-bit quantization may degrade visual feature extraction; multimodal capability is secondary to the agentic/text focus.
- **Coding: 55/100.** Terminal-Bench 2.1 50.98% and SciCode 41.02% are the only coding signals; both are mid in absolute terms. Offsets: no SWE-bench Verified, LiveCodeBench, or SWE-bench Multilingual score exists for Bolt; the model is designed for local agent workflows, not SWE-bench-style repo engineering; by October 2026, TB2.1 50.98 is well behind the frontier (Fable 5.1: 85.0, Beam: 80.1).
- **Cost efficiency: 96/100.** Open weights (OpenMDW-1.1, commercial use OK); free self-host; fits 24GB consumer hardware (RTX Spark, GeForce RTX PCs); 84 TPS with LiLiCorr speculative decoding; no per-token bill. This is the model's core value proposition. Offsets: 24GB is still a high-end consumer GPU; the IQ2 quantization costs accuracy; no API free tier.
- **Overall Score: 62/100.** Half-up mean of Tool use (58), Reasoning (65), Context window (72), Multimodal (62), Coding (55) = 312/5 = 62.4 → 62. Cost efficiency (96) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Video input discrepancy:** the repo `meta.json` lists "Text, image in; text out." NVIDIA's research page and kie.ai state text, images, **and video** input. The HF card emphasizes text+image. Treated as text+image confirmed, video probable but unverified by the primary card.
- **2-bit vs BF16 gap:** the 24GB IQ2 checkpoint loses ~2–5 points on every benchmark vs BF16 (TB2.1: 50.98 vs 53.93; GPQA: 86.43 vs 88.83; BrowseComp: 66.75 vs 70.00). This is the expected cost of fitting in 24GB. The BF16 checkpoint exists for users with more hardware.
- **MCP-Atlas Qwen discrepancy:** NVIDIA reports Qwen3.6-35B-A3B's MCP-Atlas score as 62.8 in the original source but could only reproduce 51.2 in their evaluation. NVIDIA's numbers are used consistently across their comparison table.
- **AA-Omniscience anomaly:** the 24GB IQ2 variant scores *higher* on non-hallucination (61.27) than BF16 (56.14). This is unusual — quantization typically increases hallucination. Possible explanation: the 2-bit model is more conservative/less confident, reducing false assertions. Both listed without editorializing.
- **No SWE-bench or LiveCodeBench:** Bolt has no SWE-bench Verified, SWE-bench Multilingual, or LiveCodeBench score. Its coding evaluation is limited to Terminal-Bench 2.1 and SciCode. This is a coverage gap, not a model limitation — NVIDIA focused evaluation on agentic/local benchmarks.
- **Parent model scores:** the Nemotron 3.5 Super VL parent (120B-A12B) scores substantially higher on every benchmark (TB2.1: 61.94 vs 50.98; GPQA: 90.78 vs 86.43). Bolt is a compressed derivative, not a from-scratch small model. The compression trade-off is deliberate: 24GB footprint vs ~2–5 points of accuracy.
- **Very young model:** 3 days old at time of writing. BenchLM has 8 sourced benchmarks (overall 45.21); AA Index 21 is independent. LMArena and Vals AI have not yet covered it. Coverage will improve.
- **Knowledge cutoff:** not publicly stated in accessible excerpts. The model was trained on data current as of at least mid-2026 (parent Super VL's training data); the exact cutoff is unknown.

### Sources

- NVIDIA research page: https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/
- NVIDIA technical report (PDF): https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf
- Hugging Face model card (24GB IQ2): https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- Hugging Face LiLiCorr drafter: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-LiLiCorr
- kie.ai explainer: https://kie.ai/blog/what-is-nemotron-3-5-bolt
- OneSignalDesk (2026-10-18): https://onesignaldesk.com/news/nvidia-nemotron-3-5-bolt-local-agents
- ModelScope announcement: https://x.com/ModelScope2022/status/2111095063828668457
- BenchLM comparisons: https://benchlm.ai/compare/glm-5-1-vs-nemotron-3-5-bolt-74b-a9b, https://benchlm.ai/compare/nemotron-3-5-bolt-74b-a9b-vs-nemotron-3-ultra
- NVIDIA Nemotron 3.5 family docs (parent scores): https://docs.nvidia.com/nemotron/nightly/nemotron/super3/evaluate.html

**Big Pickle (opencode/big-pickle)** — 2026-10-18
