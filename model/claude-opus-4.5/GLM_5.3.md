# Claude Opus 4.5 — findings by GLM 5.3

- Source: Anthropic/Claude Opus 4.5 (`claude-opus-4-5-20251101`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship "Opus" model released 2025-11-24, pitched as "the best model in the world for coding, agents, and computer use"; now a legacy tier (superseded by Opus 4.6 → 5.5).
- **Provider / access:** Anthropic Claude API (Messages API), Amazon Bedrock (`anthropic.claude-opus-4-5-20251101-v1:0`), Google Cloud (`claude-opus-4-5@20251101`), Microsoft Foundry (`claude-opus-4-5`).
- **Release / knowledge:** 2025-11-24; reliable knowledge cutoff May 2025, training data cutoff Aug 2025 (platform docs).
- **IDs:** `claude-opus-4-5-20251101` (alias `claude-opus-4-5`). No Free ID exists on Zen; paid only.
- **Context window:** 200K tokens total; 64K max output (Messages API) — verified on the official model page.
- **Modalities:** text + image in; text out; extended thinking with effort parameter (default `high`); tool calls, JSON mode, prompt caching, batch API.
- **Pricing (as of 2026-09-27):** $5 in / $25 out per 1M; 5m cache write $6.25, 1h cache write $10, cache read $0.50; batch 50% off (official pricing page). AA blended ≈ $3.9/1M.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Sources: Anthropic announcement (anthropic.com/news/claude-opus-4-5, 2025-11-24), Anthropic platform model page, Artificial Analysis (artificialanalysis.ai, 2026-09). Anthropic's own release charts are images, so several absolute numbers are not independently verifiable in text; relative deltas are quoted verbatim from the announcement.

Agent / tool use:

- Terminal-Bench 2.x: **no verified public score found** for the exact number; Warp reported "a 15% improvement over Sonnet 4.5" on Terminal Bench (Anthropic announcement quote). Provisional estimate ≈ low-60s % given Sonnet 4.5-era baselines.
- Tau3-Banking / Tau2-Bench: **no verified public score found** — Anthropic's announcement only describes Opus 4.5 finding a legitimate policy workaround in the τ² airline scenario that the harness scored as a failure.
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BrowseComp-Plus (fetch-enabled, with context-management + memory tools): **85.30%** vs 70.48% without the platform techniques (Anthropic announcement footnote 4).
- Vending-Bench: **29% more profit than Sonnet 4.5** (Anthropic announcement).
- Prompt-injection robustness (Gray Swarm): **hardest to trick "than any other frontier model in the industry"** (Anthropic announcement).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (release chart is image-only).
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index v4.3.2: **29 (reasoning, estimated)** / 24 (non-reasoning) — vs current Anthropic frontier Opus 5.5 at 58, Fable 5.1 at 53, Sonnet 5 at 38 (artificialanalysis.ai, Sep 2026).
- Anthropic internal performance-engineering take-home exam: scored higher than any human candidate within the 2-hour limit (with parallel test-time compute; announcement footnote 1).

Coding:

- SWE-bench Verified: **≈81.5% (derived)** — "state-of-the-art" at release; at highest effort exceeds Sonnet 4.5 (official 77.2%) by 4.3 pp using 48% fewer tokens; at medium effort matches Sonnet 4.5's best with 76% fewer output tokens (Anthropic announcement + Sonnet 4.5 announcement footnote).
- SWE-bench Multilingual: leads across **7 of 8** programming languages (Anthropic announcement).
- Aider Polyglot: **+10.6% jump over Sonnet 4.5** (Anthropic announcement).
- LiveCodeBench: **no verified public score found**
- SciCode / Vibe Code Bench: **no verified public score found**
- OSWorld: **no verified public score found** for Opus 4.5 (baseline: Sonnet 4.5 = 61.4% official); announcement calls Opus 4.5 market-leading at computer/spreadsheet use.

Long context:

- No MRCR/RULER numbers published for Opus 4.5; 200K window verified via docs. "No long-context retrieval reported."

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology from the raw numbers above. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Strongest evidence: best-in-industry prompt-injection robustness (Gray Swan), +15% Terminal-Bench over Sonnet 4.5 (Warp), Vending-Bench +29% (long-horizon agency), BrowseComp-Plus 85.3% with tools, "best frontier task planning and tool calling" early-access consensus. Capped below 90 by 2026 frontier Terminal-Bench levels (~88%+) and lack of verified τ³/GDPval numbers.
- **Reasoning: 78/100.** AA Intelligence Index 29 (estimated, reasoning config) is above the non-reasoning median (15) but half of today's frontier (58); math/reasoning "better than predecessors" and record internal-exam result. Capped by aging measured index vs 2026 frontier.
- **Context window: 70/100.** 200K total / 64K max output — the v1 tier mapping scores 200K = 70; no 1M option for this generation.
- **Multimodal: 66/100.** Text + image input only (60–70 band); better vision than predecessors and market-leading computer use, but no audio/video input and text-only output.
- **Coding: 88/100.** ≈81.5% SWE-bench Verified (derived, SOTA at release), SWE-bench Multilingual leader in 7/8 languages, Aider Polyglot +10.6 pp, with 48–76% token-efficiency gains. Capped below 90 by 2026 frontier coding agents (DeepSWE 75%+ class) and lack of LiveCodeBench/SciCode verification.
- **Cost efficiency: 48/100.** $5/$25 per MTok sits between the $3/$15 (~60) and $10/$50 (~30) anchor points; partially offset by 48–76% lower token counts at equal quality, $0.50 cache reads, and 50% batch discount.
- **Overall Score: 77/100.** (82+78+70+66+88)/5 = 76.8 → 77. Still an upper-mid coding/agent model in Sep 2026; best fit is long-horizon agentic coding where its token-efficiency and reliability shine, though Opus 4.6+ now beats it at lower cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-27
- Method: public internet research (Anthropic announcement + platform docs, Artificial Analysis, Wikipedia) — no peer report files read; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
