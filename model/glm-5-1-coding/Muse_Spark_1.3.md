# GLM 5.1 Coding — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as `GLM 5.1 Coding Free`, but no `glm-5.1-*-free` ID exists on Zen — evaluated as paid `opencode/glm-5.1`.

## Model card

- **Name:** GLM 5.1 Coding (requested as GLM 5.1 Coding Free)
- **Short description:** Z.AI flagship open-weights MoE for agentic engineering and long-horizon (up to 8h) autonomous coding: SWE-Pro SOTA, NL2Repo/Terminal-Bench gains, sustained optimization over hundreds of rounds/thousands of calls.
- **Provider / access:** OpenCode Zen paid `opencode/glm-5.1` (`https://opencode.ai/zen/v1/chat/completions`). **No `glm-5.1-*-free` ID on Zen as of 2026-09-17** — scored on paid pricing. Weights: Hugging Face `zai-org/GLM-5.1` (MIT), api.z.ai / BigModel.cn, Claude Code / OpenClaw compatible.
- **Release:** 2026-04-07. 754B total (744B in some trackers), 40B active, MoE. Knowledge 2025-11.
- **Context window:** **200,000–205,752** (200K Zen-class, 202,752 arch, 205K BenchGecko); 128K out. In 200K tier.
- **Modalities:** text in/out; reasoning, function calling, structured output, MCP tools. No vision.
- **Pricing (verified, not free):** **$1.40 in / $4.40 out / $0.26 cached** (Z.ai/VentureBeat; Zen GLM 5.x band). Cheapest routes $0.97–$1.05 in / $3.04–$3.50 out. Coding Plans $48.60–$432/quarter.

### Raw benchmarks found (Z.ai self-reported + third-party)

- SWE-Bench Pro: **58.4%** (SOTA in Z.ai set; vs GPT-5.4 57.7, Opus 4.6 57.3, GLM-5 55.1); SWE Verified **74.2%** (BenchGecko); Arena Code **1,530 Elo** (#3, behind Opus 4.6 1,542/1,548)
- Terminal-Bench 2.0: **63.5% Terminus-2 / 69.0% best (Claude Code)** (vs GLM-5 56.2, Opus 4.6 65.4, Gemini 3.1 Pro 68.5, GPT-5.4-Codex 75.1)
- NL2Repo **42.7%** (vs GLM-5 35.9, Opus 4.6 49.8); CyberGym **68.7%** (vs Opus 66.6); BrowseComp 68.0%/79.3% w/ context mgmt; MCP-Atlas public **71.8%**; Tool-Decathlon 40.7%; Tau3 **70.6%** (vs Qwen3.6-Plus 70.7, Opus 72.4); Vending 2 $5,634
- Claw-Eval: **no isolated verified Claw-Eval number found** for 5.1 (use MCP-Atlas/Tool-Decathlon as proxy).
- Reasoning: HLE **31.0% / 52.3% w/ tools**; GPQA **86.2%**; AIME 2026 95.3%; IMO 83.8%; Index **32 (AA Reasoning)**; BenchGecko avg 70.4 (#49), coding 65.4 (#30), reasoning 62.1 (#45)
- Coding breadth: LiveBench Coding 75.4%, Reasoning 72.5%, OTIS AIME 92.2%

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau3 70.6%, MCP-Atlas 71.8%, BrowseComp 79.3% w/ mgmt, TB2.0 69% best — long-horizon standout.
- **Reasoning: 80/100.** GPQA 86.2%, HLE-tools 52.3%, AIME 95%+; base HLE 31% caps frontier.
- **Context window: 70/100.** 200K tier, 128K out.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** SWE-Pro SOTA 58.4% + Verified 74.2% + NL2Repo 42.7%.
- **Cost efficiency: 75/100.** Paid $1.40/$4.40 (no free ID). Would be 100 at $0 promo.
- **Overall Score: 69/100.** Top paid open coding/long-horizon pick; re-score to ~73 if free tier appears.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
