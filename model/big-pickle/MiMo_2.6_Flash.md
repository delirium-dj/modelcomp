# Big Pickle — findings by Mimo v2.6 Flash

- Source: OpenCode Zen stealth/`opencode/big-pickle` (originally GLM-4.6 per maintainer Nov 2025; backend now rotating / undisclosed as of 2026-10)
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** Free **stealth** coding model on OpenCode Zen (debut ~2025-11). Identity has **moved on**: a maintainer confirmed GLM-4.6 in Nov 2025, but GH #4276 now documents a **rotating backend** — DeepSeek V4 Flash observed May–Jun 2026 (tokenizer + provider-error evidence), a guardrails leak where it self-identified as **Ox Alpha** (2026-08-24), and users describing it (2026-10-03) as "just a router to new stealth or test models". Treat current identity as **undisclosed / rotating**. Sonnet-class coding anecdotes date from the GLM-4.6 era; data may be used to improve the model.
- **Provider / access:** OpenCode Zen only (`opencode/big-pickle`, `@ai-sdk/openai-compatible`); **Free** in/out/cache during limited-time (staff: "hoping to keep it free in perpetuity" — GH #4276). Paid equiv. cited as GLM-4.6 **~$0.60 / $2.20** on Zen list price for the named GLM model.
- **Release / knowledge:** first seen **2025-11-12/13** (GH issue); still free as of mid-2026 Zen docs. Underlying model GLM-4.6 release: Zhipu, ~2025. Knowledge cutoff not published for stealth ID.
- **IDs:** `opencode/big-pickle` (only public ID).
- **Context window:** **200,000** total (**160K in / 32K out** per meta; staff "max output is 128k" in GH thread — conflict noted; some issues claim backend actually ~1M when swapped to DeepSeek V4 Flash while catalog still says 200K).
- **Modalities:** **text only** in/out (whichllm/meta); chat completions / coding-agent focus; tool calls yes (agent-optimized if GLM-4.6).
- **Pricing (as of 2026-10-09):** **Free / Free / Free** cached read — still free on Zen (docs page updated 2026-10-08; Grokipedia fact-check ~2026-09-27: "currently available for free… for a limited time"). Paid reference: GLM-4.6 **$0.60 / $2.20** per 1M (GH thread). During free period, interaction data may train the model (Zen privacy note).
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

- **Tool use: 60/100.** No measured `big-pickle` rows (stealth ID); the former GLM-4.6 attribution anchor is now stale — GH #4276 documents backend rotation (DeepSeek V4 Flash observed 2026-05/06; Ox Alpha self-ID leak 2026-08-24; "router to stealth/test models" 2026-10-03), so agentic quality is whatever backend currently serves; structural mid score, explicitly not a leaderboard number (was 62 on 2026-09-22).
- **Reasoning: 58/100.** Still zero public GPQA/HLE/AA rows for the stealth ID; with the GLM-4.6 attribution retired, no verified reasoning anchor exists — only anecdotal reports about whichever backend rotates in (was 60 on 2026-09-22).
- **Context window: 70/100.** Zen catalog still 200K (160K in / 32K out); 2026-06 GH comments report the swapped backend actually accepting ~1M while tooling still reports 200K — unverified, not credited; out cap 32K (staff once said 128K).
- **Multimodal: 15/100.** Text-only (template rule: 15); unchanged.
- **Coding: 62/100.** Still no official or independent SWE/LCB/TB numbers bound to `big-pickle`; the "Sonnet-class web coding" anecdotes (2025-11) date from the GLM-4.6 era and cannot be extrapolated to the current rotating stealth backend (was 65 on 2026-09-22).
- **Cost efficiency: 100/100.** Still **Free in/out/cache** on Zen (docs updated 2026-10-08; Grokipedia fact-check ~2026-09-27) with paid equiv. $0.60/$2.20 → maximum; caveats unchanged (promotional period, training on interaction data, rotating identity).
- **Overall Score: 53/100.** Mean of five quality dims (60+58+70+15+62)/5 = 53.0 → 53 (was 54 on 2026-09-22; −1 from retiring the GLM-4.6 attribution).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; re-research pass per user-approved 7-day enrichment)
- Method: public internet research (opencode.ai Zen docs, GH anomalyco/opencode#4276, Grokipedia Big Pickle page, whichllm catalog, r/opencodeCLI anecdote thread); 2026-10-09 re-research re-checked the full GH #4276 thread incl. Oct-2026 comments, the Grokipedia page (fact-checked ~2026-09-27), and the Zen docs page (updated 2026-10-08); scores are normalized 1–100 interpretations, not official vendor scores; **no benchmark claimed measured on `big-pickle` itself**.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

> User-approved re-research of files older than one week (original signature 2026-09-22). Purpose: compare previous findings against current data and fill gaps. Nothing above was deleted; superseded values are annotated in place.

**Identity — previous finding vs current evidence**

- Previous (2026-09-22): "community consensus + maintainer hints point to GLM-4.6; treat as unconfirmed / possibly rotating."
- Current (GH #4276, re-read 2026-10-09): rotation is now the documented reality, timeline:
  - 2025-11-13 — maintainer rekram1-node confirms "Yes it is" (GLM-4.6); "hoping to keep it free in perpetuity, we have done the math and it seems possible".
  - 2026-05-16/17 — users report a "deepseek provider returned an error" through the OpenAI-compatible endpoint; tokenizer + prompt-trick analysis concludes "it indeed is deepseek (i assume flash, i doubt pro)".
  - 2026-06-17 — woss: "big-pickle is changing the underlaying model, as of time of writing is deepseek-v4-flash"; DRKCTRLDEV: "they still haven't updated open code to reflect the actual context limit tho, cos it thinks 200k is the Max but it's actually around 1M".
  - 2026-08-24 — inikishev: "currently Big Pickle is a stealth model for Ox Alpha" (guardrails bug leaked the self-ID; Ox Alpha exists in this dataset as slug `ox_alpha`).
  - 2026-10-03 — alMubarmij: "Big-Pickle is just a router to a new stealth or test models… like `openrouter/free`"; inikishev confirms the leak source.
- Grokipedia (fact-checked ~2026-09-27) now states it "previously identified… as GLM-4.6… but the underlying model is rotated periodically and its current identity is undisclosed."

**Gap check — still missing (no new data found)**

- Still **no benchmark row of any kind bound to `opencode/big-pickle`** (no Terminal-Bench/GDPval/Toolathlon/MCP-Atlas/Tau, no GPQA/HLE, no SWE/LCB) — stealth ID remains untracked by AA/BenchmarkRegistry-class aggregators.
- Context window: catalog still 200K; the ~1M claim remains a single-user anecdote (2026-06) — not credited.

**Score delta (2026-09-22 → 2026-10-09):** Tool 62→60, Reasoning 60→58, Coding 65→62, Overall 54→53; Context (70), Multimodal (15), Cost (100) unchanged. Driver: the GLM-4.6 attribution that anchored the previous mid-high scores is retired by primary-source evidence.

**Curation flags (not applied — meta.json is outside this agent's write scope)**

- `model/big-pickle/meta.json` still names the model "Big Pickle (GLM 4.6)" — now misleading; suggest "Big Pickle (stealth — rotating backend)".
