# GPT-5.6 Sol — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: OpenAI (`openai/gpt-5.6-sol`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist tier in the GPT-5.6 family, the high-context reasoning model behind OpenAI's agentic coding (o1-style) work.
- **Provider / access:** OpenAI API (`api.openai.com`), ChatGPT, AWS Bedrock, Microsoft Azure (`openai/gpt-5.6-sol`).
- **Release / knowledge:** Released August 7, 2026. Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-20):** $1.25 in / $10 out per 1M tokens; no Free / Zen tier (`noFreeId`).
- **Architecture:** Proprietary; parameters and architecture not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (HokAI, Aug 7 2026; ahead of every other model, including GPT-6 Astra's disclosed Terminal-Bench v4.0 59%)
- GDPval-AA v2: **1762 Elo** (Artificial Analysis, Sep 2 2026; #1-eligible of published Frontier Elo)
- AutomationBench-AA: **60%** (Artificial Analysis, Sep 9 2026; ahead of GPT-6 Astra 68% is not claimed — Astra 69% is higher; Sol 60% trails Astra 69% but leads Grok 4.6 67%)
- GDP.pdf: **27%** (Artificial Analysis, Sep 9 2026; vs GPT-6 Astra 31%)
- AA-Briefcase: highest published AA-Briefcase score in early September (Artificial Analysis) — absolute figure not published
- DeepSWE: **72%** (Artificial Analysis, Sep 9 2026; vs GPT-6 Astra 68%, Grok 4.6 63%)
- Terminal-Bench v4.0 / tau3-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.6%** (HokAI, rank 4 of 45; Artificial Analysis confirms it leads on reasoning)
- Humanity's Last Exam: **43.0%** (HokAI, Aug 7 2026)
- AA Intelligence Index: **62** (Artificial Analysis, Aug 14 2026)
- AA-Omniscience (Accuracy): baseline vs +4 for GPT-6 Astra (Artificial Analysis, Sep 9 2026)
- AA-Omniscience (Hallucination): **92%** at max effort on open-ended reasoning (Artificial Analysis, Sep 9 2026 — vs Astra 51%)
- HLE / CritPt / LCR / MLCR / BenchLM overall / ARC-AGI: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-bench Pro / SWE Marathon: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (1M window asserted by HokAI)

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 87.4% (best published) with GDPval-AA 1762 Elo and DeepSWE 72%; capped by Terminal-Bench v4.0 not disclosed (Astra's 59% is on a harder bench) and AutomationBench-AA 60% trailing Astra 69%.
- **Reasoning: 93/100.** GPQA Diamond 95.6% (#4/45) and AA Intelligence Index 62; capped by the 92% max-effort hallucination rate vs Astra's 51%.
- **Context window: 95/100.** 1M-token input window (top tier).
- **Multimodal: 70/100.** Text + image input, text output only (no audio/video).
- **Coding: 85/100.** DeepSWE 72% (beats Grok 4.6 63% and GPT-6 Astra 68%); capped by no disclosed SWE-bench Verified.
- **Cost efficiency: 35/100.** Paid-only tier ($1.25/$10 per 1M), no Free tier.
- **Overall Score: 86/100.** Mean of the five quality dimensions (89 + 93 + 95 + 70 + 85) / 5 = 86.4 -> 86; the best Terminal-Bench + reasoning model at paid-OpenAI pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
