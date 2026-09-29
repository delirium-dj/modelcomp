# Claude Sonnet 5.5 — findings by Qwen 3.8 27B

- Source: Anthropic/claude-sonnet-5.5
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier (Sonnet-class) model, released 2026-09-28 as the second member of the Claude 5.5 family; built for well-scoped everyday coding, agentic terminal work, and knowledge tasks at Sonnet 5's price.
- **Provider / access:** Anthropic Messages API (model ID `claude-sonnet-5-5`; not Chat Completions), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud, Microsoft Foundry; OpenCode Zen `anthropic/claude-sonnet-5.5`.
- **Release / knowledge:** released 2026-09-28; knowledge cutoff June 2026 (platform docs / launch coverage).
- **IDs:** `anthropic/claude-sonnet-5.5` (no Free ID on Zen).
- **Context window:** 1M tokens total, no long-context premium; max output 128K (300K via Batches API beta `output-300k-2026-03-24`) — per Anthropic platform docs and OpenRouter model page.
- **Modalities:** text/image in; text out; reasoning yes (adaptive thinking, on by default, cannot be disabled); tool calls (forced `tool_choice` removed in 5.5); JSON/structured outputs (pre-release bug fixed at launch).
- **Pricing (as of 2026-09-28):** $2.00 in / $10.00 out per 1M; cache write $2.50 (5-min) / $4.00 (1-hr), cache read $0.20; batch 50% off ($1/$5). Paid — no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Anthropic launch table, max effort): **70.6%** (Sonnet 5: 10.3%, Opus 5.5: 66.4%, GPT-6 Sol: n/a)
- Terminal-Bench 4.0 (Artificial Analysis run, max effort): **64%** — ahead of Opus 5.5 and GPT-6 Astra at 60%
- AA-Briefcase v1.1: **Elo 1811** (Opus 5.5: 1822; GPT-6 Sol: 1483)
- GDPval-AA v2.1: **Elo 1844** (Opus 5.5: 1846; GPT-6 Sol: 1487)
- AutomationBench-AA headline: **71%** (Opus 5.5: 70%); system-card AutomationBench harness: 44.7% vs Opus 5.5 42.5%
- OSWorld 2.1 (partial credit): **80.1%** (Sonnet 5: 57.0%, Opus 5.5: 81.8%)
- CursorBench 4.0: **55.5%** at max effort (39.2% medium → 53.1% xhigh; Opus 5.5: 57.8%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (tools): **64.5%** (Sonnet 5: 54.9%, Opus 5.5: 67.7%)
- AA-Omniscience: **54%** factual accuracy, **47%** hallucination rate (Opus 5.5: 66% / 59%)
- Chartography (no tools): **61.6%** (Opus 5.5: 64.4%, GPT-6 Sol: 53.6%)
- Artificial Analysis Intelligence Index: **56 / #2** at max effort (Opus 5.5 (max): 58; +18 pts over Sonnet 5)
- GPQA Diamond / CritPt / MRCR: no verified public score found

Coding:

- SWE-Bench Pro: **81.3%** (Sonnet 5: 63.2%, Opus 5.5: 89.9%)
- SWE-Bench Multilingual: **90.3%**
- FrontierSWE v2: **61.9%** (Opus 5.5: 62.3%, GPT-6 Astra: 65.5%)
- FrontierCode 1.1 (Main): **52.1% xhigh / 46.2% max** (Opus 5.5: 54.4%, GPT-6 Sol: 49.3%)
- Terminal-Bench-Science: **53%** (behind only GPT-6 Astra and Opus 5.5)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1M window; no MRCR/RULER value published as of 2026-09-29)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 70.6% vendor / 64% AA (beats Opus 5.5 on TB4.0) plus GDPval-AA 1844 and AA-Briefcase 1811 — frontier-grade agentic results; held just under the 90–100 band top because Tau3 is unverified and token use per task is the heaviest measured (~193k out/tok at max, $7.60/task).
- **Reasoning: 88/100.** HLE (tools) 64.5% and AA Index #2 (56, 2 pts behind Opus 5.5) put it at the top of the class; capped below Opus by the 12-pt gap on AA-Omniscience factual accuracy (54% vs 66%).
- **Context window: 95/100.** 1M-token window with no long-context premium (≥1M tier = 95–100); no public retrieval-at-length number found, so the band floor is applied.
- **Multimodal: 65/100.** Text + image input, text output only (no audio/video/PDF input reported) — mid of the image-in tier.
- **Coding: 88/100.** SWE-Bench Pro 81.3% and Multilingual 90.3% are near-frontier (just behind Opus 5.5's 89.9%), but FrontierCode at 52.1%/46.2% trails Opus 5.5 and GPT-6 Astra on FrontierSWE caps it.
- **Cost efficiency: 78/100.** $2/$10 per 1M is competitive (half of Opus 5.5) with 50% batch discount, but AA measured $7.60 per Intelligence-Index task at max effort (~50% more than Sonnet 5) due to heavy token use; medium effort restores the cost edge.
- **Overall Score: 85/100.** (90 + 88 + 95 + 65 + 88) / 5 = 85.2 → 85; best fit: the default Sonnet for well-scoped agentic coding and knowledge work at launch-day prices, run at medium/high effort.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Anthropic launch coverage via Artificial Analysis article 2026-09-28, ComputingForGeeks launch-day testing 2026-09-28, OpenRouter model page, platform docs links cited therein); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
