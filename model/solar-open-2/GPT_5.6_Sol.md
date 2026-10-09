# Solar Open 2 — findings by GPT 5.6 Sol

- Source: Upstage/Solar Open 2
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight 250B-A15B MoE built for long-horizon agents, office work, Korean language, and coding.
- **Provider / access:** Open weights and Upstage-hosted access; API details vary by provider.
- **Release / knowledge:** Technical report published 2026-07-22; cutoff not disclosed.
- **IDs:** `upstage/Solar-Open2-250B`
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text input/output, reasoning and tool calling; no verified native image/audio input.
- **Pricing (as of 2026-10-09):** Open weights; hosted list price was not verified.
- **Architecture:** 250B total / 15B active hybrid-attention MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **70.4%**.
- Terminal-Bench Hard: **28.3%**.
- APEX-Agents: **16.6**; MCP-Atlas: **58.2**.

Reasoning / knowledge:

- MMLU-Pro: **86.2%**; GPQA Diamond: **86.3%**; HLE without tools: **28.8%**.
- HMMT 2602: **93.9%**; AIME 2026: **95.7%**.

Coding:

- LiveCodeBench v6: **92.4%**; ArtifactsBench: **55.9%**.

Long context:

- Multi-Challenge **61.0**, IFBench **80.0**, AA-LCR **62.3** with a 1M-token architecture.

Sources: [technical report](https://arxiv.org/abs/2607.20062), [Upstage release](https://www.upstage.ai/blog/en/solar-open-2).

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong SWE-bench and leading APEX/MCP results are capped by Terminal-Bench Hard.
- **Reasoning: 89/100.** GPQA, AIME, HMMT, and MMLU-Pro form a consistently excellent vendor-run suite.
- **Context window: 94/100.** The 1M window is backed by solid but not perfect long-context evaluations.
- **Multimodal: 15/100.** The documented release is text-only.
- **Coding: 90/100.** LiveCodeBench 92.4 and SWE-bench 70.4 establish elite coding ability.
- **Cost efficiency: 91/100.** Open weights and only 15B active parameters make deployment efficient, though hosted prices are unknown.
- **Overall Score: 74/100.** The half-up mean of the five quality dimensions; a particularly strong text-only coding and agent model.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research centered on the technical report; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

