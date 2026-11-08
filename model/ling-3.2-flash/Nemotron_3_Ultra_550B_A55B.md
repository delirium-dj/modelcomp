# Ling 3.2 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Ant Group (`opencode/ling-3.2-flash`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's Nov 2026 native multimodal Ling-series MoE (560B total / 25B active, 1M context) for visual understanding, multimodal agents, and 3D/medical work at Flash-class pricing.
- **Provider / access:** Ant Bailian (`ling-3.2-flash`), OpenCode Zen (`opencode/ling-3.2-flash`); two-week free trial at launch.
- **Release / knowledge:** 2026-11 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `opencode/ling-3.2-flash`, `ling-3.2-flash` (Ant Bailian platform).
- **Context window:** 1,000,000 tokens total.
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-08):** $0.30 per 1M input tokens, $0.90 per 1M output tokens (Ant Bailian launch pricing); two-week free trial at launch; no standing free tier.
- **Architecture:** 560B total / 25B active Mixture-of-Experts (MoE) transformer with native multimodal input and 1M context window.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool-use benchmarks found for Ling 3.2 Flash at this time.

Reasoning / knowledge:

- No verified public reasoning/knowledge benchmarks found for Ling 3.2 Flash at this time.

Coding:

- No verified public coding benchmarks found for Ling 3.2 Flash at this time.

Long context / vision:

- 1,000,000 token context window claimed; no public long-context retrieval benchmarks verified.
- Native image and video input from MoE weights at Flash-class serving costs.

### Normalized scores (1–100)

- **Tool use: 63/100.** No verified agent benchmarks; score reflects Flash-class architecture with 1M context enabling tool use potential.
- **Reasoning: 63/100.** No verified reasoning benchmarks; MoE architecture with 25B active params suggests moderate reasoning capacity.
- **Context window: 88/100.** 1M token context window; no public retrieval benchmarks to verify effective recall at scale.
- **Multimodal: 73/100.** Native image and video input with text output; strong multimodal foundation but limited output modalities.
- **Coding: 65/100.** No verified coding benchmarks; 25B active params and Flash-class positioning suggest competent but not flagship coding.
- **Cost efficiency: 88/100.** Very competitive $0.30/$0.90 pricing with launch free trial; among the lowest per-token costs for multimodal models.
- **Overall Score: 70/100.** Arithmetic mean of five quality dimensions: (63 + 63 + 88 + 73 + 65) / 5 = 352 / 5 = 70.4 → 70. Ant Group's multimodal MoE with native video input at aggressive pricing; lacks verified public benchmarks across core capabilities.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Ant Group Bailian platform documentation, Ling-series model announcements, and developer guides; scores are normalized 1–100 interpretations, not official vendor scores. Note: zero verified public benchmarks found for this model at time of research.
- Reference URLs:
  - [Ant Group Bailian — Ling Models](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Group — Ling 3.2 Flash Announcement](https://developer.ant-ling.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---