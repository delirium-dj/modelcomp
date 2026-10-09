# Ox Alpha — findings by GLM 5.3 Flash

- Source: Z.AI (`opencode/ox-alpha` on OpenCode Zen, retired; `ox-alpha` on OpenRouter, retired — now released as **GLM-5.3-Flash**)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth preview alias of GLM-5.3-Flash)
- **Short description:** An anonymous frontier-class coding model that appeared on OpenRouter on 2026-08-20 with no named developer, then on OpenCode Zen's free tier. **Identity now confirmed: Z.AI revealed on August 26, 2026 (TechCrunch; Bloomberg) that Ox Alpha was its GLM-5.3-Flash — a 320B-total / 18B-active MoE — and released its weights openly.** The free stealth preview has ended and both the Zen and OpenRouter stealth listings are gone; the model lives on as the production GLM-5.3-Flash (same weights as this repo's `glm-5.3-flash` folder).
- **Provider / access:** stealth endpoints retired — OpenCode Zen `opencode/ox-alpha` and OpenRouter `ox-alpha` listings are gone (codersera). The model is now accessed as GLM-5.3-Flash: zai-org/GLM-5.3-Flash weights on Hugging Face (MIT license), OpenCode Zen `opencode/glm-5.3-flash` ($0.15/$0.50), and OpenRouter.
- **Release / knowledge:** surfaced 2026-08-20 (AiToolsObserver); attribution confirmed 2026-08-26; weights released as GLM-5.3-Flash on August 26, 2026.
- **IDs:** `opencode/ox-alpha` / `ox-alpha` (both retired); production IDs: `opencode/glm-5.3-flash` (Zen), `zai-org/GLM-5.3-Flash` (HF weights).
- **Context window:** **1M tokens — now confirmed** (aicybr/llmhangar; resolves the old 1M-vs-200K conflict in favor of 1M, matching the GLM-5.3-Flash production spec: 1,000,000 total / 131,072 max output per models.dev).
- **Modalities:** **native multimodality — now confirmed** (aicybr: native multimodal input on the GLM-5.3-Flash architecture); text output; reasoning yes.
- **Pricing (as of 2026-10-09):** the $0 stealth preview ended; the model now ships as GLM-5.3-Flash at $0.15 in / $0.50 out per 1M (models.dev Zen listing) — unusually low API pricing for its class; MIT weights are free to self-host.
- **Architecture:** **now confirmed:** GLM-5.3-Flash — 320B total / 18B active MoE, hybrid linear+sparse attention, native multimodality, open weights (MIT), large-scale inference run on Chinese AI chips (aicybr; Bloomberg via stealthmodelwatch).

### Raw benchmarks found

Agent / tool use:

- Independent community benchmark, 10 real-world OSS coding tasks: **80% mean pass rate (8/10 solved)** — +15 points over the best reference model (oxalpha.com, reproduced as published; small-sample caveat: one task moves the mean by 10)
- Solved **meriyah-explicit-resource-decl**, the table's hardest task (best reference model: 1/4); missed `scc-bounded-memory-spilling` and `vulture-persistent-analysis-cache`
- Terminal-Bench / SWE-bench / OSWorld: no verified public score found under the Ox Alpha alias (the production GLM-5.3-Flash has its own benchmark record in `model/glm-5.3-flash/`)

Reasoning / knowledge:

- Positioned as a "powerful reasoning model" with logic-puzzle strength; GPQA / HLE / AA Intelligence Index: no verified public score found under the Ox Alpha alias

Coding:

- Head-to-head means (same 10-task run): Ox Alpha **80%** vs Claude Fable 5 (max) **65%**, GLM-5.3 (max) **62%**, Grok-4.6 (xhigh) **62%**, GPT-5.6-sol (max) **52%** (oxalpha.com third-party data)
- DeepSWE was referenced in early coverage; later analysis says the headline number shifted once the full test set ran — treat initial scores as preliminary (AiToolsObserver)

Long context:

- 1M confirmed (was claimed vs 200K-conflict); no retrieval benchmark found under the Ox Alpha alias

### Normalized scores (1–100)

- **Tool use: 82/100.** Top of the community coding table (80% mean) suggests strong agentic-coding ability, but a 10-task sample with pass/fail scoring cannot support a higher score; the production GLM-5.3-Flash record carries the harness-verified evidence now.
- **Reasoning: 78/100.** "Powerful reasoning" positioning and the hardest-task solve are encouraging; zero published reasoning benchmarks under the Ox Alpha alias caps it provisionally.
- **Context window: 95/100.** 1M tokens now confirmed by the revealed GLM-5.3-Flash identity (≥1M tier = 95–100); no measured ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 75/100.** Native multimodality now confirmed by the identity reveal (image input on the GLM-5.3-Flash architecture); text output and no measured multimodal benchmark keep it at the 75–90 band floor.
- **Coding: 90/100.** 80% mean vs frontier reference models (Fable 5, GLM-5.3, GPT-5.6-sol, Grok-4.6) is a standout result even at n=10.
- **Cost efficiency: 96/100.** The $0 stealth tier is gone, but the revealed GLM-5.3-Flash pricing ($0.15/$0.50 per 1M) sits in the ~$0.10/$0.20 = 97–99 methodology band; MIT weights are free to self-host.
- **Overall Score: 84/100.** Mean of the five quality dims (82 + 78 + 95 + 75 + 90) / 5 = 84.0. Best fit: the resolved identity makes this folder a historical stealth-preview record of GLM-5.3-Flash — use the production `glm-5.3-flash` entry for current comparisons; the 10-task coding result remains the standout evidence of the stealth window.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; TechCrunch 2026-08-26 confirmation, aicybr, llmhangar, codersera, stealthmodelwatch, synapnews, oxalpha.com cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: resolves the old draft's open questions — identity confirmed (Z.AI / GLM-5.3-Flash, 320B/18B, MIT open weights), 1M context confirmed, native multimodality confirmed, stealth listings retired — Context 80→95, Multimodal 45→75, Cost 100→96, Overall 79→84.
- Future sources: add a new file next to this one, e.g. `Ox_Alpha_Retired.md`, using the same headings.
