# Claude Sonnet 5.5 — findings by Qwen 4 Max

- Source: Anthropic/claude-sonnet-5.5
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second Claude 5.5 model (Sep 28, 2026): a faster, lower-cost complement to Opus 5.5, strongest at well-scoped everyday tasks, bug fixing, and polished documents/slides/spreadsheets. At max effort it matches Opus 5.5 on several evaluations — and beats it on Terminal-Bench 4.0 — at half the price; Anthropic still rates Opus 5.5 clearly stronger on complex, open-ended judgment work.
- **Provider / access:** Claude Platform `claude-sonnet-5-5`; all platforms including AWS (Bedrock), Google Cloud, Microsoft Azure; Claude Code and Claude apps. Zero data retention available. First Sonnet with cyber safeguards + fallbacks (high-risk cyber tasks visibly fall back to Sonnet 5; expanded Cyber Verification Program coming) and anti-distillation classifiers; biology safeguards same as Sonnet 5.
- **Release / knowledge:** Released 2026-09-28. Reliable knowledge cutoff June 2026 (Anthropic lineup table).
- **IDs:** `claude-sonnet-5-5` (Bedrock `anthropic.claude-sonnet-5-5` per platform naming). No free ID.
- **Context window:** 1M tokens; 128K max output sync; eligible for the 300K-output Message Batches beta (`output-300k-2026-03-24`).
- **Modalities:** Text and images in; text out. Adaptive thinking; effort defaults: Medium in Claude Code/apps, High on the Claude Platform. Thinking-off requests must migrate to `between_tools`; forced tool calls now error (breaking changes). Preserved thinking is account-bound.
- **Pricing (as of 2026-11-11):** $2.00 in / $10.00 out per 1M (same as Sonnet 5); cache reads $0.10 (half of Sonnet 5's $0.20); cache writes $2.50; batch 50% off. Anthropic: up to 30% less cost per task (far fewer tokens) and 30%+ faster output — fastest Sonnet ever (~88 tok/s per FullStack). At low/medium effort it beats Sonnet 5's best scores for ~1/10 the cost per task.
- **Architecture:** Proprietary; parameters undisclosed. Alignment: improves on/matches Sonnet 5 across most of the ~1,850-scenario behavioral audit; near Opus 5.5 on containment; least likely of any Claude to probe container limits. AA's GDPval/Briefcase runs used a pre-release deployment with a structured-outputs bug — Anthropic says scores may slightly understate (footnote 3).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** — beats Opus 5.5's 66.4% (Xhigh) in Anthropic's own table (Sonnet 5: 10.3%). FullStack's independent RFE run reports 61.8% — harness/effort differences; both cited, not averaged.
- OSWorld 2.1 (partial): **80.1%** (vs Sonnet 5 57.0%, Opus 5.5 81.8%)
- GDPval-AA v2.1: **1,844 Elo** — 2 points behind Opus 5.5 (1,846), ~400 above Sonnet 5 (1,449); GPT-6 Sol 1,487
- AA-Briefcase v1.1: **1,811 Elo** (vs Opus 5.5 1,822, Sonnet 5 1,359, GPT-6 Sol 1,483)
- SpaceXAI: across 118 real app builds, fewest failed tool calls of any model compared; rarely stalls to ask questions
- First Sonnet to beat Pokémon Red working only from screenshots (long-horizon visual agency)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **64.5%** (vs Sonnet 5 54.9%, Opus 5.5 67.7%)
- Chartography (visual chart recognition, no tools): **61.6%** (vs Sonnet 5 15.6%, Opus 5.5 64.4%, GPT-6 Sol 53.6%)
- FullStack RFE composite: **63.2** (#2 of their table) vs Opus 5.5 65.3, Sonnet 5 41.5 (#31)
- GPQA Diamond / AA Intelligence Index: no verified public score found for this release in the sources read

Coding:

- CursorBench 4.0: **55.5%** — second only to Opus 5.5 (57.8%); Sonnet 5 34.1% (CodeRabbit: "frontier-level performance")
- FrontierCode v1.1 Main: **52.1% at Xhigh** (46.2% at Max — Max runs over-trigger the code-review skill and incur out-of-scope penalties; vs Opus 5.5 54.4%, GPT-6 Sol 49.3%, Sonnet 5 42.4%). At High effort it matches GPT-6 Sol's best for ~1/5 the cost per task.
- Terminal-Bench 4.0: 70.6% (see above)
- Real-world: Epic Games — held a higher-tier quality bar on system-design audit over tens of thousands of lines; Base44/Unity — 90% task completion on multi-step Unity Editor benchmark with runtime verification; SpaceXAI — app builds level with Opus 5 in 3.6 iterations vs 7.7; Lovable — ~1/3 fewer tool calls, ~half the shell runs
- SWE-bench Verified / Pro / DeepSWE: no verified public score found for this release

Long context:

- 1M window with 300K-output batch beta and $0.10 cache reads — cheapest full-window economics in the Claude 5.5 line
- Pokémon Red completion from screenshots demonstrates sustained long-horizon state tracking; no GraphWalks/MRCR number published for this release

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 leader (70.6%, above Opus 5.5), OSWorld 80.1%, GDPval 1,844 and Briefcase 1,811 within 2–11 points of Opus 5.5, fewest failed tool calls in SpaceXAI's comparison; capped only by Opus 5.5's edge on open-ended judgment work.
- **Reasoning: 91/100.** HLE 64.5% with tools and near-Opus knowledge-work Elo; capped by the 3.2-pt HLE gap to Opus 5.5, no published GPQA/AA-index figure, and the pre-release structured-outputs bug footnote on AA runs.
- **Context window: 97/100.** 1M tokens, 128K sync output, 300K batch beta, $0.10 cache reads; capped by no published long-context retrieval benchmark (GraphWalks/MRCR) for this release.
- **Multimodal: 74/100.** Text + image in, text out; Chartography 61.6% and screenshot-only Pokémon Red completion show strong visual understanding; capped by no audio/video input and no native generation.
- **Coding: 94/100.** TB 4.0 70.6% (line leader), CursorBench 55.5% (second only to Opus 5.5), FrontierCode 52.1% Xhigh at ~1/5 GPT-6 Sol's cost, runtime-verified 90% Unity task completion; capped by FrontierCode/CursorBench gaps to Opus 5.5 and the Max-effort regression.
- **Cost efficiency: 85/100.** $2/$10 with $0.10 cache reads, up to 30% cheaper per task and 30%+ faster than Sonnet 5; near-Opus-5.5 benchmark parity at half its price — the value pick of the 5.5 family; not cheaper than the budget tier (Haiku 5.5 from $0.10/$0.50, Gemini Flash lines).
- **Overall Score: 90.2/100.** Mean of the five quality dims (95+91+97+74+94)/5 = 90.2. Best-fit: well-scoped everyday coding, bug fixing, documents/decks and high-volume agent work where Opus-class judgment is overkill — route complex open-ended work to Opus 5.5.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic launch announcement with full benchmark table and footnotes, corroborated by FullStack's independent RFE comparison, Kingy and Alphacorp launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. The TB4.0 discrepancy (Anthropic 70.6% vs FullStack 61.8%) is cited with harness labels, not averaged; the AA pre-release bug footnote and the FrontierCode Max-vs-Xhigh regression are preserved.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 — Anthropic](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 vs Sonnet 5: same price, big jump — FullStack](https://www.fullstack.com/blog/claude-sonnet-5-5-vs-sonnet-5-same-price-big-jump)
  - [Claude Sonnet 5.5 Review: Specs, Benchmarks, Pricing — Kingy](https://kingy.ai/blog/claude-sonnet-5-5-specs-benchmarks-pricing/)
  - [Claude Sonnet 5.5 Launch: Benchmarks — Alphacorp](https://alphacorp.ai/blog/claude-sonnet-5-5-launch-benchmarks-pricing-and-everything-you-need-to-know)
  - [Claude Fable 5.1 overview (lineup specs table) — Anthropic platform docs](https://platform.claude.com/docs/en/models/fable-5-1/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.