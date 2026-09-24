# Kimi K2.8 Preview — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mid-tier coding and agentic model powering Kimi Code, bridging between K2.7 and flagship K3 with a 1M token context and optimized reasoning efficiency.
- **Provider / access:** Moonshot AI / Kimi Code (`kimi-for-coding`).
- **Release / knowledge:** September 2026; preview release.
- **IDs:** `kimi-for-coding`, `moonshot/kimi-k2-8-preview`
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text, image, and video input; text output. Thinking effort configurable up to max.
- **Pricing (as of 2026-09-24):** Membership subscription billing; approximately 30% more economical than K3.
- **Architecture:** Large-scale Mixture-of-Experts (MoE).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: positioning near K3 (93.5%) and K2.6 baseline (90.5%); specific standalone score not published.
- BrowseComp: K2.6 family baseline: **83.2%**

Coding:

- K2.6 baseline (verified model card): SWE-bench Verified **80.2%**, SWE-bench Pro **58.6%**, Terminal-Bench 2.0 **66.7%**, LiveCodeBench v6 **89.6%**, SciCode **52.2%**.
- K2.8 Preview enhancements: +10.4% Program-Bench, +11.4% MCP Mark Verified, +76.2% SWE Marathon over earlier baselines; one-pass self-repair slightly trails K3.

Agent / tool use:

- MCP Mark Verified: reported double-digit gain over K2.6.
- End-to-end task turnaround ~33% faster than K3 with comparable completion quality.

Long context:

- 1,048,576 token context window; detailed multi-needle retrieval benchmarks unverified.

Multimodal:

- Multimodal input (image, video) integrated natively; dedicated vision benchmark scores unreleased.

### Normalized scores (1–100)

- **Tool use: 74/100.** Demonstrates responsive autonomous tool workflows and MCP integration; absence of standalone independent Terminal-Bench 2.1 evaluation limits higher placement.
- **Reasoning: 83/100.** Strong logical and technical reasoning inherits from the established K2.6 (90.5% GPQA) architecture, tuned for rapid inference.
- **Context window: 88/100.** Expansive 1M context across all subscription tiers provides ample capacity for large multi-file repositories.
- **Multimodal: 68/100.** Vision and video frame analysis supported; optimized primarily as a coding-centric agent with text output.
- **Coding: 77/100.** Inherits ~80% SWE-bench Verified from the K2 series with improved speed and token efficiency, though slightly below K3 flagship self-correction fidelity.
- **Cost efficiency: 72/100.** Subscription membership model without public per-token billing; tasks run cost-effectively within platform tiers.
- **Overall Score: 78/100.** Arithmetic mean of non-cost metrics: (74 + 83 + 88 + 68 + 77) / 5 = 78.0. A swift and practical developer-oriented coding model for day-to-day software development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Moonshot AI release notes and developer benchmarks.
