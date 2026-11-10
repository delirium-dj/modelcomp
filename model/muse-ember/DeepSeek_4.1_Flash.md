# Muse Ember — findings by DeepSeek 4.1 Flash

- Source: Meta Superintelligence Labs / Muse Ember (`muse-ember-1.0`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0 (stealth-era name: **Crouton Alpha**, `stealth/crouton-alpha` / `opencode/crouton-alpha-free` — revealed by Meta 2026-11-10, per Alexandr Wang; folder merged from `crouton-alpha` per the revealed-stealth rule)
- **Short description:** Meta's smallest and most efficient reasoning model (2026-11-09), built for the repetitive work agents do all day — tool calls, coding subtasks, routing, extraction and long-document parsing; the first model trained using Muse Wonder Full, and the efficiency-frontier pick for high-volume agent work.
- **Provider / access:** Meta Model API (`muse-ember-1.0`; Responses API supported), Muse Code, OpenRouter (`meta/muse-ember`), OpenCode (`muse-ember-1.0`; 3× rate above 200K context), Google Cloud, Oracle Cloud. No Free ID.
- **Release / knowledge:** released 2026-11-09 (stealth preview ran 2026-11-03→11-09, processing >5T tokens); knowledge cutoff not announced.
- **IDs:** `muse-ember-1.0`; aliases: Crouton Alpha / crouton-alpha / crouton-alpha-free.
- **Context window:** 1,048,576 (1M) total; up to 524,288 (512K) max output.
- **Modalities:** text, image, audio and video in; text out; always-on reasoning with effort levels (minimal→max); tool calls, structured output.
- **Pricing (as of 2026-11-10):** **$0.10 in / $0.004 cached / $0.50 out per 1M** for prompts ≤200K; over 200K: **$0.30 / $0.012 / $1.50** per 1M. Meta: ~$0.14 per Artificial Analysis task (max-effort, list pricing).
- **Architecture:** proprietary; parameter count undisclosed (Meta's smallest model; first trained using Muse Wonder Full).

### Raw benchmarks found

> Meta launch numbers (2026-11-09) at max reasoning unless noted; AA rows are from Artificial Analysis Intelligence Index **v5** (reset basket — do not compare with pre-v5 Index values). Stealth-era measurements under the Crouton Alpha ID are labelled.

Agent / tool use:

- OSWorld 2.1: **69.5% partial / 33.8% binary** (Meta internal; vs Haiku 5.5 68.9/27.8, GPT-6 Luna 50.5/17.0)
- AutomationBench-AA: **37.8%** (AA; vs Haiku 13.9, Luna 20.2); Agents' Last Exam: **61.6%** (Meta internal Linux subset; vs 57.0/57.1); Personal Superintelligence Index: **46.8** (Meta internal composite; vs 36.1/37.0)
- Coding Agent Index-AA: **46** (vs Haiku 37, Luna 31); PerceptionBench (w/ tools): **80.6%** (Meta internal; vs 78.6/62.8)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **36** at max (officechai: 35.8; vs Haiku 5.5 36.2, GPT-6 Luna 28; Muse Spark 1.3 37)
- Cost per AA Index task: **$0.136 (max) / $0.116 (xhigh)** vs Haiku $0.411 / Luna $0.152 / Muse Spark 1.3 $2.39 — "efficiency frontier" claim
- Stealth-era only (Crouton Alpha, judged 2026-11-04, independent StealthMark): **48.0, rank 23 of 56** — "close behind Claude Haiku 5.5 at 49.5; lower on general intelligence, higher on visual intelligence". Meta states issues were fixed before launch, so these are **not Muse Ember's scores**.

Coding:

- Terminal-Bench 4.0: **40.9%** (mini-swe-agent harness; vs Haiku 39.2 Claude Code, Luna 16.4 Codex — best-published-harness comparison, not like-for-like)
- **FrontierCode 2.0-AA: 27.2%** (the one row where Haiku 5.5 leads clearly at 34.9; Luna 25.2) — hardest novel-problem coding trails the frontier; pair with Muse Wonder

Multimodal:

- GDP.pdf-AA: **22.8%** (vs 20.8 Haiku / 22.8 Luna); text/image/audio/video in with 1M-token document capacity

Long context:

- 1M input / 512K output by design (full codebase or document set in one call); no MRCR/RULER retrieval row published at check time

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 2.1 69.5% partial, AutomationBench-AA 37.8, Coding Agent Index 46, ALE 61.6 and PerceptionBench 80.6 beat Haiku 5.5 on most agentic rows; capped by internal-only sourcing on several rows and the small-model ceiling.
- **Reasoning: 77/100.** AA Index v5 36 effectively ties Haiku 5.5 (36.2) at a third of the cost; capped below the mid-80s by the v5 basket's hard rows and no published GPQA/HLE absolute values.
- **Context window: 95/100.** 1M input with a headline 512K max output (broader output than most peers); no measured retrieval retention at depth.
- **Multimodal: 88/100.** Native text + image + audio + video input with strong visual perception (PerceptionBench 80.6) and document parsing; no non-text output.
- **Coding: 76/100.** TB4.0 40.9 and Coding Agent Index 46 lead Haiku 5.5 on agentic-coding harnesses, but FrontierCode 2.0 27.2 shows the small-model gap on hardest novel problems.
- **Cost efficiency: 90/100.** $0.10/$0.50 with $0.004 cached and ~$0.14/AA task at max effort is the efficiency frontier vs Haiku ($0.41/task) and Luna; the >200K-token price cliff (3×) and no free tier cap it.
- **Overall Score: 83/100.** (80 + 77 + 95 + 88 + 76) / 5 = 83.2 → 83. Best fit: the volume tier of agent stacks — Ember executes repeatable coding/tool/document work at scale while Muse Wonder (or another frontier planner) handles the hardest steps.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (Meta launch post `research.meta.ai/blog/muse-ember`, dev.meta.ai model page, Artificial Analysis Index v5 rows via Meta/officechai, Stealth Models' independent StealthMark result for the Crouton Alpha stealth ID, OpenRouter/OpenCode listings). Vendor-internal vs independent rows are labelled; the stealth-era scores are explicitly not attributed to Muse Ember. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Introducing Our Smallest, Most Efficient Model: Muse Ember](https://research.meta.ai/blog/muse-ember)
  - [Meta Model API — Muse Ember](https://dev.meta.ai/models/muse-ember)
  - [OfficeChai — Muse Ember benchmarks vs Haiku 5.5 / GPT-6 Luna](https://officechai.com/ai/muse-ember-benchmarks/)
  - [Stealth Models — Crouton Alpha (StealthMark 48.0; revealed as Muse Ember)](https://stealthmodels.com/crouton-alpha)
  - [OpenRouter — meta/muse-ember](https://openrouter.ai/meta/muse-ember)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
