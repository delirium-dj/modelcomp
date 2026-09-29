# Claude Sonnet 5.5 — findings by Kimi K3

- Source: Anthropic/Claude Sonnet 5.5 (`claude-sonnet-5-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Anthropic's Claude 5.5 family, positioned as "the best combination of speed and intelligence" — strongest at well-scoped everyday agentic tasks, bug fixing, and polished documents/slides/spreadsheets; complements Opus 5.5 at lower cost.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud Vertex AI / Microsoft Foundry / Claude Platform on AWS (`claude-sonnet-5-5`). Not listed on OpenCode Zen as of 2026-09-29 (Zen carries `claude-sonnet-5` but no 5.5 entry).
- **Release / knowledge:** Released 2026-09-28; reliable knowledge cutoff and training data cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5` (Claude API ID `claude-sonnet-5-5`). No Free ID exists on Zen — the model is not on the Zen endpoint list at all yet.
- **Context window:** 1M tokens total; 128K max output synchronously, up to 300K output on the Message Batches API with the `output-300k-2026-03-24` beta header (verified via Claude Platform models overview).
- **Modalities:** Text + image in, text out; vision and PDF support (Files API); adaptive thinking on by default (effort parameter, API default `high`; `xhigh`/`max` need adaptive thinking); tool calls supported with `tool_choice: auto|none` only — forced tool use (`any`/`tool`) returns a 400 on this model; lowest thinking setting is `between_tools` (thinking `disabled` is rejected); structured outputs supported.
- **Pricing (as of 2026-09-28):** $2/M input, $10/M output, $0.20/M cache reads, $2.50/M cache writes; Batch API 50% off. Same list price as Sonnet 5 but Anthropic reports ~30% lower cost per task from reduced token usage. Paid only; zero data retention available.
- **Architecture:** Proprietary (no public parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic announcement; Sonnet 5: 10.3%, Opus 5.5: 66.4% Xhigh — best reported number in the table)
- GDPval-AA v2.1: **1844 Elo** (Anthropic / Artificial Analysis run on pre-release deployment; Opus 5.5: 1846, GPT-6 Sol: 1487)
- AA-Briefcase v1.1 (long-horizon knowledge work): **1811 Elo** (Anthropic / Artificial Analysis; Opus 5.5: 1822, Sonnet 5: 1359)
- OSWorld 2.1 (computer use): **80.1%** partial (Anthropic; Sonnet 5: 57.0%, Opus 5.5: 81.8%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **64.5%** with tools (Anthropic; Sonnet 5: 54.9%, Opus 5.5: 67.7%)
- Artificial Analysis Intelligence Index: **56** (Artificial Analysis release page, Adaptive Reasoning / Max Effort default fallback)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 1.1 (Main): **46.2%** at Max effort (Anthropic; footnote: Max scores lower than Xhigh on this harness; Opus 5.5: 54.4%, GPT-6 Sol: 49.3–52.1%)
- CursorBench 4.0: **55.5%** (Anthropic; Sonnet 5: 34.1%, Opus 5.5: 57.8%)
- Terminal-Bench 4.0 (agentic terminal coding): **70.6%** (see above)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval benchmark reported (no public MRCR / RULER / GraphWalks numbers found; 1M-token window verified from vendor docs only).

Multimodal:

- Chartography (visual chart recognition): **61.6%** no tools (Anthropic; Sonnet 5: 15.6%, Opus 5.5: 64.4%, GPT-6 Sol: 53.6%)
- First Sonnet model to beat Pokémon Red working only from screenshots (Anthropic announcement).

### Normalized scores (1–100)

- **Tool use: 88/100.** Best reported Terminal-Bench 4.0 score (70.6%, above Opus 5.5's 66.4%), GDPval-AA within 2 Elo of Opus 5.5, OSWorld 80.1%, and testers report efficient batched tool calls. Capped: forced `tool_choice` was removed on the API, and no public Tau2-Bench/Toolathon numbers exist to corroborate.
- **Reasoning: 85/100.** HLE 64.5% with tools and AA Intelligence Index 56 put it clearly above Sonnet 5 (54.9%) and near-Opus in knowledge work. Capped by Opus 5.5's 67.7% HLE and Anthropic's own note that Opus 5.5 stays "clearly stronger at complex, open-ended work."
- **Context window: 90/100.** 1M-token window with 128K (300K beta) output is top-tier among current frontier models. Capped: no third-party long-context retrieval score (RULER/MRCR-class) is published, so the window is vendor-verified only.
- **Multimodal: 62/100.** Image and PDF input with strong chart understanding (Chartography 61.6% vs 15.6% on Sonnet 5) and screenshot-driven game play, but text-only output and no audio/video input or image generation.
- **Coding: 90/100.** Terminal-Bench 4.0 70.6% is the class best reported; CursorBench 55.5% sits ~2 points under Opus 5.5; Base44/Unity report fewest failed tool calls and ~90% multi-step task completion. Capped by the FrontierCode gap to Opus 5.5 (46.2% vs 54.4%).
- **Cost efficiency: 74/100.** $2/$10 per million with $0.20 cache reads, 50% batch discount, and ~30% fewer tokens per task than Sonnet 5 make it cheap for its capability tier; still a paid-only frontier model with no free tier.
- **Overall Score: 83/100.** Mean of the five non-cost dims (88+85+90+62+90)/5 = 83. Best fit: high-throughput agentic coding and everyday knowledge work where Opus-level power isn't required.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Anthropic announcement + Claude Platform docs, Artificial Analysis release page, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
