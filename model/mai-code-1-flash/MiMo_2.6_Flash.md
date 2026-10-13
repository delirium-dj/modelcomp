# MAI-Code-1-Flash — findings by MiMo 2.6_Flash

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft coding model built for fast, efficient everyday developer workflows (GitHub Copilot individual users in VS Code model picker / auto picker). Trained from scratch on clean traceable enterprise-grade data without third-party distillation. Outperforms Claude Haiku 4.5 with better price/performance across core coding benchmarks, solving SWE-Bench Verified tasks with up to 60% fewer tokens.
- **Provider / access:** GitHub Copilot / GitHub Models (`mai-code-1-flash` / `mai-code-1-flash-picker` / `mai-code-1-flash-internal`); Microsoft Foundry; closed weights (no open release).
- **Release / knowledge:** Released 2026-06-02 (Microsoft AI news); knowledge cutoff 2025-12 (model.kyssta.lol catalog).
- **IDs:** `microsoft/mai-code-1-flash`; GitHub Copilot `github_copilot/mai-code-1-flash-internal`.
- **Context window:** 256K tokens (model.kyssta / llm-stats; cloudprice lists internal variant at 128K — use 256K for the public picker model); max output 128K.
- **Modalities:** text in; text out; reasoning mode; function calling + parallel function calling; structured outputs; no vision input.
- **Pricing (as of 2026-10-13):** GitHub Models $0.75 / 1M input, $4.50 / 1M output, $0.075 cache read. No open-weight free tier.
- **Architecture:** ~138B parameters (llm-stats family sizing), closed/proprietary; optimized for coding-agent token efficiency on production Copilot harness.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **71.7%** (llm-stats)
- Function calling + parallel tool calling (catalog)
- IFBench: **75.0%** (llm-stats); vendor also cites IF Bench / Advanced IF / Robust IF / τ¹-Bench above Haiku 4.5

Coding:

- SWE-Bench Verified: **71.6%** (llm-stats) / **72.6%** attributed to close sibling MAI-Code-1.1-Flash
- SWE-Bench Pro: **51.2%** (vendor; vs Haiku 4.5 35.2%, +16 pts)
- Terminal-Bench 2: vendor outperforms Haiku 4.5 (figure not published for base model; 62.9% is 1.1-Flash sibling)
- Token efficiency: up to **60% fewer** solution tokens on SWE-V vs Haiku 4.5 (vendor)

Reasoning / knowledge:

- AIME 2026: **92.5%** (llm-stats; notable for a coding flash model)
- GPQA: **84.6%** (llm-stats)

Long context:

- 256K window; no MRCR / RULER figure published.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ² Telecom 71.7% + parallel tool calling + Copilot production-harness integration. Capped by no PinchBench/ClawEval-class public figures and narrower agentic surface than general-purpose flagships.
- **Reasoning: 75/100.** AIME26 92.5 and GPQA 84.6 are strong for a coding-focused flash model. Capped by no HLE / MMLU-Pro / broader STEM suite published.
- **Context window: 80/100.** 256K is solid mid-2026 for coding agents loading large repos. Capped by no long-context retrieval measurements and no 1M tier.
- **Multimodal: 15/100.** Text-only — no vision input. Capped at text-only floor.
- **Coding: 74/100.** SWE-V ~72 + SWE-Pro 51.2 (Haiku-4.5-beating) + massive token efficiency on Copilot harness. Capped slightly by mid SWE-Pro vs frontier 55+ and no public LCB figure for the base model.
- **Cost efficiency: 65/100.** $0.75/$4.50 is mid-range for closed coding models; Copilot bundling softens effective cost. Capped by closed weights, no self-host, and higher output rate than open flash peers.
- **Overall Score: 62.4/100.** Mean of (68 + 75 + 80 + 15 + 74) / 5 = 62.4 → **62**. Best-fit recommendation: default Copilot/GitHub Models coding flash when you want Haiku-4.5-beating SWE performance with aggressive token thrift inside the Microsoft ecosystem; prefer MAI-Code-1.1-Flash for newer benchmarks or open-weight peers (Ling-3.0-flash) for cost/self-host.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (microsoft.ai news, model.kyssta.lol, cloudprice.net, llm-stats.com comparisons, explainx.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
