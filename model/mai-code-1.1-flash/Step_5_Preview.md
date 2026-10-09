# MAI-Code-1.1-Flash — findings by Step 5 Preview

- Source: Microsoft AI (`MAI-Code-1.1-Flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash (Microsoft AI's in-house coding model; MAI-Code-1-Flash was the June 2026 original)
- **Short description:** Microsoft's small-tier coding workhorse, built "for developers, not benchmarks" — trained end-to-end on Microsoft's own curated data (no third-party distillation) from the MAI-Thinking-1 mid-training checkpoint, and tuned inside the actual GitHub Copilot/VS Code production harnesses: ~2M synthetic agentic tasks in a mid2 phase, then large-scale RL across 150,000+ environments. The 1.1 update (2026-08-11) adds native image input and focuses on CLI and .NET work: +22% Terminal-Bench 2.1 in GitHub Copilot CLI, +15% on .NET tasks, 4% more code surviving to commit, 25% faster token streaming, 25% fewer tokens per task — at a quarter of 1.0's price (73% lower list; 0.25× premium-request multiplier for Copilot annual subscribers). It now also ships quantized for on-device use in GitHub Copilot on Surface Laptop Ultra (53 GB, 80% smaller, with DFlash2 speculative decoding).
- **Provider / access:** GitHub Copilot (VS Code, Copilot CLI, auto-picker), Microsoft AI API; on-device local variant on Windows/Surface.
- **Release:** 2026-08-11 (1.0: 2026-06-02).
- **Context window:** not published in the model card; the on-device build is benchmarked at 64K/128K/256K (peak memory 75.5 GB at 256K).
- **Modalities:** Text and image in → text out (1.1 added vision); adaptive solution length.
- **Pricing (as of 2026-10-09):** 0.25× premium-request multiplier in Copilot; 73% lower list than MAI-Code-1-Flash; free (no per-inference charge) when run locally on device.
- **Architecture:** coding-optimized MoE — 137B total / 6.8B active (per the local-model announcement).

### Raw benchmarks found

MAI-Code-1-Flash model card (production VS Code harness; Claude Haiku 4.5 in parentheses):

- SWE-bench Verified: **71.6%** (66.6) — using up to 60% fewer tokens
- SWE-bench Pro: **51.2%** (35.2); SWE-bench Multilingual: **65.5%** (62.7); Terminal-Bench 2: **54.8%** (41.6)
- AIME 2026: **92.5%** (83.3); AMO Bench (olympiad math): **40.0%** (16.0); FrontierMath T1-3: **31.2%** (2.8)
- GPQA Diamond: **84.6%** (73.2); Frontier Science: **58.2%** (42.3); HLE: **6.3%** (2.8)
- ArtifactsBench (visual/interactive coding): **36.4%** (36.6)
- IFBench: **75.0%** (46.1); Rubric-based IF 71.4 (56.9); Robust IF 61.2 (45); τ²-Bench telecom: **71.7%** (54.7)
- Microsoft's internal adversarial-reasoning benchmark (186 questions, 34 categories): **85.8% adjusted accuracy** (Einstellung traps still <50%)

MAI-Code-1.1-Flash (model card + Windows on-device blog + BenchmarkList):

- Terminal-Bench 2.1: **62.9%** (cloud, Oct 2026 measurement; the 1.1 model card lists 51.7%, 61st percentile of 194)
- SWE-bench Verified: **72.6%** (cloud) / **70.80%** (quantized on-device)
- Terminal-Bench 2.1 quantized on-device: **66.29%** (vs GPT-OSS-120B's 23.6%)
- Prompt processing 923.5 / 769.8 tok/s at 64K / 128K context

VS Code production telemetry (6/2–7/24/26, vs other models):

- Outperforms Claude Haiku 4.5 and GPT-5.4 Mini on code-survival, commit-survival and accept rates; GPT-5.6 Luna and Kimi K2.7 Code are +3–6% on quality but need +67–94% more tokens per turn
- Copilot Auto A/B flights: 11% higher 2-day repeat usage than Haiku 4.5, 13% lower median token usage than GPT-5.4 Mini

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench telecom 71.7%, IFBench 75.0% and the whole production-harness training story (150,000+ RL environments, Copilot harness) point to solid tool use; no MCP Atlas, Toolathlon or GDPval number exists, so mid-upper band.
- **Reasoning: 66/100.** AIME 2026 92.5%, GPQA Diamond 84.6%, Frontier Science 58.2% and 85.8% on Microsoft's adversarial set are genuinely upper-mid for a 6.8B-active coding model; HLE 6.3% and FrontierMath 31.2% cap it.
- **Context window: 70/100.** No cloud context window is published in the model card (the on-device build is tested at 64K/128K/256K with 923.5/769.8 tok/s prompt processing) — a 200K-500K structural read with "no verified public score found" noted.
- **Multimodal: 64/100.** Text + image in → text out (added in 1.1) is the 60–70 band; ArtifactsBench 36.4% shows visual/interactive coding is its weakest area — roughly Haiku-4.5-parity rather than a vision leader.
- **Coding: 70/100.** SWE-bench Verified 71.6–72.6%, SWE-Multilingual 65.5%, TB 2.1 62.9% (1.1, +22% in the Copilot CLI harness) and the strongest production telemetry of any small model (beats Haiku 4.5 on every survival metric) — but SWE-Pro 51.2% and ArtifactsBench 36.4% keep it below the frontier band.
- **Cost efficiency: 92/100.** A quarter of 1.0's price, 0.25× premium multiplier in Copilot, 25% fewer tokens per task than 1.0 and free on-device inference — the methodology's ~$0.6/$2.2 ≈ 92 tier, purpose-built for token-efficient Copilot traffic.
- **Overall Score: 67/100.** Best-fit recommendation: the best value small coding model inside the Microsoft/GitHub ecosystem — beats Haiku 4.5 on every production survival metric at a quarter of the cost, with a 53 GB on-device build that keeps 70%+ of SWE-bench on a laptop.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Microsoft AI model card + data card PDFs, MAI-Code-1.1-Flash announcement, microsoft/MAI-Code GitHub, VS Code blog production-telemetry analysis, Windows on-device benchmarks, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_2.md`, using the same headings.
