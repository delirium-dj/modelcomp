# Mistral Large 3 — findings by Claude Opus 4.6

- Source: Mistral AI (`mistral-large-3`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's flagship open-weight multimodal MoE model (675B total / 41B active), released December 2025. A broad enterprise generalist optimized for multilingual conversations, knowledge retrieval, and structural text generation. Trained on ~3,000 NVIDIA H200 GPUs.
- **Provider / access:** Mistral AI La Plateforme, OpenRouter, various providers (`mistral-large-2512`). OpenAI-compatible API.
- **Release / knowledge:** 2025-12-01; knowledge cutoff not publicly stated.
- **IDs:** `mistralai/mistral-large-2512`
- **Context window:** 256,000 tokens (256K; ~390 A4 pages).
- **Modalities:** Text, image in; text out; native function/tool calling; JSON mode; structured outputs.
- **Pricing (as of 2025-12):** ~$0.50 / $1.50 per 1M tokens in/out. Competitively priced for a flagship model.
- **Architecture:** 675B total parameters, ~41B active per token. Sparse MoE. 88 layers, 12,288 hidden dim, 96 attention heads with 8 KV heads. RoPE θ=1,000,000. Apache 2.0 license (fully open-weight).

### Raw benchmarks found

Agent / tool use:

- Tool calling / function calling: native support with OpenAI-compatible JSON schema (tools, tool_choice, response_format) — scores ~70% on 15-scenario community tool-call suites (reddit.com)
- LMArena: debuted ~#2 in OSS non-reasoning category, #6 overall among open-source models (mistral.ai)
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~68.0%** (intuitionlabs.ai — primary leaderboard tracking; some subset tests report lower at ~43.9% depending on prompt configuration)
- MMLU (8-language average): **~85.5%** (intuitionlabs.ai)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Multilingual: best-in-class performance for non-English/Chinese conversations (mistral.ai)

Coding:

- HumanEval (pass@1): **~91.2%** (intuitionlabs.ai — strong on synthetic code benchmarks)
- LiveCodeBench: **~46.5%** (aiflashreport.com — mid-tier on contamination-free competitive programming)
- Coding sub-indices: **~47.9%** on aggregated developer tooling metrics (aiflashreport.com)
- SWE-bench Verified: modest / lower-tier relative to agentic specialists; not optimized for long-horizon multi-file engineering (iotdigitaltwinplm.com)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 256K-token context window. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 58/100.** Native function calling with ~70% on community tool suites. #2 on LMArena OSS non-reasoning. Designed as "System 1" generalist rather than deep multi-turn agent. Smaller Mistral sibling models sometimes edge it out on tool chaining. Capped by lack of standard tool-use benchmarks and generalist optimization.
- **Reasoning: 60/100.** GPQA Diamond at ~68% is solid for an open-weight generalist but mid-tier vs. frontier reasoning models (90%+). MMLU 85.5% and best-in-class multilingual performance. Capped by modest GPQA score relative to specialized reasoning models.
- **Context window: 80/100.** 256K tokens. Tier-mapped to 80 for 256K window.
- **Multimodal: 60/100.** Text + image input, text out. Native vision understanding built into MoE structure. No video, audio input, or image generation. Limited modality breadth vs. natively multimodal models with video/audio.
- **Coding: 58/100.** HumanEval ~91.2% is strong on synthetic benchmarks but LiveCodeBench ~46.5% is mid-tier. Not optimized for agentic multi-file engineering. Better suited for broad code knowledge than deep repository-level work. Capped by modest LiveCodeBench and weak SWE-bench standing.
- **Cost efficiency: 88/100.** $0.50/$1.50 per 1M tokens for a 675B-parameter flagship — very competitive. Open-weight Apache 2.0 for local deployment. Excellent value-to-capability ratio.
- **Overall Score: 63/100.** Mean of (58 + 60 + 80 + 60 + 58) / 5 = 63.2, rounded half-up to 63. A strong enterprise generalist with exceptional multilingual capabilities and Apache 2.0 openness, held back by mid-tier performance on frontier reasoning/coding benchmarks vs. more specialized competitors.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official announcements, independent benchmarks, and community evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Large 3 Announcement](https://mistral.ai)
  - [OpenRouter — Mistral Large 3](https://openrouter.ai)
  - [APXML — Mistral Large 3 Architecture](https://apxml.com)
  - [AI Flash Report — Mistral Large 3 Benchmarks](https://aiflashreport.com)
  - [Intuition Labs — Mistral Large 3 Evaluation](https://intuitionlabs.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
