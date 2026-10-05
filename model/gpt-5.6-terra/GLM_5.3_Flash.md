# GPT-5.6 Terra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (balanced mid-tier of the GPT-5.6 series — between flagship Sol and small Luna; tier names are durable capability tiers that advance on their own cadence)
- **Short description:** OpenAI's July 2026 production workhorse: GPT-5.5-level quality at roughly half the cost, 1.05M-token context and Terminal-Bench 2.1 84.3% — aimed at high-volume support, document analysis and back-office automation. Price cut 20% on 2026-07-30. The 2026-10-05 enrichment pass added GPQA/HLE rows for Terra specifically.
- **Provider / access:** OpenAI API ID `gpt-5.6-terra`; available across the API, Codex and ChatGPT. Responses API (OpenAI's own surface).
- **Release / knowledge:** limited preview 2026-06-26, public release 2026-07-09 (with GPT-5.6 Sol and Luna). Knowledge cutoff **2026-02-16** — the freshest measured in this repo.
- **IDs:** `gpt-5.6-terra` (OpenAI). **No free tier** — API-only, paid.
- **Context window:** 1,050,000-token input, 128,000-token max output (ai-tldr spec block).
- **Modalities:** text + image in, text out (ai-tldr spec block; the repo catalog lists audio/video/PDF as well — unverified in this pass, treat cautiously). Reasoning-model architecture with the GPT-5.6 safety stack.
- **Pricing (as of 2026-09-18):** $2.00 in / $12.00 out per 1M after the 2026-07-30 20% cut (was $2.50/$15.00 at launch); OpenAI attributes the cut to efficiency gains from using GPT-5.6 to rewrite its own production stack.
- **Architecture:** proprietary, parameters undisclosed; reasoning model; one of three GPT-5.6 tiers (Sol/Terra/Luna, all 1.05M context).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** — vs GPT-5.6 Sol 88.8% (91.9% ultra mode) and Luna 82.5% (OpenAI launch data via ai-tldr)
- AutomationBench / OSWorld / tau: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (low reasoning effort) per Artificial Analysis as republished on OpenRouter's GPT-5.6 Terra page — fills the gap the 2026-09-18 pass marked "no verified public score found"
- HLE: **29.2%** (low reasoning effort, same source)
- OpenAI's own 2026-07-09 launch page ("GPT-5.6: Frontier intelligence that scales with your ambition") publishes a GPQA Diamond row including Terra in the ~92–94% band — exact cell not alignable to Terra at the published effort setting, so the AA low-effort figure is the one scored here
- MMMLU / AA Intelligence Index: no verified public score found for Terra specifically

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for Terra specifically
- Codex integration is first-party (ships with the model surface), but no public agentic-coding benchmark row was captured

Long context:

- Window: **1,050,000 tokens** in / 128K out; MRCR/RULER/AA-LCR: no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 84.3% is a top-five published agentic-terminal result, a hair under Gemini 3.7 Flash's 85.8; no tau/OSWorld evidence to push higher.
- **Reasoning: 85/100.** Measured GPQA Diamond 84.3% and HLE 29.2% at low reasoning effort (AA via OpenRouter), with OpenAI's launch page indicating a ~92–94% GPQA band at higher effort — the "GPT-5.5-level" positioning now has verified backing; still short of the 90s because the strongest numbers are effort-dependent and not independently reproduced.
- **Context window: 100/100.** 1.05M input (largest measured here) with a 128K output cap.
- **Multimodal: 82/100.** Confirmed text + image in; audio/video/PDF claims unverified this pass; text-only output.
- **Coding: 88/100.** TB2.1 84.3 plus first-party Codex integration; no SWE-bench-class number published to argue higher.
- **Cost efficiency: 55/100.** No free tier and $2.00/$12.00 list — an order of magnitude above open-weights tiers; only the 20% cut and GPT-5.5-class quality keep it mid-tier.
- **Overall Score: 89.6/100.** Five-dim mean per `RULES.md` (Cost excluded): (93 + 85 + 100 + 82 + 88) / 5 = 448/5 = 89.6. Best fit: the OpenAI-locked production workhorse — excellent agents, 1.05M context and now measured reasoning; per-dollar it still loses to Gemini 3.7/3.8 Flash and the free open tiers.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: ai-tldr.dev GPT-5.6 Terra page quoting OpenAI's model documentation, launch announcement, price-cut post and CNBC/TechCrunch coverage; 2026-10-05 approved enrichment pass: AA GPQA/HLE via OpenRouter's Terra page, OpenAI 2026-07-09 launch page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
