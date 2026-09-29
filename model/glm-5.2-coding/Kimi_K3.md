# GLM 5.2 Coding — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM 5.2 Coding (`opencode/glm-5.2-coding`; base weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Coding-plan serving of Z.AI's GLM-5.2 open-weights reasoning MoE (released 2026-06-16, MIT; 744B-class / 40B active) on OpenCode Zen. Base GLM-5.2 was the strongest open-source coding model at launch (TB 2.1 81.0, SWE-bench Pro 62.1) with a "truly usable" 1M context; this Zen coding endpoint is listed at 128K total context.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions); base model via Z.AI API `glm-5.2`, ~30 OpenRouter providers, and MIT open weights `zai-org/GLM-5.2`.
- **Release / knowledge:** GLM-5.2 released 2026-06-16 (aireleasetracker); coding-plan availability preceded the public launch (docs.z.ai). Knowledge cutoff not verified.
- **IDs:** `opencode/glm-5.2-coding` (Zen coding plan; no separate Free ID on this deployment); `glm-5.2` (Z.AI API); `zai-org/GLM-5.2` (weights).
- **Context window:** 1M native / 128K max output for the base model (docs.z.ai); **Zen coding deployment listed at 128K total** (repo catalog).
- **Modalities:** text in/out (Zen listing and docs.z.ai); reasoning yes (max effort strongest); tool calls; JSON mode; MCP; context caching.
- **Pricing (as of 2026-09-29):** coding-plan subscription tier (Zen "standard pricing" per catalog); base hosted ~$1.40/$4.40 per 1M, third-party floor ~$0.75/$2.40 (llm-stats); MIT self-host option.
- **Architecture:** open-weight MoE (glm_moe_dsa), ~744B total / 40B active, MIT.

### Raw benchmarks found (base GLM-5.2, vendor-official — this entry is a serving of those weights)

Agent / tool use:

- Terminal-Bench 2.1: **81.0** (vendor) (docs.z.ai / HF GLM-5.3 table)
- Terminal-Bench 3.0: **4.6** (HF table)
- CyberGym: **77.2**; ExploitBench: **24.4**; ExploitGym: **29/39 (2h/6h)** (HF table)
- Toolathlon Verified: **59.9**; AutomationBench v1.0.6: **26.2**; ALE-CLI: **23.8**; GDPval-AA v2: **1508 Elo** (HF table / AA)
- τ²-Bench / MCP Atlas / LMArena Agent (prior benchleader rows): not reverified in this pass

Reasoning / knowledge:

- HLE w/ tools: **54.7** (vendor) (HF table)
- BenchLM overall: **62.62/100, #40 of 209** (benchlm.ai)
- GPQA / AIME / HMMT / LCR (prior rows): not reverified this pass

Coding:

- SWE-bench Pro: **62.1** (vendor; ahead of GPT-5.5 at launch) (docs.z.ai / apidog)
- FrontierSWE: **67.5**; PostTrainBench: **31.7**; SWE-Marathon: **19.4** — top open-source on all three at launch (docs.z.ai / HF table)
- DeepSWE v1.1: **46.2**; NL2Repo: **48.9**; ProgramBench: **9.5** (HF table)
- SWE-bench Verified (prior 78.7 row): not reverified this pass

Long context:

- Base model: vendor-certified 1M "lossless" context for long-horizon agents (docs.z.ai) — but **this Zen coding endpoint caps at 128K**, so the 1M strength does not apply here. MRCR/RULER: no verified public score found.

Multimodal:

- Text-only (Zen listing; docs.z.ai text in / text out).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 81.0 + CyberGym 77.2 + Toolathlon 59.9 from the base model; capped by TB 3.0 4.6 and AutomationBench 26.2.
- **Reasoning: 72/100.** AA Index ~33–34 band; HLE w/ tools 54.7; math rows not freshly verified.
- **Context window: 62/100.** Scored on this deployment: 128K total on Zen coding plan — well below the base model's 1M and under the 200K band anchor.
- **Multimodal: 15/100.** Text-only deployment — floor.
- **Coding: 82/100.** SWE-bench Pro 62.1, TB 2.1 81.0, FrontierSWE 67.5 on the underlying weights; capped by DeepSWE 46.2.
- **Cost efficiency: 85/100.** $1.40/$4.40-class hosted pricing via coding plan, with MIT self-host fallback; not free on this Zen deployment.
- **Overall Score: 62.2/100.** Mean of the five quality dims (80+72+62+15+82)/5 = 62.2 → 62. Best fit: plan-bundled agentic coding where 128K context suffices; need 1M → use the full GLM-5.2 endpoint instead.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (docs.z.ai/guides/llm/glm-5.2, HF zai-org/GLM-5.3 comparison table, llm-stats, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: base release corrected to 2026-06-16; TB 2.1 set to vendor 81.0 and SWE-bench Pro 62.1 confirmed; dropped non-reverified benchleader rows (τ², MCP Atlas, LMArena, GPQA stack); Context scored on the actual 128K Zen coding deployment (82 → 62); Cost 80 → 85; Overall 69 → 63.
- Future sources: add a new file next to this one using the same headings.
