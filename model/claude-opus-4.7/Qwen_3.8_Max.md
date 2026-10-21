# Claude Opus 4.7 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April-2026 flagship and, at release, the most capable **generally available** Claude (the restricted Claude Mythos Preview remained broadly ahead). A focused upgrade over Opus 4.6 rather than a leaderboard sweep — the headline gains are in production coding (SWE-bench Pro +10.9), best-in-class tool orchestration (MCP-Atlas), computer use, and a 3x-resolution vision jump; the one clear regression is agentic web search (BrowseComp −4.4). First Opus to ship Anthropic's production cybersecurity safeguards.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; across Claude plans.
- **Release / knowledge:** Released 2026-04-15/16 (GA); knowledge cutoff not published in accessible sources.
- **IDs:** `anthropic/claude-opus-4-7` (successor to Opus 4.6; superseded by Opus 4.8).
- **Context window:** Up to 1M tokens per llm-stats; Anthropic's own docs are vague ("same context window as Opus 4.6", historically 200K standard with a 1M extended/beta tier). An **updated tokenizer** maps identical input to ~1.0–1.35x more tokens, so the effective window shrinks versus prior Claudes; task budgets (public beta) help cap long runs.
- **Modalities:** text + image in → text out; reasoning yes (effort levels low…high, **new `xhigh`** between high and max, then max; Claude Code defaults to `xhigh`); tool calls yes (best-in-class multi-tool orchestration; `/ultrareview` in Claude Code; Auto mode extended to Max users).
- **Pricing (as of 2026-10-21):** $5 input / $25 output per 1M tokens — unchanged from Opus 4.6, but the tokenizer inflation (~1.0–1.35x) and heavier thinking at high effort raise real spend-per-task.
- **Architecture:** Undisclosed proprietary; vision accepts images up to 2,576 px on the long edge (~3.75 MP), **>3x** the resolution of prior Claude models.

### Raw benchmarks found

Agent / tool use (Anthropic system card, vendor-run; vs GA rivals):

