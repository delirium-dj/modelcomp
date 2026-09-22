# GLM 5.2 Coding — findings by GLM 5.3 Flash

- Source: Z.ai / Zhipu AI (`opencode/glm-5.2-coding`; upstream `zai-org/GLM-5.2`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2-Coding (GLM Coding Plan serving of GLM-5.2)
- **Short description:** Z.ai's coding-first serving of GLM-5.2 — the June 2026 flagship open-weights MoE that led all open-weight coding models at release. Variant/alias note: GLM-5.2-Coding shares the GLM-5.2 weights (the "Coding" ID is the plan/agent-serving lane, not a separate checkpoint); benchmarks below are the shared GLM-5.2 record.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (no Free ID on Zen); Z.ai API `https://api.z.ai/api/paas/v4/chat/completions` (OpenAI-compatible Chat Completions), plus OpenRouter, Fireworks, AWS Bedrock, Google Vertex AI, DeepInfra. Tool calls, structured JSON output, streaming; thinking effort High/Max.
- **Release / knowledge:** Released 2026-06-13 via the GLM Coding Plan; MIT-licensed weights on Hugging Face 2026-06-16. Knowledge cutoff: not published in the sources reviewed.
- **IDs:** `opencode/glm-5.2-coding` (Zen), `zai-org/GLM-5.2` (Hugging Face). No Zen Free ID — scored on paid pricing.
- **Context window:** 1,000,000 tokens input; 131,072 max output (Hugging Face card / HokAI, checked 2026-08-31; DeepSeek Sparse Attention in layers 4–78). Zen-serving cap not separately verified; long-context recall past ~500K unverified by any published needle test.
- **Modalities:** text in / text out only (function calling + JSON mode yes; vision is the separate GLM-5V-Turbo model — no image/audio/video input).
- **Pricing (as of 2026-09-21):** $1.40 in / $4.40 out per 1M tokens (confirmed via OpenRouter listing, apidog 2026-08-30); cached input ~$0.26/1M (81% discount, VentureBeat-attributed); third-party from ~$0.95/1M (DeepInfra); GLM Coding Plan subscription tiers exist but secondary sources conflict on tier prices (apidog flags them) — no free API tier.
- **Architecture:** MoE Transformer, ~753B total / ~40B active (HokAI reports 744B/40B), trained on 28.5T tokens, DSA attention, MIT license (commercial use, modification, redistribution).

### Raw benchmarks found

> Z.ai published no vendor benchmark sheet at launch — every score below is from independent evaluators (Emergent explainer, 2026-07-01; HokAI model hub, checked 2026-08-31).

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Emergent/HokAI; up from GLM-5.1's 62.0)
- Tool-Decathlon: well behind Claude Opus 4.8 and GPT-5.5 (no exact value published — Emergent names tool-heavy agentic workflows the weakest area)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **80.3%** (HokAI — highest published result for an open-weights model as of mid-2026)
- MMLU: **91.72%**; MMLU-Pro: **80.63%** (HokAI)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (AA operational stats: 113 tok/s, blended $2.15/1M at 3:1, price rank #33/61)

Coding:

- SWE-bench Pro: **62.1%** (Emergent/HokAI — led all open-weight models at release; Opus 4.8 69.2; beats GPT-5.5)
- FrontierSWE: **74.4%** (Emergent — under 1 point behind Opus 4.8)
- SWE-bench Verified: no verified public score found (Pro/Multilingual rows reported instead; HokAI's card labels 62.1% "Verified" but its text and Emergent both place 62.1% on SWE-bench Pro — Pro is used here)
- SWE-Marathon: trails Opus 4.8 by up to 13 points (exact value not published)
- PostTrainBench: outperforms GPT-5.5 (value not published)
- Design Arena human-preference coding leaderboard: **#1** (Emergent)
- Terminal-Bench 2.1 (coding overlap): **81.0%**
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (1M window is card-claimed; Z.ai has published no needle-in-haystack recall at depth — accuracy past ~500K unverified per HokAI)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 81.0% sits between the mid (45–60) and frontier (88+) TB bands, but the tool-heavy picture is mixed — Tool-Decathlon clearly trails the closed frontier and Tau3/GDPval/MCP rows are unmeasured, capping it in the high 70s.
- **Reasoning: 72/100.** GPQA 80.3% tops the open-weights field and reaches the very top of the 60–80% mid band, with MMLU-Pro 80.63% corroborating; no HLE/LCR/Index data and no 90%+ frontier-band evidence cap it at the mid-band ceiling.
- **Context window: 95/100.** 1M tokens puts it in the ≥1M = 95–100 tier; missing published recall verification (and an unverified Zen-serving cap) hold it at the tier floor rather than 100.
- **Multimodal: 15/100.** Text in/out only — vision requires the separate GLM-5V-Turbo model.
- **Coding: 86/100.** Open-weight leadership across SWE-Pro 62.1% / FrontierSWE 74.4% / TB2.1 81.0% plus Design Arena #1 is near-frontier, but it trails Opus 4.8 on SWE-Pro by 7 and SWE-Marathon by up to 13, and DeepSWE/LiveCodeBench/SciCode are unmeasured — high 80s ceiling, not 90+.
- **Cost efficiency: 87/100.** $1.40/$4.40 per 1M maps to the ~88 band ($1.25/$4.25) with the ~$0.26 cached rate and MIT self-hosting as bonuses; no free tier on Zen.
- **Overall Score: 69/100.** (78 + 72 + 95 + 15 + 86) / 5 = 69.2 → 69. Best fit: cost-efficient open-weights coding workhorse for agent harnesses and monorepos; pair with a vision model and verify long-context jobs >500K before committing.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-21
- Method: public internet research (Emergent benchmark explainer, HokAI model hub, apidog pricing page, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

