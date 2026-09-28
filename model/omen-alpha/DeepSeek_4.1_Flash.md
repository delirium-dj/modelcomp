# Omen Alpha — findings by DeepSeek 4.1 Flash

- Source: unannounced vendor model routed by TokenRa (`omen-alpha`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Evidence note.** This entry is a stealth/anonymous coding model: the developer is
> not officially disclosed and no vendor benchmark suite exists. Every number below is
> traceable to a dated leaderboard snapshot or a published price list, and the missing
> dimensions are labelled `no verified public score found` rather than filled in.
> Scores are therefore lower-confidence than the named-model reports in this scan.

## Model card

- **Name:** Omen Alpha (also marketed as "Omen Alpha 2.0" on the TokenRa catalogue)
- **Short description:** An unannounced, API-only reasoning/coding model surfaced through OpenCode's model list and resold by the TokenRa gateway. Community testing points to a GLM lineage (`glm-5.3-highspeed` is the speculation named by TokenRa) but nobody has confirmed it, and OpenCode's own data path shows `unknown` for context, release and modalities. It has no launch post, no model card and no vendor evaluation.
- **Provider / access:** TokenRa gateway, OpenAI-compatible `POST /zen/go/v1/chat/completions` with model id `omen-alpha`; listed on OpenCode as the `opencode-go` host. Reasoner with an interleaved `reasoning_content` field. Closed/API-only (open weights: no, per modelbenchmark.io).
- **Release / knowledge:** Tracked release date 2026-09-04 (modelbenchmark.io lifecycle row); knowledge cutoff **not disclosed**.
- **IDs:** `omen-alpha` (TokenRa / OpenCode). No OpenCode Zen Free ID — paid on every route found.
- **Context window:** **not officially disclosed.** Most-agreed value 500K (modelbenchmark.io); TokenRa's own page says "commonly cited as 500K, measured at 969K or more (close to 1M)". Max output 128K (modelbenchmark.io). Community measurements are the only evidence for the larger figure.
- **Modalities:** text and image input on the enabled TokenRa integration, "video behaviour closely matching" (TokenRa); modelbenchmark lists text+image in / text out.
- **Pricing (as of 2026-09-27):** TokenRa $0.13 / 1M input, $0.50 / 1M output, $0.03 / 1M cached read. Competing listings quote $0.20 / $0.66 / $0.04 (modelbenchmark.io and the model's own benchmark page), so the higher listed rate is used for scoring. Prompts/completions are retained by the provider but stated not to be used for training.
- **Architecture:** undisclosed; no open weights. TokenRa describes the tokenizer and vision/video behaviour as "closely matched" to Zhipu's GLM-5.3-Flash (320B total / 18B active MoE) — circumstantial, not confirmed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA, Terminal-Bench, Tau3-Banking / Tau2-Bench, GDPval-AA: **no verified public score found** — no harness has published tool-calling or agentic results for this model
- OpenCode weekly usage data (proxy, not a benchmark; **re-checked 2026-09-27, figures have drifted upward**): rank **#25** by token volume (was #24), 0.3% of observed 2M volume, **78B tokens** (was 76B) and **74K unique users**, **528,906 completed sessions** (was 526,182), 69% weekly retention, cache ratio **93%**, average **4.2M tokens/session**, average cost **$0.23/session**, total spend $121K, top geo China 34% / US 15%

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found**
- The only public reasoning evidence is architectural: TokenRa documents a reasoning mode with an interleaved trace field, and users report a 969K+ measured context in long-context probes (self-reported, unverified).

Coding:

- OpenCode leaderboard snapshot (2026-09-04, "Omen Alpha (High)", methodology v1): overall coding score **23.14 / 40**, leaderboard rank **#15**; code-quality component **9.94 / 20**
- Project rows from the same snapshot: CSV import (PHP) **4 / 5**, offline sync (PHP) **3.5 / 5**, bank feed (Dart/Flutter) **2.7 / 5**, shipping quotes (Go) **3 / 5**
- Efficiency from the same run: **$0.03** average cost per prompt, **01:51** average time per prompt; SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE: **no verified public score found**


Long context:

- No MRCR/RULER/GraphWalks value exists; the only long-context evidence is the unaudited "969K or more" measurement quoted by TokenRa against a 500K most-agreed documented figure, which is why the context score is capped below the 1M official tiers.


### Normalized scores (1–100)

- **Tool use: 62/100.** The OpenCode run is an automated repo-task harness with an execution/verification loop, so some tool-mediated work is proven, but there is **no** function-calling, MCP or τ-bench evidence at all — the score is a conservative floor, capped by that absence.
- **Reasoning: 60/100.** No reasoning benchmark is published; the only supporting facts are the documented interleaved reasoning mode and a measured 969K-token probe. Scored as a low-confidence proxy, deliberately not guessed upward.
- **Context window: 88/100.** A 500K most-agreed documented window with 128K max output is strong, and community probes reach ~1M; it stays below the official 1M/2M tiers because the vendor confirms nothing and no recall benchmark validates the long end.
- **Multimodal: 60/100.** Text plus image input is documented on the TokenRa integration with video "closely matching", but the vendor is anonymous, the modality set is unconfirmed and no vision benchmark exists — hence mid-range rather than high.
- **Coding: 74/100.** 23.14/40 on the OpenCode leaderboard (#15) with a 9.94/20 code-quality component shows genuine multi-language capability (PHP, Dart/Flutter, Go), but missing SWE-bench-class evidence caps it well below the named frontier coders.
- **Cost efficiency: 90/100.** $0.13–$0.20 / 1M input and $0.50–$0.66 / 1M output with $0.03–$0.04 cached reads plus a 93% observed cache ratio is cheap for long agentic runs; the higher list rate and undisclosed data terms cost it the last few points.
- **Overall Score: 68.8/100.** (62 + 60 + 88 + 60 + 74) / 5 = 68.8. Best fit: cheap long-context repository coding and bulk agent runs, with the explicit caveat that this is the least verified model in the comparison set.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (OpenCode leaderboard snapshot transcribed by the model's own benchmark page, modelbenchmark.io lifecycle/specs, TokenRa catalogue, opencode.ai usage data); scores are normalized 1–100 interpretations, not official vendor scores, and are the lowest-confidence set in this report.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

