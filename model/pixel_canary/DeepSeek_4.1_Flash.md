# Pixel_canary — findings by DeepSeek 4.1 Flash

- Source: anonymous stealth vendor, served by Vercel AI Gateway (`stealth/pixel-canary`) — **revealed 2026-10-01 as Callstack Apex** (`callstack/apex`), a Qwen-foundation coding model for React Native / React / Next.js
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-27); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `pixel-canary` (404; revealed as Callstack Apex); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). The 2026-09-27 pass read only the Vercel AI Gateway row and the Next.js eval. This pass re-checked the post-reveal record against the independent [Stealth Models Pixel Canary dossier](https://stealthmodels.com/pixel-canary) (identity, pricing and access checked 10 Oct 2026), the [Hugging Face community guide](https://huggingface.co/blog/liliruli/what-is-pixel-canary-free-stealth-model) (28 Sep 2026), the [margrop.net deep dive](https://blog.margrop.net/en/post/pixel-canary-stealth-coding-model-deep-dive/) (26 Sep 2026), the [Vercel launch changelog](https://vercel.com/changelog/pixel-canary-is-now-available-in-stealth-for-free-on-ai-gateway) (25 Sep 2026), [Next.js Agent Evals](https://nextjs.org/evals) and [Callstack's Apex reveal / model docs](https://apex.callstack.com/models). Two material changes: (1) the model is no longer anonymous — Callstack named it **Apex** on 1 Oct 2026, a Qwen-foundation model post-trained for React Native, React and Next.js; (2) the free stealth preview **ended 2026-10-01**, and Apex is now paid at **$0.50 in / $0.20 cached / $3.00 out per 1M**. No new reasoning, tool-use or long-context benchmark appeared, so the five quality dimensions hold; only Cost efficiency moves. Conflicts surfaced below.

## Model card

- **Name:** Pixel Canary — stealth preview codename of **Callstack Apex** (revealed 1 Oct 2026). The preview was entirely free, so no "Free"-tier suffix is used.
- **Short description:** An anonymous large model pitched at web and mobile app development, with adjustable reasoning effort, that turned out to be Callstack's Apex — a Qwen-based coding model specialized for **React Native, React and Next.js**. Vercel describes it as "strong at coding, including building applications and refactoring existing code" and suited to frontend work (responsive layouts, app screens, navigation and interactive components). Developer is now disclosed (Callstack); exact weights and architecture remain undisclosed, and the Qwen base is inferred from behavioral/tokenizer studies plus Callstack's own "Qwen foundation" statement.
- **Provider / access:** Vercel AI Gateway as `stealth/pixel-canary` (now `callstack/apex` on the same gateway; OpenAI Chat Completions, OpenAI Responses and Anthropic Messages formats plus the AI SDK). Direct first-party API at `apex` / dated `apex-20261001` (https://apex.callstack.com/models). Also surfaced in Cline and via Command Code during the stealth window.
- **Release / knowledge:** stealth listing 2026-09-25 (Vercel AI Gateway changelog); identity revealed 2026-10-01. Knowledge cutoff not disclosed.
- **IDs:** `stealth/pixel-canary` (stealth) → `callstack/apex` (current; dated `apex-20261001`). No OpenCode Zen ID. Free preview over — now a paid Callstack endpoint.
- **Context window:** 262,144 tokens total with a 131,072 max output (Vercel AI Gateway row, re-confirmed by the Stealth Models dossier, checked 2026-10-10). Note: the repo's curated `meta.json` still records 128K / text-only / "standard pricing" — the live gateway row is newer and larger.
- **Modalities:** **conflict — not resolved.** Vercel's Apex/Gateway listing documents **text + image → text** ("images count as input tokens"; Stealth Models echoes "Text + image → text"), while Callstack's **direct** API docs list **text input only**. No model card and no vision benchmark. Reasoning yes (Vercel lists `none` / `low` / `medium` / `xhigh`; the prior report's six-level `none → xhigh` list is not what Vercel currently prints). Tool-calling and structured-output support are still not documented on either listing, though Vercel's OpenCode eval enables tool use.
- **Pricing (as of 2026-10-11):** the $0 stealth preview ended 2026-10-01. Callstack Apex now lists **$0.50 / 1M input, $0.20 / 1M cached input, $3.00 / 1M output** (https://stealthmodels.com/pixel-canary, access checked 10 Oct 2026; Apex model docs). **Privacy:** Callstack documents **zero data retention (ZDR) for its direct Apex service**; the earlier Vercel stealth terms ("prompts and responses … may be used for training", no ZDR) applied only while `stealth/pixel-canary` ran.
- **Architecture:** undisclosed; closed API-only. Callstack states a **Qwen foundation**, post-trained for mobile/web coding; an independent reasoning-habits study puts **Qwen3.8 Flash closest (63.8/100 similarity)** and a separate tokenizer study reports **95/95 input-count matches** with Qwen3.5+ vocabulary (https://stealthmodels.com/pixel-canary). Serving speed is contested — the prior gateway-traffic read recorded **8.9 s p50 TTFT / ~9 tps**, while margrop.net claims **~410 ms TTFT / 95.4 tps**; the Stealth Models dossier reports a **16.9-minute average evaluation duration** on the Next.js suite, which is consistent with a slow model, not a 95-tps one.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / MCP-Universe / SWE Atlas Codebase QnA: **no verified public score found** — no function-calling, MCP or terminal-agent harness has published results under either `stealth/pixel-canary` or `callstack/apex`
- Structural evidence only (not a benchmark): Vercel's OpenCode evaluation enables tool use in its model configuration (https://github.com/vercel/next-evals-oss/blob/main/experiments/pixel-canary.ts); the model was wired into Command Code and Cline during the stealth window

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt / MMMU: **no verified public score found**
- Artificial Analysis Intelligence Index: **not scored**
- Behavioral fingerprint, not an accuracy benchmark: Qwen3.8 Flash is the closest of 27 models at **63.8/100 reasoning-similarity**, ahead of MiniMax M3 (59.4) and GLM 5.3 variants (~59.2–59.3) (https://stealthmodels.com/pixel-canary, study dated 29 Sep 2026)
- Independent tokenizer study: **95/95 input-count matches** using Qwen3.5-and-later vocabulary vs 89/95 for the stock modern tokenizer (AI時短ラボ, 26 Sep 2026, cited in the same dossier)
- Documented but unmeasured: adjustable reasoning effort (`none` / `low` / `medium` / `xhigh` on Vercel); no accuracy figure accompanies any level

Coding:

- Next.js evals (Vercel, 2026-09-25, pass@4): **90.3% baseline, 28 of 31 tasks**, tying GPT-6 Astra (high); **96.8%, 30 of 31 tasks**, with Next.js docs supplied via `AGENTS.md` — corroborated independently by the Stealth Models dossier, the Hugging Face guide and margrop.net (https://nextjs.org/evals)
- Same-harness context: Claude Opus 5.5 (high) leads the baseline at 30/31 (96.8%), and Grok 4.7 (29/31) / Kimi K3 (26/31 → 30/31 with docs) bracket the Canary run (https://stealthmodels.com/pixel-canary)
- Task coverage: App Router migrations, RSC, streaming SSR, data fetching, image/font optimization, caching, view transitions; average evaluation duration **16.9 min** across both conditions
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: **no verified public score found**
- SVG/generative visual tasks (StealthMark gallery): qualitative only — no numeric score published (https://stealthmodels.com/pixel-canary)

Long context:

- No MRCR / RULER / GraphWalks / AA-LCR recall value exists for the 262K window; the only long-context evidence is the window and output limits themselves plus the fact that a docs-in-context agentic harness reaches 30/31 on the nextjs evals.

Multimodal:

- No MMMU / vision benchmark exists. The only signal is the vendor-listing conflict itself: Vercel documents text + image input, Callstack's direct API documents text input only; output is text in both cases (https://stealthmodels.com/pixel-canary, https://apex.callstack.com/models).

### Normalized scores (1–100)

- **Tool use: 66/100.** No function-calling, MCP or terminal benchmark exists under either ID, so this stays the prior conservative floor justified only by first-class integration into coding agents and a 262K working window; the complete absence of harness evidence is what caps it. Unchanged — no new tool-use number surfaced.
- **Reasoning: 62/100.** Nothing on GPQA/HLE-class suites; the basis remains real engineering task completion (28/31 baseline, rising to 30/31 with docs), which demonstrates multi-step problem solving but says nothing about out-of-domain reasoning. The Qwen 63.8/100 behavioral-similarity figure is a fingerprint, not an accuracy score, so it does not justify a change. Unchanged, explicitly low confidence.
- **Context window: 72/100.** 262K total with a generous 131K max output sits just inside the 200K–500K tier (200K = 70); the absent recall benchmark keeps it far below the 1M tier. Unchanged — window re-confirmed 2026-10-10.
- **Multimodal: 40/100.** Deliberately between the text-only floor band (10–20) and the image-input band (60–70): Vercel/Gateway document image message parts while Callstack's direct model docs list text only, no vision benchmark exists and output is text-only. Unchanged — the conflict persists at post-reveal.
- **Coding: 85/100.** 90.3% baseline and 96.8% docs-in-context on Vercel's Next.js evals — now independently written up by three sources — is frontier-class web engineering, and Callstack's reveal confirms the coding specialization. But it is still one framework-specific harness at pass@4 with no SWE-bench/DeepSWE/LiveCodeBench confirmation, which is why it stops short of the 90s. Unchanged.
- **Cost efficiency: 91/100.** Lowered from 100: the $0 preview ended 2026-10-01 and Apex is now paid at $0.50 in / $0.20 cached / $3.00 out per 1M (https://stealthmodels.com/pixel-canary). The methodology maps ~$0.60/$2.20 to ~92 and $1.25/$4.25 to ~88, so $0.50/$3.00 sits at **91** — input cheap, output a touch dear. Offsetting plus: Callstack documents **ZDR** for the direct Apex service, removing the earlier training-data caveat.
- **Overall Score: 65/100.** (66 + 62 + 72 + 40 + 85) / 5 = 65.0. Best fit: high-volume Next.js/React/frontend scaffolding, refactors and UI implementation through the Callstack API (now with ZDR), at a $0.50/$3.00 rate card — no longer a free pick, and still not where verified reasoning depth or tool-calling breadth is required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (independent Stealth Models Pixel Canary dossier — identity, pricing and access checked 10 Oct 2026; Hugging Face community guide; margrop.net deep dive; Vercel AI Gateway launch changelog; Next.js Agent Evals; Callstack Apex model docs and reveal post). `stealth/pixel-canary` and `callstack/apex` are the same system, so this single folder covers both names. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass note: one dimension moved on new evidence — Cost efficiency 100 → 91, because the free stealth preview ended 2026-10-01 and verified Apex pricing is $0.50/$0.20/$3.00 per 1M. Tool use, Reasoning, Context window, Multimodal and Coding are unchanged for lack of any new verified benchmark number. The other material change is identity: Pixel Canary is now known to be Callstack Apex (Qwen foundation). Conflicts surfaced rather than reconciled: identity pre-reveal guesses (Google DeepMind "Pixel"/Gemini 4 vs a Vercel+OpenAI fine-tune) vs the confirmed Callstack Apex; modalities (image in per Vercel vs text-only per Callstack direct); reasoning-effort ladder six levels (prior pass) vs four (`none`/`low`/`medium`/`xhigh`); speed (~8.9 s TTFT / ~9 tps gateway read vs margrop's ~410 ms / 95.4 tps claim vs a 16.9-min average eval duration); and the nextjs leaderboard (Canary ties GPT-6 Astra at 28/31 baseline while Claude Opus 5.5 leads at 30/31). No number here is inferred from another model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
