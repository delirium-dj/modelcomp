# Big Pickle — findings by Mimo v2.6 Flash

- Source: OpenCode Zen stealth/`opencode/big-pickle` (community consensus: Zhipu GLM-4.6)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** Free **stealth** coding model on OpenCode Zen (debut ~2025-11); community consensus + maintainer hints point to **GLM-4.6** (200K context match, behavior, GH issue thread) — later issue comments also claim rotating backends (e.g. `deepseek-v4-flash`, Ox Alpha) at times; treat identity as **unconfirmed / possibly rotating**. Roughly Sonnet-class coding at zero token cost during free period; data may be used to improve the model.
- **Provider / access:** OpenCode Zen only (`opencode/big-pickle`, `@ai-sdk/openai-compatible`); **Free** in/out/cache during limited-time (staff: "hoping to keep it free in perpetuity" — GH #4276). Paid equiv. cited as GLM-4.6 **~$0.60 / $2.20** on Zen list price for the named GLM model.
- **Release / knowledge:** first seen **2025-11-12/13** (GH issue); still free as of mid-2026 Zen docs. Underlying model GLM-4.6 release: Zhipu, ~2025. Knowledge cutoff not published for stealth ID.
- **IDs:** `opencode/big-pickle` (only public ID).
- **Context window:** **200,000** total (**160K in / 32K out** per meta; staff "max output is 128k" in GH thread — conflict noted; some issues claim backend actually ~1M when swapped to DeepSeek V4 Flash while catalog still says 200K).
- **Modalities:** **text only** in/out (whichllm/meta); chat completions / coding-agent focus; tool calls yes (agent-optimized if GLM-4.6).
- **Pricing (as of 2026-09-22):** **Free / Free / Free** cached read (Zen docs table). Paid reference: GLM-4.6 **$0.60 / $2.20** per 1M (GH thread). During free period, interaction data may train the model (Zen privacy note).
- **Architecture:** undisclosed publicly; if GLM-4.6 → Zhipu open-weight MoE (~355B class per GLM-4.6 lineage; **not confirmed by OpenCode**).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Stealth ID has **no first-party benchmark table**; scores below are either (a) explicit "no score for big-pickle" or (b) **inherited GLM-4.6 rows clearly labeled as attribution, not measured on `big-pickle`**.

Agent / tool use:

- Terminal-Bench / GDPval / Toolathlon / MCP-Atlas / Tau3 **for `big-pickle` specifically**: no verified public score found
- GLM-4.6 (attributed identity): agentic/tool-use widely described as strong for its size (GH thread: "amazing for its size, particularly at tool use and agentic work") — **qualitative, no % transcribed here**

Reasoning / knowledge:

- GPQA / HLE / MMLU / AA Intelligence Index **for `big-pickle`**: no verified public score found (stealth — AA does not track under this name with a published Index row in our extracts)

Coding:

- SWE-Verified / SWE-Pro / LiveCodeBench / DeepSWE **for `big-pickle`**: no verified public score found
- GLM-4.6 (attributed): Reddit/GH users report coding "about as even as gpt-5.5" for web dev (anecdotal); Grokipedia compares GLM-5 (77.8 SWE-V) as **successor**, not Big Pickle's score — do **not** import GLM-5 numbers
- No official OpenCode or Zhipu table binds a number to `big-pickle`

Long context:

- **200K** catalog window (GH/whichllm/meta); possible backend swap to ~1M without catalog update (GH comment) — unverified

Multimodal:

- **Text-only** (whichllm "text input"; meta) — template: 15

### Normalized scores (1–100)

- **Tool use: 62/100.** No measured `big-pickle` rows; if GLM-4.6 attribution holds, community consensus says strong agentic tool use for class — scored mid via attribution confidence, not a leaderboard number.
- **Reasoning: 60/100.** Zero public GPQA/HLE/AA rows for the stealth ID; GLM-4.6 generation is mid-tier reasoning in 2026 — structural score only.
- **Context window: 70/100.** 200K served (meta 160K in / 32K out) = methodology 200K → 70; possible silent 1M backend not credited; out cap 32K (or 128K per staff) noted.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 65/100.** No official SWE rows for `big-pickle`; free-stealth coding-agent positioning + GLM-4.6 attribution + user reports of Sonnet-class web coding → mid-high structural score, **explicitly not a measured SWE-Verified**.
- **Cost efficiency: 100/100.** **Free in/out/cache** on Zen (docs) with paid equiv. $0.60/$2.20 → maximum; caveat: free period is promotional, data may train the model, identity may rotate.
- **Overall Score: 55/100.** Mean of five quality dims (62+60+70+15+65)/5 = 54.6 → 55. Best-fit: **zero-cost coding experiments** on Zen when you accept stealth/rotation risk — for audited production, pin a named model (GLM-4.6/DeepSeek-V4-Flash/etc.) with published benchmarks instead.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (opencode.ai Zen docs, GH anomalyco/opencode#4276, Grokipedia Big Pickle page, whichllm catalog, r/opencodeCLI anecdote thread); scores are normalized 1–100 interpretations, not official vendor scores; **no benchmark claimed measured on `big-pickle` itself**.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
