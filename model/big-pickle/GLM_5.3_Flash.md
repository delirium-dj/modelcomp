# Big Pickle — findings by GLM 5.3 Flash

- Source: OpenCode Zen (`opencode/big-pickle`, anonymous stealth alias / router)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (Free) — anonymous stealth alias on OpenCode Zen; no vendor has claimed it
- **Short description:** OpenCode Zen's free experimental route, described in its config as a "Reasoning model for deliberate analysis, multi-step problem solving, and tool use". This pass establishes the decisive fact the prior passes lacked: **big-pickle is a router whose underlying model changes over time** — an OpenCode collaborator confirmed it launched as Zhipu GLM-4.6 (Nov 2025), the team later swapped it to DeepSeek V4 Flash (collaborator-confirmed Jun 2026), and multiple independent community reports (Aug–Oct 2026, including an accidental guardrail self-identification) indicate it now serves an **Ox Alpha** stealth deployment. Treat it as a variable-identity alias, not a model.
- **Provider / access:** OpenCode Zen — Chat Completions at `https://opencode.ai/zen/v1/chat/completions`, ID `opencode/big-pickle`; integrates via `@ai-sdk/openai-compatible`; catalogued by models.dev. Re-verified 2026-10-19: still first on the live Zen roster — the free route persists.
- **Release / knowledge:** free route live since 2025-10-17 (models.dev); knowledge cutoff listed as 2025-01 in the catalog but is now meaningless under the router model (the underlying model's cutoff changes with each swap).
- **IDs:** `opencode/big-pickle`. **This IS the Free ID** — served at $0; no separate paid route. An OpenCode collaborator stated the team hopes "to keep it free in perpetuity, we have done the math and it seems possible" (issue #4276, Nov 13, 2025).
- **Context window:** CONFLICTING — catalog (models.dev): 200,000 total / 160,000 in / 32,000 out; an OpenCode collaborator stated **max output is 128k** (issue #4276, Nov 13, 2025); community testing under the DeepSeek era reported the **actual context limit is ~1M** while the catalog still said 200K ("they still haven't updated opencode to reflect the actual context limit", issue #4276, Jun 17, 2026). The catalog numbers are stale and the true window varies with the underlying model.
- **Modalities:** text in, text out; reasoning yes (interleaved `reasoning_content`); tool calls yes; structured output yes; attachments no (models.dev).
- **Pricing (as of 2026-10-19):** Free — $0.00 in / out / cached (models.dev). Caveats: free-period prompts may be used to improve the model (Zen privacy note); identity and terms can change without notice.
- **Architecture:** closed weights, parameters undisclosed. **Identity history (verified through the canonical community thread, issue #4276):** GLM-4.6 at launch (collaborator "Yes it is", Nov 13, 2025) → DeepSeek V4 Flash (collaborator woss, Jun 17, 2026: "big-pickle is changing the underlaying model, as of time of writing is `deepseek-v4-flash`"; corroborated by tokenizer checks and leaked `deepseek provider` errors) → currently reported as an **Ox Alpha** stealth deployment (community guardrail leak, Aug 24 + Oct 3, 2026; another user characterizes the route as "just a router to a new stealth or test models", like `openrouter/free`). The Ox Alpha identification is community inference, not vendor-confirmed.

### Raw benchmarks found

> The only direct alias-specific measurement (SWE-Atlas QnA 50.8%, Aug 2026) was taken under the DeepSeek-era underlying; the currently-served Ox Alpha deployment has no alias-specific published benchmark. Identity-era proxy scores from the GLM-4.6 era are recorded but superseded as stale.

Agent / tool use:

- SWE-Atlas Codebase QnA (mini-swe-agent scaffold): **50.8%** (63/124 tasks; self-reported run of 2026-08-11: Harbor 0.18.0 + Modal sandboxes, mini-swe-agent 2.4.6, Scale's shipped config, judge claude-opus-4-5-20251101; 674M input + 4.3M output tokens at $0) — best result in the Mini-SWE-Agent scaffold class on the official leaderboard snapshot as of 2026-07-28; stricter lower bound **49.2%** (glonce.com, 2026-08-16). Era caveat: measured under the DeepSeek-V4-Flash underlying, not the current one.
- Terminal-Bench / Tau3 / Tau2 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found under the alias (current or any era)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index (alias): no verified public score found — trackers do not carry anonymous stealth aliases
- Identity proxies (era-locked, for history only): GLM-4.6 era — GPQA 63.2%, HLE 5.5%, LCR 28.3%; current Ox Alpha era — no public proxy rows located this pass (Ox Alpha is tracked under its own slug in this dataset)

Coding:

- SWE-Atlas Codebase QnA: **50.8%** — the one direct datapoint (era caveat above)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE (alias): no verified public score found
- Identity proxy (GLM-4.6 era, stale): SWE-bench Verified 68.0%, LiveCodeBench 81.0%, SciCode 38.4%

Long context:

- No public MRCR/RULER retrieval tests under the alias; community-reported ~1M actual limit (Jun 2026, DeepSeek era) vs 200K catalog — unresolved conflict.

### Normalized scores (1–100)

- **Tool use: 60/100.** (Was 58.) Small raise: the direct SWE-Atlas QnA 50.8% class-leading row stands (era-stale), and the current underlying is credibly reported to be a stronger model (Ox Alpha-class per repeated community reports); the alias's native tool-calling/structured-output support is confirmed. Capped by zero current-era measurements and the router instability.
- **Reasoning: 65/100.** (Was 58.) Raised: the GLM-4.6-era proxies that anchored the old score are stale — the route has since served DeepSeek V4 Flash and now reportedly Ox Alpha, a model rostered in this dataset's top tier; multiple independent community reports (tokenizer checks, provider-error leaks, a guardrail self-identification) support the upgrade. Capped because the current identity is community-inferred, not vendor-confirmed, and no alias-specific reasoning benchmark exists.
- **Context window: 78/100.** (Was 70.) Raised on collaborator-verified evidence: max output 128k (OpenCode collaborator, issue #4276) contradicts the stale 32K catalog row, and community testing under the DeepSeek era measured ~1M actual context. Capped by the unresolved catalog-vs-reality conflict and the identity-dependent window.
- **Multimodal: 15/100.** (Unchanged.) Text-only in/out per models.dev; no attachments.
- **Coding: 72/100.** (Was 70.) Small raise: the direct SWE-Atlas 50.8% row remains class-leading for its scaffold, and the stale GLM-4.6-era proxies (SWE-bench Verified 68%, LiveCodeBench 81%) understate the presumably stronger current underlying; still zero alias-verified classic-suite runs.
- **Cost efficiency: 100/100.** (Unchanged, strengthened.) $0 in/out/cache with a collaborator-stated intent to keep it "free in perpetuity". Risks remain: data may be used for training, and the underlying identity can change without notice.
- **Overall Score: 58/100.** (Was 54.2.) Mean: (60 + 65 + 78 + 15 + 72) / 5 = 290/5 = 58. The raise is driven by verified router-history evidence (GLM-4.6 → DeepSeek V4 Flash → reported Ox Alpha) superseding the stale GLM-4.6-era proxy baseline, plus the collaborator-confirmed 128K output. Best fit: zero-cost daily driver for coding agents and multi-step tool work; keep a paid, identity-confirmed fallback for production, since the underlying model can change without notice.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: enrichment re-research 2026-10-19 (≥3 independent lookups: live OpenCode Zen roster re-verification, models.dev catalog fetch, the canonical identity thread `https://github.com/anomalyco/opencode/issues/4276` read in full — including the collaborator confirmations and the 2026 Ox Alpha reports — and a Bing web search). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
