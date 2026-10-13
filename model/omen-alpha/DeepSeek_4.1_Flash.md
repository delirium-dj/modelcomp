# Omen Alpha — findings by DeepSeek 4.1 Flash

- Source: unannounced vendor model routed by TokenRa and OpenCode Go (`omen-alpha`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-27)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-checked against explainx.ai (2026-09-05), Startup Fortune (2026-09-04),
> omenalpha.io ("What Is" + "Benchmarks" pages, reviewed 2026-09-05),
> buildfastwithai.com (2026-09-04), OpenCode's public `zhipu/omen-alpha` data
> path and OpenRouter's Stealth index. The second pass changed nothing
> material: Omen Alpha is still an unannounced, API-only stealth coding model
> with no vendor benchmark suite, no public model card and no confirmed maker.
> Community sources continue to disagree on the vendor (Zhipu/GLM vs Xiaomi
> MiMo-V3-Flash vs an explicit "not Z.ai" counter-claim) and on the usage
> snapshot; no new published benchmark was found. Every score below is
> therefore unchanged from the first pass — the lowest-confidence set in this
> scan — and missing dimensions stay labelled `no verified public score found`
> rather than filled in.

## Model card

- **Name:** Omen Alpha (referred to as "Omen Alpha 2.0", the likely successor to Ox Alpha, on omenalpha.io)
- **Short description:** An unannounced, API-only reasoning/coding model first spotted on OpenCode around 2026-09-04 and resold through the TokenRa (tokenra.io) gateway. No company has claimed ownership; the strongest public clue is OpenCode's own vendor path `zhipu/omen-alpha`, which drives a GLM/Zhipu lineage hypothesis, while an alternate analysis (OrcaRouter) proposes Xiaomi's unreleased MiMo-V3-Flash and a widely shared post claims the opposite ("not from Z.ai"). All three remain unconfirmed; there is no launch post, model card or vendor evaluation.
- **Provider / access:** OpenCode Go ($10/month incl. ~$100 of usage credit; model id `omen-alpha`) and TokenRa gateway, OpenAI-compatible `POST /zen/go/v1/chat/completions` with model id `omen-alpha`. Reasoner exposing low/high thinking levels and an interleaved `reasoning_content` field. Closed/API-only — no open weights.
- **Release / knowledge:** First spotted 2026-09-04 (OpenCode Go / Startup Fortune / explainx.ai); knowledge cutoff **not disclosed**.
- **IDs:** `omen-alpha` (OpenCode Go / TokenRa). No OpenCode Zen Free ID — paid on every route found.
- **Context window:** **not officially disclosed.** Most-agreed value 500,000 tokens with 128,000 max output (Pi registry / models.dev, corroborated by Startup Fortune and buildfastwithai); TokenRa/omenalpha.io quote the same ~500K. Community long-context probes claim "969K or more (close to 1M)"; self-reported and unverified.
- **Modalities:** text + image input, text output; reasoning and tool calling supported (Pi registry, models.dev, omenalpha.io, buildfastwithai). No audio/video generation — a multimodal-input reasoning model, not a media generator.
- **Pricing (as of 2026-10-11):** Listed API rate $0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cached read (TokenRa / omenalpha.io). tokenra.io advertises a discounted route at $0.08 / $0.26 / (60% off). OpenCode Go bundles roughly $100 of usage for $10/month. Prompts are claimed not used for training with 0-day retention (OpenCode Go privacy table) — an OpenCode-layer claim that says nothing about the unnamed upstream. The first-pass rates ($0.13 / $0.50 / $0.03) were **not corroborated** in the second pass and are dropped.
- **Architecture:** undisclosed; no open weights. TokenRa describes the tokenizer and vision/video behaviour as "closely matched" to Zhipu's GLM-5.3-Flash (320B total / 18B active MoE) — circumstantial, not confirmed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA, Terminal-Bench, Tau3-Banking / Tau2-Bench, GDPval-AA: **no verified public score found** — no harness has published tool-calling or agentic results for this model; tool calling is merely listed as supported (https://pi.dev/models/opencode-go/omen-alpha)
- OpenCode usage data (proxy, not a benchmark; **re-checked 2026-10-11, snapshot conflicts with the first pass**): buildfastwithai.com reports ~39B recent tokens, ~2,900 unique users, 7,518 completed sessions and ~$0.27 average session cost — materially different from the first-pass snapshot (78B tokens, 74K users, 528,906 sessions, $0.23/session), so the two are treated as different-dated scopes rather than compared (https://www.buildfastwithai.com/blogs/omen-alpha-review)

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found**
- The only public reasoning evidence is architectural: a documented reasoning mode with low/high thinking levels and an interleaved trace field, plus unverified ~189 tokens/second speed reports (https://www.buildfastwithai.com/blogs/omen-alpha-review)

Coding:

- OpenCode leaderboard snapshot (2026-09-04, "Omen Alpha (High)", methodology v1): overall coding score **23.14 / 40**, leaderboard rank **#15**; code-quality component **9.94 / 20** (https://omenalpha.io/benchmarks.html)
- Project rows from the same snapshot: CSV import (PHP) **4 / 5**, offline sync (PHP) **3.5 / 5**, bank feed (Dart/Flutter) **2.7 / 5**, shipping quotes (Go) **3 / 5**
- Efficiency from the same run: **$0.03** average cost per prompt, **01:51** average time per prompt; SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE: **no verified public score found**
- Community reports are mixed: some call it fast/competent, one Reddit thread reports poor recall of earlier turns (https://www.buildfastwithai.com/blogs/omen-alpha-review)


Long context:

- No MRCR/RULER/GraphWalks value exists. The only long-context evidence is the ~500K documented window against an unaudited "969K or more" community measurement; nothing new was published in the second pass, which is why the context score stays capped below the official 1M/2M tiers.


Multimodal:

- No MMMU / vision benchmark published. Text + image input is documented (Pi registry, models.dev, omenalpha.io) but there is no scored vision evaluation and the vendor is anonymous.


### Normalized scores (1–100)

- **Tool use: 62/100.** The OpenCode run is an automated repo-task harness with an execution/verification loop, so some tool-mediated work is proven, but there is **no** function-calling, MCP or τ-bench evidence at all — the score is a conservative floor, capped by that absence (https://omenalpha.io/benchmarks.html).
- **Reasoning: 60/100.** No reasoning benchmark is published; the only supporting facts are the documented interleaved reasoning mode and the unverified ~189 tok/s reports. Scored as a low-confidence proxy, deliberately not guessed upward (https://www.buildfastwithai.com/blogs/omen-alpha-review).
- **Context window: 88/100.** A 500K documented window with 128K max output is strong and community probes reach ~1M, but it stays below the official 1M/2M tiers because the vendor confirms nothing and no recall benchmark validates the long end (https://pi.dev/models/opencode-go/omen-alpha).
- **Multimodal: 60/100.** Text plus image input is documented on the OpenCode Go and TokenRa routes, but the vendor is anonymous, the modality set is unconfirmed and no vision benchmark exists — hence mid-range rather than high (https://omenalpha.io/what-is-omen-alpha.html).
- **Coding: 74/100.** 23.14/40 on the OpenCode leaderboard (#15) with a 9.94/20 code-quality component shows genuine multi-language capability (PHP, Dart/Flutter, Go), but missing SWE-bench-class evidence caps it well below the named frontier coders (https://omenalpha.io/benchmarks.html).
- **Cost efficiency: 90/100.** $0.20 / $0.66 with $0.04 cached reads (and a $0.08 / $0.26 discounted TokenRa route) plus the OpenCode Go bundle is cheap for long agentic runs; the higher list rate and an upstream that is unnamed behind a zero-retention claim cost it the last few points (https://omenalpha.io/what-is-omen-alpha.html).
- **Overall Score: 69/100.** (62 + 60 + 88 + 60 + 74) / 5 = 68.8 → **69**. Best fit: cheap long-context repository coding and bulk agent runs, with the explicit caveat that this is the least verified model in the comparison set.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (OpenCode leaderboard snapshot transcribed by the model's own benchmark page, explainx.ai launch analysis, Startup Fortune vendor-attribution reporting, buildfastwithai review, omenalpha.io spec/benchmark pages, OpenCode `zhipu/omen-alpha` data path, OpenRouter Stealth index); scores are normalized 1–100 interpretations, not official vendor scores, and are the lowest-confidence set in this report.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
