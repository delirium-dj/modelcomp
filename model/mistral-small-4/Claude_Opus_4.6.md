# Mistral Small 4 — findings by Claude Opus 4.6

- Source: Mistral AI (`mistral-small-4`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's hybrid open-weight MoE model (119B total / ~6.5B active) released March 2026, unifying three operational pillars — Magistral (reasoning), Pixtral (multimodal), and Devstral (agentic coding) — into a single highly efficient system. Optimized for output conciseness and token efficiency.
- **Provider / access:** Mistral AI platform, OpenRouter, NVIDIA NIM, various providers. OpenAI-compatible API.
- **Release / knowledge:** 2026-03; knowledge cutoff not publicly stated.
- **IDs:** `mistralai/mistral-small-4`
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image in (native multimodal via Pixtral); text out; configurable reasoning effort (standard instruct vs. deep reasoning); tool use / function calling.
- **Pricing (as of 2026-03):** ~$0.15 / $0.60 per 1M tokens in/out. Cache read discounts up to 90%. Very cost-efficient for its capability class.
- **Architecture:** 119B total parameters, ~6–6.5B active per token (~8B incl. embeddings). MoE with 128 total experts, 4 active per token. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Devstral-style agentic coding: unified agent mode for repository-level bug fixing and multi-file code generation (mistral.ai)
- Function calling / tool use: natively supported
- LCR (Artificial Analysis): **0.72** with high token efficiency (~1.6K chars output vs. 3–4x for competitors, medium.com)
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (analyticsvidhya.com — with reasoning mode enabled)
- MMLU-Pro: no standalone score found; strong general performance implied
- HLE: no verified public score found
- CritPt: no verified public score found
- AIME (Math Reasoning): matches or outpaces mid-tier proprietary models; exact score varies by harness (mindstudio.ai)

Coding:

- LiveCodeBench: **~64** (analyticsvidhya.com — outperforms GPT-OSS 120B while generating 20% fewer tokens)
- SWE-bench: strong competency in repository-level tasks; exact score depends on agent harness (no standalone number published)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Output efficiency: generates ~20% fewer tokens than competing models, up to 10x shorter on some sub-tasks (nvidia.com)

Long context:

- 256K-token context window. AA LCR score 0.72 with high token efficiency. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Unified Devstral-style agentic mode with native function calling; LCR 0.72 with excellent token efficiency. Strong in agentic coding workflows. Capped by lack of published Terminal-Bench, Tau, or MCP-Atlas scores.
- **Reasoning: 63/100.** GPQA Diamond at 71.2% is solid for a small-active-parameter model but trails frontier models (90%+). Configurable reasoning effort enables deeper chain-of-thought when needed. Capped by modest GPQA score relative to larger models.
- **Context window: 80/100.** 256K tokens — solid production window. Tier-mapped to 80 for 256K.
- **Multimodal: 65/100.** Native text + image input via Pixtral integration. Document parsing and visual analysis support. No video, audio input, or image generation. Capped by limited modality breadth compared to models with video/audio support.
- **Coding: 68/100.** LiveCodeBench ~64 outperforms GPT-OSS 120B with significantly more concise output. Devstral-style agentic coding for repository-level tasks. Exceptional token efficiency (20% fewer tokens, up to 10x shorter). Capped by lack of verified SWE-bench score.
- **Cost efficiency: 93/100.** $0.15/$0.60 per 1M tokens with up to 90% cache discount — among the cheapest capable models. Open-weight Apache 2.0. Only ~6.5B active parameters enables efficient local deployment. Outstanding value.
- **Overall Score: 68/100.** Mean of (62 + 63 + 80 + 65 + 68) / 5 = 67.6, rounded half-up to 68. A highly efficient unified model that punches above its weight class in coding with extreme token conciseness, offered at rock-bottom pricing — limited by modest reasoning scores and narrow multimodal coverage vs. frontier competitors.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official announcements, independent benchmarks, and API platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Small 4 Announcement](https://mistral.ai)
  - [Analytics Vidhya — Mistral Small 4 Benchmarks](https://analyticsvidhya.com)
  - [NVIDIA — Mistral Small 4 Performance](https://nvidia.com)
  - [Artificial Analysis — Mistral Small 4](https://artificialanalysis.ai)
  - [OpenRouter — Mistral Small 4](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
