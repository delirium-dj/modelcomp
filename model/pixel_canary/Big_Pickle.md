# Pixel Canary — findings by Big Pickle

- Source: Vercel AI Gateway `stealth/pixel-canary` — an anonymous ("stealth") vendor
  model, so the folder slug (`pixel_canary`) is the only stable identity available
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary — an anonymous large model with strong coding capabilities and
  adjustable reasoning effort, published in stealth by Vercel's AI Gateway.
- **Short description:** A vendor-undisclosed model sold through Vercel AI Gateway as a
  coding specialist, positioned for building applications and refactoring existing code
  with a frontend/mobile bias (responsive layouts, app screens, navigation, interactive
  components). Not a variant or alias of any other entry in this comparison — the
  underlying lab is deliberately unnamed, so it cannot be mapped onto a known base model.
- **Provider / access:** Vercel AI Gateway — OpenAI-compatible **Chat Completions** at
  `https://ai-gateway.vercel.sh/v1` with model `stealth/pixel-canary`; the AI SDK
  (`streamText`) also works directly. AI Gateway type is `chat`. Not listed on
  OpenCode Zen.
- **Release / knowledge:** Announced 2026-09-25 in stealth. Knowledge cutoff: **not
  published** (undisclosed lab, no model card).
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway, Chat Completions). No OpenCode
  Zen ID — the catalog entry `opencode/pixel_canary` reflects this folder's slug, not a
  Zen-hosted model.
- **Context window:** **262,144 tokens** total, **131,072** max output (Vercel AI
  Gateway model page, read 2026-09-27). These are gateway-declared limits, not a
  vendor model card; no long-context retrieval result has been published at any length.
- **Modalities:** text in / text out. Vercel states "detailed capability metadata has
  not been reported for this model", so image, audio, video and PDF input are all
  **unverified** — treat as text-only until proven otherwise. Reasoning: yes, with
  **adjustable reasoning effort** (Vercel model page). Tool calls: implicitly required
  (it is sold into coding agents, and the launch post shows Claude Code, Codex and fx
  wiring). JSON mode / structured outputs: not documented.
- **Pricing (as of 2026-09-27):** **$0 — free for a limited time while in stealth**
  (Vercel changelog, 2026-09-25). Two caveats that matter more than the price: **ZDR
  is not available**, and **prompts and responses may be used for training and model
  improvement**. Free-tier pricing after stealth is unknown.
- **Architecture:** proprietary and **undisclosed** — no parameters, no weights, no
  architecture details, no named vendor.

### Raw benchmarks found

The only measured numbers that exist for this model come from one suite, published by
the gateway operator at launch. There is no independent evaluation of Pixel Canary
anywhere, and no reasoning, agentic or long-context benchmark at all.

Agent / tool use:

- Next.js Agent Evals, 31 agentic coding tasks (Vercel launch post, 2026-09-25): **28/31
  passed (90.3%)** at baseline, pass@4 — ties GPT 6 Astra (high) at the top of the
  baseline setting
- Same suite with Next.js documentation supplied via `AGENTS.md`: **30/31 (96.8%)**,
  pass@4 — ties the leaderboard's top score in that setting
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Qualitative only: "adjustable reasoning effort" is a Vercel capability claim with no
  published effort-scaling data

Coding:

- Next.js Agent Evals (Vercel launch post, official leaderboard at nextjs.org/evals):
  **96.8%** (30/31) with `AGENTS.md` docs supplied, **90.3%** (28/31) baseline, pass@4
  (a task counts as passed if any of up to four attempts succeeds)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported. 262,144 tokens is the gateway-declared window, but
  no MRCR / RULER / GraphWalks / recall-at-length figure exists for this model, and the
  131,072 max output cap is roughly half the window.

### Normalized scores (1–100)

- **Tool use: 72/100.** 28/31 and 30/31 on a 31-task agentic suite that requires file
  reading, repo navigation, `AGENTS.md` retrieval and iterative edits is a real signal
  of harness competence, and the docs-supplied result shows the model actually exploits
  retrieved context. Capped well below the frontier band (90–100) because **no
  harness-comparable agentic benchmark exists** — Terminal-Bench, τ-bench, GDPval-AA and
  Claw-Eval are all absent, so a single suite cannot place it in the methodology's
  documented 50–70 mid band or above it, and the numbers are operator-published.
- **Reasoning: 62/100.** No GPQA Diamond, HLE, LCR, CritPt or Intelligence Index number
  exists for this model — every reasoning row reads "no verified public score found".
  Placed at the top of the methodology's evidence-limited mid band (55–65) because
  adjustable reasoning effort plus 96.8% on instruction-heavy real-world tasks implies
  competent instruction following, not frontier academic reasoning. This is an
  inference from one coding suite, not a measurement.
- **Context window: 70/100.** 262,144 tokens lands in the 200K–500K methodology band
  (65–84, with 200K anchored at 70). Scored at the anchor because the window is
  gateway-declared rather than vendor-documented, and no retrieval benchmark exists at
  any length. Max output of 131,072 is noted as a caveat, not separately scored.
- **Multimodal: 20/100.** No image, audio, video or PDF input is documented, and Vercel
  explicitly says capability metadata has not been reported, so this is a text-only chat
  model on current evidence (methodology band 10–20). Scored at the top of that band
  only because the provider's metadata is missing rather than negative; treat as
  provisional and revise upward if image input is confirmed.
- **Coding: 82/100.** 96.8% (30/31) with documentation and 90.3% (28/31) baseline on
  Next.js Agent Evals is a leaderboard-topping result in a real framework, covering App
  Router migrations, data fetching, image/font optimization, caching and view
  transitions. Capped at 82 because it is a **single framework-specific suite**, pass@4
  rewards best-of-four, the only published numbers come from the gateway operator, and
  no repository-scale evidence (SWE-bench, DeepSWE, Terminal-Bench, SciCode) exists.
- **Cost efficiency: 100/100.** $0 while in stealth, which is the maximum by definition.
  Read the caveats before relying on it: the free period is explicitly temporary, ZDR is
  unavailable, and prompts and responses may be used for training. Post-stealth pricing
  is unknown and will change this score.
- **Overall Score: 61/100.** (72 + 62 + 70 + 20 + 82) / 5 = 61.2. Best fit: free
  Next.js/React and general frontend-or-mobile work right now, especially when you can
  ship an `AGENTS.md` — the 8.5-point jump from 28/31 to 30/31 is the single most
  actionable finding in this report. Poor fit for anything requiring audited reasoning,
  multimodal input, long-document retrieval or a vendor you can hold accountable: the
  Multimodal and Reasoning dims are the binding constraints and both are evidence
  gaps, not measurements.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-27
- Method: public internet research (Vercel AI Gateway changelog and model page, Next.js
  evals leaderboard, plus cross-checks on pricing and limits). Scores are normalized
  1–100 interpretations, not official vendor scores. All benchmark numbers for this
  model are operator-published from a single suite; no independent evaluation exists.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same
  headings.
