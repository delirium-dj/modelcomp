# Grok 4.1 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (Grok 4.1, Thinking + non-thinking), `grok-4.1`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (Thinking / non-thinking)
- **Short description:** xAI's November 2025 conversational flagship, which topped the LMArena text leaderboard at launch (1483 Elo) before being superseded by the 4.2/4.3/4.20/4.5+ line. It shipped as a **chat product** (grok.com, X, mobile apps) rather than a documented API model, and was never listed on OpenCode Zen.
- **Provider / access:** grok.com / X / iOS / Android apps in "Auto" mode; a model card PDF exists (`https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf`) but xAI's developer docs no longer list the model and no first-party API id was published for it. **Not on OpenCode Zen** (absent from Zen docs and `https://opencode.ai/inference/v1/models`), so the `opencode/grok-4.1` id in this folder has no live Zen route.
- **Release / knowledge:** **2025-11-17** (xAI news post "Grok 4.1"). Knowledge cutoff not published.
- **IDs:** no published API model id; internal codenames "quasarflux" (Thinking) and "tensor" (non-reasoning) per the launch post. Third-party gateways list the name informally only.
- **Context window:** not stated by xAI. BenchLM's spec sheet records **1M** (https://benchlm.ai/models/grok-4-1); the 2M figure often quoted belongs to Grok 4.1 Fast, not to Grok 4.1. A 128K figure has no source and is not used here.
- **Modalities:** text in / text out, with image input in some consumer surfaces; Thinking and non-thinking variants; no published tool-calling specification.
- **Pricing (as of 2026-10-20):** **no published API pricing** — the model was distributed inside the consumer Grok subscription/app. Its public Arena ranking therefore had no metered cost.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> The launch post publishes most comparisons as chart images, so only text-stated figures are listed. There is no Artificial Analysis page (`/models/grok-4-1` → 404) and no independent technical evaluation.

Reasoning / knowledge:

- LMArena Text Arena: **1483 Elo, #1 overall** (Grok 4.1 Thinking, +31 over the best non-xAI model); **1465 Elo, #2** (non-reasoning) — xAI launch post
- Blind pairwise preference vs the previous production Grok: **64.78%** preferred during the silent rollout (Nov 1–14, 2025) — same source
- GPQA Diamond / HLE / MMLU-Pro / AIME: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: not published (BenchLM shows "no public rank — not enough non-generated coverage")

Agent / tool use:

- ResearchClawBench: **13.5%** (only sourced row on the BenchLM profile — low)
- Terminal-Bench / Tau2 / Tau3 / GDPval / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Coding:

- SWE-bench / SWE-Pro / LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks measurement published; only the BenchLM 1M context note.

### Normalized scores (1–100)

- **Tool use: 40/100.** Nothing published supports tool-use strength — the single sourced agentic row (ResearchClawBench 13.5%) is low, and there is no Terminal-Bench, τ², GDPval or OSWorld number. Scored as unmeasured with a penalty, per the methodology's "missing benchmark = note N/A" rule.
- **Reasoning: 70/100.** A launch-day #1 LMArena text position (1483 Elo Thinking, 1465 non-reasoning) and a 64.8% blind preference over the previous production Grok are strong conversational-reasoning signals, but xAI published no GPQA/HLE/AIME figures and no independent technical evaluation exists, so the score reflects preference data rather than verified task accuracy.
- **Context window: 70/100.** BenchLM records a 1M context window, which would sit in the ≥1M tier, but xAI never documented it and no retrieval measurement exists — the score is held at the 200K–500K midpoint rather than the 95+ band.
- **Multimodal: 65/100.** Text in / text out with image input reported in consumer surfaces and no audio or video, which is the "+image in" band; no multimodal benchmark was published.
- **Coding: 40/100.** No SWE-bench, LiveCodeBench, DeepSWE or SciCode number exists for Grok 4.1 in any source, so coding capability is unverified and scored conservatively.
- **Cost efficiency: 60/100.** No metered API price was ever published; access was via the free/consumer Grok subscription, which is cheap for end users but gives no server-scale price to score.
- **Overall Score: 57/100.** Mean of the five quality dims = (40 + 70 + 70 + 65 + 40) / 5 = 57.0 → **57**. Best fit: reference-only. Grok 4.1 is retired as a product line and, for any agentic or coding workload, superseded by Grok 4.20/4.3 and the 4.5–4.7 line.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (xAI news post and model card PDF, BenchLM profile, Artificial Analysis / models.dev / OpenRouter absence checks, OpenCode Zen live model endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
