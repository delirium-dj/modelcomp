# Claude Sonnet 4.6 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-4-6`, proprietary, paid — free on claude.ai Free/Pro plans as chat default, not as an API free tier)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic)
- **Short description:** Anthropic's Feb-2026 mid-tier flagship — billed as its "most capable Sonnet model yet", a full upgrade across coding, computer use, long-context reasoning, agent planning, knowledge work and design. It became the default model on claude.ai and Claude Cowork for Free and Pro plans, and early-access developers preferred it over Sonnet 4.5 "by a wide margin" and often over Nov-2025's Opus 4.5. Now deprecated by Anthropic's line-up: Artificial Analysis recommends Claude Sonnet 5 instead. The 2026-10-05 enrichment pass filled the OSWorld/Terminal-Bench/HLE gaps from the Sonnet 4.6 System Card.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`, Anthropic Messages/Chat Completions), 4 API providers per AA; also default chat model on claude.ai Free/Pro plans. No API free tier; no Free ID on OpenCode-style gateways found.
- **Release / knowledge:** 2026-02-17 (Anthropic "Introducing Claude Sonnet 4.6"); knowledge cutoff not stated on fetched pages — not verified.
- **IDs:** `claude-sonnet-4-6` (Anthropic API naming; AA slug `claude-sonnet-4-6`). **No Free ID** — API access is paid.
- **Context window:** 1,000,000 tokens **in beta** (announcement: "features a 1M token context window in beta"; AA spec: 1M, ~1500 A4 pages). The Opus 4.6 GA version of the 1M window is the GA sibling; Sonnet's beta status is the differentiator.
- **Modalities:** text + image input, text output (AA spec); reasoning variant exists — AA shows the non-reasoning High-Effort page and notes "a reasoning variant may also exist"; Anthropic's benchmark footnotes reference thinking budgets (120k), adaptive thinking and max reasoning effort for the thinking configuration. No audio/video in or out.
- **Pricing (as of 2026-09-17):** $3.00 / $15.00 per 1M in/out — unchanged from Sonnet 4.5 (announcement); AA blended $2.31/1M (7:2:1 cache ratio) with a 90% prompt-cache discount.
- **Architecture:** proprietary, closed weights; parameters undisclosed (AA FAQ).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5%** (Anthropic Claude Sonnet 4.6 System Card, Feb 2026, corroborated by caylent.com and codingfleet.com production coverage) — fills the gap the 2026-09-17 pass marked "no verified public score found"; ≈ Opus 4.6's 72.7
- Terminal-Bench 2.0: **59.1%** (max effort, no thinking — same System Card, Figure 2.3.A; corroborated by eweek.com and codingfleet.com) — fills the marked TB gap
- Prompt-injection resistance: "a major improvement compared to its predecessor, Sonnet 4.5, and performs similarly to Opus 4.6" (announcement)
- SWE-bench Pro / Tau3 / Tau2 / GDPval-AA / MCP-Atlas / Claw-Eval: no verified public score found for 4.6
- AA Intelligence Index v4.3 (includes AutomationBench-AA, Terminal-Bench 4.0, GDPval-AA v2, AA-Briefcase components): composite **25** (#5/62 in the non-reasoning class, median 15) — flagged by AA as an **estimate** ("independent evaluation forthcoming")

Reasoning / knowledge:

- ARC-AGI-2: **60.4%** at high effort (120k thinking budget; max-effort score is higher per Anthropic's footnote) (announcement)
- HLE: **34.6%** no-tools / **46.8%** with-tools (restated in Anthropic's Sonnet 5 launch post, anthropic.com, 2026-06-30) — fills the marked HLE gap
- BrowseComp: run with tools per footnote — value not extractable; no verified public score found
- Artificial Analysis Intelligence Index: **25** (#5/62 non-reasoning; median 15) — estimate pending independent eval (AA)
- GPQA Diamond / CritPt / MMLU-Pro / Omniscience (4.6-specific): no verified public score found

Coding:

- SWE-bench Verified: **80.2%** — Anthropic's score averaged over 10 trials, reached "with a prompt modification" (announcement footnote); essentially at parity with Sonnet 5's 80.4% (prompt20 row)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE (4.6): no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for 4.6 (1M beta window confirmed by announcement + AA; long-context reasoning listed as an upgrade area qualitatively)

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld-Verified 72.5% ≈ Opus 4.6's 72.7 and TB2.0 59.1% are now measured rather than qualitative, confirming the "human-level computer use" positioning; missing Tau2/GDPval rows keep it under 95.
- **Reasoning: 85/100.** ARC-AGI-2 60.4% at high effort plus a citable HLE pair (34.6 no-tools / 46.8 with-tools) replace the old evidence dock; the AA composite remains a self-flagged estimate, capping the score below the 90s.
- **Context window: 95/100.** 1M tokens — same headline window as Opus 4.6 but in **beta**, and no AA-LCR-class retrieval evidence was found; a point off the GA-verified 1M tier.
- **Multimodal: 85/100.** Text + image in, text out; no audio/video.
- **Coding: 87/100.** SWE-bench Verified 80.2% (10-trial average, with a prompt modification) — mid-frontier, at parity with its own successor Sonnet 5 (80.4%) and far from Fable 5's 95.0%; instruction-following/consistency gains are qualitative.
- **Cost efficiency: 40/100.** $3/$15 — 60% of Opus 4.6's price point, still ~4–10× the paid open-model tier ($0.30–$1.40 in) in this repo; 90% cache discount (blended $2.31) helps. Paid API; the "Free plan" access is chat-product usage, not an API free tier.
- **Overall Score: 88.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (90 + 85 + 95 + 85 + 87) / 5 = 442/5 = 88.4. Best fit: the value play of the 4.6 generation — Opus-class agentic/computer-use behavior (now measured) at Sonnet pricing; superseded by Sonnet 5, so pick it for existing 4.6-pinned stacks or cheaper 1M-beta needs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-17 pass: Anthropic's "Introducing Claude Sonnet 4.6" announcement incl. benchmark footnotes, Artificial Analysis model page, prompt20 code leaderboard; 2026-10-05 approved enrichment pass: Anthropic Sonnet 4.6 System Card (OSWorld-Verified 72.5, TB2.0 59.1) via anthropic.com PDF with caylent/eweek/codingfleet corroboration, HLE pair via the Sonnet 5 launch post 2026-06-30); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
