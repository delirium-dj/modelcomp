# GLM 5.3 (Free) — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`opencode/glm-5.3-free`; open weights `zai-org/GLM-5.3`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; **Zen listing change detected**: `glm-5.3-free` no longer appears in today's `/zen/v1/models` list — the plain `glm-5.3` ID does; GLM-5.3 base specs now fully verified from the official card)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE for agentic software development and multi-step tool execution; was listed as a free promotional tier on OpenCode Zen at 204K context (native 1M per card).
- **Provider / access:** OpenCode Zen — **as of 2026-10-13, the `/zen/v1/models` listing contains `glm-5.3` but NO `glm-5.3-free` ID** (checked against the full live list); apparently renamed/rolled into the plain route (sandbox free entries now carry a `-free` suffix only for newer promos). Z.AI API; open weights HF `zai-org/GLM-5.3` (custom `glm-5.3` license — NOT MIT, verified this pass).
- **Release / knowledge:** Released 2026-08-18 (OpenRouter + HF eval collection — verified this pass); cutoff not verified.
- **IDs:** `opencode/glm-5.3-free` (historical Free Zen ID — see availability note); `zai-org/GLM-5.3` (weights); `z-ai/glm-5.3` (OpenRouter).
- **Context window:** 1M native (official card); **Zen free tier listed 204K** (promotional cap, first pass).
- **Modalities:** text in/out (Zen listing; GLM-5V variants cover vision); reasoning yes — **always on, cannot be disabled; efforts low/high/max, default max** (official card); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** Free Zen tier was $0 (promo status uncertain after the ID change above); open weights → self-host; OpenRouter $0.055/M in / $5/M out (verified this pass); Z.AI API list pricing not verified.
- **Architecture:** open-weight MoE (glm_moe_dsa, custom `glm-5.3` license), **753B params** (HF safetensors — verified this pass; first pass said undisclosed). Same base as GLM-5.2; gains are post-training only.

### Raw benchmarks found

Agent / tool use (official-card rows marked *official*, new/confirmed via glm-5.3 card this pass — measured on the same served model):

- Terminal-Bench 2.1: **88.2%** *(official; matches first pass)*; TB 3.0: **28.3%** *(official)*
- Long-Horizon Terminal-Bench 2: **12** solved (HF eval-results, Oct 2026 — **new**)
- GDPval-AA v2: **1769 Elo** (57.3% normalized) *(official — matches first pass)*
- Tau3-Banking (AA): 50.3% (benchlm.ai, first-pass snapshot)
- CyberGym: **84.5%** *(official; SOTA per card)*; ExploitGym 2h/6h: **105/130**; ExploitBench: **54.4%** *(official — new)*
- Toolathlon-Verified: **73.0%** *(official — matches)*; AutomationBench v1.0.6: **48.2%** *(official — conflicts with first-pass AA 62.2%, flagged)*; Agents' Last Exam CLI: **28.5%** *(official — new)*
- AA Briefcase 1525; AA Agentic Index 53.4%; HLE w/ tools 62.5% (benchlm.ai, first-pass snapshot)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 91.7% (AA); 88.1% (Vals) (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): 42.3%; w/ tools 62.5% *(official)* (benchlm.ai + card)
- AA-LCR: 79.7%; MLCR-AA: 48.3%; CritPt: 19.1% (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: 44.8; BenchLM overall 65.55/100, #26 of 507 (benchlm.ai, first-pass snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: 33.9% / 29.6% (benchlm.ai, first-pass snapshot)
- MMLU-Pro (Vals): 86.8% (benchlm.ai, first-pass snapshot)

Coding:

- SWE-bench (Vals): 95.4% (benchlm.ai, first-pass snapshot); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): 80.5% (benchlm.ai, first-pass snapshot)
- FrontierSWE: **78.1%** *(official)*; DeepSWE: **66.9%** *(official)*; NL2Repo: **58.0%** *(official)*; SWE-Marathon v1.1: **42.5%**; PostTrainBench: **39.8%**; ProgramBench: **19.0%** *(official — new)*; VulcanBench v3: 78.3% (benchlm.ai, first-pass snapshot)
- AA-SciCode: 59.0%; AA Coding Index: 74.8 (benchlm.ai, first-pass snapshot)

Long context:

- AA-LCR 79.7% within the 1M window (benchlm.ai, first-pass snapshot); official methodology uses 1M context with 128K max output; no MRCR/RULER rows.

Multimodal:

- Design Arena Website: 1312 Elo (benchlm.ai, first-pass snapshot); text-only on the Zen entry.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 89/100.** +1 — official confirmation of TB 2.1 88.2%, CyberGym 84.5%, Toolathlon 73.0% plus new ALE-CLI 28.5% and LHTB-2 12 rows; capped by TB 3.0 28.3% and the AutomationBench version conflict.
- **Reasoning: 81/100.** Unchanged — GPQA 91.7%, HLE w/ tools 62.5%, MLCR 48.3%, low hallucination 29.6%; capped by CritPt 19.1%.
- **Context window: 84/100.** Unchanged — 1M native with LCR 79.7%; free-tier cap (204K) costs practical headroom.
- **Multimodal: 15/100.** Unchanged — text-only on this Zen entry — floor.
- **Coding: 85/100.** Unchanged — SWE-bench (Vals) 95.4%, FrontierSWE 78.1% (official), Coding Index 74.8; capped by ProgramBench 19.0% (official) and LCB 80.5%.
- **Cost efficiency: 96/100.** −2 — the free promo's continuity is now uncertain (ID vanished from today's Zen listing; successor route `glm-5.3` not verified as free), so $0 can no longer be taken as guaranteed going forward; open weights + $0.055/$1.75-class input keep value elite.
- **Overall Score: 71/100.** Half-up mean of the five quality dims (89+81+84+15+85)/5 = 70.8 → 71 (unchanged; cost excluded as always). Best fit: free agentic coding at near-frontier agent metrics if the free route is still reachable for you — otherwise the same profile applies via cheap paid/hosted GLM-5.3.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (OpenCode Zen `/zen/v1/models` listing checked 2026-10-13 — `glm-5.3-free` absent, `glm-5.3` present; official HF card `zai-org/GLM-5.3` — 753B params, custom license, Aug 18 2026 release, official benchmark/footnote methodology rows incl. ExploitGym/ALE/SWE-Marathon/PostTrainBench/ProgramBench; OpenRouter `z-ai/glm-5.3` — $0.055/$5, 1M context). Conflicts flagged: AutomationBench 48.2 official vs 62.2 first-pass AA. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
