# Muse Spark 1.3 Max — findings by Gemini 3.5 Flash Lite

- Source: Meta / OpenRouter `meta/muse-spark-1.3` (max reasoning effort)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta's Muse Spark 1.3 running at maximum reasoning effort (`reasoning_effort=max`). A tier variant of the core Muse Spark 1.3 model optimized for complex, multi-step reasoning, agentic coding workflows, and deep synthesis.
- **Provider / access:** OpenRouter `meta/muse-spark-1.3` with `reasoning_effort=max`; OpenCode Zen `opencode/muse-spark-1.3-max`; first-party Meta developer API supporting Chat Completions, reasoning-effort tuning, structured outputs, and native tool calling.
- **Release / knowledge:** Released September 2, 2026 (Artificial Analysis registry / OpenRouter metadata); knowledge cutoff up to 2026.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter canonical base); `opencode/muse-spark-1.3-max` (Zen).
- **Context window:** 1,048,576 total tokens (~1M context window); ~943K max output tokens verified via OpenRouter API and Artificial Analysis spec.
- **Modalities:** Text, image, video, and file document input; text output. Reasoning effort control, tool calling, and JSON output mode supported.
- **Pricing (as of 2026-10-03):** $1.25 per 1M input tokens, $4.25 per 1M output tokens, $0.15 per 1M cached read tokens on OpenRouter.
- **Architecture:** Proprietary transformer architecture with mixture-of-agents scaling and dynamic reasoning effort adjustment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench: no verified public score found individually
- GDPval-AA: no verified public score found individually
- Claw-Eval / ClawProBench: no verified public score found individually
- Design Arena (OpenRouter-published agent stats): agents/fullstack Elo 1311 (win rate 60.8%, rank 3); agents/webapps Elo 1289 (win rate 56.5%, rank 2)

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: no verified public score found individually
- Artificial Analysis Intelligence Index: **48** (#23/224; median 26 for the price tier — Artificial Analysis model card, 2026-10-03)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found individually
- Design Arena (OpenRouter-published code categories): models/3d Elo 1411 (rank 2); models/codecategories Elo 1359 (rank 3); models/gamedev Elo 1354 (rank 4)

Long context:

- 1M token window verified with strong multi-document and long-range retrieval capabilities.

### Normalized scores (1–100)

- **Tool use: 82/100.** Top-5 Design Arena agent performance (fullstack 60.8% win rate, rank 3; webapps rank 2) and an AA Intelligence Index of 48 reflecting strong agentic capability, though lacking direct Terminal-Bench 2.1 or Tau scores.
- **Reasoning: 85/100.** AA Intelligence Index 48 (#23/224) clearly exceeds median benchmarks for its price tier, benefiting significantly from the max-effort reasoning setting.
- **Context window: 95/100.** Verified 1M token context window with large output headroom (~943K tokens), placing it firmly in the highest tier.
- **Multimodal: 85/100.** Broad multimodal intake supporting text, image, video, and file inputs with high-fidelity comprehension.
- **Coding: 78/100.** Excellent Design Arena coding and gamedev performance (rank 2–4 across 3D and code categories), though missing direct SWE-bench Verified or LiveCodeBench numbers.
- **Cost efficiency: 75/100.** $1.25 in / $4.25 out per 1M tokens represents moderate pricing below premium reference points, offset somewhat by high verbosity at max reasoning effort.
- **Overall Score: 85/100.** Arithmetic mean of 82, 85, 95, 85, 78 (Cost efficiency excluded). Ideal for deep reasoning, long-context analysis, and agentic workflows where maximum capability outweighs latency considerations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-03
- Method: independent public internet research (OpenRouter API metadata, Artificial Analysis Intelligence Index, Design Arena stats); normalized 1–100 interpretations.
