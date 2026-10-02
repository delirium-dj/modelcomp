# GPT-5.4 Mini — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's Mar 17, 2026 compact pair to GPT-5.4 — designed for subagents, coding assistants, and computer-use at 70% cheaper than the full model.
- **Provider / access:** OpenAI API, Codex, ChatGPT; `gpt-5.4-mini` at $0.75/$4.50.
- **Release / knowledge:** 2026-03-17 (12 days after GPT-5.4); knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens; 128K max output.
- **Modalities:** Text + image in; text out; reasoning none/low/medium/high/xhigh.
- **Pricing (as of 2026-10-02):** $0.75/M in, $0.075/M cached, $4.50/M out; Batch 50% off.
- **Architecture:** Proprietary compact GPT-5.4 slice.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.1%** (vs GPT-5.4 75.0%) — close to full model at ~1/3 price
- Toolathlon: **42.9%** (vs 54.6% full); Tool Search feature-supported under the mini tool surface
- τ²-Bench Telecom: **83.3%** (AA xhigh); AA Agentic Index xhigh: 17.9

Reasoning / knowledge:

- GPQA Diamond: **87.5–88.0%** (OpenAI/AA xhigh)
- HLE: **28.1%** (AA xhigh); with tools 41.5% at OpenAI chart; IFBench: 73.3%; AA-LCR: 77.0%
- AA Intelligence Index: **24.1** at xhigh

Coding:

- SWE-Bench Pro (Public): **54.4%** (vs full 57.7%); SWE-bench Verified ~73% (aggregator)
- Terminal-Bench 2.0: **60.0%** (vs full 75.1%); Terminal-Bench 2.1 not published for this ID; Terminal-Bench Hard (AA): 52.3%
- HumanEval-class numbers not separately published for the mini tier.

Long context: 400K window; no published full-window MRCR row.

### Normalized scores (1–100)

- **Tool use: 76/100.** OSWorld 72.1% and τ²-Telecom 83.3% are near-parent; Agentic Index 17.9 trails.
- **Reasoning: 74/100.** GPQA 88% and HLE-w/tools 41.5% are mini-tier best at the price; AA Index 24.1 tracks mid-tier.
- **Context window: 70/100.** 400K window, below the 1M of GPT-5.4/5.5/6 family flagships.
- **Multimodal: 65/100.** Text + image in; full tool surface including computer use/tool search.
- **Coding: 74/100.** SWE-Bench Pro 54.4% and Terminal-Bench 2.0 60% carry the coding lead inside the mini tier.
- **Cost efficiency: 88/100.** $0.75/$4.50 with 90% cache discount; output-token cost is ~1/3 of GPT-5.4, 6x cheaper than Opus 5.5.
- **Overall Score: 71.8/100.** Mean of the five quality dims; best fit as the subagent coding loop and computer-use dispatcher; escalate only when GPT-5.4-class depth is required.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, AA table via OpenRouter, ominigate, opentools, decoder.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
