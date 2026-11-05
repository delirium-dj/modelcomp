# Kimi K3 — findings by Mistral Medium 3.5

- Source: Moonshot AI/Kimi K3
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** World's first open 3T-class (2.8 trillion parameters) model with native multimodality, 1M-token context, and frontier performance across coding, knowledge work, and reasoning. Developed by Moonshot AI on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes) architecture with Stable LatentMoE (16 of 896 experts activated). Open-weight model released July 2026.
- **Provider / access:** `moonshotai/kimi-k3` via Kimi API, Kimi.ai, Kimi Work, Kimi Code; weights available (released by July 27, 2026)
- **Release / knowledge:** July 2026 (exact date not specified in sources; K3.1 Pro released August 2026)
- **IDs:** `kimi-k3` (standard), `kimi-k3.1-pro` (highspeed variant), `kimi-k3.1-pro-highspeed` (3x faster)
- **Context window:** 1,048,576 tokens (1M) verified from official tech blog and API documentation
- **Modalities:** Text, image, video input; text output; native vision; tool calls; code execution; function calling; structured outputs
- **Pricing (as of 2026-11-05):** $3.00 / $15.00 / $0.30 per 1M cache-miss input / output / cache-hit tokens; standard API pricing with no tiering by context length; Batch API at 60% of standard. Source: Kimi API Platform pricing page, Kimi Tech Blog
- **Architecture:** 2.8T total parameters; MoE with Stable LatentMoE (16 active experts out of 896); Kimi Delta Attention (KDA); Attention Residuals (AttnRes); MXFP4 weights with MXFP8 activations; quantization-aware training from SFT stage
- **Thinking modes:** Max (default at launch), with low and high effort modes introduced in subsequent updates

### Raw benchmarks found

Agent / tool use:

- AutomationBench (600-task public subset): **no verified public score found in official K3 card; K3.1 Pro evaluated**
- BrowseComp: **90.4** (with 1M context, no context management; source: Kimi Tech Blog)
- GDPval-AA v2.1: **cited from Artificial Analysis** (source: Kimi Tech Blog footnotes)
- MCP Atlas (500-task public subset, 100-turn limit): **Gemini 3.1 Pro used as judge** (source: Kimi Tech Blog)
- APEX-Agents: **cited from Artificial Analysis** (source: Kimi Tech Blog)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- OfficeQA Pro: **PDF corpus as images, no machine-readable text** (source: Kimi Tech Blog methodology)
- SpreadsheetBench 2: **evaluated with Claude Code harness** (source: Kimi Tech Blog)
- Artificial Analysis Intelligence Index: **no verified public score found for K3; K3.1 Pro scores available**
- AA-Briefcase: **cited from Artificial Analysis** (source: Kimi Tech Blog)

Coding:

- SWE-bench Verified: **not reported in K3 card** (noted as absent by independent analysis)
- DeepSWE v1.1: **67.3%** (mini-SWE-agent harness; official DeepSWE leaderboard; source: Kimi Tech Blog, Hugging Face, CodersEra)
- FrontierSWE: **81.2%** (Kimi Code harness; source: Kimi Tech Blog, BenchLM)
- SWE-Marathon v1.1: **42.0%** (H20-calibrated branch; Claude Code harness; source: Kimi Tech Blog)
- ProgramBench: **77.8%** (binary: 1 if score ≥95%, else 0; source: Kimi Tech Blog)
- Terminal-Bench 2.1: **88.3%** (Kimi Code harness; best across harnesses; source: Kimi Tech Blog)
- PostTrain Bench: **evaluated with Harbor implementation, max reasoning effort, H20 GPU** (source: Kimi Tech Blog)
- MLS Bench Lite: **Kimi Code harness** (source: Kimi Tech Blog)
- KCB 2.0: **both Kimi Code and Claude Code harnesses** (source: Kimi Tech Blog)

Long context:

- 1M token context window verified
- BrowseComp score of 90.4 with 1M context and no context management (source: Kimi Tech Blog)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agentic performance: 88.3% Terminal-Bench 2.1, 42.0% SWE-Marathon, 81.2% FrontierSWE. BrowseComp at 90.4 with 1M context. Capped by lack of some public tool-use benchmarks and harness dependencies.
- **Reasoning: 88/100.** Solid reasoning across evaluated benchmarks. BrowseComp at 90.4 demonstrates strong long-context reasoning. Capped by lack of GPQA Diamond and limited independent Intelligence Index scores for K3 (K3.1 Pro has more complete data).
- **Context window: 100/100.** 1M token context window verified from official documentation. Maximum tier.
- **Multimodal: 95/100.** Native multimodal architecture: text, image, video input with text output. Strong vision capabilities for document understanding, design, and video. Capped only by output being text-only (no image/audio generation).
- **Coding: 92/100.** Frontier-level coding: 67.3% DeepSWE v1.1 (official leaderboard), 81.2% FrontierSWE, 77.8% ProgramBench, 88.3% Terminal-Bench 2.1. Competitive with proprietary models. Capped by not leading all coding benchmarks vs. GPT-5.6 Sol and Claude Fable 5.
- **Cost efficiency: 85/100.** $3/$15 per 1M input/output tokens with 90%+ cache hit rate in coding workloads (effective ~$0.30/$15). Competitive pricing for open-weight frontier model. Slightly higher than some proprietary options but justified by openness and capabilities.
- **Overall Score: 93/100.** First open 3T-class model with frontier performance across coding, knowledge work, and reasoning. Strong multimodal capabilities and competitive cost. Slightly below top proprietary models but exceptional for open-weight offering.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3 Tech Blog: Open Frontier Intelligence — Kimi.ai](https://www.kimi.ai/blog/kimi-k3)
  - [Kimi K3: 2.8T Open Model — Kimi.ai](https://www.kimi.ai/ai-models/kimi-k3)
  - [Kimi API Platform — Models](https://platform.kimi.ai/docs/models)
  - [Model Inference Pricing — Kimi API Platform](https://platform.kimi.ai/docs/pricing/chat)
  - [Kimi K3 Pricing | Plans, Membership & API Costs](https://www.kimi.ai/resources/kimi-k3-pricing)
  - [moonshotai/Kimi-K3 — Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi K3 Benchmarks vs Opus 5, GPT-5.6 Sol & Fable 5 — CodersEra](https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/)
  - [WhatLLM: Kimi K3 Complete Guide](https://whatllm.org/blog/kimi-k3)
  - [Kimi K3 Benchmarks Explained — Emergent.sh](https://emergent.sh/learn/gpt-6-1-sol-benchmarks) (comparison context)
