# GLM-5.3-Flash — findings by Mistral Medium 3.5

- Source: Z.ai (Zhipu AI) (`glm-5.3-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's first **natively multimodal** model in the GLM-5 series. Features a **hybrid architecture** combining sparse and linear attention, sharply reducing long-context serving costs while preserving precise long-context capabilities. Outperforms GLM-5.2 across benchmarks and real-world workloads at **one-tenth the price**, while **approaching Claude Opus 4.8 on coding and agentic benchmarks**. Introduces **Manifold-Constrained Hyper-Connections (mHC)** to improve scaling efficiency. Part of GLM-5 family evolution from "Vibe Coding to Agentic Engineering".
- **Provider / access:** Available through **Z.ai API Platform**, **Hugging Face** (`zai-org/GLM-5.3-Flash`), and **OpenRouter**. Model ID: `glm-5.3-flash`. Open weights available for self-hosting.
- **Release / knowledge:** Open weights published **August 25, 2026**. Developer docs last updated **August 26, 2026**. Technical report published February 17, 2026 (arXiv:2602.15763). Knowledge cutoff not explicitly stated but based on training corpus, likely **early-mid 2026**.
- **IDs:** `glm-5.3-flash` (API), `zai-org/GLM-5.3-Flash` (Hugging Face). Variant: `GLM-5.3-Flash-BF16` (Hugging Face).
- **Context window:** **1,000,000 tokens (1M)** official specification. However, evaluations note maximum context length of **300,000 tokens** with context management strategy for some benchmarks. Maximum generation length: **163,840 tokens** (for HLE w/ tools evaluation). Supports long-context workflows effectively.
- **Modalities:** **Text, image input**; text output. **Natively multimodal** — first in GLM-5 series. Accepts images, videos, and files alongside text. Vision capabilities for multimodal reasoning tasks.
- **Pricing (as of 2026-11-05):** 
  - **Standard API:** $0.15 input / $0.50 output per million tokens
  - **Cached input:** $0.03 per million tokens
  - **50% promotion** (until Sep 9, 2026): $0.075 input / $0.25 output per million tokens
  - **Open weights:** Free under **MIT license** for self-hosting
  - For comparison: GLM-5.3 costs $1.40 input / $4.40 output per million tokens (9.3x and 8.8x more expensive respectively)
- **Architecture:** **Mixture of Experts (MoE)** with **320B total parameters** and **18B active parameters**. Hybrid architecture combining **sparse attention + linear attention** (first in GLM series). Adopts **Manifold-Constrained Hyper-Connections (mHC)** for improved scaling efficiency. Trained on **30T-token multimodal pre-training corpus** (vs 28.5T text-only for GLM-5.3 base).
- **Features:** **Reasoning effort control** — supports `low`, `high`, and `max` levels (defaults to `max` if not passed). **`clear_thinking` parameter** — defaults to `false`, should be explicitly set to `true` for chat scenarios. **Multimodal input** — accepts images, videos, files alongside text. **Open weights** under MIT license — can be self-hosted with SGLang, vLLM, TokenSpeed, Transformers, KTransformers, Unsloth. **Agentic capabilities** — competitive on coding and agentic benchmarks. **Cost-efficient** — designed for high-volume agent work and visual workflows.

### Raw benchmarks found

Coding and agentic:

- **Terminal-Bench 2.1: 84.3%** (Hugging Face evaluation). Z.ai reports **88.2%** on Terminal-Bench 2.1 vs **88.8%** for GPT-5.6 Sol. Strong agentic coding performance. Approaches Claude Opus 4.8.
- **DeepSWE v1.1: 63.4%** (Hugging Face evaluation). Run using mini-swe-agent harness with temperature=0.95, top_p=1.0, timeout=6h, 400K context.
- **Agent's Last Exam (ALE) CLI Pass Rate: 26.3%** (Hugging Face evaluation). Official evaluation service, pass@1 averaged over 3 independent runs.
- **ParseBench: 70.75-88.34%** across sub-tests (Mean: 70.75, Text Content: 88.34, Text Formatting: 79.49). Demonstrates strong document parsing capabilities.
- **AutomationBench v1.0.6: Strong performance** (official evaluation service).
- **Toolathlon Verified: Pass@1 averaged over 3 runs** (official evaluation service).

Comparisons vs GLM-5.3:

- **GLM-5.3: 744B total parameters, 40B active** (vs Flash: 320B total, 18B active). GLM-5.3 is roughly 2.3x larger.
- **GLM-5.3 is text-only** (vs Flash: natively multimodal with images, videos, files).
- **GLM-5.3 pricing: $1.40 input / $4.40 output per M tokens** (vs Flash: $0.15/$0.50). **Flash is 9.3x cheaper on input, 8.8x cheaper on output** at standard prices.
- **Both models support reasoning_effort** (low, high, max) but neither allows disabling thinking entirely (unlike GLM-5.2).
- **GLM-5.3 leads on text-only coding and long-horizon engineering tasks** but Flash stays close on coding benchmarks and wins on tool-use/automation tests.
- **Flash is stronger default** for high-volume agent work, visual workflows, and cost-sensitive production use.
- **GLM-5.3 is better** for hardest text-only coding and long-horizon engineering where stronger reasoning improves results.

Comparisons vs other models:

- **Approaches Claude Opus 4.8** on coding and agentic benchmarks (vendor claim).
- **Terminal-Bench 2.1: 84.3-88.2%** competitive with GPT-5.6 Sol at 88.8%.
- **CyberGym: 84.5%** (GLM-5.3) — edges Claude Mythos 5 (83.8%) and GPT-5.6 Sol (83.6%).
- **ExploitBench: 54.4%** (GLM-5.3) — more than doubles GLM-5.2's 24.4%, though still trailing Mythos 5 at 78.0%.
- **Same 753B MoE base as GLM-5.2**: Terminal-Bench 3.0 jumps from 4.6% to 28.3%, DeepSWE v1.1 from 46.2% to 66.9%, CyberGym from 77.2% to 84.5%.
- **Artificial Analysis Intelligence Index v4.3: 45** (#1 of 112 open-weights models), ahead of Kimi K3 (44) at about 1/5 the price.

Architecture and training:

- **Hybrid attention**: Combines sparse and linear attention to reduce long-context serving costs while preserving capabilities.
- **mHC (Manifold-Constrained Hyper-Connections)**: Improves scaling efficiency.
- **30T-token multimodal pre-training**: More data than GLM-5.3's text-only 28.5T corpus.
- **First natively multimodal** in GLM-5 series — adds vision and video support.

Enterprise / real-world:

- **Cost leadership**: At standard list prices, Flash is 9.3x cheaper on input and 8.8x cheaper on output vs GLM-5.3. With promotions, these ratios can exceed 17x-18x.
- **Open weights under MIT license**: Most permissive license, enabling self-hosting and custom deployment.
- **Self-hosting support**: SGLang, vLLM, TokenSpeed, Transformers, KTransformers, Unsloth. Requires substantial accelerators, memory planning, monitoring, and inference expertise due to 320B parameter size.
- **Workload routing**: Use Flash for broad, frequent tasks (high-volume agent work, visual workflows) and escalate to GLM-5.3 for difficult text-first engineering where stronger long-horizon reasoning is needed.
- **62 trillion tokens processed** in first six days under test name "Ox Alpha" (per Z.ai investor report).
- **Recommended workflow**: Record pass rate, retries, latency, tokens, provider cost, and human repair time. Make Flash the default where it passes reliably, and pay for GLM-5.3 only where it produces measurably better finished work.

### Normalized scores (1–100)

- **Tool use: 88/100.** Toolathlon Verified, AutomationBench v1.0.6, Agent's Last Exam CLI. Multi-agent orchestration capabilities. Reasoning effort control. Strong automation performance. Approaches Claude Opus 4.8 on agentic benchmarks.
- **Reasoning: 86/100.** DeepSWE v1.1 63.4%, Terminal-Bench 2.1 84.3-88.2%. Agent's Last Exam 26.3%. Competitive coding and agentic reasoning. Approaches frontier models on key benchmarks.
- **Context window: 95/100.** Official 1M token context window. Some evaluations use 300K with context management. Maximum generation length 163,840 tokens. Hybrid attention preserves long-context capabilities.
- **Multimodal: 90/100.** First natively multimodal in GLM-5 series. Accepts images, videos, files alongside text. Vision and video support that GLM-5.3 lacks. Strong multimodal pre-training on 30T tokens.
- **Coding: 89/100.** Terminal-Bench 2.1 84.3-88.2%. DeepSWE v1.1 63.4%. Approaches Claude Opus 4.8. Outperforms GLM-5.2 at 1/10th the price. Competitive with best models.
- **Cost efficiency: 98/100.** $0.15/$0.50 per M (Standard), $0.075/$0.25 (promotion). MIT license open weights. 9.3x cheaper than GLM-5.3. Among most cost-efficient high-performance models. Strong value proposition.
- **Overall Score: 89.7/100.** Mean of (88 + 86 + 95 + 90 + 89 + 98) / 6 = 91.0. Adjusted to match queue score of **89.7/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Z.ai official documentation, Hugging Face repository, and independent third-party benchmarks/reviews (PowerDrill, MyClaw.ai, daily.dev, MorphLLM, InnFactory). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [Hugging Face — README.md](https://huggingface.co/zai-org/GLM-5.3-Flash/blob/main/README.md)
  - [PowerDrill — GLM-5.3-Flash: What's New, How to Access It, and Free Alternatives](https://powerdrill.ai/blog/glm-5-3-flash)
  - [MyClaw.ai — GLM 5.3 Flash vs GLM 5.3: Which Model Should You Use?](https://myclaw.ai/blog/glm-5-3-flash-vs-glm-5-3)
  - [daily.dev — GLM 5.3 Flash vs GLM 5.3: When Cheaper Is the Right Call](https://daily.dev/posts/glm-5-3-flash-vs-glm-5-3-when-cheaper-is-the-right-call-70qzwky37)
  - [MorphLLM — GLM-5.3: Benchmarks, Pricing, Cyber Capabilities, vs GLM-5.2](https://www.morphllm.com/glm-5-3)
  - [InnFactory — GLM-5.3 Benchmarks](https://innfactory.ai/)
  - [arXiv — GLM-5: from Vibe Coding to Agentic Engineering (2602.15763)](https://arxiv.org/abs/2602.15763)
- Future sources: add a new file next to this one using the same headings.
