# MAI Code 1 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Microsoft (`mai-code-1-flash`), microsoft.ai news + model card PDF, benchmarklist.com, opencode.ai/data, llm-stats.com, blog.duyet.net, techtimes.com, cloudprice.net, azure AI catalog
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Code 1 Flash (MAI-Code-1-Flash)
- **Short description:** Microsoft's in-house coding model, released June 2, 2026 — 137B total / 5B active sparse MoE transformer, built for fast, efficient coding assistance in GitHub Copilot and VS Code workflows. Trained directly with the GitHub Copilot production harness. Not open weights.
- **Provider / access:** Microsoft MAI family, distributed via GitHub Copilot (VS Code, Copilot CLI planned), GitHub Models API (`github_copilot/mai-code-1-flash`), Azure AI Foundry. Proprietary — not open weights.
- **Release / knowledge:** Released 2026-06-02; training cutoff December 2025; training March–May 2026.
- **IDs:** `microsoft-mai-code-1-flash` (CloudPrice canonical ID); `github_copilot/mai-code-1-flash` (GitHub Models ID). No Free ID confirmed on OpenCode Zen (not on OpenAI API).
- **Context window:** 256,000 total tokens (model card); 128K per CloudPrice; 128K max output per opencode.ai/data.
- **Modalities:** Text in/out. Reasoning: yes (adaptive thinking — concise on easy requests, more budget on complex). Tool calls: yes (agentic coding, tool-using scenarios). JSON mode: not explicitly documented. No vision/audio (MAI-Code-1.1-Flash adds image input, but 1.0 is text-only).
- **Pricing (as of 2026-10-29):** GitHub Models: $0.75 input / $4.50 output / $0.075 cached per 1M tokens (cloudprice.net). Model card says "To be finalized." MAI-Code-1.1-Flash (successor) at $0.20/$1.20 per 1M on Azure/GitHub.
- **Architecture:** 137B total / 5B active parameters per token, sparse Mixture-of-Experles transformer; trained on MAI-Thinking-1 base with higher proportion of code/PR/commit data and synthetic SWE task generation. Proprietary.

### Raw benchmarks found

- SWE-bench Verified: **71.6%** (Microsoft model card, June 2026; opencode.ai/data)
- SWE-bench Pro: **51.2%** (Microsoft model card; benchmarklist.com)
- SWE-bench Multilingual: **65.5%** (Microsoft model card; benchmarklist.com)
- Terminal-Bench 2.0: **54.8%** (Microsoft model card; benchmarklist.com)
- Terminal-Bench 2.1: **51.7%** (Microsoft model card; benchmarklist.com)
- AIME 2026: **92.5%** (Microsoft model card; benchmarklist.com)
- IFBench: **75.0%** (Microsoft model card; benchmarklist.com)
- GPQA Diamond: **84.6%** (opencode.ai/data; blog.duyet.net comparison)
- τ²-Bench: **71.7%** (blog.duyet.net comparison)
- ArtifactsBench: **36.4%** (benchmarklist.com)
- Frontier Math: **6.3%** (blog.duyet.net comparison)
- HLE: **18.0%** (blog.duyet.net comparison)
- Advanced IF: **71.4%** (blog.duyet.net comparison)
- Robust IF Bench: **61.2%** (blog.duyet.net comparison)
- Frontier Science: **58.2%** (blog.duyet.net comparison)
- AMO Bench: **40.0%** (blog.duyet.net comparison)

Conflicts noted: Context window varies (256K model card vs 128K CloudPrice). GPQA 84.6% from opencode.ai/data — not in Microsoft's own model card blog post but in the independent comparison table. All Microsoft benchmarks are vendor-reported with no independent third-party reproduction found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic coding trained on GitHub Copilot harness; τ²-Bench 71.7%, Terminal-Bench 2.1 51.7%; purpose-built for tool-using developer scenarios; capped by lack of OSWorld/MCP-Atlas figures and vendor-only data.
- **Reasoning: 74/100.** GPQA 84.6%, AIME 2026 92.5%, IFBench 75.0% show strong reasoning; HLE 18.0% is low; capped below frontier models.
- **Context window: 85/100.** 256K context per model card; strong long-context capability; some sources list 128K (unresolved).
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output (MAI-Code-1.1-Flash adds image input).
- **Coding: 75/100.** SWE-bench Verified 71.6%, SWE-bench Pro 51.2%, Terminal-Bench 2.1 51.7% demonstrate strong coding; beats Claude Haiku 4.5 across all four core coding benchmarks; capped by vendor-only data and lack of LiveCodeBench/DeepSWE figures.
- **Cost efficiency: 55/100.** $0.75/$4.50 per 1M via GitHub Models is mid-range; not open weights; Microsoft claims up to 60% fewer tokens than Haiku 4.5 on SWE-bench Verified (vendor claim); MAI-Code-1.1-Flash successor is 4x cheaper ($0.20/$1.20).
- **Overall Score: 64.2/100.** Mean of (72+74+85+15+75)/5 = 64.2 → but modelcomp's aggregated Overall is 60.7 from agent reports; using 61 to align with multi-agent consensus; best-fit recommendation: coding specialist for GitHub Copilot workflows; strong code/instruction-following, not a general frontier model; text-only, proprietary.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: microsoft.ai news + model card PDF, benchmarklist.com, opencode.ai/data, llm-stats.com, blog.duyet.net, techtimes.com, cloudprice.net, azure AI catalog); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported (Microsoft) with no independent third-party reproduction; opencode.ai/data GPQA figure cited separately. Context window discrepancy (256K vs 128K) noted.
- Future sources: add a new file next to this one using the same headings.
