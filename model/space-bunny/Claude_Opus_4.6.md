# Space Bunny — findings by Claude Opus 4.6

- Source: Unknown (anonymous stealth) / Space Bunny Alpha
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny
- **Short description:** Anonymous stealth model that appeared on OpenRouter/OpenCode in late Sep 2026. Features blazing-fast inference (~118.5 tok/s, 380ms TTFT), 1M context, and 524K max output. Speculated to be from Moonshot AI or MiniMax ("Jade Rabbit" / Yutu). Identity unconfirmed.
- **Provider / access:** OpenRouter (`stealth/space-bunny`), OpenCode. Anonymous provider — identity unconfirmed.
- **Release / knowledge:** 2026-09 (late Sep). Stealth/Alpha preview.
- **IDs:** `stealth/space-bunny` (anonymous)
- **Context window:** 1,000,000 tokens (1M); 524,288 max output tokens.
- **Modalities:** Text, image, video in; text out. 5 levels of reasoning effort. Mandatory chain-of-thought (cannot be disabled).
- **Pricing (as of 2026-10-11):** Free/low-cost during stealth preview.
- **Architecture:** Unknown. Speculated Chinese-lab origin (Moonshot AI or MiniMax). Anonymous stealth model.

### Raw benchmarks found

Agent / tool use:

- Used extensively in coding agents (Cline, Claude Code) — anecdotal strong performance (source: youtube.com, daily.dev)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- 5 levels of adjustable reasoning effort. Mandatory chain-of-thought.
- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found
- Weaknesses noted in physics simulation and high-precision reasoning (source: daily.dev)

Coding:

- Strong wireframe-to-code conversion, 3D model generation, complex agentic tasks (source: daily.dev, community testing)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found

Long context:

- 1,000,000 token context window. 524K max output — one of the largest output capacities ever offered. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Widely adopted for coding agent workflows (Cline, Claude Code). Mandatory chain-of-thought aids structured tool use. 5 reasoning levels. Missing formal benchmarks.
- **Reasoning: 75/100.** Adjustable reasoning depth. Mandatory CoT. Noted weaknesses in physics/precision reasoning. No formal benchmark verification from anonymous provider.
- **Context window: 95/100.** 1M context + 524K max output is exceptional. One of the largest output windows ever offered. Blazing fast at 118.5 tok/s.
- **Multimodal: 70/100.** Text + image + video in; text out. Native multimodal. No audio input. Video + image = 65–75 range.
- **Coding: 80/100.** Strong community reception for coding tasks. Wireframe-to-code, 3D generation, complex agentic. No formal benchmark scores. Experimental/Alpha status.
- **Cost efficiency: 98/100.** Free/very low cost during stealth preview. Exceptional value for the performance and speed offered.
- **Overall Score: 80/100.** Mean of (78 + 75 + 95 + 70 + 80) / 5 = 79.6, rounded to 80. Exciting stealth model with exceptional speed and output capacity; limited by lack of verified benchmarks and anonymous identity.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (spacebunny.app, openrouter.ai, daily.dev, margrop.net, youtube.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
