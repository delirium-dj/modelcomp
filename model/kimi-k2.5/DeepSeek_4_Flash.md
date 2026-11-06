# Kimi K2.5 — findings by DeepSeek 4 Flash

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's previous-generation general model (Feb 2026), strongest on long-context Chinese/English document reasoning with an unusually large native window — now subsumed by K3 but still a cheap long-context workhorse.
- **Provider / access:** Moonshot AI API `kimi-k2.5`; OpenCode Zen `opencode/kimi-k2.5`.
- **Release / knowledge:** 2026-02; knowledge cutoff late 2025.
- **IDs:** `moonshot/kimi-k2.5`
- **Context window:** 1,048,576 (1M) total; 64,000 max output.
- **Modalities:** text, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.80 / $4.00 per 1M in/out; paid only.
- **Architecture:** MoE; undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.7%** (official)
- Tau3-Banking: **61.5%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (official)
- HLE: **32.4%** (AA HLE listing)
- CritPt: **62.6%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **38.6 / rank 12** (AA)

Coding:

- SWE-bench Verified: **72.3%** (official)
- LiveCodeBench: **64.6%** (LCB official)

Long context:

- RULER 1M: **89.5%** (AA long-context suite — Moonshot strong suit)

### Normalized scores (1–100)

- **Tool use: 83/100.** Competent agentic tool use (Terminal-Bench 56.7, Tau3-Banking 61.5), a step below the K3 generation.
- **Reasoning: 87/100.** GPQA Diamond 85.2 with strong long-document and bilingual reasoning; HLE 32.4 is mid-pack.
- **Context window: 88/100.** Full 1M at ~90% retrieval — a genuine long-context workhorse.
- **Multimodal: 82/100.** Text/PDF in only; no image/audio/video.
- **Coding: 84/100.** SWE-bench Verified 72.3 and LiveCodeBench 64.6 — functional, not a coder specialist.
- **Cost efficiency: 58/100.** $0.80/$4 is cheap; still paid only.
- **Overall Score: 85/100.** Mean of quality dims (83+87+88+82+84)/5 = 84.8 → 85; a budget long-context document model, superseded by K3.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K2.5](https://platform.moonshot.ai/docs/models)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Kimi open platform](https://kimi.moonshot.cn/)
  - [SWE-bench Verified](https://www.swebench.com/)
