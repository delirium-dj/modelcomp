# Big Pickle — findings by Qwen 3.8 27B

- Source: OpenCode Zen stealth model (`opencode/big-pickle`; community consensus: Zhipu GLM-4.6)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (stealth codename; community-identified as GLM-4.6)
- **Short description:** OpenCode Zen's free stealth reasoning/coding model — a rotating, unannounced model served free during a community trial. Community consensus (GitHub issue anomalyco/opencode#4276, Nov 2025; multiple secondary sources) identifies it as Zhipu's GLM-4.6; OpenCode has not confirmed identity and community reports say the underlying model rotates periodically, with a recent (Sep 2026) claim of a GLM-5.2 swap.
- **Provider / access:** OpenCode Zen Free tier `opencode/big-pickle` (OpenAI-compatible endpoint, `@ai-sdk/openai-compatible`); free input/output/cached reads during the active trial. OpenCode's own data page (`opencode.ai/data/unknown/big-pickle`, updated 2026-09-30) shows **0 current-window usage** and 1,203 cumulative completed sessions — the free window appears to have ended or the model rotated by late Sep 2026.
- **Release / knowledge:** First surfaced as a free OpenCode Zen model in Nov 2025 (community reports); underlying model's knowledge cutoff unknown.
- **IDs:** `opencode/big-pickle` (repo registry / Zen Free tier). No stable public model card.
- **Context window:** 200K total (160K in / 32K out per repo meta; the 200K window matches GLM-4.6's and was the basis of the #4276 identity guess; native GLM-4.6 allows up to 128K output).
- **Modalities:** Text in, text out (repo meta; GLM-4.6 API is text-in/text-out per docs.z.ai and Artificial Analysis). Reasoning/thinking supported (community tooling like the Pickle-Thinker plugin injects the "Ultrathink" keyword to force thinking mode); tool calls supported (GLM-4.6 supports tool use during inference).
- **Pricing (as of 2026-10-01):** Free during the Zen trial; paid equivalent of the attributed GLM-4.6 is ~$0.50–0.57 in / ~$2.00–2.20 out per 1M (DeepInfra/Fireworks/Z.ai, cached ~$0.10/1M).
- **Architecture:** Undisclosed for the codename; the attributed GLM-4.6 is a 357B-param MoE (32B active), MIT-licensed, open weights on Hugging Face (`zai-org/GLM-4.6`).

### Raw benchmarks found

> No Big-Pickle-specific benchmark run exists under the codename — every
> Big-Pickle-specific row below is "no verified public score found". The
> dimension scores below are calibrated on the community-attributed
> underlying model (GLM-4.6, Z.ai vendor-published results, 2025-09-30),
> with that attribution explicitly unconfirmed and the underlying model
> reported to rotate.

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas (Big Pickle itself): no verified public score found
- Attributed GLM-4.6: τ²-Bench (weighted) **75.9%** (Z.ai blog 2025-09-30; Claude Sonnet 4: 66.0, Sonnet 4.5: 88.1); Terminal-Bench (v1) **40.5%** (Sonnet 4.5: 50.0); Terminal-Bench 2.0 **24.5%** (tbench.ai, via Hugging Face eval card); BrowseComp **45.1%** (search-agent; top of the vendor chart, Sonnet 4.5: 19.6); CC-Bench-V1.1 human-eval agentic coding: **48.6% win / 9.5% tie / 41.9% lose vs Claude Sonnet 4** (74 tasks in Claude Code; trajectories public on HF `zai-org/CC-Bench-trajectories`)

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Index (Big Pickle itself): no verified public score found
- Attributed GLM-4.6 (vendor, 128K context evals): GPQA **81.0%** (w/ tools 82.9; Sonnet 4.5: 83.4); AIME 25 **93.9%** (w/ tools 98.6; elite); HLE **17.2%** no-tools / **30.4%** w/ tools (Sonnet 4.5: 17.3 no-tools); Artificial Analysis Intelligence Index **15** (estimated; #18/46 in open-weight non-reasoning class, above median 12 — AA, fetched 2026-10-01)

Coding:

- SWE-bench Verified / LiveCodeBench / SWE-Pro / SciCode / Vibe Code Bench (Big Pickle itself): no verified public score found
- Attributed GLM-4.6 (vendor): SWE-bench Verified **68.0%** (GLM-4.5: 64.2, DeepSeek-V3.2-Exp: 67.8, Sonnet 4: 72.5, Sonnet 4.5: 77.2); LiveCodeBench v6 **82.8%** (w/ tools 84.5 — elite vs Sonnet 4.5's 57.7); SWE-bench Pro **9.67** (ScaleAI public leaderboard, via HF eval card — the hard variant is far weaker)

Multimodal:

- No multimodal input on the Zen route (text in/out only, repo meta); attributed GLM-4.6 API is likewise text-in/text-out (docs.z.ai, AA) → no verified multimodal benchmark applies.

Long context:

- 200K window (GLM-4.6 expanded from 128K for agentic work); no MRCR/RULER retrieval value found for this route.
- Community speed reports of ~189 tok/s on the Zen route (secondary sources; not a benchmark).

### Normalized scores (1–100)

- **Tool use: 70/100.** Attributed GLM-4.6 evidence: τ²-Bench 75.9% (near Sonnet-4.5 territory), BrowseComp 45.1% (best in vendor chart), CC-Bench 48.6% win rate vs Sonnet 4 with the lowest token usage of the field; but Terminal-Bench 40.5% / TB 2.0 24.5% are only mid-tier. No Big-Pickle-specific agentic data exists, so this is an attribution-capped score.
- **Reasoning: 65/100.** GPQA 81.0% sits at the top of the mid band, AIME 93.9% is elite math, HLE 17.2–30.4% is solid but a generation below the 2026 frontier; AA Index 15 (above median for open non-reasoning). One year older than the site's tracked frontier.
- **Context window: 70/100.** 200K total on the Zen route (160K in / 32K out) — the 200K band; native GLM-4.6 supports up to 128K output, but the free route caps output at 32K.
- **Multimodal: 15/100.** Text in/text out on the evaluated route (and on the attributed native API) — text-only band; no image/audio/video input.
- **Coding: 72/100.** The strongest dimension: SWE-bench Verified 68.0% (within reach of Sonnet 4), LiveCodeBench v6 82.8% (elite for its generation), CC-Bench near-parity with Sonnet 4 at ~30% lower token cost; held back from the 80s by SWE-bench Pro 9.67 and a generation of distance from 2026 frontier coding scores.
- **Cost efficiency: 100/100.** Free Zen trial tier ($0 in/out/cached) = free band. Caveat: OpenCode's data page (2026-09-30) shows zero current-window usage — the free window has likely ended or rotated; if the paid equivalent applies, cost drops to the ~$0.57/$2.20 GLM-4.6 rate (roughly 65–70).
- **Overall Score: 58.4/100.** Mean of (70 + 65 + 70 + 15 + 72)/5 = 58.4. Best fit: a free, fast (~189 tok/s community-measured), Sonnet-4-class coding workhorse for high-volume agentic coding while the trial runs — with the standing caveat that scores track the attributed GLM-4.6 and the underlying model may already be something else.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (OpenCode data page opencode.ai/data/unknown/big-pickle, updated 2026-09-30; GitHub issue anomalyco/opencode#4276; Grokipedia "Big Pickle model" (fact-checked 2026-09-28); Z.ai GLM-4.6 launch post z.ai/blog/glm-4.6 (2025-09-30) incl. the 8-benchmark chart (AIME 25 / GPQA / LiveCodeBench v6 / HLE / BrowseComp / SWE-bench Verified / Terminal-Bench / τ²-Bench) and CC-Bench-V1.1 win-rate + token-usage charts; docs.z.ai/guides/llm/glm-4.6; Hugging Face zai-org/GLM-4.6 model card + eval results (TB 2.0 24.5, SWE-bench Pro 9.67); artificialanalysis.ai/models/glm-4-6; llm-stats.com/models/glm-4.6; crackedaiengineering.com and steemit.com secondary specs; community YouTube claim of a GLM-5.2 swap); scores are normalized 1–100 interpretations calibrated on the attributed GLM-4.6 vendor numbers, not official vendor scores for "Big Pickle".
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
