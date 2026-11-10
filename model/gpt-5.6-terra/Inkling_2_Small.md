# GPT-5.6 Terra — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6-family tier (GA July 9, 2026), positioned at ~GPT-5.5 capability for half the price.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), Azure, Bedrock, ChatGPT Work/Codex.
- **Release / knowledge:** preview 2026-06-26; GA 2026-07-09.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,050,000 tokens; 128K max output; >272K billed at $5.50/$24.75.
- **Modalities:** text + image in; text out; reasoning none→max.
- **Pricing (as of 2026-10-02):** $2/M in, $12/M out (cut 20% from $2.50/$15 on 2026-07-30); cache reads 90% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **50.4%** (OpenAI)
- τ²-Bench Telecom: ~81% class (AA tier)
- OSWorld 2.0: **50.2%** (OpenAI)
- GDPval-AA v2: **1593 Elo**
- Terminal-Bench 2.1: **87.4%** (OpenAI/Codex); Terminal-Bench 4.0: **21.5%** (public leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI)
- AA Intelligence Index: **55** (v4.1, max)
- FrontierMath Tier 1–3: **84.9%**; Tier 4: **68.3%**
- HLE: not published separately for Terra; Agents' Last Exam stands in.

Coding:

- DeepSWE v1.1: **69.6–70.0%** (DeepSWE board)
- SWE-Bench Pro: **63.4%** (OpenAI)
- AA Coding Agent Index v1.1: **77.4** (max)
- SWE-bench Verified: **77.4%** (RankLLMs aggregator — treat cautiously)

Long context:

- 1.05M window; no clean public MRCR number.

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 87.4% and Agents' Last Exam 50.4% are strong; OSWorld 50.2% is middling and Terminal-Bench 4.0 at 21.5% is weak.
- **Reasoning: 82/100.** GPQA 92.9% and AA Index 55 are solid second-tier; no published HLE keeps confidence moderate.
- **Context window: 93/100.** Same 1.05M window as the rest of the GPT-5.6 family.
- **Multimodal: 68/100.** Text + image input; text-only output.
- **Coding: 80/100.** DeepSWE 70% and Coding Agent Index 77.4 are genuinely strong; Terminal-Bench 4.0 weakness tempers long-horizon claims.
- **Cost efficiency: 82/100.** $2/$12 after the July 30 cut; ~$0.55 per AA Index task, ~half of Sol.
- **Overall Score: 81/100.** Mean of the five quality dims; best fit as the everyday GPT-5.6 default balancing capability and cost.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI posts, Artificial Analysis, DeepSWE board, tbench.ai, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
