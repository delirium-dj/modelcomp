# Mercury 3 — findings by Claude Opus 4.6

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' groundbreaking diffusion-based large language model (dLLM), released October 19, 2026. Unlike autoregressive models, Mercury 3 generates text blocks in parallel via iterative denoising — achieving ~1,068 tokens/sec on NVIDIA GPUs (4–8x faster than competitors). Scaled 40x over Mercury 1.
- **Provider / access:** Inception Labs API, OpenRouter, Baseten, Vercel. OpenAI-compatible (`v1/chat/completions`).
- **Release / knowledge:** 2026-10-19; knowledge cutoff not publicly stated.
- **IDs:** `inception/mercury-3`
- **Context window:** 1,000,000 tokens (1M). Max output 131,072 tokens.
- **Modalities:** Text in; text out; tool calling; structured outputs; strict schema adherence.
- **Pricing (as of 2026-10):** $0.20 / $0.70 per 1M tokens in/out (standard). Launch pricing $0.10 / $0.35 (50% discount). Heavy cached input discounts.
- **Architecture:** Diffusion-based language model (dLLM). Proprietary. Generates text blocks in parallel and refines via denoising passes, unlike sequential autoregressive generation.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Atlas (Agentic Coding): **51.08%** (eesel.ai — substantially leading GPT-6 Luna at 33.33% and Claude Haiku 5.5 at 32.26%)
- Tool calling: natively supported with strict structural schema adherence (layer3labs.io)
- Agentic workflows: designed for low-latency compound environments — browser agents, real-time search, coding subagents, voice pipelines (openrouter.ai)
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (eesel.ai — outperforming GPT-6 Luna 86.36% and Claude Haiku 5.5 84.51%)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- 12-metric evaluation scorecard: leads on 8–10 metrics vs. GPT-6 Luna and Claude Haiku 5.5 at medium effort (eesel.ai)

Coding:

- DeepSWE v1: **46.31%** (eesel.ai — behind Claude Haiku 5.5 at 51.62%, ahead of GPT-6 Luna at 37.76%)
- SWE-Bench Atlas: **51.08%** (see Agent section above)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Long-horizon coding: diffusion refinement limits can stretch on deep multi-file tasks (mindstudio.ai)

Long context:

- 1M-token context window with 131K max output. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 62/100.** SWE-Bench Atlas 51.08% substantially leads GPT-6 Luna and Claude Haiku 5.5 in agentic workflows. Native tool calling with strict schema. Optimized for low-latency compound agent environments. Capped by lack of standard tool-use benchmarks (Terminal-Bench, MCP-Atlas) and Haiku/Luna-tier positioning.
- **Reasoning: 68/100.** GPQA Diamond at 89.23% is strong — outperforms GPT-6 Luna and Claude Haiku 5.5. However, sits in the speed-optimized tier rather than flagship reasoning class. Leads 8–10/12 metrics vs. its class. Capped by tier positioning below Opus/Sol-class models.
- **Context window: 95/100.** 1M tokens with 131K max output — among the largest in production. Tier-mapped to 95.
- **Multimodal: 15/100.** Text-only model. No image, video, or audio input/output. Text-only = 15.
- **Coding: 58/100.** SWE-Bench Atlas 51.08% leads its speed class. DeepSWE 46.31% is competitive but trails Claude Haiku 5.5. Diffusion architecture brings speed advantages for coding subagents. Capped by mid-tier standing on deep multi-file tasks and lack of LiveCodeBench score.
- **Cost efficiency: 92/100.** $0.10/$0.35 at launch pricing — extremely affordable. Standard $0.20/$0.70 still very competitive. Massive throughput advantage (1,068 tok/s) reduces effective cost per query. Outstanding value for speed-sensitive applications.
- **Overall Score: 60/100.** Mean of (62 + 68 + 95 + 15 + 58) / 5 = 59.6, rounded half-up to 60. A revolutionary diffusion-based architecture delivering 4–8x speed advantage with surprisingly strong GPQA (89.23%) and agentic capability, severely limited by text-only modality. Best suited for speed-critical compound agent environments.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official announcements, independent benchmarks, and API platform evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury 3 Announcement](https://inceptionlabs.ai)
  - [Eesel AI — Mercury 3 Benchmark Comparison](https://eesel.ai)
  - [OpenRouter — Mercury 3](https://openrouter.ai)
  - [Layer3 Labs — Mercury 3 Overview](https://layer3labs.io)
  - [Cellcog — Mercury 3 Speed Analysis](https://cellcog.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
