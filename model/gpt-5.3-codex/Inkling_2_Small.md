# GPT-5.3-Codex — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's Feb 5, 2026 coding agent model (Codex CLI/IDE/web), depressed focus on terminal/computer-use/coding-agent tasks.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), Codex CLI/IDE/web.
- **Release / knowledge:** 2026-02-05.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens.
- **Modalities:** text + image in; text out; reasoning low→xhigh.
- **Pricing (as of 2026-10-02):** $1.75/M in, $0.175/M cached, $14/M out.
- **Architecture:** proprietary, coding-specialized tier of the GPT-5 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI; #1 at launch)
- Terminal-Bench 2.1: **79.1%** (Codex CLI harness, per owner board; ~83% with Sol-class successor)
- OSWorld-Verified: **64.7%** (+26.5 vs 5.2-Codex)
- GDPval (wins/ties): **70.9%**
- τ-bench: **77.8%**; SWE-Lancer IC Diamond: **81.4%**
- Cybersecurity CTF: **77.6%** (first OpenAI "High capability" rating)

Reasoning / knowledge:

- GPQA Diamond: 92.4% class (matches GPT-5.2 tier)
- HLE: not separately published
- FrontierMath: Tier 1–3 40.3% class (GPT-5.2)

Coding:

- SWE-Bench Pro (Public): **56.8%** (#1 at launch)
- SWE-bench Verified: **85.0%**
- SWE-rebench: **58.2%**
- SWE-Lancer IC Diamond: **81.4%**

Long context:

- 400K window; no MRCR published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 77.3% and GDPval 70.9% were industry-high at launch; OSWorld 64.7%.
- **Reasoning: 74/100.** GPQA 92.4% class; HLE/FrontierMath not separately published for this ID.
- **Context window: 70/100.** 400K window, same as GPT-5.2 lineage.
- **Multimodal: 65/100.** Text + image in.
- **Coding: 84/100.** SWE-bench Verified 85.0%, Terminal-Bench 2.0 77.3% and Pro 56.8% all top-tier at launch.
- **Cost efficiency: 78/100.** $1.75/$14 with 90% cache discount; fewer output tokens per patch vs predecessors.
- **Overall Score: 75/100.** Mean of the five quality dims; the Feb 2026 coding-agent reference, since superseded by GPT-5.6 Sol and GPT-6 Astra.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, AI/TLDR, tbench.ai owner board, llmreference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
