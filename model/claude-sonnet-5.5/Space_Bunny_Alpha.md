# Claude Sonnet 5.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-validation 2026-09-29 against Artificial Analysis **v4.3.2** (10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). **No index value changed: Claude Sonnet 5.5 (max) remains 56**, matching the current 58 ceiling at Opus 5.5 max. New auditable detail added below: AA now publishes a rank (**#3 of 216**, it was "#2" in the 2026-09-28 launch article before Opus 5.5's high-effort row landed), a full effort ladder, TTFT, verbosity, and the AutomationBench-AA / Terminal-Bench-Science rows.

## Model card

- **Name:** Claude Sonnet 5.5 (paid tier; no OpenCode Zen Free ID)
- **Short description:** Anthropic's mid-tier Claude 5.5-family model, released 2026-09-28 six days after Claude Opus 5.5 and replacing Claude Sonnet 5 at an unchanged $2/$10 list price. It is the fast everyday complement to Opus 5.5 for well-scoped work — bug fixes, feature iteration, and polished documents/slides/spreadsheets — with adaptive thinking always on, five effort levels, and a native 1M context window. Claude Haiku 5.5 is announced as the forthcoming high-volume tier.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5-5`, Messages API); Claude Platform on AWS (`claude-sonnet-5-5`); Amazon Bedrock (`anthropic.claude-sonnet-5-5`); Google Cloud Vertex AI (`claude-sonnet-5-5`); Microsoft Foundry (`claude-sonnet-5-5`, Global Standard deployments only). Available in Claude Code, claude.ai, and the Claude apps.
- **Release / knowledge:** released 2026-09-28; knowledge cutoff June 2026.
- **IDs:** `claude-sonnet-5-5` (no date suffix); `anthropic.claude-sonnet-5-5` on Bedrock. No Free ID exists on OpenCode Zen — cost is scored on the paid list price.
- **Context window:** 1M tokens native (no beta header, no long-context premium); max output 128k tokens, up to 300k via the Message Batches API with the `output-300k-2026-03-24` beta header. (Anthropic platform docs / claude.dev launch guide.)
- **Modalities:** text and image in, text out; PDF via document input; adaptive thinking on by default (cannot be switched off; the `between_tools` setting replaces the old off state); extended thinking; tool use / function calling; structured outputs; zero data retention available for eligible customers. First Sonnet model with Opus-class cybersecurity safeguards.
- **Pricing (as of 2026-09-29):** $2 / $10 per 1M input / output tokens; $0.20 per 1M cache reads; cache writes $2.50 (5-minute TTL) or $4 (1-hour TTL); Batch API 50% off input and output; US-only inference (`inference_geo: "us"`) is 1.1x standard price. Paid, no free tier. Same list as Sonnet 5 and exactly half Opus 5.5's $4/$20.
- **Architecture:** proprietary. Tokenizer unchanged from Sonnet 5. Thinking cannot be disabled; effort levels are `low`, `medium`, `high`, `xhigh`, `max` (default `high` on the API/Platform, `medium` in Claude Code and the Claude apps). Retirement not sooner than 2027-09-28.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic launch table, self-reported, default/max effort; vs Sonnet 5 at 10.3% and Opus 5.5 at 66.4% — the Opus figure is at Xhigh, so effort settings may not match)
- Terminal-Bench 4.0: **64%** (Artificial Analysis independent run at max effort, ahead of Opus 5.5 and GPT-6 Astra at 60%; AA ran a pre-release build with a structured-output bug, fixed for launch)
- OSWorld 2.1: **80.1% partial / 43.5% strict** (Anthropic launch table and Sonnet 5.5 System Card §8 — same suite, two scoring conventions; always pair them)
- AutomationBench: **44.7%** (System Card; edges past Opus 5.5 at 42.5%, unlike most rows). Independent AA AutomationBench-AA headline: **70%** vs Opus 5.5's **71%** — near-parity on a different scoring convention, so the System Card's "Opus is behind" reading does not survive the AA run
- Chartography: **61.6%** no-tools / **90.2%** with tools (launch table; System Card adds the with-tools number)
- GDPval-AA v2.1: **1844 Elo** (Anthropic launch table, 44 occupations / 9 industries; Opus 5.5 1846, Sonnet 5 1449, GPT-6 Sol 1487)
- AA-Briefcase v1.1: **1811 Elo** (long-horizon knowledge work; Opus 5.5 1822, Sonnet 5 1359)
- ExploitGym: full arbitrary code execution **43.4%** of 410 runs (System Card; Mythos 5.1 61.7%, Opus 5.5 67.6% task completion)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Independent hands-on agentic run (ComputingForGeeks, live API 2026-09-28): 3 tool calls per Claude Code bug-fix run vs 12–13 for Sonnet 5, $0.057 and 12 s per run vs $0.157 and 48 s; at max effort it spent 22x the tokens for identical lint/deploy results.

Reasoning / knowledge:

