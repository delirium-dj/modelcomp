# Claude Opus 5 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's thoughtful and proactive Opus-generation model (2026-07-24), near-frontier intelligence at half Fable price, best everyday enterprise coding/research model.
- **Provider / access:** Anthropic Claude API `claude-opus-5`, AWS Bedrock, Google Vertex AI, Microsoft Azure Foundry
- **Release / knowledge:** 2026-07-24; knowledge cutoff 2026-05 (system card)
- **IDs:** `anthropic/claude-opus-5` (no Zen Free ID — paid only)
- **Context window:** 1,000,000 total (1M / 128K out; Fast mode 2.5× speed) — verified via Anthropic news and AIML API
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive effort low/medium/high/xhigh/max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $5.00 in / $25.00 out per 1M (same as Opus 4.8); cached $0.65 / 1M; Fast mode same price at 2.5× speed
- **Architecture:** Proprietary (Claude 5 generation)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Opus 5 TB not isolated; Opus 4.8 82.7 on TB2.1)
- OSWorld 2.0: **state-of-the-art at any cost, surpasses Fable 5 best at ~1/3 cost** (Anthropic launch — numeric not disclosed; Box customer report 8-17% gains)
- GDPval-AA v2: **1,861 Elo** (OtterMind summary of Anthropic launch — leads Fable 5 1,747 and GPT-5.6 Sol 1,736; #1 knowledge-work)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- AutomationBench (Zapier): **~1.5× pass rate of competitors** (Anthropic launch)
- Frontier-Bench v0.1: **43.3%** (Anthropic / OtterMind — leads at half price)
- GDPval-AA v2 (AAbox): **Box improvement 8% overall, 11% data analysis, 17% due diligence** (customer eval)

Reasoning / knowledge:

- GPQA Diamond: **no verified isolated public score found** (Opus 4.8 lineage ~87%)
- HLE: **no verified public score found**
- ARC-AGI-3: **30.2%** (Anthropic launch / OtterMind — 3× GPT-5.6 Sol 7.8%; largest novel-reasoning leap)
- FrontierCode: **no verified public score found for Opus 5** (Fable 5 leads 80.3%)
- RiemannBench / ArxivMath / IMO 2026: **designated strong gains per system card, numeric not disclosed**
- Artificial Analysis Intelligence Index: **no verified isolated public score found** (Hiero weighted competency 97/100 #2 vs Fable 99)
- Hiero weighted competency: **97/100 #2** (ai.hiero.dev 2026-09-04 vs Fable 5.1 99, GPT-6 Astra 96)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / Multilingual: **no verified public score found for Opus 5** (Opus 4.8 was 69.2% SWE-Pro, Sonnet 5 63.2%; Opus 5 expected ≥ those)
- DeepSWE v1.1: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- ProgramBench (long context): **graded per system card §8.9.1, numeric not disclosed**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M context; programmatic long-context (ProgramBench) and organic chemistry (+10.2 pts vs Opus 4.8) / protein (+7.7 pts) gains per system card; no MRCR numeric disclosed

### Normalized scores (1–100)

- **Tool use: 90/100.** OSWorld 2.0 SOTA at 1/3 Fable cost + GDPval 1861 #1 + Frontier-Bench 43.3% + Automation 1.5×; capped by missing TB2.1 raw.
- **Reasoning: 92/100.** ARC-AGI-3 30.2% 3× next best + Hiero 97/100 + knowledge-work 1861 leader + chemistry/protein gains; capped by no GPQA/HLE.
- **Context window: 96/100.** 1M / 128K with strong long-context eval (ProgramBench); tier 95-100 but capped below 100 without MRCR disclosure.
- **Multimodal: 65/100.** Text/image/PDF in; lacks video/audio in for 75+; vision used for frontend verification (browser width checks).
- **Coding: 89/100.** Frontier-Bench 43.3% coding-heavy + GDPval-adjacent + Opus 4.8 lineage 69.2% SWE-Pro; capped by missing Direct SWE-Pro for Opus 5.
- **Cost efficiency: 58/100.** $5/$25 half of Fable $10/$50 and GPT-6 Astra; still paid vs free models; Fast mode improves effective cost.
- **Overall Score: 86/100.** Mean of five non-cost dims (90+92+96+65+89)/5=86.4 → 86; best-fit for daily enterprise coding/research where Fable cost not justified.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic news/system card 2026-07-24, ai.hiero.dev, OtterMind, AIML API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
