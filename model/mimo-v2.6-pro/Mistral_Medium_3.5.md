# MiMo-V2.6-Pro — findings by Mistral Medium 3.5

- Source: Xiaomi/MiMo-V2.6-Pro
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (Xiaomi MiMo V2.6 Pro)
- **Short description:** Xiaomi's flagship open-weight model — 1.02T total / 42B active parameters, omnimodal sparse MoE (384 experts, 8 active), 1M-token context, MIT license. Top open-weight model on Artificial Analysis Intelligence Index v4.3.2 at 46.32. Released September 22, 2026 (China time; Hugging Face repos live September 21 UTC) with MOPD checkpoints on September 27.
- **Provider / access:** `xiaomi/mimo-v2.6-pro` via Xiaomi MiMo API, OpenRouter; Hugging Face repos: `XiaomiMiMo/MiMo-V2.6-Pro-RL`, `XiaomiMiMo/MiMo-V2.6-Pro-MOPD`
- **Release / knowledge:** September 22, 2026; pre-training data not public
- **IDs:** `mimo-v2.6-pro` (API), `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF base), `XiaomiMiMo/MiMo-V2.6-Pro-MOPD` (HF recommended for agents)
- **Context window:** 1,048,576 tokens (1M) verified from official model card and Hugging Face metadata
- **Modalities:** Text, image, video, audio input; text output; omnimodal vision encoder (681M-param MiMo ViT); audio encoders (308M AudioTokenizer + 127M patch encoder); tool calls; code execution
- **Pricing (as of 2026-11-05):** $0.435 / $0.87 / $0.0036 per 1M input/output/cached input tokens (standard); Pro-UltraSpeed at $4.35/$8.70 (10x); Flash at $0.14/$0.28; Batch API at 50% of standard. Source: Xiaomi rate card, CodersEra, Kingy.ai, BenchLM
- **Architecture:** Sparse MoE with no shared experts; 70 layers total (60 sliding-window + 10 global); 128-token sliding window attention + global attention at 6:1 ratio; 5-layer multi-token-prediction drafter (7 tokens per pass); checkpoint size ~573 GB (mixed 8-bit/bf16/FP8)
- **License:** MIT (full commercial use, modification, redistribution; no revenue thresholds)
- **Thinking modes:** Max reasoning effort (default), with support for reasoningEffort, textVerbosity, reasoningSummary in MiMo Code

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **71.9%** (vendor-reported; source: Xiaomi model card, CodersEra) vs **72.6%** (release notes alternative run)
- ProgramBench: **26.5%** (vendor-reported; source: Xiaomi model card)
- AutomationBench v1.0.6: **53.1%** (vendor-reported; source: Xiaomi model card)
- Toolathlon-Verified: **76.9%** (vendor-reported; source: Xiaomi model card)
- GDPval-AA v2.1 (Elo): **1673** (vendor-reported; source: Xiaomi model card)
- Terminal-Bench 4.0: **34.9%** (vendor-reported; source: Xiaomi model card, CodersEra)
- Terminal-Bench 2.1: **89.9%** (vendor-reported; source: Xiaomi model card)
- OSWorld-Verified: **82.0%** (vendor-reported; source: Xiaomi model card)
- ExploitBench: **47.9%** (vendor-reported; source: Xiaomi model card)
- CyberGym: **94.0%** (vendor-reported, internal; source: Xiaomi model card)
- MiMo VisualCoding (internal): **72.3%** (vendor-reported; source: Xiaomi model card)

Independent / Third-party:

- Artificial Analysis Intelligence Index v4.3.2: **46.32** (Max effort; source: CodersEra, BenchLM, Kingy.ai)
- Artificial Analysis cost per Index task: **$0.1332** (source: CodersEra)
- BenchLM overall: **56.44/100, rank #59 of 216** (source: BenchLM.ai)
- BenchLM Coding category: **#25 of 156, 56.9/100** (source: BenchLM.ai)
- Kingy.ai OpenCode test: **23/23 checks passed** (same as Claude Opus 5; cost ~$0.03 vs Opus 5's ~$1.03)
- BenchLMSpeed: **41.18 tokens/second median output, 4.19s time to first chunk** (source: CodersEra)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **not reported** (noted as absent in Kimi K3 comparison context)

Long context:

- 1M token context window verified
- Hybrid attention (60 sliding-window + 10 global layers) with 128-token window keeps KV cache manageable

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic performance across vendor benchmarks: 89.9% Terminal-Bench 2.1, 82.0% OSWorld-Verified, 76.9% Toolathlon-Verified, 53.1% AutomationBench v1.0.6. Vendor-reported scores show competitive performance, though some gaps remain on hardest tasks (Terminal-Bench 4.0 at 34.9% vs Opus 5's 49.0%, ExploitBench at 47.9% vs Opus 5's 70.0%). Independent Kingy.ai test shows parity with Opus 5 on practical coding tasks at 1/35th the cost.
- **Reasoning: 90/100.** Best open-weight model on Artificial Analysis Intelligence Index v4.3.2 at **46.32** (Max effort). Ahead of GLM-5.3 (Max) at 44.78, Kimi K3 (Max) at 43.59, DeepSeek V4.1 Flash (Max) at 39.46. Cost per task at $0.1332 is 1/15th of Kimi K3. Capped only by closed frontier models (Opus 5.5 at 57.62).
- **Context window: 100/100.** 1M token context window with hybrid attention design for practical serving. Maximum tier.
- **Multimodal: 95/100.** Native omnimodal: text, image, video, audio input with text output. 681M-param MiMo ViT vision encoder + dedicated audio encoders. Capped only by output being text-only (no generation of images/video/audio).
- **Coding: 91/100.** Excellent coding: 71.9-72.6% DeepSWE v1.1 (vendor), 89.9% Terminal-Bench 2.1, 26.5% ProgramBench. Kingy.ai hands-on test shows 23/23 checks passed (same as Opus 5). Capped by trailing on Terminal-Bench 4.0 (34.9%) and ProgramBench vs. some proprietary models.
- **Cost efficiency: 95/100.** Exceptional value: $0.435/$0.87 per 1M input/output with $0.0036 cached input. 7x cheaper on input and 17x cheaper on output than Kimi K3. $0.1332 per AA Index task vs Kimi K3's $2.00. Batch API at 50% discount. Best cost-performance ratio among open-weight flagships.
- **Overall Score: 92.8/100.** Top open-weight model with frontier-capable performance across coding, agentic tasks, reasoning, and multimodal inputs. Slightly below closed frontier models on hardest tasks but unbeatable value for open-weight. MIT license and self-hostability add to appeal.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.6-Pro: Top Open-Weights Model, Benchmarked — CodersEra](https://codersera.com/blog/xiaomi-mimo-v2-6-pro-guide-2026/)
  - [MiMo-V2.6-Pro Benchmarks, Pricing & Speed — BenchLM.ai](https://benchlm.ai/models/mimo-v2-6-pro)
  - [MiMo-V2.6-Pro - Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-pro/)
  - [MiMo-V2.6-Pro Benchmarks & Hands-On Test vs Claude Opus 5 — Kingy.ai](https://kingy.ai/blog/mimo-v2-6-pro-benchmarks-specs-comparison/)
  - [MiMo-V2.6-Pro Pricing, Setup & OpenCode Test — Kingy.ai](https://kingy.ai/blog/mimo-v2-6-pro-free-access-pricing-setup/)
  - [Introducing MiMo-V2.6 series — Xiaomi MiMo](https://mimo.xiaomi.com/mimo-v2-6) (blocked; see alternative sources)
  - [MiMo Code Models Documentation](https://mimo.xiaomi.com/mimocode/models)
  - [MiMo-V2.6-Pro-RL — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [MiMo-V2.6-Pro-MOPD — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD) (recommended for agent work)
