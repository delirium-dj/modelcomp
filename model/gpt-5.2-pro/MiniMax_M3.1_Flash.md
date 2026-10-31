# GPT-5.2 Pro — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro — the maximum-compute variant of OpenAI's GPT-5.2 line (Instant / Thinking / Pro), released 2025-12-11. It is a distinct serving configuration of the GPT-5.2 generation with its own compute budget and price, not an alias of `gpt-5.2` (separate folder).
- **Short description:** Highest-accuracy GPT-5.2 configuration, built for research-grade multi-step reasoning with up to 30 minutes of sustained thinking. OpenAI positioned it against Claude Opus 4.5 / Gemini 3 Pro, not against later models.
- **Provider / access:** OpenAI Responses API `gpt-5.2-pro` (Chat Completions also served by aggregators); only one provider (OpenAI) is tracked for this model. **Dataset ID caveat:** this folder's `meta.json` lists `opencode/gpt-5.2-pro`, but the live OpenCode Zen catalogue (fetched 2026-10-31) contains only `gpt-5.2` and `gpt-5.2-codex` — there is no Zen route for the Pro variant.
- **Release / knowledge:** 2025-12-11 (OpenAI "Introducing GPT-5.2"); knowledge cutoff 2025-08-31 (Artificial Analysis spec for the GPT-5.2 family).
- **IDs:** `gpt-5.2-pro` (OpenAI), `openai/gpt-5.2-pro` (OpenRouter / llmapi.ai), `gpt-5.2-pro` (batch). No OpenCode Zen id.
- **Context window:** 400,000 tokens total with 128,000 max output (llm-stats provider table, Artificial Analysis GPT-5.2 family page; the dataset `meta.json` agrees).
- **Modalities:** text and image in, text out; reasoning with levels none / low / medium / high / xhigh; tool calling, structured outputs (JSON schema), JSON mode, streaming, web search; no parallel tool calls and no prompt caching listed by llmapi.ai (OpenAI's own docs are the authority; the dataset `meta.json` lists a $2.10 cached-read rate).
- **Pricing (as of 2026-10-31):** $21.00 input / $168.00 output per 1M tokens, cached read $2.10, web search $0.01 per call, Batch ≈ $57.75 per 1M blended (≈50% off). No free tier.
- **Architecture:** proprietary; parameter count not disclosed by OpenAI.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **44.9% (40/89)**, rising to **52.8% (47/89)** after retry passes, with 26 timeouts on the first run (independent run, Codex agent on Daytona, 2025-12-12, traces published at github.com/xdotli/gpt-5.2-tb2); the same harness gives `gpt-5.2` 53.9% → 59.6%, i.e. the Pro variant trails its sibling by ~7–9 points
- Terminal-Bench 2.0 official board (verified runs, tbench.ai): `GPT-5.2` (Droid agent) **64.9%**, Gemini 3 Pro (SageAgent) 65.2% ± 2.1, Claude Opus 4.5 (OpenCode) 51.7% — no verified Pro row
- SWE-bench Verified: **80%** and SWE-bench Pro **55.6%** (OpenAI launch, reported for GPT-5.2 Thinking at launch state of the art)
- GDPval-AA / AA-Briefcase Elo / Tau3-Banking / Tau2-Bench / Agents' Last Exam / AutomationBench-AA: no verified public score found for GPT-5.2 Pro (Artificial Analysis has **no model page** for it and BenchLM lists 0 of 724 benchmarks covered)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (OpenAI launch table; Gemini 3 Pro 91.9%, Claude Opus 4.6 91.9% at the time)
- ARC-AGI-2: **54.2%** at x-high effort (OpenAI GPT-5.2 datasheet, December 2025) vs GPT-5.2 Thinking 52.9% and GPT-5.1 17.6% — the December 2025 state of the art; later leaders (Gemini 3 Deep Think 84.6%, GPT-5.4 Pro 83.3%, Claude Opus 4.6 69–75%) have overtaken it
- FrontierMath: **40.3%** vs GPT-5's 26.3% (+53% relative) (OpenAI launch material)
- AIME 2025: **99%** for GPT-5.2 at x-high effort (OpenAI launch table)
- Artificial Analysis Intelligence Index: no verified public score found for GPT-5.2 Pro (AA's GPT-5.2 page shows the standard Xhigh variant with Index "N/A" — deprecated, no index published)
- HLE / MRCR / LCR / CritPt / Omniscience: no verified public score found for GPT-5.2 Pro

Coding:

- SWE-bench Verified: **80%** (OpenAI launch, GPT-5.2 Thinking row; Pro ≥ that row)
- SWE-bench Pro: **55.6%** (OpenAI launch, GPT-5.2 Thinking, state of the art at the time); a third-party comparison table reports **31.3%** for `GPT-5.2-pro-xhigh` on its SWE-bench Pro column (nexos.ai, indexed snippet only — the page 403s on direct fetch), which is a different scale from OpenAI's launch claim
- Vibe Code Bench: **41.31%** (Vals AI, GPT-5.2 — up from 24.6%) and first place on IOI v1 and on Vals' Terminal-Bench
- Terminal-Bench 2.0: **44.9% / 52.8%** (independent Codex-harness run, see agentic section)
- DeepSWE / LiveCodeBench / SciCode: no verified public score found for GPT-5.2 Pro

Long context:

- 400,000-token window with 128,000 max output is vendor-documented, but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks) was published for GPT-5.2 Pro**: no verified long-context retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Mid-tier agentic evidence: Terminal-Bench 2.0 44.9% (52.8% with retries) on an independent Codex harness where the sibling `gpt-5.2` scored 53.9–59.6%, and the verified public board puts the standard GPT-5.2 at 64.9% with the Droid agent — so the Pro variant is at or below mid-band on terminal work. Capped well below the 90–100 frontier reference (TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+) because **no GDPval-AA Elo, Tau3/Tau2 or Agents' Last Exam number is published for this model** and Artificial Analysis does not track it at all.
- **Reasoning: 90/100.** The strongest dimension: GPQA Diamond 93.2% (above the 90% reference line), ARC-AGI-2 54.2% at x-high — the December 2025 world best, ahead of GPT-5.2 Thinking 52.9% and GPT-5.1 17.6% — FrontierMath 40.3% vs GPT-5's 26.3%, AIME 2025 99%, and a 30-minute sustained-thinking budget. Held at 90 rather than higher because no HLE, MRCR or Artificial Analysis index value exists for this exact model and the reasoning evidence is all vendor-published.
- **Context window: 78/100.** 400,000 total tokens with 128,000 max output (llm-stats provider table; AA family page) sits in the 200K–500K tier (65–84 band), near its top. Not higher because no ≥98% retrieval-at-512K+ measurement exists and no long-context retrieval benchmark was published.
- **Multimodal: 68/100.** Text + image in with text out (Artificial Analysis / llmapi.ai) places it in the "+image" band (60–70). Capped inside the band because there is no video, audio or non-text output path, and a Kimi K2.5 paper reports roughly a 10% no-output failure rate for GPT-5.2 x-high on vision benchmarks.
- **Coding: 76/100.** SWE-bench Verified 80% and SWE-bench Pro 55.6% (launch state of the art), Vibe Code Bench 41.31% (Vals AI) and first on IOI v1. Capped below the 90–100 reference (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+ together) by the weak Terminal-Bench 2.0 showing (44.9% original / 52.8% with retries) and by the absence of any public DeepSWE, LiveCodeBench or SciCode number for the Pro variant.
- **Cost efficiency: 14/100.** $21 input / $168 output per 1M is roughly 2× the $10/$50 reference point that scores ~30, i.e. by far the most expensive model measured in this project; Batch at ≈$57.75 per 1M blended and the $2.10 cached-read rate soften it only slightly, and there is no free tier. Mitigating factor: it is a deliberate maximum-compute configuration whose accuracy on research-grade reasoning is unmatched by cheaper routes.
- **Overall Score: 75.6/100.** Half-up mean of the five quality dims (66 + 90 + 78 + 68 + 76) / 5 = 75.6. Best fit: high-stakes research-style reasoning (FrontierMath / ARC-AGI-2 class problems) where compute-per-answer matters more than unit economics; weaker fit for high-volume agentic or coding workloads, where the ~2× cost of GPT-6.1 Sol or 10× of GPT-6.1 Terra buys more throughput and a better terminal score.

### Agreement notes (conflicting readings)

- **Terminal-Bench 2.0 spread:** the same model family measures 44.9% (Codex agent, independent, 2025-12-12) and 64.9% (Droid agent, verified board row) on Terminal-Bench 2.0 — a harness effect of ~20 points, larger than most model deltas. Terminal-Bench states results are not comparable across versions/harnesses, so all three numbers (44.9% Pro original, 52.8% Pro with retries, 53.9–59.6% for `gpt-5.2`) are cited rather than averaged.
- **Pro vs sibling:** the independent run shows the maximum-compute Pro variant trailing plain `gpt-5.2` by ~7–9 points with 26 timeouts vs 7–8 — the opposite of OpenAI's "highest accuracy" framing, and consistent with Pro's slower decode/think time inside a fixed timeout budget.
- **SWE-bench Pro:** OpenAI's launch claim of 55.6% (GPT-5.2 Thinking) versus a third-party table's 31.3% for `GPT-5.2-pro-xhigh` (nexos.ai, snippet only) indicates at least two different SWE-bench Pro scales in circulation; neither is independently reproduced for the Pro configuration.
- **Artificial Analysis vs vendor coverage:** AA has no page for GPT-5.2 Pro and marks the family variant's Index as "N/A" (deprecated, no index published); BenchLM shows 0 of 724 benchmarks covered and "Overall Score: Coming soon". All index-level anchors are therefore unavailable and the Reasoning score rests on vendor-published numbers.
- **Price bands vs batch:** $21/$168 standard versus $57.75 per 1M blended for Batch; llmapi.ai lists "prompt caching: No" while the vendor docs and the dataset `meta.json` carry a $2.10 cached-read rate — the vendor figure is used.
- **Zen route absent:** `opencode/gpt-5.2-pro` is not in the live OpenCode Zen catalogue, so the dataset id for this folder is not a purchasable Zen path today.
- **Recency:** the model is a December 2025 generation that OpenAI has since superseded (AA marks the family deprecated and points to GPT-5.4; GPT-6/6.1 lines exist). Its scores describe a 2025-era frontier, not the current one.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-31
- Method: public internet research (OpenAI "Introducing GPT-5.2" launch material and GPT-5.2 datasheet via mirrors, Artificial Analysis GPT-5.2 family page, llm-stats GPT-5.2 Pro provider record, llmapi.ai model record, Vals AI GPT-5.2 evaluation, IntuitionLabs ARC-AGI-2 analysis, published independent Terminal-Bench 2.0 run with traces, Terminal-Bench 2.0 verified board rows, OpenRouter/models.dev/OpenCode Zen catalogue checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.2_Pro.md`, using the same headings.
