# GPT-6 Astra — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: OpenAI (`openai/gpt-6-astra`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 model, built at the Stargate Texas site for agentic coding, computer-use automation and vetted cybersecurity research; first OpenAI model to clear the Critical threshold on the Preparedness Framework.
- **Provider / access:** OpenAI hosted API, ChatGPT, AWS Bedrock, Microsoft Azure; initially restricted to Trusted Access / Daybreak programs. Responses API and Chat Completions.
- **Release / knowledge:** Staged rollout began September 3, 2026. Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 in / 128,000 out (dedicated 2x pricing tier once input exceeds 272,000 tokens)
- **Modalities:** text, image in; text out
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M tokens at standard effort; cached read $1/M (90% off), cache write $12.50/M; requests with input >272K tokens bill 2x input / 1.5x output. AA blended cost $7.70/M. No Free tier.
- **Architecture:** Proprietary; parameter count and architecture not disclosed ("largest run to date").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v4.0: **59%** (Artificial Analysis, Sep 9 2026; ahead of Claude Fable 5.1 52% and GPT-5.6 Sol 40%)
- Terminal-Bench 2.1: no verified public score found
- AutomationBench-AA: **69%** (Artificial Analysis, Sep 9 2026; ahead of Grok 4.6 67% and GPT-5.6 Sol 60%)
- GDP.pdf: **31%** (Artificial Analysis, Sep 9 2026; vs GPT-5.6 Sol 27%)
- AA-Briefcase: **+90 Elo vs GPT-5.6 Sol** (Artificial Analysis, Sep 9 2026)
- ExploitBench: **100** (HokAI, vendor-reported, Sep 3 2026)
- SWE-Atlas-QnA: **62%** (Artificial Analysis, Sep 9 2026; vs GPT-5.6 Sol 54%)
- GDPval-AA v2: **~45 Elo below GPT-5.6 Sol** (Artificial Analysis, Sep 9 2026 — absolute Elo not published; model uses fewer turns)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (HokAI, #2 of 45; Artificial Analysis confirms it leads on reasoning)
- FrontierMath Tier 4 v2: **97.6%** (HokAI, vendor-reported, Sep 3 2026)
- Humanity's Last Exam: **57.2%** (HokAI, vendor-reported, Sep 3 2026)
- Screenspot Pro: **92.7** (HokAI, vendor-reported, Sep 3 2026)
- Benchcad Vision2code: **95.9** (HokAI, vendor-reported, Sep 3 2026)
- AA Intelligence Index: **61** (Artificial Analysis, Sep 9 2026; tied with GPT-5.6 Sol, 5 behind Fable 5.1's 65.7)
- AA Coding Agent Index: **62** (Codex; ties Fable 5.1, ahead of Opus 5 60)
- AA-Omniscience (Accuracy): **+4 vs GPT-5.6 Sol** (Artificial Analysis, Sep 9 2026)
- AA-Omniscience (Hallucination): **51% at max effort** (down from GPT-5.6 Sol's 92%; Artificial Analysis, Sep 9 2026)
- HLE / LCR / MLCR / CritPt / BenchLM overall / ARC-AGI: no verified public score found

Coding:

- DeepSWE: **68%** (Artificial Analysis, Sep 9 2026; vs GPT-5.6 Sol 72%, Fable 5.1 higher)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- AA Coding Agent Index: 62 (Codex, above)

Long context:

- MRCR / RULER: no verified public score found (HokAI: long-context recall stays strong deep into the 1.05M-window on OpenAI's own retrieval test)

### Normalized scores (1–100)

- **Tool use: 86/100.** Leads Terminal-Bench v4.0 (59%), AutomationBench-AA (69%), GDP.pdf (31%) and ExploitBench (100); capped by GDPval-AA v2 regression and no disclosed Terminal-Bench 2.1.
- **Reasoning: 92/100.** GPQA Diamond 96% (#2/45), FrontierMath Tier-4 v2 97.6%, AA Intelligence Index 61 with halved hallucination (51% vs 92%); capped by skipped classic HLE/GPQA-consistency checks.
- **Context window: 96/100.** 1.05M-token input window — the largest Frontier release.
- **Multimodal: 70/100.** Text + image input, text output only (no audio/video).
- **Coding: 84/100.** AA Coding Agent Index 62 (ties Fable 5.1) and DeepSWE 68%; capped by no disclosed SWE-bench Verified.
- **Cost efficiency: 25/100.** Premium paid tier ($10/$50 per 1M), no Free tier.
- **Overall Score: 86/100.** Mean of the five quality dimensions; flagships agentic coding/automation at the highest end of the frontier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
