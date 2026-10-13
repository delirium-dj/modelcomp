# GLM-5.3 — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`glm-5.3`; open weights `zai-org/GLM-5.3`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; official HF card verifies 753B params + release date, adds cyber/exploitation and long-horizon rows, flags the license change to the custom `glm-5.3` license — NOT MIT)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (flagship)
- **Short description:** Z.AI's flagship open-weight GLM-5.3 MoE — **same base model as GLM-5.2, all gains from post-training** (official card). Elite agentic/coding stack: SWE-bench (Vals) 95.4%, TB 2.1 88.2%, CyberGym 84.5% (state of the art per card), GDPval-AA 1769. Served on OpenCode Zen as `glm-5.3`.
- **Provider / access:** Z.AI API; open weights HF `zai-org/GLM-5.3` (license **`glm-5.3` custom — NOT MIT**; GLM-5.2 was MIT — a real licensing tightening, verified this pass on the HF card); OpenCode Zen lists plain `glm-5.3` (verified 2026-10-13).
- **Release / knowledge:** Released **2026-08-18** (OpenRouter + eval-collection timestamps — confirms first-pass benchleader date); arXiv 2602.15763 technical report; cutoff not verified.
- **IDs:** `z-ai/glm-5.3` (OpenRouter) / HF `zai-org/GLM-5.3` (+ `zai-org/GLM-5.3-BF16`); Zen `glm-5.3`. Reasoning is **always on and cannot be disabled**; `reasoning_effort` accepts low/high/max, default max (official card & OpenRouter).
- **Context window:** **1M tokens** native (OpenRouter + official card).
- **Modalities:** text in/out; reasoning yes (always-on); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **OpenRouter headline $0.055/M in / $5/M out** (new this pass — first pass had hosted price unverified; extremely cheap input, standard-flagship output).
- **Architecture:** open-weight MoE (glm_moe_dsa), **753B params** (HF safetensors, BF16/F8_E4M3 — verified this pass; first pass said undisclosed). Emergent cyber capability called out on the card: SOTA on CyberGym, more than doubles GLM-5.2 on exploitation benchmarks.

### Raw benchmarks found

Agent / tool use (official-card rows marked *official*, new/confirmed this pass):

- Terminal-Bench 2.1: **88.2%** *(official; matches first-pass benchlm row)*; TB 3.0: **28.3%** *(official)*
- Long-Horizon Terminal-Bench 2 (IntelligenceLab): **12** solved (HF eval-results, LHTB-2.0 results Oct 2026 — **new**)
- GDPval-AA v2: **1769 Elo** *(official — matches first pass)*
- CyberGym: **84.5%** *(official; best in its launch table — incl. vs Fable 5 83.8 / GPT-5.6 Sol 83.6)*; ExploitGym 2h/6h: **105/130**; ExploitBench: **54.4%** *(official — NEW cyber-exploitation rows)*
- Toolathlon-Verified: **73.0%** *(official)*; AutomationBench v1.0.6: **48.2%** *(official — conflicts with first-pass AA 62.2%; different versions, flagged)*
- Agents' Last Exam (ALE-CLI): **28.5%** *(official — new)*
- Tau3-Banking (AA): 50.3%; AA Briefcase 1525; AA Agentic Index 53.4% (benchlm.ai, first-pass snapshot)
- Claw-Eval: no verified public score found
- HLE w/ tools: **62.5%** *(official)*

Reasoning / knowledge:

- GPQA Diamond: 91.7% (AA); 88.1% (Vals) (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): 42.3%; w/ tools 62.5% (official) (benchlm.ai + card)
- AA-LCR: 79.7%; MLCR-AA: 48.3%; CritPt: 19.1% (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: 44.8; BenchLM overall 65.55/100, #26 of 507; benchleader GLM 5.3 max: BenchLeader Index 65.2, #42 of 736 (benchlm/benchleader, first-pass snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: 33.9% / 29.6% (benchlm.ai, first-pass snapshot)
- MMLU-Pro (Vals): 86.8% (benchlm.ai, first-pass snapshot)

Coding (card table, *official* — first-pass rows all confirmed):

- SWE-bench (Vals): 95.4% (benchlm.ai, first-pass snapshot; no SWE-bench Verified split)
- DeepSWE v1.1: **66.9%** *(official)*; FrontierSWE Dominance: **78.1%** *(official)*; NL2Repo: **58.0%** *(official)*; SWE-Marathon v1.1: **42.5%**; PostTrainBench: **39.8%**; ProgramBench (Almost Solved): **19.0%** *(official — NEW/confirmed; card claims "+50% over GLM-5.2 on in-house Z.AI Code Bench" as the headline)*
- LiveCodeBench (Vals): 80.5%; AA-SciCode 59.0%; AA Coding Index 74.8; VulcanBench v3 78.3% (benchlm.ai, first-pass snapshot)

Long context:

- AA-LCR 79.7% at the 1M window (benchlm.ai, first-pass snapshot); official eval methodology consistently uses 1M context with 128K max output; no MRCR/RULER row.

Multimodal:

- Design Arena Website: 1312 Elo (benchlm.ai, first-pass snapshot); GLM-5V variants are separate models; text-first here.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 89/100.** +1 — the official card adds ALE-CLI 28.5%, CyberGym 84.5%, Toolathlon 73.0% and the new LHTB-2 12-solved long-horizon row to the already elite stack (GDPval 1769, TB 2.1 88.2%); capped by TB 3.0 28.3% and the AutomationBench version conflict (48.2 official vs 62.2 AA).
- **Reasoning: 80/100.** Unchanged — GPQA ~91%, HLE w/ tools 62.5%, MLCR 48.3%, low hallucination 29.6%; capped by CritPt 19.1% and AA-HLE 42.3%. No new reasoning rows this pass.
- **Context window: 84/100.** Unchanged — 1M native confirmed official + LCR 79.7%; no max-window probe.
- **Multimodal: 15/100.** Unchanged — text-first; floor.
- **Coding: 85/100.** Unchanged — official card confirms all first-pass coding rows and adds SWE-Marathon 42.5%, NL2Repo 58.0%, ProgramBench 19.0%; net zero when the weak rows balance the confirmations.
- **Cost efficiency: 86/100.** +1 — pricing now verified (was provisional at 85): $0.055/$5 OpenRouter headline plus open weights; capped because output price is standard-flagship, not cheap.
- **Overall Score: 71/100.** Half-up mean of the five quality dims (89+80+84+15+85)/5 = 70.6 → 71 (was 70). Best fit: open-weight agentic coding flagship for text pipelines, now with verified state-of-the-art cyber/vuln-discovery credentials; note the license is custom, not MIT.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (official HF card `zai-org/GLM-5.3` — 753B params, custom `glm-5.3` license, released Aug 18 2026 via OpenRouter, full official benchmark/footnote methodology incl. ExploitGym, ExploitBench, ALE-CLI, SWE-Marathon, PostTrainBench, ProgramBench; HF eval-results incl. LHTB-2 12 solved Oct 2026; OpenRouter `z-ai/glm-5.3` — $0.055/$5, 1M context; OpenCode Zen `/zen/v1/models` listing 2026-10-13 — `glm-5.3` listed). Conflicts flagged: AutomationBench 48.2 official v1.0.6 vs 62.2 first-pass AA row. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
