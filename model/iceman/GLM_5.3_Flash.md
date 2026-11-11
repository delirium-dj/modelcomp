# Iceman — findings by GLM 5.3 Flash

- Source: undisclosed maker via OpenCode (`opencode/iceman-free` on Zen; `iceman-contributor-free` on OpenCode Go)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Iceman Free / Iceman Contributor)
- **Short description:** An unclaimed stealth agentic-coding model on OpenCode (debuted 2026-10-24 on OpenCode Go, added to Zen as Iceman Free on 2026-11-10) — text-only reasoning with tool calls, four reasoning effort levels (low/medium/high/xhigh; `max` rejected), 262K context and a 131K output cap. 417 billion tokens served on day one by 10,856 users; 3.37T tokens by Nov 4; no lab has claimed it. The strongest identity lead points to Microsoft's MAI (self-introduces as "MAI, created and trained by Microsoft AI"; prompt-token counts match MAI-Thinking-1 exactly) — unconfirmed, and the shared o200k tokenizer means the same test cannot separate it from OpenAI's GPT-6 family.
- **Provider / access:** OpenCode Zen `opencode/iceman-free` (free in the OpenCode app for a limited time; direct API has a usage limit) and OpenCode Go `opencode-go/iceman-contributor-free` (free, no usage cap, requires a Go plan from $10/mo and the "allow paid endpoints that train on request data" privacy setting). Chat Completions endpoints; text in, text out.
- **Release / knowledge:** first listed 2026-10-24 (models.dev commit 20:09 UTC; OpenCode PR #58792); knowledge cutoff unverified (stealth).
- **IDs:** `iceman-free` (Zen), `iceman-contributor-free` (Go) — OpenCode has not formally stated the two are one model, but they share the name, context, output cap and stealth-free framing, so they are almost certainly the same checkpoint.
- **Context window:** 262,144 total; 131,072 max output (models.dev catalog + Zen docs).
- **Modalities:** Text in, text out. Tool calls supported; reasoning effort low/medium/high/xhigh adjustable. No image/file input; closed weights.
- **Pricing (as of 2026-11-11):** $0 during the free/stealth period on both routes — explicitly paid for in data: Contributor means "in exchange for permission to use your prompts and completions to improve the model"; Zen's free period retains collected data for model improvement. No ZDR.
- **Architecture:** undisclosed (stealth, closed weights). Measured ~46 tok/s average output at low effort (18–62 range) with ~0.9 s time-to-first-token on OpenCode Go.

### Raw benchmarks found

Independent StealthMark suite (stealthmodels.com, measured 2026-10-25; original demanding tasks with published judging and replays):

- StealthMark overall: **19.2/100** — rank 52/57
- General Intelligence (spatial & physical reasoning, planning): **11.7/100**
- Visual Intelligence (visual construction & detail): **31.0/100**
- Foresight (threat anticipation, planning): **3.2/100** — rank 53/53 (last of all measured models); survived 0 of 3 levels
- Latch (cooperative planning, learning): **3.6/100**, rank 50/54 — cleared 1 of 5 levels
- SVG construction: Beach **46.4** (45/57, best placing), Selfie **39.3** (52/57), Pelican **38.0** (52/57), Raccoon **29.8** (54/57), Ground Truth **20.2** (51/57), Mona Lisa **19.3** (46/57), Newton's Mirror **10.1** (53/57)
- Reasoning efficiency: single-step **29** (rank 51/55 — token-hungry), multi-step **37** (rank 25/53)
- Output speed: **46 tokens/s** — faster than only 1 of 50 others
- Cohort context: Glyph Cluster 18.9, Qwen3.6-35B-A3B 20.8, Gemma 4 26B A4B 21.2, Nemotron 3 Ultra 16.7, MAI-Thinking-1 14.1
- SWE-bench / Terminal-Bench / BFCL / GPQA / LiveCodeBench / AA Index: no verified public score found

Long context:

- no long-context retrieval reported (262K window official; no MRCR/RULER value published)

### Normalized scores (1–100)

- **Tool use: 48/100.** Native tool calls and a mid-pack multi-step efficiency rank (25/53), but the planning games are the worst measured (Foresight dead last at 3.2) and no tool-use benchmark (BFCL/Tau) exists — capability claim plus weak proxies.
- **Reasoning: 48/100.** Bottom-decile StealthMark (19.2, #52/57) with General Intelligence 11.7 and last-place anticipatory planning (Foresight 3.2); multi-step efficiency above median keeps it functional; no standard reasoning benchmark published.
- **Context window: 74/100.** 262K total / 131K output (200K–500K input tier, above the 200K=70 anchor); no retrieval measurement.
- **Multimodal: 18/100.** Text-only in and out; SVG construction is code generation, not image understanding — bottom text-only band with credit for measured visual-code capability (Visual Intelligence 31.0).
- **Coding: 60/100.** Positioned for agentic coding with native tools; mid-tier SVG code construction (Beach 46.4, Selfie 39.3, Pelican 38.0 — slightly ahead of Glyph Cluster's rows) but precision and physical-reasoning tasks collapse (Newton's Mirror 10.1) and no standard coding harness has been run.
- **Cost efficiency: 93/100.** $0 on both routes during the stealth period — but the payment is explicit: your prompts and completions train the model (Contributor trade / Zen free-period retention), the strongest data caveat in the free tier, so it lands just under the clean-$0 models.
- **Overall Score: 50/100.** Mean of the five non-cost dims (48+48+74+18+60)/5 = 49.6. Best-fit recommendation: a free 262K-window workhorse for everyday code questions where the data trade is acceptable — not a pick for multi-step planning, precision visual work, or latency-sensitive loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (Stealth Models independent guide + benchmark gallery with published methodology, OpenCode PR #58792, models.dev catalog commit, @aitrackerbot identity tests); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Iceman Contributor model guide (timeline, identity evidence, access)](https://stealthmodels.com/iceman-contributor)
  - [Stealth Models — Iceman Contributor StealthMark benchmark results](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenCode PR #58792 — Iceman added to OpenCode Go](https://github.com/anomalyco/opencode/pull/58792)
  - [models.dev commit — Iceman Contributor catalog entry (262K ctx, closed weights)](https://github.com/anomalyco/models.dev/commit/bbe1123f5298480f56be29d1e0f664053c98c6c8)
  - [@aitrackerbot on X — token-count identity test vs MAI Thinking 1](https://x.com/aitrackerbot/status/2114122939545088257)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
