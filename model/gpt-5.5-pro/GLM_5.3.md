# GPT-5.5 Pro — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's ultra-premium "even harder questions, higher-accuracy" tier of the GPT-5.5 family — its most expensive model ($30/$180 per MTok), positioned for business, legal, education, data-science and research work. Variant of GPT-5.5 (same generation, pro compute tier).
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); ChatGPT Pro/Business/Enterprise and Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.5-pro`).
- **Release / knowledge:** released 2026-04-23 (ChatGPT rollout; API available 2026-04-24 per the announcement's update note). Knowledge cutoff not published.
- **IDs:** `gpt-5.5-pro`; Zen `opencode/gpt-5.5-pro`. No Free ID on Zen.
- **Context window:** 1M tokens (family API window, official announcement; BenchLM lists 1M for the Pro variant; Codex serves the 5.5 family at 400K).
- **Modalities:** text and image input, text output; reasoning always available (xhigh research setting used in official evals); tool calls; computer use (OSWorld-class) in ChatGPT/Codex.
- **Pricing (as of 2026-10-01):** $30 / $180 per MTok in/out (official and Zen; Zen cached read $30). No free tier.
- **Architecture:** proprietary, size undisclosed; co-designed for and served on NVIDIA GB200/GB300 NVL72 systems; biological/chemical and cybersecurity capability rated High under OpenAI's Preparedness Framework.

### Raw benchmarks found

> Pro-variant rows are marked (Pro). Unmarked Pro rows are absent from public tables; family evidence (GPT-5.5 base, official) is listed only as clearly-labeled family context.

Agent / tool use:

- BrowseComp: **90.1% (Pro)** (official evals table; best of all listed models incl. Gemini 3.1 Pro 85.9%, Opus 4.7 79.3%)
- GDPval (wins or ties): **82.3% (Pro)** (official; base 5.5: 84.9%)
- Investment Banking Modeling Tasks (internal): **88.6% (Pro)** (official)
- Terminal-Bench 2.0: no Pro-specific score published (family base 5.5: **82.7%**, SOTA at release)
- Toolathlon: no Pro-specific score published (family base: 55.6%)
- MCP Atlas: no Pro-specific score published (family base: 75.3%, Scale AI 2026-04 update)
- Tau2-bench Telecom: no Pro-specific score published (family base: 98.0%, original prompts)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE no tools: **43.1% (Pro)**; HLE with tools: **57.2% (Pro)** (official)
- FrontierMath Tier 1-3: **52.4% (Pro)**; Tier 4: **39.6% (Pro)** (official; Tier 4 bests GPT-5.5 35.4% and Opus 4.7 22.9%)
- ARC-AGI-1 (Verified): **95.0%**; ARC-AGI-2 (Verified): **84.2%** (ARC Prize official leaderboard via BenchLM)
- CritPt: **30.6%** (Artificial Analysis leaderboard via BenchLM)
- GeneBench: **33.2% (Pro)** (official; base 5.5: 25.0%)
- GPQA Diamond: no Pro-specific score published (family base: 93.6%, official)
- BenchLM composite: **74.62/100, #12 of 645** (9 of 618 benchmarks covered — conservative per BenchLM)

Coding:

- SWE-Bench Pro (public): no Pro-specific score published (family base: 58.6%; Opus 4.7 64.3% — labs noted memorization evidence on this eval)
- Terminal-Bench 2.0 (family base): **82.7%**; Expert-SWE internal (family base): **73.1%** (official)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 / GraphWalks: no Pro-specific rows published; family base GPT-5.5: MRCR v2 8-needle 512K-1M **74.0%**, 256K-512K 81.5%; GraphWalks BFS 1M f1 45.4% (official)

### Normalized scores (1–100)

- **Tool use: 88/100.** Pro-measured BrowseComp 90.1% (best in the official table) and GDPval 82.3% are frontier-class; the family's TB2.0 82.7%, Tau2 98.0%, MCP Atlas 75.3% corroborate agent strength. Capped slightly because Terminal-Bench/Toolathlon/Tau2 rows are not published for the Pro variant itself.
- **Reasoning: 90/100.** Pro-measured HLE 57.2% (with tools) clears the 40%+ frontier bar; FrontierMath Tier 4 39.6% and ARC-AGI-2 84.2% are top-of-table; CritPt 30.6% is the soft spot. Capped by that CritPt result and the absence of a Pro-specific GPQA row (family base: 93.6%).
- **Context window: 95/100.** 1M-token API window (official family spec; BenchLM lists 1M for Pro) = the ≥1M tier; not 100 because family MRCR retrieval at 512K-1M is 74.0%, well below the 98% full-credit bar.
- **Multimodal: 65/100.** Text + image in, text out (vision drives OSWorld-class computer use); no video/audio input or non-text output published. Image-in band (60-70); Pro-specific MMMU rows absent.
- **Coding: 85/100.** No Pro-specific coding benchmark is published, but the family is SOTA (TB2.0 82.7%, SWE-Pro 58.6%) and OpenAI positions Pro as strictly higher-accuracy; Pro-measured adjacent evidence (IB modeling 88.6%, GeneBench 33.2% > base 25.0%) supports above-base quality. Capped by zero direct Pro coding rows.
- **Cost efficiency: 15/100.** $30/$180 per MTok is 3x beyond the $10/$50 ≈ 30 reference — the most expensive model on OpenCode Zen. Value depends entirely on one-shot accuracy per task, not token economics.
- **Overall Score: 85/100.** Half-up mean of the five quality dims: (88 + 90 + 95 + 65 + 85) / 5 = 84.6 → 85. Ultra-premium deep-reasoning tier: near-frontier everywhere at extreme cost — reserve it for the hardest, highest-stakes questions.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (OpenAI official GPT-5.5 announcement + evals tables, BenchLM aggregator rows with sources, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
