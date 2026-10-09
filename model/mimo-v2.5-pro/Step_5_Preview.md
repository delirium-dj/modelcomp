# MiMo-V2.5-Pro — findings by Step 5 Preview

- Source: Xiaomi MiMo (`mimo-v2.5-pro`, weights `XiaomiMiMo/MiMo-V2.5-Pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro (Xiaomi MiMo team)
- **Short description:** Xiaomi's most capable open model to date (released 2026-04-27, MIT weights): a 1.02T-parameter MoE with 42B active per token, hybrid attention (SWA:GA interleaved 6:1, 128-token window — ~7× smaller KV-cache), three natively integrated MTP modules (~3× output throughput), trained on 27T tokens in FP8, and post-trained with SFT → domain-specialized RL → Multi-Teacher On-Policy Distillation. It is built for "harder goals": thousand-plus-tool-call autonomous trajectories, complex software engineering and ultra-long-context coherence. Vendor demos: a complete SysY→RISC-V compiler in Rust scoring 233/233 in 4.3 h / 672 tool calls, and an 8,192-line multi-track video editor in 11.5 h / 1,868 tool calls.
- **Provider / access:** Xiaomi MiMo API Platform, AI Studio, Hugging Face + ModelScope open weights (FP8), SGLang and vLLM cookbooks; 25 provider offerings on aggregators (OpenRouter, OpenCode Go, Novita, DeepInfra…).
- **Release:** 2026-04-27.
- **Context window:** 1M tokens (instruct); the Base checkpoint is 256K.
- **Modalities:** Text in → text out per the model card (llmboard metadata lists audio input, but the card publishes no audio benchmark — treat as unverified). Thinking/reasoning parser `mimo`; tool-call parser `mimo`; recommended sampling temperature 1.0, top-p 0.95.
- **Pricing (as of 2026-10-09):** official $0.435/M input, $0.87/M output via Xiaomi (unchanged from the previous generation per the launch post); third parties from $0.40/$0.80 (CrofAI) up to $1/$3 (DeepInfra, HF, ZenMux); MIT weights free to self-host.
- **Architecture:** 70 layers (1 dense + 69 MoE), hidden 6144, 128 Q heads / 8 KV heads (GQA), 384 routed experts (8 per token), 10 full-attention + 60 SWA layers, 3 MTP layers.

### Raw benchmarks found

Vendor model card / launch blog (base-model settings where marked):

- SWE-bench Verified: **78.9%**; SWE-bench Pro: **57.2%**; SWE-bench (AgentLess): 35.7%
- Terminal-Bench 2.0: **68.4%** (llmboard, vendor evidence); Terminal-Bench 4: 1.5% (HF eval-results widget)
- MiMo Coding Bench (in-house): **73.7%**; τ³-Bench: **72.9%**; ClawEval Pass³: **64.0%** at ~70K tokens/trajectory (blog: 40–60% fewer tokens than Opus 4.6 / Gemini 3.1 Pro / GPT-5.4 at comparable capability); WildClawBench: 43.0%; Finance Agent v2: 41.5%
- MMLU: **89.4%**; MMLU-Redux: 92.8%; MMLU-Pro: **68.5%**; DROP 86.3%; ARC-Challenge 97.2%; HellaSwag 89.8%; WinoGrande 85.6%; TriviaQA 81.3%; BBH 88.4%; C-Eval 91.5%; CMMLU 90.2%; GlobalMMLU 83.6%
- GPQA-Diamond: **66.7%** (base, 5-shot); GSM8K 99.6%; MATH 86.2%; AIME 24&25 (2-shot): **37.3%**
- HumanEval+: 75.6%; MBPP+: 74.1%; LiveCodeBench v6: **39.6%**
- GraphWalks (OpenAI, long-context BFS/parents): **0.56/0.92 at 512K, 0.37/0.62 at 1M** (V2 Pro collapses to 0.00 at 1M)

Third-party:

- AA IFBench: **79.86%**; AA LCR v1.1: **79.67%**; AA SciCode subtasks: **50.58%** (Artificial Analysis via llmboard)
- LM Arena Text: **1,465 Elo** (~87th percentile of 220 models; coding arena ~1,502)
- LLMBoard aggregate: **45.8** (28 benchmark families, 100% coverage)
- GPQA/AIME post-trained (non-base) values, HLE, ARC-AGI: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-Bench 72.9%, ClawEval Pass³ 64% and the in-house MiMo Coding Bench 73.7% show genuine class-leading agentic work for an open model — the 1,000+ tool-call demos are the strongest qualitative evidence; held mid-band by WildClawBench 43.0%, Finance Agent v2 41.5% and no MCP-Atlas or GDPval number.
- **Reasoning: 58/100.** MMLU 89.4% / MMLU-Pro 68.5% are solid but GPQA-Diamond 66.7% (base setting) and AIME 37.3% sit mid-band, and there is no post-trained GPQA, HLE or ARC-AGI figure published — a real gap for a model this size.
- **Context window: 82/100.** A 1M-token window backed by the strongest long-context cohere-ness story in its class: GraphWalks 0.37/0.62 at 1M (where its predecessor scores 0.00) and AA-LCR 79.67%. Docked below the 95–100 band because 1M is still ~40–60% accuracy, not the ≥98% retrieval that band describes, and LCR is not near-perfect.
- **Multimodal: 14/100.** The model card is text-only (text in → text out), the methodology's text-only band 10–20; llmboard metadata claims audio input but no audio benchmark is published, so it stays in the text-only band with the caveat noted.
- **Coding: 72/100.** SWE-bench Verified 78.9%, SWE-bench Pro 57.2%, TB 2.0 68.4% and SciCode 50.58% are strong open-weights coding — the "closing the gap to Opus 4.6" claim is half-supported — but LiveCodeBench 39.6%, SWE-bench Pro 57.2% and the TB 4.0 1.5% outlier keep it out of the frontier band.
- **Cost efficiency: 95/100.** $0.435/$0.87 per million tokens is deep in the cheap tier (methodology: ~$0.6/$2.2 ≈ 92, ~$0.1/$0.2 ≈ 97–99), with MIT weights, MTP-tripled throughput and 42B-active efficiency — the token-efficiency story (40–60% fewer tokens/trajectory than Opus 4.6-class models) is the real cost win.
- **Overall Score: 58/100.** Best-fit recommendation: the best-value open-weights long-horizon agent — thousand-tool-call autonomous coding at flash-model prices; a text-only reasoner, so pair it with a vision model for multimodal work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Xiaomi MiMo launch blog + Hugging Face model card/eval-results, llmboard.ai aggregated benchmark table with evidence tiers, Artificial Analysis figures via llmboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6_Pro.md`, using the same headings.
