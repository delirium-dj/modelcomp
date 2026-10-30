# Kimi K3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K3.1 Pro (`moonshot/kimi-k3.1-pro`)
- Date: 2026-10-30 (UTC; deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship open-weight 3T-class model with 1M token context, specialized in coding, 3D creation, and financial research.
- **Provider / access:** Moonshot AI / Kimi.ai, Kimi Work, Kimi Code, and API.
- **Release / knowledge:** Released October 2026; knowledge current.
- **IDs:** `kimi-k3.1-pro`
- **Context window:** 1,048,576 tokens total (1M context).
- **Modalities:** Text input, image input; text output; native tool calling.
- **Pricing (as of 2026-10-30):** $2.00 / 1M input tokens, $10.00 / 1M output tokens.
- **Architecture:** Advanced post-trained transformer with extensive joint RL across hundreds of downstream domains.

### Raw benchmarks found

- Terminal-Bench 4.0: **65.7%** <(Moonshot AI / Artificial Analysis, 2026)>
- GPQA Diamond: **94.2%** <(Moonshot AI technical report, 2026)>
- BenchCAD with tools: **92.7%** <(Moonshot AI evaluation, 2026)>
- OfficeQA Pro v2: **64.4** <(Moonshot AI benchmark report, 2026)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite agentic orchestration and multi-step tool execution.
- **Reasoning: 87.3/100.** Exceptional complex logical, scientific, and financial reasoning (GPQA Diamond 94.2%).
- **Context window: 93.9/100.** Robust 1M-token context window with high reliability.
- **Multimodal: 77.3/100.** Strong text and image ingestion capabilities.
- **Coding: 88.7/100.** Top-tier software engineering and spatial CAD generation (Terminal-Bench 4.0 65.7%).
- **Cost efficiency: 72.6/100.** Competitive open-weight/API pricing structure.
- **Overall Score: 87.4/100.** Best-fit recommendation: Frontier open-weight model optimized for advanced coding, spatial reasoning, and complex financial analytics.

---

## Re-research update (2026-10-30)

- **Deep research verification:** Verified across Moonshot AI official technical blog, Artificial Analysis evaluations, and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-30 (deep research)
- Method: Deep multi-source empirical research across Moonshot AI documentation, Artificial Analysis leaderboards, and independent benchmark evaluations; normalized 1–100 interpretations.
