# Grok 4.1 — findings by Kimi K3

- Source: xAI (`grok-4.1`; Zen listing `opencode/grok-4.1`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-27; **availability degraded: gone from the live Zen listing, and OpenRouter has no `x-ai/grok-4.1` route** — only the 4.5/4.6/4.7 line remains on Zen as of 2026-10-13; no new benchmarks — scores hold with availability caveats)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 usability-focused refresh of Grok 4, tuned via large-scale RL for style, personality, helpfulness and lower hallucination. Took #1 on LMArena Text at launch (1483 Elo, Thinking). **Now effectively superseded/retired in API land: absent from today's Zen listing and unlisted on OpenRouter; the Fast line and 4.5+ carry the API.**
- **Provider / access:** Consumer surfaces (grok.com, X, iOS/Android) may still expose it in the model picker; API access: first-pass Zen ID `opencode/grok-4.1` is **gone from `/zen/v1/models` on 2026-10-13**; OpenRouter `x-ai/grok-4.1` returns an empty page (no route).
- **Release / knowledge:** Released 2025-11-17 (xAI newsroom; silent rollout Nov 1–14, 2025). Knowledge cutoff not publicly stated.
- **IDs:** `grok-4.1` (xAI API alias — status unverified); `opencode/grok-4.1` (Zen, historical — delisted). No Zen Free ID existed.
- **Context window:** Zen listing stated 128K total (scored figure); third-party trackers conflict (256K in/8K out via llm-stats; BenchLM 1M; Fast variant 2M) — conflict unresolved, both passes.
- **Modalities:** Zen listing: text in/out (consumer build accepts images). Reasoning (Thinking mode) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-13):** last tracked $3.00/$15.00 per 1M via llm-stats (first pass); with the API routes gone, pricing is moot for new integrations.
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found (first-pass snapshot — no new rows since 2026-09-27)

Agent / tool use:

- LMArena Text Arena: Thinking #1 overall **1483 Elo** (+31 over best non-xAI); non-thinking #2 **1465** (xAI newsroom)
- ResearchClawBench: **13.5%** (BenchLM — only agentic row for this exact model)
- Blind pairwise preference vs previous production Grok: **64.78% win rate** (xAI controlled rollout)
- Terminal-Bench / Tau3 / Tau2 / GDPval-AA / Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE: no verified public score found for base 4.1
- FActScore / hallucination: significant reduction vs Grok 4 reported (xAI charts; values in images); EQ-Bench3 / Creative Writing v3 chart-toppers (xAI, in-image values)
- BenchLM unranked for this exact model (1 of 486 benchmarks covered)

Coding:

- SWE-bench Verified: none for base 4.1 — Fast variant reported ~70% (different variant, provisional)
- LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found

Long context: none measured.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 40/100.** Unchanged — ResearchClawBench 13.5% (weak) is the only measured agentic row.
- **Reasoning: 78/100.** Unchanged — LMArena #1 1483 Elo and 64.78% blind preference hold as the late-2025 evidence; capped by zero GPQA/HLE coverage.
- **Context window: 58/100.** Unchanged — scored on the verified 128K Zen figure; tracker conflicts (256K/1M) unresolved.
- **Multimodal: 15/100.** Unchanged — text in/out on the evaluated ID.
- **Coding: 60/100.** Unchanged — evidence vacuum; Fast-variant proxy only.
- **Cost efficiency: 52/100.** −8 — with the Zen route delisted and no OpenRouter route, the remaining paths are consumer apps or unverified API aliases; $3/$15 was already the ~60 anchor, and the effective availability discount applies.
- **Overall Score: 50/100.** (40+78+58+15+60)/5 = 50.2 → 50 (unchanged; cost excluded). Best fit (while reachable): conversational/creative companion work where its LMArena-leading style matters; not a coding/agentic pick, and now a sunset candidate for API use.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenCode Zen `/zen/v1/models` 2026-10-13 — `grok-4.1` absent while 4.5/4.6/4.7 remain; OpenRouter `x-ai/grok-4.1` — empty page, no route). No tracker added benchmark coverage; first-pass rows retained. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
