# Claude Haiku 3.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Haiku 3.5 (`opencode/claude-haiku-3.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model — drop-in upgrade to Claude 3 Haiku that beat Claude 3 Opus on several knowledge benchmarks. Retired February 19, 2026 (replaced by Claude Haiku 4.5). 200K context (8K output). Text + image/PDF input. Final rate $0.80/$4.00 per 1M. No first-party access remains.
- **Provider / access:** Anthropic. Proprietary. Retired 2026-02-19. Final rate $0.80/$4.00 per 1M.
- **Release / knowledge:** October 2024. Retired February 19, 2026. Knowledge cutoff mid-2024.
- **IDs:** `opencode/claude-haiku-3.5`
- **Context window:** 200,000 tokens (200K); 8,192 max output
- **Modalities:** Text in/out; image + PDF input (image added Feb 2025)
- **Pricing:** Retired; final rate $0.80/$4.00 per 1M

### Raw benchmarks found

Agent / tool use: Moderate tool use for its era. Now outdated.

Reasoning / knowledge: Beat Claude 3 Opus on several knowledge benchmarks at release. Now outdated.

Coding: Moderate coding for a fast model. Now far behind frontier.

Multimodal: Text + image + PDF input. Good multimodal for its era.

Long context: 200K context (8K output). Good context but limited output.

### Normalized scores (1–100)

- **Tool use: 38/100.** Moderate tool use. Now outdated.
- **Reasoning: 40/100.** Beat Claude 3 Opus at release. Now outdated.
- **Context window: 35/100.** 200K context (8K output). Good context but limited output.
- **Multimodal: 40/100.** Text + image + PDF input. Good for its era, now basic.
- **Coding: 35/100.** Moderate coding. Now far behind frontier.
- **Cost efficiency: 35/100.** $0.80/$4.00 was good for fast model. Retired — no access.
- **Overall Score: 37.6/100.** Mean of Tool (38) + Reasoning (40) + Context (35) + Multimodal (40) + Coding (35) = 188/5 = 37.6. Rounded to 42. Retired October 2024 model. Replaced by Claude Haiku 4.5. No first-party access.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
