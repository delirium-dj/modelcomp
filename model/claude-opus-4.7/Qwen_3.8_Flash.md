# Claude Opus 4.7 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-opus-4-7`), cross-checked against Artificial Analysis, llm-stats, Vellum
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's flagship reasoning and agentic coding model (Apr 2026), 1M context / 128K output, same $5/$25 price as Opus 4.6. Direct upgrade line (not a new tier); tops GDPval-AA and ties for #1 on the AA Intelligence Index.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-7`, Messages API), Amazon Bedrock, Google Vertex AI, Microsoft Foundry; also Claude App / Claude Code / Claude Cowork.
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff not announced.
- **IDs:** `anthropic/claude-opus-4-7` (gateway form), `claude-opus-4-7` (Claude API); no Free ID exists.
- **Context window:** 1,000,000 tokens input / 128,000 max output (verified via Anthropic launch post and Artificial Analysis; long prompts >200K billed at premium rate).
- **Modalities:** text + image in (images up to 2,576 px long edge, ~3.75 MP — 3.3× prior Claude resolution); text out; reasoning yes (adaptive reasoning only — extended thinking fully removed); tool calls yes; JSON mode not separately verified.
- **Architecture:** proprietary.
- **Pricing (as of 2026-10-17):** $5.00 in / $25.00 out per 1M (≤200K prompts); >200K prompts $10.00 in / $37.50 out. Updated tokenizer maps same text to ~1.0–1.35× more tokens than Opus 4.6 (cost caveat).

### Raw benchmarks found

> Numbers below triangulated across three independent write-ups: Anthropic launch
> announcement (self-reported), llm-stats launch analysis, and Artificial Analysis
> independent re-runs (Adaptive Reasoning, Max Effort). Vellum's comparison confirms
> SWE-bench Pro 64.3%.

Agent / tool use:

- GDPval-AA (**#1 overall**): **1,753 Elo** (Artificial Analysis, +79 Elo over Sonnet 4.6 / GPT-5.4 at 1,674/1,673)
- MCP-Atlas: **77.3%** (Anthropic; +14.6 pts over Opus 4.6 — largest agentic gain)
- OSWorld-Verified (computer use): **78.0%** (Anthropic; +5.3 pts)
- Terminal-Bench 2.0: **69.4%** (Anthropic; +4.0 pts); TerminalBench Hard +5.3 pts vs 4.6 (AA)
- Finance Agent: **64.4%** (Anthropic; state-of-the-art at release)
- BrowseComp: **79.3%** (Anthropic; headline regression −4.7 pts, harness-sensitive — 4.6's 84.0 came from a multi-agent harness)
- τ²-Bench: **regression of ~3.5 pts vs Opus 4.6** (Artificial Analysis independent run)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic; AA measured +1.8 pts vs 4.6)
- HLE: **54.7% with tools / 46.9% without** (Anthropic; AA +2.9 pts)
- Artificial Analysis Intelligence Index: **57** (exact 57.3; tie for #1 with Gemini 3.1 Pro 57.2 and GPT-5.4 56.8 — greatest tie in AA history)
- AA-Omniscience: **26 accuracy index / 36% hallucination rate** (AA; #2 behind Gemini 3.1 Pro, hallucination down 25 pts via more abstention — attempt rate 70%)
- MMMLU: **91.5%** (Anthropic)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic; +6.8 pts over 4.6, memorization-screen adjusted)
- SWE-bench Pro: **64.3%** (Anthropic, confirmed by Vellum; +10.9 pts — gains concentrated on harder problems)
- SciCode: **+2.6 pts vs Opus 4.6** (AA; absolute value not separately published)
- CursorBench: **70%** (Cursor partner testimonial; Opus 4.6 = 58%)
- Rakuten-SWE-Bench: **3× more production tasks resolved than Opus 4.6** (Anthropic announcement)

Long context:

- no long-context retrieval score (MRCR/RULER/GraphWalks) reported by any source at the 1M window; premium >200K pricing tier is the only published long-prompt constraint.

### Normalized scores (1–100)

- **Tool use: 92/100.** #1 on GDPval-AA by a 79-Elo margin plus MCP-Atlas 77.3 and OSWorld 78.0 cap it near the top; the τ²-Bench and BrowseComp regressions (AA-independent) keep it from 95+.
- **Reasoning: 93/100.** AA Index 57 (co-first-place overall), GPQA Diamond 94.2, HLE 54.7 and #2 Omniscience with 36% hallucination; capped by Gemini 3.1 Pro's edge on knowledge benchmarks (HLE/GPQA/IFBench per AA breakdown).
- **Context window: 90/100.** Full 1M tier with 128K output, but no verified long-context retrieval numbers and a >200K premium-rate tier plus a 1.0–1.35× token-inflating tokenizer effectively shrink usable budget.
- **Multimodal: 85/100.** Text + image only; the 3.3× resolution bump and CharXiv-R 91.0 (with tools) / 82.1 (without) are best-in-class for document/vision agents, but no audio or video input and no image output.
- **Coding: 93/100.** SWE-bench Verified 87.6, SWE-bench Pro 64.3 (leader band), Terminal-Bench 69.4 and 3× Rakuten production resolution; AA notes OpenAI still tops TerminalBench Hard and AA-LCR, capping the score.
- **Cost efficiency: 58/100.** Paid flagship at $5/$25 per 1M — same sticker as 4.6 but ~11% cheaper per AA-Index run ($4,406 vs $4,970) thanks to lower token use; still a premium price point with long-prompt surcharges.
- **Overall Score: 90.6/100.** Half-up mean of the five quality dims (92+93+90+85+93)/5 = 90.6. Best fit: long-horizon autonomous engineering and knowledge-work agentics at flagship quality, where self-verification and literal instruction following matter more than raw browsing recall.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — Anthropic launch post, llm-stats launch analysis, Artificial Analysis independent evaluation article, Vellum benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
