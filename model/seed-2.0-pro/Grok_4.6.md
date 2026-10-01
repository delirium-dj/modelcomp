# ByteDance Seed 2.0 Pro — findings by Grok 4.6

- Source: ByteDance / Doubao (`doubao-seed-2-0-pro-260215`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance flagship general-purpose agent model released 2026-02-14 via Volcano Engine: 256K context, multimodal input, function calling. Not Seed 2.1 Pro (June 2026, different price and eval table).
- **Provider / access:** Volcengine Ark `doubao-seed-2-0-pro-260215`; also Deep Infra `ByteDance/Seed-2.0-pro`, Requesty `seed-2.0-pro`. Proprietary.
- **Release / knowledge:** 2026-02-14 (LLMBoard / LLM Stats). Knowledge cutoff not verified here.
- **IDs:** `bytedance/seed-2.0-pro`, Volcengine `doubao-seed-2-0-pro-260215`. No OpenCode Zen Free ID found.
- **Context window:** 256K tokens; max output ~131K (LLMBoard / LLM Stats).
- **Modalities:** multimodal input + function calling (LLM Reference). MMMU 85.4% supports image understanding. Audio/video not verified as first-class I/O on the 2.0 Pro cards used here.
- **Pricing (as of 2026-10-01):** Volcengine Ark **$0.475 / $2.37** per 1M (LLMBoard, 2026-09-18). Deep Infra / Requesty often **$0.50 / $3.00**, cache $0.10 (LLM Stats). Scored on Volcengine list.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Retail: **90.4%** (Digital Applied via LLM Reference, from ByteDance launch materials)
- Terminal-Bench 2.1 / 4.0 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found for **2.0 Pro** (TB 2.1 **71%** on AI/TLDR is **Seed 2.1 Pro**, not this ID)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (ByteDance seed2 page via LLM Reference; LLMBoard GPQA 88.90%, 2026-09-17)
- MMLU-Pro: **87.0%** (ByteDance launch via Digital Applied)
- AIME 2025: **98.3%** (same)
- HLE / CritPt / Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **76.5%** (Digital Applied / LLMBoard, 2026-09-17)
- LiveCodeBench v6: **87.8%** (seed.bytedance.com/seed2 via LLM Reference)
- SWE-Pro / DeepSWE / SciCode / TB: no verified public score found for this ID

Long context:

- 256K native. MRCR / RULER / GraphWalks / AA-LCR: no verified public score found.

Multimodal extras:

- MMMU: **85.4%** (ByteDance launch via Digital Applied)

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-Bench Retail 90.4% is well above the Tau3 ~50%+ frontier-ref spirit for retail tool-use. Capped by missing TB 2.1/4.0, Tau3-Banking, and GDPval for this exact ID (do not borrow 2.1 Pro’s TB 2.1 71%).
- **Reasoning: 84/100.** GPQA Diamond 88.9% is just under the 90%+ frontier ref; MMLU-Pro 87% and AIME 2025 98.3% are strong. Capped by no HLE/Index/Omniscience.
- **Context window: 72/100.** 256K is in the 200K–500K tier (200K = 70). No retrieval % to move toward 85.
- **Multimodal: 68/100.** Multimodal input + MMMU 85.4% → image-in band 60–70. Not scored as video/audio/PDF omni without a 2.0 Pro I/O list.
- **Coding: 88/100.** SWE-Verified 76.5% meets the 74%+ coding-ref spirit; LiveCodeBench v6 87.8% is high. Capped by no DeepSWE/SciCode/SWE-Pro.
- **Cost efficiency: 92/100.** $0.475/$2.37 matches the ~$0.60/$2.20 ≈92 anchor. $0.50/$3.00 third-party is slightly worse. Not $0.
- **Overall Score: 80/100.** (86+84+72+68+88)/5 = 79.6 → 80 half-up. Best-fit: cheap multimodal coding/agent at 256K when Seed 2.1 Pro’s newer agent table is not required.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (LLMBoard, LLM Reference, LLM Stats, AnotherWrapper; ByteDance numbers as cited from seed.bytedance.com / Digital Applied); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
