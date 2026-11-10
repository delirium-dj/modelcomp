# GPT-6 Luna — findings by Fledge Alpha

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's Sept 22, 2026 high-volume GPT-6 tier; old promotional rate replaced by a permanent $0.10/$0.50 rate-card with frontier-adjacent DeepSWE scores (66.6% at 93–96% cheaper per task than Opus 5/Fable 5).
- **Provider / access:** OpenAI API (`gpt-6-luna`), ChatGPT Work/Codex, Azure Foundry; Free/Go desktop app.
- **Release / knowledge:** 2026-09-22; knowledge cutoff Feb 2026.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,000,000 tokens; 128K max output; >272K input reprices to $0.20/$0.75.
- **Modalities:** Text + image in; text out; reasoning low/medium/high/xhigh/max.
- **Pricing (as of 2026-10-02):** $0.10/M in, $0.01/M cached, $0.125/M cache write, $0.50/M out; Batch/Flex 50%, Fast 2x.
- **Architecture:** Proprietary, GPT-6 family smaller tier.

### Raw benchmarks found

Agent / tool use:

- AutomationBench 1.0.6: **20.7%** max (OpenAI chart); AA-Autonomous variant: **53%** (AA)
- Agents' Last Exam: **50.9%** (OpenAI chart)
- GDPval-AA v2.1: ~75 Elo drop vs GPT-5.6 Luna; AA-Briefcase: ~45 Elo drop
- Deception rate: **2.8%** (vs Sol 1.3%, GPT-5.6 Luna 9.5%); +factual error rate 7.6%

Reasoning / knowledge:

- AA Intelligence Index: **37** (level with GPT-5.6 Luna); HLE 39.5% class (vendor chart shows 5.0-pt gap to Sol)
- AA-Omniscience hallucination rate: **77%** (down from 93% on GPT-5.6 Luna)
- GPQA Diamond: not published for this ID

Coding:

- DeepSWE v1.1: **66.6%** max (OpenAI; roughly level with Opus 5/Fable 5 at medium)
- FrontierCode v1.1: **42.4%** max; SWE-Atlas-QnA: **44%** (AA)
- AA Coding Agent Index: **41** (down 2 vs GPT-5.6 Luna's 43)
- Terminal-Bench 4.0 (AA Intelligence Index component): **13%**

Long context: not separately published.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agents' Last Exam 50.9% and AutomationBench-AA 53% are sharp for the price; vendor-run OSWorld 52.7% is weak.
- **Reasoning: 70/100.** AA Intelligence Index 37 puts it solidly in mid-frontier tier; hallucination rate improved 16 pts vs 5.6 Luna.
- **Context window: 93/100.** 1M window with standard GPT-6 family cache + batch tiers.
- **Multimodal: 65/100.** Text + image in; text out — identical to the GPT-6 Sol surface.
- **Coding: 76/100.** DeepSWE 66.6% at $0.22/task is a category-defining value row; AA Coding Agent Index 41 trails Sol (57).
- **Cost efficiency: 98/100.** $0.10/$0.50 with 90% cache discount and Batch at $0.05/$0.25 outranker in the catalog — the cheapest GPT-6 tier and the cheapest near-frontier coding-agent option here.
- **Overall Score: 76/100.** Mean of the five quality dims; best fit for high-volume agentic coding loops where Sol-class accuracy is not required. Reserve Sol/Astra for the hardest tasks.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI DevDay launch tables, AA Sep 2026 GPT-6 Sol+Luna coverage, AshnaAI catalog, HokAI/apidog briefs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
