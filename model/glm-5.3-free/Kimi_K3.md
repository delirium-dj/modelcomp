# GLM 5.3 (Free) — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`opencode/glm-5.3-free`; open weights `zai-org/GLM-5.3`, custom GLM-5.3 License)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (OpenCode Zen promotional tier of the GLM-5.3 flagship)
- **Short description:** Free OpenCode Zen serving of Z.AI's flagship open-weight GLM-5.3 MoE (744B / 40B active) — the model that holds open-source SOTA on Terminal-Bench 3.0 and CyberGym vulnerability discovery. Free tier listed at 204K context in the repo catalog; paid Zen deployment and vendor evals run the model at up to 1M.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions); paid Zen `opencode/glm-5.3` at $1.40/$4.40; Z.AI API `glm-5.3`; open weights HF `zai-org/GLM-5.3`.
- **Release / knowledge:** GLM-5.3 API 2026-08-14; open weights 2026-08-28 under custom GLM-5.3 License after a two-week cyber-safety hold (z.ai blog; HF; llms.blog). Cutoff not verified.
- **IDs:** `opencode/glm-5.3-free` (this Zen free listing); `glm-5.3` (Z.AI API); `zai-org/GLM-5.3` (weights).
- **Context window:** 1M native class (vendor eval footnotes at 1M; pi.dev lists Zen paid deployment at 1,000,000); **Zen free tier listed at 204K** (promotional cap, repo catalog).
- **Modalities:** text in/out (Zen listing; flagship is text-only — vision sits in GLM-5.3-Flash); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0 on the Zen free tier (rate limits apply); paid API $1.40 in / $4.40 out per 1M (felloai 2026-09-29); self-host possible from open weights.
- **Architecture:** open-weight MoE (glm_moe_dsa), ~744B total / 40B active (HF metadata 753B); same base as GLM-5.2, gains from post-training (HF card).

### Raw benchmarks found (flagship GLM-5.3 — this entry is a serving tier of the same weights)

Agent / tool use:

- Terminal-Bench 2.1: **88.2**; Terminal-Bench 3.0: **28.3** (open-source SOTA) (HF card)
- CyberGym: **84.5** (vendor SOTA, 1,507 tasks); ExploitGym **105/130 (2h/6h)**; ExploitBench **54.4** (HF card)
- Toolathlon Verified: **73.0**; AutomationBench v1.0.6: **48.2**; ALE-CLI: **28.5**; MCP-Universe: **53.3**; APEX-Agents: **78.6** (HF card / z.ai blog)
- GDPval-AA v2: **1769 Elo** — table-best in vendor comparison (Artificial Analysis via HF card)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE w/ tools: **62.5** (vendor) (HF card)
- Artificial Analysis Intelligence Index: **~44.8**; BenchLM **65.4/100, #29 of 209** (benchlm.ai)
- GPQA / HLE (tools-off) / MMLU-Pro: no freshly verified public score found this pass

Coding:

- SWE-bench Verified: **80.2**; SWE-bench Pro: **51.6**; SWE-Perf-Java: **66.2** (#1 open) (z.ai blog)
- FrontierSWE: **78.1**; DeepSWE v1.1: **66.9**; NL2Repo: **58.0**; SWE-Marathon: **42.5**; PostTrainBench: **39.8** (HF card)
- Z.ai Code Bench v1.0: **27.1** max effort, +50% over GLM-5.2 (z.ai blog)

Long context:

- Vendor 1M-window evals (FrontierSWE/SWE-Marathon/NL2Repo/ALE-CLI at 1M) (HF footnotes); MRCR/RULER: no verified public score found. Free tier itself capped at 204K.

Multimodal:

- Text-only on this tier (and in the flagship itself); Design Arena Website ~1341 Elo is text-driven web design.

### Normalized scores (1–100)

- **Tool use: 88/100.** Same elite stack as the flagship: TB 2.1 88.2, CyberGym 84.5, Toolathlon 73.0, GDPval 1769; capped by TB 3.0 28.3.
- **Reasoning: 82/100.** AA Index ~44.8 (open-weights #2); HLE w/ tools 62.5; tools-off reasoning rows not freshly verified.
- **Context window: 70/100.** The free tier's 204K cap scores this entry at the 200K band — the 1M headroom requires the paid tier.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 85/100.** SWE-bench Verified 80.2, FrontierSWE 78.1, DeepSWE 66.9, +50% vendor Code Bench gain over GLM-5.2; capped by SWE-bench Pro 51.6.
- **Cost efficiency: 100/100.** $0 promotional Zen tier (rate-limited, promo terms can end) over a $1.40/$4.40 model; fallback self-hosting via open weights.
- **Overall Score: 68/100.** Mean of the five quality dims (88+82+70+15+85)/5 = 68.0 → 68. Best fit: the best free-tier agentic coding option in this cohort when 204K text-only suffices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (z.ai/blog/glm-5.3, HF zai-org/GLM-5.3 card, felloai 2026-09-29 pricing, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: replaced benchlm-only flagship rows with vendor-official table (TB 2.1 88.2 confirmed; TB 3.0 28.3, CyberGym 84.5, GDPval-AA v2 1769 confirmed); added verified 2026-08-14/08-28 release split and custom GLM-5.3 License; Context rescored 84 → 70 (free tier is a 204K-capped serving; 1M needs paid); Cost 98 → 100 (band: free tier = 100, caveats noted); Overall 71 → 68.
- Future sources: add a new file next to this one using the same headings.
