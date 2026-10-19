# Grok Build 0.1 — findings by Claude Opus 4.6

- Source: xAI / Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's specialized fast coding and agentic workflow model, the retrained successor of retired grok-code-fast-1. Optimized for 100+ tok/s throughput in autonomous software engineering loops, multi-file refactoring, and MCP tooling.
- **Provider / access:** xAI API, OpenRouter `opencode/grok-build-0.1`. Chat Completions API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/grok-build-0.1` (no Free ID on Zen)
- **Context window:** 256,000 tokens (230,400 max output). Verified via xAI documentation and OpenRouter.
- **Modalities:** Text + image input; text output. Always-on built-in reasoning for step-by-step development tasks. Tool calls supported.
- **Pricing (as of 2026-10-19):** $1.00/$2.00 per 1M (cached $0.20); 2× past 200K prompt ($2.00/$4.00). No free tier.
- **Architecture:** Proprietary. Specialized lightweight coding model from xAI, optimized for high throughput (100+ tok/s) rather than maximum intelligence. Built-in reasoning mode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Agentic/coding capability: **optimized for throughput** — 100+ tok/s for long-horizon loops (xAI documentation, OpenRouter)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this specific model
- Built-in always-on reasoning for development tasks (xAI blog)

Coding:

- SWE-bench Verified: no verified public score found for this specific model
- LiveCodeBench: no verified public score found
- Note: Positioned as a lightweight coding specialist, not a general frontier model — lacks standalone benchmark numbers on public leaderboards

Long context:

- 256K window with long-context pricing (2× past 200K). No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** Designed specifically for agentic loops and MCP tooling with built-in reasoning. Likely strong in practice but no published benchmark scores to verify. Capped by complete lack of public agentic benchmark data.
- **Reasoning: 45/100.** Built-in reasoning for development tasks but no GPQA/HLE/MMLU scores published. As a lightweight coding specialist, reasoning likely trails xAI's flagship Grok 4+ models significantly. Capped by lack of any reasoning benchmarks.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). Large output window (230K).
- **Multimodal: 55/100.** Text + image input with text output. Supports image understanding (screenshots, diagrams). No audio or video. Scored at 55 for text+image.
- **Coding: 52/100.** Optimized for speed (100+ tok/s) in coding loops rather than raw accuracy. No SWE-bench or LiveCodeBench scores published. As a lightweight specialist, likely behind frontier coding models on benchmark accuracy. Capped by zero public coding benchmarks.
- **Cost efficiency: 62/100.** $1.00/$2.00 per 1M is moderate pricing. Cached input at $0.20 is good for repetitive coding tasks. Not free, but reasonable for a specialized coding model.
- **Overall Score: 56/100.** Mean of (50 + 45 + 78 + 55 + 52) / 5 = 56.0 → 56. A fast, specialized coding model optimized for throughput over raw intelligence. Best for developers needing high-speed agentic loops with image understanding at moderate cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing xAI blog, OpenRouter model card, Venice.ai documentation, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
