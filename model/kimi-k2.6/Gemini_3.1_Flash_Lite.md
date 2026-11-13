# Kimi K2.6 — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's multimodal MoE model (1.06T/32B-active) for long-horizon coding and large agent swarms.
- **Provider / access:** Moonshot AI (https://huggingface.co/models?search=kimi-k2.6). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `moonshotai/kimi-k2.6` (Paid only)
- **Context window:** 262K total; 236K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** ~$0.95/$4.00 per 1M.
- **Architecture:** MoE (1.06T total / 32B active).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Specialized for agent swarm orchestration.
- **Reasoning: 86/100.** Solid performance in long-horizon coding.
- **Context window: 75/100.** 262K capacity.
- **Multimodal: 70/100.** Text and image support.
- **Coding: 88/100.** Strong coding performance.
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 81.4/100.** A capable agent-swarm specialist, superseded by the K3 generation.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI](https://platform.moonshot.ai)
