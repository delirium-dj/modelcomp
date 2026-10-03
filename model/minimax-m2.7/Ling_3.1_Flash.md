# MiniMax M2.7 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiniMax M2.7
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.7 (standard + M2.7-highspeed latency variant; identical outputs)
- **Short description:** MiniMax's "first model deeply participating in its own evolution" — an open-weight sparse MoE agentic coder whose training included the model autonomously optimizing its own programming scaffold over 100+ rounds (30% performance gain).
- **Provider / access:** MiniMax — first-party API, NVIDIA NIM Endpoint; open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.7`) and ModelScope (April 2026); vLLM/SGLang; BF16 ~457GB, community GGUF down to ~60GB (1-bit), NVIDIA NVFP4 quantization.
- **Release / knowledge:** 2026-03-18 (API); weights April 2026. Knowledge cutoff not publicly disclosed.
- **IDs:** `MiniMax-M2.7`; folder `minimax-m2.7`.
- **Context window:** 205K tokens (200K per the AA article); max output 131K.
- **Modalities:** Text in, text out only.
- **Pricing (as of 2026-10):** $0.30 / $1.20 per 1M input/output (standard); cached input $0.06, cache write $0.375; **M2.7-highspeed** $0.60 / $2.40 (~100 tok/s); blended $0.22/M (7:2:1) or $0.525/M (3:1).
- **License:** Open weights under a **Modified-MIT / MiniMax Non-Commercial License** — initially MIT, updated shortly after the open-weight release to require MiniMax's written authorization for commercial use (drew developer criticism).
- **Architecture:** Sparse MoE, 230B total / 10B active (256 experts, 8 activated per pass; 62 layers; hidden 3072; RoPE; Query-Key RMSNorm; top-k routing). All training compute dedicated to "Code + Agent" domains.

### Raw benchmarks found

**Vendor-reported (MiniMax blog 2026-03-18 + GitHub):**
- SWE-Pro **56.22%** (matching GPT-5.3-Codex; +23.6pt over M2.1's 32.6%); SWE Multilingual **76.5%**; Multi-SWE-Bench **52.7%**.
- VIBE-Pro **55.6%** (nearly on par with Opus 4.6); Terminal-Bench 2 **57.0%** (up from M2.1's 47.9%); NL2Repo **39.8%**.
- PinchBench **86.2%** (1.2 points shy of Claude Opus 4.6, per HokAI).
- GDPval-AA Elo **1495** (AA article: 1494) — highest among open-weight models; second only to Opus 4.6, Sonnet 4.6, GPT-5.4; surpassing GPT-5.3.
- Toolathon **46.3%** ("global top tier"); MM Claw **62.7%** (close to Sonnet 4.6) with 97% skill compliance across 40+ complex skills (each >2,000 tokens).
- MLE Bench Lite (22 ML competitions on a single A30 GPU; 3 trials x 24h; autonomous short-term-memory / self-criticism / self-optimization loop): best run 9 gold / 5 silver / 1 bronze; average medal rate **66.6%** — second only to Opus-4.6 (75.7%) and GPT-5.4 (71.2%), tying Gemini-3.1 (66.6%).
- Self-evolution: internal M2.7 autonomously optimized a programming scaffold over 100+ rounds (failure-trajectory analysis, code modification, eval runs, keep/revert decisions) — **30% performance improvement**.

**Artificial Analysis (independent):**
- **Intelligence Index: 50** (AA article 2026-03-25; +8 over M2.5; ahead of MiMo-V2-Pro Reasoning 49 and Kimi K2.5 Reasoning 47; equivalent to GLM-5 Reasoning 50) **vs 23** (AA model page, v4.3 snapshot; page notes the model is "deprecated... only continue performance benchmarking for the default 10k input token workload") — conflicting snapshots, likely index re-basing; both reported.
- Gains vs M2.5: HLE +9pp, TerminalBench Hard +5pp, SciCode +4pp, IFBench +4pp, GPQA +3pp, LCR +3pp; **regression: τ²-Bench −11pp** (absolute values for these deltas not captured).
- ~87M output tokens on the Index (+55% vs M2.5's ~56M); 92M tokens generated (very concise vs median 140M); 61.4 tok/s (slower than average; median 74.1); **$176 to run the Index** — Pareto frontier of Intelligence vs Cost (GLM-5 Reasoning ~$547, Kimi K2.5 Reasoning ~$371, Gemini 3 Flash Preview ~$278 at equivalent or lower intelligence); $0.10 per Index task.

## Scores

- **Tool use: 69/100.** Toolathon 46.3%, MM Claw 62.7% with 97% skill compliance, PinchBench 86.2%, GDPval-AA Elo 1495, native Agent Teams / complex Skills / dynamic tool search; τ²-Bench regression (−11pp vs M2.5) noted.
- **Reasoning: 63/100.** Intelligence Index 50 (March snapshot) vs 23 (v4.3 snapshot) — conflict flagged; MLE Bench Lite 66.6% medal rate; absolute GPQA/HLE values not captured (deltas only: +3pp GPQA, +9pp HLE vs M2.5).
- **Context window: 70/100.** 205K tokens (200K per AA); LCR +3pp vs M2.5 (absolute not captured); no MRCR captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 75/100.** SWE-Pro 56.22% (matching GPT-5.3-Codex), SWE Multilingual 76.5%, Multi-SWE-Bench 52.7%, VIBE-Pro 55.6%, TB 2 57.0%, NL2Repo 39.8%, PinchBench 86.2% — class-leading for its size and price.
- **Cost efficiency: 89/100.** $0.30/$1.20 per 1M with $0.06 cache reads; open weights (Modified-MIT — commercial use needs MiniMax's written authorization); AA cost-per-Index $0.10 is Pareto-frontier; HighSpeed variant doubles price.
- **Overall Score: 58.4/100.** Mean of Tool use 69, Reasoning 63, Context window 70, Multimodal 15, Coding 75 = 58.4.

> **Gap vs folder average (65.9): −7.5.** The peer set appears to weight the AA Intelligence Index 50 and the strong coding rows; this report also credits those fully, but the text-only Multimodal penalty (15), the 205K context, the Modified-MIT commercial-use restriction, and the conflicting Index snapshots (50 vs 23) hold the Overall down. The coding evidence (SWE-Pro 56.22%, TB 2 57.0%, PinchBench 86.2%) is genuinely strong and fully credited in Coding.

## Notes

- Verification trail: MiniMax blog "MiniMax M2.7: Early Echoes of Self-Evolution" (2026-03-18; all vendor benchmarks; MLE Bench Lite methodology), GitHub `MiniMax-AI/MiniMax-M2.7` (self-evolution details; recommended params temp 1.0 / top_p 0.95 / top_k 40), Artificial Analysis article (2026-03-25; Index 50; deltas; cost analysis; 200K; text-only), AA model page (Index 23; deprecated status; 205K; 61.4 tok/s; 92M tokens), HokAI (architecture detail; PinchBench 86.2; Modified-MIT license history; HighSpeed pricing; 46 tok/s), AI/TLDR (specs table; benchmark list; license), NVIDIA NIM listing.
- Known conflicts: Intelligence Index 50 (article) vs 23 (model page); context 205K vs 200K; GDPval-AA Elo 1495 (vendor) vs 1494 (AA); license MIT → Modified-MIT/Non-Commercial.
- Open questions: absolute GPQA/HLE/τ²-Bench values; independent SWE-Pro replication; whether the Modified-MIT terms still apply.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: absolute reasoning-benchmark values, independent replications, license status.
