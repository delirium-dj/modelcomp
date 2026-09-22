# MiniMax M3 — findings by Claude Sonnet 4.6

- Source: Anthropic/Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal foundation model released June 1, 2026; first open-weight model to reach SWE-bench Pro ~59%, featuring MiniMax Sparse Attention (MSA) for efficient 1M context processing at high throughput.
- **Provider / access:** MiniMax API and open-source (Hugging Face); also via OpenRouter, Fireworks AI, and other third-party providers. Chat Completions API.
- **Release / knowledge:** 2026-06-01 release; knowledge cutoff not publicly disclosed.
- **IDs:** `minimax/minimax-m3` (no Zen Free ID found; paid pricing; open-weights available on Hugging Face)
- **Context window:** 1,000,000 tokens (1M); verified via MiniMax documentation and GitHub.
- **Modalities:** Text + image + video input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-06):** ~$0.30–$0.60 / ~$1.10–$2.40 per 1M input/output tokens (standard API); cached input ~$0.05–$0.06/1M. Open-weights available for self-hosting. Pricing varies by provider.
- **Architecture:** MiniMax Sparse Attention (MSA); open-weight; 1/20th compute per token vs prior generation; optimized for long-context efficiency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **~66.0%** (published benchmarks, June 2026 — trails GPT-5.5 at 82.7%)
- MCP Atlas: **74.2%** (benchmark data, 2026)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenRouter model card, 2026)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- IFEval: **82.9%** (published benchmark, 2026)
- BrowseComp: **83.5** (published benchmark, 2026)
- CritPt: no verified public score found

Coding:

- SWE-bench Pro: **59.0%** (MiniMax official, June 2026 — first open-weight at this level, comparable to GPT-5.5 at 58.6%)
- SWE-bench Verified / DeepSWE: no verified separate score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M context with MSA achieving 1/20th compute per token vs prior gen; no MRCR/RULER retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench ~66% is mid-tier (frontier ref ~88%+ = 90–100; 60–70% ≈ 70–78); MCP Atlas 74.2% is moderate. No Tau3/GDPval/Claw-Eval. Scored 75.
- **Reasoning: 88/100.** GPQA 92.9% is frontier-class (ref ≥90% → 90–100); IFEval 82.9% and BrowseComp 83.5 are solid. Scored 88.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95 as MRCR retrieval not verified.
- **Multimodal: 80/100.** Text + image + video input confirmed; open-weights. Per methodology: image+video in = 75–90; scored 80.
- **Coding: 82/100.** SWE-bench Pro 59% was best open-weight at launch (frontier tier starts ~69%); Terminal ~66% is mid-range; MCP Atlas 74.2% is useful. Scored 82 reflecting strong coding for an open-weight model with caveats.
- **Cost efficiency: 95/100.** ~$0.30–$0.60 / $1.10–$2.40 per 1M tokens with open-weight self-hosting option. Per methodology: $0.30–$0.60 ≈ 95–97; scored 95.
- **Overall Score: 84/100.** Mean of (Tool 75 + Reasoning 88 + Context 95 + Multimodal 80 + Coding 82) / 5 = 420 / 5 = 84.0 → 84. Best-fit: cost-efficient open-weight alternative for long-context tasks and multimodal workflows; best open-weight coding model at SWE-Pro level as of June 2026.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6)** — 2026-09-21
- Method: Independent public internet research (MiniMax official, OpenRouter model card, ofox.ai, codingfleet.com, saascity.io, datanorth.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
