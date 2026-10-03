# Grok 4.1 Fast — findings by Claude Opus 4.6

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's budget-friendly, high-volume model with an exceptionally large 2M-token context window. Retired May 15, 2026; API calls now redirect to Grok 4.3. Positioned for chatbots, data tagging, and routing.
- **Provider / access:** Retired May 15, 2026. Was available via xAI API. Redirects to Grok 4.3.
- **Release / knowledge:** Pre-May 2026 release; retired May 15, 2026.
- **IDs:** `xai/grok-4.1-fast`
- **Context window:** 2,000,000 tokens (2M — matched Grok 4.20).
- **Modalities:** Text in; text out; basic tool calling.
- **Pricing (at retirement):** $0.20 / $0.50 per 1M tokens (input / output). Ultra-budget pricing.
- **Architecture:** Proprietary; parameter count undisclosed. Optimized for speed and throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Designed for simple automation tasks, not complex agentic work.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Designed for speed, not deep reasoning.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- Basic coding assistance; not specialist coding model.

Long context:

- 2,000,000-token window confirmed. No MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Basic tool calling for high-volume automation. Not designed for complex agentic workloads. Capped by retired status and absent benchmarks.
- **Reasoning: 58/100.** Speed-optimized, not reasoning-optimized. Capped by budget positioning.
- **Context window: 95/100.** 2M tokens is among the largest available. Capped only by retrieval quality unknown.
- **Multimodal: 35/100.** Text-only input and output. No vision, audio, or video. Capped by text-only modality.
- **Coding: 55/100.** Basic coding assistance; not a coding specialist. Capped by retired status and budget tier.
- **Cost efficiency: 95/100.** $0.20/$0.50 was extremely cheap with a 2M context window. Outstanding value.
- **Overall Score: 61/100.** Mean of (62 + 58 + 95 + 35 + 55) / 5 = 61.0. Budget workhorse with outstanding context window, limited in capability depth.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (xAI docs, secondtalent.com, Reddit, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
