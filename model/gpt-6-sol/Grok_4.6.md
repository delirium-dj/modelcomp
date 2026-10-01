# GPT-6 Sol — findings by Grok 4.6

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI’s 2026-09-22 mid-tier coding/agent model at **$2/$10**, half of GPT-5.6 Sol’s promotional list. Predecessor of GPT-6.1 Sol (same list price, better DeepSWE). Not Astra.
- **Provider / access:** OpenAI API `gpt-6-sol`. Effort: none / low / medium / high / xhigh / max. Computer use and web search supported (API docs).
- **Release / knowledge:** 2026-09-22 (Emergent); knowledge cutoff **2026-04-20** (OpenAI docs).
- **IDs:** `openai/gpt-6-sol`. No OpenCode Zen Free ID found.
- **Context window:** 1,050,000 tokens; max input 922,000; max output 128,000 (OpenAI docs / The Model Gap).
- **Modalities:** text and image in; text out. Audio/video not listed.
- **Pricing (as of 2026-10-01):** $2 / $10 per 1M; cached input $0.20; cache writes $2.50. Prompts **>272K input** bill 2× input/cache and 1.5× output for the **full** request. Batch/Flex 50%; Fast 2×. AA ~$1.06 per Intelligence Index task at max (Prograsec).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **43%** (Prograsec citing AA vs GPT-5.6 Sol 37%)
- AutomationBench 1.0.6: **33.2%** xhigh, $0.27/task (OpenAI / Emergent)
- OSWorld 2.0 offline: **60.5%** xhigh, $2.21/task (OpenAI / Emergent)
- Agents’ Last Exam: **56.4%** max (OpenAI; The Model Gap did not independently confirm the split)
- SWE-Atlas-QnA: **58%** (Prograsec citing AA vs 54% on 5.6 Sol)
- Tau3 / GDPval-AA / Claw-Eval / TB 2.1: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** at max (Emergent; Prograsec also mentions **57** in one Coding-adjacent sentence — treat **48** as the Index figure)
- HLE (no tools): **47.9%** (AA, The Model Gap, 2026-09-23)
- GPQA Diamond: no verified public score found (The Model Gap: not scored yet as of one day post-launch)
- LiveBench overall: **79.3%** (2026-09-23)

Coding:

- DeepSWE v1.1: **68.8%** max OpenAI ($2.74/task); AA Codex-agent **69.0%** (The Model Gap)
- FrontierCode 1.1 Main: **49.3%** max (OpenAI / Emergent)
- SWE-bench Verified / LiveCodeBench: no verified public score found (The Model Gap)

Long context:

- 1.05M native. AA-LCR: no verified public score found. 272K whole-request surcharge.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 4.0 43% is mid vs 2026 frontier 60–70%; OSWorld 60.5% is decent; AutomationBench 33.2% is weak. Capped by missing Tau3/GDPval and vendor-only ALE 56.4%.
- **Reasoning: 86/100.** HLE 47.9% clears 40%+; Index 48 is near but under 60. Capped by no public GPQA for this ID.
- **Context window: 96/100.** ≥1M → 95–100; no LCR ≥98% at 512K+.
- **Multimodal: 65/100.** Image in, text out → 60–70.
- **Coding: 86/100.** DeepSWE ~69% is just under 74%+; FrontierCode 49.3% and missing SWE-Verified cap it. AA Coding Agent cost ~$2.99/task at max (Prograsec).
- **Cost efficiency: 72/100.** Same $2/$10 band as GPT-6.1 Sol / Sonnet 5.5; cache $0.20 is worse than 6.1’s $0.10. Not $0.
- **Overall Score: 83/100.** (82+86+96+65+86)/5 = 83.0. Best-fit: 2026-09 OpenAI $2/$10 coder; prefer GPT-6.1 Sol when DeepSWE 75% is worth the same list price.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (OpenAI API docs, Emergent, Prograsec, The Model Gap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
