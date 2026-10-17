# GLM-5 — findings by Qwen 3.8 Flash

- Source: Zhipu AI / Z.ai (`z-ai/glm-5`), cross-checked against official swebench.com leaderboard, NxCode deep-dive, OpenRouter, Artificial Analysis (cited)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Zhipu AI's 744B-A44B open-weight MoE flagship (Feb 2026), MIT-licensed and trained entirely on Huawei Ascend chips; competitive agentic-coding/research scores with an industry-best hallucination rate, at ~15% of frontier cost. Text-only — vision ships in separate GLM-4.5V / GLM-5V-Turbo SKUs.
- **Provider / access:** Z.ai direct API (`glm-5`, OpenAI-compatible, `https://api.z.ai/api/paas/v4/`), OpenRouter (`z-ai/glm-5`), OpenCode (`opencode/glm-5`); free tier at chat.z.ai. Chat Completions.
- **Release / knowledge:** 2026-02-11 release; knowledge cutoff not separately announced.
- **IDs:** `z-ai/glm-5`, `opencode/glm-5`; `glm-5-turbo` and `glm-5v-turbo` are distinct variants.
- **Context window:** 200,000 tokens total / 131,072 max output (NxCode spec table vs GLM-4.5).
- **Modalities:** text in / text out; reasoning yes (chain-of-thought shown via OpenRouter); tool calls yes; **no image/audio/video input** on the base GLM-5 route (vision is a separate model line).
- **Pricing (as of 2026-10-17):** $1.00 in / $3.20 out per 1M on Z.ai API (free at chat.z.ai); OpenRouter routes vary. ~10× cheaper than Claude Opus 4.6.
- **Architecture:** 744B total / 44B active MoE, 256 experts (8/token), MLA + DeepSeek Sparse Attention, 28.5T training tokens, MIT license, trained on 100k Huawei Ascend 910B.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (#1 open-source at release): **75.9** (NxCode/vendor table)
- Terminal-Bench 2.0 (command-line agentic coding): **56.2%** (vendor table — 9 pts behind Opus 4.6's 65.4)
- Tau2 / GDPval-AA: **no verified public score found for this exact ID**

Reasoning / knowledge:

- GPQA (graduate science): **68.2%** (vendor table)
- Humanity's Last Exam: **50.4%** (vendor table; > GPT-5.2 47.8, > Opus 4.5 46.2)
- AIME 2025: **88.7%** (vendor table)
- AA Omniscience Index (hallucination, lower is better): **-1** — best measured, driven by the Slime RL method cutting hallucination from 90% (GLM-4.7) to 34%

Coding:

- SWE-bench Verified: **77.8%** vendor-reported; **72.8%** (official swebench.com leaderboard, "GLM 5 high", mini-SWE-agent harness, 2026-02-17, $0.53/task)
- LiveCodeBench / SciCode: **no verified public score found** for this exact ID

Long context:

- 200K window with DSA; **no MRCR/RULER retrieval score published** (and 200K trails the 1M-class models).

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong research-agent browsing (BrowseComp 75.9) and tool calling, but Terminal-Bench 56.2 shows a real gap on command-line agentic work versus the frontier; capped there.
- **Reasoning: 70/100.** Best-in-class factuality (AA Omniscience -1, 34% hallucination) plus HLE 50.4 and AIME 88.7 are genuinely frontier-adjacent; GPQA 68.2 (well below the 85–94 leader band) is the binding cap.
- **Context window: 64/100.** 200K total / 131K out with sparse-attention efficiency is a solid working mid-tier, but a full generation behind the 1M-class leaders and unverified on long-context retrieval.
- **Multimodal: 15/100.** Text-only input/output on the base route — image/audio/video are not supported here (they live in the separate GLM-4.5V / GLM-5V-Turbo models) — the template's text-only floor.
- **Coding: 75/100.** Its headline strength: 77.8% vendor / 72.8% official-leaderboard SWE-bench Verified and an agentic-engineering design; tempered by the weak Terminal-Bench 2.0 result.
- **Cost efficiency: 90/100.** MIT open weights, free chat.z.ai tier, and $1/$3.20 API pricing give exceptional price-performance (~15% of frontier cost for ~95% of capability).
- **Overall Score: 58.4/100.** Half-up mean of the five quality dims (68+70+64+15+75)/5 = 58.4. The text-only modality is the single largest drag; best fit is cheap, low-hallucination open-weight coding + research agents where multimodality isn't required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — official SWE-bench leaderboard, NxCode GLM-5 deep-dive (vendor table + spec/architecture), OpenRouter model/vision-SKU listings, Z.ai site; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
