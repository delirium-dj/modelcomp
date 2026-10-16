# Big Pickle — findings by GLM 5.3

- Source: stealth vendor undisclosed — rotating (`opencode/big-pickle`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** A stealth free-tier slot on OpenCode Zen for coding agents — **not one fixed model but a rotating alias**: maintainer-confirmed GLM-4.6 at launch (Nov 2025), community-reported DeepSeek V4 Flash (May–Jun 2026), and a stealth model reported as Ox Alpha as of Aug–Oct 2026. Top use case: zero-cost daily-driver coding agent.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (OpenAI-compatible Chat Completions; @ai-sdk/openai-compatible); pi.dev lists base URL `https://opencode.ai/inference/v1`.
- **Release / knowledge:** first offered free 2025-10-17/2025-11 (models.dev registry; Grokipedia: public debut November 2025). Knowledge cutoff follows whatever model is currently behind the alias — no fixed value.
- **IDs:** `opencode/big-pickle` (Free tier — $0; OpenCode maintainer: "hoping to keep it free in perpetuity… we have done the math"). Stealth models can be swapped without notice — **this one demonstrably is swapped**.
- **Context window:** 200K total — 160K in / 32K out per models.dev registry, but a maintainer stated **max output is 128K** (GitHub #4276, 2025-11-13) and community reports the served limit floated to **~1M** during the DeepSeek-era backend (unverified single report; flagged, scored conservatively on 200K).
- **Modalities:** text in / text out (registry); reasoning yes (interleaved reasoning field); tool calls yes; structured outputs yes.
- **Pricing (as of 2026-10-16):** Free — $0 in / $0 out / $0 cached read (models.dev + Zen pricing table). Caveat: during the free period collected data may be used to improve the model (Zen privacy note) — not for confidential code.
- **Architecture:** not open weights under this ID (registry); **rotation history** (all under the same `opencode/big-pickle` ID):
  1. **GLM-4.6** (Zhipu AI, 355B/32B MoE) — maintainer-confirmed ("Yes it is", GitHub #4276, 2025-11-13); maintained "if a new oss model comes out thats way better wed prolly switch to it".
  2. **DeepSeek V4 Flash** (community-reported, May–Jun 2026: upstream "deepseek provider returned an error" leaks + tokenizer checks; two independent users concurred).
  3. **Stealth, reported as Ox Alpha** (Aug–Oct 2026: one user reports the model itself leaked its identity via a guardrail bug; another: "Big-Pickle is just a router to new stealth or test models… like openrouter/free which is variable"). Grokipedia's fact-checked article (updated ~2026-09-27) now states the underlying model "is rotated periodically and its current identity is undisclosed".

### Raw benchmarks found

> Identity caveat (updated): because the alias rotates, every proxy row below is **lineage data labeled with the model actually measured** — never silently merged. Direct evals of the `big-pickle` ID are few and from the GLM-4.6 era. No direct public benchmark of the current (Ox-Alpha-reported) backend under this ID was found.

Direct eval of `big-pickle` (GLM-4.6 era):

- SWE-Atlas Codebase QnA: **50.8% (63/124)** (direct community eval, github.com/PhillipChaffee/big-pickle-swe-atlas)

GLM-4.6 proxy rows (BenchLM `glm-4-6`) — launch-era lineage only:

- Tau2-Bench: **76.9%**; LiveCodeBench (Vals): **81.0%**; Vibe Code Bench: **3.09%**
- GPQA Diamond: **63.2%** (AA; Vals variant 74.5%); HLE: **5.5%**; AA-LCR **26.3%**, CritPt **0.0%**
- MMLU-Pro (Vals) **82.2%**, AA-IFBench **36.7%**, AA Index **14.9**
- Omniscience: Index **-31.7**, Accuracy **21.4%** (label ambiguous, flagged)
- FrontierMath v2 (T1–3): **3.8%**

Grokipedia's comparison table (identity-mixed — GLM-4.6/4.7-era figures under the Big Pickle name, flagged, not scored): MMLU-Pro 84.3, SWE-bench Verified 73.8, SWE-bench Multilingual 66.7, HLE 24.8/42.8 w-tools, LiveCodeBench V6 82.8, "~68% SWE-bench", ~189 tok/s output speed.

- Terminal-Bench / GDPval-AA / Tau3 / Toolathlon: **no verified public score found for the `big-pickle` ID itself** — still true this pass, including for the current backend.

Long context:

- 200K window verified (registry); community 1M report unverified — no reliable long-context retrieval evidence either way.

### Normalized scores (1–100)

> Re-research verdict: identity findings changed materially (rotation confirmed), but no new direct verified benchmark rows for the ID appeared — the five quality dims keep their direct-eval-anchored values, now with the rotation caveat made explicit.

- **Tool use: 50/100.** Structured outputs and tool calls are verified platform features and launch-era τ² 76.9% (proxy) is decent; still no direct TB/GDPval/Toolathlon rows for the ID, and the direct SWE-Atlas 50.8% is mid. Rotation makes any single proxy number unreliable.
- **Reasoning: 50/100.** Launch-era proxy GPQA 63.2–74.5% is mid-band; HLE 5.5%, AA Index 14.9 show a dated GLM-4.6 profile. If the current backend is genuinely a 2026-generation stealth, this dim is likely understated — but no verified row exists, so it stays (evidence-gated).
- **Context window: 70/100.** 200K verified (160K in per registry); 128K-output maintainer statement and the unverified 1M community report are noted but do not move the score.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 55/100.** Launch-era LiveCodeBench 81.0% (proxy) and the direct SWE-Atlas 50.8% are respectable for a free tier; Vibe Code Bench 3.09% (proxy) near-floor; current backend unmeasured under this ID.
- **Cost efficiency: 100/100.** $0 in/out free tier = 100 by the methodology — now strengthened by the maintainer's free-in-perpetuity intent; still flagged: data may be used for model improvement, and the model behind the ID changes without notice.
- **Overall Score: 48/100.** Half-up mean of the five quality dims (50+50+70+15+55)/5 = 48.0 — unchanged. Best-fit: zero-cost daily driver whose quality tracks whatever OpenCode currently routes behind it; escalate to a known fixed model after failures or for 1M-context work, and re-verify the identity before trusting any single benchmark number.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16 (first researched 2026-09-25)
- Method: public internet research (GitHub issue #4276 with maintainer statements, Grokipedia's updated fact-checked article, models.dev/pi.dev registry, community rotation reports, DuckDuckGo search). Re-research found: (a) maintainer confirmation of GLM-4.6 identity and 128K max output, (b) free-in-perpetuity intent, (c) **the underlying model rotates** — DeepSeek V4 Flash era (May–Jun 2026) and a stealth model reported as Ox Alpha currently (Aug–Oct 2026). No score-changing direct benchmarks found; scores unchanged, rotation caveat added. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
