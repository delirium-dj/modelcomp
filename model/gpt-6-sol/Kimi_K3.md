# GPT-6 Sol — findings by Kimi K3

- Source: OpenAI / GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's standard-tier GPT-6 model (siblings Astra/Luna), positioned below Astra at roughly one-fifth the catalog price ($2/$10 vs $10/$50). BenchLM #4 of 507.
- **Provider / access:** OpenAI API (`gpt-6-sol`); docs at developers.openai.com/api/docs/models/gpt-6-sol. Official launch post: openai.com/index/introducing-gpt-6-sol-and-luna/.
- **Release / knowledge:** Released 2026-09-22 (OpenCode Data, newly verified); knowledge cutoff 2026-04-20 (OpenCode Data, new).
- **IDs:** `openai/gpt-6-sol` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.1M tokens (OpenCode Data catalog; benchlm.ai listed 1.05M); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; AA-MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2.00/M input, $10.00/M output, $0.20/M cached input, $2.50/M cache write (OpenCode Data catalog — verified now, ~5x cheaper than Astra's $10/$50).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld (partial reward): **60.5%** (official launch post via OpenCode Data; matches benchlm.ai OSWorld 2.0); Agents' Last Exam: **56.4** (official; matches benchlm.ai); AA AutomationBench: **61.6%** (benchlm.ai); AutomationBench: **33.2** (official launch post — metric variant noted)
- GDPval-AA: **49.3%** normalized (benchlm.ai; raw Elo not listed)
- AA Briefcase: **1483 Elo**; ExploitGym: **22.1%** (benchlm.ai)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-HLE: **47.9%** (benchlm.ai)
- AA-LCR: **83.7%**; CritPt: **30.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **47.5**; BenchLM overall **81.28/100, #4 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%** (benchlm.ai)
- HealthBench Professional: **60.8%**; HealthBench Hard: **30.1%** (benchlm.ai)
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE: **68.8%** (official launch post via OpenCode Data; matches benchlm.ai); AA-SciCode: **57.6%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench / Coding Index: no verified public score found

Long context:

- AA-LCR 83.7% at the ~1.1M window (benchlm.ai); 128K output verified; no MRCR/RULER public score found.

Multimodal:

- AA-MMMU-Pro: **83.3%** (benchlm.ai); PDF input catalog-listed

### Normalized scores (1–100)

- **Tool use: 83/100.** Unchanged: OSWorld 60.5%, Agents' Last Exam 56.4%, AutomationBench (AA) 61.6%, Briefcase 1483 (official-confirmed where published); capped by missing Terminal-Bench/Tau rows and GDPval 49.3%.
- **Reasoning: 84/100.** Unchanged: LCR 83.7%, CritPt 30.9%, HLE 47.9%, AA Index 47.5; capped by missing GPQA/ARC rows.
- **Context window: 88/100.** Unchanged: 1.1M window with LCR 83.7%; 128K output verified; capped by no MRCR/RULER probes.
- **Multimodal: 80/100.** Unchanged: MMMU-Pro 83.3% vision/PDF input; no audio/video rows; text-only output caps it.
- **Coding: 76/100.** Unchanged: DeepSWE 68.8% (official-confirmed) and SciCode 57.6% respectable; capped by thin coverage (no SWE-bench/LiveCodeBench public rows).
- **Cost efficiency: 72/100.** Raised from provisional 68: verified $2/$10 catalog price — a fifth of Astra's — makes this the cheapest current OpenAI reasoning flagship.
- **Overall Score: 82/100.** Mean of the five quality dims (83+84+88+80+76)/5 = 82.2 → 82. Best fit: GPT-6-generation general assistant/coding when Astra's maximum tier is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/introducing-gpt-6-sol-and-luna/ table transcribed by OpenCode Data `openai/gpt-6-sol` incl. release/cutoff/pricing; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date, cutoff, 128K max output and the $2/$10 catalog price; noted the official-vs-AA AutomationBench metric variants. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
