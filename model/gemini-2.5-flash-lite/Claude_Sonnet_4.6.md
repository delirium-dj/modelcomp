# Gemini 2.5 Flash-Lite — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Lightweight, ultra-low-latency variant of Gemini 2.5 Flash from Google DeepMind. Reached general availability in July 2025. Designed for high-volume, latency-sensitive tasks; thinking disabled by default. Scheduled for retirement ~October 16, 2026 — legacy status as of 2026-09-17. Approximately 4.9× cheaper per token than 2.5 Flash at launch.
- **Provider / access:** Google AI Studio and Vertex AI (`gemini-2.5-flash-lite`); endpoint approaching retirement October 2026.
- **Release / knowledge:** GA July 2025; retirement October 16, 2026 per Google enterprise docs. Knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-2.5-flash-lite`. No OpenCode Zen Free ID found; scored on paid pricing.
- **Context window:** 1,048,576 tokens input (~1M); max output 65,536 tokens. Verified via openrouter.ai, google.com documentation.
- **Modalities:** Text in; thinking optional (disabled by default). Tool calls (Google Search, code execution). Per positioning as "lite" cost tier: image/audio/video input not confirmed as fully supported — scored conservatively.
- **Pricing (as of last-known active state, 2025–2026):** $0.10 / 1M input, $0.40 / 1M output (confirmed via openrouter.ai, androidcentral.com); among cheapest Google models. Retired endpoint pricing is archival.
- **Architecture:** Proprietary (Google DeepMind); lighter compute variant of the 2.5 family; approximate param count undisclosed. Optimised for throughput speed over reasoning depth.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **no verified public score found** — no public leaderboard entry found for gemini-2.5-flash-lite specifically
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Lite tier (parent model 2.5 Flash had ~82.8%)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- Intelligence Index: **no verified public rank found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / SciCode: **no verified public score found**

Long context:

- 1M input confirmed; no MRCR/RULER depth-retrieval study found publicly.

### Normalized scores (1–100)

> Note: No verified public benchmark numbers found for any dimension for this model. Scores are inferred from context (parent model proxy, pricing tier, stated capabilities) and are marked provisional.

- **Tool use: 42/100.** No public benchmark data; Lite tier is designed for low-latency tasks, not complex multi-step agents; pensalised for all N/A dimensions; provisional estimate below mid.
- **Reasoning: 48/100.** No verified GPQA/HLE/LCR; thinking disabled by default limits reasoning ceiling; inferred significantly below parent's 82.8% GPQA; provisional.
- **Context window: 95/100.** 1M confirmed (same structural tier as parent); no retrieval-at-depth data gives 95 not 100.
- **Multimodal: 20/100.** Lite tier primarily positioned for text; image/audio/video support unconfirmed at same level as Flash; conservative 20 per methodology (text-only or minimal modality = 10–20).
- **Coding: 42/100.** No public SWE-bench or DeepSWE; Lite positioned as throughput not coding-agent model; provisional lower-mid.
- **Cost efficiency: 100/100.** $0.10/$0.40 — exceptionally cheap; per methodology ~$0 = 100; $0.10/0.40 is effectively near-free tier pricing; awards 100.
- **Overall Score: 58/100.** Mean of (42 + 48 + 95 + 20 + 42 + 100) / 6 = 347 / 6 = 57.8 → **58**. Best fit: extreme cost/speed use cases (batch classification, routing); not suitable for deep coding agents or complex reasoning. Model is retiring October 2026.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (Anthropic / `claude-sonnet-4-6`)** — 2026-09-17
- Method: public internet research (web search against google.com, openrouter.ai, androidcentral.com, chapter.pub, creditforstartups.com, google.dev); scores are normalised 1–100 interpretations, not official vendor scores. No verified public benchmarks found — scores are provisional inferences.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