- Humanity's Last Exam: **64.5% with tools / 56.9% without tools** (Anthropic launch table and System Card; Sonnet 5 54.9%, Opus 5.5 67.7%)
- Artificial Analysis Intelligence Index: **56** at max effort, rank **#3/216** (AA v4.3.2, accessed 2026-09-29; value unchanged from the 2026-09-28 reading of 56, when AA's launch article called it "#2"). Effort ladder on the same index: max **56**, xhigh **52**, high **47**, medium **41**, low **36**.
- AA service metrics for the max-effort default-fallback route: output speed **138.7 tokens/s**, time to first answer token **370.76s**, cost per Intelligence Index task **$7.60** (~50% above Sonnet 5's $5.09), total **410M** output tokens across the index — the highest output-tokens-per-task AA has recorded for this family
- AA-Omniscience: **54% accuracy / 47% hallucination rate** (AA; Opus 5.5 66% / 59% — Sonnet 5.5 trades recall for a lower hallucination rate)
- GPQA Diamond / CritPt / LCR / MLCR: **no verified public score found**
- AECI (internal bio index): **167.93** (System Card; Opus 5.5 169.12) — internal Anthropic measure, directional only
- VCT 0.58, BioMysteryBench 0.89 human-solvable / 0.45 human-difficult, Protocols 0.67/0.67 (System Card, RSP evals; on par with Opus 5/5.5, well below Mythos-class cyber)

Coding:

- SWE-bench Pro: **81.3%** (System Card §8; Sonnet 5 63.2%, Opus 5.5 89.9%)
- SWE-bench Multilingual: **90.3%**; SWE-bench Multimodal: **54.3%** (System Card)
- DeepSWE v1.1: **71.0%** (System Card)
- FrontierCode 1.1 (Main): **52.1% at Xhigh / 46.2% at Max** (launch table; Sonnet 5 42.4%, Opus 5.5 54.4%, GPT-6 Sol 49.3%. Anthropic's footnote: at Max it ran Claude Code's code-review subagent skill, causing timeouts and out-of-scope edits)
- FrontierCode Extended: **64.4% at Xhigh**; FrontierCode 1.1: **46.2% at Max / 52.1% at Xhigh** (System Card §8.1; more thinking is not monotonically better here)
- CursorBench 4.0: **55.5%** at Max (launch table; Opus 5.5 57.8%, Sonnet 5 34.1%). System Card effort series: 39.2% medium, 47.8% high, 53.1% xhigh, 55.5% max
- FrontierSWE v2: **61.9%** (Proximal harness, mean across trials; Opus 5.5 62.3%, GPT-6 Astra 65.5%)
- ProgramBench: **79.7%**; Terminal-Bench-Science 0.1: **59.9%** (System Card). Artificial Analysis's independent Terminal-Bench-Science run: **53%**, behind only GPT-6 Astra and Opus 5.5 (that suite is not part of the Intelligence Index).
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval measurement published by Anthropic or a third party for Sonnet 5.5 — the 1M window is a vendor spec (native, no beta header, no long-context premium) rather than a measured retrieval result. Long-horizon proxy: AA-Briefcase v1.1 at 1811 Elo, a multi-hour knowledge-work suite, where Sonnet 5.5 beats Sonnet 5 by 452 Elo.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 at 70.6% self-reported / 64% on AA's independent run, GDPval-AA 1844 and AA-Briefcase 1811 essentially level with Opus 5.5 at half the token price, and a documented 3-calls-per-run agentic efficiency. Capped by OSWorld 2.1 strict at only 43.5% and by the fact that the one benchmark where it beats Opus may mix Max against Opus's Xhigh.
- **Reasoning: 85/100.** HLE 64.5% with tools (56.9% without) is frontier-adjacent, and AA's Intelligence Index of 56 (rank #3 of 216) puts it in the top three behind only Opus 5.5's max and xhigh configurations. Capped by Omniscience accuracy of 54%, six points behind Opus 5.5, and Anthropic's own statement that Opus 5.5 remains clearly stronger on open-ended work needing sustained judgment.
- **Context window: 90/100.** Native 1M input with a 128k max output (300k on Batches) and no long-context premium — top of the practical tier map. Held below the ceiling because no MRCR/RULER/GraphWalks retrieval number has been published, so the window size is a spec rather than a measured limit.
- **Multimodal: 78/100.** Text+image in, text out, with a genuine visual step up: Chartography 61.6% no-tools (up from Sonnet 5's 15.6%) and 90.2% with tools, plus first-ever Sonnet to beat Pokémon Red from screenshots alone. Capped by text-only output and the modest SWE-bench Multimodal row at 54.3%.
- **Coding: 89/100.** The strongest area: SWE-bench Pro 81.3%, DeepSWE v1.1 71.0%, Terminal-Bench 4.0 70.6%, CursorBench 4.0 55.5% within two points of Opus 5.5, FrontierCode 1.1 52.1%. Capped below the 90s by FrontierSWE v2 at 61.9% (trailing Opus 5.5 and GPT-6 Astra) and by the FrontierCode regression from Xhigh to Max.
- **Cost efficiency: 62/100.** $2 / $10 / $0.20 cached is half Opus 5.5's sticker and unchanged from Sonnet 5, with Anthropic claiming up to 30% less per task from fewer tokens. It is a premium price with no free tier, and at max effort AA measured 410M output tokens across the index and $7.60 per index task — about 40% above Sonnet 5 — so real cost-per-task erodes the sticker advantage; medium effort (41 index points) is the efficient operating point.
- **Overall Score: 86.0/100.** (88 + 85 + 90 + 78 + 89) / 5 = 430 / 5 = 86.0. Cost efficiency is excluded from the mean. Best fit is a fast default for scoped coding, bug fixes, and polished documents at medium-to-high effort, with Opus 5.5 reserved for open-ended work that needs sustained judgment.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Anthropic launch post, Sonnet 5.5 System Card, claude.dev platform guide, Artificial Analysis, and independent launch-day API tests); scores are normalized 1–100 interpretations, not official vendor scores. Launch-table figures are vendor self-reported and unverified by third parties, apart from where AA or an independent test is cited.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
