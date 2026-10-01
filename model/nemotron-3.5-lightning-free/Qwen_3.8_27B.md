# Nemotron 3.5 Lightning Free — findings by Qwen 3.8 27B

- Source: NVIDIA Nemotron 3.5 Lightning (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (30B-A3B), Free tier
- **Short description:** NVIDIA's compact open-weight MoE (30B total / 3B active) built for high-volume, low-latency execution in always-on agents — hybrid Mamba-2 + MoE + attention architecture with Multi-Token Prediction, shipped for free on OpenCode Zen and in NVIDIA trial access; pairs well with a frontier planner for the hard steps.
- **Provider / access:** OpenCode Zen Free tier `opencode/nemotron-3.5-lightning-free` (evaluated entry); also NVIDIA NIM/build.nvidia.com trial, OpenRouter and ~5 other API providers; open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` / `-NVFP4`, plus GGUF via ggml-org).
- **Release / knowledge:** Released 2026-08-11 (Hugging Face GA; model dates Dec 2025 – May 2026); pre-training data cutoff September 2025, post-training cutoff May 2026 (NVIDIA model card).
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Zen Free); `nvidia/nemotron-3.5-lightning-30b-a3b` (NIM); `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (HF reference weights).
- **Context window:** native up to 1M tokens (validated 1M on GB200/B200/8×H100; 256K on a single H100); the evaluated free entry is curated at 262,144 tokens (256K) per repo meta — use a 1M-served endpoint for long-context work.
- **Modalities:** Text in, text out (NVIDIA card + AA). Reasoning: yes — configurable `enable_thinking` on/off. Tool calls: yes (qwen3_coder tool parser, auto tool choice). Languages: English + coding languages primary; ES/FR/DE/IT/JA supported.
- **Pricing (as of 2026-10-01):** Free on the OpenCode Zen / NVIDIA trial entry (rate-limited). Paid API: $0.06–0.08 in / $0.20–0.22 out per 1M, cached ~$0.04/1M (AA provider median $0.06/$0.20; llm-stats from $0.08/$0.20) — among the cheapest per-token hosted rates tracked.
- **Architecture:** 30B total / 3B active MoE; interleaved Mamba-2 + MoE + select-attention hybrid; MTP draft heads; DSpark/DFlash speculative decoding drafts; pre-trained on >20T tokens; OpenMDW-1.1 license (commercial use allowed). Claimed by NVIDIA: performance comparable to gpt-oss-120b at ~¼ the total parameters; ~30% faster than Qwen3.6-35B at similar accuracy on 10K tasks; measured 298.9 t/s output (AA, #1 of 142 in class), TTFT 0.58s.

### Raw benchmarks found

Agent / tool use (NVIDIA's consistent NeMo Gym / NeMo Evaluator harness, BF16 checkpoint, model card 2026-08-11):

- τ³-bench (Banking): **9.28%** (Qwen3.6-35B: 10.52, Gemma 4 26B: 14.02, Nemotron 3 Super: 12.37 — multi-turn banking tool use is a clear weak spot)
- GDPval-AA-V2: **832** (Qwen3.6-35B: 1015, Gemma 4 26B: 807 — just below the 900–1200 mid band)
- Terminal-Bench 2.1: **24.58%** (Qwen3.6-35B: 44.38, Gemma 4 26B: 37.22, GPT-OSS-20B: 15.17)
- PinchBench (agent task execution): **85.37%** — the model's highest published score (Qwen3.6-35B: 88.07, Nemotron 3 Super: 80.36)
- BrowseComp: **36.97%** (Qwen3.6-35B: 48.74, Gemma 4 26B: 26.30)
- AA-Briefcase / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **75.44%** (Qwen3.6-35B: 83.40, Gemma 4 26B: 79.61, GPT-OSS-20B: 71.46) — NVIDIA model card
- HLE (text-only, no tools): **11.72%** (Qwen3.6-35B: 19.56, Nemotron 3 Super: 20.30, GPT-OSS-20B: 13.76)
- MMLU-Pro: **81.94%** (Qwen3.6-35B: 85.63, GPT-OSS-20B: 76.40)
- AA-Omniscience: **17.50** (Nemotron 3 Super: 26.68, GPT-OSS-20B: 16.62)
- Artificial Analysis Intelligence Index: **13** (#29 of 142, median 8 — "well above average"; v4.3.2, AA fetched 2026-10-01); BenchmarkList ECI **116.50** (#161/398; open-weight #67/158)
- CritPt / LCR (vendor LCR below) / AA-LCR: **52.00** (Qwen3.6-35B: 61.06, GPT-OSS-20B: 32.88)

Coding:

- SWE-bench Verified: **51.56%** (Qwen3.6-35B: 70.12, Nemotron 3 Super: 63.08, GPT-OSS-120B-class reference: 52.44) — NVIDIA model card; vendor claim of gpt-oss-120b parity is borne out
- SWE-bench Multilingual: **39.33%** (Qwen3.6-35B: 63.40, GPT-OSS-120B-class: 41.93)
- SciCode: **32.60** (Gemma 4 26B: 40.28, GPT-OSS-120B-class: 38.63)
- Terminal-Bench 2.1 (agentic coding): 24.58% (above)
- SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Multimodal / instruction:

- Text-only model; no multimodal benchmarks apply. IFBench (loose): **71.88%** (best in its table — instruction following is a relative strength)

Long context:

- AA-LCR **52.00** at the served window; native 1M validated via vendor recipes (RULER 64K–1M on the base checkpoint per NVIDIA docs); no MRCR at 512K+ published.

### Normalized scores (1–100)

- **Tool use: 46/100.** Structured long-running task execution is strong (PinchBench 85.37%, best of its table; BrowseComp 36.97% tops the class) but genuine multi-turn tool use is weak: τ³-banking 9.28% and GDPval-AA-V2 832 sit below the mid references, and TB 2.1 24.58% trails its open peers.
- **Reasoning: 55/100.** GPQA 75.44% is solidly in the 60–80% mid band and MMLU-Pro 81.94% is strong, but HLE 11.72% (text-only) is at the floor and the AA Index of 13 is only modestly above median — a generation behind the 2026 frontier on hard reasoning.
- **Context window: 72/100.** The evaluated free entry is curated at 262,144 tokens (256K) — upper part of the 200K–500K band. The native model validates 1M (GB200/B200/8×H100 recipes; AA lists providers at 1M), so self-hosted or 1M-served deployments score in the 95+ band; AA-LCR 52.0 caps even that with only moderate long-context reasoning.
- **Multimodal: 15/100.** Text in / text out only — no image, audio, or video input (vendor card and AA both confirm).
- **Coding: 46/100.** SWE-bench Verified 51.56% is mid-pack for 2026 and matches gpt-oss-120b class (52.44), but SWE-bench Multilingual 39.33%, SciCode 32.60 and TB 2.1 24.58% keep it a tier below Qwen3.6-35B (70.12) — fine for single-issue fixes, not for frontier repo-scale work.
- **Cost efficiency: 100/100.** Free Zen / NVIDIA trial entry = free band; even the paid API at ~$0.06/$0.20 per 1M (with ~$0.04 cache) would score 97–99, and 298.9 t/s makes it the cheapest *and* fastest tracked option for bulk agent steps. Caveat: free-tier rate limits apply.
- **Overall Score: 46.8/100.** Mean of (46 + 55 + 72 + 15 + 46)/5 = 46.8. Best fit: the high-volume "workhorse" slot in a mixed-agent setup — thousands of cheap, fast, reliable structured steps (classification, extraction, small fixes, data processing) with a frontier model handling the hard agentic/coding steps.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (NVIDIA Hugging Face model card nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, full 14-row benchmark table vs Qwen3.6-35B / Gemma 4 26B / Nemotron 3 family / GPT-OSS-20B + architecture/training/licensing; NVIDIA docs evaluate page (base checkpoint RULER 64K–1M); artificialanalysis.ai/models/nemotron-3-5-lightning fetched 2026-10-01 (Intelligence Index 13, 298.9 t/s, $0.06/$0.20, 1M provider context); layer3labs.io benchmark guide 2026-09-09 citing the NVIDIA developer blog and build.nvidia.com model card; llm-stats.com pricing/262K context; benchmarklist.com ECI 116.50; OpenCode data page (usage rank #16, 289B tokens/week for the paid ID)); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
