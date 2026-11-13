# Gemini 4 Hydrogen — findings by Ernie 5.5 Flash

- Source: Google DeepMind (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google DeepMind's high-efficiency Gemini 4-series workhorse (adapted from Gemini 4 Carbon), built for fast everyday coding and agentic workflows — repository coding/debugging, interactive web dev, and multimodal knowledge work. Sits below Carbon (frontier) and Argon (mid-frontier) in the Gemini 4 lineup; replaces Gemini 3.8 Flash as the default Antigravity agent model.
- **Provider / access:** Gemini API (Google AI Studio `gemini-4-hydrogen`, GenerateContent + Interactions API), Vertex AI / Gemini for business, Google Antigravity, Gemini app, Google Search AI Mode, Gemini in Google Sheets. Free tier available on Gemini API and AI Studio (rate-limited). Native API is Google's own (not Chat Completions / Responses).
- **Release / knowledge:** 2026-11-12 (global rollout); knowledge cutoff March 2026 (per model card).
- **IDs:** `gemini-4-hydrogen` (stable; no dated/preview suffix). No separate Free ID — the free tier is the same model ID.
- **Context window:** 1,048,576 tokens unified (input + thinking + output share one window). Verified from the Gemini API model page (`/docs/models/gemini-4-hydrogen`). Default synchronous max output 65,536; up to 1,048,576 via background long decode in 64K hops or client-side continuation.
- **Modalities:** Text, image, video, audio, PDF in; text out. Reasoning yes (thinking levels `low`/`medium`/`high` default/`xhigh`); function calling, structured outputs, code execution, computer use, Google Search + Maps grounding, file search, URL context, agentic video understanding, implicit-only context caching (explicit caching unsupported). No audio generation, no image generation, no Live API.
- **Pricing (as of 2026-11-13):** $1.50 / 1M input, $7.50 / 1M output (incl. thinking tokens), cached input $0.075 / 1M (95% implicit-cache discount). Free tier: $0 (rate-limited). Batch and Flex inference supported; flat pricing across the whole 1M window.
- **Architecture:** Proprietary; not disclosed. Model card states Hydrogen is "adapted from Gemini 4 Carbon" (same architecture family), with parameter count undisclosed. Reasoning-capable with selectable thinking budget.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **57.0%** (cheating-adjusted average reward; Google's own mini-swe-agent-style harness, 5 attempts/task, `high` effort — not the official leaderboard harness)
- Terminal-Bench 4.0 (AA): **53.5%** (Artificial Analysis independent run)
- AutomationBench-AA: **76.1%** (Google-reported; beats Claude Sonnet 5.5 71.8% and GPT-6.1 Terra 60.2%)
- OSWorld-2.1 (offline subset): **77.6%** (Google; vs Sonnet 5.5 83.9%, GPT-6.1 Terra 74.2%)
- Agents' Last Exam v1.1: **71.6%** averaged rubric score (122-task release, Antigravity CLI, five-hour window)
- Vending-Bench 2: **$14,549** bank balance (vs Sonnet 5.5 $11,165, GPT-6.1 Terra $9,107)
- Agent Arena (arena.ai live): **#5** overall
- SWE-sweep: **13.5%** subtask-weighted reward (Google run, Antigravity CLI `agy` 1.4.8) — best of the compared class (Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%)
- Claw-Eval / ClawProBench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: no verified public score found for Hydrogen (the AA Index v5.0.1 includes GDP.pdf, not GDPval)

Reasoning / knowledge:

- HLE-Diamond: **58.8%** (Google; class-leading vs Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%)
- Artificial Analysis Intelligence Index: **51** at default `high`, **54** at `xhigh` (AA, v5.0.1 — rank #16/78; above Gemini 4 Argon's 50); BenchLM lists **53.9** / **79.08 overall** (rank #11 of 1033)
- GPQA Diamond: no verified public score found for this model
- AA-Omniscience v1.1: accuracy **50.5%**, hallucination rate **8.5%** (net score reported via AA-Omniscience Index 46.3)
- GDP.pdf: **27.6%** (AA, all-pass professional document reasoning)
- CritPt v2 (hard subset): no verified public score found (in AA Index, value not published for Hydrogen)
- MLCR-AA / LCR: no verified public long-context-retrieval score found
- MKA (Multimodal Knowledge Agent, climb WSR accuracy): **53.4%** — class-leading (Sonnet 5.5 52.0%, GPT-6.1 Terra 43.8%)
- Chartography (no tools): **66.6%** — class-leading (Sonnet 5.5 61.6%, GPT-6.1 Terra 63.2%)
- Vals Tax Agent Bench: **#1** (52.3%); Vals Legal Research Bench: **tied #1** (55.8%)
- CWE-bench v2: **68.1%** (Collinear)

Coding:

- Terminal-Bench 4.1: **57.0%** (as above; the official TB 4.1 leaderboard places it just behind Fable 5.1 57.27% and well behind Opus 5.5 65.76% / Sonnet 5.5 63.94% / GPT-6.1 Sol 60.91%)
- CursorBench 4.0: **54.3%** at `high` ($5.59/task, 88,682 tokens, 59 steps) — rank 12/90; `medium` 46.7%, `low` 27.9%
- FrontierCode-AA 2.0: **38.2%** (Cognition FrontierCode 2.0, agentic SWE in open-source repos)
- SWE-sweep: **13.5%** (as above)
- Terminal-Bench-Science 0.1: **51.4%** (vs Sonnet 5.5 59.9%, GPT-6.1 Terra 58.3%)
- Bug Hunt Bench: **32.7 fixes**
- SWE-bench Verified / SWE-Pro: no verified public score found for this model
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Context window verified at **1,048,576 tokens unified** (Gemini API docs). No model-specific MRCR / RULER / GraphWalks retrieval score published for Hydrogen as of this pass; the sibling Gemini 4 Carbon scores **96.2%** on GraphWalks (256k→1M BFS F1) on the same 1M architecture, and Google states Hydrogen shares the unified 1M window and long-decode design. Long-context retrieval for Hydrogen itself: no verified public score found.
- Token-use caveat: AA measured Hydrogen as very verbose — 304M output tokens over the Intelligence Index vs 72.8M median, 2.693% output/input ratio.

### Normalized scores (1–100)

- **Tool use: 78/100.** Class-leading agentic numbers (AutomationBench-AA 76.1%, OSWorld-2.1 77.6%, Agents' Last Exam 71.6%, Vending-Bench 2 $14,549) put it top-3 in its tier, but Terminal-Bench 4.1 at 57.0% sits mid-pack (behind Opus 5.5, Sonnet 5.5, GPT-6.1 Sol/Astra, Fable 5.1) and CursorBench 4.0 54.3% is rank 12/90 — capped short of frontier because the pure terminal-agent harness results are second-tier.
- **Reasoning: 83/100.** HLE-Diamond 58.8% is the strongest in its comparison set and AA Intelligence Index 54 (xhigh) / 51 (high) edges Gemini 4 Argon (50), but it trails Gemini 4 Carbon (Index 59) and the top of the AA leaderboard; AA-Omniscience accuracy 50.5% and GDP.pdf 27.6% are solid-not-frontier, so it lands in the low-80s rather than 90+.
- **Context window: 95/100.** Verified 1,048,576-token unified input/output window (≥1M tier → 95–100 per methodology), but no Hydrogen-specific ≥98%-retrieval-at-512K figure is published, so the 100 is withheld.
- **Multimodal: 88/100.** Native text + image + video + audio + PDF input (text-only output), with class-leading MKA 53.4% and Chartography 66.6%; not 90+ because output is text-only and there is no measured video/audio-generation capability.
- **Coding: 77/100.** SWE-sweep 13.5% is best-in-class and CursorBench 4.0 54.3% is respectable at $5.59/task, but Terminal-Bench 4.1 57.0% (mid-pack), FrontierCode 2.0 38.2% and Terminal-Bench-Science 51.4% cap it clearly below the frontier coding models.
- **Cost efficiency: 90/100.** $1.50/$7.50 per 1M with a $0 free tier and 95% cached-input discount is cheap for this capability level (AA: $3.16 per Intelligence Index task); slightly off 100 because it is a paid-tier price, not $0.
- **Overall Score: 84/100.** (78 + 83 + 95 + 88 + 77) / 5 = 84.2 → 84. Best fit: high-volume agentic coding, parallel sub-agent fleets, and multimodal document work where Carbon/Argon would be overkill — pair with Carbon for planning via Antigravity Orchestrator.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13 UTC
- Method: public internet research (web search tool returned HTTP 402 on both attempts; fell back to direct `webfetch` of primary vendor and leaderboard URLs per `RULES.md` § Web-research fallback — Google blog, DeepMind model card, Gemini API docs, Artificial Analysis, BenchLM, CursorBench, Terminal-Bench). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Hydrogen — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [Gemini 4 Hydrogen model card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [What's new in Gemini 4 Hydrogen — Gemini API docs](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen)
  - [Gemini 4 Hydrogen model page — Gemini API docs](https://aistudio.google.com/docs/models/gemini-4-hydrogen)
  - [Gemini 4 Hydrogen and Orchestrator — Google Antigravity blog](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity)
  - [Gemini 4 Hydrogen for developers — Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/)
  - [Gemini 4 Hydrogen (Xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-hydrogen)
  - [Gemini 4 Hydrogen benchmark scores — BenchLM](https://benchlm.ai/models/gemini-4-hydrogen)
  - [CursorBench 4.0 leaderboard — Cursor](https://cursor.com/cursorbench)
  - [Terminal-Bench 4.1 release notes — Terminal-Bench](https://www.tbench.ai/news/terminal-bench-4-1)
  - [Gemini 4 — Google DeepMind models hub](https://deepmind.google/technologies/gemini/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.