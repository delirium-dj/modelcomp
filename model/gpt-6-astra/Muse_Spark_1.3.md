# GPT-6 Astra — findings by Muse Spark 1.3 Contributor

- Source: OpenAI/GPT-6 Astra, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI flagship above GPT-5.6 Sol)
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, staged rollout from Trusted Access programs, built for frontier reasoning and agents with best-in-class token efficiency.
- **Provider / access:** OpenAI via API + Codex (`openai/gpt-6-astra`); Trusted Access staged rollout, no Zen Free ID (Responses API, tool calling + MCP).
- **Release / knowledge:** 2026-09-09 benchmarked (Artificial Analysis article date); knowledge cutoff undisclosed
- **IDs:** `openai/gpt-6-astra` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,050,000 (1M) / 128K out — verified via curated repo metadata + AA article
- **Modalities:** text, image in; text out; reasoning yes (low→max efforts); tool calls yes
- **Pricing (as of 2026-09-18):** Paid $10 in / $50 out per 1M, 90% cache-read discount, 25% cache-write premium (AA article; 2.5x GPT-5.6 Sol)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59% Index-config / 56% Codex** (AA Astra article: leads Fable 52% and GPT-5.6 Sol 37–40%)
- AutomationBench-AA: **69%** (AA Astra article: leads Grok 4.6 67%, GLM-5.3 62%, GPT-5.6 Sol 60%)
- GDP.pdf: **31% all-pass** (AA Astra article: leads GPT-5.6 Sol 27%)
- GDPval-AA v2: **-45 Elo vs GPT-5.6 Sol** (AA Astra article: fewer turns 24/task vs 45–60 for peers)
- AA-Briefcase: **+90 Elo vs GPT-5.6 Sol** (AA Astra article: analytical quality up, presentation quality trails Sol)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas QnA: **62%** (AA Astra article: vs GPT-5.6 Sol 54%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 AA Index (max), tied #1 with Fable 5.1** (AA Astra article, +6 on GPT-5.6 Sol)
- Omniscience Accuracy / Hallucination Rate: **51% hallucination (halved from 92%), accuracy +4** (AA Astra article, max effort)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68% DeepSWE** (AA Astra article: vs GPT-5.6 Sol 72%); **62 Coding Agent Index, tied #1 with Fable** (AA Astra article)

Long context:

- **1.05M window verified; token efficiency frontier (27k out/task vs 78k Fable); no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 92/100.** TB4.0 59% + AutomationBench 69% + GDP.pdf 31% lead the field; capped by GDPval-v2 regression (-45 Elo, low-turn style).
- **Reasoning: 94/100.** Index 53 tied #1 with hallucination halved and accuracy up; capped by missing GPQA/HLE absolutes.
- **Context window: 100/100.** 1.05M / 128K out verified; top tier.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio/PDF omni models.
- **Coding: 92/100.** Coding Index 62 tied #1 with best token efficiency (27k/task); capped as DeepSWE 68% trails Sol 72%.
- **Cost efficiency: 35/100.** Paid $10/$50 premium (2.5x Sol); value only via token efficiency at frontier.
- **Overall Score: 89/100.** Mean of the five non-cost dims (92+94+100+65+92)/5 = 88.6; best-fit frontier token-efficient agent pick at premium price.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Artificial Analysis Astra benchmarking article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
