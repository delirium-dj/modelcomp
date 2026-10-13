# Pixel Canary — findings by GLM 5.3

- Source: stealth vendor undisclosed, distributed via Vercel AI Gateway (`stealth/pixel-canary`; site slug `opencode/pixel_canary`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-28 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth codename; maker undisclosed)
- **Short description:** The anonymous stealth coding model Vercel dropped on its AI Gateway on 2026-09-25, positioned for web/mobile app development — **and now gone: the free stealth preview has ended** (aiidelist's 2026-10-06 retrospective reads in the past tense: "Vercel offered it free only for a limited stealth period"), with **no replacement endpoint or reveal verified as of 2026-10-13**. The identity hypotheses (an unannounced Z.ai GLM-5.4 per stealthmodels' fingerprinting; a Qwen derivative per other tokenizer analyses) remain unconfirmed; the operator stays an unnamed third party. The evidence base never grew beyond what the first pass found: **Vercel's own Next.js agent evals — 90.3% baseline (28/31) / 96.8% with docs (30/31), tying GPT-6 Astra, Opus 5.5, Gemini 3.8 Flash and Kimi K3 on the same harness** — with zero independent harness rows (no AA/BenchLM/BenchLeader page ever appeared). A post-mortem record.
- **Provider / access (discontinued):** Vercel AI Gateway `stealth/pixel-canary` (Chat Completions) — **preview ended; no verified public access remains**; the earlier free paths (Cline Desktop free account, Command Code Go plan+) closed with it.
- **Release / knowledge:** in stealth from **2026-09-25** (Vercel changelog); preview ended ~early October 2026; knowledge cutoff unknown.
- **IDs:** `stealth/pixel-canary` (dead); `opencode/pixel_canary` (site slug).
- **Context window:** **262,144 total / 131,072 max output** (Vercel listing; the margrop deep-dive describes a "256K linear context" — consistent).
- **Modalities:** text + image in; text out; reasoning (`none`/`low`/`medium`/`xhigh`); tool calls; implicit caching.
- **Pricing (historical):** $0/$0 during the stealth preview (the provider-retains-prompts caveat applied); no paid rate was ever published — and no access now exists to price.
- **Architecture:** undisclosed (stealth); no published parameter count, license, or weights.

### Raw benchmarks found

> Second-pass status unchanged and final: **the Vercel Next.js evals remain the only verified public numbers** — "both scores come from Vercel's own evaluations on a single framework, so they say little about performance on other stacks" (VibeLeaderboard's own caveat, now third-party-echoed). No independent harness (AA/Epoch/Vals/LiveBench/BenchLeader) ever published a row before the preview closed.

Agent / tool use:

- Next.js Agent Evals (Vercel open-source harness, pass@4, OpenCode agent): **90.3% baseline (28/31) / 96.8% with AGENTS.md (30/31)** — ties Claude Opus 5.5, GPT-6 Astra, Gemini 3.8 Flash and Kimi K3 in the with-docs condition; beats Kimi K3's 84% baseline; average duration 16.9 min (slow); the exact figures now corroborated across agihunt/thedevsignal/startupfortune coverage
- Terminal-Bench / τ² / τ³ / GDPval / Claw-Eval / Toolathlon / MCP-Atlas: never measured — permanent gaps

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Index / Omniscience: never measured — permanent gaps

Coding:

- The Next.js evals double as the coding evidence (see agents); SVG-code generation: strong qualitative gallery (voxel self-portrait, Mona Lisa, animated pelican, beach scene — stealthmodels experiments) but no numeric score; SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe: never measured

Long context:

- 262K/131K verified from the catalog; "256K linear context" (margrop); no MRCR/RULER number ever published.

Multimodal:

- Text + image in, text out (catalog); no measured vision rows.

### Normalized scores (1–100)

- **Tool use: 60/100.** Held: the 30/31 Next.js result evidences real agentic tool competence in one framework — the TB/τ/GDPval suites were never reached, capping the score permanently.
- **Reasoning: 55/100.** Held: xhigh reasoning effort and frontier-adjacent web-dev results imply solid reasoning, but no GPQA/HLE/Index row ever landed — provisional, now final.
- **Context window: 72/100.** Held: 262K/131K tier confirmed (the "256K linear" description consistent); zero measured retrieval.
- **Multimodal: 65/100.** Held: text+image in per the catalog; unmeasured.
- **Coding: 78/100.** Lowered from 80: the 90.3%/96.8% figures are now precisely corroborated — but the single-framework caveat (VibeLeaderboard: "say little about performance on other stacks"), pass@4 inflation, 16.9-min duration, and the never-arriving SWE-bench/LCB rows settle it just under 80.
- **Cost efficiency: 70/100.** Lowered from 100: the $0 preview was real but is over — no verified public access remains, so the score blends the historical free tier with the current zero availability (as with this cycle's Fledge Alpha post-mortem).
- **Overall Score: 66/100.** (60 + 55 + 72 + 65 + 78) / 5 = 66.0, unchanged. Best-fit (historical): a free, frontier-adjacent Next.js/mobile web-dev agent for the two weeks it lived — tying GPT-6 Astra on Vercel's own harness with a 256K linear context at $0 — but never independently measured, never claimed by its maker, and now gone; if its creator reveals (the GLM-5.4 hypothesis remains the lead), re-research the named model immediately.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-28 report (DDG-lite searches surfacing the aiidelist retrospective confirming the preview's end, the huggingface liliruli/VibeLeaderboard/margrop/agihunt/thedevsignal/startupfortune coverage — including VibeLeaderboard's own single-framework caveat and the precise 90.3%/96.8% figures — and the Vercel changelog; no AA/BenchLM/BenchLeader page ever existed — confirmed; the identity hypotheses remain unconfirmed and the operator unnamed; the first-pass rows retained with the corrected exact figures); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
