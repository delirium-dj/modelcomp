# GPT-6 Astra — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship model above GPT-5.6 Sol, delivering state-of-the-art performance on coding and trading intuition benchmarks. Ties Claude Fable 5.1 on Artificial Analysis Intelligence and Coding Agent Indices at ~40% of the cost per task. Features exceptional token efficiency and reduced hallucination rates.
- **Provider / access:** OpenAI API (`gpt-6-astra`); no free tier. No OpenCode Zen ID. Staged rollout from Trusted Access programs.
- **Release / knowledge:** ~September 2026 (staged rollout); knowledge cutoff April 2026 (per O-mega.ai).
- **IDs:** `openai/gpt-6-astra` (OpenAI API). No free OpenCode Zen ID.
- **Context window:** 1,050,000 tokens (~1.05M) total; 128,000 max output.
- **Modalities:** Text and image in; text out. Reasoning yes (multiple effort levels: low, medium, high, xhigh, max). Tool calls supported.
- **Pricing (as of 2026-10-10):** $10 in / $50 out per 1M tokens. Cache read: 90% discount ($1/M). Cache write: 25% premium. Batch pricing available. 2.5x GPT-5.6 Sol's prices.
- **Architecture:** Proprietary; parameter count not disclosed. Part of OpenAI's GPT-6 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59%** (Artificial Analysis; leads Claude Fable 5.1's 52% and GPT-5.6 Sol's 40%)
- AutomationBench-AA: **69%** (Artificial Analysis; leads Grok 4.6's 67% and GPT-5.6 Sol's 60%)
- GDPval-AA v2: dropped ~45 Elo from GPT-5.6 Sol (Artificial Analysis; model uses significantly fewer turns — 24 vs 45-60)
- AA-Briefcase v1.1: **~90 Elo points above GPT-5.6 Sol** (Artificial Analysis; long-horizon knowledge work)
- GDP.pdf: **31%** all-pass (vs GPT-5.6 Sol's 27%)
- SWE-Atlas Codebase QnA: **62%** (Artificial Analysis)
- DeepSWE: **68%** (Artificial Analysis; below GPT-5.6 Sol's 72%)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (ties with Claude Fable 5.1 at max effort; #1 jointly)
- GPQA Diamond: **~96%** (llm-stats/AGIRanker)
- AA-Omniscience: hallucination rate dropped from 92% to 51% at max effort; accuracy +4 points (Artificial Analysis)
- Frontend Code Arena: **#1** (Morph; leads coding frontend tasks)

Coding:

- Artificial Analysis Coding Agent Index: **62** (ties with Claude Fable 5.1 in Claude Code; leads Claude Opus 5's 60)
- Terminal-Bench 4.0: **59%** (also listed under tool use; 56% in Coding Index context)
- DeepSWE: **68%** (below GPT-5.6 Sol's 72%)
- SWE-Atlas QnA: **62%**
- SWE-bench Verified: no specific score found for Astra
- SWE-bench Pro: no specific score found for Astra

Long context:

- No specific MRCR or long-context retrieval scores published
- 1.05M-token context at standard pricing

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 at 59% leads all models. AutomationBench-AA 69% leads. AA-Briefcase ~90 Elo above predecessor. GDP.pdf 31%. The agentic/tool-use performance is leading across multiple benchmarks. Capped by the GDPval-AA Elo drop from GPT-5.6 Sol (though attributed to fewer turns rather than lower quality).
- **Reasoning: 91/100.** Intelligence Index 53 ties for #1 with Fable 5.1. GPQA Diamond ~96% is outstanding. AA-Omniscience shows major hallucination reduction (92% → 51%) with accuracy gains. The combination of top Intelligence Index and reduced hallucination is exceptional. Capped only by the absence of HLE scores in the available data.
- **Context window: 88/100.** 1.05M-token context with 128K max output. Standard frontier-class window. No long-context premium reported. No specific MRCR retrieval scores. Solid but not best-in-class.
- **Multimodal: 62/100.** Text and image in; text out. No audio, video, or PDF input. Frontend Code Arena #1 shows strong visual understanding for code. Capped significantly by limited input modalities compared to Gemini models.
- **Coding: 92/100.** Coding Agent Index 62 ties for #1. Terminal-Bench 4.0 59% leads. DeepSWE 68% is slightly below predecessor. SWE-Atlas 62%. The token efficiency (1/3 of Fable 5.1's tokens for same score) is a major differentiator for coding agents. Capped by the DeepSWE regression vs. GPT-5.6 Sol.
- **Cost efficiency: 48/100.** $10/$50 per 1M tokens is the most expensive among frontier models — 2.5x GPT-5.6 Sol. However, the exceptional token efficiency (1/3 of Fable 5.1's tokens per task) means cost per task is ~40% less than Fable 5.1 at the same score. At $3.26 per Intelligence Index task (max effort) and $7.09 per Coding Agent task, the actual cost is more competitive than the per-token price suggests. Still, the raw pricing is premium.
- **Overall Score: 85/100.** Mean of five quality dims: (90 + 91 + 88 + 62 + 92) / 5 = 84.6, rounded to 85. A top-tier frontier model with leading agentic performance (Terminal-Bench 4.0, AutomationBench), exceptional token efficiency, and reduced hallucination. Best fit for coding agents, long-horizon knowledge work, and tasks where token efficiency drives down actual cost despite premium pricing. The limited input modalities and high per-token price are trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcements, Artificial Analysis, Morph, O-mega.ai, llm-stats, Epoch AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
