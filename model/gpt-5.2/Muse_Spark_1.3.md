# GPT-5.2 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.2 (`gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's Dec 2025 flagship (Instant / Thinking / Pro): SOTA on SWE-Bench Pro 55.6%, GPQA 92.4%, AIME 100%, and GDPval knowledge-work win-rate 70.9%; adds Responses `/compact` context extension for long tool-heavy runs.
- **Provider / access:** OpenAI API (`gpt-5.2` / `gpt-5.2-chat-latest`, Thinking + Instant + Pro; Responses + Chat Completions APIs). OpenCode Zen `opencode/gpt-5.2`.
- **Release / knowledge:** Released 2025-12-11 (OpenAI "Introducing GPT-5.2" post + system-card update). Knowledge cutoff not published in fetched sources — no verified cutoff found.
- **IDs:** `gpt-5.2` (OpenAI API); `opencode/gpt-5.2` (Zen catalogue / meta.json)
- **Context window:** 400,000 total (128,000 max output per llmboard version table) — verified via OpenAI post (API availability) and llmboard.ai 400K/128K version row; Responses `/compact` extends effective window for tool-heavy workflows
- **Modalities:** Text and image in (CharXiv figure reasoning, MMMLU multilingual multimodal); text out; reasoning yes (Thinking/Instant/Pro effort tiers); tool calls yes (Python, search, computer-use fees per tool call)
- **Pricing (as of 2026-10-01):** $1.75 per 1M input / $14.00 per 1M output; cached input $0.175 (90% off); Pro tier $21/$168 (OpenAI post pricing table). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary (undisclosed parameters; unified fast + thinking system with parallel test-time scaling in Pro)

### Raw benchmarks found

Agent / tool use:

- GDPval knowledge-work (wins or ties): **70.9%** Thinking, **71.1%** Pro (OpenAI GPT-5.2 post table; vs 38.8% GPT-5 baseline; clear-wins slice 49.8% Thinking)
- SWE-Bench Pro (public, 4-language): **55.6%** Thinking SOTA (OpenAI post; vs 50.8% GPT-5.1; evals.report official 29.94% is a different resolved-% slice — noted, not scored)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** Thinking, **93.2%** Pro (OpenAI post; vs 88.1% GPT-5.1; evals.report official 91.4% alongside — same band)
- HLE: **34.5%** no-tools / **45.5%** with search+Python Thinking (OpenAI post; Pro 36.6%/50.0%; vs 25.7%/42.7% GPT-5.1)
- AIME 2025 (no tools): **100.0%** Thinking and Pro (OpenAI post; vs 94.0% GPT-5.1)
- ARC-AGI-1 / ARC-AGI-2 (Verified): **86.2% / 52.9%** Thinking (OpenAI post; vs 72.8%/17.6% GPT-5.1)
- FrontierMath Tier 1-3 / Tier 4 (with Python): **40.3% / 14.6%** Thinking (OpenAI post; vs 31.0%/12.5% GPT-5.1)
- Artificial Analysis Intelligence Index: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.0%** Thinking (OpenAI post new high; vs 76.3% GPT-5.1; llmboard 80.0% rank 15/116 87.83rd pct confirms; evals.report official 73.8% is a different resolved slice — noted)
- SWE-Lancer IC Diamond: **74.6%** Thinking (OpenAI post; vs 69.7% GPT-5.1; llmboard 74.6% rank 3/6 confirms)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- OpenAI MRCRv2 8-needle: **98.2%** 4-8K / **89.3%** 8-16K / **95.3%** 16-32K / **92.0%** 32-64K / **85.6%** 64-128K / **77.0%** 128-256K Thinking (OpenAI post table; vs 65.3% down to 29.6% GPT-5.1 — large retention gain)
- Graphwalks: **94.0%** bfs / **89.0%** parents <128K Thinking (OpenAI post; vs 76.8%/71.5% GPT-5.1)
- BrowseComp Long Context: **92.0%** 128K / **89.8%** 256K Thinking (OpenAI post; vs 90.0%/89.5% GPT-5.1)

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 70.9% win-rate (near-double the GPT-5 baseline) plus SWE-Bench Pro 55.6% SOTA show elite knowledge-work and multi-language agency; capped by missing Terminal-Bench/Tau/Claw/MCP harnesses.
- **Reasoning: 92/100.** GPQA 92.4% (Pro 93.2%) clears the 90%+ frontier line with HLE 45.5% (tools), AIME 100%, ARC-AGI-2 52.9% (3x prior), and FrontierMath 40.3%; capped only by missing LCR/CritPt/Index/Omniscience.
- **Context window: 84/100.** 400K ceiling at the top of the 200K-500K tier with exceptional measured retention (MRCRv2 98.2% down to 77.0% at 256K, Graphwalks 94%/89%); capped below the 500K+ band on window size alone.
- **Multimodal: 80/100.** CharXiv Reasoning 88.7% with Python and MMMLU 89.6% show strong figure/multilingual vision-language; text+image in only — no video/audio in or non-text out found.
- **Coding: 90/100.** SWE-bench Verified 80.0% plus SWE-Bench Pro 55.6% SOTA and SWE-Lancer 74.6% show flagship real-world engineering across four languages; capped by missing LiveCode/SciCode/Vibe/DeepSWE.
- **Cost efficiency: 60/100.** $1.75/$14.00 per 1M lands at the ~$3/$15 = ~60 tier on output weight (90% cache discount softens); OpenAI notes better cost-per-success via token efficiency, still dearer per token than 5.1.
- **Overall Score: 85/100.** Mean of the five quality dims (78+92+84+80+90)/5 = 84.8; best fit as Dec-2025 flagship for science + long-horizon engineering; Pro for max-reasoning spend.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.2" post 2025-12-11 with full Thinking-vs-5.1 tables, GPT-5.2 system-card update, llmboard.ai version/pricing/benchmark rows, theresanaiforthat.com Thinking profile, evals.report 47-score table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
