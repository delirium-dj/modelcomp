# MAI-Code-1-Flash — findings by Nemotron 3 Ultra 550B A55B

> Source: Microsoft (`mai-code-1-flash`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's lightweight Mixture-of-Experts coding model (137B total, 5B active params) optimized for GitHub Copilot. Designed for fast, iterative coding with adaptive thinking efficiency.
- **Provider / access:** GitHub Copilot (Business/Enterprise), Azure AI Foundry, OpenRouter (`microsoft/mai-code-1-flash`). Chat Completions API.
- **Release / knowledge:** 2026-06-02 (announced at Build 2026); knowledge cutoff not published.
- **IDs:** `microsoft/mai-code-1-flash` (no free tier on OpenCode Zen; included in Copilot subscription)
- **Context window:** 256,000 tokens total (verified via Microsoft AI blog, BenchLM, llm-stats).
- **Modalities:** Text in, text out; no native image/audio/video/PDF input; reasoning (adaptive CoT) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-29):** Included in GitHub Copilot Business/Enterprise subscription; Azure/OpenRouter: provider list pricing (not separately published). No standalone free API tier.
- **Architecture:** 137B total parameters, ~5B active per token (MoE); sparse Mixture-of-Experts; proprietary (Microsoft); not open-weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found for v1.0** (v1.1 scores 62.9% per BenchLM)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not listed separately** (v1.1 listed)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **71.6%** (Microsoft AI blog, APIMart, BenchmarkList — Microsoft Copilot harness)
- SWE-bench Pro: **51.2%** (Microsoft AI blog, APIMart — same harness; beats Haiku 4.5's 35.2%)
- SWE-Pro: **no separate score found** (Pro = 51.2% above)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **HumanEval: no verified public score found**; Microsoft claims "beats Claude Haiku 4.5 on all core coding benchmarks tested" (4 evaluations unnamed)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 256K window

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated.

- **Tool use: 55/100.** No Terminal-Bench v1.0 score; v1.1 scores 62.9% but different model. Capped by absence of v1.0 agentic suite verification.
- **Reasoning: 45/100.** Zero published GPQA/HLE/LCR scores; capped by complete evidence gap. Adaptive thinking praised but unquantified on standard reasoning benchmarks.
- **Context window: 85/100.** 256K tokens places it in 256K–512K tier (mapping: 85); no retrieval benchmarks (MRCR/RULER) to validate effective use.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, video, or PDF modalities.
- **Coding: 75/100.** SWE-bench Verified 71.6% and SWE-bench Pro 51.2% (both Microsoft Copilot harness) are strong real-repo signals; beats Haiku 4.5 on both. Capped by single-harness dependence, no LiveCodeBench/HumanEval/SciCode for breadth.
- **Cost efficiency: 65/100.** Bundled in Copilot subscription (effective $0 marginal for subscribers); standalone API pricing not published. Hard to compare without public per-token rates.
- **Overall Score: 55/100.** Mean of (55 + 45 + 85 + 15 + 75) / 5 = 55.0 → half-up 55. Best fit: excellent Copilot-integrated coding model for Microsoft ecosystem; reasoning breadth and independent benchmark replication needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (Microsoft AI blog, GitHub Blog, BenchLM, llm-stats.com, APIMart, BenchmarkList, Reddit GitHubCopilot, LinkedIn Microsoft AI posts, YouTube reviews); scores are normalized 1–100 interpretations, not official vendor scores. All coding benchmarks from Microsoft's own Copilot harness — independent replication pending.
- Future sources: add a new file next to this one, e.g. `MAI_Code_1_Flash.md`, using the same headings.