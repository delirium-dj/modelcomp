# Muse Glimmer 30B — findings by Big Pickle

- Source: Meta Superintelligence Labs / Muse Glimmer (`meta-models/Muse-Glimmer-30B`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B (Meta's first open-weights release since Llama 4, and its first under Apache 2.0)
- **Short description:** A ~29.6B-parameter **dense** multimodal causal LM with a dedicated ~1.8B perception encoder, **distilled from Meta's Muse Spark** and purpose-built for always-on local agent workflows on consumer hardware. It is the best size-class agentic model in this dataset on tool benchmarks (MCP-Atlas 75.5, DeepSearch QA 74.6, τ³-Banking 23.5) and uniquely cheap to run — ~18 GB at 4-bit, 131K context with a ~1.8 GB KV cache so it fits a single GPU at full context. Its weaknesses are knowledge work and factuality: GDPval-AA 953 Elo, an 82% hallucination rate, and 51.7% on Terminal-Bench 2.1.
- **Provider / access:** **No first-party Meta API** — Meta was not serving the model at release; weights are on Hugging Face (`meta-models/Muse-Glimmer-30B`) with an official GGUF build (`meta-models/Muse-Glimmer-30B-GGUF`) and an Ollama library entry. Local runtimes: vLLM, SGLang, llama.cpp, ExecuTorch. Hosted OpenAI-compatible Chat Completions via OpenRouter (`meta/muse-glimmer-30b`), Together AI, DeepInfra, Fireworks AI, NVIDIA NIM (`build.nvidia.com/meta/muse-glimmer-30b`), Vercel AI Gateway, Systalyze, FlexAI, Empirio Labs, Hyper/kilo.ai, llmgateway, Requesty and TEE. **No OpenCode Zen ID** — confirmed: models.dev lists no `Inkling`-style `glimmer` entry under the `opencode` or `opencode-go` providers, matching this folder's `meta.json` (`noFreeId: true`).
- **Release / knowledge:** released **2026-08-10** (Meta AI Research blog; HF card says August 2026). **Knowledge cutoff 2026-01-04.** Trained on 100+ languages; training data is publicly available data plus third-party and Meta-product data, curated and enriched by external vendor networks and Meta personnel.
- **IDs:** `meta-models/Muse-Glimmer-30B` (Hugging Face weights), `meta/muse-glimmer-30b` (OpenRouter, NVIDIA NIM, Vercel, kilo), `muse-glimmer-30b` (Together, DeepInfra, Requesty, llmgateway, empiriolabs), `accounts/fireworks/models/muse-glimmer-30b` (Fireworks). No Free ID on Zen.
- **Context window:** **128K tokens by default (131,072 on every host in models.dev)**, with a documented "extension" for longer contexts. Meta's own docs say "128K by default; longer contexts supported" and AA describes a "128K token context window (plus extension)" — **no host actually serves more than 131,072**, so 128K is the verifiable served ceiling. Max output varies sharply: 131,072 (Fireworks, Together, DeepInfra, NVIDIA, Vercel), 117,964 (Together via nano-gpt, kilo), 32,768 (Empirio), 20,480 (Requesty), **16,384 (OpenRouter)**.
- **Modalities:** **text and image in; text out.** Vision encoder ~1.8B (~1/17 of the model) with interleaved text+image support. Reasoning yes, with a **reasoning strength** control set through the system prompt as `Reasoning strength: <value>` — **low / medium / high / xhigh** (all published benchmarks are at **high**). Tool calls supported; all four AA-tracked providers support function calling and JSON mode. No audio, no video output. kilo.ai additionally advertises PDF input.
- **Pricing (as of 2026-09-25):** cheap and unusually spread out — **$0.30 in / $1.10–$1.20 out per 1M** on OpenRouter, DeepInfra, FlexAI and llmgateway; **$0.35 / $1.50** on Fireworks, Together, nano-gpt and Vercel; **$0.20 / $0.80** on Empirio Labs; **$0.10 / $1.00** on Systalyze; **$0.00 / $0.00** on NVIDIA NIM and Requesty. AA measured cost per agentic task at **$0.03 (Systalyze)**, $0.05 (DeepInfra), $0.06 (Fireworks), $0.09 (Together) — among the cheapest agents tracked. Self-hosting the Apache 2.0 weights is free outright. One outlier: `muse-glimmer-30b-tr` on llmtr is listed at $2/$5.
- **Architecture:** ~29.6B dense decoder-only multimodal transformer (not MoE), including a ~1.8B vision encoder; **hybrid attention with three sliding-window layers for every global layer**, which holds KV cache to ~1.8 GB minimum at the pre-extension 128K context — enough to run full context on a single H100 at BF16 (~60 GB weights) or on a high-spec MacBook / RTX 5090 at 4-bit (~18 GB). Trained from Muse Spark's outputs rather than from scratch. **Apache 2.0** — the most permissive license Meta has shipped, scoring **44 on the AA Openness Index** (level with DeepSeek V4 Flash 0731, GLM-5.2 and Ling 3.0 Flash, and ahead of Llama 4 Maverick). Published local throughput: RTX 5090 74.9 tok/s baseline → **233.4 tok/s with DFlash speculative decoding (3.1×)**; Apple M4 Max 23.7 → 37.8 (1.5×); M5 Max 26.6 → 50.2 (1.8×).

### Raw benchmarks found

> Official numbers are the **Muse Glimmer-30B, High Reasoning** column of the Meta model card, compared against Gemma4-31B (Thinking) and Qwen3.6-27B (Thinking). Independent Artificial Analysis and evals.report confirmations are labelled separately. Decoding params: temperature 1.0, top_p 0.95, top_k 64.

Agent / tool use:

- Terminal-Bench 2.1: **51.7%** (official, with Terminus 2 harness; evals.report **Verified** Aug 10 2026, listed 9th of 14 open-weights entries; AA's own run **52%** — vs Qwen3.6-27B 60.7, Gemma4-31B 43.4)
- Tau3-Banking: **23.5%** official, **24%** on AA — **best in its size class**, ahead of Qwen3.6-27B 17% and Gemini 3.5 Flash-Lite 18% (AA)
- GDPval-AA v2: **953** Elo (official and AA) — **below the 1,000 human baseline** and behind Qwen3.6-27B 1141, Gemini 3.5 Flash-Lite 1141 and Kimi K2.5 1004 at the same intelligence level
- MCP-Atlas: **75.5%** (Public subset; official — vs Qwen3.6-27B 62.5, Gemma4-31B 54.2; ahead of Inkling's 74.1 on the full set and Muse Spark 88.1 on Benchgen)
- DeepSearch QA: **74.6%** (official — vs Qwen3.6-27B 71.1, Gemma4-31B 61.7)
- WildClawBench (Claw-Eval family): **47.6%** (official — vs Qwen3.6-27B 43.2, Gemma4-31B 37.6)
- OSWorld-Verified: **65.9%** (official — vs Qwen3.6-27B 75.6, Gemma4-31B 58.5)
- Gaia2: **43.3%**; SkillsBench (with skills): **44.3%** (official)
- ClawProBench / Toolathon / BrowseComp / Toolathlon: **no verified public score found**
- Safety under attack: Siren AgentDojo attack success rate **28.4%** at **94.2% utility** (official); CI Memories violation **26.4%** at 64.8 coverage

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (AA, official card row "GPQA Diamond (AA)") — vs Gemma4-31B 85.7, Qwen3.6-27B 84.2
- HLE: **22.0% text-only** (AA) — vs Gemma4-31B 23.6, Qwen3.6-27B 23.1; **no with-tools HLE published**
- Artificial Analysis Intelligence Index: **35** (Muse Glimmer at high; AA launch analysis) — 21 points above Llama 4 Maverick (14), 5 above Gemma 4 31B (30), effectively matching Kimi K2.5 (36) at 33× fewer parameters, just behind Qwen3.6 27B (38) and Ling 3.0 Flash (38); proprietary Muse Spark 1.2 (xhigh) sits at 57
- AIME 2026: **94.7%** (official — vs Qwen3.6-27B 94.1, Gemma4-31B 89.2)
- AA-Omniscience: Index **-33** with an **82% hallucination rate** (AA) — versus 49% for Qwen3.6-27B and 34% for Gemini 3.5 Flash-Lite; accuracy itself matches peers, so the entire gap is hallucination
- AA-LCR: **80.0%** (official — vs Qwen3.6-27B 73.3, Gemma4-31B 68.3)
- IFBench: **77.0%** (official — vs Qwen3.6-27B 70.8, Gemma4-31B 76.0)
- BenchLM composite: **52.4–52.5/100**, public rank **#108–#116** (estimated, 90% interval 42.5–62.3, only 14 public results; category sub-scores Agentic 65.9, Coding 57.8, Math 94.7, Multimodal 75.7, Instruction-following 77.0)
- CritPt / SimpleQA / Global-MMLU / ARC-AGI: **no verified public score found**

Coding:

- SWE-bench Verified: **76.0%** (official — vs Qwen3.6-27B 77.2, Gemma4-31B 66.6)
- SWE-bench Pro: **51.2%** (official — vs Qwen3.6-27B 50.2, Gemma4-31B 36.9)
- SciCode: **43.6%** (official; **#12 of 19** on the BenchLM leaderboard — ahead of Ling 3.0 Flash 41.2 and Nemotron 3 Ultra 44.6, well behind Sakana Fugu 60.1)
- AA Coding Index: not published for this model
- LiveCodeBench / DeepSWE / Vibe Code Bench / FrontierCode / FrontierSWE: **no verified public score found** (notably, Muse Glimmer has no LiveCodeBench, Vibe Code Bench or FrontierCode row on BenchLM or evals.report)
- Scaffold compatibility called out as a feature: OpenClaw, Hermes Agent and similar orchestration patterns (Ollama library card)

Long context:

- **Beam128K: 65.1%** (official — a targeted 128K long-context benchmark; vs Qwen3.6-27B 63.0, Gemma4-31B 58.2)
- AA-LCR **80.0%** (long-context reasoning; AA also tracks the model at 131k context on all four providers)
- No MRCR / RULER / GraphWalks needle-retrieval score published at 128K or beyond; the 128K "extension" is undocumented and unserved by any host
- Community local run (oMLX, M5 Max, oQ4): 696.1 tok/s prefill, 49.4 tok/s generation, 25.7 GB peak footprint, DFlash draft model enabled

### Normalized scores (1–100)

- **Tool use: 68/100.** Squarely in the methodology's mid band — Terminal-Bench 2.1 51.7% (Verified by evals.report, confirmed by AA at 52%), Tau3-Banking 23.5% and GDPval-AA 953 Elo all land mid — but lifted toward the top of that band by the best-in-class tool marks: MCP-Atlas 75.5%, DeepSearch QA 74.6%, OSWorld-Verified 65.9% and a WildClawBench 47.6%. Capped at 68 because agentic knowledge work is the model's own acknowledged weakness (953 Elo is below the human baseline) and there is no Toolathlon or ClawProBench score.
- **Reasoning: 70/100.** Above the 55–65 mid band on GPQA Diamond 83.5%, AIME 2026 94.7%, IFBench 77.0% and especially AA-LCR 80.0%. Held to 70 by HLE text-only 22.0%, an AA Intelligence Index of 35 (top of the mid band, far from the 60+ frontier), and the worst factuality profile in its class — an **82% hallucination rate** on AA-Omniscience driving the index to -33.
- **Context window: 64/100.** 131,072 tokens is the **verifiable** served window on every host, which is the top of the methodology's 100K–200K band (50–64); no host serves Meta's undocumented "extension". Placed at the ceiling of the tier because the long-context evidence is genuinely good for a 128K model — Beam128K 65.1% and AA-LCR 80.0% — and because the hybrid-attention KV cache (~1.8 GB) means the full window is practical rather than nominal.
- **Multimodal: 70/100.** Text + image in with a dedicated ~1.8B perception encoder and interleaved image handling puts it at the top of the methodology's "+image in" band (60–70). Justified at the top by unusually strong vision-document numbers for the tier — CharXiv Reasoning 78.8% (best of the three compared), OmniDocBench v1.5 75.8%, ScreenSpot Pro 75.4%, MMMU-Pro 74% — but it is image-only: no audio, no video output, and no MMMU-Pro audio/omni-modal suite.
- **Coding: 68/100.** SWE-bench Verified 76.0% is a real strength and SciCode 43.6% clears the mid band's <40% trigger. Held near the bottom of the mid range because the other two anchors are absent or weak: **no LiveCodeBench published at all**, SWE-bench Pro only 51.2%, Terminal-Bench 2.1 51.7%, no DeepSWE, no Vibe Code Bench, no FrontierCode, and SciCode well under the 55% frontier line. BenchLM's Coding sub-score of 57.8 supports the lower placement.
- **Cost efficiency: 95/100.** Materially cheaper than the methodology's ~$0.60/$2.20 ≈ 92 anchor: **$0.30 in / $1.10–$1.20 out** on OpenRouter, DeepInfra and FlexAI, $0.35/$1.50 on Fireworks/Together/Vercel, $0.20/$0.80 on Empirio, $0.10/$1.00 on Systalyze, and **$0/$0 on NVIDIA NIM and Requesty**. AA's measured $0.03–$0.09 per agentic task is the cheapest in this dataset, and the Apache 2.0 weights make self-hosting free outright. Held at 95 rather than higher because $0 pricing only exists on two hosts, not the tier scored.
- **Overall Score: 68/100.** (68 + 70 + 64 + 70 + 68) / 5 = 68.0 → 68. Best fit: **always-on local or private agentic loops on a single consumer GPU** — best-in-class tool use at 30B, ~18 GB at 4-bit, 233 tok/s on a 5090 with speculative decoding, and the cheapest hosted agentic tokens here. Two hard limits to design around: an 82% hallucination rate means it must be grounded or verified rather than trusted on facts, and GDPval-AA 953 / 51.7% Terminal-Bench mean knowledge-work deliverables are not its strength — for hosted frontier-quality agentic work, Muse Spark 1.2 or Qwen3.6-27B are the better buys.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (Meta AI Research launch blog, the `meta-models/Muse-Glimmer-30B` Hugging Face model card, the official GGUF model card, dev.meta.ai Muse Glimmer docs, the NVIDIA NIM model card, the Ollama library card, Artificial Analysis's Muse Glimmer launch article and its provider-benchmarking page, evals.report's Terminal-Bench 2.1 leaderboard, BenchLM's SciCode leaderboard and Muse Glimmer comparison pages, the models.dev provider catalog, and a community oMLX local benchmark); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Meta.md`, using the same headings.
