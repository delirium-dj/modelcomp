# MAI-Code-1-Flash — findings by Ling 3.1 Flash

- Source: Microsoft AI (`mai-code-1-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's lightweight agentic coding model for fast, efficient everyday developer workflows — built from the MAI-Thinking-1 mid-training checkpoint on clean, traceable, enterprise-grade data with no third-party distillation. Rolling out in GitHub Copilot (VS Code model picker + default auto picker); outperforms Claude Haiku 4.5 across all core coding benchmarks at better price-performance.
- **Provider / access:** GitHub Copilot (VS Code; Copilot CLI planned later); Microsoft Foundry (`mai-code-1-flash`); OpenCode Zen `opencode/mai-code-1-flash` (no Free ID — `noFreeId` in curated meta).
- **Release / knowledge:** Released 2026-06-02; training March–May 2026; knowledge cutoff not stated.
- **IDs:** `opencode/mai-code-1-flash` (Zen, paid); `mai-code-1-flash` (Microsoft Foundry); Copilot picker `mai-code-1-flash-picker`.
- **Context window:** 256,000 tokens — verified on the Microsoft model card and Foundry listings.
- **Modalities:** text in; text out; adaptive solution-length control; tool calls yes (trained directly with the GitHub Copilot harness; agentic tool use evaluated); JSON mode not stated.
- **Pricing (as of 2026-10-10):** $0.75 / 1M input, $4.50 / 1M output (Microsoft Foundry / GitHub Copilot list), cache read $0.075 / 1M.
- **Architecture:** sparse MoE, 137B total / 5B active per token; ~2M synthetic agentic tasks in mid2 phase; final RL across 150,000+ environments; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **54.8%** (Microsoft model card, GitHub Copilot production VS Code harness; vs Claude Haiku 4.5 41.6%)
- τ²-Bench Telecom (agentic tool use): **71.7%** (Microsoft model card; vs Haiku 4.5 54.7%)
- SWE-bench Verified: **71.6%** (same harness; vs 66.6% — with up to 60% fewer tokens)
- SWE-bench Pro: **51.2%** (vs 35.2%, +16 pts)
- SWE-bench Multilingual: **65.5%** (vs 62.7%)
- IF Bench Precise: **75.0** (vs 46.1, +28.9); Advanced IF (rubric): **71.4** (vs 56.9); Robust IF (internal): **61.2** (vs 45)
- GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (Microsoft model card; biology, chemistry, physics; vs Haiku 4.5 73.2%)
- AIME 2026 (competitive math): **92.5%** (vs 83.3%)
- AMO Bench (olympiad math): **40%** (vs 16%)
- Frontier Math (Tier 1–3): **6.3%** (vs 2.8%)
- HLE (academic reasoning): **18%** (vs 9.5%)
- Frontier Science: **58.2%** (vs 42.3%)
- Internal adversarial-reasoning suite (186 questions, 34 categories, inverted classics / impossible tasks / underdetermined scenarios): **85.8%** adjusted accuracy (Einstellung traps < 50%)
- LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **71.6%**; SWE-bench Pro: **51.2%**; SWE-bench Multilingual: **65.5%**; Terminal-Bench 2: **54.8%** (see tool use)
- Artifacts Bench (visual coding): **36.4%** (vs 36.6%)
- DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (256K window; no MRCR / RULER / GraphWalks number) — no verified public score found.

Production telemetry (VS Code Copilot Chat, 2026-06-02 → 2026-07-24, Microsoft blog):

- Code survival / commit survival / accept rate: baseline (0%) vs Claude Haiku 4.5 (-2% / -8% / -10%) and GPT-5.4 Mini (-3% / -8% / -7%); GPT-5.6 Luna (+3% / +3% / +4%) and Kimi K2.7 Code (+4% / +6% / -6%) reach quality advantages but need 67–94% more tokens per turn and more turns per commit
- 2-day repeat usage: +6% vs GPT-5.4 Mini, +11% vs Haiku 4.5; median tokens per turn: 13% lower than GPT-5.4 Mini, 11% lower than Haiku 4.5

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-Bench Telecom 71.7% is strong and Terminal-Bench 2 54.8% is mid, with best-in-class instruction-following (IF Bench Precise 75.0); no Terminal-Bench 2.1, GDPval-AA, or MCP-Atlas number exists.
- **Reasoning: 68/100.** GPQA 84.6% and AIME 2026 92.5% are strong, but HLE 18% and Frontier Math 6.3% are weak and Frontier Science 58.2% is mid — a coding-weighted reasoning profile.
- **Context window: 71/100.** 256K tokens — the 200K–500K band just above the 200K = 70 anchor; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out per the card) — the text-only floor band.
- **Coding: 76/100.** SWE-bench Verified 71.6%, Multilingual 65.5%, and Pro 51.2% (all ahead of Claude Haiku 4.5 in the same harness, with up to 60% fewer tokens) are strong; Terminal-Bench 2 54.8% is mid and no DeepSWE/SciCode number exists.
- **Cost efficiency: 85/100.** $0.75/$4.50 per 1M (cache read $0.075) — cheap input, premium output; production telemetry shows 11–13% lower token usage than Haiku 4.5 / GPT-5.4 Mini, improving effective cost.
- **Overall Score: 59/100.** Mean of Tool 65, Reasoning 68, Context 71, Multimodal 15, Coding 76 = 59.0. Best-fit: token-efficient everyday agentic coding model for VS Code / Copilot workflows; thin evidence on frontier reasoning and long context.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Microsoft AI launch post and model/data cards 2026-06-02, VS Code blog production telemetry 2026-07-29, Microsoft Foundry and llmboard pricing); scores are normalized 1–100 interpretations, not official vendor scores. All benchmark pairs are Microsoft-reported under the identical GitHub Copilot production harness.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
