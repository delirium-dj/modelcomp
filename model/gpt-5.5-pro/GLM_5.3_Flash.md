# GPT 5.5 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** The maximum-accuracy variant of OpenAI's GPT-5.5 generation (Apr 2026) — a research-partner-class model for the hardest questions: BrowseComp state of the art (90.1%), HLE 43.1% without tools, GDPval 82.3% wins/ties. Available in ChatGPT Pro/Business/Enterprise and the API (since Apr 24, 2026).
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5-pro` via `https://opencode.ai/zen/v1/responses` (paid, $30/$180); OpenAI API `gpt-5.5-pro` (Responses + Chat Completions, batch/flex at half rate, priority processing at 2.5x). Base model is `gpt-5.5` — Pro is a distinct, slower, pricier variant.
- **Release / knowledge:** Released 2026-04-23 (OpenAI "Introducing GPT-5.5"; API from Apr 24, 2026); knowledge cutoff: not stated for Pro.
- **IDs:** `opencode/gpt-5.5-pro` (Zen, paid); `gpt-5.5-pro` (OpenAI API)
- **Context window:** 1M tokens (stated for the gpt-5.5 API model; the Pro variant's context is not separately verified — family announcement applies); max output: not stated for Pro
- **Modalities:** Text and image in, text out; reasoning supported (xhigh-family evals); tool calling; structured outputs; computer use via Codex skills (family)
- **Pricing (as of 2026-10-01):** Paid — $30 / 1M input, $180 / 1M output (OpenAI; identical on Zen, cache read $30.00).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. High biological/chemical and cybersecurity capability under the Preparedness Framework v2 (GPT-5.5 family).

### Raw benchmarks found

> All numbers OpenAI-reported (GPT-5.5 announcement, Apr 23, 2026; GPT-5.5 Pro column; xhigh-family research environment unless noted). Many evals were not run for Pro ("—").

Agent / tool use:

- BrowseComp: **90.1%** — new state of the art (GPT-5.5 Pro)
- GDPval (wins or ties vs professionals): **82.3%**
- Investment Banking Modeling Tasks (internal): **88.6%**
- Terminal-Bench 2.0: no verified public score found for Pro (— in the announcement table)
- Tau2-Bench Telecom: no verified public score found for Pro (—)
- MCP Atlas: no verified public score found for Pro (—)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **43.1%**; HLE (with tools): **57.2%**
- FrontierMath Tier 1–3: **52.4%**; Tier 4: **39.6%**
- GeneBench: **33.2%**
- GPQA Diamond: no verified public score found for Pro (—)
- ARC-AGI-1/2: no verified public score found for Pro (—)
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (no AA page for 5.5 Pro)

Coding:

- SWE-Bench Pro (Public): no verified public score found for Pro (—)
- Terminal-Bench 2.0 (coding): — (above)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- no long-context retrieval reported for Pro (— in the table; gpt-5.5 base reports MRCR v2 8-needle 512K–1M at 74.0% and Graphwalks BFS 1M at 45.4% — family context only, not applied)

Computer use and vision:

- OSWorld-Verified: no verified public score found for Pro (—)
- MMMU Pro: no verified public score found for Pro (—)

## Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 90.1% state of the art plus GDPval 82.3% wins/ties (near the methodology's GDPval ~1750+ → 90–100 frontier reference) and internal IB modeling 88.6%; capped by missing Terminal-Bench/Tau2 numbers for the Pro variant itself.
- **Reasoning: 92/100.** HLE 43.1% (no tools) clears the methodology's frontier reference (HLE 40%+ → 90–100); FrontierMath Tier 1–3 52.4% / Tier 4 39.6% and GeneBench 33.2% corroborate frontier research-level reasoning; GPQA not run for Pro.
- **Context window: 93/100.** 1M tokens enters the ≥1M = 95–100 band; the "100" requires ≥98% retrieval at 512K+, which no Pro retrieval run confirms (gpt-5.5 base posts MRCR 512K–1M 74.0% — below that bar), so the score lands just under the band ceiling.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no Pro-specific vision evals were run.
- **Coding: 68/100.** Zero verified coding benchmarks for the Pro variant (SWE-Bench Pro and Terminal-Bench 2.0 are "—" in the announcement table); the family base posts SWE-Bench Pro 58.6% / TB 2.0 82.7% state of the art, so a higher score would be unverified — capped by absence of same-variant evidence.
- **Cost efficiency: 12/100.** $30/$180 per 1M tokens — the extreme end, well beyond the $10/$50 = ~30 methodology reference; only justified when maximum accuracy matters.
- **Overall Score: 81/100.** Mean of the five quality dims (89+92+93+65+68)/5 = 81.4. Best fit: maximum-accuracy research, deep knowledge work, and hard agentic browsing where budget is secondary — overkill for routine coding or cost-sensitive work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official OpenAI GPT-5.5 announcement with evaluation tables, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