- MCP-Atlas (scaled multi-turn tool use): **77.3%** — **best-in-class**, ahead of Opus 4.6 (75.8%), Gemini 3.1 Pro (73.9%), GPT-5.4 (68.1%)
- OSWorld-Verified (computer use): **78.0%** — leads GA models (Opus 4.6 72.7%, GPT-5.4 75.0%), within 1.6 pts of Mythos Preview (79.6%)
- Finance Agent v1.1: **64.4%** — leads (GPT-5.4 Pro 61.5%, Opus 4.6 60.1%, Gemini 3.1 Pro 59.7%); Anthropic also claims SOTA on GDPval-AA
- BrowseComp (agentic search): **79.3%** — the one **regression** (Opus 4.6 83.7%; trails GPT-5.4 Pro 89.3%, Gemini 3.1 Pro 85.9%, Mythos 86.9%)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** — frontier cluster (Gemini 3.1 Pro 94.3%, GPT-5.4 Pro 94.4%, Mythos 94.6%; up from Opus 4.6's 91.3%); benchmark near saturation
- Humanity's Last Exam: **46.9%** no-tools / **54.7%** with tools — up from Opus 4.6 (40.0/53.3), beats Gemini 3.1 Pro no-tools (44.4) and with-tools (51.4); below Mythos Preview (56.8/64.7) and GPT-5.4 Pro with-tools (58.7)
- MMMLU (multilingual Q&A): **91.5%** — up slightly from Opus 4.6 (91.1%); Gemini 3.1 Pro leads (92.6%)

Coding:

- SWE-bench Verified: **87.6%** — leads GA models (+6.8 over Opus 4.6's 80.8%; Gemini 3.1 Pro 80.6%); only Mythos Preview higher (93.9%)
- SWE-bench Pro (multi-language): **64.3%** — leads GA (+10.9 over Opus 4.6's 53.4%; GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%); Mythos 77.8%
- Terminal-Bench 2.0: **69.4%** — +4 over Opus 4.6 (65.4%), edges Gemini 3.1 Pro (68.5%); below GPT-5.4 (75.1%, self-reported harness) and Mythos (82.0%)
- Partner evals: Cursor +12 pts on CursorBench (58→70%); Warp passed Terminal-Bench tasks prior Claudes failed

Multimodal:

- CharXiv Reasoning (scientific figures): **82.1%** no-tools / **91.0%** with tools — the **largest single-benchmark jump** in the table (+13 over Opus 4.6's 69.1); one partner's pen-test visual acuity went 54.5%→98.5%
- Driven by the 3x vision-resolution increase (2,576 px / ~3.75 MP); text + image only (no native video/audio)

Long context:

- Up to 1M tokens (disputed — see Model card); no MRCR / needle retrieval score published. Tokenizer inflation and heavier high-effort reasoning erode the practical window; task budgets (beta) mitigate spend.

> Provenance: benchmark figures are from **Anthropic's official system card** (vendor-run), compiled by Vellum (2026-04-16) and llm-stats. Claude Mythos Preview — a separate, more restricted model — leads Opus 4.7 on most rows (SWE-bench Pro 77.8, Verified 93.9, Terminal-Bench 82.0, GPQA 94.6, HLE w/tools 64.7), so Opus 4.7 is scored here as the top **GA** Claude of its generation, not the absolute frontier. The context window is genuinely ambiguous across sources (llm-stats "1M"; Vellum "same as Opus 4.6"); treated conservatively. A cross-article discrepancy exists on MCP-Atlas (77.3% here from the Opus-4.7-specific system-card table vs 79.1% in Vellum's later GPT-5.5 comparison); the dedicated 4.7 figure is used. BrowseComp regression and tokenizer inflation are documented downsides.

### Normalized scores (1–100)

- **Tool use: 90/100.** Best-in-class MCP-Atlas (77.3%) leads every GA model, OSWorld-Verified (78.0%) tops GA computer use and nears Mythos, and Finance Agent v1.1 (64.4%) leads — the strongest tool-orchestration profile of its generation; held back from the mid-90s only by the BrowseComp regression (79.3) and by Mythos Preview still leading.
- **Reasoning: 89/100.** GPQA Diamond 94.2% sits in the saturated frontier cluster and HLE improved to 46.9/54.7 (beating Gemini 3.1 Pro); capped because it is "strong but not dominant" — Mythos Preview (56.8/64.7) and GPT-5.4 Pro with-tools (58.7) remain clearly ahead on the hardest knowledge work.
- **Context window: 87/100.** Up to 1M tokens (llm-stats) with task budgets for long runs, but the figure is source-ambiguous (Anthropic says "same as Opus 4.6") and the new tokenizer inflates identical input by ~1.0–1.35x, shrinking the effective window; no published retrieval benchmark.
- **Multimodal: 83/100.** A genuine capability unlock — CharXiv 82.1/91.0 (the table's largest +13 jump) on 3x-higher-resolution (~3.75 MP) vision, plus strong computer-use screenshot reading; capped because Claude is text+image only (no native video/audio) and MMMLU (91.5%) trails Gemini 3.1 Pro.
- **Coding: 89/100.** The clear headline — SWE-bench Verified 87.6% and SWE-bench Pro 64.3% both lead all GA models (with big +6.8 / +10.9 generational gains) and partners confirmed real-world resolution; held below 90 because Terminal-Bench 2.0 (69.4%) trails GPT-5.4/Mythos and Mythos Preview leads every coding row.
- **Cost efficiency: 62/100.** Premium frontier pricing ($5/$25, unchanged from Opus 4.6) that is now compounded by a tokenizer mapping the same input to ~1.0–1.35x more tokens plus heavier high-effort reasoning — real spend-per-task rises even though the sticker did not; cheaper than Fable 5 ($10/$50) and far cheaper than GPT-5.5 Pro, but a poor fit for token-constrained workloads.
- **Overall Score: 88/100.** Mean of Tool 90 + Reasoning 89 + Context 87 + Multimodal 83 + Coding 89 = 87.6 → 88. Best fit: production coding agents, multi-tool orchestration, computer-use automation and agentic financial/knowledge work where best-in-class tool use and a large SWE-bench gain matter most and the price is acceptable; research-heavy web-browsing agents should weigh the BrowseComp regression (GPT-5.4 Pro / Gemini 3.1 Pro lead there), and the absolute hardest tasks still favor Claude Mythos Preview.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Anthropic's official Opus 4.7 system card via Vellum's benchmark explainer and llm-stats launch research; cross-checked against the Vellum GPT-5.5 comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
