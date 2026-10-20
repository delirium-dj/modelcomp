# Claude Sonnet 3.7 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude Sonnet 3.7), `claude-3-7-sonnet-20250219`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's February 2025 hybrid-reasoning Sonnet — the first Claude with user-visible extended thinking and a controllable token budget, and the model that set the SWE-bench bar at launch. It is fully **retired** from the Claude API (deprecated 2025-10-28, retired 2026-02-19) and survives only as a third-party gateway entry. **Access note:** the folder's `opencode/claude-sonnet-3.7` id never existed on OpenCode Zen; Anthropic's own id is `claude-3-7-sonnet`.
- **Provider / access:** Anthropic Messages API (`claude-3-7-sonnet-20250219`, `claude-3-7-sonnet-latest`) — now sunset; third-party gateways still list it (models.dev: `anthropic/claude-sonnet-3.7` on Poe and similar at $2.60/$13).
- **Release / knowledge:** **2025-02-24** (Anthropic launch post). Knowledge cutoff **2024-10-01** (AA).
- **IDs:** `claude-3-7-sonnet-20250219`, `claude-3-7-sonnet-latest` (Anthropic); `anthropic/claude-sonnet-3.7` (third-party gateways). No OpenCode Zen id.
- **Context window:** **200,000** tokens (models.dev, AA). Max output: the launch post states **128K** tokens; models.dev lists 64,000 for the dated id and 128,000 for `-latest` — conflict noted.
- **Modalities:** text and image input, text output; extended thinking with a user-set token budget; tool use and structured outputs; the first model with a publicly controllable reasoning budget.
- **Pricing (as of 2026-10-20):** **$3/M input, $15/M output** (thinking tokens billed as output), cache read **$0.30/M**, cache write **$3.75/M**. Anthropic's live pricing table no longer lists the model.
- **Architecture:** proprietary.

### Raw benchmarks found

> The launch post publishes most tables as images; only text-stated figures are listed. Artificial Analysis supplies the machine-readable Terminal-Bench and composite numbers.

Reasoning / knowledge:

- GPQA Diamond: **77.17%** (AA, thinking) vs **65.56%** (non-reasoning) · HLE: **9.67%** (AA thinking) vs **4.16%** (non-reasoning)
- Artificial Analysis Intelligence Index: **17.71** (thinking) vs **15.27** (non-reasoning)
- AIME 2025: **56.33%** (AA thinking) vs **21%** (non-reasoning) · LiveCodeBench: **47.30%** (AA thinking)
- MMMU-Pro: **60.06%** (AA non-reasoning) · Tau2-bench: **54.68%** (AA thinking) vs **50%** (non-reasoning)

Agent / tool use:

- Tau-bench (Telecom/Media): described by Anthropic as state-of-the-art, published as a chart image — no verified numeric score
- Terminal-Bench Hard: **21.21%** (AA) · Terminal-Bench 2.1: no verified public score found
- GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found

Coding:

- SWE-bench Verified: **63.7%** (Anthropic, n=489 solvable subset, no scaffold) and **70.3%** at high compute on that subset — the widely quoted "~61.0%" figure could not be verified in any machine-readable source
- Terminal-Bench Hard: 21.21% (AA) · SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER retrieval measurement published for Claude Sonnet 3.7.

### Normalized scores (1–100)

- **Tool use: 48/100.** τ²-bench 54.7% and Anthropic's state-of-the-art τ-bench claim are the only tool evidence, and Terminal-Bench Hard is just 21.2%; no GDPval, OSWorld or MCP-Atlas figure exists, so the score sits at the low end of the mid band.
- **Reasoning: 58/100.** GPQA 77.2% (thinking), AIME 2025 56.3% and MMLU-class results are mid-band, but HLE 9.7%, an AA Intelligence Index of 17.7 and the large gap between thinking (77.2%) and non-reasoning (65.6%) runs show a model that needs its thinking budget to deliver.
- **Context window: 70/100.** 200,000 tokens is the 200K–500K tier (200K = 70); no long-context retrieval measurement is published, so the tier midpoint stands.
- **Multimodal: 65/100.** Text and image input with text output (MMMU-Pro 60.1%) — the "+image in" band, no audio or video.
- **Coding: 60/100.** SWE-bench Verified 63.7% (70.3% high compute) and LiveCodeBench 47.3% are mid-band for a 2025 frontier model, capped by Terminal-Bench Hard 21.2% and no SWE-bench Pro or DeepSWE data.
- **Cost efficiency: 60/100.** $3/M in and $15/M out sits in the premium tier band (≈$3/$15 → ~60), with a $0.30/M cache read as partial compensation.
- **Overall Score: 60/100.** Mean of the five quality dims = (48 + 58 + 70 + 65 + 60) / 5 = 60.2 → **60**. Best fit: historical reference — Anthropic's own deprecation path points to Sonnet 5.5, and third-party gateways still serving 3.7 should be treated as a fallback, not a recommendation.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Anthropic launch post, pricing and model-deprecation docs, Artificial Analysis, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.
