# GPT-6 Astra — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable broadly deployed model (2026-09-03), first to Critical cyber level, 1.05M context, staged Daybreak Access rollout for hardest end-to-end work.
- **Provider / access:** OpenAI API `gpt-6-astra`, ChatGPT Plus/Pro/Business/Enterprise (staged), AWS
- **Release / knowledge:** 2026-09-03 (announced) / 2026-09-04 GA; knowledge cutoff 2026-04-30
- **IDs:** `openai/gpt-6-astra` (no Zen Free ID — paid only)
- **Context window:** 1,050,000 total (922K max input / 128K max output) — verified via OpenAI API docs and system card
- **Modalities:** Text, image in; text out; reasoning yes (effort low/medium/high/xhigh/max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $10.00 in / $50.00 out per 1M; cached $1.00 / 1M; long-context tier above 272K input
- **Architecture:** Proprietary (GPT-6 series, reasoning model)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **state-of-the-art** (OpenAI reports Astra SOTA — numeric not disclosed; vs Fable 5.1 55.8%)
- Terminal-Bench Science 0.1: **64.6%** (OpenAI comparison / kie.ai — vs Fable 5.1 52.6%, gap 12.0 at ~31% lower cost)
- OSWorld 2.0 (simulation): **72.6% at ~40 min/task** (OpenAI / kie.ai — vs GPT-5.6 Sol 65.7% at 75 min, 47% less time)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Scope-control (exceeding target): **0% Astra vs 48% GPT-5.6 Sol without safeguards** (OpenAI system card — authorization adherence)
- Gray Swan IPI (prompt injection): **8.5% attack success within 15 attempts** (OpenAI system card) vs 27.0% for GPT-5.6 Sol

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- FrontierMath Tier 4: **98%** (OpenAI announcement — ten open problems machine-checked proofs)
- ARC-AGI-3 Standard Harness: **62.7%** (ARC Prize — provider-neutral comparison)
- ARC-AGI-3 Provider Adapter: **99.9%** (ARC Prize / OpenAI — complete OpenAI system with state-management layer)
- ExploitBench: **100%** (OpenAI — perfect on public; internal 20 high-severity V8 vulns Jun-Aug 2026 also tested)
- HealthBench Professional length-adjusted: **63.4 (69.5, 4097 tokens)** (OpenAI system card) vs GPT-5.6 Sol 60.5
- Artificial Analysis Intelligence Index: **61** (kie.ai summary — vs Fable 5.1 66)
- Omniscience Accuracy / Hallucination Rate: **misalignment flags ~half of GPT-5.6 Sol in simulated Codex traffic** (OpenAI internal — 3.4% vs 13.5% Sol)

Coding:

- SWE-bench Verified / SWE-Pro / Multilingual: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Agent Index (AA): **67** (kie.ai summary — vs Fable 5.1 70)
- DeepSWE / Terminal-Bench: **SOTA per OpenAI but numeric not disclosed**

Long context:

- 1,050,000 context (922K max input); no MRCR/RULER at 1M disclosed; computer-use and science workflows validated at 1M

### Normalized scores (1–100)

- **Tool use: 93/100.** TB-Science 64.6% SOTA + OSWorld 72.6% at 47% less time + 0% scope exceedance + IPI 8.5%; capped by missing TB2.1/GDPval raw.
- **Reasoning: 96/100.** FrontierMath 98% + ARC-AGI 99.9% adapter (62.7% standard) + ExploitBench 100% + HealthBench 63.4; capped by AA Index 61 trailing Fable 66.
- **Context window: 96/100.** 1.05M / 128K with 922K max input; tier 95-100 but capped below 100 without MRCR ≥98%.
- **Multimodal: 55/100.** Text/image in only; lacks audio/video/PDF in vs omni competitors; text-only out.
- **Coding: 91/100.** Coding Agent Index 67 + TB4.0 SOTA claim + FrontierMath/theorem proving strength; capped by missing SWE-bench raw.
- **Cost efficiency: 35/100.** $10/$50 flagship pricing same as Fable 5.1; Critical cyber capability justifies but no free tier.
- **Overall Score: 86/100.** Mean of five non-cost dims (93+96+96+55+91)/5=86.2 → 86; best-fit for frontier science/cyber/computer-use where Critical capability required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI safety overview/system card 2026-09-03, ARC Prize, kie.ai, OpenAI API docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
