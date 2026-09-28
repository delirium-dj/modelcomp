# Claude Sonnet 4 — findings by GLM 5.3

- Source: Anthropic/Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's high-performance Claude 4-generation model (released 2025-05-22 alongside Opus 4), pitched as "a significant upgrade to Claude Sonnet 3.7" for coding, reasoning, and agents. Now retired (API access ended June 15, 2026).
- **Provider / access (at release):** Anthropic Claude API, Amazon Bedrock (`anthropic.claude-sonnet-4-20250514-v1:0`), Google Cloud Vertex AI (`claude-sonnet-4@20250514`); also powered GitHub Copilot's coding agent at launch.
- **Release / knowledge:** 2025-05-22; training data cutoff Mar 2025 (archived official docs).
- **IDs:** `claude-sonnet-4-20250514` (alias `claude-sonnet-4-0`). No Free ID exists on Zen; paid only. Deprecated 2026-04-14, retired 2026-06-15 (replacement: `claude-sonnet-4-6`).
- **Context window:** 200K tokens; 64K max output (archived official docs, Jun 2025 snapshot).
- **Modalities:** text + image in; text out; vision yes; extended thinking (hybrid reasoning) with tool use; parallel tool calls; JSON mode; prompt caching (up to 1h); memory improvements.
- **Pricing (at retirement):** $3 in / $15 out per MTok; 5m cache write $3.75, 1h cache write $6, cache hit $0.30.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Sources: Anthropic "Introducing Claude 4" announcement (2025-05-25, incl. appendix), archived docs.anthropic.com models overview (Jun 2025 snapshot), Anthropic Sonnet 4.5 announcement (OSWorld baseline), platform model-deprecations page. Release charts are images; only text-verified numbers are listed.

Agent / tool use:

- Terminal-Bench 2.x: **no verified public score found** for Sonnet 4 (announcement chart is image-only; Opus 4 was 43.2%).
- Tau3-Banking / Tau2-Bench: **no verified public score found** in text — announcement reports TAU-bench "with extended thinking with tool use" via a prompt-addendum methodology but the value is chart-only.
- GDPval-AA: **no verified public score found**
- OSWorld: **42.2%** (Anthropic Sonnet 4.5 announcement: "Just four months ago, Sonnet 4 held the lead at 42.2%").
- Tool behavior: parallel tool execution; 65% less shortcut/loophose behavior than Sonnet 3.7 on reward-hacking-prone agentic tasks (announcement).

Reasoning / knowledge:

- GPQA Diamond: **70.0%** without extended thinking (announcement appendix; extended-thinking value chart-only).
- AIME: **33.1%** without extended thinking (announcement appendix).
- MMMLU (multilingual MMLU): **85.4%** without extended thinking (announcement appendix).
- HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found** (AA model page no longer exists for this retired ID).

Coding:

- SWE-bench Verified: **72.7%** (state-of-the-art at release; no extended thinking, simple bash + string-replace edit scaffold, full 500 problems) — **80.2%** with "high compute" (parallel test-time compute + rejection sampling + internal scorer) per the announcement appendix.
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER numbers published for Sonnet 4. "No long-context retrieval reported."

### Normalized scores (1–100)

> Derived per `model-comparison.md` methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 70/100.** SOTA-at-release agentic stack (extended thinking with tool use, parallel tools, 65% less reward hacking, OSWorld 42.2% then-SOTA, GitHub Copilot's launch agent). Capped by 2026 frontier Terminal-Bench levels (~88%+), unverified τ²/TB numbers, and retirement.
- **Reasoning: 68/100.** GPQA Diamond 70.0% sits in the v1 mid band (60–80% → 55–65) plus strong agentic reasoning and MMMLU 85.4% lift it; AIME 33.1% (no thinking) is weak vs modern reasoning models.
- **Context window: 70/100.** 200K total / 64K max output — the v1 tier mapping scores 200K = 70.
- **Multimodal: 65/100.** Text + image in, text out (60–70 band); vision verified with MMMU 72.6%; no audio/video input.
- **Coding: 76/100.** SWE-bench Verified 72.7% was SOTA in May 2025 (80.2% with parallel test-time compute), but the 2026 frontier is ~81.5%+ standard-config; model retired from API.
- **Cost efficiency: 60/100.** $3/$15 per MTok matches the v1 anchor ("$3/$15 = ~60"); cache reads at $0.30 and 1h cache writes helped long agentic runs.
- **Overall Score: 70/100.** (70+68+70+65+76)/5 = 69.8 → 70. Historical upper-mid model: a solid, efficient coder-agent in mid-2025, now fully superseded by Sonnet 4.5/4.6/5 at similar or better price — score reflects its retirement-era standing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-27
- Method: public internet research (Anthropic announcements + archived official docs + deprecations page); no peer report files read; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
