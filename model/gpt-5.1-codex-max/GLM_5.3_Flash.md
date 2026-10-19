# GPT-5.1-Codex-Max — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's frontier agentic coding model (released November 19, 2025), built on an updated GPT-5.1 reasoning base and purpose-built for long-running software engineering work. Its headline capability is native "compaction" — operating coherently across multiple context windows (millions of tokens, 24h+ agent sessions) for project-scale refactors and multi-hour agent loops.
- **Provider / access:** OpenAI API, model ID `gpt-5.1-codex-max` (Responses API only — Chat Completions not supported). Also available in Codex surfaces (CLI, IDE extension, cloud, code review) on ChatGPT Plus/Pro/Business/Edu/Enterprise. At launch it was Codex-only with "API access coming soon"; the Responses API route is now live per the official model docs.
- **Release / knowledge:** 2025-11-19 (OpenAI announcement); knowledge cutoff Sep 30, 2024 (official docs).
- **IDs:** `openai/gpt-5.1-codex-max` (no Free ID exists on OpenCode Zen — proprietary OpenAI endpoint only).
- **Context window:** 400,000 total tokens; 128,000 max output tokens (official OpenAI model docs). Compaction effectively extends usable work beyond a single window.
- **Modalities:** text + image input; text output; reasoning (with new "Extra High"/`xhigh` effort tier); function calling; structured outputs; web_search tool; prompt caching; PDF not documented as a first-class input on the API page. Audio/video: no.
- **Pricing (as of 2026-10-19):** $1.25 / $10 per 1M input / output tokens; cached input $0.125 per 1M (official docs). Not free; subscription access via ChatGPT plans bundled with Codex.
- **Architecture:** proprietary; a GPT-5.1-family reasoning model trained on agentic tasks across software engineering, math, and research; first OpenAI model trained to operate in Windows environments and the first trained for multi-window compaction.

### Raw benchmarks found

Numbers below are OpenAI's own reported evals (announcement appendix, run with compaction enabled at Extra High reasoning effort; Terminal-Bench 2.0 run with Codex CLI in the Laude Institute Harbor harness). Independent leaderboards (Artificial Analysis coding-agents suite, swebench.com) measure newer models and did not surface a directly comparable independently-harvested row for this exact ID at research time; conflicting older third-party numbers were not found — OpenAI's figures stand unchallenged but are vendor-reported.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI, xhigh + compaction, Codex CLI/Harbor harness; vs 52.8% for GPT-5.1-Codex high)
- SWE-Lancer IC SWE: **79.9%** (OpenAI, xhigh; vs 66.3% for GPT-5.1-Codex high)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this exact model
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: appears on artificialanalysis.ai leaderboards but no per-model value was extractable from the site's rendered pages at research time — no verified number found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified (n=500): **77.9%** (OpenAI, xhigh + compaction; vs 73.7% for GPT-5.1-Codex high)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified per-model number found (AA Coding Agent Index pages are JS-rendered)

Long context:

- 400k window; OpenAI reports coherent work "over millions of tokens in a single task" via automatic compaction (internal compaction demos, 24h+ sessions) — no public MRCR/RULER/GraphWalks retrieval score found, so retrieval quality inside long horizons is unmeasured publicly.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 at 58.1% (vendor harness) plus first-class function calling/structured outputs and agentic-native training in the Codex harness; capped by lack of independently verified tool-use scores and by its coding-only positioning (recommended by OpenAI only for agentic coding tasks).
- **Reasoning: 70/100.** Gains over GPT-5.1-Codex on long-horizon work plus the new xhigh effort tier indicate strong sustained reasoning, but zero verified public GPQA/HLE/general-reasoning scores and a Sep 2024 knowledge cutoff cap the score.
- **Context window: 85/100.** 400k tokens native (top tier among OpenAI models) plus compaction that practically extends across millions of tokens; capped because public long-context *retrieval* benchmarks are absent.
- **Multimodal: 45/100.** Image + text input, text output only; no image/audio generation and no verified multimodal benchmark scores.
- **Coding: 84/100.** SWE-bench Verified 77.9% (xhigh) and SWE-Lancer IC SWE 79.9% — near-frontier coding performance with 30% fewer thinking tokens than GPT-5.1-Codex at equal effort; capped by vendor-reported-only numbers and slightly behind the newest frontier coding releases.
- **Cost efficiency: 68/100.** $1.25/$10 per 1M tokens is mid-priced for a coding-flagship (identical to GPT-5-Codex), and the documented 30% thinking-token efficiency gain plus cached-input $0.125 help, but the $10 output rate and agentic token appetite keep this mid-tier.
- **Overall Score: 72/100.** Mean of the five non-cost dims (78+70+85+45+84)/5 = 72.4 → 72. Best fit: long-running agentic coding — multi-hour refactors, deep debugging, and project-scale Codex workflows — rather than general chat or knowledge-heavy reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-19
- Method: public internet research — OpenAI announcement and official API model docs (primary), plus cross-checks on independent leaderboard/aggregator sites (Artificial Analysis, swebench.com) and Bing/DDG web searches; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
