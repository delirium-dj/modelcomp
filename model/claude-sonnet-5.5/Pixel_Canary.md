# Claude Sonnet 5.5 — findings by Pixel Canary

- Source: Anthropic (`anthropic/claude-sonnet-5.5`), model ID `claude-sonnet-5-5`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (second model in the Claude 5.5 family; no "Free" tier — paid only)
- **Short description:** Anthropic's Sonnet-class everyday-work model, released 2026-09-28 as the successor to Claude Sonnet 5 and the faster, cheaper sibling of Claude Opus 5.5. Tuned for well-scoped tasks: feature work, bug fixes, and polished documents/slides/spreadsheets, with notably strong design sense.
- **Provider / access:** Anthropic Claude Platform (Messages API) as `claude-sonnet-5-5`; also AWS, Google Cloud (Vertex), Microsoft Foundry/Azure — 8 API providers tracked on Artificial Analysis. Anthropic reports zero data retention availability. Chat/Messages style API, not Responses-only.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff not published by Anthropic.
- **IDs:** `anthropic/claude-sonnet-5.5` (vendor ID `claude-sonnet-5-5`). No OpenCode Zen Free ID found — cost scored on paid pricing.
- **Context window:** 1M tokens total (verified on the Artificial Analysis model page; Anthropic lists Sonnet 5.5 in the 1M-context Sonnet tier). Max output per response not published.
- **Modalities:** Text + image in; text out. Reasoning: yes (adaptive reasoning, effort levels incl. Xhigh/Max; `between_tools` mode replaces thinking-off). Tool calling and structured/JSON output supported; preserved thinking expanded so reasoning cannot be decoupled from the creating account. First Sonnet shipped with cyber safeguards/fallbacks plus reasoning-extraction classifiers.
- **Pricing (as of 2026-09-29):** $2.00 / 1M input, $10.00 / 1M output, $0.20 / 1M cache reads — unchanged from Sonnet 5, but Anthropic measured up to 30% lower cost per task (fewer tokens) and ~30% faster output (138.7 tok/s on AA). Paid only.
- **Architecture:** Proprietary; parameter count and license not disclosed.

### Raw benchmarks found

- Terminal-Bench 4.0 (agentic coding, agent-first harness): **70.6%** (Anthropic launch post; vs Sonnet 5 10.3%, Opus 5.5 66.4% at Xhigh — beats its own flagship sibling here)
- CursorBench 4.0: **55.5%** (Anthropic; Sonnet 5 34.1%, Opus 5.5 57.8%)
- FrontierCode 1.1 (Main): **52.1% at Xhigh effort / 46.2% at Max effort** (Anthropic table; footnote 2 explains Max scored lower — more frequent multi-subagent code-review runs caused timeouts/out-of-scope edits). Cognition's FrontierCode blog puts GPT-6 Sol at 49.3% in the same band.
- GDPval-AA v2.1 (real-world knowledge work, Elo): **1844** (Anthropic citing Artificial Analysis; Sonnet 5 1449, Opus 5.5 1846, GPT-6 Sol 1487 — effectively flagship parity)
- AA-Briefcase v1.1: **1811** (Anthropic/Artificial Analysis; Sonnet 5 1359, Opus 5.5 1822, GPT-6 Sol 1483)
- OSWorld 2.1 (computer use): **80.1% partial credit** (Anthropic; Sonnet 5 57.0, Opus 5.5 81.8)
- Chartography (visual chart recognition, no tools): **61.6%** (Anthropic; Sonnet 5 15.6, Opus 5.5 64.4, GPT-6 Sol 53.6)
- Humanity's Last Exam: **64.5% with tools** (Anthropic; Sonnet 5 54.9, Opus 5.5 67.7)
- Artificial Analysis Intelligence Index v4.3.2: **56**, rank **#3 / 216** in class (class median 26); AA also reports **$7.60 per Index task** (#98/216), 138.7 output tok/s, 410M Index output tokens (very verbose vs 88M median)
- Pokémon Red completed from screenshots alone (Anthropic capability note — first Sonnet to do it; not a normalized score)
- GPQA Diamond: no verified public score found for this exact ID (HLE 64.5% + Index 56 are the closest reasoning proxies)
- SWE-bench Verified / SWE-Pro: no verified public score found for this exact ID (Anthropic reported Terminal-Bench 4.0 / CursorBench / FrontierCode for this generation instead)
- SciCode / Vibe Code Bench / DeepSWE / AA-SciCode: no verified public score found (SciCode is an Index component, not broken out in the launch materials)
- MRCR / RULER / GraphWalks at 1M: no verified public score found (1M window confirmed, retrieval curve not published)
- Tau2 / Tau3-Banking: no verified public score found; OSWorld 2.1 80.1% is the closest agentic-tool-use proxy
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- CritPt / LCR / MLCR / Omniscience Accuracy + Hallucination Rate: no verified public score found (Index components, not individually reported for this ID)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 70.6% (above Opus 5.5's 66.4%), OSWorld 2.1 80.1%, GDPval-AA 1844 and AA-Briefcase 1811 at flagship parity, plus effort-controlled adaptive thinking; capped below the 92–95 band because Opus 5.5 / GPT-6-class models still lead on open-ended multi-tool judgment and no tau-bench or Toolathon number exists for this ID.
- **Reasoning: 89/100.** AA Intelligence Index 56 at #3/216 against a class median of 26, HLE 64.5% with tools, GDPval-AA 1844; capped because Anthropic itself keeps Opus 5.5 (HLE 67.7%) clearly ahead for sustained judgment, and AA ran the Index on a pre-release deployment with a structured-output bug.
- **Context window: 88/100.** 1M-token window confirmed by Anthropic and Artificial Analysis — top-tier capacity at Sonnet pricing; capped below 95 because no MRCR/RULER/GraphWalks retrieval evidence at depth is published and the model is very verbose (410M Index output tokens vs 88M median), which consumes the window faster.
- **Multimodal: 68/100.** Text + image input with class-leading image work (Chartography 61.6%, first Sonnet to beat Pokémon Red from screenshots alone); capped because there is no audio, video, or PDF input and no image/audio output — image-only multimodality, far above the 15 text-only floor.
- **Coding: 90/100.** Terminal-Bench 4.0 70.6%, CursorBench 4.0 55.5%, FrontierCode 1.1 Main 52.1% at Xhigh — the strongest agentic-coding trio published for a Sonnet and above Opus 5.5 on Terminal-Bench; capped by Anthropic's own caveat that open-ended, judgment-heavy engineering still favors Opus 5.5, and by the Max-effort regression (46.2%) on merge-strict FrontierCode.
- **Cost efficiency: 72/100.** $2/$10 per 1M with $0.20 cache reads, ~30% lower measured cost per task than Sonnet 5 and 138.7 tok/s; capped because there is no Zen Free ID ($0 would be 100) and AA prices it at $7.60 per Intelligence-Index task (#98/216) with heavy verbosity.
- **Overall Score: 85/100.** (90 + 89 + 88 + 68 + 90) / 5 = 85.0 — best fit as the default high-volume agentic coding and knowledge-work model when Opus-class judgment is not required.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (Anthropic launch post "Introducing Claude Sonnet 5.5", Artificial Analysis model page, Cognition FrontierCode blog, OpenRouter / PricePerToken / Google Cloud listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
